import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js'
import type { Quality } from '../systems/Settings'

/**
 * Grade pass runs after bloom (and SSAO on high). It is the only place that
 * applies exposure, so the lighting stays linear until the look is finished.
 * Motion blur is a directional tap along the camera's turn, not a velocity buffer.
 */
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uExposure: { value: 0.62 },
    uDamage: { value: 0 },
    uFade: { value: 0 },
    uGrain: { value: 0.012 },
    uChroma: { value: 0.12 },
    uVignette: { value: 0.72 },
    uBlur: { value: new THREE.Vector2() },
    uTime: { value: 0 },
    uLow: { value: 0 },
    uFlash: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uExposure;
    uniform float uDamage;
    uniform float uFade;
    uniform float uGrain;
    uniform float uChroma;
    uniform float uVignette;
    uniform vec2 uBlur;
    uniform float uTime;
    uniform float uLow;
    uniform float uFlash;
    varying vec2 vUv;

    vec3 sampleBlur(vec2 uv) {
      vec3 c = texture2D(tDiffuse, uv).rgb * 0.4;
      c += texture2D(tDiffuse, uv + uBlur).rgb * 0.2;
      c += texture2D(tDiffuse, uv - uBlur).rgb * 0.2;
      c += texture2D(tDiffuse, uv + uBlur * 2.0).rgb * 0.1;
      c += texture2D(tDiffuse, uv - uBlur * 2.0).rgb * 0.1;
      return c;
    }

    vec3 aces(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    void main() {
      float ab = uChroma * 0.0007;
      vec2 o = vec2(ab, 0.0);
      vec3 col;
      col.r = sampleBlur(vUv + o).r;
      col.g = sampleBlur(vUv).g;
      col.b = sampleBlur(vUv - o).b;
      col = max(col, vec3(0.0));
      col = col * uExposure + vec3(0.018);
      col = aces(col);
      float n = fract(sin(dot(vUv * vec2(uTime * 13.0, 17.0), vec2(12.9898, 78.233))) * 43758.5453);
      col += (n - 0.5) * uGrain;
      vec2 p = (vUv - 0.5) * vec2(1.15, 1.25);
      float vig = smoothstep(0.25, 1.15, length(p));
      col *= mix(1.0, 0.22, vig * uVignette);
      col = mix(col, vec3(0.45, 0.02, 0.015), uDamage * vig);
      float luma = dot(col, vec3(0.333));
      col = mix(col, vec3(luma), uLow * 0.65);
      col += vec3(uFlash);
      col = mix(col, vec3(0.0), clamp(uFade, 0.0, 1.0));
      gl_FragColor = vec4(col, 1.0);
    }
  `,
}

export class PostFX {
  composer: EffectComposer
  private grade: ShaderPass
  private bloom: UnrealBloomPass | null = null
  private ssao: SSAOPass | null = null

  get uniforms(): typeof GradeShader.uniforms {
    return this.grade.uniforms as typeof GradeShader.uniforms
  }

  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    private camera: THREE.PerspectiveCamera,
  ) {
    this.renderer.toneMapping = THREE.NoToneMapping
    this.composer = new EffectComposer(renderer)
    this.grade = new ShaderPass(GradeShader)
    this.applyQuality('medium')
  }

  applyQuality(quality: Quality): void {
    const size = this.renderer.getSize(new THREE.Vector2())
    this.composer.dispose()
    this.composer = new EffectComposer(this.renderer)
    this.ssao = null
    this.bloom = null
    if (quality === 'high') {
      try {
        const ssao = new SSAOPass(this.scene, this.camera, size.x, size.y, 12)
        ssao.kernelRadius = 8
        ssao.minDistance = 0.002
        ssao.maxDistance = 0.08
        this.ssao = ssao
        this.composer.addPass(ssao)
      } catch {
        this.composer.addPass(new RenderPass(this.scene, this.camera))
      }
    } else {
      this.composer.addPass(new RenderPass(this.scene, this.camera))
    }
    if (quality !== 'low') {
      this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), quality === 'high' ? 0.28 : 0.18, 0.45, 0.86)
      this.composer.addPass(this.bloom)
    }
    this.grade = new ShaderPass(GradeShader)
    this.composer.addPass(this.grade)
    this.composer.addPass(new OutputPass())
    this.setSize(size.x, size.y)
  }

  setSize(w: number, h: number): void {
    this.composer.setSize(w, h)
    this.ssao?.setSize(w, h)
    this.bloom?.setSize(w, h)
  }

  render(): void {
    this.composer.render()
  }

  dispose(): void {
    this.composer.dispose()
  }
}
