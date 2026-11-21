(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="170",du=0,il=1,fu=2,Xc=1,qc=2,Tn=3,Yn=0,He=1,me=2,ze=0,Gi=1,_r=2,sl=3,rl=4,Yc=5,An=100,pu=101,mu=102,gu=103,vu=104,Ro=200,xu=201,_u=202,yu=203,Co=204,Po=205,Kc=206,Mu=207,$c=208,bu=209,Su=210,wu=211,Eu=212,Tu=213,Au=214,Do=0,Lo=1,ko=2,qi=3,Io=4,Uo=5,No=6,Fo=7,jc=0,Ru=1,Cu=2,Dn=0,Zc=1,Jc=2,Qc=3,th=4,Pu=5,eh=6,nh=7,ih=300,Yi=301,Ki=302,Oo=303,zo=304,Er=306,hi=1e3,Xn=1001,Bo=1002,Be=1003,Du=1004,Cs=1005,mn=1006,Ur=1007,li=1008,kn=1009,sh=1010,rh=1011,Ss=1012,Ta=1013,ui=1014,cn=1015,un=1016,Aa=1017,Ra=1018,di=1020,oh=35902,ah=1021,lh=1022,hn=1023,ch=1024,hh=1025,Vi=1026,fi=1027,Tr=1028,Ca=1029,uh=1030,Pa=1031,Da=1033,dr=33776,fr=33777,pr=33778,mr=33779,Go=35840,Vo=35841,Ho=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Ko=37808,$o=37809,jo=37810,Zo=37811,Jo=37812,Qo=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,oa=37820,aa=37821,gr=36492,la=36494,ca=36495,dh=36283,ha=36284,ua=36285,da=36286,Lu=3200,ku=3201,La=0,Iu=1,Rn="",ye="srgb",Ji="srgb-linear",Ar="linear",se="srgb",xi=7680,ol=519,Uu=512,Nu=513,Fu=514,fh=515,Ou=516,zu=517,Bu=518,Gu=519,al=35044,ll="300 es",Cn=2e3,yr=2001;class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const vs=Math.PI/180,$i=180/Math.PI;function ts(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function ka(i,t){return(i%t+t)%t}function Vu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Hu(i,t,e){return i!==t?(e-i)/(t-i):0}function xs(i,t,e){return(1-e)*i+e*t}function Wu(i,t,e,n){return xs(i,t,1-Math.exp(-e*n))}function Xu(i,t=1){return t-Math.abs(ka(i,t*2)-t)}function qu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ku(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $u(i,t){return i+Math.random()*(t-i)}function ju(i){return i*(.5-Math.random())}function Zu(i){i!==void 0&&(cl=i);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ju(i){return i*vs}function Qu(i){return i*$i}function td(i){return(i&i-1)===0&&i!==0}function ed(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function id(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),f=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*f,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*f,a*c);break;case"ZYZ":i.set(l*f,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const sd={DEG2RAD:vs,RAD2DEG:$i,generateUUID:ts,clamp:Te,euclideanModulo:ka,mapLinear:Vu,inverseLerp:Hu,lerp:xs,damp:Wu,pingpong:Xu,smoothstep:qu,smootherstep:Yu,randInt:Ku,randFloat:$u,randFloatSpread:ju,seededRandom:Zu,degToRad:Ju,radToDeg:Qu,isPowerOfTwo:td,ceilPowerOfTwo:ed,floorPowerOfTwo:nd,setQuaternionFromProperEuler:id,normalize:Fe,denormalize:Ni};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=s[0],m=s[3],g=s[6],w=s[1],A=s[4],y=s[7],E=s[2],P=s[5],R=s[8];return r[0]=o*v+a*w+l*E,r[3]=o*m+a*A+l*P,r[6]=o*g+a*y+l*R,r[1]=c*v+h*w+u*E,r[4]=c*m+h*A+u*P,r[7]=c*g+h*y+u*R,r[2]=d*v+p*w+f*E,r[5]=d*m+p*A+f*P,r[8]=d*g+p*y+f*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,f=e*u+n*d+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/f;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new zt;function ph(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rd(){const i=Mr("canvas");return i.style.display="block",i}const hl={};function ms(i){i in hl||(hl[i]=!0,console.warn(i))}function od(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ad(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ld(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rn?Ar:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ul=[.64,.33,.3,.6,.15,.06],dl=[.2126,.7152,.0722],fl=[.3127,.329],pl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Ji]:{primaries:ul,whitePoint:fl,transfer:Ar,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:dl,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:ul,whitePoint:fl,transfer:se,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:dl,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});let _i;class cd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Mr("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hd=0;class mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fr(s[o].image)):r.push(Fr(s[o]))}else r=Fr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ud=0;class Ie extends Qi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Xn,s=Xn,r=mn,o=li,a=hn,l=kn,c=Ie.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ts(),this.name="",this.source=new mh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hi:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hi:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=ih;Ie.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,y=(p+1)/2,E=(g+1)/2,P=(h+d)/4,R=(u+v)/4,x=(f+m)/4;return A>y&&A>E?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=P/n,r=R/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=P/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=x/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-f)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends Qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ie(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends dd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gh extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fd extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],f=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==f){let m=1-a;const g=l*d+c*p+h*f+u*v,w=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const E=Math.sqrt(A),P=Math.atan2(E,g*w);m=Math.sin(m*P)/E,a=Math.sin(a*P)/E}const y=a*w;if(l=l*m+d*y,c=c*m+p*y,h=h*m+f*y,u=u*m+v*y,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+h*u+l*p-c*d,t[e+1]=l*f+h*d+c*u-a*p,t[e+2]=c*f+h*p+a*d-l*u,t[e+3]=h*f-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new k,gl=new $n;class mi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Ds.subVectors(this.max,rs),yi.subVectors(t.a,rs),Mi.subVectors(t.b,rs),bi.subVectors(t.c,rs),Nn.subVectors(Mi,yi),Fn.subVectors(bi,Mi),Zn.subVectors(yi,bi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Zn.y,Zn.x,0];return!zr(e,yi,Mi,bi,Ds)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,yi,Mi,bi,Ds))?!1:(Ls.crossVectors(Nn,Fn),e=[Ls.x,Ls.y,Ls.z],zr(e,yi,Mi,bi,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new k,new k,new k,new k,new k,new k,new k,new k],sn=new k,Ps=new mi,yi=new k,Mi=new k,bi=new k,Nn=new k,Fn=new k,Zn=new k,rs=new k,Ds=new k,Ls=new k,Jn=new k;function zr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);const a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const pd=new mi,os=new k,Br=new k;class es{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(Br)),this.expandByPoint(os.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new k,Gr=new k,ks=new k,On=new k,Vr=new k,Is=new k,Hr=new k;class vh{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gr.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Gr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ks),a=On.dot(this.direction),l=-On.dot(ks),c=On.lengthSq(),h=Math.abs(1-o*o);let u,d,p,f;if(h>0)if(u=o*l-a,d=o*a-l,f=r*h,u>=0)if(d>=-f)if(d<=f){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gr).addScaledVector(ks,d),p}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){Vr.subVectors(e,t),Is.subVectors(n,t),Hr.crossVectors(Vr,Is);let o=this.direction.dot(Hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(Is.crossVectors(On,Is));if(l<0)return null;const c=a*this.direction.dot(Vr.cross(On));if(c<0||l+c>o)return null;const h=-a*On.dot(Hr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,f,v,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,f,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,f,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),o=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,f=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+f*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=f+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,f=c*h,v=c*u;e[0]=d+v*a,e[4]=f*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-f,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,f=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,f=a*h,v=a*u;e[0]=l*h,e[4]=f*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-f,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,f=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=f*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+f,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,f=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(md,t,gd)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),zn.crossVectors(n,qe),zn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),zn.crossVectors(n,qe)),zn.normalize(),Us.crossVectors(qe,zn),s[0]=zn.x,s[4]=Us.x,s[8]=qe.x,s[1]=zn.y,s[5]=Us.y,s[9]=qe.y,s[2]=zn.z,s[6]=Us.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],g=n[14],w=n[3],A=n[7],y=n[11],E=n[15],P=s[0],R=s[4],x=s[8],_=s[12],S=s[1],M=s[5],D=s[9],b=s[13],U=s[2],O=s[6],I=s[10],V=s[14],N=s[3],$=s[7],J=s[11],at=s[15];return r[0]=o*P+a*S+l*U+c*N,r[4]=o*R+a*M+l*O+c*$,r[8]=o*x+a*D+l*I+c*J,r[12]=o*_+a*b+l*V+c*at,r[1]=h*P+u*S+d*U+p*N,r[5]=h*R+u*M+d*O+p*$,r[9]=h*x+u*D+d*I+p*J,r[13]=h*_+u*b+d*V+p*at,r[2]=f*P+v*S+m*U+g*N,r[6]=f*R+v*M+m*O+g*$,r[10]=f*x+v*D+m*I+g*J,r[14]=f*_+v*b+m*V+g*at,r[3]=w*P+A*S+y*U+E*N,r[7]=w*R+A*M+y*O+E*$,r[11]=w*x+A*D+y*I+E*J,r[15]=w*_+A*b+y*V+E*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],f=t[3],v=t[7],m=t[11],g=t[15];return f*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],v=t[13],m=t[14],g=t[15],w=u*m*c-v*d*c+v*l*p-a*m*p-u*l*g+a*d*g,A=f*d*c-h*m*c-f*l*p+o*m*p+h*l*g-o*d*g,y=h*v*c-f*u*c+f*a*p-o*v*p-h*a*g+o*u*g,E=f*u*l-h*v*l-f*a*d+o*v*d+h*a*m-o*u*m,P=e*w+n*A+s*y+r*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=w*R,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*g-n*d*g)*R,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*g+n*l*g)*R,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*R,t[4]=A*R,t[5]=(h*m*r-f*d*r+f*s*p-e*m*p-h*s*g+e*d*g)*R,t[6]=(f*l*r-o*m*r-f*s*c+e*m*c+o*s*g-e*l*g)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*R,t[8]=y*R,t[9]=(f*u*r-h*v*r-f*n*p+e*v*p+h*n*g-e*u*g)*R,t[10]=(o*v*r-f*a*r+f*n*c-e*v*c-o*n*g+e*a*g)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*R,t[12]=E*R,t[13]=(h*v*s-f*u*s+f*n*d-e*v*d-h*n*m+e*u*m)*R,t[14]=(f*a*s-o*v*s-f*n*l+e*v*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,f=r*u,v=o*h,m=o*u,g=a*u,w=l*c,A=l*h,y=l*u,E=n.x,P=n.y,R=n.z;return s[0]=(1-(v+g))*E,s[1]=(p+y)*E,s[2]=(f-A)*E,s[3]=0,s[4]=(p-y)*P,s[5]=(1-(d+g))*P,s[6]=(m+w)*P,s[7]=0,s[8]=(f+A)*R,s[9]=(m-w)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Si.set(s[0],s[1],s[2]).length();const o=Si.set(s[4],s[5],s[6]).length(),a=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/r,h=1/o,u=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Cn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,f;if(a===Cn)p=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===yr)p=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Cn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let f,v;if(a===Cn)f=(o+r)*u,v=-2*u;else if(a===yr)f=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new k,rn=new jt,md=new k(0,0,0),gd=new k(1,1,1),zn=new k,Us=new k,qe=new k,vl=new jt,xl=new $n;class tn{constructor(t=0,e=0,n=0,s=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vd=0;const _l=new k,wi=new $n,Sn=new jt,Ns=new k,as=new k,xd=new k,_d=new $n,yl=new k(1,0,0),Ml=new k(0,1,0),bl=new k(0,0,1),Sl={type:"added"},yd={type:"removed"},Ei={type:"childadded",child:null},Wr={type:"childremoved",child:null};class _e extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new k,e=new tn,n=new $n,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new zt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(yl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(as,Ns,this.up):Sn.lookAt(Ns,as,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(Sn),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yd),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new k(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new k,wn=new k,Xr=new k,En=new k,Ti=new k,Ai=new k,wl=new k,qr=new k,Yr=new k,Kr=new k,$r=new re,jr=new re,Zr=new re;class an{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),wn.subVectors(n,e),Xr.subVectors(t,e);const o=on.dot(on),a=on.dot(wn),l=on.dot(Xr),c=wn.dot(wn),h=wn.dot(Xr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,f=(o*h-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return $r.setScalar(0),jr.setScalar(0),Zr.setScalar(0),$r.fromBufferAttribute(t,e),jr.fromBufferAttribute(t,n),Zr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($r,r.x),o.addScaledVector(jr,r.y),o.addScaledVector(Zr,r.z),o}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),wn.subVectors(t,e),on.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),on.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ti.subVectors(s,n),Ai.subVectors(r,n),qr.subVectors(t,n);const l=Ti.dot(qr),c=Ai.dot(qr);if(l<=0&&c<=0)return e.copy(n);Yr.subVectors(t,s);const h=Ti.dot(Yr),u=Ai.dot(Yr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ti,o);Kr.subVectors(t,r);const p=Ti.dot(Kr),f=Ai.dot(Kr);if(f>=0&&p<=f)return e.copy(r);const v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Ai,a);const m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return wl.subVectors(r,s),a=(u-h)/(u-h+(p-f)),e.copy(s).addScaledVector(wl,a);const g=1/(m+v+d);return o=v*g,a=d*g,e.copy(n).addScaledVector(Ti,o).addScaledVector(Ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=ka(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Jr(o,r,t+1/3),this.g=Jr(o,r,t),this.b=Jr(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return $t.fromWorkingColorSpace(De.copy(this),t),Math.round(Te(De.r*255,0,255))*65536+Math.round(Te(De.g*255,0,255))*256+Math.round(Te(De.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=ye){$t.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Fs);const n=xs(Bn.h,Fs.h,e),s=xs(Bn.s,Fs.s,e),r=xs(Bn.l,Fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Gt;Gt.NAMES=_h;let Md=0;class vn extends Qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ts(),this.name="",this.blending=Gi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Po,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gn extends vn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new k,Os=new ot;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),t}}class yh extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mh extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bd=0;const Qe=new jt,Qr=new _e,Ri=new k,Ye=new mi,ls=new mi,we=new k;class Ae extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ph(t)?Mh:yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ye.min,ls.min),Ye.expandByPoint(we),we.addVectors(Ye.max,ls.max),Ye.expandByPoint(we)):(Ye.expandByPoint(ls.min),Ye.expandByPoint(ls.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(Ri.fromBufferAttribute(t,c),we.add(Ri)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new k,l[x]=new k;const c=new k,h=new k,u=new k,d=new ot,p=new ot,f=new ot,v=new k,m=new k;function g(x,_,S){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,x),p.fromBufferAttribute(r,_),f.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),f.sub(d);const M=1/(p.x*f.y-f.x*p.y);isFinite(M)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(M),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(M),a[x].add(v),a[_].add(v),a[S].add(v),l[x].add(m),l[_].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let x=0,_=w.length;x<_;++x){const S=w[x],M=S.start,D=S.count;for(let b=M,U=M+D;b<U;b+=3)g(t.getX(b+0),t.getX(b+1),t.getX(b+2))}const A=new k,y=new k,E=new k,P=new k;function R(x){E.fromBufferAttribute(s,x),P.copy(E);const _=a[x];A.copy(_),A.sub(E.multiplyScalar(E.dot(_))).normalize(),y.crossVectors(P,_);const M=y.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,M)}for(let x=0,_=w.length;x<_;++x){const S=w[x],M=S.start,D=S.count;for(let b=M,U=M+D;b<U;b+=3)R(t.getX(b+0)),R(t.getX(b+1)),R(t.getX(b+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){const f=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,f=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new jt,Qn=new vh,zs=new es,Tl=new k,Bs=new k,Gs=new k,Vs=new k,to=new k,Hs=new k,Al=new k,Ws=new k;class nt extends _e{constructor(t=new Ae,e=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(to.fromBufferAttribute(u,t),o?Hs.addScaledVector(to,h):Hs.addScaledVector(to.sub(e),h))}e.add(Hs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(zs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(zs,Tl)===null||Qn.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(El.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(El),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,v=d.length;f<v;f++){const m=d[f],g=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,E=A;y<E;y+=3){const P=a.getX(y),R=a.getX(y+1),x=a.getX(y+2);s=Xs(this,g,t,n,c,h,u,P,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=f,g=v;m<g;m+=3){const w=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=Xs(this,o,t,n,c,h,u,w,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,v=d.length;f<v;f++){const m=d[f],g=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,E=A;y<E;y+=3){const P=y,R=y+1,x=y+2;s=Xs(this,g,t,n,c,h,u,P,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=f,g=v;m<g;m+=3){const w=m,A=m+1,y=m+2;s=Xs(this,o,t,n,c,h,u,w,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Sd(i,t,e,n,s,r,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yn,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:i}}function Xs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Bs),i.getVertexPosition(l,Gs),i.getVertexPosition(c,Vs);const h=Sd(i,t,e,n,Bs,Gs,Vs,Al);if(h){const u=new k;an.getBarycoord(Al,Bs,Gs,Vs,u),s&&(h.uv=an.getInterpolatedAttribute(s,a,l,c,u,new ot)),r&&(h.uv1=an.getInterpolatedAttribute(r,a,l,c,u,new ot)),o&&(h.normal=an.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};an.getNormal(Bs,Gs,Vs,d.normal),h.face=d,h.barycoord=u}return h}class Ht extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,s,o,2),f("x","z","y",1,-1,t,n,-e,s,o,3),f("x","y","z",1,-1,t,e,n,s,r,4),f("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function f(v,m,g,w,A,y,E,P,R,x,_){const S=y/R,M=E/x,D=y/2,b=E/2,U=P/2,O=R+1,I=x+1;let V=0,N=0;const $=new k;for(let J=0;J<I;J++){const at=J*M-b;for(let Mt=0;Mt<O;Mt++){const Nt=Mt*S-D;$[v]=Nt*w,$[m]=at*A,$[g]=U,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[g]=P>0?1:-1,h.push($.x,$.y,$.z),u.push(Mt/R),u.push(1-J/x),V+=1}}for(let J=0;J<x;J++)for(let at=0;at<R;at++){const Mt=d+at+O*J,Nt=d+at+O*(J+1),K=d+(at+1)+O*(J+1),tt=d+(at+1)+O*J;l.push(Mt,Nt,tt),l.push(Nt,K,tt),N+=6}a.addGroup(p,N,_),p+=N,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=ji(i[e]);for(const s in n)t[s]=n[s]}return t}function wd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Pn={clone:ji,merge:Oe};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Me extends vn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sh extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new k,Rl=new ot,Cl=new ot;class Ve extends Sh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Rl,Cl),e.subVectors(Cl,Rl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Pi=1;class Ad extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(Ci,Pi,t,e);s.layers=this.layers,this.add(s);const r=new Ve(Ci,Pi,t,e);r.layers=this.layers,this.add(r);const o=new Ve(Ci,Pi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(Ci,Pi,t,e);a.layers=this.layers,this.add(a);const l=new Ve(Ci,Pi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(Ci,Pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class wh extends Ie{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rd extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ht(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ze});r.uniforms.tEquirect.value=e;const o=new nt(s,r),a=e.minFilter;return e.minFilter===li&&(e.minFilter=mn),new Ad(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const eo=new k,Cd=new k,Pd=new zt;class si{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=eo.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pd.getNormalMatrix(t),s=this.coplanarPoint(eo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new es,qs=new k;class Ia{constructor(t=new si,e=new si,n=new si,s=new si,r=new si,o=new si){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],f=s[9],v=s[10],m=s[11],g=s[12],w=s[13],A=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-p,y-g).normalize(),n[1].setComponents(l+r,d+c,m+p,y+g).normalize(),n[2].setComponents(l+o,d+h,m+f,y+w).normalize(),n[3].setComponents(l-o,d-h,m-f,y-w).normalize(),n[4].setComponents(l-a,d-u,m-v,y-A).normalize(),e===Cn)n[5].setComponents(l+a,d+u,m+v,y+A).normalize();else if(e===yr)n[5].setComponents(a,u,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qs.x=s.normal.x>0?t.max.x:t.min.x,qs.y=s.normal.y>0?t.max.y:t.min.y,qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){const f=u[d],v=u[p];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class fe extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],f=[],v=[],m=[];for(let g=0;g<h;g++){const w=g*d-o;for(let A=0;A<c;A++){const y=A*u-r;f.push(y,-w,0),v.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<a;w++){const A=w+c*g,y=w+c*(g+1),E=w+1+c*(g+1),P=w+1+c*g;p.push(A,y,P),p.push(y,E,P)}this.setIndex(p),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Df=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,If=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Ld,alphahash_pars_fragment:kd,alphamap_fragment:Id,alphamap_pars_fragment:Ud,alphatest_fragment:Nd,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:zd,batching_pars_vertex:Bd,batching_vertex:Gd,begin_vertex:Vd,beginnormal_vertex:Hd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:jd,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:Qd,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:rf,displacementmap_vertex:of,emissivemap_fragment:af,emissivemap_pars_fragment:lf,colorspace_fragment:cf,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:df,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Ef,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:vf,fog_fragment:xf,fog_pars_fragment:_f,gradientmap_pars_fragment:yf,lightmap_pars_fragment:Mf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Sf,lights_pars_begin:wf,lights_toon_fragment:Tf,lights_toon_pars_fragment:Af,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Pf,lights_physical_pars_fragment:Df,lights_fragment_begin:Lf,lights_fragment_maps:kf,lights_fragment_end:If,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Of,map_fragment:zf,map_pars_fragment:Bf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:Kf,morphtarget_vertex:$f,normal_fragment_begin:jf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:Qf,normal_vertex:tp,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:rp,opaque_fragment:op,packing:ap,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:vp,skinbase_vertex:xp,skinning_pars_vertex:_p,skinning_vertex:yp,skinnormal_vertex:Mp,specularmap_fragment:bp,specularmap_pars_fragment:Sp,tonemapping_fragment:wp,tonemapping_pars_fragment:Ep,transmission_fragment:Tp,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Pp,worldpos_vertex:Dp,background_vert:Lp,background_frag:kp,backgroundCube_vert:Ip,backgroundCube_frag:Up,cube_vert:Np,cube_frag:Fp,depth_vert:Op,depth_frag:zp,distanceRGBA_vert:Bp,distanceRGBA_frag:Gp,equirect_vert:Vp,equirect_frag:Hp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:qp,meshbasic_frag:Yp,meshlambert_vert:Kp,meshlambert_frag:$p,meshmatcap_vert:jp,meshmatcap_frag:Zp,meshnormal_vert:Jp,meshnormal_frag:Qp,meshphong_vert:tm,meshphong_frag:em,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:sm,meshtoon_frag:rm,points_vert:om,points_frag:am,shadow_vert:lm,shadow_frag:cm,sprite_vert:hm,sprite_frag:um},dt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},pn={basic:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Oe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Oe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Oe([dt.points,dt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Oe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Oe([dt.common,dt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Oe([dt.sprite,dt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Oe([dt.common,dt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Oe([dt.lights,dt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};pn.physical={uniforms:Oe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ys={r:0,b:0,g:0},ei=new tn,dm=new jt;function fm(i,t,e,n,s,r,o){const a=new Gt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function f(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?e:t).get(A)),A}function v(w){let A=!1;const y=f(w);y===null?g(a,l):y&&y.isColor&&(g(y,1),A=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,A){const y=f(A);y&&(y.isCubeTexture||y.mapping===Er)?(h===void 0&&(h=new nt(new Ht(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:ji(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ei.copy(A.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(ei)),h.material.toneMapped=$t.getTransfer(y.colorSpace)!==se,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new nt(new fe(2,2),new Me({name:"BackgroundMaterial",uniforms:ji(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=$t.getTransfer(y.colorSpace)!==se,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,A){w.getRGB(Ys,bh(i)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),l=A,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,g(a,l)},render:v,addToRenderList:m}}function pm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,M,D,b,U){let O=!1;const I=u(b,D,M);r!==I&&(r=I,c(r.object)),O=p(S,b,D,U),O&&f(S,b,D,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(S,M,D,b),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,M,D){const b=D.wireframe===!0;let U=n[S.id];U===void 0&&(U={},n[S.id]=U);let O=U[M.id];O===void 0&&(O={},U[M.id]=O);let I=O[b];return I===void 0&&(I=d(l()),O[b]=I),I}function d(S){const M=[],D=[],b=[];for(let U=0;U<e;U++)M[U]=0,D[U]=0,b[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:D,attributeDivisors:b,object:S,attributes:{},index:null}}function p(S,M,D,b){const U=r.attributes,O=M.attributes;let I=0;const V=D.getAttributes();for(const N in V)if(V[N].location>=0){const J=U[N];let at=O[N];if(at===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),J===void 0||J.attribute!==at||at&&J.data!==at.data)return!0;I++}return r.attributesNum!==I||r.index!==b}function f(S,M,D,b){const U={},O=M.attributes;let I=0;const V=D.getAttributes();for(const N in V)if(V[N].location>=0){let J=O[N];J===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const at={};at.attribute=J,J&&J.data&&(at.data=J.data),U[N]=at,I++}r.attributes=U,r.attributesNum=I,r.index=b}function v(){const S=r.newAttributes;for(let M=0,D=S.length;M<D;M++)S[M]=0}function m(S){g(S,0)}function g(S,M){const D=r.newAttributes,b=r.enabledAttributes,U=r.attributeDivisors;D[S]=1,b[S]===0&&(i.enableVertexAttribArray(S),b[S]=1),U[S]!==M&&(i.vertexAttribDivisor(S,M),U[S]=M)}function w(){const S=r.newAttributes,M=r.enabledAttributes;for(let D=0,b=M.length;D<b;D++)M[D]!==S[D]&&(i.disableVertexAttribArray(D),M[D]=0)}function A(S,M,D,b,U,O,I){I===!0?i.vertexAttribIPointer(S,M,D,U,O):i.vertexAttribPointer(S,M,D,b,U,O)}function y(S,M,D,b){v();const U=b.attributes,O=D.getAttributes(),I=M.defaultAttributeValues;for(const V in O){const N=O[V];if(N.location>=0){let $=U[V];if($===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const J=$.normalized,at=$.itemSize,Mt=t.get($);if(Mt===void 0)continue;const Nt=Mt.buffer,K=Mt.type,tt=Mt.bytesPerElement,ut=K===i.INT||K===i.UNSIGNED_INT||$.gpuType===Ta;if($.isInterleavedBufferAttribute){const it=$.data,yt=it.stride,At=$.offset;if(it.isInstancedInterleavedBuffer){for(let Dt=0;Dt<N.locationSize;Dt++)g(N.location+Dt,it.meshPerAttribute);S.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Dt=0;Dt<N.locationSize;Dt++)m(N.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let Dt=0;Dt<N.locationSize;Dt++)A(N.location+Dt,at/N.locationSize,K,J,yt*tt,(At+at/N.locationSize*Dt)*tt,ut)}else{if($.isInstancedBufferAttribute){for(let it=0;it<N.locationSize;it++)g(N.location+it,$.meshPerAttribute);S.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let it=0;it<N.locationSize;it++)m(N.location+it);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let it=0;it<N.locationSize;it++)A(N.location+it,at/N.locationSize,K,J,at*tt,at/N.locationSize*it*tt,ut)}}else if(I!==void 0){const J=I[V];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(N.location,J);break;case 3:i.vertexAttrib3fv(N.location,J);break;case 4:i.vertexAttrib4fv(N.location,J);break;default:i.vertexAttrib1fv(N.location,J)}}}}w()}function E(){x();for(const S in n){const M=n[S];for(const D in M){const b=M[D];for(const U in b)h(b[U].object),delete b[U];delete M[D]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const M=n[S.id];for(const D in M){const b=M[D];for(const U in b)h(b[U].object),delete b[U];delete M[D]}delete n[S.id]}function R(S){for(const M in n){const D=n[M];if(D[S.id]===void 0)continue;const b=D[S.id];for(const U in b)h(b[U].object),delete b[U];delete D[S.id]}}function x(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:x,resetDefaultState:_,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function mm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let f=0;f<u;f++)p+=h[f];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)o(c[f],h[f],d[f]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let f=0;for(let v=0;v<u;v++)f+=h[v]*d[v];e.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==kn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==cn&&!x)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:E,maxSamples:P}}function vm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new si,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const f=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||f===null||f.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,A=w*4;let y=g.clippingState||null;l.value=y,y=h(f,d,A,p);for(let E=0;E!==A;++E)y[E]=e[E];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,f){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,f!==!0||m===null){const g=p+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,y=p;A!==v;++A,y+=4)o.copy(u[A]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function xm(i){let t=new WeakMap;function e(o,a){return a===Oo?o.mapping=Yi:a===zo&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oo||a===zo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ua extends Sh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Oi=4,Pl=[.125,.215,.35,.446,.526,.582],oi=20,no=new Ua,Dl=new Gt;let io=null,so=0,ro=0,oo=!1;const ri=(1+Math.sqrt(5))/2,Di=1/ri,Ll=[new k(-ri,Di,0),new k(ri,Di,0),new k(-Di,0,ri),new k(Di,0,ri),new k(0,ri,-Di),new k(0,ri,Di),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(io,so,ro),this._renderer.xr.enabled=oo,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:un,format:hn,colorSpace:Ji,depthBuffer:!1},s=Il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(r)),this._blurMaterial=ym(r,t,e)}return s}_compileMaterial(t){const e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,n,s){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dl),h.toneMapping=Dn,h.autoClear=!1;const p=new gn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),f=new nt(new Ht,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Dl),v=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):w===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const A=this._cubeSize;Ks(s,w*A,g>2?A:0,A,A),h.setRenderTarget(s),v&&h.render(f,a),h.render(t,a)}f.geometry.dispose(),f.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Yi||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,no)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ll[(s-r-1)%Ll.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new nt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*oi-1),v=r/f,m=isFinite(r)?1+Math.floor(h*v):oi;m>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const g=[];let w=0;for(let R=0;R<oi;++R){const x=R/v,_=Math.exp(-x*x/2);g.push(_),R===0?w+=_:R<m&&(w+=2*_)}for(let R=0;R<g.length;R++)g[R]=g[R]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=f,d.mipInt.value=A-n;const y=this._sizeLods[s],E=3*y*(s>A-Oi?s-A+Oi:0),P=4*(this._cubeSize-y);Ks(e,E,P,3*y,2*y),l.setRenderTarget(e),l.render(u,no)}}function _m(i){const t=[],e=[],n=[];let s=i;const r=i-Oi+1+Pl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Oi?l=Pl[o-i+Oi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,f=6,v=3,m=2,g=1,w=new Float32Array(v*f*p),A=new Float32Array(m*f*p),y=new Float32Array(g*f*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,x=P>2?0:-1,_=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];w.set(_,v*f*P),A.set(d,m*f*P);const S=[P,P,P,P,P,P];y.set(S,g*f*P)}const E=new Ae;E.setAttribute("position",new We(w,v)),E.setAttribute("uv",new We(A,m)),E.setAttribute("faceIndex",new We(y,g)),t.push(E),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Il(i,t,e){const n=new Ze(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ym(i,t,e){const n=new Float32Array(oi),s=new k(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Ul(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Nl(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oo||l===zo,h=l===Yi||l===Ki;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new kl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new kl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const f in d.attributes)t.remove(d.attributes[f]);for(const f in d.morphAttributes){const v=d.morphAttributes[f];for(let m=0,g=v.length;m<g;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const f in p){const v=p[f];for(let m=0,g=v.length;m<g;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,f=u.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let A=0,y=w.length;A<y;A+=3){const E=w[A+0],P=w[A+1],R=w[A+2];d.push(E,P,P,R,R,E)}}else if(f!==void 0){const w=f.array;v=f.version;for(let A=0,y=w.length/3-1;A<y;A+=3){const E=A+0,P=A+1,R=A+2;d.push(E,P,P,R,R,E)}}else return;const m=new(ph(d)?Mh:yh)(d,1);m.version=v;const g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function wm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,f){f!==0&&(i.drawElementsInstanced(n,p,r,d*o,f),e.update(p,n,f))}function h(d,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,f);let m=0;for(let g=0;g<f;g++)m+=p[g];e.update(m,n,1)}function u(d,p,f,v){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,p[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,f);let g=0;for(let w=0;w<f;w++)g+=p[w]*v[w];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Em(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tm(i,t,e){const n=new WeakMap,s=new re;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let E=a.attributes.position.count*y,P=1;E>t.maxTextureSize&&(P=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*P*4*u),x=new gh(R,E,P,u);x.type=cn,x.needsUpdate=!0;const _=y*4;for(let M=0;M<u;M++){const D=g[M],b=w[M],U=A[M],O=E*P*4*M;for(let I=0;I<D.count;I++){const V=I*_;f===!0&&(s.fromBufferAttribute(D,I),R[O+V+0]=s.x,R[O+V+1]=s.y,R[O+V+2]=s.z,R[O+V+3]=0),v===!0&&(s.fromBufferAttribute(b,I),R[O+V+4]=s.x,R[O+V+5]=s.y,R[O+V+6]=s.z,R[O+V+7]=0),m===!0&&(s.fromBufferAttribute(U,I),R[O+V+8]=s.x,R[O+V+9]=s.y,R[O+V+10]=s.z,R[O+V+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new ot(E,P)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];const v=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Am(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Fa extends Ie{constructor(t,e,n,s,r,o,a,l,c,h=Vi){if(h!==Vi&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=ui),n===void 0&&h===fi&&(n=di),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Th=new Ie,Fl=new Fa(1,1),Ah=new gh,Rh=new fd,Ch=new wh,Ol=[],zl=[],Bl=new Float32Array(16),Gl=new Float32Array(9),Vl=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=zl[t];e===void 0&&(e=new Int32Array(t),zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),Se(e,n)}}function km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;Gl.set(n),i.uniformMatrix3fv(this.addr,!1,Gl),Se(e,n)}}function Im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;Bl.set(n),i.uniformMatrix4fv(this.addr,!1,Bl),Se(e,n)}}function Um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=fh,r=Fl):r=Th,e.setTexture2D(t||r,s)}function Wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rh,s)}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ch,s)}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ah,s)}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Dm;case 35674:return Lm;case 35675:return km;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return zm;case 36294:return Bm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function Km(i,t){i.uniform1fv(this.addr,t)}function $m(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function jm(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Zm(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Jm(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qm(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function t0(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function e0(i,t){i.uniform1iv(this.addr,t)}function n0(i,t){i.uniform2iv(this.addr,t)}function i0(i,t){i.uniform3iv(this.addr,t)}function s0(i,t){i.uniform4iv(this.addr,t)}function r0(i,t){i.uniform1uiv(this.addr,t)}function o0(i,t){i.uniform2uiv(this.addr,t)}function a0(i,t){i.uniform3uiv(this.addr,t)}function l0(i,t){i.uniform4uiv(this.addr,t)}function c0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Th,r[o])}function h0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rh,r[o])}function u0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ch,r[o])}function d0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ah,r[o])}function f0(i){switch(i){case 5126:return Km;case 35664:return $m;case 35665:return jm;case 35666:return Zm;case 35674:return Jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}class p0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}}class m0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f0(e.type)}}class g0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function Hl(i,t){i.seq.push(t),i.map[t.id]=t}function v0(i,t,e){const n=i.name,s=n.length;for(ao.lastIndex=0;;){const r=ao.exec(n),o=ao.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hl(e,c===void 0?new p0(a,i,t):new m0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new g0(a),Hl(e,u)),e=u}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);v0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Wl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const x0=37297;let _0=0;function y0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Xl=new zt;function M0(i){$t._getMatrix(Xl,$t.workingColorSpace,i);const t=`mat3( ${Xl.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ar:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ql(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+y0(i.getShaderSource(t),o)}else return s}function b0(i,t){const e=M0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function S0(i,t){let e;switch(t){case Zc:e="Linear";break;case Jc:e="Reinhard";break;case Qc:e="Cineon";break;case th:e="ACESFilmic";break;case eh:e="AgX";break;case nh:e="Neutral";break;case Pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new k;function w0(){$t.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function T0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gs(i){return i!==""}function Yl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(i){return i.replace(R0,P0)}const C0=new Map;function P0(i,t){let e=Bt[t];if(e===void 0){const n=C0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fa(e)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(D0,L0)}function L0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function I0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Ki:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function N0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ru:t="ENVMAP_BLENDING_MIX";break;case Cu:t="ENVMAP_BLENDING_ADD";break}return t}function F0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function O0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=k0(e),c=I0(e),h=U0(e),u=N0(e),d=F0(e),p=E0(e),f=T0(r),v=s.createProgram();let m,g,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(gs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(gs).join(`
`),g.length>0&&(g+=`
`)):(m=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),g=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?S0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),w0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=fa(o),o=Yl(o,e),o=Kl(o,e),a=fa(a),a=Yl(a,e),a=Kl(a,e),o=$l(o),a=$l(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=w+m+o,y=w+g+a,E=Wl(s,s.VERTEX_SHADER,A),P=Wl(s,s.FRAGMENT_SHADER,y);s.attachShader(v,E),s.attachShader(v,P),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(M){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v).trim(),b=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(P).trim();let O=!0,I=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,P);else{const V=ql(s,E,"vertex"),N=ql(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+D+`
`+V+`
`+N)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(b===""||U==="")&&(I=!1);I&&(M.diagnostics={runnable:O,programLog:D,vertexShader:{log:b,prefix:m},fragmentShader:{log:U,prefix:g}})}s.deleteShader(E),s.deleteShader(P),x=new vr(s,v),_=A0(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let _;this.getAttributes=function(){return _===void 0&&R(this),_};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,x0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=P,this}let z0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new G0(t),e.set(t,n)),n}}class G0{constructor(t){this.id=z0++,this.code=t,this.usedTimes=0}}function V0(i,t,e,n,s,r,o){const a=new xh,l=new B0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,S,M,D,b){const U=D.fog,O=b.geometry,I=_.isMeshStandardMaterial?D.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||I),N=V&&V.mapping===Er?V.image.height:null,$=f[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,at=J!==void 0?J.length:0;let Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let Nt,K,tt,ut;if($){const ie=pn[$];Nt=ie.vertexShader,K=ie.fragmentShader}else Nt=_.vertexShader,K=_.fragmentShader,l.update(_),tt=l.getVertexShaderID(_),ut=l.getFragmentShaderID(_);const it=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),At=b.isInstancedMesh===!0,Dt=b.isBatchedMesh===!0,oe=!!_.map,qt=!!_.matcap,le=!!V,z=!!_.aoMap,Re=!!_.lightMap,Wt=!!_.bumpMap,Xt=!!_.normalMap,Ct=!!_.displacementMap,ne=!!_.emissiveMap,Rt=!!_.metalnessMap,L=!!_.roughnessMap,T=_.anisotropy>0,H=_.clearcoat>0,Z=_.dispersion>0,et=_.iridescence>0,j=_.sheen>0,bt=_.transmission>0,ct=T&&!!_.anisotropyMap,ft=H&&!!_.clearcoatMap,Vt=H&&!!_.clearcoatNormalMap,st=H&&!!_.clearcoatRoughnessMap,vt=et&&!!_.iridescenceMap,Pt=et&&!!_.iridescenceThicknessMap,Lt=j&&!!_.sheenColorMap,xt=j&&!!_.sheenRoughnessMap,Yt=!!_.specularMap,It=!!_.specularColorMap,Zt=!!_.specularIntensityMap,F=bt&&!!_.transmissionMap,lt=bt&&!!_.thicknessMap,Y=!!_.gradientMap,Q=!!_.alphaMap,gt=_.alphaTest>0,pt=!!_.alphaHash,Ft=!!_.extensions;let pe=Dn;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Ce={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:Nt,fragmentShader:K,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:ut,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&b._colorsTexture!==null,instancing:At,instancingColor:At&&b.instanceColor!==null,instancingMorph:At&&b.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ji,alphaToCoverage:!!_.alphaToCoverage,map:oe,matcap:qt,envMap:le,envMapMode:le&&V.mapping,envMapCubeUVHeight:N,aoMap:z,lightMap:Re,bumpMap:Wt,normalMap:Xt,displacementMap:d&&Ct,emissiveMap:ne,normalMapObjectSpace:Xt&&_.normalMapType===Iu,normalMapTangentSpace:Xt&&_.normalMapType===La,metalnessMap:Rt,roughnessMap:L,anisotropy:T,anisotropyMap:ct,clearcoat:H,clearcoatMap:ft,clearcoatNormalMap:Vt,clearcoatRoughnessMap:st,dispersion:Z,iridescence:et,iridescenceMap:vt,iridescenceThicknessMap:Pt,sheen:j,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:Yt,specularColorMap:It,specularIntensityMap:Zt,transmission:bt,transmissionMap:F,thicknessMap:lt,gradientMap:Y,opaque:_.transparent===!1&&_.blending===Gi&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:gt,alphaHash:pt,combine:_.combine,mapUv:oe&&v(_.map.channel),aoMapUv:z&&v(_.aoMap.channel),lightMapUv:Re&&v(_.lightMap.channel),bumpMapUv:Wt&&v(_.bumpMap.channel),normalMapUv:Xt&&v(_.normalMap.channel),displacementMapUv:Ct&&v(_.displacementMap.channel),emissiveMapUv:ne&&v(_.emissiveMap.channel),metalnessMapUv:Rt&&v(_.metalnessMap.channel),roughnessMapUv:L&&v(_.roughnessMap.channel),anisotropyMapUv:ct&&v(_.anisotropyMap.channel),clearcoatMapUv:ft&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:xt&&v(_.sheenRoughnessMap.channel),specularMapUv:Yt&&v(_.specularMap.channel),specularColorMapUv:It&&v(_.specularColorMap.channel),specularIntensityMapUv:Zt&&v(_.specularIntensityMap.channel),transmissionMapUv:F&&v(_.transmissionMap.channel),thicknessMapUv:lt&&v(_.thicknessMap.channel),alphaMapUv:Q&&v(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Xt||T),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!O.attributes.uv&&(oe||Q),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:yt,skinning:b.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:oe&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===se,decodeVideoTextureEmissive:ne&&_.emissiveMap.isVideoTexture===!0&&$t.getTransfer(_.emissiveMap.colorSpace)===se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===me,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ft&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&_.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function g(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const M in _.defines)S.push(M),S.push(_.defines[M]);return _.isRawShaderMaterial===!1&&(w(S,_),A(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function w(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function A(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){const S=f[_.type];let M;if(S){const D=pn[S];M=Pn.clone(D.uniforms)}else M=_.uniforms;return M}function E(_,S){let M;for(let D=0,b=h.length;D<b;D++){const U=h[D];if(U.cacheKey===S){M=U,++M.usedTimes;break}}return M===void 0&&(M=new O0(i,S,_,r),h.push(M)),M}function P(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function R(_){l.remove(_)}function x(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:y,acquireProgram:E,releaseProgram:P,releaseShaderCache:R,programs:h,dispose:x}}function H0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function W0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,f,v,m){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:p,groupOrder:f,renderOrder:u.renderOrder,z:v,group:m},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=p,g.groupOrder=f,g.renderOrder=u.renderOrder,g.z=v,g.group=m),t++,g}function a(u,d,p,f,v,m){const g=o(u,d,p,f,v,m);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):e.push(g)}function l(u,d,p,f,v,m){const g=o(u,d,p,f,v,m);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||W0),n.length>1&&n.sort(d||Zl),s.length>1&&s.sort(d||Zl)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function X0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Jl,i.set(n,[o])):s>=r.length?(o=new Jl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function q0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Gt};break;case"SpotLight":e={position:new k,direction:new k,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Y0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let K0=0;function $0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function j0(i){const t=new q0,e=Y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new jt,o=new jt;function a(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,f=0,v=0,m=0,g=0,w=0,A=0,y=0,E=0,P=0,R=0;c.sort($0);for(let _=0,S=c.length;_<S;_++){const M=c[_],D=M.color,b=M.intensity,U=M.distance,O=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=D.r*b,u+=D.g*b,d+=D.b*b;else if(M.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(M.sh.coefficients[I],b);R++}else if(M.isDirectionalLight){const I=t.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const V=M.shadow,N=e.get(M);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=M.shadow.matrix,w++}n.directional[p]=I,p++}else if(M.isSpotLight){const I=t.get(M);I.position.setFromMatrixPosition(M.matrixWorld),I.color.copy(D).multiplyScalar(b),I.distance=U,I.coneCos=Math.cos(M.angle),I.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),I.decay=M.decay,n.spot[v]=I;const V=M.shadow;if(M.map&&(n.spotLightMap[E]=M.map,E++,V.updateMatrices(M),M.castShadow&&P++),n.spotLightMatrix[v]=V.matrix,M.castShadow){const N=e.get(M);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=O,y++}v++}else if(M.isRectAreaLight){const I=t.get(M);I.color.copy(D).multiplyScalar(b),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=I,m++}else if(M.isPointLight){const I=t.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),I.distance=M.distance,I.decay=M.decay,M.castShadow){const V=M.shadow,N=e.get(M);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,N.shadowCameraNear=V.camera.near,N.shadowCameraFar=V.camera.far,n.pointShadow[f]=N,n.pointShadowMap[f]=O,n.pointShadowMatrix[f]=M.shadow.matrix,A++}n.point[f]=I,f++}else if(M.isHemisphereLight){const I=t.get(M);I.skyColor.copy(M.color).multiplyScalar(b),I.groundColor.copy(M.groundColor).multiplyScalar(b),n.hemi[g]=I,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==p||x.pointLength!==f||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==g||x.numDirectionalShadows!==w||x.numPointShadows!==A||x.numSpotShadows!==y||x.numSpotMaps!==E||x.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=f,n.hemi.length=g,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+E-P,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,x.directionalLength=p,x.pointLength=f,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=g,x.numDirectionalShadows=w,x.numPointShadows=A,x.numSpotShadows=y,x.numSpotMaps=E,x.numLightProbes=R,n.version=K0++)}function l(c,h){let u=0,d=0,p=0,f=0,v=0;const m=h.matrixWorldInverse;for(let g=0,w=c.length;g<w;g++){const A=c[g];if(A.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(A.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const y=n.rectArea[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),f++}else if(A.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Ql(i){const t=new j0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Z0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ql(i),t.set(s,[a])):r>=o.length?(a=new Ql(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class J0 extends vn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Q0 extends vn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ng(i,t,e){let n=new Ia;const s=new ot,r=new ot,o=new re,a=new J0({depthPacking:ku}),l=new Q0,c={},h=e.maxTextureSize,u={[Yn]:He,[He]:Yn,[me]:me},d=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:tg,fragmentShader:eg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new Ae;f.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nt(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let g=this.type;this.render=function(P,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const _=i.getRenderTarget(),S=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ze),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const b=g!==Tn&&this.type===Tn,U=g===Tn&&this.type!==Tn;for(let O=0,I=P.length;O<I;O++){const V=P[O],N=V.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const $=N.getFrameExtents();if(s.multiply($),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,N.mapSize.y=r.y)),N.map===null||b===!0||U===!0){const at=this.type!==Tn?{minFilter:Be,magFilter:Be}:{};N.map!==null&&N.map.dispose(),N.map=new Ze(s.x,s.y,at),N.map.texture.name=V.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const J=N.getViewportCount();for(let at=0;at<J;at++){const Mt=N.getViewport(at);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),D.viewport(o),N.updateMatrices(V,at),n=N.getFrustum(),y(R,x,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===Tn&&w(N,x),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(_,S,M)};function w(P,R){const x=t.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ze(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,x,d,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,x,p,v,null)}function A(P,R,x,_){let S=null;const M=x.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(M!==void 0)S=M;else if(S=x.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const D=S.uuid,b=R.uuid;let U=c[D];U===void 0&&(U={},c[D]=U);let O=U[b];O===void 0&&(O=S.clone(),U[b]=O,R.addEventListener("dispose",E)),S=O}if(S.visible=R.visible,S.wireframe=R.wireframe,_===Tn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,x.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=i.properties.get(S);D.light=x}return S}function y(P,R,x,_,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Tn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,P.matrixWorld);const b=t.update(P),U=P.material;if(Array.isArray(U)){const O=b.groups;for(let I=0,V=O.length;I<V;I++){const N=O[I],$=U[N.materialIndex];if($&&$.visible){const J=A(P,$,_,S);P.onBeforeShadow(i,P,R,x,b,J,N),i.renderBufferDirect(x,null,b,J,P,N),P.onAfterShadow(i,P,R,x,b,J,N)}}}else if(U.visible){const O=A(P,U,_,S);P.onBeforeShadow(i,P,R,x,b,O,null),i.renderBufferDirect(x,null,b,O,P,null),P.onAfterShadow(i,P,R,x,b,O,null)}}const D=P.children;for(let b=0,U=D.length;b<U;b++)y(D[b],R,x,_,S)}function E(P){P.target.removeEventListener("dispose",E);for(const x in c){const _=c[x],S=P.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const ig={[Do]:Lo,[ko]:No,[Io]:Fo,[qi]:Uo,[Lo]:Do,[No]:ko,[Fo]:Io,[Uo]:qi};function sg(i,t){function e(){let F=!1;const lt=new re;let Y=null;const Q=new re(0,0,0,0);return{setMask:function(gt){Y!==gt&&!F&&(i.colorMask(gt,gt,gt,gt),Y=gt)},setLocked:function(gt){F=gt},setClear:function(gt,pt,Ft,pe,Ce){Ce===!0&&(gt*=pe,pt*=pe,Ft*=pe),lt.set(gt,pt,Ft,pe),Q.equals(lt)===!1&&(i.clearColor(gt,pt,Ft,pe),Q.copy(lt))},reset:function(){F=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,Y=null,Q=null,gt=null;return{setReversed:function(pt){if(lt!==pt){const Ft=t.get("EXT_clip_control");lt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const pe=gt;gt=null,this.setClear(pe)}lt=pt},getReversed:function(){return lt},setTest:function(pt){pt?it(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(pt){Y!==pt&&!F&&(i.depthMask(pt),Y=pt)},setFunc:function(pt){if(lt&&(pt=ig[pt]),Q!==pt){switch(pt){case Do:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case Io:i.depthFunc(i.EQUAL);break;case Uo:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=pt}},setLocked:function(pt){F=pt},setClear:function(pt){gt!==pt&&(lt&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){F=!1,Y=null,Q=null,gt=null,lt=!1}}}function s(){let F=!1,lt=null,Y=null,Q=null,gt=null,pt=null,Ft=null,pe=null,Ce=null;return{setTest:function(ie){F||(ie?it(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(ie){lt!==ie&&!F&&(i.stencilMask(ie),lt=ie)},setFunc:function(ie,en,_n){(Y!==ie||Q!==en||gt!==_n)&&(i.stencilFunc(ie,en,_n),Y=ie,Q=en,gt=_n)},setOp:function(ie,en,_n){(pt!==ie||Ft!==en||pe!==_n)&&(i.stencilOp(ie,en,_n),pt=ie,Ft=en,pe=_n)},setLocked:function(ie){F=ie},setClear:function(ie){Ce!==ie&&(i.clearStencil(ie),Ce=ie)},reset:function(){F=!1,lt=null,Y=null,Q=null,gt=null,pt=null,Ft=null,pe=null,Ce=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],f=null,v=!1,m=null,g=null,w=null,A=null,y=null,E=null,P=null,R=new Gt(0,0,0),x=0,_=!1,S=null,M=null,D=null,b=null,U=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,V=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(N)[1]),I=V>=1):N.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),I=V>=2);let $=null,J={};const at=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Nt=new re().fromArray(at),K=new re().fromArray(Mt);function tt(F,lt,Y,Q){const gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(F,pt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<Y;Ft++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(lt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}const ut={};ut[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(qi),Wt(!1),Xt(il),it(i.CULL_FACE),z(ze);function it(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function yt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function At(F,lt){return u[F]!==lt?(i.bindFramebuffer(F,lt),u[F]=lt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Dt(F,lt){let Y=p,Q=!1;if(F){Y=d.get(lt),Y===void 0&&(Y=[],d.set(lt,Y));const gt=F.textures;if(Y.length!==gt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Ft=gt.length;pt<Ft;pt++)Y[pt]=i.COLOR_ATTACHMENT0+pt;Y.length=gt.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function oe(F){return f!==F?(i.useProgram(F),f=F,!0):!1}const qt={[An]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[mu]:i.FUNC_REVERSE_SUBTRACT};qt[gu]=i.MIN,qt[vu]=i.MAX;const le={[Ro]:i.ZERO,[xu]:i.ONE,[_u]:i.SRC_COLOR,[Co]:i.SRC_ALPHA,[Su]:i.SRC_ALPHA_SATURATE,[$c]:i.DST_COLOR,[Kc]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[Po]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Mu]:i.ONE_MINUS_DST_ALPHA,[wu]:i.CONSTANT_COLOR,[Eu]:i.ONE_MINUS_CONSTANT_COLOR,[Tu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function z(F,lt,Y,Q,gt,pt,Ft,pe,Ce,ie){if(F===ze){v===!0&&(yt(i.BLEND),v=!1);return}if(v===!1&&(it(i.BLEND),v=!0),F!==Yc){if(F!==m||ie!==_){if((g!==An||y!==An)&&(i.blendEquation(i.FUNC_ADD),g=An,y=An),ie)switch(F){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,A=null,E=null,P=null,R.set(0,0,0),x=0,m=F,_=ie}return}gt=gt||lt,pt=pt||Y,Ft=Ft||Q,(lt!==g||gt!==y)&&(i.blendEquationSeparate(qt[lt],qt[gt]),g=lt,y=gt),(Y!==w||Q!==A||pt!==E||Ft!==P)&&(i.blendFuncSeparate(le[Y],le[Q],le[pt],le[Ft]),w=Y,A=Q,E=pt,P=Ft),(pe.equals(R)===!1||Ce!==x)&&(i.blendColor(pe.r,pe.g,pe.b,Ce),R.copy(pe),x=Ce),m=F,_=!1}function Re(F,lt){F.side===me?yt(i.CULL_FACE):it(i.CULL_FACE);let Y=F.side===He;lt&&(Y=!Y),Wt(Y),F.blending===Gi&&F.transparent===!1?z(ze):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Q=F.stencilWrite;a.setTest(Q),Q&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function Xt(F){F!==du?(it(i.CULL_FACE),F!==M&&(F===il?i.cullFace(i.BACK):F===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),M=F}function Ct(F){F!==D&&(I&&i.lineWidth(F),D=F)}function ne(F,lt,Y){F?(it(i.POLYGON_OFFSET_FILL),(b!==lt||U!==Y)&&(i.polygonOffset(lt,Y),b=lt,U=Y)):yt(i.POLYGON_OFFSET_FILL)}function Rt(F){F?it(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function L(F){F===void 0&&(F=i.TEXTURE0+O-1),$!==F&&(i.activeTexture(F),$=F)}function T(F,lt,Y){Y===void 0&&($===null?Y=i.TEXTURE0+O-1:Y=$);let Q=J[Y];Q===void 0&&(Q={type:void 0,texture:void 0},J[Y]=Q),(Q.type!==F||Q.texture!==lt)&&($!==Y&&(i.activeTexture(Y),$=Y),i.bindTexture(F,lt||ut[F]),Q.type=F,Q.texture=lt)}function H(){const F=J[$];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(F){Nt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Nt.copy(F))}function xt(F){K.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),K.copy(F))}function Yt(F,lt){let Y=c.get(lt);Y===void 0&&(Y=new WeakMap,c.set(lt,Y));let Q=Y.get(F);Q===void 0&&(Q=i.getUniformBlockIndex(lt,F.name),Y.set(F,Q))}function It(F,lt){const Q=c.get(lt).get(F);l.get(lt)!==Q&&(i.uniformBlockBinding(lt,Q,F.__bindingPointIndex),l.set(lt,Q))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,J={},u={},d=new WeakMap,p=[],f=null,v=!1,m=null,g=null,w=null,A=null,y=null,E=null,P=null,R=new Gt(0,0,0),x=0,_=!1,S=null,M=null,D=null,b=null,U=null,Nt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:yt,bindFramebuffer:At,drawBuffers:Dt,useProgram:oe,setBlending:z,setMaterial:Re,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Ct,setPolygonOffset:ne,setScissorTest:Rt,activeTexture:L,bindTexture:T,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:vt,texImage3D:Pt,updateUBOMapping:Yt,uniformBlockBinding:It,texStorage2D:Vt,texStorage3D:st,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Lt,viewport:xt,reset:Zt}}function tc(i,t,e,n){const s=rg(n);switch(e){case ah:return i*t;case ch:return i*t;case hh:return i*t*2;case Tr:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case uh:return i*t*2/s.components*s.byteLength;case Pa:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Da:return i*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:case Wo:return Math.max(i,16)*Math.max(t,8)/4;case Go:case Ho:return Math.max(i,8)*Math.max(t,8)/2;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gr:case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dh:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ua:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rg(i){switch(i){case kn:case sh:return{byteLength:1,components:1};case Ss:case rh:case un:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case ui:case Ta:case cn:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function og(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(L,T){return p?new OffscreenCanvas(L,T):Mr("canvas")}function v(L,T,H){let Z=1;const et=Rt(L);if((et.width>H||et.height>H)&&(Z=H/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(Z*et.width),bt=Math.floor(Z*et.height);u===void 0&&(u=f(j,bt));const ct=T?f(j,bt):u;return ct.width=j,ct.height=bt,ct.getContext("2d").drawImage(L,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+bt+")."),ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),L;return L}function m(L){return L.generateMipmaps}function g(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(L,T,H,Z,et=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=T;if(T===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),T===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),T===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),T===i.RGBA){const bt=et?Ar:$t.getTransfer(Z);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=bt===se?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(L,T){let H;return L?T===null||T===ui||T===di?H=i.DEPTH24_STENCIL8:T===cn?H=i.DEPTH32F_STENCIL8:T===Ss&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ui||T===di?H=i.DEPTH_COMPONENT24:T===cn?H=i.DEPTH_COMPONENT32F:T===Ss&&(H=i.DEPTH_COMPONENT16),H}function E(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Be&&L.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function P(L){const T=L.target;T.removeEventListener("dispose",P),x(T),T.isVideoTexture&&h.delete(T)}function R(L){const T=L.target;T.removeEventListener("dispose",R),S(T)}function x(L){const T=n.get(L);if(T.__webglInit===void 0)return;const H=L.source,Z=d.get(H);if(Z){const et=Z[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&_(L),Object.keys(Z).length===0&&d.delete(H)}n.remove(L)}function _(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const H=L.source,Z=d.get(H);delete Z[T.__cacheKey],o.memory.textures--}function S(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let et=0;et<T.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(T.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=L.textures;for(let Z=0,et=H.length;Z<et;Z++){const j=n.get(H[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(H[Z])}n.remove(L)}let M=0;function D(){M=0}function b(){const L=M;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),M+=1,L}function U(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function O(L,T){const H=n.get(L);if(L.isVideoTexture&&Ct(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,L,T);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function I(L,T){const H=n.get(L);if(L.version>0&&H.__version!==L.version){K(H,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function V(L,T){const H=n.get(L);if(L.version>0&&H.__version!==L.version){K(H,L,T);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function N(L,T){const H=n.get(L);if(L.version>0&&H.__version!==L.version){tt(H,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}const $={[hi]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},J={[Be]:i.NEAREST,[Du]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},at={[Uu]:i.NEVER,[Gu]:i.ALWAYS,[Nu]:i.LESS,[fh]:i.LEQUAL,[Fu]:i.EQUAL,[Bu]:i.GEQUAL,[Ou]:i.GREATER,[zu]:i.NOTEQUAL};function Mt(L,T){if(T.type===cn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===Ur||T.magFilter===Cs||T.magFilter===li||T.minFilter===mn||T.minFilter===Ur||T.minFilter===Cs||T.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,$[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,$[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,$[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,J[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,at[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Be||T.minFilter!==Cs&&T.minFilter!==li||T.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Nt(L,T){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",P));const Z=T.source;let et=d.get(Z);et===void 0&&(et={},d.set(Z,et));const j=U(T);if(j!==L.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),et[j].usedTimes++;const bt=et[L.__cacheKey];bt!==void 0&&(et[L.__cacheKey].usedTimes--,bt.usedTimes===0&&_(T)),L.__cacheKey=j,L.__webglTexture=et[j].texture}return H}function K(L,T,H){let Z=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=i.TEXTURE_3D);const et=Nt(L,T),j=T.source;e.bindTexture(Z,L.__webglTexture,i.TEXTURE0+H);const bt=n.get(j);if(j.version!==bt.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const ct=$t.getPrimaries($t.workingColorSpace),ft=T.colorSpace===Rn?null:$t.getPrimaries(T.colorSpace),Vt=T.colorSpace===Rn||ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let st=v(T.image,!1,s.maxTextureSize);st=ne(T,st);const vt=r.convert(T.format,T.colorSpace),Pt=r.convert(T.type);let Lt=A(T.internalFormat,vt,Pt,T.colorSpace,T.isVideoTexture);Mt(Z,T);let xt;const Yt=T.mipmaps,It=T.isVideoTexture!==!0,Zt=bt.__version===void 0||et===!0,F=j.dataReady,lt=E(T,st);if(T.isDepthTexture)Lt=y(T.format===fi,T.type),Zt&&(It?e.texStorage2D(i.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,vt,Pt,null));else if(T.isDataTexture)if(Yt.length>0){It&&Zt&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Yt[0].width,Yt[0].height);for(let Y=0,Q=Yt.length;Y<Q;Y++)xt=Yt[Y],It?F&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,Lt,xt.width,xt.height,0,vt,Pt,xt.data);T.generateMipmaps=!1}else It?(Zt&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,st.width,st.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,vt,Pt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,vt,Pt,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){It&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,Yt[0].width,Yt[0].height,st.depth);for(let Y=0,Q=Yt.length;Y<Q;Y++)if(xt=Yt[Y],T.format!==hn)if(vt!==null)if(It){if(F)if(T.layerUpdates.size>0){const gt=tc(xt.width,xt.height,T.format,T.type);for(const pt of T.layerUpdates){const Ft=xt.data.subarray(pt*gt/xt.data.BYTES_PER_ELEMENT,(pt+1)*gt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,pt,xt.width,xt.height,1,vt,Ft)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Lt,xt.width,xt.height,st.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,vt,Pt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Lt,xt.width,xt.height,st.depth,0,vt,Pt,xt.data)}else{It&&Zt&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Yt[0].width,Yt[0].height);for(let Y=0,Q=Yt.length;Y<Q;Y++)xt=Yt[Y],T.format!==hn?vt!==null?It?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?F&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,Lt,xt.width,xt.height,0,vt,Pt,xt.data)}else if(T.isDataArrayTexture)if(It){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,st.width,st.height,st.depth),F)if(T.layerUpdates.size>0){const Y=tc(st.width,st.height,T.format,T.type);for(const Q of T.layerUpdates){const gt=st.data.subarray(Q*Y/st.data.BYTES_PER_ELEMENT,(Q+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,vt,Pt,gt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Pt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,vt,Pt,st.data);else if(T.isData3DTexture)It?(Zt&&e.texStorage3D(i.TEXTURE_3D,lt,Lt,st.width,st.height,st.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Pt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,vt,Pt,st.data);else if(T.isFramebufferTexture){if(Zt)if(It)e.texStorage2D(i.TEXTURE_2D,lt,Lt,st.width,st.height);else{let Y=st.width,Q=st.height;for(let gt=0;gt<lt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Lt,Y,Q,0,vt,Pt,null),Y>>=1,Q>>=1}}else if(Yt.length>0){if(It&&Zt){const Y=Rt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Lt,Y.width,Y.height)}for(let Y=0,Q=Yt.length;Y<Q;Y++)xt=Yt[Y],It?F&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,vt,Pt,xt):e.texImage2D(i.TEXTURE_2D,Y,Lt,vt,Pt,xt);T.generateMipmaps=!1}else if(It){if(Zt){const Y=Rt(st);e.texStorage2D(i.TEXTURE_2D,lt,Lt,Y.width,Y.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Pt,st)}else e.texImage2D(i.TEXTURE_2D,0,Lt,vt,Pt,st);m(T)&&g(Z),bt.__version=j.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function tt(L,T,H){if(T.image.length!==6)return;const Z=Nt(L,T),et=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);const j=n.get(et);if(et.version!==j.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const bt=$t.getPrimaries($t.workingColorSpace),ct=T.colorSpace===Rn?null:$t.getPrimaries(T.colorSpace),ft=T.colorSpace===Rn||bt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Vt=T.isCompressedTexture||T.image[0].isCompressedTexture,st=T.image[0]&&T.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!Vt&&!st?vt[Q]=v(T.image[Q],!0,s.maxCubemapSize):vt[Q]=st?T.image[Q].image:T.image[Q],vt[Q]=ne(T,vt[Q]);const Pt=vt[0],Lt=r.convert(T.format,T.colorSpace),xt=r.convert(T.type),Yt=A(T.internalFormat,Lt,xt,T.colorSpace),It=T.isVideoTexture!==!0,Zt=j.__version===void 0||Z===!0,F=et.dataReady;let lt=E(T,Pt);Mt(i.TEXTURE_CUBE_MAP,T);let Y;if(Vt){It&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Yt,Pt.width,Pt.height);for(let Q=0;Q<6;Q++){Y=vt[Q].mipmaps;for(let gt=0;gt<Y.length;gt++){const pt=Y[gt];T.format!==hn?Lt!==null?It?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,pt.width,pt.height,Lt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,Yt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,pt.width,pt.height,Lt,xt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,Yt,pt.width,pt.height,0,Lt,xt,pt.data)}}}else{if(Y=T.mipmaps,It&&Zt){Y.length>0&&lt++;const Q=Rt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,Lt,xt,vt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,vt[Q].width,vt[Q].height,0,Lt,xt,vt[Q].data);for(let gt=0;gt<Y.length;gt++){const Ft=Y[gt].image[Q].image;It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Ft.width,Ft.height,Lt,xt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,Yt,Ft.width,Ft.height,0,Lt,xt,Ft.data)}}else{It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,xt,vt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,Lt,xt,vt[Q]);for(let gt=0;gt<Y.length;gt++){const pt=Y[gt];It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Lt,xt,pt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,Yt,Lt,xt,pt.image[Q])}}}m(T)&&g(i.TEXTURE_CUBE_MAP),j.__version=et.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ut(L,T,H,Z,et,j){const bt=r.convert(H.format,H.colorSpace),ct=r.convert(H.type),ft=A(H.internalFormat,bt,ct,H.colorSpace),Vt=n.get(T),st=n.get(H);if(st.__renderTarget=T,!Vt.__hasExternalTextures){const vt=Math.max(1,T.width>>j),Pt=Math.max(1,T.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,ft,vt,Pt,T.depth,0,bt,ct,null):e.texImage2D(et,j,ft,vt,Pt,0,bt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Xt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,st.__webglTexture,0,Wt(T)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,st.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(L,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const Z=T.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,j=y(T.stencilBuffer,et),bt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Wt(T);Xt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,j,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,L)}else{const Z=T.textures;for(let et=0;et<Z.length;et++){const j=Z[et],bt=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),ft=A(j.internalFormat,bt,ct,j.colorSpace),Vt=Wt(T);H&&Xt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ft,T.width,T.height):Xt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,ft,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ft,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const et=Z.__webglTexture,j=Wt(T);if(T.depthTexture.format===Vi)Xt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(T.depthTexture.format===fi)Xt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function At(L){const T=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=Z}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");yt(T.__webglFramebuffer,L)}else if(H){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=i.createRenderbuffer(),it(T.__webglDepthbuffer[Z],L,!1);else{const et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),it(T.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(L,T,H){const Z=n.get(L);T!==void 0&&ut(Z.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&At(L)}function oe(L){const T=L.texture,H=n.get(L),Z=n.get(T);L.addEventListener("dispose",R);const et=L.textures,j=L.isWebGLCubeRenderTarget===!0,bt=et.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=T.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ct]=[];for(let ft=0;ft<T.mipmaps.length;ft++)H.__webglFramebuffer[ct][ft]=i.createFramebuffer()}else H.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ct=0;ct<T.mipmaps.length;ct++)H.__webglFramebuffer[ct]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ct=0,ft=et.length;ct<ft;ct++){const Vt=n.get(et[ct]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Xt(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){const ft=et[ct];H.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ct]);const Vt=r.convert(ft.format,ft.colorSpace),st=r.convert(ft.type),vt=A(ft.internalFormat,Vt,st,ft.colorSpace,L.isXRRenderTarget===!0),Pt=Wt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,vt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,H.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),it(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,T);for(let ct=0;ct<6;ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)ut(H.__webglFramebuffer[ct][ft],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else ut(H.__webglFramebuffer[ct],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(T)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,ft=et.length;ct<ft;ct++){const Vt=et[ct],st=n.get(Vt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Mt(i.TEXTURE_2D,Vt),ut(H.__webglFramebuffer,L,Vt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Vt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ct=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),Mt(ct,T),T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)ut(H.__webglFramebuffer[ft],L,T,i.COLOR_ATTACHMENT0,ct,ft);else ut(H.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,ct,0);m(T)&&g(ct),e.unbindTexture()}L.depthBuffer&&At(L)}function qt(L){const T=L.textures;for(let H=0,Z=T.length;H<Z;H++){const et=T[H];if(m(et)){const j=w(L),bt=n.get(et).__webglTexture;e.bindTexture(j,bt),g(j),e.unbindTexture()}}}const le=[],z=[];function Re(L){if(L.samples>0){if(Xt(L)===!1){const T=L.textures,H=L.width,Z=L.height;let et=i.COLOR_BUFFER_BIT;const j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(L),ct=T.length>1;if(ct)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const Vt=n.get(T[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,et,i.NEAREST),l===!0&&(le.length=0,z.length=0,le.push(i.COLOR_ATTACHMENT0+ft),L.depthBuffer&&L.resolveDepthBuffer===!1&&(le.push(j),z.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const Vt=n.get(T[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Wt(L){return Math.min(s.maxSamples,L.samples)}function Xt(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ct(L){const T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function ne(L,T){const H=L.colorSpace,Z=L.format,et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Ji&&H!==Rn&&($t.getTransfer(H)===se?(Z!==hn||et!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function Rt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=b,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=I,this.setTexture3D=V,this.setTextureCube=N,this.rebindTextures=Dt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Xt}function ag(i,t){function e(n,s=Rn){let r;const o=$t.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.BYTE;if(n===rh)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===lh)return i.RGB;if(n===hn)return i.RGBA;if(n===ch)return i.LUMINANCE;if(n===hh)return i.LUMINANCE_ALPHA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Tr)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===uh)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Vo||n===Ho||n===Wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ko||n===$o||n===jo||n===Zo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===la||n===ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gr)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===ha||n===ua||n===da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class lg extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cg={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Me({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fg extends Qi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null;const v=new dg,m=e.getContextAttributes();let g=null,w=null;const A=[],y=[],E=new ot;let P=null;const R=new Ve;R.viewport=new re;const x=new Ve;x.viewport=new re;const _=[R,x],S=new lg;let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=A[K];return tt===void 0&&(tt=new lo,A[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=A[K];return tt===void 0&&(tt=new lo,A[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=A[K];return tt===void 0&&(tt=new lo,A[K]=tt),tt.getHandSpace()};function b(K){const tt=y.indexOf(K.inputSource);if(tt===-1)return;const ut=A[tt];ut!==void 0&&(ut.update(K.inputSource,K.frame,c||o),ut.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",b),s.removeEventListener("selectstart",b),s.removeEventListener("selectend",b),s.removeEventListener("squeeze",b),s.removeEventListener("squeezestart",b),s.removeEventListener("squeezeend",b),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",O);for(let K=0;K<A.length;K++){const tt=y[K];tt!==null&&(y[K]=null,A[K].disconnect(tt))}M=null,D=null,v.reset(),t.setRenderTarget(g),p=null,d=null,u=null,s=null,w=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",b),s.addEventListener("selectstart",b),s.addEventListener("selectend",b),s.addEventListener("squeeze",b),s.addEventListener("squeezestart",b),s.addEventListener("squeezeend",b),s.addEventListener("end",U),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ze(p.framebufferWidth,p.framebufferHeight,{format:hn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,ut=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?fi:Vi,ut=m.stencil?di:ui);const yt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ze(d.textureWidth,d.textureHeight,{format:hn,type:kn,depthTexture:new Fa(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(K){for(let tt=0;tt<K.removed.length;tt++){const ut=K.removed[tt],it=y.indexOf(ut);it>=0&&(y[it]=null,A[it].disconnect(ut))}for(let tt=0;tt<K.added.length;tt++){const ut=K.added[tt];let it=y.indexOf(ut);if(it===-1){for(let At=0;At<A.length;At++)if(At>=y.length){y.push(ut),it=At;break}else if(y[At]===null){y[At]=ut,it=At;break}if(it===-1)break}const yt=A[it];yt&&yt.connect(ut)}}const I=new k,V=new k;function N(K,tt,ut){I.setFromMatrixPosition(tt.matrixWorld),V.setFromMatrixPosition(ut.matrixWorld);const it=I.distanceTo(V),yt=tt.projectionMatrix.elements,At=ut.projectionMatrix.elements,Dt=yt[14]/(yt[10]-1),oe=yt[14]/(yt[10]+1),qt=(yt[9]+1)/yt[5],le=(yt[9]-1)/yt[5],z=(yt[8]-1)/yt[0],Re=(At[8]+1)/At[0],Wt=Dt*z,Xt=Dt*Re,Ct=it/(-z+Re),ne=Ct*-z;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ne),K.translateZ(Ct),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),yt[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Rt=Dt+Ct,L=oe+Ct,T=Wt-ne,H=Xt+(it-ne),Z=qt*oe/L*Rt,et=le*oe/L*Rt;K.projectionMatrix.makePerspective(T,H,Z,et,Rt,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function $(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let tt=K.near,ut=K.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(ut=v.depthFar)),S.near=x.near=R.near=tt,S.far=x.far=R.far=ut,(M!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,D=S.far),R.layers.mask=K.layers.mask|2,x.layers.mask=K.layers.mask|4,S.layers.mask=R.layers.mask|x.layers.mask;const it=K.parent,yt=S.cameras;$(S,it);for(let At=0;At<yt.length;At++)$(yt[At],it);yt.length===2?N(S,R,x):S.projectionMatrix.copy(R.projectionMatrix),J(K,S,it)};function J(K,tt,ut){ut===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(ut.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$i*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let at=null;function Mt(K,tt){if(h=tt.getViewerPose(c||o),f=tt,h!==null){const ut=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let it=!1;ut.length!==S.cameras.length&&(S.cameras.length=0,it=!0);for(let At=0;At<ut.length;At++){const Dt=ut[At];let oe=null;if(p!==null)oe=p.getViewport(Dt);else{const le=u.getViewSubImage(d,Dt);oe=le.viewport,At===0&&(t.setRenderTargetTextures(w,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(w))}let qt=_[At];qt===void 0&&(qt=new Ve,qt.layers.enable(At),qt.viewport=new re,_[At]=qt),qt.matrix.fromArray(Dt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Dt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(oe.x,oe.y,oe.width,oe.height),At===0&&(S.matrix.copy(qt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),it===!0&&S.cameras.push(qt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const At=u.getDepthInformation(ut[0]);At&&At.isValid&&At.texture&&v.init(t,At,s.renderState)}}for(let ut=0;ut<A.length;ut++){const it=y[ut],yt=A[ut];it!==null&&yt!==void 0&&yt.update(it,tt,c||o)}at&&at(K,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),f=null}const Nt=new Eh;Nt.setAnimationLoop(Mt),this.setAnimationLoop=function(K){at=K},this.dispose=function(){}}}const ni=new tn,pg=new jt;function mg(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,bh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,w,A,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&p(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,w,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===He&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===He&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const w=t.get(g),A=w.envMap,y=w.envMapRotation;A&&(m.envMap.value=A,ni.copy(y),ni.x*=-1,ni.y*=-1,ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(ni)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,w,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*w,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,w){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===He&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const w=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const y=A.program;n.uniformBlockBinding(w,y)}function c(w,A){let y=s[w.id];y===void 0&&(f(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",m));const E=A.program;n.updateUBOMapping(w,E);const P=t.render.frame;r[w.id]!==P&&(d(w),r[w.id]=P)}function h(w){const A=u();w.__bindingPointIndex=A;const y=i.createBuffer(),E=w.__size,P=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const A=s[w.id],y=w.uniforms,E=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let P=0,R=y.length;P<R;P++){const x=Array.isArray(y[P])?y[P]:[y[P]];for(let _=0,S=x.length;_<S;_++){const M=x[_];if(p(M,P,_,E)===!0){const D=M.__offset,b=Array.isArray(M.value)?M.value:[M.value];let U=0;for(let O=0;O<b.length;O++){const I=b[O],V=v(I);typeof I=="number"||typeof I=="boolean"?(M.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,D+U,M.__data)):I.isMatrix3?(M.__data[0]=I.elements[0],M.__data[1]=I.elements[1],M.__data[2]=I.elements[2],M.__data[3]=0,M.__data[4]=I.elements[3],M.__data[5]=I.elements[4],M.__data[6]=I.elements[5],M.__data[7]=0,M.__data[8]=I.elements[6],M.__data[9]=I.elements[7],M.__data[10]=I.elements[8],M.__data[11]=0):(I.toArray(M.__data,U),U+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,A,y,E){const P=w.value,R=A+"_"+y;if(E[R]===void 0)return typeof P=="number"||typeof P=="boolean"?E[R]=P:E[R]=P.clone(),!0;{const x=E[R];if(typeof P=="number"||typeof P=="boolean"){if(x!==P)return E[R]=P,!0}else if(x.equals(P)===!1)return x.copy(P),!0}return!1}function f(w){const A=w.uniforms;let y=0;const E=16;for(let R=0,x=A.length;R<x;R++){const _=Array.isArray(A[R])?A[R]:[A[R]];for(let S=0,M=_.length;S<M;S++){const D=_[S],b=Array.isArray(D.value)?D.value:[D.value];for(let U=0,O=b.length;U<O;U++){const I=b[U],V=v(I),N=y%E,$=N%V.boundary,J=N+$;y+=$,J!==0&&E-J<V.storage&&(y+=E-J),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=V.storage}}}const P=y%E;return P>0&&(y+=E-P),w.__size=y,w.__cache={},this}function v(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function m(w){const A=w.target;A.removeEventListener("dispose",m);const y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function g(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class vg{constructor(t={}){const{canvas:e=rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const f=new Uint32Array(4),v=new Int32Array(4);let m=null,g=null;const w=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=Dn,this.toneMappingExposure=1;const y=this;let E=!1,P=0,R=0,x=null,_=-1,S=null;const M=new re,D=new re;let b=null;const U=new Gt(0);let O=0,I=e.width,V=e.height,N=1,$=null,J=null;const at=new re(0,0,I,V),Mt=new re(0,0,I,V);let Nt=!1;const K=new Ia;let tt=!1,ut=!1;const it=new jt,yt=new jt,At=new k,Dt=new re,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function le(){return x===null?N:1}let z=n;function Re(C,B){return e.getContext(C,B)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ea}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),z===null){const B="webgl2";if(z=Re(B,C),z===null)throw Re(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Wt,Xt,Ct,ne,Rt,L,T,H,Z,et,j,bt,ct,ft,Vt,st,vt,Pt,Lt,xt,Yt,It,Zt,F;function lt(){Wt=new bm(z),Wt.init(),It=new ag(z,Wt),Xt=new gm(z,Wt,t,It),Ct=new sg(z,Wt),Xt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),ne=new Em(z),Rt=new H0,L=new og(z,Wt,Ct,Rt,Xt,It,ne),T=new xm(y),H=new Mm(y),Z=new Dd(z),Zt=new pm(z,Z),et=new Sm(z,Z,ne,Zt),j=new Am(z,et,Z,ne),Lt=new Tm(z,Xt,L),st=new vm(Rt),bt=new V0(y,T,H,Wt,Xt,Zt,st),ct=new mg(y,Rt),ft=new X0,Vt=new Z0(Wt),Pt=new fm(y,T,H,Ct,j,p,l),vt=new ng(y,j,Xt),F=new gg(z,ne,Xt,Ct),xt=new mm(z,Wt,ne),Yt=new wm(z,Wt,ne),ne.programs=bt.programs,y.capabilities=Xt,y.extensions=Wt,y.properties=Rt,y.renderLists=ft,y.shadowMap=vt,y.state=Ct,y.info=ne}lt();const Y=new fg(y,z);this.xr=Y,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(C){C!==void 0&&(N=C,this.setSize(I,V,!1))},this.getSize=function(C){return C.set(I,V)},this.setSize=function(C,B,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,V=B,e.width=Math.floor(C*N),e.height=Math.floor(B*N),W===!0&&(e.style.width=C+"px",e.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(I*N,V*N).floor()},this.setDrawingBufferSize=function(C,B,W){I=C,V=B,N=W,e.width=Math.floor(C*W),e.height=Math.floor(B*W),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,B,W,X){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,B,W,X),Ct.viewport(M.copy(at).multiplyScalar(N).round())},this.getScissor=function(C){return C.copy(Mt)},this.setScissor=function(C,B,W,X){C.isVector4?Mt.set(C.x,C.y,C.z,C.w):Mt.set(C,B,W,X),Ct.scissor(D.copy(Mt).multiplyScalar(N).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(C){Ct.setScissorTest(Nt=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(C=!0,B=!0,W=!0){let X=0;if(C){let G=!1;if(x!==null){const rt=x.texture.format;G=rt===Da||rt===Pa||rt===Ca}if(G){const rt=x.texture.type,mt=rt===kn||rt===ui||rt===Ss||rt===di||rt===Aa||rt===Ra,St=Pt.getClearColor(),wt=Pt.getClearAlpha(),Ut=St.r,Ot=St.g,Et=St.b;mt?(f[0]=Ut,f[1]=Ot,f[2]=Et,f[3]=wt,z.clearBufferuiv(z.COLOR,0,f)):(v[0]=Ut,v[1]=Ot,v[2]=Et,v[3]=wt,z.clearBufferiv(z.COLOR,0,v))}else X|=z.COLOR_BUFFER_BIT}B&&(X|=z.DEPTH_BUFFER_BIT),W&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),ft.dispose(),Vt.dispose(),Rt.dispose(),T.dispose(),H.dispose(),j.dispose(),Zt.dispose(),F.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",$a),Y.removeEventListener("sessionend",ja),jn.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=ne.autoReset,B=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,G=vt.type;lt(),ne.autoReset=C,vt.enabled=B,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=G}function pt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ft(C){const B=C.target;B.removeEventListener("dispose",Ft),pe(B)}function pe(C){Ce(C),Rt.remove(C)}function Ce(C){const B=Rt.get(C).programs;B!==void 0&&(B.forEach(function(W){bt.releaseProgram(W)}),C.isShaderMaterial&&bt.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,W,X,G,rt){B===null&&(B=oe);const mt=G.isMesh&&G.matrixWorld.determinant()<0,St=cu(C,B,W,X,G);Ct.setMaterial(X,mt);let wt=W.index,Ut=1;if(X.wireframe===!0){if(wt=et.getWireframeAttribute(W),wt===void 0)return;Ut=2}const Ot=W.drawRange,Et=W.attributes.position;let Jt=Ot.start*Ut,ae=(Ot.start+Ot.count)*Ut;rt!==null&&(Jt=Math.max(Jt,rt.start*Ut),ae=Math.min(ae,(rt.start+rt.count)*Ut)),wt!==null?(Jt=Math.max(Jt,0),ae=Math.min(ae,wt.count)):Et!=null&&(Jt=Math.max(Jt,0),ae=Math.min(ae,Et.count));const ce=ae-Jt;if(ce<0||ce===1/0)return;Zt.setup(G,X,St,W,wt);let Ge,te=xt;if(wt!==null&&(Ge=Z.get(wt),te=Yt,te.setIndex(Ge)),G.isMesh)X.wireframe===!0?(Ct.setLineWidth(X.wireframeLinewidth*le()),te.setMode(z.LINES)):te.setMode(z.TRIANGLES);else if(G.isLine){let Tt=X.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*le()),G.isLineSegments?te.setMode(z.LINES):G.isLineLoop?te.setMode(z.LINE_LOOP):te.setMode(z.LINE_STRIP)}else G.isPoints?te.setMode(z.POINTS):G.isSprite&&te.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)te.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Tt=G._multiDrawStarts,yn=G._multiDrawCounts,ee=G._multiDrawCount,nn=wt?Z.get(wt).bytesPerElement:1,vi=Rt.get(X).currentProgram.getUniforms();for(let Xe=0;Xe<ee;Xe++)vi.setValue(z,"_gl_DrawID",Xe),te.render(Tt[Xe]/nn,yn[Xe])}else if(G.isInstancedMesh)te.renderInstances(Jt,ce,G.count);else if(W.isInstancedBufferGeometry){const Tt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yn=Math.min(W.instanceCount,Tt);te.renderInstances(Jt,ce,yn)}else te.render(Jt,ce)};function ie(C,B,W){C.transparent===!0&&C.side===me&&C.forceSinglePass===!1?(C.side=He,C.needsUpdate=!0,Rs(C,B,W),C.side=Yn,C.needsUpdate=!0,Rs(C,B,W),C.side=me):Rs(C,B,W)}this.compile=function(C,B,W=null){W===null&&(W=C),g=Vt.get(W),g.init(B),A.push(g),W.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),C!==W&&C.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const X=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const rt=G.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){const St=rt[mt];ie(St,W,G),X.add(St)}else ie(rt,W,G),X.add(rt)}),A.pop(),g=null,X},this.compileAsync=function(C,B,W=null){const X=this.compile(C,B,W);return new Promise(G=>{function rt(){if(X.forEach(function(mt){Rt.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){G(C);return}setTimeout(rt,10)}Wt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let en=null;function _n(C){en&&en(C)}function $a(){jn.stop()}function ja(){jn.start()}const jn=new Eh;jn.setAnimationLoop(_n),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(C){en=C,Y.setAnimationLoop(C),C===null?jn.stop():jn.start()},Y.addEventListener("sessionstart",$a),Y.addEventListener("sessionend",ja),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,B,x),g=Vt.get(C,A.length),g.init(B),A.push(g),yt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(yt),ut=this.localClippingEnabled,tt=st.init(this.clippingPlanes,ut),m=ft.get(C,w.length),m.init(),w.push(m),Y.enabled===!0&&Y.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&Ir(rt,B,-1/0,y.sortObjects)}Ir(C,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,J),qt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qt&&Pt.addToRenderList(m,C),this.info.render.frame++,tt===!0&&st.beginShadows();const W=g.state.shadowsArray;vt.render(W,C,B),tt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,G=m.transmissive;if(g.setupLights(),B.isArrayCamera){const rt=B.cameras;if(G.length>0)for(let mt=0,St=rt.length;mt<St;mt++){const wt=rt[mt];Ja(X,G,C,wt)}qt&&Pt.render(C);for(let mt=0,St=rt.length;mt<St;mt++){const wt=rt[mt];Za(m,C,wt,wt.viewport)}}else G.length>0&&Ja(X,G,C,B),qt&&Pt.render(C),Za(m,C,B);x!==null&&(L.updateMultisampleRenderTarget(x),L.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(y,C,B),Zt.resetDefaultState(),_=-1,S=null,A.pop(),A.length>0?(g=A[A.length-1],tt===!0&&st.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ir(C,B,W,X){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){X&&Dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(yt);const mt=j.update(C),St=C.material;St.visible&&m.push(C,mt,St,W,Dt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const mt=j.update(C),St=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Dt.copy(C.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Dt.copy(mt.boundingSphere.center)),Dt.applyMatrix4(C.matrixWorld).applyMatrix4(yt)),Array.isArray(St)){const wt=mt.groups;for(let Ut=0,Ot=wt.length;Ut<Ot;Ut++){const Et=wt[Ut],Jt=St[Et.materialIndex];Jt&&Jt.visible&&m.push(C,mt,Jt,W,Dt.z,Et)}}else St.visible&&m.push(C,mt,St,W,Dt.z,null)}}const rt=C.children;for(let mt=0,St=rt.length;mt<St;mt++)Ir(rt[mt],B,W,X)}function Za(C,B,W,X){const G=C.opaque,rt=C.transmissive,mt=C.transparent;g.setupLightsView(W),tt===!0&&st.setGlobalState(y.clippingPlanes,W),X&&Ct.viewport(M.copy(X)),G.length>0&&As(G,B,W),rt.length>0&&As(rt,B,W),mt.length>0&&As(mt,B,W),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Ja(C,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new Ze(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?un:kn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const rt=g.state.transmissionRenderTarget[X.id],mt=X.viewport||M;rt.setSize(mt.z,mt.w);const St=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(U),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),qt&&Pt.render(W);const wt=y.toneMapping;y.toneMapping=Dn;const Ut=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),tt===!0&&st.setGlobalState(y.clippingPlanes,X),As(C,W,X),L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Et=0,Jt=B.length;Et<Jt;Et++){const ae=B[Et],ce=ae.object,Ge=ae.geometry,te=ae.material,Tt=ae.group;if(te.side===me&&ce.layers.test(X.layers)){const yn=te.side;te.side=He,te.needsUpdate=!0,Qa(ce,W,X,Ge,te,Tt),te.side=yn,te.needsUpdate=!0,Ot=!0}}Ot===!0&&(L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt))}y.setRenderTarget(St),y.setClearColor(U,O),Ut!==void 0&&(X.viewport=Ut),y.toneMapping=wt}function As(C,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let G=0,rt=C.length;G<rt;G++){const mt=C[G],St=mt.object,wt=mt.geometry,Ut=X===null?mt.material:X,Ot=mt.group;St.layers.test(W.layers)&&Qa(St,B,W,wt,Ut,Ot)}}function Qa(C,B,W,X,G,rt){C.onBeforeRender(y,B,W,X,G,rt),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(y,B,W,X,C,rt),G.transparent===!0&&G.side===me&&G.forceSinglePass===!1?(G.side=He,G.needsUpdate=!0,y.renderBufferDirect(W,B,X,G,C,rt),G.side=Yn,G.needsUpdate=!0,y.renderBufferDirect(W,B,X,G,C,rt),G.side=me):y.renderBufferDirect(W,B,X,G,C,rt),C.onAfterRender(y,B,W,X,G,rt)}function Rs(C,B,W){B.isScene!==!0&&(B=oe);const X=Rt.get(C),G=g.state.lights,rt=g.state.shadowsArray,mt=G.state.version,St=bt.getParameters(C,G.state,rt,B,W),wt=bt.getProgramCacheKey(St);let Ut=X.programs;X.environment=C.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(C.isMeshStandardMaterial?H:T).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,Ut===void 0&&(C.addEventListener("dispose",Ft),Ut=new Map,X.programs=Ut);let Ot=Ut.get(wt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===mt)return el(C,St),Ot}else St.uniforms=bt.getUniforms(C),C.onBeforeCompile(St,y),Ot=bt.acquireProgram(St,wt),Ut.set(wt,Ot),X.uniforms=St.uniforms;const Et=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Et.clippingPlanes=st.uniform),el(C,St),X.needsLights=uu(C),X.lightsStateVersion=mt,X.needsLights&&(Et.ambientLightColor.value=G.state.ambient,Et.lightProbe.value=G.state.probe,Et.directionalLights.value=G.state.directional,Et.directionalLightShadows.value=G.state.directionalShadow,Et.spotLights.value=G.state.spot,Et.spotLightShadows.value=G.state.spotShadow,Et.rectAreaLights.value=G.state.rectArea,Et.ltc_1.value=G.state.rectAreaLTC1,Et.ltc_2.value=G.state.rectAreaLTC2,Et.pointLights.value=G.state.point,Et.pointLightShadows.value=G.state.pointShadow,Et.hemisphereLights.value=G.state.hemi,Et.directionalShadowMap.value=G.state.directionalShadowMap,Et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Et.spotShadowMap.value=G.state.spotShadowMap,Et.spotLightMatrix.value=G.state.spotLightMatrix,Et.spotLightMap.value=G.state.spotLightMap,Et.pointShadowMap.value=G.state.pointShadowMap,Et.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function tl(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=vr.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function el(C,B){const W=Rt.get(C);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function cu(C,B,W,X,G){B.isScene!==!0&&(B=oe),L.resetTextureUnits();const rt=B.fog,mt=X.isMeshStandardMaterial?B.environment:null,St=x===null?y.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Ji,wt=(X.isMeshStandardMaterial?H:T).get(X.envMap||mt),Ut=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Et=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color;let ce=Dn;X.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,te=Ge!==void 0?Ge.length:0,Tt=Rt.get(X),yn=g.state.lights;if(tt===!0&&(ut===!0||C!==S)){const Je=C===S&&X.id===_;st.setState(X,C,Je)}let ee=!1;X.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==yn.state.version||Tt.outputColorSpace!==St||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==wt||X.fog===!0&&Tt.fog!==rt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==st.numPlanes||Tt.numIntersection!==st.numIntersection)||Tt.vertexAlphas!==Ut||Tt.vertexTangents!==Ot||Tt.morphTargets!==Et||Tt.morphNormals!==Jt||Tt.morphColors!==ae||Tt.toneMapping!==ce||Tt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Tt.__version=X.version);let nn=Tt.currentProgram;ee===!0&&(nn=Rs(X,B,G));let vi=!1,Xe=!1,is=!1;const he=nn.getUniforms(),dn=Tt.uniforms;if(Ct.useProgram(nn.program)&&(vi=!0,Xe=!0,is=!0),X.id!==_&&(_=X.id,Xe=!0),vi||S!==C){Ct.buffers.depth.getReversed()?(it.copy(C.projectionMatrix),ad(it),ld(it),he.setValue(z,"projectionMatrix",it)):he.setValue(z,"projectionMatrix",C.projectionMatrix),he.setValue(z,"viewMatrix",C.matrixWorldInverse);const In=he.map.cameraPosition;In!==void 0&&In.setValue(z,At.setFromMatrixPosition(C.matrixWorld)),Xt.logarithmicDepthBuffer&&he.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&he.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Xe=!0,is=!0)}if(G.isSkinnedMesh){he.setOptional(z,G,"bindMatrix"),he.setOptional(z,G,"bindMatrixInverse");const Je=G.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),he.setValue(z,"boneTexture",Je.boneTexture,L))}G.isBatchedMesh&&(he.setOptional(z,G,"batchingTexture"),he.setValue(z,"batchingTexture",G._matricesTexture,L),he.setOptional(z,G,"batchingIdTexture"),he.setValue(z,"batchingIdTexture",G._indirectTexture,L),he.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&he.setValue(z,"batchingColorTexture",G._colorsTexture,L));const ss=W.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Lt.update(G,W,nn),(Xe||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,he.setValue(z,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(dn.envMap.value=wt,dn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(dn.envMapIntensity.value=B.environmentIntensity),Xe&&(he.setValue(z,"toneMappingExposure",y.toneMappingExposure),Tt.needsLights&&hu(dn,is),rt&&X.fog===!0&&ct.refreshFogUniforms(dn,rt),ct.refreshMaterialUniforms(dn,X,N,V,g.state.transmissionRenderTarget[C.id]),vr.upload(z,tl(Tt),dn,L)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(vr.upload(z,tl(Tt),dn,L),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&he.setValue(z,"center",G.center),he.setValue(z,"modelViewMatrix",G.modelViewMatrix),he.setValue(z,"normalMatrix",G.normalMatrix),he.setValue(z,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Je=X.uniformsGroups;for(let In=0,Un=Je.length;In<Un;In++){const nl=Je[In];F.update(nl,nn),F.bind(nl,nn)}}return nn}function hu(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function uu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,B,W){Rt.get(C.texture).__webglTexture=B,Rt.get(C.depthTexture).__webglTexture=W;const X=Rt.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,B){const W=Rt.get(C);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,W=0){x=C,P=B,R=W;let X=!0,G=null,rt=!1,mt=!1;if(C){const wt=Rt.get(C);if(wt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(z.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(wt.__hasExternalTextures)L.rebindTextures(C,Rt.get(C.texture).__webglTexture,Rt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Et=C.depthTexture;if(wt.__boundDepthTexture!==Et){if(Et!==null&&Rt.has(Et)&&(C.width!==Et.image.width||C.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Ut=C.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(mt=!0);const Ot=Rt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?G=Ot[B][W]:G=Ot[B],rt=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?G=Rt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ot)?G=Ot[W]:G=Ot,M.copy(C.viewport),D.copy(C.scissor),b=C.scissorTest}else M.copy(at).multiplyScalar(N).floor(),D.copy(Mt).multiplyScalar(N).floor(),b=Nt;if(Ct.bindFramebuffer(z.FRAMEBUFFER,G)&&X&&Ct.drawBuffers(C,G),Ct.viewport(M),Ct.scissor(D),Ct.setScissorTest(b),rt){const wt=Rt.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,W)}else if(mt){const wt=Rt.get(C.texture),Ut=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.__webglTexture,W||0,Ut)}_=-1},this.readRenderTargetPixels=function(C,B,W,X,G,rt,mt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Rt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){Ct.bindFramebuffer(z.FRAMEBUFFER,St);try{const wt=C.texture,Ut=wt.format,Ot=wt.type;if(!Xt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-X&&W>=0&&W<=C.height-G&&z.readPixels(B,W,X,G,It.convert(Ut),It.convert(Ot),rt)}finally{const wt=x!==null?Rt.get(x).__webglFramebuffer:null;Ct.bindFramebuffer(z.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(C,B,W,X,G,rt,mt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Rt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){const wt=C.texture,Ut=wt.format,Ot=wt.type;if(!Xt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=C.width-X&&W>=0&&W<=C.height-G){Ct.bindFramebuffer(z.FRAMEBUFFER,St);const Et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.bufferData(z.PIXEL_PACK_BUFFER,rt.byteLength,z.STREAM_READ),z.readPixels(B,W,X,G,It.convert(Ut),It.convert(Ot),0);const Jt=x!==null?Rt.get(x).__webglFramebuffer:null;Ct.bindFramebuffer(z.FRAMEBUFFER,Jt);const ae=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await od(z,ae,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,rt),z.deleteBuffer(Et),z.deleteSync(ae),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,B=null,W=0){C.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-W),G=Math.floor(C.image.width*X),rt=Math.floor(C.image.height*X),mt=B!==null?B.x:0,St=B!==null?B.y:0;L.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,mt,St,G,rt),Ct.unbindTexture()},this.copyTextureToTexture=function(C,B,W=null,X=null,G=0){C.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],B=arguments[2],G=arguments[3]||0,W=null);let rt,mt,St,wt,Ut,Ot,Et,Jt,ae;const ce=C.isCompressedTexture?C.mipmaps[G]:C.image;W!==null?(rt=W.max.x-W.min.x,mt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Ut=W.min.y,Ot=W.isBox3?W.min.z:0):(rt=ce.width,mt=ce.height,St=ce.depth||1,wt=0,Ut=0,Ot=0),X!==null?(Et=X.x,Jt=X.y,ae=X.z):(Et=0,Jt=0,ae=0);const Ge=It.convert(B.format),te=It.convert(B.type);let Tt;B.isData3DTexture?(L.setTexture3D(B,0),Tt=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Tt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Tt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);const yn=z.getParameter(z.UNPACK_ROW_LENGTH),ee=z.getParameter(z.UNPACK_IMAGE_HEIGHT),nn=z.getParameter(z.UNPACK_SKIP_PIXELS),vi=z.getParameter(z.UNPACK_SKIP_ROWS),Xe=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ce.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ut),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ot);const is=C.isDataArrayTexture||C.isData3DTexture,he=B.isDataArrayTexture||B.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const dn=Rt.get(C),ss=Rt.get(B),Je=Rt.get(dn.__renderTarget),In=Rt.get(ss.__renderTarget);Ct.bindFramebuffer(z.READ_FRAMEBUFFER,Je.__webglFramebuffer),Ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Un=0;Un<St;Un++)is&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.get(C).__webglTexture,G,Ot+Un),C.isDepthTexture?(he&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.get(B).__webglTexture,G,ae+Un),z.blitFramebuffer(wt,Ut,rt,mt,Et,Jt,rt,mt,z.DEPTH_BUFFER_BIT,z.NEAREST)):he?z.copyTexSubImage3D(Tt,G,Et,Jt,ae+Un,wt,Ut,rt,mt):z.copyTexSubImage2D(Tt,G,Et,Jt,ae+Un,wt,Ut,rt,mt);Ct.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else he?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Tt,G,Et,Jt,ae,rt,mt,St,Ge,te,ce.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(Tt,G,Et,Jt,ae,rt,mt,St,Ge,ce.data):z.texSubImage3D(Tt,G,Et,Jt,ae,rt,mt,St,Ge,te,ce):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,Et,Jt,rt,mt,Ge,te,ce.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,Et,Jt,ce.width,ce.height,Ge,ce.data):z.texSubImage2D(z.TEXTURE_2D,G,Et,Jt,rt,mt,Ge,te,ce);z.pixelStorei(z.UNPACK_ROW_LENGTH,yn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ee),z.pixelStorei(z.UNPACK_SKIP_PIXELS,nn),z.pixelStorei(z.UNPACK_SKIP_ROWS,vi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe),G===0&&B.generateMipmaps&&z.generateMipmap(Tt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(C,B,W=null,X=null,G=0){return C.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,C=arguments[2],B=arguments[3],G=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,B,W,X,G)},this.initRenderTarget=function(C){Rt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ct.unbindTexture()},this.resetState=function(){P=0,R=0,x=null,Ct.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Oa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Oa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xg extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ph extends Ie{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Be,h=Be,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Li=new jt,nc=new jt,js=[],ic=new mi,_g=new jt,cs=new nt,hs=new es;class za extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_g)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),ic.copy(t.boundingBox).applyMatrix4(Li),this.boundingBox.union(ic)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),hs.copy(t.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),t.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Li),nc.multiplyMatrices(n,Li),cs.matrixWorld=nc,cs.raycast(t,js);for(let o=0,a=js.length;o<a;o++){const l=js[o];l.instanceId=r,l.object=this,e.push(l)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ph(new Float32Array(s*this.count),s,this.count,Tr,cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ba extends vn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sc=new jt,pa=new vh,Zs=new es,Js=new k;class Dh extends _e{constructor(t=new Ae,e=new Ba){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,t.ray.intersectsSphere(Zs)===!1)return;sc.copy(s).invert(),pa.copy(t.ray).applyMatrix4(sc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=d,v=p;f<v;f++){const m=c.getX(f);Js.fromBufferAttribute(u,m),rc(Js,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let f=d,v=p;f<v;f++)Js.fromBufferAttribute(u,f),rc(Js,f,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rc(i,t,e,n,s,r,o){const a=pa.distanceSqToPoint(i);if(a<e){const l=new k;pa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Wi extends Ie{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ot:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,s=[],r=[],o=[],a=new k,l=new jt;for(let p=0;p<=t;p++){const f=p/t;s[p]=this.getTangentAt(f,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ga extends xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yg extends Ga{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Qs=new k,co=new Va,ho=new Va,uo=new Va;class Mg extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Qs.subVectors(s[0],s[1]).add(s[0]),c=Qs);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),co.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,v,m),ho.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,v,m),uo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,v,m)}else this.curveType==="catmullrom"&&(co.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ho.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),uo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(co.calc(l),ho.calc(l),uo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function bg(i,t){const e=1-i;return e*e*t}function Sg(i,t){return 2*(1-i)*i*t}function wg(i,t){return i*i*t}function _s(i,t,e,n){return bg(i,t)+Sg(i,e)+wg(i,n)}function Eg(i,t){const e=1-i;return e*e*e*t}function Tg(i,t){const e=1-i;return 3*e*e*i*t}function Ag(i,t){return 3*(1-i)*i*i*t}function Rg(i,t){return i*i*i*t}function ys(i,t,e,n,s){return Eg(i,t)+Tg(i,e)+Ag(i,n)+Rg(i,s)}class Lh extends xn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(t,s.x,r.x,o.x,a.x),ys(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cg extends xn{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(t,s.x,r.x,o.x,a.x),ys(t,s.y,r.y,o.y,a.y),ys(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kh extends xn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pg extends xn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends xn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dg extends xn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y),_s(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(oc(a,l.x,c.x,h.x,u.x),oc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var ac=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:Mg,CubicBezierCurve:Lh,CubicBezierCurve3:Cg,EllipseCurve:Ga,LineCurve:kh,LineCurve3:Pg,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:Dg,SplineCurve:Uh});class Lg extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ac[s.type]().fromJSON(s))}return this}}class kg extends Lg{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kh(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ih(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Lh(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ga(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cr extends Ae{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new k,d=new ot,p=new k,f=new k,v=new k;let m=0,g=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,g=t[w+1].y-t[w].y,p.x=g*1,p.y=-m,p.z=g*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[w+1].x-t[w].x,g=t[w+1].y-t[w].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let w=0;w<=e;w++){const A=n+w*h*s,y=Math.sin(A),E=Math.cos(A);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*y,u.y=t[P].y,u.z=t[P].x*E,o.push(u.x,u.y,u.z),d.x=w/e,d.y=P/(t.length-1),a.push(d.x,d.y);const R=l[3*P+0]*y,x=l[3*P+1],_=l[3*P+0]*E;c.push(R,x,_)}}for(let w=0;w<e;w++)for(let A=0;A<t.length-1;A++){const y=A+w*t.length,E=y,P=y+t.length,R=y+t.length+1,x=y+1;r.push(E,P,x),r.push(R,x,P)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.points,t.segments,t.phiStart,t.phiLength)}}class Xi extends Cr{constructor(t=1,e=1,n=4,s=8){const r=new kg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Xi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Pr extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new k,h=new ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ve extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let f=0;const v=[],m=n/2;let g=0;w(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(p,2));function w(){const y=new k,E=new k;let P=0;const R=(e-t)/n;for(let x=0;x<=r;x++){const _=[],S=x/r,M=S*(e-t)+t;for(let D=0;D<=s;D++){const b=D/s,U=b*l+a,O=Math.sin(U),I=Math.cos(U);E.x=M*O,E.y=-S*n+m,E.z=M*I,u.push(E.x,E.y,E.z),y.set(O,R,I).normalize(),d.push(y.x,y.y,y.z),p.push(b,1-S),_.push(f++)}v.push(_)}for(let x=0;x<s;x++)for(let _=0;_<r;_++){const S=v[_][x],M=v[_+1][x],D=v[_+1][x+1],b=v[_][x+1];(t>0||_!==0)&&(h.push(S,M,b),P+=3),(e>0||_!==r-1)&&(h.push(M,D,b),P+=3)}c.addGroup(g,P,0),g+=P}function A(y){const E=f,P=new ot,R=new k;let x=0;const _=y===!0?t:e,S=y===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),f++;const M=f;for(let D=0;D<=s;D++){const U=D/s*l+a,O=Math.cos(U),I=Math.sin(U);R.x=_*I,R.y=m*S,R.z=_*O,u.push(R.x,R.y,R.z),d.push(0,S,0),P.x=O*.5+.5,P.y=I*.5*S+.5,p.push(P.x,P.y),f++}for(let D=0;D<s;D++){const b=E+D,U=M+D;y===!0?h.push(U,U+1,b):h.push(U+1,U,b),x+=3}c.addGroup(g,x,y===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ee extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new k,d=new k,p=[],f=[],v=[],m=[];for(let g=0;g<=n;g++){const w=[],A=g/n;let y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const P=E/e;u.x=-t*Math.cos(s+P*r)*Math.sin(o+A*a),u.y=t*Math.cos(o+A*a),u.z=t*Math.sin(s+P*r)*Math.sin(o+A*a),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(P+y,1-A),w.push(c++)}h.push(w)}for(let g=0;g<n;g++)for(let w=0;w<e;w++){const A=h[g][w+1],y=h[g][w],E=h[g+1][w],P=h[g+1][w+1];(g!==0||o>0)&&p.push(A,y,P),(g!==n-1||l<Math.PI)&&p.push(y,E,P)}this.setIndex(p),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kn extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new k,u=new k,d=new k;for(let p=0;p<=n;p++)for(let f=0;f<=s;f++){const v=f/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=s;f++){const v=(s+1)*p+f-1,m=(s+1)*(p-1)+f-1,g=(s+1)*(p-1)+f,w=(s+1)*p+f;o.push(v,m,w),o.push(m,g,w)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ig extends Me{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class _t extends vn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ug extends vn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ts extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ng extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fo=new jt,lc=new k,cc=new k;class Ha{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fg extends Ha{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=$i*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ma extends Ts{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const hc=new jt,us=new k,po=new k;class Og extends Ha{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),us.setFromMatrixPosition(t.matrixWorld),n.position.copy(us),po.copy(n.position),po.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(po),n.updateMatrixWorld(),s.makeTranslation(-us.x,-us.y,-us.z),hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc)}}class Nh extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Og}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zg extends Ha{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bg extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new zg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gg extends Ts{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=uc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function uc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);function Hg(i,t,e,n){return!(t<=0||i>=t||e<n)}const dc={step:{cap:1,gap:.2},stepMonster:{cap:1,gap:.24},door:{cap:1,gap:.28},doorSlam:{cap:1,gap:.4},whisper:{cap:1,gap:7},scream:{cap:1,gap:14},growl:{cap:1,gap:1.6},sting:{cap:1,gap:1.4},flash:{cap:1,gap:.12},click:{cap:2,gap:.04},creak:{cap:1,gap:.45},thunder:{cap:1,gap:8},metallic:{cap:1,gap:2},shadow:{cap:1,gap:8},deep:{cap:1,gap:3}},ga={step:"fodtrin-gaaende.mp3",flash:"lommelygte-taend-sluk.mp3",metallic:"metallic.mp3",scream:"skrig.mp3",shadow:"pludselig-skygge-monster.mp3",deep:"dyb-lyd.mp3",bed:"baggrundslyd-hele-tiden-i-lav.mp3"};new Set(Object.keys(ga));function Wg(i){return new URL(`assets/audio/${i}`,document.baseURI).href}function Xg(i,t){const e=i.length/Math.max(1,t);if(e<.05||i.length<8)return[{start:0,end:e}];const n=Math.max(1,Math.floor(t*.01)),s=Math.max(n,Math.floor(t*.02)),r=[];for(let l=0;l+s<=i.length;l+=n){let c=0;for(let h=0;h<s;h++){const u=i[l+h];c+=u*u}r.push(Math.sqrt(c/s))}const o=[],a=8;for(let l=0;l<r.length;l++){if(r[l]<.08)continue;let c=!1;const h=Math.max(0,l-a),u=Math.min(r.length-1,l+a);for(let p=h;p<=u;p++)if(r[p]>r[l]){c=!0;break}if(c)continue;const d=l*n/t;o.length&&d-o[o.length-1]<.28||o.push(d)}return r.length&&r[0]>=.08&&(o.length===0||o[0]>.2)&&o.unshift(0),o.length<2?qg(e):o.map((l,c)=>{const h=Math.max(0,l-.028),u=o[c+1]??l+.42,d=Math.min(e,Math.max(l+.16,Math.min(l+.4,u-.02)));return{start:h,end:Math.max(h+.08,d)}})}function qg(i){const t=[];for(let n=0;n+.1<i;n+=.36)t.push({start:n,end:Math.min(i,n+.36)});return t.length||t.push({start:0,end:Math.min(i,.4)}),t}function Yg(i,t,e=.008){const n=Math.min(Math.floor(t*e),Math.floor(i.length/3));if(!(n<2))for(let s=0;s<n;s++){const r=s/n;i[s]*=r,i[i.length-1-s]*=r}}function Kg(i,t,e=.02){const n=Math.min(Math.floor(t*e),Math.floor(i.length/8));if(n<8)return;const s=i[0];for(let r=0;r<n;r++){const o=(r+1)/n,a=i.length-n+r;i[a]=i[a]*(1-o)+s*o}}function $g(i){let t=0;for(let e=0;e<i.length;e++){const n=Math.abs(i[e]);n>t&&(t=n)}return t}function jg(i){if(!i.length)return 0;let t=0;const e=Math.max(1,Math.floor(i.length/2e5));let n=0;for(let s=0;s<i.length;s+=e){const r=i[s];t+=r*r,n++}return Math.sqrt(t/Math.max(1,n))}const va=.8,fc=.7,mo=.85;function ai(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function pc(i,t,e=8){return Math.min(e,Math.max(0,t)/Math.max(.01,i*va))}function Zg(i,t){const n=.063/Math.max(.001,i*va);return Math.min(n,.45/Math.max(.001,t*va))}function Jg(i,t=!1){return Number.isFinite(i)?ai(i/100+(t?.25:0)):ai(t?.25:0)}function Qg(i,t,e,n){return i===t&&tv(n,e)}function tv(i,t){const e=i==="step"||i==="stepMonster"?200:i==="flash"||i==="click"?650:i==="scream"||i==="shadow"||i==="deep"||i==="metallic"?2300:1200;return t>=0&&t<=e}const mc=new Set(["scream","shadow","deep","metallic"]),ev=["door","doorSlam","locked","pickup","click","fail","whisper","growl","sting","key","generator","creak","thunder","paper","heartbeat","breath","lampBuzz","pipeKnock","distantBell","waterDrop","airRumble"],go={step:"step",stepMonster:"step",flash:"flash",metallic:"metallic",scream:"scream",shadow:"shadow",deep:"deep"};class nv{ctx=null;master=null;bedGain=null;stepGain=null;sfxGain=null;scareGain=null;analyser=null;buffers=new Map;extras=new Map;extraTried=!1;slices=[];activeSteps=new Set;bed=null;bedRunning=!1;bedBase=.4;prevState="";queue=[];epoch=1;liveSources=new Set;voices=[];lastPlayed=new Map;trackedPan=null;trackNext=!1;heartbeatLevel=0;breathLevel=0;nextHeartbeat=0;nextBreath=0;envZone="hall";envSequence=0;nextEnvironmentalCue=0;nextElectricalCue=0;humActive=!1;humPosition={x:0,y:0,z:0};tension=0;listenPos={x:0,y:0,z:0};listenRight={x:-1,z:0};moving=!1;trace=[];failures=[];masterVol=.8;musicVol=.7;sfxVol=.85;muted=!1;ensure(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;if(!t){this.fail("Ingen AudioContext i denne browser");return}const e=new t;this.ctx=e;const n=e.createGain(),s=e.createGain(),r=e.createGain(),o=e.createGain(),a=e.createGain(),l=e.createDynamicsCompressor();l.threshold.value=-3,l.knee.value=6,l.ratio.value=12,l.attack.value=.003,l.release.value=.08;const c=e.createAnalyser();c.fftSize=2048,c.channelCount=1,c.channelCountMode="explicit",c.channelInterpretation="speakers",s.connect(n),r.connect(n),o.connect(n),a.connect(n),n.connect(c),n.connect(l),l.connect(e.destination),this.master=n,this.bedGain=s,this.stepGain=r,this.sfxGain=o,this.scareGain=a,this.analyser=c,this.applyGains(),this.buffers.set("tap",rv(e));for(const h of ev)this.buffers.set(`cue:${h}`,sv(e,h));this.prevState=e.state,e.onstatechange=()=>{const h=e.state;this.mark(`state:${h}`),h==="running"&&this.prevState!=="running"&&(this.bedRunning=!1,this.ensureBed(),this.flush()),h!=="running"&&(this.bedRunning=!1,this.stopBed()),this.prevState=h},this.loadClips(),this.loadUserScares()}async loadUserScares(){if(this.extraTried||!this.ctx)return;this.extraTried=!0;const t=this.ctx,e={babyLaugh:"kilde%20baby%20grin.mp3",pigRhythm:"rytme%20griselyd.mp3"};await Promise.all(Object.keys(e).map(async n=>{try{const s="./audio/"+e[n],r=await fetch(s);if(!r.ok||!r.headers.get("content-type")?.includes("audio"))return;const o=await r.arrayBuffer();if(o.byteLength<256)return;const a=await t.decodeAudioData(o);if(a.duration<.5)return;this.extras.set(n,a),this.mark("load-ok:extra:"+n)}catch{}}))}playUserScare(t,e){const n=this.ctx,s=this.extras.get(t);if(!n||n.state!=="running"||!s)return!1;const r=performance.now()/1e3,o=t==="babyLaugh"?95:75;if(r-(this.lastPlayed.get(t)??-999)<o)return!1;const a=Math.hypot(e.x-this.listenPos.x,e.z-this.listenPos.z);if(a>15)return!1;const l=1/(1+(a/4)**2),c=(t==="babyLaugh"?.1:.12)*l,h=this.fire(s,this.sfxGain,c,1,e,!1);return h&&(this.lastPlayed.set(t,r),this.mark("extra:"+t)),h}resume(){this.ensure();const t=this.ctx;if(!t)return Promise.resolve();const e=t.resume();return this.mark(`resume:${t.state}`),e.then(()=>{this.mark(`state:${t.state}`),t.state==="running"&&(this.ensureBed(),this.flush())}).catch(n=>this.fail(`Kunne ikke starte lyd: ${String(n)}`))}async loadClips(){this.ensure();const t=this.ctx;t&&await Promise.all(Object.keys(ga).map(async e=>{const n=ga[e];try{const s=await fetch(Wg(n));if(!s.ok)throw new Error(`HTTP ${s.status} ${s.headers.get("content-type")??""}`);const r=await s.arrayBuffer();if(r.byteLength<64)throw new Error(`tom fil (${r.byteLength} bytes)`);const o=await t.decodeAudioData(r.slice(0));if(o.length<32)throw new Error("decode gav stilhed");if(e==="bed"){for(let a=0;a<o.numberOfChannels;a++)Kg(o.getChannelData(a),o.sampleRate);this.buffers.set("bed",o),this.tuneBed(),this.bedRunning=!1,this.ensureBed()}else e==="step"?(this.buffers.set("step",o),this.slices=this.cutSteps(o),this.mark(`steps:${this.slices.length}`)):this.buffers.set(e,o);this.mark(`load-ok:${n}`),this.flush()}catch(s){const r=s instanceof Error?s.message:String(s);this.fail(`${n}: ${r}`),this.mark(`load-fail:${n}`)}}))}setLocomotion(t,e,n){if(this.ensure(),!t){(this.moving||this.activeSteps.size>0)&&(this.stopFootsteps(),this.mark("step-stop")),this.moving=!1;return}this.moving||(this.moving=!0,this.mark("step-start"))}stopFootsteps(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(const n of this.activeSteps){n.amp.gain.cancelScheduledValues(e),n.amp.gain.setValueAtTime(n.amp.gain.value,e),n.amp.gain.linearRampToValueAtTime(1e-4,e+.035);try{n.source.stop(e+.045)}catch{}}this.activeSteps.clear()}playFootstep(t,e,n,s=1){this.ensure();const r=this.ctx;if(!r||r.state!=="running"||!this.slices.length)return;const o=this.slices[Math.floor(Math.random()*this.slices.length)],a=(e?.09:t?.2:.15)*(.92+Math.random()*.16),l=Math.min(3,pc(vo(o),a)*Math.max(0,s)),c=.97+Math.random()*.06;this.fire(o,this.stepGain,l,c,n,!1)&&this.mark(n?"stepMonster":"step")}play(t,e,n){this.ensure();const s=Math.max(0,Math.min(2,n?.volume??1)),r=this.ctx;if(t==="step"||t==="stepMonster"){if(t==="stepMonster"){const a=performance.now()/1e3;if(a-(this.lastPlayed.get(t)??-999)<dc.stepMonster.gap)return;this.lastPlayed.set(t,a)}this.playFootstep(t==="stepMonster",!1,e,s);return}const o=go[t];if(o&&!this.buffers.has(o)||!r||r.state!=="running"){this.enqueue({kind:t,pos:e,volume:s,occluded:n?.occluded,rate:n?.rate}),this.mark(`defer:${t}`);return}this.emit(t,e,s,!!n?.occluded,n?.rate??1)}playTracked(t,e){this.trackNext=!0;try{this.play(t,e,{volume:1})}finally{this.trackNext=!1}}moveTracked(t){const e=this.trackedPan;if(!e)return;const n=this.panOf(t);e.pan.value=n}hush(t=2){const e=this.ctx,n=this.bedGain;if(!e||!n||e.state!=="running")return;const s=e.currentTime;n.gain.cancelScheduledValues(s),n.gain.setValueAtTime(Math.max(1e-4,n.gain.value),s);const r=this.bedBase*this.musicVol/fc;n.gain.linearRampToValueAtTime(Math.max(0,r*.35),s+.05),n.gain.linearRampToValueAtTime(r,s+Math.max(.4,t)),this.mark("hush")}setVolumes(t,e,n){this.masterVol=ai(t),this.musicVol=ai(e),this.sfxVol=ai(n),this.tuneBed(),this.applyGains()}duck(t){this.muted=t,this.applyGains()}setListener(t,e,n){this.listenPos=t;const s=Math.hypot(e.x,e.z)||1;this.listenRight={x:-e.z/s,z:e.x/s}}setTension(t,e){this.tension=Jg(t,e)}beginScene(){this.epoch+=1,this.queue=[],this.heartbeatLevel=0,this.breathLevel=0,this.stopLive(),this.holdAmbience(2.4),this.mark(`scene:${this.epoch}`)}suspendTransient(){this.queue=[],this.heartbeatLevel=0,this.breathLevel=0,this.stopLive(),this.holdAmbience(1.6),this.mark("suspend")}setHeartbeat(t){this.heartbeatLevel=ai(t)}setBreath(t){this.breathLevel=ai(t)}setHum(t,e){this.humActive=t,this.humPosition=e}setRadio(t,e){}roomTones=!1;enableRoomTones(){this.roomTones=!0}setZone(t){t!==this.envZone&&(this.envZone=t,this.nextEnvironmentalCue=(this.ctx?.currentTime??0)+3.2)}update(t){const e=this.ctx;if(!e||e.state!=="running"||this.muted)return;const n=e.currentTime;if(this.heartbeatLevel>.15&&n>=this.nextHeartbeat){const s=this.buffers.get("cue:heartbeat");s&&this.fire(s,this.sfxGain,this.heartbeatLevel*.24,1,void 0,!1),this.nextHeartbeat=n+1-.3*this.heartbeatLevel}if(this.breathLevel>.3&&n>=this.nextBreath){const s=this.buffers.get("cue:breath");s&&this.fire(s,this.sfxGain,this.breathLevel*.25,1,void 0,!1),this.nextBreath=n+3.2}if(!this.roomTones&&n>=this.nextEnvironmentalCue){const s=this.envSequence++,r={hall:["airRumble","pipeKnock","waterDrop"],corridor:["airRumble","pipeKnock","waterDrop"],cellar:["pipeKnock","waterDrop","airRumble"],chapel:["distantBell","airRumble","pipeKnock"],upper:["airRumble","distantBell","waterDrop"],dark:["pipeKnock","airRumble","distantBell"],slagter:["pipeKnock","airRumble","waterDrop"]},o=r[this.envZone]??r.hall,a=o[s%o.length];this.play(a,void 0,{volume:.18+this.tension*.12}),this.nextEnvironmentalCue=n+9.5+s*7%8-this.tension*2}if(this.humActive&&n>=this.nextElectricalCue){const s=this.buffers.get("cue:lampBuzz");s&&this.fire(s,this.sfxGain,.065,.94+.1*Math.sin(n),this.humPosition,!1),this.nextElectricalCue=n+5+this.envSequence*3%5}}debug(){return{state:this.ctx?.state??"none",voices:this.voices.filter(t=>t.until>performance.now()/1e3).length,sampleRate:this.ctx?.sampleRate??0,last:this.trace.slice(-8),failures:this.failures.slice()}}sampleMix(t){this.ensure();const e=this.ctx,n=this.analyser;if(!e||!n)return Promise.resolve({peak:0,jumps:0,state:"none"});e.resume();const s=new Float32Array(n.fftSize);let r=0,o=0;const a=performance.now();return new Promise(l=>{const c=()=>{n.getFloatTimeDomainData(s);let h=s[0]??0;for(let u=0;u<s.length;u++){const d=s[u]??0,p=Math.abs(d);p>r&&(r=p),u>0&&Math.abs(d-h)>.5&&o++,h=d}performance.now()-a<t?setTimeout(c,16):l({peak:r,jumps:o,state:e.state})};c()})}async measureBed(){await this.resume();const t=this.ctx;return!t||t.state!=="running"?{rms:0,peak:0,state:t?.state??"none"}:(this.ensureBed(),{...await this.capture(900),state:t.state})}async audition(t){await this.resume();const e=this.ctx;if(!e||e.state!=="running")return{rms:0,peak:0,state:e?.state??"none",played:!1};const n=this.bedGain,s=this.bedBase;n&&(n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(0,e.currentTime)),await ov(90);const r=this.trace.length;t==="step"?this.playFootstep(!1,!1):this.play(t,void 0,{volume:1});const o=this.trace.length>r&&!this.trace[this.trace.length-1].startsWith("defer:"),a=t==="flash"||t==="step"?550:1400,l=await this.capture(a);return n&&(n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(s,e.currentTime)),{...l,state:e.state,played:o}}emit(t,e,n,s,r=1){const o=this.ctx;if(!o||o.state!=="running"){this.enqueue({kind:t,pos:e,volume:n,occluded:s,rate:r});return}const a=performance.now()/1e3;this.voices=this.voices.filter(f=>f.until>a);const l=dc[t]??{cap:2,gap:.05};if(!Hg(this.voices.filter(f=>f.kind===t).length,l.cap,a-(this.lastPlayed.get(t)??-999),l.gap))return;const c=go[t],h=(c?this.buffers.get(c):this.buffers.get(`cue:${t}`))??this.buffers.get("tap");if(!h)return;const u=mc.has(t),d=(u?.45:t==="flash"?.28:.12)*Math.max(0,Math.min(1.4,n)),p=pc(vo(h),d)*(s?.65:1);this.fire(h,u?this.scareGain:this.sfxGain,p,r,e,u)&&(this.lastPlayed.set(t,a),this.voices.push({kind:t,until:a+h.duration/Math.max(.2,r)}),this.mark(t))}fire(t,e,n,s,r,o){const a=this.ctx;if(!a||!e||a.state!=="running")return!1;const l=a.currentTime,c=a.createBufferSource();c.buffer=t,c.playbackRate.value=s;const h=a.createGain(),u=Math.max(.05,t.duration/s),d=Math.min(.012,u*.1),p=Math.min(.02,u*.15);h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(Math.max(1e-4,n),l+d),h.gain.setValueAtTime(Math.max(1e-4,n),l+Math.max(d,u-p)),h.gain.linearRampToValueAtTime(1e-4,l+u),c.connect(h);let f=null;return r?(f=a.createStereoPanner(),f.pan.value=this.panOf(r)*(o?.55:1),h.connect(f),f.connect(e),this.trackNext&&(this.trackedPan=f)):h.connect(e),e===this.stepGain&&this.activeSteps.add({source:c,amp:h}),this.liveSources.add(c),c.start(l),c.stop(l+u+.03),c.onended=()=>{this.liveSources.delete(c);for(const v of this.activeSteps)v.source===c&&this.activeSteps.delete(v);try{c.disconnect(),h.disconnect(),f?.disconnect()}catch{}this.trackedPan===f&&(this.trackedPan=null)},!0}panOf(t){const e=t.x-this.listenPos.x,n=t.z-this.listenPos.z,s=(e*this.listenRight.x+n*this.listenRight.z)/(Math.hypot(e,n)||1);return Math.max(-.7,Math.min(.7,s))}enqueue(t){(mc.has(t.kind)||t.kind==="flash")&&(this.queue=this.queue.filter(e=>e.kind!==t.kind)),this.queue.push({...t,queuedAt:performance.now(),epoch:this.epoch}),this.queue.length>8&&this.queue.shift()}flush(){if(!this.ctx||this.ctx.state!=="running")return;const t=this.queue.splice(0);for(const e of t){if(!Qg(e.epoch,this.epoch,performance.now()-e.queuedAt,e.kind)){this.mark(`expired:${e.kind}`);continue}if(e.kind==="step"||e.kind==="stepMonster")continue;const n=go[e.kind];if(n&&!this.buffers.has(n)){this.queue.push(e);continue}this.emit(e.kind,e.pos,e.volume,!!e.occluded,e.rate??1)}}holdAmbience(t){const e=(this.ctx?.currentTime??0)+Math.max(0,t);this.nextEnvironmentalCue=Math.max(this.nextEnvironmentalCue,e),this.nextHeartbeat=Math.max(this.nextHeartbeat,e),this.nextBreath=Math.max(this.nextBreath,e),this.nextElectricalCue=Math.max(this.nextElectricalCue,e)}stopLive(){for(const t of this.liveSources)try{t.stop()}catch{}this.liveSources.clear(),this.activeSteps.clear()}ensureBed(){if(this.bedRunning)return;const t=this.ctx,e=this.buffers.get("bed");if(!t||t.state!=="running"||!e||!this.bedGain)return;this.stopBed();const n=t.createBufferSource();n.buffer=e,n.loop=!0,n.connect(this.bedGain),n.start(t.currentTime),this.bed=n,this.bedRunning=!0,this.mark("bed-start")}stopBed(){if(this.bed){try{this.bed.stop()}catch{}try{this.bed.disconnect()}catch{}this.bed=null,this.bedRunning=!1}}tuneBed(){const t=this.buffers.get("bed");t&&(this.bedBase=Zg(iv(t),vo(t)),this.applyGains())}applyGains(){const t=this.ctx?.currentTime??0,e=(n,s)=>{n&&(n.gain.cancelScheduledValues(t),n.gain.setTargetAtTime(s,t,.025))};e(this.master,this.masterVol*(this.muted?.4:1)),e(this.bedGain,this.bedBase*this.musicVol/fc),e(this.stepGain,this.sfxVol/mo),e(this.sfxGain,this.sfxVol/mo),e(this.scareGain,this.sfxVol/mo)}cutSteps(t){const e=this.ctx;if(!e)return[];const n=new Float32Array(t.length),s=t.numberOfChannels;for(let o=0;o<s;o++){const a=t.getChannelData(o);for(let l=0;l<a.length;l++)n[l]+=a[l]/s}return Xg(n,t.sampleRate).map(o=>{const a=Math.max(0,Math.floor(o.start*t.sampleRate)),l=Math.min(t.length,Math.max(a+8,Math.floor(o.end*t.sampleRate))),c=e.createBuffer(s,l-a,t.sampleRate);for(let h=0;h<s;h++){const u=c.getChannelData(h);t.copyFromChannel(u,h,a),Yg(u,t.sampleRate,.008)}return c})}capture(t){const e=this.analyser;if(!e)return Promise.resolve({rms:0,peak:0});const n=new Float32Array(e.fftSize),s=performance.now();let r=0,o=0,a=0;return new Promise(l=>{const c=()=>{e.getFloatTimeDomainData(n);for(let h=0;h<n.length;h++){const u=n[h]??0,d=Math.abs(u);d>r&&(r=d),o+=u*u,a++}performance.now()-s<t?setTimeout(c,20):l({rms:Math.sqrt(o/Math.max(1,a)),peak:r})};c()})}mark(t){this.trace.push(t),this.trace.length>100&&this.trace.splice(0,this.trace.length-80)}fail(t){this.failures.push(t),this.failures.length>12&&this.failures.shift(),this.mark(`fejl:${t}`),console.error(`[Skt. Agnes] Lyd: ${t}`)}}function vo(i){let t=0;for(let e=0;e<i.numberOfChannels;e++)t=Math.max(t,$g(i.getChannelData(e)));return t}function iv(i){let t=0;for(let e=0;e<i.numberOfChannels;e++)t=Math.max(t,jg(i.getChannelData(e)));return t}function sv(i,t){const e={door:[.26,95,55],doorSlam:[.46,82,38],locked:[.22,220,155],pickup:[.21,410,520],click:[.1,420,280],fail:[.21,135,65],whisper:[1.4,330,160],growl:[.75,72,45],sting:[.8,260,64],key:[.18,630,740],generator:[1.1,54,85],creak:[.75,130,68],thunder:[1.6,74,25],paper:[.2,270,190],heartbeat:[.3,58,42],breath:[1.25,185,120],lampBuzz:[.54,80,97],pipeKnock:[.72,110,48],distantBell:[2.2,185,169],waterDrop:[.21,600,210],airRumble:[2.8,49,63]},[n,s,r]=e[t]??[.1,180,180],o=i.sampleRate,a=Math.max(64,Math.floor(o*n)),l=i.createBuffer(1,a,o),c=l.getChannelData(0);let h=0;for(let u=0;u<a;u++){const d=u/a;h+=2*Math.PI*(s+(r-s)*d)/o;const p=Math.pow(Math.sin(Math.PI*d),1.3),f=t==="heartbeat"?d<.35?1:d>.48&&d<.78?.55:0:1;c[u]=(Math.sin(h)*.76+Math.sin(h*1.98)*.18)*p*f*.45}return l}function rv(i){const t=i.sampleRate,e=Math.floor(t*.09),n=i.createBuffer(1,e,t),s=n.getChannelData(0);for(let r=0;r<e;r++){const o=Math.sin(Math.PI*r/(e-1));s[r]=Math.sin(2*Math.PI*180*r/t)*o*.4}return n}function ov(i){return new Promise(t=>setTimeout(t,i))}function av(i=0,t=0,e=0){return{x:i,y:t,z:e}}function je(i,t,e){return Math.max(t,Math.min(e,i))}function Fh(i,t,e){return i+(t-i)*e}function ws(i,t){const e=i.x-t.x,n=i.z-t.z;return Math.hypot(e,n)}function lv(i,t){return Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)}function Oh(i){return{x:Math.sin(i),z:Math.cos(i)}}function zh(i){return{x:-Math.cos(i),z:Math.sin(i)}}function gc(i,t,e,n,s=!1){const r=s?-n:n;return{yaw:i-e,pitch:je(t-r,-1.2,1.2)}}function cv(i){let t=i;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function xo(i,t){return cv(t-i)}function zi(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function xa(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class hv{a=[];get size(){return this.a.length}push(t,e){const n=this.a;n.push({p:t,id:e});let s=n.length-1;for(;s>0;){const r=s-1>>1;if(n[r].p<=n[s].p)break;const o=n[r];n[r]=n[s],n[s]=o,s=r}}pop(){const t=this.a;if(!t.length)return;const e=t[0],n=t.pop();if(t.length>0&&n){t[0]=n;let s=0;for(;;){const r=s*2+1,o=r+1;let a=s;if(r<t.length&&t[r].p<t[a].p&&(a=r),o<t.length&&t[o].p<t[a].p&&(a=o),a===s)break;const l=t[a];t[a]=t[s],t[s]=l,s=a}}return e}}function Dr(i,t){return!(t.allowFloor&&!t.allowFloor(i.floor)||i.doorId&&t.blockDoor&&t.blockDoor(i.doorId))}function uv(i,t,e,n={}){const s=i.nodes;if(!s.length)return null;const r=_o(i,t,n);if(r<0)return null;const o=pv(e.y),a=!n.allowFloor||n.allowFloor(o);let l=-1;if(a?l=_o(i,e,n):(l=fv(i,e,n),l<0&&(l=_o(i,e,n))),l<0)return null;const c=mv(s,r,l,u=>Dr(s[u],n));if(!c)return null;const h=c.map(u=>({x:s[u].x,y:s[u].y,z:s[u].z}));return gv(h,i,n,dv(i))}function dv(i){const t=new Map;for(const e of i.nodes){const n=`${e.ix},${e.iz}`;let s=t.get(n);s||(s=[],t.set(n,s)),s.push(e.id)}return t}function _o(i,t,e,n){let s=-1,r=1/0;for(const o of i.nodes){if(!Dr(o,e))continue;const a=Math.abs(o.y-t.y);if(a>3.2)continue;const l=(o.x-t.x)**2+(o.z-t.z)**2+a*a*.15;l<r&&(r=l,s=o.id)}return s}function fv(i,t,e){let n=-1,s=1/0;for(const r of i.nodes){if(!r.stair||!Dr(r,e))continue;const o=(r.x-t.x)**2+(r.z-t.z)**2;o<s&&(s=o,n=r.id)}return n}function pv(i){return i<2?-1:i<6?0:1}function mv(i,t,e,n){if(!n(t)||!n(e))return null;if(t===e)return[t];const s=new Map,r=new Map,o=new Set,a=new hv;s.set(t,0);const l=ws(i[t],i[e]);a.push(l,t);const c=i.length*12+32;let h=0;for(;a.size>0&&h++<c;){const u=a.pop();if(!u)break;const d=u.id;if(o.has(d))continue;if(d===e){const f=[d];let v=d;for(;r.has(v);)v=r.get(v),f.push(v);return f.reverse(),f}o.add(d);const p=s.get(d)??1/0;for(const f of i[d].links){if(!n(f.to)||o.has(f.to))continue;const v=p+f.cost;if(v+1e-6<(s.get(f.to)??1/0)){s.set(f.to,v),r.set(f.to,d);const m=ws(i[f.to],i[e]);a.push(v+m,f.to)}}}return null}function gv(i,t,e,n){if(i.length<3)return i;const s=[i[0]];let r=0;for(;r<i.length-1;){let o=i.length-1;for(;o>r+1&&!vv(i[r],i[o],t,e,n);)o--;s.push(i[o]),r=o}return s}function vv(i,t,e,n,s){const r=lv(i,t),o=Math.max(2,Math.ceil(r/.25));for(let a=1;a<o;a++){const l=a/o,c={x:i.x+(t.x-i.x)*l,y:i.y+(t.y-i.y)*l,z:i.z+(t.z-i.z)*l};if(!xv(e,c,n,s))return!1}return!0}function xv(i,t,e,n){const s=i.cellSize,r=Math.floor(t.x/s),o=Math.floor(t.z/s);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){const c=n.get(`${r+a},${o+l}`);if(c)for(const h of c){const u=i.nodes[h];if(!Dr(u,e))continue;const d=u.x-t.x,p=u.z-t.z;if(d*d+p*p<=.42*.42&&Math.abs(u.y-t.y)<1.05)return!0}}return!1}function vc(i={}){return{state:"Patrol",stateTime:0,waypointIndex:0,goal:null,lastSeen:null,lastHeard:null,suspicion:0,attackCooldown:0,unseenTime:0,searchLeft:0,blindTime:0,hesitate:0,speedMul:1,...i}}function _v(i){return{...i,goal:i.goal?{...i.goal}:null,lastSeen:i.lastSeen?{...i.lastSeen}:null,lastHeard:i.lastHeard?{...i.lastHeard}:null}}function yv(i,t){const e=_v(i),n=Math.max(0,t.dt);e.stateTime+=n,e.attackCooldown=Math.max(0,e.attackCooldown-n),e.blindTime=Math.max(0,e.blindTime-n),e.hesitate=Math.max(0,e.hesitate-n),e.suspicion=Math.max(0,e.suspicion-n*.045);const s=e.blindTime>0,r=t.canSee&&!s&&!t.hiding;r?(e.unseenTime=0,e.lastSeen={...t.playerPos},e.suspicion=Math.min(1,e.suspicion+n*.7)):e.unseenTime+=n,t.flashlightHit&&!s&&(e.suspicion=Math.min(1,e.suspicion+n*1.1),e.lastSeen=e.lastSeen??{...t.playerPos}),t.hear&&t.hear.loudness>.12&&(e.lastHeard={...t.hear.pos},e.suspicion=Math.min(1,e.suspicion+t.hear.loudness*.25));let o=!1,a=!1;const l=(f,v)=>{e.state!==f&&(e.state=f,e.stateTime=0,e.speedMul=.88+t.rng()*.24,f==="Search"&&(e.searchLeft=6.5+t.rng()*3),f==="Attack"&&(e.attackCooldown=1.5,o=!0)),v&&(e.goal={...v})};if(t.hiding&&t.hideSpot&&t.knowsHide&&(e.state==="Search"||e.state==="Suspicious"||e.state==="Chase"||e.state==="Investigate")&&ws(t.monsterPos,t.hideSpot)<1.75){const v=(t.holdBreath?.055:.26)*(.35+e.suspicion);t.rng()<v*n&&(a=!0)}const c=r&&t.allowChase&&t.distance<=1.32&&e.attackCooldown<=0;e.state!=="Attack"&&(c?l("Attack",t.playerPos):r&&t.allowChase?e.state==="Chase"?e.goal={...t.playerPos}:e.state==="LostPlayer"?l("Chase",t.playerPos):e.state==="Suspicious"?(e.goal={...t.playerPos},e.hesitate<=0&&l("Chase",t.playerPos)):(l("Suspicious",t.playerPos),e.hesitate=.45+t.rng()*1.15):r&&!t.allowChase||t.flashlightHit&&!s&&(e.state==="Idle"||e.state==="Patrol"||e.state==="ReturnToPatrol"||e.state==="Investigate")?l("Suspicious",t.playerPos):t.hear&&t.hear.loudness>.38&&e.state!=="Chase"&&e.state!=="LostPlayer"&&e.state!=="Suspicious"&&(t.hear.loudness>.84&&t.distance<6.5&&t.allowChase&&t.rng()<.55?l("Chase",t.hear.pos):l("Investigate",t.hear.pos)));const h=()=>{const f=t.waypoints;return f.length?(e.waypointIndex=(e.waypointIndex+1)%f.length,{...f[e.waypointIndex]}):e.goal},u=()=>{const f=t.waypoints;if(!f.length)return e.goal;let v=0,m=1/0;for(let g=0;g<f.length;g++){const w=ws(t.monsterPos,f[g]);w<m&&(m=w,v=g)}return e.waypointIndex=v,{...f[v]}};switch(e.state){case"Idle":e.stateTime>1.5+t.rng()*2&&l("Patrol",h()??t.monsterPos);break;case"Patrol":!e.goal&&t.waypoints.length&&(e.goal={...t.waypoints[e.waypointIndex%t.waypoints.length]}),t.atGoal&&(t.rng()<.16?l("Idle",t.monsterPos):e.goal=h());break;case"Investigate":(t.atGoal||e.stateTime>11)&&l("Search",e.goal??t.monsterPos);break;case"Search":if(e.searchLeft-=n,t.atGoal){const f=e.lastHeard??e.lastSeen??t.monsterPos,v=Mv(f,t.searchSpots,t.checkedIds,t.rng);v.id&&t.checkedIds.add(v.id),e.goal=v.pos}e.searchLeft<=0&&l("ReturnToPatrol",u()??t.monsterPos);break;case"Suspicious":!r&&(t.atGoal&&e.stateTime>2.2||e.stateTime>8)&&l("Search",e.goal??t.monsterPos);break;case"Chase":r?e.goal={...t.playerPos}:e.lastSeen&&(e.goal={...e.lastSeen}),!r&&e.unseenTime>.55&&l("LostPlayer",e.lastSeen?{...e.lastSeen}:{...t.playerPos});break;case"Attack":e.stateTime>.82&&(r&&t.distance<2.4?l("Chase",t.playerPos):l("LostPlayer",e.lastSeen?{...e.lastSeen}:{...t.playerPos}));break;case"LostPlayer":(t.atGoal||e.stateTime>6.2)&&l("Search",e.goal??t.monsterPos);break;case"ReturnToPatrol":e.goal||(e.goal=u()),(t.atGoal||e.stateTime>16)&&l("Patrol",e.goal??h());break}let p={Idle:0,Patrol:1.48,Investigate:2.2,Search:1.22,Suspicious:1.28,Chase:3.7+t.aggression*.85,Attack:.85,LostPlayer:2.35,ReturnToPatrol:1.6}[e.state]*e.speedMul;return e.hesitate>0&&e.state==="Suspicious"&&(p*=.72),s&&(p*=.45),{bb:e,speed:p,attackPulse:o,foundHiding:a}}function Mv(i,t,e,n){const s=t.filter(o=>!e.has(o.id)&&ws(i,o.pos)<8);if(s.length){const o=s[Math.floor(n()*s.length)%s.length];return{id:o.id,pos:{...o.pos}}}const r=n()*Math.PI*2;return{id:null,pos:av(i.x+Math.cos(r)*2,i.y,i.z+Math.sin(r)*2)}}function bv(i){return i==="Run"||i==="Attack"?.62:i==="Search"?.5:.36}function Sv(i,t){return i==="Attack"?{clip:"Attack",timeScale:1}:i==="Search"||i==="Investigate"||i==="Suspicious"||i==="LostPlayer"?{clip:"Search",timeScale:.85}:i==="Idle"||t<.15?{clip:"Idle",timeScale:1}:i==="Chase"||t>2.6?{clip:"Run",timeScale:Math.max(.75,Math.min(1.35,t/3.4))}:{clip:"Walk",timeScale:Math.max(.7,Math.min(1.25,t/1.5))}}const wv=1.25;function Ev(i,t){return t>0||i<=.05?"none":i>=wv?"banish":"blind"}const Vn=1e-4;function Tv(i,t,e,n){return n.standOnly&&e?!1:i+t>n.minY+.02&&i<n.maxY-.02}function Av(i,t,e,n,s,r,o){const a=t+s;for(const l of o)if(!(l.standOnly&&r)&&!(a<=l.minY+.02||t>=l.maxY-.02)&&!(i<=l.minX-n||i>=l.maxX+n)&&!(e<=l.minZ-n||e>=l.maxZ+n))return!0;return!1}function Bh(i,t,e,n,s,r){let o=i.x,a=i.z,l=!1;const c=r.filter(u=>Tv(i.y,n,s,u)),h=(u,d)=>{if(d!==0){u==="x"?o+=d:a+=d;for(let p=0;p<2;p++)for(const f of c){const v=f.minX-e,m=f.maxX+e,g=f.minZ-e,w=f.maxZ+e;if(u==="x"){if(a<=g+Vn||a>=w-Vn)continue;d>0&&i.x<=v+Vn&&o>v?(o=v,l=!0):d<0&&i.x>=m-Vn&&o<m?(o=m,l=!0):o>v&&o<m&&a>g&&a<w&&i.x>v&&i.x<m&&(o=o-v<m-o?v:m,l=!0)}else{if(o<=v+Vn||o>=m-Vn)continue;d>0&&i.z<=g+Vn&&a>g?(a=g,l=!0):d<0&&i.z>=w-Vn&&a<w?(a=w,l=!0):a>g&&a<w&&o>v&&o<m&&i.z>g&&i.z<w&&(a=a-g<w-a?g:w,l=!0)}}}};return h("x",t.x),h("z",t.z),{x:o,y:i.y,z:a,hit:l}}function xc(i,t,e,n,s){for(const r of s){if(!r.standOnly||t<=r.minX||t>=r.maxX||e<=r.minZ||e>=r.maxZ)continue;if(i+n>r.minY+.02&&i<r.maxY-.02)return!0}return!1}function Gh(i,t,e){const n=t.x-i.x,s=t.y-i.y,r=t.z-i.z;let o=0,a=1;const l=[[n,i.x,e.minX,e.maxX],[s,i.y,e.minY,e.maxY],[r,i.z,e.minZ,e.maxZ]];for(const[c,h,u,d]of l){if(Math.abs(c)<1e-8){if(h<u||h>d)return!1;continue}let p=(u-h)/c,f=(d-h)/c;if(p>f){const v=p;p=f,f=v}if(p>o&&(o=p),f<a&&(a=f),o>a)return!1}return a>.02&&o<.98}function br(i,t,e){for(const n of e)if(Gh(i,t,n))return!1;return!0}function tr(i,t,e,n=2.35){let s=null,r=n;const o=Math.hypot(t.x,t.y,t.z)||1,a=t.x/o,l=t.y/o,c=t.z/o;for(const d of e){const p=d.x-i.x,f=d.y-i.y,v=d.z-i.z,m=p*a+f*l+v*c;if(m<0||m>n)continue;const g=i.x+a*m,w=i.y+l*m,A=i.z+c*m;Math.hypot(g-d.x,w-d.y,A-d.z)<=d.radius&&m<r&&(s=d,r=m)}if(s)return s;let h=.35,u=n;for(const d of e){const p=d.x-i.x,f=d.y-i.y,v=d.z-i.z,m=Math.hypot(p,f,v);if(m>n||m<.001)continue;const g=(p*a+f*l+v*c)/m;g>h&&m<u+.4&&(s=d,h=g,u=m)}return s}const Rv={sprint:13,walk:4.3,crouch:1.15,door:16,drop:11,jump:8,landing:6,voice:9};function Cv(i){return Rv[i]}function Pv(i){switch(i){case"sprint":return .92;case"door":return .88;case"drop":return .7;case"jump":return .58;case"landing":return .5;case"voice":return .64;case"walk":return .42;case"crouch":return .14}}function Vh(i,t){return Math.pow(.52,Math.abs(i))*(t?.38:1)}function Dv(i,t,e,n){const s=Math.hypot(i.x-t.x,i.z-t.z),r=1.15-Math.min(1,Math.max(0,e))*.7,o=(1.1+s*.18)*r,a=n()*Math.PI*2;return{x:i.x+Math.cos(a)*o,y:i.y,z:i.z+Math.sin(a)*o}}function Lv(i,t,e,n,s){const r=Cv(e)*Vh(n,s);return Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)<=r}function kv(i,t,e,n,s,r){const o=e.x-i.x,a=e.y-i.y,l=e.z-i.z,c=Math.hypot(o,a,l);if(c>s)return!1;if(c<.2)return!0;const h=Math.hypot(o,l)||1e-4;return(t.x*o+t.z*l)/h<n||Math.abs(a)>2.6&&c>3.5?!1:br(i,e,r)}function Hh(i,t,e,n,s,r){const o=e.x-i.x,a=e.y-i.y,l=e.z-i.z,c=Math.hypot(o,a,l);if(c>s||c<.05)return!1;const h=Math.hypot(t.x,t.y,t.z)||1;return(t.x*o+t.y*a+t.z*l)/(h*c)<n?!1:br(i,e,r)}const Iv=.36,Uv=1.95,Nv=Math.cos(48*Math.PI/180);class Fv{group=new Kt;bb=vc();pos={x:18,y:0,z:24};yaw=0;path=[];pathI=0;repath=0;goalKey="";phase=0;stuckT=0;stuckTries=0;anchorX=0;anchorZ=0;pelvis=null;spine=null;neck=null;head=null;thighL=null;thighR=null;shinL=null;shinR=null;footL=null;footR=null;armL=null;armR=null;foreL=null;foreR=null;checked=new Set;glide=0;watch=0;lookAt=0;beamTime=0;beamImmune=0;concealed=!1;constructor(){const t=new _t({color:"#353332",roughness:.94,metalness:.01}),e=new _t({color:"#232525",roughness:.99,metalness:0}),n=new _t({color:"#100c0c",roughness:.45}),s=new _t({color:"#1a1412",roughness:.5}),r=new _t({color:"#373a37",roughness:1,side:me}),o=new _t({color:"#321e20",roughness:.98}),a=new _t({color:"#5d5953",roughness:.98}),l=new Kt;l.position.y=.96,this.pelvis=l,l.add(fn(new nt(new Ee(.13,12,8),t),1.15,.72,.85));const c=new Kt;c.position.y=.02,c.rotation.x=.38,this.spine=c,l.add(c);const h=fn(new nt(Ov(),t));c.add(h);const u=new nt(new fe(.44,.67),r);u.position.set(0,-.03,.185),u.rotation.z=-.1,c.add(u);for(let x=0;x<5;x++){const _=fn(new nt(new Ht(.18+x*.007,.018,.025),a));_.position.set(x%2?-.08:.08,.23-x*.107,.208),_.rotation.z=(x%2?1:-1)*.21,c.add(_)}const d=fn(new nt(new Ee(.1,8,6),o));d.scale.set(1.3,.28,.25),d.position.set(.02,-.13,.19),c.add(d);for(let x=0;x<5;x++){const _=new nt(new fe(.052,.23+x*.05),r);_.position.set((x-2)*.075,-.43-x%2*.045,.13),_.rotation.z=(x-2)*.09,c.add(_)}const p=fn(new nt(new Xi(.07,.22,3,6),t));p.rotation.z=Math.PI/2,p.position.y=.4,c.add(p);const f=this.leg(t,-1,.5,.46),v=this.leg(t,1,.47,.44);l.add(f.hip,v.hip),this.thighL=f.thigh,this.thighR=v.thigh,this.shinL=f.shin,this.shinR=v.shin,this.footL=f.foot,this.footR=v.foot;const m=this.arm(t,-1,.46,.4),g=this.arm(t,1,.42,.38);c.add(m.shoulder,g.shoulder),this.armL=m.upper,this.armR=g.upper,this.foreL=m.fore,this.foreR=g.fore;const w=new Kt;w.position.set(0,.52,.02),w.rotation.x=-.28,this.neck=w,c.add(w),w.add(ki(.14,.042,.036,t,1));const A=new Kt;A.position.y=.14,this.head=A,w.add(A);const y=fn(new nt(new Ee(.144,17,12),e));y.scale.set(.86,1.15,.68),y.position.y=.07;const E=new nt(zv(),r);E.position.set(0,.045,-.015),E.rotation.z=.07,E.castShadow=!0;const P=new nt(new Ee(.125,14,10),n);P.scale.set(.85,1.17,.27),P.position.set(0,.06,.155),A.add(y,P,E);for(let x=0;x<6;x++){const _=new nt(new fe(.18+x%3*.028,.035),r);_.position.set(x%2?-.013:.013,.2-x*.05,.205),_.rotation.z=(x%3-1)*.18,A.add(_)}for(let x=0;x<4;x++){const _=new nt(new Ht(.006,.027,.006),s);_.position.set(-.038+x*.025,-.12,.205),_.rotation.z=x%2?.35:-.3,A.add(_)}const R=new nt(new fe(.31,.64,4,4),r);R.position.set(.15,-.35,.228),R.rotation.z=-.17,c.add(R),this.group.add(l),this.group.visible=!1}leg(t,e,n,s){const r=new Kt;r.position.set(e*.09,-.02,0);const o=new Kt;r.add(o),o.add(ki(n,.055,.042,t));const a=new Kt;a.position.y=-n,o.add(a),a.add(ki(s,.04,.03,t));const l=new Kt;l.position.y=-s,a.add(l);const c=fn(new nt(new Ht(.07,.035,.16),t));return c.position.set(0,-.02,.05),l.add(c),l.add(fn(new nt(new Ee(.032,8,6),t))),{hip:r,thigh:o,shin:a,foot:l}}arm(t,e,n,s){const r=new Kt;r.position.set(e*.2,.4,.02),r.add(fn(new nt(new Ee(.042,8,6),t)));const o=new Kt;o.rotation.z=e*.12,r.add(o),o.add(ki(n,.04,.032,t));const a=new Kt;a.position.y=-n,a.rotation.x=.18,o.add(a),a.add(ki(s,.03,.022,t));const l=new Kt;l.position.y=-s,a.add(l),l.add(fn(new nt(new Ee(.028,8,6),t)));for(let c=0;c<3;c++){const h=new Kt;h.position.set((c-1)*.016,-.01,(c-1)*.01),h.rotation.x=.25+c*.04,h.rotation.z=e*(c-1)*.12;const u=.15+(c===1?.03:0);h.add(ki(u,.008,.005,t,-1)),l.add(h)}return{shoulder:r,upper:o,fore:a}}reveal(t){this.concealed=!1,this.pos={...t},this.group.position.set(t.x,t.y,t.z),this.group.visible=!0,this.path=[],this.goalKey="",this.glide=0,this.bb.state="Patrol",this.bb.goal={...t}}face(t){this.yaw=t,this.group.rotation.y=t}spawn(t,e,n){this.pos={...t},this.yaw=e,this.bb=vc({state:n}),this.group.position.set(t.x,t.y,t.z),this.group.visible=!0,this.path=[],this.anchorX=t.x,this.anchorZ=t.z,this.stuckT=0}update(t){const e=this.bb.state,n={x:this.pos.x,y:this.pos.y+1.7,z:this.pos.z},s=Oh(this.yaw);let r=null;for(const w of t.noises){if(!Lv(n,w.pos,w.kind,w.floorDelta,w.occluded))continue;const A=Pv(w.kind)*Vh(w.floorDelta,w.occluded);(!r||A>r.loudness)&&(r={pos:Dv(w.pos,n,A,Math.random),loudness:A})}const o=Math.hypot(t.playerPos.x-this.pos.x,t.playerPos.z-this.pos.z),l=(!t.flashlightOn?8.5:12.5)*(t.hiding?.2:1),c=!t.hiding&&kv(n,s,t.playerEye,Nv,l,t.blockers),h=t.flashlightOn&&Hh(t.camPos,t.camDir,{x:this.pos.x,y:this.pos.y+1.75,z:this.pos.z},Math.cos(.5),16,t.blockers);this.beamImmune=Math.max(0,this.beamImmune-t.dt),h&&this.beamImmune<=0?this.beamTime+=t.dt:this.beamTime=Math.max(0,this.beamTime-t.dt*1.5);const u=t.hideSpot,d=(w,A)=>!!u&&!!w&&Math.hypot(w.x-u.x,w.z-u.z)<A,p=d(this.bb.lastSeen,2.4)||d(this.bb.lastHeard,3.2)||d(r?.pos??null,3.2);this.lookAt=xo(this.yaw,Math.atan2(t.playerPos.x-this.pos.x,t.playerPos.z-this.pos.z));const f=this.bb.goal,v=!!f&&Math.hypot(f.x-this.pos.x,f.z-this.pos.z)<.75,m=yv(this.bb,{dt:t.dt,monsterPos:this.pos,playerPos:t.playerPos,canSee:c,hear:r,flashlightHit:h,distance:o,atGoal:v,hiding:t.hiding,hideSpot:t.hideSpot,holdBreath:t.holdBreath,allowChase:t.allowChase,aggression:t.aggression,rng:Math.random,waypoints:t.waypoints,knowsHide:p,searchSpots:t.searchSpots,checkedIds:this.checked});this.bb=m.bb;const g=Ev(this.beamTime,this.beamImmune);return(g==="blind"||g==="banish")&&(this.bb.blindTime=Math.max(this.bb.blindTime,1.2),(this.bb.state==="Chase"||this.bb.state==="Attack")&&(this.bb.state="LostPlayer",this.bb.goal=this.bb.lastSeen?{...this.bb.lastSeen}:{...this.pos})),g==="banish"&&(this.concealed=!0,this.beamTime=0,this.beamImmune=12),this.concealed?(this.group.visible=!1,this.glide=0,this.animate(t.dt,0),{attack:!1,foundHiding:!1,state:this.bb.state,entered:this.bb.state!==e?this.bb.state:null}):(this.group.visible=!0,!this.concealed&&this.bb.state==="Patrol"&&this.bb.stateTime>8&&Math.random()<t.dt*.04&&t.waypoints.length&&(this.watch=1.4+Math.random()*2.2,this.bb.waypointIndex=(this.bb.waypointIndex+1+Math.floor(Math.random()*3))%t.waypoints.length,this.bb.goal={...t.waypoints[this.bb.waypointIndex]},this.path=[]),this.follow(t,m.speed),this.animate(t.dt,m.speed),this.group.position.set(this.pos.x,this.pos.y,this.pos.z),this.group.rotation.y=this.yaw,{attack:m.attackPulse,foundHiding:m.foundHiding,state:this.bb.state,entered:this.bb.state!==e?this.bb.state:null})}follow(t,e){if(this.watch>0){this.watch=Math.max(0,this.watch-t.dt),this.glide+=(0-this.glide)*Math.min(1,t.dt*6);return}const n=this.bb.goal,s=this.bb.state==="Chase"||this.bb.state==="Attack",r=(n&&e>=.05?e:0)*(s?1.05:1),o=s?Math.min(4.05,r):r,a=o>this.glide?2.2:5.5;if(this.glide+=(o-this.glide)*Math.min(1,t.dt*a),!n||this.glide<.05)return;e=this.glide;const l=`${n.x.toFixed(1)}|${n.z.toFixed(1)}|${this.bb.state}`;if(this.repath-=t.dt,l!==this.goalKey||this.repath<=0||this.pathI>=this.path.length){this.goalKey=l,this.repath=this.bb.state==="Chase"?.35:.8;const y=uv(t.nav,this.pos,n,t.query);this.path=y??[],this.pathI=0}let c=n.x,h=n.z;if(this.pathI<this.path.length){const y=this.path[this.pathI];c=y.x,h=y.z,Math.hypot(y.x-this.pos.x,y.z-this.pos.z)<.4&&this.pathI++}const u=this.blockingDoor(t,c,h);if(u&&(t.requestOpen(u.id),(t.openAmount.get(u.id)??0)<.4&&Math.hypot((u.axis==="x"?u.coord:u.center)-this.pos.x,(u.axis==="z"?u.coord:u.center)-this.pos.z)<1.05))return;const d=c-this.pos.x,p=h-this.pos.z,f=Math.hypot(d,p)||1,v=Math.min(e*t.dt,f),m=Bh(this.pos,{x:d/f*v,z:p/f*v},Iv,Uv,!1,t.colliders);this.pos.x=m.x,this.pos.z=m.z;const g=t.floorAt(this.pos.x,this.pos.z,this.pos.y);g!==null&&(this.pos.y=g);const w=Math.atan2(d,p);if(this.yaw+=xo(this.yaw,w)*Math.min(1,t.dt*6),Math.hypot(this.pos.x-this.anchorX,this.pos.z-this.anchorZ)<.025?this.stuckT+=t.dt:(this.stuckT=0,this.anchorX=this.pos.x,this.anchorZ=this.pos.z),this.stuckT>.8&&t.waypoints.length){if(this.stuckT=0,this.stuckTries++,this.stuckTries>=3){this.stuckTries=0,this.concealed=!0;return}this.bb.waypointIndex=(this.bb.waypointIndex+1)%t.waypoints.length,this.bb.goal={...t.waypoints[this.bb.waypointIndex]},this.path=[],this.goalKey=""}}blockingDoor(t,e,n){let s=null,r=1.45;for(const o of t.doors){if(o.kind!=="door"||t.doorLocked(o.id)||(t.openAmount.get(o.id)??0)>.7)continue;const a=o.axis==="x"?o.coord:o.center,l=o.axis==="z"?o.coord:o.center,c=Math.hypot(a-this.pos.x,l-this.pos.z);if(c>r)continue;const h=Math.atan2(a-this.pos.x,l-this.pos.z),u=Math.atan2(e-this.pos.x,n-this.pos.z);Math.abs(xo(h,u))>1.2||(s=o,r=c)}return s}animate(t,e){const n=Sv(this.bb.state,e),s=n.clip==="Run"||n.clip==="Attack",r=n.clip==="Search",o=n.clip==="Walk"||n.clip==="Run";this.phase+=t*(o?(1.7+Math.min(e,4)*.7)*n.timeScale:.45);const a=o?Math.sin(this.phase):r?Math.sin(this.phase*.45)*.35:0,l=n.clip==="Run"?.62:.48;if(this.thighL&&this.shinL&&this.footL&&this.poseLeg(this.thighL,this.shinL,this.footL,a,l),this.thighR&&this.shinR&&this.footR&&this.poseLeg(this.thighR,this.shinR,this.footR,-a,l),this.armL&&this.foreL&&this.poseArm(this.armL,this.foreL,-a,s,-1),this.armR&&this.foreR&&this.poseArm(this.armR,this.foreR,a,s,1),this.spine){const c=bv(n.clip);this.spine.rotation.x+=(c-this.spine.rotation.x)*Math.min(1,t*3)}if(this.neck&&this.spine&&(this.neck.rotation.x=-this.spine.rotation.x*.7),this.pelvis){const c=o?Math.abs(Math.sin(this.phase*2))*.02:0;this.pelvis.position.y=.96+c}if(this.head){const c=r?Math.sin(this.phase*.55)*.55:0;this.head.rotation.x=(s?.12:r?.2:.02)+Math.sin(this.phase*.37)*.04,this.head.rotation.y=Math.max(-.7,Math.min(.7,this.lookAt))*.35+c+Math.sin(this.phase*.23)*.06,this.head.rotation.z=Math.sin(this.phase*.51)*.04}}poseLeg(t,e,n,s,r){t.rotation.x=s*r;const o=.1+Math.max(0,s)*.95;e.rotation.x=o,n.rotation.x=-o*.75}poseArm(t,e,n,s,r){t.rotation.x=(s?.85:.18)+n*(s?.35:.5),t.rotation.z=r*(s?.05:.12),e.rotation.x=(s?.45:.22)+Math.abs(n)*.2}forgetHides(){this.checked.clear()}}function ki(i,t,e,n,s=-1){const r=new Kt,o=new nt(Bv(s<0?t:e,s<0?e:t,i),n);o.position.y=s*i/2,o.castShadow=!0;const a=new nt(new Ee(t,8,6),n);return a.castShadow=!0,r.add(o,a),r}function fn(i,t=1,e=1,n=1){return i.scale.set(t,e,n),i.castShadow=!0,i}function Ov(){const i=[new ot(.12,0),new ot(.15,.12),new ot(.19,.28),new ot(.17,.4),new ot(.09,.52)],t=new Cr(i,12);return Wh(t,.008),t}function zv(){const t=[{y:-.26,r:.26},{y:-.12,r:.22},{y:.06,r:.19},{y:.22,r:.185},{y:.37,r:.13},{y:.43,r:.018}],e=[],n=[];for(let r=0;r<t.length;r++){const{r:o,y:a}=t[r];for(let l=0;l<18;l++){const c=l/18*Math.PI*2,h=r===0?Math.sin(l*3.7)*.045:0,u=1+.09*Math.sin(l*1.61+r*2.3);e.push(Math.cos(c)*o*u,a+h,Math.sin(c)*o*u-l%3*.002)}}for(let r=0;r<t.length-1;r++)for(let o=0;o<18;o++){const a=r*18+o,l=r*18+(o+1)%18;n.push(a,l,a+18,l,l+18,a+18)}const s=new Ae;return s.setAttribute("position",new ue(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function Bv(i,t,e){const n=new ve(i,t,e,7,3);return Wh(n,.004),n}function Wh(i,t){const e=i.attributes.position;for(let n=0;n<e.count;n++){const s=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.sin(s*21+r*8)*Math.cos(o*17+r*6)*t,l=Math.hypot(s,o)||1;e.setXYZ(n,s+s/l*a,r,o+o/l*a)}i.computeVertexNormals()}function _c(){return{tension:10,stress:10,sinceScare:30,sinceSoft:4,suppress:0,softWindow:0,windowLeft:30}}function Gv(i){return Fh(28,14,je(i,0,100)/100)}const yo=["flicker","whisper","creak","knock","phone","breath","lightOut","radio","drop","thunder"];function Vv(i,t){const e={...i},n=Math.max(0,t.dt);t.tookDamage&&(e.suppress=Math.max(e.suppress,8)),e.suppress=Math.max(0,e.suppress-n),e.sinceScare+=n,e.sinceSoft+=n,e.windowLeft-=n,e.windowLeft<=0&&(e.windowLeft=30,e.softWindow=0);const s=1-je(t.monsterDist/24,0,1);let r=10;r+=s*44,t.inDark&&(r+=12),t.sprinting&&(r+=6),t.health<45&&(r+=14),r+=je(t.story,0,1)*16,t.hiding&&(r-=12),t.monsterDist>30&&(r-=6),r=je(r,0,100);const o=1-Math.exp(-n*.4);e.stress=e.stress+(r-e.stress)*o,e.tension=je(e.stress+(t.tookDamage?10:0),0,100);let a=null;if(t.blocked){const d=je(e.tension/100*(e.suppress>0?.22:1),0,1);return{state:e,event:a,aggression:d}}const l=Gv(e.tension),c=e.tension>30?.15+e.tension/100*.7:.02,h=t.rng();if(e.suppress<=0&&e.sinceScare>=l&&h<c*Math.min(n,.5))a={type:"scare"},e.sinceScare=0;else{const d=Fh(10,4,e.tension/100),p=.28+e.tension/120,f=t.rng();e.sinceSoft>=d&&e.softWindow<4&&f<p*Math.min(n,.5)&&(a={type:"soft",kind:yo[Math.floor(t.rng()*yo.length)%yo.length]},e.sinceSoft=0,e.softWindow+=1)}const u=je(e.tension/100*(e.suppress>0?.22:1),0,1);return{state:e,event:a,aggression:u}}class Hv{dust;lightning=0;constructor(t,e=0){const n=new Ae;n.setAttribute("position",new We(new Float32Array(3),3)),this.dust=new Dh(n,new Ba({transparent:!0,opacity:0,size:.01})),this.dust.visible=!1}update(t,e,n,s){this.dust.visible=!1,this.lightning=0}strike(){this.lightning=0}}function Wv(){return{global:-999,byKind:{}}}function Xv(i,t,e,n=!1){if(n||t==="attack")return!0;if(e-i.global<12)return!1;const s=i.byKind[t]??-999,r=t==="fake"?18:34;return e-s>=r}function qv(i,t,e){return{global:e,byKind:{...i.byKind,[t]:e}}}function Yv(i){const t=[{k:"whisper",w:3},{k:"fake",w:2.2},{k:"flash",w:i.inDark?1.2:3},{k:"ceiling",w:1.8},{k:"shadow",w:i.inDark?3:1},{k:"behind",w:i.monsterNear?.6:2.6},{k:"door",w:i.doorOpenNear?3.4:0},{k:"still",w:i.inMannequinRoom?4:0}],e=t.reduce((s,r)=>s+r.w,0);let n=i.rng()*e;for(const s of t)if(!(s.w<=0)&&(n-=s.w,n<=0))return s.k;return"whisper"}class Kv{constructor(t,e){this.audio=e,this.behindMesh=new nt(new fe(.7,1.6),new gn({color:"#050505",transparent:!0,opacity:.92,depthTest:!1,side:me})),this.behindMesh.position.set(.15,-.1,.55),this.behindMesh.visible=!1,this.behindMesh.renderOrder=19,t.add(this.behindMesh)}memory=Wv();fx={trauma:0,flash:0,chroma:0,face:0,behind:0,subtitle:""};behindMesh;kindTimer=0;lastKind=null;lastAt=-999;trigger(t,e,n=!1){return Xv(this.memory,t,e,n)?(this.memory=qv(this.memory,t,e),this.lastKind=t,this.lastAt=e,this.kindTimer=t==="attack"||t==="face"?.55:.7,this.fx.trauma=t==="fake"||t==="whisper"?.25:t==="attack"?1:.65,this.fx.chroma=t==="attack"||t==="face"?2.4:1,this.fx.flash=0,this.fx.face=0,this.fx.behind=t==="behind"?1:0,this.behindMesh.visible=this.fx.behind>0,t==="attack"||t==="face"?this.audio.play("scream"):t==="whisper"||t==="behind"?this.audio.play("whisper"):t==="fake"?this.audio.play("door",void 0,{volume:.4}):this.audio.play("sting"),t==="whisper"&&(this.fx.subtitle="…gå herfra…"),t==="behind"&&(this.fx.subtitle="…bag dig."),!0):!1}dynamic(t,e){const n=Yv(e);return this.trigger(n,t)?n:null}dismiss(){this.kindTimer=0,this.fx={trauma:0,flash:0,chroma:.35,face:0,behind:0,subtitle:""},this.behindMesh.visible=!1}update(t){this.kindTimer-=t,this.fx.trauma=Math.max(0,this.fx.trauma-t*.8),this.fx.flash=Math.max(0,this.fx.flash-t*2.5),this.fx.chroma=Math.max(.35,this.fx.chroma-t*1.5),this.kindTimer<=0&&(this.fx.face=0,this.fx.behind=0,this.behindMesh.visible=!1,this.fx.subtitle&&(this.fx.subtitle=""))}}const Xh=.3,xr=1.7,$v=1.05,qh=1.62,jv=1,Zv=4.35,Jv=7.1;function Qv(i,t,e,n){const s=Math.min(.05,Math.max(0,t.dt)),r={...i,justLanded:!1};if(s<=0)return r;let o=t.crouch||xc(r.y,r.x,r.z,xr,e);const a=Math.abs(t.forward)+Math.abs(t.strafe)>.01,l=t.sprint&&!o&&r.stamina>5&&a&&r.grounded,c=o?1.18:l?Zv:2.32;if(l)r.stamina=je(r.stamina-Jv*s,0,100);else{const P=a?o?5:6.5:11;r.stamina=je(r.stamina+P*s,0,100)}t.jump&&r.grounded&&!o&&r.stamina>14&&(r.vy=4.25,r.stamina=je(r.stamina-16,0,100),r.grounded=!1);const h=Oh(r.yaw),u=zh(r.yaw);let d=h.x*t.forward+u.x*t.strafe,p=h.z*t.forward+u.z*t.strafe;const f=Math.hypot(d,p);f>1&&(d/=f,p/=f);const v=d*c,m=p*c,g=r.grounded?14:3.2,w=1-Math.exp(-g*s);r.vx+=(v-r.vx)*w,r.vz+=(m-r.vz)*w;const A=Bh(r,{x:r.vx*s,z:r.vz*s},Xh,o?$v:xr,o,e);n(A.x,A.z,r.y)===null?(r.vx=0,r.vz=0):(r.x=A.x,r.z=A.z,r.vx=(r.x-i.x)/s,r.vz=(r.z-i.z)/s);const E=n(r.x,r.z,r.y);return E!==null&&(r.vy-=12.5*s,r.y+=r.vy*s,r.y<=E?(r.justLanded=r.vy<-3.4,r.y=E,r.vy=0,r.grounded=!0):r.grounded=!1),xc(r.y,r.x,r.z,xr,e)&&(o=!0),r.crouching=o,r.pitch=je(r.pitch,-1.25,1.25),r}function tx(i,t,e,n=11){const s=je(e,0,.1),r=1-Math.exp(-Math.max(0,n)*s);return i+(t-i)*r}function ex(i){return i?jv:qh}function yc(i,t=.05){return!Number.isFinite(i)||i<=0?0:Math.min(t,i)}function nx(i=24){const t=new Set,e=[];let n=!1;const s=[];return{on(r){return n?s.push(r):t.add(r),()=>{t.delete(r);const o=s.indexOf(r);o>=0&&s.splice(o,1)}},emit(r){e.push(r),e.length>i&&e.shift(),n=!0;for(const o of t)o(r);n=!1;for(const o of s.splice(0))t.add(o)},recent(){return e.slice()},clear(){e.length=0}}}function Mc(i){let t=i>>>0||1;return{seed:i>>>0||1,next(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},state(){return t},restore(e){t=e>>>0||1}}}function ix(i,t,e,n,s){return i?Hh(t,e,n,Math.cos(.5),16,s):!1}function sx(i){const t=i.cells.filter(s=>{const r=Math.hypot(s.x-i.player.x,s.z-i.player.z);if(r<7||r>26||Math.abs(s.y-i.player.y)>5||i.recent.some(h=>Math.hypot(h.x-s.x,h.z-s.z)<3.5)||Math.hypot(s.x-i.from.x,s.z-i.from.z)<4)return!1;const o=s.x-i.player.x,a=s.z-i.player.z,l=Math.hypot(o,a)||1;return!((i.forward.x*o+i.forward.z*a)/l>.2&&i.visible(s)||i.visible(s))});if(!t.length)return null;const e=t.filter(s=>Math.hypot(s.x-i.player.x,s.z-i.player.z)>Math.hypot(i.from.x-i.player.x,i.from.z-i.player.z)),n=e.length?e:t;return n[Math.floor(i.rng()*n.length)%n.length]}function Es(){return{jumps:[],shadowAt:-100,slagter:0,slagterT:0,beats:[]}}const rx=[{id:"stue102",room:"operationsstue",needLight:!0},{id:"arkiv",room:"arkiv",needLight:!1}];function ox(i,t){const e={jumps:i.jumps.slice(),shadowAt:i.shadowAt,slagter:i.slagter,slagterT:i.slagterT,beats:(i.beats??[]).slice()},n=[];if(t.room&&t.room!==t.prevRoom){for(const s of rx)s.room!==t.room||e.jumps.includes(s.id)||s.needLight&&!t.flashlight||(e.jumps.push(s.id),n.push(`jump:${s.id}`));t.room==="slagterum"&&e.slagter===0&&(e.slagter=1,e.slagterT=0,n.push("silence"))}return e.slagter===1?(e.slagterT+=t.dt,e.slagterT>.55&&(e.slagter=2,e.slagterT=0,n.push("deep"),n.push("figure"))):e.slagter===2?(e.slagterT+=t.dt,(t.flashlight!==t.prevFlash||t.lookedAway||e.slagterT>8)&&(e.slagter=3,e.slagterT=0,n.push("hide-figure"))):e.slagter===3&&(e.slagterT+=t.dt,e.slagterT>2&&(e.slagter=4,n.push("steps"))),t.atDoor&&t.time-e.shadowAt>24&&!n.some(s=>s.startsWith("jump"))&&(e.shadowAt=t.time,n.push("shadow")),{state:e,cues:n}}const ax=90;function bc(){return{epoch:1,recoveryUntil:0,pending:[]}}function lx(i){return{epoch:i.epoch+1,recoveryUntil:0,pending:[]}}function cx(i,t,e){return{...i,recoveryUntil:Math.max(i.recoveryUntil,t+e)}}function hx(i,t){return i.pending.some(e=>e.id===t.id)?i:{...i,pending:[...i.pending,{...t,epoch:i.epoch}]}}function ux(i,t){const e=Math.max(0,t.dt);let n=i.pending.filter(a=>a.epoch===i.epoch&&!t.firedIds.includes(a.id));if(e>.5||t.blocked)return e>.5&&(n=n.filter(a=>a.dueTime>t.time)),{state:{...i,pending:n},fired:[]};const r=n.filter(a=>a.dueTime<=t.time&&(a.roomId===""||a.roomId===t.room)).sort((a,l)=>l.priority-a.priority||a.dueTime-l.dueTime).find(a=>a.size==="minor"||t.time>=i.recoveryUntil)??null,o=r?.size==="major";return r?{state:{...i,pending:n.filter(a=>a.id!==r.id),recoveryUntil:o?t.time+ax:i.recoveryUntil},fired:[r]}:{state:{...i,pending:n},fired:[]}}const dx=new Set(["note_log","note_code","note_generator"]);function fx(i){const t=[],e=(s,r)=>{i.fired.includes(s)||t.push({id:s,dueTime:i.time,roomId:r,priority:2,group:"major",size:"major"})};return i.time>=25&&i.room==="reception"&&e("reception_wake","reception"),i.readIds.some(s=>dx.has(s)||s.startsWith("file_"))&&i.room==="arkiv"&&e("arkiv_names","arkiv"),i.room==="operationsstue"&&e("obduktion_witness","operationsstue"),i.room==="obduktion"&&e("obduktion_witness","obduktion"),t}const px={reception:"airRumble",patientgang:"waterDrop",operationsstue:"pipeKnock",slagterum:"pipeKnock",arkiv:"airRumble",laboratorium:"airRumble",obduktion:"pipeKnock",personalerum:"airRumble",kaeldergang:"waterDrop",kapel:"distantBell",observation:"airRumble",kammer:"pipeKnock",trappe0:"pipeKnock",trappe1:"pipeKnock",trappe2:"waterDrop"},Sc={x:45.8,y:5.2,z:9.2};function Mo(){return{roomId:"",nextAt:8,seq:0}}function mx(i,t){const e=t==="waterDrop"||t==="distantBell"?.82:.16,n=t==="distantBell"?.78:.22;return{kind:t,x:i.x+i.w*e,y:i.floorY+2.2,z:i.z+i.d*n}}function gx(i,t){const e=t.room,n=e?.id??"",s=n!==i.roomId;let r=i.nextAt;(s||t.dt>.5)&&(r=Math.max(r,t.time+6));const o=e?px[e.id]:void 0;if(!e||!o||t.time<r)return{state:{...i,roomId:n,nextAt:r},cue:null};const a=i.seq+1;return{state:{roomId:n,nextAt:t.time+16+a%6,seq:a},cue:mx(e,o)}}function vx(i,t,e){return i?t-e>=11:!1}function xx(i,t){if(Math.abs(t-i)<.001)return!1;const e=i<=.02||i>=.98,n=t>.02&&t<.98;return e&&n}const kt={0:0,1:4,2:8},Bi=3.5,Le=.5,er=.45,wc="door_stilhed",nr=(i,t,e,n,s,r,o,a,l,c)=>({id:i,name:t,floor:e,x:n,z:s,w:r,d:o,floorMat:a,wallMat:l,light:c}),ln=[...[["reception","Receptionen","wood","panel","always-warm"],["patientgang","Patientgangen","tile","plaster","always-dim"],["operationsstue","Operationsstuen","tile","tile","power"],["slagterum","Slagterummet","tile","brick","always-red"],["trappe0","Trappeopgang","concrete","damp","always-dim"]].map((i,t)=>nr(i[0],i[1],0,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),...[["arkiv","Arkivrummet","wood","panel","always-dim"],["laboratorium","Det aflåste laboratorium","tile","tile","power"],["obduktion","Obduktionssalen","tile","tile","always-dim"],["personalerum","Det forladte personalerum","carpet","plaster","always-warm"],["trappe1","Trappeopgang","concrete","damp","always-dim"]].map((i,t)=>nr(i[0],i[1],1,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),...[["kaeldergang","Kældergangen","concrete","damp","always-dim"],["kapel","Det mørke kapel","stone","brick","always-candle"],["observation","Observationsrummet","tile","plaster","none"],["kammer","Det sidste kammer","concrete","damp","always-dim"],["trappe2","Trappeopgang","concrete","damp","none"]].map((i,t)=>nr(i[0],i[1],2,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),nr("stilhed","Ud til stilheden",2,36,12,12,6,"concrete","damp","none")],Yh=[{id:"door_rec_pat",a:"reception",b:"patientgang",kind:"door",signA:"Patientgangen",signB:"Receptionen"},{id:"door_pat_op",a:"patientgang",b:"operationsstue",kind:"door",signA:"Operationsstuen",signB:"Gang"},{id:"door_op_slag",a:"operationsstue",b:"slagterum",kind:"door",signA:"Slagterummet",signB:"Operationsstuen"},{id:"door_slag_trappe",a:"slagterum",b:"trappe0",kind:"door",signA:"Trappe",signB:"Slagterummet"},{id:"door_arkiv_lab",a:"arkiv",b:"laboratorium",kind:"door",locked:!0,keyId:"key_op",signA:"Laboratorium",signB:"Arkivrummet"},{id:"door_lab_obd",a:"laboratorium",b:"obduktion",kind:"door",signA:"Obduktionssalen",signB:"Laboratorium"},{id:"door_obd_pers",a:"obduktion",b:"personalerum",kind:"door",signA:"Personalerum",signB:"Obduktionssalen"},{id:"door_pers_trappe",a:"personalerum",b:"trappe1",kind:"door",signA:"Trappe",signB:"Personalerum"},{id:"door_kael_kapel",a:"kaeldergang",b:"kapel",kind:"door",signA:"Kapellet",signB:"Kældergangen"},{id:"door_kapel_obs",a:"kapel",b:"observation",kind:"door",signA:"Observation",signB:"Kapellet"},{id:"door_obs_kammer",a:"observation",b:"kammer",kind:"door",signA:"Det sidste kammer",signB:"Observation"},{id:"door_kammer_trappe",a:"kammer",b:"trappe2",kind:"door",signA:"Trappe",signB:"Kammeret"},{id:"door_stilhed",a:"kammer",b:"stilhed",kind:"door",locked:!0,signA:"UD TIL STILHEDEN",signB:""}],_a=[{id:"stair_01",x:50.75,z:.95,w:2.55,d:4.35,fromFloor:0,toFloor:1,axis:"z"},{id:"stair_12",x:50.75,z:6.7,w:2.55,d:4.35,fromFloor:1,toFloor:2,axis:"z"}];function ht(i,t,e,n,s,r,o,a){return{id:i,room:t,kind:e,x:n,z:s,rot:0,w:r,d:o,h:a,block:"always"}}const Lr=[ht("rec_desk","reception","receptiondesk",4,9.5,2.6,.86,1.12),ht("rec_chair","reception","chair",4,8.4,.45,.45,.9),ht("pat_bench","patientgang","bench",18,2.2,1.4,.45,.48),ht("op_table","operationsstue","gurney",30,9.2,1.8,.7,.85),ht("op_cab","operationsstue","cabinet",26.8,2.2,.6,1.4,1.6),ht("slag_table","slagterum","table",42,9.4,1.8,.8,.8),ht("slag_hook","slagterum","beam",40,2.4,2.2,.2,.15),ht("ark_shelf","arkiv","shelf",2.2,9.2,.5,2.4,2),ht("ark_table","arkiv","table",8,2.4,1.2,.7,.75),ht("lab_bench","laboratorium","table",16,9.2,1.6,.7,.9),ht("obd_table","obduktion","gurney",30,9,1.9,.7,.8),ht("pers_sofa","personalerum","sofa",42,9.2,1.6,.7,.7),ht("kap_altar","kapel","altar",18,9.4,1.4,.6,1),ht("obs_desk","observation","desk",30,2.4,1.2,.6,.75),ht("kam_bed","kammer","bed",40,9,1.8,.9,.55),ht("rec_records","reception","recordcabinet",1.15,3.25,1.2,.48,1.8),ht("rec_filing","reception","filing",8.8,2,.72,.56,1.35),ht("rec_sidechair","reception","chair",7.1,9.65,.45,.45,.9),ht("rec_sideboard","reception","sideboard",9.5,9.8,1.35,.52,1),ht("pat_gurney","patientgang","gurney",15.1,9.3,1.9,.7,.85),ht("pat_locker","patientgang","locker",14,2.2,.76,.65,1.8),ht("pat_wheelchair","patientgang","wheelchair",22.3,2,.65,.82,1.1),ht("op_screen","operationsstue","foldscreen",34.7,9.55,1.4,.2,1.95),ht("op_iv","operationsstue","ivstand",27.4,9,.32,.32,1.85),ht("op_trolley","operationsstue","medicalcart",33.6,2.15,.72,.56,.9),ht("slag_locker","slagterum","locker",38.1,9.6,.9,.6,1.8),ht("slag_cart","slagterum","medicalcart",45.4,2.1,.85,.58,.94),ht("slag_shelf","slagterum","shelf",45.5,9.7,.5,2.2,2),ht("ark_file","arkiv","filing",3.7,2,.78,.56,1.4),ht("ark_records","arkiv","recordcabinet",9,9.5,1.4,.48,1.8),ht("ark_chair","arkiv","chair",8,3.5,.46,.46,.92),ht("ark_safe","arkiv","safe",10.2,9.55,.55,.48,.78),ht("lab_cart","laboratorium","medicalcart",22.4,2,.74,.56,.9),ht("lab_screen","laboratorium","foldscreen",21.8,9.5,1.4,.17,1.9),ht("lab_iv","laboratorium","ivstand",13.5,2.3,.32,.32,1.8),ht("obd_cabinet","obduktion","recordcabinet",26.4,2,1.4,.5,1.85),ht("obd_trolley","obduktion","medicalcart",34.3,9.5,.82,.57,.85),ht("obd_screen","obduktion","foldscreen",34.1,2,1.45,.18,1.95),ht("pers_radio","personalerum","sideboard",45.8,9.2,1.1,.5,.9),ht("pers_filing","personalerum","filing",38.2,2.2,.75,.55,1.35),ht("pers_armchair","personalerum","chair",39.4,9.15,.46,.46,.93),ht("kael_shelf","kaeldergang","shelf",2.1,9.55,.5,2.1,1.9),ht("kael_cart","kaeldergang","medicalcart",9.55,2,.8,.57,.9),ht("kael_locker","kaeldergang","locker",7.4,9.65,.74,.56,1.75),ht("kap_pew1","kapel","pew",15,2,1.65,.5,.9),ht("kap_pew2","kapel","pew",20.7,2,1.65,.5,.9),ht("kap_filing","kapel","recordcabinet",22.4,9.6,.75,.45,1.6),ht("obs_screen","observation","foldscreen",26,9.5,1.4,.18,1.9),ht("obs_gurney","observation","gurney",33.6,9.2,1.75,.7,.85),ht("obs_locker","observation","locker",34.4,2,.8,.56,1.8),ht("kam_cart","kammer","medicalcart",45.5,2.15,.8,.56,.9),ht("kam_dresser","kammer","dresser",38.1,2,1.1,.54,1.2),ht("kam_chair","kammer","chair",45.5,9.5,.46,.46,.9),ht("rec_waitbench","reception","bench",2.8,2,1.5,.5,.5),ht("rec_pigeon","reception","shelf",6.35,2.15,.6,.4,1.9),ht("pat_medicine","patientgang","medicalcart",20.15,2.2,.72,.55,.9),ht("pat_cabinet","patientgang","recordcabinet",22.65,9.5,.8,.5,1.55),ht("op_sparecase","operationsstue","shelf",30,2.2,1.3,.42,1.75),ht("op_assistantchair","operationsstue","chair",32,9.35,.46,.46,.85),ht("slag_washstation","slagterum","cabinet",37.25,2.15,.65,.5,1.3),ht("slag_rustbucket","slagterum","barrel",43.3,2.25,.55,.55,.76),ht("ark_filing2","arkiv","filing",5.45,9.45,.75,.54,1.28),ht("ark_bookcase","arkiv","shelf",1.15,2.2,.55,2,2.1),ht("lab_archive","laboratorium","filing",17.1,2.3,.75,.55,1.35),ht("lab_stool","laboratorium","chair",18.6,9.3,.46,.46,.85),ht("obd_cab2","obduktion","cabinet",30.8,2.1,.72,.55,1.55),ht("obd_tray2","obduktion","medicalcart",32.2,9.45,.75,.55,.88),ht("pers_bench","personalerum","bench",43.1,2.15,1.25,.5,.45),ht("pers_wardrobe","personalerum","locker",46.6,2.1,.72,.6,1.8),ht("kael_spares","kaeldergang","cabinet",2.6,2,.75,.55,1.45),ht("kael_cables","kaeldergang","barrel",4.8,2.2,.6,.6,.82),ht("kap_pew3","kapel","pew",15,3.65,1.65,.5,.9),ht("kap_pew4","kapel","pew",20.7,3.65,1.65,.5,.9),ht("obs_supply","observation","medicalcart",27.45,2.2,.76,.56,.85),ht("obs_records","observation","filing",28.15,9.4,.7,.56,1.35),ht("kam_nightstand","kammer","cabinet",42.1,9.45,.68,.5,.88),ht("kam_storage","kammer","shelf",42.2,2,.62,1.15,1.7)],Kh=[{id:"bat_gang",room:"patientgang",itemId:"battery",x:20,z:9.2},{id:"bat_pers",room:"personalerum",itemId:"battery",x:44,z:3},{id:"key_op_pick",room:"operationsstue",itemId:"key_op",x:32,z:3},{id:"key_arkiv_pick",room:"arkiv",itemId:"key_arkiv",x:6,z:3.2},{id:"key_kapel_pick",room:"kapel",itemId:"key_kapel",x:14.5,z:9}],_x=[{id:"dev_generator",kind:"generator",room:"kaeldergang",x:8.8,z:8.35},{id:"dev_safe",kind:"safe",room:"arkiv",x:10.2,z:8.55},{id:"dev_radio",kind:"radio",room:"personalerum",x:45.8,z:8.35}],yx=[{id:"hide_pat",room:"patientgang",kind:"locker",x:14,z:3.2},{id:"hide_kael",room:"kaeldergang",kind:"locker",x:7.4,z:8.55},{id:"hide_obs",room:"observation",kind:"locker",x:34.4,z:3.05},{id:"hide_kam",room:"kammer",kind:"bed",x:40,z:7.85}],Mx=[{room:"slagterum",kind:"blood",x:40,z:6.5,rot:.2,w:1.4,d:.5},{room:"obduktion",kind:"blood",x:28,z:8,rot:.4,w:1.2,d:.45},{room:"kammer",kind:"puddle",x:42,z:4,rot:0,w:1.1,d:.8}],bx={};function Sx(){wx();const i=Ex(),t=Tx(i),e=Rx(t),n=Px(i,e),s=Dx();return{rooms:ln,doors:i,walls:t,colliders:e,props:Lr,pickups:Kh,devices:_x,hides:yx,decals:Mx,stairs:_a,nav:n,lights:s}}function wx(){for(let t=0;t<ln.length;t++)for(let e=t+1;e<ln.length;e++){const n=ln[t],s=ln[e];if(n.floor!==s.floor)continue;const r=Math.min(n.x+n.w,s.x+s.w)-Math.max(n.x,s.x),o=Math.min(n.z+n.d,s.z+s.d)-Math.max(n.z,s.z);if(r>.02&&o>.02)throw new Error(`Rum overlapper: ${n.id} og ${s.id}`)}const i=new Set(ln.map(t=>t.id));for(const t of Yh){if(!i.has(t.a)||!i.has(t.b))throw new Error(`Forbindelse ${t.id} mangler rum`);if(!$h(qn(t.a),qn(t.b)))throw new Error(`Forbindelse ${t.id} rører ikke`)}for(const t of Lr){const e=qn(t.room);if(!Ec(e,t.x,t.z,.05))throw new Error(`Prop ${t.id} er uden for ${t.room}`)}for(const t of Kh){const e=qn(t.room);if(!Ec(e,t.x,t.z,.02))throw new Error(`Pickup ${t.id} er uden for ${t.room}`)}}function qn(i){const t=ln.find(e=>e.id===i);if(!t)throw new Error(`Ukendt rum ${i}`);return t}function Ec(i,t,e,n=0){return t>=i.x-n&&t<=i.x+i.w+n&&e>=i.z-n&&e<=i.z+i.d+n}function $h(i,t){if(i.floor!==t.floor)return null;const e=Math.max(i.z,t.z),n=Math.min(i.z+i.d,t.z+t.d),s=Math.max(i.x,t.x),r=Math.min(i.x+i.w,t.x+t.w),o=Math.abs(i.x+i.w-t.x)<.03||Math.abs(t.x+t.w-i.x)<.03,a=Math.abs(i.z+i.d-t.z)<.03||Math.abs(t.z+t.d-i.z)<.03;return o&&n-e>.4?{axis:"x",coord:Math.abs(i.x+i.w-t.x)<.03?i.x+i.w:t.x+t.w,min:e,max:n}:a&&r-s>.4?{axis:"z",coord:Math.abs(i.z+i.d-t.z)<.03?i.z+i.d:t.z+t.d,min:s,max:r}:null}function Ex(){return Yh.map(i=>{const t=qn(i.a),e=qn(i.b),n=$h(t,e);if(!n)throw new Error(`Dør ${i.id} uden kant`);const s=n.max-n.min,r=.26;let o=i.width??(i.kind==="arch"?Math.min(2.7,s-.8):1.15);if(o=Math.min(o,s-r*2),o<.82)throw new Error(`Dør ${i.id} er for smal (${o.toFixed(2)} / overlap ${s.toFixed(2)})`);const a=i.at??.5;let l=n.min+s*a;const c=o/2;return l=Math.max(n.min+r+c,Math.min(n.max-r-c,l)),{id:i.id,kind:i.kind,floor:t.floor,axis:n.axis,coord:n.coord,spanMin:l-c,spanMax:l+c,center:l,width:o,locked:!!i.locked,keyId:i.keyId,needsPower:i.needsPower,a:i.a,b:i.b,signA:i.signA,signB:i.signB}})}function Tx(i){const t=i.map(n=>({floor:n.floor,axis:n.axis,coord:n.coord,min:n.spanMin,max:n.spanMax})),e=[];for(const n of ln){const s=[{axis:"z",coord:n.z,min:n.x,max:n.x+n.w},{axis:"z",coord:n.z+n.d,min:n.x,max:n.x+n.w},{axis:"x",coord:n.x,min:n.z,max:n.z+n.d},{axis:"x",coord:n.x+n.w,min:n.z,max:n.z+n.d}];for(const r of s){let o=[[r.min,r.max]],a=!0;for(const l of ln){if(l.id===n.id||l.floor!==n.floor)continue;const c=Ax(r,l);c&&(a=!1,l.id<n.id&&(o=Tc(o,c.min,c.max)))}for(const l of t)l.floor!==n.floor||l.axis!==r.axis||Math.abs(l.coord-r.coord)>.04||(o=Tc(o,l.min,l.max));for(const[l,c]of o)c-l<.12||e.push({floor:n.floor,axis:r.axis,coord:r.coord,min:l,max:c,mat:n.wallMat,exterior:a,roomId:n.id})}}return e}function Ax(i,t){if(i.axis==="x"){const o=t.x+t.w,a=t.x;if(Math.abs(o-i.coord)>.03&&Math.abs(a-i.coord)>.03)return null;const l=Math.max(i.min,t.z),c=Math.min(i.max,t.z+t.d);return c-l<.2?null:{min:l,max:c}}const e=t.z+t.d,n=t.z;if(Math.abs(e-i.coord)>.03&&Math.abs(n-i.coord)>.03)return null;const s=Math.max(i.min,t.x),r=Math.min(i.max,t.x+t.w);return r-s<.2?null:{min:s,max:r}}function Tc(i,t,e){const n=[];for(const[s,r]of i){if(e<=s||t>=r){n.push([s,r]);continue}t>s&&n.push([s,Math.max(s,t)]),e<r&&n.push([Math.min(r,e),r])}return n}function Rx(i){const t=[];for(const n of i){const s=kt[n.floor],r=s+Bi;n.axis==="x"?t.push({minX:n.coord-.22/2,maxX:n.coord+.22/2,minY:s,maxY:r,minZ:n.min,maxZ:n.max,id:"wall"}):t.push({minX:n.min,maxX:n.max,minY:s,maxY:r,minZ:n.coord-.22/2,maxZ:n.coord+.22/2,id:"wall"})}for(const n of Lr){if(n.block==="none")continue;const s=qn(n.room),{bw:r,bd:o}=jh(n.w,n.d,n.rot),a=kt[s.floor]+(n.yOff??0);t.push({minX:n.x-r/2,maxX:n.x+r/2,minY:a,maxY:a+n.h,minZ:n.z-o/2,maxZ:n.z+o/2,id:n.id,standOnly:n.block==="stand",blocksUntilUnlock:n.blocksUntilUnlock})}return t}function jh(i,t,e){const n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e));return{bw:i*n+t*s,bd:i*s+t*n}}function Cx(i,t){if(i.kind!=="door"||t>.28)return null;const e=kt[i.floor],n=.16;return i.axis==="x"?{minX:i.coord-n/2,maxX:i.coord+n/2,minY:e,maxY:e+2.55,minZ:i.spanMin,maxZ:i.spanMax,id:i.id}:{minX:i.spanMin,maxX:i.spanMax,minY:e,maxY:e+2.55,minZ:i.coord-n/2,maxZ:i.coord+n/2,id:i.id}}function ir(i,t){return i.kind==="arch"?!1:!!(i.locked&&!t.has(i.id))}function bo(i,t,e){const n=i.colliders.filter(s=>!s.blocksUntilUnlock||!t.has(s.blocksUntilUnlock));for(const s of i.doors){const r=Cx(s,e.get(s.id)??0);r&&n.push(r)}return n}function Px(i,t){const e=[],n=new Map,s=l=>{const c={...l,id:e.length,links:[]};return e.push(c),c},r=(l,c,h)=>{for(const u of Lr){if(u.block==="none"||u.blocksUntilUnlock||qn(u.room).floor!==h)continue;const{bw:d,bd:p}=jh(u.w,u.d,u.rot),f=.12;if(Math.abs(l-u.x)<=d/2+f&&Math.abs(c-u.z)<=p/2+f)return!0}return!1},o=(l,c)=>{for(const h of _a)if(l>=h.x-.12&&l<=h.x+h.w+.12&&c>=h.z-.12&&c<=h.z+h.d+.12)return!0;return!1};for(const l of ln){const c=kt[l.floor],h=Math.floor(l.x/Le)-1,u=Math.floor((l.x+l.w)/Le)+1,d=Math.floor(l.z/Le)-1,p=Math.floor((l.z+l.d)/Le)+1;for(let f=h;f<=u;f++)for(let v=d;v<=p;v++){const m=(f+.5)*Le,g=(v+.5)*Le;if(m<l.x+er||m>l.x+l.w-er||g<l.z+er||g>l.z+l.d-er||o(m,g)||r(m,g,l.floor))continue;const w=`${f},${v},${l.floor}`;if(n.has(w))continue;const A=s({ix:f,iz:v,x:m,y:c,z:g,floor:l.floor});n.set(w,A)}}for(const l of i){const h=l.width*.4,u=l.axis==="x"?l.coord-1.05:l.center-h,d=l.axis==="x"?l.coord+1.05:l.center+h,p=l.axis==="z"?l.coord-1.05:l.center-h,f=l.axis==="z"?l.coord+1.05:l.center+h,v=Math.floor(u/Le)-1,m=Math.floor(d/Le)+1,g=Math.floor(p/Le)-1,w=Math.floor(f/Le)+1;for(let A=v;A<=m;A++)for(let y=g;y<=w;y++){const E=(A+.5)*Le,P=(y+.5)*Le;if(E<u||E>d||P<p||P>f||r(E,P,l.floor))continue;const R=`${A},${y},${l.floor}`;if(n.has(R))continue;const x=s({ix:A,iz:y,x:E,y:kt[l.floor],z:P,floor:l.floor,doorId:l.kind==="arch"?void 0:l.id});n.set(R,x)}}const a=(l,c)=>{if(l.id===c.id)return;const h=Math.hypot(l.x-c.x,l.z-c.z,(l.y-c.y)*.65);l.links.some(u=>u.to===c.id)||l.links.push({to:c.id,cost:h}),c.links.some(u=>u.to===l.id)||c.links.push({to:l.id,cost:h})};for(const l of e)if(!l.stair)for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){if(c===0&&h===0)continue;const u=n.get(`${l.ix+c},${l.iz+h},${l.floor}`);if(!u||u.stair||u.id<l.id)continue;if(Math.abs(c)===1&&Math.abs(h)===1){const p=n.get(`${l.ix+c},${l.iz},${l.floor}`),f=n.get(`${l.ix},${l.iz+h},${l.floor}`);if(!p||!f||p.stair||f.stair)continue}Math.hypot(l.x-u.x,l.z-u.z)>.92||a(l,u)}for(const l of _a){const c=[],h=l.axis==="z"?l.d:l.w,u=Math.max(2,Math.round(h/Le));for(let d=0;d<=u;d++){const p=d/u,f=l.axis==="z"?l.x+l.w*.5:l.x+p*l.w,v=l.axis==="z"?l.z+p*l.d:l.z+l.d*.5,m=kt[l.fromFloor]+p*(kt[l.toFloor]-kt[l.fromFloor]),g=m<2?-1:m<6?0:1;c.push(s({ix:Math.floor(f/Le),iz:Math.floor(v/Le),x:f,y:m,z:v,floor:g,stair:!0}))}for(let d=0;d<c.length-1;d++)a(c[d],c[d+1]);Ac(c[0],l.fromFloor,n,e,t),Ac(c[c.length-1],l.toFloor,n,e,t)}return{nodes:e,cellSize:Le}}function Ac(i,t,e,n,s){const r=[];for(const o of n){if(o.stair||o.floor!==t)continue;Math.hypot(o.x-i.x,o.z-i.z)<3.4&&r.push(o)}r.sort((o,a)=>Math.hypot(o.x-i.x,o.z-i.z)-Math.hypot(a.x-i.x,a.z-i.z));for(const o of r){const a=(o.y+i.y)*.5+.4,l={x:i.x,y:a,z:i.z},c={x:o.x,y:a,z:o.z};let h=!1;for(const d of s)if(!d.standOnly&&!(d.maxY<a-.2||d.minY>a+.2)&&Gh(l,c,d)){h=!0;break}if(h)continue;const u=Math.hypot(o.x-i.x,o.z-i.z,(o.y-i.y)*.65);i.links.some(d=>d.to===o.id)||i.links.push({to:o.id,cost:u}),o.links.some(d=>d.to===i.id)||o.links.push({to:i.id,cost:u});return}throw new Error(`Trappe ende kunne ikke forbindes (floor ${t} @ ${i.x.toFixed(1)},${i.z.toFixed(1)})`)}function Dx(){const i=[];for(const t of ln){if(t.light==="none")continue;Lx(t).forEach((n,s)=>{const r=kx(t.light);i.push({id:`${t.id}_${s}`,room:t.id,x:n.x,z:n.z,y:kt[t.floor]+(t.outdoors?2.4:2.7),color:r.color,intensity:r.intensity,distance:r.distance,mode:r.mode,flicker:r.flicker})})}return i}function Lx(i){return i.id==="reception"?[{x:i.x+2.25,z:i.z+3},{x:i.x+6.05,z:i.z+6.1},{x:i.x+9.2,z:i.z+9}]:i.lightAt?[i.lightAt]:Math.max(i.w,i.d)>18?i.w>=i.d?[{x:i.x+i.w*.33,z:i.z+i.d*.5},{x:i.x+i.w*.67,z:i.z+i.d*.5}]:[{x:i.x+i.w*.5,z:i.z+i.d*.33},{x:i.x+i.w*.5,z:i.z+i.d*.67}]:[{x:i.x+i.w*.5,z:i.z+i.d*.5}]}function kx(i){switch(i){case"always-warm":return{color:"#f0c49f",intensity:5.7,distance:9.5,mode:"always",flicker:!0};case"always-dim":return{color:"#cbbfba",intensity:3.2,distance:7.5,mode:"always",flicker:!0};case"always-candle":return{color:"#ff9d62",intensity:3.9,distance:7,mode:"always",flicker:!0};case"always-red":return{color:"#d4473f",intensity:3.8,distance:7.5,mode:"always",flicker:!0};case"secret":return{color:"#e1c7a6",intensity:5,distance:8,mode:"secret",flicker:!0};case"power":return{color:"#b5c6ce",intensity:5.1,distance:9,mode:"power",flicker:!1};default:return{color:"#ffffff",intensity:0,distance:1,mode:"always",flicker:!1}}}function Ix(i,t,e){if(t<i.x||t>i.x+i.w||e<i.z||e>i.z+i.d)return null;const n=i.axis==="z"?(e-i.z)/i.d:(t-i.x)/i.w,s=kt[i.fromFloor],r=kt[i.toFloor],o=Math.max(0,Math.min(1,n));return s+o*(r-s)}function ds(i,t,e,n){for(const o of i.stairs){const a=Ix(o,t,e);if(a!==null)return a}let s=null,r=1e9;for(const o of i.rooms){if(t<o.x||t>o.x+o.w||e<o.z||e>o.z+o.d)continue;const a=kt[o.floor],l=Math.abs(a-n);l<r&&(r=l,s=a)}return s}function Hn(i,t,e,n){let s=null,r=1e9;for(const o of i.rooms){if(t<o.x||t>o.x+o.w||e<o.z||e>o.z+o.d)continue;const a=Math.abs(kt[o.floor]-n);a<r&&(r=a,s=o)}return s}function Ux(i,t,e){const n=new Set(["yard","tunnel"]);e||n.add("secret");const s=[];for(const r of i.rooms){if(!t(r.floor)||n.has(r.id))continue;const o=bx[r.id],a=o?o.x:r.x+r.w*.5,l=o?o.z:r.z+r.d*.5;s.push({x:a,y:kt[r.floor],z:l})}return s}function Zh(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ae;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Rc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let v=0;v<o[h].length;++v)p.push(o[h][v][d]);const f=Rc(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}return l}function Rc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new We(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<e;f++){const v=h.getComponent(d,f);a.setComponent(d+u,f,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function ya(i=512){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");if(!e)throw new Error("Canvas 2D er ikke tilgængelig");return{c:t,g:e,size:i}}function Cc(i,t){const e=new Float32Array(t*t);for(let n=0;n<e.length;n++)e[n]=i();return e}function Nx(i,t,e,n){const s=(e%t+t)%t,r=(n%t+t)%t,o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=(o+1)%t,u=(a+1)%t,d=i[a*t+o],p=i[a*t+h],f=i[u*t+o],v=i[u*t+h];return d+(p-d)*l+(f-d)*c+(d-p-f+v)*l*c}function $e(i,t,e,n){let s=0,r=.5,o=1;for(let a=0;a<5;a++)s+=r*Nx(i,t,e*o%t,n*o%t),o*=2,r*=.5;return s}function Ma(i,t=!0,e=!0){const n=new Wi(i);return n.colorSpace=e?ye:Rn,n.wrapS=n.wrapT=t?hi:Xn,n.anisotropy=4,n.needsUpdate=!0,n}function So(i,t,e,n,s){i.strokeStyle=`rgba(20,16,14,${s})`,i.lineWidth=1;for(let r=0;r<n;r++){let o=t()*e,a=t()*e;i.beginPath(),i.moveTo(o,a);const l=6+Math.floor(t()*14);for(let c=0;c<l;c++)o+=(t()-.5)*28,a+=(t()-.3)*22,i.lineTo(o,a);i.stroke()}}function Ue(i,t){const e=zi(t),n=Cc(e,128),s=ya();i(s.g,s.size,n,e);const r=ya(256),o=Cc(zi(t^2654435769),64),a=r.g.createImageData(256,256);for(let l=0;l<256;l++)for(let c=0;c<256;c++){const h=$e(o,64,c/4,l/4),u=Math.max(0,Math.min(255,150+h*90)),d=(l*256+c)*4;a.data[d]=a.data[d+1]=a.data[d+2]=u,a.data[d+3]=255}return r.g.putImageData(a,0,0),{map:Ma(s.c,!0,!0),rough:Ma(r.c,!0,!1)}}function Ne(i,t,e,n={}){return new _t({map:i,roughnessMap:t,color:e,roughness:.92,metalness:.02,...n})}function Fx(){const i=Ue((y,E,P)=>{y.fillStyle="#8c847a",y.fillRect(0,0,E,E);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.35,x*.35),M=Math.min(1,x/E)*.35+(x>E*.82?(x/E-.82)*1.4:0),D=Math.exp(-((_-180)**2+(x-300)**2)/18e3)*.25,b=(x*E+_)*4,U=.78+S*.28-M*.45-D;R.data[b]*=U,R.data[b+1]*=U*.98,R.data[b+2]*=U*.94}y.putImageData(R,0,0),So(y,zi(3),E,18,.35)},11),t=Ue((y,E,P)=>{y.fillStyle="#667064",y.fillRect(0,0,E,E);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.4,x*.5),M=Math.sin(_*.2)*.5+.5,D=x/E,b=(x*E+_)*4,U=.7+S*.25-D*.35*M;R.data[b]=R.data[b]*U*.85,R.data[b+1]=R.data[b+1]*U,R.data[b+2]=R.data[b+2]*U*.8}y.putImageData(R,0,0)},19),e=Ue((y,E)=>{y.fillStyle="#4a302c",y.fillRect(0,0,E,E);const P=64,R=30;for(let x=0;x<E/R+1;x++)for(let _=0;_<E/P+2;_++){const S=x%2?P/2:0,M=90+(x*13+_*7)%40;y.fillStyle=`rgb(${M+40},${M*.45},${M*.38})`,y.fillRect(_*P-S+2,x*R+2,P-4,R-4)}So(y,zi(8),E,8,.4)},23),n=Ue((y,E,P)=>{y.fillStyle="#6b5342",y.fillRect(0,0,E,E),y.strokeStyle="rgba(30,20,12,0.45)";for(let x=0;x<E;x+=96)y.strokeRect(x+8,8,80,E-16),y.strokeRect(x+16,20,64,E-40);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.8,x*.15),M=(x*E+_)*4,D=.85+S*.2;R.data[M]*=D,R.data[M+1]*=D,R.data[M+2]*=D*.9}y.putImageData(R,0,0)},29),s=Ue((y,E)=>{y.fillStyle="#8a8780",y.fillRect(0,0,E,E);const P=64;for(let R=0;R<E;R+=P)for(let x=0;x<E;x+=P){const _=(x*3+R*5)%17/40;y.fillStyle=`rgba(60,58,52,${.05+_})`,y.fillRect(x+2,R+2,P-4,P-4),(x+R)%(P*5)===0&&(y.strokeStyle="rgba(40,30,28,0.45)",y.strokeRect(x+8,R+8,P-16,P-16))}},31),r=Ue((y,E,P)=>{y.fillStyle="#6a6762",y.fillRect(0,0,E,E);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.5,x*.5),M=(x*E+_)*4,D=.75+S*.4;R.data[M]*=D,R.data[M+1]*=D,R.data[M+2]*=D}y.putImageData(R,0,0),So(y,zi(4),E,10,.4)},37),o=Ue((y,E,P)=>{for(let x=0;x<E;x+=48){const _=70+x%96;y.fillStyle=`rgb(${_+30},${_*.62},${_*.38})`,y.fillRect(0,x,E,46),y.fillStyle="rgba(20,12,8,0.35)",y.fillRect(0,x+45,E,3)}const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.15,x*1.4),M=(x*E+_)*4,D=.82+S*.28;R.data[M]*=D,R.data[M+1]*=D,R.data[M+2]*=D}y.putImageData(R,0,0)},41),a=Ue((y,E,P)=>{y.fillStyle="#7c776f",y.fillRect(0,0,E,E);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.22,x*.22),M=(Math.floor(_/80)+Math.floor(x/80))%2?.92:1,D=(x*E+_)*4,b=(.72+S*.35)*M;R.data[D]*=b,R.data[D+1]*=b,R.data[D+2]*=b*.95}y.putImageData(R,0,0)},43),l=Ue((y,E,P)=>{y.fillStyle="#5a2c30",y.fillRect(0,0,E,E);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.9,x*.9),M=Math.exp(-((_-E/2)**2)/4e4)*.2,D=(x*E+_)*4,b=.75+S*.35+M;R.data[D]*=b,R.data[D+1]*=b*.9,R.data[D+2]*=b*.88}y.putImageData(R,0,0)},47),c=Ue((y,E)=>{y.fillStyle="#6e6b64",y.fillRect(0,0,E,E);const P=72;for(let R=0;R<E;R+=P)for(let x=0;x<E;x+=P){const _=150+(x*9+R*3)%50;y.fillStyle=`rgb(${_},${_-4},${_-10})`,y.fillRect(x+2,R+2,P-4,P-4),(x/P+R/P)%7===0&&(y.fillStyle="rgba(40,20,16,0.25)",y.fillRect(x+10,R+10,P-20,P-20))}},53),h=Ue((y,E,P)=>{y.fillStyle="#5a564e",y.fillRect(0,0,E,E);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.6,x*.2),M=$e(P,128,_*.1+20,x*.1)>.62?.35:0,D=(x*E+_)*4;R.data[D]=90*(.7+S*.4)+M*80,R.data[D+1]=82*(.7+S*.3)+M*30,R.data[D+2]=70*(.7+S*.3)}y.putImageData(R,0,0)},59),u=Ue((y,E,P)=>{y.fillStyle="#6d4e46",y.fillRect(0,0,E,E);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*1.2,x*1.2),M=Math.sin(x*.4)*.04,D=(x*E+_)*4,b=.8+S*.3+M;R.data[D]*=b,R.data[D+1]*=b,R.data[D+2]*=b}y.putImageData(R,0,0)},61),d=Ue((y,E,P)=>{y.fillStyle="#74716b",y.fillRect(0,0,E,E);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.3,x*.3),M=Math.exp(-((_-200)**2+(x-220)**2)/9e3)*.45,D=(x*E+_)*4,b=.8+S*.15-M;R.data[D]*=b,R.data[D+1]*=b*(1-M*.3),R.data[D+2]*=b*(1-M*.4)}y.putImageData(R,0,0)},67),p=Ue((y,E)=>{y.fillStyle="#3a312a",y.fillRect(0,0,E,E)},71),f=Ue((y,E,P)=>{y.fillStyle="#4e3b2e",y.fillRect(0,0,E,E),y.strokeStyle="rgba(20,12,8,0.6)",y.lineWidth=6,y.strokeRect(28,28,E-56,E*.42),y.strokeRect(28,E*.5,E-56,E*.42);const R=y.getImageData(0,0,E,E);for(let x=0;x<E;x++)for(let _=0;_<E;_++){const S=$e(P,128,_*.2,x*.8),M=(x*E+_)*4,D=.85+S*.25;R.data[M]*=D,R.data[M+1]*=D,R.data[M+2]*=D}y.putImageData(R,0,0)},73),v=ya();{const y=v.g;y.clearRect(0,0,512,512);const E=zi(99);y.fillStyle="rgba(90,8,10,0.0)";for(let P=0;P<40;P++)y.fillStyle=`rgba(${80+E()*40},${6+E()*8},8,${.25+E()*.55})`,y.beginPath(),y.ellipse(40+E()*430,180+E()*160,20+E()*80,8+E()*24,E()*3,0,Math.PI*2),y.fill();y.fillStyle="rgba(60,4,6,0.7)",y.beginPath(),y.ellipse(256,270,180,36,.2,0,Math.PI*2),y.fill()}const m=Ma(v.c,!1,!0),g=new _t({map:m,transparent:!0,depthWrite:!1,roughness:.45,metalness:.05,color:"#7a1014",polygonOffset:!0,polygonOffsetFactor:-2}),w=new _t({color:"#141820",roughness:.15,metalness:.4,transparent:!0,opacity:.45,emissive:"#0a1018",emissiveIntensity:.2}),A={plaster:Ne(i.map,i.rough,"#ffffff"),damp:Ne(t.map,t.rough,"#ffffff"),brick:Ne(e.map,e.rough,"#ffffff"),panel:Ne(n.map,n.rough,"#ffffff"),tileWall:Ne(s.map,s.rough,"#ffffff",{roughness:.55}),concrete:Ne(r.map,r.rough,"#ffffff"),wood:Ne(o.map,o.rough,"#ffffff",{roughness:.78}),stone:Ne(a.map,a.rough,"#ffffff"),carpet:Ne(l.map,l.rough,"#ffffff",{roughness:1}),tileFloor:Ne(c.map,c.rough,"#ffffff",{roughness:.42,metalness:.08}),metal:Ne(h.map,h.rough,"#ffffff",{roughness:.55,metalness:.45}),fabric:Ne(u.map,u.rough,"#ffffff",{roughness:.95}),ceiling:Ne(d.map,d.rough,"#ffffff"),trim:Ne(p.map,p.rough,"#ffffff",{roughness:.7}),door:Ne(f.map,f.rough,"#ffffff",{roughness:.65}),blood:g,glass:w,eye:new _t({color:"#200000",emissive:"#ff1a12",emissiveIntensity:2.4,roughness:.3}),monster:new _t({color:"#0c0b0d",roughness:.84,metalness:.06}),dispose(){for(const y of Object.values(A))if(y instanceof vn){const E=y;E.map?.dispose(),E.roughnessMap?.dispose(),E.dispose()}}};return A}function Ox(i,t){const e=new Kt;e.name="SktAgnes_SetDressing_V2";const n=new _t({color:"#4f4940",metalness:.65,roughness:.88}),s=new _t({color:"#242528",roughness:.94,metalness:.22}),r=new _t({color:"#b1a48b",roughness:1,side:me}),o=new _t({color:"#2f3935",transparent:!0,opacity:.65,metalness:.23,roughness:.24}),a=new _t({color:"#4e4844",roughness:1,side:me}),l=new gn({color:"#241916",transparent:!0,opacity:.43,depthWrite:!1}),c=new Set,h=[n,s,r,o,a,l],u=(m,g,w,A,y,E,P)=>{const R=new nt(new Ht(m,g,w),P);return R.position.set(A,y,E),R.castShadow=!0,R.receiveShadow=!0,e.add(R),R},d=(m,g,w,A)=>{const y=g.clone().sub(m),E=new nt(new ve(w,w,y.length(),7),A);E.position.copy(m).addScaledVector(y,.5),E.quaternion.setFromUnitVectors(new k(0,1,0),y.normalize()),E.castShadow=!0,e.add(E)},p=(m,g,w,A)=>{const y=document.createElement("canvas");y.width=384,y.height=160;const E=y.getContext("2d");if(!E)return;E.fillStyle="#aaa08d",E.fillRect(0,0,384,160),E.fillStyle="#34312d",E.fillRect(12,12,360,136),E.strokeStyle="#655f53",E.lineWidth=3,E.strokeRect(24,25,335,110),E.textAlign="center",E.fillStyle="#c6b39a",E.font="bold 29px Georgia",E.fillText(m,192,76),E.font="16px monospace",E.fillText("SKT. AGNES  •  1987",192,107);const P=new Wi(y);P.colorSpace=ye,c.add(P);const R=new _t({map:P,roughness:.93});h.push(R);const x=new nt(new fe(.96,.4),R);x.position.set(g,w,A),e.add(x)},f={reception:"MODTAGELSE",patientgang:"PATIENTER",operationsstue:"STERILT",slagterum:"FORBUDT",arkiv:"JOURNALER",laboratorium:"LABORATORIUM",obduktion:"SEKTIONSSTUE",personalerum:"PERSONALE",kaeldergang:"KÆLDER",kapel:"STILHED",observation:"OBSERVATION",kammer:"ISOLATION",stilhed:"UDGANG",trappe0:"ETAGE 1",trappe1:"ETAGE 2",trappe2:"ETAGE 3"},v={reception:[4,.83,9.5],operationsstue:[30,.91,9.2],slagterum:[42,.86,9.4],arkiv:[8,.8,2.4],laboratorium:[16,.97,9.2],obduktion:[30,.88,9],personalerum:[45.8,.96,9.2],observation:[30,.82,2.4]};for(const m of t){if(m.outdoors)continue;const g=kt[m.floor],w=xa("set-dressing-"+m.id)>>>0,A=_=>((w^_*2654435761)>>>0)%1e3/1e3,y=g+Bi-.34,E=m.z+.19;d(new k(m.x+.4,y,E),new k(m.x+m.w-.4,y,E),.034,n);for(let _=1;_<=3;_++){const S=m.x+m.w*_/4;u(.08,.13,.11,S,y,E-.03,s)}p(f[m.id]??"AFDELING",m.x+Math.min(m.w-1.3,1.75),g+1.68,m.z+.145);for(let _=0;_<4;_++){const S=m.x+.75+_*.14+A(_+3)*.4,M=m.z+.7+A(_+7)*.65,D=new nt(new fe(.21+A(_+11)*.14,.19),r);D.rotation.x=-Math.PI/2,D.rotation.z=(A(_+17)-.5)*1,D.position.set(S,g+.079+_*5e-4,M),D.receiveShadow=!0,e.add(D)}const P=new nt(new Pr(.27+A(19)*.38,13),l);P.rotation.x=-Math.PI/2,P.position.set(m.x+m.w*.77,g+.081,m.z+1.15),P.scale.set(1.5,.65,1),e.add(P);const R=new nt(new fe(.54,.28),a);R.rotation.x=-Math.PI/2,R.rotation.z=A(41),R.position.set(m.x+m.w-1.1,g+.085,m.z+m.d-.8),e.add(R);const x=v[m.id];if(x){const[_,S,M]=x,D=g+S;for(let b=0;b<4;b++)u(.28,.012,.2,_-.38+b*.03,D+b*.014,M-.08,b%2?r:a);u(.3,.035,.16,_+.34,D+.025,M+.12,s);for(let b=0;b<3;b++){const U=new nt(new ve(.028,.032,.13+b*.028,8),o);U.position.set(_+.23+b*.09,D+.115+b*.013,M-.14),U.castShadow=!0,e.add(U)}}}return i.add(e),()=>{i.remove(e),e.traverse(m=>{m instanceof nt&&m.geometry.dispose()}),h.forEach(m=>m.dispose()),c.forEach(m=>m.dispose())}}const zx={reception:"Efterladt nattevagt og slidt administrationsskranke",patientgang:"Forladte patienter og nummererede døre",operationsstue:"Afbrudt indgreb og klinisk metal",slagterum:"Isoleret vaskeområde, kroge og forseglede beholdere",arkiv:"Overfyldt journalarkiv og glemte navne",laboratorium:"Forældet kemiudstyr og registreringsapparater",obduktion:"Obduktionsinstrumenter og kolde stålflader",personalerum:"Sidste kaffepause, radio og vagtbytter",kaeldergang:"Våd teknik, tre sikringer og generator",kapel:"Slidt kapel, 1907 og støvede votivlys",observation:"Observationsglas og patientfiksering",kammer:"Tom journalreol, isolationsseng og udgangsspor",trappe0:"Slidte gelændere og trappeskilte",trappe1:"Fugtskjolder og nedlagt el",trappe2:"Tunge beslag og mørk trappe",stilhed:"Udgang, regn og en sidste tung lås"};function Bx(i,t){const e={wood:new _t({color:"#4c382e",roughness:.88}),rust:new _t({color:"#5b4137",metalness:.57,roughness:.79}),enamel:new _t({color:"#596862",metalness:.18,roughness:.73}),porcelain:new _t({color:"#aaa89a",metalness:.02,roughness:.88}),paper:new _t({color:"#b2a48b",roughness:1}),ink:new _t({color:"#1a1b1b",roughness:.98}),cloth:new _t({color:"#4b4744",roughness:1,side:me}),brass:new _t({color:"#857352",metalness:.72,roughness:.56}),glass:new _t({color:"#465d59",metalness:.08,roughness:.2,transparent:!0,opacity:.66}),stain:new _t({color:"#29241d",roughness:1,transparent:!0,opacity:.48,depthWrite:!1,side:me}),glow:new _t({color:"#b0a084",emissive:"#806b48",emissiveIntensity:.15,roughness:.83})},n={box:new Ht(1,1,1),cylinder:new ve(.5,.5,1,10),sphere:new Ee(.5,10,8),torus:new Kn(.5,.09,6,12),sheet:new fe(1,1)},s=[],r=(f,v,m,g,w,A,y,E,P,R=0,x=0,_=0)=>{const S=new jt,M=new k(f.x+g,kt[f.floor]+w,f.z+A),D=new $n().setFromEuler(new tn(x,R,_,"XYZ"));S.compose(M,D,new k(y,E,P)),s.push({shape:v,finish:m,matrix:S})},o=(f,v,m,g,w,A,y,E,P=0)=>r(f,"box",v,m,g,w,A,y,E,P),a=(f,v,m,g,w=1)=>{r(f,"cylinder","glass",v,m+.1*w,g,.11*w,.2*w,.11*w),o(f,"rust",v,m+.21*w,g,.12*w,.025*w,.12*w)},l=(f,v,m,g,w)=>{for(let A=0;A<w;A++)o(f,A%3===0?"cloth":"paper",v+A*.045,m+.028+A*.013,g,.36,.012,.23,(A%3-1)*.035)},c=(f,v,m,g)=>{o(f,"ink",v,m,g,.32,.22,.08),r(f,"sphere","glow",v-.075,m+.035,g+.05,.045,.045,.045),r(f,"cylinder","brass",v+.075,m+.035,g+.05,.08,.04,.08,0,Math.PI/2)},h=(f,v,m)=>{o(f,"wood",v,2.18,m,.49,.49,.075),r(f,"cylinder","paper",v,2.18,m+.043,.38,.035,.38,0,Math.PI/2),o(f,"ink",v,2.19,m+.068,.025,.16,.01,.6),o(f,"ink",v+.035,2.13,m+.07,.095,.017,.01,.3)},u=f=>{o(f,"rust",f.w*.46,2.98,.28,f.w*.58,.044,.055);for(let m=0;m<3;m++)o(f,"rust",f.w*(.2+m*.2),2.98-.055,.28,.065,.12,.07);o(f,"wood",Math.max(1,f.w-2.3),1.66,.2,.86,.61,.07),o(f,"paper",Math.max(1,f.w-2.3),1.66,.247,.71,.45,.012);for(let m=0;m<3;m++)o(f,"ink",Math.max(1,f.w-2.53),1.78-m*.095,.258,.42+m*.07,.014,.01);for(let m=0;m<3;m++)r(f,"sheet","paper",.62+m*.2,.09+m*.001,.67+m%2*.14,.18+m*.04,.21,1,m*.2,-Math.PI/2);o(f,"stain",f.w-1.12,.85,.222,.46,1.2,.016)};for(const f of t)switch(f.id!=="stilhed"&&u(f),f.id){case"reception":o(f,"ink",4.54,.88,9.42,.34,.085,.18),o(f,"ink",4.52,.99,9.4,.3,.054,.075,.19),l(f,3.52,.84,9.25,5),r(f,"cylinder","porcelain",4.86,.98,9.7,.15,.2,.15),r(f,"torus","porcelain",4.97,1,9.7,.095,.095,.095),h(f,5.3,.25),c(f,9.48,1.48,9.56),o(f,"paper",9.33,1.07,9.38,.38,.025,.3);break;case"patientgang":for(let v=0;v<3;v++)o(f,"brass",3.25+v*.38,.91,9.3,.024,.08,.56),o(f,"cloth",3.21+v*.39,.94,9.3,.22,.045,.57);o(f,"enamel",10.2,1.35,.18,.55,.71,.12);for(let v=0;v<3;v++)a(f,2.1+v*.22,.4,.45,1.3);break;case"operationsstue":r(f,"cylinder","rust",6.1,3.12,8.6,.05,.6,.05),r(f,"cylinder","enamel",6.1,2.74,8.6,.97,.14,.97),r(f,"cylinder","glow",6.1,2.65,8.6,.62,.023,.62);for(let v=0;v<5;v++)o(f,"rust",8.88+v*.105,.98,2.07,.025,.025,.3,v*.06);a(f,3.45,.95,9.2),l(f,6.35,.92,9,3);break;case"slagterum":for(let v=0;v<5;v++)o(f,"rust",4.6+v*.39,2.63,2.42,.024,.52,.026),r(f,"torus","rust",4.6+v*.39,2.35,2.42,.08,.12,.08);a(f,5.65,.84,9.3),o(f,"enamel",6.1,.85,9.34,.34,.035,.25);break;case"arkiv":for(let v=0;v<14;v++)o(f,v%4===0?"paper":"cloth",2.12,.34+v%3*.47,8.27+Math.floor(v/3)*.19,.19,.3,.045);l(f,8,.8,2.4,6),o(f,"brass",8.48,.82,2.14,.1,.4,.08),r(f,"sphere","glow",8.48,1.04,2.14,.27,.12,.26);break;case"laboratorium":for(let v=0;v<6;v++)a(f,3.75+v%3*.18,.95,9.15+Math.floor(v/3)*.16,.8+v%2*.5);o(f,"rust",4.3,1.12,9.45,.03,.48,.04),o(f,"brass",4.3,1.35,9.45,.32,.03,.04),c(f,9.8,1.2,.43);break;case"obduktion":for(let v=0;v<4;v++)o(f,"rust",5.88+v*.105,.96,9.2,.026,.025,.35);r(f,"cylinder","brass",7.9,.12,8.8,.34,.025,.34),a(f,6.58,.93,9.2),l(f,2.3,1.15,2,4);break;case"personalerum":o(f,"wood",9.9,1.08,9.17,.56,.28,.19),o(f,"ink",9.9,1.1,9.29,.48,.18,.015),r(f,"cylinder","brass",10.02,1.11,9.31,.07,.045,.07,0,Math.PI/2),r(f,"sphere","glow",9.75,1.14,9.32,.05,.05,.05),r(f,"cylinder","porcelain",9.16,1.02,9.43,.15,.18,.15),l(f,9,.96,9.15,4),h(f,5.6,.25);break;case"kaeldergang":o(f,"rust",8.8,.65,9.15,1.18,1.12,.7),o(f,"ink",8.8,1.24,8.78,.82,.37,.06);for(let v=0;v<3;v++)o(f,"porcelain",8.55+v*.23,1.25,8.733,.12,.17,.035),o(f,v===0?"rust":v===1?"enamel":"brass",8.55+v*.23,1.25,8.7,.09,.11,.02);r(f,"cylinder","rust",9.05,1.39,9.14,.34,.24,.34);for(let v=0;v<3;v++)o(f,"rust",1.02+v*.2,2.52,10.92,.055,.98,.08);break;case"kapel":for(let v=0;v<5;v++)r(f,"cylinder","porcelain",5.13+v*.38,1.13,9.48,.078,.25+v%2*.1,.078),r(f,"sphere","glow",5.13+v*.38,1.3+v%2*.1,9.48,.04,.09,.04);o(f,"brass",6.06,1.2,9.18,.43,.19,.07),l(f,5.53,1.12,9.42,2),o(f,"rust",6.4,1.4,.21,.65,.48,.1);break;case"observation":o(f,"rust",5.3,1.72,.18,1.42,.94,.07),o(f,"glass",5.3,1.72,.245,1.29,.79,.018),c(f,7.5,1,2.15);for(let v=0;v<3;v++)o(f,"cloth",9.08,.98,9.05+v*.2,.48,.06,.07);break;case"kammer":for(let v=0;v<3;v++)o(f,"cloth",4.05+v*.45,.51,9.1,.11,.08,.75);l(f,2.1,1.29,2.05,6),o(f,"rust",9.6,1.49,.23,.65,.83,.1),c(f,1.6,1.1,2.25);break;case"trappe0":case"trappe1":case"trappe2":for(let v=0;v<5;v++)o(f,"rust",f.w-.54,.7+v*.38,1.05,.05,.12,.08);o(f,"paper",1.2,1.7,.22,.7,.43,.04);break;case"stilhed":o(f,"rust",6,1.48,5.68,2.3,2.7,.22),o(f,"brass",6.9,1.35,5.52,.19,.37,.1),o(f,"ink",6,2.5,5.5,.94,.09,.04);break}const d=new Kt;d.name="SktAgnes_VisualV3_Detail";const p=new Map;for(const f of s){const v=f.shape+":"+f.finish,m=p.get(v)??[];m.push(f),p.set(v,m)}for(const[f,v]of p){const[m,g]=f.split(":"),w=new za(n[m],e[g],v.length);v.forEach((A,y)=>w.setMatrixAt(y,A.matrix)),w.instanceMatrix.needsUpdate=!0,w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!1,w.name="V3_"+f,d.add(w)}return d.userData.v3DetailCount=s.length,d.userData.v3RoomThemes=zx,i.add(d),()=>{i.remove(d),Object.values(n).forEach(f=>f.dispose()),Object.values(e).forEach(f=>f.dispose())}}const Gx={reception:["MODTAGELSE","NATTEVAGT 1987"],patientgang:["PATIENTFLØJEN","STUE 01 - 08"],operationsstue:["OPERATION","STERILT OMRÅDE"],slagterum:["SERVICEFLØJ","PERSONALEADGANG"],arkiv:["JOURNALARKIV","ADGANG BEGRÆNSET"],laboratorium:["LABORATORIUM","PRØVEREGISTER"],obduktion:["OBDUKTION","REGISTRERING"],personalerum:["PERSONALE","VAGTSKIFTE"],kaeldergang:["TEKNISK DRIFT","HØJSPÆNDING"],kapel:["SANKT AGNES","GRUNDLAGT 1907"],observation:["OBSERVATION","ADGANG KUN PERSONALE"],kammer:["ISOLATION","PATIENTJOURNAL"],trappe0:["TRAPPE","STUEETAGE"],trappe1:["TRAPPE","FØRSTE SAL"],trappe2:["TRAPPE","KÆLDERFLØJ"]};function Vx(i,t,e){const n=new Kt;n.name="SktAgnes_CinematicArtV3";const s={box:new Ht(1,1,1),rod:new ve(.5,.5,1,12),orb:new Ee(.5,12,9),ring:new Kn(.5,.075,7,15),sheet:new fe(1,1)},r=[],o=(x,_)=>{const S=document.createElement("canvas");S.width=S.height=128;const M=S.getContext("2d");let D=x>>>0;const b=()=>(D=D*1664525+1013904223>>>0,D/4294967296);if(M){M.fillStyle="#e4e1d9",M.fillRect(0,0,128,128);for(let O=0;O<490;O++){const I=b()*128,V=b()*128,N=.02+b()*.14;M.fillStyle="rgba(26,24,20,"+N.toFixed(3)+")",M.fillRect(I,V,.5+b()*2.6,.5+b()*2.6)}for(let O=0;O<46;O++){const I=b()*128,V=b()*128;M.beginPath(),M.moveTo(I,V),_==="grain"?M.lineTo(I+b()*1.5,V+8+b()*50):_==="scratch"?M.lineTo(I+4+b()*18,V+b()*2):M.arc(I,V,.3+b()*2.8,0,Math.PI*2),M.strokeStyle="rgba(41,33,24,"+(.04+b()*.17).toFixed(3)+")",M.lineWidth=.6,M.stroke()}}const U=new Wi(S);return U.colorSpace=ye,U.wrapS=U.wrapT=hi,r.push(U),U},a={paint:new _t({color:"#65716a",map:o(81,"pitted"),roughness:.83,metalness:.13}),iron:new _t({color:"#5d5e5b",map:o(73,"scratch"),roughness:.62,metalness:.77}),brass:new _t({color:"#8d7b5e",map:o(52,"scratch"),roughness:.53,metalness:.8}),porcelain:new _t({color:"#aaa699",roughness:.78,metalness:0}),glass:new _t({color:"#62746e",roughness:.22,metalness:.08,transparent:!0,opacity:.62,depthWrite:!1}),oak:new _t({color:"#584438",map:o(110,"grain"),roughness:.9}),paper:new _t({color:"#b3a58e",map:o(15,"pitted"),roughness:1,side:me}),cloth:new _t({color:"#504c47",map:o(126,"grain"),roughness:1,side:me}),rubber:new _t({color:"#242a29",roughness:.94}),shadow:new _t({color:"#1c2020",roughness:1}),warm:new _t({color:"#927c56",roughness:.75,emissive:"#24190c",emissiveIntensity:.09}),rust:new _t({color:"#745244",map:o(48,"pitted"),roughness:.92,metalness:.44})},l=new Map,c=new Set;let h=0;const u=(x,_,S,M,D,b,U,O,I,V=0,N=0,$=0)=>{const J=new jt;J.compose(new k(x.x+M,kt[x.floor]+D,x.z+b),new $n().setFromEuler(new tn(V,N,$)),new k(U,O,I));const at=_+":"+S,Mt=l.get(at)??[];Mt.push({shape:_,finish:S,transform:J}),l.set(at,Mt),h++},d=(x,_,S,M,D,b,U,O,I=0)=>u(x,"box",_,S,M,D,b,U,O,0,I),p=(x,_,S,M,D,b,U,O=0,I=0,V=0)=>u(x,"rod",_,S,M,D,b*2,U,b*2,O,I,V),f=(x,_,S,M,D=1)=>{p(x,"glass",_,S+.08*D,M,.041*D,.16*D),p(x,"rust",_,S+.17*D,M,.048*D,.025*D),d(x,"paper",_,S+.09*D,M+.045*D,.072*D,.038*D,.007)},v=(x,_,S,M,D)=>{for(let b=0;b<D;b++){const U=.12+b%3*.017;d(x,b%4===0?"cloth":"paper",_+b*.035,S+U/2,M,.025,U,.22),d(x,"brass",_+b*.035,S+U*.65,M+.115,.013,.015,.008)}},m=(x,_,S,M)=>{d(x,"oak",_,S,M,.67,.88,.04),d(x,"paper",_,S,M+.029,.59,.78,.008),d(x,"iron",_,S+.36,M+.045,.16,.044,.025);for(let D=0;D<7;D++)d(x,D===4?"rust":"shadow",_-.19+D%2*.038,S+.22-D*.07,M+.037,.3-D%3*.053,.009,.007)},g=(x,_,S,M,D)=>{p(x,"iron",_+D/2,S,M,.043,D,0,0,Math.PI/2);for(const b of[.35,D-.25])u(x,"ring","rust",_+b,S,M,.16,.16,.16,0,Math.PI/2)},w=(x,_,S,M)=>{u(x,"rod","iron",_,S,M,.27,.043,.27,Math.PI/2),u(x,"rod","paper",_,S,M+.027,.19,.014,.19,Math.PI/2),d(x,"shadow",_+.034,S+.011,M+.035,.075,.008,.008,.44)},A=(x,_,S,M,D)=>{p(x,"porcelain",_,S+D/2,M,.055,D),p(x,"warm",_,S+D+.02,M,.024,.06)},y=[],E=[],P=(x,_,S,M,D,b,U,O,I)=>{const V=document.createElement("canvas");V.width=768,V.height=384;const N=V.getContext("2d");if(!N)return;N.fillStyle="#302d2a",N.fillRect(0,0,V.width,V.height),N.fillStyle="#b9ae91",N.fillRect(30,27,708,330),N.fillStyle="#746d5c",N.fillRect(45,41,678,300),N.fillStyle="#d0c3a5",N.fillRect(52,47,664,288),N.fillStyle="#3a3b36",N.textAlign="center",N.font="bold 49px Georgia,serif",N.fillText(O,384,148,650),N.fillStyle="#67574b",N.font="33px Georgia,serif",N.fillText(I,384,217,655),N.fillStyle="#6d302b",N.fillRect(275,257,220,5);for(let Mt=0;Mt<520;Mt++){const Nt=(Mt*173+17)%768,K=(Mt*101+53)%384;N.fillStyle=Mt%3===0?"rgba(46,31,20,0.20)":"rgba(70,59,41,0.09)",N.fillRect(Nt,K,2+Mt%5,1+Mt%3)}const $=new Wi(V);$.colorSpace=ye,$.anisotropy=4;const J=new _t({map:$,roughness:.93}),at=new nt(new fe(D,b),J);at.position.set(x.x+_,kt[x.floor]+S,x.z+M),at.rotation.y=Math.PI,at.name="V3_Poster_"+x.id+"_"+O,n.add(at),y.push(J),E.push($),d(x,"iron",_,S,M+U*-.027,D+.1,b+.1,.048)};for(const x of t){if(x.outdoors)continue;const _=x.w-.95,S=Gx[x.id];if(S){const M=document.createElement("canvas");M.width=512,M.height=192;const D=M.getContext("2d");if(D){D.fillStyle="#262c2b",D.fillRect(0,0,512,192),D.fillStyle="#827b68",D.fillRect(11,11,490,170),D.fillStyle="#b9ab91",D.fillRect(15,15,482,162),D.fillStyle="#292a29",D.font="bold 35px Georgia, serif",D.textAlign="center",D.fillText(S[0],256,79,465),D.font="25px Georgia, serif",D.fillText(S[1],256,127,465);for(let I=0;I<190;I++){const V=(I*71+x.id.length*37)%512,N=(I*47+x.floor*59)%192;D.fillStyle=I%2?"rgba(40,40,28,.13)":"rgba(244,218,171,.09)",D.fillRect(V,N,1+I%3,1+I%2)}const b=new Wi(M);b.colorSpace=ye,b.anisotropy=2;const U=new _t({map:b,roughness:.93,metalness:.03}),O=new nt(new fe(1.25,.47),U);O.position.set(x.x+_,kt[x.floor]+1.69,x.z+.156),O.name="V3_Sign_"+x.id,n.add(O),E.push(b),y.push(U),d(x,"iron",_,1.69,.13,1.35,.56,.045)}}for(let M=0;M<3;M++)d(x,"paint",.75+M*.72,.86,.205,.6,.08,.045),p(x,"iron",.46+M*.72,.86,.253,.022,.032,Math.PI/2);switch(x.id){case"reception":{d(x,"oak",4.35,1.79,.28,1.85,.87,.42);for(let M=0;M<6;M++){const D=3.6+M%3*.69,b=1.58+Math.floor(M/3)*.43;d(x,"shadow",D,b,.505,.58,.31,.015),v(x,D-.23,b-.13,.54,4)}m(x,8.2,1.78,.29);for(let M=0;M<3;M++)f(x,9.22+M*.14,1.04,9.67);P(x,4.25,2.53,11.78,3.1,.91,-1,"SANKT AGNES","MODTAGELSE  •  NATTJENESTE"),P(x,9.25,2.13,11.78,1.55,.85,-1,"VISITATION","JOURNALER / 1987"),d(x,"rubber",3.24,1.19,9.42,.36,.12,.23),d(x,"iron",3.24,1.28,9.42,.2,.03,.12),u(x,"rod","porcelain",3.24,1.271,9.34,.118,.018,.118,Math.PI/2);for(let M=0;M<8;M++){const D=M*Math.PI/4;u(x,"orb","shadow",3.24+Math.cos(D)*.041,1.295,9.34+Math.sin(D)*.041,.016,.009,.016)}d(x,"brass",4.65,1.19,9.56,.22,.025,.18),p(x,"brass",4.65,1.39,9.56,.017,.38),u(x,"orb","warm",4.65,1.59,9.55,.34,.14,.22),v(x,3.65,1.17,9.68,8),v(x,4.12,1.17,9.66,5),u(x,"orb","brass",4.95,1.23,9.22,.18,.1,.18),d(x,"brass",4.95,1.17,9.22,.21,.027,.21),d(x,"iron",2.52,.63,11.69,2.25,.67,.17);for(let M=0;M<13;M++)d(x,"paint",1.5+M*.17,.65,11.58,.085,.53,.09);break}case"patientgang":{d(x,"paint",7.6,1.35,.28,1.27,.8,.19);for(let M=0;M<4;M++)d(x,M===0?"warm":"shadow",7.23+M*.25,1.52,.393,.085,.12,.02);m(x,9.57,1.78,.28),P(x,5.5,2.62,11.78,1.78,.72,-1,"PATIENTFLØJ","STUE 01–08  •  STILHED"),g(x,1.6,1.05,11.68,2.3),g(x,7.2,1.05,11.68,2.2);break}case"operationsstue":{d(x,"iron",9.2,1.68,.31,1.43,1.57,.3);for(let M=0;M<3;M++)d(x,"glass",8.73+M*.48,1.72,.49,.4,.93,.027),d(x,"paint",8.73+M*.48,1.18,.51,.4,.055,.025);for(let M=0;M<6;M++)f(x,9.3+M%3*.18,1.3+Math.floor(M/3)*.38,.42,.7);d(x,"iron",4.45,1.09,9.34,.94,.045,.4);for(let M=0;M<3;M++)d(x,"brass",4.2+M*.25,1.16,9.38,.018,.032,.27);break}case"slagterum":{d(x,"iron",6.7,.82,.36,1.36,.12,.57),d(x,"porcelain",6.7,.87,.37,1.14,.08,.45);for(let M=0;M<4;M++)p(x,"rust",4.3+M*.37,2.58,.55,.016,.46),u(x,"ring","iron",4.3+M*.37,2.31,.55,.17,.18,.17);g(x,2.7,2.92,.52,5.4);break}case"arkiv":{m(x,6.7,1.74,.3),P(x,6.45,2.52,11.78,2.24,.72,-1,"ARKIVET","INGEN ADGANG UDEN NØGLE"),d(x,"oak",4.1,.64,9.42,.76,1.26,.38);for(let M=0;M<10;M++)v(x,3.8+M%5*.16,.83+Math.floor(M/5)*.45,9.32,2);d(x,"iron",7.7,1.18,2.34,.52,.31,.4);for(const M of[-.18,.18])u(x,"ring","iron",7.7+M,1.35,2.35,.22,.22,.22);break}case"laboratorium":{d(x,"iron",9.3,1.53,.28,1.5,1.32,.32);for(let M=0;M<9;M++)f(x,8.77+M%3*.22,1.01+Math.floor(M/3)*.36,.53);w(x,7.1,1.78,.39),P(x,6.25,2.53,11.78,2.22,.72,-1,"LABORATORIUM","PRØVER  •  ADGANG FORBUDT"),m(x,5.68,1.82,.28);break}case"obduktion":{d(x,"iron",8.65,.83,.35,1.16,.1,.55),d(x,"shadow",8.65,.86,.35,.83,.035,.3);for(let M=0;M<4;M++)f(x,8.33+M*.2,.88,.28);m(x,6.9,1.79,.25);for(let M=0;M<3;M++)d(x,"brass",4.1+M*.19,1.07,9.23,.028,.022,.29,.1);break}case"personalerum":{d(x,"oak",7.6,1.71,.29,1.72,.95,.1);for(let M=0;M<7;M++)d(x,M%3===0?"cloth":"paper",7.1+M%4*.35,1.92-Math.floor(M/4)*.4,.36,.29,.34,.012,M%2?.08:-.08);m(x,4.7,1.72,.27);for(let M=0;M<3;M++)f(x,9.54+M*.16,1.06,9.32);break}case"kaeldergang":{d(x,"iron",8.6,1.74,.31,1.47,1.01,.25);for(let M=0;M<3;M++)w(x,8.12+M*.48,1.89,.47);g(x,1.5,2.43,.38,6.4);for(let M=0;M<5;M++)d(x,"rust",1.8+M*.12,.94,9.18,.04,.038,.38);break}case"kapel":{for(let M=0;M<7;M++)A(x,4.2+M*.35,1.03,9.4,.12+M%3*.05);d(x,"oak",6.4,2.03,.27,.12,.74,.1),d(x,"oak",6.4,2.17,.34,.47,.11,.07),m(x,9.2,1.67,.29);break}case"observation":{d(x,"iron",5,1.84,.28,1.9,1,.06),d(x,"glass",5,1.84,.327,1.71,.81,.016),m(x,8.45,1.8,.28),d(x,"shadow",9.13,.83,9.11,.39,.02,.72);break}case"kammer":{d(x,"oak",7.7,1.66,.28,1.1,.71,.09);for(let M=0;M<9;M++)d(x,"shadow",7.26+M%3*.35,1.35+Math.floor(M/3)*.18,.35,.28,.016,.013);m(x,3.8,1.79,.25),v(x,2.12,1.34,2.18,5);break}case"trappe0":case"trappe1":case"trappe2":{for(const M of[.29,7.71]){d(x,"iron",M,1.15,3,.065,.075,3.95),d(x,"brass",M,1.18,3,.095,.018,3.95);for(const D of[1.25,3,4.75])d(x,"iron",M,1,D,.14,.33,.052);d(x,"iron",M,2.9,7.45,.065,.075,3.7);for(const D of[5.76,7.3,9.07])d(x,"iron",M,2.75,D,.14,.33,.052)}g(x,.75,3.07,11.7,5.7),P(x,4,1.72,11.79,2.7,.76,-1,"TRAPPEOPGANG",x.floor===0?"TIL 1. SAL":x.floor===1?"TIL 2. SAL":"UDGANG"),d(x,"paint",6.6,1.34,.38,.78,1.04,.19);for(let M=0;M<6;M++)d(x,M===0?"rust":"iron",6.35+M%3*.24,1.65-Math.floor(M/3)*.37,.493,.13,.13,.028);break}}}const R=new Map(t.map(x=>[x.id,x]));for(const x of e){const _=R.get(x.room);if(!_)continue;const S=x.x-_.x,M=x.z-_.z;if(x.kind==="shelf"||x.kind==="bookshelf"){for(let D=0;D<2;D++){const b=x.h*(.47+D*.28)+.02;v(_,S-x.w*.36,b,M,Math.min(7,Math.floor(x.w*7)))}c.add(x.id)}else if(x.kind==="medicalcart"){for(let D=0;D<3;D++)f(_,S-.19+D*.18,x.h-.04,M-.05,.75);d(_,"cloth",S+.05,x.h+.025,M+.15,.3,.055,.17),c.add(x.id)}}for(const[x,_]of l){const[S,M]=x.split(":"),D=new za(s[S],a[M],_.length);_.forEach((b,U)=>D.setMatrixAt(U,b.transform)),D.instanceMatrix.needsUpdate=!0,D.castShadow=!1,D.receiveShadow=!1,D.frustumCulled=!1,D.name="V3C_"+x,n.add(D)}return n.userData.visualPartCount=h,n.userData.decoratedFurniture=[...c],n.userData.visualOnly=!0,i.add(n),()=>{i.remove(n),Object.values(s).forEach(x=>x.dispose()),Object.values(a).forEach(x=>x.dispose()),r.forEach(x=>x.dispose());for(const x of y)x.dispose();for(const x of E)x.dispose();for(const x of n.children)x instanceof nt&&x.name.startsWith("V3_Sign_")&&x.geometry.dispose()}}const Hx={wood:"wood",tile:"tileFloor",concrete:"concrete",carpet:"carpet",stone:"stone"},Wx={plaster:"plaster",tile:"tileWall",concrete:"concrete",panel:"panel",brick:"brick",damp:"damp"};function Xx(i,t){const e=Fx(),n=Ox(i,t.rooms),s=Bx(i,t.rooms),r=Vx(i,t.rooms,t.props),o=new Map,a=(b,U)=>{const O=o.get(b)??[];O.push(U),o.set(b,O)};for(const b of t.rooms){const U=kt[b.floor],O=`${b.id}|${Hx[b.floorMat]}`;for(const I of Pc(b,qx(b.id,t)))a(O,ge(I.x,U+.02,I.z,I.w,.08,I.d));if(!b.outdoors){const I=`${b.id}|ceiling`,V=U+Bi-.05;for(const N of Pc(b,Yx(b.id,t)))a(I,ge(N.x,V,N.z,N.w,.08,N.d))}}for(const b of t.walls){const U=t.rooms.find(N=>N.id===b.roomId),O=U?Wx[U.wallMat]:"plaster",I=kt[b.floor];b.axis==="x"?a(`${b.roomId}|${O}`,ge(b.coord-.11,I,b.min,.22,Bi,b.max-b.min)):a(`${b.roomId}|${O}`,ge(b.min,I,b.coord-.11,b.max-b.min,Bi,.22));const V=.16;b.axis==="x"?a(`${b.roomId}|trim`,ge(b.coord-.13,I,b.min,.08,V,b.max-b.min)):a(`${b.roomId}|trim`,ge(b.min,I,b.coord-.13,b.max-b.min,V,.08))}for(const b of t.doors)$x(b,a);const l=[],c=[],h=[];let u=new Kt,d=new Kt,p=new Kt;for(const b of t.props){const U=t.rooms.find(V=>V.id===b.room);if(!U)continue;const O=kt[U.floor]+(b.yOff??0);if(b.kind==="chair"){l.push(Fi(b.x,O,b.z,b.rot));continue}if(b.kind==="crate"){c.push(Fi(b.x,O+.34,b.z,b.rot));continue}if(b.kind==="barrel"){h.push(Fi(b.x,O+.42,b.z,b.rot));continue}const I=jx(b.kind,b.w,b.h,b.d);if(b.kind==="mannequin"||b.kind==="pot"||b.id==="secretshelf"){const V=new Kt;for(const N of I){const $=e[N.mat];if(!($ instanceof vn))continue;const J=new nt(N.geo,$);J.castShadow=!0,J.receiveShadow=!0,V.add(J)}V.position.set(b.x,O,b.z),V.rotation.y=b.rot,i.add(V),b.kind==="mannequin"?(u=V,V.visible=!1):b.kind==="pot"?d=V:p=V;continue}for(const V of I)V.geo.applyMatrix4(Fi(b.x,O,b.z,b.rot)),a(`${U.id}|${V.mat}`,V.geo)}for(const b of t.stairs){const O=kt[b.fromFloor],I=kt[b.toFloor];if(b.axis!=="z")continue;const V=I-O,N=b.d/21,$=b.x+.18,J=b.w-.36;for(let tt=0;tt<21;tt++){const ut=(tt+1)/21,it=O+ut*V,yt=b.z+tt*N,At=.105;if(a("stairs|stone",ge($,it-At,yt,J,At,N*1.005)),tt>0){const Dt=O+tt/21*V;a("stairs|stone",ge($+.015,Dt-.04,yt,J-.03,it-Dt+.04,.065))}a("stairs|trim",ge($+.035,it-.02,yt+N*.85,J-.07,.026,N*.13)),a("stairs|metal",ge($+.12,it-.008,yt+N*.68,J-.24,.009,N*.045))}const at=-Math.atan2(V,b.d),Mt=Math.hypot(b.d,V);for(const tt of[$+.13,$+J-.13]){const ut=new Ht(.13,.25,Mt);ut.rotateX(at),ut.translate(tt,(O+I)*.5-.22,b.z+b.d*.5),a("stairs|metal",ut)}const Nt=-Math.atan2(V,b.d),K=Math.hypot(b.d,V);for(const tt of[b.x+.18,b.x+b.w-.18]){const ut=new Ht(.085,.1,K);ut.rotateX(Nt),ut.translate(tt,(O+I)*.5+.83,b.z+b.d*.5),a("stairs|metal",ut);for(let it=0;it<=21;it+=2){const yt=it/21;a("stairs|metal",ge(tt-.04,O+V*yt,b.z+b.d*yt-.04,.08,.83,.08))}}}for(const b of t.decals){const U=t.rooms.find(N=>N.id===b.room);if(!U)continue;const O=kt[U.floor]+.06,I=new fe(b.w,b.d);I.rotateX(-Math.PI/2),I.applyMatrix4(Fi(b.x,O,b.z,b.rot));const V=new nt(I,b.kind==="blood"?e.blood:e.concrete);V.receiveShadow=!0,i.add(V)}const f=[],v=new ve(.04,.05,.18,6),m=e.glass;for(const b of t.rooms){if(b.outdoors||b.w<5||b.d<5)continue;const U=xa(b.id),O=1+U%3;for(let I=0;I<O;I++){const V=new nt(v,m),N=(U>>I*3&7)/7,$=(U>>I*5+2&7)/7;V.position.set(b.x+.6+N*(b.w-1.2),kt[b.floor]+.1,b.z+.6+$*(b.d-1.2)),V.userData.detail=!0,i.add(V),f.push(V)}if(U%2===0){const I=Jx();I.position.set(b.x+.35,kt[b.floor]+Bi-.45,b.z+.35),I.userData.detail=!0,i.add(I),f.push(I)}}let g=0;for(const b of t.walls){if(!b.exterior||g>14||b.max-b.min<3.2||xa(b.roomId+b.coord)%3!==0)continue;const O=kt[b.floor]+1.45,I=(b.min+b.max)/2;e.trim;const V=new nt(new fe(1.15,1.5),e.glass);b.axis==="x"?(V.position.set(b.coord,O,I),V.rotation.y=Math.PI/2,a(`${b.roomId}|trim`,ge(b.coord-.08,O-.8,I-.65,.08,1.6,.08)),a(`${b.roomId}|trim`,ge(b.coord-.08,O-.8,I+.57,.08,1.6,.08))):(V.position.set(I,O,b.coord),a(`${b.roomId}|trim`,ge(I-.65,O-.8,b.coord-.08,.08,1.6,.08)),a(`${b.roomId}|trim`,ge(I+.57,O-.8,b.coord-.08,.08,1.6,.08))),V.userData.window=!0,i.add(V),g++}const w=[];for(const[b,U]of o){const O=b.split("|")[1],I=Zh(U,!1);if(!I)continue;I.computeVertexNormals();const V=e[O];if(!(V instanceof vn))continue;const N=new nt(I,V);N.castShadow=!0,N.receiveShadow=!0,i.add(N),w.push(I);for(const $ of U)$.dispose()}const A=wo(Zx(),e.wood,l,i),y=wo(new Ht(.68,.68,.68),e.wood,c,i),E=wo(new ve(.28,.3,.85,8),e.metal,h,i),P=new Map;for(const b of t.doors){if(b.kind==="arch"||b.kind==="hidden")continue;const U=new Kt,O=e.door.clone(),I=new nt(new Ht(b.width*.96,2.42,.12),O);I.castShadow=!0,I.receiveShadow=!0,I.position.set(b.width*.48,1.21,0);const V=new _t({color:"#1c2425",roughness:.96}),N=new _t({color:"#554d3c",roughness:.53,metalness:.67}),$=b.width*.76;for(const Nt of[-1,1])for(const K of[-.56,.51]){const tt=new nt(new Ht($,.84,.012),V);tt.position.set(0,K,Nt*.066),I.add(tt);for(const ut of[-.39,.39]){const it=new nt(new Ht($,.034,.025),O);it.position.set(0,K+ut,Nt*.084),I.add(it)}for(const ut of[-1,1]){const it=new nt(new Ht(.035,.79,.025),O);it.position.set(ut*$*.48,K,Nt*.084),I.add(it)}}const J=new nt(new Ht(.09,.26,.015),N);J.position.set(b.width*.29,-.09,.09),I.add(J);for(const Nt of[-1,1]){const K=new nt(new Ee(.043,12,10),N);K.position.set(b.width*.29,-.09,Nt*.13),I.add(K)}const at=new nt(new Ht($,.18,.017),N);at.position.set(0,-1.04,.073),I.add(at),U.add(I);const Mt=kt[b.floor];b.axis==="x"?(U.position.set(b.coord,Mt,b.spanMin),U.rotation.y=-Math.PI/2):(U.position.set(b.spanMin,Mt,b.coord),U.rotation.y=0),U.userData.closedYaw=U.rotation.y,U.userData.swing=1,U.userData.panel=I,i.add(U),P.set(b.id,U),Qx(i,b)}const R=new Map;for(const b of t.pickups){const U=t.rooms.find(I=>I.id===b.room);if(!U)continue;const O=t_(b.itemId,e);O.position.set(b.x,kt[U.floor]+.85,b.z),i.add(O),R.set(b.id,O)}const x=[];for(const b of t.lights){let U;if(b.room==="hall"){const J=new ma(b.color,b.intensity,b.distance,1.05,.55,1.15);J.position.set(b.x,b.y,b.z),J.target.position.set(b.x,kt[0],b.z),J.castShadow=!0,J.shadow.mapSize.set(512,512),J.shadow.bias=-4e-4,i.add(J,J.target),U=J}else{const J=new Nh(b.color,b.intensity,b.distance,1.35);J.position.set(b.x,b.y,b.z),i.add(J),U=J}const O=new Kt;O.position.set(b.x,b.y+.14,b.z);const I=new _t({color:"#333738",metalness:.65,roughness:.81}),V=new _t({color:"#b8bdb6",emissive:b.color,emissiveIntensity:.55,roughness:.34,metalness:.04}),N=new nt(new Ht(1.42,.12,.31),I);N.castShadow=!0,O.add(N);const $=new nt(new Ht(1.27,.026,.24),e.trim);$.position.y=-.073,O.add($);for(const J of[-.075,.075]){const at=new nt(new Ht(1.22,.036,.066),V);at.position.set(0,-.108,J),O.add(at)}for(const J of[-.64,.64]){const at=new nt(new Ht(.048,.045,.27),I);at.position.set(J,-.105,0),O.add(at)}i.add(O),x.push({def:b,light:U,base:b.intensity,lens:V})}const _=new Ae,S=400,M=new Float32Array(S*3);for(let b=0;b<S;b++)M[b*3]=30+Math.random()*8,M[b*3+1]=Math.random()*6,M[b*3+2]=28+Math.random()*8;_.setAttribute("position",new We(M,3));const D=new Dh(_,new Ba({color:"#9bb0c4",size:.035,transparent:!0,opacity:.35,depthWrite:!1}));return D.visible=!1,i.add(D),{materials:e,doors:P,pickups:R,lights:x,mannequin:u,pot:d,secretShelf:p,detail:f,rain:D,dispose(){r(),s(),n(),e.dispose();for(const b of w)b.dispose();A.geometry.dispose(),y.geometry.dispose(),E.geometry.dispose(),_.dispose(),D.material.dispose()}}}function qx(i,t){return i==="trappe1"?t.stairs.filter(e=>e.id==="stair_01"):i==="trappe2"?t.stairs.filter(e=>e.id==="stair_12"):[]}function Yx(i,t){return i==="trappe0"?t.stairs.filter(e=>e.id==="stair_01"):i==="trappe1"?t.stairs.filter(e=>e.id==="stair_12"):[]}function Pc(i,t){let e=[i];for(const n of t){const s=[];for(const r of e)s.push(...Kx(r,n));e=s}return e.filter(n=>n.w>.05&&n.d>.05)}function Kx(i,t){const e=i.x+i.w,n=i.z+i.d,s=t.x+t.w,r=t.z+t.d,o=Math.max(i.x,t.x),a=Math.max(i.z,t.z),l=Math.min(e,s),c=Math.min(n,r);if(l-o<.05||c-a<.05)return[i];const h=[];return a>i.z&&h.push({x:i.x,z:i.z,w:i.w,d:a-i.z}),n>c&&h.push({x:i.x,z:c,w:i.w,d:n-c}),o>i.x&&h.push({x:i.x,z:a,w:o-i.x,d:c-a}),e>l&&h.push({x:l,z:a,w:e-l,d:c-a}),h}function ge(i,t,e,n,s,r){const o=new Ht(Math.max(.02,n),Math.max(.02,s),Math.max(.02,r));return Jh(o,Math.max(.02,n),Math.max(.02,s),Math.max(.02,r)),o.applyMatrix4(Fi(i+n/2,t+s/2,e+r/2,0)),o}function Jh(i,t,e,n){const s=i.getAttribute("uv"),r=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let o=0;o<6;o++){const a=r[o][0]*.42,l=r[o][1]*.42;for(let c=0;c<4;c++){const h=o*4+c;s.setXY(h,s.getX(h)*a,s.getY(h)*l)}}s.needsUpdate=!0}function Fi(i,t,e,n){const s=new jt,r=new $n().setFromAxisAngle(new k(0,1,0),n);return s.compose(new k(i,t,e),r,new k(1,1,1)),s}function $x(i,t){const e=kt[i.floor],n=2.55,s=.08;i.axis==="x"?(t("frame|trim",ge(i.coord-.06,e,i.spanMin-s,.12,n,s)),t("frame|trim",ge(i.coord-.06,e,i.spanMax,.12,n,s)),t("frame|trim",ge(i.coord-.06,e+n-s,i.spanMin,.12,s,i.width))):(t("frame|trim",ge(i.spanMin-s,e,i.coord-.06,s,n,.12)),t("frame|trim",ge(i.spanMax,e,i.coord-.06,s,n,.12)),t("frame|trim",ge(i.spanMin,e+n-s,i.coord-.06,i.width,s,.12)))}function q(i,t,e,n,s,r,o){const a=new Ht(i,t,e);return Jh(a,i,t,e),a.translate(n,s+t/2,r),{geo:a,mat:o}}function jx(i,t,e,n){switch(i){case"pillar":return[q(t,e,n,0,0,0,"stone")];case"bench":return[q(t,.08,n,0,.42,0,"wood"),q(.08,.42,n,-t/2,0,0,"wood"),q(.08,.42,n,t/2,0,0,"wood")];case"receptiondesk":{const s=-n*.5,r=[q(t*.96,e*.84,n*.82,0,.07,0,"wood"),q(t*1.04,.075,n*1.08,0,e-.09,0,"trim"),q(t*1.04,.1,n*.22,0,e-.03,s+n*.09,"wood"),q(t*.99,e*.72,.033,0,.13,s-.012,"wood"),q(t*.98,.115,.04,0,.07,s-.05,"metal"),q(t*1.05,.065,.052,0,e*.71,s-.052,"trim"),q(t*.66,.034,.03,0,e*.55,n*.49,"metal")];for(let o=0;o<13;o++){const a=(o/12-.5)*(t*.91);r.push(q(.023,e*(o%4===0?.62:.55),.052,a,.14,s-.057,o%3===0?"trim":"wood"))}for(const o of[-1,1])r.push(q(.09,e*.84,n*.86,o*t*.47,.06,0,"wood")),r.push(q(.035,e*.58,.048,o*t*.48,.22,s-.045,"metal"));return r}case"desk":case"table":return[q(t,.08,n,0,e-.08,0,"wood"),q(.08,e-.08,.08,-t/2+.08,0,-n/2+.08,"wood"),q(.08,e-.08,.08,t/2-.08,0,-n/2+.08,"wood"),q(.08,e-.08,.08,-t/2+.08,0,n/2-.08,"wood"),q(.08,e-.08,.08,t/2-.08,0,n/2-.08,"wood")];case"shelf":case"bookshelf":return[q(t,e,.06,0,0,-n/2,"wood"),q(t,.05,n,0,.15,0,"wood"),q(t,.05,n,0,e*.45,0,"wood"),q(t,.05,n,0,e*.75,0,"wood")];case"locker":return[q(t,e,n,0,0,0,"metal"),q(t*.92,.055,.025,0,e*.92,n/2,"trim"),q(t*.92,.055,.025,0,e*.14,n/2,"trim"),q(.04,e*.76,.03,-t*.035,e*.15,n/2,"trim"),q(.025,.16,.05,t*.27,e*.51,n/2,"trim"),...[-.3,-.18,-.06].map(s=>q(t*.56,.021,.027,-t*.03,e*(.81+s),n/2,"trim"))];case"recordcabinet":return[q(t,e,n,0,0,0,"wood"),q(t*1.02,.06,n*1.04,0,e-.05,0,"trim"),q(t*.95,.095,n*.96,0,0,0,"trim"),...[0,1,2].flatMap(s=>{const r=e*(.12+s*.25);return[q(t*.86,e*.195,.027,0,r,n*.512,"trim"),q(t*.8,e*.163,.032,0,r+e*.014,n*.534,"wood"),q(t*.25,.055,.041,0,r+e*.135,n*.566,"metal"),q(t*.23,.023,.055,0,r+e*.05,n*.57,"trim")]})];case"filing":return[q(t,e,n,0,0,0,"metal"),q(t*1.035,.05,n*1.03,0,e-.055,0,"trim"),q(t*.93,.08,n*.96,0,0,0,"trim"),...[0,1,2,3].flatMap(s=>{const r=e*(.1+s*.217);return[q(t*.85,e*.16,.024,0,r,n*.516,"trim"),q(t*.79,e*.125,.028,0,r+e*.015,n*.535,"metal"),q(t*.28,.047,.03,0,r+e*.106,n*.556,"trim"),q(t*.25,.031,.053,0,r+e*.034,n*.562,"metal")]})];case"sideboard":return[q(t,e*.72,n,0,e*.24,0,"wood"),q(t*1.08,.064,n*1.06,0,e*.94,0,"wood"),...[-.22,.22].map(s=>q(.065,.026,.065,s*t,e*.57,n*.53,"metal")),...[-.36,.36].map(s=>q(.09,e*.18,.1,s*t,0,n*.37,"wood"))];case"counter":return[q(t,e,n,0,0,0,"tileWall"),q(t,.06,n,0,e-.06,0,"metal")];case"pew":return[q(t,.095,n*.86,0,.43,0,"wood"),q(t,.59,.095,0,.4,-n*.51,"wood"),...[-1,1].flatMap(s=>[q(.1,.55,n*.89,s*t*.45,.01,0,"wood"),q(.19,.12,n*.8,s*t*.45,.015,0,"trim"),q(.055,.12,n*.54,s*t*.42,.54,-n*.28,"trim")]),q(t*.83,.032,.2,0,.3,-n*.12,"wood")];case"altar":return[q(t,e,n,0,0,0,"stone"),q(.08,.35,.08,-.3,e,0,"trim")];case"sofa":return[q(t,.28,n,0,.26,0,"fabric"),q(t,.5,.16,0,.43,-n/2+.08,"fabric"),...[-1,1].map(s=>q(.18,.36,n,s*(t/2-.09),.28,0,"fabric")),...[-.28,.28].map(s=>q(t*.38,.08,n*.65,s*t*.7,.51,.06,"fabric"))];case"medicalcart":return[q(t*1.025,.066,n*1.08,0,e-.074,0,"metal"),q(t,.05,n,0,.31,0,"metal"),...[-1,1].flatMap(s=>[-1,1].map(r=>q(.035,e-.11,.035,s*(t/2-.065),.11,r*(n/2-.065),"metal"))),...[-1,1].flatMap(s=>[-1,1].map(r=>q(.11,.1,.11,s*(t/2-.1),.02,r*(n/2-.07),"trim"))),q(t*.83,.033,n*.81,0,e*.58,0,"metal"),...[-1,1].map(s=>q(t*.98,.13,.034,0,e-.16,s*n*.54,"trim")),...[-1,1].map(s=>q(.034,.13,n*.86,s*t*.52,e-.16,0,"trim")),q(t*.46,.055,.042,0,e*.61,n*.52,"trim"),q(t*.61,.045,.27,0,.34,0,"glass")];case"foldscreen":return[...[-.33,0,.33].map(s=>q(t*.31,e*.83,.038,t*s,.2,0,"fabric")),...[-.49,-.16,.16,.49].map(s=>q(.031,e,.05,t*s,0,0,"metal")),q(t,.04,.06,0,e-.06,0,"metal")];case"ivstand":return[q(.045,e,.045,0,0,0,"metal"),q(t,.04,.045,0,.03,0,"metal"),q(.045,.04,n,0,.03,0,"metal"),q(.22,.035,.04,0,e-.06,0,"metal"),q(.08,.22,.045,t*.25,e-.38,0,"glass")];case"bathtub":return[q(t,e,n,0,0,0,"tileWall")];case"gurney":return[q(t*.93,.075,n*.93,0,.66,0,"metal"),q(t*.91,.11,n*.83,0,.73,0,"fabric"),q(t*.84,.034,n*.77,0,.84,0,"fabric"),q(t*.23,.085,n*.57,-t*.31,.86,0,"trim"),...[-1,1].flatMap(s=>[-1,1].map(r=>q(.045,.68,.045,s*(t/2-.11),.03,r*(n/2-.12),"metal"))),...[-1,1].map(s=>q(t*.73,.036,.04,0,.51,s*n*.54,"metal")),...[-1,1].map(s=>q(t*.63,.034,.042,0,.84,s*n*.54,"metal")),...[-1,1].map(s=>[q(.035,.17,.035,-t*.28,.67,s*n*.54,"metal"),q(.035,.17,.035,t*.28,.67,s*n*.54,"metal")]).flat(),...[-1,1].flatMap(s=>[-1,1].map(r=>q(.12,.12,.12,s*(t/2-.13),.005,r*(n/2-.13),"trim"))),q(t*.49,.021,n*.62,t*.13,.87,0,"glass"),q(t*.47,.04,n*.46,0,.27,0,"metal")];case"cabinet":return[q(t,e,n,0,0,0,"wood"),q(t*.92,e*.78,.022,0,e*.13,n*.52,"trim"),...[-1,1].flatMap(s=>[q(t*.44,e*.73,.029,s*t*.23,e*.155,n*.537,"wood"),q(.028,.14,.047,s*t*.08,e*.5,n*.568,"metal")])];case"dresser":return[q(t,e,n,0,0,0,"wood"),q(t*1.04,.055,n*1.06,0,e-.05,0,"trim"),...[0,1,2].flatMap(s=>{const r=e*(.14+s*.252);return[q(t*.88,e*.18,.026,0,r,n*.51,"trim"),q(t*.82,e*.15,.031,0,r+e*.013,n*.53,"wood"),q(t*.3,.036,.045,0,r+e*.06,n*.56,"metal")]})];case"stove":return[q(t,e,n,0,0,0,"metal")];case"generator":case"boiler":return[q(t,e,n,0,0,0,"metal"),q(.2,.5,.2,0,e,0,"trim")];case"fridge":return[q(t,e,n,0,0,0,"metal")];case"safe":return[q(t,e,n,0,0,0,"metal"),q(t*.78,e*.72,.03,0,e*.06,n*.52,"trim"),q(.1,.1,.05,t*.18,e*.42,n*.55,"metal")];case"bed":return[q(t,.11,n,0,.31,0,"metal"),q(t*.91,.17,n*.9,0,.42,0,"fabric"),q(t*.36,.095,n*.77,-t*.27,.6,0,"trim"),q(t*.49,.052,n*.94,t*.18,.61,0,"glass"),q(.065,.72,n*1.05,-t*.51,0,0,"metal"),q(.065,.52,n*1.05,t*.51,0,0,"metal"),...[-1,1].flatMap(s=>[q(t*.82,.044,.048,0,.82,s*n*.52,"metal"),q(t*.8,.04,.06,0,.62,s*n*.52,"metal")]),...[-1,1].flatMap(s=>[-1,1].map(r=>q(.047,.38,.047,s*t*.46,0,r*n*.44,"metal")))];case"wheelchair":{const s=[q(t*.7,.085,n*.62,0,.47,.015,"fabric"),q(t*.72,.47,.065,0,.57,-n*.37,"fabric"),q(t*.8,.045,n*.65,0,.39,0,"metal"),...[-1,1].map(r=>q(.04,.25,n*.64,r*t*.45,.51,0,"metal")),...[-1,1].map(r=>q(.2,.045,n*.48,r*t*.43,.72,-n*.1,"fabric")),...[-1,1].map(r=>q(.035,.47,.04,r*t*.43,.09,-n*.36,"metal")),q(t*1.04,.035,.04,0,.34,n*.3,"metal")];for(const r of[-1,1]){const o=new Kn(.27,.035,8,24);o.rotateY(Math.PI/2),o.translate(r*t*.5,.34,-.03),s.push({geo:o,mat:"metal"});const a=new Kn(.27,.016,6,24);a.rotateY(Math.PI/2),a.translate(r*t*.5+r*.001,.34,-.03),s.push({geo:a,mat:"monster"});for(let l=0;l<6;l++){const c=Math.PI*l/3,h=new Ht(.012,.42,.018);h.rotateX(c),h.translate(r*t*.5,.34,-.03),s.push({geo:h,mat:"trim"})}}return s}case"plant":return[q(.22,.28,.22,0,0,0,"trim")];case"beam":return[q(t,e,n,0,0,0,"wood")];case"mannequin":return[q(.32,.7,.16,0,.85,0,"monster"),q(.18,.22,.16,0,1.55,0,"monster"),q(.1,.7,.1,-.24,.85,0,"monster"),q(.1,.7,.1,.24,.85,0,"monster")];case"pot":return[q(.22,.2,.22,0,.7,0,"metal")];default:return[q(t,e,n,0,0,0,"trim")]}}function Zx(){const i=[q(.4,.06,.4,0,.46,0,"wood"),q(.4,.42,.06,0,.5,-.17,"wood"),q(.05,.46,.05,-.16,0,-.16,"wood"),q(.05,.46,.05,.16,0,-.16,"wood"),q(.05,.46,.05,-.16,0,.16,"wood"),q(.05,.46,.05,.16,0,.16,"wood")];return Zh(i.map(e=>e.geo),!1)??new Ht(.4,.9,.4)}function wo(i,t,e,n){const s=new za(i,t,Math.max(1,e.length));return s.castShadow=!0,s.receiveShadow=!0,e.forEach((r,o)=>s.setMatrixAt(o,r)),e.length||(s.count=0),s.instanceMatrix.needsUpdate=!0,n.add(s),s}function Jx(){const i=new Kt,t=new gn({color:"#c8c2b6",transparent:!0,opacity:.18,side:me,depthWrite:!1}),e=new nt(new fe(.7,.7),t),n=new nt(new fe(.7,.7),t);return n.rotation.y=.8,i.add(e,n),i}function Qx(i,t,e){const n=(r,o,a,l,c)=>{if(!r)return;const h=document.createElement("canvas");h.width=256,h.height=64;const u=h.getContext("2d");if(!u)return;u.fillStyle="#2a241e",u.fillRect(0,0,256,64),u.strokeStyle="#8a7a66",u.strokeRect(3,3,250,58),u.fillStyle="#e6d7c4",u.font="28px Georgia",u.textAlign="center",u.textBaseline="middle",u.fillText(r,128,34);const d=new Wi(h);d.colorSpace=ye;const p=new nt(new fe(.72,.18),new _t({map:d,roughness:.8,emissive:"#2a2118",emissiveIntensity:.25}));p.position.set(o,a,l),p.rotation.y=c,i.add(p)},s=kt[t.floor]+2.15;t.axis==="x"?(n(t.signA??"",t.coord-.2,s,t.center,Math.PI/2),n(t.signB??"",t.coord+.2,s,t.center,-Math.PI/2)):(n(t.signA??"",t.center,s,t.coord-.2,0),n(t.signB??"",t.center,s,t.coord+.2,Math.PI))}function t_(i,t){const e=new Kt;let n;if(i.includes("fuse")){const s=i.includes("red")?"#b4231c":i.includes("blue")?"#2458a8":"#c6a227";n=new nt(new ve(.05,.05,.16,8),new _t({color:s,roughness:.4,metalness:.3,emissive:s,emissiveIntensity:.2}))}else i==="battery"?n=new nt(new ve(.05,.05,.16,8),t.metal):i.includes("key")?n=new nt(new Ht(.16,.04,.05),t.metal):i==="medkit"?n=new nt(new Ht(.22,.1,.16),new _t({color:"#f2f2f0",roughness:.5})):i==="rosary"?n=new nt(new Kn(.08,.015,6,12),t.metal):i==="crowbar"?(n=new nt(new Ht(.5,.04,.04),t.metal),n.rotation.z=.4):i==="evidence"?n=new nt(new Ht(.28,.04,.2),t.door):n=new nt(new Ht(.2,.02,.16),t.door);return e.add(n),e}class e_{constructor(t){this.el=t,window.addEventListener("keydown",e=>{Dc(e.target)&&e.code!=="Escape"||((e.ctrlKey||e.metaKey||e.code==="ControlLeft"||e.code==="ControlRight")&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),this.edges.add(e.code),["KeyE","KeyF","KeyR","Tab","KeyI","Escape","KeyG","KeyQ","Space","F3","F4","ArrowUp","ArrowDown","Enter"].includes(e.code)&&e.preventDefault()))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("mousemove",e=>{(this.pointerLocked||e.buttons===1)&&(this.lookX+=e.movementX,this.lookY+=e.movementY)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.el}),window.addEventListener("blur",()=>{this.keys.clear()})}keys=new Set;edges=new Set;lookX=0;lookY=0;pointerLocked=!1;virtual=null;sens=.00215;setSensitivity(t){this.sens=t}consumeLook(){const t=this.lookX*this.sens,e=this.lookY*this.sens;return this.lookX=0,this.lookY=0,{x:t,y:e}}wish(){const t=this.virtual,e=r=>this.keys.has(r),n=t?.forward??(e("KeyW")||e("ArrowUp")?1:0)-(e("KeyS")||e("ArrowDown")?1:0),s=t?.strafe??(e("KeyD")||e("ArrowRight")?1:0)-(e("KeyA")||e("ArrowLeft")?1:0);return{forward:n,strafe:s,sprint:t?.sprint??(e("ShiftLeft")||e("ShiftRight")),crouch:t?.crouch??(e("ControlLeft")||e("ControlRight")||e("KeyC")),jump:t?.jump??e("Space")}}pressed(t){return this.edges.has(t)?(this.edges.delete(t),!0):!1}formFocused(){return Dc(document.activeElement)}takeFirst(t){for(const e of t)if(this.edges.has(e))return this.edges.delete(e),e;return null}discard(t){for(const e of t)this.edges.delete(e)}lock(){const e=this.el.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}unlock(){document.pointerLockElement&&document.exitPointerLock()}}function Dc(i){if(!(i instanceof HTMLElement))return!1;if(i.isContentEditable)return!0;const t=i.tagName;if(t==="TEXTAREA"||t==="SELECT")return!0;if(t!=="INPUT")return!1;const e=i.type;return e!=="button"&&e!=="submit"&&e!=="checkbox"&&e!=="radio"}const n_=["Escape","Tab","KeyI"],i_=["KeyE","KeyF","KeyR","KeyG","KeyQ","Space","F3","F4","F6","F7"];function s_(i){return i==="ArrowUp"||i==="KeyW"?"up":i==="ArrowDown"||i==="KeyS"?"down":i==="Enter"||i==="KeyE"?"use":"none"}function r_(i,t){if(!t)return{type:"none"};if(i==="playing"){if(t==="Escape")return{type:"mode",mode:"paused"};if(t==="Tab"||t==="KeyI")return{type:"mode",mode:"inventory"}}else if(i==="paused"){if(t==="Escape")return{type:"mode",mode:"playing"};if(t==="Tab"||t==="KeyI")return{type:"mode",mode:"inventory"}}else if(i==="inventory"){if(t==="Escape"||t==="Tab"||t==="KeyI")return{type:"mode",mode:"playing"}}else if(i==="examine"||i==="keypad"){if(t==="Escape")return{type:"mode",mode:"playing"}}else if((i==="settings"||i==="slots"||i==="credits"||i==="exit")&&t==="Escape")return{type:"back"};return{type:"none"}}const o_="1907",Ke=(i,t,e,n)=>({id:i,name:t,description:e,kind:"note",stack:1,droppable:!1,text:n}),pi={note_maja:Ke("note_maja","Majas brev","Kuverten er fugtig. Blækket er Majas.",`Emil

Hvis du læser det her, er jeg gået ind alene. Det var dumt. Skt. Agnes lukkede officielt i 1987, men porten er ikke den eneste vej ud — og ikke den eneste vej ind.

De flyttede ikke patienterne. De flyttede journalerne ned under jorden og lod huset glemme dem. Vogteren går stadig rundgang. Han kan lide mørke, og han hader lys i øjnene.

Koden er årstallet på stifterens sten. Jeg nåede ikke pengeskabet. Kapelnøglen skulle ligge på første sal. Bagporten er død uden strøm. Der er også en tunnel under lighuset, hvis porten svigter.

Hvis lyset dør, så stå stille. Hvis han hvisker dit navn, er det allerede for sent at løbe.

— Maja`),note_log:Ke("note_log","Vagtbog","Sidste side i receptionens bog.",`VAGTBLOG — 12. november 1987

03:10  Østfløjen mørk. Sikringerne er sprunget igen.
03:40  Lyd fra kapellet. Ingen nøgle i skranken.
04:05  Dr. Holm beordrer kælderen aflåst.
04:20  Jeg slukker ikke lyset i gangen. Jeg slukker ikke lyset.
04:31  Nogen står i døren. Det er ikke en patient.

Siden er revet over. Resten mangler.`),note_code:Ke("note_code","Stiftelsesprotokol","Et arkivark med årstal og en henvisning.",`STIFTELSESPROTOKOL (uddrag)

Skt. Agnes Asyl grundlagt 1907 af Agnes Holm.
Direktørens pengeskab er sat til stiftelsesåret.
Nøglerne til kapellet opbevares på sygeplejerskekontoret — 1. sal.

"Det der skrives ned, kan ikke begraves."`),note_generator:Ke("note_generator","Nødstrømsnote","En falmet instruktion ved generatoren.",`NØDSTRØM — KUN FOR VEDLIGEHOLD

Tre sikringer skal sidde samtidigt:
  RØD  — køkkenet, ved komfuret
  BLÅ  — fyrrummet
  GUL  — kælderdepotet

Uden strøm forbliver bagportens lås død.
Hylden i lighuset kan brydes med kobenet fra fyrrummet.
Tunnellen bagved er ikke tegnet færdig. Kravl, hvor loftet knækker.`),note_nurse:Ke("note_nurse","Seddel fra vagten","Skrevet med en hånd der ryster.",`Til den næste vagt —

Kapelnøglen ligger i øverste skuffe. Jeg lægger den der, fordi mine hænder ryster for meget til at bede.

Lad være med at tælle sengene på 1. sal. Der er altid én for meget.

— Søster`),note_director:Ke("note_director","Holms brev","Fundet i pengeskabet. Papiret er tungt.",`Fortroligt. Dr. E. Holm.

Forsøgene i kælderen skulle kun vare vinteren over. Agnes' navn holdt bestyrelsen rolig. Det gjorde Vogteren ikke.

Han var ansat til at holde orden. Nu holder han huset. Hvis nogen finder mapperne i kapellet, så brænd porten — ikke journalerne.

Journalerne er husets hukommelse. Uden dem er han bare en mand i en uniform der ikke passer mere.`),note_secret:Ke("note_secret","Uafrystelig note","Ikke stemplet. Ikke arkiveret.",`Ikke arkiveret.

Patienterne i fløj B blev ført ned efter lukketid. De der ikke kom op igen, står ikke i de officielle tal.

Rosenkransen lå om Agnes' hånd, da de murede nichen til. Den får ham til at tøve. Kun et øjeblik. Det er nok, hvis du allerede er i bevægelse.`),file_1:Ke("file_1","Journal 12","Patientjournal. Navnet er streget over.",`JOURNAL 12 — indlagt 1979

Patienten beskriver en vagt der står stille for enden af sengen, også når lyset er tændt. Anbefaling: ingen nattevagter alene i østfløjen.

Overført til kælderobservation 2. marts 1986. Ingen udskrivelse.`),file_2:Ke("file_2","Journal 19","Mappen lugter af fugt og jern.",`JOURNAL 19 — "stilleperioden"

Efter tre døgn uden søvn holdt patienten op med at blinke. Dr. Holm noterede det som fremgang. Sygeplejersken noterede det ikke.

Sidste linje, anden håndskrift: Han tæller stadig med.`),file_3:Ke("file_3","Journal 27","Et barnefoto er hæftet bagpå. Det vender forkert.",`JOURNAL 27 — stue 101

Familien fik at vide, at patienten var overført til et andet amt. Der findes intet modtagebrev.

På bagsiden af fotografiet, med blyant: "tæl ikke vinduerne."`),file_4:Ke("file_4","Journal 33","Blækket er tværet ud, som om siden har ligget i vand.",`JOURNAL 33 — stue 102

Patienten nægtede at sove med ryggen til døren. Natten efter var sengen flyttet, ikke patienten.

Margen: Hvis du ser én der står helt stille, så er det ikke en patient. Patienter trækker vejret.`),file_5:Ke("file_5","Journal 41","Et ark fra lighuset. Hjørnet er brændt.",`JOURNAL 41 — kælder

Dødstidspunkt udeladt. Årsag udeladt. Underskrift: Holm.

Under stregen, ikke med maskine: Vi løb tør for plads i skufferne, så vi begyndte at bruge nicherne.`),file_6:Ke("file_6","Journal 44","Den sidste mappe. Den har aldrig haft et stempel.",`JOURNAL 44 — ikke oprettet

Navn: Agnes Holm. Status: stifter, ikke patient. Alligevel ligger journalen her.

"Hun bad os huske hende som et hus. Huse husker tilbage."

Hvis alle seks journaler forlader grunden sammen med bevismappen, er der noget at trykke. Ellers er det kun en historie.`),battery:{id:"battery",name:"Batteri",description:"Et slidt batteri til lygten. Tryk R for at skifte.",kind:"battery",stack:8,droppable:!0},fuse_red:{id:"fuse_red",name:"Rød sikring",description:"Keramik og kobber. Hører til i generatoren.",kind:"fuse",stack:1,droppable:!1},fuse_blue:{id:"fuse_blue",name:"Blå sikring",description:"Mærket med et blåt bånd. Fyrrummet.",kind:"fuse",stack:1,droppable:!1},fuse_yellow:{id:"fuse_yellow",name:"Gul sikring",description:"Den sidste af de tre. Depotet.",kind:"fuse",stack:1,droppable:!1},key_op:{id:"key_op",name:"Nøgle fra operationsstuen",description:"En af tre. Uden den forbliver vejen ud lukket.",kind:"key",stack:1,droppable:!1},key_arkiv:{id:"key_arkiv",name:"Nøgle fra arkivet",description:"En af tre. Den lå mellem journalerne.",kind:"key",stack:1,droppable:!1},key_kapel:{id:"key_kapel",name:"Nøgle fra kapellet",description:"En af tre. Kold som alteret.",kind:"key",stack:1,droppable:!1},chapel_key:{id:"chapel_key",name:"Kapelnøgle",description:"Tung, kold messing. Passer til kapeldøren.",kind:"key",stack:1,droppable:!1},master_key:{id:"master_key",name:"Hovednøgle",description:"Direktørens nøgle. Bagporten vil have den — og strøm.",kind:"key",stack:1,droppable:!1},evidence:{id:"evidence",name:"Bevismappe",description:"Kapellets mappe. Uden den er flugten kun en flugt.",kind:"story",stack:1,droppable:!1,text:`BEVISMAPPE — kapellet, Skt. Agnes

Korrespondance mellem Dr. Holm og amtet, 1984–1987.
Overførsler uden modtager.
En liste over navne der ikke optræder i de offentlige dødsbøger.

Det er nok til en artikel. Det er ikke nok til at gøre huset færdigt.
Seks journaler mangler, hvis nogen skal tro på det hele.`},rosary:{id:"rosary",name:"Agnes’ rosenkrans",description:"Perlerne er varme. Tryk Q for at holde den frem. To gange.",kind:"special",stack:1,droppable:!1,text:"Perlerne er slidt skæve. Når du holder den frem, standser skridtene et øjeblik — ikke af ærbødighed, af genkendelse."},crowbar:{id:"crowbar",name:"Koben",description:"Rustent. Nok til at rokke en hylde der ikke vil flytte sig.",kind:"tool",stack:1,droppable:!1},medkit:{id:"medkit",name:"Førstehjælp",description:"Gazebind og en halv flaske sprit. Bruges fra inventaret.",kind:"consumable",stack:4,droppable:!0,heal:48},blueprint:{id:"blueprint",name:"Bygningsplan",description:"En gulnet plantegning. Rum du har besøgt, er tydeligere.",kind:"map",stack:1,droppable:!1,text:`SKT. AGNES — PLANTEGNING
Kælder, stueetage, 1. sal.
Hemmelige rum er ikke tegnet. Tunnellen er kun en stiplet streg.`}},Wa=["file_1","file_2","file_3","file_4","file_5","file_6"];function Ii(i){const t=pi[i];if(!t)throw new Error(`Ukendt genstand: ${i}`);return t}function Qh(i){return i.map(t=>({...t}))}function Xa(i,t){return i.reduce((e,n)=>n.itemId===t?e+n.count:e,0)}function de(i,t){return Xa(i,t)>0}function sr(i,t,e=1){const n=pi[t];if(!n||!Number.isFinite(e)||e<=0)return{slots:i,added:0};const s=Qh(i);let r=Math.min(e,Math.max(0,n.stack-Xa(s,t)));const o=r,a=s.find(l=>l.itemId===t);if(a){const l=Math.min(r,n.stack-a.count);a.count+=l,r-=l}return r>0&&s.push({itemId:t,count:r}),{slots:s,added:o}}function Sr(i,t,e=1){const n=Qh(i);let s=e;for(let r=n.length-1;r>=0&&s>0;r--){if(n[r].itemId!==t)continue;const o=Math.min(n[r].count,s);n[r].count-=o,s-=o,n[r].count<=0&&n.splice(r,1)}return n}function Lc(i,t){const e=pi[t];return!e||!e.droppable||Xa(i,t)<=0?{slots:i,dropped:!1}:{slots:Sr(i,t,1),dropped:!0}}function a_(i,t){const e=pi[t];return!e||e.kind!=="consumable"||!de(i,t)?{slots:i,heal:0}:{slots:Sr(i,t,1),heal:e.heal??0}}const tu=100,eu=100/170,l_=eu*.18,c_=45;function h_(i,t,e){const n=Math.max(0,e);let s=i,r=t,o=!1;return r?(s=Math.max(0,s-eu*n),s<=0&&(r=!1,o=!0)):s=Math.min(tu,s+l_*n),{charge:s,on:r,died:o}}function kc(i,t=c_){return Math.min(tu,Math.max(0,i)+t)}function rr(i){return i<=.5?"empty":i<12?"critical":i<25?"low":"ok"}const u_=["fuse_red","fuse_blue","fuse_yellow"];function or(i,t){return i.readIds.includes(t)}function d_(i){return u_.filter(t=>de(i.inventory,t)).length}function Ic(i){return["key_op","key_arkiv","key_kapel"].filter(t=>de(i.inventory,t)).length}function Eo(i){return Wa.filter(t=>de(i.inventory,t)).length}const qa=[{id:"m1_brev",requires:[],text:()=>"Læs Majas brev.",hint:()=>"Det ligger i inventaret. Undersøg det.",done:i=>or(i,"note_maja")},{id:"m2_reception",requires:["m1_brev"],text:()=>"Læs vagtbogen i receptionen.",hint:()=>"Den ligger ved skranken.",done:i=>or(i,"note_log")},{id:"m3_generator",requires:["m2_reception"],text:i=>i.flags.generatorOn?"Generatoren kører.":`Find tre sikringer og start generatoren (${d_(i)}/3).`,hint:i=>or(i,"note_generator")?"Rød, blå og gul skal sidde i generatoren samtidig.":"Nødstrømmen står et sted i kælderen.",done:i=>i.flags.generatorOn},{id:"m4_arkiv",requires:["m2_reception"],text:()=>"Undersøg arkivet og find stiftelsesprotokollen.",hint:()=>"Protokollen siger, hvilket årstal pengeskabet bruger.",done:i=>or(i,"note_code")},{id:"m5_nogler",requires:["m4_arkiv"],text:i=>`Find nøglerne fra operationsstuen, arkivet og kapellet (${Ic(i)}/3).`,hint:()=>"De tre nøgler ligger ikke i samme rum.",done:i=>Ic(i)>=3},{id:"m6_beviser",requires:["m5_nogler"],optional:!0,text:i=>i.flags.secretOpen?`Den skjulte gang er åben. Saml journaler (${Eo(i)}/6) og bevismappen.`:`Saml patientjournaler (${Eo(i)}/6) og kapellets bevismappe.`,hint:()=>"Det ændrer slutningen. Det låser ikke døren.",done:i=>de(i.inventory,"evidence")&&Eo(i)>=6},{id:"m7_udgang",requires:["m5_nogler"],text:()=>"Åbn UD TIL STILHEDEN.",hint:i=>i.flags.generatorOn?i.flags.safeOpen?"Tre nøgler, strøm og hovednøglen.":"Pengeskabet bruger stiftelsesåret.":"Bagporten er død uden strøm.",done:()=>!1}];function f_(i){const t=qa.find(e=>e.id===i);if(!t)throw new Error(`Ukendt mission: ${i}`);return t}function nu(i,t){return i.requires.every(e=>f_(e).done(t))}function p_(i,t){return{id:i.id,text:i.text(t),done:i.done(t),hint:i.hint(t),optional:!!i.optional}}function m_(i){return qa.filter(t=>nu(t,i)).map(t=>p_(t,i))}function g_(i){const t=m_(i).filter(e=>!e.optional);return t.find(e=>!e.done)??t[t.length-1]}function v_(i){const t=qa.filter(n=>!n.optional&&n.id!=="m7_udgang");return t.filter(n=>nu(n,i)&&n.done(i)).length/t.length}const ci={x:6,y:0,z:6,yaw:Math.PI/2},ar={x:42,y:0,z:9,yaw:Math.PI};function wr(){return{version:1,playTime:0,player:{x:ci.x,y:ci.y,z:ci.z,yaw:ci.yaw,pitch:0,health:100,stamina:100,battery:100,flashlightOn:!1,crouching:!1},inventory:[{itemId:"note_maja",count:1}],pickedUp:[],flags:{generatorOn:!1,secretOpen:!1,safeOpen:!1,radioOn:!1,introDone:!1,mannequinUsed:!1,mannequinOn:!1,powerCut:!1},visited:["reception"],doorsOpen:[],doorsUnlocked:[],monster:{x:ar.x,y:ar.y,z:ar.z,yaw:ar.yaw,state:"Patrol",waypointIndex:0,suspicion:0,blindTime:0},rosaryCharges:2,iFrame:0,events:Es(),readIds:[]}}function iu(i){return Wa.reduce((t,e)=>t+(de(i.inventory,e)?1:0),0)}const su=[{id:"key_op",name:"Nøgle fra operationsstuen"},{id:"key_arkiv",name:"Nøgle fra arkivet"},{id:"key_kapel",name:"Nøgle fra kapellet"}];function Uc(i){return su.filter(t=>de(i.inventory,t.id)).length}function x_(i){return su.filter(t=>!de(i.inventory,t.id)).map(t=>t.name)}function ru(i){const t=x_(i);return t.length?`UD TIL STILHEDEN er låst. Mangler: ${t.join(", ")}.`:i.flags.generatorOn?!i.flags.safeOpen&&!de(i.inventory,"master_key")?"Kræver hovednøglen fra pengeskabet.":null:"Låsen er død. Generatoren mangler strøm."}function Nc(i,t,e){return e&&i.flags.secretOpen&&t==="slagterum"?"tunnel":t==="stilhed"&&ru(i)===null?"yard":null}function lr(i){return g_(i)}function __(i){return v_(i)}function y_(i,t){if(t==="death")return"optagelsen";if(t==="tunnel")return"flugten";const e=iu(i),n=de(i.inventory,"evidence"),s=de(i.inventory,"rosary");return n&&s&&e>=6?"vidnet":n?"sandheden":"tom_port"}function M_(i){switch(i){case"vidnet":return{kicker:"Afslutning",title:"Vidnet",paragraphs:["Bagporten giver sig, da strømmen og nøglen endelig er enige. Regnen er koldere end huset. Under armen har du bevismappen, rosenkransen og alle seks journaler.","Maja står ikke på vejen. Det gør ingen. Men navnene gør. I morgen er Skt. Agnes ikke længere en anekdote, nogen kan lukke en dør på.","Et sted bag dig standser et par skridt ved tærsklen og bliver der. Huset husker. Nu gør nogen udenfor det også."]};case"sandheden":return{kicker:"Afslutning",title:"Sandheden",paragraphs:["Du har ikke hvert ark. Du har nok. Bevismappen vejer mere end lygten, og porten lukker bag dig med en lyd der endelig lyder som en lås og ikke som en mund.","Artiklen vil blive modsagt. Det er i orden. Modsigelse er også et spor, og spor er det eneste, Vogteren ikke kan patruljere."]};case"tom_port":return{kicker:"Afslutning",title:"Den tomme port",paragraphs:["Porten åbner. Du løber. Dine hænder er tomme.",'I dagslys vil du lyde som alle de andre, der "bare havde en fornemmelse" af Skt. Agnes. Huset beholder papirerne. Du beholder pulsen. Ingen af delene rækker.']};case"flugten":return{kicker:"Afslutning",title:"Flugten",paragraphs:["Tunnellen lugter af jern og regn. Du kravler ud under marehalmen, og vinden tager lygten et øjeblik, før den giver den tilbage.","Bag dig bliver bygningen stående med sine arkiver, sine senge og sin vagt. Du slap ud. Det er ikke det samme som at afslutte noget."]};case"optagelsen":return{kicker:"Afslutning",title:"Optagelsen",paragraphs:["Lygten peger op i loftet. Nogen samler den op. Det er ikke dig.","Dit navn står på en linje, der ikke fandtes i går, med en håndskrift du genkender. Vogteren retter på uniformen og fortsætter sin runde. Der er én seng mere, end der var."]}}}const ou=[0,1,2,3],au=i=>`skt-agnes-save-${i}`;function b_(){return localStorage}const S_=new Set(["note","story","map","collectible"]),w_=new Set(["Idle","Patrol","Investigate","Search","Suspicious","Chase","Attack","LostPlayer","ReturnToPatrol"]);function ke(i,t){return typeof i=="number"&&Number.isFinite(i)?i:t}function fs(i,t,e){return Math.max(t,Math.min(e,i))}function ps(i){return Array.isArray(i)?i.filter(t=>typeof t=="string"):[]}function E_(i){if(!Array.isArray(i))return[];const t=new Map;for(const e of i){if(!e||typeof e!="object")continue;const n=e.itemId,s=e.count,r=typeof n=="string"?pi[n]:void 0;!r||typeof s!="number"||!Number.isFinite(s)||s<=0||t.set(n,Math.min(r.stack,(t.get(n)??0)+s))}return[...t].map(([e,n])=>({itemId:e,count:Math.floor(n)}))}function T_(i){if(!i||typeof i!="object")return null;const t=i;if(!t.player||typeof t.player.x!="number"||!Number.isFinite(t.player.x)||!Array.isArray(t.inventory))return null;const e=wr(),n=E_(t.inventory),s=t.readIds,r=Array.isArray(s)?s.filter(c=>typeof c=="string"&&!!pi[c]):n.map(c=>c.itemId).filter(c=>c!=="note_maja"&&S_.has(pi[c]?.kind??"")),o={...e.flags},a=t.flags??{};for(const c of Object.keys(e.flags))o[c]=a[c]===!0;const l=t.monster&&typeof t.monster.x=="number"?t.monster:e.monster;return{...e,version:1,playTime:Math.max(0,ke(t.playTime,0)),player:{...e.player,x:t.player.x,y:ke(t.player.y,e.player.y),z:ke(t.player.z,e.player.z),yaw:ke(t.player.yaw,e.player.yaw),pitch:fs(ke(t.player.pitch,0),-1.2,1.2),health:fs(ke(t.player.health,100),0,100),stamina:fs(ke(t.player.stamina,100),0,100),battery:fs(ke(t.player.battery,100),0,100),flashlightOn:t.player.flashlightOn===!0,crouching:t.player.crouching===!0},inventory:n,pickedUp:ps(t.pickedUp),flags:o,visited:ps(t.visited).length?ps(t.visited):e.visited,doorsOpen:ps(t.doorsOpen),doorsUnlocked:ps(t.doorsUnlocked),monster:{...e.monster,x:ke(l.x,e.monster.x),y:ke(l.y,e.monster.y),z:ke(l.z,e.monster.z),yaw:ke(l.yaw,e.monster.yaw),state:w_.has(l.state)?l.state:e.monster.state,waypointIndex:Number.isInteger(l.waypointIndex)?l.waypointIndex:0,suspicion:ke(l.suspicion,0),blindTime:ke(l.blindTime,0)},rosaryCharges:fs(Math.round(ke(t.rosaryCharges,e.rosaryCharges)),0,2),iFrame:Math.max(0,ke(t.iFrame,0)),events:t.events&&Array.isArray(t.events.jumps)?{...Es(),...t.events,jumps:t.events.jumps.filter(c=>typeof c=="string"),beats:Array.isArray(t.events.beats)?t.events.beats.filter(c=>typeof c=="string"):[]}:Es(),readIds:r}}function A_(i,t,e,n=Date.now()){const s={version:1,slot:t,savedAt:n,snapshot:structuredClone(e)};return i.setItem(au(t),JSON.stringify(s)),s}function Ms(i,t){const e=i.getItem(au(t));if(!e)return null;try{const n=JSON.parse(e);if(!n||n.version!==void 0&&n.version!==1)return null;const s=T_(n.snapshot);return s?{version:1,slot:t,savedAt:typeof n.savedAt=="number"&&Number.isFinite(n.savedAt)?n.savedAt:0,snapshot:s}:null}catch{return null}}function Fc(i){return ou.map(t=>Ms(i,t))}function Oc(i){let t=null;for(const e of ou){const n=Ms(i,e);n&&(!t||n.savedAt>t.savedAt)&&(t=n)}return t}const lu="skt-agnes-settings";function ba(){const i=typeof navigator<"u"?navigator:void 0,t=i?i.deviceMemory:void 0,e=i?.hardwareConcurrency;return{quality:t!==void 0&&t<=4||e!==void 0&&e<=4?"low":"medium",resolutionScale:1,mouseSensitivity:95e-5,masterVolume:.8,musicVolume:.7,sfxVolume:.85,brightness:1,fpsCap:60,fullscreen:!1,motionBlur:!1,cameraShake:!0,reduceFlicker:!1,subtitles:!0,invertY:!1}}function Ui(i,t,e){return Math.max(t,Math.min(e,i))}function Ya(i){const t=ba(),e=i??{},n=e.quality==="low"||e.quality==="high"||e.quality==="medium"?e.quality:t.quality,s=e.fpsCap,r=s===0||s===30||s===60||s===120?s:t.fpsCap;return{quality:n,resolutionScale:Ui(typeof e.resolutionScale=="number"?e.resolutionScale:t.resolutionScale,.5,1.25),mouseSensitivity:Ui(typeof e.mouseSensitivity=="number"?e.mouseSensitivity:t.mouseSensitivity,4e-4,.01),masterVolume:Ui(typeof e.masterVolume=="number"?e.masterVolume:t.masterVolume,0,1),musicVolume:Ui(typeof e.musicVolume=="number"?e.musicVolume:t.musicVolume,0,1),sfxVolume:Ui(typeof e.sfxVolume=="number"?e.sfxVolume:t.sfxVolume,0,1),brightness:Ui(typeof e.brightness=="number"?e.brightness:t.brightness,.55,1.6),fpsCap:r,fullscreen:typeof e.fullscreen=="boolean"?e.fullscreen:t.fullscreen,motionBlur:typeof e.motionBlur=="boolean"?e.motionBlur:t.motionBlur,cameraShake:typeof e.cameraShake=="boolean"?e.cameraShake:t.cameraShake,reduceFlicker:typeof e.reduceFlicker=="boolean"?e.reduceFlicker:t.reduceFlicker,subtitles:typeof e.subtitles=="boolean"?e.subtitles:t.subtitles,invertY:typeof e.invertY=="boolean"?e.invertY:t.invertY}}function R_(i){const t=i.getItem(lu);if(!t)return ba();try{return Ya(JSON.parse(t))}catch{return ba()}}function C_(i,t){i.setItem(lu,JSON.stringify(Ya(t)))}const bs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const P_=new Ua(-1,1,1,-1,0,1);class D_ extends Ae{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}}const L_=new D_;class kr{constructor(t){this._mesh=new nt(L_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,P_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Sa extends gi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pn.clone(t.uniforms),this.material=new Me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new kr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zc extends gi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class k_ extends gi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Bc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sa(bs),this.copyPass.material.blending=ze,this.clock=new Vg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zc!==void 0&&(o instanceof zc?n=!0:o instanceof k_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Gc extends gi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Gt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const I_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Zi extends gi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new Gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Ze(r,o,{type:un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Ze(r,o,{type:un});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=I_;this.highPassUniforms=Pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ot(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=bs;this.copyUniforms=Pn.clone(h.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_r,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Gt,this.oldClearAlpha=1,this.basic=new gn,this.fsQuad=new kr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Zi.BlurDirectionX=new ot(1,0);Zi.BlurDirectionY=new ot(0,1);const U_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class N_ extends gi{constructor(){super();const t=U_;this.uniforms=Pn.clone(t.uniforms),this.material=new Ig({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new kr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===th?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class F_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,p=c-u,f=t-d,v=e-p;let m,g;f>v?(m=1,g=0):(m=0,g=1);const w=f-m+h,A=v-g+h,y=f-1+2*h,E=v-1+2*h,P=l&255,R=c&255,x=this.perm[P+this.perm[R]]%12,_=this.perm[P+m+this.perm[R+g]]%12,S=this.perm[P+1+this.perm[R+1]]%12;let M=.5-f*f-v*v;M<0?n=0:(M*=M,n=M*M*this.dot(this.grad3[x],f,v));let D=.5-w*w-A*A;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[_],w,A));let b=.5-y*y-E*E;return b<0?r=0:(b*=b,r=b*b*this.dot(this.grad3[S],y,E)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),p=1/6,f=(h+u+d)*p,v=h-f,m=u-f,g=d-f,w=t-v,A=e-m,y=n-g;let E,P,R,x,_,S;w>=A?A>=y?(E=1,P=0,R=0,x=1,_=1,S=0):w>=y?(E=1,P=0,R=0,x=1,_=0,S=1):(E=0,P=0,R=1,x=1,_=0,S=1):A<y?(E=0,P=0,R=1,x=0,_=1,S=1):w<y?(E=0,P=1,R=0,x=0,_=1,S=1):(E=0,P=1,R=0,x=1,_=1,S=0);const M=w-E+p,D=A-P+p,b=y-R+p,U=w-x+2*p,O=A-_+2*p,I=y-S+2*p,V=w-1+3*p,N=A-1+3*p,$=y-1+3*p,J=h&255,at=u&255,Mt=d&255,Nt=this.perm[J+this.perm[at+this.perm[Mt]]]%12,K=this.perm[J+E+this.perm[at+P+this.perm[Mt+R]]]%12,tt=this.perm[J+x+this.perm[at+_+this.perm[Mt+S]]]%12,ut=this.perm[J+1+this.perm[at+1+this.perm[Mt+1]]]%12;let it=.6-w*w-A*A-y*y;it<0?s=0:(it*=it,s=it*it*this.dot3(this.grad3[Nt],w,A,y));let yt=.6-M*M-D*D-b*b;yt<0?r=0:(yt*=yt,r=yt*yt*this.dot3(this.grad3[K],M,D,b));let At=.6-U*U-O*O-I*I;At<0?o=0:(At*=At,o=At*At*this.dot3(this.grad3[tt],U,O,I));let Dt=.6-V*V-N*N-$*$;return Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this.dot3(this.grad3[ut],V,N,$)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,p,f;const v=(t+e+n+s)*l,m=Math.floor(t+v),g=Math.floor(e+v),w=Math.floor(n+v),A=Math.floor(s+v),y=(m+g+w+A)*c,E=m-y,P=g-y,R=w-y,x=A-y,_=t-E,S=e-P,M=n-R,D=s-x,b=_>S?32:0,U=_>M?16:0,O=S>M?8:0,I=_>D?4:0,V=S>D?2:0,N=M>D?1:0,$=b+U+O+I+V+N,J=o[$][0]>=3?1:0,at=o[$][1]>=3?1:0,Mt=o[$][2]>=3?1:0,Nt=o[$][3]>=3?1:0,K=o[$][0]>=2?1:0,tt=o[$][1]>=2?1:0,ut=o[$][2]>=2?1:0,it=o[$][3]>=2?1:0,yt=o[$][0]>=1?1:0,At=o[$][1]>=1?1:0,Dt=o[$][2]>=1?1:0,oe=o[$][3]>=1?1:0,qt=_-J+c,le=S-at+c,z=M-Mt+c,Re=D-Nt+c,Wt=_-K+2*c,Xt=S-tt+2*c,Ct=M-ut+2*c,ne=D-it+2*c,Rt=_-yt+3*c,L=S-At+3*c,T=M-Dt+3*c,H=D-oe+3*c,Z=_-1+4*c,et=S-1+4*c,j=M-1+4*c,bt=D-1+4*c,ct=m&255,ft=g&255,Vt=w&255,st=A&255,vt=a[ct+a[ft+a[Vt+a[st]]]]%32,Pt=a[ct+J+a[ft+at+a[Vt+Mt+a[st+Nt]]]]%32,Lt=a[ct+K+a[ft+tt+a[Vt+ut+a[st+it]]]]%32,xt=a[ct+yt+a[ft+At+a[Vt+Dt+a[st+oe]]]]%32,Yt=a[ct+1+a[ft+1+a[Vt+1+a[st+1]]]]%32;let It=.6-_*_-S*S-M*M-D*D;It<0?h=0:(It*=It,h=It*It*this.dot4(r[vt],_,S,M,D));let Zt=.6-qt*qt-le*le-z*z-Re*Re;Zt<0?u=0:(Zt*=Zt,u=Zt*Zt*this.dot4(r[Pt],qt,le,z,Re));let F=.6-Wt*Wt-Xt*Xt-Ct*Ct-ne*ne;F<0?d=0:(F*=F,d=F*F*this.dot4(r[Lt],Wt,Xt,Ct,ne));let lt=.6-Rt*Rt-L*L-T*T-H*H;lt<0?p=0:(lt*=lt,p=lt*lt*this.dot4(r[xt],Rt,L,T,H));let Y=.6-Z*Z-et*et-j*j-bt*bt;return Y<0?f=0:(Y*=Y,f=Y*Y*this.dot4(r[Yt],Z,et,j,bt)),27*(h+u+d+p+f)}}const cr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ot},cameraProjectionMatrix:{value:new jt},cameraInverseProjectionMatrix:{value:new jt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},hr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ur={uniforms:{tDiffuse:{value:null},resolution:{value:new ot}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class Wn extends gi{constructor(t,e,n,s,r=32){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const o=new Fa;o.format=fi,o.type=di,this.normalRenderTarget=new Ze(this.width,this.height,{minFilter:Be,magFilter:Be,type:un,depthTexture:o}),this.ssaoRenderTarget=new Ze(this.width,this.height,{type:un}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Me({defines:Object.assign({},cr.defines),uniforms:Pn.clone(cr.uniforms),vertexShader:cr.vertexShader,fragmentShader:cr.fragmentShader,blending:ze}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Ug,this.normalMaterial.blending=ze,this.blurMaterial=new Me({defines:Object.assign({},ur.defines),uniforms:Pn.clone(ur.uniforms),vertexShader:ur.vertexShader,fragmentShader:ur.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Me({defines:Object.assign({},hr.defines),uniforms:Pn.clone(hr.uniforms),vertexShader:hr.vertexShader,fragmentShader:hr.fragmentShader,blending:ze}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Me({uniforms:Pn.clone(bs.uniforms),vertexShader:bs.vertexShader,fragmentShader:bs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:$c,blendDst:Ro,blendEquation:An,blendSrcAlpha:Kc,blendDstAlpha:Ro,blendEquationAlpha:An}),this.fsQuad=new kr(null),this.originalClearColor=new Gt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Wn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=ze,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ze,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ze,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Yc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new k;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=sd.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}generateRandomKernelRotations(){const n=new F_,s=16,r=new Float32Array(s);for(let o=0;o<s;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=n.noise3d(a,l,c)}this.noiseTexture=new Ph(r,4,4,Tr,cn),this.noiseTexture.wrapS=hi,this.noiseTexture.wrapT=hi,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}}Wn.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Vc={uniforms:{tDiffuse:{value:null},uExposure:{value:.62},uDamage:{value:0},uFade:{value:0},uGrain:{value:.012},uChroma:{value:.12},uVignette:{value:.72},uBlur:{value:new ot},uTime:{value:0},uLow:{value:0},uFlash:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
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
  `};class O_{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.renderer.toneMapping=Dn,this.composer=new Bc(t),this.grade=new Sa(Vc),this.applyQuality("medium")}composer;grade;bloom=null;ssao=null;get uniforms(){return this.grade.uniforms}applyQuality(t){const e=this.renderer.getSize(new ot);if(this.composer.dispose(),this.composer=new Bc(this.renderer),this.ssao=null,this.bloom=null,t==="high")try{const n=new Wn(this.scene,this.camera,e.x,e.y,12);n.kernelRadius=8,n.minDistance=.002,n.maxDistance=.08,this.ssao=n,this.composer.addPass(n)}catch{this.composer.addPass(new Gc(this.scene,this.camera))}else this.composer.addPass(new Gc(this.scene,this.camera));t!=="low"&&(this.bloom=new Zi(new ot(e.x,e.y),t==="high"?.28:.18,.45,.86),this.composer.addPass(this.bloom)),this.grade=new Sa(Vc),this.composer.addPass(this.grade),this.composer.addPass(new N_),this.setSize(e.x,e.y)}setSize(t,e){this.composer.setSize(t,e),this.ssao?.setSize(t,e),this.bloom?.setSize(t,e)}render(){this.composer.render()}dispose(){this.composer.dispose()}}const z_=new Set(["stilhed","secret"]);function B_(i,t,e){const n=Number.isFinite(e)&&e>0?Math.min(3,e):1;return{width:Math.max(1,Math.round(Math.max(1,i)*n)),height:Math.max(1,Math.round(Math.max(1,t)*n))}}function G_(i){return i==="m2_reception"?"reception":i==="m3_generator"?"kaeldergang":i==="m4_arkiv"?"arkiv":i==="m7_udgang"?"kammer":null}function V_(i){const t=i.rooms.filter(u=>u.floor===i.floor),e=u=>i.visited.has(u),n=u=>z_.has(u)||u.startsWith("trappe"),s=new Set;for(const u of t)e(u.id)&&s.add(u.id);for(const u of i.doors)u.floor===i.floor&&(e(u.a)&&!n(u.b)&&s.add(u.b),e(u.b)&&!n(u.a)&&s.add(u.a));const r=t.filter(u=>s.has(u.id)),o=r.length?r:t.filter(u=>u.id==="reception");let a=1/0,l=1/0,c=-1/0,h=-1/0;for(const u of o)a=Math.min(a,u.x),l=Math.min(l,u.z),c=Math.max(c,u.x+u.w),h=Math.max(h,u.z+u.d);return Number.isFinite(a)||(a=0,l=0,c=1,h=1),H_(i,r,a,l,c,h)}function H_(i,t,e,n,s,r){const c=Math.min(188/Math.max(1,s-e),122/Math.max(1,r-n)),h=w=>16+(w-e)*c,u=w=>22+(w-n)*c,d=t.find(w=>i.px>=w.x&&i.px<=w.x+w.w&&i.pz>=w.z&&i.pz<=w.z+w.d),p=t.map(w=>{const A=i.visited.has(w.id);return{id:w.id,known:A,here:w.id===d?.id,x:h(w.x),y:u(w.z),w:w.w*c,h:w.d*c,label:A?q_(w.name):"?"}}),f=i.doors.filter(w=>w.floor===i.floor&&t.some(A=>A.id===w.a)&&t.some(A=>A.id===w.b)).map(w=>({id:w.id,x:h(w.axis==="x"?w.coord:w.center),y:u(w.axis==="z"?w.coord:w.center),locked:w.locked})),v=i.goals.filter(w=>w.floor===i.floor&&i.visited.has(w.roomId)).map(w=>({id:w.id,x:h(w.x),y:u(w.z)})),m=i.batteries.filter(w=>w.floor===i.floor).map(w=>({x:h(w.x),y:u(w.z)})),g=i.monster?.show&&i.monster.floor===i.floor?{x:h(i.monster.x),y:u(i.monster.z)}:null;return{rooms:p,doors:f,goals:v,batteries:m,player:{x:h(i.px),y:u(i.pz),yaw:i.yaw},monster:g}}function W_(i,t,e,n){const s=X_(n,t,e);i.clearRect(0,0,t,e),i.fillStyle="rgba(8,7,8,0.72)",i.fillRect(0,0,t,e),i.fillStyle="#cbbba4",i.font=`${Math.max(11,Math.round(t/20))}px Georgia, serif`,i.fillText(`Etage ${n.floor+1}`,8,Math.max(14,Math.round(e/11)));for(const r of s.rooms)i.fillStyle=r.here?"rgba(120,40,36,0.85)":r.known?"rgba(60,52,48,0.9)":"rgba(28,26,28,0.9)",i.fillRect(r.x,r.y,r.w,r.h),i.strokeStyle="rgba(210,196,176,0.35)",i.strokeRect(r.x+.5,r.y+.5,r.w-1,r.h-1),i.fillStyle=r.known?"#e7dcc7":"#8a8178",i.font=`${Math.max(10,Math.round(t/22))}px Georgia, serif`,i.fillText(r.label,r.x+4,r.y+Math.max(14,r.h*.28));for(const r of s.doors)i.fillStyle=r.locked?"#8d4a3a":"#d7cbb6",i.fillRect(r.x-3,r.y-1.5,6,3);for(const r of s.goals)i.strokeStyle="#e7dcc7",i.beginPath(),i.arc(r.x,r.y,5,0,Math.PI*2),i.stroke();for(const r of s.batteries)i.fillStyle="#d7c27a",i.fillRect(r.x-2,r.y-2,4,4);s.monster&&(i.fillStyle="#ff3b32",i.beginPath(),i.arc(s.monster.x,s.monster.y,4,0,Math.PI*2),i.fill()),i.save(),i.translate(s.player.x,s.player.y),i.rotate(-s.player.yaw),i.fillStyle="#f4efe6",i.beginPath(),i.moveTo(0,7),i.lineTo(4,-4),i.lineTo(-4,-4),i.closePath(),i.fill(),i.restore()}function X_(i,t,e){const n=V_(i);if(t===220&&e===150)return n;const s=t/220,r=e/150,o=Math.min(s,r),a=l=>({...l,x:l.x*s,y:l.y*r});return{rooms:n.rooms.map(l=>({...l,x:l.x*s,y:l.y*r,w:l.w*o,h:l.h*o})),doors:n.doors.map(a),goals:n.goals.map(a),batteries:n.batteries.map(a),player:{...a(n.player),yaw:n.player.yaw},monster:n.monster?a(n.monster):null}}function q_(i){return i.length>16?i.slice(0,15)+"…":i}function Y_(i){return i.map(t=>({id:t.id,name:t.name,floor:t.floor,x:t.x,z:t.z,w:t.w,d:t.d}))}const To=[{at:.7,title:"SKT. AGNES – 1987",body:"Hospitalet blev lukket efter en række uforklarlige hændelser. Siden har bygningen stået tom. I hvert fald ifølge de officielle oplysninger."},{at:7.4,title:"",body:"Jeg hedder Emil Kragh. Maja forsvandt, da hun begyndte at undersøge, hvad der egentlig skete her."},{at:13.4,title:"",body:"Hendes sidste spor førte mig til Skt. Agnes. Jeg er nødt til at finde ud af, hvad der skete med hende."},{at:19.2,title:"NYT MÅL",body:"Find og læs Majas brev."}],K_=24.4;function $_(i){if(i>=K_)return{beat:To[To.length-1]??null,done:!0};let t=null;for(const e of To)i>=e.at&&(t=e);return{beat:t,done:!1}}function j_(i){return i==="low"?4:i==="high"?8:6}const Z_=new Set(["reception","patientgang","kaeldergang"]);function J_(i,t,e){if(e)return .92+.05*Math.sin(i*.22+t);const n=.9+.06*Math.sin(i*.31+t),s=Math.pow(Math.max(0,Math.sin(i*.17+t*1.7)),4);return n*(1-s*.28)}class Q_{constructor(t,e,n){this.ui=e,this.storage=n??b_(),this.settings=R_(this.storage);const s=new URLSearchParams(location.search),r=s.has("test");this.testMode=r,this.wantsIntro=!r||s.has("intro");const o=Number(s.get("seed")),a=Number.isFinite(o)&&o>0?Math.floor(o):r?1:Date.now()%2147483646+1;this.rng=Mc(a),this.renderer=new vg({canvas:t,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,stencil:!0}),this.renderer.outputColorSpace=ye,this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.renderer.shadowMap.type=qc,this.renderer.setClearColor(460298),this.scene.background=new Gt(460298),this.scene.fog=new Oa(658191,.028),this.scene.add(new Gg(2106925,.028));const l=new Ng(2372419,855051,.075);this.scene.add(l);const c=new Bg(9018282,.018);c.position.set(-20,40,-10),this.scene.add(c),this.world=Sx(),this.built=Xx(this.scene,this.world),this.monster=new Fv,this.scene.add(this.monster.group),this.atmo=new Hv(this.scene,24),this.scene.add(this.camera),this.spot=new ma("#eee2cb",0,21,.5,.72,1.25),this.spot.castShadow=this.settings.quality!=="low",this.spot.shadow.mapSize.set(this.settings.quality==="high"?1024:512,this.settings.quality==="high"?1024:512),this.spot.shadow.bias=-25e-5,this.spot.shadow.camera.near=.1,this.spot.shadow.camera.far=18,this.camera.add(this.spot),this.spot.position.set(.18,-.16,-.55),this.spot.target.position.set(.18,-.14,-12),this.camera.add(this.spot.target),this.viewmodel=this.buildViewmodel(),this.camera.add(this.viewmodel),this.lunge=this.buildLunge(),this.camera.add(this.lunge),this.shadowMesh=new nt(new Xi(.22,1.1,3,6),new gn({color:"#2a241f"})),this.shadowMesh.visible=!1,this.scene.add(this.shadowMesh),this.butcher=this.buildButcher(),this.scene.add(this.butcher),this.peek=new Kt;const h=new nt(new Xi(.13,.26,3,8),new _t({color:"#111215",roughness:1}));h.position.y=-.05,this.peek.add(h),this.peek.visible=!1,this.scene.add(this.peek),this.spawnCells=this.world.nav.nodes.filter(p=>!p.doorId&&!p.stair&&p.links.length>0&&(p.ix+p.iz)%3===0).map(p=>({x:p.x,y:p.y,z:p.z}));const u=new ve(.05,1.15,7,16,1,!0);u.translate(0,-3.5,0),u.rotateX(Math.PI/2),this.cone=new nt(u,new gn({color:"#ffe6c2",transparent:!0,opacity:.045,depthWrite:!1,side:me,blending:_r})),this.camera.add(this.cone),this.shadow=new nt(new fe(1.4,2.2),new gn({color:"#050505",transparent:!0,opacity:0,depthWrite:!1,side:me})),this.scene.add(this.shadow),this.post=new O_(this.renderer,this.scene,this.camera),this.post.applyQuality(this.settings.quality),this.scares=new Kv(this.camera,this.audio),this.input=new e_(t),this.input.setSensitivity(this.settings.mouseSensitivity);const d=()=>{this.audio.ensure(),this.audio.resume()};window.addEventListener("pointerdown",d),window.addEventListener("keydown",d),t.addEventListener("click",()=>{d(),this.mode==="playing"&&this.input.lock()}),this.resize(),window.addEventListener("resize",()=>this.resize()),this.applyVolumes(),this.ui.continueEnabled(!!Oc(this.storage)),this.ui.fillSettings(this.settings),this.installApi(),t.addEventListener("webglcontextlost",p=>{p.preventDefault(),this.contextLost=!0,this.ui.fatal("Grafikkortet slap spillet. Genindlæs siden.")}),t.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.ui.fatal("Grafikkortet kom tilbage. Genindlæs siden for at fortsætte.")}),this.ui.root.querySelector("#intro")?.addEventListener("click",()=>{this.introTime>=0&&this.finishIntro()})}renderer;scene=new xg;camera=new Ve(72,1,.08,80);world;built;post;audio=new nv;input;monster;atmo;scares;director=_c();schedule=bc();tone=Mo();radioAt=-99;extraCueAt=28;settings;storage;mode="menu";settingsFrom="menu";slotMode="load";snap=wr();sim=ey();open=new Map;desired=new Map;unlocked=new Set;hiding=null;holdBreath=!1;cameraEye=qh;bob=0;trauma=0;damage=0;fade=0;flash=0;message="";messageT=0;toast="";toastT=0;subtitleT=0;lastObjective="";autosavedIntro=!1;invIndex=0;code="";showPerf=!1;fps=60;fpsAcc=0;fpsFrames=0;acc=0;noises=[];runtime=[];rosaryCd=0;stepDist=0;batteryWarned=!1;creepIn=12;aimedDoor="";prevRoom="";prevFlash=!1;lungeT=0;lunge;shadowMesh;shadowT=0;shadowFrom=new k;shadowTo=new k;butcher;recentSpawns=[];hideWait=0;knocks=[];showAudio=!1;lookSX=0;lookSY=0;blackout=0;peekT=0;peekCool=12;monsterShown=0;monsterRoom="";monsterRoomUntil=0;peek;spawnCells=[];mannequinT=0;looked=0;lightCut=new Map;lampShown=new Map;lampClock=-1;spot;cone;viewmodel;shadow;clock=0;aggression=0;camDir=new k;testMode=new URLSearchParams(location.search).has("test");ended=!1;frozen=!1;rafId=0;introTime=-1;introBeat=-1;frameError=!1;contextLost=!1;wantsIntro;bus=nx();rng=Mc(1);start(){this.audio.enableRoomTones(),this.ui.show("menu"),this.mode="menu",this.clock=performance.now(),this.rafId=requestAnimationFrame(this.onFrame)}onFrame=t=>{if(!(this.frozen||this.contextLost)){try{const e=yc((t-this.clock)/1e3||0);this.clock=t,this.fpsAcc+=e,this.fpsFrames++,this.fpsAcc>=.5&&(this.fps=this.fpsFrames/this.fpsAcc,this.fpsAcc=0,this.fpsFrames=0);const n=this.settings.fpsCap;if(n>0){this.acc+=e;const s=1/n;if(this.acc>=s-1e-4){const r=yc(this.acc);this.acc=0,this.advance(r)}}else this.advance(e)}catch(e){this.frameError||(this.frameError=!0,console.error(e))}this.rafId=requestAnimationFrame(this.onFrame)}};setFrozen(t){this.frozen=t,t?cancelAnimationFrame(this.rafId):(this.clock=performance.now(),this.rafId=requestAnimationFrame(this.onFrame))}advance(t){this.applyModalKeys(),this.mode==="playing"?this.updatePlaying(t):(this.mode==="menu"||this.mode==="credits"||this.mode==="exit")&&this.updateIdle(t),this.render(t),this.audio.update(t)}updateIdle(t){const e=performance.now()*12e-5,n=2.2+Math.sin(e)*.35;this.camera.position.set(5.2,1.55,n),this.camera.lookAt(10,1.35,6),this.viewmodel.visible=!1,this.lunge.visible=!1,this.cone.visible=!1,this.spot.intensity=0,this.atmo.update(t,this.camera.position,new k(0,0,1),!1),this.tickRain(t),this.tickLights(performance.now()/1e3,!1)}updatePlaying(t){if(this.introTime>=0){this.stepIntro(t);return}this.viewmodel.visible=!0,this.snap.playTime+=t,this.snap.iFrame=Math.max(0,this.snap.iFrame-t),this.rosaryCd=Math.max(0,this.rosaryCd-t),this.messageT=Math.max(0,this.messageT-t),this.toastT=Math.max(0,this.toastT-t),this.subtitleT=Math.max(0,this.subtitleT-t),this.damage=Math.max(0,this.damage-t*.8),this.noises.length=0,this.stepPower(t),!this.autosavedIntro&&this.snap.playTime>2&&(this.autosavedIntro=!0,this.persist(0));const e=this.input.consumeLook();this.lookSX=this.lookSX*.4+e.x*.6,this.lookSY=this.lookSY*.4+e.y*.6;const n=gc(this.sim.yaw,this.sim.pitch,this.lookSX,this.lookSY,this.settings.invertY);this.sim.yaw=n.yaw,this.sim.pitch=n.pitch;const s=this.input.wish();this.holdBreath=!!this.hiding&&s.sprint,this.input.pressed("F3")&&(this.showPerf=!this.showPerf),this.input.pressed("F4")&&(this.showAudio=!this.showAudio),(this.testMode||new URLSearchParams(location.search).has("debug"))&&this.input.pressed("F6")&&(this.snap.playTime+=30),(this.testMode||new URLSearchParams(location.search).has("debug"))&&this.input.pressed("F7")&&this.runShadow(),this.input.pressed("KeyF")&&this.toggleFlash(),this.input.pressed("KeyR")&&this.swapBattery(),this.input.pressed("KeyG")&&this.dropBattery(),this.input.pressed("KeyQ")&&this.useRosary(),this.input.pressed("KeyE")&&this.interact();const r=bo(this.world,this.unlocked,this.open);if(this.hiding)this.audio.setLocomotion(!1,!1,!0),this.stepDist=0;else{const l=this.sim.grounded,c=this.sim.x,h=this.sim.z;this.sim=Qv(this.sim,{...s,dt:t},r,(v,m,g)=>ds(this.world,v,m,g));const u=Math.hypot(this.sim.x-c,this.sim.z-h);s.jump&&l&&!this.sim.grounded&&this.noise("jump"),this.sim.justLanded&&this.noise("landing");const d=s.sprint&&this.sim.stamina>5&&!this.sim.crouching,f=Math.abs(s.forward)+Math.abs(s.strafe)>.01&&this.sim.grounded&&u>.002;if(this.audio.setLocomotion(f,d,this.sim.crouching),f){this.stepDist+=u;const v=this.sim.crouching?.72:d?1.45:1.05;this.stepDist>=v&&(this.stepDist-=v,this.audio.playFootstep(d,this.sim.crouching),this.noise(this.sim.crouching?"crouch":d?"sprint":"walk"),Hn(this.world,this.sim.x,this.sim.z,this.sim.y)?.floorMat==="wood"&&Math.random()<.12&&this.audio.play("creak",this.feet(),{volume:.35}))}else this.stepDist=0;this.separateFromMonster(r)}this.placeCamera(s,t),this.camera.getWorldDirection(this.camDir);const o=this.computeChase(),a=this.monster.update({dt:t,playerPos:{x:this.sim.x,y:this.sim.y,z:this.sim.z},playerEye:this.eyePos(),hiding:!!this.hiding,hideSpot:this.hidePos(),holdBreath:this.holdBreath,camPos:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},camDir:{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},flashlightOn:this.sim.flashlightOn&&this.sim.battery>0,allowChase:o,aggression:this.aggression,waypoints:Ux(this.world,l=>this.floorAllowed(l),this.snap.flags.secretOpen),blockers:r,colliders:r,nav:this.world.nav,query:{allowFloor:l=>this.floorAllowed(l),blockDoor:l=>{const c=this.world.doors.find(h=>h.id===l);return c?ir(c,this.unlocked):!1}},doors:this.world.doors,openAmount:this.open,floorAt:(l,c,h)=>ds(this.world,l,c,h),requestOpen:l=>this.desired.set(l,1),doorLocked:l=>{const c=this.world.doors.find(h=>h.id===l);return c?ir(c,this.unlocked):!1},noises:this.noises,searchSpots:this.world.hides.map(l=>{const c=this.world.rooms.find(h=>h.id===l.room);return{id:l.id,pos:{x:l.x,y:c?kt[c.floor]:this.sim.y,z:l.z}}})});a.entered==="Chase"&&this.audio.play("growl",this.monster.pos,{volume:.8}),a.attack&&this.hurt(36,!0),a.foundHiding&&(this.hiding=null,this.hurt(28,!0),this.say("Den fandt dig.")),this.herdMonster(),this.relocateMonster(t,r),this.stepEvents(t),this.stepKnocks(),this.stepDirector(t),this.animateDoors(t),this.drainLight(t),this.visit(),this.checkEnding(),this.syncHud(s),this.copySim()}stepDirector(t){const e=this.monsterDist(),n=Hn(this.world,this.sim.x,this.sim.z,this.sim.y),s=!(this.sim.flashlightOn&&this.sim.battery>1)&&!this.roomLit(n?.id),r=Vv(this.director,{dt:t,health:this.snap.player.health,monsterDist:e,inDark:s,sprinting:this.input.wish().sprint&&!this.sim.crouching,hiding:!!this.hiding,tookDamage:this.damage>.85,story:__(this.snap),rng:Math.random,blocked:this.monster.bb.state==="Attack"||this.lungeT>0||this.scares.fx.face>0});if(this.director=r.state,this.aggression=r.aggression,r.event?.type==="scare"){const h=this.scares.dynamic(this.snap.playTime,{inDark:s,monsterNear:e<10,doorOpenNear:[...this.open.values()].some(u=>u>.5),inMannequinRoom:n?.id==="r102",tension:this.director.tension,rng:Math.random});h&&this.applyScare(h)}else r.event?.type==="soft"&&this.soft(r.event.kind);this.scares.update(t),this.trauma=Math.max(this.trauma,this.settings.cameraShake?this.scares.fx.trauma:0),this.flash=Math.max(this.flash,this.scares.fx.flash),this.scares.fx.subtitle&&this.caption(this.scares.fx.subtitle,1.5);const o=this.monster.bb.state==="Chase"||this.monster.bb.state==="Attack";this.audio.setTension(this.director.tension,o);const a=(100-this.snap.player.health)/140+(e<8?.35:0)+(this.sim.stamina<30?.2:0);this.audio.setHeartbeat(this.hiding||this.snap.player.health<55||e<7?a:0);const l=this.sim.stamina<22?(22-this.sim.stamina)/28:0;this.audio.setBreath(this.holdBreath?.05:Math.max(l,e<6?.25:.05));const c=this.nearestLight();if(this.audio.setHum(!!c&&this.lightLevel(c.def)>.2,c?{x:c.def.x,y:c.def.y,z:c.def.z}:this.feet()),this.audio.setRadio(this.snap.flags.radioOn,Sc),this.audio.setZone(this.zoneFor(n?.id)),this.stepRoomTone(n,t),this.creepIn-=t,this.creepIn<=0&&this.mode==="playing"){this.creepIn=16+Math.random()*18-this.director.tension*.05;const h=6+Math.random()*6,u=Math.random()*Math.PI*2,d=this.director.tension>55&&Math.random()<.35?"scream":"whisper";this.audio.play(d,{x:this.sim.x+Math.cos(u)*h,y:this.sim.y,z:this.sim.z+Math.sin(u)*h},{volume:.55,occluded:!0})}this.audio.setListener({x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},{x:0,y:1,z:0})}applyScare(t){t==="door"&&this.slamNearest(),t==="still"&&(this.built.mannequin.visible=!0,this.mannequinT=8,this.snap.flags.mannequinOn=!0),t==="fake"&&(this.built.pot.position.y=kt[-1]?this.built.pot.position.y:this.built.pot.position.y),t==="ceiling"&&(this.trauma=Math.max(this.trauma,.5)),t==="flash"&&(this.flash=1),t==="shadow"&&(this.shadow.position.set(this.sim.x+this.camDir.x*3,this.sim.y+1.2,this.sim.z+this.camDir.z*3),this.shadow.material.opacity=.85)}soft(t){if(t==="flicker"||t==="lightOut"){const e=this.built.lights.filter(s=>this.lightLevel(s.def)>.2),n=e[Math.floor(Math.random()*e.length)];n&&this.lightCut.set(n.def.id,this.snap.playTime+(t==="lightOut"?5:1.2))}else if(t==="whisper"||t==="breath"){const e=t==="breath"?1.2:2.4;this.audio.play("whisper",{x:this.sim.x-this.camDir.x*e,y:this.sim.y+1.4,z:this.sim.z-this.camDir.z*e},{volume:t==="breath"?.85:.6}),this.caption(t==="breath"?"…åndedræt, lige bag dig.":"…Agnes…",1.8),t==="breath"&&this.audio.setHeartbeat(.55)}else t==="knock"?this.queueKnocks():t==="phone"?(this.audio.play("sting",{x:16,y:5,z:22},{volume:.8}),this.caption("En telefon ringer et sted i fløjen.",2.2)):t==="creak"?this.audio.play("creak",{x:this.sim.x+2,y:this.sim.y,z:this.sim.z+1},{volume:.5}):t==="thunder"?(this.audio.play("thunder"),this.atmo.strike(),this.flash=.55):t==="drop"?this.audio.play("door",{x:49,y:4,z:36},{volume:.5}):t==="shadow"?this.applyScare("shadow"):t==="radio"?this.audio.play("whisper",{x:53,y:5,z:2},{volume:.4}):t==="mannequin"&&!this.snap.flags.mannequinUsed&&(this.built.mannequin.visible=!0,this.mannequinT=10)}hurt(t,e){this.snap.iFrame>0||this.ended||(this.snap.player.health=Math.max(0,this.snap.player.health-t),this.sim.health=this.snap.player.health,this.snap.iFrame=1.2,this.damage=1,this.trauma=.9,e&&this.scares.trigger("attack",this.snap.playTime,!0),this.snap.player.health<=0&&this.finish("death"))}finish(t){if(this.ended)return;this.ended=!0;const e=y_(this.snap,t);this.ui.ending(e,t==="death"),this.setMode("ending"),this.fade=t==="death"?.65:.35,this.audio.play(t==="death"?"scream":"sting")}checkEnding(){if(this.ended)return;const t=Hn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"",e=Nc(this.snap,t,!1);e&&this.finish(e)}interact(){if(this.hiding){this.hiding=null,this.bus.emit({type:"playerRevealed"}),this.audio.play("door",this.feet(),{volume:.4});return}const t=tr(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates());t&&(t.kind==="door"?this.useDoor(t.id):t.kind==="pickup"?this.take(t.id):t.kind==="hide"?this.enterHide(t.id):t.kind==="generator"?this.useGenerator():t.kind==="safe"?this.openKeypad():t.kind==="bookshelf"?this.useShelf():t.kind==="radio"&&(this.snap.flags.radioOn=!this.snap.flags.radioOn,this.audio.play("click"),this.noise("voice"),this.say(this.snap.flags.radioOn?"Radioen knitrer.":"Radioen er slukket.")))}useDoor(t){const e=this.world.doors.find(r=>r.id===t);if(!e)return;if(ir(e,this.unlocked)){if(e.id===wc){const r=ru(this.snap);if(r){this.say(r),this.audio.play("locked",this.doorPos(e),{volume:.7});return}this.unlocked.add(e.id),this.desired.set(e.id,1),this.bus.emit({type:"doorOpened",id:e.id}),this.audio.play("door",this.doorPos(e)),this.audio.play("key"),this.say("Låsene giver sig.");return}if(e.needsPower&&!this.snap.flags.generatorOn)this.say("Låsen er død. Generatoren mangler strøm.");else if(e.keyId==="chapel_key"&&!de(this.snap.inventory,"chapel_key"))this.say("Låst. Nøglen ligger på sygeplejerskekontoret.");else if(e.keyId==="master_key"&&!de(this.snap.inventory,"master_key"))this.say("Kræver hovednøglen fra pengeskabet.");else if(e.keyId&&de(this.snap.inventory,e.keyId)&&(!e.needsPower||this.snap.flags.generatorOn)){this.unlocked.add(e.id),this.desired.set(e.id,1),this.bus.emit({type:"doorOpened",id:e.id}),this.audio.play("door",this.doorPos(e)),this.noise("door");return}else this.say("Låst.");this.audio.play("locked",this.doorPos(e),{volume:.6}),this.noise("door");return}const s=(this.open.get(e.id)??0)<=.4;this.desired.set(e.id,s?1:0),s&&this.bus.emit({type:"doorOpened",id:e.id}),this.audio.play("door",this.doorPos(e)),this.noise("door")}take(t){if(this.snap.pickedUp.includes(t))return;const e=this.world.pickups.find(o=>o.id===t)||this.runtime.find(o=>o.id===t);if(!e)return;const n=sr(this.snap.inventory,e.itemId,1);if(!n.added){this.say("Du kan ikke bære flere.");return}this.snap.inventory=n.slots,"room"in e&&this.snap.pickedUp.push(t);const s=this.built.pickups.get(t)||this.runtime.find(o=>o.id===t)?.mesh;s&&(s.visible=!1),this.runtime=this.runtime.filter(o=>o.id!==t),this.audio.play(e.itemId.startsWith("note")||e.itemId.startsWith("file")?"paper":"pickup");const r=Ii(e.itemId);(r.kind==="note"||r.kind==="story"||r.kind==="map"||r.kind==="collectible")&&this.openExamine(e.itemId),e.itemId==="battery"&&(this.sim.battery=kc(this.sim.battery,50),this.say("Batteri. +50%.")),e.itemId.startsWith("key_")&&this.say(`${r.name}. Nøgler ${Uc(this.snap)}/3.`),e.itemId==="rosary"&&(this.snap.rosaryCharges=2),this.bus.emit({type:"itemFound",id:e.itemId}),this.refreshObjective()}useGenerator(){const t=["fuse_red","fuse_blue","fuse_yellow"];if(this.snap.flags.generatorOn){this.say("Generatoren kører allerede.");return}if(!t.every(s=>de(this.snap.inventory,s))){const s=t.filter(r=>!de(this.snap.inventory,r)).map(r=>Ii(r).name);this.say(`Mangler ${s.join(", ")}.`);return}for(const s of t)this.snap.inventory=Sr(this.snap.inventory,s,1);this.snap.flags.generatorOn=!0,this.bus.emit({type:"powerOn"});const e=this.world.devices.find(s=>s.kind==="generator"),n=e?this.world.rooms.find(s=>s.id===e.room):void 0;this.audio.play("generator",{x:e?.x??8.8,y:n?kt[n.floor]+1:9,z:e?.z??8.35},{volume:.9}),this.say("Nødstrømmen vågner. Bagportens lås har strøm."),this.trauma=.3,this.refreshObjective()}openKeypad(){if(this.snap.flags.safeOpen){this.say("Pengeskabet er tomt.");return}this.code="",this.ui.keypad(this.code,de(this.snap.inventory,"note_code")?"Stiftelsesåret.":"Du kender ikke koden endnu."),this.setMode("keypad")}submitCode(){this.code===o_?(this.snap.flags.safeOpen=!0,de(this.snap.inventory,"master_key")||(this.snap.inventory=sr(this.snap.inventory,"master_key").slots),de(this.snap.inventory,"note_director")||(this.snap.inventory=sr(this.snap.inventory,"note_director").slots),this.audio.play("key"),this.setMode("playing"),this.openExamine("note_director"),this.refreshObjective()):(this.audio.play("fail"),this.noise("door"),this.code="",this.ui.keypad(this.code,"Forkert. Lyden bar langt."))}useShelf(){const t=Hn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"";if(this.snap.flags.secretOpen){const e=Nc(this.snap,t,!0);e&&this.finish(e);return}if(!de(this.snap.inventory,"crowbar")){this.say("Hylden rokker sig ikke. Du mangler noget at bryde med."),this.audio.play("locked");return}this.snap.flags.secretOpen=!0,this.unlocked.add("door_secret"),this.audio.play("doorSlam",{x:37,y:1,z:24},{volume:.8}),this.noise("door"),this.say("Hylden giver sig. Der er et rum bagved.")}enterHide(t){const e=this.world.hides.find(n=>n.id===t);e&&(this.hiding=t,this.bus.emit({type:"playerHidden",id:t}),this.sim.x=e.x,this.sim.z=e.z,this.sim.vx=0,this.sim.vz=0,this.audio.play("door",this.feet(),{volume:.3}),this.say(e.kind==="bed"?"Under sengen. Hold Shift for at holde vejret.":"I skabet. Hold Shift for at holde vejret. E for at komme ud."))}toggleFlash(){if(this.sim.battery<=1){this.audio.play("fail"),this.sim.flashlightOn=!1,this.say("Batteriet er tomt. Det lader langsomt, mens lygten er slukket.");return}const t=!this.sim.flashlightOn;this.sim.flashlightOn=t,this.audio.play("flash",void 0,{rate:t?1:.88}),t||this.say("Lygten er slukket. Batteriet lader.")}swapBattery(){if(!de(this.snap.inventory,"battery")){this.audio.play("fail"),this.say("Ingen reservebatterier.");return}this.snap.inventory=Sr(this.snap.inventory,"battery",1),this.sim.battery=kc(this.sim.battery),this.sim.flashlightOn=!0,this.batteryWarned=!1,this.audio.play("click"),this.say("Batteri skiftet.")}dropBattery(){const t=Lc(this.snap.inventory,"battery");if(!t.dropped){this.say("Ikke noget du kan smide.");return}this.snap.inventory=t.slots;const e=`drop_${Math.floor(Math.random()*1e6)}`,n=this.built.pickups.get("p_bat1")?.clone()??new nt(new Ee(.08),new _t({color:"#888"}));n.visible=!0,n.position.set(this.sim.x,this.sim.y+.2,this.sim.z),this.scene.add(n),this.runtime.push({id:e,itemId:"battery",x:this.sim.x,y:this.sim.y+.4,z:this.sim.z,mesh:n}),this.audio.play("pickup",this.feet(),{volume:.4}),this.noise("drop")}useRosary(){if(!de(this.snap.inventory,"rosary")||this.snap.rosaryCharges<=0||this.rosaryCd>0){de(this.snap.inventory,"rosary")&&this.snap.rosaryCharges<=0&&this.say("Perlerne er kolde. Den virker ikke igen.");return}this.snap.rosaryCharges--,this.rosaryCd=6,this.monster.bb.blindTime=2.8,this.monster.bb.hesitate=2.8,(this.monster.bb.state==="Chase"||this.monster.bb.state==="Attack")&&(this.monster.bb.state="LostPlayer"),this.audio.play("key",this.feet(),{volume:.5}),this.say("Han tøver.")}drainLight(t){const e=h_(this.sim.battery,this.sim.flashlightOn,t);this.sim.battery=e.charge,this.sim.flashlightOn=e.on,e.died?(this.audio.play("metallic"),this.say("Lygten gik ud. Den lader langsomt op, når den er slukket."),this.batteryWarned=!1):this.sim.flashlightOn&&rr(this.sim.battery)==="critical"&&!this.batteryWarned?(this.batteryWarned=!0,this.say("Batteriet er næsten tomt.")):this.sim.battery>30&&(this.batteryWarned=!1)}syncView(){this.placeCamera({sprint:!1},1),this.camera.getWorldDirection(this.camDir)}placeCamera(t,e=1/60){const n=this.hiding&&this.world.hides.find(p=>p.id===this.hiding)?.kind==="bed"?.32:ex(this.sim.crouching||!!this.hiding);this.cameraEye=e>=1?n:tx(this.cameraEye,n,e);const s=this.cameraEye,r=Math.hypot(this.sim.vx,this.sim.vz);r>.4&&this.sim.grounded&&!this.hiding&&(this.bob+=r*.016);const o=this.hiding?0:this.sim.crouching?.01:t.sprint?.04:.025,a=zh(this.sim.yaw),l=this.sim.stamina<18&&this.settings.cameraShake?(18-this.sim.stamina)/18:0,c=Math.sin(performance.now()/1e3*1.7)*l*.012,h=this.settings.cameraShake?this.trauma*this.trauma:0;this.camera.position.set(this.sim.x+a.x*Math.cos(this.bob)*o+(Math.random()-.5)*h*.12,this.sim.y+s+Math.sin(this.bob*2)*o+c+(Math.random()-.5)*h*.08,this.sim.z+a.z*Math.cos(this.bob)*o),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.sim.yaw+Math.PI,this.camera.rotation.x=this.sim.pitch,this.camera.rotation.z=(Math.random()-.5)*h*.05;const u=Math.sin(this.bob);this.viewmodel.position.set(.2+u*.008,-.16-Math.abs(Math.sin(this.bob*2))*.008,-.36),this.viewmodel.rotation.z=u*.04,this.viewmodel.rotation.x=Math.sin(this.bob*2)*.02;const d=72+(t.sprint&&r>3?3:0);Math.abs(this.camera.fov-d)>.1&&(this.camera.fov=d,this.camera.updateProjectionMatrix())}render(t){const e=performance.now()/1e3;this.tickLights(e,this.mode==="playing"),this.tickRain(t),this.mode==="playing"&&this.atmo.update(t,this.camera.position,this.camDir,this.sim.flashlightOn&&this.sim.battery>0);const n=this.mode==="playing"&&this.sim.flashlightOn&&this.sim.battery>0,s=rr(this.sim.battery),r=n&&s==="critical"?.7+.12*Math.sin(e*1.3):1,o=s==="low"?.72:s==="critical"?.5:1,a=Math.max(.2,this.sim.battery/100);this.spot.intensity=n?53*a*o*r:0;const l=this.viewmodel.position;if(this.spot.position.set(l.x,l.y+.02,l.z-.2),this.spot.target.position.set(l.x,l.y+.02,-12),this.cone.visible=!1,this.mannequinT>0?(this.mannequinT-=t,this.built.mannequin.visible=!0,this.camDir.dot(new k(27.4-this.camera.position.x,1.5,26.4-this.camera.position.z).normalize())>.82&&this.monsterDistTo(27.4,26.4)<8?this.looked+=t:this.looked=0,this.looked>1.15&&(this.built.mannequin.visible=!1,this.mannequinT=0,this.snap.flags.mannequinUsed=!0,this.scares.trigger("face",this.snap.playTime,!0),this.looked=0)):this.snap.flags.mannequinOn,this.shadow.material.opacity>0){const d=this.shadow.material;d.opacity=Math.max(0,d.opacity-t),this.shadow.position.x+=this.camDir.z*t,this.shadow.position.z-=this.camDir.x*t}this.snap.flags.secretOpen&&(this.built.secretShelf.position.x+=(36-this.built.secretShelf.position.x)*Math.min(1,t*2));const c=this.post.uniforms,h=this.settings.motionBlur?Math.min(.02,Math.hypot(this.sim.vx,this.sim.vz)*.002):0;c.uExposure.value=.87*this.settings.brightness,c.uDamage.value=this.damage,c.uFade.value=this.fade,c.uGrain.value=0,c.uChroma.value=.08+this.scares.fx.chroma*.05,c.uTime.value=e,c.uLow.value=this.sim.health<40?(40-this.sim.health)/40:0,c.uFlash.value=0,c.uBlur.value.set(this.camDir.x*h,this.camDir.y*h),this.mode==="playing"&&this.blackout<=0&&(this.fade=Math.max(0,this.fade-t*.45)),this.trauma=Math.max(0,this.trauma-t),this.flash=Math.max(0,this.flash-t*1.5);const u=this.scene.fog;u.density=.025+this.director.tension*7e-5,this.post.render(),this.subtitleT<=0&&this.mode==="playing"&&this.ui.subtitle("")}tickLights(t,e){const n=this.lampClock<0?0:Math.min(.05,Math.max(0,t-this.lampClock));this.lampClock=t;for(const a of this.built.lights){let l=this.lightLevel(a.def);const c=this.lightCut.get(a.def.id)??0;if(e&&c>this.snap.playTime&&(l*=.55),l>0&&Z_.has(a.def.room)){const u=a.def.x*.59+a.def.z*.31;l*=J_(t,u,this.settings.reduceFlicker)}this.snap.flags.radioOn&&a.def.room==="personalerum"&&(l*=1.12);const h=this.lampShown.get(a.def.id);h!==void 0&&n>0&&(l=h+(l-h)*(1-Math.exp(-n*1.4))),this.lampShown.set(a.def.id,l),a.lens&&(a.lens.emissiveIntensity=Math.max(.012,l*1.1)),(a.light instanceof ma||a.light instanceof Nh)&&(a.light.intensity=a.base*l)}const s=j_(this.settings.quality),r=[...this.built.lights].sort((a,l)=>Math.hypot(a.def.x-this.camera.position.x,a.def.z-this.camera.position.z)-Math.hypot(l.def.x-this.camera.position.x,l.def.z-this.camera.position.z));r.forEach((a,l)=>{const c=l<s;a.light.visible=c,c||(a.light.intensity=0)});const o=r.find(a=>a.light.visible);if(o&&e){const a=o.light.intensity<o.base*.4;this.audio.setHum(!a&&this.lightLevel(o.def)>.2,{x:o.def.x,y:o.def.y,z:o.def.z})}}lightLevel(t){return t.mode==="power"?this.snap.flags.generatorOn?1:0:t.mode==="secret"?this.snap.flags.secretOpen?1:0:1}roomLit(t){return t?this.built.lights.some(e=>e.def.room===t&&this.lightLevel(e.def)>.4):!1}nearestLight(){let t=null,e=8;for(const n of this.built.lights){const s=Math.hypot(n.def.x-this.sim.x,n.def.z-this.sim.z);s<e&&(e=s,t=n)}return t}tickRain(t){const e=this.built.rain.geometry.getAttribute("position"),n=e.array;for(let s=0;s<n.length;s+=3)n[s+1]-=t*6,n[s+1]<.2&&(n[s+1]=6);e.needsUpdate=!0}animateDoors(t){for(const e of this.world.doors){if(e.kind!=="door")continue;const n=this.desired.get(e.id)??0,s=this.open.get(e.id)??0,r=s+Math.sign(n-s)*Math.min(Math.abs(n-s),t*8);this.open.set(e.id,r),xx(s,r)&&this.audio.play("creak",this.doorPos(e),{volume:.35});const o=this.built.doors.get(e.id);if(!o)continue;const a=Number.isFinite(o.userData.closedYaw)?o.userData.closedYaw:0,l=o.userData.swing||1;o.rotation.y=a+r*1.7*l;const h=o.userData.panel?.material;if(h instanceof _t){const u=this.aimedDoor===e.id;h.emissive.set(u?"#6a3028":"#000000"),h.emissiveIntensity=u?.35:0}}}slamNearest(){let t=null,e=12;for(const s of this.world.doors){if((this.open.get(s.id)??0)<.4)continue;const r=this.doorPos(s),o=Math.hypot(r.x-this.sim.x,r.z-this.sim.z);o<e&&(e=o,t=s.id)}if(!t)return;this.desired.set(t,0),this.open.set(t,0);const n=this.world.doors.find(s=>s.id===t);this.audio.play("doorSlam",this.doorPos(n),{volume:.9}),this.noise("door"),e<4&&(this.trauma=Math.max(this.trauma,.45))}candidates(){const t=[];for(const n of this.world.doors){if(n.kind!=="door")continue;const s=this.doorPos(n),r=this.open.get(n.id)??0,a=ir(n,this.unlocked)?"Låst dør":r>.4?"Luk dør":"Åbn dør";t.push({id:n.id,kind:"door",x:s.x,y:s.y+1,z:s.z,radius:1.15,prompt:a})}for(const n of this.world.pickups){if(this.snap.pickedUp.includes(n.id))continue;const s=this.world.rooms.find(r=>r.id===n.room);s&&t.push({id:n.id,kind:"pickup",x:n.x,y:kt[s.floor]+.8,z:n.z,radius:.55,prompt:Ii(n.itemId).name})}for(const n of this.runtime)t.push({id:n.id,kind:"pickup",x:n.x,y:n.y,z:n.z,radius:.5,prompt:"Batteri"});const e=this.world.props.find(n=>n.id==="slag_shelf");if(e){const n=this.world.rooms.find(s=>s.id===e.room);n&&t.push({id:e.id,kind:"bookshelf",x:e.x,y:kt[n.floor]+1,z:e.z,radius:1.1,prompt:this.snap.flags.secretOpen?"Kravl ind i tunnellen":"Hylde"})}for(const n of this.world.devices){const s=this.world.rooms.find(o=>o.id===n.room),r={generator:"Generator",safe:"Pengeskab",bookshelf:this.snap.flags.secretOpen?"Kravl ind i tunnellen":"Hylde",radio:"Radio"};t.push({id:n.id,kind:n.kind,x:n.x,y:kt[s.floor]+1,z:n.z,radius:.9,prompt:r[n.kind]})}for(const n of this.world.hides){const s=this.world.rooms.find(r=>r.id===n.room);t.push({id:n.id,kind:"hide",x:n.x,y:kt[s.floor]+1,z:n.z,radius:.8,prompt:n.kind==="bed"?"Gem dig under sengen":"Gem dig i skabet"})}return t}syncHud(t){const e=this.hiding?null:tr(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates());this.aimedDoor=e?.kind==="door"?e.id:"";const n=lr(this.snap);n.id!==this.lastObjective&&(this.lastObjective&&(this.toast=n.text,this.toastT=3.5,this.persist(0)),this.lastObjective=n.id);const s=iu(this.snap);this.ui.hud({objective:n.text,files:s?`Journaler ${s}/${Wa.length}`:"",prompt:this.messageT>0?this.message:this.hiding?"Forlad gemmested":e?e.prompt:"",stamina:this.sim.stamina,battery:this.sim.battery,batteryText:`${Math.round(this.sim.battery)}%${rr(this.sim.battery)==="critical"&&this.sim.flashlightOn?" · lavt":""}`,low:this.sim.health<40||rr(this.sim.battery)!=="ok",lockHint:this.mode==="playing"&&!this.input.pointerLocked}),this.ui.hurt(this.damage*.85+(this.sim.health<35?.25:0)),this.paintMap(),this.ui.toast(this.toastT>0?this.toast:"");const r=this.audio.debug();if(this.ui.audioDebug(`Lyd ${r.state}  ${r.sampleRate} Hz
Stemmer ${r.voices}
${r.failures.length?`FEJL ${r.failures.join(" | ")}
`:""}${r.last.join(`
`)}`,this.showAudio&&this.mode==="playing"),this.showPerf){const o=this.renderer.info.render;this.ui.perf(`FPS ${this.fps.toFixed(0)}
Kald ${o.calls}  Trekanter ${o.triangles}
${this.monster.bb.state}  spænding ${this.director.tension.toFixed(0)}
${this.sim.x.toFixed(1)} ${this.sim.y.toFixed(1)} ${this.sim.z.toFixed(1)}`,!0)}else this.ui.perf("",!1)}visit(){const t=Hn(this.world,this.sim.x,this.sim.z,this.sim.y);t&&(this.snap.visited.includes(t.id)||(this.snap.visited.push(t.id),new Set(this.snap.visited.map(n=>this.world.rooms.find(s=>s.id===n)?.floor)).size>1&&this.persist(0)))}refreshObjective(){lr(this.snap).id!==this.lastObjective&&this.lastObjective&&(this.bus.emit({type:"objectiveCompleted",id:this.lastObjective}),this.persist(0))}floorAllowed(t){return!0}computeChase(){const t=this.monsterDist();let e=this.snap.playTime>46||de(this.snap.inventory,"note_code")||t<4.2;return this.director.suppress>0&&t>2.6&&(e=!1),e}noise(t){const e=this.sim.y<2?-1:this.sim.y<6?0:1,n=this.monster.pos.y<2?-1:this.monster.pos.y<6?0:1,s=!br(this.eyePos(),{x:this.monster.pos.x,y:this.monster.pos.y+1.5,z:this.monster.pos.z},bo(this.world,this.unlocked,this.open)),r=this.feet();this.noises.push({kind:t,pos:r,floorDelta:Math.abs(e-n),occluded:s}),this.bus.emit({type:"noiseEmitted",kind:t,x:r.x,y:r.y,z:r.z})}separateFromMonster(t){if(this.hiding||this.monster.concealed)return;const e=this.sim.x-this.monster.pos.x,n=this.sim.z-this.monster.pos.z,s=Math.hypot(e,n),r=.66;s>.001&&s<r&&Math.abs(this.sim.y-this.monster.pos.y)<1.5&&(this.sim.x+=e/s*(r-s),this.sim.z+=n/s*(r-s),ds(this.world,this.sim.x,this.sim.z,this.sim.y)===null&&(this.sim.x-=e/s*(r-s),this.sim.z-=n/s*(r-s)))}beginIntro(){if(!this.wantsIntro){this.introTime=-1,this.ui.hideIntro();return}this.introTime=0,this.introBeat=-1,this.snap.flags.introDone=!1,this.ui.setIntro("",""),this.ui.cinematic(!0),this.viewmodel.visible=!1,this.audio.play("sting",void 0,{volume:.22})}stepIntro(t){this.introTime+=t;const e=$_(this.introTime);if(e.done){this.finishIntro();return}e.beat&&e.beat.at!==this.introBeat&&(this.introBeat=e.beat.at,this.ui.setIntro(e.beat.title,e.beat.body),e.beat.title==="NYT MÅL"&&this.audio.play("paper",void 0,{volume:.3})),this.viewmodel.visible=!1,this.lunge.visible=!1,this.cone.visible=!1,this.placeCamera({sprint:!1},t)}finishIntro(){this.introTime<0||(this.introTime=-1,this.introBeat=-1,this.snap.flags.introDone=!0,this.viewmodel.visible=!0,this.ui.hideIntro())}newGame(){this.snap=wr(),this.ended=!1,this.autosavedIntro=!1,this.lastObjective="",this.fade=1,this.sim=wa(this.snap.player),this.unlocked=new Set(this.snap.doorsUnlocked),this.open.clear(),this.desired.clear(),this.hiding=null,this.runtime.forEach(t=>t.mesh.visible=!1),this.runtime=[];for(const[t,e]of this.built.pickups)e.visible=!this.snap.pickedUp.includes(t);this.monster.spawn(this.snap.monster,this.snap.monster.yaw,"Patrol"),this.director=_c(),this.schedule=bc(),this.tone=Mo(),this.radioAt=-99,this.beginIntro(),this.creepIn=12,this.scares.dismiss(),this.audio.beginScene(),this.built.mannequin.visible=!1,this.built.secretShelf.position.x=37.32,this.viewmodel.visible=!0,this.lunge.visible=!1,this.setMode("playing"),this.audio.ensure()}applySnapshot(t){this.snap=t,this.ended=!1,this.sim=wa(t.player),this.unlocked=new Set(t.doorsUnlocked),this.open.clear(),this.desired.clear();for(const e of t.doorsOpen)this.open.set(e,1),this.desired.set(e,1);this.hiding=null,this.snap.readIds||(this.snap.readIds=[]),this.settleLoadedBody();for(const[e,n]of this.built.pickups)n.visible=!t.pickedUp.includes(e);t.events||(t.events=Es()),this.monster.spawn(t.monster,t.monster.yaw,t.monster.state),this.monsterDist()<3&&(this.monster.pos={x:4,y:0,z:16},this.monster.group.position.set(4,0,16)),this.built.secretShelf.position.x=t.flags.secretOpen?36:37.32,this.built.mannequin.visible=!1,this.fade=.4,this.viewmodel.visible=!0,this.lunge.visible=!1,this.creepIn=12,this.schedule=lx(this.schedule),this.tone=Mo(),this.radioAt=-99,this.introTime=-1,this.introBeat=-1,this.ui.hideIntro(),this.scares.dismiss(),this.audio.beginScene(),this.setMode("playing"),this.audio.ensure(),this.bus.emit({type:"saveLoaded",slot:-1})}settleLoadedBody(){const t=ds(this.world,this.sim.x,this.sim.z,this.sim.y),e=t!==null&&Av(this.sim.x,t,this.sim.z,Xh,xr,this.sim.crouching,bo(this.world,this.unlocked,this.open));if(t===null||e){this.sim.x=ci.x,this.sim.y=ci.y,this.sim.z=ci.z;return}this.sim.y=t}persist(t){this.snap.player.health<=0||(this.copySim(),this.snap.doorsOpen=this.world.doors.filter(e=>(this.open.get(e.id)??0)>.6).map(e=>e.id),this.snap.doorsUnlocked=[...this.unlocked],this.snap.monster={x:this.monster.pos.x,y:this.monster.pos.y,z:this.monster.pos.z,yaw:this.monster.yaw,state:this.monster.bb.state,waypointIndex:this.monster.bb.waypointIndex,suspicion:this.monster.bb.suspicion,blindTime:this.monster.bb.blindTime},A_(this.storage,t,this.snap),this.ui.continueEnabled(!0))}copySim(){this.snap.player={x:this.sim.x,y:this.sim.y,z:this.sim.z,yaw:this.sim.yaw,pitch:this.sim.pitch,health:this.sim.health,stamina:this.sim.stamina,battery:this.sim.battery,flashlightOn:this.sim.flashlightOn,crouching:this.sim.crouching}}setMode(t){const e=this.mode;this.mode=t,t!=="playing"?(this.input.unlock(),this.audio.setLocomotion(!1,!1,!1),this.stepDist=0,e==="playing"&&this.audio.suspendTransient()):e!=="playing"&&!this.testMode&&this.introTime<0&&this.input.lock();const n=t==="paused"?"pause":t;this.ui.show(n==="playing"?"playing":n),this.introTime>=0&&(this.viewmodel.visible=!1,this.ui.cinematic(!0)),this.audio.duck(t!=="playing"&&t!=="menu"),t==="inventory"&&this.refreshInv()}applyModalKeys(){const t=this.input.formFocused();if((this.mode!=="playing"||t||this.introTime>=0)&&this.input.discard(i_),this.introTime>=0&&!t){this.input.takeFirst(["Escape","Enter","Space"])&&this.finishIntro();return}if(this.mode==="inventory"&&!t){const s=s_(this.input.takeFirst(["ArrowUp","ArrowDown","KeyW","KeyS","Enter","KeyE"]));s==="up"&&(this.invIndex=Math.max(0,this.invIndex-1)),s==="down"&&(this.invIndex=Math.min(Math.max(0,this.snap.inventory.length-1),this.invIndex+1)),(s==="up"||s==="down")&&this.refreshInv(),s==="use"&&this.useSelected()}const e=this.input.takeFirst(t?["Escape"]:n_),n=r_(this.mode,e);n.type==="mode"?this.setMode(n.mode):n.type==="back"&&this.backFromOverlay()}backFromOverlay(){this.mode==="settings"?this.setMode(this.settingsFrom==="slots"?"menu":this.settingsFrom):this.mode==="slots"?this.setMode(this.slotMode==="save"?"paused":"menu"):(this.mode==="credits"||this.mode==="exit")&&this.setMode("menu")}refreshInv(){const t=this.snap.inventory.map(e=>{const n=Ii(e.itemId);return{name:n.name,count:e.count,desc:n.description}});this.invIndex>=t.length&&(this.invIndex=0),this.ui.keysLine(`Nøgler fundet: ${Uc(this.snap)}/3`),this.ui.inventory(t,this.invIndex)}openExamine(t){this.snap.readIds.includes(t)||(this.snap.readIds.push(t),this.refreshObjective());const e=Ii(t);let n="";t==="blueprint"&&(n=this.world.rooms.filter(s=>s.id!=="secret"||this.snap.visited.includes("secret")).map(s=>`<i class="${this.snap.visited.includes(s.id)?"on":""}">${s.name}</i>`).join("")),this.ui.examine(e,n),this.setMode("examine")}stepRoomTone(t,e){const n=t?{id:t.id,x:t.x,z:t.z,w:t.w,d:t.d,floorY:kt[t.floor]}:null,s=gx(this.tone,{time:this.snap.playTime,dt:e,room:n});if(this.tone=s.state,s.cue){const r=s.cue;this.audio.play(r.kind,{x:r.x,y:r.y,z:r.z},{volume:.22,occluded:!1})}if(vx(this.snap.flags.radioOn,this.snap.playTime,this.radioAt)&&(this.radioAt=this.snap.playTime,this.audio.play("whisper",Sc,{volume:.2,occluded:!0})),t&&this.snap.playTime>=this.extraCueAt){const r=["patientgang","observation","kammer"].includes(t.id),o=["slagterum","obduktion","kaeldergang"].includes(t.id);if(r||o){const a=r?"babyLaugh":"pigRhythm",l={x:t.x+Math.min(t.w-1,3),y:kt[t.floor]+1.25,z:t.z+t.d-1.1};this.audio.playUserScare(a,l),this.extraCueAt=this.snap.playTime+65+t.id.length%5*11}}}zoneFor(t){return t?t==="kapel"?"chapel":t==="slagterum"||t==="obduktion"?"slagter":t.startsWith("trappe")||t==="patientgang"?"corridor":t==="observation"||t==="kammer"||t==="stilhed"?"dark":t==="kaeldergang"?"cellar":this.sim.y>6?"upper":"hall":"hall"}relocateMonster(t,e){if(!this.monster.concealed){this.hideWait=0;return}if(this.hideWait+=t,this.hideWait<1.2)return;const n={x:this.sim.x,y:this.sim.y,z:this.sim.z},s=sx({cells:this.spawnCells,player:n,forward:{x:this.camDir.x,z:this.camDir.z},recent:this.recentSpawns,from:{...this.monster.pos},visible:o=>br(this.eyePos(),{x:o.x,y:o.y+1.4,z:o.z},e),rng:Math.random});!s||ix(this.sim.flashlightOn&&this.sim.battery>0,this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},{x:s.x,y:s.y+1.6,z:s.z},e)||(this.monster.reveal(s),this.recentSpawns.push(s),this.recentSpawns.length>6&&this.recentSpawns.shift(),this.hideWait=0,this.audio.trace.push("relocate"))}stepEvents(t){this.snap.events||(this.snap.events=Es());const e=Hn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"",n=tr(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates()),s=n&&n.kind==="door"?this.open.get(n.id)??0:0,r=!!n&&n.kind==="door"&&s>.55&&n.id!==wc,o=this.butcher.position,a=new k(o.x-this.camera.position.x,0,o.z-this.camera.position.z).normalize(),l=this.camDir.x*a.x+this.camDir.z*a.z<.25,c=ox(this.snap.events,{dt:t,time:this.snap.playTime,room:e,prevRoom:this.prevRoom,flashlight:this.sim.flashlightOn,prevFlash:this.prevFlash,lookedAway:this.snap.events.slagter===2&&l,atDoor:r});this.maybePeek(n),this.snap.events=c.state,this.prevRoom=e,this.prevFlash=this.sim.flashlightOn;for(const h of c.cues)this.fireCue(h,n?.id);if(c.cues.some(h=>h.startsWith("jump")||h==="figure")&&(this.schedule=cx(this.schedule,this.snap.playTime,20),this.director={...this.director,suppress:Math.max(this.director.suppress,6)}),this.runSchedule(e,t),this.lungeT>0){this.lungeT=Math.max(0,this.lungeT-t),this.lunge.visible=this.lungeT>0;const h=1-this.lungeT/2;this.lunge.position.z=-.9+h*.5}else this.lunge.visible=!1;if(this.shadowT>0){this.shadowT=Math.max(0,this.shadowT-t);const h=1-this.shadowT/1.1;this.shadowMesh.position.lerpVectors(this.shadowFrom,this.shadowTo,Math.min(1,h)),this.shadowMesh.position.y=this.shadowFrom.y+1,this.shadowMesh.visible=this.shadowT>0,this.audio.moveTracked(this.shadowMesh.position)}}runSchedule(t,e){this.snap.events.beats||(this.snap.events.beats=[]);for(const s of fx({time:this.snap.playTime,room:t,readIds:this.snap.readIds,fired:this.snap.events.beats}))this.schedule=hx(this.schedule,s);const n=ux(this.schedule,{dt:e,time:this.snap.playTime,room:t,blocked:this.monster.bb.state==="Attack"||this.lungeT>0||this.scares.fx.face>0,firedIds:this.snap.events.beats});this.schedule=n.state;for(const s of n.fired)this.playBeat(s.id)}playBeat(t){if(this.snap.events.beats.includes(t)||this.snap.events.beats.push(t),this.director={...this.director,suppress:Math.max(this.director.suppress,8),sinceScare:0},t==="reception_wake"){this.lightCut.set("reception_0",this.snap.playTime+.45),this.lightCut.set("reception_1",this.snap.playTime+1.15),this.lightCut.set("reception_2",this.snap.playTime+1.9),this.audio.play("door",{x:14,y:0,z:6},{volume:.45,occluded:!0}),this.caption("Majas brev peger mod arkivet.",2.4);return}if(t==="arkiv_names"){this.shadowFrom.set(6,this.sim.y,3.4),this.shadowTo.copy(this.shadowFrom),this.shadowT=1.1,this.audio.play("paper",{x:6,y:this.sim.y+1,z:3.4},{volume:.7}),this.caption("Navnene stemmer ikke med journalen.",2.4);return}if(t==="obduktion_witness"){const e=this.sim.y;this.audio.play("metallic",{x:this.sim.x,y:e+.8,z:this.sim.z},{volume:.65});for(const n of this.built.lights)(n.def.room==="operationsstue"||n.def.room==="obduktion")&&this.lightCut.set(n.def.id,this.snap.playTime+2.4);this.shadowFrom.set(this.sim.x+this.camDir.x*2.8,e,this.sim.z+this.camDir.z*2.8),this.shadowTo.copy(this.shadowFrom),this.shadowT=1.1,this.caption("Noget står i døråbningen.",2.2)}}fireCue(t,e){if(t.startsWith("jump:")){this.lungeT=2,this.lunge.visible=!0,this.trauma=1,this.audio.play("scream"),this.say("Noget var lige foran dig.");return}if(t==="silence"){this.audio.hush(3.5);return}if(t==="deep"){this.audio.play("deep",{x:40,y:1.2,z:3},{volume:1});return}if(t==="figure"){this.butcher.visible=!0;return}if(t==="hide-figure"){this.butcher.visible=!1;return}t!=="steps"&&t==="shadow"&&this.runShadow(e)}runShadow(t){const e=this.world.doors.find(c=>c.id===t)??this.world.doors.find(c=>c.id==="door_rec_pat");if(!e)return;const n=kt[e.floor],s=Math.random()<.5?1:-1,r=1.6,o=Math.sign(e.coord-this.sim.x||1),a=Math.sign(e.coord-this.sim.z||1);if(e.axis==="z"){const c=e.coord+a*.85;this.shadowFrom.set(e.center-s*r,n,c),this.shadowTo.set(e.center+s*r,n,c)}else{const c=e.coord+o*.85;this.shadowFrom.set(c,n,e.center-s*r),this.shadowTo.set(c,n,e.center+s*r)}this.shadowT=1.1,this.shadowMesh.position.copy(this.shadowFrom),this.shadowMesh.position.y=n+1,this.shadowMesh.visible=!0;const l={x:(this.shadowFrom.x+this.shadowTo.x)/2,y:n+1.2,z:(this.shadowFrom.z+this.shadowTo.z)/2};this.audio.playTracked("shadow",l),this.audio.play("creak",l,{volume:.7}),this.audio.setHeartbeat(.7),this.flash=.4;for(const c of this.built.lights)Math.hypot(c.def.x-l.x,c.def.z-l.z)<8&&this.lightCut.set(c.def.id,this.snap.playTime+.7)}paintMap(){const t=this.ui.root.querySelector("#minimap"),e=t?.getContext("2d");if(!t||!e)return;const n=t.clientWidth||t.width,s=t.clientHeight||t.height,r=B_(n,s,window.devicePixelRatio||1);(t.width!==r.width||t.height!==r.height)&&(t.width=r.width,t.height=r.height);const a=Hn(this.world,this.sim.x,this.sim.z,this.sim.y)?.floor??0,l=G_(lr(this.snap).id),c=[],h=this.world.rooms.find(f=>f.id===l);h&&this.snap.visited.includes(h.id)&&c.push({id:lr(this.snap).id,roomId:h.id,x:h.x+h.w*.5,z:h.z+h.d*.5,floor:h.floor});const u=Math.round(this.monster.pos.y/4),p=Math.hypot(this.monster.pos.x-this.sim.x,this.monster.pos.z-this.sim.z)<16&&u===a&&!this.monster.concealed&&this.snap.playTime<this.monsterShown;W_(e,t.width,t.height,{rooms:Y_(this.world.rooms),floor:a,px:this.sim.x,pz:this.sim.z,yaw:this.sim.yaw,visited:new Set(this.snap.visited),monster:{x:this.monster.pos.x,z:this.monster.pos.z,floor:u,show:p},batteries:this.world.pickups.filter(f=>f.itemId==="battery"&&this.snap.visited.includes(f.room)&&!this.snap.pickedUp.includes(f.id)).map(f=>({x:f.x,z:f.z,floor:this.world.rooms.find(v=>v.id===f.room)?.floor??0})),doors:this.world.doors.map(f=>({id:f.id,floor:f.floor,axis:f.axis,coord:f.coord,center:f.center,a:f.a,b:f.b,locked:f.locked})),goals:c})}herdMonster(){const t=Hn(this.world,this.monster.pos.x,this.monster.pos.z,this.monster.pos.y);if(t&&t.id!==this.monsterRoom&&(this.monsterRoom=t.id,this.monsterShown=this.snap.playTime+3.6,this.monsterRoomUntil=this.snap.playTime+120),this.monsterRoomUntil>0&&this.snap.playTime>this.monsterRoomUntil&&!this.monster.concealed){const e=this.world.rooms.filter(s=>!s.id.startsWith("trappe")&&s.id!=="stilhed"&&s.id!==this.monsterRoom),n=e[Math.floor(Math.random()*e.length)];if(!n)return;this.monsterRoomUntil=this.snap.playTime+120,this.monster.bb.state="Patrol",this.monster.bb.goal={x:n.x+n.w*.5,y:kt[n.floor],z:n.z+n.d*.5},this.monsterShown=this.snap.playTime+3.6}}maybePeek(t){if(this.peekT>0||this.peekCool>0||!t||t.kind!=="door"||Math.hypot(this.sim.vx,this.sim.vz)>.4||Math.random()>.012)return;const e=this.world.doors.find(o=>o.id===t.id);if(!e)return;const n=kt[e.floor],s=Math.sign(e.coord-this.sim.x||1),r=Math.sign(e.coord-this.sim.z||1);this.peek.position.set(e.axis==="x"?e.coord+s*.42:e.spanMin+.15,n,e.axis==="z"?e.coord+r*.42:e.spanMin+.15),this.peek.lookAt(this.camera.position.x,this.peek.position.y+1.5,this.camera.position.z),this.peek.visible=!0,this.peekT=1.25,this.peekCool=26,this.audio.play("whisper",{x:this.peek.position.x,y:n+1.5,z:this.peek.position.z},{volume:.55}),this.audio.trace.push("peek")}stepPower(t){if(!this.snap.flags.powerCut&&this.snap.playTime>=120&&(this.snap.flags.powerCut=!0,this.blackout=3.6,this.fade=1,this.sim.flashlightOn=!1,this.sim.x=42,this.sim.y=0,this.sim.z=8,this.sim.vx=0,this.sim.vz=0,this.sim.vy=0,this.audio.play("metallic"),this.audio.trace.push("power-cut")),this.blackout>0&&(this.blackout=Math.max(0,this.blackout-t),this.fade=1),this.peekCool=Math.max(0,this.peekCool-t),this.peekT>0){this.peekT=Math.max(0,this.peekT-t),this.peek.visible=this.peekT>0;const e=this.peekT>.8?(1.3-this.peekT)/.5:Math.min(1,this.peekT/.35);this.peek.position.y=kt[Math.round(this.sim.y/4)]+1.45,this.peek.scale.setScalar(.2+.8*Math.max(0,Math.min(1,e)))}}stepKnocks(){if(!this.knocks.length)return;const t=this.snap.playTime;this.knocks=this.knocks.filter(e=>e.at>t?!0:(this.audio.play("door",e.pos,{volume:.75}),this.audio.trace.push("knock"),!1))}queueKnocks(){const t={x:-this.camDir.x,z:-this.camDir.z};for(let e=0;e<3;e++){const n=7-e*2.2;this.knocks.push({at:this.snap.playTime+.35+e*.7,pos:{x:this.sim.x+t.x*n,y:this.sim.y+1,z:this.sim.z+t.z*n}})}}buildViewmodel(){const t=new Kt,e=new _t({color:"#e0c2a4",roughness:.62,emissive:"#5c4030",emissiveIntensity:.22,depthTest:!1}),n=new _t({color:"#3a3734",roughness:.4,metalness:.7,emissive:"#141312",emissiveIntensity:.18,depthTest:!1}),s=new _t({color:"#d5d0c8",roughness:.28,metalness:.8,emissive:"#2a2926",emissiveIntensity:.2,depthTest:!1}),r=new gn({color:"#fff6df",depthTest:!1}),o=f=>(f.frustumCulled=!1,f.renderOrder=3,f.traverse(v=>{v.frustumCulled=!1,v.renderOrder=3}),f),a=new nt(new ve(.026,.03,.2,16),n);a.rotation.x=Math.PI/2,a.position.z=-.02;const l=new nt(new ve(.042,.034,.06,16),s);l.rotation.x=Math.PI/2,l.position.z=-.15;const c=new nt(new Pr(.034,20),r);c.position.z=-.182,c.rotation.y=Math.PI;const h=new nt(new ve(.008,.008,.018,8),s);h.position.set(0,.032,.02);const u=Ao(ii(.12,-.14,.16),ii(.03,-.04,.04),.04,.028,e),d=ty(ii(.02,-.02,-.01),.034,e),p=Ao(ii(.04,-.01,.02),ii(.01,.03,-.06),.013,.01,e);t.add(o(a),o(l),o(c),o(h),o(u),o(d),o(p));for(let f=0;f<3;f++){const v=-.01-f*.04;t.add(o(Ao(ii(.03,-.01,v),ii(-.015,.028,v-.015),.011,.008,e)))}return t.renderOrder=3,t}buildLunge(){const t=new Kt,e=new _t({color:"#292928",roughness:.97}),n=new _t({color:"#191a1a",roughness:.92}),s=new _t({color:"#4c4741",roughness:1});for(const r of[-1,1]){const o=new Kt;o.position.set(r*.34,-.18,-.08),o.rotation.z=-r*.24;const a=new nt(new ve(.06,.095,.38,10),e);a.rotation.z=-r*.28,o.add(a);const l=new nt(new ve(.063,.07,.045,10),s);l.position.set(-r*.045,.18,.025),o.add(l);const c=new nt(new Ee(.077,10,7),n);c.position.set(-r*.09,.27,.08),o.add(c);for(let h=0;h<4;h++){const u=new nt(new ve(.014,.022,.15+h%3*.035,7),n);u.position.set(-r*(.12+h*.039),.37+h%2*.025,.085),u.rotation.z=-r*(.2+h*.08),o.add(u)}t.add(o)}return t.position.set(0,-.16,-.7),t.visible=!1,t.renderOrder=20,t}buildButcher(){const t=new Kt;t.position.set(40,0,3);const e=new _t({color:"#292628",roughness:.99,side:me}),n=new _t({color:"#665b4e",roughness:.98,side:me}),s=new _t({color:"#481919",roughness:.87}),r=new _t({color:"#44413d",roughness:.98}),o=new _t({color:"#66615b",metalness:.7,roughness:.52}),a=new _t({color:"#34312f",roughness:.96}),l=new nt(new Xi(.28,.76,6,12),e);l.position.y=1.11,l.castShadow=!0,t.add(l);for(const p of[-1,1]){const f=new nt(new ve(.13,.105,.84,8),e);f.position.set(p*.14,.44,0),t.add(f);const v=new nt(new Ht(.24,.16,.39),e);v.position.set(p*.14,.08,.095),t.add(v);const m=new nt(new ve(.085,.065,.81,8),e);m.position.set(p*.38,1.18,.02),m.rotation.z=p*.18,t.add(m);const g=new nt(new Ee(.09,10,8),a);g.position.set(p*.46,.76,.04),t.add(g)}const c=new nt(new fe(.52,.95),n);c.position.set(0,1,.29),c.rotation.z=.045,t.add(c);for(let p=0;p<5;p++){const f=new nt(new Ht(.045,.22+p%3*.06,.01),s);f.position.set((p-2)*.09,1.01-p%2*.16,.304),f.rotation.z=(p-2)*.1,t.add(f)}const h=new nt(new Ee(.19,18,14),a);h.scale.set(.87,1.14,.8),h.position.set(0,1.78,.02),h.castShadow=!0,t.add(h);const u=new nt(new Ht(.3,.14,.035),r);u.position.set(0,1.71,.17),t.add(u);for(const p of[-1,1]){const f=new nt(new Ht(.034,.72,.032),n);f.position.set(p*.235,1.26,.29),t.add(f);for(let v=0;v<3;v++){const m=new nt(new Ht(.24,.047,.019),n);m.position.set(p*.012,1.83-v*.06,.182+.006*v),m.rotation.z=p*.08+v*.045,t.add(m)}}const d=new nt(new Ht(.1,.42,.018),o);d.position.set(.48,.52,.17),d.rotation.z=-.2,t.add(d);for(let p=0;p<4;p++){const f=new nt(new Kn(.07,.013,6,12,Math.PI*1.65),o);f.position.set(-1.18+p*.72,2.4,-.25),f.rotation.x=Math.PI/2,t.add(f)}return t.visible=!1,t}caption(t,e){this.settings.subtitles&&(this.ui.subtitle(t),this.subtitleT=e)}say(t){this.message=t,this.messageT=2.6}eyePos(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}feet(){return{x:this.sim.x,y:this.sim.y,z:this.sim.z}}hidePos(){const t=this.world.hides.find(e=>e.id===this.hiding);return t?{x:t.x,y:this.sim.y,z:t.z}:null}doorPos(t){return{x:t.axis==="x"?t.coord:t.center,y:kt[t.floor]+1,z:t.axis==="z"?t.coord:t.center}}monsterDist(){return Math.hypot(this.monster.pos.x-this.sim.x,this.monster.pos.z-this.sim.z)}monsterDistTo(t,e){return Math.hypot(this.camera.position.x-t,this.camera.position.z-e)}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix();const n=this.settings.quality==="low"?1:this.settings.quality==="high"?1.5:1.25,s=Math.min(window.devicePixelRatio||1,n)*this.settings.resolutionScale;this.renderer.setPixelRatio(s),this.renderer.setSize(t,e,!1),this.post.setSize(Math.floor(t*s),Math.floor(e*s))}applyVolumes(){this.audio.setVolumes(this.settings.masterVolume,this.settings.musicVolume,this.settings.sfxVolume)}applyPatch(t){const e=this.settings.quality;if(this.settings=Ya({...this.settings,...t}),C_(this.storage,this.settings),this.ui.fillSettings(this.settings),this.applyVolumes(),this.input.setSensitivity(this.settings.mouseSensitivity),t.quality&&t.quality!==e){this.post.applyQuality(this.settings.quality),this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.spot.castShadow=this.settings.quality!=="low";for(const n of this.built.detail)n.visible=this.settings.quality!=="low"}t.fullscreen!==void 0&&(this.settings.fullscreen?document.documentElement.requestFullscreen?.().catch(()=>{}):document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{})),this.resize()}bindUi(){}handle(t,e){if(t==="new")this.newGame();else if(t==="continue"){const n=Oc(this.storage);n&&this.applySnapshot(n.snapshot)}else if(t==="openLoad")this.slotMode="load",this.ui.slots(Fc(this.storage),"INDLÆS"),this.setMode("slots");else if(t==="openSave")this.slotMode="save",this.ui.slots(Fc(this.storage),"GEM"),this.setMode("slots");else if(t==="slot"&&typeof e=="number")if(this.slotMode==="save")this.persist(e),this.say("Gemt."),this.setMode("paused");else{const n=Ms(this.storage,e);n&&this.applySnapshot(n.snapshot)}else if(t==="closeSlots")this.setMode(this.slotMode==="save"?"paused":"menu");else if(t==="settings")this.settingsFrom=this.mode==="playing"?"paused":this.mode,this.ui.fillSettings(this.settings),this.setMode("settings");else if(t==="closeSettings")this.setMode(this.settingsFrom==="slots"?"menu":this.settingsFrom);else if(t==="resume")this.setMode("playing");else if(t==="restart")this.newGame();else if(t==="menu")!this.ended&&this.snap.playTime>1&&this.persist(0),this.setMode("menu");else if(t==="exit")this.setMode("exit"),window.close();else if(t==="exitBack")this.setMode("menu");else if(t==="credits")this.setMode("credits");else if(t==="creditsBack")this.setMode("menu");else if(t==="closeInv")this.setMode("playing");else if(t==="inventory")(this.mode==="playing"||this.mode==="paused")&&this.setMode("inventory");else if(t==="select"&&typeof e=="number")this.invIndex=e,this.refreshInv();else if(t==="use")this.useSelected();else if(t==="drop")this.dropSelected();else if(t==="closeEx")this.setMode(this.snap.playTime>0&&!this.ended?"playing":"menu");else if(t==="digit"&&typeof e=="string")this.code.length<4&&(this.code+=e),this.ui.keypad(this.code,"Stiftelsesåret.");else if(t==="keyOk")this.submitCode();else if(t==="keyClear")this.code="",this.ui.keypad(this.code,"Stiftelsesåret.");else if(t==="keyClose")this.setMode("playing");else if(t!=="patch")if(t==="endMenu")this.setMode("menu");else if(t==="endRetry"){const n=Ms(this.storage,0);n?this.applySnapshot(n.snapshot):this.newGame()}else t==="endNew"&&this.newGame()}useSelected(){const t=this.snap.inventory[this.invIndex];if(!t)return;const e=Ii(t.itemId);if(e.kind==="consumable"){const n=a_(this.snap.inventory,t.itemId);n.heal&&(this.snap.inventory=n.slots,this.sim.health=Math.min(100,this.sim.health+n.heal),this.snap.player.health=this.sim.health,this.audio.play("pickup"),this.refreshInv());return}(e.text||e.kind==="map"||e.kind==="note"||e.kind==="story"||e.kind==="collectible")&&this.openExamine(t.itemId)}dropSelected(){const t=this.snap.inventory[this.invIndex];if(!t)return;const e=Lc(this.snap.inventory,t.itemId);if(!e.dropped){this.say("Den skal du beholde.");return}this.snap.inventory=e.slots,this.refreshInv()}installApi(){const t=this;window.__AGNES__={ready:!0,introOn:()=>t.introTime>=0,seed:()=>t.rng.seed,signals:()=>t.bus.recent(),hiding:()=>t.hiding,face:e=>{t.sim.yaw=e,t.syncView()},gfx:()=>{const e=t.renderer.info.render;return{fps:t.fps,calls:e.calls,triangles:e.triangles,lights:t.built.lights.filter(n=>n.light.visible).length,flash:0,face:t.scares.fx.face}},lamps:()=>t.built.lights.filter(e=>e.def.room==="reception").map(e=>e.light.intensity),mode:()=>t.mode,start:()=>t.newGame(),snapshot:()=>(t.copySim(),JSON.parse(JSON.stringify(t.snap))),setMove:e=>{t.input.virtual=e},look:(e,n)=>{const s=gc(t.sim.yaw,t.sim.pitch,e,n,t.settings.invertY);t.sim.yaw=s.yaw,t.sim.pitch=s.pitch,t.syncView()},act:e=>{e==="interact"?t.interact():e==="flashlight"?t.toggleFlash():e==="pause"?t.setMode("paused"):e==="inventory"?t.setMode("inventory"):e==="reload"?t.swapBattery():t.handle(e)},teleport:(e,n,s)=>{t.sim.x=e,t.sim.y=n,t.sim.z=s;const r=ds(t.world,e,s,n);r!==null&&(t.sim.y=r),t.syncView()},freeze:e=>t.setFrozen(e),give:e=>{t.snap.inventory=sr(t.snap.inventory,e).slots},setFlag:(e,n)=>{t.snap.flags[e]=n,e==="secretOpen"&&n&&t.unlocked.add("door_secret"),e==="generatorOn"&&(t.snap.flags.generatorOn=n)},unlock:e=>t.unlocked.add(e),forceMonster:e=>{t.monster.bb.state=e},faceMonster:e=>t.monster.face(e),placeMonster:(e,n,s)=>{t.monster.pos={x:e,y:n,z:s},t.monster.group.position.set(e,n,s),t.monster.bb.state="Idle",t.monster.face(Math.PI),t.snap.iFrame=8,t.scares.fx.face=0,t.scares.update(10)},scare:e=>t.scares.trigger(e,t.snap.playTime,!0),save:e=>t.persist(e),load:e=>{const n=Ms(t.storage,e);return n&&t.applySnapshot(n.snapshot),!!n},restart:()=>t.newGame(),fps:()=>t.fps,monster:()=>({x:t.monster.pos.x,y:t.monster.pos.y,z:t.monster.pos.z,state:t.monster.bb.state}),doorOpen:e=>(t.open.get(e)??0)>.6,aim:()=>{const e=tr(t.eyePos(),{x:t.camDir.x,y:t.camDir.y,z:t.camDir.z},t.candidates());return e?{id:e.id,kind:e.kind,prompt:e.prompt}:null},tension:()=>t.director.tension,lastScare:()=>t.scares.lastKind,audioLog:()=>t.audio.trace.slice(),monsterHidden:()=>t.monster.concealed,events:()=>t.snap.events,emptyLight:()=>{t.sim.battery=.15},ping:e=>{t.audio.play(e,{x:t.sim.x+1.5,y:t.sim.y+1,z:t.sim.z+1.5},{volume:1})},probe:e=>t.audio.sampleMix(e),audition:e=>t.audio.audition(e),measureBed:()=>t.audio.measureBed()}}}function ii(i,t,e){return new k(i,t,e)}function Ao(i,t,e,n,s){const r=new k().subVectors(t,i),o=Math.max(.001,r.length()),a=new nt(new ve(e,n,o,12),s);return a.position.copy(i).lerp(t,.5),a.quaternion.setFromUnitVectors(new k(0,1,0),r.normalize()),a}function ty(i,t,e){const n=new nt(new Ee(t,12,8),e);return n.position.copy(i),n}function ey(){return wa(wr().player)}function wa(i){return{...i,vy:0,vx:0,vz:0,grounded:!0,justLanded:!1}}class ny{root;hooks;constructor(t,e){this.root=t,this.hooks=e,t.innerHTML=sy,this.bind()}bind(){const t=this.hooks,e=(a,l)=>{this.root.querySelector(a)?.addEventListener("click",l)};e("#btn-new",t.newGame),e("#btn-continue",t.continue),e("#btn-load",t.openLoad),e("#btn-settings",t.settings),e("#btn-credits",t.credits),e("#btn-exit",t.exit),e("#btn-resume",t.resume),e("#btn-save",t.openSave),e("#btn-pause-settings",t.settings),e("#btn-restart",t.restart),e("#btn-menu",t.menu),e("#btn-settings-back",t.closeSettings),e("#btn-slots-back",t.closeSlots),e("#btn-credits-back",t.creditsBack),e("#btn-exit-back",t.exitBack),e("#btn-inv-close",t.closeInventory),e("#btn-inv-hud",t.openInventory),e("#btn-use",t.useItem),e("#btn-drop",t.dropItem),e("#btn-examine-close",t.closeExamine),e("#btn-key-ok",t.keypadOk),e("#btn-key-clear",t.keypadClear),e("#btn-key-close",t.closeKeypad),e("#btn-end-menu",t.endingMenu),e("#btn-end-retry",t.endingRetry),e("#btn-end-new",t.endingNew),this.root.querySelectorAll("[data-digit]").forEach(a=>{a.addEventListener("click",()=>t.digit(a.dataset.digit||""))});const n=(a,l)=>{const c=this.root.querySelector(a);c?.addEventListener("input",()=>t.patchSettings({[l]:Number(c.value)}))};n("#set-res","resolutionScale"),n("#set-sens","mouseSensitivity"),n("#set-master","masterVolume"),n("#set-music","musicVolume"),n("#set-sfx","sfxVolume"),n("#set-bright","brightness");const s=this.root.querySelector("#set-quality");s?.addEventListener("change",()=>t.patchSettings({quality:s.value}));const r=this.root.querySelector("#set-fps");r?.addEventListener("change",()=>t.patchSettings({fpsCap:Number(r.value)}));const o=(a,l)=>{const c=this.root.querySelector(a);c?.addEventListener("change",()=>t.patchSettings({[l]:c.checked}))};o("#set-blur","motionBlur"),o("#set-shake","cameraShake"),o("#set-subs","subtitles"),o("#set-flicker","reduceFlicker"),o("#set-full","fullscreen"),o("#set-invert","invertY")}show(t){t==="paused"&&(t="pause");for(const s of this.root.querySelectorAll(".screen"))s.classList.add("hidden");if(this.q("#loading").classList.toggle("hidden",t!=="loading"),this.q("#fatal").classList.toggle("hidden",t!=="fatal"),t==="none"||t==="playing"){this.q("#hud").classList.toggle("hidden",t!=="playing");return}this.q("#hud").classList.toggle("hidden",t!=="playing");const n={menu:"#menu",pause:"#pause",settings:"#settings",slots:"#slots",credits:"#credits",exit:"#exit",inventory:"#inventory",examine:"#examine",keypad:"#keypad",ending:"#ending",loading:"#loading",fatal:"#fatal"}[t];n&&this.q(n).classList.remove("hidden"),(t==="inventory"||t==="examine"||t==="keypad")&&this.q("#hud").classList.add("hidden")}status(t){this.q("#loading").textContent=t}fatal(t){this.q("#fatal").textContent=t,this.show("fatal")}continueEnabled(t){this.q("#btn-continue").disabled=!t}hud(t){this.q("#obj-text").textContent=t.objective,this.q("#files").textContent=t.files,this.q("#prompt").innerHTML=t.prompt?`<b>E</b> ${iy(t.prompt)}`:"";const e=this.q("#stam");e.classList.toggle("low",t.stamina<25);const n=e.querySelector("i");n&&(n.style.width=`${t.stamina}%`);const s=this.q("#bat i");s&&(s.style.width=`${t.battery}%`),this.q("#bat").classList.toggle("low",t.battery<25);const r=this.q("#bat-label");r&&(r.textContent=t.batteryText?`Batteri ${t.batteryText}`:"Batteri"),this.q("#lock-hint").classList.toggle("hidden",!t.lockHint)}hurt(t){this.q("#hurt").style.opacity=String(Math.max(0,Math.min(1,t)))}setIntro(t,e){this.q("#intro").classList.remove("hidden"),this.q("#intro-title").textContent=t,this.q("#intro-body").textContent=e}hideIntro(){this.q("#intro").classList.add("hidden"),this.cinematic(!1)}cinematic(t){this.q("#hud").classList.toggle("hidden",t)}subtitle(t){this.q("#subtitle").textContent=t}toast(t){this.q("#toast").textContent=t}audioDebug(t,e){const n=this.q("#audio-debug");n.classList.toggle("hidden",!e),n.textContent=t}perf(t,e){const n=this.q("#perf");n.classList.toggle("hidden",!e),n.textContent=t}fillSettings(t){this.q("#set-quality").value=t.quality,this.q("#set-fps").value=String(t.fpsCap),this.setRange("#set-res",t.resolutionScale),this.setRange("#set-sens",t.mouseSensitivity),this.setRange("#set-master",t.masterVolume),this.setRange("#set-music",t.musicVolume),this.setRange("#set-sfx",t.sfxVolume),this.setRange("#set-bright",t.brightness),this.q("#set-blur").checked=t.motionBlur,this.q("#set-shake").checked=t.cameraShake,this.q("#set-subs").checked=t.subtitles,this.q("#set-flicker").checked=t.reduceFlicker,this.q("#set-invert").checked=t.invertY,this.q("#set-full").checked=t.fullscreen}slots(t,e){this.q("#slots h2").textContent=e;const n=this.q("#slot-list");n.innerHTML="";const s=["Checkpoint","Plads 1","Plads 2","Plads 3"];t.forEach((r,o)=>{const a=document.createElement("button");a.className="slot";const l=r?new Date(r.savedAt).toLocaleString("da-DK"):"Tom",c=r?`${Math.floor(r.snapshot.playTime/60)} min`:"";a.textContent=`${s[o]} — ${l} ${c}`,a.addEventListener("click",()=>this.hooks.pickSlot(o)),n.appendChild(a)})}keysLine(t){const e=this.root.querySelector("#inv-keys");e&&(e.textContent=t)}inventory(t,e){const n=this.q("#inv-list");if(n.innerHTML="",!t.length){const r=document.createElement("div");r.className="note",r.textContent="Du har kun lygten.",n.appendChild(r)}t.forEach((r,o)=>{const a=document.createElement("button");a.className="inv-item"+(o===e?" on":""),o===e&&a.setAttribute("aria-current","true"),a.textContent=r.count>1?`${r.name} ×${r.count}`:r.name,a.addEventListener("click",()=>this.hooks.selectItem(o)),n.appendChild(a)});const s=t[e];this.q("#inv-desc").textContent=s?s.desc:"Vælg en genstand."}examine(t,e){this.q("#ex-title").textContent=t?.name??"",this.q("#ex-body").textContent=t?.text||t?.description||"",this.q("#ex-map").innerHTML=e}keypad(t,e){this.q("#key-code").textContent=t.padEnd(4,"·"),this.q("#key-hint").textContent=e}ending(t,e){const n=M_(t);this.q("#end-kicker").textContent=n.kicker,this.q("#end-title").textContent=n.title,this.q("#end-body").textContent=n.paragraphs.join(`

`),this.q("#btn-end-retry").classList.toggle("hidden",!e),this.q("#btn-end-new").classList.toggle("hidden",!e)}setRange(t,e){const n=this.q(t);n.value=String(e)}q(t){const e=this.root.querySelector(t);if(!e)throw new Error(`Mangler ${t}`);return e}}function iy(i){return i.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]??t)}const sy=`
<canvas id="view"></canvas>
<div id="hurt"></div>
<div id="intro" class="hidden">
  <div class="intro-card">
    <p id="intro-title"></p>
    <p id="intro-body"></p>
    <p class="intro-skip">Esc springer over</p>
  </div>
</div>
<div id="subtitle"></div>
<div id="toast"></div>
<div id="perf" class="hidden"></div>
<div id="audio-debug" class="hidden"></div>
<div id="hud" class="hidden">
  <canvas id="minimap" width="220" height="150"></canvas>
  <button id="btn-inv-hud" type="button">Inventar</button>
  <div class="obj"><span>Opgave</span><div id="obj-text"></div></div>
  <div class="files" id="files"></div>
  <div class="cross"></div>
  <div class="prompt" id="prompt"></div>
  <div class="lock-hint" id="lock-hint">Klik for at styre blikket</div>
  <div class="bars"><div class="bar-label">Udholdenhed</div><div class="bar" id="stam"><i></i></div></div>
  <div class="bars right"><div class="bar-label" id="bat-label">Batteri</div><div class="bar" id="bat"><i></i></div></div>
</div>
<section id="menu" class="screen">
  <div class="menu-panel">
    <div class="kicker">Vestjylland, 1987</div>
    <h1>SKT. AGNES</h1>
    <p class="tagline">Asylet lukkede. Det gjorde hun ikke.</p>
    <button class="menu-btn" id="btn-new">Ny kampagne</button>
    <button class="menu-btn" id="btn-continue">Fortsæt</button>
    <button class="menu-btn" id="btn-load">Indlæs spil</button>
    <button class="menu-btn" id="btn-settings">Indstillinger</button>
    <button class="menu-btn" id="btn-credits">Kreditter</button>
    <button class="menu-btn" id="btn-exit">Afslut</button>
    <p class="controls-hint">WASD gå · Shift løb · Ctrl krøb · Mellemrum hop<br>E brug · F lygte · R batteri · Q rosenkrans<br>G smid · I/Tab inventar · Esc pause · F3 ydelse · F4 lyd</p>
  </div>
</section>
<section id="pause" class="screen hidden">
  <div class="card">
    <h2>PAUSE</h2>
    <button class="text-btn" id="btn-resume">Fortsæt</button>
    <button class="text-btn" id="btn-save">Gem spil</button>
    <button class="text-btn" id="btn-pause-settings">Indstillinger</button>
    <button class="text-btn" id="btn-restart">Genstart</button>
    <button class="text-btn" id="btn-menu">Hovedmenu</button>
  </div>
</section>
<section id="settings" class="screen hidden">
  <div class="card wide">
    <h2>INDSTILLINGER</h2>
    <div class="row"><span>Grafik</span><select id="set-quality"><option value="low">Lav</option><option value="medium">Mellem</option><option value="high">Høj</option></select></div>
    <div class="row"><span>Opløsning</span><input id="set-res" type="range" min="0.5" max="1.25" step="0.05"></div>
    <div class="row"><span>Mus</span><input id="set-sens" type="range" min="0.0006" max="0.006" step="0.0001"></div>
    <div class="row"><span>Hovedlyd</span><input id="set-master" type="range" min="0" max="1" step="0.01"></div>
    <div class="row"><span>Musik</span><input id="set-music" type="range" min="0" max="1" step="0.01"></div>
    <div class="row"><span>Effekter</span><input id="set-sfx" type="range" min="0" max="1" step="0.01"></div>
    <div class="row"><span>Lysstyrke</span><input id="set-bright" type="range" min="0.55" max="1.6" step="0.01"></div>
    <div class="row"><span>Billedloft</span><select id="set-fps"><option value="30">30</option><option value="60">60</option><option value="120">120</option><option value="0">Ubegrænset</option></select></div>
    <p class="note">Browseren styrer VSync. Loftet her begrænser, hvor ofte billedet tegnes.</p>
    <div class="row"><label class="check"><input id="set-blur" type="checkbox"> Bevægelsesslør</label></div>
    <div class="row"><label class="check"><input id="set-shake" type="checkbox"> Kamerarystelser</label></div>
    <div class="row"><label class="check"><input id="set-subs" type="checkbox"> Undertekster</label></div>
    <div class="row"><label class="check"><input id="set-flicker" type="checkbox"> Reduceret lysflimmer</label></div>
    <div class="row"><label class="check"><input id="set-invert" type="checkbox"> Omvendt Y-akse</label></div>
    <div class="row"><label class="check"><input id="set-full" type="checkbox"> Fuldskærm</label></div>
    <button class="text-btn" id="btn-settings-back">Tilbage</button>
  </div>
</section>
<section id="slots" class="screen hidden">
  <div class="card">
    <h2>INDLÆS</h2>
    <div id="slot-list"></div>
    <button class="text-btn" id="btn-slots-back">Tilbage</button>
  </div>
</section>
<section id="credits" class="screen hidden">
  <div class="card">
    <h2>KREDITTER</h2>
    <p class="note">Skt. Agnes er et originalt gyserspil. Historie, rum, teksturer, lys og al lyd er lavet procedurelt i koden — ingen eksterne asset-filer.<br><br>Three.js · WebGL · Web Audio<br><br>Vogteren er ikke en metafor. Luk døren efter dig.</p>
    <button class="text-btn" id="btn-credits-back">Tilbage</button>
  </div>
</section>
<section id="exit" class="screen hidden">
  <div class="card">
    <h2>AFSLUT</h2>
    <p class="note">Luk fanen eller vinduet for at forlade spillet. Hvis det blev åbnet som et selvstændigt vindue, lukker det nu.</p>
    <button class="text-btn" id="btn-exit-back">Tilbage</button>
  </div>
</section>
<section id="inventory" class="screen hidden">
  <div class="card wide">
    <h2>INVENTAR</h2>
    <p id="inv-keys" class="note">Nøgler fundet: 0/3</p>
    <p class="note">Pil op og ned vælger. Enter undersøger.</p>
    <div class="inv-list" id="inv-list"></div>
    <p id="inv-desc" class="note"></p>
    <div class="actions">
      <button class="text-btn" id="btn-use">Undersøg / brug</button>
      <button class="text-btn" id="btn-drop">Smid</button>
      <button class="text-btn" id="btn-inv-close">Luk</button>
    </div>
  </div>
</section>
<section id="examine" class="screen hidden">
  <div class="card wide">
    <h2 id="ex-title">Note</h2>
    <div class="paper" id="ex-body"></div>
    <div class="map" id="ex-map"></div>
    <button class="text-btn" id="btn-examine-close">Luk</button>
  </div>
</section>
<section id="keypad" class="screen hidden">
  <div class="card">
    <h2>PENGESKAB</h2>
    <div class="code" id="key-code">····</div>
    <p class="note" id="key-hint">Stiftelsesåret.</p>
    <div class="keypad">
      ${["1","2","3","4","5","6","7","8","9","0"].map(i=>`<button type="button" data-digit="${i}">${i}</button>`).join("")}
    </div>
    <div class="actions">
      <button class="text-btn" id="btn-key-clear">Slet</button>
      <button class="text-btn" id="btn-key-ok">Bekræft</button>
      <button class="text-btn" id="btn-key-close">Luk</button>
    </div>
  </div>
</section>
<section id="ending" class="screen hidden">
  <div class="card wide">
    <div class="kicker" id="end-kicker"></div>
    <h2 id="end-title"></h2>
    <div class="paper" id="end-body"></div>
    <div class="actions">
      <button class="text-btn" id="btn-end-retry">Indlæs checkpoint</button>
      <button class="text-btn" id="btn-end-new">Ny kampagne</button>
      <button class="text-btn" id="btn-end-menu">Hovedmenu</button>
    </div>
  </div>
</section>
<div id="loading">TÆNDER LYGTERNE</div>
<div id="fatal" class="hidden"></div>
`,Ka=document.getElementById("app");if(!Ka)throw new Error("Mangler #app");let Qt;const ry={newGame:()=>Qt.handle("new"),continue:()=>Qt.handle("continue"),openLoad:()=>Qt.handle("openLoad"),openSave:()=>Qt.handle("openSave"),pickSlot:i=>Qt.handle("slot",i),closeSlots:()=>Qt.handle("closeSlots"),settings:()=>Qt.handle("settings"),closeSettings:()=>Qt.handle("closeSettings"),resume:()=>Qt.handle("resume"),restart:()=>Qt.handle("restart"),menu:()=>Qt.handle("menu"),exit:()=>Qt.handle("exit"),exitBack:()=>Qt.handle("exitBack"),credits:()=>Qt.handle("credits"),creditsBack:()=>Qt.handle("creditsBack"),closeInventory:()=>Qt.handle("closeInv"),openInventory:()=>Qt.handle("inventory"),selectItem:i=>Qt.handle("select",i),useItem:()=>Qt.handle("use"),dropItem:()=>Qt.handle("drop"),closeExamine:()=>Qt.handle("closeEx"),digit:i=>Qt.handle("digit",i),keypadOk:()=>Qt.handle("keyOk"),keypadClear:()=>Qt.handle("keyClear"),closeKeypad:()=>Qt.handle("keyClose"),patchSettings:i=>Qt.applyPatch(i),endingMenu:()=>Qt.handle("endMenu"),endingRetry:()=>Qt.handle("endRetry"),endingNew:()=>Qt.handle("endNew")},Hc=new ny(Ka,ry),Wc=Ka.querySelector("#view");try{if(!Wc)throw new Error("Mangler lærred");Qt=new Q_(Wc,Hc),Qt.start()}catch(i){const t=i instanceof Error?i.message:"Ukendt fejl";Hc.fatal(`Spillet kunne ikke starte. ${t}`),console.error(i)}
