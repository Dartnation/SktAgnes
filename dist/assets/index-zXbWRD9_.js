(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fa="170",qh=0,qa=1,Yh=2,Rc=1,Cc=2,En=3,Xn=0,ze=1,Ye=2,ke=0,Ii=1,hr=2,Ya=3,$a=4,Pc=5,Tn=100,$h=101,jh=102,Kh=103,Zh=104,fo=200,Jh=201,Qh=202,tu=203,po=204,mo=205,Dc=206,eu=207,Lc=208,nu=209,iu=210,su=211,ru=212,ou=213,au=214,go=0,vo=1,_o=2,Ni=3,xo=4,yo=5,Mo=6,So=7,Ic=0,lu=1,cu=2,Pn=0,Uc=1,kc=2,Nc=3,Fc=4,hu=5,Oc=6,zc=7,Bc=300,Fi=301,Oi=302,bo=303,wo=304,mr=306,zi=1e3,Gn=1001,Eo=1002,Ne=1003,uu=1004,ys=1005,fn=1006,wr=1007,ri=1008,Ln=1009,Hc=1010,Vc=1011,ps=1012,pa=1013,oi=1014,ln=1015,hn=1016,ma=1017,ga=1018,ai=1020,Gc=35902,Wc=1021,Xc=1022,cn=1023,qc=1024,Yc=1025,Ui=1026,li=1027,gr=1028,va=1029,$c=1030,_a=1031,xa=1033,ir=33776,sr=33777,rr=33778,or=33779,To=35840,Ao=35841,Ro=35842,Co=35843,Po=36196,Do=37492,Lo=37496,Io=37808,Uo=37809,ko=37810,No=37811,Fo=37812,Oo=37813,zo=37814,Bo=37815,Ho=37816,Vo=37817,Go=37818,Wo=37819,Xo=37820,qo=37821,ar=36492,Yo=36494,$o=36495,jc=36283,jo=36284,Ko=36285,Zo=36286,du=3200,fu=3201,ya=0,pu=1,An="",Re="srgb",Gi="srgb-linear",vr="linear",ee="srgb",di=7680,ja=519,mu=512,gu=513,vu=514,Kc=515,_u=516,xu=517,yu=518,Mu=519,Ka=35044,Za="300 es",Rn=2e3,ur=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ja=1234567;const as=Math.PI/180,Bi=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Ma(i,t){return(i%t+t)%t}function Su(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bu(i,t,e){return i!==t?(e-i)/(t-i):0}function ls(i,t,e){return(1-e)*i+e*t}function wu(i,t,e,n){return ls(i,t,1-Math.exp(-e*n))}function Eu(i,t=1){return t-Math.abs(Ma(i,t*2)-t)}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cu(i,t){return i+Math.random()*(t-i)}function Pu(i){return i*(.5-Math.random())}function Du(i){i!==void 0&&(Ja=i);let t=Ja+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lu(i){return i*as}function Iu(i){return i*Bi}function Uu(i){return(i&i-1)===0&&i!==0}function ku(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),v=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*v,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*v,a*c);break;case"ZYZ":i.set(l*v,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ou={DEG2RAD:as,RAD2DEG:Bi,generateUUID:Xi,clamp:ye,euclideanModulo:Ma,mapLinear:Su,inverseLerp:bu,lerp:ls,damp:wu,pingpong:Eu,smoothstep:Tu,smootherstep:Au,randInt:Ru,randFloat:Cu,randFloatSpread:Pu,seededRandom:Du,degToRad:Lu,radToDeg:Iu,isPowerOfTwo:Uu,ceilPowerOfTwo:ku,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:Fu,normalize:Ie,denormalize:Ci};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],v=n[8],x=s[0],m=s[3],p=s[6],A=s[1],w=s[4],_=s[7],S=s[2],C=s[5],E=s[8];return r[0]=o*x+a*A+l*S,r[3]=o*m+a*w+l*C,r[6]=o*p+a*_+l*E,r[1]=c*x+h*A+u*S,r[4]=c*m+h*w+u*C,r[7]=c*p+h*_+u*E,r[2]=d*x+f*A+v*S,r[5]=d*m+f*w+v*C,r[8]=d*p+f*_+v*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,v=e*u+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new kt;function Zc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zu(){const i=dr("canvas");return i.style.display="block",i}const Qa={};function ss(i){i in Qa||(Qa[i]=!0,console.warn(i))}function Bu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Hu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===An?vr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const tl=[.64,.33,.3,.6,.15,.06],el=[.2126,.7152,.0722],nl=[.3127,.329],il=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Gi]:{primaries:tl,whitePoint:nl,transfer:vr,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:tl,whitePoint:nl,transfer:ee,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});let fi;class Gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=dr("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wu=0;class Jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tr(s[o].image)):r.push(Tr(s[o]))}else r=Tr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;class Ce extends Wi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=Gn,s=Gn,r=fn,o=ri,a=cn,l=Ln,c=Ce.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Xi(),this.name="",this.source=new Jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Bc;Ce.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(f+1)/2,S=(p+1)/2,C=(h+d)/4,E=(u+x)/4,R=(v+m)/4;return w>_&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=E/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=C/s,r=R/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=R/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(u-x)/A,this.z=(d-h)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class je extends qu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qc extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yu extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],v=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==v){let m=1-a;const p=l*d+c*f+h*v+u*x,A=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const S=Math.sqrt(w),C=Math.atan2(S,p*A);m=Math.sin(m*C)/S,a=Math.sin(a*C)/S}const _=a*A;if(l=l*m+d*_,c=c*m+f*_,h=h*m+v*_,u=u*m+x*_,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],v=r[o+3];return t[e]=a*v+h*u+l*f-c*d,t[e+1]=l*v+h*d+c*u-a*f,t[e+2]=c*v+h*f+a*d-l*u,t[e+3]=h*v-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"YXZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"ZXY":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"ZYX":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"YZX":this._x=d*h*u+c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u-d*f*v;break;case"XZY":this._x=d*h*u-c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ar.copy(this).projectOnVector(t),this.sub(Ar)}reflect(t){return this.sub(Ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new I,rl=new qi;class ci{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),Ss.subVectors(this.max,Zi),pi.subVectors(t.a,Zi),mi.subVectors(t.b,Zi),gi.subVectors(t.c,Zi),kn.subVectors(mi,pi),Nn.subVectors(gi,mi),Yn.subVectors(pi,gi);let e=[0,-kn.z,kn.y,0,-Nn.z,Nn.y,0,-Yn.z,Yn.y,kn.z,0,-kn.x,Nn.z,0,-Nn.x,Yn.z,0,-Yn.x,-kn.y,kn.x,0,-Nn.y,Nn.x,0,-Yn.y,Yn.x,0];return!Rr(e,pi,mi,gi,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Rr(e,pi,mi,gi,Ss))?!1:(bs.crossVectors(kn,Nn),e=[bs.x,bs.y,bs.z],Rr(e,pi,mi,gi,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new I,new I,new I,new I,new I,new I,new I,new I],en=new I,Ms=new ci,pi=new I,mi=new I,gi=new I,kn=new I,Nn=new I,Yn=new I,Zi=new I,Ss=new I,bs=new I,$n=new I;function Rr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$n.fromArray(i,r);const a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $u=new ci,Ji=new I,Cr=new I;class Yi{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Cr)),this.expandByPoint(Ji.copy(t.center).sub(Cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new I,Pr=new I,ws=new I,Fn=new I,Dr=new I,Es=new I,Lr=new I;class th{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pr.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Pr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=Fn.dot(this.direction),l=-Fn.dot(ws),c=Fn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,v;if(h>0)if(u=o*l-a,d=o*a-l,v=r*h,u>=0)if(d>=-v)if(d<=v){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pr).addScaledVector(ws,d),f}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){Dr.subVectors(e,t),Es.subVectors(n,t),Lr.crossVectors(Dr,Es);let o=this.direction.dot(Lr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);const l=a*this.direction.dot(Es.crossVectors(Fn,Es));if(l<0)return null;const c=a*this.direction.dot(Dr.cross(Fn));if(c<0||l+c>o)return null;const h=-a*Fn.dot(Lr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,v,x,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,v,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,v,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),o=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,v=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+v*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=v+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,v=c*h,x=c*u;e[0]=d+x*a,e[4]=v*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-v,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,v=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=v+f*a,e[1]=f+v*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,v=a*h,x=a*u;e[0]=l*h,e[4]=v*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,v=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=v*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+v,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*c,v=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-v,e[2]=v*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Ku)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),On.crossVectors(n,Ve),On.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),On.crossVectors(n,Ve)),On.normalize(),Ts.crossVectors(Ve,On),s[0]=On.x,s[4]=Ts.x,s[8]=Ve.x,s[1]=On.y,s[5]=Ts.y,s[9]=Ve.y,s[2]=On.z,s[6]=Ts.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],v=n[2],x=n[6],m=n[10],p=n[14],A=n[3],w=n[7],_=n[11],S=n[15],C=s[0],E=s[4],R=s[8],y=s[12],g=s[1],T=s[5],L=s[9],D=s[13],k=s[2],V=s[6],X=s[10],j=s[14],G=s[3],Q=s[7],at=s[11],gt=s[15];return r[0]=o*C+a*g+l*k+c*G,r[4]=o*E+a*T+l*V+c*Q,r[8]=o*R+a*L+l*X+c*at,r[12]=o*y+a*D+l*j+c*gt,r[1]=h*C+u*g+d*k+f*G,r[5]=h*E+u*T+d*V+f*Q,r[9]=h*R+u*L+d*X+f*at,r[13]=h*y+u*D+d*j+f*gt,r[2]=v*C+x*g+m*k+p*G,r[6]=v*E+x*T+m*V+p*Q,r[10]=v*R+x*L+m*X+p*at,r[14]=v*y+x*D+m*j+p*gt,r[3]=A*C+w*g+_*k+S*G,r[7]=A*E+w*T+_*V+S*Q,r[11]=A*R+w*L+_*X+S*at,r[15]=A*y+w*D+_*j+S*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],v=t[3],x=t[7],m=t[11],p=t[15];return v*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],v=t[12],x=t[13],m=t[14],p=t[15],A=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,w=v*d*c-h*m*c-v*l*f+o*m*f+h*l*p-o*d*p,_=h*x*c-v*u*c+v*a*f-o*x*f-h*a*p+o*u*p,S=v*u*l-h*x*l-v*a*d+o*x*d+h*a*m-o*u*m,C=e*A+n*w+s*_+r*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return t[0]=A*E,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*E,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*E,t[4]=w*E,t[5]=(h*m*r-v*d*r+v*s*f-e*m*f-h*s*p+e*d*p)*E,t[6]=(v*l*r-o*m*r-v*s*c+e*m*c+o*s*p-e*l*p)*E,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*E,t[8]=_*E,t[9]=(v*u*r-h*x*r-v*n*f+e*x*f+h*n*p-e*u*p)*E,t[10]=(o*x*r-v*a*r+v*n*c-e*x*c-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*E,t[12]=S*E,t[13]=(h*x*s-v*u*s+v*n*d-e*x*d-h*n*m+e*u*m)*E,t[14]=(v*a*s-o*x*s-v*n*l+e*x*l+o*n*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,v=r*u,x=o*h,m=o*u,p=a*u,A=l*c,w=l*h,_=l*u,S=n.x,C=n.y,E=n.z;return s[0]=(1-(x+p))*S,s[1]=(f+_)*S,s[2]=(v-w)*S,s[3]=0,s[4]=(f-_)*C,s[5]=(1-(d+p))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(v+w)*E,s[9]=(m-A)*E,s[10]=(1-(d+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),a=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,h=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Rn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,v;if(a===Rn)f=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ur)f=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let v,x;if(a===Rn)v=(o+r)*u,x=-2*u;else if(a===ur)v=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new I,nn=new Kt,ju=new I(0,0,0),Ku=new I(1,1,1),On=new I,Ts=new I,Ve=new I,ol=new Kt,al=new qi;class pn{constructor(t=0,e=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return al.setFromEuler(this),this.setFromQuaternion(al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zu=0;const ll=new I,_i=new qi,Mn=new Kt,As=new I,Qi=new I,Ju=new I,Qu=new qi,cl=new I(1,0,0),hl=new I(0,1,0),ul=new I(0,0,1),dl={type:"added"},td={type:"removed"},xi={type:"childadded",child:null},Ir={type:"childremoved",child:null};class de extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new I,e=new pn,n=new qi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new kt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(cl,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cl,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Qi,As,this.up):Mn.lookAt(As,Qi,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(Mn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new I(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new I,Sn=new I,Ur=new I,bn=new I,yi=new I,Mi=new I,fl=new I,kr=new I,Nr=new I,Fr=new I,Or=new ne,zr=new ne,Br=new ne;class rn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),Sn.subVectors(n,e),Ur.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(Sn),l=sn.dot(Ur),c=Sn.dot(Sn),h=Sn.dot(Ur),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,v=(o*h-a*l)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Or.setScalar(0),zr.setScalar(0),Br.setScalar(0),Or.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Or,r.x),o.addScaledVector(zr,r.y),o.addScaledVector(Br,r.z),o}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;yi.subVectors(s,n),Mi.subVectors(r,n),kr.subVectors(t,n);const l=yi.dot(kr),c=Mi.dot(kr);if(l<=0&&c<=0)return e.copy(n);Nr.subVectors(t,s);const h=yi.dot(Nr),u=Mi.dot(Nr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(yi,o);Fr.subVectors(t,r);const f=yi.dot(Fr),v=Mi.dot(Fr);if(v>=0&&f<=v)return e.copy(r);const x=f*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Mi,a);const m=h*v-f*u;if(m<=0&&u-h>=0&&f-v>=0)return fl.subVectors(r,s),a=(u-h)/(u-h+(f-v)),e.copy(s).addScaledVector(fl,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(yi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Hr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Ma(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hr(o,r,t+1/3),this.g=Hr(o,r,t),this.b=Hr(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Wt.fromWorkingColorSpace(Te.copy(this),t),Math.round(ye(Te.r*255,0,255))*65536+Math.round(ye(Te.g*255,0,255))*256+Math.round(ye(Te.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Re){Wt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Rs);const n=ls(zn.h,Rs.h,e),s=ls(zn.s,Rs.s,e),r=ls(zn.l,Rs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Ft;Ft.NAMES=nh;let ed=0;class mn extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Xi(),this.name="",this.blending=Ii,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qe extends mn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new I,Cs=new nt;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class ih extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sh extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nd=0;const Ze=new Kt,Vr=new de,Si=new I,Ge=new ci,ts=new ci,xe=new I;class Me extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zc(t)?sh:ih)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ge.min,ts.min),Ge.expandByPoint(xe),xe.addVectors(Ge.max,ts.max),Ge.expandByPoint(xe)):(Ge.expandByPoint(ts.min),Ge.expandByPoint(ts.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xe.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(t,c),xe.add(Si)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new I,l[R]=new I;const c=new I,h=new I,u=new I,d=new nt,f=new nt,v=new nt,x=new I,m=new I;function p(R,y,g){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,g),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,y),v.fromBufferAttribute(r,g),h.sub(c),u.sub(c),f.sub(d),v.sub(d);const T=1/(f.x*v.y-v.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(T),a[R].add(x),a[y].add(x),a[g].add(x),l[R].add(m),l[y].add(m),l[g].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let R=0,y=A.length;R<y;++R){const g=A[R],T=g.start,L=g.count;for(let D=T,k=T+L;D<k;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const w=new I,_=new I,S=new I,C=new I;function E(R){S.fromBufferAttribute(s,R),C.copy(S);const y=a[R];w.copy(y),w.sub(S.multiplyScalar(S.dot(y))).normalize(),_.crossVectors(C,y);const T=_.dot(l[R])<0?-1:1;o.setXYZW(R,w.x,w.y,w.z,T)}for(let R=0,y=A.length;R<y;++R){const g=A[R],T=g.start,L=g.count;for(let D=T,k=T+L;D<k;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[v++]=c[f++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new Kt,jn=new th,Ps=new Yi,ml=new I,Ds=new I,Ls=new I,Is=new I,Gr=new I,Us=new I,gl=new I,ks=new I;class dt extends de{constructor(t=new Me,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Gr.fromBufferAttribute(u,t),o?Us.addScaledVector(Gr,h):Us.addScaledVector(Gr.sub(e),h))}e.add(Us)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Ps.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Ps,ml)===null||jn.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(r).invert(),jn.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=o[m.materialIndex],A=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=A,S=w;_<S;_+=3){const C=a.getX(_),E=a.getX(_+1),R=a.getX(_+2);s=Ns(this,p,t,n,c,h,u,C,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const A=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=Ns(this,o,t,n,c,h,u,A,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=o[m.materialIndex],A=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=A,S=w;_<S;_+=3){const C=_,E=_+1,R=_+2;s=Ns(this,p,t,n,c,h,u,C,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const A=m,w=m+1,_=m+2;s=Ns(this,o,t,n,c,h,u,A,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function id(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Xn,a),l===null)return null;ks.copy(a),ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:i}}function Ns(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ds),i.getVertexPosition(l,Ls),i.getVertexPosition(c,Is);const h=id(i,t,e,n,Ds,Ls,Is,gl);if(h){const u=new I;rn.getBarycoord(gl,Ds,Ls,Is,u),s&&(h.uv=rn.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(h.uv1=rn.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(h.normal=rn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};rn.getNormal(Ds,Ls,Is,d.normal),h.face=d,h.barycoord=u}return h}class Se extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function v(x,m,p,A,w,_,S,C,E,R,y){const g=_/E,T=S/R,L=_/2,D=S/2,k=C/2,V=E+1,X=R+1;let j=0,G=0;const Q=new I;for(let at=0;at<X;at++){const gt=at*T-D;for(let Dt=0;Dt<V;Dt++){const Xt=Dt*g-L;Q[x]=Xt*A,Q[m]=gt*w,Q[p]=k,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Dt/E),u.push(1-at/R),j+=1}}for(let at=0;at<R;at++)for(let gt=0;gt<E;gt++){const Dt=d+gt+V*at,Xt=d+gt+V*(at+1),q=d+(gt+1)+V*(at+1),tt=d+(gt+1)+V*at;l.push(Dt,Xt,tt),l.push(Xt,q,tt),G+=6}a.addGroup(f,G,y),f+=G,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const s in n)t[s]=n[s]}return t}function sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Cn={clone:Hi,merge:Ue};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ge extends mn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oh extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new I,vl=new nt,_l=new nt;class Oe extends oh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,vl,_l),e.subVectors(_l,vl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(as*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bi=-90,wi=1;class ad extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Oe(bi,wi,t,e);s.layers=this.layers,this.add(s);const r=new Oe(bi,wi,t,e);r.layers=this.layers,this.add(r);const o=new Oe(bi,wi,t,e);o.layers=this.layers,this.add(o);const a=new Oe(bi,wi,t,e);a.layers=this.layers,this.add(a);const l=new Oe(bi,wi,t,e);l.layers=this.layers,this.add(l);const c=new Oe(bi,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ah extends Ce{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ld extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ah(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Se(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:ke});r.uniforms.tEquirect.value=e;const o=new dt(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=fn),new ad(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Wr=new I,cd=new I,hd=new kt;class ei{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wr.subVectors(n,e).cross(cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hd.getNormalMatrix(t),s=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Yi,Fs=new I;class Sa{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],v=s[9],x=s[10],m=s[11],p=s[12],A=s[13],w=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+o,d+h,m+v,_+A).normalize(),n[3].setComponents(l-o,d-h,m-v,_-A).normalize(),n[4].setComponents(l-a,d-u,m-x,_-w).normalize(),e===Rn)n[5].setComponents(l+a,d+u,m+x,_+w).normalize();else if(e===ur)n[5].setComponents(a,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ud(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<u.length;f++){const v=u[d],x=u[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,v=u.length;f<v;f++){const x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Je extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],v=[],x=[],m=[];for(let p=0;p<h;p++){const A=p*d-o;for(let w=0;w<c;w++){const _=w*u-r;v.push(_,-A,0),x.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const w=A+c*p,_=A+c*(p+1),S=A+1+c*(p+1),C=A+1+c*p;f.push(w,_,C),f.push(_,S,C)}this.setIndex(f),this.setAttribute("position",new ie(v,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.width,t.height,t.widthSegments,t.heightSegments)}}var dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
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
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_d=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,Md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
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
#endif`,Td=`#ifdef USE_BUMPMAP
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kd=`#define PI 3.141592653589793
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
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
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
}`,tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sf=`uniform bool receiveShadow;
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
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hf=`PhysicalMaterial material;
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
#endif`,uf=`struct PhysicalMaterial {
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
}`,df=`
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sf=`#if defined( USE_POINTS_UV )
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
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`#ifdef USE_MORPHTARGETS
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
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zf=`float getShadowMask() {
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
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
}`,yp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Rp=`#define LAMBERT
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
}`,Cp=`#define LAMBERT
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
}`,Pp=`#define MATCAP
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
}`,Dp=`#define MATCAP
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
}`,Lp=`#define NORMAL
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
}`,Ip=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,kp=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,zp=`#define TOON
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
}`,Bp=`uniform float size;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Gp=`uniform vec3 color;
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
}`,Wp=`uniform float rotation;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:dd,alphahash_pars_fragment:fd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:vd,aomap_fragment:_d,aomap_pars_fragment:xd,batching_pars_vertex:yd,batching_vertex:Md,begin_vertex:Sd,beginnormal_vertex:bd,bsdfs:wd,iridescence_fragment:Ed,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Pd,color_fragment:Dd,color_pars_fragment:Ld,color_pars_vertex:Id,color_vertex:Ud,common:kd,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:zd,emissivemap_fragment:Bd,emissivemap_pars_fragment:Hd,colorspace_fragment:Vd,colorspace_pars_fragment:Gd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:qd,envmap_pars_vertex:Yd,envmap_physical_pars_fragment:rf,envmap_vertex:$d,fog_vertex:jd,fog_pars_vertex:Kd,fog_fragment:Zd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:tf,lights_lambert_fragment:ef,lights_lambert_pars_fragment:nf,lights_pars_begin:sf,lights_toon_fragment:of,lights_toon_pars_fragment:af,lights_phong_fragment:lf,lights_phong_pars_fragment:cf,lights_physical_fragment:hf,lights_physical_pars_fragment:uf,lights_fragment_begin:df,lights_fragment_maps:ff,lights_fragment_end:pf,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:_f,map_fragment:xf,map_pars_fragment:yf,map_particle_fragment:Mf,map_particle_pars_fragment:Sf,metalnessmap_fragment:bf,metalnessmap_pars_fragment:wf,morphinstance_vertex:Ef,morphcolor_vertex:Tf,morphnormal_vertex:Af,morphtarget_pars_vertex:Rf,morphtarget_vertex:Cf,normal_fragment_begin:Pf,normal_fragment_maps:Df,normal_pars_fragment:Lf,normal_pars_vertex:If,normal_vertex:Uf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Ff,clearcoat_pars_fragment:Of,iridescence_pars_fragment:zf,opaque_fragment:Bf,packing:Hf,premultiplied_alpha_fragment:Vf,project_vertex:Gf,dithering_fragment:Wf,dithering_pars_fragment:Xf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:Yf,shadowmap_pars_fragment:$f,shadowmap_pars_vertex:jf,shadowmap_vertex:Kf,shadowmask_pars_fragment:Zf,skinbase_vertex:Jf,skinning_pars_vertex:Qf,skinning_vertex:tp,skinnormal_vertex:ep,specularmap_fragment:np,specularmap_pars_fragment:ip,tonemapping_fragment:sp,tonemapping_pars_fragment:rp,transmission_fragment:op,transmission_pars_fragment:ap,uv_pars_fragment:lp,uv_pars_vertex:cp,uv_vertex:hp,worldpos_vertex:up,background_vert:dp,background_frag:fp,backgroundCube_vert:pp,backgroundCube_frag:mp,cube_vert:gp,cube_frag:vp,depth_vert:_p,depth_frag:xp,distanceRGBA_vert:yp,distanceRGBA_frag:Mp,equirect_vert:Sp,equirect_frag:bp,linedashed_vert:wp,linedashed_frag:Ep,meshbasic_vert:Tp,meshbasic_frag:Ap,meshlambert_vert:Rp,meshlambert_frag:Cp,meshmatcap_vert:Pp,meshmatcap_frag:Dp,meshnormal_vert:Lp,meshnormal_frag:Ip,meshphong_vert:Up,meshphong_frag:kp,meshphysical_vert:Np,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:zp,points_vert:Bp,points_frag:Hp,shadow_vert:Vp,shadow_frag:Gp,sprite_vert:Wp,sprite_frag:Xp},ot={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},dn={basic:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ue([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ue([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ue([ot.points,ot.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ue([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ue([ot.common,ot.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ue([ot.sprite,ot.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ue([ot.common,ot.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ue([ot.lights,ot.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};dn.physical={uniforms:Ue([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Os={r:0,b:0,g:0},Zn=new pn,qp=new Kt;function Yp(i,t,e,n,s,r,o){const a=new Ft(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function v(A){let w=A.isScene===!0?A.background:null;return w&&w.isTexture&&(w=(A.backgroundBlurriness>0?e:t).get(w)),w}function x(A){let w=!1;const _=v(A);_===null?p(a,l):_&&_.isColor&&(p(_,1),w=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,w){const _=v(w);_&&(_.isCubeTexture||_.mapping===mr)?(h===void 0&&(h=new dt(new Se(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:Hi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zn.copy(w.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Zn)),h.material.toneMapped=Wt.getTransfer(_.colorSpace)!==ee,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new dt(new Je(2,2),new ge({name:"BackgroundMaterial",uniforms:Hi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,w){A.getRGB(Os,rh(i)),n.buffers.color.setClear(Os.r,Os.g,Os.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(A,w=1){a.set(A),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:x,addToRenderList:m}}function $p(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(g,T,L,D,k){let V=!1;const X=u(D,L,T);r!==X&&(r=X,c(r.object)),V=f(g,D,L,k),V&&v(g,D,L,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(g,T,L,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function u(g,T,L){const D=L.wireframe===!0;let k=n[g.id];k===void 0&&(k={},n[g.id]=k);let V=k[T.id];V===void 0&&(V={},k[T.id]=V);let X=V[D];return X===void 0&&(X=d(l()),V[D]=X),X}function d(g){const T=[],L=[],D=[];for(let k=0;k<e;k++)T[k]=0,L[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:D,object:g,attributes:{},index:null}}function f(g,T,L,D){const k=r.attributes,V=T.attributes;let X=0;const j=L.getAttributes();for(const G in j)if(j[G].location>=0){const at=k[G];let gt=V[G];if(gt===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(gt=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(gt=g.instanceColor)),at===void 0||at.attribute!==gt||gt&&at.data!==gt.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function v(g,T,L,D){const k={},V=T.attributes;let X=0;const j=L.getAttributes();for(const G in j)if(j[G].location>=0){let at=V[G];at===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(at=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(at=g.instanceColor));const gt={};gt.attribute=at,at&&at.data&&(gt.data=at.data),k[G]=gt,X++}r.attributes=k,r.attributesNum=X,r.index=D}function x(){const g=r.newAttributes;for(let T=0,L=g.length;T<L;T++)g[T]=0}function m(g){p(g,0)}function p(g,T){const L=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;L[g]=1,D[g]===0&&(i.enableVertexAttribArray(g),D[g]=1),k[g]!==T&&(i.vertexAttribDivisor(g,T),k[g]=T)}function A(){const g=r.newAttributes,T=r.enabledAttributes;for(let L=0,D=T.length;L<D;L++)T[L]!==g[L]&&(i.disableVertexAttribArray(L),T[L]=0)}function w(g,T,L,D,k,V,X){X===!0?i.vertexAttribIPointer(g,T,L,k,V):i.vertexAttribPointer(g,T,L,D,k,V)}function _(g,T,L,D){x();const k=D.attributes,V=L.getAttributes(),X=T.defaultAttributeValues;for(const j in V){const G=V[j];if(G.location>=0){let Q=k[j];if(Q===void 0&&(j==="instanceMatrix"&&g.instanceMatrix&&(Q=g.instanceMatrix),j==="instanceColor"&&g.instanceColor&&(Q=g.instanceColor)),Q!==void 0){const at=Q.normalized,gt=Q.itemSize,Dt=t.get(Q);if(Dt===void 0)continue;const Xt=Dt.buffer,q=Dt.type,tt=Dt.bytesPerElement,mt=q===i.INT||q===i.UNSIGNED_INT||Q.gpuType===pa;if(Q.isInterleavedBufferAttribute){const it=Q.data,Mt=it.stride,Tt=Q.offset;if(it.isInstancedInterleavedBuffer){for(let Ct=0;Ct<G.locationSize;Ct++)p(G.location+Ct,it.meshPerAttribute);g.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ct=0;Ct<G.locationSize;Ct++)m(G.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Ct=0;Ct<G.locationSize;Ct++)w(G.location+Ct,gt/G.locationSize,q,at,Mt*tt,(Tt+gt/G.locationSize*Ct)*tt,mt)}else{if(Q.isInstancedBufferAttribute){for(let it=0;it<G.locationSize;it++)p(G.location+it,Q.meshPerAttribute);g.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let it=0;it<G.locationSize;it++)m(G.location+it);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let it=0;it<G.locationSize;it++)w(G.location+it,gt/G.locationSize,q,at,gt*tt,gt/G.locationSize*it*tt,mt)}}else if(X!==void 0){const at=X[j];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(G.location,at);break;case 3:i.vertexAttrib3fv(G.location,at);break;case 4:i.vertexAttrib4fv(G.location,at);break;default:i.vertexAttrib1fv(G.location,at)}}}}A()}function S(){R();for(const g in n){const T=n[g];for(const L in T){const D=T[L];for(const k in D)h(D[k].object),delete D[k];delete T[L]}delete n[g]}}function C(g){if(n[g.id]===void 0)return;const T=n[g.id];for(const L in T){const D=T[L];for(const k in D)h(D[k].object),delete D[k];delete T[L]}delete n[g.id]}function E(g){for(const T in n){const L=n[T];if(L[g.id]===void 0)continue;const D=L[g.id];for(const k in D)h(D[k].object),delete D[k];delete L[g.id]}}function R(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function jp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let v=0;v<u;v++)f+=h[v];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*d[x];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==cn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ln&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ln&&!R)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:S,maxSamples:C}}function Zp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ei,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const A=r?0:n,w=A*4;let _=p.clippingState||null;l.value=_,_=h(v,d,w,f);for(let S=0;S!==w;++S)_[S]=e[S];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=f+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==x;++w,_+=4)o.copy(u[w]).applyMatrix4(A,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Jp(i){let t=new WeakMap;function e(o,a){return a===bo?o.mapping=Fi:a===wo&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bo||a===wo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ld(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ba extends oh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,xl=[.125,.215,.35,.446,.526,.582],si=20,Xr=new ba,yl=new Ft;let qr=null,Yr=0,$r=0,jr=!1;const ni=(1+Math.sqrt(5))/2,Ei=1/ni,Ml=[new I(-ni,Ei,0),new I(ni,Ei,0),new I(-Ei,0,ni),new I(Ei,0,ni),new I(0,ni,-Ei),new I(0,ni,Ei),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Sl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qr,Yr,$r),this._renderer.xr.enabled=jr,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:hn,format:cn,colorSpace:Gi,depthBuffer:!1},s=bl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(r)),this._blurMaterial=tm(r,t,e)}return s}_compileMaterial(t){const e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s){const a=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yl),h.toneMapping=Pn,h.autoClear=!1;const f=new qe({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),v=new dt(new Se,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(yl),x=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;zs(s,A*w,p>2?w:0,w,w),h.setRenderTarget(s),x&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Fi||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ml[(s-r-1)%Ml.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*si-1),x=r/v,m=isFinite(r)?1+Math.floor(h*x):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const p=[];let A=0;for(let E=0;E<si;++E){const R=E/x,y=Math.exp(-R*R/2);p.push(y),E===0?A+=y:E<m&&(A+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=v,d.mipInt.value=w-n;const _=this._sizeLods[s],S=3*_*(s>w-Di?s-w+Di:0),C=4*(this._cubeSize-_);zs(e,S,C,3*_,2*_),l.setRenderTarget(e),l.render(u,Xr)}}function Qp(i){const t=[],e=[],n=[];let s=i;const r=i-Di+1+xl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Di?l=xl[o-i+Di-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,v=6,x=3,m=2,p=1,A=new Float32Array(x*v*f),w=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let C=0;C<f;C++){const E=C%3*2/3-1,R=C>2?0:-1,y=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];A.set(y,x*v*C),w.set(d,m*v*C);const g=[C,C,C,C,C,C];_.set(g,p*v*C)}const S=new Me;S.setAttribute("position",new Be(A,x)),S.setAttribute("uv",new Be(w,m)),S.setAttribute("faceIndex",new Be(_,p)),t.push(S),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bl(i,t,e){const n=new je(i,t,e);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tm(i,t,e){const n=new Float32Array(si),s=new I(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wa(),fragmentShader:`

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
		`,blending:ke,depthTest:!1,depthWrite:!1})}function wl(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:ke,depthTest:!1,depthWrite:!1})}function El(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ke,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function em(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bo||l===wo,h=l===Fi||l===Oi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Sl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Sl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function im(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const v in f){const x=f[v];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,v=u.attributes.position;let x=0;if(f!==null){const A=f.array;x=f.version;for(let w=0,_=A.length;w<_;w+=3){const S=A[w+0],C=A[w+1],E=A[w+2];d.push(S,C,C,E,E,S)}}else if(v!==void 0){const A=v.array;x=v.version;for(let w=0,_=A.length/3-1;w<_;w+=3){const S=w+0,C=w+1,E=w+2;d.push(S,C,C,E,E,S)}}else return;const m=new(Zc(d)?sh:ih)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,d*o,v),e.update(f,n,v))}function h(d,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];e.update(m,n,1)}function u(d,f,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,v);let p=0;for(let A=0;A<v;A++)p+=f[A]*x[A];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function om(i,t,e){const n=new WeakMap,s=new ne;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let g=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",g)};var f=g;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let S=a.attributes.position.count*_,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*C*4*u),R=new Qc(E,S,C,u);R.type=ln,R.needsUpdate=!0;const y=_*4;for(let T=0;T<u;T++){const L=p[T],D=A[T],k=w[T],V=S*C*4*T;for(let X=0;X<L.count;X++){const j=X*y;v===!0&&(s.fromBufferAttribute(L,X),E[V+j+0]=s.x,E[V+j+1]=s.y,E[V+j+2]=s.z,E[V+j+3]=0),x===!0&&(s.fromBufferAttribute(D,X),E[V+j+4]=s.x,E[V+j+5]=s.y,E[V+j+6]=s.z,E[V+j+7]=0),m===!0&&(s.fromBufferAttribute(k,X),E[V+j+8]=s.x,E[V+j+9]=s.y,E[V+j+10]=s.z,E[V+j+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new nt(S,C)},n.set(a,d),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function am(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ea extends Ce{constructor(t,e,n,s,r,o,a,l,c,h=Ui){if(h!==Ui&&h!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=oi),n===void 0&&h===li&&(n=ai),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ch=new Ce,Tl=new Ea(1,1),hh=new Qc,uh=new Yu,dh=new ah,Al=[],Rl=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Dl=new Float32Array(4);function $i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Al[s];if(r===void 0&&(r=new Float32Array(s),Al[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _r(i,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),_e(e,n)}}function fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),_e(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Cl.set(n),i.uniformMatrix4fv(this.addr,!1,Cl),_e(e,n)}}function mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=Kc,r=Tl):r=ch,e.setTexture2D(t||r,s)}function wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uh,s)}function Em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||dh,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hh,s)}function Am(i){switch(i){case 5126:return lm;case 35664:return cm;case 35665:return hm;case 35666:return um;case 35674:return dm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return vm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return ym;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Tm}}function Rm(i,t){i.uniform1fv(this.addr,t)}function Cm(i,t){const e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function Pm(i,t){const e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function Dm(i,t){const e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function Lm(i,t){const e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Im(i,t){const e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Um(i,t){const e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function km(i,t){i.uniform1iv(this.addr,t)}function Nm(i,t){i.uniform2iv(this.addr,t)}function Fm(i,t){i.uniform3iv(this.addr,t)}function Om(i,t){i.uniform4iv(this.addr,t)}function zm(i,t){i.uniform1uiv(this.addr,t)}function Bm(i,t){i.uniform2uiv(this.addr,t)}function Hm(i,t){i.uniform3uiv(this.addr,t)}function Vm(i,t){i.uniform4uiv(this.addr,t)}function Gm(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ch,r[o])}function Wm(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uh,r[o])}function Xm(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||dh,r[o])}function qm(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hh,r[o])}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Dm;case 35674:return Lm;case 35675:return Im;case 35676:return Um;case 5124:case 35670:return km;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return zm;case 36294:return Bm;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}class $m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Am(e.type)}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ym(e.type)}}class Km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function Ll(i,t){i.seq.push(t),i.map[t.id]=t}function Zm(i,t,e){const n=i.name,s=n.length;for(Kr.lastIndex=0;;){const r=Kr.exec(n),o=Kr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ll(e,c===void 0?new $m(a,i,t):new jm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Km(a),Ll(e,u)),e=u}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Zm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Il(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jm=37297;let Qm=0;function t0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ul=new kt;function e0(i){Wt._getMatrix(Ul,Wt.workingColorSpace,i);const t=`mat3( ${Ul.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+t0(i.getShaderSource(t),o)}else return s}function n0(i,t){const e=e0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i0(i,t){let e;switch(t){case Uc:e="Linear";break;case kc:e="Reinhard";break;case Nc:e="Cineon";break;case Fc:e="ACESFilmic";break;case Oc:e="AgX";break;case zc:e="Neutral";break;case hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bs=new I;function s0(){Wt.getLuminanceCoefficients(Bs);const i=Bs.x.toFixed(4),t=Bs.y.toFixed(4),e=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function o0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rs(i){return i!==""}function Nl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(i){return i.replace(l0,h0)}const c0=new Map;function h0(i,t){let e=Nt[t];if(e===void 0){const n=c0.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jo(e)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(i){return i.replace(u0,d0)}function d0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function f0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function p0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:t="ENVMAP_TYPE_CUBE";break;case mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function g0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ic:t="ENVMAP_BLENDING_MULTIPLY";break;case lu:t="ENVMAP_BLENDING_MIX";break;case cu:t="ENVMAP_BLENDING_ADD";break}return t}function v0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=f0(e),c=p0(e),h=m0(e),u=g0(e),d=v0(e),f=r0(e),v=o0(r),x=s.createProgram();let m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(m=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?i0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,n0("linearToOutputTexel",e.outputColorSpace),s0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),o=Jo(o),o=Nl(o,e),o=Fl(o,e),a=Jo(a),a=Nl(a,e),a=Fl(a,e),o=Ol(o),a=Ol(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=A+m+o,_=A+p+a,S=Il(s,s.VERTEX_SHADER,w),C=Il(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(T){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(S).trim(),k=s.getShaderInfoLog(C).trim();let V=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,C);else{const j=kl(s,S,"vertex"),G=kl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+j+`
`+G)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||k==="")&&(X=!1);X&&(T.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(S),s.deleteShader(C),R=new lr(s,x),y=a0(s,x)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(x,Jm)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=C,this}let x0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M0(t),e.set(t,n)),n}}class M0{constructor(t){this.id=x0++,this.code=t,this.usedTimes=0}}function S0(i,t,e,n,s,r,o){const a=new eh,l=new y0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,g,T,L,D){const k=L.fog,V=D.geometry,X=y.isMeshStandardMaterial?L.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),G=j&&j.mapping===mr?j.image.height:null,Q=v[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,gt=at!==void 0?at.length:0;let Dt=0;V.morphAttributes.position!==void 0&&(Dt=1),V.morphAttributes.normal!==void 0&&(Dt=2),V.morphAttributes.color!==void 0&&(Dt=3);let Xt,q,tt,mt;if(Q){const te=dn[Q];Xt=te.vertexShader,q=te.fragmentShader}else Xt=y.vertexShader,q=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),mt=l.getFragmentShaderID(y);const it=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Tt=D.isInstancedMesh===!0,Ct=D.isBatchedMesh===!0,se=!!y.map,Ht=!!y.matcap,oe=!!j,N=!!y.aoMap,be=!!y.lightMap,zt=!!y.bumpMap,Bt=!!y.normalMap,wt=!!y.displacementMap,Qt=!!y.emissiveMap,bt=!!y.metalnessMap,P=!!y.roughnessMap,M=y.anisotropy>0,z=y.clearcoat>0,$=y.dispersion>0,Z=y.iridescence>0,Y=y.sheen>0,vt=y.transmission>0,rt=M&&!!y.anisotropyMap,lt=z&&!!y.clearcoatMap,Ot=z&&!!y.clearcoatNormalMap,J=z&&!!y.clearcoatRoughnessMap,ft=Z&&!!y.iridescenceMap,At=Z&&!!y.iridescenceThicknessMap,Rt=Y&&!!y.sheenColorMap,pt=Y&&!!y.sheenRoughnessMap,Gt=!!y.specularMap,Pt=!!y.specularColorMap,qt=!!y.specularIntensityMap,U=vt&&!!y.transmissionMap,st=vt&&!!y.thicknessMap,W=!!y.gradientMap,K=!!y.alphaMap,ut=y.alphaTest>0,ct=!!y.alphaHash,It=!!y.extensions;let he=Pn;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(he=i.toneMapping);const we={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Xt,fragmentShader:q,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&D._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&D.instanceColor!==null,instancingMorph:Tt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Gi,alphaToCoverage:!!y.alphaToCoverage,map:se,matcap:Ht,envMap:oe,envMapMode:oe&&j.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:be,bumpMap:zt,normalMap:Bt,displacementMap:d&&wt,emissiveMap:Qt,normalMapObjectSpace:Bt&&y.normalMapType===pu,normalMapTangentSpace:Bt&&y.normalMapType===ya,metalnessMap:bt,roughnessMap:P,anisotropy:M,anisotropyMap:rt,clearcoat:z,clearcoatMap:lt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:J,dispersion:$,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Gt,specularColorMap:Pt,specularIntensityMap:qt,transmission:vt,transmissionMap:U,thicknessMap:st,gradientMap:W,opaque:y.transparent===!1&&y.blending===Ii&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ct,combine:y.combine,mapUv:se&&x(y.map.channel),aoMapUv:N&&x(y.aoMap.channel),lightMapUv:be&&x(y.lightMap.channel),bumpMapUv:zt&&x(y.bumpMap.channel),normalMapUv:Bt&&x(y.normalMap.channel),displacementMapUv:wt&&x(y.displacementMap.channel),emissiveMapUv:Qt&&x(y.emissiveMap.channel),metalnessMapUv:bt&&x(y.metalnessMap.channel),roughnessMapUv:P&&x(y.roughnessMap.channel),anisotropyMapUv:rt&&x(y.anisotropyMap.channel),clearcoatMapUv:lt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:At&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(y.sheenRoughnessMap.channel),specularMapUv:Gt&&x(y.specularMap.channel),specularColorMapUv:Pt&&x(y.specularColorMap.channel),specularIntensityMapUv:qt&&x(y.specularIntensityMap.channel),transmissionMapUv:U&&x(y.transmissionMap.channel),thicknessMapUv:st&&x(y.thicknessMap.channel),alphaMapUv:K&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Bt||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(se||K),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Mt,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Dt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:se&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===ee,decodeVideoTextureEmissive:Qt&&y.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(y.emissiveMap.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ye,flipSided:y.side===ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:It&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&y.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function p(y){const g=[];if(y.shaderID?g.push(y.shaderID):(g.push(y.customVertexShaderID),g.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)g.push(T),g.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(A(g,y),w(g,y),g.push(i.outputColorSpace)),g.push(y.customProgramCacheKey),g.join()}function A(y,g){y.push(g.precision),y.push(g.outputColorSpace),y.push(g.envMapMode),y.push(g.envMapCubeUVHeight),y.push(g.mapUv),y.push(g.alphaMapUv),y.push(g.lightMapUv),y.push(g.aoMapUv),y.push(g.bumpMapUv),y.push(g.normalMapUv),y.push(g.displacementMapUv),y.push(g.emissiveMapUv),y.push(g.metalnessMapUv),y.push(g.roughnessMapUv),y.push(g.anisotropyMapUv),y.push(g.clearcoatMapUv),y.push(g.clearcoatNormalMapUv),y.push(g.clearcoatRoughnessMapUv),y.push(g.iridescenceMapUv),y.push(g.iridescenceThicknessMapUv),y.push(g.sheenColorMapUv),y.push(g.sheenRoughnessMapUv),y.push(g.specularMapUv),y.push(g.specularColorMapUv),y.push(g.specularIntensityMapUv),y.push(g.transmissionMapUv),y.push(g.thicknessMapUv),y.push(g.combine),y.push(g.fogExp2),y.push(g.sizeAttenuation),y.push(g.morphTargetsCount),y.push(g.morphAttributeCount),y.push(g.numDirLights),y.push(g.numPointLights),y.push(g.numSpotLights),y.push(g.numSpotLightMaps),y.push(g.numHemiLights),y.push(g.numRectAreaLights),y.push(g.numDirLightShadows),y.push(g.numPointLightShadows),y.push(g.numSpotLightShadows),y.push(g.numSpotLightShadowsWithMaps),y.push(g.numLightProbes),y.push(g.shadowMapType),y.push(g.toneMapping),y.push(g.numClippingPlanes),y.push(g.numClipIntersection),y.push(g.depthPacking)}function w(y,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reverseDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const g=v[y.type];let T;if(g){const L=dn[g];T=Cn.clone(L.uniforms)}else T=y.uniforms;return T}function S(y,g){let T;for(let L=0,D=h.length;L<D;L++){const k=h[L];if(k.cacheKey===g){T=k,++T.usedTimes;break}}return T===void 0&&(T=new _0(i,g,y,r),h.push(T)),T}function C(y){if(--y.usedTimes===0){const g=h.indexOf(y);h[g]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:C,releaseShaderCache:E,programs:h,dispose:R}}function b0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,v,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,v,x,m){const p=o(u,d,f,v,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,v,x,m){const p=o(u,d,f,v,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||w0),n.length>1&&n.sort(d||Bl),s.length>1&&s.sort(d||Bl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function E0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Hl,i.set(n,[o])):s>=r.length?(o=new Hl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function T0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ft};break;case"SpotLight":e={position:new I,direction:new I,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function A0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let R0=0;function C0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P0(i){const t=new T0,e=A0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new Kt,o=new Kt;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,v=0,x=0,m=0,p=0,A=0,w=0,_=0,S=0,C=0,E=0;c.sort(C0);for(let y=0,g=c.length;y<g;y++){const T=c[y],L=T.color,D=T.intensity,k=T.distance,V=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*D,u+=L.g*D,d+=L.b*D;else if(T.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(T.sh.coefficients[X],D);E++}else if(T.isDirectionalLight){const X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const j=T.shadow,G=e.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=T.shadow.matrix,A++}n.directional[f]=X,f++}else if(T.isSpotLight){const X=t.get(T);X.position.setFromMatrixPosition(T.matrixWorld),X.color.copy(L).multiplyScalar(D),X.distance=k,X.coneCos=Math.cos(T.angle),X.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),X.decay=T.decay,n.spot[x]=X;const j=T.shadow;if(T.map&&(n.spotLightMap[S]=T.map,S++,j.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[x]=j.matrix,T.castShadow){const G=e.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=V,_++}x++}else if(T.isRectAreaLight){const X=t.get(T);X.color.copy(L).multiplyScalar(D),X.halfWidth.set(T.width*.5,0,0),X.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=X,m++}else if(T.isPointLight){const X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),X.distance=T.distance,X.decay=T.decay,T.castShadow){const j=T.shadow,G=e.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=V,n.pointShadowMatrix[v]=T.shadow.matrix,w++}n.point[v]=X,v++}else if(T.isHemisphereLight){const X=t.get(T);X.skyColor.copy(T.color).multiplyScalar(D),X.groundColor.copy(T.groundColor).multiplyScalar(D),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==v||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==A||R.numPointShadows!==w||R.numSpotShadows!==_||R.numSpotMaps!==S||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=_+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,R.directionalLength=f,R.pointLength=v,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=A,R.numPointShadows=w,R.numSpotShadows=_,R.numSpotMaps=S,R.numLightProbes=E,n.version=R0++)}function l(c,h){let u=0,d=0,f=0,v=0,x=0;const m=h.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const w=c[p];if(w.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(w.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Vl(i){const t=new P0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function D0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Vl(i),t.set(s,[a])):r>=o.length?(a=new Vl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class L0 extends mn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class I0 extends mn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function N0(i,t,e){let n=new Sa;const s=new nt,r=new nt,o=new ne,a=new L0({depthPacking:fu}),l=new I0,c={},h=e.maxTextureSize,u={[Xn]:ze,[ze]:Xn,[Ye]:Ye},d=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:U0,fragmentShader:k0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Me;v.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let p=this.type;this.render=function(C,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),g=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ke),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=p!==En&&this.type===En,k=p===En&&this.type!==En;for(let V=0,X=C.length;V<X;V++){const j=C[V],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();if(s.multiply(Q),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y)),G.map===null||D===!0||k===!0){const gt=this.type!==En?{minFilter:Ne,magFilter:Ne}:{};G.map!==null&&G.map.dispose(),G.map=new je(s.x,s.y,gt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const at=G.getViewportCount();for(let gt=0;gt<at;gt++){const Dt=G.getViewport(gt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),L.viewport(o),G.updateMatrices(j,gt),n=G.getFrustum(),_(E,R,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===En&&A(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,g,T)};function A(C,E){const R=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new je(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(E,null,R,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(E,null,R,f,x,null)}function w(C,E,R,y){let g=null;const T=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)g=T;else if(g=R.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=g.uuid,D=E.uuid;let k=c[L];k===void 0&&(k={},c[L]=k);let V=k[D];V===void 0&&(V=g.clone(),k[D]=V,E.addEventListener("dispose",S)),g=V}if(g.visible=E.visible,g.wireframe=E.wireframe,y===En?g.side=E.shadowSide!==null?E.shadowSide:E.side:g.side=E.shadowSide!==null?E.shadowSide:u[E.side],g.alphaMap=E.alphaMap,g.alphaTest=E.alphaTest,g.map=E.map,g.clipShadows=E.clipShadows,g.clippingPlanes=E.clippingPlanes,g.clipIntersection=E.clipIntersection,g.displacementMap=E.displacementMap,g.displacementScale=E.displacementScale,g.displacementBias=E.displacementBias,g.wireframeLinewidth=E.wireframeLinewidth,g.linewidth=E.linewidth,R.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const L=i.properties.get(g);L.light=R}return g}function _(C,E,R,y,g){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===En)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const D=t.update(C),k=C.material;if(Array.isArray(k)){const V=D.groups;for(let X=0,j=V.length;X<j;X++){const G=V[X],Q=k[G.materialIndex];if(Q&&Q.visible){const at=w(C,Q,y,g);C.onBeforeShadow(i,C,E,R,D,at,G),i.renderBufferDirect(R,null,D,at,C,G),C.onAfterShadow(i,C,E,R,D,at,G)}}}else if(k.visible){const V=w(C,k,y,g);C.onBeforeShadow(i,C,E,R,D,V,null),i.renderBufferDirect(R,null,D,V,C,null),C.onAfterShadow(i,C,E,R,D,V,null)}}const L=C.children;for(let D=0,k=L.length;D<k;D++)_(L[D],E,R,y,g)}function S(C){C.target.removeEventListener("dispose",S);for(const R in c){const y=c[R],g=C.target.uuid;g in y&&(y[g].dispose(),delete y[g])}}}const F0={[go]:vo,[_o]:Mo,[xo]:So,[Ni]:yo,[vo]:go,[Mo]:_o,[So]:xo,[yo]:Ni};function O0(i,t){function e(){let U=!1;const st=new ne;let W=null;const K=new ne(0,0,0,0);return{setMask:function(ut){W!==ut&&!U&&(i.colorMask(ut,ut,ut,ut),W=ut)},setLocked:function(ut){U=ut},setClear:function(ut,ct,It,he,we){we===!0&&(ut*=he,ct*=he,It*=he),st.set(ut,ct,It,he),K.equals(st)===!1&&(i.clearColor(ut,ct,It,he),K.copy(st))},reset:function(){U=!1,W=null,K.set(-1,0,0,0)}}}function n(){let U=!1,st=!1,W=null,K=null,ut=null;return{setReversed:function(ct){if(st!==ct){const It=t.get("EXT_clip_control");st?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const he=ut;ut=null,this.setClear(he)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?it(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ct){W!==ct&&!U&&(i.depthMask(ct),W=ct)},setFunc:function(ct){if(st&&(ct=F0[ct]),K!==ct){switch(ct){case go:i.depthFunc(i.NEVER);break;case vo:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ct}},setLocked:function(ct){U=ct},setClear:function(ct){ut!==ct&&(st&&(ct=1-ct),i.clearDepth(ct),ut=ct)},reset:function(){U=!1,W=null,K=null,ut=null,st=!1}}}function s(){let U=!1,st=null,W=null,K=null,ut=null,ct=null,It=null,he=null,we=null;return{setTest:function(te){U||(te?it(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(te){st!==te&&!U&&(i.stencilMask(te),st=te)},setFunc:function(te,Qe,vn){(W!==te||K!==Qe||ut!==vn)&&(i.stencilFunc(te,Qe,vn),W=te,K=Qe,ut=vn)},setOp:function(te,Qe,vn){(ct!==te||It!==Qe||he!==vn)&&(i.stencilOp(te,Qe,vn),ct=te,It=Qe,he=vn)},setLocked:function(te){U=te},setClear:function(te){we!==te&&(i.clearStencil(te),we=te)},reset:function(){U=!1,st=null,W=null,K=null,ut=null,ct=null,It=null,he=null,we=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],v=null,x=!1,m=null,p=null,A=null,w=null,_=null,S=null,C=null,E=new Ft(0,0,0),R=0,y=!1,g=null,T=null,L=null,D=null,k=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=j>=2);let Q=null,at={};const gt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Xt=new ne().fromArray(gt),q=new ne().fromArray(Dt);function tt(U,st,W,K){const ut=new Uint8Array(4),ct=i.createTexture();i.bindTexture(U,ct),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<W;It++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(st+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ct}const mt={};mt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Ni),zt(!1),Bt(qa),it(i.CULL_FACE),N(ke);function it(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Mt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Tt(U,st){return u[U]!==st?(i.bindFramebuffer(U,st),u[U]=st,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ct(U,st){let W=f,K=!1;if(U){W=d.get(st),W===void 0&&(W=[],d.set(st,W));const ut=U.textures;if(W.length!==ut.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,It=ut.length;ct<It;ct++)W[ct]=i.COLOR_ATTACHMENT0+ct;W.length=ut.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function se(U){return v!==U?(i.useProgram(U),v=U,!0):!1}const Ht={[Tn]:i.FUNC_ADD,[$h]:i.FUNC_SUBTRACT,[jh]:i.FUNC_REVERSE_SUBTRACT};Ht[Kh]=i.MIN,Ht[Zh]=i.MAX;const oe={[fo]:i.ZERO,[Jh]:i.ONE,[Qh]:i.SRC_COLOR,[po]:i.SRC_ALPHA,[iu]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Dc]:i.DST_ALPHA,[tu]:i.ONE_MINUS_SRC_COLOR,[mo]:i.ONE_MINUS_SRC_ALPHA,[nu]:i.ONE_MINUS_DST_COLOR,[eu]:i.ONE_MINUS_DST_ALPHA,[su]:i.CONSTANT_COLOR,[ru]:i.ONE_MINUS_CONSTANT_COLOR,[ou]:i.CONSTANT_ALPHA,[au]:i.ONE_MINUS_CONSTANT_ALPHA};function N(U,st,W,K,ut,ct,It,he,we,te){if(U===ke){x===!0&&(Mt(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),U!==Pc){if(U!==m||te!==y){if((p!==Tn||_!==Tn)&&(i.blendEquation(i.FUNC_ADD),p=Tn,_=Tn),te)switch(U){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hr:i.blendFunc(i.ONE,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,w=null,S=null,C=null,E.set(0,0,0),R=0,m=U,y=te}return}ut=ut||st,ct=ct||W,It=It||K,(st!==p||ut!==_)&&(i.blendEquationSeparate(Ht[st],Ht[ut]),p=st,_=ut),(W!==A||K!==w||ct!==S||It!==C)&&(i.blendFuncSeparate(oe[W],oe[K],oe[ct],oe[It]),A=W,w=K,S=ct,C=It),(he.equals(E)===!1||we!==R)&&(i.blendColor(he.r,he.g,he.b,we),E.copy(he),R=we),m=U,y=!1}function be(U,st){U.side===Ye?Mt(i.CULL_FACE):it(i.CULL_FACE);let W=U.side===ze;st&&(W=!W),zt(W),U.blending===Ii&&U.transparent===!1?N(ke):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Qt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(U){g!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),g=U)}function Bt(U){U!==qh?(it(i.CULL_FACE),U!==T&&(U===qa?i.cullFace(i.BACK):U===Yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),T=U}function wt(U){U!==L&&(X&&i.lineWidth(U),L=U)}function Qt(U,st,W){U?(it(i.POLYGON_OFFSET_FILL),(D!==st||k!==W)&&(i.polygonOffset(st,W),D=st,k=W)):Mt(i.POLYGON_OFFSET_FILL)}function bt(U){U?it(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function P(U){U===void 0&&(U=i.TEXTURE0+V-1),Q!==U&&(i.activeTexture(U),Q=U)}function M(U,st,W){W===void 0&&(Q===null?W=i.TEXTURE0+V-1:W=Q);let K=at[W];K===void 0&&(K={type:void 0,texture:void 0},at[W]=K),(K.type!==U||K.texture!==st)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(U,st||mt[U]),K.type=U,K.texture=st)}function z(){const U=at[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(U){Xt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Xt.copy(U))}function pt(U){q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Gt(U,st){let W=c.get(st);W===void 0&&(W=new WeakMap,c.set(st,W));let K=W.get(U);K===void 0&&(K=i.getUniformBlockIndex(st,U.name),W.set(U,K))}function Pt(U,st){const K=c.get(st).get(U);l.get(st)!==K&&(i.uniformBlockBinding(st,K,U.__bindingPointIndex),l.set(st,K))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,at={},u={},d=new WeakMap,f=[],v=null,x=!1,m=null,p=null,A=null,w=null,_=null,S=null,C=null,E=new Ft(0,0,0),R=0,y=!1,g=null,T=null,L=null,D=null,k=null,Xt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Mt,bindFramebuffer:Tt,drawBuffers:Ct,useProgram:se,setBlending:N,setMaterial:be,setFlipSided:zt,setCullFace:Bt,setLineWidth:wt,setPolygonOffset:Qt,setScissorTest:bt,activeTexture:P,bindTexture:M,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:ft,texImage3D:At,updateUBOMapping:Gt,uniformBlockBinding:Pt,texStorage2D:Ot,texStorage3D:J,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:lt,scissor:Rt,viewport:pt,reset:qt}}function Gl(i,t,e,n){const s=z0(n);switch(e){case Wc:return i*t;case qc:return i*t;case Yc:return i*t*2;case gr:return i*t/s.components*s.byteLength;case va:return i*t/s.components*s.byteLength;case $c:return i*t*2/s.components*s.byteLength;case _a:return i*t*2/s.components*s.byteLength;case Xc:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case xa:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rr:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Co:return Math.max(i,16)*Math.max(t,8)/4;case To:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ar:case Yo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jc:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ko:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z0(i){switch(i){case Ln:case Hc:return{byteLength:1,components:1};case ps:case Vc:case hn:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case oi:case pa:case ln:return{byteLength:4,components:1};case Gc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function B0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return f?new OffscreenCanvas(P,M):dr("canvas")}function x(P,M,z){let $=1;const Z=bt(P);if((Z.width>z||Z.height>z)&&($=z/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor($*Z.width),vt=Math.floor($*Z.height);u===void 0&&(u=v(Y,vt));const rt=M?v(Y,vt):u;return rt.width=Y,rt.height=vt,rt.getContext("2d").drawImage(P,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+vt+")."),rt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(P,M,z,$,Z=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=M;if(M===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),M===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){const vt=Z?vr:Wt.getTransfer($);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=vt===ee?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(P,M){let z;return P?M===null||M===oi||M===ai?z=i.DEPTH24_STENCIL8:M===ln?z=i.DEPTH32F_STENCIL8:M===ps&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===oi||M===ai?z=i.DEPTH_COMPONENT24:M===ln?z=i.DEPTH_COMPONENT32F:M===ps&&(z=i.DEPTH_COMPONENT16),z}function S(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ne&&P.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){const M=P.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&h.delete(M)}function E(P){const M=P.target;M.removeEventListener("dispose",E),g(M)}function R(P){const M=n.get(P);if(M.__webglInit===void 0)return;const z=P.source,$=d.get(z);if($){const Z=$[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(P),Object.keys($).length===0&&d.delete(z)}n.remove(P)}function y(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const z=P.source,$=d.get(z);delete $[M.__cacheKey],o.memory.textures--}function g(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Z=0;Z<M.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=P.textures;for(let $=0,Z=z.length;$<Z;$++){const Y=n.get(z[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[$])}n.remove(P)}let T=0;function L(){T=0}function D(){const P=T;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),T+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function V(P,M){const z=n.get(P);if(P.isVideoTexture&&wt(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,P,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function X(P,M){const z=n.get(P);if(P.version>0&&z.__version!==P.version){q(z,P,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function j(P,M){const z=n.get(P);if(P.version>0&&z.__version!==P.version){q(z,P,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function G(P,M){const z=n.get(P);if(P.version>0&&z.__version!==P.version){tt(z,P,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const Q={[zi]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},at={[Ne]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[wr]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},gt={[mu]:i.NEVER,[Mu]:i.ALWAYS,[gu]:i.LESS,[Kc]:i.LEQUAL,[vu]:i.EQUAL,[yu]:i.GEQUAL,[_u]:i.GREATER,[xu]:i.NOTEQUAL};function Dt(P,M){if(M.type===ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===wr||M.magFilter===ys||M.magFilter===ri||M.minFilter===fn||M.minFilter===wr||M.minFilter===ys||M.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Q[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,at[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ne||M.minFilter!==ys&&M.minFilter!==ri||M.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xt(P,M){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));const $=M.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const Y=k(M);if(Y!==P.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[Y].usedTimes++;const vt=Z[P.__cacheKey];vt!==void 0&&(Z[P.__cacheKey].usedTimes--,vt.usedTimes===0&&y(M)),P.__cacheKey=Y,P.__webglTexture=Z[Y].texture}return z}function q(P,M,z){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const Z=Xt(P,M),Y=M.source;e.bindTexture($,P.__webglTexture,i.TEXTURE0+z);const vt=n.get(Y);if(Y.version!==vt.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);const rt=Wt.getPrimaries(Wt.workingColorSpace),lt=M.colorSpace===An?null:Wt.getPrimaries(M.colorSpace),Ot=M.colorSpace===An||rt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let J=x(M.image,!1,s.maxTextureSize);J=Qt(M,J);const ft=r.convert(M.format,M.colorSpace),At=r.convert(M.type);let Rt=w(M.internalFormat,ft,At,M.colorSpace,M.isVideoTexture);Dt($,M);let pt;const Gt=M.mipmaps,Pt=M.isVideoTexture!==!0,qt=vt.__version===void 0||Z===!0,U=Y.dataReady,st=S(M,J);if(M.isDepthTexture)Rt=_(M.format===li,M.type),qt&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,Rt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Rt,J.width,J.height,0,ft,At,null));else if(M.isDataTexture)if(Gt.length>0){Pt&&qt&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Gt[0].width,Gt[0].height);for(let W=0,K=Gt.length;W<K;W++)pt=Gt[W],Pt?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,W,Rt,pt.width,pt.height,0,ft,At,pt.data);M.generateMipmaps=!1}else Pt?(qt&&e.texStorage2D(i.TEXTURE_2D,st,Rt,J.width,J.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ft,At,J.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,J.width,J.height,0,ft,At,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Gt[0].width,Gt[0].height,J.depth);for(let W=0,K=Gt.length;W<K;W++)if(pt=Gt[W],M.format!==cn)if(ft!==null)if(Pt){if(U)if(M.layerUpdates.size>0){const ut=Gl(pt.width,pt.height,M.format,M.type);for(const ct of M.layerUpdates){const It=pt.data.subarray(ct*ut/pt.data.BYTES_PER_ELEMENT,(ct+1)*ut/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ct,pt.width,pt.height,1,ft,It)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,pt.width,pt.height,J.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Rt,pt.width,pt.height,J.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,pt.width,pt.height,J.depth,ft,At,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Rt,pt.width,pt.height,J.depth,0,ft,At,pt.data)}else{Pt&&qt&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Gt[0].width,Gt[0].height);for(let W=0,K=Gt.length;W<K;W++)pt=Gt[W],M.format!==cn?ft!==null?Pt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,W,Rt,pt.width,pt.height,0,ft,At,pt.data)}else if(M.isDataArrayTexture)if(Pt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,J.width,J.height,J.depth),U)if(M.layerUpdates.size>0){const W=Gl(J.width,J.height,M.format,M.type);for(const K of M.layerUpdates){const ut=J.data.subarray(K*W/J.data.BYTES_PER_ELEMENT,(K+1)*W/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,ft,At,ut)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,At,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,J.width,J.height,J.depth,0,ft,At,J.data);else if(M.isData3DTexture)Pt?(qt&&e.texStorage3D(i.TEXTURE_3D,st,Rt,J.width,J.height,J.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,At,J.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,J.width,J.height,J.depth,0,ft,At,J.data);else if(M.isFramebufferTexture){if(qt)if(Pt)e.texStorage2D(i.TEXTURE_2D,st,Rt,J.width,J.height);else{let W=J.width,K=J.height;for(let ut=0;ut<st;ut++)e.texImage2D(i.TEXTURE_2D,ut,Rt,W,K,0,ft,At,null),W>>=1,K>>=1}}else if(Gt.length>0){if(Pt&&qt){const W=bt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,st,Rt,W.width,W.height)}for(let W=0,K=Gt.length;W<K;W++)pt=Gt[W],Pt?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ft,At,pt):e.texImage2D(i.TEXTURE_2D,W,Rt,ft,At,pt);M.generateMipmaps=!1}else if(Pt){if(qt){const W=bt(J);e.texStorage2D(i.TEXTURE_2D,st,Rt,W.width,W.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,At,J)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,At,J);m(M)&&p($),vt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function tt(P,M,z){if(M.image.length!==6)return;const $=Xt(P,M),Z=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);const Y=n.get(Z);if(Z.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+z);const vt=Wt.getPrimaries(Wt.workingColorSpace),rt=M.colorSpace===An?null:Wt.getPrimaries(M.colorSpace),lt=M.colorSpace===An||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Ot=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Ot&&!J?ft[K]=x(M.image[K],!0,s.maxCubemapSize):ft[K]=J?M.image[K].image:M.image[K],ft[K]=Qt(M,ft[K]);const At=ft[0],Rt=r.convert(M.format,M.colorSpace),pt=r.convert(M.type),Gt=w(M.internalFormat,Rt,pt,M.colorSpace),Pt=M.isVideoTexture!==!0,qt=Y.__version===void 0||$===!0,U=Z.dataReady;let st=S(M,At);Dt(i.TEXTURE_CUBE_MAP,M);let W;if(Ot){Pt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,At.width,At.height);for(let K=0;K<6;K++){W=ft[K].mipmaps;for(let ut=0;ut<W.length;ut++){const ct=W[ut];M.format!==cn?Rt!==null?Pt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ct.width,ct.height,Rt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ct.width,ct.height,Rt,pt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Gt,ct.width,ct.height,0,Rt,pt,ct.data)}}}else{if(W=M.mipmaps,Pt&&qt){W.length>0&&st++;const K=bt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,K.width,K.height)}for(let K=0;K<6;K++)if(J){Pt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Rt,pt,ft[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,ft[K].width,ft[K].height,0,Rt,pt,ft[K].data);for(let ut=0;ut<W.length;ut++){const It=W[ut].image[K].image;Pt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,It.width,It.height,Rt,pt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Gt,It.width,It.height,0,Rt,pt,It.data)}}else{Pt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,pt,ft[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,Rt,pt,ft[K]);for(let ut=0;ut<W.length;ut++){const ct=W[ut];Pt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Rt,pt,ct.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Gt,Rt,pt,ct.image[K])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function mt(P,M,z,$,Z,Y){const vt=r.convert(z.format,z.colorSpace),rt=r.convert(z.type),lt=w(z.internalFormat,vt,rt,z.colorSpace),Ot=n.get(M),J=n.get(z);if(J.__renderTarget=M,!Ot.__hasExternalTextures){const ft=Math.max(1,M.width>>Y),At=Math.max(1,M.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,lt,ft,At,M.depth,0,vt,rt,null):e.texImage2D(Z,Y,lt,ft,At,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Bt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,J.__webglTexture,0,zt(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,J.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(P,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const $=M.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=_(M.stencilBuffer,Z),vt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=zt(M);Bt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Y,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,P)}else{const $=M.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],vt=r.convert(Y.format,Y.colorSpace),rt=r.convert(Y.type),lt=w(Y.internalFormat,vt,rt,Y.colorSpace),Ot=zt(M);z&&Bt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,lt,M.width,M.height):Bt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,lt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,lt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const Z=$.__webglTexture,Y=zt(M);if(M.depthTexture.format===Ui)Bt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(M.depthTexture.format===li)Bt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Tt(P){const M=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=$}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Mt(M.__webglFramebuffer,P)}else if(z){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),it(M.__webglDepthbuffer[$],P,!1);else{const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),it(M.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(P,M,z){const $=n.get(P);M!==void 0&&mt($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Tt(P)}function se(P){const M=P.texture,z=n.get(P),$=n.get(M);P.addEventListener("dispose",E);const Z=P.textures,Y=P.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[rt]=[];for(let lt=0;lt<M.mipmaps.length;lt++)z.__webglFramebuffer[rt][lt]=i.createFramebuffer()}else z.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)z.__webglFramebuffer[rt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,lt=Z.length;rt<lt;rt++){const Ot=n.get(Z[rt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Bt(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const lt=Z[rt];z.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[rt]);const Ot=r.convert(lt.format,lt.colorSpace),J=r.convert(lt.type),ft=w(lt.internalFormat,Ot,J,lt.colorSpace,P.isXRRenderTarget===!0),At=zt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ft,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,z.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),it(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)mt(z.__webglFramebuffer[rt][lt],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else mt(z.__webglFramebuffer[rt],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,lt=Z.length;rt<lt;rt++){const Ot=Z[rt],J=n.get(Ot);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Dt(i.TEXTURE_2D,Ot),mt(z.__webglFramebuffer,P,Ot,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Ot)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(rt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),Dt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)mt(z.__webglFramebuffer[lt],P,M,i.COLOR_ATTACHMENT0,rt,lt);else mt(z.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,rt,0);m(M)&&p(rt),e.unbindTexture()}P.depthBuffer&&Tt(P)}function Ht(P){const M=P.textures;for(let z=0,$=M.length;z<$;z++){const Z=M[z];if(m(Z)){const Y=A(P),vt=n.get(Z).__webglTexture;e.bindTexture(Y,vt),p(Y),e.unbindTexture()}}}const oe=[],N=[];function be(P){if(P.samples>0){if(Bt(P)===!1){const M=P.textures,z=P.width,$=P.height;let Z=i.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(P),rt=M.length>1;if(rt)for(let lt=0;lt<M.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let lt=0;lt<M.length;lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[lt]);const Ot=n.get(M[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,Z,i.NEAREST),l===!0&&(oe.length=0,N.length=0,oe.push(i.COLOR_ATTACHMENT0+lt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(oe.push(Y),N.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let lt=0;lt<M.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[lt]);const Ot=n.get(M[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function zt(P){return Math.min(s.maxSamples,P.samples)}function Bt(P){const M=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function wt(P){const M=o.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function Qt(P,M){const z=P.colorSpace,$=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Gi&&z!==An&&(Wt.getTransfer(z)===ee?($!==cn||Z!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Ct,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Bt}function H0(i,t){function e(n,s=An){let r;const o=Wt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Xc)return i.RGB;if(n===cn)return i.RGBA;if(n===qc)return i.LUMINANCE;if(n===Yc)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===gr)return i.RED;if(n===va)return i.RED_INTEGER;if(n===$c)return i.RG;if(n===_a)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===or)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ao||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Do||n===Lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Do)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Io||n===Uo||n===ko||n===No||n===Fo||n===Oo||n===zo||n===Bo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Io)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ar||n===Yo||n===$o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ar)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===jo||n===Ko||n===Zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class V0 extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G0={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const W0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
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

}`;class q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ge({vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new Je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends Wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,v=null;const x=new q0,m=e.getContextAttributes();let p=null,A=null;const w=[],_=[],S=new nt;let C=null;const E=new Oe;E.viewport=new ne;const R=new Oe;R.viewport=new ne;const y=[E,R],g=new V0;let T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=w[q];return tt===void 0&&(tt=new Zr,w[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=w[q];return tt===void 0&&(tt=new Zr,w[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=w[q];return tt===void 0&&(tt=new Zr,w[q]=tt),tt.getHandSpace()};function D(q){const tt=_.indexOf(q.inputSource);if(tt===-1)return;const mt=w[tt];mt!==void 0&&(mt.update(q.inputSource,q.frame,c||o),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",V);for(let q=0;q<w.length;q++){const tt=_[q];tt!==null&&(_[q]=null,w[q].disconnect(tt))}T=null,L=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,A=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",k),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new je(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,mt=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?li:Ui,mt=m.stencil?ai:oi);const Mt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new je(d.textureWidth,d.textureHeight,{format:cn,type:Ln,depthTexture:new Ea(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(q){for(let tt=0;tt<q.removed.length;tt++){const mt=q.removed[tt],it=_.indexOf(mt);it>=0&&(_[it]=null,w[it].disconnect(mt))}for(let tt=0;tt<q.added.length;tt++){const mt=q.added[tt];let it=_.indexOf(mt);if(it===-1){for(let Tt=0;Tt<w.length;Tt++)if(Tt>=_.length){_.push(mt),it=Tt;break}else if(_[Tt]===null){_[Tt]=mt,it=Tt;break}if(it===-1)break}const Mt=w[it];Mt&&Mt.connect(mt)}}const X=new I,j=new I;function G(q,tt,mt){X.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(mt.matrixWorld);const it=X.distanceTo(j),Mt=tt.projectionMatrix.elements,Tt=mt.projectionMatrix.elements,Ct=Mt[14]/(Mt[10]-1),se=Mt[14]/(Mt[10]+1),Ht=(Mt[9]+1)/Mt[5],oe=(Mt[9]-1)/Mt[5],N=(Mt[8]-1)/Mt[0],be=(Tt[8]+1)/Tt[0],zt=Ct*N,Bt=Ct*be,wt=it/(-N+be),Qt=wt*-N;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qt),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const bt=Ct+wt,P=se+wt,M=zt-Qt,z=Bt+(it-Qt),$=Ht*se/P*bt,Z=oe*se/P*bt;q.projectionMatrix.makePerspective(M,z,$,Z,bt,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,mt=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(mt=x.depthFar)),g.near=R.near=E.near=tt,g.far=R.far=E.far=mt,(T!==g.near||L!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),T=g.near,L=g.far),E.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,g.layers.mask=E.layers.mask|R.layers.mask;const it=q.parent,Mt=g.cameras;Q(g,it);for(let Tt=0;Tt<Mt.length;Tt++)Q(Mt[Tt],it);Mt.length===2?G(g,E,R):g.projectionMatrix.copy(E.projectionMatrix),at(q,g,it)};function at(q,tt,mt){mt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Bi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let gt=null;function Dt(q,tt){if(h=tt.getViewerPose(c||o),v=tt,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(A,f.framebuffer),t.setRenderTarget(A));let it=!1;mt.length!==g.cameras.length&&(g.cameras.length=0,it=!0);for(let Tt=0;Tt<mt.length;Tt++){const Ct=mt[Tt];let se=null;if(f!==null)se=f.getViewport(Ct);else{const oe=u.getViewSubImage(d,Ct);se=oe.viewport,Tt===0&&(t.setRenderTargetTextures(A,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(A))}let Ht=y[Tt];Ht===void 0&&(Ht=new Oe,Ht.layers.enable(Tt),Ht.viewport=new ne,y[Tt]=Ht),Ht.matrix.fromArray(Ct.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ct.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(se.x,se.y,se.width,se.height),Tt===0&&(g.matrix.copy(Ht.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),it===!0&&g.cameras.push(Ht)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const Tt=u.getDepthInformation(mt[0]);Tt&&Tt.isValid&&Tt.texture&&x.init(t,Tt,s.renderState)}}for(let mt=0;mt<w.length;mt++){const it=_[mt],Mt=w[mt];it!==null&&Mt!==void 0&&Mt.update(it,tt,c||o)}gt&&gt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),v=null}const Xt=new lh;Xt.setAnimationLoop(Dt),this.setAnimationLoop=function(q){gt=q},this.dispose=function(){}}}const Jn=new pn,$0=new Kt;function j0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=t.get(p),w=A.envMap,_=A.envMapRotation;w&&(m.envMap.value=w,Jn.copy(_),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),m.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(Jn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function K0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,w){const _=w.program;n.uniformBlockBinding(A,_)}function c(A,w){let _=s[A.id];_===void 0&&(v(A),_=h(A),s[A.id]=_,A.addEventListener("dispose",m));const S=w.program;n.updateUBOMapping(A,S);const C=t.render.frame;r[A.id]!==C&&(d(A),r[A.id]=C)}function h(A){const w=u();A.__bindingPointIndex=w;const _=i.createBuffer(),S=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,_),_}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const w=s[A.id],_=A.uniforms,S=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,E=_.length;C<E;C++){const R=Array.isArray(_[C])?_[C]:[_[C]];for(let y=0,g=R.length;y<g;y++){const T=R[y];if(f(T,C,y,S)===!0){const L=T.__offset,D=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let V=0;V<D.length;V++){const X=D[V],j=x(X);typeof X=="number"||typeof X=="boolean"?(T.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,L+k,T.__data)):X.isMatrix3?(T.__data[0]=X.elements[0],T.__data[1]=X.elements[1],T.__data[2]=X.elements[2],T.__data[3]=0,T.__data[4]=X.elements[3],T.__data[5]=X.elements[4],T.__data[6]=X.elements[5],T.__data[7]=0,T.__data[8]=X.elements[6],T.__data[9]=X.elements[7],T.__data[10]=X.elements[8],T.__data[11]=0):(X.toArray(T.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,w,_,S){const C=A.value,E=w+"_"+_;if(S[E]===void 0)return typeof C=="number"||typeof C=="boolean"?S[E]=C:S[E]=C.clone(),!0;{const R=S[E];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return S[E]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function v(A){const w=A.uniforms;let _=0;const S=16;for(let E=0,R=w.length;E<R;E++){const y=Array.isArray(w[E])?w[E]:[w[E]];for(let g=0,T=y.length;g<T;g++){const L=y[g],D=Array.isArray(L.value)?L.value:[L.value];for(let k=0,V=D.length;k<V;k++){const X=D[k],j=x(X),G=_%S,Q=G%j.boundary,at=G+Q;_+=Q,at!==0&&S-at<j.storage&&(_+=S-at),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=j.storage}}}const C=_%S;return C>0&&(_+=S-C),A.__size=_,A.__cache={},this}function x(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function m(A){const w=A.target;w.removeEventListener("dispose",m);const _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Z0{constructor(t={}){const{canvas:e=zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const A=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=Pn,this.toneMappingExposure=1;const _=this;let S=!1,C=0,E=0,R=null,y=-1,g=null;const T=new ne,L=new ne;let D=null;const k=new Ft(0);let V=0,X=e.width,j=e.height,G=1,Q=null,at=null;const gt=new ne(0,0,X,j),Dt=new ne(0,0,X,j);let Xt=!1;const q=new Sa;let tt=!1,mt=!1;const it=new Kt,Mt=new Kt,Tt=new I,Ct=new ne,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function oe(){return R===null?G:1}let N=n;function be(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fa}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),N===null){const F="webgl2";if(N=be(F,b),N===null)throw be(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let zt,Bt,wt,Qt,bt,P,M,z,$,Z,Y,vt,rt,lt,Ot,J,ft,At,Rt,pt,Gt,Pt,qt,U;function st(){zt=new nm(N),zt.init(),Pt=new H0(N,zt),Bt=new Kp(N,zt,t,Pt),wt=new O0(N,zt),Bt.reverseDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),Qt=new rm(N),bt=new b0,P=new B0(N,zt,wt,bt,Bt,Pt,Qt),M=new Jp(_),z=new em(_),$=new ud(N),qt=new $p(N,$),Z=new im(N,$,Qt,qt),Y=new am(N,Z,$,Qt),Rt=new om(N,Bt,P),J=new Zp(bt),vt=new S0(_,M,z,zt,Bt,qt,J),rt=new j0(_,bt),lt=new E0,Ot=new D0(zt),At=new Yp(_,M,z,wt,Y,f,l),ft=new N0(_,Y,Bt),U=new K0(N,Qt,Bt,wt),pt=new jp(N,zt,Qt),Gt=new sm(N,zt,Qt),Qt.programs=vt.programs,_.capabilities=Bt,_.extensions=zt,_.properties=bt,_.renderLists=lt,_.shadowMap=ft,_.state=wt,_.info=Qt}st();const W=new Y0(_,N);this.xr=W,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=zt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=zt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(X,j,!1))},this.getSize=function(b){return b.set(X,j)},this.setSize=function(b,F,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,j=F,e.width=Math.floor(b*G),e.height=Math.floor(F*G),B===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(X*G,j*G).floor()},this.setDrawingBufferSize=function(b,F,B){X=b,j=F,G=B,e.width=Math.floor(b*B),e.height=Math.floor(F*B),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,F,B,H){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,F,B,H),wt.viewport(T.copy(gt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Dt)},this.setScissor=function(b,F,B,H){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,F,B,H),wt.scissor(L.copy(Dt).multiplyScalar(G).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(b){wt.setScissorTest(Xt=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(b=!0,F=!0,B=!0){let H=0;if(b){let O=!1;if(R!==null){const et=R.texture.format;O=et===xa||et===_a||et===va}if(O){const et=R.texture.type,ht=et===Ln||et===oi||et===ps||et===ai||et===ma||et===ga,_t=At.getClearColor(),xt=At.getClearAlpha(),Lt=_t.r,Ut=_t.g,yt=_t.b;ht?(v[0]=Lt,v[1]=Ut,v[2]=yt,v[3]=xt,N.clearBufferuiv(N.COLOR,0,v)):(x[0]=Lt,x[1]=Ut,x[2]=yt,x[3]=xt,N.clearBufferiv(N.COLOR,0,x))}else H|=N.COLOR_BUFFER_BIT}F&&(H|=N.DEPTH_BUFFER_BIT),B&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),lt.dispose(),Ot.dispose(),bt.dispose(),M.dispose(),z.dispose(),Y.dispose(),qt.dispose(),U.dispose(),vt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Oa),W.removeEventListener("sessionend",za),qn.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Qt.autoReset,F=ft.enabled,B=ft.autoUpdate,H=ft.needsUpdate,O=ft.type;st(),Qt.autoReset=b,ft.enabled=F,ft.autoUpdate=B,ft.needsUpdate=H,ft.type=O}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const F=b.target;F.removeEventListener("dispose",It),he(F)}function he(b){we(b),bt.remove(b)}function we(b){const F=bt.get(b).programs;F!==void 0&&(F.forEach(function(B){vt.releaseProgram(B)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,B,H,O,et){F===null&&(F=se);const ht=O.isMesh&&O.matrixWorld.determinant()<0,_t=Gh(b,F,B,H,O);wt.setMaterial(H,ht);let xt=B.index,Lt=1;if(H.wireframe===!0){if(xt=Z.getWireframeAttribute(B),xt===void 0)return;Lt=2}const Ut=B.drawRange,yt=B.attributes.position;let Yt=Ut.start*Lt,re=(Ut.start+Ut.count)*Lt;et!==null&&(Yt=Math.max(Yt,et.start*Lt),re=Math.min(re,(et.start+et.count)*Lt)),xt!==null?(Yt=Math.max(Yt,0),re=Math.min(re,xt.count)):yt!=null&&(Yt=Math.max(Yt,0),re=Math.min(re,yt.count));const ae=re-Yt;if(ae<0||ae===1/0)return;qt.setup(O,H,_t,B,xt);let Fe,Zt=pt;if(xt!==null&&(Fe=$.get(xt),Zt=Gt,Zt.setIndex(Fe)),O.isMesh)H.wireframe===!0?(wt.setLineWidth(H.wireframeLinewidth*oe()),Zt.setMode(N.LINES)):Zt.setMode(N.TRIANGLES);else if(O.isLine){let St=H.linewidth;St===void 0&&(St=1),wt.setLineWidth(St*oe()),O.isLineSegments?Zt.setMode(N.LINES):O.isLineLoop?Zt.setMode(N.LINE_LOOP):Zt.setMode(N.LINE_STRIP)}else O.isPoints?Zt.setMode(N.POINTS):O.isSprite&&Zt.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Zt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const St=O._multiDrawStarts,_n=O._multiDrawCounts,Jt=O._multiDrawCount,tn=xt?$.get(xt).bytesPerElement:1,ui=bt.get(H).currentProgram.getUniforms();for(let He=0;He<Jt;He++)ui.setValue(N,"_gl_DrawID",He),Zt.render(St[He]/tn,_n[He])}else if(O.isInstancedMesh)Zt.renderInstances(Yt,ae,O.count);else if(B.isInstancedBufferGeometry){const St=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_n=Math.min(B.instanceCount,St);Zt.renderInstances(Yt,ae,_n)}else Zt.render(Yt,ae)};function te(b,F,B){b.transparent===!0&&b.side===Ye&&b.forceSinglePass===!1?(b.side=ze,b.needsUpdate=!0,xs(b,F,B),b.side=Xn,b.needsUpdate=!0,xs(b,F,B),b.side=Ye):xs(b,F,B)}this.compile=function(b,F,B=null){B===null&&(B=b),p=Ot.get(B),p.init(F),w.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==B&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const et=O.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const _t=et[ht];te(_t,B,O),H.add(_t)}else te(et,B,O),H.add(et)}),w.pop(),p=null,H},this.compileAsync=function(b,F,B=null){const H=this.compile(b,F,B);return new Promise(O=>{function et(){if(H.forEach(function(ht){bt.get(ht).currentProgram.isReady()&&H.delete(ht)}),H.size===0){O(b);return}setTimeout(et,10)}zt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Qe=null;function vn(b){Qe&&Qe(b)}function Oa(){qn.stop()}function za(){qn.start()}const qn=new lh;qn.setAnimationLoop(vn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(b){Qe=b,W.setAnimationLoop(b),b===null?qn.stop():qn.start()},W.addEventListener("sessionstart",Oa),W.addEventListener("sessionend",za),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(F),F=W.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,F,R),p=Ot.get(b,w.length),p.init(F),w.push(p),Mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Mt),mt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,mt),m=lt.get(b,A.length),m.init(),A.push(m),W.enabled===!0&&W.isPresenting===!0){const et=_.xr.getDepthSensingMesh();et!==null&&br(et,F,-1/0,_.sortObjects)}br(b,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,at),Ht=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ht&&At.addToRenderList(m,b),this.info.render.frame++,tt===!0&&J.beginShadows();const B=p.state.shadowsArray;ft.render(B,b,F),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const et=F.cameras;if(O.length>0)for(let ht=0,_t=et.length;ht<_t;ht++){const xt=et[ht];Ha(H,O,b,xt)}Ht&&At.render(b);for(let ht=0,_t=et.length;ht<_t;ht++){const xt=et[ht];Ba(m,b,xt,xt.viewport)}}else O.length>0&&Ha(H,O,b,F),Ht&&At.render(b),Ba(m,b,F);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,F),qt.resetDefaultState(),y=-1,g=null,w.pop(),w.length>0?(p=w[w.length-1],tt===!0&&J.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function br(b,F,B,H){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){H&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Mt);const ht=Y.update(b),_t=b.material;_t.visible&&m.push(b,ht,_t,B,Ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const ht=Y.update(b),_t=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ct.copy(ht.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(Mt)),Array.isArray(_t)){const xt=ht.groups;for(let Lt=0,Ut=xt.length;Lt<Ut;Lt++){const yt=xt[Lt],Yt=_t[yt.materialIndex];Yt&&Yt.visible&&m.push(b,ht,Yt,B,Ct.z,yt)}}else _t.visible&&m.push(b,ht,_t,B,Ct.z,null)}}const et=b.children;for(let ht=0,_t=et.length;ht<_t;ht++)br(et[ht],F,B,H)}function Ba(b,F,B,H){const O=b.opaque,et=b.transmissive,ht=b.transparent;p.setupLightsView(B),tt===!0&&J.setGlobalState(_.clippingPlanes,B),H&&wt.viewport(T.copy(H)),O.length>0&&_s(O,F,B),et.length>0&&_s(et,F,B),ht.length>0&&_s(ht,F,B),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ha(b,F,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new je(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?hn:Ln,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const et=p.state.transmissionRenderTarget[H.id],ht=H.viewport||T;et.setSize(ht.z,ht.w);const _t=_.getRenderTarget();_.setRenderTarget(et),_.getClearColor(k),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Ht&&At.render(B);const xt=_.toneMapping;_.toneMapping=Pn;const Lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),tt===!0&&J.setGlobalState(_.clippingPlanes,H),_s(b,B,H),P.updateMultisampleRenderTarget(et),P.updateRenderTargetMipmap(et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let yt=0,Yt=F.length;yt<Yt;yt++){const re=F[yt],ae=re.object,Fe=re.geometry,Zt=re.material,St=re.group;if(Zt.side===Ye&&ae.layers.test(H.layers)){const _n=Zt.side;Zt.side=ze,Zt.needsUpdate=!0,Va(ae,B,H,Fe,Zt,St),Zt.side=_n,Zt.needsUpdate=!0,Ut=!0}}Ut===!0&&(P.updateMultisampleRenderTarget(et),P.updateRenderTargetMipmap(et))}_.setRenderTarget(_t),_.setClearColor(k,V),Lt!==void 0&&(H.viewport=Lt),_.toneMapping=xt}function _s(b,F,B){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,et=b.length;O<et;O++){const ht=b[O],_t=ht.object,xt=ht.geometry,Lt=H===null?ht.material:H,Ut=ht.group;_t.layers.test(B.layers)&&Va(_t,F,B,xt,Lt,Ut)}}function Va(b,F,B,H,O,et){b.onBeforeRender(_,F,B,H,O,et),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(_,F,B,H,b,et),O.transparent===!0&&O.side===Ye&&O.forceSinglePass===!1?(O.side=ze,O.needsUpdate=!0,_.renderBufferDirect(B,F,H,O,b,et),O.side=Xn,O.needsUpdate=!0,_.renderBufferDirect(B,F,H,O,b,et),O.side=Ye):_.renderBufferDirect(B,F,H,O,b,et),b.onAfterRender(_,F,B,H,O,et)}function xs(b,F,B){F.isScene!==!0&&(F=se);const H=bt.get(b),O=p.state.lights,et=p.state.shadowsArray,ht=O.state.version,_t=vt.getParameters(b,O.state,et,F,B),xt=vt.getProgramCacheKey(_t);let Lt=H.programs;H.environment=b.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(b.isMeshStandardMaterial?z:M).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",It),Lt=new Map,H.programs=Lt);let Ut=Lt.get(xt);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===ht)return Wa(b,_t),Ut}else _t.uniforms=vt.getUniforms(b),b.onBeforeCompile(_t,_),Ut=vt.acquireProgram(_t,xt),Lt.set(xt,Ut),H.uniforms=_t.uniforms;const yt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(yt.clippingPlanes=J.uniform),Wa(b,_t),H.needsLights=Xh(b),H.lightsStateVersion=ht,H.needsLights&&(yt.ambientLightColor.value=O.state.ambient,yt.lightProbe.value=O.state.probe,yt.directionalLights.value=O.state.directional,yt.directionalLightShadows.value=O.state.directionalShadow,yt.spotLights.value=O.state.spot,yt.spotLightShadows.value=O.state.spotShadow,yt.rectAreaLights.value=O.state.rectArea,yt.ltc_1.value=O.state.rectAreaLTC1,yt.ltc_2.value=O.state.rectAreaLTC2,yt.pointLights.value=O.state.point,yt.pointLightShadows.value=O.state.pointShadow,yt.hemisphereLights.value=O.state.hemi,yt.directionalShadowMap.value=O.state.directionalShadowMap,yt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,yt.spotShadowMap.value=O.state.spotShadowMap,yt.spotLightMatrix.value=O.state.spotLightMatrix,yt.spotLightMap.value=O.state.spotLightMap,yt.pointShadowMap.value=O.state.pointShadowMap,yt.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ut,H.uniformsList=null,Ut}function Ga(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=lr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Wa(b,F){const B=bt.get(b);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.batchingColor=F.batchingColor,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.instancingMorph=F.instancingMorph,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function Gh(b,F,B,H,O){F.isScene!==!0&&(F=se),P.resetTextureUnits();const et=F.fog,ht=H.isMeshStandardMaterial?F.environment:null,_t=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gi,xt=(H.isMeshStandardMaterial?z:M).get(H.envMap||ht),Lt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),yt=!!B.morphAttributes.position,Yt=!!B.morphAttributes.normal,re=!!B.morphAttributes.color;let ae=Pn;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ae=_.toneMapping);const Fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=Fe!==void 0?Fe.length:0,St=bt.get(H),_n=p.state.lights;if(tt===!0&&(mt===!0||b!==g)){const Ke=b===g&&H.id===y;J.setState(H,b,Ke)}let Jt=!1;H.version===St.__version?(St.needsLights&&St.lightsStateVersion!==_n.state.version||St.outputColorSpace!==_t||O.isBatchedMesh&&St.batching===!1||!O.isBatchedMesh&&St.batching===!0||O.isBatchedMesh&&St.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&St.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&St.instancing===!1||!O.isInstancedMesh&&St.instancing===!0||O.isSkinnedMesh&&St.skinning===!1||!O.isSkinnedMesh&&St.skinning===!0||O.isInstancedMesh&&St.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&St.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&St.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&St.instancingMorph===!1&&O.morphTexture!==null||St.envMap!==xt||H.fog===!0&&St.fog!==et||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==J.numPlanes||St.numIntersection!==J.numIntersection)||St.vertexAlphas!==Lt||St.vertexTangents!==Ut||St.morphTargets!==yt||St.morphNormals!==Yt||St.morphColors!==re||St.toneMapping!==ae||St.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,St.__version=H.version);let tn=St.currentProgram;Jt===!0&&(tn=xs(H,F,O));let ui=!1,He=!1,ji=!1;const le=tn.getUniforms(),un=St.uniforms;if(wt.useProgram(tn.program)&&(ui=!0,He=!0,ji=!0),H.id!==y&&(y=H.id,He=!0),ui||g!==b){wt.buffers.depth.getReversed()?(it.copy(b.projectionMatrix),Hu(it),Vu(it),le.setValue(N,"projectionMatrix",it)):le.setValue(N,"projectionMatrix",b.projectionMatrix),le.setValue(N,"viewMatrix",b.matrixWorldInverse);const In=le.map.cameraPosition;In!==void 0&&In.setValue(N,Tt.setFromMatrixPosition(b.matrixWorld)),Bt.logarithmicDepthBuffer&&le.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&le.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),g!==b&&(g=b,He=!0,ji=!0)}if(O.isSkinnedMesh){le.setOptional(N,O,"bindMatrix"),le.setOptional(N,O,"bindMatrixInverse");const Ke=O.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),le.setValue(N,"boneTexture",Ke.boneTexture,P))}O.isBatchedMesh&&(le.setOptional(N,O,"batchingTexture"),le.setValue(N,"batchingTexture",O._matricesTexture,P),le.setOptional(N,O,"batchingIdTexture"),le.setValue(N,"batchingIdTexture",O._indirectTexture,P),le.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&le.setValue(N,"batchingColorTexture",O._colorsTexture,P));const Ki=B.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Rt.update(O,B,tn),(He||St.receiveShadow!==O.receiveShadow)&&(St.receiveShadow=O.receiveShadow,le.setValue(N,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(un.envMap.value=xt,un.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(un.envMapIntensity.value=F.environmentIntensity),He&&(le.setValue(N,"toneMappingExposure",_.toneMappingExposure),St.needsLights&&Wh(un,ji),et&&H.fog===!0&&rt.refreshFogUniforms(un,et),rt.refreshMaterialUniforms(un,H,G,j,p.state.transmissionRenderTarget[b.id]),lr.upload(N,Ga(St),un,P)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(lr.upload(N,Ga(St),un,P),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&le.setValue(N,"center",O.center),le.setValue(N,"modelViewMatrix",O.modelViewMatrix),le.setValue(N,"normalMatrix",O.normalMatrix),le.setValue(N,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ke=H.uniformsGroups;for(let In=0,Un=Ke.length;In<Un;In++){const Xa=Ke[In];U.update(Xa,tn),U.bind(Xa,tn)}}return tn}function Wh(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Xh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,F,B){bt.get(b.texture).__webglTexture=F,bt.get(b.depthTexture).__webglTexture=B;const H=bt.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const B=bt.get(b);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,B=0){R=b,C=F,E=B;let H=!0,O=null,et=!1,ht=!1;if(b){const xt=bt.get(b);if(xt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(xt.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(xt.__hasExternalTextures)P.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const yt=b.depthTexture;if(xt.__boundDepthTexture!==yt){if(yt!==null&&bt.has(yt)&&(b.width!==yt.image.width||b.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);const Ut=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?O=Ut[F][B]:O=Ut[F],et=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?O=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?O=Ut[B]:O=Ut,T.copy(b.viewport),L.copy(b.scissor),D=b.scissorTest}else T.copy(gt).multiplyScalar(G).floor(),L.copy(Dt).multiplyScalar(G).floor(),D=Xt;if(wt.bindFramebuffer(N.FRAMEBUFFER,O)&&H&&wt.drawBuffers(b,O),wt.viewport(T),wt.scissor(L),wt.setScissorTest(D),et){const xt=bt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,xt.__webglTexture,B)}else if(ht){const xt=bt.get(b.texture),Lt=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,Lt)}y=-1},this.readRenderTargetPixels=function(b,F,B,H,O,et,ht){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){wt.bindFramebuffer(N.FRAMEBUFFER,_t);try{const xt=b.texture,Lt=xt.format,Ut=xt.type;if(!Bt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-H&&B>=0&&B<=b.height-O&&N.readPixels(F,B,H,O,Pt.convert(Lt),Pt.convert(Ut),et)}finally{const xt=R!==null?bt.get(R).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(b,F,B,H,O,et,ht){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){const xt=b.texture,Lt=xt.format,Ut=xt.type;if(!Bt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-H&&B>=0&&B<=b.height-O){wt.bindFramebuffer(N.FRAMEBUFFER,_t);const yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(F,B,H,O,Pt.convert(Lt),Pt.convert(Ut),0);const Yt=R!==null?bt.get(R).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,Yt);const re=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Bu(N,re,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(yt),N.deleteSync(re),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,B=0){b.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-B),O=Math.floor(b.image.width*H),et=Math.floor(b.image.height*H),ht=F!==null?F.x:0,_t=F!==null?F.y:0;P.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ht,_t,O,et),wt.unbindTexture()},this.copyTextureToTexture=function(b,F,B=null,H=null,O=0){b.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,B=null);let et,ht,_t,xt,Lt,Ut,yt,Yt,re;const ae=b.isCompressedTexture?b.mipmaps[O]:b.image;B!==null?(et=B.max.x-B.min.x,ht=B.max.y-B.min.y,_t=B.isBox3?B.max.z-B.min.z:1,xt=B.min.x,Lt=B.min.y,Ut=B.isBox3?B.min.z:0):(et=ae.width,ht=ae.height,_t=ae.depth||1,xt=0,Lt=0,Ut=0),H!==null?(yt=H.x,Yt=H.y,re=H.z):(yt=0,Yt=0,re=0);const Fe=Pt.convert(F.format),Zt=Pt.convert(F.type);let St;F.isData3DTexture?(P.setTexture3D(F,0),St=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),St=N.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const _n=N.getParameter(N.UNPACK_ROW_LENGTH),Jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),tn=N.getParameter(N.UNPACK_SKIP_PIXELS),ui=N.getParameter(N.UNPACK_SKIP_ROWS),He=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ut);const ji=b.isDataArrayTexture||b.isData3DTexture,le=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const un=bt.get(b),Ki=bt.get(F),Ke=bt.get(un.__renderTarget),In=bt.get(Ki.__renderTarget);wt.bindFramebuffer(N.READ_FRAMEBUFFER,Ke.__webglFramebuffer),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Un=0;Un<_t;Un++)ji&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.get(b).__webglTexture,O,Ut+Un),b.isDepthTexture?(le&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.get(F).__webglTexture,O,re+Un),N.blitFramebuffer(xt,Lt,et,ht,yt,Yt,et,ht,N.DEPTH_BUFFER_BIT,N.NEAREST)):le?N.copyTexSubImage3D(St,O,yt,Yt,re+Un,xt,Lt,et,ht):N.copyTexSubImage2D(St,O,yt,Yt,re+Un,xt,Lt,et,ht);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else le?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(St,O,yt,Yt,re,et,ht,_t,Fe,Zt,ae.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(St,O,yt,Yt,re,et,ht,_t,Fe,ae.data):N.texSubImage3D(St,O,yt,Yt,re,et,ht,_t,Fe,Zt,ae):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,yt,Yt,et,ht,Fe,Zt,ae.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,yt,Yt,ae.width,ae.height,Fe,ae.data):N.texSubImage2D(N.TEXTURE_2D,O,yt,Yt,et,ht,Fe,Zt,ae);N.pixelStorei(N.UNPACK_ROW_LENGTH,_n),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ui),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He),O===0&&F.generateMipmaps&&N.generateMipmap(St),wt.unbindTexture()},this.copyTextureToTexture3D=function(b,F,B=null,H=null,O=0){return b.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,B,H,O)},this.initRenderTarget=function(b){bt.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),wt.unbindTexture()},this.resetState=function(){C=0,E=0,R=null,wt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class Ta{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new Ta(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class J0 extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fh extends Ce{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ne,h=Ne,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ti=new Kt,Xl=new Kt,Hs=[],ql=new ci,Q0=new Kt,es=new dt,ns=new Yi;class tg extends dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Q0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),ql.copy(t.boundingBox).applyMatrix4(Ti),this.boundingBox.union(ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),ns.copy(t.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),t.ray.intersectsSphere(ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ti),Xl.multiplyMatrices(n,Ti),es.matrixWorld=Xl,es.raycast(t,Hs);for(let o=0,a=Hs.length;o<a;o++){const l=Hs[o];l.instanceId=r,l.object=this,e.push(l)}Hs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(s*this.count),s,this.count,gr,ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Aa extends mn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yl=new Kt,Qo=new th,Vs=new Yi,Gs=new I;class ph extends de{constructor(t=new Me,e=new Aa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;Yl.copy(s).invert(),Qo.copy(t.ray).applyMatrix4(Yl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=d,x=f;v<x;v++){const m=c.getX(v);Gs.fromBufferAttribute(u,m),$l(Gs,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let v=d,x=f;v<x;v++)Gs.fromBufferAttribute(u,v),$l(Gs,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $l(i,t,e,n,s,r,o){const a=Qo.distanceSqToPoint(i);if(a<e){const l=new I;Qo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ra extends Ce{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,l=new Kt;for(let f=0;f<=t;f++){const v=f/t;s[f]=this.getTangentAt(v,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,v))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ca extends gn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class eg extends Ca{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pa(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ws=new I,Jr=new Pa,Qr=new Pa,to=new Pa;class mh extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ws.subVectors(s[0],s[1]).add(s[0]),c=Ws);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ws.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ws),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Jr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,v,x,m),Qr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,v,x,m),to.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,v,x,m)}else this.curveType==="catmullrom"&&(Jr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Qr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),to.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Jr.calc(l),Qr.calc(l),to.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ng(i,t){const e=1-i;return e*e*t}function ig(i,t){return 2*(1-i)*i*t}function sg(i,t){return i*i*t}function cs(i,t,e,n){return ng(i,t)+ig(i,e)+sg(i,n)}function rg(i,t){const e=1-i;return e*e*e*t}function og(i,t){const e=1-i;return 3*e*e*i*t}function ag(i,t){return 3*(1-i)*i*i*t}function lg(i,t){return i*i*i*t}function hs(i,t,e,n,s){return rg(i,t)+og(i,e)+ag(i,n)+lg(i,s)}class gh extends gn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,s.x,r.x,o.x,a.x),hs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cg extends gn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,s.x,r.x,o.x,a.x),hs(t,s.y,r.y,o.y,a.y),hs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vh extends gn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hg extends gn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _h extends gn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(cs(t,s.x,r.x,o.x),cs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xh extends gn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(cs(t,s.x,r.x,o.x),cs(t,s.y,r.y,o.y),cs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yh extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(jl(a,l.x,c.x,h.x,u.x),jl(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var ta=Object.freeze({__proto__:null,ArcCurve:eg,CatmullRomCurve3:mh,CubicBezierCurve:gh,CubicBezierCurve3:cg,EllipseCurve:Ca,LineCurve:vh,LineCurve3:hg,QuadraticBezierCurve:_h,QuadraticBezierCurve3:xh,SplineCurve:yh});class ug extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ta[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ta[s.type]().fromJSON(s))}return this}}class dg extends ug{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vh(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new _h(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new gh(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ca(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class xr extends Me{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,d=new nt,f=new I,v=new I,x=new I;let m=0,p=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:m=t[A+1].x-t[A].x,p=t[A+1].y-t[A].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[A+1].x-t[A].x,p=t[A+1].y-t[A].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(v)}for(let A=0;A<=e;A++){const w=n+A*h*s,_=Math.sin(w),S=Math.cos(w);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*_,u.y=t[C].y,u.z=t[C].x*S,o.push(u.x,u.y,u.z),d.x=A/e,d.y=C/(t.length-1),a.push(d.x,d.y);const E=l[3*C+0]*_,R=l[3*C+1],y=l[3*C+0]*S;c.push(E,R,y)}}for(let A=0;A<e;A++)for(let w=0;w<t.length-1;w++){const _=w+A*t.length,S=_,C=_+t.length,E=_+t.length+1,R=_+1;r.push(S,C,R),r.push(E,R,C)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.points,t.segments,t.phiStart,t.phiLength)}}class ms extends xr{constructor(t=1,e=1,n=4,s=8){const r=new dg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ms(t.radius,t.length,t.capSegments,t.radialSegments)}}class Da extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $e extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let v=0;const x=[],m=n/2;let p=0;A(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function A(){const _=new I,S=new I;let C=0;const E=(e-t)/n;for(let R=0;R<=r;R++){const y=[],g=R/r,T=g*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,k=D*l+a,V=Math.sin(k),X=Math.cos(k);S.x=T*V,S.y=-g*n+m,S.z=T*X,u.push(S.x,S.y,S.z),_.set(V,E,X).normalize(),d.push(_.x,_.y,_.z),f.push(D,1-g),y.push(v++)}x.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){const g=x[y][R],T=x[y+1][R],L=x[y+1][R+1],D=x[y][R+1];(t>0||y!==0)&&(h.push(g,T,D),C+=3),(e>0||y!==r-1)&&(h.push(T,L,D),C+=3)}c.addGroup(p,C,0),p+=C}function w(_){const S=v,C=new nt,E=new I;let R=0;const y=_===!0?t:e,g=_===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*g,0),d.push(0,g,0),f.push(.5,.5),v++;const T=v;for(let L=0;L<=s;L++){const k=L/s*l+a,V=Math.cos(k),X=Math.sin(k);E.x=y*X,E.y=m*g,E.z=y*V,u.push(E.x,E.y,E.z),d.push(0,g,0),C.x=V*.5+.5,C.y=X*.5*g+.5,f.push(C.x,C.y),v++}for(let L=0;L<s;L++){const D=S+L,k=T+L;_===!0?h.push(k,k+1,D):h.push(k+1,k,D),R+=3}c.addGroup(p,R,_===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class me extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],v=[],x=[],m=[];for(let p=0;p<=n;p++){const A=[],w=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const C=S/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+w*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+_,1-w),A.push(c++)}h.push(A)}for(let p=0;p<n;p++)for(let A=0;A<e;A++){const w=h[p][A+1],_=h[p][A],S=h[p+1][A],C=h[p+1][A+1];(p!==0||o>0)&&f.push(w,_,C),(p!==n-1||l<Math.PI)&&f.push(_,S,C)}this.setIndex(f),this.setAttribute("position",new ie(v,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gs extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let v=0;v<=s;v++){const x=v/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=s;v++){const x=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,p=(s+1)*(f-1)+v,A=(s+1)*f+v;o.push(x,m,A),o.push(m,p,A)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class La extends Me{constructor(t=new xh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new nt;let h=new I;const u=[],d=[],f=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function x(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),A(),p()}function m(w){h=t.getPointAt(w/e,h);const _=o.normals[w],S=o.binormals[w];for(let C=0;C<=s;C++){const E=C/s*Math.PI*2,R=Math.sin(E),y=-Math.cos(E);l.x=y*_.x+R*S.x,l.y=y*_.y+R*S.y,l.z=y*_.z+R*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){const S=(s+1)*(w-1)+(_-1),C=(s+1)*w+(_-1),E=(s+1)*w+_,R=(s+1)*(w-1)+_;v.push(S,C,R),v.push(C,E,R)}}function A(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)c.x=w/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new La(new ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class fg extends ge{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ce extends mn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pg extends mn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class vs extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mg extends vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const eo=new Kt,Kl=new I,Zl=new I;class Ia{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),Zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zl),e.updateMatrixWorld(),eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gg extends Ia{constructor(){super(new Oe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Bi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ea extends vs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Jl=new Kt,is=new I,no=new I;class vg extends Ia{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),is.setFromMatrixPosition(t.matrixWorld),n.position.copy(is),no.copy(n.position),no.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(no),n.updateMatrixWorld(),s.makeTranslation(-is.x,-is.y,-is.z),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}}class na extends vs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _g extends Ia{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xg extends vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new _g}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yg extends vs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ql();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ql(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);function Sg(i,t,e,n){return!(t<=0||i>=t||e<n)}const bg={step:{cap:1,gap:.2},stepMonster:{cap:1,gap:.24},door:{cap:1,gap:.28},doorSlam:{cap:1,gap:.4},whisper:{cap:1,gap:7},scream:{cap:1,gap:14},growl:{cap:1,gap:1.6},sting:{cap:1,gap:1.4},flash:{cap:1,gap:.12},click:{cap:2,gap:.04},creak:{cap:1,gap:.45},thunder:{cap:1,gap:8},metallic:{cap:1,gap:2},shadow:{cap:1,gap:8},deep:{cap:1,gap:3}},ia={step:"fodtrin-gaaende.mp3",flash:"lommelygte-taend-sluk.mp3",metallic:"metallic.mp3",scream:"skrig.mp3",shadow:"pludselig-skygge-monster.mp3",deep:"dyb-lyd.mp3",bed:"baggrundslyd-hele-tiden-i-lav.mp3"};new Set(Object.keys(ia));function wg(i){return new URL(`assets/audio/${i}`,document.baseURI).href}function Eg(i,t){const e=i.length/Math.max(1,t);if(e<.05||i.length<8)return[{start:0,end:e}];const n=Math.max(1,Math.floor(t*.01)),s=Math.max(n,Math.floor(t*.02)),r=[];for(let l=0;l+s<=i.length;l+=n){let c=0;for(let h=0;h<s;h++){const u=i[l+h];c+=u*u}r.push(Math.sqrt(c/s))}const o=[],a=8;for(let l=0;l<r.length;l++){if(r[l]<.08)continue;let c=!1;const h=Math.max(0,l-a),u=Math.min(r.length-1,l+a);for(let f=h;f<=u;f++)if(r[f]>r[l]){c=!0;break}if(c)continue;const d=l*n/t;o.length&&d-o[o.length-1]<.28||o.push(d)}return r.length&&r[0]>=.08&&(o.length===0||o[0]>.2)&&o.unshift(0),o.length<2?Tg(e):o.map((l,c)=>{const h=Math.max(0,l-.028),u=o[c+1]??l+.42,d=Math.min(e,Math.max(l+.16,Math.min(l+.4,u-.02)));return{start:h,end:Math.max(h+.08,d)}})}function Tg(i){const t=[];for(let n=0;n+.1<i;n+=.36)t.push({start:n,end:Math.min(i,n+.36)});return t.length||t.push({start:0,end:Math.min(i,.4)}),t}function Ag(i,t,e=.008){const n=Math.min(Math.floor(t*e),Math.floor(i.length/3));if(!(n<2))for(let s=0;s<n;s++){const r=s/n;i[s]*=r,i[i.length-1-s]*=r}}function Rg(i,t,e=.02){const n=Math.min(Math.floor(t*e),Math.floor(i.length/8));if(n<8)return;const s=i[0];for(let r=0;r<n;r++){const o=(r+1)/n,a=i.length-n+r;i[a]=i[a]*(1-o)+s*o}}function Cg(i){let t=0;for(let e=0;e<i.length;e++){const n=Math.abs(i[e]);n>t&&(t=n)}return t}function Pg(i){if(!i.length)return 0;let t=0;const e=Math.max(1,Math.floor(i.length/2e5));let n=0;for(let s=0;s<i.length;s+=e){const r=i[s];t+=r*r,n++}return Math.sqrt(t/Math.max(1,n))}const tc=new Set(["scream","shadow","deep","metallic"]),io={step:"step",stepMonster:"step",flash:"flash",metallic:"metallic",scream:"scream",shadow:"shadow",deep:"deep"};class Dg{ctx=null;master=null;bedGain=null;stepGain=null;sfxGain=null;scareGain=null;analyser=null;buffers=new Map;slices=[];bed=null;bedRunning=!1;bedBase=.4;prevState="";queue=[];voices=[];lastPlayed=new Map;lastPan=null;listenPos={x:0,y:0,z:0};listenRight={x:-1,z:0};moving=!1;trace=[];failures=[];masterVol=.8;musicVol=.7;sfxVol=.85;muted=!1;ensure(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;if(!t){this.fail("Ingen AudioContext i denne browser");return}const e=new t;this.ctx=e;const n=e.createGain(),s=e.createGain(),r=e.createGain(),o=e.createGain(),a=e.createGain(),l=e.createDynamicsCompressor();l.threshold.value=-3,l.knee.value=6,l.ratio.value=12,l.attack.value=.003,l.release.value=.08;const c=e.createAnalyser();c.fftSize=2048,c.channelCount=1,c.channelCountMode="explicit",c.channelInterpretation="speakers",s.connect(n),r.connect(n),o.connect(n),a.connect(n),n.connect(c),n.connect(l),l.connect(e.destination),this.master=n,this.bedGain=s,this.stepGain=r,this.sfxGain=o,this.scareGain=a,this.analyser=c,this.applyGains(),this.buffers.set("tap",Ig(e)),this.prevState=e.state,e.onstatechange=()=>{const h=e.state;this.mark(`state:${h}`),h==="running"&&this.prevState!=="running"&&(this.bedRunning=!1,this.ensureBed(),this.flush()),h!=="running"&&(this.bedRunning=!1,this.stopBed()),this.prevState=h},this.loadClips()}resume(){this.ensure();const t=this.ctx;if(!t)return Promise.resolve();const e=t.resume();return this.mark(`resume:${t.state}`),e.then(()=>{this.mark(`state:${t.state}`),t.state==="running"&&(this.ensureBed(),this.flush())})}async loadClips(){this.ensure();const t=this.ctx;t&&await Promise.all(Object.keys(ia).map(async e=>{const n=ia[e];try{const s=await fetch(wg(n));if(!s.ok)throw new Error(`HTTP ${s.status} ${s.headers.get("content-type")??""}`);const r=await s.arrayBuffer();if(r.byteLength<64)throw new Error(`tom fil (${r.byteLength} bytes)`);const o=await t.decodeAudioData(r.slice(0));if(o.length<32)throw new Error("decode gav stilhed");if(e==="bed"){for(let a=0;a<o.numberOfChannels;a++)Rg(o.getChannelData(a),o.sampleRate);this.buffers.set("bed",o),this.tuneBed(),this.bedRunning=!1,this.ensureBed()}else e==="step"?(this.buffers.set("step",o),this.slices=this.cutSteps(o),this.mark(`steps:${this.slices.length}`)):this.buffers.set(e,o);this.mark(`load-ok:${n}`),this.flush()}catch(s){const r=s instanceof Error?s.message:String(s);this.fail(`${n}: ${r}`),this.mark(`load-fail:${n}`)}}))}setLocomotion(t,e,n){if(this.ensure(),!t){this.moving&&(this.moving=!1,this.mark("step-stop"));return}this.moving||(this.moving=!0,this.mark("step-start"),this.playFootstep(e,n))}playFootstep(t,e){this.ensure();const n=this.ctx;if(!n||n.state!=="running"||!this.slices.length){this.enqueue({kind:"step",volume:e?.55:t?1.15:1});return}const s=this.slices[Math.floor(Math.random()*this.slices.length)],r=so(s),o=(e?.09:t?.2:.15)*(.92+Math.random()*.16),a=Math.min(3,o/Math.max(.02,r*this.sfxVol*this.masterVol)),l=.97+Math.random()*.06;this.fire(s,this.stepGain,a,l,void 0,!1),this.mark("step")}play(t,e,n){this.ensure(),n?.rate;const s=n?.volume??1,r=this.ctx,o=io[t];if(o&&o!=="step"&&!this.buffers.get(o)){this.enqueue({kind:t,pos:e,volume:s}),this.mark(`defer:${t}`);return}if(!r||r.state!=="running"){this.enqueue({kind:t,pos:e,volume:s}),this.mark(`defer:${t}`);return}if(t==="step"||t==="stepMonster"){this.playFootstep(t==="stepMonster",!1),t==="stepMonster"&&this.mark("stepMonster");return}this.emit(t,e,s,!!n?.occluded)}playTracked(t,e){this.play(t,e,{volume:1})}moveTracked(t){const e=this.lastPan;if(!e)return;const n=this.panOf(t);e.pan.value=n}hush(t=2){const e=this.ctx,n=this.bedGain;if(!e||!n||e.state!=="running")return;const s=e.currentTime;n.gain.cancelScheduledValues(s),n.gain.setValueAtTime(Math.max(1e-4,n.gain.value),s),n.gain.linearRampToValueAtTime(Math.max(1e-4,this.bedBase*.6),s+.05),n.gain.linearRampToValueAtTime(this.bedBase,s+Math.max(.4,t)),this.mark("hush")}setVolumes(t,e,n){this.masterVol=t,this.musicVol=e,this.sfxVol=n,this.tuneBed(),this.applyGains()}duck(t){this.muted=t,this.applyGains()}setListener(t,e,n){this.listenPos=t;const s=Math.hypot(e.x,e.z)||1;this.listenRight={x:-e.z/s,z:e.x/s}}setTension(t,e){}setHeartbeat(t){}setBreath(t){}setHum(t,e){}setRadio(t,e){}setZone(t){}update(t){}debug(){return{state:this.ctx?.state??"none",voices:this.voices.filter(t=>t.until>performance.now()/1e3).length,sampleRate:this.ctx?.sampleRate??0,last:this.trace.slice(-8),failures:this.failures.slice()}}sampleMix(t){this.ensure();const e=this.ctx,n=this.analyser;if(!e||!n)return Promise.resolve({peak:0,jumps:0,state:"none"});e.resume();const s=new Float32Array(n.fftSize);let r=0,o=0;const a=performance.now();return new Promise(l=>{const c=()=>{n.getFloatTimeDomainData(s);let h=s[0]??0;for(let u=0;u<s.length;u++){const d=s[u]??0,f=Math.abs(d);f>r&&(r=f),u>0&&Math.abs(d-h)>.5&&o++,h=d}performance.now()-a<t?setTimeout(c,16):l({peak:r,jumps:o,state:e.state})};c()})}async measureBed(){await this.resume();const t=this.ctx;return!t||t.state!=="running"?{rms:0,peak:0,state:t?.state??"none"}:(this.ensureBed(),{...await this.capture(900),state:t.state})}async audition(t){await this.resume();const e=this.ctx;if(!e||e.state!=="running")return{rms:0,peak:0,state:e?.state??"none",played:!1};const n=this.bedGain,s=this.bedBase;n&&(n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(0,e.currentTime)),await Ug(90);const r=this.trace.length;t==="step"?this.playFootstep(!1,!1):this.play(t,void 0,{volume:1});const o=this.trace.length>r&&!this.trace[this.trace.length-1].startsWith("defer:"),a=t==="flash"||t==="step"?550:1400,l=await this.capture(a);return n&&(n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(s,e.currentTime)),{...l,state:e.state,played:o}}emit(t,e,n,s){const r=this.ctx;if(!r||r.state!=="running"){this.enqueue({kind:t,pos:e,volume:n});return}const o=tc.has(t),a=o?1:this.sfxVol;if(!o){const x=performance.now()/1e3;this.voices=this.voices.filter(w=>w.until>x);const m=bg[t]??{cap:2,gap:.05},p=x-(this.lastPlayed.get(t)??-999),A=this.voices.filter(w=>w.kind===t).length;if(!Sg(A,m.cap,p,m.gap))return}const l=io[t];let c;if(l&&l!=="step"){if(c=this.buffers.get(l),!c){this.enqueue({kind:t,pos:e,volume:n}),this.mark(`defer:${t}`);return}}else c=this.buffers.get("tap");if(!c){this.enqueue({kind:t,pos:e,volume:n}),this.fail(`ingen buffer til ${t}`);return}const h=so(c),u=o?this.scareGain:this.sfxGain,d=(o?.52:t==="flash"?.28:.12)*Math.max(.35,Math.min(1.4,n)),f=Math.min(8,d/Math.max(.01,h*a*Math.max(.2,this.masterVol))),v=this.fire(c,u,f*(s?.8:1),1,e,o);if(!o&&v){const x=performance.now()/1e3;this.lastPlayed.set(t,x),this.voices.push({kind:t,until:x+c.duration})}this.mark(t)}fire(t,e,n,s,r,o){const a=this.ctx;if(!a||!e||a.state!=="running")return!1;const l=a.currentTime,c=a.createBufferSource();c.buffer=t,c.playbackRate.value=s;const h=a.createGain(),u=Math.max(.05,t.duration/s),d=Math.min(.012,u*.1),f=Math.min(.02,u*.15);if(h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(Math.max(1e-4,n),l+d),h.gain.setValueAtTime(Math.max(1e-4,n),l+Math.max(d,u-f)),h.gain.linearRampToValueAtTime(1e-4,l+u),c.connect(h),r&&!o){const v=a.createStereoPanner();v.pan.value=this.panOf(r),h.connect(v),v.connect(e),this.lastPan=v}else if(r&&o){const v=a.createStereoPanner();v.pan.value=this.panOf(r)*.55,h.connect(v),v.connect(e),this.lastPan=v}else h.connect(e);return c.start(l),c.stop(l+u+.03),c.onended=()=>{try{c.disconnect(),h.disconnect()}catch{}},!0}panOf(t){const e=t.x-this.listenPos.x,n=t.z-this.listenPos.z,s=(e*this.listenRight.x+n*this.listenRight.z)/(Math.hypot(e,n)||1);return Math.max(-.7,Math.min(.7,s))}enqueue(t){(tc.has(t.kind)||t.kind==="flash")&&(this.queue=this.queue.filter(e=>e.kind!==t.kind)),this.queue.push(t),this.queue.length>8&&this.queue.shift()}flush(){if(!this.ctx||this.ctx.state!=="running")return;const t=this.queue.splice(0);for(const e of t){if(e.kind==="step"||e.kind==="stepMonster"){if(!this.slices.length){this.queue.push(e);continue}this.playFootstep(e.volume>1,e.volume<.7);continue}const n=io[e.kind];if(n&&n!=="step"&&!this.buffers.get(n)){this.queue.push(e);continue}this.emit(e.kind,e.pos,e.volume,!1)}}ensureBed(){if(this.bedRunning)return;const t=this.ctx,e=this.buffers.get("bed");if(!t||t.state!=="running"||!e||!this.bedGain)return;this.stopBed();const n=t.createBufferSource();n.buffer=e,n.loop=!0,n.connect(this.bedGain),n.start(t.currentTime),this.bed=n,this.bedRunning=!0,this.mark("bed-start")}stopBed(){if(this.bed){try{this.bed.stop()}catch{}try{this.bed.disconnect()}catch{}this.bed=null,this.bedRunning=!1}}tuneBed(){const t=this.buffers.get("bed");if(!t)return;const e=Lg(t);let s=.063*(this.musicVol/.7)/Math.max(.001,e*Math.max(.2,this.masterVol));const r=so(t);if(r*s*this.masterVol>.45&&(s=.45/Math.max(.001,r*this.masterVol)),this.bedBase=s,this.bedGain&&this.ctx){const o=this.ctx.currentTime;this.bedGain.gain.cancelScheduledValues(o),this.bedGain.gain.setValueAtTime(s,o)}}applyGains(){const t=this.muted?.4:1;this.master&&(this.master.gain.value=this.masterVol*t),this.stepGain&&(this.stepGain.gain.value=1),this.sfxGain&&(this.sfxGain.gain.value=1),this.scareGain&&(this.scareGain.gain.value=1)}cutSteps(t){const e=this.ctx;if(!e)return[];const n=new Float32Array(t.length),s=t.numberOfChannels;for(let o=0;o<s;o++){const a=t.getChannelData(o);for(let l=0;l<a.length;l++)n[l]+=a[l]/s}return Eg(n,t.sampleRate).map(o=>{const a=Math.max(0,Math.floor(o.start*t.sampleRate)),l=Math.min(t.length,Math.max(a+8,Math.floor(o.end*t.sampleRate))),c=e.createBuffer(s,l-a,t.sampleRate);for(let h=0;h<s;h++){const u=c.getChannelData(h);t.copyFromChannel(u,h,a),Ag(u,t.sampleRate,.008)}return c})}capture(t){const e=this.analyser;if(!e)return Promise.resolve({rms:0,peak:0});const n=new Float32Array(e.fftSize),s=performance.now();let r=0,o=0,a=0;return new Promise(l=>{const c=()=>{e.getFloatTimeDomainData(n);for(let h=0;h<n.length;h++){const u=n[h]??0,d=Math.abs(u);d>r&&(r=d),o+=u*u,a++}performance.now()-s<t?setTimeout(c,20):l({rms:Math.sqrt(o/Math.max(1,a)),peak:r})};c()})}mark(t){this.trace.push(t),this.trace.length>100&&this.trace.splice(0,this.trace.length-80)}fail(t){this.failures.push(t),this.failures.length>12&&this.failures.shift(),this.mark(`fejl:${t}`),console.error(`[Skt. Agnes] Lyd: ${t}`)}}function so(i){let t=0;for(let e=0;e<i.numberOfChannels;e++)t=Math.max(t,Cg(i.getChannelData(e)));return t}function Lg(i){let t=0;for(let e=0;e<i.numberOfChannels;e++)t=Math.max(t,Pg(i.getChannelData(e)));return t}function Ig(i){const t=i.sampleRate,e=Math.floor(t*.09),n=i.createBuffer(1,e,t),s=n.getChannelData(0);for(let r=0;r<e;r++){const o=Math.sin(Math.PI*r/(e-1));s[r]=Math.sin(2*Math.PI*180*r/t)*o*.4}return n}function Ug(i){return new Promise(t=>setTimeout(t,i))}function kg(i=0,t=0,e=0){return{x:i,y:t,z:e}}function on(i,t,e){return Math.max(t,Math.min(e,i))}function Mh(i,t,e){return i+(t-i)*e}function fr(i,t){const e=i.x-t.x,n=i.z-t.z;return Math.hypot(e,n)}function Ng(i,t){return Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)}function Sh(i){return{x:Math.sin(i),z:Math.cos(i)}}function bh(i){return{x:-Math.cos(i),z:Math.sin(i)}}function ec(i,t,e,n,s=!1){const r=s?-n:n;return{yaw:i-e,pitch:on(t-r,-1.2,1.2)}}function Fg(i){let t=i;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function ro(i,t){return Fg(t-i)}function Li(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function nc(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class Og{a=[];get size(){return this.a.length}push(t,e){const n=this.a;n.push({p:t,id:e});let s=n.length-1;for(;s>0;){const r=s-1>>1;if(n[r].p<=n[s].p)break;const o=n[r];n[r]=n[s],n[s]=o,s=r}}pop(){const t=this.a;if(!t.length)return;const e=t[0],n=t.pop();if(t.length>0&&n){t[0]=n;let s=0;for(;;){const r=s*2+1,o=r+1;let a=s;if(r<t.length&&t[r].p<t[a].p&&(a=r),o<t.length&&t[o].p<t[a].p&&(a=o),a===s)break;const l=t[a];t[a]=t[s],t[s]=l,s=a}}return e}}function yr(i,t){return!(t.allowFloor&&!t.allowFloor(i.floor)||i.doorId&&t.blockDoor&&t.blockDoor(i.doorId))}function zg(i,t,e,n={}){const s=i.nodes;if(!s.length)return null;const r=oo(i,t,n);if(r<0)return null;const o=Vg(e.y),a=!n.allowFloor||n.allowFloor(o);let l=-1;if(a?l=oo(i,e,n):(l=Hg(i,e,n),l<0&&(l=oo(i,e,n))),l<0)return null;const c=Gg(s,r,l,u=>yr(s[u],n));if(!c)return null;const h=c.map(u=>({x:s[u].x,y:s[u].y,z:s[u].z}));return Wg(h,i,n,Bg(i))}function Bg(i){const t=new Map;for(const e of i.nodes){const n=`${e.ix},${e.iz}`;let s=t.get(n);s||(s=[],t.set(n,s)),s.push(e.id)}return t}function oo(i,t,e,n){let s=-1,r=1/0;for(const o of i.nodes){if(!yr(o,e))continue;const a=Math.abs(o.y-t.y);if(a>3.2)continue;const l=(o.x-t.x)**2+(o.z-t.z)**2+a*a*.15;l<r&&(r=l,s=o.id)}return s}function Hg(i,t,e){let n=-1,s=1/0;for(const r of i.nodes){if(!r.stair||!yr(r,e))continue;const o=(r.x-t.x)**2+(r.z-t.z)**2;o<s&&(s=o,n=r.id)}return n}function Vg(i){return i<2?-1:i<6?0:1}function Gg(i,t,e,n){if(!n(t)||!n(e))return null;if(t===e)return[t];const s=new Map,r=new Map,o=new Set,a=new Og;s.set(t,0);const l=fr(i[t],i[e]);a.push(l,t);const c=i.length*12+32;let h=0;for(;a.size>0&&h++<c;){const u=a.pop();if(!u)break;const d=u.id;if(o.has(d))continue;if(d===e){const v=[d];let x=d;for(;r.has(x);)x=r.get(x),v.push(x);return v.reverse(),v}o.add(d);const f=s.get(d)??1/0;for(const v of i[d].links){if(!n(v.to)||o.has(v.to))continue;const x=f+v.cost;if(x+1e-6<(s.get(v.to)??1/0)){s.set(v.to,x),r.set(v.to,d);const m=fr(i[v.to],i[e]);a.push(x+m,v.to)}}}return null}function Wg(i,t,e,n){if(i.length<3)return i;const s=[i[0]];let r=0;for(;r<i.length-1;){let o=i.length-1;for(;o>r+1&&!Xg(i[r],i[o],t,e,n);)o--;s.push(i[o]),r=o}return s}function Xg(i,t,e,n,s){const r=Ng(i,t),o=Math.max(2,Math.ceil(r/.25));for(let a=1;a<o;a++){const l=a/o,c={x:i.x+(t.x-i.x)*l,y:i.y+(t.y-i.y)*l,z:i.z+(t.z-i.z)*l};if(!qg(e,c,n,s))return!1}return!0}function qg(i,t,e,n){const s=i.cellSize,r=Math.floor(t.x/s),o=Math.floor(t.z/s);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){const c=n.get(`${r+a},${o+l}`);if(c)for(const h of c){const u=i.nodes[h];if(!yr(u,e))continue;const d=u.x-t.x,f=u.z-t.z;if(d*d+f*f<=.42*.42&&Math.abs(u.y-t.y)<1.05)return!0}}return!1}function ic(i={}){return{state:"Patrol",stateTime:0,waypointIndex:0,goal:null,lastSeen:null,lastHeard:null,suspicion:0,attackCooldown:0,unseenTime:0,searchLeft:0,blindTime:0,hesitate:0,speedMul:1,...i}}function Yg(i){return{...i,goal:i.goal?{...i.goal}:null,lastSeen:i.lastSeen?{...i.lastSeen}:null,lastHeard:i.lastHeard?{...i.lastHeard}:null}}function $g(i,t){const e=Yg(i),n=Math.max(0,t.dt);e.stateTime+=n,e.attackCooldown=Math.max(0,e.attackCooldown-n),e.blindTime=Math.max(0,e.blindTime-n),e.hesitate=Math.max(0,e.hesitate-n),e.suspicion=Math.max(0,e.suspicion-n*.045);const s=e.blindTime>0,r=t.canSee&&!s&&!t.hiding;r?(e.unseenTime=0,e.lastSeen={...t.playerPos},e.suspicion=Math.min(1,e.suspicion+n*.7)):e.unseenTime+=n,t.flashlightHit&&!s&&(e.suspicion=Math.min(1,e.suspicion+n*1.1),e.lastSeen=e.lastSeen??{...t.playerPos}),t.hear&&t.hear.loudness>.12&&(e.lastHeard={...t.hear.pos},e.suspicion=Math.min(1,e.suspicion+t.hear.loudness*.25));let o=!1,a=!1;const l=(v,x)=>{e.state!==v&&(e.state=v,e.stateTime=0,e.speedMul=.88+t.rng()*.24,v==="Search"&&(e.searchLeft=6.5+t.rng()*3),v==="Attack"&&(e.attackCooldown=1.5,o=!0)),x&&(e.goal={...x})};if(t.hiding&&t.hideSpot&&(e.state==="Search"||e.state==="Suspicious"||e.state==="Chase"||e.state==="Investigate")&&fr(t.monsterPos,t.hideSpot)<1.75){const x=(t.holdBreath?.055:.26)*(.35+e.suspicion);t.rng()<x*n&&(a=!0)}const c=r&&t.allowChase&&t.distance<=1.32&&e.attackCooldown<=0;e.state!=="Attack"&&(c?l("Attack",t.playerPos):r&&t.allowChase?e.state==="Chase"?e.goal={...t.playerPos}:e.state==="LostPlayer"?l("Chase",t.playerPos):e.state==="Suspicious"?(e.goal={...t.playerPos},e.hesitate<=0&&l("Chase",t.playerPos)):(l("Suspicious",t.playerPos),e.hesitate=.45+t.rng()*1.15):r&&!t.allowChase||t.flashlightHit&&!s&&(e.state==="Idle"||e.state==="Patrol"||e.state==="ReturnToPatrol"||e.state==="Investigate")?l("Suspicious",t.playerPos):t.hear&&t.hear.loudness>.38&&e.state!=="Chase"&&e.state!=="LostPlayer"&&e.state!=="Suspicious"&&(t.hear.loudness>.84&&t.distance<6.5&&t.allowChase&&t.rng()<.55?l("Chase",t.hear.pos):l("Investigate",t.hear.pos)));const h=()=>{const v=t.waypoints;return v.length?(e.waypointIndex=(e.waypointIndex+1)%v.length,{...v[e.waypointIndex]}):e.goal},u=()=>{const v=t.waypoints;if(!v.length)return e.goal;let x=0,m=1/0;for(let p=0;p<v.length;p++){const A=fr(t.monsterPos,v[p]);A<m&&(m=A,x=p)}return e.waypointIndex=x,{...v[x]}};switch(e.state){case"Idle":e.stateTime>1.5+t.rng()*2&&l("Patrol",h()??t.monsterPos);break;case"Patrol":!e.goal&&t.waypoints.length&&(e.goal={...t.waypoints[e.waypointIndex%t.waypoints.length]}),t.atGoal&&(t.rng()<.16?l("Idle",t.monsterPos):e.goal=h());break;case"Investigate":(t.atGoal||e.stateTime>11)&&l("Search",e.goal??t.monsterPos);break;case"Search":if(e.searchLeft-=n,t.atGoal){const v=e.lastHeard??e.lastSeen??t.monsterPos,x=t.rng()*Math.PI*2,m=1.4+t.rng()*1.8;e.goal=kg(v.x+Math.cos(x)*m,v.y,v.z+Math.sin(x)*m)}e.searchLeft<=0&&l("ReturnToPatrol",u()??t.monsterPos);break;case"Suspicious":!r&&(t.atGoal&&e.stateTime>2.2||e.stateTime>8)&&l("Search",e.goal??t.monsterPos);break;case"Chase":e.goal={...t.playerPos},!r&&e.unseenTime>.55&&l("LostPlayer",e.lastSeen?{...e.lastSeen}:{...t.playerPos});break;case"Attack":e.stateTime>.82&&(r&&t.distance<2.4?l("Chase",t.playerPos):l("LostPlayer",e.lastSeen?{...e.lastSeen}:{...t.playerPos}));break;case"LostPlayer":(t.atGoal||e.stateTime>6.2)&&l("Search",e.goal??t.monsterPos);break;case"ReturnToPatrol":e.goal||(e.goal=u()),(t.atGoal||e.stateTime>16)&&l("Patrol",e.goal??h());break}let f={Idle:0,Patrol:1.48,Investigate:2.2,Search:1.22,Suspicious:1.28,Chase:3.7+t.aggression*.85,Attack:.85,LostPlayer:2.35,ReturnToPatrol:1.6}[e.state]*e.speedMul;return e.hesitate>0&&e.state==="Suspicious"&&(f*=.72),s&&(f*=.45),{bb:e,speed:f,attackPulse:o,foundHiding:a}}const Hn=1e-4;function jg(i,t,e,n){return n.standOnly&&e?!1:i+t>n.minY+.02&&i<n.maxY-.02}function wh(i,t,e,n,s,r){let o=i.x,a=i.z,l=!1;const c=r.filter(u=>jg(i.y,n,s,u)),h=(u,d)=>{if(d!==0){u==="x"?o+=d:a+=d;for(let f=0;f<2;f++)for(const v of c){const x=v.minX-e,m=v.maxX+e,p=v.minZ-e,A=v.maxZ+e;if(u==="x"){if(a<=p+Hn||a>=A-Hn)continue;d>0&&i.x<=x+Hn&&o>x?(o=x,l=!0):d<0&&i.x>=m-Hn&&o<m?(o=m,l=!0):o>x&&o<m&&a>p&&a<A&&i.x>x&&i.x<m&&(o=o-x<m-o?x:m,l=!0)}else{if(o<=x+Hn||o>=m-Hn)continue;d>0&&i.z<=p+Hn&&a>p?(a=p,l=!0):d<0&&i.z>=A-Hn&&a<A?(a=A,l=!0):a>p&&a<A&&o>x&&o<m&&i.z>p&&i.z<A&&(a=a-p<A-a?p:A,l=!0)}}}};return h("x",t.x),h("z",t.z),{x:o,y:i.y,z:a,hit:l}}function sc(i,t,e,n,s){for(const r of s){if(!r.standOnly||t<=r.minX||t>=r.maxX||e<=r.minZ||e>=r.maxZ)continue;if(i+n>r.minY+.02&&i<r.maxY-.02)return!0}return!1}function Eh(i,t,e){const n=t.x-i.x,s=t.y-i.y,r=t.z-i.z;let o=0,a=1;const l=[[n,i.x,e.minX,e.maxX],[s,i.y,e.minY,e.maxY],[r,i.z,e.minZ,e.maxZ]];for(const[c,h,u,d]of l){if(Math.abs(c)<1e-8){if(h<u||h>d)return!1;continue}let f=(u-h)/c,v=(d-h)/c;if(f>v){const x=f;f=v,v=x}if(f>o&&(o=f),v<a&&(a=v),o>a)return!1}return a>.02&&o<.98}function us(i,t,e){for(const n of e)if(Eh(i,t,n))return!1;return!0}function Xs(i,t,e,n=2.35){let s=null,r=n;const o=Math.hypot(t.x,t.y,t.z)||1,a=t.x/o,l=t.y/o,c=t.z/o;for(const d of e){const f=d.x-i.x,v=d.y-i.y,x=d.z-i.z,m=f*a+v*l+x*c;if(m<0||m>n)continue;const p=i.x+a*m,A=i.y+l*m,w=i.z+c*m;Math.hypot(p-d.x,A-d.y,w-d.z)<=d.radius&&m<r&&(s=d,r=m)}if(s)return s;let h=.35,u=n;for(const d of e){const f=d.x-i.x,v=d.y-i.y,x=d.z-i.z,m=Math.hypot(f,v,x);if(m>n||m<.001)continue;const p=(f*a+v*l+x*c)/m;p>h&&m<u+.4&&(s=d,h=p,u=m)}return s}const Kg={sprint:13,walk:4.3,crouch:1.15,door:16,drop:11,jump:8,landing:6,voice:9};function Zg(i){return Kg[i]}function Jg(i){switch(i){case"sprint":return .92;case"door":return .88;case"drop":return .7;case"jump":return .58;case"landing":return .5;case"voice":return .64;case"walk":return .42;case"crouch":return .14}}function Qg(i,t){return Math.pow(.52,Math.abs(i))*(t?.38:1)}function tv(i,t,e,n,s){const r=Zg(e)*Qg(n,s);return Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)<=r}function ev(i,t,e,n,s,r){const o=e.x-i.x,a=e.y-i.y,l=e.z-i.z,c=Math.hypot(o,a,l);if(c>s)return!1;if(c<.2)return!0;const h=Math.hypot(o,l)||1e-4;return(t.x*o+t.z*l)/h<n||Math.abs(a)>2.6&&c>3.5?!1:us(i,e,r)}function Th(i,t,e,n,s,r){const o=e.x-i.x,a=e.y-i.y,l=e.z-i.z,c=Math.hypot(o,a,l);if(c>s||c<.05)return!1;const h=Math.hypot(t.x,t.y,t.z)||1;return(t.x*o+t.y*a+t.z*l)/(h*c)<n?!1:us(i,e,r)}const nv=.36,iv=1.95,sv=Math.cos(48*Math.PI/180);class rv{group=new jt;bb=ic();pos={x:18,y:0,z:24};yaw=0;path=[];pathI=0;repath=0;goalKey="";phase=0;stuckT=0;stuckTries=0;anchorX=0;anchorZ=0;pelvis=null;spine=null;neck=null;head=null;thighL=null;thighR=null;shinL=null;shinR=null;footL=null;footR=null;armL=null;armR=null;foreL=null;foreR=null;checked=new Set;glide=0;watch=0;lookAt=0;concealed=!1;constructor(){const t=new ce({color:"#3a3034",roughness:.86,metalness:.02}),e=new ce({color:"#ddd4c8",roughness:.62,metalness:0}),n=new ce({color:"#100c0c",roughness:.45}),s=new ce({color:"#3a0000",emissive:"#ff2a18",emissiveIntensity:1.4,roughness:.35}),r=new ce({color:"#1a1412",roughness:.5}),o=new jt;o.position.y=.96,this.pelvis=o,o.add(wn(new dt(new me(.13,12,8),t),1.15,.72,.85));const a=new jt;a.position.y=.02,a.rotation.x=.38,this.spine=a,o.add(a);const l=wn(new dt(ov(),t));a.add(l);const c=wn(new dt(new ms(.07,.22,3,6),t));c.rotation.z=Math.PI/2,c.position.y=.4,a.add(c);const h=this.leg(t,-1,.5,.46),u=this.leg(t,1,.47,.44);o.add(h.hip,u.hip),this.thighL=h.thigh,this.thighR=u.thigh,this.shinL=h.shin,this.shinR=u.shin,this.footL=h.foot,this.footR=u.foot;const d=this.arm(t,-1,.46,.4),f=this.arm(t,1,.42,.38);a.add(d.shoulder,f.shoulder),this.armL=d.upper,this.armR=f.upper,this.foreL=d.fore,this.foreR=f.fore;const v=new jt;v.position.set(0,.52,.02),v.rotation.x=-.28,this.neck=v,a.add(v),v.add(Ai(.14,.042,.036,t,1));const x=new jt;x.position.y=.14,this.head=x,v.add(x);const m=wn(new dt(new me(.15,28,18),e));m.scale.set(.9,1.25,.62),m.position.y=.07;const p=rc(n,s,-.055,.09,.09,-.38),A=rc(n,s,.058,.085,.09,.42),w=wn(new dt(new Se(.003,.072,.004),r));w.position.set(0,.045,.1);const _=new dt(lv(),r);x.add(m,p,A,w,_),this.group.add(o),this.group.visible=!1}leg(t,e,n,s){const r=new jt;r.position.set(e*.09,-.02,0);const o=new jt;r.add(o),o.add(Ai(n,.055,.042,t));const a=new jt;a.position.y=-n,o.add(a),a.add(Ai(s,.04,.03,t));const l=new jt;l.position.y=-s,a.add(l);const c=wn(new dt(new Se(.07,.035,.16),t));return c.position.set(0,-.02,.05),l.add(c),l.add(wn(new dt(new me(.032,8,6),t))),{hip:r,thigh:o,shin:a,foot:l}}arm(t,e,n,s){const r=new jt;r.position.set(e*.2,.4,.02),r.add(wn(new dt(new me(.042,8,6),t)));const o=new jt;o.rotation.z=e*.12,r.add(o),o.add(Ai(n,.04,.032,t));const a=new jt;a.position.y=-n,a.rotation.x=.18,o.add(a),a.add(Ai(s,.03,.022,t));const l=new jt;l.position.y=-s,a.add(l),l.add(wn(new dt(new me(.028,8,6),t)));for(let c=0;c<3;c++){const h=new jt;h.position.set((c-1)*.016,-.01,(c-1)*.01),h.rotation.x=.25+c*.04,h.rotation.z=e*(c-1)*.12;const u=.15+(c===1?.03:0);h.add(Ai(u,.008,.005,t,-1)),l.add(h)}return{shoulder:r,upper:o,fore:a}}reveal(t){this.concealed=!1,this.pos={...t},this.group.position.set(t.x,t.y,t.z),this.group.visible=!0,this.path=[],this.goalKey="",this.glide=0,this.bb.state="Patrol",this.bb.goal={...t}}face(t){this.yaw=t,this.group.rotation.y=t}spawn(t,e,n){this.pos={...t},this.yaw=e,this.bb=ic({state:n}),this.group.position.set(t.x,t.y,t.z),this.group.visible=!0,this.path=[],this.anchorX=t.x,this.anchorZ=t.z,this.stuckT=0}update(t){const e=this.bb.state,n={x:this.pos.x,y:this.pos.y+1.7,z:this.pos.z},s=Sh(this.yaw);let r=null;for(const v of t.noises){if(!tv(n,v.pos,v.kind,v.floorDelta,v.occluded))continue;const x=Jg(v.kind)*(v.occluded?.7:1);(!r||x>r.loudness)&&(r={pos:v.pos,loudness:x})}const o=Math.hypot(t.playerPos.x-this.pos.x,t.playerPos.z-this.pos.z),l=(!t.flashlightOn?8.5:12.5)*(t.hiding?.2:1),c=!t.hiding&&ev(n,s,t.playerEye,sv,l,t.blockers),h=Th(t.camPos,t.camDir,{x:this.pos.x,y:this.pos.y+1.75,z:this.pos.z},Math.cos(.5),16,t.blockers);t.flashlightOn&&h&&(this.concealed=!0),this.lookAt=ro(this.yaw,Math.atan2(t.playerPos.x-this.pos.x,t.playerPos.z-this.pos.z));const u=this.bb.goal,d=!!u&&Math.hypot(u.x-this.pos.x,u.z-this.pos.z)<.75,f=$g(this.bb,{dt:t.dt,monsterPos:this.pos,playerPos:t.playerPos,canSee:c,hear:r,flashlightHit:h,distance:o,atGoal:d,hiding:t.hiding,hideSpot:t.hideSpot,holdBreath:t.holdBreath,allowChase:t.allowChase,aggression:t.aggression,rng:Math.random,waypoints:t.waypoints});return this.bb=f.bb,this.concealed?(this.group.visible=!1,this.glide=0,this.animate(t.dt,0),{attack:!1,foundHiding:!1,state:this.bb.state,entered:this.bb.state!==e?this.bb.state:null}):(this.group.visible=!0,!this.concealed&&this.bb.state==="Patrol"&&this.bb.stateTime>8&&Math.random()<t.dt*.04&&t.waypoints.length&&(this.watch=1.4+Math.random()*2.2,this.bb.waypointIndex=(this.bb.waypointIndex+1+Math.floor(Math.random()*3))%t.waypoints.length,this.bb.goal={...t.waypoints[this.bb.waypointIndex]},this.path=[]),this.follow(t,f.speed),this.animate(t.dt,f.speed),this.group.position.set(this.pos.x,this.pos.y,this.pos.z),this.group.rotation.y=this.yaw,{attack:f.attackPulse,foundHiding:f.foundHiding,state:this.bb.state,entered:this.bb.state!==e?this.bb.state:null})}follow(t,e){if(this.watch>0){this.watch=Math.max(0,this.watch-t.dt),this.glide+=(0-this.glide)*Math.min(1,t.dt*6);return}const n=this.bb.goal,s=this.bb.state==="Chase"||this.bb.state==="Attack",r=(n&&e>=.05?e:0)*(s?1.55:1),o=r>this.glide?2.2:5.5;if(this.glide+=(r-this.glide)*Math.min(1,t.dt*o),!n||this.glide<.05)return;e=this.glide;const a=`${n.x.toFixed(1)}|${n.z.toFixed(1)}|${this.bb.state}`;if(this.repath-=t.dt,a!==this.goalKey||this.repath<=0||this.pathI>=this.path.length){this.goalKey=a,this.repath=this.bb.state==="Chase"?.35:.8;const w=zg(t.nav,this.pos,n,t.query);this.path=w??[],this.pathI=0}let l=n.x,c=n.z;if(this.pathI<this.path.length){const w=this.path[this.pathI];l=w.x,c=w.z,Math.hypot(w.x-this.pos.x,w.z-this.pos.z)<.4&&this.pathI++}const h=this.blockingDoor(t,l,c);if(h&&(t.requestOpen(h.id),(t.openAmount.get(h.id)??0)<.4&&Math.hypot((h.axis==="x"?h.coord:h.center)-this.pos.x,(h.axis==="z"?h.coord:h.center)-this.pos.z)<1.05))return;const u=l-this.pos.x,d=c-this.pos.z,f=Math.hypot(u,d)||1,v=Math.min(e*t.dt,f),x=wh(this.pos,{x:u/f*v,z:d/f*v},nv,iv,!1,t.colliders);this.pos.x=x.x,this.pos.z=x.z;const m=t.floorAt(this.pos.x,this.pos.z,this.pos.y);m!==null&&(this.pos.y=m);const p=Math.atan2(u,d);if(this.yaw+=ro(this.yaw,p)*Math.min(1,t.dt*6),Math.hypot(this.pos.x-this.anchorX,this.pos.z-this.anchorZ)<.025?this.stuckT+=t.dt:(this.stuckT=0,this.anchorX=this.pos.x,this.anchorZ=this.pos.z),this.stuckT>.8&&t.waypoints.length){if(this.stuckT=0,this.stuckTries++,this.stuckTries>=3){this.stuckTries=0,this.concealed=!0;return}this.bb.waypointIndex=(this.bb.waypointIndex+1)%t.waypoints.length,this.bb.goal={...t.waypoints[this.bb.waypointIndex]},this.path=[],this.goalKey=""}}blockingDoor(t,e,n){let s=null,r=1.45;for(const o of t.doors){if(o.kind!=="door"||t.doorLocked(o.id)||(t.openAmount.get(o.id)??0)>.7)continue;const a=o.axis==="x"?o.coord:o.center,l=o.axis==="z"?o.coord:o.center,c=Math.hypot(a-this.pos.x,l-this.pos.z);if(c>r)continue;const h=Math.atan2(a-this.pos.x,l-this.pos.z),u=Math.atan2(e-this.pos.x,n-this.pos.z);Math.abs(ro(h,u))>1.2||(s=o,r=c)}return s}animate(t,e){const n=this.bb.state==="Chase"||this.bb.state==="Attack",s=e>.2;this.phase+=t*(s?1.7+Math.min(e,4)*.7:.45);const r=s?Math.sin(this.phase):0,o=n?.62:.48;if(this.thighL&&this.shinL&&this.footL&&this.poseLeg(this.thighL,this.shinL,this.footL,r,o),this.thighR&&this.shinR&&this.footR&&this.poseLeg(this.thighR,this.shinR,this.footR,-r,o),this.armL&&this.foreL&&this.poseArm(this.armL,this.foreL,-r,n,-1),this.armR&&this.foreR&&this.poseArm(this.armR,this.foreR,r,n,1),this.spine){const a=n?.62:.36;this.spine.rotation.x+=(a-this.spine.rotation.x)*Math.min(1,t*3)}if(this.neck&&this.spine&&(this.neck.rotation.x=-this.spine.rotation.x*.7),this.pelvis){const a=s?Math.abs(Math.sin(this.phase*2))*.02:0;this.pelvis.position.y=.96+a}this.head&&(this.head.rotation.x=(n?.12:.02)+Math.sin(this.phase*.37)*.04,this.head.rotation.y=Math.max(-.7,Math.min(.7,this.lookAt))*.35+Math.sin(this.phase*.23)*.06,this.head.rotation.z=Math.sin(this.phase*.51)*.04)}poseLeg(t,e,n,s,r){t.rotation.x=s*r;const o=.1+Math.max(0,s)*.95;e.rotation.x=o,n.rotation.x=-o*.75}poseArm(t,e,n,s,r){t.rotation.x=(s?.85:.18)+n*(s?.35:.5),t.rotation.z=r*(s?.05:.12),e.rotation.x=(s?.45:.22)+Math.abs(n)*.2}forgetHides(){this.checked.clear()}}function Ai(i,t,e,n,s=-1){const r=new jt,o=new dt(av(s<0?t:e,s<0?e:t,i),n);o.position.y=s*i/2,o.castShadow=!0;const a=new dt(new me(t,8,6),n);return a.castShadow=!0,r.add(o,a),r}function wn(i,t=1,e=1,n=1){return i.scale.set(t,e,n),i.castShadow=!0,i}function ov(){const i=[new nt(.12,0),new nt(.15,.12),new nt(.19,.28),new nt(.17,.4),new nt(.09,.52)],t=new xr(i,12);return Ah(t,.008),t}function av(i,t,e){const n=new $e(i,t,e,7,3);return Ah(n,.004),n}function Ah(i,t){const e=i.attributes.position;for(let n=0;n<e.count;n++){const s=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.sin(s*21+r*8)*Math.cos(o*17+r*6)*t,l=Math.hypot(s,o)||1;e.setXYZ(n,s+s/l*a,r,o+o/l*a)}i.computeVertexNormals()}function lv(){const i=new mh([new I(-.09,.028,.1),new I(-.045,.016,.104),new I(0,.012,.106),new I(.045,.016,.104),new I(.09,.028,.1)]);return new La(i,18,.0024,4,!1)}function rc(i,t,e,n,s,r){const o=new jt,a=new dt(new me(.026,12,8),i);a.scale.set(1.45,.48,.4);const l=new dt(new me(.008,8,6),t);return l.position.z=.03,o.add(a,l),o.position.set(e,n,s),o.rotation.z=r,o}function oc(){return{tension:10,stress:10,sinceScare:30,sinceSoft:4,suppress:0,softWindow:0,windowLeft:30}}function cv(i){return Mh(28,14,on(i,0,100)/100)}const ao=["flicker","whisper","creak","knock","phone","breath","lightOut","radio","drop","thunder"];function hv(i,t){const e={...i},n=Math.max(0,t.dt);t.tookDamage&&(e.suppress=Math.max(e.suppress,8)),e.suppress=Math.max(0,e.suppress-n),e.sinceScare+=n,e.sinceSoft+=n,e.windowLeft-=n,e.windowLeft<=0&&(e.windowLeft=30,e.softWindow=0);const s=1-on(t.monsterDist/24,0,1);let r=10;r+=s*44,t.inDark&&(r+=12),t.sprinting&&(r+=6),t.health<45&&(r+=14),r+=on(t.story,0,1)*16,t.hiding&&(r-=12),t.monsterDist>30&&(r-=6),r=on(r,0,100);const o=1-Math.exp(-n*.4);e.stress=e.stress+(r-e.stress)*o,e.tension=on(e.stress+(t.tookDamage?10:0),0,100);let a=null;const l=cv(e.tension),c=e.tension>30?.15+e.tension/100*.7:.02,h=t.rng();if(e.suppress<=0&&e.sinceScare>=l&&h<c*Math.min(n,.5))a={type:"scare"},e.sinceScare=0;else{const d=Mh(10,4,e.tension/100),f=.28+e.tension/120,v=t.rng();e.sinceSoft>=d&&e.softWindow<4&&v<f*Math.min(n,.5)&&(a={type:"soft",kind:ao[Math.floor(t.rng()*ao.length)%ao.length]},e.sinceSoft=0,e.softWindow+=1)}const u=on(e.tension/100*(e.suppress>0?.22:1),0,1);return{state:e,event:a,aggression:u}}class uv{dust;lightning=0;constructor(t,e=0){const n=new Me;n.setAttribute("position",new Be(new Float32Array(3),3)),this.dust=new ph(n,new Aa({transparent:!0,opacity:0,size:.01})),this.dust.visible=!1}update(t,e,n,s){this.dust.visible=!1,this.lightning=0}strike(){this.lightning=0}}function dv(){return{global:-999,byKind:{}}}function fv(i,t,e,n=!1){if(n||t==="attack")return!0;if(e-i.global<12)return!1;const s=i.byKind[t]??-999,r=t==="fake"?18:34;return e-s>=r}function pv(i,t,e){return{global:e,byKind:{...i.byKind,[t]:e}}}function mv(i){const t=[{k:"whisper",w:3},{k:"fake",w:2.2},{k:"flash",w:i.inDark?1.2:3},{k:"ceiling",w:1.8},{k:"shadow",w:i.inDark?3:1},{k:"behind",w:i.monsterNear?.6:2.6},{k:"door",w:i.doorOpenNear?3.4:0},{k:"still",w:i.inMannequinRoom?4:0},{k:"face",w:i.tension>68&&i.monsterNear?1.6:0}],e=t.reduce((s,r)=>s+r.w,0);let n=i.rng()*e;for(const s of t)if(!(s.w<=0)&&(n-=s.w,n<=0))return s.k;return"whisper"}class gv{constructor(t,e){this.audio=e,this.faceMesh=new dt(new Je(.9,1.15),new qe({map:vv(),transparent:!0,depthTest:!1})),this.faceMesh.position.set(0,0,-.42),this.faceMesh.visible=!1,this.faceMesh.renderOrder=20,this.behindMesh=new dt(new Je(.7,1.6),new qe({color:"#050505",transparent:!0,opacity:.92,depthTest:!1,side:Ye})),this.behindMesh.position.set(.15,-.1,.55),this.behindMesh.visible=!1,this.behindMesh.renderOrder=19,t.add(this.faceMesh),t.add(this.behindMesh)}memory=dv();fx={trauma:0,flash:0,chroma:0,face:0,behind:0,subtitle:""};faceMesh;behindMesh;kindTimer=0;lastKind=null;lastAt=-999;trigger(t,e,n=!1){return fv(this.memory,t,e,n)?(this.memory=pv(this.memory,t,e),this.lastKind=t,this.lastAt=e,this.kindTimer=t==="attack"||t==="face"?.55:.7,this.fx.trauma=t==="fake"||t==="whisper"?.25:t==="attack"?1:.65,this.fx.chroma=t==="attack"||t==="face"?2.4:1,this.fx.flash=t==="flash"||t==="attack"?.85:.25,this.fx.face=t==="face"||t==="attack"?1:0,this.fx.behind=t==="behind"?1:0,this.faceMesh.visible=this.fx.face>0,this.behindMesh.visible=this.fx.behind>0,t==="attack"||t==="face"?this.audio.play("scream"):t==="whisper"||t==="behind"?this.audio.play("whisper"):t==="fake"?this.audio.play("door",void 0,{volume:.4}):this.audio.play("sting"),t==="whisper"&&(this.fx.subtitle="…gå herfra…"),t==="behind"&&(this.fx.subtitle="…bag dig."),!0):!1}dynamic(t,e){const n=mv(e);return this.trigger(n,t)?n:null}update(t){if(this.kindTimer-=t,this.fx.trauma=Math.max(0,this.fx.trauma-t*.8),this.fx.flash=Math.max(0,this.fx.flash-t*2.5),this.fx.chroma=Math.max(.35,this.fx.chroma-t*1.5),this.kindTimer<=0)this.fx.face=0,this.fx.behind=0,this.faceMesh.visible=!1,this.behindMesh.visible=!1,this.fx.subtitle&&(this.fx.subtitle="");else if(this.faceMesh.visible){const e=1-this.kindTimer/.55,n=.4+e*1.5;this.faceMesh.scale.set(n,n,1),this.faceMesh.position.z=-.55+e*.2}}}function vv(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#0a0606",t.fillRect(0,0,512,512),t.fillStyle="#d7c3b2",t.beginPath(),t.ellipse(256,250,150,190,0,0,Math.PI*2),t.fill(),t.fillStyle="#1a0a0a",t.beginPath(),t.ellipse(190,220,28,18,-.2,0,Math.PI*2),t.ellipse(320,230,34,16,.3,0,Math.PI*2),t.fill(),t.fillStyle="#6a1010",t.fillRect(168,214,18,8),t.fillRect(308,224,22,8),t.strokeStyle="#4a2a28",t.lineWidth=4,t.beginPath(),t.moveTo(200,340),t.quadraticCurveTo(256,390,330,330),t.stroke(),t.strokeStyle="rgba(40,10,10,0.5)",t.beginPath(),t.moveTo(256,180),t.lineTo(248,300),t.stroke();const e=new Ra(i);return e.colorSpace=Re,e}const _v=.3,lo=1.7,xv=1.05,yv=1.62,Mv=1;function Sv(i,t,e,n){const s=Math.min(.05,Math.max(0,t.dt)),r={...i,justLanded:!1};if(s<=0)return r;let o=t.crouch||sc(r.y,r.x,r.z,lo,e);const a=Math.abs(t.forward)+Math.abs(t.strafe)>.01,l=t.sprint&&!o&&r.stamina>5&&a&&r.grounded,c=o?1.18:l?4.35:2.32;l?r.stamina=on(r.stamina-16.5*s,0,100):r.stamina=on(r.stamina+(o?7:13)*s,0,100),t.jump&&r.grounded&&!o&&r.stamina>14&&(r.vy=4.25,r.stamina=on(r.stamina-16,0,100),r.grounded=!1);const h=Sh(r.yaw),u=bh(r.yaw);let d=h.x*t.forward+u.x*t.strafe,f=h.z*t.forward+u.z*t.strafe;const v=Math.hypot(d,f);v>1&&(d/=v,f/=v);const x=d*c,m=f*c,p=r.grounded?14:3.2,A=1-Math.exp(-p*s);r.vx+=(x-r.vx)*A,r.vz+=(m-r.vz)*A;const w=wh(r,{x:r.vx*s,z:r.vz*s},_v,o?xv:lo,o,e);n(w.x,w.z,r.y)===null?(r.vx=0,r.vz=0):(r.x=w.x,r.z=w.z,r.vx=(r.x-i.x)/s,r.vz=(r.z-i.z)/s);const S=n(r.x,r.z,r.y);return S!==null&&(r.vy-=12.5*s,r.y+=r.vy*s,r.y<=S?(r.justLanded=r.vy<-3.4,r.y=S,r.vy=0,r.grounded=!0):r.grounded=!1),sc(r.y,r.x,r.z,lo,e)&&(o=!0),r.crouching=o,r.pitch=on(r.pitch,-1.25,1.25),r}function bv(i){return i?Mv:yv}function wv(i,t,e,n,s){return i?Th(t,e,n,Math.cos(.5),16,s):!1}function Ev(i){const t=i.cells.filter(s=>{const r=Math.hypot(s.x-i.player.x,s.z-i.player.z);if(r<7||r>26||Math.abs(s.y-i.player.y)>5||i.recent.some(h=>Math.hypot(h.x-s.x,h.z-s.z)<3.5)||Math.hypot(s.x-i.from.x,s.z-i.from.z)<4)return!1;const o=s.x-i.player.x,a=s.z-i.player.z,l=Math.hypot(o,a)||1;return!((i.forward.x*o+i.forward.z*a)/l>.2&&i.visible(s)||i.visible(s))});if(!t.length)return null;const e=t.filter(s=>Math.hypot(s.x-i.player.x,s.z-i.player.z)>Math.hypot(i.from.x-i.player.x,i.from.z-i.player.z)),n=e.length?e:t;return n[Math.floor(i.rng()*n.length)%n.length]}function sa(){return{jumps:[],shadowAt:-100,slagter:0,slagterT:0}}const Tv=[{id:"stue102",room:"operationsstue",needLight:!0},{id:"arkiv",room:"arkiv",needLight:!1}];function Av(i,t){const e={jumps:i.jumps.slice(),shadowAt:i.shadowAt,slagter:i.slagter,slagterT:i.slagterT},n=[];if(t.room&&t.room!==t.prevRoom){for(const s of Tv)s.room!==t.room||e.jumps.includes(s.id)||s.needLight&&!t.flashlight||(e.jumps.push(s.id),n.push(`jump:${s.id}`));t.room==="slagterum"&&e.slagter===0&&(e.slagter=1,e.slagterT=0,n.push("silence"))}return e.slagter===1?(e.slagterT+=t.dt,e.slagterT>.55&&(e.slagter=2,e.slagterT=0,n.push("deep"),n.push("figure"))):e.slagter===2?(e.slagterT+=t.dt,(t.flashlight!==t.prevFlash||t.lookedAway||e.slagterT>8)&&(e.slagter=3,e.slagterT=0,n.push("hide-figure"))):e.slagter===3&&(e.slagterT+=t.dt,e.slagterT>2&&(e.slagter=4,n.push("steps"))),t.atDoor&&t.time-e.shadowAt>24&&!n.some(s=>s.startsWith("jump"))&&(e.shadowAt=t.time,n.push("shadow")),{state:e,cues:n}}const Vt={0:0,1:4,2:8},os=3.5,Ae=.5,qs=.45,ac="door_stilhed",lc={yard:{floor:9,minX:0,maxX:1,minZ:0,maxZ:1},tunnel:{floor:9,minX:2,maxX:3,minZ:0,maxZ:1}},Ys=(i,t,e,n,s,r,o,a,l,c)=>({id:i,name:t,floor:e,x:n,z:s,w:r,d:o,floorMat:a,wallMat:l,light:c}),an=[...[["reception","Receptionen","wood","panel","always-warm"],["patientgang","Patientgangen","tile","plaster","always-dim"],["operationsstue","Operationsstuen","tile","tile","power"],["slagterum","Slagterummet","tile","brick","always-red"],["trappe0","Trappeopgang","concrete","damp","always-dim"]].map((i,t)=>Ys(i[0],i[1],0,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),...[["arkiv","Arkivrummet","wood","panel","always-dim"],["laboratorium","Det aflåste laboratorium","tile","tile","power"],["obduktion","Obduktionssalen","tile","tile","always-dim"],["personalerum","Det forladte personalerum","carpet","plaster","always-warm"],["trappe1","Trappeopgang","concrete","damp","always-dim"]].map((i,t)=>Ys(i[0],i[1],1,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),...[["kaeldergang","Kældergangen","concrete","damp","always-dim"],["kapel","Det mørke kapel","stone","brick","always-candle"],["observation","Observationsrummet","tile","plaster","none"],["kammer","Det sidste kammer","concrete","damp","always-dim"],["trappe2","Trappeopgang","concrete","damp","none"]].map((i,t)=>Ys(i[0],i[1],2,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),Ys("stilhed","Ud til stilheden",2,36,12,12,6,"concrete","damp","none")],Rh=[{id:"door_rec_pat",a:"reception",b:"patientgang",kind:"door",signA:"Patientgangen",signB:"Receptionen"},{id:"door_pat_op",a:"patientgang",b:"operationsstue",kind:"door",signA:"Operationsstuen",signB:"Gang"},{id:"door_op_slag",a:"operationsstue",b:"slagterum",kind:"door",signA:"Slagterummet",signB:"Operationsstuen"},{id:"door_slag_trappe",a:"slagterum",b:"trappe0",kind:"door",signA:"Trappe",signB:"Slagterummet"},{id:"door_arkiv_lab",a:"arkiv",b:"laboratorium",kind:"door",locked:!0,keyId:"key_op",signA:"Laboratorium",signB:"Arkivrummet"},{id:"door_lab_obd",a:"laboratorium",b:"obduktion",kind:"door",signA:"Obduktionssalen",signB:"Laboratorium"},{id:"door_obd_pers",a:"obduktion",b:"personalerum",kind:"door",signA:"Personalerum",signB:"Obduktionssalen"},{id:"door_pers_trappe",a:"personalerum",b:"trappe1",kind:"door",signA:"Trappe",signB:"Personalerum"},{id:"door_kael_kapel",a:"kaeldergang",b:"kapel",kind:"door",signA:"Kapellet",signB:"Kældergangen"},{id:"door_kapel_obs",a:"kapel",b:"observation",kind:"door",signA:"Observation",signB:"Kapellet"},{id:"door_obs_kammer",a:"observation",b:"kammer",kind:"door",signA:"Det sidste kammer",signB:"Observation"},{id:"door_kammer_trappe",a:"kammer",b:"trappe2",kind:"door",signA:"Trappe",signB:"Kammeret"},{id:"door_stilhed",a:"kammer",b:"stilhed",kind:"door",locked:!0,signA:"UD TIL STILHEDEN",signB:""}],ra=[{id:"stair_01",x:49.2,z:.6,w:5.6,d:5.2,fromFloor:0,toFloor:1,axis:"z"},{id:"stair_12",x:49.2,z:6.2,w:5.6,d:5.2,fromFloor:1,toFloor:2,axis:"z"}];function Pe(i,t,e,n,s,r,o,a){return{id:i,room:t,kind:e,x:n,z:s,rot:0,w:r,d:o,h:a,block:"always"}}const Mr=[Pe("rec_desk","reception","table",4,9.5,1.6,.7,.78),Pe("rec_chair","reception","chair",4,8.4,.45,.45,.9),Pe("pat_bench","patientgang","bench",18,2.2,1.4,.45,.48),Pe("op_table","operationsstue","gurney",30,9.2,1.8,.7,.85),Pe("op_cab","operationsstue","cabinet",26.8,2.2,.6,1.4,1.6),Pe("slag_table","slagterum","table",42,9.4,1.8,.8,.8),Pe("slag_hook","slagterum","beam",40,2.4,2.2,.2,.15),Pe("ark_shelf","arkiv","shelf",2.2,9.2,.5,2.4,2),Pe("ark_table","arkiv","table",8,2.4,1.2,.7,.75),Pe("lab_bench","laboratorium","table",16,9.2,1.6,.7,.9),Pe("obd_table","obduktion","gurney",30,9,1.9,.7,.8),Pe("pers_sofa","personalerum","sofa",42,9.2,1.6,.7,.7),Pe("kap_altar","kapel","altar",18,9.4,1.4,.6,1),Pe("obs_desk","observation","desk",30,2.4,1.2,.6,.75),Pe("kam_bed","kammer","bed",40,9,1.8,.9,.55)],Ch=[{id:"bat_gang",room:"patientgang",itemId:"battery",x:20,z:9.2},{id:"bat_pers",room:"personalerum",itemId:"battery",x:44,z:3},{id:"key_op_pick",room:"operationsstue",itemId:"key_op",x:32,z:3},{id:"key_arkiv_pick",room:"arkiv",itemId:"key_arkiv",x:6,z:3.2},{id:"key_kapel_pick",room:"kapel",itemId:"key_kapel",x:14.5,z:9}],Rv=[],Cv=[],Pv=[{room:"slagterum",kind:"blood",x:40,z:6.5,rot:.2,w:1.4,d:.5},{room:"obduktion",kind:"blood",x:28,z:8,rot:.4,w:1.2,d:.45},{room:"kammer",kind:"puddle",x:42,z:4,rot:0,w:1.1,d:.8}],Dv={};function Lv(){Iv();const i=Uv(),t=kv(i),e=Fv(t),n=zv(i,e),s=Bv();return{rooms:an,doors:i,walls:t,colliders:e,props:Mr,pickups:Ch,devices:Rv,hides:Cv,decals:Pv,stairs:ra,nav:n,lights:s}}function Iv(){for(let t=0;t<an.length;t++)for(let e=t+1;e<an.length;e++){const n=an[t],s=an[e];if(n.floor!==s.floor)continue;const r=Math.min(n.x+n.w,s.x+s.w)-Math.max(n.x,s.x),o=Math.min(n.z+n.d,s.z+s.d)-Math.max(n.z,s.z);if(r>.02&&o>.02)throw new Error(`Rum overlapper: ${n.id} og ${s.id}`)}const i=new Set(an.map(t=>t.id));for(const t of Rh){if(!i.has(t.a)||!i.has(t.b))throw new Error(`Forbindelse ${t.id} mangler rum`);if(!Ph(Wn(t.a),Wn(t.b)))throw new Error(`Forbindelse ${t.id} rører ikke`)}for(const t of Mr){const e=Wn(t.room);if(!cc(e,t.x,t.z,.05))throw new Error(`Prop ${t.id} er uden for ${t.room}`)}for(const t of Ch){const e=Wn(t.room);if(!cc(e,t.x,t.z,.02))throw new Error(`Pickup ${t.id} er uden for ${t.room}`)}}function Wn(i){const t=an.find(e=>e.id===i);if(!t)throw new Error(`Ukendt rum ${i}`);return t}function cc(i,t,e,n=0){return t>=i.x-n&&t<=i.x+i.w+n&&e>=i.z-n&&e<=i.z+i.d+n}function Ph(i,t){if(i.floor!==t.floor)return null;const e=Math.max(i.z,t.z),n=Math.min(i.z+i.d,t.z+t.d),s=Math.max(i.x,t.x),r=Math.min(i.x+i.w,t.x+t.w),o=Math.abs(i.x+i.w-t.x)<.03||Math.abs(t.x+t.w-i.x)<.03,a=Math.abs(i.z+i.d-t.z)<.03||Math.abs(t.z+t.d-i.z)<.03;return o&&n-e>.4?{axis:"x",coord:Math.abs(i.x+i.w-t.x)<.03?i.x+i.w:t.x+t.w,min:e,max:n}:a&&r-s>.4?{axis:"z",coord:Math.abs(i.z+i.d-t.z)<.03?i.z+i.d:t.z+t.d,min:s,max:r}:null}function Uv(){return Rh.map(i=>{const t=Wn(i.a),e=Wn(i.b),n=Ph(t,e);if(!n)throw new Error(`Dør ${i.id} uden kant`);const s=n.max-n.min,r=.26;let o=i.width??(i.kind==="arch"?Math.min(2.7,s-.8):1.15);if(o=Math.min(o,s-r*2),o<.82)throw new Error(`Dør ${i.id} er for smal (${o.toFixed(2)} / overlap ${s.toFixed(2)})`);const a=i.at??.5;let l=n.min+s*a;const c=o/2;return l=Math.max(n.min+r+c,Math.min(n.max-r-c,l)),{id:i.id,kind:i.kind,floor:t.floor,axis:n.axis,coord:n.coord,spanMin:l-c,spanMax:l+c,center:l,width:o,locked:!!i.locked,keyId:i.keyId,needsPower:i.needsPower,a:i.a,b:i.b,signA:i.signA,signB:i.signB}})}function kv(i){const t=i.map(n=>({floor:n.floor,axis:n.axis,coord:n.coord,min:n.spanMin,max:n.spanMax})),e=[];for(const n of an){const s=[{axis:"z",coord:n.z,min:n.x,max:n.x+n.w},{axis:"z",coord:n.z+n.d,min:n.x,max:n.x+n.w},{axis:"x",coord:n.x,min:n.z,max:n.z+n.d},{axis:"x",coord:n.x+n.w,min:n.z,max:n.z+n.d}];for(const r of s){let o=[[r.min,r.max]],a=!0;for(const l of an){if(l.id===n.id||l.floor!==n.floor)continue;const c=Nv(r,l);c&&(a=!1,l.id<n.id&&(o=hc(o,c.min,c.max)))}for(const l of t)l.floor!==n.floor||l.axis!==r.axis||Math.abs(l.coord-r.coord)>.04||(o=hc(o,l.min,l.max));for(const[l,c]of o)c-l<.12||e.push({floor:n.floor,axis:r.axis,coord:r.coord,min:l,max:c,mat:n.wallMat,exterior:a,roomId:n.id})}}return e}function Nv(i,t){if(i.axis==="x"){const o=t.x+t.w,a=t.x;if(Math.abs(o-i.coord)>.03&&Math.abs(a-i.coord)>.03)return null;const l=Math.max(i.min,t.z),c=Math.min(i.max,t.z+t.d);return c-l<.2?null:{min:l,max:c}}const e=t.z+t.d,n=t.z;if(Math.abs(e-i.coord)>.03&&Math.abs(n-i.coord)>.03)return null;const s=Math.max(i.min,t.x),r=Math.min(i.max,t.x+t.w);return r-s<.2?null:{min:s,max:r}}function hc(i,t,e){const n=[];for(const[s,r]of i){if(e<=s||t>=r){n.push([s,r]);continue}t>s&&n.push([s,Math.max(s,t)]),e<r&&n.push([Math.min(r,e),r])}return n}function Fv(i){const t=[];for(const n of i){const s=Vt[n.floor],r=s+os;n.axis==="x"?t.push({minX:n.coord-.22/2,maxX:n.coord+.22/2,minY:s,maxY:r,minZ:n.min,maxZ:n.max,id:"wall"}):t.push({minX:n.min,maxX:n.max,minY:s,maxY:r,minZ:n.coord-.22/2,maxZ:n.coord+.22/2,id:"wall"})}for(const n of Mr){if(n.block==="none")continue;const s=Wn(n.room),{bw:r,bd:o}=Dh(n.w,n.d,n.rot),a=Vt[s.floor]+(n.yOff??0);t.push({minX:n.x-r/2,maxX:n.x+r/2,minY:a,maxY:a+n.h,minZ:n.z-o/2,maxZ:n.z+o/2,id:n.id,standOnly:n.block==="stand",blocksUntilUnlock:n.blocksUntilUnlock})}return t}function Dh(i,t,e){const n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e));return{bw:i*n+t*s,bd:i*s+t*n}}function Ov(i,t){if(i.kind!=="door"||t>.28)return null;const e=Vt[i.floor],n=.16;return i.axis==="x"?{minX:i.coord-n/2,maxX:i.coord+n/2,minY:e,maxY:e+2.55,minZ:i.spanMin,maxZ:i.spanMax,id:i.id}:{minX:i.spanMin,maxX:i.spanMax,minY:e,maxY:e+2.55,minZ:i.coord-n/2,maxZ:i.coord+n/2,id:i.id}}function $s(i,t){return i.kind==="arch"?!1:!!(i.locked&&!t.has(i.id))}function uc(i,t,e){const n=i.colliders.filter(s=>!s.blocksUntilUnlock||!t.has(s.blocksUntilUnlock));for(const s of i.doors){const r=Ov(s,e.get(s.id)??0);r&&n.push(r)}return n}function zv(i,t){const e=[],n=new Map,s=l=>{const c={...l,id:e.length,links:[]};return e.push(c),c},r=(l,c,h)=>{for(const u of Mr){if(u.block==="none"||u.blocksUntilUnlock||Wn(u.room).floor!==h)continue;const{bw:d,bd:f}=Dh(u.w,u.d,u.rot),v=.12;if(Math.abs(l-u.x)<=d/2+v&&Math.abs(c-u.z)<=f/2+v)return!0}return!1},o=(l,c)=>{for(const h of ra)if(l>=h.x-.12&&l<=h.x+h.w+.12&&c>=h.z-.12&&c<=h.z+h.d+.12)return!0;return!1};for(const l of an){const c=Vt[l.floor],h=Math.floor(l.x/Ae)-1,u=Math.floor((l.x+l.w)/Ae)+1,d=Math.floor(l.z/Ae)-1,f=Math.floor((l.z+l.d)/Ae)+1;for(let v=h;v<=u;v++)for(let x=d;x<=f;x++){const m=(v+.5)*Ae,p=(x+.5)*Ae;if(m<l.x+qs||m>l.x+l.w-qs||p<l.z+qs||p>l.z+l.d-qs||o(m,p)||r(m,p,l.floor))continue;const A=`${v},${x},${l.floor}`;if(n.has(A))continue;const w=s({ix:v,iz:x,x:m,y:c,z:p,floor:l.floor});n.set(A,w)}}for(const l of i){const h=l.width*.4,u=l.axis==="x"?l.coord-1.05:l.center-h,d=l.axis==="x"?l.coord+1.05:l.center+h,f=l.axis==="z"?l.coord-1.05:l.center-h,v=l.axis==="z"?l.coord+1.05:l.center+h,x=Math.floor(u/Ae)-1,m=Math.floor(d/Ae)+1,p=Math.floor(f/Ae)-1,A=Math.floor(v/Ae)+1;for(let w=x;w<=m;w++)for(let _=p;_<=A;_++){const S=(w+.5)*Ae,C=(_+.5)*Ae;if(S<u||S>d||C<f||C>v||r(S,C,l.floor))continue;const E=`${w},${_},${l.floor}`;if(n.has(E))continue;const R=s({ix:w,iz:_,x:S,y:Vt[l.floor],z:C,floor:l.floor,doorId:l.kind==="arch"?void 0:l.id});n.set(E,R)}}const a=(l,c)=>{if(l.id===c.id)return;const h=Math.hypot(l.x-c.x,l.z-c.z,(l.y-c.y)*.65);l.links.some(u=>u.to===c.id)||l.links.push({to:c.id,cost:h}),c.links.some(u=>u.to===l.id)||c.links.push({to:l.id,cost:h})};for(const l of e)if(!l.stair)for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){if(c===0&&h===0)continue;const u=n.get(`${l.ix+c},${l.iz+h},${l.floor}`);if(!u||u.stair||u.id<l.id)continue;if(Math.abs(c)===1&&Math.abs(h)===1){const f=n.get(`${l.ix+c},${l.iz},${l.floor}`),v=n.get(`${l.ix},${l.iz+h},${l.floor}`);if(!f||!v||f.stair||v.stair)continue}Math.hypot(l.x-u.x,l.z-u.z)>.92||a(l,u)}for(const l of ra){const c=[],h=l.axis==="z"?l.d:l.w,u=Math.max(2,Math.round(h/Ae));for(let d=0;d<=u;d++){const f=d/u,v=l.axis==="z"?l.x+l.w*.5:l.x+f*l.w,x=l.axis==="z"?l.z+f*l.d:l.z+l.d*.5,m=Vt[l.fromFloor]+f*(Vt[l.toFloor]-Vt[l.fromFloor]),p=m<2?-1:m<6?0:1;c.push(s({ix:Math.floor(v/Ae),iz:Math.floor(x/Ae),x:v,y:m,z:x,floor:p,stair:!0}))}for(let d=0;d<c.length-1;d++)a(c[d],c[d+1]);dc(c[0],l.fromFloor,n,e,t),dc(c[c.length-1],l.toFloor,n,e,t)}return{nodes:e,cellSize:Ae}}function dc(i,t,e,n,s){const r=[];for(const o of n){if(o.stair||o.floor!==t)continue;Math.hypot(o.x-i.x,o.z-i.z)<3.4&&r.push(o)}r.sort((o,a)=>Math.hypot(o.x-i.x,o.z-i.z)-Math.hypot(a.x-i.x,a.z-i.z));for(const o of r){const a=(o.y+i.y)*.5+.4,l={x:i.x,y:a,z:i.z},c={x:o.x,y:a,z:o.z};let h=!1;for(const d of s)if(!d.standOnly&&!(d.maxY<a-.2||d.minY>a+.2)&&Eh(l,c,d)){h=!0;break}if(h)continue;const u=Math.hypot(o.x-i.x,o.z-i.z,(o.y-i.y)*.65);i.links.some(d=>d.to===o.id)||i.links.push({to:o.id,cost:u}),o.links.some(d=>d.to===i.id)||o.links.push({to:i.id,cost:u});return}throw new Error(`Trappe ende kunne ikke forbindes (floor ${t} @ ${i.x.toFixed(1)},${i.z.toFixed(1)})`)}function Bv(){const i=[];for(const t of an){if(t.light==="none")continue;Hv(t).forEach((n,s)=>{const r=Vv(t.light);i.push({id:`${t.id}_${s}`,room:t.id,x:n.x,z:n.z,y:Vt[t.floor]+(t.outdoors?2.4:2.7),color:r.color,intensity:r.intensity,distance:r.distance,mode:r.mode,flicker:r.flicker})})}return i}function Hv(i){return i.lightAt?[i.lightAt]:Math.max(i.w,i.d)>18?i.w>=i.d?[{x:i.x+i.w*.33,z:i.z+i.d*.5},{x:i.x+i.w*.67,z:i.z+i.d*.5}]:[{x:i.x+i.w*.5,z:i.z+i.d*.33},{x:i.x+i.w*.5,z:i.z+i.d*.67}]:[{x:i.x+i.w*.5,z:i.z+i.d*.5}]}function Vv(i){switch(i){case"always-warm":return{color:"#ffb27a",intensity:36,distance:16,mode:"always",flicker:!0};case"always-dim":return{color:"#ffc9a4",intensity:14,distance:11,mode:"always",flicker:!0};case"always-candle":return{color:"#ff9448",intensity:16,distance:12,mode:"always",flicker:!0};case"always-red":return{color:"#ff3b32",intensity:10,distance:10,mode:"always",flicker:!0};case"secret":return{color:"#ffe0b8",intensity:18,distance:11,mode:"secret",flicker:!0};case"power":return{color:"#ffd0a6",intensity:22,distance:13,mode:"power",flicker:!1};default:return{color:"#ffffff",intensity:0,distance:1,mode:"always",flicker:!1}}}function Gv(i,t,e){if(t<i.x||t>i.x+i.w||e<i.z||e>i.z+i.d)return null;const n=i.axis==="z"?(e-i.z)/i.d:(t-i.x)/i.w,s=Vt[i.fromFloor],r=Vt[i.toFloor],o=Math.max(0,Math.min(1,n));return s+o*(r-s)}function js(i,t,e,n){for(const o of i.stairs){const a=Gv(o,t,e);if(a!==null)return a}let s=null,r=1e9;for(const o of i.rooms){if(t<o.x||t>o.x+o.w||e<o.z||e>o.z+o.d)continue;const a=Vt[o.floor],l=Math.abs(a-n);l<r&&(r=l,s=a)}return s}function Qn(i,t,e,n){let s=null,r=1e9;for(const o of i.rooms){if(t<o.x||t>o.x+o.w||e<o.z||e>o.z+o.d)continue;const a=Math.abs(Vt[o.floor]-n);a<r&&(r=a,s=o)}return s}function Wv(i,t,e){const n=new Set(["yard","tunnel"]);e||n.add("secret");const s=[];for(const r of i.rooms){if(!t(r.floor)||n.has(r.id))continue;const o=Dv[r.id],a=o?o.x:r.x+r.w*.5,l=o?o.z:r.z+r.d*.5;s.push({x:a,y:Vt[r.floor],z:l})}return s}function fc(i,t,e,n){return(n<2?-1:n<6?0:1)===i.floor&&t>=i.minX&&t<=i.maxX&&e>=i.minZ&&e<=i.maxZ}function Lh(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Me;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let v=0;v<f.count;++v)u.push(f.getX(v)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=pc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const v=pc(f);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function pc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Be(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let v=0;v<e;v++){const x=h.getComponent(d,v);a.setComponent(d+u,v,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function oa(i=512){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");if(!e)throw new Error("Canvas 2D er ikke tilgængelig");return{c:t,g:e,size:i}}function mc(i,t){const e=new Float32Array(t*t);for(let n=0;n<e.length;n++)e[n]=i();return e}function Xv(i,t,e,n){const s=(e%t+t)%t,r=(n%t+t)%t,o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=(o+1)%t,u=(a+1)%t,d=i[a*t+o],f=i[a*t+h],v=i[u*t+o],x=i[u*t+h];return d+(f-d)*l+(v-d)*c+(d-f-v+x)*l*c}function Xe(i,t,e,n){let s=0,r=.5,o=1;for(let a=0;a<5;a++)s+=r*Xv(i,t,e*o%t,n*o%t),o*=2,r*=.5;return s}function aa(i,t=!0,e=!0){const n=new Ra(i);return n.colorSpace=e?Re:An,n.wrapS=n.wrapT=t?zi:Gn,n.anisotropy=4,n.needsUpdate=!0,n}function co(i,t,e,n,s){i.strokeStyle=`rgba(20,16,14,${s})`,i.lineWidth=1;for(let r=0;r<n;r++){let o=t()*e,a=t()*e;i.beginPath(),i.moveTo(o,a);const l=6+Math.floor(t()*14);for(let c=0;c<l;c++)o+=(t()-.5)*28,a+=(t()-.3)*22,i.lineTo(o,a);i.stroke()}}function De(i,t){const e=Li(t),n=mc(e,128),s=oa();i(s.g,s.size,n,e);const r=oa(256),o=mc(Li(t^2654435769),64),a=r.g.createImageData(256,256);for(let l=0;l<256;l++)for(let c=0;c<256;c++){const h=Xe(o,64,c/4,l/4),u=Math.max(0,Math.min(255,150+h*90)),d=(l*256+c)*4;a.data[d]=a.data[d+1]=a.data[d+2]=u,a.data[d+3]=255}return r.g.putImageData(a,0,0),{map:aa(s.c,!0,!0),rough:aa(r.c,!0,!1)}}function Le(i,t,e,n={}){return new ce({map:i,roughnessMap:t,color:e,roughness:.92,metalness:.02,...n})}function qv(){const i=De((_,S,C)=>{_.fillStyle="#8c847a",_.fillRect(0,0,S,S);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.35,R*.35),T=Math.min(1,R/S)*.35+(R>S*.82?(R/S-.82)*1.4:0),L=Math.exp(-((y-180)**2+(R-300)**2)/18e3)*.25,D=(R*S+y)*4,k=.78+g*.28-T*.45-L;E.data[D]*=k,E.data[D+1]*=k*.98,E.data[D+2]*=k*.94}_.putImageData(E,0,0),co(_,Li(3),S,18,.35)},11),t=De((_,S,C)=>{_.fillStyle="#667064",_.fillRect(0,0,S,S);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.4,R*.5),T=Math.sin(y*.2)*.5+.5,L=R/S,D=(R*S+y)*4,k=.7+g*.25-L*.35*T;E.data[D]=E.data[D]*k*.85,E.data[D+1]=E.data[D+1]*k,E.data[D+2]=E.data[D+2]*k*.8}_.putImageData(E,0,0)},19),e=De((_,S)=>{_.fillStyle="#4a302c",_.fillRect(0,0,S,S);const C=64,E=30;for(let R=0;R<S/E+1;R++)for(let y=0;y<S/C+2;y++){const g=R%2?C/2:0,T=90+(R*13+y*7)%40;_.fillStyle=`rgb(${T+40},${T*.45},${T*.38})`,_.fillRect(y*C-g+2,R*E+2,C-4,E-4)}co(_,Li(8),S,8,.4)},23),n=De((_,S,C)=>{_.fillStyle="#6b5342",_.fillRect(0,0,S,S),_.strokeStyle="rgba(30,20,12,0.45)";for(let R=0;R<S;R+=96)_.strokeRect(R+8,8,80,S-16),_.strokeRect(R+16,20,64,S-40);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.8,R*.15),T=(R*S+y)*4,L=.85+g*.2;E.data[T]*=L,E.data[T+1]*=L,E.data[T+2]*=L*.9}_.putImageData(E,0,0)},29),s=De((_,S)=>{_.fillStyle="#8a8780",_.fillRect(0,0,S,S);const C=64;for(let E=0;E<S;E+=C)for(let R=0;R<S;R+=C){const y=(R*3+E*5)%17/40;_.fillStyle=`rgba(60,58,52,${.05+y})`,_.fillRect(R+2,E+2,C-4,C-4),(R+E)%(C*5)===0&&(_.strokeStyle="rgba(40,30,28,0.45)",_.strokeRect(R+8,E+8,C-16,C-16))}},31),r=De((_,S,C)=>{_.fillStyle="#6a6762",_.fillRect(0,0,S,S);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.5,R*.5),T=(R*S+y)*4,L=.75+g*.4;E.data[T]*=L,E.data[T+1]*=L,E.data[T+2]*=L}_.putImageData(E,0,0),co(_,Li(4),S,10,.4)},37),o=De((_,S,C)=>{for(let R=0;R<S;R+=48){const y=70+R%96;_.fillStyle=`rgb(${y+30},${y*.62},${y*.38})`,_.fillRect(0,R,S,46),_.fillStyle="rgba(20,12,8,0.35)",_.fillRect(0,R+45,S,3)}const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.15,R*1.4),T=(R*S+y)*4,L=.82+g*.28;E.data[T]*=L,E.data[T+1]*=L,E.data[T+2]*=L}_.putImageData(E,0,0)},41),a=De((_,S,C)=>{_.fillStyle="#7c776f",_.fillRect(0,0,S,S);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.22,R*.22),T=(Math.floor(y/80)+Math.floor(R/80))%2?.92:1,L=(R*S+y)*4,D=(.72+g*.35)*T;E.data[L]*=D,E.data[L+1]*=D,E.data[L+2]*=D*.95}_.putImageData(E,0,0)},43),l=De((_,S,C)=>{_.fillStyle="#5a2c30",_.fillRect(0,0,S,S);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.9,R*.9),T=Math.exp(-((y-S/2)**2)/4e4)*.2,L=(R*S+y)*4,D=.75+g*.35+T;E.data[L]*=D,E.data[L+1]*=D*.9,E.data[L+2]*=D*.88}_.putImageData(E,0,0)},47),c=De((_,S)=>{_.fillStyle="#6e6b64",_.fillRect(0,0,S,S);const C=72;for(let E=0;E<S;E+=C)for(let R=0;R<S;R+=C){const y=150+(R*9+E*3)%50;_.fillStyle=`rgb(${y},${y-4},${y-10})`,_.fillRect(R+2,E+2,C-4,C-4),(R/C+E/C)%7===0&&(_.fillStyle="rgba(40,20,16,0.25)",_.fillRect(R+10,E+10,C-20,C-20))}},53),h=De((_,S,C)=>{_.fillStyle="#5a564e",_.fillRect(0,0,S,S);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.6,R*.2),T=Xe(C,128,y*.1+20,R*.1)>.62?.35:0,L=(R*S+y)*4;E.data[L]=90*(.7+g*.4)+T*80,E.data[L+1]=82*(.7+g*.3)+T*30,E.data[L+2]=70*(.7+g*.3)}_.putImageData(E,0,0)},59),u=De((_,S,C)=>{_.fillStyle="#6d4e46",_.fillRect(0,0,S,S);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*1.2,R*1.2),T=Math.sin(R*.4)*.04,L=(R*S+y)*4,D=.8+g*.3+T;E.data[L]*=D,E.data[L+1]*=D,E.data[L+2]*=D}_.putImageData(E,0,0)},61),d=De((_,S,C)=>{_.fillStyle="#74716b",_.fillRect(0,0,S,S);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.3,R*.3),T=Math.exp(-((y-200)**2+(R-220)**2)/9e3)*.45,L=(R*S+y)*4,D=.8+g*.15-T;E.data[L]*=D,E.data[L+1]*=D*(1-T*.3),E.data[L+2]*=D*(1-T*.4)}_.putImageData(E,0,0)},67),f=De((_,S)=>{_.fillStyle="#3a312a",_.fillRect(0,0,S,S)},71),v=De((_,S,C)=>{_.fillStyle="#4e3b2e",_.fillRect(0,0,S,S),_.strokeStyle="rgba(20,12,8,0.6)",_.lineWidth=6,_.strokeRect(28,28,S-56,S*.42),_.strokeRect(28,S*.5,S-56,S*.42);const E=_.getImageData(0,0,S,S);for(let R=0;R<S;R++)for(let y=0;y<S;y++){const g=Xe(C,128,y*.2,R*.8),T=(R*S+y)*4,L=.85+g*.25;E.data[T]*=L,E.data[T+1]*=L,E.data[T+2]*=L}_.putImageData(E,0,0)},73),x=oa();{const _=x.g;_.clearRect(0,0,512,512);const S=Li(99);_.fillStyle="rgba(90,8,10,0.0)";for(let C=0;C<40;C++)_.fillStyle=`rgba(${80+S()*40},${6+S()*8},8,${.25+S()*.55})`,_.beginPath(),_.ellipse(40+S()*430,180+S()*160,20+S()*80,8+S()*24,S()*3,0,Math.PI*2),_.fill();_.fillStyle="rgba(60,4,6,0.7)",_.beginPath(),_.ellipse(256,270,180,36,.2,0,Math.PI*2),_.fill()}const m=aa(x.c,!1,!0),p=new ce({map:m,transparent:!0,depthWrite:!1,roughness:.45,metalness:.05,color:"#7a1014",polygonOffset:!0,polygonOffsetFactor:-2}),A=new ce({color:"#141820",roughness:.15,metalness:.4,transparent:!0,opacity:.45,emissive:"#0a1018",emissiveIntensity:.2}),w={plaster:Le(i.map,i.rough,"#ffffff"),damp:Le(t.map,t.rough,"#ffffff"),brick:Le(e.map,e.rough,"#ffffff"),panel:Le(n.map,n.rough,"#ffffff"),tileWall:Le(s.map,s.rough,"#ffffff",{roughness:.55}),concrete:Le(r.map,r.rough,"#ffffff"),wood:Le(o.map,o.rough,"#ffffff",{roughness:.78}),stone:Le(a.map,a.rough,"#ffffff"),carpet:Le(l.map,l.rough,"#ffffff",{roughness:1}),tileFloor:Le(c.map,c.rough,"#ffffff",{roughness:.42,metalness:.08}),metal:Le(h.map,h.rough,"#ffffff",{roughness:.55,metalness:.45}),fabric:Le(u.map,u.rough,"#ffffff",{roughness:.95}),ceiling:Le(d.map,d.rough,"#ffffff"),trim:Le(f.map,f.rough,"#ffffff",{roughness:.7}),door:Le(v.map,v.rough,"#ffffff",{roughness:.65}),blood:p,glass:A,eye:new ce({color:"#200000",emissive:"#ff1a12",emissiveIntensity:2.4,roughness:.3}),monster:new ce({color:"#0c0b0d",roughness:.84,metalness:.06}),dispose(){for(const _ of Object.values(w))if(_ instanceof mn){const S=_;S.map?.dispose(),S.roughnessMap?.dispose(),S.dispose()}}};return w}const Yv={wood:"wood",tile:"tileFloor",concrete:"concrete",carpet:"carpet",stone:"stone"},$v={plaster:"plaster",tile:"tileWall",concrete:"concrete",panel:"panel",brick:"brick",damp:"damp"};function jv(i,t){const e=qv(),n=new Map,s=(g,T)=>{const L=n.get(g)??[];L.push(T),n.set(g,L)};for(const g of t.rooms){const T=Vt[g.floor],L=`${g.id}|${Yv[g.floorMat]}`;for(const D of gc(g,Kv(g.id,t)))s(L,fe(D.x,T+.02,D.z,D.w,.08,D.d));if(!g.outdoors){const D=`${g.id}|ceiling`,k=T+os-.05;for(const V of gc(g,Zv(g.id,t)))s(D,fe(V.x,k,V.z,V.w,.08,V.d))}}for(const g of t.walls){const T=t.rooms.find(V=>V.id===g.roomId),L=T?$v[T.wallMat]:"plaster",D=Vt[g.floor];g.axis==="x"?s(`${g.roomId}|${L}`,fe(g.coord-.11,D,g.min,.22,os,g.max-g.min)):s(`${g.roomId}|${L}`,fe(g.min,D,g.coord-.11,g.max-g.min,os,.22));const k=.16;g.axis==="x"?s(`${g.roomId}|trim`,fe(g.coord-.13,D,g.min,.08,k,g.max-g.min)):s(`${g.roomId}|trim`,fe(g.min,D,g.coord-.13,g.max-g.min,k,.08))}for(const g of t.doors)Qv(g,s);const r=[],o=[],a=[];let l=new jt,c=new jt,h=new jt;for(const g of t.props){const T=t.rooms.find(k=>k.id===g.room);if(!T)continue;const L=Vt[T.floor]+(g.yOff??0);if(g.kind==="chair"){r.push(Pi(g.x,L,g.z,g.rot));continue}if(g.kind==="crate"){o.push(Pi(g.x,L+.34,g.z,g.rot));continue}if(g.kind==="barrel"){a.push(Pi(g.x,L+.42,g.z,g.rot));continue}const D=t_(g.kind,g.w,g.h,g.d);if(g.kind==="mannequin"||g.kind==="pot"||g.id==="secretshelf"){const k=new jt;for(const V of D){const X=e[V.mat];if(!(X instanceof mn))continue;const j=new dt(V.geo,X);j.castShadow=!0,j.receiveShadow=!0,k.add(j)}k.position.set(g.x,L,g.z),k.rotation.y=g.rot,i.add(k),g.kind==="mannequin"?(l=k,k.visible=!1):g.kind==="pot"?c=k:h=k;continue}for(const k of D)k.geo.applyMatrix4(Pi(g.x,L,g.z,g.rot)),s(`${T.id}|${k.mat}`,k.geo)}for(const g of t.stairs){const L=Vt[g.fromFloor],D=Vt[g.toFloor];for(let V=0;V<14;V++){const X=V/14,j=(V+1)/14,G=L+j*(D-L);if(g.axis==="z"){const Q=g.z+X*g.d,at=g.d/14*.96;s("stairs|concrete",fe(g.x+.15,G-.12,Q,g.w-.3,.12,at))}}const k=.9;g.axis==="z"&&(s("stairs|trim",fe(g.x,L,g.z,.08,k,g.d)),s("stairs|trim",fe(g.x+g.w-.08,L,g.z,.08,k,g.d)))}for(const g of t.decals){const T=t.rooms.find(V=>V.id===g.room);if(!T)continue;const L=Vt[T.floor]+.06,D=new Je(g.w,g.d);D.rotateX(-Math.PI/2),D.applyMatrix4(Pi(g.x,L,g.z,g.rot));const k=new dt(D,g.kind==="blood"?e.blood:e.concrete);k.receiveShadow=!0,i.add(k)}const u=[],d=new $e(.04,.05,.18,6),f=e.glass;for(const g of t.rooms){if(g.outdoors||g.w<5||g.d<5)continue;const T=nc(g.id),L=1+T%3;for(let D=0;D<L;D++){const k=new dt(d,f),V=(T>>D*3&7)/7,X=(T>>D*5+2&7)/7;k.position.set(g.x+.6+V*(g.w-1.2),Vt[g.floor]+.1,g.z+.6+X*(g.d-1.2)),k.userData.detail=!0,i.add(k),u.push(k)}if(T%2===0){const D=n_();D.position.set(g.x+.35,Vt[g.floor]+os-.45,g.z+.35),D.userData.detail=!0,i.add(D),u.push(D)}}let v=0;for(const g of t.walls){if(!g.exterior||v>14||g.max-g.min<3.2||nc(g.roomId+g.coord)%3!==0)continue;const L=Vt[g.floor]+1.45,D=(g.min+g.max)/2;e.trim;const k=new dt(new Je(1.15,1.5),e.glass);g.axis==="x"?(k.position.set(g.coord,L,D),k.rotation.y=Math.PI/2,s(`${g.roomId}|trim`,fe(g.coord-.08,L-.8,D-.65,.08,1.6,.08)),s(`${g.roomId}|trim`,fe(g.coord-.08,L-.8,D+.57,.08,1.6,.08))):(k.position.set(D,L,g.coord),s(`${g.roomId}|trim`,fe(D-.65,L-.8,g.coord-.08,.08,1.6,.08)),s(`${g.roomId}|trim`,fe(D+.57,L-.8,g.coord-.08,.08,1.6,.08))),k.userData.window=!0,i.add(k),v++}const x=[];for(const[g,T]of n){const L=g.split("|")[1],D=Lh(T,!1);if(!D)continue;D.computeVertexNormals();const k=e[L];if(!(k instanceof mn))continue;const V=new dt(D,k);V.castShadow=!0,V.receiveShadow=!0,i.add(V),x.push(D);for(const X of T)X.dispose()}const m=ho(e_(),e.wood,r,i),p=ho(new Se(.68,.68,.68),e.wood,o,i),A=ho(new $e(.28,.3,.85,8),e.metal,a,i),w=new Map;for(const g of t.doors){if(g.kind==="arch"||g.kind==="hidden")continue;const T=new jt,L=e.door.clone(),D=new dt(new Se(g.width*.96,2.42,.12),L);D.castShadow=!0,D.receiveShadow=!0,D.position.set(g.width*.48,1.21,0);const k=new dt(new me(.04,8,8),e.metal);k.position.set(g.width*.78,1.1,.07),T.add(D,k);const V=Vt[g.floor];g.axis==="x"?(T.position.set(g.coord,V,g.spanMin),T.rotation.y=-Math.PI/2):(T.position.set(g.spanMin,V,g.coord),T.rotation.y=0),T.userData.closedYaw=T.rotation.y,T.userData.swing=1,T.userData.panel=D,i.add(T),w.set(g.id,T),i_(i,g)}const _=new Map;for(const g of t.pickups){const T=t.rooms.find(D=>D.id===g.room);if(!T)continue;const L=s_(g.itemId,e);L.position.set(g.x,Vt[T.floor]+.85,g.z),i.add(L),_.set(g.id,L)}const S=[];for(const g of t.lights){let T;if(g.room==="hall"){const k=new ea(g.color,g.intensity,g.distance,1.05,.55,1.15);k.position.set(g.x,g.y,g.z),k.target.position.set(g.x,Vt[0],g.z),k.castShadow=!0,k.shadow.mapSize.set(512,512),k.shadow.bias=-4e-4,i.add(k,k.target),T=k}else{const k=new na(g.color,g.intensity,g.distance,1.35);k.position.set(g.x,g.y,g.z),i.add(k),T=k}const L=new dt(new $e(.22,.28,.12,12),new ce({color:"#2a2622",roughness:.6,metalness:.2}));L.position.set(g.x,g.y-.02,g.z);const D=new dt(new me(.06,10,8),new ce({color:g.color,emissive:g.color,emissiveIntensity:.45,roughness:.4}));D.position.set(g.x,g.y-.12,g.z),i.add(L,D),S.push({def:g,light:T,base:g.intensity})}const C=new Me,E=400,R=new Float32Array(E*3);for(let g=0;g<E;g++)R[g*3]=30+Math.random()*8,R[g*3+1]=Math.random()*6,R[g*3+2]=28+Math.random()*8;C.setAttribute("position",new Be(R,3));const y=new ph(C,new Aa({color:"#9bb0c4",size:.035,transparent:!0,opacity:.35,depthWrite:!1}));return y.visible=!1,i.add(y),{materials:e,doors:w,pickups:_,lights:S,mannequin:l,pot:c,secretShelf:h,detail:u,rain:y,dispose(){e.dispose();for(const g of x)g.dispose();m.geometry.dispose(),p.geometry.dispose(),A.geometry.dispose(),C.dispose(),y.material.dispose()}}}function Kv(i,t){return i==="trappe1"?t.stairs.filter(e=>e.id==="stair_01"):i==="trappe2"?t.stairs.filter(e=>e.id==="stair_12"):[]}function Zv(i,t){return i==="trappe0"?t.stairs.filter(e=>e.id==="stair_01"):i==="trappe1"?t.stairs.filter(e=>e.id==="stair_12"):[]}function gc(i,t){let e=[i];for(const n of t){const s=[];for(const r of e)s.push(...Jv(r,n));e=s}return e.filter(n=>n.w>.05&&n.d>.05)}function Jv(i,t){const e=i.x+i.w,n=i.z+i.d,s=t.x+t.w,r=t.z+t.d,o=Math.max(i.x,t.x),a=Math.max(i.z,t.z),l=Math.min(e,s),c=Math.min(n,r);if(l-o<.05||c-a<.05)return[i];const h=[];return a>i.z&&h.push({x:i.x,z:i.z,w:i.w,d:a-i.z}),n>c&&h.push({x:i.x,z:c,w:i.w,d:n-c}),o>i.x&&h.push({x:i.x,z:a,w:o-i.x,d:c-a}),e>l&&h.push({x:l,z:a,w:e-l,d:c-a}),h}function fe(i,t,e,n,s,r){const o=new Se(Math.max(.02,n),Math.max(.02,s),Math.max(.02,r));return Ih(o,Math.max(.02,n),Math.max(.02,s),Math.max(.02,r)),o.applyMatrix4(Pi(i+n/2,t+s/2,e+r/2,0)),o}function Ih(i,t,e,n){const s=i.getAttribute("uv"),r=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let o=0;o<6;o++){const a=r[o][0]*.42,l=r[o][1]*.42;for(let c=0;c<4;c++){const h=o*4+c;s.setXY(h,s.getX(h)*a,s.getY(h)*l)}}s.needsUpdate=!0}function Pi(i,t,e,n){const s=new Kt,r=new qi().setFromAxisAngle(new I(0,1,0),n);return s.compose(new I(i,t,e),r,new I(1,1,1)),s}function Qv(i,t){const e=Vt[i.floor],n=2.55,s=.08;i.axis==="x"?(t("frame|trim",fe(i.coord-.06,e,i.spanMin-s,.12,n,s)),t("frame|trim",fe(i.coord-.06,e,i.spanMax,.12,n,s)),t("frame|trim",fe(i.coord-.06,e+n-s,i.spanMin,.12,s,i.width))):(t("frame|trim",fe(i.spanMin-s,e,i.coord-.06,s,n,.12)),t("frame|trim",fe(i.spanMax,e,i.coord-.06,s,n,.12)),t("frame|trim",fe(i.spanMin,e+n-s,i.coord-.06,i.width,s,.12)))}function Et(i,t,e,n,s,r,o){const a=new Se(i,t,e);return Ih(a,i,t,e),a.translate(n,s+t/2,r),{geo:a,mat:o}}function t_(i,t,e,n){switch(i){case"pillar":return[Et(t,e,n,0,0,0,"stone")];case"bench":return[Et(t,.08,n,0,.42,0,"wood"),Et(.08,.42,n,-t/2,0,0,"wood"),Et(.08,.42,n,t/2,0,0,"wood")];case"desk":case"table":return[Et(t,.08,n,0,e-.08,0,"wood"),Et(.08,e-.08,.08,-t/2+.08,0,-n/2+.08,"wood"),Et(.08,e-.08,.08,t/2-.08,0,-n/2+.08,"wood"),Et(.08,e-.08,.08,-t/2+.08,0,n/2-.08,"wood"),Et(.08,e-.08,.08,t/2-.08,0,n/2-.08,"wood")];case"shelf":case"bookshelf":return[Et(t,e,.06,0,0,-n/2,"wood"),Et(t,.05,n,0,.15,0,"wood"),Et(t,.05,n,0,e*.45,0,"wood"),Et(t,.05,n,0,e*.75,0,"wood")];case"locker":return[Et(t,e,n,0,0,0,"metal"),Et(t*.8,.04,.02,0,e*.55,n/2,"trim")];case"counter":return[Et(t,e,n,0,0,0,"tileWall"),Et(t,.06,n,0,e-.06,0,"metal")];case"pew":return[Et(t,.08,n,0,.42,0,"wood"),Et(t,.55,.08,0,.42,-n/2,"wood")];case"altar":return[Et(t,e,n,0,0,0,"stone"),Et(.08,.35,.08,-.3,e,0,"trim")];case"sofa":return[Et(t,.28,n,0,.22,0,"fabric"),Et(t,.4,.12,0,.45,-n/2+.06,"fabric")];case"bathtub":return[Et(t,e,n,0,0,0,"tileWall")];case"gurney":return[Et(t,.08,n,0,.7,0,"metal"),Et(.06,.7,.06,-t/2,0,-n/2,"metal"),Et(.06,.7,.06,t/2,0,n/2,"metal")];case"cabinet":case"dresser":return[Et(t,e,n,0,0,0,"wood")];case"stove":return[Et(t,e,n,0,0,0,"metal")];case"generator":case"boiler":return[Et(t,e,n,0,0,0,"metal"),Et(.2,.5,.2,0,e,0,"trim")];case"fridge":return[Et(t,e,n,0,0,0,"metal")];case"safe":return[Et(t,e,n,0,0,0,"metal")];case"bed":return[Et(t,.12,n,0,.32,0,"wood"),Et(t*.94,.14,n*.9,0,.44,0,"fabric"),Et(t*.28,.1,n*.28,-t*.28,.58,-n*.28,"fabric")];case"wheelchair":return[Et(.4,.08,.4,0,.45,0,"metal"),Et(.4,.4,.06,0,.5,-.18,"fabric")];case"plant":return[Et(.22,.28,.22,0,0,0,"trim")];case"beam":return[Et(t,e,n,0,0,0,"wood")];case"mannequin":return[Et(.32,.7,.16,0,.85,0,"monster"),Et(.18,.22,.16,0,1.55,0,"monster"),Et(.1,.7,.1,-.24,.85,0,"monster"),Et(.1,.7,.1,.24,.85,0,"monster")];case"pot":return[Et(.22,.2,.22,0,.7,0,"metal")];default:return[Et(t,e,n,0,0,0,"trim")]}}function e_(){const i=[Et(.4,.06,.4,0,.46,0,"wood"),Et(.4,.42,.06,0,.5,-.17,"wood"),Et(.05,.46,.05,-.16,0,-.16,"wood"),Et(.05,.46,.05,.16,0,-.16,"wood"),Et(.05,.46,.05,-.16,0,.16,"wood"),Et(.05,.46,.05,.16,0,.16,"wood")];return Lh(i.map(e=>e.geo),!1)??new Se(.4,.9,.4)}function ho(i,t,e,n){const s=new tg(i,t,Math.max(1,e.length));return s.castShadow=!0,s.receiveShadow=!0,e.forEach((r,o)=>s.setMatrixAt(o,r)),e.length||(s.count=0),s.instanceMatrix.needsUpdate=!0,n.add(s),s}function n_(){const i=new jt,t=new qe({color:"#c8c2b6",transparent:!0,opacity:.18,side:Ye,depthWrite:!1}),e=new dt(new Je(.7,.7),t),n=new dt(new Je(.7,.7),t);return n.rotation.y=.8,i.add(e,n),i}function i_(i,t,e){const n=(r,o,a,l,c)=>{if(!r)return;const h=document.createElement("canvas");h.width=256,h.height=64;const u=h.getContext("2d");if(!u)return;u.fillStyle="#2a241e",u.fillRect(0,0,256,64),u.strokeStyle="#8a7a66",u.strokeRect(3,3,250,58),u.fillStyle="#e6d7c4",u.font="28px Georgia",u.textAlign="center",u.textBaseline="middle",u.fillText(r,128,34);const d=new Ra(h);d.colorSpace=Re;const f=new dt(new Je(.72,.18),new ce({map:d,roughness:.8,emissive:"#2a2118",emissiveIntensity:.25}));f.position.set(o,a,l),f.rotation.y=c,i.add(f)},s=Vt[t.floor]+2.15;t.axis==="x"?(n(t.signA??"",t.coord-.2,s,t.center,Math.PI/2),n(t.signB??"",t.coord+.2,s,t.center,-Math.PI/2)):(n(t.signA??"",t.center,s,t.coord-.2,0),n(t.signB??"",t.center,s,t.coord+.2,Math.PI))}function s_(i,t){const e=new jt;let n;if(i.includes("fuse")){const s=i.includes("red")?"#b4231c":i.includes("blue")?"#2458a8":"#c6a227";n=new dt(new $e(.05,.05,.16,8),new ce({color:s,roughness:.4,metalness:.3,emissive:s,emissiveIntensity:.2}))}else i==="battery"?n=new dt(new $e(.05,.05,.16,8),t.metal):i.includes("key")?n=new dt(new Se(.16,.04,.05),t.metal):i==="medkit"?n=new dt(new Se(.22,.1,.16),new ce({color:"#f2f2f0",roughness:.5})):i==="rosary"?n=new dt(new gs(.08,.015,6,12),t.metal):i==="crowbar"?(n=new dt(new Se(.5,.04,.04),t.metal),n.rotation.z=.4):i==="evidence"?n=new dt(new Se(.28,.04,.2),t.door):n=new dt(new Se(.2,.02,.16),t.door);return e.add(n),e}class r_{constructor(t){this.el=t,window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey||e.code==="ControlLeft"||e.code==="ControlRight")&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),this.edges.add(e.code),["KeyE","KeyF","KeyR","Tab","KeyI","Escape","KeyG","KeyQ","Space","F3","F4"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("mousemove",e=>{(this.pointerLocked||e.buttons===1)&&(this.lookX+=e.movementX,this.lookY+=e.movementY)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.el}),window.addEventListener("blur",()=>{this.keys.clear()})}keys=new Set;edges=new Set;lookX=0;lookY=0;pointerLocked=!1;virtual=null;sens=.00215;setSensitivity(t){this.sens=t}consumeLook(){const t=this.lookX*this.sens,e=this.lookY*this.sens;return this.lookX=0,this.lookY=0,{x:t,y:e}}wish(){const t=this.virtual,e=r=>this.keys.has(r),n=t?.forward??(e("KeyW")||e("ArrowUp")?1:0)-(e("KeyS")||e("ArrowDown")?1:0),s=t?.strafe??(e("KeyD")||e("ArrowRight")?1:0)-(e("KeyA")||e("ArrowLeft")?1:0);return{forward:n,strafe:s,sprint:t?.sprint??(e("ShiftLeft")||e("ShiftRight")),crouch:t?.crouch??(e("ControlLeft")||e("ControlRight")||e("KeyC")),jump:t?.jump??e("Space")}}pressed(t){return this.edges.has(t)?(this.edges.delete(t),!0):!1}lock(){const e=this.el.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}unlock(){document.pointerLockElement&&document.exitPointerLock()}}const o_="1907",We=(i,t,e,n)=>({id:i,name:t,description:e,kind:"note",stack:1,droppable:!1,text:n}),Ua={note_maja:We("note_maja","Majas brev","Kuverten er fugtig. Blækket er Majas.",`Emil

Hvis du læser det her, er jeg gået ind alene. Det var dumt. Skt. Agnes lukkede officielt i 1987, men porten er ikke den eneste vej ud — og ikke den eneste vej ind.

De flyttede ikke patienterne. De flyttede journalerne ned under jorden og lod huset glemme dem. Vogteren går stadig rundgang. Han kan lide mørke, og han hader lys i øjnene.

Koden er årstallet på stifterens sten. Jeg nåede ikke pengeskabet. Kapelnøglen skulle ligge på første sal. Bagporten er død uden strøm. Der er også en tunnel under lighuset, hvis porten svigter.

Hvis lyset dør, så stå stille. Hvis han hvisker dit navn, er det allerede for sent at løbe.

— Maja`),note_log:We("note_log","Vagtbog","Sidste side i receptionens bog.",`VAGTBLOG — 12. november 1987

03:10  Østfløjen mørk. Sikringerne er sprunget igen.
03:40  Lyd fra kapellet. Ingen nøgle i skranken.
04:05  Dr. Holm beordrer kælderen aflåst.
04:20  Jeg slukker ikke lyset i gangen. Jeg slukker ikke lyset.
04:31  Nogen står i døren. Det er ikke en patient.

Siden er revet over. Resten mangler.`),note_code:We("note_code","Stiftelsesprotokol","Et arkivark med årstal og en henvisning.",`STIFTELSESPROTOKOL (uddrag)

Skt. Agnes Asyl grundlagt 1907 af Agnes Holm.
Direktørens pengeskab er sat til stiftelsesåret.
Nøglerne til kapellet opbevares på sygeplejerskekontoret — 1. sal.

"Det der skrives ned, kan ikke begraves."`),note_generator:We("note_generator","Nødstrømsnote","En falmet instruktion ved generatoren.",`NØDSTRØM — KUN FOR VEDLIGEHOLD

Tre sikringer skal sidde samtidigt:
  RØD  — køkkenet, ved komfuret
  BLÅ  — fyrrummet
  GUL  — kælderdepotet

Uden strøm forbliver bagportens lås død.
Hylden i lighuset kan brydes med kobenet fra fyrrummet.
Tunnellen bagved er ikke tegnet færdig. Kravl, hvor loftet knækker.`),note_nurse:We("note_nurse","Seddel fra vagten","Skrevet med en hånd der ryster.",`Til den næste vagt —

Kapelnøglen ligger i øverste skuffe. Jeg lægger den der, fordi mine hænder ryster for meget til at bede.

Lad være med at tælle sengene på 1. sal. Der er altid én for meget.

— Søster`),note_director:We("note_director","Holms brev","Fundet i pengeskabet. Papiret er tungt.",`Fortroligt. Dr. E. Holm.

Forsøgene i kælderen skulle kun vare vinteren over. Agnes' navn holdt bestyrelsen rolig. Det gjorde Vogteren ikke.

Han var ansat til at holde orden. Nu holder han huset. Hvis nogen finder mapperne i kapellet, så brænd porten — ikke journalerne.

Journalerne er husets hukommelse. Uden dem er han bare en mand i en uniform der ikke passer mere.`),note_secret:We("note_secret","Uafrystelig note","Ikke stemplet. Ikke arkiveret.",`Ikke arkiveret.

Patienterne i fløj B blev ført ned efter lukketid. De der ikke kom op igen, står ikke i de officielle tal.

Rosenkransen lå om Agnes' hånd, da de murede nichen til. Den får ham til at tøve. Kun et øjeblik. Det er nok, hvis du allerede er i bevægelse.`),file_1:We("file_1","Journal 12","Patientjournal. Navnet er streget over.",`JOURNAL 12 — indlagt 1979

Patienten beskriver en vagt der står stille for enden af sengen, også når lyset er tændt. Anbefaling: ingen nattevagter alene i østfløjen.

Overført til kælderobservation 2. marts 1986. Ingen udskrivelse.`),file_2:We("file_2","Journal 19","Mappen lugter af fugt og jern.",`JOURNAL 19 — "stilleperioden"

Efter tre døgn uden søvn holdt patienten op med at blinke. Dr. Holm noterede det som fremgang. Sygeplejersken noterede det ikke.

Sidste linje, anden håndskrift: Han tæller stadig med.`),file_3:We("file_3","Journal 27","Et barnefoto er hæftet bagpå. Det vender forkert.",`JOURNAL 27 — stue 101

Familien fik at vide, at patienten var overført til et andet amt. Der findes intet modtagebrev.

På bagsiden af fotografiet, med blyant: "tæl ikke vinduerne."`),file_4:We("file_4","Journal 33","Blækket er tværet ud, som om siden har ligget i vand.",`JOURNAL 33 — stue 102

Patienten nægtede at sove med ryggen til døren. Natten efter var sengen flyttet, ikke patienten.

Margen: Hvis du ser én der står helt stille, så er det ikke en patient. Patienter trækker vejret.`),file_5:We("file_5","Journal 41","Et ark fra lighuset. Hjørnet er brændt.",`JOURNAL 41 — kælder

Dødstidspunkt udeladt. Årsag udeladt. Underskrift: Holm.

Under stregen, ikke med maskine: Vi løb tør for plads i skufferne, så vi begyndte at bruge nicherne.`),file_6:We("file_6","Journal 44","Den sidste mappe. Den har aldrig haft et stempel.",`JOURNAL 44 — ikke oprettet

Navn: Agnes Holm. Status: stifter, ikke patient. Alligevel ligger journalen her.

"Hun bad os huske hende som et hus. Huse husker tilbage."

Hvis alle seks journaler forlader grunden sammen med bevismappen, er der noget at trykke. Ellers er det kun en historie.`),battery:{id:"battery",name:"Batteri",description:"Et slidt batteri til lygten. Tryk R for at skifte.",kind:"battery",stack:8,droppable:!0},fuse_red:{id:"fuse_red",name:"Rød sikring",description:"Keramik og kobber. Hører til i generatoren.",kind:"fuse",stack:1,droppable:!1},fuse_blue:{id:"fuse_blue",name:"Blå sikring",description:"Mærket med et blåt bånd. Fyrrummet.",kind:"fuse",stack:1,droppable:!1},fuse_yellow:{id:"fuse_yellow",name:"Gul sikring",description:"Den sidste af de tre. Depotet.",kind:"fuse",stack:1,droppable:!1},key_op:{id:"key_op",name:"Nøgle fra operationsstuen",description:"En af tre. Uden den forbliver vejen ud lukket.",kind:"key",stack:1,droppable:!1},key_arkiv:{id:"key_arkiv",name:"Nøgle fra arkivet",description:"En af tre. Den lå mellem journalerne.",kind:"key",stack:1,droppable:!1},key_kapel:{id:"key_kapel",name:"Nøgle fra kapellet",description:"En af tre. Kold som alteret.",kind:"key",stack:1,droppable:!1},chapel_key:{id:"chapel_key",name:"Kapelnøgle",description:"Tung, kold messing. Passer til kapeldøren.",kind:"key",stack:1,droppable:!1},master_key:{id:"master_key",name:"Hovednøgle",description:"Direktørens nøgle. Bagporten vil have den — og strøm.",kind:"key",stack:1,droppable:!1},evidence:{id:"evidence",name:"Bevismappe",description:"Kapellets mappe. Uden den er flugten kun en flugt.",kind:"story",stack:1,droppable:!1,text:`BEVISMAPPE — kapellet, Skt. Agnes

Korrespondance mellem Dr. Holm og amtet, 1984–1987.
Overførsler uden modtager.
En liste over navne der ikke optræder i de offentlige dødsbøger.

Det er nok til en artikel. Det er ikke nok til at gøre huset færdigt.
Seks journaler mangler, hvis nogen skal tro på det hele.`},rosary:{id:"rosary",name:"Agnes’ rosenkrans",description:"Perlerne er varme. Tryk Q for at holde den frem. To gange.",kind:"special",stack:1,droppable:!1,text:"Perlerne er slidt skæve. Når du holder den frem, standser skridtene et øjeblik — ikke af ærbødighed, af genkendelse."},crowbar:{id:"crowbar",name:"Koben",description:"Rustent. Nok til at rokke en hylde der ikke vil flytte sig.",kind:"tool",stack:1,droppable:!1},medkit:{id:"medkit",name:"Førstehjælp",description:"Gazebind og en halv flaske sprit. Bruges fra inventaret.",kind:"consumable",stack:4,droppable:!0,heal:48},blueprint:{id:"blueprint",name:"Bygningsplan",description:"En gulnet plantegning. Rum du har besøgt, er tydeligere.",kind:"map",stack:1,droppable:!1,text:`SKT. AGNES — PLANTEGNING
Kælder, stueetage, 1. sal.
Hemmelige rum er ikke tegnet. Tunnellen er kun en stiplet streg.`}},Uh=["file_1","file_2","file_3","file_4","file_5","file_6"];function ii(i){const t=Ua[i];if(!t)throw new Error(`Ukendt genstand: ${i}`);return t}function kh(i){return i.map(t=>({...t}))}function ka(i,t){return i.reduce((e,n)=>n.itemId===t?e+n.count:e,0)}function pe(i,t){return ka(i,t)>0}function Ks(i,t,e=1){const n=ii(t),s=kh(i);let r=Math.min(e,Math.max(0,n.stack-ka(s,t)));const o=r,a=s.find(l=>l.itemId===t);if(a){const l=Math.min(r,n.stack-a.count);a.count+=l,r-=l}return r>0&&s.push({itemId:t,count:r}),{slots:s,added:o}}function pr(i,t,e=1){const n=kh(i);let s=e;for(let r=n.length-1;r>=0&&s>0;r--){if(n[r].itemId!==t)continue;const o=Math.min(n[r].count,s);n[r].count-=o,s-=o,n[r].count<=0&&n.splice(r,1)}return n}function vc(i,t){const e=Ua[t];return!e||!e.droppable||ka(i,t)<=0?{slots:i,dropped:!1}:{slots:pr(i,t,1),dropped:!0}}function a_(i,t){const e=Ua[t];return!e||e.kind!=="consumable"||!pe(i,t)?{slots:i,heal:0}:{slots:pr(i,t,1),heal:e.heal??0}}const Nh=100,Fh=100/170,l_=Fh*.18,c_=45;function h_(i,t,e){const n=Math.max(0,e);let s=i,r=t,o=!1;return r?(s=Math.max(0,s-Fh*n),s<=0&&(r=!1,o=!0)):s=Math.min(Nh,s+l_*n),{charge:s,on:r,died:o}}function _c(i,t=c_){return Math.min(Nh,Math.max(0,i)+t)}function Zs(i){return i<=.5?"empty":i<12?"critical":i<25?"low":"ok"}const Oh=[0,1,2,3],zh=i=>`skt-agnes-save-${i}`;function u_(){return localStorage}function d_(i){if(!i||typeof i!="object")return!1;const t=i;return t.version===1&&!!t.player&&typeof t.player.x=="number"&&Array.isArray(t.inventory)}function f_(i,t,e,n=Date.now()){const s={version:1,slot:t,savedAt:n,snapshot:structuredClone(e)};return i.setItem(zh(t),JSON.stringify(s)),s}function ds(i,t){const e=i.getItem(zh(t));if(!e)return null;try{const n=JSON.parse(e);return!n||n.version!==1||!d_(n.snapshot)?null:(n.slot=t,n)}catch{return null}}function xc(i){return Oh.map(t=>ds(i,t))}function yc(i){let t=null;for(const e of Oh){const n=ds(i,e);n&&(!t||n.savedAt>t.savedAt)&&(t=n)}return t}const Bh="skt-agnes-settings";function la(){const i=typeof navigator<"u"?navigator:void 0,t=i?i.deviceMemory:void 0,e=i?.hardwareConcurrency;return{quality:t!==void 0&&t<=4||e!==void 0&&e<=4?"low":"medium",resolutionScale:1,mouseSensitivity:.00135,masterVolume:.8,musicVolume:.7,sfxVolume:.85,brightness:1,fpsCap:60,fullscreen:!1,motionBlur:!1,cameraShake:!0,invertY:!1}}function Ri(i,t,e){return Math.max(t,Math.min(e,i))}function Na(i){const t=la(),e=i??{},n=e.quality==="low"||e.quality==="high"||e.quality==="medium"?e.quality:t.quality,s=e.fpsCap,r=s===0||s===30||s===60||s===120?s:t.fpsCap;return{quality:n,resolutionScale:Ri(typeof e.resolutionScale=="number"?e.resolutionScale:t.resolutionScale,.5,1.25),mouseSensitivity:Ri(typeof e.mouseSensitivity=="number"?e.mouseSensitivity:t.mouseSensitivity,4e-4,.01),masterVolume:Ri(typeof e.masterVolume=="number"?e.masterVolume:t.masterVolume,0,1),musicVolume:Ri(typeof e.musicVolume=="number"?e.musicVolume:t.musicVolume,0,1),sfxVolume:Ri(typeof e.sfxVolume=="number"?e.sfxVolume:t.sfxVolume,0,1),brightness:Ri(typeof e.brightness=="number"?e.brightness:t.brightness,.55,1.6),fpsCap:r,fullscreen:typeof e.fullscreen=="boolean"?e.fullscreen:t.fullscreen,motionBlur:typeof e.motionBlur=="boolean"?e.motionBlur:t.motionBlur,cameraShake:typeof e.cameraShake=="boolean"?e.cameraShake:t.cameraShake,invertY:typeof e.invertY=="boolean"?e.invertY:t.invertY}}function p_(i){const t=i.getItem(Bh);if(!t)return la();try{return Na(JSON.parse(t))}catch{return la()}}function m_(i,t){i.setItem(Bh,JSON.stringify(Na(t)))}const Js={x:6,y:0,z:6,yaw:Math.PI/2},Qs={x:42,y:0,z:9,yaw:Math.PI};function ca(){return{version:1,playTime:0,player:{x:Js.x,y:Js.y,z:Js.z,yaw:Js.yaw,pitch:0,health:100,stamina:100,battery:100,flashlightOn:!1,crouching:!1},inventory:[{itemId:"note_maja",count:1}],pickedUp:[],flags:{generatorOn:!1,secretOpen:!1,safeOpen:!1,radioOn:!1,introDone:!1,mannequinUsed:!1,mannequinOn:!1,powerCut:!1},visited:["reception"],doorsOpen:[],doorsUnlocked:[],monster:{x:Qs.x,y:Qs.y,z:Qs.z,yaw:Qs.yaw,state:"Patrol",waypointIndex:0,suspicion:0,blindTime:0},rosaryCharges:2,iFrame:0,events:sa()}}function Hh(i){return Uh.reduce((t,e)=>t+(pe(i.inventory,e)?1:0),0)}const Vh=[{id:"key_op",name:"Nøgle fra operationsstuen"},{id:"key_arkiv",name:"Nøgle fra arkivet"},{id:"key_kapel",name:"Nøgle fra kapellet"}];function cr(i){return Vh.filter(t=>pe(i.inventory,t.id)).length}function g_(i){return Vh.filter(t=>!pe(i.inventory,t.id)).map(t=>t.name)}function ha(i){const t=cr(i);return[{id:"keys",text:`Find de tre nøgler (${t}/3)`,done:t>=3},{id:"leave",text:"Åbn UD TIL STILHEDEN",done:!1}]}function Mc(i){return ha(i).find(t=>!t.done)??ha(i)[0]}function v_(i){const t=ha(i).filter(n=>n.id!=="leave");return t.filter(n=>n.done).length/t.length}function __(i,t){if(t==="death")return"optagelsen";if(t==="tunnel")return"flugten";const e=Hh(i),n=pe(i.inventory,"evidence"),s=pe(i.inventory,"rosary");return n&&s&&e>=6?"vidnet":n?"sandheden":"tom_port"}function x_(i){switch(i){case"vidnet":return{kicker:"Afslutning",title:"Vidnet",paragraphs:["Bagporten giver sig, da strømmen og nøglen endelig er enige. Regnen er koldere end huset. Under armen har du bevismappen, rosenkransen og alle seks journaler.","Maja står ikke på vejen. Det gør ingen. Men navnene gør. I morgen er Skt. Agnes ikke længere en anekdote, nogen kan lukke en dør på.","Et sted bag dig standser et par skridt ved tærsklen og bliver der. Huset husker. Nu gør nogen udenfor det også."]};case"sandheden":return{kicker:"Afslutning",title:"Sandheden",paragraphs:["Du har ikke hvert ark. Du har nok. Bevismappen vejer mere end lygten, og porten lukker bag dig med en lyd der endelig lyder som en lås og ikke som en mund.","Artiklen vil blive modsagt. Det er i orden. Modsigelse er også et spor, og spor er det eneste, Vogteren ikke kan patruljere."]};case"tom_port":return{kicker:"Afslutning",title:"Den tomme port",paragraphs:["Porten åbner. Du løber. Dine hænder er tomme.",'I dagslys vil du lyde som alle de andre, der "bare havde en fornemmelse" af Skt. Agnes. Huset beholder papirerne. Du beholder pulsen. Ingen af delene rækker.']};case"flugten":return{kicker:"Afslutning",title:"Flugten",paragraphs:["Tunnellen lugter af jern og regn. Du kravler ud under marehalmen, og vinden tager lygten et øjeblik, før den giver den tilbage.","Bag dig bliver bygningen stående med sine arkiver, sine senge og sin vagt. Du slap ud. Det er ikke det samme som at afslutte noget."]};case"optagelsen":return{kicker:"Afslutning",title:"Optagelsen",paragraphs:["Lygten peger op i loftet. Nogen samler den op. Det er ikke dig.","Dit navn står på en linje, der ikke fandtes i går, med en håndskrift du genkender. Vogteren retter på uniformen og fortsætter sin runde. Der er én seng mere, end der var."]}}}const fs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class hi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const y_=new ba(-1,1,1,-1,0,1);class M_ extends Me{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const S_=new M_;class Sr{constructor(t){this._mesh=new dt(S_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,y_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ua extends hi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Cn.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Sr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sc extends hi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class b_ extends hi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class bc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ua(fs),this.copyPass.material.blending=ke,this.clock=new Mg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sc!==void 0&&(o instanceof Sc?n=!0:o instanceof b_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wc extends hi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const w_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Vi extends hi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new je(r,o,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new je(r,o,{type:hn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new je(r,o,{type:hn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=w_;this.highPassUniforms=Cn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=fs;this.copyUniforms=Cn.clone(h.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:hr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new qe,this.fsQuad=new Sr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Vi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Vi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Vi.BlurDirectionX=new nt(1,0);Vi.BlurDirectionY=new nt(0,1);const E_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class T_ extends hi{constructor(){super();const t=E_;this.uniforms=Cn.clone(t.uniforms),this.material=new fg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Sr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Wt.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class A_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,v=t-d,x=e-f;let m,p;v>x?(m=1,p=0):(m=0,p=1);const A=v-m+h,w=x-p+h,_=v-1+2*h,S=x-1+2*h,C=l&255,E=c&255,R=this.perm[C+this.perm[E]]%12,y=this.perm[C+m+this.perm[E+p]]%12,g=this.perm[C+1+this.perm[E+1]]%12;let T=.5-v*v-x*x;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[R],v,x));let L=.5-A*A-w*w;L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[y],A,w));let D=.5-_*_-S*S;return D<0?r=0:(D*=D,r=D*D*this.dot(this.grad3[g],_,S)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,v=(h+u+d)*f,x=h-v,m=u-v,p=d-v,A=t-x,w=e-m,_=n-p;let S,C,E,R,y,g;A>=w?w>=_?(S=1,C=0,E=0,R=1,y=1,g=0):A>=_?(S=1,C=0,E=0,R=1,y=0,g=1):(S=0,C=0,E=1,R=1,y=0,g=1):w<_?(S=0,C=0,E=1,R=0,y=1,g=1):A<_?(S=0,C=1,E=0,R=0,y=1,g=1):(S=0,C=1,E=0,R=1,y=1,g=0);const T=A-S+f,L=w-C+f,D=_-E+f,k=A-R+2*f,V=w-y+2*f,X=_-g+2*f,j=A-1+3*f,G=w-1+3*f,Q=_-1+3*f,at=h&255,gt=u&255,Dt=d&255,Xt=this.perm[at+this.perm[gt+this.perm[Dt]]]%12,q=this.perm[at+S+this.perm[gt+C+this.perm[Dt+E]]]%12,tt=this.perm[at+R+this.perm[gt+y+this.perm[Dt+g]]]%12,mt=this.perm[at+1+this.perm[gt+1+this.perm[Dt+1]]]%12;let it=.6-A*A-w*w-_*_;it<0?s=0:(it*=it,s=it*it*this.dot3(this.grad3[Xt],A,w,_));let Mt=.6-T*T-L*L-D*D;Mt<0?r=0:(Mt*=Mt,r=Mt*Mt*this.dot3(this.grad3[q],T,L,D));let Tt=.6-k*k-V*V-X*X;Tt<0?o=0:(Tt*=Tt,o=Tt*Tt*this.dot3(this.grad3[tt],k,V,X));let Ct=.6-j*j-G*G-Q*Q;return Ct<0?a=0:(Ct*=Ct,a=Ct*Ct*this.dot3(this.grad3[mt],j,G,Q)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,v;const x=(t+e+n+s)*l,m=Math.floor(t+x),p=Math.floor(e+x),A=Math.floor(n+x),w=Math.floor(s+x),_=(m+p+A+w)*c,S=m-_,C=p-_,E=A-_,R=w-_,y=t-S,g=e-C,T=n-E,L=s-R,D=y>g?32:0,k=y>T?16:0,V=g>T?8:0,X=y>L?4:0,j=g>L?2:0,G=T>L?1:0,Q=D+k+V+X+j+G,at=o[Q][0]>=3?1:0,gt=o[Q][1]>=3?1:0,Dt=o[Q][2]>=3?1:0,Xt=o[Q][3]>=3?1:0,q=o[Q][0]>=2?1:0,tt=o[Q][1]>=2?1:0,mt=o[Q][2]>=2?1:0,it=o[Q][3]>=2?1:0,Mt=o[Q][0]>=1?1:0,Tt=o[Q][1]>=1?1:0,Ct=o[Q][2]>=1?1:0,se=o[Q][3]>=1?1:0,Ht=y-at+c,oe=g-gt+c,N=T-Dt+c,be=L-Xt+c,zt=y-q+2*c,Bt=g-tt+2*c,wt=T-mt+2*c,Qt=L-it+2*c,bt=y-Mt+3*c,P=g-Tt+3*c,M=T-Ct+3*c,z=L-se+3*c,$=y-1+4*c,Z=g-1+4*c,Y=T-1+4*c,vt=L-1+4*c,rt=m&255,lt=p&255,Ot=A&255,J=w&255,ft=a[rt+a[lt+a[Ot+a[J]]]]%32,At=a[rt+at+a[lt+gt+a[Ot+Dt+a[J+Xt]]]]%32,Rt=a[rt+q+a[lt+tt+a[Ot+mt+a[J+it]]]]%32,pt=a[rt+Mt+a[lt+Tt+a[Ot+Ct+a[J+se]]]]%32,Gt=a[rt+1+a[lt+1+a[Ot+1+a[J+1]]]]%32;let Pt=.6-y*y-g*g-T*T-L*L;Pt<0?h=0:(Pt*=Pt,h=Pt*Pt*this.dot4(r[ft],y,g,T,L));let qt=.6-Ht*Ht-oe*oe-N*N-be*be;qt<0?u=0:(qt*=qt,u=qt*qt*this.dot4(r[At],Ht,oe,N,be));let U=.6-zt*zt-Bt*Bt-wt*wt-Qt*Qt;U<0?d=0:(U*=U,d=U*U*this.dot4(r[Rt],zt,Bt,wt,Qt));let st=.6-bt*bt-P*P-M*M-z*z;st<0?f=0:(st*=st,f=st*st*this.dot4(r[pt],bt,P,M,z));let W=.6-$*$-Z*Z-Y*Y-vt*vt;return W<0?v=0:(W*=W,v=W*W*this.dot4(r[Gt],$,Z,Y,vt)),27*(h+u+d+f+v)}}const tr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new nt},cameraProjectionMatrix:{value:new Kt},cameraInverseProjectionMatrix:{value:new Kt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},er={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},nr={uniforms:{tDiffuse:{value:null},resolution:{value:new nt}},vertexShader:`varying vec2 vUv;

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

		}`};class Vn extends hi{constructor(t,e,n,s,r=32){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const o=new Ea;o.format=li,o.type=ai,this.normalRenderTarget=new je(this.width,this.height,{minFilter:Ne,magFilter:Ne,type:hn,depthTexture:o}),this.ssaoRenderTarget=new je(this.width,this.height,{type:hn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new ge({defines:Object.assign({},tr.defines),uniforms:Cn.clone(tr.uniforms),vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader,blending:ke}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new pg,this.normalMaterial.blending=ke,this.blurMaterial=new ge({defines:Object.assign({},nr.defines),uniforms:Cn.clone(nr.uniforms),vertexShader:nr.vertexShader,fragmentShader:nr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ge({defines:Object.assign({},er.defines),uniforms:Cn.clone(er.uniforms),vertexShader:er.vertexShader,fragmentShader:er.fragmentShader,blending:ke}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ge({uniforms:Cn.clone(fs.uniforms),vertexShader:fs.vertexShader,fragmentShader:fs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Lc,blendDst:fo,blendEquation:Tn,blendSrcAlpha:Dc,blendDstAlpha:fo,blendEquationAlpha:Tn}),this.fsQuad=new Sr(null),this.originalClearColor=new Ft}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Vn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=ke,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Vn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ke,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Vn.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Vn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ke,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Vn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Pc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new I;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=Ou.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}generateRandomKernelRotations(){const n=new A_,s=16,r=new Float32Array(s);for(let o=0;o<s;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=n.noise3d(a,l,c)}this.noiseTexture=new fh(r,4,4,gr,ln),this.noiseTexture.wrapS=zi,this.noiseTexture.wrapT=zi,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}}Vn.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Ec={uniforms:{tDiffuse:{value:null},uExposure:{value:.62},uDamage:{value:0},uFade:{value:0},uGrain:{value:.012},uChroma:{value:.12},uVignette:{value:.72},uBlur:{value:new nt},uTime:{value:0},uLow:{value:0},uFlash:{value:0}},vertexShader:`
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
  `};class R_{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.renderer.toneMapping=Pn,this.composer=new bc(t),this.grade=new ua(Ec),this.applyQuality("medium")}composer;grade;bloom=null;ssao=null;get uniforms(){return this.grade.uniforms}applyQuality(t){const e=this.renderer.getSize(new nt);if(this.composer.dispose(),this.composer=new bc(this.renderer),this.ssao=null,this.bloom=null,t==="high")try{const n=new Vn(this.scene,this.camera,e.x,e.y,12);n.kernelRadius=8,n.minDistance=.002,n.maxDistance=.08,this.ssao=n,this.composer.addPass(n)}catch{this.composer.addPass(new wc(this.scene,this.camera))}else this.composer.addPass(new wc(this.scene,this.camera));t!=="low"&&(this.bloom=new Vi(new nt(e.x,e.y),t==="high"?.28:.18,.45,.86),this.composer.addPass(this.bloom)),this.grade=new ua(Ec),this.composer.addPass(this.grade),this.composer.addPass(new T_),this.setSize(e.x,e.y)}setSize(t,e){this.composer.setSize(t,e),this.ssao?.setSize(t,e),this.bloom?.setSize(t,e)}render(){this.composer.render()}dispose(){this.composer.dispose()}}function C_(i,t,e,n){i.clearRect(0,0,t,e),i.fillStyle="rgba(8,7,8,0.72)",i.fillRect(0,0,t,e);const s=n.rooms.filter(m=>m.floor===n.floor&&!m.id.startsWith("trappe")&&m.id!=="stilhed");if(!s.length)return;let r=1/0,o=1/0,a=-1/0,l=-1/0;for(const m of s)r=Math.min(r,m.x),o=Math.min(o,m.z),a=Math.max(a,m.x+m.w),l=Math.max(l,m.z+m.d);const c=16,h=(t-c*2)/Math.max(1,a-r),u=(e-28)/Math.max(1,l-o),d=Math.min(h,u),f=m=>c+(m-r)*d,v=m=>22+(m-o)*d;i.fillStyle="#cbbba4",i.font="11px Georgia, serif",i.fillText(`Etage ${n.floor+1}`,8,14);const x=s.find(m=>n.px>=m.x&&n.px<=m.x+m.w&&n.pz>=m.z&&n.pz<=m.z+m.d);for(const m of s){const p=n.visited.has(m.id);i.fillStyle=m.id===x?.id?"rgba(120,40,36,0.85)":p?"rgba(60,52,48,0.9)":"rgba(28,26,28,0.9)",i.fillRect(f(m.x),v(m.z),m.w*d,m.d*d),i.strokeStyle="rgba(210,196,176,0.35)",i.strokeRect(f(m.x)+.5,v(m.z)+.5,m.w*d-1,m.d*d-1),i.fillStyle=p?"#e7dcc7":"#8a8178",i.font="10px Georgia, serif",i.fillText(p?P_(m.name):"?",f(m.x)+4,v(m.z)+14)}for(const m of n.batteries)m.floor===n.floor&&(i.fillStyle="#d7c27a",i.fillRect(f(m.x)-2,v(m.z)-2,4,4));n.monster?.show&&(i.fillStyle="#ff3b32",i.beginPath(),i.arc(f(n.monster.x),v(n.monster.z),4,0,Math.PI*2),i.fill()),i.save(),i.translate(f(n.px),v(n.pz)),i.rotate(-n.yaw),i.fillStyle="#f4efe6",i.beginPath(),i.moveTo(0,7),i.lineTo(4,-4),i.lineTo(-4,-4),i.closePath(),i.fill(),i.restore()}function P_(i){return i.length>16?i.slice(0,15)+"…":i}function D_(i){return i.map(t=>({id:t.id,name:t.name,floor:t.floor,x:t.x,z:t.z,w:t.w,d:t.d}))}class L_{constructor(t,e,n){this.ui=e,this.storage=n??u_(),this.settings=p_(this.storage);const s=new URLSearchParams(location.search).has("test");this.testMode=s,this.renderer=new Z0({canvas:t,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,stencil:!0}),this.renderer.outputColorSpace=Re,this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.renderer.shadowMap.type=Cc,this.renderer.setClearColor(460298),this.scene.background=new Ft(460298),this.scene.fog=new Ta(789264,.024),this.scene.add(new yg(2761768,.11));const r=new mg(3227736,1183244,.38);this.scene.add(r);const o=new xg(12174550,.12);o.position.set(-20,40,-10),this.scene.add(o),this.world=Lv(),this.built=jv(this.scene,this.world),this.monster=new rv,this.scene.add(this.monster.group),this.atmo=new uv(this.scene,24),this.scene.add(this.camera),this.spot=new ea("#fff1d4",0,18,.5,.65,1.15),this.spot.castShadow=this.settings.quality!=="low",this.spot.shadow.mapSize.set(this.settings.quality==="high"?1024:512,this.settings.quality==="high"?1024:512),this.spot.shadow.bias=-25e-5,this.spot.shadow.camera.near=.1,this.spot.shadow.camera.far=18,this.camera.add(this.spot),this.spot.position.set(.18,-.16,-.55),this.spot.target.position.set(.18,-.14,-12),this.camera.add(this.spot.target),this.viewmodel=this.buildViewmodel(),this.camera.add(this.viewmodel),this.lunge=this.buildLunge(),this.camera.add(this.lunge),this.shadowMesh=new dt(new ms(.22,1.1,3,6),new qe({color:"#2a241f"})),this.shadowMesh.visible=!1,this.scene.add(this.shadowMesh),this.butcher=this.buildButcher(),this.scene.add(this.butcher),this.peek=new jt;const a=new dt(new me(.16,18,12),new ce({color:"#e6ddd2",roughness:.55}));a.scale.set(.86,1.25,.5);const l=new dt(new gs(.07,.006,6,16,Math.PI),new ce({color:"#2a1814"}));l.position.set(0,-.04,.08),l.rotation.z=Math.PI,this.peek.add(a,l),this.peek.visible=!1,this.scene.add(this.peek),this.spawnCells=this.world.nav.nodes.filter(u=>!u.doorId&&!u.stair&&u.links.length>0&&(u.ix+u.iz)%3===0).map(u=>({x:u.x,y:u.y,z:u.z}));const c=new $e(.05,1.15,7,16,1,!0);c.translate(0,-3.5,0),c.rotateX(Math.PI/2),this.cone=new dt(c,new qe({color:"#ffe6c2",transparent:!0,opacity:.045,depthWrite:!1,side:Ye,blending:hr})),this.camera.add(this.cone),this.shadow=new dt(new Je(1.4,2.2),new qe({color:"#050505",transparent:!0,opacity:0,depthWrite:!1,side:Ye})),this.scene.add(this.shadow),this.post=new R_(this.renderer,this.scene,this.camera),this.post.applyQuality(this.settings.quality),this.scares=new gv(this.camera,this.audio),this.input=new r_(t),this.input.setSensitivity(this.settings.mouseSensitivity);const h=()=>{this.audio.ensure(),this.audio.resume()};window.addEventListener("pointerdown",h),window.addEventListener("keydown",h),t.addEventListener("click",()=>{h(),this.mode==="playing"&&this.input.lock()}),this.resize(),window.addEventListener("resize",()=>this.resize()),this.applyVolumes(),this.ui.continueEnabled(!!yc(this.storage)),this.ui.fillSettings(this.settings),this.installApi()}renderer;scene=new J0;camera=new Oe(72,1,.08,80);world;built;post;audio=new Dg;input;monster;atmo;scares;director=oc();settings;storage;mode="menu";settingsFrom="menu";slotMode="load";snap=ca();sim=U_();open=new Map;desired=new Map;unlocked=new Set;hiding=null;holdBreath=!1;bob=0;trauma=0;damage=0;fade=0;flash=0;message="";messageT=0;toast="";toastT=0;subtitleT=0;lastObjective="";autosavedIntro=!1;invIndex=0;code="";showPerf=!1;fps=60;fpsAcc=0;fpsFrames=0;acc=0;noises=[];runtime=[];rosaryCd=0;stepDist=0;batteryWarned=!1;creepIn=12;aimedDoor="";prevRoom="";prevFlash=!1;lungeT=0;lunge;shadowMesh;shadowT=0;shadowFrom=new I;shadowTo=new I;butcher;recentSpawns=[];hideWait=0;knocks=[];showAudio=!1;lookSX=0;lookSY=0;blackout=0;peekT=0;peekCool=12;monsterShown=0;monsterRoom="";monsterRoomUntil=0;peek;spawnCells=[];mannequinT=0;looked=0;lightCut=new Map;spot;cone;viewmodel;shadow;clock=0;aggression=0;monAcc=0;camDir=new I;testMode=new URLSearchParams(location.search).has("test");ended=!1;frozen=!1;rafId=0;start(){this.ui.show("menu"),this.mode="menu",this.clock=performance.now(),this.rafId=requestAnimationFrame(this.onFrame)}onFrame=t=>{if(this.frozen)return;const e=Math.min(.05,(t-this.clock)/1e3||0);this.clock=t,this.fpsAcc+=e,this.fpsFrames++,this.fpsAcc>=.5&&(this.fps=this.fpsFrames/this.fpsAcc,this.fpsAcc=0,this.fpsFrames=0);const n=this.settings.fpsCap;if(n>0){this.acc+=e;const s=1/n;if(this.acc>=s-1e-4){const r=Math.min(.05,this.acc);this.acc=0,this.advance(r)}}else this.advance(e);this.rafId=requestAnimationFrame(this.onFrame)};setFrozen(t){this.frozen=t,t?cancelAnimationFrame(this.rafId):(this.clock=performance.now(),this.rafId=requestAnimationFrame(this.onFrame))}advance(t){this.mode==="playing"?this.updatePlaying(t):(this.mode==="menu"||this.mode==="credits"||this.mode==="exit")&&this.updateIdle(t),this.render(t),this.audio.update(t)}updateIdle(t){const e=performance.now()*12e-5,n=2.2+Math.sin(e)*.35;this.camera.position.set(5.2,1.55,n),this.camera.lookAt(10,1.35,6),this.viewmodel.visible=!1,this.lunge.visible=!1,this.cone.visible=!1,this.spot.intensity=0,this.atmo.update(t,this.camera.position,new I(0,0,1),!1),this.tickRain(t),this.tickLights(performance.now()/1e3,!1)}updatePlaying(t){this.snap.playTime+=t,this.snap.iFrame=Math.max(0,this.snap.iFrame-t),this.rosaryCd=Math.max(0,this.rosaryCd-t),this.messageT=Math.max(0,this.messageT-t),this.toastT=Math.max(0,this.toastT-t),this.subtitleT=Math.max(0,this.subtitleT-t),this.damage=Math.max(0,this.damage-t*.8),this.noises.length=0,this.stepPower(t),!this.snap.flags.introDone&&this.snap.playTime>4.2&&(this.snap.flags.introDone=!0,this.trauma=Math.max(this.trauma,.45),this.audio.play("doorSlam",{x:this.sim.x,y:this.sim.y,z:this.sim.z-2}),this.say("Døren faldt i bag dig.")),!this.autosavedIntro&&this.snap.playTime>2&&(this.autosavedIntro=!0,this.persist(0));const e=this.input.consumeLook();this.lookSX=this.lookSX*.4+e.x*.6,this.lookSY=this.lookSY*.4+e.y*.6;const n=ec(this.sim.yaw,this.sim.pitch,this.lookSX,this.lookSY,this.settings.invertY);this.sim.yaw=n.yaw,this.sim.pitch=n.pitch;const s=this.input.wish();this.holdBreath=!!this.hiding&&s.sprint,this.input.pressed("Escape")&&this.setMode("paused"),(this.input.pressed("Tab")||this.input.pressed("KeyI"))&&this.setMode("inventory"),this.input.pressed("F3")&&(this.showPerf=!this.showPerf),this.input.pressed("F4")&&(this.showAudio=!this.showAudio),(this.testMode||new URLSearchParams(location.search).has("debug"))&&this.input.pressed("F6")&&(this.snap.playTime+=30),(this.testMode||new URLSearchParams(location.search).has("debug"))&&this.input.pressed("F7")&&this.runShadow(),this.input.pressed("KeyF")&&this.toggleFlash(),this.input.pressed("KeyR")&&this.swapBattery(),this.input.pressed("KeyG")&&this.dropBattery(),this.input.pressed("KeyQ")&&this.useRosary(),this.input.pressed("KeyE")&&this.interact();const r=uc(this.world,this.unlocked,this.open);if(this.hiding)s.crouch===!1&&this.input.pressed("KeyE");else{const c=this.sim.grounded,h=this.sim.x,u=this.sim.z;this.sim=Sv(this.sim,{...s,dt:t},r,(m,p,A)=>js(this.world,m,p,A));const d=Math.hypot(this.sim.x-h,this.sim.z-u);s.jump&&c&&!this.sim.grounded&&this.noise("jump"),this.sim.justLanded&&this.noise("landing");const f=s.sprint&&this.sim.stamina>5&&!this.sim.crouching,x=Math.abs(s.forward)+Math.abs(s.strafe)>.01&&this.sim.grounded&&Math.hypot(this.sim.vx,this.sim.vz)>.2;if(this.audio.setLocomotion(x,f,this.sim.crouching),x){this.stepDist+=d;const m=this.sim.crouching?.72:f?1.45:1.05;this.stepDist>=m&&(this.stepDist=0,this.audio.playFootstep(f,this.sim.crouching),this.noise(this.sim.crouching?"crouch":f?"sprint":"walk"),Qn(this.world,this.sim.x,this.sim.z,this.sim.y)?.floorMat==="wood"&&Math.random()<.12&&this.audio.play("creak",this.feet(),{volume:.35}))}else this.stepDist=0;this.separateFromMonster(r)}this.placeCamera(s),this.camera.getWorldDirection(this.camDir);const o=this.computeChase(),a=this.monster.update({dt:t,playerPos:{x:this.sim.x,y:this.sim.y,z:this.sim.z},playerEye:this.eyePos(),hiding:!!this.hiding,hideSpot:this.hidePos(),holdBreath:this.holdBreath,camPos:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},camDir:{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},flashlightOn:this.sim.flashlightOn&&this.sim.battery>0,allowChase:o,aggression:this.aggression,waypoints:Wv(this.world,c=>this.floorAllowed(c),this.snap.flags.secretOpen),blockers:r,colliders:r,nav:this.world.nav,query:{allowFloor:c=>this.floorAllowed(c),blockDoor:c=>{const h=this.world.doors.find(u=>u.id===c);return h?$s(h,this.unlocked):!1}},doors:this.world.doors,openAmount:this.open,floorAt:(c,h,u)=>js(this.world,c,h,u),requestOpen:c=>this.desired.set(c,1),doorLocked:c=>{const h=this.world.doors.find(u=>u.id===c);return h?$s(h,this.unlocked):!1},noises:this.noises});if(a.entered==="Chase"&&this.audio.play("growl",this.monster.pos,{volume:.8}),a.attack&&this.hurt(36,!0),a.foundHiding&&(this.hiding=null,this.hurt(28,!0),this.say("Den fandt dig.")),(a.state==="Chase"?4:a.state==="Idle"?0:1.4)>0&&!this.monster.concealed&&this.monster.group.visible&&(this.monAcc+=t,this.monAcc>(a.state==="Chase"?.32:.55))){this.monAcc=0;const c=!us(this.eyePos(),{x:this.monster.pos.x,y:this.monster.pos.y+1.4,z:this.monster.pos.z},r);this.audio.play("stepMonster",{x:this.monster.pos.x,y:this.monster.pos.y,z:this.monster.pos.z},{occluded:c,volume:.8})}this.herdMonster(),this.relocateMonster(t,r),this.stepEvents(t),this.stepKnocks(),this.stepDirector(t),this.animateDoors(t),this.drainLight(t),this.visit(),this.checkEnding(),this.syncHud(s),this.copySim()}stepDirector(t){const e=this.monsterDist(),n=Qn(this.world,this.sim.x,this.sim.z,this.sim.y),s=!(this.sim.flashlightOn&&this.sim.battery>1)&&!this.roomLit(n?.id),r=hv(this.director,{dt:t,health:this.snap.player.health,monsterDist:e,inDark:s,sprinting:this.input.wish().sprint&&!this.sim.crouching,hiding:!!this.hiding,tookDamage:this.damage>.85,story:v_(this.snap),rng:Math.random});if(this.director=r.state,this.aggression=r.aggression,r.event?.type==="scare"){const c=this.scares.dynamic(this.snap.playTime,{inDark:s,monsterNear:e<10,doorOpenNear:[...this.open.values()].some(h=>h>.5),inMannequinRoom:n?.id==="r102",tension:this.director.tension,rng:Math.random});c&&this.applyScare(c)}else r.event?.type==="soft"&&this.soft(r.event.kind);this.scares.update(t),this.trauma=Math.max(this.trauma,this.settings.cameraShake?this.scares.fx.trauma:0),this.flash=Math.max(this.flash,this.scares.fx.flash),this.scares.fx.subtitle&&(this.ui.subtitle(this.scares.fx.subtitle),this.subtitleT=1.5);const o=this.monster.bb.state==="Chase"||this.monster.bb.state==="Attack";this.audio.setTension(this.director.tension,o);const a=(100-this.snap.player.health)/140+(e<8?.35:0)+(this.sim.stamina<30?.2:0);this.audio.setHeartbeat(this.hiding||this.snap.player.health<55||e<7?a:0),this.audio.setBreath(this.holdBreath?.05:this.sim.stamina<25?.5:e<6?.25:.05);const l=this.nearestLight();if(this.audio.setHum(!!l&&this.lightLevel(l.def)>.2,l?{x:l.def.x,y:l.def.y,z:l.def.z}:this.feet()),this.audio.setRadio(this.snap.flags.radioOn,{x:53.4,y:5,z:2.3}),this.audio.setZone(this.zoneFor(n?.id)),this.creepIn-=t,this.creepIn<=0&&this.mode==="playing"){this.creepIn=16+Math.random()*18-this.director.tension*.05;const c=6+Math.random()*6,h=Math.random()*Math.PI*2,u=this.director.tension>55&&Math.random()<.35?"scream":"whisper";this.audio.play(u,{x:this.sim.x+Math.cos(h)*c,y:this.sim.y,z:this.sim.z+Math.sin(h)*c},{volume:.55,occluded:!0})}this.audio.setListener({x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},{x:0,y:1,z:0})}applyScare(t){t==="door"&&this.slamNearest(),t==="still"&&(this.built.mannequin.visible=!0,this.mannequinT=8,this.snap.flags.mannequinOn=!0),t==="fake"&&(this.built.pot.position.y=Vt[-1]?this.built.pot.position.y:this.built.pot.position.y),t==="ceiling"&&(this.trauma=Math.max(this.trauma,.5)),t==="flash"&&(this.flash=1),t==="shadow"&&(this.shadow.position.set(this.sim.x+this.camDir.x*3,this.sim.y+1.2,this.sim.z+this.camDir.z*3),this.shadow.material.opacity=.85)}soft(t){if(t==="flicker"||t==="lightOut"){const e=this.built.lights.filter(s=>this.lightLevel(s.def)>.2),n=e[Math.floor(Math.random()*e.length)];n&&this.lightCut.set(n.def.id,this.snap.playTime+(t==="lightOut"?5:1.2))}else if(t==="whisper"||t==="breath"){const e=t==="breath"?1.2:2.4;this.audio.play("whisper",{x:this.sim.x-this.camDir.x*e,y:this.sim.y+1.4,z:this.sim.z-this.camDir.z*e},{volume:t==="breath"?.85:.6}),this.ui.subtitle(t==="breath"?"…åndedræt, lige bag dig.":"…Agnes…"),this.subtitleT=1.8,t==="breath"&&this.audio.setHeartbeat(.55)}else t==="knock"?this.queueKnocks():t==="phone"?(this.audio.play("sting",{x:16,y:5,z:22},{volume:.8}),this.ui.subtitle("En telefon ringer et sted i fløjen."),this.subtitleT=2.2):t==="creak"?this.audio.play("creak",{x:this.sim.x+2,y:this.sim.y,z:this.sim.z+1},{volume:.5}):t==="thunder"?(this.audio.play("thunder"),this.atmo.strike(),this.flash=.55):t==="drop"?this.audio.play("door",{x:49,y:4,z:36},{volume:.5}):t==="shadow"?this.applyScare("shadow"):t==="radio"?this.audio.play("whisper",{x:53,y:5,z:2},{volume:.4}):t==="mannequin"&&!this.snap.flags.mannequinUsed&&(this.built.mannequin.visible=!0,this.mannequinT=10)}hurt(t,e){this.snap.iFrame>0||this.ended||(this.snap.player.health=Math.max(0,this.snap.player.health-t),this.sim.health=this.snap.player.health,this.snap.iFrame=1.2,this.damage=1,this.trauma=.9,e&&this.scares.trigger("attack",this.snap.playTime,!0),this.snap.player.health<=0&&this.finish("death"))}finish(t){if(this.ended)return;this.ended=!0;const e=__(this.snap,t);this.ui.ending(e,t==="death"),this.setMode("ending"),this.fade=t==="death"?.65:.35,this.audio.play(t==="death"?"scream":"sting")}checkEnding(){this.ended||(fc(lc.yard,this.sim.x,this.sim.z,this.sim.y)?this.finish("yard"):fc(lc.tunnel,this.sim.x,this.sim.z,this.sim.y)&&this.finish("tunnel"))}interact(){if(this.hiding){this.hiding=null,this.audio.play("door",this.feet(),{volume:.4});return}const t=Xs(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates());t&&(t.kind==="door"?this.useDoor(t.id):t.kind==="pickup"?this.take(t.id):t.kind==="hide"?this.enterHide(t.id):t.kind==="generator"?this.useGenerator():t.kind==="safe"?this.openKeypad():t.kind==="bookshelf"?this.useShelf():t.kind==="radio"&&(this.snap.flags.radioOn=!this.snap.flags.radioOn,this.audio.play("click"),this.noise("voice")))}useDoor(t){const e=this.world.doors.find(s=>s.id===t);if(!e)return;if($s(e,this.unlocked)){if(e.id===ac){const s=g_(this.snap);if(s.length){this.say(`UD TIL STILHEDEN er låst. Mangler: ${s.join(", ")}.`),this.audio.play("locked",this.doorPos(e),{volume:.7});return}this.unlocked.add(e.id),this.desired.set(e.id,1),this.audio.play("door",this.doorPos(e)),this.audio.play("key"),this.say("Låsene giver sig.");return}if(e.needsPower&&!this.snap.flags.generatorOn)this.say("Låsen er død. Generatoren mangler strøm.");else if(e.keyId==="chapel_key"&&!pe(this.snap.inventory,"chapel_key"))this.say("Låst. Nøglen ligger på sygeplejerskekontoret.");else if(e.keyId==="master_key"&&!pe(this.snap.inventory,"master_key"))this.say("Kræver hovednøglen fra pengeskabet.");else if(e.keyId&&pe(this.snap.inventory,e.keyId)&&(!e.needsPower||this.snap.flags.generatorOn)){this.unlocked.add(e.id),this.desired.set(e.id,1),this.audio.play("door",this.doorPos(e)),this.noise("door");return}else this.say("Låst.");this.audio.play("locked",this.doorPos(e),{volume:.6}),this.noise("door");return}const n=this.open.get(e.id)??0;this.desired.set(e.id,n>.4?0:1),this.audio.play("door",this.doorPos(e)),this.noise("door")}take(t){const e=this.world.pickups.find(o=>o.id===t)||this.runtime.find(o=>o.id===t);if(!e)return;const n=Ks(this.snap.inventory,e.itemId,1);if(!n.added){this.say("Du kan ikke bære flere.");return}this.snap.inventory=n.slots,"room"in e&&this.snap.pickedUp.push(t);const s=this.built.pickups.get(t)||this.runtime.find(o=>o.id===t)?.mesh;s&&(s.visible=!1),this.runtime=this.runtime.filter(o=>o.id!==t),this.audio.play(e.itemId.startsWith("note")||e.itemId.startsWith("file")?"paper":"pickup");const r=ii(e.itemId);(r.kind==="note"||r.kind==="story"||r.kind==="map"||r.kind==="collectible")&&this.openExamine(e.itemId),e.itemId==="battery"&&(this.sim.battery=_c(this.sim.battery,50),this.say("Batteri. +50%.")),e.itemId.startsWith("key_")&&this.say(`${r.name}. Nøgler ${cr(this.snap)}/3.`),e.itemId==="rosary"&&(this.snap.rosaryCharges=2),this.refreshObjective()}useGenerator(){const t=["fuse_red","fuse_blue","fuse_yellow"];if(this.snap.flags.generatorOn){this.say("Generatoren kører allerede.");return}if(!t.every(e=>pe(this.snap.inventory,e))){const e=t.filter(n=>!pe(this.snap.inventory,n)).map(n=>ii(n).name);this.say(`Mangler ${e.join(", ")}.`);return}for(const e of t)this.snap.inventory=pr(this.snap.inventory,e,1);this.snap.flags.generatorOn=!0,this.audio.play("generator",{x:8,y:1,z:35},{volume:.9}),this.say("Nødstrømmen vågner. Bagportens lås har strøm."),this.trauma=.3,this.refreshObjective()}openKeypad(){if(this.snap.flags.safeOpen){this.say("Pengeskabet er tomt.");return}this.code="",this.ui.keypad(this.code,pe(this.snap.inventory,"note_code")?"Stiftelsesåret.":"Du kender ikke koden endnu."),this.setMode("keypad")}submitCode(){this.code===o_?(this.snap.flags.safeOpen=!0,pe(this.snap.inventory,"master_key")||(this.snap.inventory=Ks(this.snap.inventory,"master_key").slots),pe(this.snap.inventory,"note_director")||(this.snap.inventory=Ks(this.snap.inventory,"note_director").slots),this.audio.play("key"),this.setMode("playing"),this.openExamine("note_director"),this.refreshObjective()):(this.audio.play("fail"),this.noise("door"),this.code="",this.ui.keypad(this.code,"Forkert. Lyden bar langt."))}useShelf(){if(!this.snap.flags.secretOpen){if(!pe(this.snap.inventory,"crowbar")){this.say("Hylden rokker sig ikke. Du mangler noget at bryde med."),this.audio.play("locked");return}this.snap.flags.secretOpen=!0,this.unlocked.add("door_secret"),this.audio.play("doorSlam",{x:37,y:1,z:24},{volume:.8}),this.noise("door"),this.say("Hylden giver sig. Der er et rum bagved.")}}enterHide(t){const e=this.world.hides.find(n=>n.id===t);e&&(this.hiding=t,this.sim.x=e.x,this.sim.z=e.z,this.sim.vx=0,this.sim.vz=0,this.audio.play("door",this.feet(),{volume:.3}),this.say(e.kind==="bed"?"Under sengen. Hold Shift for at holde vejret.":"I skabet. Hold Shift for at holde vejret. E for at komme ud."))}toggleFlash(){if(this.sim.battery<=1){this.audio.play("fail"),this.sim.flashlightOn=!1,this.say("Batteriet er tomt. Det lader langsomt, mens lygten er slukket.");return}const t=!this.sim.flashlightOn;this.sim.flashlightOn=t,this.audio.play("flash",void 0,{rate:t?1:.88}),t||this.say("Lygten er slukket. Batteriet lader.")}swapBattery(){if(!pe(this.snap.inventory,"battery")){this.audio.play("fail"),this.say("Ingen reservebatterier.");return}this.snap.inventory=pr(this.snap.inventory,"battery",1),this.sim.battery=_c(this.sim.battery),this.sim.flashlightOn=!0,this.batteryWarned=!1,this.audio.play("click"),this.say("Batteri skiftet.")}dropBattery(){const t=vc(this.snap.inventory,"battery");if(!t.dropped){this.say("Ikke noget du kan smide.");return}this.snap.inventory=t.slots;const e=`drop_${Math.floor(Math.random()*1e6)}`,n=this.built.pickups.get("p_bat1")?.clone()??new dt(new me(.08),new ce({color:"#888"}));n.visible=!0,n.position.set(this.sim.x,this.sim.y+.2,this.sim.z),this.scene.add(n),this.runtime.push({id:e,itemId:"battery",x:this.sim.x,y:this.sim.y+.4,z:this.sim.z,mesh:n}),this.audio.play("pickup",this.feet(),{volume:.4}),this.noise("drop")}useRosary(){if(!pe(this.snap.inventory,"rosary")||this.snap.rosaryCharges<=0||this.rosaryCd>0){pe(this.snap.inventory,"rosary")&&this.snap.rosaryCharges<=0&&this.say("Perlerne er kolde. Den virker ikke igen.");return}this.snap.rosaryCharges--,this.rosaryCd=6,this.monster.bb.blindTime=2.8,this.monster.bb.hesitate=2.8,(this.monster.bb.state==="Chase"||this.monster.bb.state==="Attack")&&(this.monster.bb.state="LostPlayer"),this.audio.play("key",this.feet(),{volume:.5}),this.say("Han tøver.")}drainLight(t){const e=h_(this.sim.battery,this.sim.flashlightOn,t);this.sim.battery=e.charge,this.sim.flashlightOn=e.on,e.died?(this.audio.play("metallic"),this.say("Lygten gik ud. Den lader langsomt op, når den er slukket."),this.batteryWarned=!1):this.sim.flashlightOn&&Zs(this.sim.battery)==="critical"&&!this.batteryWarned?(this.batteryWarned=!0,this.say("Batteriet er næsten tomt.")):this.sim.battery>30&&(this.batteryWarned=!1)}placeCamera(t){const e=this.hiding&&this.world.hides.find(c=>c.id===this.hiding)?.kind==="bed"?.32:bv(this.sim.crouching||!!this.hiding),n=Math.hypot(this.sim.vx,this.sim.vz);n>.4&&this.sim.grounded&&!this.hiding&&(this.bob+=n*.016);const s=this.hiding?0:this.sim.crouching?.01:t.sprint?.04:.025,r=bh(this.sim.yaw),o=this.settings.cameraShake?this.trauma*this.trauma:0;this.camera.position.set(this.sim.x+r.x*Math.cos(this.bob)*s+(Math.random()-.5)*o*.12,this.sim.y+e+Math.sin(this.bob*2)*s+(Math.random()-.5)*o*.08,this.sim.z+r.z*Math.cos(this.bob)*s),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.sim.yaw+Math.PI,this.camera.rotation.x=this.sim.pitch,this.camera.rotation.z=(Math.random()-.5)*o*.05;const a=Math.sin(this.bob);this.viewmodel.position.set(.2+a*.008,-.16-Math.abs(Math.sin(this.bob*2))*.008,-.36),this.viewmodel.rotation.z=a*.04,this.viewmodel.rotation.x=Math.sin(this.bob*2)*.02;const l=72+(t.sprint&&n>3?3:0);Math.abs(this.camera.fov-l)>.1&&(this.camera.fov=l,this.camera.updateProjectionMatrix())}render(t){const e=performance.now()/1e3;this.tickLights(e,this.mode==="playing"),this.tickRain(t),this.mode==="playing"&&this.atmo.update(t,this.camera.position,this.camDir,this.sim.flashlightOn&&this.sim.battery>0);const n=this.mode==="playing"&&this.sim.flashlightOn&&this.sim.battery>0,s=Zs(this.sim.battery),r=n&&s==="critical"&&Math.sin(e*18)>.55?.45:1,o=s==="low"?.72:s==="critical"?.5:1,a=Math.max(.2,this.sim.battery/100);this.spot.intensity=n?58*a*o*r:0;const l=this.viewmodel.position;if(this.spot.position.set(l.x,l.y+.02,l.z-.2),this.spot.target.position.set(l.x,l.y+.02,-12),this.cone.visible=!1,this.mannequinT>0?(this.mannequinT-=t,this.built.mannequin.visible=!0,this.camDir.dot(new I(27.4-this.camera.position.x,1.5,26.4-this.camera.position.z).normalize())>.82&&this.monsterDistTo(27.4,26.4)<8?this.looked+=t:this.looked=0,this.looked>1.15&&(this.built.mannequin.visible=!1,this.mannequinT=0,this.snap.flags.mannequinUsed=!0,this.scares.trigger("face",this.snap.playTime,!0),this.looked=0)):this.snap.flags.mannequinOn,this.shadow.material.opacity>0){const d=this.shadow.material;d.opacity=Math.max(0,d.opacity-t),this.shadow.position.x+=this.camDir.z*t,this.shadow.position.z-=this.camDir.x*t}this.snap.flags.secretOpen&&(this.built.secretShelf.position.x+=(36-this.built.secretShelf.position.x)*Math.min(1,t*2));const c=this.post.uniforms,h=this.settings.motionBlur?Math.min(.02,Math.hypot(this.sim.vx,this.sim.vz)*.002):0;c.uExposure.value=1.05*this.settings.brightness,c.uDamage.value=this.damage,c.uFade.value=this.fade,c.uGrain.value=0,c.uChroma.value=.08+this.scares.fx.chroma*.05,c.uTime.value=e,c.uLow.value=this.sim.health<40?(40-this.sim.health)/40:0,c.uFlash.value=Math.max(this.flash,this.atmo.lightning*.35),c.uBlur.value.set(this.camDir.x*h,this.camDir.y*h),this.mode==="playing"&&this.blackout<=0&&(this.fade=Math.max(0,this.fade-t*.45)),this.trauma=Math.max(0,this.trauma-t),this.flash=Math.max(0,this.flash-t*1.5);const u=this.scene.fog;u.density=.02+this.director.tension*8e-5,this.post.render(),this.subtitleT<=0&&this.mode==="playing"&&this.ui.subtitle("")}tickLights(t,e){for(const r of this.built.lights){let o=this.lightLevel(r.def);const a=this.lightCut.get(r.def.id)??0;if(e&&a>this.snap.playTime&&(o*=.05),r.def.flicker&&o>0){const l=.8+.2*Math.abs(Math.sin(t*7.5+r.def.x)*Math.sin(t*13+r.def.z)),c=Math.sin(t*.63+r.def.x)>.985?.15:1;o*=l*c}(r.light instanceof ea||r.light instanceof na)&&(r.light.intensity=r.base*o,r.light.castShadow=this.settings.quality!=="low"&&r.def.room==="hall")}const n=this.settings.quality==="low"?4:this.settings.quality==="medium"?8:16;[...this.built.lights].sort((r,o)=>Math.hypot(r.def.x-this.camera.position.x,r.def.z-this.camera.position.z)-Math.hypot(o.def.x-this.camera.position.x,o.def.z-this.camera.position.z)).forEach((r,o)=>{o>=n&&r.light instanceof na&&(r.light.intensity=0)})}lightLevel(t){return t.mode==="power"?this.snap.flags.generatorOn?1:0:t.mode==="secret"?this.snap.flags.secretOpen?1:0:1}roomLit(t){return t?this.built.lights.some(e=>e.def.room===t&&this.lightLevel(e.def)>.4):!1}nearestLight(){let t=null,e=8;for(const n of this.built.lights){const s=Math.hypot(n.def.x-this.sim.x,n.def.z-this.sim.z);s<e&&(e=s,t=n)}return t}tickRain(t){const e=this.built.rain.geometry.getAttribute("position"),n=e.array;for(let s=0;s<n.length;s+=3)n[s+1]-=t*6,n[s+1]<.2&&(n[s+1]=6);e.needsUpdate=!0}animateDoors(t){for(const e of this.world.doors){if(e.kind!=="door")continue;const n=this.desired.get(e.id)??0,s=this.open.get(e.id)??0,r=s+Math.sign(n-s)*Math.min(Math.abs(n-s),t*8);this.open.set(e.id,r);const o=this.built.doors.get(e.id);if(!o)continue;const a=Number.isFinite(o.userData.closedYaw)?o.userData.closedYaw:0,l=o.userData.swing||1;o.rotation.y=a+r*1.7*l;const h=o.userData.panel?.material;if(h instanceof ce){const u=this.aimedDoor===e.id;h.emissive.set(u?"#6a3028":"#000000"),h.emissiveIntensity=u?.35:0}}}slamNearest(){let t=null,e=12;for(const s of this.world.doors){if((this.open.get(s.id)??0)<.4)continue;const r=this.doorPos(s),o=Math.hypot(r.x-this.sim.x,r.z-this.sim.z);o<e&&(e=o,t=s.id)}if(!t)return;this.desired.set(t,0),this.open.set(t,0);const n=this.world.doors.find(s=>s.id===t);this.audio.play("doorSlam",this.doorPos(n),{volume:.9}),this.noise("door"),e<4&&(this.trauma=Math.max(this.trauma,.45))}candidates(){const t=[];for(const e of this.world.doors){if(e.kind!=="door")continue;const n=this.doorPos(e),s=this.open.get(e.id)??0,o=$s(e,this.unlocked)?"Låst dør":s>.4?"Luk dør":"Åbn dør";t.push({id:e.id,kind:"door",x:n.x,y:n.y+1,z:n.z,radius:1.15,prompt:o})}for(const e of this.world.pickups){if(this.snap.pickedUp.includes(e.id))continue;const n=this.world.rooms.find(s=>s.id===e.room);n&&t.push({id:e.id,kind:"pickup",x:e.x,y:Vt[n.floor]+.8,z:e.z,radius:.55,prompt:ii(e.itemId).name})}for(const e of this.runtime)t.push({id:e.id,kind:"pickup",x:e.x,y:e.y,z:e.z,radius:.5,prompt:"Batteri"});for(const e of this.world.devices){const n=this.world.rooms.find(r=>r.id===e.room),s={generator:"Generator",safe:"Pengeskab",bookshelf:"Hylde",radio:"Radio"};t.push({id:e.id,kind:e.kind,x:e.x,y:Vt[n.floor]+1,z:e.z,radius:.9,prompt:s[e.kind]})}for(const e of this.world.hides){const n=this.world.rooms.find(s=>s.id===e.room);t.push({id:e.id,kind:"hide",x:e.x,y:Vt[n.floor]+1,z:e.z,radius:.8,prompt:e.kind==="bed"?"Gem dig under sengen":"Gem dig i skabet"})}return t}syncHud(t){const e=this.hiding?null:Xs(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates());this.aimedDoor=e?.kind==="door"?e.id:"";const n=Mc(this.snap);n.id!==this.lastObjective&&(this.lastObjective&&(this.toast=n.text,this.toastT=3.5,this.persist(0)),this.lastObjective=n.id);const s=Hh(this.snap);this.ui.hud({objective:n.text,files:s?`Journaler ${s}/${Uh.length}`:"",prompt:this.messageT>0?this.message:this.hiding?"Forlad gemmested":e?e.prompt:"",stamina:this.sim.stamina,battery:this.sim.battery,batteryText:`${Math.round(this.sim.battery)}%${Zs(this.sim.battery)==="critical"&&this.sim.flashlightOn?" · lavt":""}`,low:this.sim.health<40||Zs(this.sim.battery)!=="ok",lockHint:this.mode==="playing"&&!this.input.pointerLocked}),this.ui.hurt(this.damage*.85+(this.sim.health<35?.25:0)),this.paintMap(),this.ui.toast(this.toastT>0?this.toast:"");const r=this.audio.debug();if(this.ui.audioDebug(`Lyd ${r.state}  ${r.sampleRate} Hz
Stemmer ${r.voices}
${r.failures.length?`FEJL ${r.failures.join(" | ")}
`:""}${r.last.join(`
`)}`,this.showAudio&&this.mode==="playing"),this.showPerf){const o=this.renderer.info.render;this.ui.perf(`FPS ${this.fps.toFixed(0)}
Kald ${o.calls}  Trekanter ${o.triangles}
${this.monster.bb.state}  spænding ${this.director.tension.toFixed(0)}
${this.sim.x.toFixed(1)} ${this.sim.y.toFixed(1)} ${this.sim.z.toFixed(1)}`,!0)}else this.ui.perf("",!1)}visit(){const t=Qn(this.world,this.sim.x,this.sim.z,this.sim.y);t&&(this.snap.visited.includes(t.id)||(this.snap.visited.push(t.id),new Set(this.snap.visited.map(n=>this.world.rooms.find(s=>s.id===n)?.floor)).size>1&&this.persist(0)))}refreshObjective(){Mc(this.snap).id!==this.lastObjective&&this.lastObjective&&this.persist(0)}floorAllowed(t){return!0}computeChase(){const t=this.monsterDist();let e=this.snap.playTime>46||pe(this.snap.inventory,"note_code")||t<4.2;return this.director.suppress>0&&t>2.6&&(e=!1),e}noise(t){const e=this.sim.y<2?-1:this.sim.y<6?0:1,n=this.monster.pos.y<2?-1:this.monster.pos.y<6?0:1,s=!us(this.eyePos(),{x:this.monster.pos.x,y:this.monster.pos.y+1.5,z:this.monster.pos.z},uc(this.world,this.unlocked,this.open));this.noises.push({kind:t,pos:this.feet(),floorDelta:Math.abs(e-n),occluded:s})}separateFromMonster(t){if(this.hiding||this.monster.concealed)return;const e=this.sim.x-this.monster.pos.x,n=this.sim.z-this.monster.pos.z,s=Math.hypot(e,n),r=.66;s>.001&&s<r&&Math.abs(this.sim.y-this.monster.pos.y)<1.5&&(this.sim.x+=e/s*(r-s),this.sim.z+=n/s*(r-s),js(this.world,this.sim.x,this.sim.z,this.sim.y)===null&&(this.sim.x-=e/s*(r-s),this.sim.z-=n/s*(r-s)))}newGame(){this.snap=ca(),this.ended=!1,this.autosavedIntro=!1,this.lastObjective="",this.fade=1,this.sim=da(this.snap.player),this.unlocked=new Set(this.snap.doorsUnlocked),this.open.clear(),this.desired.clear(),this.hiding=null,this.runtime.forEach(t=>t.mesh.visible=!1),this.runtime=[];for(const[t,e]of this.built.pickups)e.visible=!this.snap.pickedUp.includes(t);this.monster.spawn(this.snap.monster,this.snap.monster.yaw,"Patrol"),this.director=oc(),this.built.mannequin.visible=!1,this.built.secretShelf.position.x=37.32,this.viewmodel.visible=!0,this.lunge.visible=!1,this.setMode("playing"),this.testMode||this.input.lock(),this.audio.ensure()}applySnapshot(t){this.snap=t,this.ended=!1,this.sim=da(t.player),this.unlocked=new Set(t.doorsUnlocked),this.open.clear(),this.desired.clear();for(const e of t.doorsOpen)this.open.set(e,1),this.desired.set(e,1);this.hiding=null;for(const[e,n]of this.built.pickups)n.visible=!t.pickedUp.includes(e);t.events||(t.events=sa()),this.monster.spawn(t.monster,t.monster.yaw,t.monster.state),this.monsterDist()<3&&(this.monster.pos={x:4,y:0,z:16},this.monster.group.position.set(4,0,16)),this.built.secretShelf.position.x=t.flags.secretOpen?36:37.32,this.built.mannequin.visible=!1,this.fade=.4,this.viewmodel.visible=!0,this.lunge.visible=!1,this.setMode("playing"),this.testMode||this.input.lock(),this.audio.ensure()}persist(t){this.snap.player.health<=0||(this.copySim(),this.snap.doorsOpen=this.world.doors.filter(e=>(this.open.get(e.id)??0)>.6).map(e=>e.id),this.snap.doorsUnlocked=[...this.unlocked],this.snap.monster={x:this.monster.pos.x,y:this.monster.pos.y,z:this.monster.pos.z,yaw:this.monster.yaw,state:this.monster.bb.state,waypointIndex:this.monster.bb.waypointIndex,suspicion:this.monster.bb.suspicion,blindTime:this.monster.bb.blindTime},f_(this.storage,t,this.snap),this.ui.continueEnabled(!0))}copySim(){this.snap.player={x:this.sim.x,y:this.sim.y,z:this.sim.z,yaw:this.sim.yaw,pitch:this.sim.pitch,health:this.sim.health,stamina:this.sim.stamina,battery:this.sim.battery,flashlightOn:this.sim.flashlightOn,crouching:this.sim.crouching}}setMode(t){this.mode=t,t!=="playing"&&this.input.unlock(),this.ui.show(t==="playing"?"playing":t),this.audio.duck(t!=="playing"&&t!=="menu"),t==="inventory"&&this.refreshInv()}refreshInv(){const t=this.snap.inventory.map(e=>{const n=ii(e.itemId);return{name:n.name,count:e.count,desc:n.description}});this.invIndex>=t.length&&(this.invIndex=0),this.ui.keysLine(`Nøgler fundet: ${cr(this.snap)}/3`),this.ui.inventory(t,this.invIndex)}openExamine(t){const e=ii(t);let n="";t==="blueprint"&&(n=this.world.rooms.filter(s=>s.id!=="secret"||this.snap.visited.includes("secret")).map(s=>`<i class="${this.snap.visited.includes(s.id)?"on":""}">${s.name}</i>`).join("")),this.ui.examine(e,n),this.setMode("examine")}zoneFor(t){return t?t==="morgue"?"slagter":t==="chapel"||t==="anteroom"?"chapel":t.includes("corr")||t==="westcorr"||t==="eastcorr"||t==="ucorr"||t==="bcorr"?"corridor":t==="r102"||t==="tunnel"||t==="secret"||t==="closet"?"dark":this.sim.y<2?"cellar":this.sim.y>6?"upper":"hall":"hall"}relocateMonster(t,e){if(!this.monster.concealed){this.hideWait=0;return}if(this.hideWait+=t,this.hideWait<1.2)return;const n={x:this.sim.x,y:this.sim.y,z:this.sim.z},s=Ev({cells:this.spawnCells,player:n,forward:{x:this.camDir.x,z:this.camDir.z},recent:this.recentSpawns,from:{...this.monster.pos},visible:o=>us(this.eyePos(),{x:o.x,y:o.y+1.4,z:o.z},e),rng:Math.random});!s||wv(this.sim.flashlightOn&&this.sim.battery>0,this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},{x:s.x,y:s.y+1.6,z:s.z},e)||(this.monster.reveal(s),this.recentSpawns.push(s),this.recentSpawns.length>6&&this.recentSpawns.shift(),this.hideWait=0,this.audio.trace.push("relocate"))}stepEvents(t){this.snap.events||(this.snap.events=sa());const e=Qn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"",n=Xs(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates()),s=n&&n.kind==="door"?this.open.get(n.id)??0:0,r=!!n&&n.kind==="door"&&s>.55&&n.id!==ac,o=this.butcher.position,a=new I(o.x-this.camera.position.x,0,o.z-this.camera.position.z).normalize(),l=this.camDir.x*a.x+this.camDir.z*a.z<.25,c=Av(this.snap.events,{dt:t,time:this.snap.playTime,room:e,prevRoom:this.prevRoom,flashlight:this.sim.flashlightOn,prevFlash:this.prevFlash,lookedAway:this.snap.events.slagter===2&&l,atDoor:r});this.maybePeek(n),this.snap.events=c.state,this.prevRoom=e,this.prevFlash=this.sim.flashlightOn;for(const h of c.cues)this.fireCue(h,n?.id);if(this.lungeT>0){this.lungeT=Math.max(0,this.lungeT-t),this.lunge.visible=this.lungeT>0;const h=1-this.lungeT/2;this.lunge.position.z=-.9+h*.5}else this.lunge.visible=!1;if(this.shadowT>0){this.shadowT=Math.max(0,this.shadowT-t);const h=1-this.shadowT/1.1;this.shadowMesh.position.lerpVectors(this.shadowFrom,this.shadowTo,Math.min(1,h)),this.shadowMesh.position.y=this.shadowFrom.y+1,this.shadowMesh.visible=this.shadowT>0,this.audio.moveTracked(this.shadowMesh.position)}}fireCue(t,e){if(t.startsWith("jump:")){this.lungeT=2,this.lunge.visible=!0,this.trauma=1,this.audio.play("scream"),this.say("Noget var lige foran dig.");return}if(t==="silence"){this.audio.hush(3.5);return}if(t==="deep"){this.audio.play("deep",{x:40,y:1.2,z:3},{volume:1});return}if(t==="figure"){this.butcher.visible=!0;return}if(t==="hide-figure"){this.butcher.visible=!1;return}if(t==="steps"){const n={x:this.sim.x-this.camDir.x*2.2,y:this.sim.y,z:this.sim.z-this.camDir.z*2.2};this.audio.play("stepMonster",n,{volume:1}),this.audio.trace.push("slagter-steps");return}t==="shadow"&&this.runShadow(e)}runShadow(t){const e=this.world.doors.find(c=>c.id===t)??this.world.doors.find(c=>c.id==="door_rec_pat");if(!e)return;const n=Vt[e.floor],s=Math.random()<.5?1:-1,r=1.6,o=Math.sign(e.coord-this.sim.x||1),a=Math.sign(e.coord-this.sim.z||1);if(e.axis==="z"){const c=e.coord+a*.85;this.shadowFrom.set(e.center-s*r,n,c),this.shadowTo.set(e.center+s*r,n,c)}else{const c=e.coord+o*.85;this.shadowFrom.set(c,n,e.center-s*r),this.shadowTo.set(c,n,e.center+s*r)}this.shadowT=1.1,this.shadowMesh.position.copy(this.shadowFrom),this.shadowMesh.position.y=n+1,this.shadowMesh.visible=!0;const l={x:(this.shadowFrom.x+this.shadowTo.x)/2,y:n+1.2,z:(this.shadowFrom.z+this.shadowTo.z)/2};this.audio.play("shadow",l,{volume:1}),this.audio.play("creak",l,{volume:.7}),this.audio.play("stepMonster",l,{volume:.85}),this.audio.setHeartbeat(.7),this.flash=.4;for(const c of this.built.lights)Math.hypot(c.def.x-l.x,c.def.z-l.z)<8&&this.lightCut.set(c.def.id,this.snap.playTime+.7)}paintMap(){const t=this.ui.root.querySelector("#minimap"),e=t?.getContext("2d");if(!t||!e)return;const s=Qn(this.world,this.sim.x,this.sim.z,this.sim.y)?.floor??0,r=this.snap.playTime<this.monsterShown;C_(e,t.width,t.height,{rooms:D_(this.world.rooms),floor:s,px:this.sim.x,pz:this.sim.z,yaw:this.sim.yaw,visited:new Set(this.snap.visited),monster:r?{x:this.monster.pos.x,z:this.monster.pos.z,show:!0}:null,batteries:this.world.pickups.filter(o=>o.itemId==="battery"&&this.snap.visited.includes(o.room)&&!this.snap.pickedUp.includes(o.id)).map(o=>({x:o.x,z:o.z,floor:this.world.rooms.find(a=>a.id===o.room)?.floor??0}))})}herdMonster(){const t=Qn(this.world,this.monster.pos.x,this.monster.pos.z,this.monster.pos.y);if(t&&t.id!==this.monsterRoom&&(this.monsterRoom=t.id,this.monsterShown=this.snap.playTime+3.6,this.monsterRoomUntil=this.snap.playTime+120),this.monsterRoomUntil>0&&this.snap.playTime>this.monsterRoomUntil&&!this.monster.concealed){const e=this.world.rooms.filter(s=>!s.id.startsWith("trappe")&&s.id!=="stilhed"&&s.id!==this.monsterRoom),n=e[Math.floor(Math.random()*e.length)];if(!n)return;this.monsterRoomUntil=this.snap.playTime+120,this.monster.bb.state="Patrol",this.monster.bb.goal={x:n.x+n.w*.5,y:Vt[n.floor],z:n.z+n.d*.5},this.monsterShown=this.snap.playTime+3.6}}maybePeek(t){if(this.peekT>0||this.peekCool>0||!t||t.kind!=="door"||Math.hypot(this.sim.vx,this.sim.vz)>.4||Math.random()>.012)return;const e=this.world.doors.find(o=>o.id===t.id);if(!e)return;const n=Vt[e.floor],s=Math.sign(e.coord-this.sim.x||1),r=Math.sign(e.coord-this.sim.z||1);this.peek.position.set(e.axis==="x"?e.coord+s*.42:e.spanMin+.15,n,e.axis==="z"?e.coord+r*.42:e.spanMin+.15),this.peek.lookAt(this.camera.position.x,this.peek.position.y+1.5,this.camera.position.z),this.peek.visible=!0,this.peekT=1.25,this.peekCool=26,this.audio.play("whisper",{x:this.peek.position.x,y:n+1.5,z:this.peek.position.z},{volume:.55}),this.audio.trace.push("peek")}stepPower(t){if(!this.snap.flags.powerCut&&this.snap.playTime>=120&&(this.snap.flags.powerCut=!0,this.blackout=3.6,this.fade=1,this.sim.flashlightOn=!1,this.sim.x=42,this.sim.y=0,this.sim.z=8,this.sim.vx=0,this.sim.vz=0,this.sim.vy=0,this.audio.play("metallic"),this.audio.trace.push("power-cut")),this.blackout>0&&(this.blackout=Math.max(0,this.blackout-t),this.fade=1),Qn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id==="stilhed"&&cr(this.snap)>=3&&this.finish("yard"),this.peekCool=Math.max(0,this.peekCool-t),this.peekT>0){this.peekT=Math.max(0,this.peekT-t),this.peek.visible=this.peekT>0;const n=this.peekT>.8?(1.3-this.peekT)/.5:Math.min(1,this.peekT/.35);this.peek.position.y=Vt[Math.round(this.sim.y/4)]+1.45,this.peek.scale.setScalar(.2+.8*Math.max(0,Math.min(1,n)))}}stepKnocks(){if(!this.knocks.length)return;const t=this.snap.playTime;this.knocks=this.knocks.filter(e=>e.at>t?!0:(this.audio.play("door",e.pos,{volume:.75}),this.audio.trace.push("knock"),!1))}queueKnocks(){const t={x:-this.camDir.x,z:-this.camDir.z};for(let e=0;e<3;e++){const n=7-e*2.2;this.knocks.push({at:this.snap.playTime+.35+e*.7,pos:{x:this.sim.x+t.x*n,y:this.sim.y+1,z:this.sim.z+t.z*n}})}}buildViewmodel(){const t=new jt,e=new ce({color:"#e0c2a4",roughness:.62,emissive:"#5c4030",emissiveIntensity:.22,depthTest:!1}),n=new ce({color:"#3a3734",roughness:.4,metalness:.7,emissive:"#141312",emissiveIntensity:.18,depthTest:!1}),s=new ce({color:"#d5d0c8",roughness:.28,metalness:.8,emissive:"#2a2926",emissiveIntensity:.2,depthTest:!1}),r=new qe({color:"#fff6df",depthTest:!1}),o=v=>(v.frustumCulled=!1,v.renderOrder=3,v.traverse(x=>{x.frustumCulled=!1,x.renderOrder=3}),v),a=new dt(new $e(.026,.03,.2,16),n);a.rotation.x=Math.PI/2,a.position.z=-.02;const l=new dt(new $e(.042,.034,.06,16),s);l.rotation.x=Math.PI/2,l.position.z=-.15;const c=new dt(new Da(.034,20),r);c.position.z=-.182,c.rotation.y=Math.PI;const h=new dt(new $e(.008,.008,.018,8),s);h.position.set(0,.032,.02);const u=uo(ti(.12,-.14,.16),ti(.03,-.04,.04),.04,.028,e),d=I_(ti(.02,-.02,-.01),.034,e),f=uo(ti(.04,-.01,.02),ti(.01,.03,-.06),.013,.01,e);t.add(o(a),o(l),o(c),o(h),o(u),o(d),o(f));for(let v=0;v<3;v++){const x=-.01-v*.04;t.add(o(uo(ti(.03,-.01,x),ti(-.015,.028,x-.015),.011,.008,e)))}return t.renderOrder=3,t}buildLunge(){const t=new jt,e=new qe({color:"#e7ddd2",depthTest:!1}),n=new qe({color:"#140c0c",depthTest:!1}),s=new dt(new me(.2,24,16),e);s.scale.set(.88,1.22,.5);const r=new dt(new me(.035,10,8),n);r.scale.set(1.4,.45,.4),r.position.set(-.06,.03,.08);const o=r.clone();o.position.x=.065;const a=new qe({color:"#ff2418"}),l=new dt(new me(.012,8,6),a);l.position.set(-.06,.03,.1);const c=l.clone();return c.position.x=.065,t.add(s,r,o,l,c),t.position.set(0,0,-.7),t.visible=!1,t.renderOrder=20,t}buildButcher(){const t=new jt;t.position.set(40,0,3);const e=new ce({color:"#1a1618",roughness:.9}),n=new ce({color:"#d9d0c4",roughness:.6}),s=new dt(new ms(.22,.7,4,8),e);s.position.y=1.05;const r=new dt(new me(.16,16,12),n);r.scale.set(.9,1.2,.55),r.position.y=1.72,t.add(s,r);for(let o=0;o<4;o++){const a=new dt(new gs(.08,.012,6,10),new ce({color:"#5a534c",metalness:.7,roughness:.4}));a.position.set(-1.2+o*.55,2.35,-.2),a.rotation.x=Math.PI/2,t.add(a)}return t.visible=!1,t}say(t){this.message=t,this.messageT=2.6}eyePos(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}feet(){return{x:this.sim.x,y:this.sim.y,z:this.sim.z}}hidePos(){const t=this.world.hides.find(e=>e.id===this.hiding);return t?{x:t.x,y:this.sim.y,z:t.z}:null}doorPos(t){return{x:t.axis==="x"?t.coord:t.center,y:Vt[t.floor]+1,z:t.axis==="z"?t.coord:t.center}}monsterDist(){return Math.hypot(this.monster.pos.x-this.sim.x,this.monster.pos.z-this.sim.z)}monsterDistTo(t,e){return Math.hypot(this.camera.position.x-t,this.camera.position.z-e)}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix();const n=this.settings.quality==="low"?1:this.settings.quality==="high"?1.5:1.25,s=Math.min(window.devicePixelRatio||1,n)*this.settings.resolutionScale;this.renderer.setPixelRatio(s),this.renderer.setSize(t,e,!1),this.post.setSize(Math.floor(t*s),Math.floor(e*s))}applyVolumes(){this.audio.setVolumes(this.settings.masterVolume,this.settings.musicVolume,this.settings.sfxVolume)}applyPatch(t){const e=this.settings.quality;if(this.settings=Na({...this.settings,...t}),m_(this.storage,this.settings),this.ui.fillSettings(this.settings),this.applyVolumes(),this.input.setSensitivity(this.settings.mouseSensitivity),t.quality&&t.quality!==e){this.post.applyQuality(this.settings.quality),this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.spot.castShadow=this.settings.quality!=="low";for(const n of this.built.detail)n.visible=this.settings.quality!=="low"}t.fullscreen!==void 0&&(this.settings.fullscreen?document.documentElement.requestFullscreen?.().catch(()=>{}):document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{})),this.resize()}bindUi(){}handle(t,e){if(t==="new")this.newGame();else if(t==="continue"){const n=yc(this.storage);n&&this.applySnapshot(n.snapshot)}else if(t==="openLoad")this.slotMode="load",this.ui.slots(xc(this.storage),"INDLÆS"),this.setMode("slots");else if(t==="openSave")this.slotMode="save",this.ui.slots(xc(this.storage),"GEM"),this.setMode("slots");else if(t==="slot"&&typeof e=="number")if(this.slotMode==="save")this.persist(e),this.say("Gemt."),this.setMode("paused");else{const n=ds(this.storage,e);n&&this.applySnapshot(n.snapshot)}else if(t==="closeSlots")this.setMode(this.slotMode==="save"?"paused":"menu");else if(t==="settings")this.settingsFrom=this.mode==="playing"?"paused":this.mode,this.ui.fillSettings(this.settings),this.setMode("settings");else if(t==="closeSettings")this.setMode(this.settingsFrom==="slots"?"menu":this.settingsFrom);else if(t==="resume")this.setMode("playing"),this.testMode||this.input.lock();else if(t==="restart")this.newGame();else if(t==="menu")!this.ended&&this.snap.playTime>1&&this.persist(0),this.setMode("menu");else if(t==="exit")this.setMode("exit"),window.close();else if(t==="exitBack")this.setMode("menu");else if(t==="credits")this.setMode("credits");else if(t==="creditsBack")this.setMode("menu");else if(t==="closeInv")this.setMode("playing");else if(t==="inventory")(this.mode==="playing"||this.mode==="paused")&&this.setMode("inventory");else if(t==="select"&&typeof e=="number")this.invIndex=e,this.refreshInv();else if(t==="use")this.useSelected();else if(t==="drop")this.dropSelected();else if(t==="closeEx")this.setMode(this.snap.playTime>0&&!this.ended?"playing":"menu");else if(t==="digit"&&typeof e=="string")this.code.length<4&&(this.code+=e),this.ui.keypad(this.code,"Stiftelsesåret.");else if(t==="keyOk")this.submitCode();else if(t==="keyClear")this.code="",this.ui.keypad(this.code,"Stiftelsesåret.");else if(t==="keyClose")this.setMode("playing");else if(t!=="patch")if(t==="endMenu")this.setMode("menu");else if(t==="endRetry"){const n=ds(this.storage,0);n?this.applySnapshot(n.snapshot):this.newGame()}else t==="endNew"&&this.newGame()}useSelected(){const t=this.snap.inventory[this.invIndex];if(!t)return;const e=ii(t.itemId);if(e.kind==="consumable"){const n=a_(this.snap.inventory,t.itemId);n.heal&&(this.snap.inventory=n.slots,this.sim.health=Math.min(100,this.sim.health+n.heal),this.snap.player.health=this.sim.health,this.audio.play("pickup"),this.refreshInv());return}(e.text||e.kind==="map"||e.kind==="note"||e.kind==="story"||e.kind==="collectible")&&this.openExamine(t.itemId)}dropSelected(){const t=this.snap.inventory[this.invIndex];if(!t)return;const e=vc(this.snap.inventory,t.itemId);if(!e.dropped){this.say("Den skal du beholde.");return}this.snap.inventory=e.slots,this.refreshInv()}installApi(){const t=this;window.__AGNES__={ready:!0,mode:()=>t.mode,start:()=>t.newGame(),snapshot:()=>(t.copySim(),JSON.parse(JSON.stringify(t.snap))),setMove:e=>{t.input.virtual=e},look:(e,n)=>{const s=ec(t.sim.yaw,t.sim.pitch,e,n,t.settings.invertY);t.sim.yaw=s.yaw,t.sim.pitch=s.pitch},act:e=>{e==="interact"?t.interact():e==="flashlight"?t.toggleFlash():e==="pause"?t.setMode("paused"):e==="inventory"?t.setMode("inventory"):e==="reload"?t.swapBattery():t.handle(e)},teleport:(e,n,s)=>{t.sim.x=e,t.sim.y=n,t.sim.z=s;const r=js(t.world,e,s,n);r!==null&&(t.sim.y=r),t.placeCamera({sprint:!1}),t.camera.getWorldDirection(t.camDir)},freeze:e=>t.setFrozen(e),give:e=>{t.snap.inventory=Ks(t.snap.inventory,e).slots},setFlag:(e,n)=>{t.snap.flags[e]=n,e==="secretOpen"&&n&&t.unlocked.add("door_secret"),e==="generatorOn"&&(t.snap.flags.generatorOn=n)},unlock:e=>t.unlocked.add(e),forceMonster:e=>{t.monster.bb.state=e},faceMonster:e=>t.monster.face(e),placeMonster:(e,n,s)=>{t.monster.pos={x:e,y:n,z:s},t.monster.group.position.set(e,n,s),t.monster.bb.state="Idle",t.monster.face(Math.PI),t.snap.iFrame=8,t.scares.fx.face=0,t.scares.update(10)},scare:e=>t.scares.trigger(e,t.snap.playTime,!0),save:e=>t.persist(e),load:e=>{const n=ds(t.storage,e);return n&&t.applySnapshot(n.snapshot),!!n},restart:()=>t.newGame(),fps:()=>t.fps,monster:()=>({x:t.monster.pos.x,y:t.monster.pos.y,z:t.monster.pos.z,state:t.monster.bb.state}),doorOpen:e=>(t.open.get(e)??0)>.6,aim:()=>{const e=Xs(t.eyePos(),{x:t.camDir.x,y:t.camDir.y,z:t.camDir.z},t.candidates());return e?{id:e.id,kind:e.kind,prompt:e.prompt}:null},tension:()=>t.director.tension,lastScare:()=>t.scares.lastKind,audioLog:()=>t.audio.trace.slice(),monsterHidden:()=>t.monster.concealed,events:()=>t.snap.events,emptyLight:()=>{t.sim.battery=.15},ping:e=>{t.audio.play(e,{x:t.sim.x+1.5,y:t.sim.y+1,z:t.sim.z+1.5},{volume:1})},probe:e=>t.audio.sampleMix(e),audition:e=>t.audio.audition(e),measureBed:()=>t.audio.measureBed()}}}function ti(i,t,e){return new I(i,t,e)}function uo(i,t,e,n,s){const r=new I().subVectors(t,i),o=Math.max(.001,r.length()),a=new dt(new $e(e,n,o,12),s);return a.position.copy(i).lerp(t,.5),a.quaternion.setFromUnitVectors(new I(0,1,0),r.normalize()),a}function I_(i,t,e){const n=new dt(new me(t,12,8),e);return n.position.copy(i),n}function U_(){return da(ca().player)}function da(i){return{...i,vy:0,vx:0,vz:0,grounded:!0,justLanded:!1}}class k_{root;hooks;constructor(t,e){this.root=t,this.hooks=e,t.innerHTML=F_,this.bind()}bind(){const t=this.hooks,e=(a,l)=>{this.root.querySelector(a)?.addEventListener("click",l)};e("#btn-new",t.newGame),e("#btn-continue",t.continue),e("#btn-load",t.openLoad),e("#btn-settings",t.settings),e("#btn-credits",t.credits),e("#btn-exit",t.exit),e("#btn-resume",t.resume),e("#btn-save",t.openSave),e("#btn-pause-settings",t.settings),e("#btn-restart",t.restart),e("#btn-menu",t.menu),e("#btn-settings-back",t.closeSettings),e("#btn-slots-back",t.closeSlots),e("#btn-credits-back",t.creditsBack),e("#btn-exit-back",t.exitBack),e("#btn-inv-close",t.closeInventory),e("#btn-inv-hud",t.openInventory),e("#btn-use",t.useItem),e("#btn-drop",t.dropItem),e("#btn-examine-close",t.closeExamine),e("#btn-key-ok",t.keypadOk),e("#btn-key-clear",t.keypadClear),e("#btn-key-close",t.closeKeypad),e("#btn-end-menu",t.endingMenu),e("#btn-end-retry",t.endingRetry),e("#btn-end-new",t.endingNew),this.root.querySelectorAll("[data-digit]").forEach(a=>{a.addEventListener("click",()=>t.digit(a.dataset.digit||""))});const n=(a,l)=>{const c=this.root.querySelector(a);c?.addEventListener("input",()=>t.patchSettings({[l]:Number(c.value)}))};n("#set-res","resolutionScale"),n("#set-sens","mouseSensitivity"),n("#set-master","masterVolume"),n("#set-music","musicVolume"),n("#set-sfx","sfxVolume"),n("#set-bright","brightness");const s=this.root.querySelector("#set-quality");s?.addEventListener("change",()=>t.patchSettings({quality:s.value}));const r=this.root.querySelector("#set-fps");r?.addEventListener("change",()=>t.patchSettings({fpsCap:Number(r.value)}));const o=(a,l)=>{const c=this.root.querySelector(a);c?.addEventListener("change",()=>t.patchSettings({[l]:c.checked}))};o("#set-blur","motionBlur"),o("#set-shake","cameraShake"),o("#set-full","fullscreen"),o("#set-invert","invertY")}show(t){for(const s of this.root.querySelectorAll(".screen"))s.classList.add("hidden");if(this.q("#loading").classList.toggle("hidden",t!=="loading"),this.q("#fatal").classList.toggle("hidden",t!=="fatal"),t==="none"||t==="playing"){this.q("#hud").classList.toggle("hidden",t!=="playing");return}this.q("#hud").classList.toggle("hidden",t!=="playing");const n={menu:"#menu",pause:"#pause",settings:"#settings",slots:"#slots",credits:"#credits",exit:"#exit",inventory:"#inventory",examine:"#examine",keypad:"#keypad",ending:"#ending",loading:"#loading",fatal:"#fatal"}[t];n&&this.q(n).classList.remove("hidden"),(t==="inventory"||t==="examine"||t==="keypad")&&this.q("#hud").classList.add("hidden")}status(t){this.q("#loading").textContent=t}fatal(t){this.q("#fatal").textContent=t,this.show("fatal")}continueEnabled(t){this.q("#btn-continue").disabled=!t}hud(t){this.q("#obj-text").textContent=t.objective,this.q("#files").textContent=t.files,this.q("#prompt").innerHTML=t.prompt?`<b>E</b> ${N_(t.prompt)}`:"";const e=this.q("#stam");e.classList.toggle("low",t.stamina<25);const n=e.querySelector("i");n&&(n.style.width=`${t.stamina}%`);const s=this.q("#bat i");s&&(s.style.width=`${t.battery}%`),this.q("#bat").classList.toggle("low",t.battery<25);const r=this.q("#bat-label");r&&(r.textContent=t.batteryText?`Batteri ${t.batteryText}`:"Batteri"),this.q("#lock-hint").classList.toggle("hidden",!t.lockHint)}hurt(t){this.q("#hurt").style.opacity=String(Math.max(0,Math.min(1,t)))}subtitle(t){this.q("#subtitle").textContent=t}toast(t){this.q("#toast").textContent=t}audioDebug(t,e){const n=this.q("#audio-debug");n.classList.toggle("hidden",!e),n.textContent=t}perf(t,e){const n=this.q("#perf");n.classList.toggle("hidden",!e),n.textContent=t}fillSettings(t){this.q("#set-quality").value=t.quality,this.q("#set-fps").value=String(t.fpsCap),this.setRange("#set-res",t.resolutionScale),this.setRange("#set-sens",t.mouseSensitivity),this.setRange("#set-master",t.masterVolume),this.setRange("#set-music",t.musicVolume),this.setRange("#set-sfx",t.sfxVolume),this.setRange("#set-bright",t.brightness),this.q("#set-blur").checked=t.motionBlur,this.q("#set-shake").checked=t.cameraShake,this.q("#set-invert").checked=t.invertY,this.q("#set-full").checked=t.fullscreen}slots(t,e){this.q("#slots h2").textContent=e;const n=this.q("#slot-list");n.innerHTML="";const s=["Checkpoint","Plads 1","Plads 2","Plads 3"];t.forEach((r,o)=>{const a=document.createElement("button");a.className="slot";const l=r?new Date(r.savedAt).toLocaleString("da-DK"):"Tom",c=r?`${Math.floor(r.snapshot.playTime/60)} min`:"";a.textContent=`${s[o]} — ${l} ${c}`,a.addEventListener("click",()=>this.hooks.pickSlot(o)),n.appendChild(a)})}keysLine(t){const e=this.root.querySelector("#inv-keys");e&&(e.textContent=t)}inventory(t,e){const n=this.q("#inv-list");if(n.innerHTML="",!t.length){const r=document.createElement("div");r.className="note",r.textContent="Du har kun lygten.",n.appendChild(r)}t.forEach((r,o)=>{const a=document.createElement("button");a.className="inv-item"+(o===e?" on":""),a.textContent=r.count>1?`${r.name} ×${r.count}`:r.name,a.addEventListener("click",()=>this.hooks.selectItem(o)),n.appendChild(a)});const s=t[e];this.q("#inv-desc").textContent=s?s.desc:"Vælg en genstand."}examine(t,e){this.q("#ex-title").textContent=t?.name??"",this.q("#ex-body").textContent=t?.text||t?.description||"",this.q("#ex-map").innerHTML=e}keypad(t,e){this.q("#key-code").textContent=t.padEnd(4,"·"),this.q("#key-hint").textContent=e}ending(t,e){const n=x_(t);this.q("#end-kicker").textContent=n.kicker,this.q("#end-title").textContent=n.title,this.q("#end-body").textContent=n.paragraphs.join(`

`),this.q("#btn-end-retry").classList.toggle("hidden",!e),this.q("#btn-end-new").classList.toggle("hidden",!e)}setRange(t,e){const n=this.q(t);n.value=String(e)}q(t){const e=this.root.querySelector(t);if(!e)throw new Error(`Mangler ${t}`);return e}}function N_(i){return i.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]??t)}const F_=`
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
    <p class="controls-hint">WASD gå · Shift løb · Ctrl krøb · Mellemrum hop<br>E brug · F lygte · R batteri · Q rosenkrans<br>G smid · Tab inventar · Esc pause · F3 ydelse · F4 lyd</p>
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
`,Fa=document.getElementById("app");if(!Fa)throw new Error("Mangler #app");let $t;const O_={newGame:()=>$t.handle("new"),continue:()=>$t.handle("continue"),openLoad:()=>$t.handle("openLoad"),openSave:()=>$t.handle("openSave"),pickSlot:i=>$t.handle("slot",i),closeSlots:()=>$t.handle("closeSlots"),settings:()=>$t.handle("settings"),closeSettings:()=>$t.handle("closeSettings"),resume:()=>$t.handle("resume"),restart:()=>$t.handle("restart"),menu:()=>$t.handle("menu"),exit:()=>$t.handle("exit"),exitBack:()=>$t.handle("exitBack"),credits:()=>$t.handle("credits"),creditsBack:()=>$t.handle("creditsBack"),closeInventory:()=>$t.handle("closeInv"),openInventory:()=>$t.handle("inventory"),selectItem:i=>$t.handle("select",i),useItem:()=>$t.handle("use"),dropItem:()=>$t.handle("drop"),closeExamine:()=>$t.handle("closeEx"),digit:i=>$t.handle("digit",i),keypadOk:()=>$t.handle("keyOk"),keypadClear:()=>$t.handle("keyClear"),closeKeypad:()=>$t.handle("keyClose"),patchSettings:i=>$t.applyPatch(i),endingMenu:()=>$t.handle("endMenu"),endingRetry:()=>$t.handle("endRetry"),endingNew:()=>$t.handle("endNew")},Tc=new k_(Fa,O_),Ac=Fa.querySelector("#view");try{if(!Ac)throw new Error("Mangler lærred");$t=new L_(Ac,Tc),$t.start()}catch(i){const t=i instanceof Error?i.message:"Ukendt fejl";Tc.fatal(`Spillet kunne ikke starte. ${t}`),console.error(i)}
