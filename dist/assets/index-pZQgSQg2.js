(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="170",fu=0,rl=1,pu=2,Xc=1,qc=2,Tn=3,Yn=0,Xe=1,Se=2,Be=0,Oi=1,_r=2,ol=3,al=4,Yc=5,An=100,mu=101,gu=102,vu=103,xu=104,Ro=200,_u=201,yu=202,Mu=203,Co=204,Po=205,$c=206,bu=207,Kc=208,Su=209,wu=210,Eu=211,Tu=212,Au=213,Ru=214,Do=0,Lo=1,Io=2,Hi=3,ko=4,Uo=5,No=6,Fo=7,jc=0,Cu=1,Pu=2,Dn=0,Zc=1,Jc=2,Qc=3,th=4,Du=5,eh=6,nh=7,ih=300,Gi=301,Vi=302,Oo=303,zo=304,Er=306,Wi=1e3,Xn=1001,Bo=1002,He=1003,Lu=1004,Cs=1005,mn=1006,Nr=1007,oi=1008,In=1009,sh=1010,rh=1011,ys=1012,Ra=1013,li=1014,hn=1015,dn=1016,Ca=1017,Pa=1018,ci=1020,oh=35902,ah=1021,lh=1022,un=1023,ch=1024,hh=1025,zi=1026,hi=1027,Tr=1028,Da=1029,uh=1030,La=1031,Ia=1033,dr=33776,fr=33777,pr=33778,mr=33779,Ho=35840,Go=35841,Vo=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,$o=37808,Ko=37809,jo=37810,Zo=37811,Jo=37812,Qo=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,oa=37820,aa=37821,gr=36492,la=36494,ca=36495,dh=36283,ha=36284,ua=36285,da=36286,Iu=3200,ku=3201,ka=0,Uu=1,Rn="",Te="srgb",$i="srgb-linear",Ar="linear",se="srgb",mi=7680,ll=519,Nu=512,Fu=513,Ou=514,fh=515,zu=516,Bu=517,Hu=518,Gu=519,cl=35044,hl="300 es",Cn=2e3,yr=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const ps=Math.PI/180,Xi=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Ua(i,t){return(i%t+t)%t}function Vu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Wu(i,t,e){return i!==t?(e-i)/(t-i):0}function ms(i,t,e){return(1-e)*i+e*t}function Xu(i,t,e,n){return ms(i,t,1-Math.exp(-e*n))}function qu(i,t=1){return t-Math.abs(Ua(i,t*2)-t)}function Yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $u(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ku(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ju(i,t){return i+Math.random()*(t-i)}function Zu(i){return i*(.5-Math.random())}function Ju(i){i!==void 0&&(ul=i);let t=ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qu(i){return i*ps}function td(i){return i*Xi}function ed(i){return(i&i-1)===0&&i!==0}function nd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const rd={DEG2RAD:ps,RAD2DEG:Xi,generateUUID:ji,clamp:be,euclideanModulo:Ua,mapLinear:Vu,inverseLerp:Wu,lerp:ms,damp:Xu,pingpong:qu,smoothstep:Yu,smootherstep:$u,randInt:Ku,randFloat:ju,randFloatSpread:Zu,seededRandom:Ju,degToRad:Qu,radToDeg:td,isPowerOfTwo:ed,ceilPowerOfTwo:nd,floorPowerOfTwo:id,setQuaternionFromProperEuler:sd,normalize:Fe,denormalize:Ii};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,o,a,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],E=s[4],x=s[7],S=s[2],C=s[5],T=s[8];return r[0]=o*_+a*b+l*S,r[3]=o*m+a*E+l*C,r[6]=o*p+a*x+l*T,r[1]=c*_+h*b+u*S,r[4]=c*m+h*E+u*C,r[7]=c*p+h*x+u*T,r[2]=d*_+f*b+g*S,r[5]=d*m+f*E+g*C,r[8]=d*p+f*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Ft;function ph(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function od(){const i=Mr("canvas");return i.style.display="block",i}const dl={};function ds(i){i in dl||(dl[i]=!0,console.warn(i))}function ad(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ld(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rn?Ar:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fl=[.64,.33,.3,.6,.15,.06],pl=[.2126,.7152,.0722],ml=[.3127,.329],gl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[$i]:{primaries:fl,whitePoint:ml,transfer:Ar,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:pl,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:fl,whitePoint:ml,transfer:se,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:pl,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}});let gi;class hd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=Mr("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ud=0;class mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Or(s[o].image)):r.push(Or(s[o]))}else r=Or(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dd=0;class ke extends Ki{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Xn,s=Xn,r=mn,o=oi,a=un,l=In,c=ke.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ji(),this.name="",this.source=new mh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=ih;ke.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(f+1)/2,S=(p+1)/2,C=(h+d)/4,T=(u+_)/4,R=(g+m)/4;return E>x&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=T/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=R/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=R/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qe extends fd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gh extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const S=Math.sqrt(E),C=Math.atan2(S,p*b);m=Math.sin(m*C)/S,a=Math.sin(a*C)/S}const x=a*b;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new I,xl=new Zi;class di{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Ds.subVectors(this.max,ns),vi.subVectors(t.a,ns),xi.subVectors(t.b,ns),_i.subVectors(t.c,ns),Nn.subVectors(xi,vi),Fn.subVectors(_i,xi),Kn.subVectors(vi,_i);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Kn.y,Kn.x,0];return!Br(e,vi,xi,_i,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,vi,xi,_i,Ds))?!1:(Ls.crossVectors(Nn,Fn),e=[Ls.x,Ls.y,Ls.z],Br(e,vi,xi,_i,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new I,new I,new I,new I,new I,new I,new I,new I],rn=new I,Ps=new di,vi=new I,xi=new I,_i=new I,Nn=new I,Fn=new I,Kn=new I,ns=new I,Ds=new I,Ls=new I,jn=new I;function Br(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){jn.fromArray(i,r);const a=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const md=new di,is=new I,Hr=new I;class Ji{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Hr)),this.expandByPoint(is.copy(t.center).sub(Hr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new I,Gr=new I,Is=new I,On=new I,Vr=new I,ks=new I,Wr=new I;class vh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gr.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Gr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Is),a=On.dot(this.direction),l=-On.dot(Is),c=On.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gr).addScaledVector(Is,d),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){Vr.subVectors(e,t),ks.subVectors(n,t),Wr.crossVectors(Vr,ks);let o=this.direction.dot(Wr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(ks.crossVectors(On,ks));if(l<0)return null;const c=a*this.direction.dot(Vr.cross(On));if(c<0||l+c>o)return null;const h=-a*On.dot(Wr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gd,t,vd)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),zn.crossVectors(n,$e),zn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),zn.crossVectors(n,$e)),zn.normalize(),Us.crossVectors($e,zn),s[0]=zn.x,s[4]=Us.x,s[8]=$e.x,s[1]=zn.y,s[5]=Us.y,s[9]=$e.y,s[2]=zn.z,s[6]=Us.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],E=n[7],x=n[11],S=n[15],C=s[0],T=s[4],R=s[8],y=s[12],M=s[1],v=s[5],P=s[9],L=s[13],k=s[2],z=s[6],G=s[10],Y=s[14],B=s[3],Q=s[7],at=s[11],ct=s[15];return r[0]=o*C+a*M+l*k+c*B,r[4]=o*T+a*v+l*z+c*Q,r[8]=o*R+a*P+l*G+c*at,r[12]=o*y+a*L+l*Y+c*ct,r[1]=h*C+u*M+d*k+f*B,r[5]=h*T+u*v+d*z+f*Q,r[9]=h*R+u*P+d*G+f*at,r[13]=h*y+u*L+d*Y+f*ct,r[2]=g*C+_*M+m*k+p*B,r[6]=g*T+_*v+m*z+p*Q,r[10]=g*R+_*P+m*G+p*at,r[14]=g*y+_*L+m*Y+p*ct,r[3]=b*C+E*M+x*k+S*B,r[7]=b*T+E*v+x*z+S*Q,r[11]=b*R+E*P+x*G+S*at,r[15]=b*y+E*L+x*Y+S*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,E=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,S=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,C=e*b+n*E+s*x+r*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=b*T,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*T,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*T,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*T,t[4]=E*T,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*T,t[8]=x*T,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*T,t[12]=S*T,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=l*c,E=l*h,x=l*u,S=n.x,C=n.y,T=n.z;return s[0]=(1-(_+p))*S,s[1]=(f+x)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(d+p))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(g+E)*T,s[9]=(m-b)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Cn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Cn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Cn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(a===Cn)g=(o+r)*u,_=-2*u;else if(a===yr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new I,on=new Qt,gd=new I(0,0,0),vd=new I(1,1,1),zn=new I,Us=new I,$e=new I,_l=new Qt,yl=new Zi;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _l.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_l,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xd=0;const Ml=new I,Mi=new Zi,Sn=new Qt,Ns=new I,ss=new I,_d=new I,yd=new Zi,bl=new I(1,0,0),Sl=new I(0,1,0),wl=new I(0,0,1),El={type:"added"},Md={type:"removed"},bi={type:"childadded",child:null},Xr={type:"childremoved",child:null};class ge extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new I,e=new gn,n=new Zi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ft}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(Sl,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,e){return Ml.copy(t).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(Sl,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ss,Ns,this.up):Sn.lookAt(Ns,ss,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(El),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(El),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new I,wn=new I,qr=new I,En=new I,Si=new I,wi=new I,Tl=new I,Yr=new I,$r=new I,Kr=new I,jr=new re,Zr=new re,Jr=new re;class ln{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),wn.subVectors(n,e),qr.subVectors(t,e);const o=an.dot(an),a=an.dot(wn),l=an.dot(qr),c=wn.dot(wn),h=wn.dot(qr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return jr.setScalar(0),Zr.setScalar(0),Jr.setScalar(0),jr.fromBufferAttribute(t,e),Zr.fromBufferAttribute(t,n),Jr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jr,r.x),o.addScaledVector(Zr,r.y),o.addScaledVector(Jr,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),wn.subVectors(t,e),an.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Si.subVectors(s,n),wi.subVectors(r,n),Yr.subVectors(t,n);const l=Si.dot(Yr),c=wi.dot(Yr);if(l<=0&&c<=0)return e.copy(n);$r.subVectors(t,s);const h=Si.dot($r),u=wi.dot($r);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Si,o);Kr.subVectors(t,r);const f=Si.dot(Kr),g=wi.dot(Kr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(wi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Tl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Tl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Si,o).addScaledVector(wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Ua(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qr(o,r,t+1/3),this.g=Qr(o,r,t),this.b=Qr(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return $t.fromWorkingColorSpace(De.copy(this),t),Math.round(be(De.r*255,0,255))*65536+Math.round(be(De.g*255,0,255))*256+Math.round(be(De.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Te){$t.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Fs);const n=ms(Bn.h,Fs.h,e),s=ms(Bn.s,Fs.s,e),r=ms(Bn.l,Fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ht;Ht.NAMES=_h;let bd=0;class vn extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ji(),this.name="",this.blending=Oi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Po,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ze extends vn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new I,Os=new st;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),t}}class yh extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mh extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sd=0;const en=new Qt,to=new ge,Ei=new I,Ke=new di,rs=new di,Me=new I;class Ee extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ph(t)?Mh:yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return to.lookAt(t),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ke.min,rs.min),Ke.expandByPoint(Me),Me.addVectors(Ke.max,rs.max),Ke.expandByPoint(Me)):(Ke.expandByPoint(rs.min),Ke.expandByPoint(rs.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(t,c),Me.add(Ei)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new I,l[R]=new I;const c=new I,h=new I,u=new I,d=new st,f=new st,g=new st,_=new I,m=new I;function p(R,y,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const v=1/(f.x*g.y-g.x*f.y);isFinite(v)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(v),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(v),a[R].add(_),a[y].add(_),a[M].add(_),l[R].add(m),l[y].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,y=b.length;R<y;++R){const M=b[R],v=M.start,P=M.count;for(let L=v,k=v+P;L<k;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const E=new I,x=new I,S=new I,C=new I;function T(R){S.fromBufferAttribute(s,R),C.copy(S);const y=a[R];E.copy(y),E.sub(S.multiplyScalar(S.dot(y))).normalize(),x.crossVectors(C,y);const v=x.dot(l[R])<0?-1:1;o.setXYZW(R,E.x,E.y,E.z,v)}for(let R=0,y=b.length;R<y;++R){const M=b[R],v=M.start,P=M.count;for(let L=v,k=v+P;L<k;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new Qt,Zn=new vh,zs=new Ji,Rl=new I,Bs=new I,Hs=new I,Gs=new I,eo=new I,Vs=new I,Cl=new I,Ws=new I;class J extends ge{constructor(t=new Ee,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(eo.fromBufferAttribute(u,t),o?Vs.addScaledVector(eo,h):Vs.addScaledVector(eo.sub(e),h))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(zs.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(zs,Rl)===null||Zn.origin.distanceToSquared(Rl)>(t.far-t.near)**2))&&(Al.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(Al),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,S=E;x<S;x+=3){const C=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);s=Xs(this,p,t,n,c,h,u,C,T,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=Xs(this,o,t,n,c,h,u,b,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,S=E;x<S;x+=3){const C=x,T=x+1,R=x+2;s=Xs(this,p,t,n,c,h,u,C,T,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,E=m+1,x=m+2;s=Xs(this,o,t,n,c,h,u,b,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function wd(i,t,e,n,s,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yn,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:i}}function Xs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Bs),i.getVertexPosition(l,Hs),i.getVertexPosition(c,Gs);const h=wd(i,t,e,n,Bs,Hs,Gs,Cl);if(h){const u=new I;ln.getBarycoord(Cl,Bs,Hs,Gs,u),s&&(h.uv=ln.getInterpolatedAttribute(s,a,l,c,u,new st)),r&&(h.uv1=ln.getInterpolatedAttribute(r,a,l,c,u,new st)),o&&(h.normal=ln.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};ln.getNormal(Bs,Hs,Gs,d.normal),h.face=d,h.barycoord=u}return h}class Xt extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,m,p,b,E,x,S,C,T,R,y){const M=x/T,v=S/R,P=x/2,L=S/2,k=C/2,z=T+1,G=R+1;let Y=0,B=0;const Q=new I;for(let at=0;at<G;at++){const ct=at*v-L;for(let _t=0;_t<z;_t++){const kt=_t*M-P;Q[_]=kt*b,Q[m]=ct*E,Q[p]=k,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(_t/T),u.push(1-at/R),Y+=1}}for(let at=0;at<R;at++)for(let ct=0;ct<T;ct++){const _t=d+ct+z*at,kt=d+ct+z*(at+1),q=d+(ct+1)+z*(at+1),tt=d+(ct+1)+z*at;l.push(_t,kt,tt),l.push(kt,q,tt),B+=6}a.addGroup(f,B,y),f+=B,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ed(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Pn={clone:qi,merge:Oe};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xe extends vn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sh extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new I,Pl=new st,Dl=new st;class We extends Sh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,Pl,Dl),e.subVectors(Dl,Pl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ai=1;class Rd extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(Ti,Ai,t,e);s.layers=this.layers,this.add(s);const r=new We(Ti,Ai,t,e);r.layers=this.layers,this.add(r);const o=new We(Ti,Ai,t,e);o.layers=this.layers,this.add(o);const a=new We(Ti,Ai,t,e);a.layers=this.layers,this.add(a);const l=new We(Ti,Ai,t,e);l.layers=this.layers,this.add(l);const c=new We(Ti,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wh extends ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cd extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Be});r.uniforms.tEquirect.value=e;const o=new J(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=mn),new Rd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const no=new I,Pd=new I,Dd=new Ft;class ni{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=no.subVectors(n,e).cross(Pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(no),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dd.getNormalMatrix(t),s=this.coplanarPoint(no).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Ji,qs=new I;class Na{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],E=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+b).normalize(),n[3].setComponents(l-o,d-h,m-g,x-b).normalize(),n[4].setComponents(l-a,d-u,m-_,x-E).normalize(),e===Cn)n[5].setComponents(l+a,d+u,m+_,x+E).normalize();else if(e===yr)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qs.x=s.normal.x>0?t.max.x:t.min.x,qs.y=s.normal.y>0?t.max.y:t.min.y,qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ld(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class we extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-o;for(let E=0;E<c;E++){const x=E*u-r;g.push(x,-b,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const E=b+c*p,x=b+c*(p+1),S=b+1+c*(p+1),C=b+1+c*p;f.push(E,x,C),f.push(x,S,C)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.widthSegments,t.heightSegments)}}var Id=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
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
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,Lf=`struct PhysicalMaterial {
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
}`,If=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xp=`float getShadowMask() {
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
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,em=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,om=`#define TOON
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
}`,am=`uniform float size;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Id,alphahash_pars_fragment:kd,alphamap_fragment:Ud,alphamap_pars_fragment:Nd,alphatest_fragment:Fd,alphatest_pars_fragment:Od,aomap_fragment:zd,aomap_pars_fragment:Bd,batching_pars_vertex:Hd,batching_vertex:Gd,begin_vertex:Vd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Tf,envmap_vertex:gf,fog_vertex:vf,fog_pars_vertex:xf,fog_fragment:_f,fog_pars_fragment:yf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:bf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:wf,lights_pars_begin:Ef,lights_toon_fragment:Af,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Df,lights_physical_pars_fragment:Lf,lights_fragment_begin:If,lights_fragment_maps:kf,lights_fragment_end:Uf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:zf,map_fragment:Bf,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:$f,morphtarget_pars_vertex:Kf,morphtarget_vertex:jf,normal_fragment_begin:Zf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:lp,premultiplied_alpha_fragment:cp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:dp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:vp,shadowmask_pars_fragment:xp,skinbase_vertex:_p,skinning_pars_vertex:yp,skinning_vertex:Mp,skinnormal_vertex:bp,specularmap_fragment:Sp,specularmap_pars_fragment:wp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Tp,transmission_fragment:Ap,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Pp,uv_vertex:Dp,worldpos_vertex:Lp,background_vert:Ip,background_frag:kp,backgroundCube_vert:Up,backgroundCube_frag:Np,cube_vert:Fp,cube_frag:Op,depth_vert:zp,depth_frag:Bp,distanceRGBA_vert:Hp,distanceRGBA_frag:Gp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:$p,meshlambert_vert:Kp,meshlambert_frag:jp,meshmatcap_vert:Zp,meshmatcap_frag:Jp,meshnormal_vert:Qp,meshnormal_frag:tm,meshphong_vert:em,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:om,points_vert:am,points_frag:lm,shadow_vert:cm,shadow_frag:hm,sprite_vert:um,sprite_frag:dm},ht={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},pn={basic:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Oe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Oe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Oe([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Oe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Oe([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Oe([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Oe([ht.common,ht.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Oe([ht.lights,ht.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};pn.physical={uniforms:Oe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Ys={r:0,b:0,g:0},Qn=new gn,fm=new Qt;function pm(i,t,e,n,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function _(b){let E=!1;const x=g(b);x===null?p(a,l):x&&x.isColor&&(p(x,1),E=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===Er)?(h===void 0&&(h=new J(new Xt(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:qi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qn.copy(E.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Qn)),h.material.toneMapped=$t.getTransfer(x.colorSpace)!==se,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new J(new we(2,2),new xe({name:"BackgroundMaterial",uniforms:qi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=$t.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,E){b.getRGB(Ys,bh(i)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m}}function mm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,v,P,L,k){let z=!1;const G=u(L,P,v);r!==G&&(r=G,c(r.object)),z=f(M,L,P,k),z&&g(M,L,P,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(M,v,P,L),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,v,P){const L=P.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let z=k[v.id];z===void 0&&(z={},k[v.id]=z);let G=z[L];return G===void 0&&(G=d(l()),z[L]=G),G}function d(M){const v=[],P=[],L=[];for(let k=0;k<e;k++)v[k]=0,P[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:P,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,v,P,L){const k=r.attributes,z=v.attributes;let G=0;const Y=P.getAttributes();for(const B in Y)if(Y[B].location>=0){const at=k[B];let ct=z[B];if(ct===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),at===void 0||at.attribute!==ct||ct&&at.data!==ct.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function g(M,v,P,L){const k={},z=v.attributes;let G=0;const Y=P.getAttributes();for(const B in Y)if(Y[B].location>=0){let at=z[B];at===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const ct={};ct.attribute=at,at&&at.data&&(ct.data=at.data),k[B]=ct,G++}r.attributes=k,r.attributesNum=G,r.index=L}function _(){const M=r.newAttributes;for(let v=0,P=M.length;v<P;v++)M[v]=0}function m(M){p(M,0)}function p(M,v){const P=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;P[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),k[M]!==v&&(i.vertexAttribDivisor(M,v),k[M]=v)}function b(){const M=r.newAttributes,v=r.enabledAttributes;for(let P=0,L=v.length;P<L;P++)v[P]!==M[P]&&(i.disableVertexAttribArray(P),v[P]=0)}function E(M,v,P,L,k,z,G){G===!0?i.vertexAttribIPointer(M,v,P,k,z):i.vertexAttribPointer(M,v,P,L,k,z)}function x(M,v,P,L){_();const k=L.attributes,z=P.getAttributes(),G=v.defaultAttributeValues;for(const Y in z){const B=z[Y];if(B.location>=0){let Q=k[Y];if(Q===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const at=Q.normalized,ct=Q.itemSize,_t=t.get(Q);if(_t===void 0)continue;const kt=_t.buffer,q=_t.type,tt=_t.bytesPerElement,vt=q===i.INT||q===i.UNSIGNED_INT||Q.gpuType===Ra;if(Q.isInterleavedBufferAttribute){const rt=Q.data,St=rt.stride,Rt=Q.offset;if(rt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<B.locationSize;Dt++)p(B.location+Dt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Dt=0;Dt<B.locationSize;Dt++)m(B.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Dt=0;Dt<B.locationSize;Dt++)E(B.location+Dt,ct/B.locationSize,q,at,St*tt,(Rt+ct/B.locationSize*Dt)*tt,vt)}else{if(Q.isInstancedBufferAttribute){for(let rt=0;rt<B.locationSize;rt++)p(B.location+rt,Q.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let rt=0;rt<B.locationSize;rt++)m(B.location+rt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let rt=0;rt<B.locationSize;rt++)E(B.location+rt,ct/B.locationSize,q,at,ct*tt,ct/B.locationSize*rt*tt,vt)}}else if(G!==void 0){const at=G[Y];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(B.location,at);break;case 3:i.vertexAttrib3fv(B.location,at);break;case 4:i.vertexAttrib4fv(B.location,at);break;default:i.vertexAttrib1fv(B.location,at)}}}}b()}function S(){R();for(const M in n){const v=n[M];for(const P in v){const L=v[P];for(const k in L)h(L[k].object),delete L[k];delete v[P]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const v=n[M.id];for(const P in v){const L=v[P];for(const k in L)h(L[k].object),delete L[k];delete v[P]}delete n[M.id]}function T(M){for(const v in n){const P=n[v];if(P[M.id]===void 0)continue;const L=P[M.id];for(const k in L)h(L[k].object),delete L[k];delete P[M.id]}}function R(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function gm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==In&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hn&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:S,maxSamples:C}}function xm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ni,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,E=b*4;let x=p.clippingState||null;l.value=x,x=h(g,d,E,f);for(let S=0;S!==E;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==_;++E,x+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _m(i){let t=new WeakMap;function e(o,a){return a===Oo?o.mapping=Gi:a===zo&&(o.mapping=Vi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oo||a===zo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Fa extends Sh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,Ll=[.125,.215,.35,.446,.526,.582],si=20,io=new Fa,Il=new Ht;let so=null,ro=0,oo=0,ao=!1;const ii=(1+Math.sqrt(5))/2,Ri=1/ii,kl=[new I(-ii,Ri,0),new I(ii,Ri,0),new I(-Ri,0,ii),new I(Ri,0,ii),new I(0,ii,-Ri),new I(0,ii,Ri),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ul{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(so,ro,oo),this._renderer.xr.enabled=ao,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:dn,format:un,colorSpace:$i,depthBuffer:!1},s=Nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(r)),this._blurMaterial=Mm(r,t,e)}return s}_compileMaterial(t){const e=new J(this._lodPlanes[0],t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,s){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Il),h.toneMapping=Dn,h.autoClear=!1;const f=new ze({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new J(new Xt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Il),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;$s(s,b*E,p>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gi||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new J(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;$s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kl[(s-r-1)%kl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new J(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*si-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const p=[];let b=0;for(let T=0;T<si;++T){const R=T/_,y=Math.exp(-R*R/2);p.push(y),T===0?b+=y:T<m&&(b+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const x=this._sizeLods[s],S=3*x*(s>E-Ui?s-E+Ui:0),C=4*(this._cubeSize-x);$s(e,S,C,3*x,2*x),l.setRenderTarget(e),l.render(u,io)}}function ym(i){const t=[],e=[],n=[];let s=i;const r=i-Ui+1+Ll.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ui?l=Ll[o-i+Ui-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),E=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const T=C%3*2/3-1,R=C>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(y,_*g*C),E.set(d,m*g*C);const M=[C,C,C,C,C,C];x.set(M,p*g*C)}const S=new Ee;S.setAttribute("position",new qe(b,_)),S.setAttribute("uv",new qe(E,m)),S.setAttribute("faceIndex",new qe(x,p)),t.push(S),s>Ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nl(i,t,e){const n=new Qe(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mm(i,t,e){const n=new Float32Array(si),s=new I(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Be,depthTest:!1,depthWrite:!1})}function Fl(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Be,depthTest:!1,depthWrite:!1})}function Ol(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Be,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function bm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oo||l===zo,h=l===Gi||l===Vi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ul(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ul(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Sm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let E=0,x=b.length;E<x;E+=3){const S=b[E+0],C=b[E+1],T=b[E+2];d.push(S,C,C,T,T,S)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,x=b.length/3-1;E<x;E+=3){const S=E+0,C=E+1,T=E+2;d.push(S,C,C,T,T,S)}}else return;const m=new(ph(d)?Mh:yh)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Em(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Tm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Am(i,t,e){const n=new WeakMap,s=new re;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let S=a.attributes.position.count*x,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*C*4*u),R=new gh(T,S,C,u);R.type=hn,R.needsUpdate=!0;const y=x*4;for(let v=0;v<u;v++){const P=p[v],L=b[v],k=E[v],z=S*C*4*v;for(let G=0;G<P.count;G++){const Y=G*y;g===!0&&(s.fromBufferAttribute(P,G),T[z+Y+0]=s.x,T[z+Y+1]=s.y,T[z+Y+2]=s.z,T[z+Y+3]=0),_===!0&&(s.fromBufferAttribute(L,G),T[z+Y+4]=s.x,T[z+Y+5]=s.y,T[z+Y+6]=s.z,T[z+Y+7]=0),m===!0&&(s.fromBufferAttribute(k,G),T[z+Y+8]=s.x,T[z+Y+9]=s.y,T[z+Y+10]=s.z,T[z+Y+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new st(S,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class za extends ke{constructor(t,e,n,s,r,o,a,l,c,h=zi){if(h!==zi&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=li),n===void 0&&h===hi&&(n=ci),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Th=new ke,zl=new za(1,1),Ah=new gh,Rh=new pd,Ch=new wh,Bl=[],Hl=[],Gl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function Qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Bl[s];if(r===void 0&&(r=new Float32Array(s),Bl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=Hl[t];e===void 0&&(e=new Int32Array(t),Hl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),ye(e,n)}}function km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Vl.set(n),i.uniformMatrix3fv(this.addr,!1,Vl),ye(e,n)}}function Um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Gl.set(n),i.uniformMatrix4fv(this.addr,!1,Gl),ye(e,n)}}function Nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=fh,r=zl):r=Th,e.setTexture2D(t||r,s)}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rh,s)}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ch,s)}function Ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ah,s)}function $m(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Dm;case 35666:return Lm;case 35674:return Im;case 35675:return km;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return zm;case 5125:return Bm;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}function Km(i,t){i.uniform1fv(this.addr,t)}function jm(i,t){const e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Zm(i,t){const e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Jm(i,t){const e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function Qm(i,t){const e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t0(i,t){const e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e0(i,t){const e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n0(i,t){i.uniform1iv(this.addr,t)}function i0(i,t){i.uniform2iv(this.addr,t)}function s0(i,t){i.uniform3iv(this.addr,t)}function r0(i,t){i.uniform4iv(this.addr,t)}function o0(i,t){i.uniform1uiv(this.addr,t)}function a0(i,t){i.uniform2uiv(this.addr,t)}function l0(i,t){i.uniform3uiv(this.addr,t)}function c0(i,t){i.uniform4uiv(this.addr,t)}function h0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Th,r[o])}function u0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rh,r[o])}function d0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ch,r[o])}function f0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ah,r[o])}function p0(i){switch(i){case 5126:return Km;case 35664:return jm;case 35665:return Zm;case 35666:return Jm;case 35674:return Qm;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return o0;case 36294:return a0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}class m0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$m(e.type)}}class g0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p0(e.type)}}class v0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Xl(i,t){i.seq.push(t),i.map[t.id]=t}function x0(i,t,e){const n=i.name,s=n.length;for(lo.lastIndex=0;;){const r=lo.exec(n),o=lo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xl(e,c===void 0?new m0(a,i,t):new g0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new v0(a),Xl(e,u)),e=u}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);x0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ql(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _0=37297;let y0=0;function M0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Yl=new Ft;function b0(i){$t._getMatrix(Yl,$t.workingColorSpace,i);const t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ar:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $l(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+M0(i.getShaderSource(t),o)}else return s}function S0(i,t){const e=b0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function w0(i,t){let e;switch(t){case Zc:e="Linear";break;case Jc:e="Reinhard";break;case Qc:e="Cineon";break;case th:e="ACESFilmic";break;case eh:e="AgX";break;case nh:e="Neutral";break;case Du:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ks=new I;function E0(){$t.getLuminanceCoefficients(Ks);const i=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function A0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fs(i){return i!==""}function Kl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(i){return i.replace(C0,D0)}const P0=new Map;function D0(i,t){let e=zt[t];if(e===void 0){const n=P0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fa(e)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(i){return i.replace(L0,I0)}function I0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function k0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function U0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Vi:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function F0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jc:t="ENVMAP_BLENDING_MULTIPLY";break;case Cu:t="ENVMAP_BLENDING_MIX";break;case Pu:t="ENVMAP_BLENDING_ADD";break}return t}function O0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=k0(e),c=U0(e),h=N0(e),u=F0(e),d=O0(e),f=T0(e),g=A0(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(m=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,S0("linearToOutputTexel",e.outputColorSpace),E0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),o=fa(o),o=Kl(o,e),o=jl(o,e),a=fa(a),a=Kl(a,e),a=jl(a,e),o=Zl(o),a=Zl(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+o,x=b+p+a,S=ql(s,s.VERTEX_SHADER,E),C=ql(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(v){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(S).trim(),k=s.getShaderInfoLog(C).trim();let z=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,C);else{const Y=$l(s,S,"vertex"),B=$l(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+P+`
`+Y+`
`+B)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||k==="")&&(G=!1);G&&(v.diagnostics={runnable:z,programLog:P,vertexShader:{log:L,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(S),s.deleteShader(C),R=new vr(s,_),y=R0(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,_0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=C,this}let B0=0;class H0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new G0(t),e.set(t,n)),n}}class G0{constructor(t){this.id=B0++,this.code=t,this.usedTimes=0}}function V0(i,t,e,n,s,r,o){const a=new xh,l=new H0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,v,P,L){const k=P.fog,z=L.geometry,G=y.isMeshStandardMaterial?P.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),B=Y&&Y.mapping===Er?Y.image.height:null,Q=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ct=at!==void 0?at.length:0;let _t=0;z.morphAttributes.position!==void 0&&(_t=1),z.morphAttributes.normal!==void 0&&(_t=2),z.morphAttributes.color!==void 0&&(_t=3);let kt,q,tt,vt;if(Q){const ie=pn[Q];kt=ie.vertexShader,q=ie.fragmentShader}else kt=y.vertexShader,q=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),vt=l.getFragmentShaderID(y);const rt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Rt=L.isInstancedMesh===!0,Dt=L.isBatchedMesh===!0,ae=!!y.map,qt=!!y.matcap,ce=!!Y,N=!!y.aoMap,Re=!!y.lightMap,Vt=!!y.bumpMap,Wt=!!y.normalMap,Tt=!!y.displacementMap,ne=!!y.emissiveMap,Et=!!y.metalnessMap,D=!!y.roughnessMap,w=y.anisotropy>0,H=y.clearcoat>0,K=y.dispersion>0,Z=y.iridescence>0,$=y.sheen>0,xt=y.transmission>0,lt=w&&!!y.anisotropyMap,ut=H&&!!y.clearcoatMap,Gt=H&&!!y.clearcoatNormalMap,et=H&&!!y.clearcoatRoughnessMap,mt=Z&&!!y.iridescenceMap,Ct=Z&&!!y.iridescenceThicknessMap,Pt=$&&!!y.sheenColorMap,gt=$&&!!y.sheenRoughnessMap,Yt=!!y.specularMap,Lt=!!y.specularColorMap,jt=!!y.specularIntensityMap,U=xt&&!!y.transmissionMap,ot=xt&&!!y.thicknessMap,X=!!y.gradientMap,j=!!y.alphaMap,pt=y.alphaTest>0,dt=!!y.alphaHash,Ut=!!y.extensions;let fe=Dn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(fe=i.toneMapping);const Ce={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:kt,fragmentShader:q,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&L._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&L.instanceColor!==null,instancingMorph:Rt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:$i,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:qt,envMap:ce,envMapMode:ce&&Y.mapping,envMapCubeUVHeight:B,aoMap:N,lightMap:Re,bumpMap:Vt,normalMap:Wt,displacementMap:d&&Tt,emissiveMap:ne,normalMapObjectSpace:Wt&&y.normalMapType===Uu,normalMapTangentSpace:Wt&&y.normalMapType===ka,metalnessMap:Et,roughnessMap:D,anisotropy:w,anisotropyMap:lt,clearcoat:H,clearcoatMap:ut,clearcoatNormalMap:Gt,clearcoatRoughnessMap:et,dispersion:K,iridescence:Z,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:Yt,specularColorMap:Lt,specularIntensityMap:jt,transmission:xt,transmissionMap:U,thicknessMap:ot,gradientMap:X,opaque:y.transparent===!1&&y.blending===Oi&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:pt,alphaHash:dt,combine:y.combine,mapUv:ae&&_(y.map.channel),aoMapUv:N&&_(y.aoMap.channel),lightMapUv:Re&&_(y.lightMap.channel),bumpMapUv:Vt&&_(y.bumpMap.channel),normalMapUv:Wt&&_(y.normalMap.channel),displacementMapUv:Tt&&_(y.displacementMap.channel),emissiveMapUv:ne&&_(y.emissiveMap.channel),metalnessMapUv:Et&&_(y.metalnessMap.channel),roughnessMapUv:D&&_(y.roughnessMap.channel),anisotropyMapUv:lt&&_(y.anisotropyMap.channel),clearcoatMapUv:ut&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(y.sheenRoughnessMap.channel),specularMapUv:Yt&&_(y.specularMap.channel),specularColorMapUv:Lt&&_(y.specularColorMap.channel),specularIntensityMapUv:jt&&_(y.specularIntensityMap.channel),transmissionMapUv:U&&_(y.transmissionMap.channel),thicknessMapUv:ot&&_(y.thicknessMap.channel),alphaMapUv:j&&_(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Wt||w),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(ae||j),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:_t,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===se,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&$t.getTransfer(y.emissiveMap.colorSpace)===se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Se,flipSided:y.side===Xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ut&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&y.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const v in y.defines)M.push(v),M.push(y.defines[v]);return y.isRawShaderMaterial===!1&&(b(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=g[y.type];let v;if(M){const P=pn[M];v=Pn.clone(P.uniforms)}else v=y.uniforms;return v}function S(y,M){let v;for(let P=0,L=h.length;P<L;P++){const k=h[P];if(k.cacheKey===M){v=k,++v.usedTimes;break}}return v===void 0&&(v=new z0(i,M,y,r),h.push(v)),v}function C(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:R}}function W0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function X0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ql(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||X0),n.length>1&&n.sort(d||Ql),s.length>1&&s.sort(d||Ql)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function q0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new tc,i.set(n,[o])):s>=r.length?(o=new tc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Y0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ht};break;case"SpotLight":e={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function $0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let K0=0;function j0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Z0(i){const t=new Y0,e=$0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new Qt,o=new Qt;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,E=0,x=0,S=0,C=0,T=0;c.sort(j0);for(let y=0,M=c.length;y<M;y++){const v=c[y],P=v.color,L=v.intensity,k=v.distance,z=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=P.r*L,u+=P.g*L,d+=P.b*L;else if(v.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(v.sh.coefficients[G],L);T++}else if(v.isDirectionalLight){const G=t.get(v);if(G.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){const Y=v.shadow,B=e.get(v);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=v.shadow.matrix,b++}n.directional[f]=G,f++}else if(v.isSpotLight){const G=t.get(v);G.position.setFromMatrixPosition(v.matrixWorld),G.color.copy(P).multiplyScalar(L),G.distance=k,G.coneCos=Math.cos(v.angle),G.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),G.decay=v.decay,n.spot[_]=G;const Y=v.shadow;if(v.map&&(n.spotLightMap[S]=v.map,S++,Y.updateMatrices(v),v.castShadow&&C++),n.spotLightMatrix[_]=Y.matrix,v.castShadow){const B=e.get(v);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=z,x++}_++}else if(v.isRectAreaLight){const G=t.get(v);G.color.copy(P).multiplyScalar(L),G.halfWidth.set(v.width*.5,0,0),G.halfHeight.set(0,v.height*.5,0),n.rectArea[m]=G,m++}else if(v.isPointLight){const G=t.get(v);if(G.color.copy(v.color).multiplyScalar(v.intensity),G.distance=v.distance,G.decay=v.decay,v.castShadow){const Y=v.shadow,B=e.get(v);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=v.shadow.matrix,E++}n.point[g]=G,g++}else if(v.isHemisphereLight){const G=t.get(v);G.skyColor.copy(v.color).multiplyScalar(L),G.groundColor.copy(v.groundColor).multiplyScalar(L),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==E||R.numSpotShadows!==x||R.numSpotMaps!==S||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=E,R.numSpotShadows=x,R.numSpotMaps=S,R.numLightProbes=T,n.version=K0++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const E=c[p];if(E.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(E.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ec(i){const t=new Z0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ec(i),t.set(s,[a])):r>=o.length?(a=new ec(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Q0 extends vn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends vn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
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
}`;function ig(i,t,e){let n=new Na;const s=new st,r=new st,o=new re,a=new Q0({depthPacking:ku}),l=new tg,c={},h=e.maxTextureSize,u={[Yn]:Xe,[Xe]:Yn,[Se]:Se},d=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let p=this.type;this.render=function(C,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Be),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=p!==Tn&&this.type===Tn,k=p===Tn&&this.type!==Tn;for(let z=0,G=C.length;z<G;z++){const Y=C[z],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Q=B.getFrameExtents();if(s.multiply(Q),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y)),B.map===null||L===!0||k===!0){const ct=this.type!==Tn?{minFilter:He,magFilter:He}:{};B.map!==null&&B.map.dispose(),B.map=new Qe(s.x,s.y,ct),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const at=B.getViewportCount();for(let ct=0;ct<at;ct++){const _t=B.getViewport(ct);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),P.viewport(o),B.updateMatrices(Y,ct),n=B.getFrustum(),x(T,R,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Tn&&b(B,R),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,v)};function b(C,T){const R=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qe(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,R,f,_,null)}function E(C,T,R,y){let M=null;const v=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(v!==void 0)M=v;else if(M=R.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=M.uuid,L=T.uuid;let k=c[P];k===void 0&&(k={},c[P]=k);let z=k[L];z===void 0&&(z=M.clone(),k[L]=z,T.addEventListener("dispose",S)),M=z}if(M.visible=T.visible,M.wireframe=T.wireframe,y===Tn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=i.properties.get(M);P.light=R}return M}function x(C,T,R,y,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Tn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const L=t.update(C),k=C.material;if(Array.isArray(k)){const z=L.groups;for(let G=0,Y=z.length;G<Y;G++){const B=z[G],Q=k[B.materialIndex];if(Q&&Q.visible){const at=E(C,Q,y,M);C.onBeforeShadow(i,C,T,R,L,at,B),i.renderBufferDirect(R,null,L,at,C,B),C.onAfterShadow(i,C,T,R,L,at,B)}}}else if(k.visible){const z=E(C,k,y,M);C.onBeforeShadow(i,C,T,R,L,z,null),i.renderBufferDirect(R,null,L,z,C,null),C.onAfterShadow(i,C,T,R,L,z,null)}}const P=C.children;for(let L=0,k=P.length;L<k;L++)x(P[L],T,R,y,M)}function S(C){C.target.removeEventListener("dispose",S);for(const R in c){const y=c[R],M=C.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const sg={[Do]:Lo,[Io]:No,[ko]:Fo,[Hi]:Uo,[Lo]:Do,[No]:Io,[Fo]:ko,[Uo]:Hi};function rg(i,t){function e(){let U=!1;const ot=new re;let X=null;const j=new re(0,0,0,0);return{setMask:function(pt){X!==pt&&!U&&(i.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){U=pt},setClear:function(pt,dt,Ut,fe,Ce){Ce===!0&&(pt*=fe,dt*=fe,Ut*=fe),ot.set(pt,dt,Ut,fe),j.equals(ot)===!1&&(i.clearColor(pt,dt,Ut,fe),j.copy(ot))},reset:function(){U=!1,X=null,j.set(-1,0,0,0)}}}function n(){let U=!1,ot=!1,X=null,j=null,pt=null;return{setReversed:function(dt){if(ot!==dt){const Ut=t.get("EXT_clip_control");ot?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const fe=pt;pt=null,this.setClear(fe)}ot=dt},getReversed:function(){return ot},setTest:function(dt){dt?rt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(dt){X!==dt&&!U&&(i.depthMask(dt),X=dt)},setFunc:function(dt){if(ot&&(dt=sg[dt]),j!==dt){switch(dt){case Do:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case Io:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Uo:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=dt}},setLocked:function(dt){U=dt},setClear:function(dt){pt!==dt&&(ot&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){U=!1,X=null,j=null,pt=null,ot=!1}}}function s(){let U=!1,ot=null,X=null,j=null,pt=null,dt=null,Ut=null,fe=null,Ce=null;return{setTest:function(ie){U||(ie?rt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ie){ot!==ie&&!U&&(i.stencilMask(ie),ot=ie)},setFunc:function(ie,nn,_n){(X!==ie||j!==nn||pt!==_n)&&(i.stencilFunc(ie,nn,_n),X=ie,j=nn,pt=_n)},setOp:function(ie,nn,_n){(dt!==ie||Ut!==nn||fe!==_n)&&(i.stencilOp(ie,nn,_n),dt=ie,Ut=nn,fe=_n)},setLocked:function(ie){U=ie},setClear:function(ie){Ce!==ie&&(i.clearStencil(ie),Ce=ie)},reset:function(){U=!1,ot=null,X=null,j=null,pt=null,dt=null,Ut=null,fe=null,Ce=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,E=null,x=null,S=null,C=null,T=new Ht(0,0,0),R=0,y=!1,M=null,v=null,P=null,L=null,k=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=Y>=2);let Q=null,at={};const ct=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),kt=new re().fromArray(ct),q=new re().fromArray(_t);function tt(U,ot,X,j){const pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(U,dt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<X;Ut++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ot+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}const vt={};vt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Hi),Vt(!1),Wt(rl),rt(i.CULL_FACE),N(Be);function rt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function St(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Rt(U,ot){return u[U]!==ot?(i.bindFramebuffer(U,ot),u[U]=ot,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Dt(U,ot){let X=f,j=!1;if(U){X=d.get(ot),X===void 0&&(X=[],d.set(ot,X));const pt=U.textures;if(X.length!==pt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ut=pt.length;dt<Ut;dt++)X[dt]=i.COLOR_ATTACHMENT0+dt;X.length=pt.length,j=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,j=!0);j&&i.drawBuffers(X)}function ae(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const qt={[An]:i.FUNC_ADD,[mu]:i.FUNC_SUBTRACT,[gu]:i.FUNC_REVERSE_SUBTRACT};qt[vu]=i.MIN,qt[xu]=i.MAX;const ce={[Ro]:i.ZERO,[_u]:i.ONE,[yu]:i.SRC_COLOR,[Co]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Kc]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Mu]:i.ONE_MINUS_SRC_COLOR,[Po]:i.ONE_MINUS_SRC_ALPHA,[Su]:i.ONE_MINUS_DST_COLOR,[bu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[Tu]:i.ONE_MINUS_CONSTANT_COLOR,[Au]:i.CONSTANT_ALPHA,[Ru]:i.ONE_MINUS_CONSTANT_ALPHA};function N(U,ot,X,j,pt,dt,Ut,fe,Ce,ie){if(U===Be){_===!0&&(St(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),U!==Yc){if(U!==m||ie!==y){if((p!==An||x!==An)&&(i.blendEquation(i.FUNC_ADD),p=An,x=An),ie)switch(U){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFunc(i.ONE,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,E=null,S=null,C=null,T.set(0,0,0),R=0,m=U,y=ie}return}pt=pt||ot,dt=dt||X,Ut=Ut||j,(ot!==p||pt!==x)&&(i.blendEquationSeparate(qt[ot],qt[pt]),p=ot,x=pt),(X!==b||j!==E||dt!==S||Ut!==C)&&(i.blendFuncSeparate(ce[X],ce[j],ce[dt],ce[Ut]),b=X,E=j,S=dt,C=Ut),(fe.equals(T)===!1||Ce!==R)&&(i.blendColor(fe.r,fe.g,fe.b,Ce),T.copy(fe),R=Ce),m=U,y=!1}function Re(U,ot){U.side===Se?St(i.CULL_FACE):rt(i.CULL_FACE);let X=U.side===Xe;ot&&(X=!X),Vt(X),U.blending===Oi&&U.transparent===!1?N(Be):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Wt(U){U!==fu?(rt(i.CULL_FACE),U!==v&&(U===rl?i.cullFace(i.BACK):U===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),v=U}function Tt(U){U!==P&&(G&&i.lineWidth(U),P=U)}function ne(U,ot,X){U?(rt(i.POLYGON_OFFSET_FILL),(L!==ot||k!==X)&&(i.polygonOffset(ot,X),L=ot,k=X)):St(i.POLYGON_OFFSET_FILL)}function Et(U){U?rt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function D(U){U===void 0&&(U=i.TEXTURE0+z-1),Q!==U&&(i.activeTexture(U),Q=U)}function w(U,ot,X){X===void 0&&(Q===null?X=i.TEXTURE0+z-1:X=Q);let j=at[X];j===void 0&&(j={type:void 0,texture:void 0},at[X]=j),(j.type!==U||j.texture!==ot)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(U,ot||vt[U]),j.type=U,j.texture=ot)}function H(){const U=at[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(U){kt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),kt.copy(U))}function gt(U){q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Yt(U,ot){let X=c.get(ot);X===void 0&&(X=new WeakMap,c.set(ot,X));let j=X.get(U);j===void 0&&(j=i.getUniformBlockIndex(ot,U.name),X.set(U,j))}function Lt(U,ot){const j=c.get(ot).get(U);l.get(ot)!==j&&(i.uniformBlockBinding(ot,j,U.__bindingPointIndex),l.set(ot,j))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,at={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,E=null,x=null,S=null,C=null,T=new Ht(0,0,0),R=0,y=!1,M=null,v=null,P=null,L=null,k=null,kt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:St,bindFramebuffer:Rt,drawBuffers:Dt,useProgram:ae,setBlending:N,setMaterial:Re,setFlipSided:Vt,setCullFace:Wt,setLineWidth:Tt,setPolygonOffset:ne,setScissorTest:Et,activeTexture:D,bindTexture:w,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Yt,uniformBlockBinding:Lt,texStorage2D:Gt,texStorage3D:et,texSubImage2D:$,texSubImage3D:xt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ut,scissor:Pt,viewport:gt,reset:jt}}function nc(i,t,e,n){const s=og(n);switch(e){case ah:return i*t;case ch:return i*t;case hh:return i*t*2;case Tr:return i*t/s.components*s.byteLength;case Da:return i*t/s.components*s.byteLength;case uh:return i*t*2/s.components*s.byteLength;case La:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Ia:return i*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:case Wo:return Math.max(i,16)*Math.max(t,8)/4;case Ho:case Vo:return Math.max(i,8)*Math.max(t,8)/2;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gr:case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dh:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ua:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function og(i){switch(i){case In:case sh:return{byteLength:1,components:1};case ys:case rh:case dn:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case li:case Ra:case hn:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ag(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return f?new OffscreenCanvas(D,w):Mr("canvas")}function _(D,w,H){let K=1;const Z=Et(D);if((Z.width>H||Z.height>H)&&(K=H/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(K*Z.width),xt=Math.floor(K*Z.height);u===void 0&&(u=g($,xt));const lt=w?g($,xt):u;return lt.width=$,lt.height=xt,lt.getContext("2d").drawImage(D,0,0,$,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+xt+")."),lt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,w,H,K,Z=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=w;if(w===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),w===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8)),w===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),w===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),w===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),w===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),w===i.RGBA){const xt=Z?Ar:$t.getTransfer(K);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=xt===se?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(D,w){let H;return D?w===null||w===li||w===ci?H=i.DEPTH24_STENCIL8:w===hn?H=i.DEPTH32F_STENCIL8:w===ys&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===li||w===ci?H=i.DEPTH_COMPONENT24:w===hn?H=i.DEPTH_COMPONENT32F:w===ys&&(H=i.DEPTH_COMPONENT16),H}function S(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==He&&D.minFilter!==mn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function C(D){const w=D.target;w.removeEventListener("dispose",C),R(w),w.isVideoTexture&&h.delete(w)}function T(D){const w=D.target;w.removeEventListener("dispose",T),M(w)}function R(D){const w=n.get(D);if(w.__webglInit===void 0)return;const H=D.source,K=d.get(H);if(K){const Z=K[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(D),Object.keys(K).length===0&&d.delete(H)}n.remove(D)}function y(D){const w=n.get(D);i.deleteTexture(w.__webglTexture);const H=D.source,K=d.get(H);delete K[w.__cacheKey],o.memory.textures--}function M(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let Z=0;Z<w.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)i.deleteFramebuffer(w.__webglFramebuffer[K]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=D.textures;for(let K=0,Z=H.length;K<Z;K++){const $=n.get(H[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(D)}let v=0;function P(){v=0}function L(){const D=v;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),v+=1,D}function k(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function z(D,w){const H=n.get(D);if(D.isVideoTexture&&Tt(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const K=D.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,D,w);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function G(D,w){const H=n.get(D);if(D.version>0&&H.__version!==D.version){q(H,D,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function Y(D,w){const H=n.get(D);if(D.version>0&&H.__version!==D.version){q(H,D,w);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function B(D,w){const H=n.get(D);if(D.version>0&&H.__version!==D.version){tt(H,D,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}const Q={[Wi]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},at={[He]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ct={[Nu]:i.NEVER,[Gu]:i.ALWAYS,[Fu]:i.LESS,[fh]:i.LEQUAL,[Ou]:i.EQUAL,[Hu]:i.GEQUAL,[zu]:i.GREATER,[Bu]:i.NOTEQUAL};function _t(D,w){if(w.type===hn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===mn||w.magFilter===Nr||w.magFilter===Cs||w.magFilter===oi||w.minFilter===mn||w.minFilter===Nr||w.minFilter===Cs||w.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,at[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,at[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ct[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===He||w.minFilter!==Cs&&w.minFilter!==oi||w.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function kt(D,w){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",C));const K=w.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const $=k(w);if($!==D.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[$].usedTimes++;const xt=Z[D.__cacheKey];xt!==void 0&&(Z[D.__cacheKey].usedTimes--,xt.usedTimes===0&&y(w)),D.__cacheKey=$,D.__webglTexture=Z[$].texture}return H}function q(D,w,H){let K=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=i.TEXTURE_3D);const Z=kt(D,w),$=w.source;e.bindTexture(K,D.__webglTexture,i.TEXTURE0+H);const xt=n.get($);if($.version!==xt.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const lt=$t.getPrimaries($t.workingColorSpace),ut=w.colorSpace===Rn?null:$t.getPrimaries(w.colorSpace),Gt=w.colorSpace===Rn||lt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let et=_(w.image,!1,s.maxTextureSize);et=ne(w,et);const mt=r.convert(w.format,w.colorSpace),Ct=r.convert(w.type);let Pt=E(w.internalFormat,mt,Ct,w.colorSpace,w.isVideoTexture);_t(K,w);let gt;const Yt=w.mipmaps,Lt=w.isVideoTexture!==!0,jt=xt.__version===void 0||Z===!0,U=$.dataReady,ot=S(w,et);if(w.isDepthTexture)Pt=x(w.format===hi,w.type),jt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Pt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Pt,et.width,et.height,0,mt,Ct,null));else if(w.isDataTexture)if(Yt.length>0){Lt&&jt&&e.texStorage2D(i.TEXTURE_2D,ot,Pt,Yt[0].width,Yt[0].height);for(let X=0,j=Yt.length;X<j;X++)gt=Yt[X],Lt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,X,Pt,gt.width,gt.height,0,mt,Ct,gt.data);w.generateMipmaps=!1}else Lt?(jt&&e.texStorage2D(i.TEXTURE_2D,ot,Pt,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,et.width,et.height,0,mt,Ct,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Lt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Pt,Yt[0].width,Yt[0].height,et.depth);for(let X=0,j=Yt.length;X<j;X++)if(gt=Yt[X],w.format!==un)if(mt!==null)if(Lt){if(U)if(w.layerUpdates.size>0){const pt=nc(gt.width,gt.height,w.format,w.type);for(const dt of w.layerUpdates){const Ut=gt.data.subarray(dt*pt/gt.data.BYTES_PER_ELEMENT,(dt+1)*pt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,dt,gt.width,gt.height,1,mt,Ut)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Pt,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,et.depth,mt,Ct,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Pt,gt.width,gt.height,et.depth,0,mt,Ct,gt.data)}else{Lt&&jt&&e.texStorage2D(i.TEXTURE_2D,ot,Pt,Yt[0].width,Yt[0].height);for(let X=0,j=Yt.length;X<j;X++)gt=Yt[X],w.format!==un?mt!==null?Lt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,X,Pt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(w.isDataArrayTexture)if(Lt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Pt,et.width,et.height,et.depth),U)if(w.layerUpdates.size>0){const X=nc(et.width,et.height,w.format,w.type);for(const j of w.layerUpdates){const pt=et.data.subarray(j*X/et.data.BYTES_PER_ELEMENT,(j+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,et.width,et.height,1,mt,Ct,pt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(w.isData3DTexture)Lt?(jt&&e.texStorage3D(i.TEXTURE_3D,ot,Pt,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(w.isFramebufferTexture){if(jt)if(Lt)e.texStorage2D(i.TEXTURE_2D,ot,Pt,et.width,et.height);else{let X=et.width,j=et.height;for(let pt=0;pt<ot;pt++)e.texImage2D(i.TEXTURE_2D,pt,Pt,X,j,0,mt,Ct,null),X>>=1,j>>=1}}else if(Yt.length>0){if(Lt&&jt){const X=Et(Yt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Pt,X.width,X.height)}for(let X=0,j=Yt.length;X<j;X++)gt=Yt[X],Lt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt,Ct,gt):e.texImage2D(i.TEXTURE_2D,X,Pt,mt,Ct,gt);w.generateMipmaps=!1}else if(Lt){if(jt){const X=Et(et);e.texStorage2D(i.TEXTURE_2D,ot,Pt,X.width,X.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,Pt,mt,Ct,et);m(w)&&p(K),xt.__version=$.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function tt(D,w,H){if(w.image.length!==6)return;const K=kt(D,w),Z=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+H);const $=n.get(Z);if(Z.version!==$.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const xt=$t.getPrimaries($t.workingColorSpace),lt=w.colorSpace===Rn?null:$t.getPrimaries(w.colorSpace),ut=w.colorSpace===Rn||xt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Gt=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,mt=[];for(let j=0;j<6;j++)!Gt&&!et?mt[j]=_(w.image[j],!0,s.maxCubemapSize):mt[j]=et?w.image[j].image:w.image[j],mt[j]=ne(w,mt[j]);const Ct=mt[0],Pt=r.convert(w.format,w.colorSpace),gt=r.convert(w.type),Yt=E(w.internalFormat,Pt,gt,w.colorSpace),Lt=w.isVideoTexture!==!0,jt=$.__version===void 0||K===!0,U=Z.dataReady;let ot=S(w,Ct);_t(i.TEXTURE_CUBE_MAP,w);let X;if(Gt){Lt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Yt,Ct.width,Ct.height);for(let j=0;j<6;j++){X=mt[j].mipmaps;for(let pt=0;pt<X.length;pt++){const dt=X[pt];w.format!==un?Pt!==null?Lt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,dt.width,dt.height,Pt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,Yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,dt.width,dt.height,Pt,gt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,Yt,dt.width,dt.height,0,Pt,gt,dt.data)}}}else{if(X=w.mipmaps,Lt&&jt){X.length>0&&ot++;const j=Et(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Yt,j.width,j.height)}for(let j=0;j<6;j++)if(et){Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,mt[j].width,mt[j].height,Pt,gt,mt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,mt[j].width,mt[j].height,0,Pt,gt,mt[j].data);for(let pt=0;pt<X.length;pt++){const Ut=X[pt].image[j].image;Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Ut.width,Ut.height,Pt,gt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,Yt,Ut.width,Ut.height,0,Pt,gt,Ut.data)}}else{Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,gt,mt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,Pt,gt,mt[j]);for(let pt=0;pt<X.length;pt++){const dt=X[pt];Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Pt,gt,dt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,Yt,Pt,gt,dt.image[j])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),$.__version=Z.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function vt(D,w,H,K,Z,$){const xt=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),ut=E(H.internalFormat,xt,lt,H.colorSpace),Gt=n.get(w),et=n.get(H);if(et.__renderTarget=w,!Gt.__hasExternalTextures){const mt=Math.max(1,w.width>>$),Ct=Math.max(1,w.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,ut,mt,Ct,w.depth,0,xt,lt,null):e.texImage2D(Z,$,ut,mt,Ct,0,xt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Wt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,et.__webglTexture,0,Vt(w)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,et.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(D,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){const K=w.depthTexture,Z=K&&K.isDepthTexture?K.type:null,$=x(w.stencilBuffer,Z),xt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Vt(w);Wt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,$,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,$,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,$,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,D)}else{const K=w.textures;for(let Z=0;Z<K.length;Z++){const $=K[Z],xt=r.convert($.format,$.colorSpace),lt=r.convert($.type),ut=E($.internalFormat,xt,lt,$.colorSpace),Gt=Vt(w);H&&Wt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ut,w.width,w.height):Wt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ut,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ut,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const Z=K.__webglTexture,$=Vt(w);if(w.depthTexture.format===zi)Wt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(w.depthTexture.format===hi)Wt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Rt(D){const w=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const K=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=K}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");St(w.__webglFramebuffer,D)}else if(H){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=i.createRenderbuffer(),rt(w.__webglDepthbuffer[K],D,!1);else{const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),rt(w.__webglDepthbuffer,D,!1);else{const K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(D,w,H){const K=n.get(D);w!==void 0&&vt(K.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Rt(D)}function ae(D){const w=D.texture,H=n.get(D),K=n.get(w);D.addEventListener("dispose",T);const Z=D.textures,$=D.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,o.memory.textures++),$){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let ut=0;ut<w.mipmaps.length;ut++)H.__webglFramebuffer[lt][ut]=i.createFramebuffer()}else H.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)H.__webglFramebuffer[lt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(xt)for(let lt=0,ut=Z.length;lt<ut;lt++){const Gt=n.get(Z[lt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Wt(D)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const ut=Z[lt];H.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);const Gt=r.convert(ut.format,ut.colorSpace),et=r.convert(ut.type),mt=E(ut.internalFormat,Gt,et,ut.colorSpace,D.isXRRenderTarget===!0),Ct=Vt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(H.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),_t(i.TEXTURE_CUBE_MAP,w);for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)vt(H.__webglFramebuffer[lt][ut],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else vt(H.__webglFramebuffer[lt],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,ut=Z.length;lt<ut;lt++){const Gt=Z[lt],et=n.get(Gt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),_t(i.TEXTURE_2D,Gt),vt(H.__webglFramebuffer,D,Gt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(Gt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(lt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),_t(lt,w),w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)vt(H.__webglFramebuffer[ut],D,w,i.COLOR_ATTACHMENT0,lt,ut);else vt(H.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,lt,0);m(w)&&p(lt),e.unbindTexture()}D.depthBuffer&&Rt(D)}function qt(D){const w=D.textures;for(let H=0,K=w.length;H<K;H++){const Z=w[H];if(m(Z)){const $=b(D),xt=n.get(Z).__webglTexture;e.bindTexture($,xt),p($),e.unbindTexture()}}}const ce=[],N=[];function Re(D){if(D.samples>0){if(Wt(D)===!1){const w=D.textures,H=D.width,K=D.height;let Z=i.COLOR_BUFFER_BIT;const $=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(D),lt=w.length>1;if(lt)for(let ut=0;ut<w.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<w.length;ut++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Gt=n.get(w[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,Z,i.NEAREST),l===!0&&(ce.length=0,N.length=0,ce.push(i.COLOR_ATTACHMENT0+ut),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ce.push($),N.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let ut=0;ut<w.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Gt=n.get(w[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Vt(D){return Math.min(s.maxSamples,D.samples)}function Wt(D){const w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(D){const w=o.render.frame;h.get(D)!==w&&(h.set(D,w),D.update())}function ne(D,w){const H=D.colorSpace,K=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==$i&&H!==Rn&&($t.getTransfer(H)===se?(K!==un||Z!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Et(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Dt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Wt}function lg(i,t){function e(n,s=Rn){let r;const o=$t.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.BYTE;if(n===rh)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===lh)return i.RGB;if(n===un)return i.RGBA;if(n===ch)return i.LUMINANCE;if(n===hh)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Tr)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===uh)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ho||n===Go||n===Vo||n===Wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$o||n===Ko||n===jo||n===Zo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===la||n===ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gr)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===ha||n===ua||n===da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class cg extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
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

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xe({vertexShader:ug,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new we(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends Ki{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new fg,m=e.getContextAttributes();let p=null,b=null;const E=[],x=[],S=new st;let C=null;const T=new We;T.viewport=new re;const R=new We;R.viewport=new re;const y=[T,R],M=new cg;let v=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=E[q];return tt===void 0&&(tt=new co,E[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=E[q];return tt===void 0&&(tt=new co,E[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=E[q];return tt===void 0&&(tt=new co,E[q]=tt),tt.getHandSpace()};function L(q){const tt=x.indexOf(q.inputSource);if(tt===-1)return;const vt=E[tt];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||o),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",z);for(let q=0;q<E.length;q++){const tt=x[q];tt!==null&&(x[q]=null,E[q].disconnect(tt))}v=null,P=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",k),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Qe(f.framebufferWidth,f.framebufferHeight,{format:un,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,vt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?hi:zi,vt=m.stencil?ci:li);const St={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Qe(d.textureWidth,d.textureHeight,{format:un,type:In,depthTexture:new za(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(q){for(let tt=0;tt<q.removed.length;tt++){const vt=q.removed[tt],rt=x.indexOf(vt);rt>=0&&(x[rt]=null,E[rt].disconnect(vt))}for(let tt=0;tt<q.added.length;tt++){const vt=q.added[tt];let rt=x.indexOf(vt);if(rt===-1){for(let Rt=0;Rt<E.length;Rt++)if(Rt>=x.length){x.push(vt),rt=Rt;break}else if(x[Rt]===null){x[Rt]=vt,rt=Rt;break}if(rt===-1)break}const St=E[rt];St&&St.connect(vt)}}const G=new I,Y=new I;function B(q,tt,vt){G.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(vt.matrixWorld);const rt=G.distanceTo(Y),St=tt.projectionMatrix.elements,Rt=vt.projectionMatrix.elements,Dt=St[14]/(St[10]-1),ae=St[14]/(St[10]+1),qt=(St[9]+1)/St[5],ce=(St[9]-1)/St[5],N=(St[8]-1)/St[0],Re=(Rt[8]+1)/Rt[0],Vt=Dt*N,Wt=Dt*Re,Tt=rt/(-N+Re),ne=Tt*-N;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ne),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),St[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Et=Dt+Tt,D=ae+Tt,w=Vt-ne,H=Wt+(rt-ne),K=qt*ae/D*Et,Z=ce*ae/D*Et;q.projectionMatrix.makePerspective(w,H,K,Z,Et,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,vt=q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),M.near=R.near=T.near=tt,M.far=R.far=T.far=vt,(v!==M.near||P!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),v=M.near,P=M.far),T.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const rt=q.parent,St=M.cameras;Q(M,rt);for(let Rt=0;Rt<St.length;Rt++)Q(St[Rt],rt);St.length===2?B(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),at(q,M,rt)};function at(q,tt,vt){vt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ct=null;function _t(q,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let rt=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Rt=0;Rt<vt.length;Rt++){const Dt=vt[Rt];let ae=null;if(f!==null)ae=f.getViewport(Dt);else{const ce=u.getViewSubImage(d,Dt);ae=ce.viewport,Rt===0&&(t.setRenderTargetTextures(b,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(b))}let qt=y[Rt];qt===void 0&&(qt=new We,qt.layers.enable(Rt),qt.viewport=new re,y[Rt]=qt),qt.matrix.fromArray(Dt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Dt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ae.x,ae.y,ae.width,ae.height),Rt===0&&(M.matrix.copy(qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(qt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const Rt=u.getDepthInformation(vt[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,s.renderState)}}for(let vt=0;vt<E.length;vt++){const rt=x[vt],St=E[vt];rt!==null&&St!==void 0&&St.update(rt,tt,c||o)}ct&&ct(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const kt=new Eh;kt.setAnimationLoop(_t),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}const ti=new gn,mg=new Qt;function gg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),E=b.envMap,x=b.envMapRotation;E&&(m.envMap.value=E,ti.copy(x),ti.x*=-1,ti.y*=-1,ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(ti)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const x=E.program;n.uniformBlockBinding(b,x)}function c(b,E){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));const S=E.program;n.updateUBOMapping(b,S);const C=t.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function h(b){const E=u();b.__bindingPointIndex=E;const x=i.createBuffer(),S=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=s[b.id],x=b.uniforms,S=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,T=x.length;C<T;C++){const R=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,M=R.length;y<M;y++){const v=R[y];if(f(v,C,y,S)===!0){const P=v.__offset,L=Array.isArray(v.value)?v.value:[v.value];let k=0;for(let z=0;z<L.length;z++){const G=L[z],Y=_(G);typeof G=="number"||typeof G=="boolean"?(v.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,P+k,v.__data)):G.isMatrix3?(v.__data[0]=G.elements[0],v.__data[1]=G.elements[1],v.__data[2]=G.elements[2],v.__data[3]=0,v.__data[4]=G.elements[3],v.__data[5]=G.elements[4],v.__data[6]=G.elements[5],v.__data[7]=0,v.__data[8]=G.elements[6],v.__data[9]=G.elements[7],v.__data[10]=G.elements[8],v.__data[11]=0):(G.toArray(v.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,E,x,S){const C=b.value,T=E+"_"+x;if(S[T]===void 0)return typeof C=="number"||typeof C=="boolean"?S[T]=C:S[T]=C.clone(),!0;{const R=S[T];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return S[T]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(b){const E=b.uniforms;let x=0;const S=16;for(let T=0,R=E.length;T<R;T++){const y=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,v=y.length;M<v;M++){const P=y[M],L=Array.isArray(P.value)?P.value:[P.value];for(let k=0,z=L.length;k<z;k++){const G=L[k],Y=_(G),B=x%S,Q=B%Y.boundary,at=B+Q;x+=Q,at!==0&&S-at<Y.storage&&(x+=S-at),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=Y.storage}}}const C=x%S;return C>0&&(x+=S-C),b.__size=x,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class xg{constructor(t={}){const{canvas:e=od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this.toneMapping=Dn,this.toneMappingExposure=1;const x=this;let S=!1,C=0,T=0,R=null,y=-1,M=null;const v=new re,P=new re;let L=null;const k=new Ht(0);let z=0,G=e.width,Y=e.height,B=1,Q=null,at=null;const ct=new re(0,0,G,Y),_t=new re(0,0,G,Y);let kt=!1;const q=new Na;let tt=!1,vt=!1;const rt=new Qt,St=new Qt,Rt=new I,Dt=new re,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function ce(){return R===null?B:1}let N=n;function Re(A,F){return e.getContext(A,F)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Aa}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),N===null){const F="webgl2";if(N=Re(F,A),N===null)throw Re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Vt,Wt,Tt,ne,Et,D,w,H,K,Z,$,xt,lt,ut,Gt,et,mt,Ct,Pt,gt,Yt,Lt,jt,U;function ot(){Vt=new Sm(N),Vt.init(),Lt=new lg(N,Vt),Wt=new vm(N,Vt,t,Lt),Tt=new rg(N,Vt),Wt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ne=new Tm(N),Et=new W0,D=new ag(N,Vt,Tt,Et,Wt,Lt,ne),w=new _m(x),H=new bm(x),K=new Ld(N),jt=new mm(N,K),Z=new wm(N,K,ne,jt),$=new Rm(N,Z,K,ne),Pt=new Am(N,Wt,D),et=new xm(Et),xt=new V0(x,w,H,Vt,Wt,jt,et),lt=new gg(x,Et),ut=new q0,Gt=new J0(Vt),Ct=new pm(x,w,H,Tt,$,f,l),mt=new ig(x,$,Wt),U=new vg(N,ne,Wt,Tt),gt=new gm(N,Vt,ne),Yt=new Em(N,Vt,ne),ne.programs=xt.programs,x.capabilities=Wt,x.extensions=Vt,x.properties=Et,x.renderLists=ut,x.shadowMap=mt,x.state=Tt,x.info=ne}ot();const X=new pg(x,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(G,Y,!1))},this.getSize=function(A){return A.set(G,Y)},this.setSize=function(A,F,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,Y=F,e.width=Math.floor(A*B),e.height=Math.floor(F*B),V===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(G*B,Y*B).floor()},this.setDrawingBufferSize=function(A,F,V){G=A,Y=F,B=V,e.width=Math.floor(A*V),e.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(ct)},this.setViewport=function(A,F,V,W){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,F,V,W),Tt.viewport(v.copy(ct).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,F,V,W){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,F,V,W),Tt.scissor(P.copy(_t).multiplyScalar(B).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(A){Tt.setScissorTest(kt=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){at=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(A=!0,F=!0,V=!0){let W=0;if(A){let O=!1;if(R!==null){const it=R.texture.format;O=it===Ia||it===La||it===Da}if(O){const it=R.texture.type,ft=it===In||it===li||it===ys||it===ci||it===Ca||it===Pa,yt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),It=yt.r,Nt=yt.g,bt=yt.b;ft?(g[0]=It,g[1]=Nt,g[2]=bt,g[3]=Mt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=It,_[1]=Nt,_[2]=bt,_[3]=Mt,N.clearBufferiv(N.COLOR,0,_))}else W|=N.COLOR_BUFFER_BIT}F&&(W|=N.DEPTH_BUFFER_BIT),V&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),ut.dispose(),Gt.dispose(),Et.dispose(),w.dispose(),H.dispose(),$.dispose(),jt.dispose(),U.dispose(),xt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Za),X.removeEventListener("sessionend",Ja),$n.stop()};function j(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ne.autoReset,F=mt.enabled,V=mt.autoUpdate,W=mt.needsUpdate,O=mt.type;ot(),ne.autoReset=A,mt.enabled=F,mt.autoUpdate=V,mt.needsUpdate=W,mt.type=O}function dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ut(A){const F=A.target;F.removeEventListener("dispose",Ut),fe(F)}function fe(A){Ce(A),Et.remove(A)}function Ce(A){const F=Et.get(A).programs;F!==void 0&&(F.forEach(function(V){xt.releaseProgram(V)}),A.isShaderMaterial&&xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,W,O,it){F===null&&(F=ae);const ft=O.isMesh&&O.matrixWorld.determinant()<0,yt=hu(A,F,V,W,O);Tt.setMaterial(W,ft);let Mt=V.index,It=1;if(W.wireframe===!0){if(Mt=Z.getWireframeAttribute(V),Mt===void 0)return;It=2}const Nt=V.drawRange,bt=V.attributes.position;let Zt=Nt.start*It,le=(Nt.start+Nt.count)*It;it!==null&&(Zt=Math.max(Zt,it.start*It),le=Math.min(le,(it.start+it.count)*It)),Mt!==null?(Zt=Math.max(Zt,0),le=Math.min(le,Mt.count)):bt!=null&&(Zt=Math.max(Zt,0),le=Math.min(le,bt.count));const he=le-Zt;if(he<0||he===1/0)return;jt.setup(O,W,yt,V,Mt);let Ge,te=gt;if(Mt!==null&&(Ge=K.get(Mt),te=Yt,te.setIndex(Ge)),O.isMesh)W.wireframe===!0?(Tt.setLineWidth(W.wireframeLinewidth*ce()),te.setMode(N.LINES)):te.setMode(N.TRIANGLES);else if(O.isLine){let wt=W.linewidth;wt===void 0&&(wt=1),Tt.setLineWidth(wt*ce()),O.isLineSegments?te.setMode(N.LINES):O.isLineLoop?te.setMode(N.LINE_LOOP):te.setMode(N.LINE_STRIP)}else O.isPoints?te.setMode(N.POINTS):O.isSprite&&te.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)te.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))te.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const wt=O._multiDrawStarts,yn=O._multiDrawCounts,ee=O._multiDrawCount,sn=Mt?K.get(Mt).bytesPerElement:1,pi=Et.get(W).currentProgram.getUniforms();for(let Ye=0;Ye<ee;Ye++)pi.setValue(N,"_gl_DrawID",Ye),te.render(wt[Ye]/sn,yn[Ye])}else if(O.isInstancedMesh)te.renderInstances(Zt,he,O.count);else if(V.isInstancedBufferGeometry){const wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,yn=Math.min(V.instanceCount,wt);te.renderInstances(Zt,he,yn)}else te.render(Zt,he)};function ie(A,F,V){A.transparent===!0&&A.side===Se&&A.forceSinglePass===!1?(A.side=Xe,A.needsUpdate=!0,Rs(A,F,V),A.side=Yn,A.needsUpdate=!0,Rs(A,F,V),A.side=Se):Rs(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),p=Gt.get(V),p.init(F),E.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==V&&A.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const it=O.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){const yt=it[ft];ie(yt,V,O),W.add(yt)}else ie(it,V,O),W.add(it)}),E.pop(),p=null,W},this.compileAsync=function(A,F,V=null){const W=this.compile(A,F,V);return new Promise(O=>{function it(){if(W.forEach(function(ft){Et.get(ft).currentProgram.isReady()&&W.delete(ft)}),W.size===0){O(A);return}setTimeout(it,10)}Vt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let nn=null;function _n(A){nn&&nn(A)}function Za(){$n.stop()}function Ja(){$n.start()}const $n=new Eh;$n.setAnimationLoop(_n),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(A){nn=A,X.setAnimationLoop(A),A===null?$n.stop():$n.start()},X.addEventListener("sessionstart",Za),X.addEventListener("sessionend",Ja),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,R),p=Gt.get(A,E.length),p.init(F),E.push(p),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(St),vt=this.localClippingEnabled,tt=et.init(this.clippingPlanes,vt),m=ut.get(A,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&Ur(it,F,-1/0,x.sortObjects)}Ur(A,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,at),qt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,qt&&Ct.addToRenderList(m,A),this.info.render.frame++,tt===!0&&et.beginShadows();const V=p.state.shadowsArray;mt.render(V,A,F),tt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const it=F.cameras;if(O.length>0)for(let ft=0,yt=it.length;ft<yt;ft++){const Mt=it[ft];tl(W,O,A,Mt)}qt&&Ct.render(A);for(let ft=0,yt=it.length;ft<yt;ft++){const Mt=it[ft];Qa(m,A,Mt,Mt.viewport)}}else O.length>0&&tl(W,O,A,F),qt&&Ct.render(A),Qa(m,A,F);R!==null&&(D.updateMultisampleRenderTarget(R),D.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,F),jt.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],tt===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ur(A,F,V,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){W&&Dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);const ft=$.update(A),yt=A.material;yt.visible&&m.push(A,ft,yt,V,Dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const ft=$.update(A),yt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Dt.copy(A.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Dt.copy(ft.boundingSphere.center)),Dt.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(yt)){const Mt=ft.groups;for(let It=0,Nt=Mt.length;It<Nt;It++){const bt=Mt[It],Zt=yt[bt.materialIndex];Zt&&Zt.visible&&m.push(A,ft,Zt,V,Dt.z,bt)}}else yt.visible&&m.push(A,ft,yt,V,Dt.z,null)}}const it=A.children;for(let ft=0,yt=it.length;ft<yt;ft++)Ur(it[ft],F,V,W)}function Qa(A,F,V,W){const O=A.opaque,it=A.transmissive,ft=A.transparent;p.setupLightsView(V),tt===!0&&et.setGlobalState(x.clippingPlanes,V),W&&Tt.viewport(v.copy(W)),O.length>0&&As(O,F,V),it.length>0&&As(it,F,V),ft.length>0&&As(ft,F,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function tl(A,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Qe(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?dn:In,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const it=p.state.transmissionRenderTarget[W.id],ft=W.viewport||v;it.setSize(ft.z,ft.w);const yt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(k),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),qt&&Ct.render(V);const Mt=x.toneMapping;x.toneMapping=Dn;const It=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),tt===!0&&et.setGlobalState(x.clippingPlanes,W),As(A,V,W),D.updateMultisampleRenderTarget(it),D.updateRenderTargetMipmap(it),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let bt=0,Zt=F.length;bt<Zt;bt++){const le=F[bt],he=le.object,Ge=le.geometry,te=le.material,wt=le.group;if(te.side===Se&&he.layers.test(W.layers)){const yn=te.side;te.side=Xe,te.needsUpdate=!0,el(he,V,W,Ge,te,wt),te.side=yn,te.needsUpdate=!0,Nt=!0}}Nt===!0&&(D.updateMultisampleRenderTarget(it),D.updateRenderTargetMipmap(it))}x.setRenderTarget(yt),x.setClearColor(k,z),It!==void 0&&(W.viewport=It),x.toneMapping=Mt}function As(A,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,it=A.length;O<it;O++){const ft=A[O],yt=ft.object,Mt=ft.geometry,It=W===null?ft.material:W,Nt=ft.group;yt.layers.test(V.layers)&&el(yt,F,V,Mt,It,Nt)}}function el(A,F,V,W,O,it){A.onBeforeRender(x,F,V,W,O,it),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,F,V,W,A,it),O.transparent===!0&&O.side===Se&&O.forceSinglePass===!1?(O.side=Xe,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,A,it),O.side=Yn,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,A,it),O.side=Se):x.renderBufferDirect(V,F,W,O,A,it),A.onAfterRender(x,F,V,W,O,it)}function Rs(A,F,V){F.isScene!==!0&&(F=ae);const W=Et.get(A),O=p.state.lights,it=p.state.shadowsArray,ft=O.state.version,yt=xt.getParameters(A,O.state,it,F,V),Mt=xt.getProgramCacheKey(yt);let It=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?H:w).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,It===void 0&&(A.addEventListener("dispose",Ut),It=new Map,W.programs=It);let Nt=It.get(Mt);if(Nt!==void 0){if(W.currentProgram===Nt&&W.lightsStateVersion===ft)return il(A,yt),Nt}else yt.uniforms=xt.getUniforms(A),A.onBeforeCompile(yt,x),Nt=xt.acquireProgram(yt,Mt),It.set(Mt,Nt),W.uniforms=yt.uniforms;const bt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(bt.clippingPlanes=et.uniform),il(A,yt),W.needsLights=du(A),W.lightsStateVersion=ft,W.needsLights&&(bt.ambientLightColor.value=O.state.ambient,bt.lightProbe.value=O.state.probe,bt.directionalLights.value=O.state.directional,bt.directionalLightShadows.value=O.state.directionalShadow,bt.spotLights.value=O.state.spot,bt.spotLightShadows.value=O.state.spotShadow,bt.rectAreaLights.value=O.state.rectArea,bt.ltc_1.value=O.state.rectAreaLTC1,bt.ltc_2.value=O.state.rectAreaLTC2,bt.pointLights.value=O.state.point,bt.pointLightShadows.value=O.state.pointShadow,bt.hemisphereLights.value=O.state.hemi,bt.directionalShadowMap.value=O.state.directionalShadowMap,bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,bt.spotShadowMap.value=O.state.spotShadowMap,bt.spotLightMatrix.value=O.state.spotLightMatrix,bt.spotLightMap.value=O.state.spotLightMap,bt.pointShadowMap.value=O.state.pointShadowMap,bt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Nt,W.uniformsList=null,Nt}function nl(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=vr.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function il(A,F){const V=Et.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function hu(A,F,V,W,O){F.isScene!==!0&&(F=ae),D.resetTextureUnits();const it=F.fog,ft=W.isMeshStandardMaterial?F.environment:null,yt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:$i,Mt=(W.isMeshStandardMaterial?H:w).get(W.envMap||ft),It=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Nt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),bt=!!V.morphAttributes.position,Zt=!!V.morphAttributes.normal,le=!!V.morphAttributes.color;let he=Dn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(he=x.toneMapping);const Ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Ge!==void 0?Ge.length:0,wt=Et.get(W),yn=p.state.lights;if(tt===!0&&(vt===!0||A!==M)){const tn=A===M&&W.id===y;et.setState(W,A,tn)}let ee=!1;W.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==yn.state.version||wt.outputColorSpace!==yt||O.isBatchedMesh&&wt.batching===!1||!O.isBatchedMesh&&wt.batching===!0||O.isBatchedMesh&&wt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&wt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&wt.instancing===!1||!O.isInstancedMesh&&wt.instancing===!0||O.isSkinnedMesh&&wt.skinning===!1||!O.isSkinnedMesh&&wt.skinning===!0||O.isInstancedMesh&&wt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&wt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&wt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&wt.instancingMorph===!1&&O.morphTexture!==null||wt.envMap!==Mt||W.fog===!0&&wt.fog!==it||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==et.numPlanes||wt.numIntersection!==et.numIntersection)||wt.vertexAlphas!==It||wt.vertexTangents!==Nt||wt.morphTargets!==bt||wt.morphNormals!==Zt||wt.morphColors!==le||wt.toneMapping!==he||wt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,wt.__version=W.version);let sn=wt.currentProgram;ee===!0&&(sn=Rs(W,F,O));let pi=!1,Ye=!1,ts=!1;const ue=sn.getUniforms(),fn=wt.uniforms;if(Tt.useProgram(sn.program)&&(pi=!0,Ye=!0,ts=!0),W.id!==y&&(y=W.id,Ye=!0),pi||M!==A){Tt.buffers.depth.getReversed()?(rt.copy(A.projectionMatrix),ld(rt),cd(rt),ue.setValue(N,"projectionMatrix",rt)):ue.setValue(N,"projectionMatrix",A.projectionMatrix),ue.setValue(N,"viewMatrix",A.matrixWorldInverse);const kn=ue.map.cameraPosition;kn!==void 0&&kn.setValue(N,Rt.setFromMatrixPosition(A.matrixWorld)),Wt.logarithmicDepthBuffer&&ue.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Ye=!0,ts=!0)}if(O.isSkinnedMesh){ue.setOptional(N,O,"bindMatrix"),ue.setOptional(N,O,"bindMatrixInverse");const tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ue.setValue(N,"boneTexture",tn.boneTexture,D))}O.isBatchedMesh&&(ue.setOptional(N,O,"batchingTexture"),ue.setValue(N,"batchingTexture",O._matricesTexture,D),ue.setOptional(N,O,"batchingIdTexture"),ue.setValue(N,"batchingIdTexture",O._indirectTexture,D),ue.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&ue.setValue(N,"batchingColorTexture",O._colorsTexture,D));const es=V.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&Pt.update(O,V,sn),(Ye||wt.receiveShadow!==O.receiveShadow)&&(wt.receiveShadow=O.receiveShadow,ue.setValue(N,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(fn.envMap.value=Mt,fn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(fn.envMapIntensity.value=F.environmentIntensity),Ye&&(ue.setValue(N,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&uu(fn,ts),it&&W.fog===!0&&lt.refreshFogUniforms(fn,it),lt.refreshMaterialUniforms(fn,W,B,Y,p.state.transmissionRenderTarget[A.id]),vr.upload(N,nl(wt),fn,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(vr.upload(N,nl(wt),fn,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(N,"center",O.center),ue.setValue(N,"modelViewMatrix",O.modelViewMatrix),ue.setValue(N,"normalMatrix",O.normalMatrix),ue.setValue(N,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const tn=W.uniformsGroups;for(let kn=0,Un=tn.length;kn<Un;kn++){const sl=tn[kn];U.update(sl,sn),U.bind(sl,sn)}}return sn}function uu(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function du(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,F,V){Et.get(A.texture).__webglTexture=F,Et.get(A.depthTexture).__webglTexture=V;const W=Et.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const V=Et.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,V=0){R=A,C=F,T=V;let W=!0,O=null,it=!1,ft=!1;if(A){const Mt=Et.get(A);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Mt.__hasExternalTextures)D.rebindTextures(A,Et.get(A.texture).__webglTexture,Et.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const bt=A.depthTexture;if(Mt.__boundDepthTexture!==bt){if(bt!==null&&Et.has(bt)&&(A.width!==bt.image.width||A.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Nt=Et.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[F])?O=Nt[F][V]:O=Nt[F],it=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?O=Et.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?O=Nt[V]:O=Nt,v.copy(A.viewport),P.copy(A.scissor),L=A.scissorTest}else v.copy(ct).multiplyScalar(B).floor(),P.copy(_t).multiplyScalar(B).floor(),L=kt;if(Tt.bindFramebuffer(N.FRAMEBUFFER,O)&&W&&Tt.drawBuffers(A,O),Tt.viewport(v),Tt.scissor(P),Tt.setScissorTest(L),it){const Mt=Et.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,V)}else if(ft){const Mt=Et.get(A.texture),It=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,V||0,It)}y=-1},this.readRenderTargetPixels=function(A,F,V,W,O,it,ft){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){Tt.bindFramebuffer(N.FRAMEBUFFER,yt);try{const Mt=A.texture,It=Mt.format,Nt=Mt.type;if(!Wt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&V>=0&&V<=A.height-O&&N.readPixels(F,V,W,O,Lt.convert(It),Lt.convert(Nt),it)}finally{const Mt=R!==null?Et.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(A,F,V,W,O,it,ft){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){const Mt=A.texture,It=Mt.format,Nt=Mt.type;if(!Wt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-W&&V>=0&&V<=A.height-O){Tt.bindFramebuffer(N.FRAMEBUFFER,yt);const bt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(F,V,W,O,Lt.convert(It),Lt.convert(Nt),0);const Zt=R!==null?Et.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Zt);const le=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ad(N,le,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(bt),N.deleteSync(le),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,V=0){A.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(A.image.width*W),it=Math.floor(A.image.height*W),ft=F!==null?F.x:0,yt=F!==null?F.y:0;D.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,ft,yt,O,it),Tt.unbindTexture()},this.copyTextureToTexture=function(A,F,V=null,W=null,O=0){A.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let it,ft,yt,Mt,It,Nt,bt,Zt,le;const he=A.isCompressedTexture?A.mipmaps[O]:A.image;V!==null?(it=V.max.x-V.min.x,ft=V.max.y-V.min.y,yt=V.isBox3?V.max.z-V.min.z:1,Mt=V.min.x,It=V.min.y,Nt=V.isBox3?V.min.z:0):(it=he.width,ft=he.height,yt=he.depth||1,Mt=0,It=0,Nt=0),W!==null?(bt=W.x,Zt=W.y,le=W.z):(bt=0,Zt=0,le=0);const Ge=Lt.convert(F.format),te=Lt.convert(F.type);let wt;F.isData3DTexture?(D.setTexture3D(F,0),wt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(D.setTexture2DArray(F,0),wt=N.TEXTURE_2D_ARRAY):(D.setTexture2D(F,0),wt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const yn=N.getParameter(N.UNPACK_ROW_LENGTH),ee=N.getParameter(N.UNPACK_IMAGE_HEIGHT),sn=N.getParameter(N.UNPACK_SKIP_PIXELS),pi=N.getParameter(N.UNPACK_SKIP_ROWS),Ye=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,he.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,It),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const ts=A.isDataArrayTexture||A.isData3DTexture,ue=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const fn=Et.get(A),es=Et.get(F),tn=Et.get(fn.__renderTarget),kn=Et.get(es.__renderTarget);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Un=0;Un<yt;Un++)ts&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(A).__webglTexture,O,Nt+Un),A.isDepthTexture?(ue&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(F).__webglTexture,O,le+Un),N.blitFramebuffer(Mt,It,it,ft,bt,Zt,it,ft,N.DEPTH_BUFFER_BIT,N.NEAREST)):ue?N.copyTexSubImage3D(wt,O,bt,Zt,le+Un,Mt,It,it,ft):N.copyTexSubImage2D(wt,O,bt,Zt,le+Un,Mt,It,it,ft);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ue?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(wt,O,bt,Zt,le,it,ft,yt,Ge,te,he.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(wt,O,bt,Zt,le,it,ft,yt,Ge,he.data):N.texSubImage3D(wt,O,bt,Zt,le,it,ft,yt,Ge,te,he):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,bt,Zt,it,ft,Ge,te,he.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,bt,Zt,he.width,he.height,Ge,he.data):N.texSubImage2D(N.TEXTURE_2D,O,bt,Zt,it,ft,Ge,te,he);N.pixelStorei(N.UNPACK_ROW_LENGTH,yn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ee),N.pixelStorei(N.UNPACK_SKIP_PIXELS,sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,pi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye),O===0&&F.generateMipmaps&&N.generateMipmap(wt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(A,F,V=null,W=null,O=0){return A.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,A=arguments[2],F=arguments[3],O=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,V,W,O)},this.initRenderTarget=function(A){Et.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Tt.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Tt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Ba{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new Ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _g extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ph extends ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=He,h=He,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ci=new Qt,sc=new Qt,js=[],rc=new di,yg=new Qt,os=new J,as=new Ji;class Mg extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),rc.copy(t.boundingBox).applyMatrix4(Ci),this.boundingBox.union(rc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),as.copy(t.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ci),sc.multiplyMatrices(n,Ci),os.matrixWorld=sc,os.raycast(t,js);for(let o=0,a=js.length;o<a;o++){const l=js[o];l.instanceId=r,l.object=this,e.push(l)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ph(new Float32Array(s*this.count),s,this.count,Tr,hn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ha extends vn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oc=new Qt,pa=new vh,Zs=new Ji,Js=new I;class Dh extends ge{constructor(t=new Ee,e=new Ha){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,t.ray.intersectsSphere(Zs)===!1)return;oc.copy(s).invert(),pa.copy(t.ray).applyMatrix4(oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Js.fromBufferAttribute(u,m),ac(Js,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Js.fromBufferAttribute(u,g),ac(Js,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ac(i,t,e,n,s,r,o){const a=pa.distanceSqToPoint(i);if(a<e){const l=new I;pa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Cr extends ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,l=new Qt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ga extends xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bg extends Ga{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Qs=new I,ho=new Va,uo=new Va,fo=new Va;class Lh extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Qs.subVectors(s[0],s[1]).add(s[0]),c=Qs);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ho.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),uo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),fo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ho.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),uo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),fo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ho.calc(l),uo.calc(l),fo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Sg(i,t){const e=1-i;return e*e*t}function wg(i,t){return 2*(1-i)*i*t}function Eg(i,t){return i*i*t}function gs(i,t,e,n){return Sg(i,t)+wg(i,e)+Eg(i,n)}function Tg(i,t){const e=1-i;return e*e*e*t}function Ag(i,t){const e=1-i;return 3*e*e*i*t}function Rg(i,t){return 3*(1-i)*i*i*t}function Cg(i,t){return i*i*i*t}function vs(i,t,e,n,s){return Tg(i,t)+Ag(i,e)+Rg(i,n)+Cg(i,s)}class Ih extends xn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pg extends xn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y),vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kh extends xn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dg extends xn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends xn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,s.x,r.x,o.x),gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends xn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,s.x,r.x,o.x),gs(t,s.y,r.y,o.y),gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(lc(a,l.x,c.x,h.x,u.x),lc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var ma=Object.freeze({__proto__:null,ArcCurve:bg,CatmullRomCurve3:Lh,CubicBezierCurve:Ih,CubicBezierCurve3:Pg,EllipseCurve:Ga,LineCurve:kh,LineCurve3:Dg,QuadraticBezierCurve:Uh,QuadraticBezierCurve3:Nh,SplineCurve:Fh});class Lg extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ma[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ma[s.type]().fromJSON(s))}return this}}class Ig extends Lg{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kh(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Uh(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ih(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Fh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ga(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pr extends Ee{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,d=new st,f=new I,g=new I,_=new I;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=e;b++){const E=n+b*h*s,x=Math.sin(E),S=Math.cos(E);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*x,u.y=t[C].y,u.z=t[C].x*S,o.push(u.x,u.y,u.z),d.x=b/e,d.y=C/(t.length-1),a.push(d.x,d.y);const T=l[3*C+0]*x,R=l[3*C+1],y=l[3*C+0]*S;c.push(T,R,y)}}for(let b=0;b<e;b++)for(let E=0;E<t.length-1;E++){const x=E+b*t.length,S=x,C=x+t.length,T=x+t.length+1,R=x+1;r.push(S,C,R),r.push(T,R,C)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.points,t.segments,t.phiStart,t.phiLength)}}class Ms extends Pr{constructor(t=1,e=1,n=4,s=8){const r=new Ig;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ms(t.radius,t.length,t.capSegments,t.radialSegments)}}class Dr extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ae extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function b(){const x=new I,S=new I;let C=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const y=[],M=R/r,v=M*(e-t)+t;for(let P=0;P<=s;P++){const L=P/s,k=L*l+a,z=Math.sin(k),G=Math.cos(k);S.x=v*z,S.y=-M*n+m,S.z=v*G,u.push(S.x,S.y,S.z),x.set(z,T,G).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-M),y.push(g++)}_.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){const M=_[y][R],v=_[y+1][R],P=_[y+1][R+1],L=_[y][R+1];(t>0||y!==0)&&(h.push(M,v,L),C+=3),(e>0||y!==r-1)&&(h.push(v,P,L),C+=3)}c.addGroup(p,C,0),p+=C}function E(x){const S=g,C=new st,T=new I;let R=0;const y=x===!0?t:e,M=x===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const v=g;for(let P=0;P<=s;P++){const k=P/s*l+a,z=Math.cos(k),G=Math.sin(k);T.x=y*G,T.y=m*M,T.z=y*z,u.push(T.x,T.y,T.z),d.push(0,M,0),C.x=z*.5+.5,C.y=G*.5*M+.5,f.push(C.x,C.y),g++}for(let P=0;P<s;P++){const L=S+P,k=v+P;x===!0?h.push(k,k+1,L):h.push(k+1,k,L),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bs extends Ae{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new bs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pe extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],E=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){const C=S/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+x,1-E),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const E=h[p][b+1],x=h[p][b],S=h[p+1][b],C=h[p+1][b+1];(p!==0||o>0)&&f.push(E,x,C),(p!==n-1||l<Math.PI)&&f.push(x,S,C)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ss extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wa extends Ee{constructor(t=new Nh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new st;let h=new I;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function _(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),b(),p()}function m(E){h=t.getPointAt(E/e,h);const x=o.normals[E],S=o.binormals[E];for(let C=0;C<=s;C++){const T=C/s*Math.PI*2,R=Math.sin(T),y=-Math.cos(T);l.x=y*x.x+R*S.x,l.y=y*x.y+R*S.y,l.z=y*x.z+R*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=e;E++)for(let x=1;x<=s;x++){const S=(s+1)*(E-1)+(x-1),C=(s+1)*E+(x-1),T=(s+1)*E+x,R=(s+1)*(E-1)+x;g.push(S,C,R),g.push(C,T,R)}}function b(){for(let E=0;E<=e;E++)for(let x=0;x<=s;x++)c.x=E/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Wa(new ma[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class kg extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Bt extends vn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ug extends vn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ts extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ng extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const po=new Qt,cc=new I,hc=new I;class Xa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(cc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fg extends Xa{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Xi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ga extends Ts{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const uc=new Qt,ls=new I,mo=new I;class Og extends Xa{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),mo.copy(n.position),mo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(mo),n.updateMatrixWorld(),s.makeTranslation(-ls.x,-ls.y,-ls.z),uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc)}}class va extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Og}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zg extends Xa{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bg extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new zg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hg extends Ts{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=dc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);function Vg(i,t,e,n){return!(t<=0||i>=t||e<n)}const fc={step:{cap:1,gap:.2},stepMonster:{cap:1,gap:.24},door:{cap:1,gap:.28},doorSlam:{cap:1,gap:.4},whisper:{cap:1,gap:7},scream:{cap:1,gap:14},growl:{cap:1,gap:1.6},sting:{cap:1,gap:1.4},flash:{cap:1,gap:.12},click:{cap:2,gap:.04},creak:{cap:1,gap:.45},thunder:{cap:1,gap:8},metallic:{cap:1,gap:2},shadow:{cap:1,gap:8},deep:{cap:1,gap:3}},xa={step:"fodtrin-gaaende.mp3",flash:"lommelygte-taend-sluk.mp3",metallic:"metallic.mp3",scream:"skrig.mp3",shadow:"pludselig-skygge-monster.mp3",deep:"dyb-lyd.mp3",bed:"baggrundslyd-hele-tiden-i-lav.mp3"};new Set(Object.keys(xa));function Wg(i){return new URL(`assets/audio/${i}`,document.baseURI).href}function Xg(i,t){const e=i.length/Math.max(1,t);if(e<.05||i.length<8)return[{start:0,end:e}];const n=Math.max(1,Math.floor(t*.01)),s=Math.max(n,Math.floor(t*.02)),r=[];for(let l=0;l+s<=i.length;l+=n){let c=0;for(let h=0;h<s;h++){const u=i[l+h];c+=u*u}r.push(Math.sqrt(c/s))}const o=[],a=8;for(let l=0;l<r.length;l++){if(r[l]<.08)continue;let c=!1;const h=Math.max(0,l-a),u=Math.min(r.length-1,l+a);for(let f=h;f<=u;f++)if(r[f]>r[l]){c=!0;break}if(c)continue;const d=l*n/t;o.length&&d-o[o.length-1]<.28||o.push(d)}return r.length&&r[0]>=.08&&(o.length===0||o[0]>.2)&&o.unshift(0),o.length<2?qg(e):o.map((l,c)=>{const h=Math.max(0,l-.028),u=o[c+1]??l+.42,d=Math.min(e,Math.max(l+.16,Math.min(l+.4,u-.02)));return{start:h,end:Math.max(h+.08,d)}})}function qg(i){const t=[];for(let n=0;n+.1<i;n+=.36)t.push({start:n,end:Math.min(i,n+.36)});return t.length||t.push({start:0,end:Math.min(i,.4)}),t}function Yg(i,t,e=.008){const n=Math.min(Math.floor(t*e),Math.floor(i.length/3));if(!(n<2))for(let s=0;s<n;s++){const r=s/n;i[s]*=r,i[i.length-1-s]*=r}}function $g(i,t,e=.02){const n=Math.min(Math.floor(t*e),Math.floor(i.length/8));if(n<8)return;const s=i[0];for(let r=0;r<n;r++){const o=(r+1)/n,a=i.length-n+r;i[a]=i[a]*(1-o)+s*o}}function Kg(i){let t=0;for(let e=0;e<i.length;e++){const n=Math.abs(i[e]);n>t&&(t=n)}return t}function jg(i){if(!i.length)return 0;let t=0;const e=Math.max(1,Math.floor(i.length/2e5));let n=0;for(let s=0;s<i.length;s+=e){const r=i[s];t+=r*r,n++}return Math.sqrt(t/Math.max(1,n))}const _a=.8,pc=.7,go=.85;function ri(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function mc(i,t,e=8){return Math.min(e,Math.max(0,t)/Math.max(.01,i*_a))}function Zg(i,t){const n=.063/Math.max(.001,i*_a);return Math.min(n,.45/Math.max(.001,t*_a))}function Jg(i,t=!1){return Number.isFinite(i)?ri(i/100+(t?.25:0)):ri(t?.25:0)}function Qg(i,t,e,n){return i===t&&tv(n,e)}function tv(i,t){const e=i==="step"||i==="stepMonster"?200:i==="flash"||i==="click"?650:i==="scream"||i==="shadow"||i==="deep"||i==="metallic"?2300:1200;return t>=0&&t<=e}const gc=new Set(["scream","shadow","deep","metallic"]),ev=["door","doorSlam","locked","pickup","click","fail","whisper","growl","sting","key","generator","creak","thunder","paper","heartbeat","breath","lampBuzz","pipeKnock","distantBell","waterDrop","airRumble"],vo={step:"step",stepMonster:"step",flash:"flash",metallic:"metallic",scream:"scream",shadow:"shadow",deep:"deep"};class nv{ctx=null;master=null;bedGain=null;stepGain=null;sfxGain=null;scareGain=null;analyser=null;buffers=new Map;slices=[];activeSteps=new Set;bed=null;bedRunning=!1;bedBase=.4;prevState="";queue=[];epoch=1;liveSources=new Set;voices=[];lastPlayed=new Map;trackedPan=null;trackNext=!1;heartbeatLevel=0;breathLevel=0;nextHeartbeat=0;nextBreath=0;envZone="hall";envSequence=0;nextEnvironmentalCue=0;nextElectricalCue=0;humActive=!1;humPosition={x:0,y:0,z:0};tension=0;listenPos={x:0,y:0,z:0};listenRight={x:-1,z:0};moving=!1;trace=[];failures=[];masterVol=.8;musicVol=.7;sfxVol=.85;muted=!1;ensure(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;if(!t){this.fail("Ingen AudioContext i denne browser");return}const e=new t;this.ctx=e;const n=e.createGain(),s=e.createGain(),r=e.createGain(),o=e.createGain(),a=e.createGain(),l=e.createDynamicsCompressor();l.threshold.value=-3,l.knee.value=6,l.ratio.value=12,l.attack.value=.003,l.release.value=.08;const c=e.createAnalyser();c.fftSize=2048,c.channelCount=1,c.channelCountMode="explicit",c.channelInterpretation="speakers",s.connect(n),r.connect(n),o.connect(n),a.connect(n),n.connect(c),n.connect(l),l.connect(e.destination),this.master=n,this.bedGain=s,this.stepGain=r,this.sfxGain=o,this.scareGain=a,this.analyser=c,this.applyGains(),this.buffers.set("tap",rv(e));for(const h of ev)this.buffers.set(`cue:${h}`,sv(e,h));this.prevState=e.state,e.onstatechange=()=>{const h=e.state;this.mark(`state:${h}`),h==="running"&&this.prevState!=="running"&&(this.bedRunning=!1,this.ensureBed(),this.flush()),h!=="running"&&(this.bedRunning=!1,this.stopBed()),this.prevState=h},this.loadClips()}resume(){this.ensure();const t=this.ctx;if(!t)return Promise.resolve();const e=t.resume();return this.mark(`resume:${t.state}`),e.then(()=>{this.mark(`state:${t.state}`),t.state==="running"&&(this.ensureBed(),this.flush())}).catch(n=>this.fail(`Kunne ikke starte lyd: ${String(n)}`))}async loadClips(){this.ensure();const t=this.ctx;t&&await Promise.all(Object.keys(xa).map(async e=>{const n=xa[e];try{const s=await fetch(Wg(n));if(!s.ok)throw new Error(`HTTP ${s.status} ${s.headers.get("content-type")??""}`);const r=await s.arrayBuffer();if(r.byteLength<64)throw new Error(`tom fil (${r.byteLength} bytes)`);const o=await t.decodeAudioData(r.slice(0));if(o.length<32)throw new Error("decode gav stilhed");if(e==="bed"){for(let a=0;a<o.numberOfChannels;a++)$g(o.getChannelData(a),o.sampleRate);this.buffers.set("bed",o),this.tuneBed(),this.bedRunning=!1,this.ensureBed()}else e==="step"?(this.buffers.set("step",o),this.slices=this.cutSteps(o),this.mark(`steps:${this.slices.length}`)):this.buffers.set(e,o);this.mark(`load-ok:${n}`),this.flush()}catch(s){const r=s instanceof Error?s.message:String(s);this.fail(`${n}: ${r}`),this.mark(`load-fail:${n}`)}}))}setLocomotion(t,e,n){if(this.ensure(),!t){(this.moving||this.activeSteps.size>0)&&(this.stopFootsteps(),this.mark("step-stop")),this.moving=!1;return}this.moving||(this.moving=!0,this.mark("step-start"))}stopFootsteps(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(const n of this.activeSteps){n.amp.gain.cancelScheduledValues(e),n.amp.gain.setValueAtTime(n.amp.gain.value,e),n.amp.gain.linearRampToValueAtTime(1e-4,e+.035);try{n.source.stop(e+.045)}catch{}}this.activeSteps.clear()}playFootstep(t,e,n,s=1){this.ensure();const r=this.ctx;if(!r||r.state!=="running"||!this.slices.length)return;const o=this.slices[Math.floor(Math.random()*this.slices.length)],a=(e?.09:t?.2:.15)*(.92+Math.random()*.16),l=Math.min(3,mc(xo(o),a)*Math.max(0,s)),c=.97+Math.random()*.06;this.fire(o,this.stepGain,l,c,n,!1)&&this.mark(n?"stepMonster":"step")}play(t,e,n){this.ensure();const s=Math.max(0,Math.min(2,n?.volume??1)),r=this.ctx;if(t==="step"||t==="stepMonster"){if(t==="stepMonster"){const a=performance.now()/1e3;if(a-(this.lastPlayed.get(t)??-999)<fc.stepMonster.gap)return;this.lastPlayed.set(t,a)}this.playFootstep(t==="stepMonster",!1,e,s);return}const o=vo[t];if(o&&!this.buffers.has(o)||!r||r.state!=="running"){this.enqueue({kind:t,pos:e,volume:s,occluded:n?.occluded,rate:n?.rate}),this.mark(`defer:${t}`);return}this.emit(t,e,s,!!n?.occluded,n?.rate??1)}playTracked(t,e){this.trackNext=!0;try{this.play(t,e,{volume:1})}finally{this.trackNext=!1}}moveTracked(t){const e=this.trackedPan;if(!e)return;const n=this.panOf(t);e.pan.value=n}hush(t=2){const e=this.ctx,n=this.bedGain;if(!e||!n||e.state!=="running")return;const s=e.currentTime;n.gain.cancelScheduledValues(s),n.gain.setValueAtTime(Math.max(1e-4,n.gain.value),s);const r=this.bedBase*this.musicVol/pc;n.gain.linearRampToValueAtTime(Math.max(0,r*.35),s+.05),n.gain.linearRampToValueAtTime(r,s+Math.max(.4,t)),this.mark("hush")}setVolumes(t,e,n){this.masterVol=ri(t),this.musicVol=ri(e),this.sfxVol=ri(n),this.tuneBed(),this.applyGains()}duck(t){this.muted=t,this.applyGains()}setListener(t,e,n){this.listenPos=t;const s=Math.hypot(e.x,e.z)||1;this.listenRight={x:-e.z/s,z:e.x/s}}setTension(t,e){this.tension=Jg(t,e)}beginScene(){this.epoch+=1,this.queue=[],this.heartbeatLevel=0,this.breathLevel=0,this.stopLive(),this.holdAmbience(2.4),this.mark(`scene:${this.epoch}`)}suspendTransient(){this.queue=[],this.heartbeatLevel=0,this.breathLevel=0,this.stopLive(),this.holdAmbience(1.6),this.mark("suspend")}setHeartbeat(t){this.heartbeatLevel=ri(t)}setBreath(t){this.breathLevel=ri(t)}setHum(t,e){this.humActive=t,this.humPosition=e}setRadio(t,e){}roomTones=!1;enableRoomTones(){this.roomTones=!0}setZone(t){t!==this.envZone&&(this.envZone=t,this.nextEnvironmentalCue=(this.ctx?.currentTime??0)+3.2)}update(t){const e=this.ctx;if(!e||e.state!=="running"||this.muted)return;const n=e.currentTime;if(this.heartbeatLevel>.15&&n>=this.nextHeartbeat){const s=this.buffers.get("cue:heartbeat");s&&this.fire(s,this.sfxGain,this.heartbeatLevel*.24,1,void 0,!1),this.nextHeartbeat=n+1-.3*this.heartbeatLevel}if(this.breathLevel>.3&&n>=this.nextBreath){const s=this.buffers.get("cue:breath");s&&this.fire(s,this.sfxGain,this.breathLevel*.25,1,void 0,!1),this.nextBreath=n+3.2}if(!this.roomTones&&n>=this.nextEnvironmentalCue){const s=this.envSequence++,r={hall:["airRumble","pipeKnock","waterDrop"],corridor:["airRumble","pipeKnock","waterDrop"],cellar:["pipeKnock","waterDrop","airRumble"],chapel:["distantBell","airRumble","pipeKnock"],upper:["airRumble","distantBell","waterDrop"],dark:["pipeKnock","airRumble","distantBell"],slagter:["pipeKnock","airRumble","waterDrop"]},o=r[this.envZone]??r.hall,a=o[s%o.length];this.play(a,void 0,{volume:.18+this.tension*.12}),this.nextEnvironmentalCue=n+9.5+s*7%8-this.tension*2}if(this.humActive&&n>=this.nextElectricalCue){const s=this.buffers.get("cue:lampBuzz");s&&this.fire(s,this.sfxGain,.065,.94+.1*Math.sin(n),this.humPosition,!1),this.nextElectricalCue=n+5+this.envSequence*3%5}}debug(){return{state:this.ctx?.state??"none",voices:this.voices.filter(t=>t.until>performance.now()/1e3).length,sampleRate:this.ctx?.sampleRate??0,last:this.trace.slice(-8),failures:this.failures.slice()}}sampleMix(t){this.ensure();const e=this.ctx,n=this.analyser;if(!e||!n)return Promise.resolve({peak:0,jumps:0,state:"none"});e.resume();const s=new Float32Array(n.fftSize);let r=0,o=0;const a=performance.now();return new Promise(l=>{const c=()=>{n.getFloatTimeDomainData(s);let h=s[0]??0;for(let u=0;u<s.length;u++){const d=s[u]??0,f=Math.abs(d);f>r&&(r=f),u>0&&Math.abs(d-h)>.5&&o++,h=d}performance.now()-a<t?setTimeout(c,16):l({peak:r,jumps:o,state:e.state})};c()})}async measureBed(){await this.resume();const t=this.ctx;return!t||t.state!=="running"?{rms:0,peak:0,state:t?.state??"none"}:(this.ensureBed(),{...await this.capture(900),state:t.state})}async audition(t){await this.resume();const e=this.ctx;if(!e||e.state!=="running")return{rms:0,peak:0,state:e?.state??"none",played:!1};const n=this.bedGain,s=this.bedBase;n&&(n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(0,e.currentTime)),await ov(90);const r=this.trace.length;t==="step"?this.playFootstep(!1,!1):this.play(t,void 0,{volume:1});const o=this.trace.length>r&&!this.trace[this.trace.length-1].startsWith("defer:"),a=t==="flash"||t==="step"?550:1400,l=await this.capture(a);return n&&(n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(s,e.currentTime)),{...l,state:e.state,played:o}}emit(t,e,n,s,r=1){const o=this.ctx;if(!o||o.state!=="running"){this.enqueue({kind:t,pos:e,volume:n,occluded:s,rate:r});return}const a=performance.now()/1e3;this.voices=this.voices.filter(g=>g.until>a);const l=fc[t]??{cap:2,gap:.05};if(!Vg(this.voices.filter(g=>g.kind===t).length,l.cap,a-(this.lastPlayed.get(t)??-999),l.gap))return;const c=vo[t],h=(c?this.buffers.get(c):this.buffers.get(`cue:${t}`))??this.buffers.get("tap");if(!h)return;const u=gc.has(t),d=(u?.45:t==="flash"?.28:.12)*Math.max(0,Math.min(1.4,n)),f=mc(xo(h),d)*(s?.65:1);this.fire(h,u?this.scareGain:this.sfxGain,f,r,e,u)&&(this.lastPlayed.set(t,a),this.voices.push({kind:t,until:a+h.duration/Math.max(.2,r)}),this.mark(t))}fire(t,e,n,s,r,o){const a=this.ctx;if(!a||!e||a.state!=="running")return!1;const l=a.currentTime,c=a.createBufferSource();c.buffer=t,c.playbackRate.value=s;const h=a.createGain(),u=Math.max(.05,t.duration/s),d=Math.min(.012,u*.1),f=Math.min(.02,u*.15);h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(Math.max(1e-4,n),l+d),h.gain.setValueAtTime(Math.max(1e-4,n),l+Math.max(d,u-f)),h.gain.linearRampToValueAtTime(1e-4,l+u),c.connect(h);let g=null;return r?(g=a.createStereoPanner(),g.pan.value=this.panOf(r)*(o?.55:1),h.connect(g),g.connect(e),this.trackNext&&(this.trackedPan=g)):h.connect(e),e===this.stepGain&&this.activeSteps.add({source:c,amp:h}),this.liveSources.add(c),c.start(l),c.stop(l+u+.03),c.onended=()=>{this.liveSources.delete(c);for(const _ of this.activeSteps)_.source===c&&this.activeSteps.delete(_);try{c.disconnect(),h.disconnect(),g?.disconnect()}catch{}this.trackedPan===g&&(this.trackedPan=null)},!0}panOf(t){const e=t.x-this.listenPos.x,n=t.z-this.listenPos.z,s=(e*this.listenRight.x+n*this.listenRight.z)/(Math.hypot(e,n)||1);return Math.max(-.7,Math.min(.7,s))}enqueue(t){(gc.has(t.kind)||t.kind==="flash")&&(this.queue=this.queue.filter(e=>e.kind!==t.kind)),this.queue.push({...t,queuedAt:performance.now(),epoch:this.epoch}),this.queue.length>8&&this.queue.shift()}flush(){if(!this.ctx||this.ctx.state!=="running")return;const t=this.queue.splice(0);for(const e of t){if(!Qg(e.epoch,this.epoch,performance.now()-e.queuedAt,e.kind)){this.mark(`expired:${e.kind}`);continue}if(e.kind==="step"||e.kind==="stepMonster")continue;const n=vo[e.kind];if(n&&!this.buffers.has(n)){this.queue.push(e);continue}this.emit(e.kind,e.pos,e.volume,!!e.occluded,e.rate??1)}}holdAmbience(t){const e=(this.ctx?.currentTime??0)+Math.max(0,t);this.nextEnvironmentalCue=Math.max(this.nextEnvironmentalCue,e),this.nextHeartbeat=Math.max(this.nextHeartbeat,e),this.nextBreath=Math.max(this.nextBreath,e),this.nextElectricalCue=Math.max(this.nextElectricalCue,e)}stopLive(){for(const t of this.liveSources)try{t.stop()}catch{}this.liveSources.clear(),this.activeSteps.clear()}ensureBed(){if(this.bedRunning)return;const t=this.ctx,e=this.buffers.get("bed");if(!t||t.state!=="running"||!e||!this.bedGain)return;this.stopBed();const n=t.createBufferSource();n.buffer=e,n.loop=!0,n.connect(this.bedGain),n.start(t.currentTime),this.bed=n,this.bedRunning=!0,this.mark("bed-start")}stopBed(){if(this.bed){try{this.bed.stop()}catch{}try{this.bed.disconnect()}catch{}this.bed=null,this.bedRunning=!1}}tuneBed(){const t=this.buffers.get("bed");t&&(this.bedBase=Zg(iv(t),xo(t)),this.applyGains())}applyGains(){const t=this.ctx?.currentTime??0,e=(n,s)=>{n&&(n.gain.cancelScheduledValues(t),n.gain.setTargetAtTime(s,t,.025))};e(this.master,this.masterVol*(this.muted?.4:1)),e(this.bedGain,this.bedBase*this.musicVol/pc),e(this.stepGain,this.sfxVol/go),e(this.sfxGain,this.sfxVol/go),e(this.scareGain,this.sfxVol/go)}cutSteps(t){const e=this.ctx;if(!e)return[];const n=new Float32Array(t.length),s=t.numberOfChannels;for(let o=0;o<s;o++){const a=t.getChannelData(o);for(let l=0;l<a.length;l++)n[l]+=a[l]/s}return Xg(n,t.sampleRate).map(o=>{const a=Math.max(0,Math.floor(o.start*t.sampleRate)),l=Math.min(t.length,Math.max(a+8,Math.floor(o.end*t.sampleRate))),c=e.createBuffer(s,l-a,t.sampleRate);for(let h=0;h<s;h++){const u=c.getChannelData(h);t.copyFromChannel(u,h,a),Yg(u,t.sampleRate,.008)}return c})}capture(t){const e=this.analyser;if(!e)return Promise.resolve({rms:0,peak:0});const n=new Float32Array(e.fftSize),s=performance.now();let r=0,o=0,a=0;return new Promise(l=>{const c=()=>{e.getFloatTimeDomainData(n);for(let h=0;h<n.length;h++){const u=n[h]??0,d=Math.abs(u);d>r&&(r=d),o+=u*u,a++}performance.now()-s<t?setTimeout(c,20):l({rms:Math.sqrt(o/Math.max(1,a)),peak:r})};c()})}mark(t){this.trace.push(t),this.trace.length>100&&this.trace.splice(0,this.trace.length-80)}fail(t){this.failures.push(t),this.failures.length>12&&this.failures.shift(),this.mark(`fejl:${t}`),console.error(`[Skt. Agnes] Lyd: ${t}`)}}function xo(i){let t=0;for(let e=0;e<i.numberOfChannels;e++)t=Math.max(t,Kg(i.getChannelData(e)));return t}function iv(i){let t=0;for(let e=0;e<i.numberOfChannels;e++)t=Math.max(t,jg(i.getChannelData(e)));return t}function sv(i,t){const e={door:[.26,95,55],doorSlam:[.46,82,38],locked:[.22,220,155],pickup:[.21,410,520],click:[.1,420,280],fail:[.21,135,65],whisper:[1.4,330,160],growl:[.75,72,45],sting:[.8,260,64],key:[.18,630,740],generator:[1.1,54,85],creak:[.75,130,68],thunder:[1.6,74,25],paper:[.2,270,190],heartbeat:[.3,58,42],breath:[1.25,185,120],lampBuzz:[.54,80,97],pipeKnock:[.72,110,48],distantBell:[2.2,185,169],waterDrop:[.21,600,210],airRumble:[2.8,49,63]},[n,s,r]=e[t]??[.1,180,180],o=i.sampleRate,a=Math.max(64,Math.floor(o*n)),l=i.createBuffer(1,a,o),c=l.getChannelData(0);let h=0;for(let u=0;u<a;u++){const d=u/a;h+=2*Math.PI*(s+(r-s)*d)/o;const f=Math.pow(Math.sin(Math.PI*d),1.3),g=t==="heartbeat"?d<.35?1:d>.48&&d<.78?.55:0:1;c[u]=(Math.sin(h)*.76+Math.sin(h*1.98)*.18)*f*g*.45}return l}function rv(i){const t=i.sampleRate,e=Math.floor(t*.09),n=i.createBuffer(1,e,t),s=n.getChannelData(0);for(let r=0;r<e;r++){const o=Math.sin(Math.PI*r/(e-1));s[r]=Math.sin(2*Math.PI*180*r/t)*o*.4}return n}function ov(i){return new Promise(t=>setTimeout(t,i))}function av(i=0,t=0,e=0){return{x:i,y:t,z:e}}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function Oh(i,t,e){return i+(t-i)*e}function ws(i,t){const e=i.x-t.x,n=i.z-t.z;return Math.hypot(e,n)}function lv(i,t){return Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)}function zh(i){return{x:Math.sin(i),z:Math.cos(i)}}function Bh(i){return{x:-Math.cos(i),z:Math.sin(i)}}function vc(i,t,e,n,s=!1){const r=s?-n:n;return{yaw:i-e,pitch:Je(t-r,-1.2,1.2)}}function cv(i){let t=i;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function _o(i,t){return cv(t-i)}function Ni(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ya(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class hv{a=[];get size(){return this.a.length}push(t,e){const n=this.a;n.push({p:t,id:e});let s=n.length-1;for(;s>0;){const r=s-1>>1;if(n[r].p<=n[s].p)break;const o=n[r];n[r]=n[s],n[s]=o,s=r}}pop(){const t=this.a;if(!t.length)return;const e=t[0],n=t.pop();if(t.length>0&&n){t[0]=n;let s=0;for(;;){const r=s*2+1,o=r+1;let a=s;if(r<t.length&&t[r].p<t[a].p&&(a=r),o<t.length&&t[o].p<t[a].p&&(a=o),a===s)break;const l=t[a];t[a]=t[s],t[s]=l,s=a}}return e}}function Lr(i,t){return!(t.allowFloor&&!t.allowFloor(i.floor)||i.doorId&&t.blockDoor&&t.blockDoor(i.doorId))}function uv(i,t,e,n={}){const s=i.nodes;if(!s.length)return null;const r=yo(i,t,n);if(r<0)return null;const o=pv(e.y),a=!n.allowFloor||n.allowFloor(o);let l=-1;if(a?l=yo(i,e,n):(l=fv(i,e,n),l<0&&(l=yo(i,e,n))),l<0)return null;const c=mv(s,r,l,u=>Lr(s[u],n));if(!c)return null;const h=c.map(u=>({x:s[u].x,y:s[u].y,z:s[u].z}));return gv(h,i,n,dv(i))}function dv(i){const t=new Map;for(const e of i.nodes){const n=`${e.ix},${e.iz}`;let s=t.get(n);s||(s=[],t.set(n,s)),s.push(e.id)}return t}function yo(i,t,e,n){let s=-1,r=1/0;for(const o of i.nodes){if(!Lr(o,e))continue;const a=Math.abs(o.y-t.y);if(a>3.2)continue;const l=(o.x-t.x)**2+(o.z-t.z)**2+a*a*.15;l<r&&(r=l,s=o.id)}return s}function fv(i,t,e){let n=-1,s=1/0;for(const r of i.nodes){if(!r.stair||!Lr(r,e))continue;const o=(r.x-t.x)**2+(r.z-t.z)**2;o<s&&(s=o,n=r.id)}return n}function pv(i){return i<2?-1:i<6?0:1}function mv(i,t,e,n){if(!n(t)||!n(e))return null;if(t===e)return[t];const s=new Map,r=new Map,o=new Set,a=new hv;s.set(t,0);const l=ws(i[t],i[e]);a.push(l,t);const c=i.length*12+32;let h=0;for(;a.size>0&&h++<c;){const u=a.pop();if(!u)break;const d=u.id;if(o.has(d))continue;if(d===e){const g=[d];let _=d;for(;r.has(_);)_=r.get(_),g.push(_);return g.reverse(),g}o.add(d);const f=s.get(d)??1/0;for(const g of i[d].links){if(!n(g.to)||o.has(g.to))continue;const _=f+g.cost;if(_+1e-6<(s.get(g.to)??1/0)){s.set(g.to,_),r.set(g.to,d);const m=ws(i[g.to],i[e]);a.push(_+m,g.to)}}}return null}function gv(i,t,e,n){if(i.length<3)return i;const s=[i[0]];let r=0;for(;r<i.length-1;){let o=i.length-1;for(;o>r+1&&!vv(i[r],i[o],t,e,n);)o--;s.push(i[o]),r=o}return s}function vv(i,t,e,n,s){const r=lv(i,t),o=Math.max(2,Math.ceil(r/.25));for(let a=1;a<o;a++){const l=a/o,c={x:i.x+(t.x-i.x)*l,y:i.y+(t.y-i.y)*l,z:i.z+(t.z-i.z)*l};if(!xv(e,c,n,s))return!1}return!0}function xv(i,t,e,n){const s=i.cellSize,r=Math.floor(t.x/s),o=Math.floor(t.z/s);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){const c=n.get(`${r+a},${o+l}`);if(c)for(const h of c){const u=i.nodes[h];if(!Lr(u,e))continue;const d=u.x-t.x,f=u.z-t.z;if(d*d+f*f<=.42*.42&&Math.abs(u.y-t.y)<1.05)return!0}}return!1}function xc(i={}){return{state:"Patrol",stateTime:0,waypointIndex:0,goal:null,lastSeen:null,lastHeard:null,suspicion:0,attackCooldown:0,unseenTime:0,searchLeft:0,blindTime:0,hesitate:0,speedMul:1,...i}}function _v(i){return{...i,goal:i.goal?{...i.goal}:null,lastSeen:i.lastSeen?{...i.lastSeen}:null,lastHeard:i.lastHeard?{...i.lastHeard}:null}}function yv(i,t){const e=_v(i),n=Math.max(0,t.dt);e.stateTime+=n,e.attackCooldown=Math.max(0,e.attackCooldown-n),e.blindTime=Math.max(0,e.blindTime-n),e.hesitate=Math.max(0,e.hesitate-n),e.suspicion=Math.max(0,e.suspicion-n*.045);const s=e.blindTime>0,r=t.canSee&&!s&&!t.hiding;r?(e.unseenTime=0,e.lastSeen={...t.playerPos},e.suspicion=Math.min(1,e.suspicion+n*.7)):e.unseenTime+=n,t.flashlightHit&&!s&&(e.suspicion=Math.min(1,e.suspicion+n*1.1),e.lastSeen=e.lastSeen??{...t.playerPos}),t.hear&&t.hear.loudness>.12&&(e.lastHeard={...t.hear.pos},e.suspicion=Math.min(1,e.suspicion+t.hear.loudness*.25));let o=!1,a=!1;const l=(g,_)=>{e.state!==g&&(e.state=g,e.stateTime=0,e.speedMul=.88+t.rng()*.24,g==="Search"&&(e.searchLeft=6.5+t.rng()*3),g==="Attack"&&(e.attackCooldown=1.5,o=!0)),_&&(e.goal={..._})};if(t.hiding&&t.hideSpot&&t.knowsHide&&(e.state==="Search"||e.state==="Suspicious"||e.state==="Chase"||e.state==="Investigate")&&ws(t.monsterPos,t.hideSpot)<1.75){const _=(t.holdBreath?.055:.26)*(.35+e.suspicion);t.rng()<_*n&&(a=!0)}const c=r&&t.allowChase&&t.distance<=1.32&&e.attackCooldown<=0;e.state!=="Attack"&&(c?l("Attack",t.playerPos):r&&t.allowChase?e.state==="Chase"?e.goal={...t.playerPos}:e.state==="LostPlayer"?l("Chase",t.playerPos):e.state==="Suspicious"?(e.goal={...t.playerPos},e.hesitate<=0&&l("Chase",t.playerPos)):(l("Suspicious",t.playerPos),e.hesitate=.45+t.rng()*1.15):r&&!t.allowChase||t.flashlightHit&&!s&&(e.state==="Idle"||e.state==="Patrol"||e.state==="ReturnToPatrol"||e.state==="Investigate")?l("Suspicious",t.playerPos):t.hear&&t.hear.loudness>.38&&e.state!=="Chase"&&e.state!=="LostPlayer"&&e.state!=="Suspicious"&&(t.hear.loudness>.84&&t.distance<6.5&&t.allowChase&&t.rng()<.55?l("Chase",t.hear.pos):l("Investigate",t.hear.pos)));const h=()=>{const g=t.waypoints;return g.length?(e.waypointIndex=(e.waypointIndex+1)%g.length,{...g[e.waypointIndex]}):e.goal},u=()=>{const g=t.waypoints;if(!g.length)return e.goal;let _=0,m=1/0;for(let p=0;p<g.length;p++){const b=ws(t.monsterPos,g[p]);b<m&&(m=b,_=p)}return e.waypointIndex=_,{...g[_]}};switch(e.state){case"Idle":e.stateTime>1.5+t.rng()*2&&l("Patrol",h()??t.monsterPos);break;case"Patrol":!e.goal&&t.waypoints.length&&(e.goal={...t.waypoints[e.waypointIndex%t.waypoints.length]}),t.atGoal&&(t.rng()<.16?l("Idle",t.monsterPos):e.goal=h());break;case"Investigate":(t.atGoal||e.stateTime>11)&&l("Search",e.goal??t.monsterPos);break;case"Search":if(e.searchLeft-=n,t.atGoal){const g=e.lastHeard??e.lastSeen??t.monsterPos,_=Mv(g,t.searchSpots,t.checkedIds,t.rng);_.id&&t.checkedIds.add(_.id),e.goal=_.pos}e.searchLeft<=0&&l("ReturnToPatrol",u()??t.monsterPos);break;case"Suspicious":!r&&(t.atGoal&&e.stateTime>2.2||e.stateTime>8)&&l("Search",e.goal??t.monsterPos);break;case"Chase":r?e.goal={...t.playerPos}:e.lastSeen&&(e.goal={...e.lastSeen}),!r&&e.unseenTime>.55&&l("LostPlayer",e.lastSeen?{...e.lastSeen}:{...t.playerPos});break;case"Attack":e.stateTime>.82&&(r&&t.distance<2.4?l("Chase",t.playerPos):l("LostPlayer",e.lastSeen?{...e.lastSeen}:{...t.playerPos}));break;case"LostPlayer":(t.atGoal||e.stateTime>6.2)&&l("Search",e.goal??t.monsterPos);break;case"ReturnToPatrol":e.goal||(e.goal=u()),(t.atGoal||e.stateTime>16)&&l("Patrol",e.goal??h());break}let f={Idle:0,Patrol:1.48,Investigate:2.2,Search:1.22,Suspicious:1.28,Chase:3.7+t.aggression*.85,Attack:.85,LostPlayer:2.35,ReturnToPatrol:1.6}[e.state]*e.speedMul;return e.hesitate>0&&e.state==="Suspicious"&&(f*=.72),s&&(f*=.45),{bb:e,speed:f,attackPulse:o,foundHiding:a}}function Mv(i,t,e,n){const s=t.filter(o=>!e.has(o.id)&&ws(i,o.pos)<8);if(s.length){const o=s[Math.floor(n()*s.length)%s.length];return{id:o.id,pos:{...o.pos}}}const r=n()*Math.PI*2;return{id:null,pos:av(i.x+Math.cos(r)*2,i.y,i.z+Math.sin(r)*2)}}function bv(i,t){return i==="Attack"?{clip:"Attack",timeScale:1}:i==="Search"||i==="Investigate"||i==="Suspicious"||i==="LostPlayer"?{clip:"Search",timeScale:.85}:i==="Idle"||t<.15?{clip:"Idle",timeScale:1}:i==="Chase"||t>2.6?{clip:"Run",timeScale:Math.max(.75,Math.min(1.35,t/3.4))}:{clip:"Walk",timeScale:Math.max(.7,Math.min(1.25,t/1.5))}}const Sv=1.25;function wv(i,t){return t>0||i<=.05?"none":i>=Sv?"banish":"blind"}const Gn=1e-4;function Ev(i,t,e,n){return n.standOnly&&e?!1:i+t>n.minY+.02&&i<n.maxY-.02}function Tv(i,t,e,n,s,r,o){const a=t+s;for(const l of o)if(!(l.standOnly&&r)&&!(a<=l.minY+.02||t>=l.maxY-.02)&&!(i<=l.minX-n||i>=l.maxX+n)&&!(e<=l.minZ-n||e>=l.maxZ+n))return!0;return!1}function Hh(i,t,e,n,s,r){let o=i.x,a=i.z,l=!1;const c=r.filter(u=>Ev(i.y,n,s,u)),h=(u,d)=>{if(d!==0){u==="x"?o+=d:a+=d;for(let f=0;f<2;f++)for(const g of c){const _=g.minX-e,m=g.maxX+e,p=g.minZ-e,b=g.maxZ+e;if(u==="x"){if(a<=p+Gn||a>=b-Gn)continue;d>0&&i.x<=_+Gn&&o>_?(o=_,l=!0):d<0&&i.x>=m-Gn&&o<m?(o=m,l=!0):o>_&&o<m&&a>p&&a<b&&i.x>_&&i.x<m&&(o=o-_<m-o?_:m,l=!0)}else{if(o<=_+Gn||o>=m-Gn)continue;d>0&&i.z<=p+Gn&&a>p?(a=p,l=!0):d<0&&i.z>=b-Gn&&a<b?(a=b,l=!0):a>p&&a<b&&o>_&&o<m&&i.z>p&&i.z<b&&(a=a-p<b-a?p:b,l=!0)}}}};return h("x",t.x),h("z",t.z),{x:o,y:i.y,z:a,hit:l}}function _c(i,t,e,n,s){for(const r of s){if(!r.standOnly||t<=r.minX||t>=r.maxX||e<=r.minZ||e>=r.maxZ)continue;if(i+n>r.minY+.02&&i<r.maxY-.02)return!0}return!1}function Gh(i,t,e){const n=t.x-i.x,s=t.y-i.y,r=t.z-i.z;let o=0,a=1;const l=[[n,i.x,e.minX,e.maxX],[s,i.y,e.minY,e.maxY],[r,i.z,e.minZ,e.maxZ]];for(const[c,h,u,d]of l){if(Math.abs(c)<1e-8){if(h<u||h>d)return!1;continue}let f=(u-h)/c,g=(d-h)/c;if(f>g){const _=f;f=g,g=_}if(f>o&&(o=f),g<a&&(a=g),o>a)return!1}return a>.02&&o<.98}function br(i,t,e){for(const n of e)if(Gh(i,t,n))return!1;return!0}function tr(i,t,e,n=2.35){let s=null,r=n;const o=Math.hypot(t.x,t.y,t.z)||1,a=t.x/o,l=t.y/o,c=t.z/o;for(const d of e){const f=d.x-i.x,g=d.y-i.y,_=d.z-i.z,m=f*a+g*l+_*c;if(m<0||m>n)continue;const p=i.x+a*m,b=i.y+l*m,E=i.z+c*m;Math.hypot(p-d.x,b-d.y,E-d.z)<=d.radius&&m<r&&(s=d,r=m)}if(s)return s;let h=.35,u=n;for(const d of e){const f=d.x-i.x,g=d.y-i.y,_=d.z-i.z,m=Math.hypot(f,g,_);if(m>n||m<.001)continue;const p=(f*a+g*l+_*c)/m;p>h&&m<u+.4&&(s=d,h=p,u=m)}return s}const Av={sprint:13,walk:4.3,crouch:1.15,door:16,drop:11,jump:8,landing:6,voice:9};function Rv(i){return Av[i]}function Cv(i){switch(i){case"sprint":return .92;case"door":return .88;case"drop":return .7;case"jump":return .58;case"landing":return .5;case"voice":return .64;case"walk":return .42;case"crouch":return .14}}function Vh(i,t){return Math.pow(.52,Math.abs(i))*(t?.38:1)}function Pv(i,t,e,n){const s=Math.hypot(i.x-t.x,i.z-t.z),r=1.15-Math.min(1,Math.max(0,e))*.7,o=(1.1+s*.18)*r,a=n()*Math.PI*2;return{x:i.x+Math.cos(a)*o,y:i.y,z:i.z+Math.sin(a)*o}}function Dv(i,t,e,n,s){const r=Rv(e)*Vh(n,s);return Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)<=r}function Lv(i,t,e,n,s,r){const o=e.x-i.x,a=e.y-i.y,l=e.z-i.z,c=Math.hypot(o,a,l);if(c>s)return!1;if(c<.2)return!0;const h=Math.hypot(o,l)||1e-4;return(t.x*o+t.z*l)/h<n||Math.abs(a)>2.6&&c>3.5?!1:br(i,e,r)}function Wh(i,t,e,n,s,r){const o=e.x-i.x,a=e.y-i.y,l=e.z-i.z,c=Math.hypot(o,a,l);if(c>s||c<.05)return!1;const h=Math.hypot(t.x,t.y,t.z)||1;return(t.x*o+t.y*a+t.z*l)/(h*c)<n?!1:br(i,e,r)}const Iv=.36,kv=1.95,Uv=Math.cos(48*Math.PI/180);class Nv{group=new Kt;bb=xc();pos={x:18,y:0,z:24};yaw=0;path=[];pathI=0;repath=0;goalKey="";phase=0;stuckT=0;stuckTries=0;anchorX=0;anchorZ=0;pelvis=null;spine=null;neck=null;head=null;thighL=null;thighR=null;shinL=null;shinR=null;footL=null;footR=null;armL=null;armR=null;foreL=null;foreR=null;checked=new Set;glide=0;watch=0;lookAt=0;beamTime=0;beamImmune=0;concealed=!1;constructor(){const t=new Bt({color:"#3a3034",roughness:.86,metalness:.02}),e=new Bt({color:"#ddd4c8",roughness:.62,metalness:0}),n=new Bt({color:"#100c0c",roughness:.45}),s=new Bt({color:"#3a0000",emissive:"#ff2a18",emissiveIntensity:1.4,roughness:.35}),r=new Bt({color:"#1a1412",roughness:.5}),o=new Bt({color:"#403734",roughness:1,side:Se}),a=new Bt({color:"#3f1115",roughness:.9}),l=new Bt({color:"#a39882",roughness:.98}),c=new Kt;c.position.y=.96,this.pelvis=c,c.add(Ve(new J(new pe(.13,12,8),t),1.15,.72,.85));const h=new Kt;h.position.y=.02,h.rotation.x=.38,this.spine=h,c.add(h);const u=Ve(new J(Fv(),t));h.add(u);const d=new J(new we(.44,.67),o);d.position.set(0,-.03,.185),d.rotation.z=-.1,h.add(d);for(let v=0;v<5;v++){const P=Ve(new J(new Xt(.18+v*.007,.018,.025),l));P.position.set(v%2?-.08:.08,.23-v*.107,.208),P.rotation.z=(v%2?1:-1)*.21,h.add(P)}const f=Ve(new J(new pe(.1,8,6),a));f.scale.set(1.3,.28,.25),f.position.set(.02,-.13,.19),h.add(f);for(let v=0;v<5;v++){const P=new J(new we(.052,.23+v*.05),o);P.position.set((v-2)*.075,-.43-v%2*.045,.13),P.rotation.z=(v-2)*.09,h.add(P)}const g=Ve(new J(new Ms(.07,.22,3,6),t));g.rotation.z=Math.PI/2,g.position.y=.4,h.add(g);const _=this.leg(t,-1,.5,.46),m=this.leg(t,1,.47,.44);c.add(_.hip,m.hip),this.thighL=_.thigh,this.thighR=m.thigh,this.shinL=_.shin,this.shinR=m.shin,this.footL=_.foot,this.footR=m.foot;const p=this.arm(t,-1,.46,.4),b=this.arm(t,1,.42,.38);h.add(p.shoulder,b.shoulder),this.armL=p.upper,this.armR=b.upper,this.foreL=p.fore,this.foreR=b.fore;const E=new Kt;E.position.set(0,.52,.02),E.rotation.x=-.28,this.neck=E,h.add(E),E.add(Pi(.14,.042,.036,t,1));const x=new Kt;x.position.y=.14,this.head=x,E.add(x);const S=Ve(new J(new pe(.15,28,18),e));S.scale.set(.9,1.25,.62),S.position.y=.07;const C=yc(n,s,-.055,.09,.09,-.38),T=yc(n,s,.058,.085,.09,.42),R=Ve(new J(new Xt(.003,.072,.004),r));R.position.set(0,.045,.1);const y=new J(zv(),r);x.add(S,C,T,R,y);for(let v=0;v<7;v++){const P=Ve(new J(new bs(.011,.036+v%3*.009,4),l));P.rotation.z=Math.PI,P.position.set((v-3)*.027,-.043+Math.abs(v-3)*.005,.105),x.add(P)}for(let v=0;v<6;v++){const P=new J(new Xt(.007,.036,.007),r);P.position.set(-.065+v*.027,-.083+v*.008,.104),P.rotation.z=.5,x.add(P)}const M=Ve(new J(new Xt(.34,.047,.03),r));M.position.set(0,.138,.07),x.add(M);for(let v=0;v<6;v++){const P=Ve(new J(new bs(.043,.14+v%3*.035,5),n));P.position.set((v-2.5)*.049,.27,v%2*.02-.04),P.rotation.z=(v-3)*.26,x.add(P)}this.group.add(c),this.group.visible=!1}leg(t,e,n,s){const r=new Kt;r.position.set(e*.09,-.02,0);const o=new Kt;r.add(o),o.add(Pi(n,.055,.042,t));const a=new Kt;a.position.y=-n,o.add(a),a.add(Pi(s,.04,.03,t));const l=new Kt;l.position.y=-s,a.add(l);const c=Ve(new J(new Xt(.07,.035,.16),t));return c.position.set(0,-.02,.05),l.add(c),l.add(Ve(new J(new pe(.032,8,6),t))),{hip:r,thigh:o,shin:a,foot:l}}arm(t,e,n,s){const r=new Kt;r.position.set(e*.2,.4,.02),r.add(Ve(new J(new pe(.042,8,6),t)));const o=new Kt;o.rotation.z=e*.12,r.add(o),o.add(Pi(n,.04,.032,t));const a=new Kt;a.position.y=-n,a.rotation.x=.18,o.add(a),a.add(Pi(s,.03,.022,t));const l=new Kt;l.position.y=-s,a.add(l),l.add(Ve(new J(new pe(.028,8,6),t)));for(let c=0;c<3;c++){const h=new Kt;h.position.set((c-1)*.016,-.01,(c-1)*.01),h.rotation.x=.25+c*.04,h.rotation.z=e*(c-1)*.12;const u=.15+(c===1?.03:0);h.add(Pi(u,.008,.005,t,-1)),l.add(h)}return{shoulder:r,upper:o,fore:a}}reveal(t){this.concealed=!1,this.pos={...t},this.group.position.set(t.x,t.y,t.z),this.group.visible=!0,this.path=[],this.goalKey="",this.glide=0,this.bb.state="Patrol",this.bb.goal={...t}}face(t){this.yaw=t,this.group.rotation.y=t}spawn(t,e,n){this.pos={...t},this.yaw=e,this.bb=xc({state:n}),this.group.position.set(t.x,t.y,t.z),this.group.visible=!0,this.path=[],this.anchorX=t.x,this.anchorZ=t.z,this.stuckT=0}update(t){const e=this.bb.state,n={x:this.pos.x,y:this.pos.y+1.7,z:this.pos.z},s=zh(this.yaw);let r=null;for(const b of t.noises){if(!Dv(n,b.pos,b.kind,b.floorDelta,b.occluded))continue;const E=Cv(b.kind)*Vh(b.floorDelta,b.occluded);(!r||E>r.loudness)&&(r={pos:Pv(b.pos,n,E,Math.random),loudness:E})}const o=Math.hypot(t.playerPos.x-this.pos.x,t.playerPos.z-this.pos.z),l=(!t.flashlightOn?8.5:12.5)*(t.hiding?.2:1),c=!t.hiding&&Lv(n,s,t.playerEye,Uv,l,t.blockers),h=t.flashlightOn&&Wh(t.camPos,t.camDir,{x:this.pos.x,y:this.pos.y+1.75,z:this.pos.z},Math.cos(.5),16,t.blockers);this.beamImmune=Math.max(0,this.beamImmune-t.dt),h&&this.beamImmune<=0?this.beamTime+=t.dt:this.beamTime=Math.max(0,this.beamTime-t.dt*1.5);const u=t.hideSpot,d=(b,E)=>!!u&&!!b&&Math.hypot(b.x-u.x,b.z-u.z)<E,f=d(this.bb.lastSeen,2.4)||d(this.bb.lastHeard,3.2)||d(r?.pos??null,3.2);this.lookAt=_o(this.yaw,Math.atan2(t.playerPos.x-this.pos.x,t.playerPos.z-this.pos.z));const g=this.bb.goal,_=!!g&&Math.hypot(g.x-this.pos.x,g.z-this.pos.z)<.75,m=yv(this.bb,{dt:t.dt,monsterPos:this.pos,playerPos:t.playerPos,canSee:c,hear:r,flashlightHit:h,distance:o,atGoal:_,hiding:t.hiding,hideSpot:t.hideSpot,holdBreath:t.holdBreath,allowChase:t.allowChase,aggression:t.aggression,rng:Math.random,waypoints:t.waypoints,knowsHide:f,searchSpots:t.searchSpots,checkedIds:this.checked});this.bb=m.bb;const p=wv(this.beamTime,this.beamImmune);return(p==="blind"||p==="banish")&&(this.bb.blindTime=Math.max(this.bb.blindTime,1.2),(this.bb.state==="Chase"||this.bb.state==="Attack")&&(this.bb.state="LostPlayer",this.bb.goal=this.bb.lastSeen?{...this.bb.lastSeen}:{...this.pos})),p==="banish"&&(this.concealed=!0,this.beamTime=0,this.beamImmune=12),this.concealed?(this.group.visible=!1,this.glide=0,this.animate(t.dt,0),{attack:!1,foundHiding:!1,state:this.bb.state,entered:this.bb.state!==e?this.bb.state:null}):(this.group.visible=!0,!this.concealed&&this.bb.state==="Patrol"&&this.bb.stateTime>8&&Math.random()<t.dt*.04&&t.waypoints.length&&(this.watch=1.4+Math.random()*2.2,this.bb.waypointIndex=(this.bb.waypointIndex+1+Math.floor(Math.random()*3))%t.waypoints.length,this.bb.goal={...t.waypoints[this.bb.waypointIndex]},this.path=[]),this.follow(t,m.speed),this.animate(t.dt,m.speed),this.group.position.set(this.pos.x,this.pos.y,this.pos.z),this.group.rotation.y=this.yaw,{attack:m.attackPulse,foundHiding:m.foundHiding,state:this.bb.state,entered:this.bb.state!==e?this.bb.state:null})}follow(t,e){if(this.watch>0){this.watch=Math.max(0,this.watch-t.dt),this.glide+=(0-this.glide)*Math.min(1,t.dt*6);return}const n=this.bb.goal,s=this.bb.state==="Chase"||this.bb.state==="Attack",r=(n&&e>=.05?e:0)*(s?1.55:1),o=r>this.glide?2.2:5.5;if(this.glide+=(r-this.glide)*Math.min(1,t.dt*o),!n||this.glide<.05)return;e=this.glide;const a=`${n.x.toFixed(1)}|${n.z.toFixed(1)}|${this.bb.state}`;if(this.repath-=t.dt,a!==this.goalKey||this.repath<=0||this.pathI>=this.path.length){this.goalKey=a,this.repath=this.bb.state==="Chase"?.35:.8;const E=uv(t.nav,this.pos,n,t.query);this.path=E??[],this.pathI=0}let l=n.x,c=n.z;if(this.pathI<this.path.length){const E=this.path[this.pathI];l=E.x,c=E.z,Math.hypot(E.x-this.pos.x,E.z-this.pos.z)<.4&&this.pathI++}const h=this.blockingDoor(t,l,c);if(h&&(t.requestOpen(h.id),(t.openAmount.get(h.id)??0)<.4&&Math.hypot((h.axis==="x"?h.coord:h.center)-this.pos.x,(h.axis==="z"?h.coord:h.center)-this.pos.z)<1.05))return;const u=l-this.pos.x,d=c-this.pos.z,f=Math.hypot(u,d)||1,g=Math.min(e*t.dt,f),_=Hh(this.pos,{x:u/f*g,z:d/f*g},Iv,kv,!1,t.colliders);this.pos.x=_.x,this.pos.z=_.z;const m=t.floorAt(this.pos.x,this.pos.z,this.pos.y);m!==null&&(this.pos.y=m);const p=Math.atan2(u,d);if(this.yaw+=_o(this.yaw,p)*Math.min(1,t.dt*6),Math.hypot(this.pos.x-this.anchorX,this.pos.z-this.anchorZ)<.025?this.stuckT+=t.dt:(this.stuckT=0,this.anchorX=this.pos.x,this.anchorZ=this.pos.z),this.stuckT>.8&&t.waypoints.length){if(this.stuckT=0,this.stuckTries++,this.stuckTries>=3){this.stuckTries=0,this.concealed=!0;return}this.bb.waypointIndex=(this.bb.waypointIndex+1)%t.waypoints.length,this.bb.goal={...t.waypoints[this.bb.waypointIndex]},this.path=[],this.goalKey=""}}blockingDoor(t,e,n){let s=null,r=1.45;for(const o of t.doors){if(o.kind!=="door"||t.doorLocked(o.id)||(t.openAmount.get(o.id)??0)>.7)continue;const a=o.axis==="x"?o.coord:o.center,l=o.axis==="z"?o.coord:o.center,c=Math.hypot(a-this.pos.x,l-this.pos.z);if(c>r)continue;const h=Math.atan2(a-this.pos.x,l-this.pos.z),u=Math.atan2(e-this.pos.x,n-this.pos.z);Math.abs(_o(h,u))>1.2||(s=o,r=c)}return s}animate(t,e){const n=bv(this.bb.state,e),s=n.clip==="Run"||n.clip==="Attack",r=n.clip==="Search",o=n.clip==="Walk"||n.clip==="Run";this.phase+=t*(o?(1.7+Math.min(e,4)*.7)*n.timeScale:.45);const a=o?Math.sin(this.phase):r?Math.sin(this.phase*.6)*.25:0,l=n.clip==="Run"?.62:.48;if(this.thighL&&this.shinL&&this.footL&&this.poseLeg(this.thighL,this.shinL,this.footL,a,l),this.thighR&&this.shinR&&this.footR&&this.poseLeg(this.thighR,this.shinR,this.footR,-a,l),this.armL&&this.foreL&&this.poseArm(this.armL,this.foreL,-a,s,-1),this.armR&&this.foreR&&this.poseArm(this.armR,this.foreR,a,s,1),this.spine){const c=s?.62:.36;this.spine.rotation.x+=(c-this.spine.rotation.x)*Math.min(1,t*3)}if(this.neck&&this.spine&&(this.neck.rotation.x=-this.spine.rotation.x*.7),this.pelvis){const c=o?Math.abs(Math.sin(this.phase*2))*.02:0;this.pelvis.position.y=.96+c}this.head&&(this.head.rotation.x=(s?.12:.02)+Math.sin(this.phase*.37)*.04,this.head.rotation.y=Math.max(-.7,Math.min(.7,this.lookAt))*.35+Math.sin(this.phase*.23)*.06,this.head.rotation.z=Math.sin(this.phase*.51)*.04)}poseLeg(t,e,n,s,r){t.rotation.x=s*r;const o=.1+Math.max(0,s)*.95;e.rotation.x=o,n.rotation.x=-o*.75}poseArm(t,e,n,s,r){t.rotation.x=(s?.85:.18)+n*(s?.35:.5),t.rotation.z=r*(s?.05:.12),e.rotation.x=(s?.45:.22)+Math.abs(n)*.2}forgetHides(){this.checked.clear()}}function Pi(i,t,e,n,s=-1){const r=new Kt,o=new J(Ov(s<0?t:e,s<0?e:t,i),n);o.position.y=s*i/2,o.castShadow=!0;const a=new J(new pe(t,8,6),n);return a.castShadow=!0,r.add(o,a),r}function Ve(i,t=1,e=1,n=1){return i.scale.set(t,e,n),i.castShadow=!0,i}function Fv(){const i=[new st(.12,0),new st(.15,.12),new st(.19,.28),new st(.17,.4),new st(.09,.52)],t=new Pr(i,12);return Xh(t,.008),t}function Ov(i,t,e){const n=new Ae(i,t,e,7,3);return Xh(n,.004),n}function Xh(i,t){const e=i.attributes.position;for(let n=0;n<e.count;n++){const s=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.sin(s*21+r*8)*Math.cos(o*17+r*6)*t,l=Math.hypot(s,o)||1;e.setXYZ(n,s+s/l*a,r,o+o/l*a)}i.computeVertexNormals()}function zv(){const i=new Lh([new I(-.09,.028,.1),new I(-.045,.016,.104),new I(0,.012,.106),new I(.045,.016,.104),new I(.09,.028,.1)]);return new Wa(i,18,.0024,4,!1)}function yc(i,t,e,n,s,r){const o=new Kt,a=new J(new pe(.026,12,8),i);a.scale.set(1.45,.48,.4);const l=new J(new pe(.008,8,6),t);return l.position.z=.03,o.add(a,l),o.position.set(e,n,s),o.rotation.z=r,o}function Mc(){return{tension:10,stress:10,sinceScare:30,sinceSoft:4,suppress:0,softWindow:0,windowLeft:30}}function Bv(i){return Oh(28,14,Je(i,0,100)/100)}const Mo=["flicker","whisper","creak","knock","phone","breath","lightOut","radio","drop","thunder"];function Hv(i,t){const e={...i},n=Math.max(0,t.dt);t.tookDamage&&(e.suppress=Math.max(e.suppress,8)),e.suppress=Math.max(0,e.suppress-n),e.sinceScare+=n,e.sinceSoft+=n,e.windowLeft-=n,e.windowLeft<=0&&(e.windowLeft=30,e.softWindow=0);const s=1-Je(t.monsterDist/24,0,1);let r=10;r+=s*44,t.inDark&&(r+=12),t.sprinting&&(r+=6),t.health<45&&(r+=14),r+=Je(t.story,0,1)*16,t.hiding&&(r-=12),t.monsterDist>30&&(r-=6),r=Je(r,0,100);const o=1-Math.exp(-n*.4);e.stress=e.stress+(r-e.stress)*o,e.tension=Je(e.stress+(t.tookDamage?10:0),0,100);let a=null;if(t.blocked){const d=Je(e.tension/100*(e.suppress>0?.22:1),0,1);return{state:e,event:a,aggression:d}}const l=Bv(e.tension),c=e.tension>30?.15+e.tension/100*.7:.02,h=t.rng();if(e.suppress<=0&&e.sinceScare>=l&&h<c*Math.min(n,.5))a={type:"scare"},e.sinceScare=0;else{const d=Oh(10,4,e.tension/100),f=.28+e.tension/120,g=t.rng();e.sinceSoft>=d&&e.softWindow<4&&g<f*Math.min(n,.5)&&(a={type:"soft",kind:Mo[Math.floor(t.rng()*Mo.length)%Mo.length]},e.sinceSoft=0,e.softWindow+=1)}const u=Je(e.tension/100*(e.suppress>0?.22:1),0,1);return{state:e,event:a,aggression:u}}class Gv{dust;lightning=0;constructor(t,e=0){const n=new Ee;n.setAttribute("position",new qe(new Float32Array(3),3)),this.dust=new Dh(n,new Ha({transparent:!0,opacity:0,size:.01})),this.dust.visible=!1}update(t,e,n,s){this.dust.visible=!1,this.lightning=0}strike(){this.lightning=0}}function Vv(){return{global:-999,byKind:{}}}function Wv(i,t,e,n=!1){if(n||t==="attack")return!0;if(e-i.global<12)return!1;const s=i.byKind[t]??-999,r=t==="fake"?18:34;return e-s>=r}function Xv(i,t,e){return{global:e,byKind:{...i.byKind,[t]:e}}}function qv(i){const t=[{k:"whisper",w:3},{k:"fake",w:2.2},{k:"flash",w:i.inDark?1.2:3},{k:"ceiling",w:1.8},{k:"shadow",w:i.inDark?3:1},{k:"behind",w:i.monsterNear?.6:2.6},{k:"door",w:i.doorOpenNear?3.4:0},{k:"still",w:i.inMannequinRoom?4:0},{k:"face",w:i.tension>68&&i.monsterNear?1.6:0}],e=t.reduce((s,r)=>s+r.w,0);let n=i.rng()*e;for(const s of t)if(!(s.w<=0)&&(n-=s.w,n<=0))return s.k;return"whisper"}class Yv{constructor(t,e){this.audio=e,this.faceMesh=new J(new we(.9,1.15),new ze({map:$v(),transparent:!0,depthTest:!1})),this.faceMesh.position.set(0,0,-.42),this.faceMesh.visible=!1,this.faceMesh.renderOrder=20,this.behindMesh=new J(new we(.7,1.6),new ze({color:"#050505",transparent:!0,opacity:.92,depthTest:!1,side:Se})),this.behindMesh.position.set(.15,-.1,.55),this.behindMesh.visible=!1,this.behindMesh.renderOrder=19,t.add(this.faceMesh),t.add(this.behindMesh)}memory=Vv();fx={trauma:0,flash:0,chroma:0,face:0,behind:0,subtitle:""};faceMesh;behindMesh;kindTimer=0;lastKind=null;lastAt=-999;trigger(t,e,n=!1){return Wv(this.memory,t,e,n)?(this.memory=Xv(this.memory,t,e),this.lastKind=t,this.lastAt=e,this.kindTimer=t==="attack"||t==="face"?.55:.7,this.fx.trauma=t==="fake"||t==="whisper"?.25:t==="attack"?1:.65,this.fx.chroma=t==="attack"||t==="face"?2.4:1,this.fx.flash=t==="flash"||t==="attack"?.85:.25,this.fx.face=t==="face"||t==="attack"?1:0,this.fx.behind=t==="behind"?1:0,this.faceMesh.visible=this.fx.face>0,this.behindMesh.visible=this.fx.behind>0,t==="attack"||t==="face"?this.audio.play("scream"):t==="whisper"||t==="behind"?this.audio.play("whisper"):t==="fake"?this.audio.play("door",void 0,{volume:.4}):this.audio.play("sting"),t==="whisper"&&(this.fx.subtitle="…gå herfra…"),t==="behind"&&(this.fx.subtitle="…bag dig."),!0):!1}dynamic(t,e){const n=qv(e);return this.trigger(n,t)?n:null}dismiss(){this.kindTimer=0,this.fx={trauma:0,flash:0,chroma:.35,face:0,behind:0,subtitle:""},this.faceMesh.visible=!1,this.behindMesh.visible=!1}update(t){if(this.kindTimer-=t,this.fx.trauma=Math.max(0,this.fx.trauma-t*.8),this.fx.flash=Math.max(0,this.fx.flash-t*2.5),this.fx.chroma=Math.max(.35,this.fx.chroma-t*1.5),this.kindTimer<=0)this.fx.face=0,this.fx.behind=0,this.faceMesh.visible=!1,this.behindMesh.visible=!1,this.fx.subtitle&&(this.fx.subtitle="");else if(this.faceMesh.visible){const e=1-this.kindTimer/.55,n=.4+e*1.5;this.faceMesh.scale.set(n,n,1),this.faceMesh.position.z=-.55+e*.2}}}function $v(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#0a0606",t.fillRect(0,0,512,512),t.fillStyle="#d7c3b2",t.beginPath(),t.ellipse(256,250,150,190,0,0,Math.PI*2),t.fill(),t.fillStyle="#1a0a0a",t.beginPath(),t.ellipse(190,220,28,18,-.2,0,Math.PI*2),t.ellipse(320,230,34,16,.3,0,Math.PI*2),t.fill(),t.fillStyle="#6a1010",t.fillRect(168,214,18,8),t.fillRect(308,224,22,8),t.strokeStyle="#4a2a28",t.lineWidth=4,t.beginPath(),t.moveTo(200,340),t.quadraticCurveTo(256,390,330,330),t.stroke(),t.strokeStyle="rgba(40,10,10,0.5)",t.beginPath(),t.moveTo(256,180),t.lineTo(248,300),t.stroke();const e=new Cr(i);return e.colorSpace=Te,e}const qh=.3,xr=1.7,Kv=1.05,Yh=1.62,jv=1;function Zv(i,t,e,n){const s=Math.min(.05,Math.max(0,t.dt)),r={...i,justLanded:!1};if(s<=0)return r;let o=t.crouch||_c(r.y,r.x,r.z,xr,e);const a=Math.abs(t.forward)+Math.abs(t.strafe)>.01,l=t.sprint&&!o&&r.stamina>5&&a&&r.grounded,c=o?1.18:l?4.35:2.32;l?r.stamina=Je(r.stamina-16.5*s,0,100):r.stamina=Je(r.stamina+(o?7:13)*s,0,100),t.jump&&r.grounded&&!o&&r.stamina>14&&(r.vy=4.25,r.stamina=Je(r.stamina-16,0,100),r.grounded=!1);const h=zh(r.yaw),u=Bh(r.yaw);let d=h.x*t.forward+u.x*t.strafe,f=h.z*t.forward+u.z*t.strafe;const g=Math.hypot(d,f);g>1&&(d/=g,f/=g);const _=d*c,m=f*c,p=r.grounded?14:3.2,b=1-Math.exp(-p*s);r.vx+=(_-r.vx)*b,r.vz+=(m-r.vz)*b;const E=Hh(r,{x:r.vx*s,z:r.vz*s},qh,o?Kv:xr,o,e);n(E.x,E.z,r.y)===null?(r.vx=0,r.vz=0):(r.x=E.x,r.z=E.z,r.vx=(r.x-i.x)/s,r.vz=(r.z-i.z)/s);const S=n(r.x,r.z,r.y);return S!==null&&(r.vy-=12.5*s,r.y+=r.vy*s,r.y<=S?(r.justLanded=r.vy<-3.4,r.y=S,r.vy=0,r.grounded=!0):r.grounded=!1),_c(r.y,r.x,r.z,xr,e)&&(o=!0),r.crouching=o,r.pitch=Je(r.pitch,-1.25,1.25),r}function Jv(i,t,e,n=11){const s=Je(e,0,.1),r=1-Math.exp(-Math.max(0,n)*s);return i+(t-i)*r}function Qv(i){return i?jv:Yh}function tx(i,t,e,n,s){return i?Wh(t,e,n,Math.cos(.5),16,s):!1}function ex(i){const t=i.cells.filter(s=>{const r=Math.hypot(s.x-i.player.x,s.z-i.player.z);if(r<7||r>26||Math.abs(s.y-i.player.y)>5||i.recent.some(h=>Math.hypot(h.x-s.x,h.z-s.z)<3.5)||Math.hypot(s.x-i.from.x,s.z-i.from.z)<4)return!1;const o=s.x-i.player.x,a=s.z-i.player.z,l=Math.hypot(o,a)||1;return!((i.forward.x*o+i.forward.z*a)/l>.2&&i.visible(s)||i.visible(s))});if(!t.length)return null;const e=t.filter(s=>Math.hypot(s.x-i.player.x,s.z-i.player.z)>Math.hypot(i.from.x-i.player.x,i.from.z-i.player.z)),n=e.length?e:t;return n[Math.floor(i.rng()*n.length)%n.length]}function Es(){return{jumps:[],shadowAt:-100,slagter:0,slagterT:0,beats:[]}}const nx=[{id:"stue102",room:"operationsstue",needLight:!0},{id:"arkiv",room:"arkiv",needLight:!1}];function ix(i,t){const e={jumps:i.jumps.slice(),shadowAt:i.shadowAt,slagter:i.slagter,slagterT:i.slagterT,beats:(i.beats??[]).slice()},n=[];if(t.room&&t.room!==t.prevRoom){for(const s of nx)s.room!==t.room||e.jumps.includes(s.id)||s.needLight&&!t.flashlight||(e.jumps.push(s.id),n.push(`jump:${s.id}`));t.room==="slagterum"&&e.slagter===0&&(e.slagter=1,e.slagterT=0,n.push("silence"))}return e.slagter===1?(e.slagterT+=t.dt,e.slagterT>.55&&(e.slagter=2,e.slagterT=0,n.push("deep"),n.push("figure"))):e.slagter===2?(e.slagterT+=t.dt,(t.flashlight!==t.prevFlash||t.lookedAway||e.slagterT>8)&&(e.slagter=3,e.slagterT=0,n.push("hide-figure"))):e.slagter===3&&(e.slagterT+=t.dt,e.slagterT>2&&(e.slagter=4,n.push("steps"))),t.atDoor&&t.time-e.shadowAt>24&&!n.some(s=>s.startsWith("jump"))&&(e.shadowAt=t.time,n.push("shadow")),{state:e,cues:n}}const sx=90;function bc(){return{epoch:1,recoveryUntil:0,pending:[]}}function rx(i){return{epoch:i.epoch+1,recoveryUntil:0,pending:[]}}function ox(i,t,e){return{...i,recoveryUntil:Math.max(i.recoveryUntil,t+e)}}function ax(i,t){return i.pending.some(e=>e.id===t.id)?i:{...i,pending:[...i.pending,{...t,epoch:i.epoch}]}}function lx(i,t){const e=Math.max(0,t.dt);let n=i.pending.filter(a=>a.epoch===i.epoch&&!t.firedIds.includes(a.id));if(e>.5||t.blocked)return e>.5&&(n=n.filter(a=>a.dueTime>t.time)),{state:{...i,pending:n},fired:[]};const r=n.filter(a=>a.dueTime<=t.time&&(a.roomId===""||a.roomId===t.room)).sort((a,l)=>l.priority-a.priority||a.dueTime-l.dueTime).find(a=>a.size==="minor"||t.time>=i.recoveryUntil)??null,o=r?.size==="major";return r?{state:{...i,pending:n.filter(a=>a.id!==r.id),recoveryUntil:o?t.time+sx:i.recoveryUntil},fired:[r]}:{state:{...i,pending:n},fired:[]}}const cx=new Set(["note_log","note_code","note_generator"]);function hx(i){const t=[],e=(s,r)=>{i.fired.includes(s)||t.push({id:s,dueTime:i.time,roomId:r,priority:2,group:"major",size:"major"})};return i.time>=25&&i.room==="reception"&&e("reception_wake","reception"),i.readIds.some(s=>cx.has(s)||s.startsWith("file_"))&&i.room==="arkiv"&&e("arkiv_names","arkiv"),i.room==="operationsstue"&&e("obduktion_witness","operationsstue"),i.room==="obduktion"&&e("obduktion_witness","obduktion"),t}const ux={reception:"airRumble",patientgang:"waterDrop",operationsstue:"pipeKnock",slagterum:"pipeKnock",arkiv:"airRumble",laboratorium:"airRumble",obduktion:"pipeKnock",personalerum:"airRumble",kaeldergang:"waterDrop",kapel:"distantBell",observation:"airRumble",kammer:"pipeKnock",trappe0:"pipeKnock",trappe1:"pipeKnock",trappe2:"waterDrop"},Sc={x:45.8,y:5.2,z:9.2};function bo(){return{roomId:"",nextAt:8,seq:0}}function dx(i,t){const e=t==="waterDrop"||t==="distantBell"?.82:.16,n=t==="distantBell"?.78:.22;return{kind:t,x:i.x+i.w*e,y:i.floorY+2.2,z:i.z+i.d*n}}function fx(i,t){const e=t.room,n=e?.id??"",s=n!==i.roomId;let r=i.nextAt;(s||t.dt>.5)&&(r=Math.max(r,t.time+6));const o=e?ux[e.id]:void 0;if(!e||!o||t.time<r)return{state:{...i,roomId:n,nextAt:r},cue:null};const a=i.seq+1;return{state:{roomId:n,nextAt:t.time+16+a%6,seq:a},cue:dx(e,o)}}function px(i,t,e){return i?t-e>=11:!1}function mx(i,t){if(Math.abs(t-i)<.001)return!1;const e=i<=.02||i>=.98,n=t>.02&&t<.98;return e&&n}const Ot={0:0,1:4,2:8},Fi=3.5,Le=.5,er=.45,wc="door_stilhed",nr=(i,t,e,n,s,r,o,a,l,c)=>({id:i,name:t,floor:e,x:n,z:s,w:r,d:o,floorMat:a,wallMat:l,light:c}),cn=[...[["reception","Receptionen","wood","panel","always-warm"],["patientgang","Patientgangen","tile","plaster","always-dim"],["operationsstue","Operationsstuen","tile","tile","power"],["slagterum","Slagterummet","tile","brick","always-red"],["trappe0","Trappeopgang","concrete","damp","always-dim"]].map((i,t)=>nr(i[0],i[1],0,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),...[["arkiv","Arkivrummet","wood","panel","always-dim"],["laboratorium","Det aflåste laboratorium","tile","tile","power"],["obduktion","Obduktionssalen","tile","tile","always-dim"],["personalerum","Det forladte personalerum","carpet","plaster","always-warm"],["trappe1","Trappeopgang","concrete","damp","always-dim"]].map((i,t)=>nr(i[0],i[1],1,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),...[["kaeldergang","Kældergangen","concrete","damp","always-dim"],["kapel","Det mørke kapel","stone","brick","always-candle"],["observation","Observationsrummet","tile","plaster","none"],["kammer","Det sidste kammer","concrete","damp","always-dim"],["trappe2","Trappeopgang","concrete","damp","none"]].map((i,t)=>nr(i[0],i[1],2,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),nr("stilhed","Ud til stilheden",2,36,12,12,6,"concrete","damp","none")],$h=[{id:"door_rec_pat",a:"reception",b:"patientgang",kind:"door",signA:"Patientgangen",signB:"Receptionen"},{id:"door_pat_op",a:"patientgang",b:"operationsstue",kind:"door",signA:"Operationsstuen",signB:"Gang"},{id:"door_op_slag",a:"operationsstue",b:"slagterum",kind:"door",signA:"Slagterummet",signB:"Operationsstuen"},{id:"door_slag_trappe",a:"slagterum",b:"trappe0",kind:"door",signA:"Trappe",signB:"Slagterummet"},{id:"door_arkiv_lab",a:"arkiv",b:"laboratorium",kind:"door",locked:!0,keyId:"key_op",signA:"Laboratorium",signB:"Arkivrummet"},{id:"door_lab_obd",a:"laboratorium",b:"obduktion",kind:"door",signA:"Obduktionssalen",signB:"Laboratorium"},{id:"door_obd_pers",a:"obduktion",b:"personalerum",kind:"door",signA:"Personalerum",signB:"Obduktionssalen"},{id:"door_pers_trappe",a:"personalerum",b:"trappe1",kind:"door",signA:"Trappe",signB:"Personalerum"},{id:"door_kael_kapel",a:"kaeldergang",b:"kapel",kind:"door",signA:"Kapellet",signB:"Kældergangen"},{id:"door_kapel_obs",a:"kapel",b:"observation",kind:"door",signA:"Observation",signB:"Kapellet"},{id:"door_obs_kammer",a:"observation",b:"kammer",kind:"door",signA:"Det sidste kammer",signB:"Observation"},{id:"door_kammer_trappe",a:"kammer",b:"trappe2",kind:"door",signA:"Trappe",signB:"Kammeret"},{id:"door_stilhed",a:"kammer",b:"stilhed",kind:"door",locked:!0,signA:"UD TIL STILHEDEN",signB:""}],Ma=[{id:"stair_01",x:50.1,z:.6,w:3.8,d:4.75,fromFloor:0,toFloor:1,axis:"z"},{id:"stair_12",x:50.1,z:6.65,w:3.8,d:4.75,fromFloor:1,toFloor:2,axis:"z"}];function At(i,t,e,n,s,r,o,a){return{id:i,room:t,kind:e,x:n,z:s,rot:0,w:r,d:o,h:a,block:"always"}}const Ir=[At("rec_desk","reception","table",4,9.5,1.6,.7,.78),At("rec_chair","reception","chair",4,8.4,.45,.45,.9),At("pat_bench","patientgang","bench",18,2.2,1.4,.45,.48),At("op_table","operationsstue","gurney",30,9.2,1.8,.7,.85),At("op_cab","operationsstue","cabinet",26.8,2.2,.6,1.4,1.6),At("slag_table","slagterum","table",42,9.4,1.8,.8,.8),At("slag_hook","slagterum","beam",40,2.4,2.2,.2,.15),At("ark_shelf","arkiv","shelf",2.2,9.2,.5,2.4,2),At("ark_table","arkiv","table",8,2.4,1.2,.7,.75),At("lab_bench","laboratorium","table",16,9.2,1.6,.7,.9),At("obd_table","obduktion","gurney",30,9,1.9,.7,.8),At("pers_sofa","personalerum","sofa",42,9.2,1.6,.7,.7),At("kap_altar","kapel","altar",18,9.4,1.4,.6,1),At("obs_desk","observation","desk",30,2.4,1.2,.6,.75),At("kam_bed","kammer","bed",40,9,1.8,.9,.55),At("rec_records","reception","recordcabinet",1.15,3.25,1.2,.48,1.8),At("rec_filing","reception","filing",8.8,2,.72,.56,1.35),At("rec_sidechair","reception","chair",7.1,9.65,.45,.45,.9),At("rec_sideboard","reception","sideboard",9.5,9.8,1.35,.52,1),At("pat_gurney","patientgang","gurney",15.1,9.3,1.9,.7,.85),At("pat_locker","patientgang","locker",14,2.2,.76,.65,1.8),At("pat_wheelchair","patientgang","wheelchair",22.3,2,.65,.82,1.1),At("op_screen","operationsstue","foldscreen",34.7,9.55,1.4,.2,1.95),At("op_iv","operationsstue","ivstand",27.4,9,.32,.32,1.85),At("op_trolley","operationsstue","medicalcart",33.6,2.15,.72,.56,.9),At("slag_locker","slagterum","locker",38.1,9.6,.9,.6,1.8),At("slag_cart","slagterum","medicalcart",45.4,2.1,.85,.58,.94),At("slag_shelf","slagterum","shelf",45.5,9.7,.5,2.2,2),At("ark_file","arkiv","filing",3.7,2,.78,.56,1.4),At("ark_records","arkiv","recordcabinet",9,9.5,1.4,.48,1.8),At("ark_chair","arkiv","chair",8,3.5,.46,.46,.92),At("lab_cart","laboratorium","medicalcart",22.4,2,.74,.56,.9),At("lab_screen","laboratorium","foldscreen",21.8,9.5,1.4,.17,1.9),At("lab_iv","laboratorium","ivstand",13.5,2.3,.32,.32,1.8),At("obd_cabinet","obduktion","recordcabinet",26.4,2,1.4,.5,1.85),At("obd_trolley","obduktion","medicalcart",34.3,9.5,.82,.57,.85),At("obd_screen","obduktion","foldscreen",34.1,2,1.45,.18,1.95),At("pers_radio","personalerum","sideboard",45.8,9.2,1.1,.5,.9),At("pers_filing","personalerum","filing",38.2,2.2,.75,.55,1.35),At("pers_armchair","personalerum","chair",39.4,9.15,.46,.46,.93),At("kael_shelf","kaeldergang","shelf",2.1,9.55,.5,2.1,1.9),At("kael_cart","kaeldergang","medicalcart",9.55,2,.8,.57,.9),At("kael_locker","kaeldergang","locker",7.4,9.65,.74,.56,1.75),At("kap_pew1","kapel","pew",15,2,1.65,.5,.9),At("kap_pew2","kapel","pew",20.7,2,1.65,.5,.9),At("kap_filing","kapel","recordcabinet",22.4,9.6,.75,.45,1.6),At("obs_screen","observation","foldscreen",26,9.5,1.4,.18,1.9),At("obs_gurney","observation","gurney",33.6,9.2,1.75,.7,.85),At("obs_locker","observation","locker",34.4,2,.8,.56,1.8),At("kam_cart","kammer","medicalcart",45.5,2.15,.8,.56,.9),At("kam_dresser","kammer","dresser",38.1,2,1.1,.54,1.2),At("kam_chair","kammer","chair",45.5,9.5,.46,.46,.9)],Kh=[{id:"bat_gang",room:"patientgang",itemId:"battery",x:20,z:9.2},{id:"bat_pers",room:"personalerum",itemId:"battery",x:44,z:3},{id:"key_op_pick",room:"operationsstue",itemId:"key_op",x:32,z:3},{id:"key_arkiv_pick",room:"arkiv",itemId:"key_arkiv",x:6,z:3.2},{id:"key_kapel_pick",room:"kapel",itemId:"key_kapel",x:14.5,z:9}],gx=[],vx=[],xx=[{room:"slagterum",kind:"blood",x:40,z:6.5,rot:.2,w:1.4,d:.5},{room:"obduktion",kind:"blood",x:28,z:8,rot:.4,w:1.2,d:.45},{room:"kammer",kind:"puddle",x:42,z:4,rot:0,w:1.1,d:.8}],_x={};function yx(){Mx();const i=bx(),t=Sx(i),e=Ex(t),n=Ax(i,e),s=Rx();return{rooms:cn,doors:i,walls:t,colliders:e,props:Ir,pickups:Kh,devices:gx,hides:vx,decals:xx,stairs:Ma,nav:n,lights:s}}function Mx(){for(let t=0;t<cn.length;t++)for(let e=t+1;e<cn.length;e++){const n=cn[t],s=cn[e];if(n.floor!==s.floor)continue;const r=Math.min(n.x+n.w,s.x+s.w)-Math.max(n.x,s.x),o=Math.min(n.z+n.d,s.z+s.d)-Math.max(n.z,s.z);if(r>.02&&o>.02)throw new Error(`Rum overlapper: ${n.id} og ${s.id}`)}const i=new Set(cn.map(t=>t.id));for(const t of $h){if(!i.has(t.a)||!i.has(t.b))throw new Error(`Forbindelse ${t.id} mangler rum`);if(!jh(qn(t.a),qn(t.b)))throw new Error(`Forbindelse ${t.id} rører ikke`)}for(const t of Ir){const e=qn(t.room);if(!Ec(e,t.x,t.z,.05))throw new Error(`Prop ${t.id} er uden for ${t.room}`)}for(const t of Kh){const e=qn(t.room);if(!Ec(e,t.x,t.z,.02))throw new Error(`Pickup ${t.id} er uden for ${t.room}`)}}function qn(i){const t=cn.find(e=>e.id===i);if(!t)throw new Error(`Ukendt rum ${i}`);return t}function Ec(i,t,e,n=0){return t>=i.x-n&&t<=i.x+i.w+n&&e>=i.z-n&&e<=i.z+i.d+n}function jh(i,t){if(i.floor!==t.floor)return null;const e=Math.max(i.z,t.z),n=Math.min(i.z+i.d,t.z+t.d),s=Math.max(i.x,t.x),r=Math.min(i.x+i.w,t.x+t.w),o=Math.abs(i.x+i.w-t.x)<.03||Math.abs(t.x+t.w-i.x)<.03,a=Math.abs(i.z+i.d-t.z)<.03||Math.abs(t.z+t.d-i.z)<.03;return o&&n-e>.4?{axis:"x",coord:Math.abs(i.x+i.w-t.x)<.03?i.x+i.w:t.x+t.w,min:e,max:n}:a&&r-s>.4?{axis:"z",coord:Math.abs(i.z+i.d-t.z)<.03?i.z+i.d:t.z+t.d,min:s,max:r}:null}function bx(){return $h.map(i=>{const t=qn(i.a),e=qn(i.b),n=jh(t,e);if(!n)throw new Error(`Dør ${i.id} uden kant`);const s=n.max-n.min,r=.26;let o=i.width??(i.kind==="arch"?Math.min(2.7,s-.8):1.15);if(o=Math.min(o,s-r*2),o<.82)throw new Error(`Dør ${i.id} er for smal (${o.toFixed(2)} / overlap ${s.toFixed(2)})`);const a=i.at??.5;let l=n.min+s*a;const c=o/2;return l=Math.max(n.min+r+c,Math.min(n.max-r-c,l)),{id:i.id,kind:i.kind,floor:t.floor,axis:n.axis,coord:n.coord,spanMin:l-c,spanMax:l+c,center:l,width:o,locked:!!i.locked,keyId:i.keyId,needsPower:i.needsPower,a:i.a,b:i.b,signA:i.signA,signB:i.signB}})}function Sx(i){const t=i.map(n=>({floor:n.floor,axis:n.axis,coord:n.coord,min:n.spanMin,max:n.spanMax})),e=[];for(const n of cn){const s=[{axis:"z",coord:n.z,min:n.x,max:n.x+n.w},{axis:"z",coord:n.z+n.d,min:n.x,max:n.x+n.w},{axis:"x",coord:n.x,min:n.z,max:n.z+n.d},{axis:"x",coord:n.x+n.w,min:n.z,max:n.z+n.d}];for(const r of s){let o=[[r.min,r.max]],a=!0;for(const l of cn){if(l.id===n.id||l.floor!==n.floor)continue;const c=wx(r,l);c&&(a=!1,l.id<n.id&&(o=Tc(o,c.min,c.max)))}for(const l of t)l.floor!==n.floor||l.axis!==r.axis||Math.abs(l.coord-r.coord)>.04||(o=Tc(o,l.min,l.max));for(const[l,c]of o)c-l<.12||e.push({floor:n.floor,axis:r.axis,coord:r.coord,min:l,max:c,mat:n.wallMat,exterior:a,roomId:n.id})}}return e}function wx(i,t){if(i.axis==="x"){const o=t.x+t.w,a=t.x;if(Math.abs(o-i.coord)>.03&&Math.abs(a-i.coord)>.03)return null;const l=Math.max(i.min,t.z),c=Math.min(i.max,t.z+t.d);return c-l<.2?null:{min:l,max:c}}const e=t.z+t.d,n=t.z;if(Math.abs(e-i.coord)>.03&&Math.abs(n-i.coord)>.03)return null;const s=Math.max(i.min,t.x),r=Math.min(i.max,t.x+t.w);return r-s<.2?null:{min:s,max:r}}function Tc(i,t,e){const n=[];for(const[s,r]of i){if(e<=s||t>=r){n.push([s,r]);continue}t>s&&n.push([s,Math.max(s,t)]),e<r&&n.push([Math.min(r,e),r])}return n}function Ex(i){const t=[];for(const n of i){const s=Ot[n.floor],r=s+Fi;n.axis==="x"?t.push({minX:n.coord-.22/2,maxX:n.coord+.22/2,minY:s,maxY:r,minZ:n.min,maxZ:n.max,id:"wall"}):t.push({minX:n.min,maxX:n.max,minY:s,maxY:r,minZ:n.coord-.22/2,maxZ:n.coord+.22/2,id:"wall"})}for(const n of Ir){if(n.block==="none")continue;const s=qn(n.room),{bw:r,bd:o}=Zh(n.w,n.d,n.rot),a=Ot[s.floor]+(n.yOff??0);t.push({minX:n.x-r/2,maxX:n.x+r/2,minY:a,maxY:a+n.h,minZ:n.z-o/2,maxZ:n.z+o/2,id:n.id,standOnly:n.block==="stand",blocksUntilUnlock:n.blocksUntilUnlock})}return t}function Zh(i,t,e){const n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e));return{bw:i*n+t*s,bd:i*s+t*n}}function Tx(i,t){if(i.kind!=="door"||t>.28)return null;const e=Ot[i.floor],n=.16;return i.axis==="x"?{minX:i.coord-n/2,maxX:i.coord+n/2,minY:e,maxY:e+2.55,minZ:i.spanMin,maxZ:i.spanMax,id:i.id}:{minX:i.spanMin,maxX:i.spanMax,minY:e,maxY:e+2.55,minZ:i.coord-n/2,maxZ:i.coord+n/2,id:i.id}}function ir(i,t){return i.kind==="arch"?!1:!!(i.locked&&!t.has(i.id))}function So(i,t,e){const n=i.colliders.filter(s=>!s.blocksUntilUnlock||!t.has(s.blocksUntilUnlock));for(const s of i.doors){const r=Tx(s,e.get(s.id)??0);r&&n.push(r)}return n}function Ax(i,t){const e=[],n=new Map,s=l=>{const c={...l,id:e.length,links:[]};return e.push(c),c},r=(l,c,h)=>{for(const u of Ir){if(u.block==="none"||u.blocksUntilUnlock||qn(u.room).floor!==h)continue;const{bw:d,bd:f}=Zh(u.w,u.d,u.rot),g=.12;if(Math.abs(l-u.x)<=d/2+g&&Math.abs(c-u.z)<=f/2+g)return!0}return!1},o=(l,c)=>{for(const h of Ma)if(l>=h.x-.12&&l<=h.x+h.w+.12&&c>=h.z-.12&&c<=h.z+h.d+.12)return!0;return!1};for(const l of cn){const c=Ot[l.floor],h=Math.floor(l.x/Le)-1,u=Math.floor((l.x+l.w)/Le)+1,d=Math.floor(l.z/Le)-1,f=Math.floor((l.z+l.d)/Le)+1;for(let g=h;g<=u;g++)for(let _=d;_<=f;_++){const m=(g+.5)*Le,p=(_+.5)*Le;if(m<l.x+er||m>l.x+l.w-er||p<l.z+er||p>l.z+l.d-er||o(m,p)||r(m,p,l.floor))continue;const b=`${g},${_},${l.floor}`;if(n.has(b))continue;const E=s({ix:g,iz:_,x:m,y:c,z:p,floor:l.floor});n.set(b,E)}}for(const l of i){const h=l.width*.4,u=l.axis==="x"?l.coord-1.05:l.center-h,d=l.axis==="x"?l.coord+1.05:l.center+h,f=l.axis==="z"?l.coord-1.05:l.center-h,g=l.axis==="z"?l.coord+1.05:l.center+h,_=Math.floor(u/Le)-1,m=Math.floor(d/Le)+1,p=Math.floor(f/Le)-1,b=Math.floor(g/Le)+1;for(let E=_;E<=m;E++)for(let x=p;x<=b;x++){const S=(E+.5)*Le,C=(x+.5)*Le;if(S<u||S>d||C<f||C>g||r(S,C,l.floor))continue;const T=`${E},${x},${l.floor}`;if(n.has(T))continue;const R=s({ix:E,iz:x,x:S,y:Ot[l.floor],z:C,floor:l.floor,doorId:l.kind==="arch"?void 0:l.id});n.set(T,R)}}const a=(l,c)=>{if(l.id===c.id)return;const h=Math.hypot(l.x-c.x,l.z-c.z,(l.y-c.y)*.65);l.links.some(u=>u.to===c.id)||l.links.push({to:c.id,cost:h}),c.links.some(u=>u.to===l.id)||c.links.push({to:l.id,cost:h})};for(const l of e)if(!l.stair)for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){if(c===0&&h===0)continue;const u=n.get(`${l.ix+c},${l.iz+h},${l.floor}`);if(!u||u.stair||u.id<l.id)continue;if(Math.abs(c)===1&&Math.abs(h)===1){const f=n.get(`${l.ix+c},${l.iz},${l.floor}`),g=n.get(`${l.ix},${l.iz+h},${l.floor}`);if(!f||!g||f.stair||g.stair)continue}Math.hypot(l.x-u.x,l.z-u.z)>.92||a(l,u)}for(const l of Ma){const c=[],h=l.axis==="z"?l.d:l.w,u=Math.max(2,Math.round(h/Le));for(let d=0;d<=u;d++){const f=d/u,g=l.axis==="z"?l.x+l.w*.5:l.x+f*l.w,_=l.axis==="z"?l.z+f*l.d:l.z+l.d*.5,m=Ot[l.fromFloor]+f*(Ot[l.toFloor]-Ot[l.fromFloor]),p=m<2?-1:m<6?0:1;c.push(s({ix:Math.floor(g/Le),iz:Math.floor(_/Le),x:g,y:m,z:_,floor:p,stair:!0}))}for(let d=0;d<c.length-1;d++)a(c[d],c[d+1]);Ac(c[0],l.fromFloor,n,e,t),Ac(c[c.length-1],l.toFloor,n,e,t)}return{nodes:e,cellSize:Le}}function Ac(i,t,e,n,s){const r=[];for(const o of n){if(o.stair||o.floor!==t)continue;Math.hypot(o.x-i.x,o.z-i.z)<3.4&&r.push(o)}r.sort((o,a)=>Math.hypot(o.x-i.x,o.z-i.z)-Math.hypot(a.x-i.x,a.z-i.z));for(const o of r){const a=(o.y+i.y)*.5+.4,l={x:i.x,y:a,z:i.z},c={x:o.x,y:a,z:o.z};let h=!1;for(const d of s)if(!d.standOnly&&!(d.maxY<a-.2||d.minY>a+.2)&&Gh(l,c,d)){h=!0;break}if(h)continue;const u=Math.hypot(o.x-i.x,o.z-i.z,(o.y-i.y)*.65);i.links.some(d=>d.to===o.id)||i.links.push({to:o.id,cost:u}),o.links.some(d=>d.to===i.id)||o.links.push({to:i.id,cost:u});return}throw new Error(`Trappe ende kunne ikke forbindes (floor ${t} @ ${i.x.toFixed(1)},${i.z.toFixed(1)})`)}function Rx(){const i=[];for(const t of cn){if(t.light==="none")continue;Cx(t).forEach((n,s)=>{const r=Px(t.light);i.push({id:`${t.id}_${s}`,room:t.id,x:n.x,z:n.z,y:Ot[t.floor]+(t.outdoors?2.4:2.7),color:r.color,intensity:r.intensity,distance:r.distance,mode:r.mode,flicker:r.flicker})})}return i}function Cx(i){return i.id==="reception"?[{x:i.x+2.25,z:i.z+3},{x:i.x+6.05,z:i.z+6.1},{x:i.x+9.2,z:i.z+9}]:i.lightAt?[i.lightAt]:Math.max(i.w,i.d)>18?i.w>=i.d?[{x:i.x+i.w*.33,z:i.z+i.d*.5},{x:i.x+i.w*.67,z:i.z+i.d*.5}]:[{x:i.x+i.w*.5,z:i.z+i.d*.33},{x:i.x+i.w*.5,z:i.z+i.d*.67}]:[{x:i.x+i.w*.5,z:i.z+i.d*.5}]}function Px(i){switch(i){case"always-warm":return{color:"#f0c49f",intensity:5.7,distance:9.5,mode:"always",flicker:!0};case"always-dim":return{color:"#cbbfba",intensity:3.2,distance:7.5,mode:"always",flicker:!0};case"always-candle":return{color:"#ff9d62",intensity:3.9,distance:7,mode:"always",flicker:!0};case"always-red":return{color:"#d4473f",intensity:3.8,distance:7.5,mode:"always",flicker:!0};case"secret":return{color:"#e1c7a6",intensity:5,distance:8,mode:"secret",flicker:!0};case"power":return{color:"#b5c6ce",intensity:5.1,distance:9,mode:"power",flicker:!1};default:return{color:"#ffffff",intensity:0,distance:1,mode:"always",flicker:!1}}}function Dx(i,t,e){if(t<i.x||t>i.x+i.w||e<i.z||e>i.z+i.d)return null;const n=i.axis==="z"?(e-i.z)/i.d:(t-i.x)/i.w,s=Ot[i.fromFloor],r=Ot[i.toFloor],o=Math.max(0,Math.min(1,n));return s+o*(r-s)}function cs(i,t,e,n){for(const o of i.stairs){const a=Dx(o,t,e);if(a!==null)return a}let s=null,r=1e9;for(const o of i.rooms){if(t<o.x||t>o.x+o.w||e<o.z||e>o.z+o.d)continue;const a=Ot[o.floor],l=Math.abs(a-n);l<r&&(r=l,s=a)}return s}function Vn(i,t,e,n){let s=null,r=1e9;for(const o of i.rooms){if(t<o.x||t>o.x+o.w||e<o.z||e>o.z+o.d)continue;const a=Math.abs(Ot[o.floor]-n);a<r&&(r=a,s=o)}return s}function Lx(i,t,e){const n=new Set(["yard","tunnel"]);e||n.add("secret");const s=[];for(const r of i.rooms){if(!t(r.floor)||n.has(r.id))continue;const o=_x[r.id],a=o?o.x:r.x+r.w*.5,l=o?o.z:r.z+r.d*.5;s.push({x:a,y:Ot[r.floor],z:l})}return s}function Jh(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ee;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Rc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Rc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Rc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new qe(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function ba(i=512){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");if(!e)throw new Error("Canvas 2D er ikke tilgængelig");return{c:t,g:e,size:i}}function Cc(i,t){const e=new Float32Array(t*t);for(let n=0;n<e.length;n++)e[n]=i();return e}function Ix(i,t,e,n){const s=(e%t+t)%t,r=(n%t+t)%t,o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=(o+1)%t,u=(a+1)%t,d=i[a*t+o],f=i[a*t+h],g=i[u*t+o],_=i[u*t+h];return d+(f-d)*l+(g-d)*c+(d-f-g+_)*l*c}function Ze(i,t,e,n){let s=0,r=.5,o=1;for(let a=0;a<5;a++)s+=r*Ix(i,t,e*o%t,n*o%t),o*=2,r*=.5;return s}function Sa(i,t=!0,e=!0){const n=new Cr(i);return n.colorSpace=e?Te:Rn,n.wrapS=n.wrapT=t?Wi:Xn,n.anisotropy=4,n.needsUpdate=!0,n}function wo(i,t,e,n,s){i.strokeStyle=`rgba(20,16,14,${s})`,i.lineWidth=1;for(let r=0;r<n;r++){let o=t()*e,a=t()*e;i.beginPath(),i.moveTo(o,a);const l=6+Math.floor(t()*14);for(let c=0;c<l;c++)o+=(t()-.5)*28,a+=(t()-.3)*22,i.lineTo(o,a);i.stroke()}}function Ue(i,t){const e=Ni(t),n=Cc(e,128),s=ba();i(s.g,s.size,n,e);const r=ba(256),o=Cc(Ni(t^2654435769),64),a=r.g.createImageData(256,256);for(let l=0;l<256;l++)for(let c=0;c<256;c++){const h=Ze(o,64,c/4,l/4),u=Math.max(0,Math.min(255,150+h*90)),d=(l*256+c)*4;a.data[d]=a.data[d+1]=a.data[d+2]=u,a.data[d+3]=255}return r.g.putImageData(a,0,0),{map:Sa(s.c,!0,!0),rough:Sa(r.c,!0,!1)}}function Ne(i,t,e,n={}){return new Bt({map:i,roughnessMap:t,color:e,roughness:.92,metalness:.02,...n})}function kx(){const i=Ue((x,S,C)=>{x.fillStyle="#8c847a",x.fillRect(0,0,S,S);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.35,R*.35),v=Math.min(1,R/S)*.35+(R>S*.82?(R/S-.82)*1.4:0),P=Math.exp(-((y-180)**2+(R-300)**2)/18e3)*.25,L=(R*S+y)*4,k=.78+M*.28-v*.45-P;T.data[L]*=k,T.data[L+1]*=k*.98,T.data[L+2]*=k*.94}x.putImageData(T,0,0),wo(x,Ni(3),S,18,.35)},11),t=Ue((x,S,C)=>{x.fillStyle="#667064",x.fillRect(0,0,S,S);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.4,R*.5),v=Math.sin(y*.2)*.5+.5,P=R/S,L=(R*S+y)*4,k=.7+M*.25-P*.35*v;T.data[L]=T.data[L]*k*.85,T.data[L+1]=T.data[L+1]*k,T.data[L+2]=T.data[L+2]*k*.8}x.putImageData(T,0,0)},19),e=Ue((x,S)=>{x.fillStyle="#4a302c",x.fillRect(0,0,S,S);const C=64,T=30;for(let R=0;R<S/T+1;R++)for(let y=0;y<S/C+2;y++){const M=R%2?C/2:0,v=90+(R*13+y*7)%40;x.fillStyle=`rgb(${v+40},${v*.45},${v*.38})`,x.fillRect(y*C-M+2,R*T+2,C-4,T-4)}wo(x,Ni(8),S,8,.4)},23),n=Ue((x,S,C)=>{x.fillStyle="#6b5342",x.fillRect(0,0,S,S),x.strokeStyle="rgba(30,20,12,0.45)";for(let R=0;R<S;R+=96)x.strokeRect(R+8,8,80,S-16),x.strokeRect(R+16,20,64,S-40);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.8,R*.15),v=(R*S+y)*4,P=.85+M*.2;T.data[v]*=P,T.data[v+1]*=P,T.data[v+2]*=P*.9}x.putImageData(T,0,0)},29),s=Ue((x,S)=>{x.fillStyle="#8a8780",x.fillRect(0,0,S,S);const C=64;for(let T=0;T<S;T+=C)for(let R=0;R<S;R+=C){const y=(R*3+T*5)%17/40;x.fillStyle=`rgba(60,58,52,${.05+y})`,x.fillRect(R+2,T+2,C-4,C-4),(R+T)%(C*5)===0&&(x.strokeStyle="rgba(40,30,28,0.45)",x.strokeRect(R+8,T+8,C-16,C-16))}},31),r=Ue((x,S,C)=>{x.fillStyle="#6a6762",x.fillRect(0,0,S,S);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.5,R*.5),v=(R*S+y)*4,P=.75+M*.4;T.data[v]*=P,T.data[v+1]*=P,T.data[v+2]*=P}x.putImageData(T,0,0),wo(x,Ni(4),S,10,.4)},37),o=Ue((x,S,C)=>{for(let R=0;R<S;R+=48){const y=70+R%96;x.fillStyle=`rgb(${y+30},${y*.62},${y*.38})`,x.fillRect(0,R,S,46),x.fillStyle="rgba(20,12,8,0.35)",x.fillRect(0,R+45,S,3)}const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.15,R*1.4),v=(R*S+y)*4,P=.82+M*.28;T.data[v]*=P,T.data[v+1]*=P,T.data[v+2]*=P}x.putImageData(T,0,0)},41),a=Ue((x,S,C)=>{x.fillStyle="#7c776f",x.fillRect(0,0,S,S);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.22,R*.22),v=(Math.floor(y/80)+Math.floor(R/80))%2?.92:1,P=(R*S+y)*4,L=(.72+M*.35)*v;T.data[P]*=L,T.data[P+1]*=L,T.data[P+2]*=L*.95}x.putImageData(T,0,0)},43),l=Ue((x,S,C)=>{x.fillStyle="#5a2c30",x.fillRect(0,0,S,S);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.9,R*.9),v=Math.exp(-((y-S/2)**2)/4e4)*.2,P=(R*S+y)*4,L=.75+M*.35+v;T.data[P]*=L,T.data[P+1]*=L*.9,T.data[P+2]*=L*.88}x.putImageData(T,0,0)},47),c=Ue((x,S)=>{x.fillStyle="#6e6b64",x.fillRect(0,0,S,S);const C=72;for(let T=0;T<S;T+=C)for(let R=0;R<S;R+=C){const y=150+(R*9+T*3)%50;x.fillStyle=`rgb(${y},${y-4},${y-10})`,x.fillRect(R+2,T+2,C-4,C-4),(R/C+T/C)%7===0&&(x.fillStyle="rgba(40,20,16,0.25)",x.fillRect(R+10,T+10,C-20,C-20))}},53),h=Ue((x,S,C)=>{x.fillStyle="#5a564e",x.fillRect(0,0,S,S);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.6,R*.2),v=Ze(C,128,y*.1+20,R*.1)>.62?.35:0,P=(R*S+y)*4;T.data[P]=90*(.7+M*.4)+v*80,T.data[P+1]=82*(.7+M*.3)+v*30,T.data[P+2]=70*(.7+M*.3)}x.putImageData(T,0,0)},59),u=Ue((x,S,C)=>{x.fillStyle="#6d4e46",x.fillRect(0,0,S,S);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*1.2,R*1.2),v=Math.sin(R*.4)*.04,P=(R*S+y)*4,L=.8+M*.3+v;T.data[P]*=L,T.data[P+1]*=L,T.data[P+2]*=L}x.putImageData(T,0,0)},61),d=Ue((x,S,C)=>{x.fillStyle="#74716b",x.fillRect(0,0,S,S);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.3,R*.3),v=Math.exp(-((y-200)**2+(R-220)**2)/9e3)*.45,P=(R*S+y)*4,L=.8+M*.15-v;T.data[P]*=L,T.data[P+1]*=L*(1-v*.3),T.data[P+2]*=L*(1-v*.4)}x.putImageData(T,0,0)},67),f=Ue((x,S)=>{x.fillStyle="#3a312a",x.fillRect(0,0,S,S)},71),g=Ue((x,S,C)=>{x.fillStyle="#4e3b2e",x.fillRect(0,0,S,S),x.strokeStyle="rgba(20,12,8,0.6)",x.lineWidth=6,x.strokeRect(28,28,S-56,S*.42),x.strokeRect(28,S*.5,S-56,S*.42);const T=x.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const M=Ze(C,128,y*.2,R*.8),v=(R*S+y)*4,P=.85+M*.25;T.data[v]*=P,T.data[v+1]*=P,T.data[v+2]*=P}x.putImageData(T,0,0)},73),_=ba();{const x=_.g;x.clearRect(0,0,512,512);const S=Ni(99);x.fillStyle="rgba(90,8,10,0.0)";for(let C=0;C<40;C++)x.fillStyle=`rgba(${80+S()*40},${6+S()*8},8,${.25+S()*.55})`,x.beginPath(),x.ellipse(40+S()*430,180+S()*160,20+S()*80,8+S()*24,S()*3,0,Math.PI*2),x.fill();x.fillStyle="rgba(60,4,6,0.7)",x.beginPath(),x.ellipse(256,270,180,36,.2,0,Math.PI*2),x.fill()}const m=Sa(_.c,!1,!0),p=new Bt({map:m,transparent:!0,depthWrite:!1,roughness:.45,metalness:.05,color:"#7a1014",polygonOffset:!0,polygonOffsetFactor:-2}),b=new Bt({color:"#141820",roughness:.15,metalness:.4,transparent:!0,opacity:.45,emissive:"#0a1018",emissiveIntensity:.2}),E={plaster:Ne(i.map,i.rough,"#ffffff"),damp:Ne(t.map,t.rough,"#ffffff"),brick:Ne(e.map,e.rough,"#ffffff"),panel:Ne(n.map,n.rough,"#ffffff"),tileWall:Ne(s.map,s.rough,"#ffffff",{roughness:.55}),concrete:Ne(r.map,r.rough,"#ffffff"),wood:Ne(o.map,o.rough,"#ffffff",{roughness:.78}),stone:Ne(a.map,a.rough,"#ffffff"),carpet:Ne(l.map,l.rough,"#ffffff",{roughness:1}),tileFloor:Ne(c.map,c.rough,"#ffffff",{roughness:.42,metalness:.08}),metal:Ne(h.map,h.rough,"#ffffff",{roughness:.55,metalness:.45}),fabric:Ne(u.map,u.rough,"#ffffff",{roughness:.95}),ceiling:Ne(d.map,d.rough,"#ffffff"),trim:Ne(f.map,f.rough,"#ffffff",{roughness:.7}),door:Ne(g.map,g.rough,"#ffffff",{roughness:.65}),blood:p,glass:b,eye:new Bt({color:"#200000",emissive:"#ff1a12",emissiveIntensity:2.4,roughness:.3}),monster:new Bt({color:"#0c0b0d",roughness:.84,metalness:.06}),dispose(){for(const x of Object.values(E))if(x instanceof vn){const S=x;S.map?.dispose(),S.roughnessMap?.dispose(),S.dispose()}}};return E}function Ux(i,t){const e=new Kt;e.name="SktAgnes_SetDressing_V2";const n=new Bt({color:"#4f4940",metalness:.65,roughness:.88}),s=new Bt({color:"#242528",roughness:.94,metalness:.22}),r=new Bt({color:"#b1a48b",roughness:1,side:Se}),o=new Bt({color:"#2f3935",transparent:!0,opacity:.65,metalness:.23,roughness:.24}),a=new Bt({color:"#4e4844",roughness:1,side:Se}),l=new ze({color:"#241916",transparent:!0,opacity:.43,depthWrite:!1}),c=new Set,h=[n,s,r,o,a,l],u=(m,p,b,E,x,S,C)=>{const T=new J(new Xt(m,p,b),C);return T.position.set(E,x,S),T.castShadow=!0,T.receiveShadow=!0,e.add(T),T},d=(m,p,b,E)=>{const x=p.clone().sub(m),S=new J(new Ae(b,b,x.length(),7),E);S.position.copy(m).addScaledVector(x,.5),S.quaternion.setFromUnitVectors(new I(0,1,0),x.normalize()),S.castShadow=!0,e.add(S)},f=(m,p,b,E)=>{const x=document.createElement("canvas");x.width=384,x.height=160;const S=x.getContext("2d");if(!S)return;S.fillStyle="#aaa08d",S.fillRect(0,0,384,160),S.fillStyle="#34312d",S.fillRect(12,12,360,136),S.strokeStyle="#655f53",S.lineWidth=3,S.strokeRect(24,25,335,110),S.textAlign="center",S.fillStyle="#c6b39a",S.font="bold 29px Georgia",S.fillText(m,192,76),S.font="16px monospace",S.fillText("SKT. AGNES  •  1987",192,107);const C=new Cr(x);C.colorSpace=Te,c.add(C);const T=new Bt({map:C,roughness:.93});h.push(T);const R=new J(new we(.96,.4),T);R.position.set(p,b,E),e.add(R)},g={reception:"MODTAGELSE",patientgang:"PATIENTER",operationsstue:"STERILT",slagterum:"FORBUDT",arkiv:"JOURNALER",laboratorium:"LABORATORIUM",obduktion:"SEKTIONSSTUE",personalerum:"PERSONALE",kaeldergang:"KÆLDER",kapel:"STILHED",observation:"OBSERVATION",kammer:"ISOLATION",stilhed:"UDGANG",trappe0:"ETAGE 1",trappe1:"ETAGE 2",trappe2:"ETAGE 3"},_={reception:[4,.83,9.5],operationsstue:[30,.91,9.2],slagterum:[42,.86,9.4],arkiv:[8,.8,2.4],laboratorium:[16,.97,9.2],obduktion:[30,.88,9],personalerum:[45.8,.96,9.2],observation:[30,.82,2.4]};for(const m of t){if(m.outdoors)continue;const p=Ot[m.floor],b=ya("set-dressing-"+m.id)>>>0,E=y=>((b^y*2654435761)>>>0)%1e3/1e3,x=p+Fi-.34,S=m.z+.19;d(new I(m.x+.4,x,S),new I(m.x+m.w-.4,x,S),.034,n);for(let y=1;y<=3;y++){const M=m.x+m.w*y/4;u(.08,.13,.11,M,x,S-.03,s)}f(g[m.id]??"AFDELING",m.x+Math.min(m.w-1.3,1.75),p+1.68,m.z+.145);for(let y=0;y<4;y++){const M=m.x+.75+y*.14+E(y+3)*.4,v=m.z+.7+E(y+7)*.65,P=new J(new we(.21+E(y+11)*.14,.19),r);P.rotation.x=-Math.PI/2,P.rotation.z=(E(y+17)-.5)*1,P.position.set(M,p+.079+y*5e-4,v),P.receiveShadow=!0,e.add(P)}const C=new J(new Dr(.27+E(19)*.38,13),l);C.rotation.x=-Math.PI/2,C.position.set(m.x+m.w*.77,p+.081,m.z+1.15),C.scale.set(1.5,.65,1),e.add(C);const T=new J(new we(.54,.28),a);T.rotation.x=-Math.PI/2,T.rotation.z=E(41),T.position.set(m.x+m.w-1.1,p+.085,m.z+m.d-.8),e.add(T);const R=_[m.id];if(R){const[y,M,v]=R,P=p+M;for(let L=0;L<4;L++)u(.28,.012,.2,y-.38+L*.03,P+L*.014,v-.08,L%2?r:a);u(.3,.035,.16,y+.34,P+.025,v+.12,s);for(let L=0;L<3;L++){const k=new J(new Ae(.028,.032,.13+L*.028,8),o);k.position.set(y+.23+L*.09,P+.115+L*.013,v-.14),k.castShadow=!0,e.add(k)}}}return i.add(e),()=>{i.remove(e),e.traverse(m=>{m instanceof J&&m.geometry.dispose()}),h.forEach(m=>m.dispose()),c.forEach(m=>m.dispose())}}const Nx={wood:"wood",tile:"tileFloor",concrete:"concrete",carpet:"carpet",stone:"stone"},Fx={plaster:"plaster",tile:"tileWall",concrete:"concrete",panel:"panel",brick:"brick",damp:"damp"};function Ox(i,t){const e=kx(),n=Ux(i,t.rooms),s=new Map,r=(v,P)=>{const L=s.get(v)??[];L.push(P),s.set(v,L)};for(const v of t.rooms){const P=Ot[v.floor],L=`${v.id}|${Nx[v.floorMat]}`;for(const k of Pc(v,zx(v.id,t)))r(L,ve(k.x,P+.02,k.z,k.w,.08,k.d));if(!v.outdoors){const k=`${v.id}|ceiling`,z=P+Fi-.05;for(const G of Pc(v,Bx(v.id,t)))r(k,ve(G.x,z,G.z,G.w,.08,G.d))}}for(const v of t.walls){const P=t.rooms.find(G=>G.id===v.roomId),L=P?Fx[P.wallMat]:"plaster",k=Ot[v.floor];v.axis==="x"?r(`${v.roomId}|${L}`,ve(v.coord-.11,k,v.min,.22,Fi,v.max-v.min)):r(`${v.roomId}|${L}`,ve(v.min,k,v.coord-.11,v.max-v.min,Fi,.22));const z=.16;v.axis==="x"?r(`${v.roomId}|trim`,ve(v.coord-.13,k,v.min,.08,z,v.max-v.min)):r(`${v.roomId}|trim`,ve(v.min,k,v.coord-.13,v.max-v.min,z,.08))}for(const v of t.doors)Gx(v,r);const o=[],a=[],l=[];let c=new Kt,h=new Kt,u=new Kt;for(const v of t.props){const P=t.rooms.find(z=>z.id===v.room);if(!P)continue;const L=Ot[P.floor]+(v.yOff??0);if(v.kind==="chair"){o.push(ki(v.x,L,v.z,v.rot));continue}if(v.kind==="crate"){a.push(ki(v.x,L+.34,v.z,v.rot));continue}if(v.kind==="barrel"){l.push(ki(v.x,L+.42,v.z,v.rot));continue}const k=Vx(v.kind,v.w,v.h,v.d);if(v.kind==="mannequin"||v.kind==="pot"||v.id==="secretshelf"){const z=new Kt;for(const G of k){const Y=e[G.mat];if(!(Y instanceof vn))continue;const B=new J(G.geo,Y);B.castShadow=!0,B.receiveShadow=!0,z.add(B)}z.position.set(v.x,L,v.z),z.rotation.y=v.rot,i.add(z),v.kind==="mannequin"?(c=z,z.visible=!1):v.kind==="pot"?h=z:u=z;continue}for(const z of k)z.geo.applyMatrix4(ki(v.x,L,v.z,v.rot)),r(`${P.id}|${z.mat}`,z.geo)}for(const v of t.stairs){const L=Ot[v.fromFloor],k=Ot[v.toFloor];if(v.axis!=="z")continue;const z=k-L,G=v.d/14,Y=v.x+.15,B=v.w-.3;for(let ct=0;ct<14;ct++){const _t=(ct+1)/14,kt=L+_t*z,q=v.z+ct*G;r("stairs|concrete",ve(Y,L,q,B,kt-L,G*1.005)),r("stairs|trim",ve(Y,kt-.025,q+G*.85,B,.026,G*.13))}const Q=-Math.atan2(z,v.d),at=Math.hypot(v.d,z);for(const ct of[v.x+.1,v.x+v.w-.1]){const _t=new Xt(.085,.1,at);_t.rotateX(Q),_t.translate(ct,(L+k)*.5+.83,v.z+v.d*.5),r("stairs|trim",_t);for(let kt=0;kt<=14;kt+=2){const q=kt/14;r("stairs|trim",ve(ct-.04,L+z*q,v.z+v.d*q-.04,.08,.83,.08))}}}for(const v of t.decals){const P=t.rooms.find(G=>G.id===v.room);if(!P)continue;const L=Ot[P.floor]+.06,k=new we(v.w,v.d);k.rotateX(-Math.PI/2),k.applyMatrix4(ki(v.x,L,v.z,v.rot));const z=new J(k,v.kind==="blood"?e.blood:e.concrete);z.receiveShadow=!0,i.add(z)}const d=[],f=new Ae(.04,.05,.18,6),g=e.glass;for(const v of t.rooms){if(v.outdoors||v.w<5||v.d<5)continue;const P=ya(v.id),L=1+P%3;for(let k=0;k<L;k++){const z=new J(f,g),G=(P>>k*3&7)/7,Y=(P>>k*5+2&7)/7;z.position.set(v.x+.6+G*(v.w-1.2),Ot[v.floor]+.1,v.z+.6+Y*(v.d-1.2)),z.userData.detail=!0,i.add(z),d.push(z)}if(P%2===0){const k=Xx();k.position.set(v.x+.35,Ot[v.floor]+Fi-.45,v.z+.35),k.userData.detail=!0,i.add(k),d.push(k)}}let _=0;for(const v of t.walls){if(!v.exterior||_>14||v.max-v.min<3.2||ya(v.roomId+v.coord)%3!==0)continue;const L=Ot[v.floor]+1.45,k=(v.min+v.max)/2;e.trim;const z=new J(new we(1.15,1.5),e.glass);v.axis==="x"?(z.position.set(v.coord,L,k),z.rotation.y=Math.PI/2,r(`${v.roomId}|trim`,ve(v.coord-.08,L-.8,k-.65,.08,1.6,.08)),r(`${v.roomId}|trim`,ve(v.coord-.08,L-.8,k+.57,.08,1.6,.08))):(z.position.set(k,L,v.coord),r(`${v.roomId}|trim`,ve(k-.65,L-.8,v.coord-.08,.08,1.6,.08)),r(`${v.roomId}|trim`,ve(k+.57,L-.8,v.coord-.08,.08,1.6,.08))),z.userData.window=!0,i.add(z),_++}const m=[];for(const[v,P]of s){const L=v.split("|")[1],k=Jh(P,!1);if(!k)continue;k.computeVertexNormals();const z=e[L];if(!(z instanceof vn))continue;const G=new J(k,z);G.castShadow=!0,G.receiveShadow=!0,i.add(G),m.push(k);for(const Y of P)Y.dispose()}const p=Eo(Wx(),e.wood,o,i),b=Eo(new Xt(.68,.68,.68),e.wood,a,i),E=Eo(new Ae(.28,.3,.85,8),e.metal,l,i),x=new Map;for(const v of t.doors){if(v.kind==="arch"||v.kind==="hidden")continue;const P=new Kt,L=e.door.clone(),k=new J(new Xt(v.width*.96,2.42,.12),L);k.castShadow=!0,k.receiveShadow=!0,k.position.set(v.width*.48,1.21,0);const z=new Bt({color:"#1c2425",roughness:.96}),G=new Bt({color:"#554d3c",roughness:.53,metalness:.67}),Y=v.width*.76;for(const ct of[-1,1])for(const _t of[-.56,.51]){const kt=new J(new Xt(Y,.84,.012),z);kt.position.set(0,_t,ct*.066),k.add(kt);for(const q of[-.39,.39]){const tt=new J(new Xt(Y,.034,.025),L);tt.position.set(0,_t+q,ct*.084),k.add(tt)}for(const q of[-1,1]){const tt=new J(new Xt(.035,.79,.025),L);tt.position.set(q*Y*.48,_t,ct*.084),k.add(tt)}}const B=new J(new Xt(.09,.26,.015),G);B.position.set(v.width*.29,-.09,.09),k.add(B);for(const ct of[-1,1]){const _t=new J(new pe(.043,12,10),G);_t.position.set(v.width*.29,-.09,ct*.13),k.add(_t)}const Q=new J(new Xt(Y,.18,.017),G);Q.position.set(0,-1.04,.073),k.add(Q),P.add(k);const at=Ot[v.floor];v.axis==="x"?(P.position.set(v.coord,at,v.spanMin),P.rotation.y=-Math.PI/2):(P.position.set(v.spanMin,at,v.coord),P.rotation.y=0),P.userData.closedYaw=P.rotation.y,P.userData.swing=1,P.userData.panel=k,i.add(P),x.set(v.id,P),qx(i,v)}const S=new Map;for(const v of t.pickups){const P=t.rooms.find(k=>k.id===v.room);if(!P)continue;const L=Yx(v.itemId,e);L.position.set(v.x,Ot[P.floor]+.85,v.z),i.add(L),S.set(v.id,L)}const C=[];for(const v of t.lights){let P;if(v.room==="hall"){const B=new ga(v.color,v.intensity,v.distance,1.05,.55,1.15);B.position.set(v.x,v.y,v.z),B.target.position.set(v.x,Ot[0],v.z),B.castShadow=!0,B.shadow.mapSize.set(512,512),B.shadow.bias=-4e-4,i.add(B,B.target),P=B}else{const B=new va(v.color,v.intensity,v.distance,1.35);B.position.set(v.x,v.y,v.z),i.add(B),P=B}const L=new Kt;L.position.set(v.x,v.y+.14,v.z);const k=new Bt({color:"#333738",metalness:.65,roughness:.81}),z=new Bt({color:"#b8bdb6",emissive:v.color,emissiveIntensity:.55,roughness:.34,metalness:.04}),G=new J(new Xt(1.42,.12,.31),k);G.castShadow=!0,L.add(G);const Y=new J(new Xt(1.27,.026,.24),e.trim);Y.position.y=-.073,L.add(Y);for(const B of[-.075,.075]){const Q=new J(new Xt(1.22,.036,.066),z);Q.position.set(0,-.108,B),L.add(Q)}for(const B of[-.64,.64]){const Q=new J(new Xt(.048,.045,.27),k);Q.position.set(B,-.105,0),L.add(Q)}i.add(L),C.push({def:v,light:P,base:v.intensity,lens:z})}const T=new Ee,R=400,y=new Float32Array(R*3);for(let v=0;v<R;v++)y[v*3]=30+Math.random()*8,y[v*3+1]=Math.random()*6,y[v*3+2]=28+Math.random()*8;T.setAttribute("position",new qe(y,3));const M=new Dh(T,new Ha({color:"#9bb0c4",size:.035,transparent:!0,opacity:.35,depthWrite:!1}));return M.visible=!1,i.add(M),{materials:e,doors:x,pickups:S,lights:C,mannequin:c,pot:h,secretShelf:u,detail:d,rain:M,dispose(){n(),e.dispose();for(const v of m)v.dispose();p.geometry.dispose(),b.geometry.dispose(),E.geometry.dispose(),T.dispose(),M.material.dispose()}}}function zx(i,t){return i==="trappe1"?t.stairs.filter(e=>e.id==="stair_01"):i==="trappe2"?t.stairs.filter(e=>e.id==="stair_12"):[]}function Bx(i,t){return i==="trappe0"?t.stairs.filter(e=>e.id==="stair_01"):i==="trappe1"?t.stairs.filter(e=>e.id==="stair_12"):[]}function Pc(i,t){let e=[i];for(const n of t){const s=[];for(const r of e)s.push(...Hx(r,n));e=s}return e.filter(n=>n.w>.05&&n.d>.05)}function Hx(i,t){const e=i.x+i.w,n=i.z+i.d,s=t.x+t.w,r=t.z+t.d,o=Math.max(i.x,t.x),a=Math.max(i.z,t.z),l=Math.min(e,s),c=Math.min(n,r);if(l-o<.05||c-a<.05)return[i];const h=[];return a>i.z&&h.push({x:i.x,z:i.z,w:i.w,d:a-i.z}),n>c&&h.push({x:i.x,z:c,w:i.w,d:n-c}),o>i.x&&h.push({x:i.x,z:a,w:o-i.x,d:c-a}),e>l&&h.push({x:l,z:a,w:e-l,d:c-a}),h}function ve(i,t,e,n,s,r){const o=new Xt(Math.max(.02,n),Math.max(.02,s),Math.max(.02,r));return Qh(o,Math.max(.02,n),Math.max(.02,s),Math.max(.02,r)),o.applyMatrix4(ki(i+n/2,t+s/2,e+r/2,0)),o}function Qh(i,t,e,n){const s=i.getAttribute("uv"),r=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let o=0;o<6;o++){const a=r[o][0]*.42,l=r[o][1]*.42;for(let c=0;c<4;c++){const h=o*4+c;s.setXY(h,s.getX(h)*a,s.getY(h)*l)}}s.needsUpdate=!0}function ki(i,t,e,n){const s=new Qt,r=new Zi().setFromAxisAngle(new I(0,1,0),n);return s.compose(new I(i,t,e),r,new I(1,1,1)),s}function Gx(i,t){const e=Ot[i.floor],n=2.55,s=.08;i.axis==="x"?(t("frame|trim",ve(i.coord-.06,e,i.spanMin-s,.12,n,s)),t("frame|trim",ve(i.coord-.06,e,i.spanMax,.12,n,s)),t("frame|trim",ve(i.coord-.06,e+n-s,i.spanMin,.12,s,i.width))):(t("frame|trim",ve(i.spanMin-s,e,i.coord-.06,s,n,.12)),t("frame|trim",ve(i.spanMax,e,i.coord-.06,s,n,.12)),t("frame|trim",ve(i.spanMin,e+n-s,i.coord-.06,i.width,s,.12)))}function nt(i,t,e,n,s,r,o){const a=new Xt(i,t,e);return Qh(a,i,t,e),a.translate(n,s+t/2,r),{geo:a,mat:o}}function Vx(i,t,e,n){switch(i){case"pillar":return[nt(t,e,n,0,0,0,"stone")];case"bench":return[nt(t,.08,n,0,.42,0,"wood"),nt(.08,.42,n,-t/2,0,0,"wood"),nt(.08,.42,n,t/2,0,0,"wood")];case"desk":case"table":return[nt(t,.08,n,0,e-.08,0,"wood"),nt(.08,e-.08,.08,-t/2+.08,0,-n/2+.08,"wood"),nt(.08,e-.08,.08,t/2-.08,0,-n/2+.08,"wood"),nt(.08,e-.08,.08,-t/2+.08,0,n/2-.08,"wood"),nt(.08,e-.08,.08,t/2-.08,0,n/2-.08,"wood")];case"shelf":case"bookshelf":return[nt(t,e,.06,0,0,-n/2,"wood"),nt(t,.05,n,0,.15,0,"wood"),nt(t,.05,n,0,e*.45,0,"wood"),nt(t,.05,n,0,e*.75,0,"wood")];case"locker":return[nt(t,e,n,0,0,0,"metal"),nt(t*.92,.055,.025,0,e*.92,n/2,"trim"),nt(t*.92,.055,.025,0,e*.14,n/2,"trim"),nt(.04,e*.76,.03,-t*.035,e*.15,n/2,"trim"),nt(.025,.16,.05,t*.27,e*.51,n/2,"trim"),...[-.3,-.18,-.06].map(s=>nt(t*.56,.021,.027,-t*.03,e*(.81+s),n/2,"trim"))];case"recordcabinet":return[nt(t,e,n,0,0,0,"wood"),nt(t*1.04,.055,n*1.06,0,e-.04,0,"trim"),...[.15,.41,.67].map(s=>nt(t*.92,.027,.03,0,e*s,n/2,"metal")),...[-.3,.3].map(s=>nt(.035,e*.79,.03,s*t,e*.1,n/2,"metal")),...[.25,.53,.79].map(s=>nt(.17,.04,.05,0,e*s,n/2,"metal"))];case"filing":return[nt(t,e,n,0,0,0,"metal"),...[.1,.33,.56,.79].flatMap(s=>[nt(t*.84,.025,.028,0,e*s,n/2,"trim"),nt(t*.3,.04,.035,0,e*(s+.11),n/2,"trim")])];case"sideboard":return[nt(t,e*.72,n,0,e*.24,0,"wood"),nt(t*1.08,.064,n*1.06,0,e*.94,0,"wood"),...[-.22,.22].map(s=>nt(.065,.026,.065,s*t,e*.57,n*.53,"metal")),...[-.36,.36].map(s=>nt(.09,e*.18,.1,s*t,0,n*.37,"wood"))];case"counter":return[nt(t,e,n,0,0,0,"tileWall"),nt(t,.06,n,0,e-.06,0,"metal")];case"pew":return[nt(t,.08,n,0,.42,0,"wood"),nt(t,.55,.08,0,.42,-n/2,"wood")];case"altar":return[nt(t,e,n,0,0,0,"stone"),nt(.08,.35,.08,-.3,e,0,"trim")];case"sofa":return[nt(t,.28,n,0,.26,0,"fabric"),nt(t,.5,.16,0,.43,-n/2+.08,"fabric"),...[-1,1].map(s=>nt(.18,.36,n,s*(t/2-.09),.28,0,"fabric")),...[-.28,.28].map(s=>nt(t*.38,.08,n*.65,s*t*.7,.51,.06,"fabric"))];case"medicalcart":return[nt(t,.055,n,0,e-.06,0,"metal"),nt(t,.05,n,0,.34,0,"metal"),...[-1,1].flatMap(s=>[-1,1].map(r=>nt(.035,e-.1,.035,s*(t/2-.06),.12,r*(n/2-.06),"metal"))),...[-1,1].flatMap(s=>[-1,1].map(r=>nt(.11,.1,.11,s*(t/2-.09),.02,r*(n/2-.07),"trim"))),nt(t*.78,.05,n*.76,0,e*.62,0,"metal"),nt(t*.52,.05,.04,0,e-.1,n*.58,"trim")];case"foldscreen":return[...[-.33,0,.33].map(s=>nt(t*.31,e*.83,.038,t*s,.2,0,"fabric")),...[-.49,-.16,.16,.49].map(s=>nt(.031,e,.05,t*s,0,0,"metal")),nt(t,.04,.06,0,e-.06,0,"metal")];case"ivstand":return[nt(.045,e,.045,0,0,0,"metal"),nt(t,.04,.045,0,.03,0,"metal"),nt(.045,.04,n,0,.03,0,"metal"),nt(.22,.035,.04,0,e-.06,0,"metal"),nt(.08,.22,.045,t*.25,e-.38,0,"glass")];case"bathtub":return[nt(t,e,n,0,0,0,"tileWall")];case"gurney":return[nt(t,.075,n,0,.7,0,"metal"),nt(t*.93,.07,n*.84,0,.78,0,"fabric"),nt(t*.21,.075,n*.66,-t*.33,.86,0,"fabric"),...[-1,1].flatMap(s=>[-1,1].map(r=>nt(.045,.73,.045,s*(t/2-.08),0,r*(n/2-.06),"metal"))),...[-1,1].map(s=>nt(t*.91,.038,.044,0,.45,s*n*.51,"metal")),...[-1,1].flatMap(s=>[-1,1].map(r=>nt(.12,.12,.12,s*(t/2-.08),.01,r*(n/2-.07),"trim")))];case"cabinet":case"dresser":return[nt(t,e,n,0,0,0,"wood")];case"stove":return[nt(t,e,n,0,0,0,"metal")];case"generator":case"boiler":return[nt(t,e,n,0,0,0,"metal"),nt(.2,.5,.2,0,e,0,"trim")];case"fridge":return[nt(t,e,n,0,0,0,"metal")];case"safe":return[nt(t,e,n,0,0,0,"metal")];case"bed":return[nt(t,.12,n,0,.32,0,"wood"),nt(t*.94,.14,n*.9,0,.44,0,"fabric"),nt(t*.28,.1,n*.28,-t*.28,.58,-n*.28,"fabric")];case"wheelchair":return[nt(t*.78,.075,n*.65,0,.48,0,"fabric"),nt(t*.8,.5,.075,0,.53,-n*.37,"fabric"),...[-1,1].map(s=>nt(.06,.32,n*.7,s*t*.48,.47,0,"metal")),...[-1,1].map(s=>nt(.11,.68,.12,s*t*.55,.1,0,"metal")),nt(t*1.16,.04,.05,0,.11,n*.4,"metal")];case"plant":return[nt(.22,.28,.22,0,0,0,"trim")];case"beam":return[nt(t,e,n,0,0,0,"wood")];case"mannequin":return[nt(.32,.7,.16,0,.85,0,"monster"),nt(.18,.22,.16,0,1.55,0,"monster"),nt(.1,.7,.1,-.24,.85,0,"monster"),nt(.1,.7,.1,.24,.85,0,"monster")];case"pot":return[nt(.22,.2,.22,0,.7,0,"metal")];default:return[nt(t,e,n,0,0,0,"trim")]}}function Wx(){const i=[nt(.4,.06,.4,0,.46,0,"wood"),nt(.4,.42,.06,0,.5,-.17,"wood"),nt(.05,.46,.05,-.16,0,-.16,"wood"),nt(.05,.46,.05,.16,0,-.16,"wood"),nt(.05,.46,.05,-.16,0,.16,"wood"),nt(.05,.46,.05,.16,0,.16,"wood")];return Jh(i.map(e=>e.geo),!1)??new Xt(.4,.9,.4)}function Eo(i,t,e,n){const s=new Mg(i,t,Math.max(1,e.length));return s.castShadow=!0,s.receiveShadow=!0,e.forEach((r,o)=>s.setMatrixAt(o,r)),e.length||(s.count=0),s.instanceMatrix.needsUpdate=!0,n.add(s),s}function Xx(){const i=new Kt,t=new ze({color:"#c8c2b6",transparent:!0,opacity:.18,side:Se,depthWrite:!1}),e=new J(new we(.7,.7),t),n=new J(new we(.7,.7),t);return n.rotation.y=.8,i.add(e,n),i}function qx(i,t,e){const n=(r,o,a,l,c)=>{if(!r)return;const h=document.createElement("canvas");h.width=256,h.height=64;const u=h.getContext("2d");if(!u)return;u.fillStyle="#2a241e",u.fillRect(0,0,256,64),u.strokeStyle="#8a7a66",u.strokeRect(3,3,250,58),u.fillStyle="#e6d7c4",u.font="28px Georgia",u.textAlign="center",u.textBaseline="middle",u.fillText(r,128,34);const d=new Cr(h);d.colorSpace=Te;const f=new J(new we(.72,.18),new Bt({map:d,roughness:.8,emissive:"#2a2118",emissiveIntensity:.25}));f.position.set(o,a,l),f.rotation.y=c,i.add(f)},s=Ot[t.floor]+2.15;t.axis==="x"?(n(t.signA??"",t.coord-.2,s,t.center,Math.PI/2),n(t.signB??"",t.coord+.2,s,t.center,-Math.PI/2)):(n(t.signA??"",t.center,s,t.coord-.2,0),n(t.signB??"",t.center,s,t.coord+.2,Math.PI))}function Yx(i,t){const e=new Kt;let n;if(i.includes("fuse")){const s=i.includes("red")?"#b4231c":i.includes("blue")?"#2458a8":"#c6a227";n=new J(new Ae(.05,.05,.16,8),new Bt({color:s,roughness:.4,metalness:.3,emissive:s,emissiveIntensity:.2}))}else i==="battery"?n=new J(new Ae(.05,.05,.16,8),t.metal):i.includes("key")?n=new J(new Xt(.16,.04,.05),t.metal):i==="medkit"?n=new J(new Xt(.22,.1,.16),new Bt({color:"#f2f2f0",roughness:.5})):i==="rosary"?n=new J(new Ss(.08,.015,6,12),t.metal):i==="crowbar"?(n=new J(new Xt(.5,.04,.04),t.metal),n.rotation.z=.4):i==="evidence"?n=new J(new Xt(.28,.04,.2),t.door):n=new J(new Xt(.2,.02,.16),t.door);return e.add(n),e}class $x{constructor(t){this.el=t,window.addEventListener("keydown",e=>{Dc(e.target)&&e.code!=="Escape"||((e.ctrlKey||e.metaKey||e.code==="ControlLeft"||e.code==="ControlRight")&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),this.edges.add(e.code),["KeyE","KeyF","KeyR","Tab","KeyI","Escape","KeyG","KeyQ","Space","F3","F4","ArrowUp","ArrowDown","Enter"].includes(e.code)&&e.preventDefault()))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("mousemove",e=>{(this.pointerLocked||e.buttons===1)&&(this.lookX+=e.movementX,this.lookY+=e.movementY)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.el}),window.addEventListener("blur",()=>{this.keys.clear()})}keys=new Set;edges=new Set;lookX=0;lookY=0;pointerLocked=!1;virtual=null;sens=.00215;setSensitivity(t){this.sens=t}consumeLook(){const t=this.lookX*this.sens,e=this.lookY*this.sens;return this.lookX=0,this.lookY=0,{x:t,y:e}}wish(){const t=this.virtual,e=r=>this.keys.has(r),n=t?.forward??(e("KeyW")||e("ArrowUp")?1:0)-(e("KeyS")||e("ArrowDown")?1:0),s=t?.strafe??(e("KeyD")||e("ArrowRight")?1:0)-(e("KeyA")||e("ArrowLeft")?1:0);return{forward:n,strafe:s,sprint:t?.sprint??(e("ShiftLeft")||e("ShiftRight")),crouch:t?.crouch??(e("ControlLeft")||e("ControlRight")||e("KeyC")),jump:t?.jump??e("Space")}}pressed(t){return this.edges.has(t)?(this.edges.delete(t),!0):!1}formFocused(){return Dc(document.activeElement)}takeFirst(t){for(const e of t)if(this.edges.has(e))return this.edges.delete(e),e;return null}discard(t){for(const e of t)this.edges.delete(e)}lock(){const e=this.el.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}unlock(){document.pointerLockElement&&document.exitPointerLock()}}function Dc(i){if(!(i instanceof HTMLElement))return!1;if(i.isContentEditable)return!0;const t=i.tagName;if(t==="TEXTAREA"||t==="SELECT")return!0;if(t!=="INPUT")return!1;const e=i.type;return e!=="button"&&e!=="submit"&&e!=="checkbox"&&e!=="radio"}const Kx=["Escape","Tab","KeyI"],jx=["KeyE","KeyF","KeyR","KeyG","KeyQ","Space","F3","F4","F6","F7"];function Zx(i){return i==="ArrowUp"||i==="KeyW"?"up":i==="ArrowDown"||i==="KeyS"?"down":i==="Enter"||i==="KeyE"?"use":"none"}function Jx(i,t){if(!t)return{type:"none"};if(i==="playing"){if(t==="Escape")return{type:"mode",mode:"paused"};if(t==="Tab"||t==="KeyI")return{type:"mode",mode:"inventory"}}else if(i==="paused"){if(t==="Escape")return{type:"mode",mode:"playing"};if(t==="Tab"||t==="KeyI")return{type:"mode",mode:"inventory"}}else if(i==="inventory"){if(t==="Escape"||t==="Tab"||t==="KeyI")return{type:"mode",mode:"playing"}}else if(i==="examine"||i==="keypad"){if(t==="Escape")return{type:"mode",mode:"playing"}}else if((i==="settings"||i==="slots"||i==="credits"||i==="exit")&&t==="Escape")return{type:"back"};return{type:"none"}}const Qx="1907",je=(i,t,e,n)=>({id:i,name:t,description:e,kind:"note",stack:1,droppable:!1,text:n}),ui={note_maja:je("note_maja","Majas brev","Kuverten er fugtig. Blækket er Majas.",`Emil

Hvis du læser det her, er jeg gået ind alene. Det var dumt. Skt. Agnes lukkede officielt i 1987, men porten er ikke den eneste vej ud — og ikke den eneste vej ind.

De flyttede ikke patienterne. De flyttede journalerne ned under jorden og lod huset glemme dem. Vogteren går stadig rundgang. Han kan lide mørke, og han hader lys i øjnene.

Koden er årstallet på stifterens sten. Jeg nåede ikke pengeskabet. Kapelnøglen skulle ligge på første sal. Bagporten er død uden strøm. Der er også en tunnel under lighuset, hvis porten svigter.

Hvis lyset dør, så stå stille. Hvis han hvisker dit navn, er det allerede for sent at løbe.

— Maja`),note_log:je("note_log","Vagtbog","Sidste side i receptionens bog.",`VAGTBLOG — 12. november 1987

03:10  Østfløjen mørk. Sikringerne er sprunget igen.
03:40  Lyd fra kapellet. Ingen nøgle i skranken.
04:05  Dr. Holm beordrer kælderen aflåst.
04:20  Jeg slukker ikke lyset i gangen. Jeg slukker ikke lyset.
04:31  Nogen står i døren. Det er ikke en patient.

Siden er revet over. Resten mangler.`),note_code:je("note_code","Stiftelsesprotokol","Et arkivark med årstal og en henvisning.",`STIFTELSESPROTOKOL (uddrag)

Skt. Agnes Asyl grundlagt 1907 af Agnes Holm.
Direktørens pengeskab er sat til stiftelsesåret.
Nøglerne til kapellet opbevares på sygeplejerskekontoret — 1. sal.

"Det der skrives ned, kan ikke begraves."`),note_generator:je("note_generator","Nødstrømsnote","En falmet instruktion ved generatoren.",`NØDSTRØM — KUN FOR VEDLIGEHOLD

Tre sikringer skal sidde samtidigt:
  RØD  — køkkenet, ved komfuret
  BLÅ  — fyrrummet
  GUL  — kælderdepotet

Uden strøm forbliver bagportens lås død.
Hylden i lighuset kan brydes med kobenet fra fyrrummet.
Tunnellen bagved er ikke tegnet færdig. Kravl, hvor loftet knækker.`),note_nurse:je("note_nurse","Seddel fra vagten","Skrevet med en hånd der ryster.",`Til den næste vagt —

Kapelnøglen ligger i øverste skuffe. Jeg lægger den der, fordi mine hænder ryster for meget til at bede.

Lad være med at tælle sengene på 1. sal. Der er altid én for meget.

— Søster`),note_director:je("note_director","Holms brev","Fundet i pengeskabet. Papiret er tungt.",`Fortroligt. Dr. E. Holm.

Forsøgene i kælderen skulle kun vare vinteren over. Agnes' navn holdt bestyrelsen rolig. Det gjorde Vogteren ikke.

Han var ansat til at holde orden. Nu holder han huset. Hvis nogen finder mapperne i kapellet, så brænd porten — ikke journalerne.

Journalerne er husets hukommelse. Uden dem er han bare en mand i en uniform der ikke passer mere.`),note_secret:je("note_secret","Uafrystelig note","Ikke stemplet. Ikke arkiveret.",`Ikke arkiveret.

Patienterne i fløj B blev ført ned efter lukketid. De der ikke kom op igen, står ikke i de officielle tal.

Rosenkransen lå om Agnes' hånd, da de murede nichen til. Den får ham til at tøve. Kun et øjeblik. Det er nok, hvis du allerede er i bevægelse.`),file_1:je("file_1","Journal 12","Patientjournal. Navnet er streget over.",`JOURNAL 12 — indlagt 1979

Patienten beskriver en vagt der står stille for enden af sengen, også når lyset er tændt. Anbefaling: ingen nattevagter alene i østfløjen.

Overført til kælderobservation 2. marts 1986. Ingen udskrivelse.`),file_2:je("file_2","Journal 19","Mappen lugter af fugt og jern.",`JOURNAL 19 — "stilleperioden"

Efter tre døgn uden søvn holdt patienten op med at blinke. Dr. Holm noterede det som fremgang. Sygeplejersken noterede det ikke.

Sidste linje, anden håndskrift: Han tæller stadig med.`),file_3:je("file_3","Journal 27","Et barnefoto er hæftet bagpå. Det vender forkert.",`JOURNAL 27 — stue 101

Familien fik at vide, at patienten var overført til et andet amt. Der findes intet modtagebrev.

På bagsiden af fotografiet, med blyant: "tæl ikke vinduerne."`),file_4:je("file_4","Journal 33","Blækket er tværet ud, som om siden har ligget i vand.",`JOURNAL 33 — stue 102

Patienten nægtede at sove med ryggen til døren. Natten efter var sengen flyttet, ikke patienten.

Margen: Hvis du ser én der står helt stille, så er det ikke en patient. Patienter trækker vejret.`),file_5:je("file_5","Journal 41","Et ark fra lighuset. Hjørnet er brændt.",`JOURNAL 41 — kælder

Dødstidspunkt udeladt. Årsag udeladt. Underskrift: Holm.

Under stregen, ikke med maskine: Vi løb tør for plads i skufferne, så vi begyndte at bruge nicherne.`),file_6:je("file_6","Journal 44","Den sidste mappe. Den har aldrig haft et stempel.",`JOURNAL 44 — ikke oprettet

Navn: Agnes Holm. Status: stifter, ikke patient. Alligevel ligger journalen her.

"Hun bad os huske hende som et hus. Huse husker tilbage."

Hvis alle seks journaler forlader grunden sammen med bevismappen, er der noget at trykke. Ellers er det kun en historie.`),battery:{id:"battery",name:"Batteri",description:"Et slidt batteri til lygten. Tryk R for at skifte.",kind:"battery",stack:8,droppable:!0},fuse_red:{id:"fuse_red",name:"Rød sikring",description:"Keramik og kobber. Hører til i generatoren.",kind:"fuse",stack:1,droppable:!1},fuse_blue:{id:"fuse_blue",name:"Blå sikring",description:"Mærket med et blåt bånd. Fyrrummet.",kind:"fuse",stack:1,droppable:!1},fuse_yellow:{id:"fuse_yellow",name:"Gul sikring",description:"Den sidste af de tre. Depotet.",kind:"fuse",stack:1,droppable:!1},key_op:{id:"key_op",name:"Nøgle fra operationsstuen",description:"En af tre. Uden den forbliver vejen ud lukket.",kind:"key",stack:1,droppable:!1},key_arkiv:{id:"key_arkiv",name:"Nøgle fra arkivet",description:"En af tre. Den lå mellem journalerne.",kind:"key",stack:1,droppable:!1},key_kapel:{id:"key_kapel",name:"Nøgle fra kapellet",description:"En af tre. Kold som alteret.",kind:"key",stack:1,droppable:!1},chapel_key:{id:"chapel_key",name:"Kapelnøgle",description:"Tung, kold messing. Passer til kapeldøren.",kind:"key",stack:1,droppable:!1},master_key:{id:"master_key",name:"Hovednøgle",description:"Direktørens nøgle. Bagporten vil have den — og strøm.",kind:"key",stack:1,droppable:!1},evidence:{id:"evidence",name:"Bevismappe",description:"Kapellets mappe. Uden den er flugten kun en flugt.",kind:"story",stack:1,droppable:!1,text:`BEVISMAPPE — kapellet, Skt. Agnes

Korrespondance mellem Dr. Holm og amtet, 1984–1987.
Overførsler uden modtager.
En liste over navne der ikke optræder i de offentlige dødsbøger.

Det er nok til en artikel. Det er ikke nok til at gøre huset færdigt.
Seks journaler mangler, hvis nogen skal tro på det hele.`},rosary:{id:"rosary",name:"Agnes’ rosenkrans",description:"Perlerne er varme. Tryk Q for at holde den frem. To gange.",kind:"special",stack:1,droppable:!1,text:"Perlerne er slidt skæve. Når du holder den frem, standser skridtene et øjeblik — ikke af ærbødighed, af genkendelse."},crowbar:{id:"crowbar",name:"Koben",description:"Rustent. Nok til at rokke en hylde der ikke vil flytte sig.",kind:"tool",stack:1,droppable:!1},medkit:{id:"medkit",name:"Førstehjælp",description:"Gazebind og en halv flaske sprit. Bruges fra inventaret.",kind:"consumable",stack:4,droppable:!0,heal:48},blueprint:{id:"blueprint",name:"Bygningsplan",description:"En gulnet plantegning. Rum du har besøgt, er tydeligere.",kind:"map",stack:1,droppable:!1,text:`SKT. AGNES — PLANTEGNING
Kælder, stueetage, 1. sal.
Hemmelige rum er ikke tegnet. Tunnellen er kun en stiplet streg.`}},qa=["file_1","file_2","file_3","file_4","file_5","file_6"];function Di(i){const t=ui[i];if(!t)throw new Error(`Ukendt genstand: ${i}`);return t}function tu(i){return i.map(t=>({...t}))}function Ya(i,t){return i.reduce((e,n)=>n.itemId===t?e+n.count:e,0)}function de(i,t){return Ya(i,t)>0}function sr(i,t,e=1){const n=ui[t];if(!n||!Number.isFinite(e)||e<=0)return{slots:i,added:0};const s=tu(i);let r=Math.min(e,Math.max(0,n.stack-Ya(s,t)));const o=r,a=s.find(l=>l.itemId===t);if(a){const l=Math.min(r,n.stack-a.count);a.count+=l,r-=l}return r>0&&s.push({itemId:t,count:r}),{slots:s,added:o}}function Sr(i,t,e=1){const n=tu(i);let s=e;for(let r=n.length-1;r>=0&&s>0;r--){if(n[r].itemId!==t)continue;const o=Math.min(n[r].count,s);n[r].count-=o,s-=o,n[r].count<=0&&n.splice(r,1)}return n}function Lc(i,t){const e=ui[t];return!e||!e.droppable||Ya(i,t)<=0?{slots:i,dropped:!1}:{slots:Sr(i,t,1),dropped:!0}}function t_(i,t){const e=ui[t];return!e||e.kind!=="consumable"||!de(i,t)?{slots:i,heal:0}:{slots:Sr(i,t,1),heal:e.heal??0}}const eu=100,nu=100/170,e_=nu*.18,n_=45;function i_(i,t,e){const n=Math.max(0,e);let s=i,r=t,o=!1;return r?(s=Math.max(0,s-nu*n),s<=0&&(r=!1,o=!0)):s=Math.min(eu,s+e_*n),{charge:s,on:r,died:o}}function Ic(i,t=n_){return Math.min(eu,Math.max(0,i)+t)}function rr(i){return i<=.5?"empty":i<12?"critical":i<25?"low":"ok"}const s_=["fuse_red","fuse_blue","fuse_yellow"];function or(i,t){return i.readIds.includes(t)}function r_(i){return s_.filter(t=>de(i.inventory,t)).length}function kc(i){return["key_op","key_arkiv","key_kapel"].filter(t=>de(i.inventory,t)).length}function To(i){return qa.filter(t=>de(i.inventory,t)).length}const $a=[{id:"m1_brev",requires:[],text:()=>"Læs Majas brev.",hint:()=>"Det ligger i inventaret. Undersøg det.",done:i=>or(i,"note_maja")},{id:"m2_reception",requires:["m1_brev"],text:()=>"Læs vagtbogen i receptionen.",hint:()=>"Den ligger ved skranken.",done:i=>or(i,"note_log")},{id:"m3_generator",requires:["m2_reception"],text:i=>i.flags.generatorOn?"Generatoren kører.":`Find tre sikringer og start generatoren (${r_(i)}/3).`,hint:i=>or(i,"note_generator")?"Rød, blå og gul skal sidde i generatoren samtidig.":"Nødstrømmen står et sted i kælderen.",done:i=>i.flags.generatorOn},{id:"m4_arkiv",requires:["m2_reception"],text:()=>"Undersøg arkivet og find stiftelsesprotokollen.",hint:()=>"Protokollen siger, hvilket årstal pengeskabet bruger.",done:i=>or(i,"note_code")},{id:"m5_nogler",requires:["m4_arkiv"],text:i=>`Find nøglerne fra operationsstuen, arkivet og kapellet (${kc(i)}/3).`,hint:()=>"De tre nøgler ligger ikke i samme rum.",done:i=>kc(i)>=3},{id:"m6_beviser",requires:["m5_nogler"],optional:!0,text:i=>i.flags.secretOpen?`Den skjulte gang er åben. Saml journaler (${To(i)}/6) og bevismappen.`:`Saml patientjournaler (${To(i)}/6) og kapellets bevismappe.`,hint:()=>"Det ændrer slutningen. Det låser ikke døren.",done:i=>de(i.inventory,"evidence")&&To(i)>=6},{id:"m7_udgang",requires:["m5_nogler"],text:()=>"Åbn UD TIL STILHEDEN.",hint:i=>i.flags.generatorOn?i.flags.safeOpen?"Tre nøgler, strøm og hovednøglen.":"Pengeskabet bruger stiftelsesåret.":"Bagporten er død uden strøm.",done:()=>!1}];function o_(i){const t=$a.find(e=>e.id===i);if(!t)throw new Error(`Ukendt mission: ${i}`);return t}function iu(i,t){return i.requires.every(e=>o_(e).done(t))}function a_(i,t){return{id:i.id,text:i.text(t),done:i.done(t),hint:i.hint(t),optional:!!i.optional}}function l_(i){return $a.filter(t=>iu(t,i)).map(t=>a_(t,i))}function c_(i){const t=l_(i).filter(e=>!e.optional);return t.find(e=>!e.done)??t[t.length-1]}function h_(i){const t=$a.filter(n=>!n.optional&&n.id!=="m7_udgang");return t.filter(n=>iu(n,i)&&n.done(i)).length/t.length}const ai={x:6,y:0,z:6,yaw:Math.PI/2},ar={x:42,y:0,z:9,yaw:Math.PI};function wr(){return{version:1,playTime:0,player:{x:ai.x,y:ai.y,z:ai.z,yaw:ai.yaw,pitch:0,health:100,stamina:100,battery:100,flashlightOn:!1,crouching:!1},inventory:[{itemId:"note_maja",count:1}],pickedUp:[],flags:{generatorOn:!1,secretOpen:!1,safeOpen:!1,radioOn:!1,introDone:!1,mannequinUsed:!1,mannequinOn:!1,powerCut:!1},visited:["reception"],doorsOpen:[],doorsUnlocked:[],monster:{x:ar.x,y:ar.y,z:ar.z,yaw:ar.yaw,state:"Patrol",waypointIndex:0,suspicion:0,blindTime:0},rosaryCharges:2,iFrame:0,events:Es(),readIds:[]}}function su(i){return qa.reduce((t,e)=>t+(de(i.inventory,e)?1:0),0)}const ru=[{id:"key_op",name:"Nøgle fra operationsstuen"},{id:"key_arkiv",name:"Nøgle fra arkivet"},{id:"key_kapel",name:"Nøgle fra kapellet"}];function Uc(i){return ru.filter(t=>de(i.inventory,t.id)).length}function u_(i){return ru.filter(t=>!de(i.inventory,t.id)).map(t=>t.name)}function ou(i){const t=u_(i);return t.length?`UD TIL STILHEDEN er låst. Mangler: ${t.join(", ")}.`:i.flags.generatorOn?!i.flags.safeOpen&&!de(i.inventory,"master_key")?"Kræver hovednøglen fra pengeskabet.":null:"Låsen er død. Generatoren mangler strøm."}function Nc(i,t,e){return e&&i.flags.secretOpen&&t==="slagterum"?"tunnel":t==="stilhed"&&ou(i)===null?"yard":null}function lr(i){return c_(i)}function d_(i){return h_(i)}function f_(i,t){if(t==="death")return"optagelsen";if(t==="tunnel")return"flugten";const e=su(i),n=de(i.inventory,"evidence"),s=de(i.inventory,"rosary");return n&&s&&e>=6?"vidnet":n?"sandheden":"tom_port"}function p_(i){switch(i){case"vidnet":return{kicker:"Afslutning",title:"Vidnet",paragraphs:["Bagporten giver sig, da strømmen og nøglen endelig er enige. Regnen er koldere end huset. Under armen har du bevismappen, rosenkransen og alle seks journaler.","Maja står ikke på vejen. Det gør ingen. Men navnene gør. I morgen er Skt. Agnes ikke længere en anekdote, nogen kan lukke en dør på.","Et sted bag dig standser et par skridt ved tærsklen og bliver der. Huset husker. Nu gør nogen udenfor det også."]};case"sandheden":return{kicker:"Afslutning",title:"Sandheden",paragraphs:["Du har ikke hvert ark. Du har nok. Bevismappen vejer mere end lygten, og porten lukker bag dig med en lyd der endelig lyder som en lås og ikke som en mund.","Artiklen vil blive modsagt. Det er i orden. Modsigelse er også et spor, og spor er det eneste, Vogteren ikke kan patruljere."]};case"tom_port":return{kicker:"Afslutning",title:"Den tomme port",paragraphs:["Porten åbner. Du løber. Dine hænder er tomme.",'I dagslys vil du lyde som alle de andre, der "bare havde en fornemmelse" af Skt. Agnes. Huset beholder papirerne. Du beholder pulsen. Ingen af delene rækker.']};case"flugten":return{kicker:"Afslutning",title:"Flugten",paragraphs:["Tunnellen lugter af jern og regn. Du kravler ud under marehalmen, og vinden tager lygten et øjeblik, før den giver den tilbage.","Bag dig bliver bygningen stående med sine arkiver, sine senge og sin vagt. Du slap ud. Det er ikke det samme som at afslutte noget."]};case"optagelsen":return{kicker:"Afslutning",title:"Optagelsen",paragraphs:["Lygten peger op i loftet. Nogen samler den op. Det er ikke dig.","Dit navn står på en linje, der ikke fandtes i går, med en håndskrift du genkender. Vogteren retter på uniformen og fortsætter sin runde. Der er én seng mere, end der var."]}}}const au=[0,1,2,3],lu=i=>`skt-agnes-save-${i}`;function m_(){return localStorage}const g_=new Set(["note","story","map","collectible"]),v_=new Set(["Idle","Patrol","Investigate","Search","Suspicious","Chase","Attack","LostPlayer","ReturnToPatrol"]);function Ie(i,t){return typeof i=="number"&&Number.isFinite(i)?i:t}function hs(i,t,e){return Math.max(t,Math.min(e,i))}function us(i){return Array.isArray(i)?i.filter(t=>typeof t=="string"):[]}function x_(i){if(!Array.isArray(i))return[];const t=new Map;for(const e of i){if(!e||typeof e!="object")continue;const n=e.itemId,s=e.count,r=typeof n=="string"?ui[n]:void 0;!r||typeof s!="number"||!Number.isFinite(s)||s<=0||t.set(n,Math.min(r.stack,(t.get(n)??0)+s))}return[...t].map(([e,n])=>({itemId:e,count:Math.floor(n)}))}function __(i){if(!i||typeof i!="object")return null;const t=i;if(!t.player||typeof t.player.x!="number"||!Number.isFinite(t.player.x)||!Array.isArray(t.inventory))return null;const e=wr(),n=x_(t.inventory),s=t.readIds,r=Array.isArray(s)?s.filter(c=>typeof c=="string"&&!!ui[c]):n.map(c=>c.itemId).filter(c=>c!=="note_maja"&&g_.has(ui[c]?.kind??"")),o={...e.flags},a=t.flags??{};for(const c of Object.keys(e.flags))o[c]=a[c]===!0;const l=t.monster&&typeof t.monster.x=="number"?t.monster:e.monster;return{...e,version:1,playTime:Math.max(0,Ie(t.playTime,0)),player:{...e.player,x:t.player.x,y:Ie(t.player.y,e.player.y),z:Ie(t.player.z,e.player.z),yaw:Ie(t.player.yaw,e.player.yaw),pitch:hs(Ie(t.player.pitch,0),-1.2,1.2),health:hs(Ie(t.player.health,100),0,100),stamina:hs(Ie(t.player.stamina,100),0,100),battery:hs(Ie(t.player.battery,100),0,100),flashlightOn:t.player.flashlightOn===!0,crouching:t.player.crouching===!0},inventory:n,pickedUp:us(t.pickedUp),flags:o,visited:us(t.visited).length?us(t.visited):e.visited,doorsOpen:us(t.doorsOpen),doorsUnlocked:us(t.doorsUnlocked),monster:{...e.monster,x:Ie(l.x,e.monster.x),y:Ie(l.y,e.monster.y),z:Ie(l.z,e.monster.z),yaw:Ie(l.yaw,e.monster.yaw),state:v_.has(l.state)?l.state:e.monster.state,waypointIndex:Number.isInteger(l.waypointIndex)?l.waypointIndex:0,suspicion:Ie(l.suspicion,0),blindTime:Ie(l.blindTime,0)},rosaryCharges:hs(Math.round(Ie(t.rosaryCharges,e.rosaryCharges)),0,2),iFrame:Math.max(0,Ie(t.iFrame,0)),events:t.events&&Array.isArray(t.events.jumps)?{...Es(),...t.events,jumps:t.events.jumps.filter(c=>typeof c=="string"),beats:Array.isArray(t.events.beats)?t.events.beats.filter(c=>typeof c=="string"):[]}:Es(),readIds:r}}function y_(i,t,e,n=Date.now()){const s={version:1,slot:t,savedAt:n,snapshot:structuredClone(e)};return i.setItem(lu(t),JSON.stringify(s)),s}function xs(i,t){const e=i.getItem(lu(t));if(!e)return null;try{const n=JSON.parse(e);if(!n||n.version!==void 0&&n.version!==1)return null;const s=__(n.snapshot);return s?{version:1,slot:t,savedAt:typeof n.savedAt=="number"&&Number.isFinite(n.savedAt)?n.savedAt:0,snapshot:s}:null}catch{return null}}function Fc(i){return au.map(t=>xs(i,t))}function Oc(i){let t=null;for(const e of au){const n=xs(i,e);n&&(!t||n.savedAt>t.savedAt)&&(t=n)}return t}const cu="skt-agnes-settings";function wa(){const i=typeof navigator<"u"?navigator:void 0,t=i?i.deviceMemory:void 0,e=i?.hardwareConcurrency;return{quality:t!==void 0&&t<=4||e!==void 0&&e<=4?"low":"medium",resolutionScale:1,mouseSensitivity:.00135,masterVolume:.8,musicVolume:.7,sfxVolume:.85,brightness:1,fpsCap:60,fullscreen:!1,motionBlur:!1,cameraShake:!0,subtitles:!0,invertY:!1}}function Li(i,t,e){return Math.max(t,Math.min(e,i))}function Ka(i){const t=wa(),e=i??{},n=e.quality==="low"||e.quality==="high"||e.quality==="medium"?e.quality:t.quality,s=e.fpsCap,r=s===0||s===30||s===60||s===120?s:t.fpsCap;return{quality:n,resolutionScale:Li(typeof e.resolutionScale=="number"?e.resolutionScale:t.resolutionScale,.5,1.25),mouseSensitivity:Li(typeof e.mouseSensitivity=="number"?e.mouseSensitivity:t.mouseSensitivity,4e-4,.01),masterVolume:Li(typeof e.masterVolume=="number"?e.masterVolume:t.masterVolume,0,1),musicVolume:Li(typeof e.musicVolume=="number"?e.musicVolume:t.musicVolume,0,1),sfxVolume:Li(typeof e.sfxVolume=="number"?e.sfxVolume:t.sfxVolume,0,1),brightness:Li(typeof e.brightness=="number"?e.brightness:t.brightness,.55,1.6),fpsCap:r,fullscreen:typeof e.fullscreen=="boolean"?e.fullscreen:t.fullscreen,motionBlur:typeof e.motionBlur=="boolean"?e.motionBlur:t.motionBlur,cameraShake:typeof e.cameraShake=="boolean"?e.cameraShake:t.cameraShake,subtitles:typeof e.subtitles=="boolean"?e.subtitles:t.subtitles,invertY:typeof e.invertY=="boolean"?e.invertY:t.invertY}}function M_(i){const t=i.getItem(cu);if(!t)return wa();try{return Ka(JSON.parse(t))}catch{return wa()}}function b_(i,t){i.setItem(cu,JSON.stringify(Ka(t)))}const _s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class fi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const S_=new Fa(-1,1,1,-1,0,1);class w_ extends Ee{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}const E_=new w_;class kr{constructor(t){this._mesh=new J(E_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,S_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ea extends fi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pn.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new kr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zc extends fi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class T_ extends fi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Bc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ea(_s),this.copyPass.material.blending=Be,this.clock=new Gg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zc!==void 0&&(o instanceof zc?n=!0:o instanceof T_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Hc extends fi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const A_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Yi extends fi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new Ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(r,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Qe(r,o,{type:dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Qe(r,o,{type:dn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=A_;this.highPassUniforms=Pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=_s;this.copyUniforms=Pn.clone(h.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_r,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ht,this.oldClearAlpha=1,this.basic=new ze,this.fsQuad=new kr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Yi.BlurDirectionX=new st(1,0);Yi.BlurDirectionY=new st(0,1);const R_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class C_ extends fi{constructor(){super();const t=R_;this.uniforms=Pn.clone(t.uniforms),this.material=new kg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new kr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===th?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class P_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=t-d,_=e-f;let m,p;g>_?(m=1,p=0):(m=0,p=1);const b=g-m+h,E=_-p+h,x=g-1+2*h,S=_-1+2*h,C=l&255,T=c&255,R=this.perm[C+this.perm[T]]%12,y=this.perm[C+m+this.perm[T+p]]%12,M=this.perm[C+1+this.perm[T+1]]%12;let v=.5-g*g-_*_;v<0?n=0:(v*=v,n=v*v*this.dot(this.grad3[R],g,_));let P=.5-b*b-E*E;P<0?s=0:(P*=P,s=P*P*this.dot(this.grad3[y],b,E));let L=.5-x*x-S*S;return L<0?r=0:(L*=L,r=L*L*this.dot(this.grad3[M],x,S)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,_=h-g,m=u-g,p=d-g,b=t-_,E=e-m,x=n-p;let S,C,T,R,y,M;b>=E?E>=x?(S=1,C=0,T=0,R=1,y=1,M=0):b>=x?(S=1,C=0,T=0,R=1,y=0,M=1):(S=0,C=0,T=1,R=1,y=0,M=1):E<x?(S=0,C=0,T=1,R=0,y=1,M=1):b<x?(S=0,C=1,T=0,R=0,y=1,M=1):(S=0,C=1,T=0,R=1,y=1,M=0);const v=b-S+f,P=E-C+f,L=x-T+f,k=b-R+2*f,z=E-y+2*f,G=x-M+2*f,Y=b-1+3*f,B=E-1+3*f,Q=x-1+3*f,at=h&255,ct=u&255,_t=d&255,kt=this.perm[at+this.perm[ct+this.perm[_t]]]%12,q=this.perm[at+S+this.perm[ct+C+this.perm[_t+T]]]%12,tt=this.perm[at+R+this.perm[ct+y+this.perm[_t+M]]]%12,vt=this.perm[at+1+this.perm[ct+1+this.perm[_t+1]]]%12;let rt=.6-b*b-E*E-x*x;rt<0?s=0:(rt*=rt,s=rt*rt*this.dot3(this.grad3[kt],b,E,x));let St=.6-v*v-P*P-L*L;St<0?r=0:(St*=St,r=St*St*this.dot3(this.grad3[q],v,P,L));let Rt=.6-k*k-z*z-G*G;Rt<0?o=0:(Rt*=Rt,o=Rt*Rt*this.dot3(this.grad3[tt],k,z,G));let Dt=.6-Y*Y-B*B-Q*Q;return Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this.dot3(this.grad3[vt],Y,B,Q)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const _=(t+e+n+s)*l,m=Math.floor(t+_),p=Math.floor(e+_),b=Math.floor(n+_),E=Math.floor(s+_),x=(m+p+b+E)*c,S=m-x,C=p-x,T=b-x,R=E-x,y=t-S,M=e-C,v=n-T,P=s-R,L=y>M?32:0,k=y>v?16:0,z=M>v?8:0,G=y>P?4:0,Y=M>P?2:0,B=v>P?1:0,Q=L+k+z+G+Y+B,at=o[Q][0]>=3?1:0,ct=o[Q][1]>=3?1:0,_t=o[Q][2]>=3?1:0,kt=o[Q][3]>=3?1:0,q=o[Q][0]>=2?1:0,tt=o[Q][1]>=2?1:0,vt=o[Q][2]>=2?1:0,rt=o[Q][3]>=2?1:0,St=o[Q][0]>=1?1:0,Rt=o[Q][1]>=1?1:0,Dt=o[Q][2]>=1?1:0,ae=o[Q][3]>=1?1:0,qt=y-at+c,ce=M-ct+c,N=v-_t+c,Re=P-kt+c,Vt=y-q+2*c,Wt=M-tt+2*c,Tt=v-vt+2*c,ne=P-rt+2*c,Et=y-St+3*c,D=M-Rt+3*c,w=v-Dt+3*c,H=P-ae+3*c,K=y-1+4*c,Z=M-1+4*c,$=v-1+4*c,xt=P-1+4*c,lt=m&255,ut=p&255,Gt=b&255,et=E&255,mt=a[lt+a[ut+a[Gt+a[et]]]]%32,Ct=a[lt+at+a[ut+ct+a[Gt+_t+a[et+kt]]]]%32,Pt=a[lt+q+a[ut+tt+a[Gt+vt+a[et+rt]]]]%32,gt=a[lt+St+a[ut+Rt+a[Gt+Dt+a[et+ae]]]]%32,Yt=a[lt+1+a[ut+1+a[Gt+1+a[et+1]]]]%32;let Lt=.6-y*y-M*M-v*v-P*P;Lt<0?h=0:(Lt*=Lt,h=Lt*Lt*this.dot4(r[mt],y,M,v,P));let jt=.6-qt*qt-ce*ce-N*N-Re*Re;jt<0?u=0:(jt*=jt,u=jt*jt*this.dot4(r[Ct],qt,ce,N,Re));let U=.6-Vt*Vt-Wt*Wt-Tt*Tt-ne*ne;U<0?d=0:(U*=U,d=U*U*this.dot4(r[Pt],Vt,Wt,Tt,ne));let ot=.6-Et*Et-D*D-w*w-H*H;ot<0?f=0:(ot*=ot,f=ot*ot*this.dot4(r[gt],Et,D,w,H));let X=.6-K*K-Z*Z-$*$-xt*xt;return X<0?g=0:(X*=X,g=X*X*this.dot4(r[Yt],K,Z,$,xt)),27*(h+u+d+f+g)}}const cr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new st},cameraProjectionMatrix:{value:new Qt},cameraInverseProjectionMatrix:{value:new Qt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},ur={uniforms:{tDiffuse:{value:null},resolution:{value:new st}},vertexShader:`varying vec2 vUv;

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

		}`};class Wn extends fi{constructor(t,e,n,s,r=32){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const o=new za;o.format=hi,o.type=ci,this.normalRenderTarget=new Qe(this.width,this.height,{minFilter:He,magFilter:He,type:dn,depthTexture:o}),this.ssaoRenderTarget=new Qe(this.width,this.height,{type:dn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new xe({defines:Object.assign({},cr.defines),uniforms:Pn.clone(cr.uniforms),vertexShader:cr.vertexShader,fragmentShader:cr.fragmentShader,blending:Be}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Ug,this.normalMaterial.blending=Be,this.blurMaterial=new xe({defines:Object.assign({},ur.defines),uniforms:Pn.clone(ur.uniforms),vertexShader:ur.vertexShader,fragmentShader:ur.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new xe({defines:Object.assign({},hr.defines),uniforms:Pn.clone(hr.uniforms),vertexShader:hr.vertexShader,fragmentShader:hr.fragmentShader,blending:Be}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xe({uniforms:Pn.clone(_s.uniforms),vertexShader:_s.vertexShader,fragmentShader:_s.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Kc,blendDst:Ro,blendEquation:An,blendSrcAlpha:$c,blendDstAlpha:Ro,blendEquationAlpha:An}),this.fsQuad=new kr(null),this.originalClearColor=new Ht}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Wn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Yc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new I;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=rd.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}generateRandomKernelRotations(){const n=new P_,s=16,r=new Float32Array(s);for(let o=0;o<s;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=n.noise3d(a,l,c)}this.noiseTexture=new Ph(r,4,4,Tr,hn),this.noiseTexture.wrapS=Wi,this.noiseTexture.wrapT=Wi,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}}Wn.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Gc={uniforms:{tDiffuse:{value:null},uExposure:{value:.62},uDamage:{value:0},uFade:{value:0},uGrain:{value:.012},uChroma:{value:.12},uVignette:{value:.72},uBlur:{value:new st},uTime:{value:0},uLow:{value:0},uFlash:{value:0}},vertexShader:`
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
  `};class D_{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.renderer.toneMapping=Dn,this.composer=new Bc(t),this.grade=new Ea(Gc),this.applyQuality("medium")}composer;grade;bloom=null;ssao=null;get uniforms(){return this.grade.uniforms}applyQuality(t){const e=this.renderer.getSize(new st);if(this.composer.dispose(),this.composer=new Bc(this.renderer),this.ssao=null,this.bloom=null,t==="high")try{const n=new Wn(this.scene,this.camera,e.x,e.y,12);n.kernelRadius=8,n.minDistance=.002,n.maxDistance=.08,this.ssao=n,this.composer.addPass(n)}catch{this.composer.addPass(new Hc(this.scene,this.camera))}else this.composer.addPass(new Hc(this.scene,this.camera));t!=="low"&&(this.bloom=new Yi(new st(e.x,e.y),t==="high"?.28:.18,.45,.86),this.composer.addPass(this.bloom)),this.grade=new Ea(Gc),this.composer.addPass(this.grade),this.composer.addPass(new C_),this.setSize(e.x,e.y)}setSize(t,e){this.composer.setSize(t,e),this.ssao?.setSize(t,e),this.bloom?.setSize(t,e)}render(){this.composer.render()}dispose(){this.composer.dispose()}}const L_=new Set(["stilhed","secret"]);function I_(i,t,e){const n=Number.isFinite(e)&&e>0?Math.min(3,e):1;return{width:Math.max(1,Math.round(Math.max(1,i)*n)),height:Math.max(1,Math.round(Math.max(1,t)*n))}}function k_(i){return i==="m2_reception"?"reception":i==="m3_generator"?"kaeldergang":i==="m4_arkiv"?"arkiv":i==="m7_udgang"?"kammer":null}function U_(i){const t=i.rooms.filter(u=>u.floor===i.floor),e=u=>i.visited.has(u),n=u=>L_.has(u)||u.startsWith("trappe"),s=new Set;for(const u of t)e(u.id)&&s.add(u.id);for(const u of i.doors)u.floor===i.floor&&(e(u.a)&&!n(u.b)&&s.add(u.b),e(u.b)&&!n(u.a)&&s.add(u.a));const r=t.filter(u=>s.has(u.id)),o=r.length?r:t.filter(u=>u.id==="reception");let a=1/0,l=1/0,c=-1/0,h=-1/0;for(const u of o)a=Math.min(a,u.x),l=Math.min(l,u.z),c=Math.max(c,u.x+u.w),h=Math.max(h,u.z+u.d);return Number.isFinite(a)||(a=0,l=0,c=1,h=1),N_(i,r,a,l,c,h)}function N_(i,t,e,n,s,r){const c=Math.min(188/Math.max(1,s-e),122/Math.max(1,r-n)),h=b=>16+(b-e)*c,u=b=>22+(b-n)*c,d=t.find(b=>i.px>=b.x&&i.px<=b.x+b.w&&i.pz>=b.z&&i.pz<=b.z+b.d),f=t.map(b=>{const E=i.visited.has(b.id);return{id:b.id,known:E,here:b.id===d?.id,x:h(b.x),y:u(b.z),w:b.w*c,h:b.d*c,label:E?z_(b.name):"?"}}),g=i.doors.filter(b=>b.floor===i.floor&&t.some(E=>E.id===b.a)&&t.some(E=>E.id===b.b)).map(b=>({id:b.id,x:h(b.axis==="x"?b.coord:b.center),y:u(b.axis==="z"?b.coord:b.center),locked:b.locked})),_=i.goals.filter(b=>b.floor===i.floor&&i.visited.has(b.roomId)).map(b=>({id:b.id,x:h(b.x),y:u(b.z)})),m=i.batteries.filter(b=>b.floor===i.floor).map(b=>({x:h(b.x),y:u(b.z)})),p=i.monster?.show&&i.monster.floor===i.floor?{x:h(i.monster.x),y:u(i.monster.z)}:null;return{rooms:f,doors:g,goals:_,batteries:m,player:{x:h(i.px),y:u(i.pz),yaw:i.yaw},monster:p}}function F_(i,t,e,n){const s=O_(n,t,e);i.clearRect(0,0,t,e),i.fillStyle="rgba(8,7,8,0.72)",i.fillRect(0,0,t,e),i.fillStyle="#cbbba4",i.font=`${Math.max(11,Math.round(t/20))}px Georgia, serif`,i.fillText(`Etage ${n.floor+1}`,8,Math.max(14,Math.round(e/11)));for(const r of s.rooms)i.fillStyle=r.here?"rgba(120,40,36,0.85)":r.known?"rgba(60,52,48,0.9)":"rgba(28,26,28,0.9)",i.fillRect(r.x,r.y,r.w,r.h),i.strokeStyle="rgba(210,196,176,0.35)",i.strokeRect(r.x+.5,r.y+.5,r.w-1,r.h-1),i.fillStyle=r.known?"#e7dcc7":"#8a8178",i.font=`${Math.max(10,Math.round(t/22))}px Georgia, serif`,i.fillText(r.label,r.x+4,r.y+Math.max(14,r.h*.28));for(const r of s.doors)i.fillStyle=r.locked?"#8d4a3a":"#d7cbb6",i.fillRect(r.x-3,r.y-1.5,6,3);for(const r of s.goals)i.strokeStyle="#e7dcc7",i.beginPath(),i.arc(r.x,r.y,5,0,Math.PI*2),i.stroke();for(const r of s.batteries)i.fillStyle="#d7c27a",i.fillRect(r.x-2,r.y-2,4,4);s.monster&&(i.fillStyle="#ff3b32",i.beginPath(),i.arc(s.monster.x,s.monster.y,4,0,Math.PI*2),i.fill()),i.save(),i.translate(s.player.x,s.player.y),i.rotate(-s.player.yaw),i.fillStyle="#f4efe6",i.beginPath(),i.moveTo(0,7),i.lineTo(4,-4),i.lineTo(-4,-4),i.closePath(),i.fill(),i.restore()}function O_(i,t,e){const n=U_(i);if(t===220&&e===150)return n;const s=t/220,r=e/150,o=Math.min(s,r),a=l=>({...l,x:l.x*s,y:l.y*r});return{rooms:n.rooms.map(l=>({...l,x:l.x*s,y:l.y*r,w:l.w*o,h:l.h*o})),doors:n.doors.map(a),goals:n.goals.map(a),batteries:n.batteries.map(a),player:{...a(n.player),yaw:n.player.yaw},monster:n.monster?a(n.monster):null}}function z_(i){return i.length>16?i.slice(0,15)+"…":i}function B_(i){return i.map(t=>({id:t.id,name:t.name,floor:t.floor,x:t.x,z:t.z,w:t.w,d:t.d}))}class H_{constructor(t,e,n){this.ui=e,this.storage=n??m_(),this.settings=M_(this.storage);const s=new URLSearchParams(location.search).has("test");this.testMode=s,this.renderer=new xg({canvas:t,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,stencil:!0}),this.renderer.outputColorSpace=Te,this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.renderer.shadowMap.type=qc,this.renderer.setClearColor(460298),this.scene.background=new Ht(460298),this.scene.fog=new Ba(658191,.028),this.scene.add(new Hg(2106925,.028));const r=new Ng(2372419,855051,.075);this.scene.add(r);const o=new Bg(9018282,.018);o.position.set(-20,40,-10),this.scene.add(o),this.world=yx(),this.built=Ox(this.scene,this.world),this.monster=new Nv,this.scene.add(this.monster.group),this.atmo=new Gv(this.scene,24),this.scene.add(this.camera),this.spot=new ga("#f5ead7",0,21,.49,.57,1.15),this.spot.castShadow=this.settings.quality!=="low",this.spot.shadow.mapSize.set(this.settings.quality==="high"?1024:512,this.settings.quality==="high"?1024:512),this.spot.shadow.bias=-25e-5,this.spot.shadow.camera.near=.1,this.spot.shadow.camera.far=18,this.camera.add(this.spot),this.spot.position.set(.18,-.16,-.55),this.spot.target.position.set(.18,-.14,-12),this.camera.add(this.spot.target),this.viewmodel=this.buildViewmodel(),this.camera.add(this.viewmodel),this.lunge=this.buildLunge(),this.camera.add(this.lunge),this.shadowMesh=new J(new Ms(.22,1.1,3,6),new ze({color:"#2a241f"})),this.shadowMesh.visible=!1,this.scene.add(this.shadowMesh),this.butcher=this.buildButcher(),this.scene.add(this.butcher),this.peek=new Kt;const a=new J(new pe(.16,18,12),new Bt({color:"#e6ddd2",roughness:.55}));a.scale.set(.86,1.25,.5);const l=new J(new Ss(.07,.006,6,16,Math.PI),new Bt({color:"#2a1814"}));l.position.set(0,-.04,.08),l.rotation.z=Math.PI,this.peek.add(a,l),this.peek.visible=!1,this.scene.add(this.peek),this.spawnCells=this.world.nav.nodes.filter(u=>!u.doorId&&!u.stair&&u.links.length>0&&(u.ix+u.iz)%3===0).map(u=>({x:u.x,y:u.y,z:u.z}));const c=new Ae(.05,1.15,7,16,1,!0);c.translate(0,-3.5,0),c.rotateX(Math.PI/2),this.cone=new J(c,new ze({color:"#ffe6c2",transparent:!0,opacity:.045,depthWrite:!1,side:Se,blending:_r})),this.camera.add(this.cone),this.shadow=new J(new we(1.4,2.2),new ze({color:"#050505",transparent:!0,opacity:0,depthWrite:!1,side:Se})),this.scene.add(this.shadow),this.post=new D_(this.renderer,this.scene,this.camera),this.post.applyQuality(this.settings.quality),this.scares=new Yv(this.camera,this.audio),this.input=new $x(t),this.input.setSensitivity(this.settings.mouseSensitivity);const h=()=>{this.audio.ensure(),this.audio.resume()};window.addEventListener("pointerdown",h),window.addEventListener("keydown",h),t.addEventListener("click",()=>{h(),this.mode==="playing"&&this.input.lock()}),this.resize(),window.addEventListener("resize",()=>this.resize()),this.applyVolumes(),this.ui.continueEnabled(!!Oc(this.storage)),this.ui.fillSettings(this.settings),this.installApi()}renderer;scene=new _g;camera=new We(72,1,.08,80);world;built;post;audio=new nv;input;monster;atmo;scares;director=Mc();schedule=bc();tone=bo();radioAt=-99;settings;storage;mode="menu";settingsFrom="menu";slotMode="load";snap=wr();sim=V_();open=new Map;desired=new Map;unlocked=new Set;hiding=null;holdBreath=!1;cameraEye=Yh;bob=0;trauma=0;damage=0;fade=0;flash=0;message="";messageT=0;toast="";toastT=0;subtitleT=0;lastObjective="";autosavedIntro=!1;invIndex=0;code="";showPerf=!1;fps=60;fpsAcc=0;fpsFrames=0;acc=0;noises=[];runtime=[];rosaryCd=0;stepDist=0;batteryWarned=!1;creepIn=12;aimedDoor="";prevRoom="";prevFlash=!1;lungeT=0;lunge;shadowMesh;shadowT=0;shadowFrom=new I;shadowTo=new I;butcher;recentSpawns=[];hideWait=0;knocks=[];showAudio=!1;lookSX=0;lookSY=0;blackout=0;peekT=0;peekCool=12;monsterShown=0;monsterRoom="";monsterRoomUntil=0;peek;spawnCells=[];mannequinT=0;looked=0;lightCut=new Map;spot;cone;viewmodel;shadow;clock=0;aggression=0;camDir=new I;testMode=new URLSearchParams(location.search).has("test");ended=!1;frozen=!1;rafId=0;start(){this.audio.enableRoomTones(),this.ui.show("menu"),this.mode="menu",this.clock=performance.now(),this.rafId=requestAnimationFrame(this.onFrame)}onFrame=t=>{if(this.frozen)return;const e=Math.min(.05,(t-this.clock)/1e3||0);this.clock=t,this.fpsAcc+=e,this.fpsFrames++,this.fpsAcc>=.5&&(this.fps=this.fpsFrames/this.fpsAcc,this.fpsAcc=0,this.fpsFrames=0);const n=this.settings.fpsCap;if(n>0){this.acc+=e;const s=1/n;if(this.acc>=s-1e-4){const r=Math.min(.05,this.acc);this.acc=0,this.advance(r)}}else this.advance(e);this.rafId=requestAnimationFrame(this.onFrame)};setFrozen(t){this.frozen=t,t?cancelAnimationFrame(this.rafId):(this.clock=performance.now(),this.rafId=requestAnimationFrame(this.onFrame))}advance(t){this.applyModalKeys(),this.mode==="playing"?this.updatePlaying(t):(this.mode==="menu"||this.mode==="credits"||this.mode==="exit")&&this.updateIdle(t),this.render(t),this.audio.update(t)}updateIdle(t){const e=performance.now()*12e-5,n=2.2+Math.sin(e)*.35;this.camera.position.set(5.2,1.55,n),this.camera.lookAt(10,1.35,6),this.viewmodel.visible=!1,this.lunge.visible=!1,this.cone.visible=!1,this.spot.intensity=0,this.atmo.update(t,this.camera.position,new I(0,0,1),!1),this.tickRain(t),this.tickLights(performance.now()/1e3,!1)}updatePlaying(t){this.snap.playTime+=t,this.snap.iFrame=Math.max(0,this.snap.iFrame-t),this.rosaryCd=Math.max(0,this.rosaryCd-t),this.messageT=Math.max(0,this.messageT-t),this.toastT=Math.max(0,this.toastT-t),this.subtitleT=Math.max(0,this.subtitleT-t),this.damage=Math.max(0,this.damage-t*.8),this.noises.length=0,this.stepPower(t),!this.snap.flags.introDone&&this.snap.playTime>4.2&&(this.snap.flags.introDone=!0,this.trauma=Math.max(this.trauma,.45),this.audio.play("doorSlam",{x:this.sim.x,y:this.sim.y,z:this.sim.z-2}),this.say("Døren faldt i bag dig.")),!this.autosavedIntro&&this.snap.playTime>2&&(this.autosavedIntro=!0,this.persist(0));const e=this.input.consumeLook();this.lookSX=this.lookSX*.4+e.x*.6,this.lookSY=this.lookSY*.4+e.y*.6;const n=vc(this.sim.yaw,this.sim.pitch,this.lookSX,this.lookSY,this.settings.invertY);this.sim.yaw=n.yaw,this.sim.pitch=n.pitch;const s=this.input.wish();this.holdBreath=!!this.hiding&&s.sprint,this.input.pressed("F3")&&(this.showPerf=!this.showPerf),this.input.pressed("F4")&&(this.showAudio=!this.showAudio),(this.testMode||new URLSearchParams(location.search).has("debug"))&&this.input.pressed("F6")&&(this.snap.playTime+=30),(this.testMode||new URLSearchParams(location.search).has("debug"))&&this.input.pressed("F7")&&this.runShadow(),this.input.pressed("KeyF")&&this.toggleFlash(),this.input.pressed("KeyR")&&this.swapBattery(),this.input.pressed("KeyG")&&this.dropBattery(),this.input.pressed("KeyQ")&&this.useRosary(),this.input.pressed("KeyE")&&this.interact();const r=So(this.world,this.unlocked,this.open);if(this.hiding)this.audio.setLocomotion(!1,!1,!0),this.stepDist=0;else{const l=this.sim.grounded,c=this.sim.x,h=this.sim.z;this.sim=Zv(this.sim,{...s,dt:t},r,(_,m,p)=>cs(this.world,_,m,p));const u=Math.hypot(this.sim.x-c,this.sim.z-h);s.jump&&l&&!this.sim.grounded&&this.noise("jump"),this.sim.justLanded&&this.noise("landing");const d=s.sprint&&this.sim.stamina>5&&!this.sim.crouching,g=Math.abs(s.forward)+Math.abs(s.strafe)>.01&&this.sim.grounded&&u>.002;if(this.audio.setLocomotion(g,d,this.sim.crouching),g){this.stepDist+=u;const _=this.sim.crouching?.72:d?1.45:1.05;this.stepDist>=_&&(this.stepDist-=_,this.audio.playFootstep(d,this.sim.crouching),this.noise(this.sim.crouching?"crouch":d?"sprint":"walk"),Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.floorMat==="wood"&&Math.random()<.12&&this.audio.play("creak",this.feet(),{volume:.35}))}else this.stepDist=0;this.separateFromMonster(r)}this.placeCamera(s,t),this.camera.getWorldDirection(this.camDir);const o=this.computeChase(),a=this.monster.update({dt:t,playerPos:{x:this.sim.x,y:this.sim.y,z:this.sim.z},playerEye:this.eyePos(),hiding:!!this.hiding,hideSpot:this.hidePos(),holdBreath:this.holdBreath,camPos:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},camDir:{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},flashlightOn:this.sim.flashlightOn&&this.sim.battery>0,allowChase:o,aggression:this.aggression,waypoints:Lx(this.world,l=>this.floorAllowed(l),this.snap.flags.secretOpen),blockers:r,colliders:r,nav:this.world.nav,query:{allowFloor:l=>this.floorAllowed(l),blockDoor:l=>{const c=this.world.doors.find(h=>h.id===l);return c?ir(c,this.unlocked):!1}},doors:this.world.doors,openAmount:this.open,floorAt:(l,c,h)=>cs(this.world,l,c,h),requestOpen:l=>this.desired.set(l,1),doorLocked:l=>{const c=this.world.doors.find(h=>h.id===l);return c?ir(c,this.unlocked):!1},noises:this.noises,searchSpots:this.world.hides.map(l=>{const c=this.world.rooms.find(h=>h.id===l.room);return{id:l.id,pos:{x:l.x,y:c?Ot[c.floor]:this.sim.y,z:l.z}}})});a.entered==="Chase"&&this.audio.play("growl",this.monster.pos,{volume:.8}),a.attack&&this.hurt(36,!0),a.foundHiding&&(this.hiding=null,this.hurt(28,!0),this.say("Den fandt dig.")),this.herdMonster(),this.relocateMonster(t,r),this.stepEvents(t),this.stepKnocks(),this.stepDirector(t),this.animateDoors(t),this.drainLight(t),this.visit(),this.checkEnding(),this.syncHud(s),this.copySim()}stepDirector(t){const e=this.monsterDist(),n=Vn(this.world,this.sim.x,this.sim.z,this.sim.y),s=!(this.sim.flashlightOn&&this.sim.battery>1)&&!this.roomLit(n?.id),r=Hv(this.director,{dt:t,health:this.snap.player.health,monsterDist:e,inDark:s,sprinting:this.input.wish().sprint&&!this.sim.crouching,hiding:!!this.hiding,tookDamage:this.damage>.85,story:d_(this.snap),rng:Math.random,blocked:this.monster.bb.state==="Attack"||this.lungeT>0||this.scares.fx.face>0});if(this.director=r.state,this.aggression=r.aggression,r.event?.type==="scare"){const c=this.scares.dynamic(this.snap.playTime,{inDark:s,monsterNear:e<10,doorOpenNear:[...this.open.values()].some(h=>h>.5),inMannequinRoom:n?.id==="r102",tension:this.director.tension,rng:Math.random});c&&this.applyScare(c)}else r.event?.type==="soft"&&this.soft(r.event.kind);this.scares.update(t),this.trauma=Math.max(this.trauma,this.settings.cameraShake?this.scares.fx.trauma:0),this.flash=Math.max(this.flash,this.scares.fx.flash),this.scares.fx.subtitle&&this.caption(this.scares.fx.subtitle,1.5);const o=this.monster.bb.state==="Chase"||this.monster.bb.state==="Attack";this.audio.setTension(this.director.tension,o);const a=(100-this.snap.player.health)/140+(e<8?.35:0)+(this.sim.stamina<30?.2:0);this.audio.setHeartbeat(this.hiding||this.snap.player.health<55||e<7?a:0),this.audio.setBreath(this.holdBreath?.05:this.sim.stamina<25?.5:e<6?.25:.05);const l=this.nearestLight();if(this.audio.setHum(!!l&&this.lightLevel(l.def)>.2,l?{x:l.def.x,y:l.def.y,z:l.def.z}:this.feet()),this.audio.setRadio(this.snap.flags.radioOn,Sc),this.audio.setZone(this.zoneFor(n?.id)),this.stepRoomTone(n,t),this.creepIn-=t,this.creepIn<=0&&this.mode==="playing"){this.creepIn=16+Math.random()*18-this.director.tension*.05;const c=6+Math.random()*6,h=Math.random()*Math.PI*2,u=this.director.tension>55&&Math.random()<.35?"scream":"whisper";this.audio.play(u,{x:this.sim.x+Math.cos(h)*c,y:this.sim.y,z:this.sim.z+Math.sin(h)*c},{volume:.55,occluded:!0})}this.audio.setListener({x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},{x:0,y:1,z:0})}applyScare(t){t==="door"&&this.slamNearest(),t==="still"&&(this.built.mannequin.visible=!0,this.mannequinT=8,this.snap.flags.mannequinOn=!0),t==="fake"&&(this.built.pot.position.y=Ot[-1]?this.built.pot.position.y:this.built.pot.position.y),t==="ceiling"&&(this.trauma=Math.max(this.trauma,.5)),t==="flash"&&(this.flash=1),t==="shadow"&&(this.shadow.position.set(this.sim.x+this.camDir.x*3,this.sim.y+1.2,this.sim.z+this.camDir.z*3),this.shadow.material.opacity=.85)}soft(t){if(t==="flicker"||t==="lightOut"){const e=this.built.lights.filter(s=>this.lightLevel(s.def)>.2),n=e[Math.floor(Math.random()*e.length)];n&&this.lightCut.set(n.def.id,this.snap.playTime+(t==="lightOut"?5:1.2))}else if(t==="whisper"||t==="breath"){const e=t==="breath"?1.2:2.4;this.audio.play("whisper",{x:this.sim.x-this.camDir.x*e,y:this.sim.y+1.4,z:this.sim.z-this.camDir.z*e},{volume:t==="breath"?.85:.6}),this.caption(t==="breath"?"…åndedræt, lige bag dig.":"…Agnes…",1.8),t==="breath"&&this.audio.setHeartbeat(.55)}else t==="knock"?this.queueKnocks():t==="phone"?(this.audio.play("sting",{x:16,y:5,z:22},{volume:.8}),this.caption("En telefon ringer et sted i fløjen.",2.2)):t==="creak"?this.audio.play("creak",{x:this.sim.x+2,y:this.sim.y,z:this.sim.z+1},{volume:.5}):t==="thunder"?(this.audio.play("thunder"),this.atmo.strike(),this.flash=.55):t==="drop"?this.audio.play("door",{x:49,y:4,z:36},{volume:.5}):t==="shadow"?this.applyScare("shadow"):t==="radio"?this.audio.play("whisper",{x:53,y:5,z:2},{volume:.4}):t==="mannequin"&&!this.snap.flags.mannequinUsed&&(this.built.mannequin.visible=!0,this.mannequinT=10)}hurt(t,e){this.snap.iFrame>0||this.ended||(this.snap.player.health=Math.max(0,this.snap.player.health-t),this.sim.health=this.snap.player.health,this.snap.iFrame=1.2,this.damage=1,this.trauma=.9,e&&this.scares.trigger("attack",this.snap.playTime,!0),this.snap.player.health<=0&&this.finish("death"))}finish(t){if(this.ended)return;this.ended=!0;const e=f_(this.snap,t);this.ui.ending(e,t==="death"),this.setMode("ending"),this.fade=t==="death"?.65:.35,this.audio.play(t==="death"?"scream":"sting")}checkEnding(){if(this.ended)return;const t=Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"",e=Nc(this.snap,t,!1);e&&this.finish(e)}interact(){if(this.hiding){this.hiding=null,this.audio.play("door",this.feet(),{volume:.4});return}const t=tr(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates());t&&(t.kind==="door"?this.useDoor(t.id):t.kind==="pickup"?this.take(t.id):t.kind==="hide"?this.enterHide(t.id):t.kind==="generator"?this.useGenerator():t.kind==="safe"?this.openKeypad():t.kind==="bookshelf"?this.useShelf():t.kind==="radio"&&(this.snap.flags.radioOn=!this.snap.flags.radioOn,this.audio.play("click"),this.noise("voice")))}useDoor(t){const e=this.world.doors.find(s=>s.id===t);if(!e)return;if(ir(e,this.unlocked)){if(e.id===wc){const s=ou(this.snap);if(s){this.say(s),this.audio.play("locked",this.doorPos(e),{volume:.7});return}this.unlocked.add(e.id),this.desired.set(e.id,1),this.audio.play("door",this.doorPos(e)),this.audio.play("key"),this.say("Låsene giver sig.");return}if(e.needsPower&&!this.snap.flags.generatorOn)this.say("Låsen er død. Generatoren mangler strøm.");else if(e.keyId==="chapel_key"&&!de(this.snap.inventory,"chapel_key"))this.say("Låst. Nøglen ligger på sygeplejerskekontoret.");else if(e.keyId==="master_key"&&!de(this.snap.inventory,"master_key"))this.say("Kræver hovednøglen fra pengeskabet.");else if(e.keyId&&de(this.snap.inventory,e.keyId)&&(!e.needsPower||this.snap.flags.generatorOn)){this.unlocked.add(e.id),this.desired.set(e.id,1),this.audio.play("door",this.doorPos(e)),this.noise("door");return}else this.say("Låst.");this.audio.play("locked",this.doorPos(e),{volume:.6}),this.noise("door");return}const n=this.open.get(e.id)??0;this.desired.set(e.id,n>.4?0:1),this.audio.play("door",this.doorPos(e)),this.noise("door")}take(t){if(this.snap.pickedUp.includes(t))return;const e=this.world.pickups.find(o=>o.id===t)||this.runtime.find(o=>o.id===t);if(!e)return;const n=sr(this.snap.inventory,e.itemId,1);if(!n.added){this.say("Du kan ikke bære flere.");return}this.snap.inventory=n.slots,"room"in e&&this.snap.pickedUp.push(t);const s=this.built.pickups.get(t)||this.runtime.find(o=>o.id===t)?.mesh;s&&(s.visible=!1),this.runtime=this.runtime.filter(o=>o.id!==t),this.audio.play(e.itemId.startsWith("note")||e.itemId.startsWith("file")?"paper":"pickup");const r=Di(e.itemId);(r.kind==="note"||r.kind==="story"||r.kind==="map"||r.kind==="collectible")&&this.openExamine(e.itemId),e.itemId==="battery"&&(this.sim.battery=Ic(this.sim.battery,50),this.say("Batteri. +50%.")),e.itemId.startsWith("key_")&&this.say(`${r.name}. Nøgler ${Uc(this.snap)}/3.`),e.itemId==="rosary"&&(this.snap.rosaryCharges=2),this.refreshObjective()}useGenerator(){const t=["fuse_red","fuse_blue","fuse_yellow"];if(this.snap.flags.generatorOn){this.say("Generatoren kører allerede.");return}if(!t.every(e=>de(this.snap.inventory,e))){const e=t.filter(n=>!de(this.snap.inventory,n)).map(n=>Di(n).name);this.say(`Mangler ${e.join(", ")}.`);return}for(const e of t)this.snap.inventory=Sr(this.snap.inventory,e,1);this.snap.flags.generatorOn=!0,this.audio.play("generator",{x:8,y:1,z:35},{volume:.9}),this.say("Nødstrømmen vågner. Bagportens lås har strøm."),this.trauma=.3,this.refreshObjective()}openKeypad(){if(this.snap.flags.safeOpen){this.say("Pengeskabet er tomt.");return}this.code="",this.ui.keypad(this.code,de(this.snap.inventory,"note_code")?"Stiftelsesåret.":"Du kender ikke koden endnu."),this.setMode("keypad")}submitCode(){this.code===Qx?(this.snap.flags.safeOpen=!0,de(this.snap.inventory,"master_key")||(this.snap.inventory=sr(this.snap.inventory,"master_key").slots),de(this.snap.inventory,"note_director")||(this.snap.inventory=sr(this.snap.inventory,"note_director").slots),this.audio.play("key"),this.setMode("playing"),this.openExamine("note_director"),this.refreshObjective()):(this.audio.play("fail"),this.noise("door"),this.code="",this.ui.keypad(this.code,"Forkert. Lyden bar langt."))}useShelf(){const t=Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"";if(this.snap.flags.secretOpen){const e=Nc(this.snap,t,!0);e&&this.finish(e);return}if(!de(this.snap.inventory,"crowbar")){this.say("Hylden rokker sig ikke. Du mangler noget at bryde med."),this.audio.play("locked");return}this.snap.flags.secretOpen=!0,this.unlocked.add("door_secret"),this.audio.play("doorSlam",{x:37,y:1,z:24},{volume:.8}),this.noise("door"),this.say("Hylden giver sig. Der er et rum bagved.")}enterHide(t){const e=this.world.hides.find(n=>n.id===t);e&&(this.hiding=t,this.sim.x=e.x,this.sim.z=e.z,this.sim.vx=0,this.sim.vz=0,this.audio.play("door",this.feet(),{volume:.3}),this.say(e.kind==="bed"?"Under sengen. Hold Shift for at holde vejret.":"I skabet. Hold Shift for at holde vejret. E for at komme ud."))}toggleFlash(){if(this.sim.battery<=1){this.audio.play("fail"),this.sim.flashlightOn=!1,this.say("Batteriet er tomt. Det lader langsomt, mens lygten er slukket.");return}const t=!this.sim.flashlightOn;this.sim.flashlightOn=t,this.audio.play("flash",void 0,{rate:t?1:.88}),t||this.say("Lygten er slukket. Batteriet lader.")}swapBattery(){if(!de(this.snap.inventory,"battery")){this.audio.play("fail"),this.say("Ingen reservebatterier.");return}this.snap.inventory=Sr(this.snap.inventory,"battery",1),this.sim.battery=Ic(this.sim.battery),this.sim.flashlightOn=!0,this.batteryWarned=!1,this.audio.play("click"),this.say("Batteri skiftet.")}dropBattery(){const t=Lc(this.snap.inventory,"battery");if(!t.dropped){this.say("Ikke noget du kan smide.");return}this.snap.inventory=t.slots;const e=`drop_${Math.floor(Math.random()*1e6)}`,n=this.built.pickups.get("p_bat1")?.clone()??new J(new pe(.08),new Bt({color:"#888"}));n.visible=!0,n.position.set(this.sim.x,this.sim.y+.2,this.sim.z),this.scene.add(n),this.runtime.push({id:e,itemId:"battery",x:this.sim.x,y:this.sim.y+.4,z:this.sim.z,mesh:n}),this.audio.play("pickup",this.feet(),{volume:.4}),this.noise("drop")}useRosary(){if(!de(this.snap.inventory,"rosary")||this.snap.rosaryCharges<=0||this.rosaryCd>0){de(this.snap.inventory,"rosary")&&this.snap.rosaryCharges<=0&&this.say("Perlerne er kolde. Den virker ikke igen.");return}this.snap.rosaryCharges--,this.rosaryCd=6,this.monster.bb.blindTime=2.8,this.monster.bb.hesitate=2.8,(this.monster.bb.state==="Chase"||this.monster.bb.state==="Attack")&&(this.monster.bb.state="LostPlayer"),this.audio.play("key",this.feet(),{volume:.5}),this.say("Han tøver.")}drainLight(t){const e=i_(this.sim.battery,this.sim.flashlightOn,t);this.sim.battery=e.charge,this.sim.flashlightOn=e.on,e.died?(this.audio.play("metallic"),this.say("Lygten gik ud. Den lader langsomt op, når den er slukket."),this.batteryWarned=!1):this.sim.flashlightOn&&rr(this.sim.battery)==="critical"&&!this.batteryWarned?(this.batteryWarned=!0,this.say("Batteriet er næsten tomt.")):this.sim.battery>30&&(this.batteryWarned=!1)}syncView(){this.placeCamera({sprint:!1},1),this.camera.getWorldDirection(this.camDir)}placeCamera(t,e=1/60){const n=this.hiding&&this.world.hides.find(u=>u.id===this.hiding)?.kind==="bed"?.32:Qv(this.sim.crouching||!!this.hiding);this.cameraEye=e>=1?n:Jv(this.cameraEye,n,e);const s=this.cameraEye,r=Math.hypot(this.sim.vx,this.sim.vz);r>.4&&this.sim.grounded&&!this.hiding&&(this.bob+=r*.016);const o=this.hiding?0:this.sim.crouching?.01:t.sprint?.04:.025,a=Bh(this.sim.yaw),l=this.settings.cameraShake?this.trauma*this.trauma:0;this.camera.position.set(this.sim.x+a.x*Math.cos(this.bob)*o+(Math.random()-.5)*l*.12,this.sim.y+s+Math.sin(this.bob*2)*o+(Math.random()-.5)*l*.08,this.sim.z+a.z*Math.cos(this.bob)*o),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.sim.yaw+Math.PI,this.camera.rotation.x=this.sim.pitch,this.camera.rotation.z=(Math.random()-.5)*l*.05;const c=Math.sin(this.bob);this.viewmodel.position.set(.2+c*.008,-.16-Math.abs(Math.sin(this.bob*2))*.008,-.36),this.viewmodel.rotation.z=c*.04,this.viewmodel.rotation.x=Math.sin(this.bob*2)*.02;const h=72+(t.sprint&&r>3?3:0);Math.abs(this.camera.fov-h)>.1&&(this.camera.fov=h,this.camera.updateProjectionMatrix())}render(t){const e=performance.now()/1e3;this.tickLights(e,this.mode==="playing"),this.tickRain(t),this.mode==="playing"&&this.atmo.update(t,this.camera.position,this.camDir,this.sim.flashlightOn&&this.sim.battery>0);const n=this.mode==="playing"&&this.sim.flashlightOn&&this.sim.battery>0,s=rr(this.sim.battery),r=n&&s==="critical"&&Math.sin(e*18)>.55?.45:1,o=s==="low"?.72:s==="critical"?.5:1,a=Math.max(.2,this.sim.battery/100);this.spot.intensity=n?53*a*o*r:0;const l=this.viewmodel.position;if(this.spot.position.set(l.x,l.y+.02,l.z-.2),this.spot.target.position.set(l.x,l.y+.02,-12),this.cone.visible=!1,this.mannequinT>0?(this.mannequinT-=t,this.built.mannequin.visible=!0,this.camDir.dot(new I(27.4-this.camera.position.x,1.5,26.4-this.camera.position.z).normalize())>.82&&this.monsterDistTo(27.4,26.4)<8?this.looked+=t:this.looked=0,this.looked>1.15&&(this.built.mannequin.visible=!1,this.mannequinT=0,this.snap.flags.mannequinUsed=!0,this.scares.trigger("face",this.snap.playTime,!0),this.looked=0)):this.snap.flags.mannequinOn,this.shadow.material.opacity>0){const d=this.shadow.material;d.opacity=Math.max(0,d.opacity-t),this.shadow.position.x+=this.camDir.z*t,this.shadow.position.z-=this.camDir.x*t}this.snap.flags.secretOpen&&(this.built.secretShelf.position.x+=(36-this.built.secretShelf.position.x)*Math.min(1,t*2));const c=this.post.uniforms,h=this.settings.motionBlur?Math.min(.02,Math.hypot(this.sim.vx,this.sim.vz)*.002):0;c.uExposure.value=.87*this.settings.brightness,c.uDamage.value=this.damage,c.uFade.value=this.fade,c.uGrain.value=0,c.uChroma.value=.08+this.scares.fx.chroma*.05,c.uTime.value=e,c.uLow.value=this.sim.health<40?(40-this.sim.health)/40:0,c.uFlash.value=Math.max(this.flash,this.atmo.lightning*.35),c.uBlur.value.set(this.camDir.x*h,this.camDir.y*h),this.mode==="playing"&&this.blackout<=0&&(this.fade=Math.max(0,this.fade-t*.45)),this.trauma=Math.max(0,this.trauma-t),this.flash=Math.max(0,this.flash-t*1.5);const u=this.scene.fog;u.density=.025+this.director.tension*7e-5,this.post.render(),this.subtitleT<=0&&this.mode==="playing"&&this.ui.subtitle("")}tickLights(t,e){for(const r of this.built.lights){let o=this.lightLevel(r.def);const a=this.lightCut.get(r.def.id)??0;if(e&&a>this.snap.playTime&&(o*=.05),r.def.flicker&&o>0){const l=r.def.x*.59+r.def.z*.31,c=.88+.12*Math.sin(t*.57+l),d=Math.sin(t*.71+l)+.52*Math.sin(t*1.19+l*2.8)>(r.def.room==="reception"?.98:1.24)?.17+.18*(.5+.5*Math.sin(t*3.1+l)):1;o*=Math.max(.06,c*d)}r.lens&&(r.lens.emissiveIntensity=Math.max(.012,o*1.1)),(r.light instanceof ga||r.light instanceof va)&&(r.light.intensity=r.base*o,r.light.castShadow=this.settings.quality!=="low"&&r.def.room==="hall")}const n=this.settings.quality==="low"?4:this.settings.quality==="medium"?8:16;[...this.built.lights].sort((r,o)=>Math.hypot(r.def.x-this.camera.position.x,r.def.z-this.camera.position.z)-Math.hypot(o.def.x-this.camera.position.x,o.def.z-this.camera.position.z)).forEach((r,o)=>{o>=n&&r.light instanceof va&&(r.light.intensity=0)})}lightLevel(t){return t.mode==="power"?this.snap.flags.generatorOn?1:0:t.mode==="secret"?this.snap.flags.secretOpen?1:0:1}roomLit(t){return t?this.built.lights.some(e=>e.def.room===t&&this.lightLevel(e.def)>.4):!1}nearestLight(){let t=null,e=8;for(const n of this.built.lights){const s=Math.hypot(n.def.x-this.sim.x,n.def.z-this.sim.z);s<e&&(e=s,t=n)}return t}tickRain(t){const e=this.built.rain.geometry.getAttribute("position"),n=e.array;for(let s=0;s<n.length;s+=3)n[s+1]-=t*6,n[s+1]<.2&&(n[s+1]=6);e.needsUpdate=!0}animateDoors(t){for(const e of this.world.doors){if(e.kind!=="door")continue;const n=this.desired.get(e.id)??0,s=this.open.get(e.id)??0,r=s+Math.sign(n-s)*Math.min(Math.abs(n-s),t*8);this.open.set(e.id,r),mx(s,r)&&this.audio.play("creak",this.doorPos(e),{volume:.35});const o=this.built.doors.get(e.id);if(!o)continue;const a=Number.isFinite(o.userData.closedYaw)?o.userData.closedYaw:0,l=o.userData.swing||1;o.rotation.y=a+r*1.7*l;const h=o.userData.panel?.material;if(h instanceof Bt){const u=this.aimedDoor===e.id;h.emissive.set(u?"#6a3028":"#000000"),h.emissiveIntensity=u?.35:0}}}slamNearest(){let t=null,e=12;for(const s of this.world.doors){if((this.open.get(s.id)??0)<.4)continue;const r=this.doorPos(s),o=Math.hypot(r.x-this.sim.x,r.z-this.sim.z);o<e&&(e=o,t=s.id)}if(!t)return;this.desired.set(t,0),this.open.set(t,0);const n=this.world.doors.find(s=>s.id===t);this.audio.play("doorSlam",this.doorPos(n),{volume:.9}),this.noise("door"),e<4&&(this.trauma=Math.max(this.trauma,.45))}candidates(){const t=[];for(const n of this.world.doors){if(n.kind!=="door")continue;const s=this.doorPos(n),r=this.open.get(n.id)??0,a=ir(n,this.unlocked)?"Låst dør":r>.4?"Luk dør":"Åbn dør";t.push({id:n.id,kind:"door",x:s.x,y:s.y+1,z:s.z,radius:1.15,prompt:a})}for(const n of this.world.pickups){if(this.snap.pickedUp.includes(n.id))continue;const s=this.world.rooms.find(r=>r.id===n.room);s&&t.push({id:n.id,kind:"pickup",x:n.x,y:Ot[s.floor]+.8,z:n.z,radius:.55,prompt:Di(n.itemId).name})}for(const n of this.runtime)t.push({id:n.id,kind:"pickup",x:n.x,y:n.y,z:n.z,radius:.5,prompt:"Batteri"});const e=this.world.props.find(n=>n.id==="slag_shelf");if(e){const n=this.world.rooms.find(s=>s.id===e.room);n&&t.push({id:e.id,kind:"bookshelf",x:e.x,y:Ot[n.floor]+1,z:e.z,radius:1.1,prompt:this.snap.flags.secretOpen?"Kravl ind i tunnellen":"Hylde"})}for(const n of this.world.devices){const s=this.world.rooms.find(o=>o.id===n.room),r={generator:"Generator",safe:"Pengeskab",bookshelf:this.snap.flags.secretOpen?"Kravl ind i tunnellen":"Hylde",radio:"Radio"};t.push({id:n.id,kind:n.kind,x:n.x,y:Ot[s.floor]+1,z:n.z,radius:.9,prompt:r[n.kind]})}for(const n of this.world.hides){const s=this.world.rooms.find(r=>r.id===n.room);t.push({id:n.id,kind:"hide",x:n.x,y:Ot[s.floor]+1,z:n.z,radius:.8,prompt:n.kind==="bed"?"Gem dig under sengen":"Gem dig i skabet"})}return t}syncHud(t){const e=this.hiding?null:tr(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates());this.aimedDoor=e?.kind==="door"?e.id:"";const n=lr(this.snap);n.id!==this.lastObjective&&(this.lastObjective&&(this.toast=n.text,this.toastT=3.5,this.persist(0)),this.lastObjective=n.id);const s=su(this.snap);this.ui.hud({objective:n.text,files:s?`Journaler ${s}/${qa.length}`:"",prompt:this.messageT>0?this.message:this.hiding?"Forlad gemmested":e?e.prompt:"",stamina:this.sim.stamina,battery:this.sim.battery,batteryText:`${Math.round(this.sim.battery)}%${rr(this.sim.battery)==="critical"&&this.sim.flashlightOn?" · lavt":""}`,low:this.sim.health<40||rr(this.sim.battery)!=="ok",lockHint:this.mode==="playing"&&!this.input.pointerLocked}),this.ui.hurt(this.damage*.85+(this.sim.health<35?.25:0)),this.paintMap(),this.ui.toast(this.toastT>0?this.toast:"");const r=this.audio.debug();if(this.ui.audioDebug(`Lyd ${r.state}  ${r.sampleRate} Hz
Stemmer ${r.voices}
${r.failures.length?`FEJL ${r.failures.join(" | ")}
`:""}${r.last.join(`
`)}`,this.showAudio&&this.mode==="playing"),this.showPerf){const o=this.renderer.info.render;this.ui.perf(`FPS ${this.fps.toFixed(0)}
Kald ${o.calls}  Trekanter ${o.triangles}
${this.monster.bb.state}  spænding ${this.director.tension.toFixed(0)}
${this.sim.x.toFixed(1)} ${this.sim.y.toFixed(1)} ${this.sim.z.toFixed(1)}`,!0)}else this.ui.perf("",!1)}visit(){const t=Vn(this.world,this.sim.x,this.sim.z,this.sim.y);t&&(this.snap.visited.includes(t.id)||(this.snap.visited.push(t.id),new Set(this.snap.visited.map(n=>this.world.rooms.find(s=>s.id===n)?.floor)).size>1&&this.persist(0)))}refreshObjective(){lr(this.snap).id!==this.lastObjective&&this.lastObjective&&this.persist(0)}floorAllowed(t){return!0}computeChase(){const t=this.monsterDist();let e=this.snap.playTime>46||de(this.snap.inventory,"note_code")||t<4.2;return this.director.suppress>0&&t>2.6&&(e=!1),e}noise(t){const e=this.sim.y<2?-1:this.sim.y<6?0:1,n=this.monster.pos.y<2?-1:this.monster.pos.y<6?0:1,s=!br(this.eyePos(),{x:this.monster.pos.x,y:this.monster.pos.y+1.5,z:this.monster.pos.z},So(this.world,this.unlocked,this.open));this.noises.push({kind:t,pos:this.feet(),floorDelta:Math.abs(e-n),occluded:s})}separateFromMonster(t){if(this.hiding||this.monster.concealed)return;const e=this.sim.x-this.monster.pos.x,n=this.sim.z-this.monster.pos.z,s=Math.hypot(e,n),r=.66;s>.001&&s<r&&Math.abs(this.sim.y-this.monster.pos.y)<1.5&&(this.sim.x+=e/s*(r-s),this.sim.z+=n/s*(r-s),cs(this.world,this.sim.x,this.sim.z,this.sim.y)===null&&(this.sim.x-=e/s*(r-s),this.sim.z-=n/s*(r-s)))}newGame(){this.snap=wr(),this.ended=!1,this.autosavedIntro=!1,this.lastObjective="",this.fade=1,this.sim=Ta(this.snap.player),this.unlocked=new Set(this.snap.doorsUnlocked),this.open.clear(),this.desired.clear(),this.hiding=null,this.runtime.forEach(t=>t.mesh.visible=!1),this.runtime=[];for(const[t,e]of this.built.pickups)e.visible=!this.snap.pickedUp.includes(t);this.monster.spawn(this.snap.monster,this.snap.monster.yaw,"Patrol"),this.director=Mc(),this.schedule=bc(),this.tone=bo(),this.radioAt=-99,this.creepIn=12,this.scares.dismiss(),this.audio.beginScene(),this.built.mannequin.visible=!1,this.built.secretShelf.position.x=37.32,this.viewmodel.visible=!0,this.lunge.visible=!1,this.setMode("playing"),this.audio.ensure()}applySnapshot(t){this.snap=t,this.ended=!1,this.sim=Ta(t.player),this.unlocked=new Set(t.doorsUnlocked),this.open.clear(),this.desired.clear();for(const e of t.doorsOpen)this.open.set(e,1),this.desired.set(e,1);this.hiding=null,this.snap.readIds||(this.snap.readIds=[]),this.settleLoadedBody();for(const[e,n]of this.built.pickups)n.visible=!t.pickedUp.includes(e);t.events||(t.events=Es()),this.monster.spawn(t.monster,t.monster.yaw,t.monster.state),this.monsterDist()<3&&(this.monster.pos={x:4,y:0,z:16},this.monster.group.position.set(4,0,16)),this.built.secretShelf.position.x=t.flags.secretOpen?36:37.32,this.built.mannequin.visible=!1,this.fade=.4,this.viewmodel.visible=!0,this.lunge.visible=!1,this.creepIn=12,this.schedule=rx(this.schedule),this.tone=bo(),this.radioAt=-99,this.scares.dismiss(),this.audio.beginScene(),this.setMode("playing"),this.audio.ensure()}settleLoadedBody(){const t=cs(this.world,this.sim.x,this.sim.z,this.sim.y),e=t!==null&&Tv(this.sim.x,t,this.sim.z,qh,xr,this.sim.crouching,So(this.world,this.unlocked,this.open));if(t===null||e){this.sim.x=ai.x,this.sim.y=ai.y,this.sim.z=ai.z;return}this.sim.y=t}persist(t){this.snap.player.health<=0||(this.copySim(),this.snap.doorsOpen=this.world.doors.filter(e=>(this.open.get(e.id)??0)>.6).map(e=>e.id),this.snap.doorsUnlocked=[...this.unlocked],this.snap.monster={x:this.monster.pos.x,y:this.monster.pos.y,z:this.monster.pos.z,yaw:this.monster.yaw,state:this.monster.bb.state,waypointIndex:this.monster.bb.waypointIndex,suspicion:this.monster.bb.suspicion,blindTime:this.monster.bb.blindTime},y_(this.storage,t,this.snap),this.ui.continueEnabled(!0))}copySim(){this.snap.player={x:this.sim.x,y:this.sim.y,z:this.sim.z,yaw:this.sim.yaw,pitch:this.sim.pitch,health:this.sim.health,stamina:this.sim.stamina,battery:this.sim.battery,flashlightOn:this.sim.flashlightOn,crouching:this.sim.crouching}}setMode(t){const e=this.mode;this.mode=t,t!=="playing"?(this.input.unlock(),this.audio.setLocomotion(!1,!1,!1),this.stepDist=0,e==="playing"&&this.audio.suspendTransient()):e!=="playing"&&!this.testMode&&this.input.lock();const n=t==="paused"?"pause":t;this.ui.show(n==="playing"?"playing":n),this.audio.duck(t!=="playing"&&t!=="menu"),t==="inventory"&&this.refreshInv()}applyModalKeys(){const t=this.input.formFocused();if((this.mode!=="playing"||t)&&this.input.discard(jx),this.mode==="inventory"&&!t){const s=Zx(this.input.takeFirst(["ArrowUp","ArrowDown","KeyW","KeyS","Enter","KeyE"]));s==="up"&&(this.invIndex=Math.max(0,this.invIndex-1)),s==="down"&&(this.invIndex=Math.min(Math.max(0,this.snap.inventory.length-1),this.invIndex+1)),(s==="up"||s==="down")&&this.refreshInv(),s==="use"&&this.useSelected()}const e=this.input.takeFirst(t?["Escape"]:Kx),n=Jx(this.mode,e);n.type==="mode"?this.setMode(n.mode):n.type==="back"&&this.backFromOverlay()}backFromOverlay(){this.mode==="settings"?this.setMode(this.settingsFrom==="slots"?"menu":this.settingsFrom):this.mode==="slots"?this.setMode(this.slotMode==="save"?"paused":"menu"):(this.mode==="credits"||this.mode==="exit")&&this.setMode("menu")}refreshInv(){const t=this.snap.inventory.map(e=>{const n=Di(e.itemId);return{name:n.name,count:e.count,desc:n.description}});this.invIndex>=t.length&&(this.invIndex=0),this.ui.keysLine(`Nøgler fundet: ${Uc(this.snap)}/3`),this.ui.inventory(t,this.invIndex)}openExamine(t){this.snap.readIds.includes(t)||(this.snap.readIds.push(t),this.refreshObjective());const e=Di(t);let n="";t==="blueprint"&&(n=this.world.rooms.filter(s=>s.id!=="secret"||this.snap.visited.includes("secret")).map(s=>`<i class="${this.snap.visited.includes(s.id)?"on":""}">${s.name}</i>`).join("")),this.ui.examine(e,n),this.setMode("examine")}stepRoomTone(t,e){const n=t?{id:t.id,x:t.x,z:t.z,w:t.w,d:t.d,floorY:Ot[t.floor]}:null,s=fx(this.tone,{time:this.snap.playTime,dt:e,room:n});if(this.tone=s.state,s.cue){const r=s.cue;this.audio.play(r.kind,{x:r.x,y:r.y,z:r.z},{volume:.22,occluded:!1})}px(this.snap.flags.radioOn,this.snap.playTime,this.radioAt)&&(this.radioAt=this.snap.playTime,this.audio.play("whisper",Sc,{volume:.2,occluded:!0}))}zoneFor(t){return t?t==="kapel"?"chapel":t==="slagterum"||t==="obduktion"?"slagter":t.startsWith("trappe")||t==="patientgang"?"corridor":t==="observation"||t==="kammer"||t==="stilhed"?"dark":t==="kaeldergang"?"cellar":this.sim.y>6?"upper":"hall":"hall"}relocateMonster(t,e){if(!this.monster.concealed){this.hideWait=0;return}if(this.hideWait+=t,this.hideWait<1.2)return;const n={x:this.sim.x,y:this.sim.y,z:this.sim.z},s=ex({cells:this.spawnCells,player:n,forward:{x:this.camDir.x,z:this.camDir.z},recent:this.recentSpawns,from:{...this.monster.pos},visible:o=>br(this.eyePos(),{x:o.x,y:o.y+1.4,z:o.z},e),rng:Math.random});!s||tx(this.sim.flashlightOn&&this.sim.battery>0,this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},{x:s.x,y:s.y+1.6,z:s.z},e)||(this.monster.reveal(s),this.recentSpawns.push(s),this.recentSpawns.length>6&&this.recentSpawns.shift(),this.hideWait=0,this.audio.trace.push("relocate"))}stepEvents(t){this.snap.events||(this.snap.events=Es());const e=Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"",n=tr(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates()),s=n&&n.kind==="door"?this.open.get(n.id)??0:0,r=!!n&&n.kind==="door"&&s>.55&&n.id!==wc,o=this.butcher.position,a=new I(o.x-this.camera.position.x,0,o.z-this.camera.position.z).normalize(),l=this.camDir.x*a.x+this.camDir.z*a.z<.25,c=ix(this.snap.events,{dt:t,time:this.snap.playTime,room:e,prevRoom:this.prevRoom,flashlight:this.sim.flashlightOn,prevFlash:this.prevFlash,lookedAway:this.snap.events.slagter===2&&l,atDoor:r});this.maybePeek(n),this.snap.events=c.state,this.prevRoom=e,this.prevFlash=this.sim.flashlightOn;for(const h of c.cues)this.fireCue(h,n?.id);if(c.cues.some(h=>h.startsWith("jump")||h==="figure")&&(this.schedule=ox(this.schedule,this.snap.playTime,20),this.director={...this.director,suppress:Math.max(this.director.suppress,6)}),this.runSchedule(e,t),this.lungeT>0){this.lungeT=Math.max(0,this.lungeT-t),this.lunge.visible=this.lungeT>0;const h=1-this.lungeT/2;this.lunge.position.z=-.9+h*.5}else this.lunge.visible=!1;if(this.shadowT>0){this.shadowT=Math.max(0,this.shadowT-t);const h=1-this.shadowT/1.1;this.shadowMesh.position.lerpVectors(this.shadowFrom,this.shadowTo,Math.min(1,h)),this.shadowMesh.position.y=this.shadowFrom.y+1,this.shadowMesh.visible=this.shadowT>0,this.audio.moveTracked(this.shadowMesh.position)}}runSchedule(t,e){this.snap.events.beats||(this.snap.events.beats=[]);for(const s of hx({time:this.snap.playTime,room:t,readIds:this.snap.readIds,fired:this.snap.events.beats}))this.schedule=ax(this.schedule,s);const n=lx(this.schedule,{dt:e,time:this.snap.playTime,room:t,blocked:this.monster.bb.state==="Attack"||this.lungeT>0||this.scares.fx.face>0,firedIds:this.snap.events.beats});this.schedule=n.state;for(const s of n.fired)this.playBeat(s.id)}playBeat(t){if(this.snap.events.beats.includes(t)||this.snap.events.beats.push(t),this.director={...this.director,suppress:Math.max(this.director.suppress,8),sinceScare:0},t==="reception_wake"){this.lightCut.set("reception_0",this.snap.playTime+.45),this.lightCut.set("reception_1",this.snap.playTime+1.15),this.lightCut.set("reception_2",this.snap.playTime+1.9),this.audio.play("door",{x:14,y:0,z:6},{volume:.45,occluded:!0}),this.caption("Majas brev peger mod arkivet.",2.4);return}if(t==="arkiv_names"){this.shadowFrom.set(6,this.sim.y,3.4),this.shadowTo.copy(this.shadowFrom),this.shadowT=1.1,this.audio.play("paper",{x:6,y:this.sim.y+1,z:3.4},{volume:.7}),this.caption("Navnene stemmer ikke med journalen.",2.4);return}if(t==="obduktion_witness"){const e=this.sim.y;this.audio.play("metallic",{x:this.sim.x,y:e+.8,z:this.sim.z},{volume:.65});for(const n of this.built.lights)(n.def.room==="operationsstue"||n.def.room==="obduktion")&&this.lightCut.set(n.def.id,this.snap.playTime+2.4);this.shadowFrom.set(this.sim.x+this.camDir.x*2.8,e,this.sim.z+this.camDir.z*2.8),this.shadowTo.copy(this.shadowFrom),this.shadowT=1.1,this.caption("Noget står i døråbningen.",2.2)}}fireCue(t,e){if(t.startsWith("jump:")){this.lungeT=2,this.lunge.visible=!0,this.trauma=1,this.audio.play("scream"),this.say("Noget var lige foran dig.");return}if(t==="silence"){this.audio.hush(3.5);return}if(t==="deep"){this.audio.play("deep",{x:40,y:1.2,z:3},{volume:1});return}if(t==="figure"){this.butcher.visible=!0;return}if(t==="hide-figure"){this.butcher.visible=!1;return}t!=="steps"&&t==="shadow"&&this.runShadow(e)}runShadow(t){const e=this.world.doors.find(c=>c.id===t)??this.world.doors.find(c=>c.id==="door_rec_pat");if(!e)return;const n=Ot[e.floor],s=Math.random()<.5?1:-1,r=1.6,o=Math.sign(e.coord-this.sim.x||1),a=Math.sign(e.coord-this.sim.z||1);if(e.axis==="z"){const c=e.coord+a*.85;this.shadowFrom.set(e.center-s*r,n,c),this.shadowTo.set(e.center+s*r,n,c)}else{const c=e.coord+o*.85;this.shadowFrom.set(c,n,e.center-s*r),this.shadowTo.set(c,n,e.center+s*r)}this.shadowT=1.1,this.shadowMesh.position.copy(this.shadowFrom),this.shadowMesh.position.y=n+1,this.shadowMesh.visible=!0;const l={x:(this.shadowFrom.x+this.shadowTo.x)/2,y:n+1.2,z:(this.shadowFrom.z+this.shadowTo.z)/2};this.audio.playTracked("shadow",l),this.audio.play("creak",l,{volume:.7}),this.audio.setHeartbeat(.7),this.flash=.4;for(const c of this.built.lights)Math.hypot(c.def.x-l.x,c.def.z-l.z)<8&&this.lightCut.set(c.def.id,this.snap.playTime+.7)}paintMap(){const t=this.ui.root.querySelector("#minimap"),e=t?.getContext("2d");if(!t||!e)return;const n=t.clientWidth||t.width,s=t.clientHeight||t.height,r=I_(n,s,window.devicePixelRatio||1);(t.width!==r.width||t.height!==r.height)&&(t.width=r.width,t.height=r.height);const a=Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.floor??0,l=k_(lr(this.snap).id),c=[],h=this.world.rooms.find(g=>g.id===l);h&&this.snap.visited.includes(h.id)&&c.push({id:lr(this.snap).id,roomId:h.id,x:h.x+h.w*.5,z:h.z+h.d*.5,floor:h.floor});const u=Math.round(this.monster.pos.y/4),f=Math.hypot(this.monster.pos.x-this.sim.x,this.monster.pos.z-this.sim.z)<16&&u===a&&!this.monster.concealed&&this.snap.playTime<this.monsterShown;F_(e,t.width,t.height,{rooms:B_(this.world.rooms),floor:a,px:this.sim.x,pz:this.sim.z,yaw:this.sim.yaw,visited:new Set(this.snap.visited),monster:{x:this.monster.pos.x,z:this.monster.pos.z,floor:u,show:f},batteries:this.world.pickups.filter(g=>g.itemId==="battery"&&this.snap.visited.includes(g.room)&&!this.snap.pickedUp.includes(g.id)).map(g=>({x:g.x,z:g.z,floor:this.world.rooms.find(_=>_.id===g.room)?.floor??0})),doors:this.world.doors.map(g=>({id:g.id,floor:g.floor,axis:g.axis,coord:g.coord,center:g.center,a:g.a,b:g.b,locked:g.locked})),goals:c})}herdMonster(){const t=Vn(this.world,this.monster.pos.x,this.monster.pos.z,this.monster.pos.y);if(t&&t.id!==this.monsterRoom&&(this.monsterRoom=t.id,this.monsterShown=this.snap.playTime+3.6,this.monsterRoomUntil=this.snap.playTime+120),this.monsterRoomUntil>0&&this.snap.playTime>this.monsterRoomUntil&&!this.monster.concealed){const e=this.world.rooms.filter(s=>!s.id.startsWith("trappe")&&s.id!=="stilhed"&&s.id!==this.monsterRoom),n=e[Math.floor(Math.random()*e.length)];if(!n)return;this.monsterRoomUntil=this.snap.playTime+120,this.monster.bb.state="Patrol",this.monster.bb.goal={x:n.x+n.w*.5,y:Ot[n.floor],z:n.z+n.d*.5},this.monsterShown=this.snap.playTime+3.6}}maybePeek(t){if(this.peekT>0||this.peekCool>0||!t||t.kind!=="door"||Math.hypot(this.sim.vx,this.sim.vz)>.4||Math.random()>.012)return;const e=this.world.doors.find(o=>o.id===t.id);if(!e)return;const n=Ot[e.floor],s=Math.sign(e.coord-this.sim.x||1),r=Math.sign(e.coord-this.sim.z||1);this.peek.position.set(e.axis==="x"?e.coord+s*.42:e.spanMin+.15,n,e.axis==="z"?e.coord+r*.42:e.spanMin+.15),this.peek.lookAt(this.camera.position.x,this.peek.position.y+1.5,this.camera.position.z),this.peek.visible=!0,this.peekT=1.25,this.peekCool=26,this.audio.play("whisper",{x:this.peek.position.x,y:n+1.5,z:this.peek.position.z},{volume:.55}),this.audio.trace.push("peek")}stepPower(t){if(!this.snap.flags.powerCut&&this.snap.playTime>=120&&(this.snap.flags.powerCut=!0,this.blackout=3.6,this.fade=1,this.sim.flashlightOn=!1,this.sim.x=42,this.sim.y=0,this.sim.z=8,this.sim.vx=0,this.sim.vz=0,this.sim.vy=0,this.audio.play("metallic"),this.audio.trace.push("power-cut")),this.blackout>0&&(this.blackout=Math.max(0,this.blackout-t),this.fade=1),this.peekCool=Math.max(0,this.peekCool-t),this.peekT>0){this.peekT=Math.max(0,this.peekT-t),this.peek.visible=this.peekT>0;const e=this.peekT>.8?(1.3-this.peekT)/.5:Math.min(1,this.peekT/.35);this.peek.position.y=Ot[Math.round(this.sim.y/4)]+1.45,this.peek.scale.setScalar(.2+.8*Math.max(0,Math.min(1,e)))}}stepKnocks(){if(!this.knocks.length)return;const t=this.snap.playTime;this.knocks=this.knocks.filter(e=>e.at>t?!0:(this.audio.play("door",e.pos,{volume:.75}),this.audio.trace.push("knock"),!1))}queueKnocks(){const t={x:-this.camDir.x,z:-this.camDir.z};for(let e=0;e<3;e++){const n=7-e*2.2;this.knocks.push({at:this.snap.playTime+.35+e*.7,pos:{x:this.sim.x+t.x*n,y:this.sim.y+1,z:this.sim.z+t.z*n}})}}buildViewmodel(){const t=new Kt,e=new Bt({color:"#e0c2a4",roughness:.62,emissive:"#5c4030",emissiveIntensity:.22,depthTest:!1}),n=new Bt({color:"#3a3734",roughness:.4,metalness:.7,emissive:"#141312",emissiveIntensity:.18,depthTest:!1}),s=new Bt({color:"#d5d0c8",roughness:.28,metalness:.8,emissive:"#2a2926",emissiveIntensity:.2,depthTest:!1}),r=new ze({color:"#fff6df",depthTest:!1}),o=g=>(g.frustumCulled=!1,g.renderOrder=3,g.traverse(_=>{_.frustumCulled=!1,_.renderOrder=3}),g),a=new J(new Ae(.026,.03,.2,16),n);a.rotation.x=Math.PI/2,a.position.z=-.02;const l=new J(new Ae(.042,.034,.06,16),s);l.rotation.x=Math.PI/2,l.position.z=-.15;const c=new J(new Dr(.034,20),r);c.position.z=-.182,c.rotation.y=Math.PI;const h=new J(new Ae(.008,.008,.018,8),s);h.position.set(0,.032,.02);const u=Ao(ei(.12,-.14,.16),ei(.03,-.04,.04),.04,.028,e),d=G_(ei(.02,-.02,-.01),.034,e),f=Ao(ei(.04,-.01,.02),ei(.01,.03,-.06),.013,.01,e);t.add(o(a),o(l),o(c),o(h),o(u),o(d),o(f));for(let g=0;g<3;g++){const _=-.01-g*.04;t.add(o(Ao(ei(.03,-.01,_),ei(-.015,.028,_-.015),.011,.008,e)))}return t.renderOrder=3,t}buildLunge(){const t=new Kt,e=new ze({color:"#e7ddd2",depthTest:!1}),n=new ze({color:"#140c0c",depthTest:!1}),s=new J(new pe(.2,24,16),e);s.scale.set(.88,1.22,.5);const r=new J(new pe(.035,10,8),n);r.scale.set(1.4,.45,.4),r.position.set(-.06,.03,.08);const o=r.clone();o.position.x=.065;const a=new ze({color:"#ac281d"}),l=new J(new pe(.012,8,6),a);l.position.set(-.06,.03,.1);const c=l.clone();c.position.x=.065,t.add(s,r,o,l,c);const h=new J(new Xt(.17,.042,.016),n);h.position.set(0,-.075,.097),t.add(h);const u=new ze({color:"#4f1715",depthTest:!1});for(let d=0;d<5;d++){const f=new J(new bs(.009,.035,4),e);f.position.set((d-2)*.031,-.073,.111),f.rotation.z=Math.PI,t.add(f);const g=new J(new Xt(.008,.06+d%2*.028,.006),u);g.position.set(-.115+d*.04,-.12+d*.008,.089),g.rotation.z=.3,t.add(g)}return t.position.set(0,0,-.7),t.visible=!1,t.renderOrder=20,t}buildButcher(){const t=new Kt;t.position.set(40,0,3);const e=new Bt({color:"#292628",roughness:.99,side:Se}),n=new Bt({color:"#665b4e",roughness:.98,side:Se}),s=new Bt({color:"#481919",roughness:.87}),r=new Bt({color:"#a69e8d",roughness:.88}),o=new Bt({color:"#66615b",metalness:.7,roughness:.52}),a=new Bt({color:"#5e4d46",roughness:.96}),l=new J(new Ms(.28,.76,6,12),e);l.position.y=1.11,l.castShadow=!0,t.add(l);for(const g of[-1,1]){const _=new J(new Ae(.13,.105,.84,8),e);_.position.set(g*.14,.44,0),t.add(_);const m=new J(new Xt(.24,.16,.39),e);m.position.set(g*.14,.08,.095),t.add(m);const p=new J(new Ae(.085,.065,.81,8),e);p.position.set(g*.38,1.18,.02),p.rotation.z=g*.18,t.add(p);const b=new J(new pe(.09,10,8),a);b.position.set(g*.46,.76,.04),t.add(b)}const c=new J(new we(.52,.95),n);c.position.set(0,1,.29),c.rotation.z=.045,t.add(c);for(let g=0;g<5;g++){const _=new J(new Xt(.045,.22+g%3*.06,.01),s);_.position.set((g-2)*.09,1.01-g%2*.16,.304),_.rotation.z=(g-2)*.1,t.add(_)}const h=new J(new pe(.19,18,14),a);h.scale.set(.87,1.14,.8),h.position.set(0,1.78,.02),h.castShadow=!0,t.add(h);const u=new J(new Xt(.3,.14,.035),r);u.position.set(0,1.71,.17),t.add(u);const d=new Bt({color:"#17100e",roughness:.95});for(const g of[-1,1]){const _=new J(new pe(.048,10,8),d);_.position.set(g*.08,1.845,.165),_.scale.set(1.1,.48,.65),t.add(_);const m=new J(new Xt(.034,.72,.032),n);m.position.set(g*.235,1.26,.29),t.add(m)}const f=new J(new Xt(.1,.42,.018),o);f.position.set(.48,.52,.17),f.rotation.z=-.2,t.add(f);for(let g=0;g<4;g++){const _=new J(new Ss(.07,.013,6,12,Math.PI*1.65),o);_.position.set(-1.18+g*.72,2.4,-.25),_.rotation.x=Math.PI/2,t.add(_)}return t.visible=!1,t}caption(t,e){this.settings.subtitles&&(this.ui.subtitle(t),this.subtitleT=e)}say(t){this.message=t,this.messageT=2.6}eyePos(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}feet(){return{x:this.sim.x,y:this.sim.y,z:this.sim.z}}hidePos(){const t=this.world.hides.find(e=>e.id===this.hiding);return t?{x:t.x,y:this.sim.y,z:t.z}:null}doorPos(t){return{x:t.axis==="x"?t.coord:t.center,y:Ot[t.floor]+1,z:t.axis==="z"?t.coord:t.center}}monsterDist(){return Math.hypot(this.monster.pos.x-this.sim.x,this.monster.pos.z-this.sim.z)}monsterDistTo(t,e){return Math.hypot(this.camera.position.x-t,this.camera.position.z-e)}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix();const n=this.settings.quality==="low"?1:this.settings.quality==="high"?1.5:1.25,s=Math.min(window.devicePixelRatio||1,n)*this.settings.resolutionScale;this.renderer.setPixelRatio(s),this.renderer.setSize(t,e,!1),this.post.setSize(Math.floor(t*s),Math.floor(e*s))}applyVolumes(){this.audio.setVolumes(this.settings.masterVolume,this.settings.musicVolume,this.settings.sfxVolume)}applyPatch(t){const e=this.settings.quality;if(this.settings=Ka({...this.settings,...t}),b_(this.storage,this.settings),this.ui.fillSettings(this.settings),this.applyVolumes(),this.input.setSensitivity(this.settings.mouseSensitivity),t.quality&&t.quality!==e){this.post.applyQuality(this.settings.quality),this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.spot.castShadow=this.settings.quality!=="low";for(const n of this.built.detail)n.visible=this.settings.quality!=="low"}t.fullscreen!==void 0&&(this.settings.fullscreen?document.documentElement.requestFullscreen?.().catch(()=>{}):document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{})),this.resize()}bindUi(){}handle(t,e){if(t==="new")this.newGame();else if(t==="continue"){const n=Oc(this.storage);n&&this.applySnapshot(n.snapshot)}else if(t==="openLoad")this.slotMode="load",this.ui.slots(Fc(this.storage),"INDLÆS"),this.setMode("slots");else if(t==="openSave")this.slotMode="save",this.ui.slots(Fc(this.storage),"GEM"),this.setMode("slots");else if(t==="slot"&&typeof e=="number")if(this.slotMode==="save")this.persist(e),this.say("Gemt."),this.setMode("paused");else{const n=xs(this.storage,e);n&&this.applySnapshot(n.snapshot)}else if(t==="closeSlots")this.setMode(this.slotMode==="save"?"paused":"menu");else if(t==="settings")this.settingsFrom=this.mode==="playing"?"paused":this.mode,this.ui.fillSettings(this.settings),this.setMode("settings");else if(t==="closeSettings")this.setMode(this.settingsFrom==="slots"?"menu":this.settingsFrom);else if(t==="resume")this.setMode("playing");else if(t==="restart")this.newGame();else if(t==="menu")!this.ended&&this.snap.playTime>1&&this.persist(0),this.setMode("menu");else if(t==="exit")this.setMode("exit"),window.close();else if(t==="exitBack")this.setMode("menu");else if(t==="credits")this.setMode("credits");else if(t==="creditsBack")this.setMode("menu");else if(t==="closeInv")this.setMode("playing");else if(t==="inventory")(this.mode==="playing"||this.mode==="paused")&&this.setMode("inventory");else if(t==="select"&&typeof e=="number")this.invIndex=e,this.refreshInv();else if(t==="use")this.useSelected();else if(t==="drop")this.dropSelected();else if(t==="closeEx")this.setMode(this.snap.playTime>0&&!this.ended?"playing":"menu");else if(t==="digit"&&typeof e=="string")this.code.length<4&&(this.code+=e),this.ui.keypad(this.code,"Stiftelsesåret.");else if(t==="keyOk")this.submitCode();else if(t==="keyClear")this.code="",this.ui.keypad(this.code,"Stiftelsesåret.");else if(t==="keyClose")this.setMode("playing");else if(t!=="patch")if(t==="endMenu")this.setMode("menu");else if(t==="endRetry"){const n=xs(this.storage,0);n?this.applySnapshot(n.snapshot):this.newGame()}else t==="endNew"&&this.newGame()}useSelected(){const t=this.snap.inventory[this.invIndex];if(!t)return;const e=Di(t.itemId);if(e.kind==="consumable"){const n=t_(this.snap.inventory,t.itemId);n.heal&&(this.snap.inventory=n.slots,this.sim.health=Math.min(100,this.sim.health+n.heal),this.snap.player.health=this.sim.health,this.audio.play("pickup"),this.refreshInv());return}(e.text||e.kind==="map"||e.kind==="note"||e.kind==="story"||e.kind==="collectible")&&this.openExamine(t.itemId)}dropSelected(){const t=this.snap.inventory[this.invIndex];if(!t)return;const e=Lc(this.snap.inventory,t.itemId);if(!e.dropped){this.say("Den skal du beholde.");return}this.snap.inventory=e.slots,this.refreshInv()}installApi(){const t=this;window.__AGNES__={ready:!0,mode:()=>t.mode,start:()=>t.newGame(),snapshot:()=>(t.copySim(),JSON.parse(JSON.stringify(t.snap))),setMove:e=>{t.input.virtual=e},look:(e,n)=>{const s=vc(t.sim.yaw,t.sim.pitch,e,n,t.settings.invertY);t.sim.yaw=s.yaw,t.sim.pitch=s.pitch,t.syncView()},act:e=>{e==="interact"?t.interact():e==="flashlight"?t.toggleFlash():e==="pause"?t.setMode("paused"):e==="inventory"?t.setMode("inventory"):e==="reload"?t.swapBattery():t.handle(e)},teleport:(e,n,s)=>{t.sim.x=e,t.sim.y=n,t.sim.z=s;const r=cs(t.world,e,s,n);r!==null&&(t.sim.y=r),t.syncView()},freeze:e=>t.setFrozen(e),give:e=>{t.snap.inventory=sr(t.snap.inventory,e).slots},setFlag:(e,n)=>{t.snap.flags[e]=n,e==="secretOpen"&&n&&t.unlocked.add("door_secret"),e==="generatorOn"&&(t.snap.flags.generatorOn=n)},unlock:e=>t.unlocked.add(e),forceMonster:e=>{t.monster.bb.state=e},faceMonster:e=>t.monster.face(e),placeMonster:(e,n,s)=>{t.monster.pos={x:e,y:n,z:s},t.monster.group.position.set(e,n,s),t.monster.bb.state="Idle",t.monster.face(Math.PI),t.snap.iFrame=8,t.scares.fx.face=0,t.scares.update(10)},scare:e=>t.scares.trigger(e,t.snap.playTime,!0),save:e=>t.persist(e),load:e=>{const n=xs(t.storage,e);return n&&t.applySnapshot(n.snapshot),!!n},restart:()=>t.newGame(),fps:()=>t.fps,monster:()=>({x:t.monster.pos.x,y:t.monster.pos.y,z:t.monster.pos.z,state:t.monster.bb.state}),doorOpen:e=>(t.open.get(e)??0)>.6,aim:()=>{const e=tr(t.eyePos(),{x:t.camDir.x,y:t.camDir.y,z:t.camDir.z},t.candidates());return e?{id:e.id,kind:e.kind,prompt:e.prompt}:null},tension:()=>t.director.tension,lastScare:()=>t.scares.lastKind,audioLog:()=>t.audio.trace.slice(),monsterHidden:()=>t.monster.concealed,events:()=>t.snap.events,emptyLight:()=>{t.sim.battery=.15},ping:e=>{t.audio.play(e,{x:t.sim.x+1.5,y:t.sim.y+1,z:t.sim.z+1.5},{volume:1})},probe:e=>t.audio.sampleMix(e),audition:e=>t.audio.audition(e),measureBed:()=>t.audio.measureBed()}}}function ei(i,t,e){return new I(i,t,e)}function Ao(i,t,e,n,s){const r=new I().subVectors(t,i),o=Math.max(.001,r.length()),a=new J(new Ae(e,n,o,12),s);return a.position.copy(i).lerp(t,.5),a.quaternion.setFromUnitVectors(new I(0,1,0),r.normalize()),a}function G_(i,t,e){const n=new J(new pe(t,12,8),e);return n.position.copy(i),n}function V_(){return Ta(wr().player)}function Ta(i){return{...i,vy:0,vx:0,vz:0,grounded:!0,justLanded:!1}}class W_{root;hooks;constructor(t,e){this.root=t,this.hooks=e,t.innerHTML=q_,this.bind()}bind(){const t=this.hooks,e=(a,l)=>{this.root.querySelector(a)?.addEventListener("click",l)};e("#btn-new",t.newGame),e("#btn-continue",t.continue),e("#btn-load",t.openLoad),e("#btn-settings",t.settings),e("#btn-credits",t.credits),e("#btn-exit",t.exit),e("#btn-resume",t.resume),e("#btn-save",t.openSave),e("#btn-pause-settings",t.settings),e("#btn-restart",t.restart),e("#btn-menu",t.menu),e("#btn-settings-back",t.closeSettings),e("#btn-slots-back",t.closeSlots),e("#btn-credits-back",t.creditsBack),e("#btn-exit-back",t.exitBack),e("#btn-inv-close",t.closeInventory),e("#btn-inv-hud",t.openInventory),e("#btn-use",t.useItem),e("#btn-drop",t.dropItem),e("#btn-examine-close",t.closeExamine),e("#btn-key-ok",t.keypadOk),e("#btn-key-clear",t.keypadClear),e("#btn-key-close",t.closeKeypad),e("#btn-end-menu",t.endingMenu),e("#btn-end-retry",t.endingRetry),e("#btn-end-new",t.endingNew),this.root.querySelectorAll("[data-digit]").forEach(a=>{a.addEventListener("click",()=>t.digit(a.dataset.digit||""))});const n=(a,l)=>{const c=this.root.querySelector(a);c?.addEventListener("input",()=>t.patchSettings({[l]:Number(c.value)}))};n("#set-res","resolutionScale"),n("#set-sens","mouseSensitivity"),n("#set-master","masterVolume"),n("#set-music","musicVolume"),n("#set-sfx","sfxVolume"),n("#set-bright","brightness");const s=this.root.querySelector("#set-quality");s?.addEventListener("change",()=>t.patchSettings({quality:s.value}));const r=this.root.querySelector("#set-fps");r?.addEventListener("change",()=>t.patchSettings({fpsCap:Number(r.value)}));const o=(a,l)=>{const c=this.root.querySelector(a);c?.addEventListener("change",()=>t.patchSettings({[l]:c.checked}))};o("#set-blur","motionBlur"),o("#set-shake","cameraShake"),o("#set-subs","subtitles"),o("#set-full","fullscreen"),o("#set-invert","invertY")}show(t){t==="paused"&&(t="pause");for(const s of this.root.querySelectorAll(".screen"))s.classList.add("hidden");if(this.q("#loading").classList.toggle("hidden",t!=="loading"),this.q("#fatal").classList.toggle("hidden",t!=="fatal"),t==="none"||t==="playing"){this.q("#hud").classList.toggle("hidden",t!=="playing");return}this.q("#hud").classList.toggle("hidden",t!=="playing");const n={menu:"#menu",pause:"#pause",settings:"#settings",slots:"#slots",credits:"#credits",exit:"#exit",inventory:"#inventory",examine:"#examine",keypad:"#keypad",ending:"#ending",loading:"#loading",fatal:"#fatal"}[t];n&&this.q(n).classList.remove("hidden"),(t==="inventory"||t==="examine"||t==="keypad")&&this.q("#hud").classList.add("hidden")}status(t){this.q("#loading").textContent=t}fatal(t){this.q("#fatal").textContent=t,this.show("fatal")}continueEnabled(t){this.q("#btn-continue").disabled=!t}hud(t){this.q("#obj-text").textContent=t.objective,this.q("#files").textContent=t.files,this.q("#prompt").innerHTML=t.prompt?`<b>E</b> ${X_(t.prompt)}`:"";const e=this.q("#stam");e.classList.toggle("low",t.stamina<25);const n=e.querySelector("i");n&&(n.style.width=`${t.stamina}%`);const s=this.q("#bat i");s&&(s.style.width=`${t.battery}%`),this.q("#bat").classList.toggle("low",t.battery<25);const r=this.q("#bat-label");r&&(r.textContent=t.batteryText?`Batteri ${t.batteryText}`:"Batteri"),this.q("#lock-hint").classList.toggle("hidden",!t.lockHint)}hurt(t){this.q("#hurt").style.opacity=String(Math.max(0,Math.min(1,t)))}subtitle(t){this.q("#subtitle").textContent=t}toast(t){this.q("#toast").textContent=t}audioDebug(t,e){const n=this.q("#audio-debug");n.classList.toggle("hidden",!e),n.textContent=t}perf(t,e){const n=this.q("#perf");n.classList.toggle("hidden",!e),n.textContent=t}fillSettings(t){this.q("#set-quality").value=t.quality,this.q("#set-fps").value=String(t.fpsCap),this.setRange("#set-res",t.resolutionScale),this.setRange("#set-sens",t.mouseSensitivity),this.setRange("#set-master",t.masterVolume),this.setRange("#set-music",t.musicVolume),this.setRange("#set-sfx",t.sfxVolume),this.setRange("#set-bright",t.brightness),this.q("#set-blur").checked=t.motionBlur,this.q("#set-shake").checked=t.cameraShake,this.q("#set-subs").checked=t.subtitles,this.q("#set-invert").checked=t.invertY,this.q("#set-full").checked=t.fullscreen}slots(t,e){this.q("#slots h2").textContent=e;const n=this.q("#slot-list");n.innerHTML="";const s=["Checkpoint","Plads 1","Plads 2","Plads 3"];t.forEach((r,o)=>{const a=document.createElement("button");a.className="slot";const l=r?new Date(r.savedAt).toLocaleString("da-DK"):"Tom",c=r?`${Math.floor(r.snapshot.playTime/60)} min`:"";a.textContent=`${s[o]} — ${l} ${c}`,a.addEventListener("click",()=>this.hooks.pickSlot(o)),n.appendChild(a)})}keysLine(t){const e=this.root.querySelector("#inv-keys");e&&(e.textContent=t)}inventory(t,e){const n=this.q("#inv-list");if(n.innerHTML="",!t.length){const r=document.createElement("div");r.className="note",r.textContent="Du har kun lygten.",n.appendChild(r)}t.forEach((r,o)=>{const a=document.createElement("button");a.className="inv-item"+(o===e?" on":""),o===e&&a.setAttribute("aria-current","true"),a.textContent=r.count>1?`${r.name} ×${r.count}`:r.name,a.addEventListener("click",()=>this.hooks.selectItem(o)),n.appendChild(a)});const s=t[e];this.q("#inv-desc").textContent=s?s.desc:"Vælg en genstand."}examine(t,e){this.q("#ex-title").textContent=t?.name??"",this.q("#ex-body").textContent=t?.text||t?.description||"",this.q("#ex-map").innerHTML=e}keypad(t,e){this.q("#key-code").textContent=t.padEnd(4,"·"),this.q("#key-hint").textContent=e}ending(t,e){const n=p_(t);this.q("#end-kicker").textContent=n.kicker,this.q("#end-title").textContent=n.title,this.q("#end-body").textContent=n.paragraphs.join(`

`),this.q("#btn-end-retry").classList.toggle("hidden",!e),this.q("#btn-end-new").classList.toggle("hidden",!e)}setRange(t,e){const n=this.q(t);n.value=String(e)}q(t){const e=this.root.querySelector(t);if(!e)throw new Error(`Mangler ${t}`);return e}}function X_(i){return i.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]??t)}const q_=`
<canvas id="view"></canvas>
<div id="hurt"></div>
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
`,ja=document.getElementById("app");if(!ja)throw new Error("Mangler #app");let Jt;const Y_={newGame:()=>Jt.handle("new"),continue:()=>Jt.handle("continue"),openLoad:()=>Jt.handle("openLoad"),openSave:()=>Jt.handle("openSave"),pickSlot:i=>Jt.handle("slot",i),closeSlots:()=>Jt.handle("closeSlots"),settings:()=>Jt.handle("settings"),closeSettings:()=>Jt.handle("closeSettings"),resume:()=>Jt.handle("resume"),restart:()=>Jt.handle("restart"),menu:()=>Jt.handle("menu"),exit:()=>Jt.handle("exit"),exitBack:()=>Jt.handle("exitBack"),credits:()=>Jt.handle("credits"),creditsBack:()=>Jt.handle("creditsBack"),closeInventory:()=>Jt.handle("closeInv"),openInventory:()=>Jt.handle("inventory"),selectItem:i=>Jt.handle("select",i),useItem:()=>Jt.handle("use"),dropItem:()=>Jt.handle("drop"),closeExamine:()=>Jt.handle("closeEx"),digit:i=>Jt.handle("digit",i),keypadOk:()=>Jt.handle("keyOk"),keypadClear:()=>Jt.handle("keyClear"),closeKeypad:()=>Jt.handle("keyClose"),patchSettings:i=>Jt.applyPatch(i),endingMenu:()=>Jt.handle("endMenu"),endingRetry:()=>Jt.handle("endRetry"),endingNew:()=>Jt.handle("endNew")},Vc=new W_(ja,Y_),Wc=ja.querySelector("#view");try{if(!Wc)throw new Error("Mangler lærred");Jt=new H_(Wc,Vc),Jt.start()}catch(i){const t=i instanceof Error?i.message:"Ukendt fejl";Vc.fatal(`Spillet kunne ikke starte. ${t}`),console.error(i)}
