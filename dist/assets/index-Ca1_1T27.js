(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="170",Du=0,pl=1,Iu=2,rh=1,oh=2,An=3,Yn=0,Ve=1,ge=2,ze=0,Wi=1,wr=2,ml=3,gl=4,ah=5,Rn=100,Lu=101,Uu=102,Nu=103,Fu=104,Uo=200,Ou=201,zu=202,Bu=203,No=204,Fo=205,lh=206,Gu=207,ch=208,Hu=209,Vu=210,Wu=211,Xu=212,qu=213,Yu=214,Oo=0,zo=1,Bo=2,ji=3,Go=4,Ho=5,Vo=6,Wo=7,hh=0,ju=1,$u=2,kn=0,uh=1,dh=2,fh=3,ph=4,Ku=5,mh=6,gh=7,vh=300,$i=301,Ki=302,Xo=303,qo=304,Rr=306,jn=1e3,Xn=1001,Yo=1002,Be=1003,Zu=1004,Us=1005,gn=1006,Or=1007,hi=1008,In=1009,xh=1010,_h=1011,As=1012,Ua=1013,fi=1014,cn=1015,un=1016,Na=1017,Fa=1018,pi=1020,yh=35902,Mh=1021,bh=1022,hn=1023,Sh=1024,wh=1025,Xi=1026,mi=1027,Cr=1028,Oa=1029,Eh=1030,za=1031,Ba=1033,vr=33776,xr=33777,_r=33778,yr=33779,jo=35840,$o=35841,Ko=35842,Zo=35843,Jo=36196,Qo=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,Mr=36492,ma=36494,ga=36495,Th=36283,va=36284,xa=36285,_a=36286,Ju=3200,Qu=3201,Ga=0,td=1,mn="",_e="srgb",ts="srgb-linear",Pr="linear",re="srgb",yi=7680,vl=519,ed=512,nd=513,id=514,Ah=515,sd=516,rd=517,od=518,ad=519,xl=35044,_l="300 es",Cn=2e3,Er=2001;class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yl=1234567;const Ms=Math.PI/180,Zi=180/Math.PI;function ns(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Ha(i,t){return(i%t+t)%t}function ld(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cd(i,t,e){return i!==t?(e-i)/(t-i):0}function bs(i,t,e){return(1-e)*i+e*t}function hd(i,t,e,n){return bs(i,t,1-Math.exp(-e*n))}function ud(i,t=1){return t-Math.abs(Ha(i,t*2)-t)}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function md(i,t){return i+Math.random()*(t-i)}function gd(i){return i*(.5-Math.random())}function vd(i){i!==void 0&&(yl=i);let t=yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xd(i){return i*Ms}function _d(i){return i*Zi}function yd(i){return(i&i-1)===0&&i!==0}function Md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),f=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*f,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*f,a*c);break;case"ZYZ":i.set(l*f,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wd={DEG2RAD:Ms,RAD2DEG:Zi,generateUUID:ns,clamp:Te,euclideanModulo:Ha,mapLinear:ld,inverseLerp:cd,lerp:bs,damp:hd,pingpong:ud,smoothstep:dd,smootherstep:fd,randInt:pd,randFloat:md,randFloatSpread:gd,seededRandom:vd,degToRad:xd,radToDeg:_d,isPowerOfTwo:yd,ceilPowerOfTwo:Md,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Sd,normalize:Fe,denormalize:Oi};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=s[0],m=s[3],g=s[6],S=s[1],A=s[4],y=s[7],w=s[2],P=s[5],T=s[8];return r[0]=o*v+a*S+l*w,r[3]=o*m+a*A+l*P,r[6]=o*g+a*y+l*T,r[1]=c*v+h*S+u*w,r[4]=c*m+h*A+u*P,r[7]=c*g+h*y+u*T,r[2]=d*v+p*S+f*w,r[5]=d*m+p*A+f*P,r[8]=d*g+p*y+f*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,f=e*u+n*d+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/f;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new Bt;function Rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){const i=Rs("canvas");return i.style.display="block",i}const Ml={};function xs(i){i in Ml||(Ml[i]=!0,console.warn(i))}function Td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ad(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mn?Pr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bl=[.64,.33,.3,.6,.15,.06],Sl=[.2126,.7152,.0722],wl=[.3127,.329],El=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[ts]:{primaries:bl,whitePoint:wl,transfer:Pr,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:Sl,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:bl,whitePoint:wl,transfer:re,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:Sl,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}});let Mi;class Cd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=Rs("canvas")),Mi.width=t.width,Mi.height=t.height;const n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pd=0;class Ch{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Br(s[o].image)):r.push(Br(s[o]))}else r=Br(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kd=0;class Re extends es{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Xn,s=Xn,r=gn,o=hi,a=hn,l=In,c=Re.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ns(),this.name="",this.source=new Ch(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=vh;Re.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,y=(p+1)/2,w=(g+1)/2,P=(h+d)/4,T=(u+v)/4,x=(f+m)/4;return A>y&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=P/n,r=T/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=P/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=x/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-f)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ch(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Je extends Dd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ph extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Id extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],f=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==f){let m=1-a;const g=l*d+c*p+h*f+u*v,S=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const w=Math.sqrt(A),P=Math.atan2(w,g*S);m=Math.sin(m*P)/w,a=Math.sin(a*P)/w}const y=a*S;if(l=l*m+d*y,c=c*m+p*y,h=h*m+f*y,u=u*m+v*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+h*u+l*p-c*d,t[e+1]=l*f+h*d+c*u-a*p,t[e+2]=c*f+h*p+a*d-l*u,t[e+3]=h*f-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new U,Al=new Kn;class vi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Fs.subVectors(this.max,as),bi.subVectors(t.a,as),Si.subVectors(t.b,as),wi.subVectors(t.c,as),Nn.subVectors(Si,bi),Fn.subVectors(wi,Si),Jn.subVectors(bi,wi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Jn.z,Jn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Jn.z,0,-Jn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Jn.y,Jn.x,0];return!Hr(e,bi,Si,wi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,bi,Si,wi,Fs))?!1:(Os.crossVectors(Nn,Fn),e=[Os.x,Os.y,Os.z],Hr(e,bi,Si,wi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new U,new U,new U,new U,new U,new U,new U,new U],rn=new U,Ns=new vi,bi=new U,Si=new U,wi=new U,Nn=new U,Fn=new U,Jn=new U,as=new U,Fs=new U,Os=new U,Qn=new U;function Hr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qn.fromArray(i,r);const a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ld=new vi,ls=new U,Vr=new U;class is{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(Vr)),this.expandByPoint(ls.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new U,Wr=new U,zs=new U,On=new U,Xr=new U,Bs=new U,qr=new U;class kh{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wr.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Wr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zs),a=On.dot(this.direction),l=-On.dot(zs),c=On.lengthSq(),h=Math.abs(1-o*o);let u,d,p,f;if(h>0)if(u=o*l-a,d=o*a-l,f=r*h,u>=0)if(d>=-f)if(d<=f){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wr).addScaledVector(zs,d),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){Xr.subVectors(e,t),Bs.subVectors(n,t),qr.crossVectors(Xr,Bs);let o=this.direction.dot(qr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(Bs.crossVectors(On,Bs));if(l<0)return null;const c=a*this.direction.dot(Xr.cross(On));if(c<0||l+c>o)return null;const h=-a*On.dot(qr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,f,v,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,f,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,f,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),o=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,f=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+f*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=f+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,f=c*h,v=c*u;e[0]=d+v*a,e[4]=f*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-f,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,f=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,f=a*h,v=a*u;e[0]=l*h,e[4]=f*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-f,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,f=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=f*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+f,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,f=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,Nd)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),zn.crossVectors(n,qe),zn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),zn.crossVectors(n,qe)),zn.normalize(),Gs.crossVectors(qe,zn),s[0]=zn.x,s[4]=Gs.x,s[8]=qe.x,s[1]=zn.y,s[5]=Gs.y,s[9]=qe.y,s[2]=zn.z,s[6]=Gs.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],g=n[14],S=n[3],A=n[7],y=n[11],w=n[15],P=s[0],T=s[4],x=s[8],_=s[12],b=s[1],M=s[5],k=s[9],I=s[13],H=s[2],C=s[6],F=s[10],G=s[14],L=s[3],W=s[7],J=s[11],rt=s[15];return r[0]=o*P+a*b+l*H+c*L,r[4]=o*T+a*M+l*C+c*W,r[8]=o*x+a*k+l*F+c*J,r[12]=o*_+a*I+l*G+c*rt,r[1]=h*P+u*b+d*H+p*L,r[5]=h*T+u*M+d*C+p*W,r[9]=h*x+u*k+d*F+p*J,r[13]=h*_+u*I+d*G+p*rt,r[2]=f*P+v*b+m*H+g*L,r[6]=f*T+v*M+m*C+g*W,r[10]=f*x+v*k+m*F+g*J,r[14]=f*_+v*I+m*G+g*rt,r[3]=S*P+A*b+y*H+w*L,r[7]=S*T+A*M+y*C+w*W,r[11]=S*x+A*k+y*F+w*J,r[15]=S*_+A*I+y*G+w*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],f=t[3],v=t[7],m=t[11],g=t[15];return f*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],v=t[13],m=t[14],g=t[15],S=u*m*c-v*d*c+v*l*p-a*m*p-u*l*g+a*d*g,A=f*d*c-h*m*c-f*l*p+o*m*p+h*l*g-o*d*g,y=h*v*c-f*u*c+f*a*p-o*v*p-h*a*g+o*u*g,w=f*u*l-h*v*l-f*a*d+o*v*d+h*a*m-o*u*m,P=e*S+n*A+s*y+r*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=S*T,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*g-n*d*g)*T,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*g+n*l*g)*T,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*T,t[4]=A*T,t[5]=(h*m*r-f*d*r+f*s*p-e*m*p-h*s*g+e*d*g)*T,t[6]=(f*l*r-o*m*r-f*s*c+e*m*c+o*s*g-e*l*g)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*T,t[8]=y*T,t[9]=(f*u*r-h*v*r-f*n*p+e*v*p+h*n*g-e*u*g)*T,t[10]=(o*v*r-f*a*r+f*n*c-e*v*c-o*n*g+e*a*g)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*T,t[12]=w*T,t[13]=(h*v*s-f*u*s+f*n*d-e*v*d-h*n*m+e*u*m)*T,t[14]=(f*a*s-o*v*s-f*n*l+e*v*l+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,f=r*u,v=o*h,m=o*u,g=a*u,S=l*c,A=l*h,y=l*u,w=n.x,P=n.y,T=n.z;return s[0]=(1-(v+g))*w,s[1]=(p+y)*w,s[2]=(f-A)*w,s[3]=0,s[4]=(p-y)*P,s[5]=(1-(d+g))*P,s[6]=(m+S)*P,s[7]=0,s[8]=(f+A)*T,s[9]=(m-S)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ei.set(s[0],s[1],s[2]).length();const o=Ei.set(s[4],s[5],s[6]).length(),a=Ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Cn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,f;if(a===Cn)p=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===Er)p=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Cn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let f,v;if(a===Cn)f=(o+r)*u,v=-2*u;else if(a===Er)f=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ei=new U,on=new Kt,Ud=new U(0,0,0),Nd=new U(1,1,1),zn=new U,Gs=new U,qe=new U,Rl=new Kt,Cl=new Kn;class en{constructor(t=0,e=0,n=0,s=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fd=0;const Pl=new U,Ti=new Kn,wn=new Kt,Hs=new U,cs=new U,Od=new U,zd=new Kn,kl=new U(1,0,0),Dl=new U(0,1,0),Il=new U(0,0,1),Ll={type:"added"},Bd={type:"removed"},Ai={type:"childadded",child:null},Yr={type:"childremoved",child:null};class ye extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new U,e=new en,n=new Kn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Bt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(cs,Hs,this.up):wn.lookAt(Hs,cs,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(wn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ll),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bd),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ll),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new U(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new U,En=new U,jr=new U,Tn=new U,Ri=new U,Ci=new U,Ul=new U,$r=new U,Kr=new U,Zr=new U,Jr=new oe,Qr=new oe,to=new oe;class ln{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),En.subVectors(n,e),jr.subVectors(t,e);const o=an.dot(an),a=an.dot(En),l=an.dot(jr),c=En.dot(En),h=En.dot(jr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,f=(o*h-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Jr.setScalar(0),Qr.setScalar(0),to.setScalar(0),Jr.fromBufferAttribute(t,e),Qr.fromBufferAttribute(t,n),to.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jr,r.x),o.addScaledVector(Qr,r.y),o.addScaledVector(to,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),En.subVectors(t,e),an.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ri.subVectors(s,n),Ci.subVectors(r,n),$r.subVectors(t,n);const l=Ri.dot($r),c=Ci.dot($r);if(l<=0&&c<=0)return e.copy(n);Kr.subVectors(t,s);const h=Ri.dot(Kr),u=Ci.dot(Kr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ri,o);Zr.subVectors(t,r);const p=Ri.dot(Zr),f=Ci.dot(Zr);if(f>=0&&p<=f)return e.copy(r);const v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Ci,a);const m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Ul.subVectors(r,s),a=(u-h)/(u-h+(p-f)),e.copy(s).addScaledVector(Ul,a);const g=1/(m+v+d);return o=v*g,a=d*g,e.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function eo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Ha(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=eo(o,r,t+1/3),this.g=eo(o,r,t),this.b=eo(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){const n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return $t.fromWorkingColorSpace(De.copy(this),t),Math.round(Te(De.r*255,0,255))*65536+Math.round(Te(De.g*255,0,255))*256+Math.round(Te(De.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=_e){$t.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Vs);const n=bs(Bn.h,Vs.h,e),s=bs(Bn.s,Vs.s,e),r=bs(Bn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Vt;Vt.NAMES=Ih;let Gd=0;class xn extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ns(),this.name="",this.blending=Wi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Fo,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vn extends xn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new U,Ws=new lt;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xl,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xl&&(t.usage=this.usage),t}}class Lh extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uh extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hd=0;const tn=new Kt,no=new ye,Pi=new U,Ye=new vi,hs=new vi,Ee=new U;class Ae extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rh(t)?Uh:Lh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return no.lookAt(t),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ye.min,hs.min),Ye.expandByPoint(Ee),Ee.addVectors(Ye.max,hs.max),Ye.expandByPoint(Ee)):(Ye.expandByPoint(hs.min),Ye.expandByPoint(hs.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(t,c),Ee.add(Pi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new U,l[x]=new U;const c=new U,h=new U,u=new U,d=new lt,p=new lt,f=new lt,v=new U,m=new U;function g(x,_,b){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,x),p.fromBufferAttribute(r,_),f.fromBufferAttribute(r,b),h.sub(c),u.sub(c),p.sub(d),f.sub(d);const M=1/(p.x*f.y-f.x*p.y);isFinite(M)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(M),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(M),a[x].add(v),a[_].add(v),a[b].add(v),l[x].add(m),l[_].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,_=S.length;x<_;++x){const b=S[x],M=b.start,k=b.count;for(let I=M,H=M+k;I<H;I+=3)g(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const A=new U,y=new U,w=new U,P=new U;function T(x){w.fromBufferAttribute(s,x),P.copy(w);const _=a[x];A.copy(_),A.sub(w.multiplyScalar(w.dot(_))).normalize(),y.crossVectors(P,_);const M=y.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,M)}for(let x=0,_=S.length;x<_;++x){const b=S[x],M=b.start,k=b.count;for(let I=M,H=M+k;I<H;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const f=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,f=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new Kt,ti=new kh,Xs=new is,Fl=new U,qs=new U,Ys=new U,js=new U,io=new U,$s=new U,Ol=new U,Ks=new U;class Z extends ye{constructor(t=new Ae,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(io.fromBufferAttribute(u,t),o?$s.addScaledVector(io,h):$s.addScaledVector(io.sub(e),h))}e.add($s)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Xs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Xs,Fl)===null||ti.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,v=d.length;f<v;f++){const m=d[f],g=o[m.materialIndex],S=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,w=A;y<w;y+=3){const P=a.getX(y),T=a.getX(y+1),x=a.getX(y+2);s=Zs(this,g,t,n,c,h,u,P,T,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=f,g=v;m<g;m+=3){const S=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=Zs(this,o,t,n,c,h,u,S,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,v=d.length;f<v;f++){const m=d[f],g=o[m.materialIndex],S=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,w=A;y<w;y+=3){const P=y,T=y+1,x=y+2;s=Zs(this,g,t,n,c,h,u,P,T,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=f,g=v;m<g;m+=3){const S=m,A=m+1,y=m+2;s=Zs(this,o,t,n,c,h,u,S,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Vd(i,t,e,n,s,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yn,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:i}}function Zs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,qs),i.getVertexPosition(l,Ys),i.getVertexPosition(c,js);const h=Vd(i,t,e,n,qs,Ys,js,Ol);if(h){const u=new U;ln.getBarycoord(Ol,qs,Ys,js,u),s&&(h.uv=ln.getInterpolatedAttribute(s,a,l,c,u,new lt)),r&&(h.uv1=ln.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=ln.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};ln.getNormal(qs,Ys,js,d.normal),h.face=d,h.barycoord=u}return h}class It extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,s,o,2),f("x","z","y",1,-1,t,n,-e,s,o,3),f("x","y","z",1,-1,t,e,n,s,r,4),f("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function f(v,m,g,S,A,y,w,P,T,x,_){const b=y/T,M=w/x,k=y/2,I=w/2,H=P/2,C=T+1,F=x+1;let G=0,L=0;const W=new U;for(let J=0;J<F;J++){const rt=J*M-I;for(let ot=0;ot<C;ot++){const Nt=ot*b-k;W[v]=Nt*S,W[m]=rt*A,W[g]=H,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[g]=P>0?1:-1,h.push(W.x,W.y,W.z),u.push(ot/T),u.push(1-J/x),G+=1}}for(let J=0;J<x;J++)for(let rt=0;rt<T;rt++){const ot=d+rt+C*J,Nt=d+rt+C*(J+1),$=d+(rt+1)+C*(J+1),nt=d+(rt+1)+C*J;l.push(ot,Nt,nt),l.push(Nt,$,nt),L+=6}a.addGroup(p,L,_),p+=L,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new It(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const s in n)t[s]=n[s]}return t}function Wd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Pn={clone:Ji,merge:Oe};var Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class be extends xn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new U,zl=new lt,Bl=new lt;class He extends Fh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,zl,Bl),e.subVectors(Bl,zl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Di=1;class Yd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(ki,Di,t,e);s.layers=this.layers,this.add(s);const r=new He(ki,Di,t,e);r.layers=this.layers,this.add(r);const o=new He(ki,Di,t,e);o.layers=this.layers,this.add(o);const a=new He(ki,Di,t,e);a.layers=this.layers,this.add(a);const l=new He(ki,Di,t,e);l.layers=this.layers,this.add(l);const c=new He(ki,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Oh extends Re{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$i,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jd extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Oh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:ze});r.uniforms.tEquirect.value=e;const o=new Z(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=gn),new Yd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const so=new U,$d=new U,Kd=new Bt;class oi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=so.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(so),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kd.getNormalMatrix(t),s=this.coplanarPoint(so).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new is,Js=new U;class Va{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],f=s[9],v=s[10],m=s[11],g=s[12],S=s[13],A=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-p,y-g).normalize(),n[1].setComponents(l+r,d+c,m+p,y+g).normalize(),n[2].setComponents(l+o,d+h,m+f,y+S).normalize(),n[3].setComponents(l-o,d-h,m-f,y-S).normalize(),n[4].setComponents(l-a,d-u,m-v,y-A).normalize(),e===Cn)n[5].setComponents(l+a,d+u,m+v,y+A).normalize();else if(e===Er)n[5].setComponents(a,u,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){const f=u[d],v=u[p];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class fe extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],f=[],v=[],m=[];for(let g=0;g<h;g++){const S=g*d-o;for(let A=0;A<c;A++){const y=A*u-r;f.push(y,-S,0),v.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){const A=S+c*g,y=S+c*(g+1),w=S+1+c*(g+1),P=S+1+c*g;p.push(A,y,P),p.push(y,w,P)}this.setIndex(p),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
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
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
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
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
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
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,df=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bf=`#define PI 3.141592653589793
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
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bf=`#ifdef USE_GRADIENTMAP
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
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
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
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
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
#endif`,Zf=`struct PhysicalMaterial {
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
}`,Jf=`
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lp=`#if defined( USE_POINTS_UV )
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
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
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
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fp=`float getShadowMask() {
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
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,vm=`#define MATCAP
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
}`,xm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,ym=`#define PHONG
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
}`,Mm=`#define PHONG
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
}`,bm=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,wm=`#define TOON
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
}`,Em=`#define TOON
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
}`,Tm=`uniform float size;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Jd,alphahash_pars_fragment:Qd,alphamap_fragment:tf,alphamap_pars_fragment:ef,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:of,batching_pars_vertex:af,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:vf,color_fragment:xf,color_pars_fragment:_f,color_pars_vertex:yf,color_vertex:Mf,common:bf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Ef,displacementmap_vertex:Tf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Pf,envmap_fragment:kf,envmap_common_pars_fragment:Df,envmap_pars_fragment:If,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Xf,envmap_vertex:Uf,fog_vertex:Nf,fog_pars_vertex:Ff,fog_fragment:Of,fog_pars_fragment:zf,gradientmap_pars_fragment:Bf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:jf,lights_phong_pars_fragment:$f,lights_physical_fragment:Kf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Jf,lights_fragment_maps:Qf,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:vp,normal_pars_fragment:xp,normal_pars_vertex:_p,normal_vertex:yp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Ep,opaque_fragment:Tp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Pp,dithering_pars_fragment:kp,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:zp,skinning_vertex:Bp,skinnormal_vertex:Gp,specularmap_fragment:Hp,specularmap_pars_fragment:Vp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:jp,uv_pars_vertex:$p,uv_vertex:Kp,worldpos_vertex:Zp,background_vert:Jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:vm,meshnormal_vert:xm,meshnormal_frag:_m,meshphong_vert:ym,meshphong_frag:Mm,meshphysical_vert:bm,meshphysical_frag:Sm,meshtoon_vert:wm,meshtoon_frag:Em,points_vert:Tm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Pm,sprite_frag:km},dt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},pn={basic:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Oe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Oe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Oe([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Oe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Oe([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Oe([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Oe([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Oe([dt.lights,dt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};pn.physical={uniforms:Oe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Qs={r:0,b:0,g:0},ni=new en,Dm=new Kt;function Im(i,t,e,n,s,r,o){const a=new Vt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function f(S){let A=S.isScene===!0?S.background:null;return A&&A.isTexture&&(A=(S.backgroundBlurriness>0?e:t).get(A)),A}function v(S){let A=!1;const y=f(S);y===null?g(a,l):y&&y.isColor&&(g(y,1),A=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,A){const y=f(A);y&&(y.isCubeTexture||y.mapping===Rr)?(h===void 0&&(h=new Z(new It(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:Ji(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(A.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(ni)),h.material.toneMapped=$t.getTransfer(y.colorSpace)!==re,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Z(new fe(2,2),new be({name:"BackgroundMaterial",uniforms:Ji(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=$t.getTransfer(y.colorSpace)!==re,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,A){S.getRGB(Qs,Nh(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),l=A,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(a,l)},render:v,addToRenderList:m}}function Lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(b,M,k,I,H){let C=!1;const F=u(I,k,M);r!==F&&(r=F,c(r.object)),C=p(b,I,k,H),C&&f(b,I,k,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,y(b,M,k,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,M,k){const I=k.wireframe===!0;let H=n[b.id];H===void 0&&(H={},n[b.id]=H);let C=H[M.id];C===void 0&&(C={},H[M.id]=C);let F=C[I];return F===void 0&&(F=d(l()),C[I]=F),F}function d(b){const M=[],k=[],I=[];for(let H=0;H<e;H++)M[H]=0,k[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:k,attributeDivisors:I,object:b,attributes:{},index:null}}function p(b,M,k,I){const H=r.attributes,C=M.attributes;let F=0;const G=k.getAttributes();for(const L in G)if(G[L].location>=0){const J=H[L];let rt=C[L];if(rt===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),J===void 0||J.attribute!==rt||rt&&J.data!==rt.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function f(b,M,k,I){const H={},C=M.attributes;let F=0;const G=k.getAttributes();for(const L in G)if(G[L].location>=0){let J=C[L];J===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(J=b.instanceColor));const rt={};rt.attribute=J,J&&J.data&&(rt.data=J.data),H[L]=rt,F++}r.attributes=H,r.attributesNum=F,r.index=I}function v(){const b=r.newAttributes;for(let M=0,k=b.length;M<k;M++)b[M]=0}function m(b){g(b,0)}function g(b,M){const k=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;k[b]=1,I[b]===0&&(i.enableVertexAttribArray(b),I[b]=1),H[b]!==M&&(i.vertexAttribDivisor(b,M),H[b]=M)}function S(){const b=r.newAttributes,M=r.enabledAttributes;for(let k=0,I=M.length;k<I;k++)M[k]!==b[k]&&(i.disableVertexAttribArray(k),M[k]=0)}function A(b,M,k,I,H,C,F){F===!0?i.vertexAttribIPointer(b,M,k,H,C):i.vertexAttribPointer(b,M,k,I,H,C)}function y(b,M,k,I){v();const H=I.attributes,C=k.getAttributes(),F=M.defaultAttributeValues;for(const G in C){const L=C[G];if(L.location>=0){let W=H[G];if(W===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),W!==void 0){const J=W.normalized,rt=W.itemSize,ot=t.get(W);if(ot===void 0)continue;const Nt=ot.buffer,$=ot.type,nt=ot.bytesPerElement,ft=$===i.INT||$===i.UNSIGNED_INT||W.gpuType===Ua;if(W.isInterleavedBufferAttribute){const it=W.data,mt=it.stride,yt=W.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<L.locationSize;Rt++)g(L.location+Rt,it.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<L.locationSize;Rt++)m(L.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let Rt=0;Rt<L.locationSize;Rt++)A(L.location+Rt,rt/L.locationSize,$,J,mt*nt,(yt+rt/L.locationSize*Rt)*nt,ft)}else{if(W.isInstancedBufferAttribute){for(let it=0;it<L.locationSize;it++)g(L.location+it,W.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let it=0;it<L.locationSize;it++)m(L.location+it);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let it=0;it<L.locationSize;it++)A(L.location+it,rt/L.locationSize,$,J,rt*nt,rt/L.locationSize*it*nt,ft)}}else if(F!==void 0){const J=F[G];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(L.location,J);break;case 3:i.vertexAttrib3fv(L.location,J);break;case 4:i.vertexAttrib4fv(L.location,J);break;default:i.vertexAttrib1fv(L.location,J)}}}}S()}function w(){x();for(const b in n){const M=n[b];for(const k in M){const I=M[k];for(const H in I)h(I[H].object),delete I[H];delete M[k]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const M=n[b.id];for(const k in M){const I=M[k];for(const H in I)h(I[H].object),delete I[H];delete M[k]}delete n[b.id]}function T(b){for(const M in n){const k=n[M];if(k[b.id]===void 0)continue;const I=k[b.id];for(const H in I)h(I[H].object),delete I[H];delete k[b.id]}}function x(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:x,resetDefaultState:_,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Um(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let f=0;f<u;f++)p+=h[f];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)o(c[f],h[f],d[f]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let f=0;for(let v=0;v<u;v++)f+=h[v]*d[v];e.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==hn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const x=T===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==In&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cn&&!x)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:w,maxSamples:P}}function Fm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new oi,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const f=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||f===null||f.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,A=S*4;let y=g.clippingState||null;l.value=y,y=h(f,d,A,p);for(let w=0;w!==A;++w)y[w]=e[w];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,f){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,f!==!0||m===null){const g=p+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,y=p;A!==v;++A,y+=4)o.copy(u[A]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Om(i){let t=new WeakMap;function e(o,a){return a===Xo?o.mapping=$i:a===qo&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xo||a===qo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wa extends Fh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,Gl=[.125,.215,.35,.446,.526,.582],li=20,ro=new Wa,Hl=new Vt;let oo=null,ao=0,lo=0,co=!1;const ai=(1+Math.sqrt(5))/2,Ii=1/ai,Vl=[new U(-ai,Ii,0),new U(ai,Ii,0),new U(-Ii,0,ai),new U(Ii,0,ai),new U(0,ai,-Ii),new U(0,ai,Ii),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,ao,lo),this._renderer.xr.enabled=co,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:un,format:hn,colorSpace:ts,depthBuffer:!1},s=Xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=Bm(r,t,e)}return s}_compileMaterial(t){const e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hl),h.toneMapping=kn,h.autoClear=!1;const p=new vn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),f=new Z(new It,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Hl),v=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):S===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const A=this._cubeSize;tr(s,S*A,g>2?A:0,A,A),h.setRenderTarget(s),v&&h.render(f,a),h.render(t,a)}f.geometry.dispose(),f.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===$i||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ro)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vl[(s-r-1)%Vl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Z(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),v=r/f,m=isFinite(r)?1+Math.floor(h*v):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const g=[];let S=0;for(let T=0;T<li;++T){const x=T/v,_=Math.exp(-x*x/2);g.push(_),T===0?S+=_:T<m&&(S+=2*_)}for(let T=0;T<g.length;T++)g[T]=g[T]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=f,d.mipInt.value=A-n;const y=this._sizeLods[s],w=3*y*(s>A-Gi?s-A+Gi:0),P=4*(this._cubeSize-y);tr(e,w,P,3*y,2*y),l.setRenderTarget(e),l.render(u,ro)}}function zm(i){const t=[],e=[],n=[];let s=i;const r=i-Gi+1+Gl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Gi?l=Gl[o-i+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,f=6,v=3,m=2,g=1,S=new Float32Array(v*f*p),A=new Float32Array(m*f*p),y=new Float32Array(g*f*p);for(let P=0;P<p;P++){const T=P%3*2/3-1,x=P>2?0:-1,_=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];S.set(_,v*f*P),A.set(d,m*f*P);const b=[P,P,P,P,P,P];y.set(b,g*f*P)}const w=new Ae;w.setAttribute("position",new We(S,v)),w.setAttribute("uv",new We(A,m)),w.setAttribute("faceIndex",new We(y,g)),t.push(w),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xl(i,t,e){const n=new Je(i,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bm(i,t,e){const n=new Float32Array(li),s=new U(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:ze,depthTest:!1,depthWrite:!1})}function ql(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Yl(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function Gm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xo||l===qo,h=l===$i||l===Ki;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Wl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Wl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const f in d.attributes)t.remove(d.attributes[f]);for(const f in d.morphAttributes){const v=d.morphAttributes[f];for(let m=0,g=v.length;m<g;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const f in p){const v=p[f];for(let m=0,g=v.length;m<g;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,f=u.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let A=0,y=S.length;A<y;A+=3){const w=S[A+0],P=S[A+1],T=S[A+2];d.push(w,P,P,T,T,w)}}else if(f!==void 0){const S=f.array;v=f.version;for(let A=0,y=S.length/3-1;A<y;A+=3){const w=A+0,P=A+1,T=A+2;d.push(w,P,P,T,T,w)}}else return;const m=new(Rh(d)?Uh:Lh)(d,1);m.version=v;const g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,f){f!==0&&(i.drawElementsInstanced(n,p,r,d*o,f),e.update(p,n,f))}function h(d,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,f);let m=0;for(let g=0;g<f;g++)m+=p[g];e.update(m,n,1)}function u(d,p,f,v){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,p[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,f);let g=0;for(let S=0;S<f;S++)g+=p[S]*v[S];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){const n=new WeakMap,s=new oe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,P=1;w>t.maxTextureSize&&(P=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*P*4*u),x=new Ph(T,w,P,u);x.type=cn,x.needsUpdate=!0;const _=y*4;for(let M=0;M<u;M++){const k=g[M],I=S[M],H=A[M],C=w*P*4*M;for(let F=0;F<k.count;F++){const G=F*_;f===!0&&(s.fromBufferAttribute(k,F),T[C+G+0]=s.x,T[C+G+1]=s.y,T[C+G+2]=s.z,T[C+G+3]=0),v===!0&&(s.fromBufferAttribute(I,F),T[C+G+4]=s.x,T[C+G+5]=s.y,T[C+G+6]=s.z,T[C+G+7]=0),m===!0&&(s.fromBufferAttribute(H,F),T[C+G+8]=s.x,T[C+G+9]=s.y,T[C+G+10]=s.z,T[C+G+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new lt(w,P)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];const v=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ym(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class qa extends Re{constructor(t,e,n,s,r,o,a,l,c,h=Xi){if(h!==Xi&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=fi),n===void 0&&h===mi&&(n=pi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bh=new Re,jl=new qa(1,1),Gh=new Ph,Hh=new Id,Vh=new Oh,$l=[],Kl=[],Zl=new Float32Array(16),Jl=new Float32Array(9),Ql=new Float32Array(4);function ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=$l[s];if(r===void 0&&(r=new Float32Array(s),$l[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Ql.set(n),i.uniformMatrix2fv(this.addr,!1,Ql),we(e,n)}}function Qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Jl.set(n),i.uniformMatrix3fv(this.addr,!1,Jl),we(e,n)}}function t0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Zl.set(n),i.uniformMatrix4fv(this.addr,!1,Zl),we(e,n)}}function e0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function r0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function c0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jl.compareFunction=Ah,r=jl):r=Bh,e.setTexture2D(t||r,s)}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hh,s)}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vh,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gh,s)}function f0(i){switch(i){case 5126:return jm;case 35664:return $m;case 35665:return Km;case 35666:return Zm;case 35674:return Jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(i,t){i.uniform1fv(this.addr,t)}function m0(i,t){const e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function g0(i,t){const e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function v0(i,t){const e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function x0(i,t){const e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _0(i,t){const e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function y0(i,t){const e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M0(i,t){i.uniform1iv(this.addr,t)}function b0(i,t){i.uniform2iv(this.addr,t)}function S0(i,t){i.uniform3iv(this.addr,t)}function w0(i,t){i.uniform4iv(this.addr,t)}function E0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function A0(i,t){i.uniform3uiv(this.addr,t)}function R0(i,t){i.uniform4uiv(this.addr,t)}function C0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bh,r[o])}function P0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hh,r[o])}function k0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vh,r[o])}function D0(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gh,r[o])}function I0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return v0;case 35674:return x0;case 35675:return _0;case 35676:return y0;case 5124:case 35670:return M0;case 35667:case 35671:return b0;case 35668:case 35672:return S0;case 35669:case 35673:return w0;case 5125:return E0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return D0}}class L0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f0(e.type)}}class U0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I0(e.type)}}class N0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function tc(i,t){i.seq.push(t),i.map[t.id]=t}function F0(i,t,e){const n=i.name,s=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),o=ho.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){tc(e,c===void 0?new L0(a,i,t):new U0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new N0(a),tc(e,u)),e=u}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);F0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ec(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const O0=37297;let z0=0;function B0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const nc=new Bt;function G0(i){$t._getMatrix(nc,$t.workingColorSpace,i);const t=`mat3( ${nc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Pr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ic(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+B0(i.getShaderSource(t),o)}else return s}function H0(i,t){const e=G0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function V0(i,t){let e;switch(t){case uh:e="Linear";break;case dh:e="Reinhard";break;case fh:e="Cineon";break;case ph:e="ACESFilmic";break;case mh:e="AgX";break;case gh:e="Neutral";break;case Ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new U;function W0(){$t.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function q0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function _s(i){return i!==""}function sc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(j0,K0)}const $0=new Map;function K0(i,t){let e=Ht[t];if(e===void 0){const n=$0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ya(e)}const Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(i){return i.replace(Z0,J0)}function J0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ac(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Q0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function tg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $i:case Ki:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function ng(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:t="ENVMAP_BLENDING_MULTIPLY";break;case ju:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function ig(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function sg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Q0(e),c=tg(e),h=eg(e),u=ng(e),d=ig(e),p=X0(e),f=q0(r),v=s.createProgram();let m,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(_s).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(_s).join(`
`),g.length>0&&(g+=`
`)):(m=[ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),g=[ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==kn?V0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,H0("linearToOutputTexel",e.outputColorSpace),W0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),o=ya(o),o=sc(o,e),o=rc(o,e),a=ya(a),a=sc(a,e),a=rc(a,e),o=oc(o),a=oc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=S+m+o,y=S+g+a,w=ec(s,s.VERTEX_SHADER,A),P=ec(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,P),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(M){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(w).trim(),H=s.getShaderInfoLog(P).trim();let C=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,P);else{const G=ic(s,w,"vertex"),L=ic(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+k+`
`+G+`
`+L)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||H==="")&&(F=!1);F&&(M.diagnostics={runnable:C,programLog:k,vertexShader:{log:I,prefix:m},fragmentShader:{log:H,prefix:g}})}s.deleteShader(w),s.deleteShader(P),x=new br(s,v),_=Y0(s,v)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,O0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=P,this}let rg=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ag(t),e.set(t,n)),n}}class ag{constructor(t){this.id=rg++,this.code=t,this.usedTimes=0}}function lg(i,t,e,n,s,r,o){const a=new Dh,l=new og,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,b,M,k,I){const H=k.fog,C=I.geometry,F=_.isMeshStandardMaterial?k.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||F),L=G&&G.mapping===Rr?G.image.height:null,W=f[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const J=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,rt=J!==void 0?J.length:0;let ot=0;C.morphAttributes.position!==void 0&&(ot=1),C.morphAttributes.normal!==void 0&&(ot=2),C.morphAttributes.color!==void 0&&(ot=3);let Nt,$,nt,ft;if(W){const se=pn[W];Nt=se.vertexShader,$=se.fragmentShader}else Nt=_.vertexShader,$=_.fragmentShader,l.update(_),nt=l.getVertexShaderID(_),ft=l.getFragmentShaderID(_);const it=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),yt=I.isInstancedMesh===!0,Rt=I.isBatchedMesh===!0,ne=!!_.map,Gt=!!_.matcap,le=!!G,O=!!_.aoMap,Ce=!!_.lightMap,Xt=!!_.bumpMap,qt=!!_.normalMap,Pt=!!_.displacementMap,ie=!!_.emissiveMap,Ct=!!_.metalnessMap,D=!!_.roughnessMap,E=_.anisotropy>0,V=_.clearcoat>0,Q=_.dispersion>0,et=_.iridescence>0,K=_.sheen>0,St=_.transmission>0,ht=E&&!!_.anisotropyMap,gt=V&&!!_.clearcoatMap,Wt=V&&!!_.clearcoatNormalMap,st=V&&!!_.clearcoatRoughnessMap,Mt=et&&!!_.iridescenceMap,kt=et&&!!_.iridescenceThicknessMap,Lt=K&&!!_.sheenColorMap,bt=K&&!!_.sheenRoughnessMap,jt=!!_.specularMap,Ut=!!_.specularColorMap,Zt=!!_.specularIntensityMap,N=St&&!!_.transmissionMap,ct=St&&!!_.thicknessMap,j=!!_.gradientMap,tt=!!_.alphaMap,_t=_.alphaTest>0,vt=!!_.alphaHash,Ot=!!_.extensions;let pe=kn;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Pe={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:Nt,fragmentShader:$,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&I._colorsTexture!==null,instancing:yt,instancingColor:yt&&I.instanceColor!==null,instancingMorph:yt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ts,alphaToCoverage:!!_.alphaToCoverage,map:ne,matcap:Gt,envMap:le,envMapMode:le&&G.mapping,envMapCubeUVHeight:L,aoMap:O,lightMap:Ce,bumpMap:Xt,normalMap:qt,displacementMap:d&&Pt,emissiveMap:ie,normalMapObjectSpace:qt&&_.normalMapType===td,normalMapTangentSpace:qt&&_.normalMapType===Ga,metalnessMap:Ct,roughnessMap:D,anisotropy:E,anisotropyMap:ht,clearcoat:V,clearcoatMap:gt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:st,dispersion:Q,iridescence:et,iridescenceMap:Mt,iridescenceThicknessMap:kt,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:bt,specularMap:jt,specularColorMap:Ut,specularIntensityMap:Zt,transmission:St,transmissionMap:N,thicknessMap:ct,gradientMap:j,opaque:_.transparent===!1&&_.blending===Wi&&_.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:vt,combine:_.combine,mapUv:ne&&v(_.map.channel),aoMapUv:O&&v(_.aoMap.channel),lightMapUv:Ce&&v(_.lightMap.channel),bumpMapUv:Xt&&v(_.bumpMap.channel),normalMapUv:qt&&v(_.normalMap.channel),displacementMapUv:Pt&&v(_.displacementMap.channel),emissiveMapUv:ie&&v(_.emissiveMap.channel),metalnessMapUv:Ct&&v(_.metalnessMap.channel),roughnessMapUv:D&&v(_.roughnessMap.channel),anisotropyMapUv:ht&&v(_.anisotropyMap.channel),clearcoatMapUv:gt&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(_.sheenRoughnessMap.channel),specularMapUv:jt&&v(_.specularMap.channel),specularColorMapUv:Ut&&v(_.specularColorMap.channel),specularIntensityMapUv:Zt&&v(_.specularIntensityMap.channel),transmissionMapUv:N&&v(_.transmissionMap.channel),thicknessMapUv:ct&&v(_.thicknessMap.channel),alphaMapUv:tt&&v(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(qt||E),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!C.attributes.uv&&(ne||tt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:I.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ne&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===re,decodeVideoTextureEmissive:ie&&_.emissiveMap.isVideoTexture===!0&&$t.getTransfer(_.emissiveMap.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ge,flipSided:_.side===Ve,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ot&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&_.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const M in _.defines)b.push(M),b.push(_.defines[M]);return _.isRawShaderMaterial===!1&&(S(b,_),A(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function S(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function A(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){const b=f[_.type];let M;if(b){const k=pn[b];M=Pn.clone(k.uniforms)}else M=_.uniforms;return M}function w(_,b){let M;for(let k=0,I=h.length;k<I;k++){const H=h[k];if(H.cacheKey===b){M=H,++M.usedTimes;break}}return M===void 0&&(M=new sg(i,b,_,r),h.push(M)),M}function P(_){if(--_.usedTimes===0){const b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function T(_){l.remove(_)}function x(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:y,acquireProgram:w,releaseProgram:P,releaseShaderCache:T,programs:h,dispose:x}}function cg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,f,v,m){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:p,groupOrder:f,renderOrder:u.renderOrder,z:v,group:m},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=p,g.groupOrder=f,g.renderOrder=u.renderOrder,g.z=v,g.group=m),t++,g}function a(u,d,p,f,v,m){const g=o(u,d,p,f,v,m);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):e.push(g)}function l(u,d,p,f,v,m){const g=o(u,d,p,f,v,m);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||hg),n.length>1&&n.sort(d||lc),s.length>1&&s.sort(d||lc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ug(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new cc,i.set(n,[o])):s>=r.length?(o=new cc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function dg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Vt};break;case"SpotLight":e={position:new U,direction:new U,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function fg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let pg=0;function mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gg(i){const t=new dg,e=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new Kt,o=new Kt;function a(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,f=0,v=0,m=0,g=0,S=0,A=0,y=0,w=0,P=0,T=0;c.sort(mg);for(let _=0,b=c.length;_<b;_++){const M=c[_],k=M.color,I=M.intensity,H=M.distance,C=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=k.r*I,u+=k.g*I,d+=k.b*I;else if(M.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(M.sh.coefficients[F],I);T++}else if(M.isDirectionalLight){const F=t.get(M);if(F.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const G=M.shadow,L=e.get(M);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,n.directionalShadow[p]=L,n.directionalShadowMap[p]=C,n.directionalShadowMatrix[p]=M.shadow.matrix,S++}n.directional[p]=F,p++}else if(M.isSpotLight){const F=t.get(M);F.position.setFromMatrixPosition(M.matrixWorld),F.color.copy(k).multiplyScalar(I),F.distance=H,F.coneCos=Math.cos(M.angle),F.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),F.decay=M.decay,n.spot[v]=F;const G=M.shadow;if(M.map&&(n.spotLightMap[w]=M.map,w++,G.updateMatrices(M),M.castShadow&&P++),n.spotLightMatrix[v]=G.matrix,M.castShadow){const L=e.get(M);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,n.spotShadow[v]=L,n.spotShadowMap[v]=C,y++}v++}else if(M.isRectAreaLight){const F=t.get(M);F.color.copy(k).multiplyScalar(I),F.halfWidth.set(M.width*.5,0,0),F.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=F,m++}else if(M.isPointLight){const F=t.get(M);if(F.color.copy(M.color).multiplyScalar(M.intensity),F.distance=M.distance,F.decay=M.decay,M.castShadow){const G=M.shadow,L=e.get(M);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,L.shadowCameraNear=G.camera.near,L.shadowCameraFar=G.camera.far,n.pointShadow[f]=L,n.pointShadowMap[f]=C,n.pointShadowMatrix[f]=M.shadow.matrix,A++}n.point[f]=F,f++}else if(M.isHemisphereLight){const F=t.get(M);F.skyColor.copy(M.color).multiplyScalar(I),F.groundColor.copy(M.groundColor).multiplyScalar(I),n.hemi[g]=F,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==p||x.pointLength!==f||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==g||x.numDirectionalShadows!==S||x.numPointShadows!==A||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=f,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+w-P,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,x.directionalLength=p,x.pointLength=f,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=g,x.numDirectionalShadows=S,x.numPointShadows=A,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=T,n.version=pg++)}function l(c,h){let u=0,d=0,p=0,f=0,v=0;const m=h.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const A=c[g];if(A.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(A.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const y=n.rectArea[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),f++}else if(A.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function hc(i){const t=new gg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new hc(i),t.set(s,[a])):r>=o.length?(a=new hc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class xg extends xn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _g extends xn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`;function bg(i,t,e){let n=new Va;const s=new lt,r=new lt,o=new oe,a=new xg({depthPacking:Qu}),l=new _g,c={},h=e.maxTextureSize,u={[Yn]:Ve,[Ve]:Yn,[ge]:ge},d=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:yg,fragmentShader:Mg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new Ae;f.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Z(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let g=this.type;this.render=function(P,T,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const _=i.getRenderTarget(),b=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ze),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=g!==An&&this.type===An,H=g===An&&this.type!==An;for(let C=0,F=P.length;C<F;C++){const G=P[C],L=G.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const W=L.getFrameExtents();if(s.multiply(W),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,L.mapSize.y=r.y)),L.map===null||I===!0||H===!0){const rt=this.type!==An?{minFilter:Be,magFilter:Be}:{};L.map!==null&&L.map.dispose(),L.map=new Je(s.x,s.y,rt),L.map.texture.name=G.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const J=L.getViewportCount();for(let rt=0;rt<J;rt++){const ot=L.getViewport(rt);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),k.viewport(o),L.updateMatrices(G,rt),n=L.getFrustum(),y(T,x,L.camera,G,this.type)}L.isPointLightShadow!==!0&&this.type===An&&S(L,x),L.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(_,b,M)};function S(P,T){const x=t.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Je(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,x,d,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,x,p,v,null)}function A(P,T,x,_){let b=null;const M=x.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(M!==void 0)b=M;else if(b=x.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=b.uuid,I=T.uuid;let H=c[k];H===void 0&&(H={},c[k]=H);let C=H[I];C===void 0&&(C=b.clone(),H[I]=C,T.addEventListener("dispose",w)),b=C}if(b.visible=T.visible,b.wireframe=T.wireframe,_===An?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,x.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=i.properties.get(b);k.light=x}return b}function y(P,T,x,_,b){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===An)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,P.matrixWorld);const I=t.update(P),H=P.material;if(Array.isArray(H)){const C=I.groups;for(let F=0,G=C.length;F<G;F++){const L=C[F],W=H[L.materialIndex];if(W&&W.visible){const J=A(P,W,_,b);P.onBeforeShadow(i,P,T,x,I,J,L),i.renderBufferDirect(x,null,I,J,P,L),P.onAfterShadow(i,P,T,x,I,J,L)}}}else if(H.visible){const C=A(P,H,_,b);P.onBeforeShadow(i,P,T,x,I,C,null),i.renderBufferDirect(x,null,I,C,P,null),P.onAfterShadow(i,P,T,x,I,C,null)}}const k=P.children;for(let I=0,H=k.length;I<H;I++)y(k[I],T,x,_,b)}function w(P){P.target.removeEventListener("dispose",w);for(const x in c){const _=c[x],b=P.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}const Sg={[Oo]:zo,[Bo]:Vo,[Go]:Wo,[ji]:Ho,[zo]:Oo,[Vo]:Bo,[Wo]:Go,[Ho]:ji};function wg(i,t){function e(){let N=!1;const ct=new oe;let j=null;const tt=new oe(0,0,0,0);return{setMask:function(_t){j!==_t&&!N&&(i.colorMask(_t,_t,_t,_t),j=_t)},setLocked:function(_t){N=_t},setClear:function(_t,vt,Ot,pe,Pe){Pe===!0&&(_t*=pe,vt*=pe,Ot*=pe),ct.set(_t,vt,Ot,pe),tt.equals(ct)===!1&&(i.clearColor(_t,vt,Ot,pe),tt.copy(ct))},reset:function(){N=!1,j=null,tt.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,j=null,tt=null,_t=null;return{setReversed:function(vt){if(ct!==vt){const Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const pe=_t;_t=null,this.setClear(pe)}ct=vt},getReversed:function(){return ct},setTest:function(vt){vt?it(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(vt){j!==vt&&!N&&(i.depthMask(vt),j=vt)},setFunc:function(vt){if(ct&&(vt=Sg[vt]),tt!==vt){switch(vt){case Oo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=vt}},setLocked:function(vt){N=vt},setClear:function(vt){_t!==vt&&(ct&&(vt=1-vt),i.clearDepth(vt),_t=vt)},reset:function(){N=!1,j=null,tt=null,_t=null,ct=!1}}}function s(){let N=!1,ct=null,j=null,tt=null,_t=null,vt=null,Ot=null,pe=null,Pe=null;return{setTest:function(se){N||(se?it(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(se){ct!==se&&!N&&(i.stencilMask(se),ct=se)},setFunc:function(se,nn,yn){(j!==se||tt!==nn||_t!==yn)&&(i.stencilFunc(se,nn,yn),j=se,tt=nn,_t=yn)},setOp:function(se,nn,yn){(vt!==se||Ot!==nn||pe!==yn)&&(i.stencilOp(se,nn,yn),vt=se,Ot=nn,pe=yn)},setLocked:function(se){N=se},setClear:function(se){Pe!==se&&(i.clearStencil(se),Pe=se)},reset:function(){N=!1,ct=null,j=null,tt=null,_t=null,vt=null,Ot=null,pe=null,Pe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],f=null,v=!1,m=null,g=null,S=null,A=null,y=null,w=null,P=null,T=new Vt(0,0,0),x=0,_=!1,b=null,M=null,k=null,I=null,H=null;const C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(L)[1]),F=G>=1):L.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),F=G>=2);let W=null,J={};const rt=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Nt=new oe().fromArray(rt),$=new oe().fromArray(ot);function nt(N,ct,j,tt){const _t=new Uint8Array(4),vt=i.createTexture();i.bindTexture(N,vt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<j;Ot++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ct+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return vt}const ft={};ft[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(ji),Xt(!1),qt(pl),it(i.CULL_FACE),O(ze);function it(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function mt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function yt(N,ct){return u[N]!==ct?(i.bindFramebuffer(N,ct),u[N]=ct,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Rt(N,ct){let j=p,tt=!1;if(N){j=d.get(ct),j===void 0&&(j=[],d.set(ct,j));const _t=N.textures;if(j.length!==_t.length||j[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Ot=_t.length;vt<Ot;vt++)j[vt]=i.COLOR_ATTACHMENT0+vt;j.length=_t.length,tt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,tt=!0);tt&&i.drawBuffers(j)}function ne(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const Gt={[Rn]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};Gt[Nu]=i.MIN,Gt[Fu]=i.MAX;const le={[Uo]:i.ZERO,[Ou]:i.ONE,[zu]:i.SRC_COLOR,[No]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[lh]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[Gu]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,ct,j,tt,_t,vt,Ot,pe,Pe,se){if(N===ze){v===!0&&(mt(i.BLEND),v=!1);return}if(v===!1&&(it(i.BLEND),v=!0),N!==ah){if(N!==m||se!==_){if((g!==Rn||y!==Rn)&&(i.blendEquation(i.FUNC_ADD),g=Rn,y=Rn),se)switch(N){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,A=null,w=null,P=null,T.set(0,0,0),x=0,m=N,_=se}return}_t=_t||ct,vt=vt||j,Ot=Ot||tt,(ct!==g||_t!==y)&&(i.blendEquationSeparate(Gt[ct],Gt[_t]),g=ct,y=_t),(j!==S||tt!==A||vt!==w||Ot!==P)&&(i.blendFuncSeparate(le[j],le[tt],le[vt],le[Ot]),S=j,A=tt,w=vt,P=Ot),(pe.equals(T)===!1||Pe!==x)&&(i.blendColor(pe.r,pe.g,pe.b,Pe),T.copy(pe),x=Pe),m=N,_=!1}function Ce(N,ct){N.side===ge?mt(i.CULL_FACE):it(i.CULL_FACE);let j=N.side===Ve;ct&&(j=!j),Xt(j),N.blending===Wi&&N.transparent===!1?O(ze):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const tt=N.stencilWrite;a.setTest(tt),tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ie(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function qt(N){N!==Du?(it(i.CULL_FACE),N!==M&&(N===pl?i.cullFace(i.BACK):N===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),M=N}function Pt(N){N!==k&&(F&&i.lineWidth(N),k=N)}function ie(N,ct,j){N?(it(i.POLYGON_OFFSET_FILL),(I!==ct||H!==j)&&(i.polygonOffset(ct,j),I=ct,H=j)):mt(i.POLYGON_OFFSET_FILL)}function Ct(N){N?it(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function D(N){N===void 0&&(N=i.TEXTURE0+C-1),W!==N&&(i.activeTexture(N),W=N)}function E(N,ct,j){j===void 0&&(W===null?j=i.TEXTURE0+C-1:j=W);let tt=J[j];tt===void 0&&(tt={type:void 0,texture:void 0},J[j]=tt),(tt.type!==N||tt.texture!==ct)&&(W!==j&&(i.activeTexture(j),W=j),i.bindTexture(N,ct||ft[N]),tt.type=N,tt.texture=ct)}function V(){const N=J[W];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(N){Nt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Nt.copy(N))}function bt(N){$.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$.copy(N))}function jt(N,ct){let j=c.get(ct);j===void 0&&(j=new WeakMap,c.set(ct,j));let tt=j.get(N);tt===void 0&&(tt=i.getUniformBlockIndex(ct,N.name),j.set(N,tt))}function Ut(N,ct){const tt=c.get(ct).get(N);l.get(ct)!==tt&&(i.uniformBlockBinding(ct,tt,N.__bindingPointIndex),l.set(ct,tt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,J={},u={},d=new WeakMap,p=[],f=null,v=!1,m=null,g=null,S=null,A=null,y=null,w=null,P=null,T=new Vt(0,0,0),x=0,_=!1,b=null,M=null,k=null,I=null,H=null,Nt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:mt,bindFramebuffer:yt,drawBuffers:Rt,useProgram:ne,setBlending:O,setMaterial:Ce,setFlipSided:Xt,setCullFace:qt,setLineWidth:Pt,setPolygonOffset:ie,setScissorTest:Ct,activeTexture:D,bindTexture:E,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:Mt,texImage3D:kt,updateUBOMapping:jt,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:st,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Lt,viewport:bt,reset:Zt}}function uc(i,t,e,n){const s=Eg(n);switch(e){case Mh:return i*t;case Sh:return i*t;case wh:return i*t*2;case Cr:return i*t/s.components*s.byteLength;case Oa:return i*t/s.components*s.byteLength;case Eh:return i*t*2/s.components*s.byteLength;case za:return i*t*2/s.components*s.byteLength;case bh:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Ba:return i*t*4/s.components*s.byteLength;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _r:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:case Zo:return Math.max(i,16)*Math.max(t,8)/4;case jo:case Ko:return Math.max(i,8)*Math.max(t,8)/2;case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mr:case ma:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Th:case va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xa:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Eg(i){switch(i){case In:case xh:return{byteLength:1,components:1};case As:case _h:case un:return{byteLength:2,components:1};case Na:case Fa:return{byteLength:2,components:4};case fi:case Ua:case cn:return{byteLength:4,components:1};case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(D,E){return p?new OffscreenCanvas(D,E):Rs("canvas")}function v(D,E,V){let Q=1;const et=Ct(D);if((et.width>V||et.height>V)&&(Q=V/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const K=Math.floor(Q*et.width),St=Math.floor(Q*et.height);u===void 0&&(u=f(K,St));const ht=E?f(K,St):u;return ht.width=K,ht.height=St,ht.getContext("2d").drawImage(D,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+St+")."),ht}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),D;return D}function m(D){return D.generateMipmaps}function g(D){i.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(D,E,V,Q,et=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let K=E;if(E===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),E===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),E===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),E===i.RGBA){const St=et?Pr:$t.getTransfer(Q);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=St===re?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(D,E){let V;return D?E===null||E===fi||E===pi?V=i.DEPTH24_STENCIL8:E===cn?V=i.DEPTH32F_STENCIL8:E===As&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fi||E===pi?V=i.DEPTH_COMPONENT24:E===cn?V=i.DEPTH_COMPONENT32F:E===As&&(V=i.DEPTH_COMPONENT16),V}function w(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Be&&D.minFilter!==gn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function P(D){const E=D.target;E.removeEventListener("dispose",P),x(E),E.isVideoTexture&&h.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),b(E)}function x(D){const E=n.get(D);if(E.__webglInit===void 0)return;const V=D.source,Q=d.get(V);if(Q){const et=Q[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&_(D),Object.keys(Q).length===0&&d.delete(V)}n.remove(D)}function _(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const V=D.source,Q=d.get(V);delete Q[E.__cacheKey],o.memory.textures--}function b(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let et=0;et<E.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(E.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=D.textures;for(let Q=0,et=V.length;Q<et;Q++){const K=n.get(V[Q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(D)}let M=0;function k(){M=0}function I(){const D=M;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),M+=1,D}function H(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function C(D,E){const V=n.get(D);if(D.isVideoTexture&&Pt(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,D,E);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function F(D,E){const V=n.get(D);if(D.version>0&&V.__version!==D.version){$(V,D,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function G(D,E){const V=n.get(D);if(D.version>0&&V.__version!==D.version){$(V,D,E);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function L(D,E){const V=n.get(D);if(D.version>0&&V.__version!==D.version){nt(V,D,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}const W={[jn]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},J={[Be]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},rt={[ed]:i.NEVER,[ad]:i.ALWAYS,[nd]:i.LESS,[Ah]:i.LEQUAL,[id]:i.EQUAL,[od]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function ot(D,E){if(E.type===cn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===gn||E.magFilter===Or||E.magFilter===Us||E.magFilter===hi||E.minFilter===gn||E.minFilter===Or||E.minFilter===Us||E.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,W[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,W[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,W[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,J[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,J[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Be||E.minFilter!==Us&&E.minFilter!==hi||E.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Nt(D,E){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",P));const Q=E.source;let et=d.get(Q);et===void 0&&(et={},d.set(Q,et));const K=H(E);if(K!==D.__cacheKey){et[K]===void 0&&(et[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[K].usedTimes++;const St=et[D.__cacheKey];St!==void 0&&(et[D.__cacheKey].usedTimes--,St.usedTimes===0&&_(E)),D.__cacheKey=K,D.__webglTexture=et[K].texture}return V}function $(D,E,V){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);const et=Nt(D,E),K=E.source;e.bindTexture(Q,D.__webglTexture,i.TEXTURE0+V);const St=n.get(K);if(K.version!==St.__version||et===!0){e.activeTexture(i.TEXTURE0+V);const ht=$t.getPrimaries($t.workingColorSpace),gt=E.colorSpace===mn?null:$t.getPrimaries(E.colorSpace),Wt=E.colorSpace===mn||ht===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let st=v(E.image,!1,s.maxTextureSize);st=ie(E,st);const Mt=r.convert(E.format,E.colorSpace),kt=r.convert(E.type);let Lt=A(E.internalFormat,Mt,kt,E.colorSpace,E.isVideoTexture);ot(Q,E);let bt;const jt=E.mipmaps,Ut=E.isVideoTexture!==!0,Zt=St.__version===void 0||et===!0,N=K.dataReady,ct=w(E,st);if(E.isDepthTexture)Lt=y(E.format===mi,E.type),Zt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,Mt,kt,null));else if(E.isDataTexture)if(jt.length>0){Ut&&Zt&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,jt[0].width,jt[0].height);for(let j=0,tt=jt.length;j<tt;j++)bt=jt[j],Ut?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,bt.width,bt.height,Mt,kt,bt.data):e.texImage2D(i.TEXTURE_2D,j,Lt,bt.width,bt.height,0,Mt,kt,bt.data);E.generateMipmaps=!1}else Ut?(Zt&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,st.width,st.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Mt,kt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,Mt,kt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ut&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,jt[0].width,jt[0].height,st.depth);for(let j=0,tt=jt.length;j<tt;j++)if(bt=jt[j],E.format!==hn)if(Mt!==null)if(Ut){if(N)if(E.layerUpdates.size>0){const _t=uc(bt.width,bt.height,E.format,E.type);for(const vt of E.layerUpdates){const Ot=bt.data.subarray(vt*_t/bt.data.BYTES_PER_ELEMENT,(vt+1)*_t/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,vt,bt.width,bt.height,1,Mt,Ot)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,bt.width,bt.height,st.depth,Mt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Lt,bt.width,bt.height,st.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,bt.width,bt.height,st.depth,Mt,kt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Lt,bt.width,bt.height,st.depth,0,Mt,kt,bt.data)}else{Ut&&Zt&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,jt[0].width,jt[0].height);for(let j=0,tt=jt.length;j<tt;j++)bt=jt[j],E.format!==hn?Mt!==null?Ut?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Lt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,bt.width,bt.height,Mt,kt,bt.data):e.texImage2D(i.TEXTURE_2D,j,Lt,bt.width,bt.height,0,Mt,kt,bt.data)}else if(E.isDataArrayTexture)if(Ut){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,st.width,st.height,st.depth),N)if(E.layerUpdates.size>0){const j=uc(st.width,st.height,E.format,E.type);for(const tt of E.layerUpdates){const _t=st.data.subarray(tt*j/st.data.BYTES_PER_ELEMENT,(tt+1)*j/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,Mt,kt,_t)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,kt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,Mt,kt,st.data);else if(E.isData3DTexture)Ut?(Zt&&e.texStorage3D(i.TEXTURE_3D,ct,Lt,st.width,st.height,st.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,kt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,Mt,kt,st.data);else if(E.isFramebufferTexture){if(Zt)if(Ut)e.texStorage2D(i.TEXTURE_2D,ct,Lt,st.width,st.height);else{let j=st.width,tt=st.height;for(let _t=0;_t<ct;_t++)e.texImage2D(i.TEXTURE_2D,_t,Lt,j,tt,0,Mt,kt,null),j>>=1,tt>>=1}}else if(jt.length>0){if(Ut&&Zt){const j=Ct(jt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Lt,j.width,j.height)}for(let j=0,tt=jt.length;j<tt;j++)bt=jt[j],Ut?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Mt,kt,bt):e.texImage2D(i.TEXTURE_2D,j,Lt,Mt,kt,bt);E.generateMipmaps=!1}else if(Ut){if(Zt){const j=Ct(st);e.texStorage2D(i.TEXTURE_2D,ct,Lt,j.width,j.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,kt,st)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Mt,kt,st);m(E)&&g(Q),St.__version=K.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function nt(D,E,V){if(E.image.length!==6)return;const Q=Nt(D,E),et=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+V);const K=n.get(et);if(et.version!==K.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);const St=$t.getPrimaries($t.workingColorSpace),ht=E.colorSpace===mn?null:$t.getPrimaries(E.colorSpace),gt=E.colorSpace===mn||St===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let tt=0;tt<6;tt++)!Wt&&!st?Mt[tt]=v(E.image[tt],!0,s.maxCubemapSize):Mt[tt]=st?E.image[tt].image:E.image[tt],Mt[tt]=ie(E,Mt[tt]);const kt=Mt[0],Lt=r.convert(E.format,E.colorSpace),bt=r.convert(E.type),jt=A(E.internalFormat,Lt,bt,E.colorSpace),Ut=E.isVideoTexture!==!0,Zt=K.__version===void 0||Q===!0,N=et.dataReady;let ct=w(E,kt);ot(i.TEXTURE_CUBE_MAP,E);let j;if(Wt){Ut&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,jt,kt.width,kt.height);for(let tt=0;tt<6;tt++){j=Mt[tt].mipmaps;for(let _t=0;_t<j.length;_t++){const vt=j[_t];E.format!==hn?Lt!==null?Ut?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,vt.width,vt.height,Lt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,jt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,vt.width,vt.height,Lt,bt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,jt,vt.width,vt.height,0,Lt,bt,vt.data)}}}else{if(j=E.mipmaps,Ut&&Zt){j.length>0&&ct++;const tt=Ct(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,jt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Mt[tt].width,Mt[tt].height,Lt,bt,Mt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,Mt[tt].width,Mt[tt].height,0,Lt,bt,Mt[tt].data);for(let _t=0;_t<j.length;_t++){const Ot=j[_t].image[tt].image;Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Ot.width,Ot.height,Lt,bt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,jt,Ot.width,Ot.height,0,Lt,bt,Ot.data)}}else{Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,bt,Mt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,Lt,bt,Mt[tt]);for(let _t=0;_t<j.length;_t++){const vt=j[_t];Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Lt,bt,vt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,jt,Lt,bt,vt.image[tt])}}}m(E)&&g(i.TEXTURE_CUBE_MAP),K.__version=et.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ft(D,E,V,Q,et,K){const St=r.convert(V.format,V.colorSpace),ht=r.convert(V.type),gt=A(V.internalFormat,St,ht,V.colorSpace),Wt=n.get(E),st=n.get(V);if(st.__renderTarget=E,!Wt.__hasExternalTextures){const Mt=Math.max(1,E.width>>K),kt=Math.max(1,E.height>>K);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,K,gt,Mt,kt,E.depth,0,St,ht,null):e.texImage2D(et,K,gt,Mt,kt,0,St,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),qt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,st.__webglTexture,0,Xt(E)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,st.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(D,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const Q=E.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,K=y(E.stencilBuffer,et),St=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Xt(E);qt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,K,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,D)}else{const Q=E.textures;for(let et=0;et<Q.length;et++){const K=Q[et],St=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),gt=A(K.internalFormat,St,ht,K.colorSpace),Wt=Xt(E);V&&qt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,gt,E.width,E.height):qt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,gt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,gt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),C(E.depthTexture,0);const et=Q.__webglTexture,K=Xt(E);if(E.depthTexture.format===Xi)qt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(E.depthTexture.format===mi)qt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function yt(D){const E=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=Q}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");mt(E.__webglFramebuffer,D)}else if(V){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),it(E.__webglDepthbuffer[Q],D,!1);else{const et=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),it(E.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(D,E,V){const Q=n.get(D);E!==void 0&&ft(Q.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&yt(D)}function ne(D){const E=D.texture,V=n.get(D),Q=n.get(E);D.addEventListener("dispose",T);const et=D.textures,K=D.isWebGLCubeRenderTarget===!0,St=et.length>1;if(St||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,o.memory.textures++),K){V.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[ht]=[];for(let gt=0;gt<E.mipmaps.length;gt++)V.__webglFramebuffer[ht][gt]=i.createFramebuffer()}else V.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)V.__webglFramebuffer[ht]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(St)for(let ht=0,gt=et.length;ht<gt;ht++){const Wt=n.get(et[ht]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&qt(D)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){const gt=et[ht];V.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ht]);const Wt=r.convert(gt.format,gt.colorSpace),st=r.convert(gt.type),Mt=A(gt.internalFormat,Wt,st,gt.colorSpace,D.isXRRenderTarget===!0),kt=Xt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,V.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),it(V.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ot(i.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)ft(V.__webglFramebuffer[ht][gt],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else ft(V.__webglFramebuffer[ht],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(E)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ht=0,gt=et.length;ht<gt;ht++){const Wt=et[ht],st=n.get(Wt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),ot(i.TEXTURE_2D,Wt),ft(V.__webglFramebuffer,D,Wt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(Wt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ht=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Q.__webglTexture),ot(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)ft(V.__webglFramebuffer[gt],D,E,i.COLOR_ATTACHMENT0,ht,gt);else ft(V.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,ht,0);m(E)&&g(ht),e.unbindTexture()}D.depthBuffer&&yt(D)}function Gt(D){const E=D.textures;for(let V=0,Q=E.length;V<Q;V++){const et=E[V];if(m(et)){const K=S(D),St=n.get(et).__webglTexture;e.bindTexture(K,St),g(K),e.unbindTexture()}}}const le=[],O=[];function Ce(D){if(D.samples>0){if(qt(D)===!1){const E=D.textures,V=D.width,Q=D.height;let et=i.COLOR_BUFFER_BIT;const K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(D),ht=E.length>1;if(ht)for(let gt=0;gt<E.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gt=0;gt<E.length;gt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Wt=n.get(E[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,et,i.NEAREST),l===!0&&(le.length=0,O.length=0,le.push(i.COLOR_ATTACHMENT0+gt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(le.push(K),O.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<E.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Wt=n.get(E[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Xt(D){return Math.min(s.maxSamples,D.samples)}function qt(D){const E=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(D){const E=o.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function ie(D,E){const V=D.colorSpace,Q=D.format,et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==ts&&V!==mn&&($t.getTransfer(V)===re?(Q!==hn||et!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.setTexture2D=C,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=L,this.rebindTextures=Rt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=qt}function Ag(i,t){function e(n,s=mn){let r;const o=$t.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.BYTE;if(n===_h)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Mh)return i.ALPHA;if(n===bh)return i.RGB;if(n===hn)return i.RGBA;if(n===Sh)return i.LUMINANCE;if(n===wh)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===Cr)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===Eh)return i.RG;if(n===za)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===vr||n===xr||n===_r||n===yr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===$o||n===Ko||n===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Qo||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===Qo)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===ma||n===ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mr)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===va||n===xa||n===_a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Rg extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cg={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kg=`
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

}`;class Dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new be({vertexShader:Pg,fragmentShader:kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ig extends es{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null;const v=new Dg,m=e.getContextAttributes();let g=null,S=null;const A=[],y=[],w=new lt;let P=null;const T=new He;T.viewport=new oe;const x=new He;x.viewport=new oe;const _=[T,x],b=new Rg;let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=A[$];return nt===void 0&&(nt=new uo,A[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=A[$];return nt===void 0&&(nt=new uo,A[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=A[$];return nt===void 0&&(nt=new uo,A[$]=nt),nt.getHandSpace()};function I($){const nt=y.indexOf($.inputSource);if(nt===-1)return;const ft=A[nt];ft!==void 0&&(ft.update($.inputSource,$.frame,c||o),ft.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",C);for(let $=0;$<A.length;$++){const nt=y[$];nt!==null&&(y[$]=null,A[$].disconnect(nt))}M=null,k=null,v.reset(),t.setRenderTarget(g),p=null,d=null,u=null,s=null,S=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",H),s.addEventListener("inputsourceschange",C),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Je(p.framebufferWidth,p.framebufferHeight,{format:hn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,ft=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?mi:Xi,ft=m.stencil?pi:fi);const mt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Je(d.textureWidth,d.textureHeight,{format:hn,type:In,depthTexture:new qa(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function C($){for(let nt=0;nt<$.removed.length;nt++){const ft=$.removed[nt],it=y.indexOf(ft);it>=0&&(y[it]=null,A[it].disconnect(ft))}for(let nt=0;nt<$.added.length;nt++){const ft=$.added[nt];let it=y.indexOf(ft);if(it===-1){for(let yt=0;yt<A.length;yt++)if(yt>=y.length){y.push(ft),it=yt;break}else if(y[yt]===null){y[yt]=ft,it=yt;break}if(it===-1)break}const mt=A[it];mt&&mt.connect(ft)}}const F=new U,G=new U;function L($,nt,ft){F.setFromMatrixPosition(nt.matrixWorld),G.setFromMatrixPosition(ft.matrixWorld);const it=F.distanceTo(G),mt=nt.projectionMatrix.elements,yt=ft.projectionMatrix.elements,Rt=mt[14]/(mt[10]-1),ne=mt[14]/(mt[10]+1),Gt=(mt[9]+1)/mt[5],le=(mt[9]-1)/mt[5],O=(mt[8]-1)/mt[0],Ce=(yt[8]+1)/yt[0],Xt=Rt*O,qt=Rt*Ce,Pt=it/(-O+Ce),ie=Pt*-O;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ie),$.translateZ(Pt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),mt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Ct=Rt+Pt,D=ne+Pt,E=Xt-ie,V=qt+(it-ie),Q=Gt*ne/D*Ct,et=le*ne/D*Ct;$.projectionMatrix.makePerspective(E,V,Q,et,Ct,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function W($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,ft=$.far;v.texture!==null&&(v.depthNear>0&&(nt=v.depthNear),v.depthFar>0&&(ft=v.depthFar)),b.near=x.near=T.near=nt,b.far=x.far=T.far=ft,(M!==b.near||k!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,k=b.far),T.layers.mask=$.layers.mask|2,x.layers.mask=$.layers.mask|4,b.layers.mask=T.layers.mask|x.layers.mask;const it=$.parent,mt=b.cameras;W(b,it);for(let yt=0;yt<mt.length;yt++)W(mt[yt],it);mt.length===2?L(b,T,x):b.projectionMatrix.copy(T.projectionMatrix),J($,b,it)};function J($,nt,ft){ft===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(ft.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let rt=null;function ot($,nt){if(h=nt.getViewerPose(c||o),f=nt,h!==null){const ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let it=!1;ft.length!==b.cameras.length&&(b.cameras.length=0,it=!0);for(let yt=0;yt<ft.length;yt++){const Rt=ft[yt];let ne=null;if(p!==null)ne=p.getViewport(Rt);else{const le=u.getViewSubImage(d,Rt);ne=le.viewport,yt===0&&(t.setRenderTargetTextures(S,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(S))}let Gt=_[yt];Gt===void 0&&(Gt=new He,Gt.layers.enable(yt),Gt.viewport=new oe,_[yt]=Gt),Gt.matrix.fromArray(Rt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Rt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ne.x,ne.y,ne.width,ne.height),yt===0&&(b.matrix.copy(Gt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),it===!0&&b.cameras.push(Gt)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const yt=u.getDepthInformation(ft[0]);yt&&yt.isValid&&yt.texture&&v.init(t,yt,s.renderState)}}for(let ft=0;ft<A.length;ft++){const it=y[ft],mt=A[ft];it!==null&&mt!==void 0&&mt.update(it,nt,c||o)}rt&&rt($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),f=null}const Nt=new zh;Nt.setAnimationLoop(ot),this.setAnimationLoop=function($){rt=$},this.dispose=function(){}}}const ii=new en,Lg=new Kt;function Ug(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Nh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,S,A,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&p(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ve&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ve&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=t.get(g),A=S.envMap,y=S.envMapRotation;A&&(m.envMap.value=A,ii.copy(y),ii.x*=-1,ii.y*=-1,ii.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(ii)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ve&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ng(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const y=A.program;n.uniformBlockBinding(S,y)}function c(S,A){let y=s[S.id];y===void 0&&(f(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));const w=A.program;n.updateUBOMapping(S,w);const P=t.render.frame;r[S.id]!==P&&(d(S),r[S.id]=P)}function h(S){const A=u();S.__bindingPointIndex=A;const y=i.createBuffer(),w=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const A=s[S.id],y=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let P=0,T=y.length;P<T;P++){const x=Array.isArray(y[P])?y[P]:[y[P]];for(let _=0,b=x.length;_<b;_++){const M=x[_];if(p(M,P,_,w)===!0){const k=M.__offset,I=Array.isArray(M.value)?M.value:[M.value];let H=0;for(let C=0;C<I.length;C++){const F=I[C],G=v(F);typeof F=="number"||typeof F=="boolean"?(M.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,k+H,M.__data)):F.isMatrix3?(M.__data[0]=F.elements[0],M.__data[1]=F.elements[1],M.__data[2]=F.elements[2],M.__data[3]=0,M.__data[4]=F.elements[3],M.__data[5]=F.elements[4],M.__data[6]=F.elements[5],M.__data[7]=0,M.__data[8]=F.elements[6],M.__data[9]=F.elements[7],M.__data[10]=F.elements[8],M.__data[11]=0):(F.toArray(M.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,A,y,w){const P=S.value,T=A+"_"+y;if(w[T]===void 0)return typeof P=="number"||typeof P=="boolean"?w[T]=P:w[T]=P.clone(),!0;{const x=w[T];if(typeof P=="number"||typeof P=="boolean"){if(x!==P)return w[T]=P,!0}else if(x.equals(P)===!1)return x.copy(P),!0}return!1}function f(S){const A=S.uniforms;let y=0;const w=16;for(let T=0,x=A.length;T<x;T++){const _=Array.isArray(A[T])?A[T]:[A[T]];for(let b=0,M=_.length;b<M;b++){const k=_[b],I=Array.isArray(k.value)?k.value:[k.value];for(let H=0,C=I.length;H<C;H++){const F=I[H],G=v(F),L=y%w,W=L%G.boundary,J=L+W;y+=W,J!==0&&w-J<G.storage&&(y+=w-J),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=G.storage}}}const P=y%w;return P>0&&(y+=w-P),S.__size=y,S.__cache={},this}function v(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),A}function m(S){const A=S.target;A.removeEventListener("dispose",m);const y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class Fg{constructor(t={}){const{canvas:e=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const f=new Uint32Array(4),v=new Int32Array(4);let m=null,g=null;const S=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this.toneMapping=kn,this.toneMappingExposure=1;const y=this;let w=!1,P=0,T=0,x=null,_=-1,b=null;const M=new oe,k=new oe;let I=null;const H=new Vt(0);let C=0,F=e.width,G=e.height,L=1,W=null,J=null;const rt=new oe(0,0,F,G),ot=new oe(0,0,F,G);let Nt=!1;const $=new Va;let nt=!1,ft=!1;const it=new Kt,mt=new Kt,yt=new U,Rt=new oe,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function le(){return x===null?L:1}let O=n;function Ce(R,z){return e.getContext(R,z)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${La}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",vt,!1),O===null){const z="webgl2";if(O=Ce(z,R),O===null)throw Ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xt,qt,Pt,ie,Ct,D,E,V,Q,et,K,St,ht,gt,Wt,st,Mt,kt,Lt,bt,jt,Ut,Zt,N;function ct(){Xt=new Hm(O),Xt.init(),Ut=new Ag(O,Xt),qt=new Nm(O,Xt,t,Ut),Pt=new wg(O,Xt),qt.reverseDepthBuffer&&d&&Pt.buffers.depth.setReversed(!0),ie=new Xm(O),Ct=new cg,D=new Tg(O,Xt,Pt,Ct,qt,Ut,ie),E=new Om(y),V=new Gm(y),Q=new Zd(O),Zt=new Lm(O,Q),et=new Vm(O,Q,ie,Zt),K=new Ym(O,et,Q,ie),Lt=new qm(O,qt,D),st=new Fm(Ct),St=new lg(y,E,V,Xt,qt,Zt,st),ht=new Ug(y,Ct),gt=new ug,Wt=new vg(Xt),kt=new Im(y,E,V,Pt,K,p,l),Mt=new bg(y,K,qt),N=new Ng(O,ie,qt,Pt),bt=new Um(O,Xt,ie),jt=new Wm(O,Xt,ie),ie.programs=St.programs,y.capabilities=qt,y.extensions=Xt,y.properties=Ct,y.renderLists=gt,y.shadowMap=Mt,y.state=Pt,y.info=ie}ct();const j=new Ig(y,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(R){R!==void 0&&(L=R,this.setSize(F,G,!1))},this.getSize=function(R){return R.set(F,G)},this.setSize=function(R,z,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,G=z,e.width=Math.floor(R*L),e.height=Math.floor(z*L),X===!0&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(F*L,G*L).floor()},this.setDrawingBufferSize=function(R,z,X){F=R,G=z,L=X,e.width=Math.floor(R*X),e.height=Math.floor(z*X),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(rt)},this.setViewport=function(R,z,X,q){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,z,X,q),Pt.viewport(M.copy(rt).multiplyScalar(L).round())},this.getScissor=function(R){return R.copy(ot)},this.setScissor=function(R,z,X,q){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,z,X,q),Pt.scissor(k.copy(ot).multiplyScalar(L).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(R){Pt.setScissorTest(Nt=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(R=!0,z=!0,X=!0){let q=0;if(R){let B=!1;if(x!==null){const at=x.texture.format;B=at===Ba||at===za||at===Oa}if(B){const at=x.texture.type,xt=at===In||at===fi||at===As||at===pi||at===Na||at===Fa,wt=kt.getClearColor(),Et=kt.getClearAlpha(),Ft=wt.r,zt=wt.g,Tt=wt.b;xt?(f[0]=Ft,f[1]=zt,f[2]=Tt,f[3]=Et,O.clearBufferuiv(O.COLOR,0,f)):(v[0]=Ft,v[1]=zt,v[2]=Tt,v[3]=Et,O.clearBufferiv(O.COLOR,0,v))}else q|=O.COLOR_BUFFER_BIT}z&&(q|=O.DEPTH_BUFFER_BIT),X&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),gt.dispose(),Wt.dispose(),Ct.dispose(),E.dispose(),V.dispose(),K.dispose(),Zt.dispose(),N.dispose(),St.dispose(),j.dispose(),j.removeEventListener("sessionstart",ol),j.removeEventListener("sessionend",al),Zn.stop()};function tt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=ie.autoReset,z=Mt.enabled,X=Mt.autoUpdate,q=Mt.needsUpdate,B=Mt.type;ct(),ie.autoReset=R,Mt.enabled=z,Mt.autoUpdate=X,Mt.needsUpdate=q,Mt.type=B}function vt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ot(R){const z=R.target;z.removeEventListener("dispose",Ot),pe(z)}function pe(R){Pe(R),Ct.remove(R)}function Pe(R){const z=Ct.get(R).programs;z!==void 0&&(z.forEach(function(X){St.releaseProgram(X)}),R.isShaderMaterial&&St.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,X,q,B,at){z===null&&(z=ne);const xt=B.isMesh&&B.matrixWorld.determinant()<0,wt=Cu(R,z,X,q,B);Pt.setMaterial(q,xt);let Et=X.index,Ft=1;if(q.wireframe===!0){if(Et=et.getWireframeAttribute(X),Et===void 0)return;Ft=2}const zt=X.drawRange,Tt=X.attributes.position;let Jt=zt.start*Ft,ae=(zt.start+zt.count)*Ft;at!==null&&(Jt=Math.max(Jt,at.start*Ft),ae=Math.min(ae,(at.start+at.count)*Ft)),Et!==null?(Jt=Math.max(Jt,0),ae=Math.min(ae,Et.count)):Tt!=null&&(Jt=Math.max(Jt,0),ae=Math.min(ae,Tt.count));const ce=ae-Jt;if(ce<0||ce===1/0)return;Zt.setup(B,q,wt,X,Et);let Ge,te=bt;if(Et!==null&&(Ge=Q.get(Et),te=jt,te.setIndex(Ge)),B.isMesh)q.wireframe===!0?(Pt.setLineWidth(q.wireframeLinewidth*le()),te.setMode(O.LINES)):te.setMode(O.TRIANGLES);else if(B.isLine){let At=q.linewidth;At===void 0&&(At=1),Pt.setLineWidth(At*le()),B.isLineSegments?te.setMode(O.LINES):B.isLineLoop?te.setMode(O.LINE_LOOP):te.setMode(O.LINE_STRIP)}else B.isPoints?te.setMode(O.POINTS):B.isSprite&&te.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)te.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const At=B._multiDrawStarts,Mn=B._multiDrawCounts,ee=B._multiDrawCount,sn=Et?Q.get(Et).bytesPerElement:1,_i=Ct.get(q).currentProgram.getUniforms();for(let Xe=0;Xe<ee;Xe++)_i.setValue(O,"_gl_DrawID",Xe),te.render(At[Xe]/sn,Mn[Xe])}else if(B.isInstancedMesh)te.renderInstances(Jt,ce,B.count);else if(X.isInstancedBufferGeometry){const At=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mn=Math.min(X.instanceCount,At);te.renderInstances(Jt,ce,Mn)}else te.render(Jt,ce)};function se(R,z,X){R.transparent===!0&&R.side===ge&&R.forceSinglePass===!1?(R.side=Ve,R.needsUpdate=!0,Ls(R,z,X),R.side=Yn,R.needsUpdate=!0,Ls(R,z,X),R.side=ge):Ls(R,z,X)}this.compile=function(R,z,X=null){X===null&&(X=R),g=Wt.get(X),g.init(z),A.push(g),X.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),R!==X&&R.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const q=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const at=B.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const wt=at[xt];se(wt,X,B),q.add(wt)}else se(at,X,B),q.add(at)}),A.pop(),g=null,q},this.compileAsync=function(R,z,X=null){const q=this.compile(R,z,X);return new Promise(B=>{function at(){if(q.forEach(function(xt){Ct.get(xt).currentProgram.isReady()&&q.delete(xt)}),q.size===0){B(R);return}setTimeout(at,10)}Xt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let nn=null;function yn(R){nn&&nn(R)}function ol(){Zn.stop()}function al(){Zn.start()}const Zn=new zh;Zn.setAnimationLoop(yn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(R){nn=R,j.setAnimationLoop(R),R===null?Zn.stop():Zn.start()},j.addEventListener("sessionstart",ol),j.addEventListener("sessionend",al),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,z,x),g=Wt.get(R,A.length),g.init(z),A.push(g),mt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$.setFromProjectionMatrix(mt),ft=this.localClippingEnabled,nt=st.init(this.clippingPlanes,ft),m=gt.get(R,S.length),m.init(),S.push(m),j.enabled===!0&&j.isPresenting===!0){const at=y.xr.getDepthSensingMesh();at!==null&&Fr(at,z,-1/0,y.sortObjects)}Fr(R,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,J),Gt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Gt&&kt.addToRenderList(m,R),this.info.render.frame++,nt===!0&&st.beginShadows();const X=g.state.shadowsArray;Mt.render(X,R,z),nt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(g.setupLights(),z.isArrayCamera){const at=z.cameras;if(B.length>0)for(let xt=0,wt=at.length;xt<wt;xt++){const Et=at[xt];cl(q,B,R,Et)}Gt&&kt.render(R);for(let xt=0,wt=at.length;xt<wt;xt++){const Et=at[xt];ll(m,R,Et,Et.viewport)}}else B.length>0&&cl(q,B,R,z),Gt&&kt.render(R),ll(m,R,z);x!==null&&(D.updateMultisampleRenderTarget(x),D.updateRenderTargetMipmap(x)),R.isScene===!0&&R.onAfterRender(y,R,z),Zt.resetDefaultState(),_=-1,b=null,A.pop(),A.length>0?(g=A[A.length-1],nt===!0&&st.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Fr(R,z,X,q){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){q&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const xt=K.update(R),wt=R.material;wt.visible&&m.push(R,xt,wt,X,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const xt=K.update(R),wt=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Rt.copy(xt.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(wt)){const Et=xt.groups;for(let Ft=0,zt=Et.length;Ft<zt;Ft++){const Tt=Et[Ft],Jt=wt[Tt.materialIndex];Jt&&Jt.visible&&m.push(R,xt,Jt,X,Rt.z,Tt)}}else wt.visible&&m.push(R,xt,wt,X,Rt.z,null)}}const at=R.children;for(let xt=0,wt=at.length;xt<wt;xt++)Fr(at[xt],z,X,q)}function ll(R,z,X,q){const B=R.opaque,at=R.transmissive,xt=R.transparent;g.setupLightsView(X),nt===!0&&st.setGlobalState(y.clippingPlanes,X),q&&Pt.viewport(M.copy(q)),B.length>0&&Is(B,z,X),at.length>0&&Is(at,z,X),xt.length>0&&Is(xt,z,X),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function cl(R,z,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Je(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?un:In,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const at=g.state.transmissionRenderTarget[q.id],xt=q.viewport||M;at.setSize(xt.z,xt.w);const wt=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(H),C=y.getClearAlpha(),C<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&kt.render(X);const Et=y.toneMapping;y.toneMapping=kn;const Ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),nt===!0&&st.setGlobalState(y.clippingPlanes,q),Is(R,X,q),D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Tt=0,Jt=z.length;Tt<Jt;Tt++){const ae=z[Tt],ce=ae.object,Ge=ae.geometry,te=ae.material,At=ae.group;if(te.side===ge&&ce.layers.test(q.layers)){const Mn=te.side;te.side=Ve,te.needsUpdate=!0,hl(ce,X,q,Ge,te,At),te.side=Mn,te.needsUpdate=!0,zt=!0}}zt===!0&&(D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at))}y.setRenderTarget(wt),y.setClearColor(H,C),Ft!==void 0&&(q.viewport=Ft),y.toneMapping=Et}function Is(R,z,X){const q=z.isScene===!0?z.overrideMaterial:null;for(let B=0,at=R.length;B<at;B++){const xt=R[B],wt=xt.object,Et=xt.geometry,Ft=q===null?xt.material:q,zt=xt.group;wt.layers.test(X.layers)&&hl(wt,z,X,Et,Ft,zt)}}function hl(R,z,X,q,B,at){R.onBeforeRender(y,z,X,q,B,at),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(y,z,X,q,R,at),B.transparent===!0&&B.side===ge&&B.forceSinglePass===!1?(B.side=Ve,B.needsUpdate=!0,y.renderBufferDirect(X,z,q,B,R,at),B.side=Yn,B.needsUpdate=!0,y.renderBufferDirect(X,z,q,B,R,at),B.side=ge):y.renderBufferDirect(X,z,q,B,R,at),R.onAfterRender(y,z,X,q,B,at)}function Ls(R,z,X){z.isScene!==!0&&(z=ne);const q=Ct.get(R),B=g.state.lights,at=g.state.shadowsArray,xt=B.state.version,wt=St.getParameters(R,B.state,at,z,X),Et=St.getProgramCacheKey(wt);let Ft=q.programs;q.environment=R.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(R.isMeshStandardMaterial?V:E).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",Ot),Ft=new Map,q.programs=Ft);let zt=Ft.get(Et);if(zt!==void 0){if(q.currentProgram===zt&&q.lightsStateVersion===xt)return dl(R,wt),zt}else wt.uniforms=St.getUniforms(R),R.onBeforeCompile(wt,y),zt=St.acquireProgram(wt,Et),Ft.set(Et,zt),q.uniforms=wt.uniforms;const Tt=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Tt.clippingPlanes=st.uniform),dl(R,wt),q.needsLights=ku(R),q.lightsStateVersion=xt,q.needsLights&&(Tt.ambientLightColor.value=B.state.ambient,Tt.lightProbe.value=B.state.probe,Tt.directionalLights.value=B.state.directional,Tt.directionalLightShadows.value=B.state.directionalShadow,Tt.spotLights.value=B.state.spot,Tt.spotLightShadows.value=B.state.spotShadow,Tt.rectAreaLights.value=B.state.rectArea,Tt.ltc_1.value=B.state.rectAreaLTC1,Tt.ltc_2.value=B.state.rectAreaLTC2,Tt.pointLights.value=B.state.point,Tt.pointLightShadows.value=B.state.pointShadow,Tt.hemisphereLights.value=B.state.hemi,Tt.directionalShadowMap.value=B.state.directionalShadowMap,Tt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Tt.spotShadowMap.value=B.state.spotShadowMap,Tt.spotLightMatrix.value=B.state.spotLightMatrix,Tt.spotLightMap.value=B.state.spotLightMap,Tt.pointShadowMap.value=B.state.pointShadowMap,Tt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=zt,q.uniformsList=null,zt}function ul(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=br.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function dl(R,z){const X=Ct.get(R);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Cu(R,z,X,q,B){z.isScene!==!0&&(z=ne),D.resetTextureUnits();const at=z.fog,xt=q.isMeshStandardMaterial?z.environment:null,wt=x===null?y.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:ts,Et=(q.isMeshStandardMaterial?V:E).get(q.envMap||xt),Ft=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,zt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Tt=!!X.morphAttributes.position,Jt=!!X.morphAttributes.normal,ae=!!X.morphAttributes.color;let ce=kn;q.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=Ge!==void 0?Ge.length:0,At=Ct.get(q),Mn=g.state.lights;if(nt===!0&&(ft===!0||R!==b)){const Qe=R===b&&q.id===_;st.setState(q,R,Qe)}let ee=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Mn.state.version||At.outputColorSpace!==wt||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==Et||q.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Ft||At.vertexTangents!==zt||At.morphTargets!==Tt||At.morphNormals!==Jt||At.morphColors!==ae||At.toneMapping!==ce||At.morphTargetsCount!==te)&&(ee=!0):(ee=!0,At.__version=q.version);let sn=At.currentProgram;ee===!0&&(sn=Ls(q,z,B));let _i=!1,Xe=!1,rs=!1;const he=sn.getUniforms(),dn=At.uniforms;if(Pt.useProgram(sn.program)&&(_i=!0,Xe=!0,rs=!0),q.id!==_&&(_=q.id,Xe=!0),_i||b!==R){Pt.buffers.depth.getReversed()?(it.copy(R.projectionMatrix),Ad(it),Rd(it),he.setValue(O,"projectionMatrix",it)):he.setValue(O,"projectionMatrix",R.projectionMatrix),he.setValue(O,"viewMatrix",R.matrixWorldInverse);const Ln=he.map.cameraPosition;Ln!==void 0&&Ln.setValue(O,yt.setFromMatrixPosition(R.matrixWorld)),qt.logarithmicDepthBuffer&&he.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&he.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Xe=!0,rs=!0)}if(B.isSkinnedMesh){he.setOptional(O,B,"bindMatrix"),he.setOptional(O,B,"bindMatrixInverse");const Qe=B.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),he.setValue(O,"boneTexture",Qe.boneTexture,D))}B.isBatchedMesh&&(he.setOptional(O,B,"batchingTexture"),he.setValue(O,"batchingTexture",B._matricesTexture,D),he.setOptional(O,B,"batchingIdTexture"),he.setValue(O,"batchingIdTexture",B._indirectTexture,D),he.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&he.setValue(O,"batchingColorTexture",B._colorsTexture,D));const os=X.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&Lt.update(B,X,sn),(Xe||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,he.setValue(O,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(dn.envMap.value=Et,dn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(dn.envMapIntensity.value=z.environmentIntensity),Xe&&(he.setValue(O,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&Pu(dn,rs),at&&q.fog===!0&&ht.refreshFogUniforms(dn,at),ht.refreshMaterialUniforms(dn,q,L,G,g.state.transmissionRenderTarget[R.id]),br.upload(O,ul(At),dn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(br.upload(O,ul(At),dn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&he.setValue(O,"center",B.center),he.setValue(O,"modelViewMatrix",B.modelViewMatrix),he.setValue(O,"normalMatrix",B.normalMatrix),he.setValue(O,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Qe=q.uniformsGroups;for(let Ln=0,Un=Qe.length;Ln<Un;Ln++){const fl=Qe[Ln];N.update(fl,sn),N.bind(fl,sn)}}return sn}function Pu(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function ku(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(R,z,X){Ct.get(R.texture).__webglTexture=z,Ct.get(R.depthTexture).__webglTexture=X;const q=Ct.get(R);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const X=Ct.get(R);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,X=0){x=R,P=z,T=X;let q=!0,B=null,at=!1,xt=!1;if(R){const Et=Ct.get(R);if(Et.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(Et.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Et.__hasExternalTextures)D.rebindTextures(R,Ct.get(R.texture).__webglTexture,Ct.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Tt=R.depthTexture;if(Et.__boundDepthTexture!==Tt){if(Tt!==null&&Ct.has(Tt)&&(R.width!==Tt.image.width||R.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Ft=R.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(xt=!0);const zt=Ct.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?B=zt[z][X]:B=zt[z],at=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?B=Ct.get(R).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[X]:B=zt,M.copy(R.viewport),k.copy(R.scissor),I=R.scissorTest}else M.copy(rt).multiplyScalar(L).floor(),k.copy(ot).multiplyScalar(L).floor(),I=Nt;if(Pt.bindFramebuffer(O.FRAMEBUFFER,B)&&q&&Pt.drawBuffers(R,B),Pt.viewport(M),Pt.scissor(k),Pt.setScissorTest(I),at){const Et=Ct.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Et.__webglTexture,X)}else if(xt){const Et=Ct.get(R.texture),Ft=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.__webglTexture,X||0,Ft)}_=-1},this.readRenderTargetPixels=function(R,z,X,q,B,at,xt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){Pt.bindFramebuffer(O.FRAMEBUFFER,wt);try{const Et=R.texture,Ft=Et.format,zt=Et.type;if(!qt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-q&&X>=0&&X<=R.height-B&&O.readPixels(z,X,q,B,Ut.convert(Ft),Ut.convert(zt),at)}finally{const Et=x!==null?Ct.get(x).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(R,z,X,q,B,at,xt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){const Et=R.texture,Ft=Et.format,zt=Et.type;if(!qt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-q&&X>=0&&X<=R.height-B){Pt.bindFramebuffer(O.FRAMEBUFFER,wt);const Tt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Tt),O.bufferData(O.PIXEL_PACK_BUFFER,at.byteLength,O.STREAM_READ),O.readPixels(z,X,q,B,Ut.convert(Ft),Ut.convert(zt),0);const Jt=x!==null?Ct.get(x).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,Jt);const ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Td(O,ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Tt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,at),O.deleteBuffer(Tt),O.deleteSync(ae),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,X=0){R.isTexture!==!0&&(xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const q=Math.pow(2,-X),B=Math.floor(R.image.width*q),at=Math.floor(R.image.height*q),xt=z!==null?z.x:0,wt=z!==null?z.y:0;D.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,xt,wt,B,at),Pt.unbindTexture()},this.copyTextureToTexture=function(R,z,X=null,q=null,B=0){R.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1],z=arguments[2],B=arguments[3]||0,X=null);let at,xt,wt,Et,Ft,zt,Tt,Jt,ae;const ce=R.isCompressedTexture?R.mipmaps[B]:R.image;X!==null?(at=X.max.x-X.min.x,xt=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Et=X.min.x,Ft=X.min.y,zt=X.isBox3?X.min.z:0):(at=ce.width,xt=ce.height,wt=ce.depth||1,Et=0,Ft=0,zt=0),q!==null?(Tt=q.x,Jt=q.y,ae=q.z):(Tt=0,Jt=0,ae=0);const Ge=Ut.convert(z.format),te=Ut.convert(z.type);let At;z.isData3DTexture?(D.setTexture3D(z,0),At=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(D.setTexture2DArray(z,0),At=O.TEXTURE_2D_ARRAY):(D.setTexture2D(z,0),At=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Mn=O.getParameter(O.UNPACK_ROW_LENGTH),ee=O.getParameter(O.UNPACK_IMAGE_HEIGHT),sn=O.getParameter(O.UNPACK_SKIP_PIXELS),_i=O.getParameter(O.UNPACK_SKIP_ROWS),Xe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Et),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ft),O.pixelStorei(O.UNPACK_SKIP_IMAGES,zt);const rs=R.isDataArrayTexture||R.isData3DTexture,he=z.isDataArrayTexture||z.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const dn=Ct.get(R),os=Ct.get(z),Qe=Ct.get(dn.__renderTarget),Ln=Ct.get(os.__renderTarget);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Un=0;Un<wt;Un++)rs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(R).__webglTexture,B,zt+Un),R.isDepthTexture?(he&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(z).__webglTexture,B,ae+Un),O.blitFramebuffer(Et,Ft,at,xt,Tt,Jt,at,xt,O.DEPTH_BUFFER_BIT,O.NEAREST)):he?O.copyTexSubImage3D(At,B,Tt,Jt,ae+Un,Et,Ft,at,xt):O.copyTexSubImage2D(At,B,Tt,Jt,ae+Un,Et,Ft,at,xt);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else he?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(At,B,Tt,Jt,ae,at,xt,wt,Ge,te,ce.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(At,B,Tt,Jt,ae,at,xt,wt,Ge,ce.data):O.texSubImage3D(At,B,Tt,Jt,ae,at,xt,wt,Ge,te,ce):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,Tt,Jt,at,xt,Ge,te,ce.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,Tt,Jt,ce.width,ce.height,Ge,ce.data):O.texSubImage2D(O.TEXTURE_2D,B,Tt,Jt,at,xt,Ge,te,ce);O.pixelStorei(O.UNPACK_ROW_LENGTH,Mn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ee),O.pixelStorei(O.UNPACK_SKIP_PIXELS,sn),O.pixelStorei(O.UNPACK_SKIP_ROWS,_i),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe),B===0&&z.generateMipmaps&&O.generateMipmap(At),Pt.unbindTexture()},this.copyTextureToTexture3D=function(R,z,X=null,q=null,B=0){return R.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,R=arguments[2],z=arguments[3],B=arguments[4]||0),xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,X,q,B)},this.initRenderTarget=function(R){Ct.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){P=0,T=0,x=null,Pt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Ya{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Ya(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Og extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wh extends Re{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Be,h=Be,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Li=new Kt,fc=new Kt,nr=[],pc=new vi,zg=new Kt,us=new Z,ds=new is;class ja extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),pc.copy(t.boundingBox).applyMatrix4(Li),this.boundingBox.union(pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),ds.copy(t.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Li),fc.multiplyMatrices(n,Li),us.matrixWorld=fc,us.raycast(t,nr);for(let o=0,a=nr.length;o<a;o++){const l=nr[o];l.instanceId=r,l.object=this,e.push(l)}nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wh(new Float32Array(s*this.count),s,this.count,Cr,cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $a extends xn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mc=new Kt,Ma=new kh,ir=new is,sr=new U;class Xh extends ye{constructor(t=new Ae,e=new $a){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;mc.copy(s).invert(),Ma.copy(t.ray).applyMatrix4(mc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=d,v=p;f<v;f++){const m=c.getX(f);sr.fromBufferAttribute(u,m),gc(sr,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let f=d,v=p;f<v;f++)sr.fromBufferAttribute(u,f),gc(sr,f,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gc(i,t,e,n,s,r,o){const a=Ma.distanceSqToPoint(i);if(a<e){const l=new U;Ma.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Yi extends Re{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,s=[],r=[],o=[],a=new U,l=new Kt;for(let p=0;p<=t;p++){const f=p/t;s[p]=this.getTangentAt(f,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ka extends _n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bg extends Ka{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Za(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const rr=new U,fo=new Za,po=new Za,mo=new Za;class Gg extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(rr.subVectors(s[0],s[1]).add(s[0]),c=rr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(rr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),fo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,v,m),po.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,v,m),mo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,v,m)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),po.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),mo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(fo.calc(l),po.calc(l),mo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Hg(i,t){const e=1-i;return e*e*t}function Vg(i,t){return 2*(1-i)*i*t}function Wg(i,t){return i*i*t}function Ss(i,t,e,n){return Hg(i,t)+Vg(i,e)+Wg(i,n)}function Xg(i,t){const e=1-i;return e*e*e*t}function qg(i,t){const e=1-i;return 3*e*e*i*t}function Yg(i,t){return 3*(1-i)*i*i*t}function jg(i,t){return i*i*i*t}function ws(i,t,e,n,s){return Xg(i,t)+qg(i,e)+Yg(i,n)+jg(i,s)}class qh extends _n{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ws(t,s.x,r.x,o.x,a.x),ws(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $g extends _n{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ws(t,s.x,r.x,o.x,a.x),ws(t,s.y,r.y,o.y,a.y),ws(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yh extends _n{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kg extends _n{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jh extends _n{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ss(t,s.x,r.x,o.x),Ss(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zg extends _n{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ss(t,s.x,r.x,o.x),Ss(t,s.y,r.y,o.y),Ss(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(vc(a,l.x,c.x,h.x,u.x),vc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var xc=Object.freeze({__proto__:null,ArcCurve:Bg,CatmullRomCurve3:Gg,CubicBezierCurve:qh,CubicBezierCurve3:$g,EllipseCurve:Ka,LineCurve:Yh,LineCurve3:Kg,QuadraticBezierCurve:jh,QuadraticBezierCurve3:Zg,SplineCurve:$h});class Jg extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new xc[s.type]().fromJSON(s))}return this}}class Qg extends Jg{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yh(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new jh(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new qh(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $h(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ka(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Dr extends Ae{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new U,d=new lt,p=new U,f=new U,v=new U;let m=0,g=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,p.x=g*1,p.y=-m,p.z=g*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let S=0;S<=e;S++){const A=n+S*h*s,y=Math.sin(A),w=Math.cos(A);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*y,u.y=t[P].y,u.z=t[P].x*w,o.push(u.x,u.y,u.z),d.x=S/e,d.y=P/(t.length-1),a.push(d.x,d.y);const T=l[3*P+0]*y,x=l[3*P+1],_=l[3*P+0]*w;c.push(T,x,_)}}for(let S=0;S<e;S++)for(let A=0;A<t.length-1;A++){const y=A+S*t.length,w=y,P=y+t.length,T=y+t.length+1,x=y+1;r.push(w,P,x),r.push(T,x,P)}this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("uv",new de(a,2)),this.setAttribute("normal",new de(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.points,t.segments,t.phiStart,t.phiLength)}}class ui extends Dr{constructor(t=1,e=1,n=4,s=8){const r=new Qg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ui(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ir extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new U,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class me extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let f=0;const v=[],m=n/2;let g=0;S(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function S(){const y=new U,w=new U;let P=0;const T=(e-t)/n;for(let x=0;x<=r;x++){const _=[],b=x/r,M=b*(e-t)+t;for(let k=0;k<=s;k++){const I=k/s,H=I*l+a,C=Math.sin(H),F=Math.cos(H);w.x=M*C,w.y=-b*n+m,w.z=M*F,u.push(w.x,w.y,w.z),y.set(C,T,F).normalize(),d.push(y.x,y.y,y.z),p.push(I,1-b),_.push(f++)}v.push(_)}for(let x=0;x<s;x++)for(let _=0;_<r;_++){const b=v[_][x],M=v[_+1][x],k=v[_+1][x+1],I=v[_][x+1];(t>0||_!==0)&&(h.push(b,M,I),P+=3),(e>0||_!==r-1)&&(h.push(M,k,I),P+=3)}c.addGroup(g,P,0),g+=P}function A(y){const w=f,P=new lt,T=new U;let x=0;const _=y===!0?t:e,b=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),f++;const M=f;for(let k=0;k<=s;k++){const H=k/s*l+a,C=Math.cos(H),F=Math.sin(H);T.x=_*F,T.y=m*b,T.z=_*C,u.push(T.x,T.y,T.z),d.push(0,b,0),P.x=C*.5+.5,P.y=F*.5*b+.5,p.push(P.x,P.y),f++}for(let k=0;k<s;k++){const I=w+k,H=M+k;y===!0?h.push(H,H+1,I):h.push(H+1,H,I),x+=3}c.addGroup(g,x,y===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Me extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],f=[],v=[],m=[];for(let g=0;g<=n;g++){const S=[],A=g/n;let y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const P=w/e;u.x=-t*Math.cos(s+P*r)*Math.sin(o+A*a),u.y=t*Math.cos(o+A*a),u.z=t*Math.sin(s+P*r)*Math.sin(o+A*a),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(P+y,1-A),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){const A=h[g][S+1],y=h[g][S],w=h[g+1][S],P=h[g+1][S+1];(g!==0||o>0)&&p.push(A,y,P),(g!==n-1||l<Math.PI)&&p.push(y,w,P)}this.setIndex(p),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $n extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new U,u=new U,d=new U;for(let p=0;p<=n;p++)for(let f=0;f<=s;f++){const v=f/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=s;f++){const v=(s+1)*p+f-1,m=(s+1)*(p-1)+f-1,g=(s+1)*(p-1)+f,S=(s+1)*p+f;o.push(v,m,S),o.push(m,g,S)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class tv extends be{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class pt extends xn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ev extends xn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}const _c={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class nv{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}}const iv=new nv;class Ja{constructor(t){this.manager=t!==void 0?t:iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";class sv extends Ja{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=_c.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Rs("img");function l(){h(),_c.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class rv extends Ja{constructor(t){super(t)}load(t,e,n,s){const r=new Re,o=new sv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ds extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ov extends Ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const go=new Kt,yc=new U,Mc=new U;class Qa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(yc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class av extends Qa{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Zi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ba extends Ds{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new av}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const bc=new Kt,fs=new U,vo=new U;class lv extends Qa{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(fs),vo.copy(n.position),vo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vo),n.updateMatrixWorld(),s.makeTranslation(-fs.x,-fs.y,-fs.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}}class Kh extends Ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class cv extends Qa{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hv extends Ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new cv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uv extends Ds{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class dv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Sc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Sc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);function fv(i,t,e,n){return!(t<=0||i>=t||e<n)}const wc={step:{cap:1,gap:.2},stepMonster:{cap:1,gap:.24},door:{cap:1,gap:.28},doorSlam:{cap:1,gap:.4},whisper:{cap:1,gap:7},scream:{cap:1,gap:14},growl:{cap:1,gap:1.6},sting:{cap:1,gap:1.4},flash:{cap:1,gap:.12},click:{cap:2,gap:.04},creak:{cap:1,gap:.45},thunder:{cap:1,gap:8},metallic:{cap:1,gap:2},shadow:{cap:1,gap:8},deep:{cap:1,gap:3}},Sa={step:"fodtrin-gaaende.mp3",flash:"lommelygte-taend-sluk.mp3",metallic:"metallic.mp3",scream:"skrig.mp3",shadow:"pludselig-skygge-monster.mp3",deep:"dyb-lyd.mp3",bed:"baggrundslyd-hele-tiden-i-lav.mp3"};new Set(Object.keys(Sa));function pv(i){return new URL(`assets/audio/${i}`,document.baseURI).href}function mv(i,t){const e=i.length/Math.max(1,t);if(e<.05||i.length<8)return[{start:0,end:e}];const n=Math.max(1,Math.floor(t*.01)),s=Math.max(n,Math.floor(t*.02)),r=[];for(let l=0;l+s<=i.length;l+=n){let c=0;for(let h=0;h<s;h++){const u=i[l+h];c+=u*u}r.push(Math.sqrt(c/s))}const o=[],a=8;for(let l=0;l<r.length;l++){if(r[l]<.08)continue;let c=!1;const h=Math.max(0,l-a),u=Math.min(r.length-1,l+a);for(let p=h;p<=u;p++)if(r[p]>r[l]){c=!0;break}if(c)continue;const d=l*n/t;o.length&&d-o[o.length-1]<.28||o.push(d)}return r.length&&r[0]>=.08&&(o.length===0||o[0]>.2)&&o.unshift(0),o.length<2?gv(e):o.map((l,c)=>{const h=Math.max(0,l-.028),u=o[c+1]??l+.42,d=Math.min(e,Math.max(l+.16,Math.min(l+.4,u-.02)));return{start:h,end:Math.max(h+.08,d)}})}function gv(i){const t=[];for(let n=0;n+.1<i;n+=.36)t.push({start:n,end:Math.min(i,n+.36)});return t.length||t.push({start:0,end:Math.min(i,.4)}),t}function vv(i,t,e=.008){const n=Math.min(Math.floor(t*e),Math.floor(i.length/3));if(!(n<2))for(let s=0;s<n;s++){const r=s/n;i[s]*=r,i[i.length-1-s]*=r}}function xv(i,t,e=.02){const n=Math.min(Math.floor(t*e),Math.floor(i.length/8));if(n<8)return;const s=i[0];for(let r=0;r<n;r++){const o=(r+1)/n,a=i.length-n+r;i[a]=i[a]*(1-o)+s*o}}function _v(i){let t=0;for(let e=0;e<i.length;e++){const n=Math.abs(i[e]);n>t&&(t=n)}return t}function yv(i){if(!i.length)return 0;let t=0;const e=Math.max(1,Math.floor(i.length/2e5));let n=0;for(let s=0;s<i.length;s+=e){const r=i[s];t+=r*r,n++}return Math.sqrt(t/Math.max(1,n))}const wa=.8,Ec=.7,xo=.85;function ci(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function Tc(i,t,e=8){return Math.min(e,Math.max(0,t)/Math.max(.01,i*wa))}function Mv(i,t){const n=.063/Math.max(.001,i*wa);return Math.min(n,.45/Math.max(.001,t*wa))}function bv(i,t=!1){return Number.isFinite(i)?ci(i/100+(t?.25:0)):ci(t?.25:0)}function Sv(i,t,e,n){return i===t&&wv(n,e)}function wv(i,t){const e=i==="step"||i==="stepMonster"?200:i==="flash"||i==="click"?650:i==="scream"||i==="shadow"||i==="deep"||i==="metallic"?2300:1200;return t>=0&&t<=e}const Ac=new Set(["scream","shadow","deep","metallic"]),Ev=["door","doorSlam","locked","pickup","click","fail","whisper","growl","sting","key","generator","creak","thunder","paper","heartbeat","breath","lampBuzz","pipeKnock","distantBell","waterDrop","airRumble"],_o={step:"step",stepMonster:"step",flash:"flash",metallic:"metallic",scream:"scream",shadow:"shadow",deep:"deep"};class Tv{ctx=null;master=null;bedGain=null;stepGain=null;sfxGain=null;scareGain=null;analyser=null;buffers=new Map;extras=new Map;extraTried=!1;slices=[];activeSteps=new Set;bed=null;bedRunning=!1;bedBase=.4;prevState="";queue=[];epoch=1;liveSources=new Set;voices=[];lastPlayed=new Map;trackedPan=null;trackNext=!1;heartbeatLevel=0;breathLevel=0;nextHeartbeat=0;nextBreath=0;envZone="hall";envSequence=0;nextEnvironmentalCue=0;nextElectricalCue=0;humActive=!1;humPosition={x:0,y:0,z:0};tension=0;listenPos={x:0,y:0,z:0};listenRight={x:-1,z:0};moving=!1;trace=[];failures=[];masterVol=.8;musicVol=.7;sfxVol=.85;muted=!1;ensure(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;if(!t){this.fail("Ingen AudioContext i denne browser");return}const e=new t;this.ctx=e;const n=e.createGain(),s=e.createGain(),r=e.createGain(),o=e.createGain(),a=e.createGain(),l=e.createDynamicsCompressor();l.threshold.value=-3,l.knee.value=6,l.ratio.value=12,l.attack.value=.003,l.release.value=.08;const c=e.createAnalyser();c.fftSize=2048,c.channelCount=1,c.channelCountMode="explicit",c.channelInterpretation="speakers",s.connect(n),r.connect(n),o.connect(n),a.connect(n),n.connect(c),n.connect(l),l.connect(e.destination),this.master=n,this.bedGain=s,this.stepGain=r,this.sfxGain=o,this.scareGain=a,this.analyser=c,this.applyGains(),this.buffers.set("tap",Cv(e));for(const h of Ev)this.buffers.set(`cue:${h}`,Rv(e,h));this.prevState=e.state,e.onstatechange=()=>{const h=e.state;this.mark(`state:${h}`),h==="running"&&this.prevState!=="running"&&(this.bedRunning=!1,this.ensureBed(),this.flush()),h!=="running"&&(this.bedRunning=!1,this.stopBed()),this.prevState=h},this.loadClips(),this.loadUserScares()}async loadUserScares(){if(this.extraTried||!this.ctx)return;this.extraTried=!0;const t=this.ctx,e={babyLaugh:"kilde%20baby%20grin.mp3",pigRhythm:"rytme%20griselyd.mp3"};await Promise.all(Object.keys(e).map(async n=>{try{const s="./audio/"+e[n],r=await fetch(s);if(!r.ok||!r.headers.get("content-type")?.includes("audio"))return;const o=await r.arrayBuffer();if(o.byteLength<256)return;const a=await t.decodeAudioData(o);if(a.duration<.5)return;this.extras.set(n,a),this.mark("load-ok:extra:"+n)}catch{}}))}playUserScare(t,e){const n=this.ctx,s=this.extras.get(t);if(!n||n.state!=="running"||!s)return!1;const r=performance.now()/1e3,o=t==="babyLaugh"?95:75;if(r-(this.lastPlayed.get(t)??-999)<o)return!1;const a=Math.hypot(e.x-this.listenPos.x,e.z-this.listenPos.z);if(a>15)return!1;const l=1/(1+(a/4)**2),c=(t==="babyLaugh"?.1:.12)*l,h=this.fire(s,this.sfxGain,c,1,e,!1);return h&&(this.lastPlayed.set(t,r),this.mark("extra:"+t)),h}resume(){this.ensure();const t=this.ctx;if(!t)return Promise.resolve();const e=t.resume();return this.mark(`resume:${t.state}`),e.then(()=>{this.mark(`state:${t.state}`),t.state==="running"&&(this.ensureBed(),this.flush())}).catch(n=>this.fail(`Kunne ikke starte lyd: ${String(n)}`))}async loadClips(){this.ensure();const t=this.ctx;t&&await Promise.all(Object.keys(Sa).map(async e=>{const n=Sa[e];try{const s=await fetch(pv(n));if(!s.ok)throw new Error(`HTTP ${s.status} ${s.headers.get("content-type")??""}`);const r=await s.arrayBuffer();if(r.byteLength<64)throw new Error(`tom fil (${r.byteLength} bytes)`);const o=await t.decodeAudioData(r.slice(0));if(o.length<32)throw new Error("decode gav stilhed");if(e==="bed"){for(let a=0;a<o.numberOfChannels;a++)xv(o.getChannelData(a),o.sampleRate);this.buffers.set("bed",o),this.tuneBed(),this.bedRunning=!1,this.ensureBed()}else e==="step"?(this.buffers.set("step",o),this.slices=this.cutSteps(o),this.mark(`steps:${this.slices.length}`)):this.buffers.set(e,o);this.mark(`load-ok:${n}`),this.flush()}catch(s){const r=s instanceof Error?s.message:String(s);this.fail(`${n}: ${r}`),this.mark(`load-fail:${n}`)}}))}setLocomotion(t,e,n){if(this.ensure(),!t){(this.moving||this.activeSteps.size>0)&&(this.stopFootsteps(),this.mark("step-stop")),this.moving=!1;return}this.moving||(this.moving=!0,this.mark("step-start"))}stopFootsteps(){const t=this.ctx;if(!t)return;const e=t.currentTime;for(const n of this.activeSteps){n.amp.gain.cancelScheduledValues(e),n.amp.gain.setValueAtTime(n.amp.gain.value,e),n.amp.gain.linearRampToValueAtTime(1e-4,e+.035);try{n.source.stop(e+.045)}catch{}}this.activeSteps.clear()}playFootstep(t,e,n,s=1){this.ensure();const r=this.ctx;if(!r||r.state!=="running"||!this.slices.length)return;const o=this.slices[Math.floor(Math.random()*this.slices.length)],a=(e?.09:t?.2:.15)*(.92+Math.random()*.16),l=Math.min(3,Tc(yo(o),a)*Math.max(0,s)),c=.97+Math.random()*.06;this.fire(o,this.stepGain,l,c,n,!1)&&this.mark(n?"stepMonster":"step")}play(t,e,n){this.ensure();const s=Math.max(0,Math.min(2,n?.volume??1)),r=this.ctx;if(t==="step"||t==="stepMonster"){if(t==="stepMonster"){const a=performance.now()/1e3;if(a-(this.lastPlayed.get(t)??-999)<wc.stepMonster.gap)return;this.lastPlayed.set(t,a)}this.playFootstep(t==="stepMonster",!1,e,s);return}const o=_o[t];if(o&&!this.buffers.has(o)||!r||r.state!=="running"){this.enqueue({kind:t,pos:e,volume:s,occluded:n?.occluded,rate:n?.rate}),this.mark(`defer:${t}`);return}this.emit(t,e,s,!!n?.occluded,n?.rate??1)}playTracked(t,e){this.trackNext=!0;try{this.play(t,e,{volume:1})}finally{this.trackNext=!1}}moveTracked(t){const e=this.trackedPan;if(!e)return;const n=this.panOf(t);e.pan.value=n}hush(t=2){const e=this.ctx,n=this.bedGain;if(!e||!n||e.state!=="running")return;const s=e.currentTime;n.gain.cancelScheduledValues(s),n.gain.setValueAtTime(Math.max(1e-4,n.gain.value),s);const r=this.bedBase*this.musicVol/Ec;n.gain.linearRampToValueAtTime(Math.max(0,r*.35),s+.05),n.gain.linearRampToValueAtTime(r,s+Math.max(.4,t)),this.mark("hush")}setVolumes(t,e,n){this.masterVol=ci(t),this.musicVol=ci(e),this.sfxVol=ci(n),this.tuneBed(),this.applyGains()}duck(t){this.muted=t,this.applyGains()}setListener(t,e,n){this.listenPos=t;const s=Math.hypot(e.x,e.z)||1;this.listenRight={x:-e.z/s,z:e.x/s}}setTension(t,e){this.tension=bv(t,e)}beginScene(){this.epoch+=1,this.queue=[],this.heartbeatLevel=0,this.breathLevel=0,this.stopLive(),this.holdAmbience(2.4),this.mark(`scene:${this.epoch}`)}suspendTransient(){this.queue=[],this.heartbeatLevel=0,this.breathLevel=0,this.stopLive(),this.holdAmbience(1.6),this.mark("suspend")}setHeartbeat(t){this.heartbeatLevel=ci(t)}setBreath(t){this.breathLevel=ci(t)}setHum(t,e){this.humActive=t,this.humPosition=e}setRadio(t,e){}roomTones=!1;enableRoomTones(){this.roomTones=!0}setZone(t){t!==this.envZone&&(this.envZone=t,this.nextEnvironmentalCue=(this.ctx?.currentTime??0)+3.2)}update(t){const e=this.ctx;if(!e||e.state!=="running"||this.muted)return;const n=e.currentTime;if(this.heartbeatLevel>.15&&n>=this.nextHeartbeat){const s=this.buffers.get("cue:heartbeat");s&&this.fire(s,this.sfxGain,this.heartbeatLevel*.24,1,void 0,!1),this.nextHeartbeat=n+1-.3*this.heartbeatLevel}if(this.breathLevel>.3&&n>=this.nextBreath){const s=this.buffers.get("cue:breath");s&&this.fire(s,this.sfxGain,this.breathLevel*.25,1,void 0,!1),this.nextBreath=n+3.2}if(!this.roomTones&&n>=this.nextEnvironmentalCue){const s=this.envSequence++,r={hall:["airRumble","pipeKnock","waterDrop"],corridor:["airRumble","pipeKnock","waterDrop"],cellar:["pipeKnock","waterDrop","airRumble"],chapel:["distantBell","airRumble","pipeKnock"],upper:["airRumble","distantBell","waterDrop"],dark:["pipeKnock","airRumble","distantBell"],slagter:["pipeKnock","airRumble","waterDrop"]},o=r[this.envZone]??r.hall,a=o[s%o.length];this.play(a,void 0,{volume:.18+this.tension*.12}),this.nextEnvironmentalCue=n+9.5+s*7%8-this.tension*2}if(this.humActive&&n>=this.nextElectricalCue){const s=this.buffers.get("cue:lampBuzz");s&&this.fire(s,this.sfxGain,.065,.94+.1*Math.sin(n),this.humPosition,!1),this.nextElectricalCue=n+5+this.envSequence*3%5}}debug(){return{state:this.ctx?.state??"none",voices:this.voices.filter(t=>t.until>performance.now()/1e3).length,sampleRate:this.ctx?.sampleRate??0,last:this.trace.slice(-8),failures:this.failures.slice()}}sampleMix(t){this.ensure();const e=this.ctx,n=this.analyser;if(!e||!n)return Promise.resolve({peak:0,jumps:0,state:"none"});e.resume();const s=new Float32Array(n.fftSize);let r=0,o=0;const a=performance.now();return new Promise(l=>{const c=()=>{n.getFloatTimeDomainData(s);let h=s[0]??0;for(let u=0;u<s.length;u++){const d=s[u]??0,p=Math.abs(d);p>r&&(r=p),u>0&&Math.abs(d-h)>.5&&o++,h=d}performance.now()-a<t?setTimeout(c,16):l({peak:r,jumps:o,state:e.state})};c()})}async measureBed(){await this.resume();const t=this.ctx;return!t||t.state!=="running"?{rms:0,peak:0,state:t?.state??"none"}:(this.ensureBed(),{...await this.capture(900),state:t.state})}async audition(t){await this.resume();const e=this.ctx;if(!e||e.state!=="running")return{rms:0,peak:0,state:e?.state??"none",played:!1};const n=this.bedGain,s=this.bedBase;n&&(n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(0,e.currentTime)),await Pv(90);const r=this.trace.length;t==="step"?this.playFootstep(!1,!1):this.play(t,void 0,{volume:1});const o=this.trace.length>r&&!this.trace[this.trace.length-1].startsWith("defer:"),a=t==="flash"||t==="step"?550:1400,l=await this.capture(a);return n&&(n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(s,e.currentTime)),{...l,state:e.state,played:o}}emit(t,e,n,s,r=1){const o=this.ctx;if(!o||o.state!=="running"){this.enqueue({kind:t,pos:e,volume:n,occluded:s,rate:r});return}const a=performance.now()/1e3;this.voices=this.voices.filter(f=>f.until>a);const l=wc[t]??{cap:2,gap:.05};if(!fv(this.voices.filter(f=>f.kind===t).length,l.cap,a-(this.lastPlayed.get(t)??-999),l.gap))return;const c=_o[t],h=(c?this.buffers.get(c):this.buffers.get(`cue:${t}`))??this.buffers.get("tap");if(!h)return;const u=Ac.has(t),d=(u?.45:t==="flash"?.28:.12)*Math.max(0,Math.min(1.4,n)),p=Tc(yo(h),d)*(s?.65:1);this.fire(h,u?this.scareGain:this.sfxGain,p,r,e,u)&&(this.lastPlayed.set(t,a),this.voices.push({kind:t,until:a+h.duration/Math.max(.2,r)}),this.mark(t))}fire(t,e,n,s,r,o){const a=this.ctx;if(!a||!e||a.state!=="running")return!1;const l=a.currentTime,c=a.createBufferSource();c.buffer=t,c.playbackRate.value=s;const h=a.createGain(),u=Math.max(.05,t.duration/s),d=Math.min(.012,u*.1),p=Math.min(.02,u*.15);h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(Math.max(1e-4,n),l+d),h.gain.setValueAtTime(Math.max(1e-4,n),l+Math.max(d,u-p)),h.gain.linearRampToValueAtTime(1e-4,l+u),c.connect(h);let f=null;return r?(f=a.createStereoPanner(),f.pan.value=this.panOf(r)*(o?.55:1),h.connect(f),f.connect(e),this.trackNext&&(this.trackedPan=f)):h.connect(e),e===this.stepGain&&this.activeSteps.add({source:c,amp:h}),this.liveSources.add(c),c.start(l),c.stop(l+u+.03),c.onended=()=>{this.liveSources.delete(c);for(const v of this.activeSteps)v.source===c&&this.activeSteps.delete(v);try{c.disconnect(),h.disconnect(),f?.disconnect()}catch{}this.trackedPan===f&&(this.trackedPan=null)},!0}panOf(t){const e=t.x-this.listenPos.x,n=t.z-this.listenPos.z,s=(e*this.listenRight.x+n*this.listenRight.z)/(Math.hypot(e,n)||1);return Math.max(-.7,Math.min(.7,s))}enqueue(t){(Ac.has(t.kind)||t.kind==="flash")&&(this.queue=this.queue.filter(e=>e.kind!==t.kind)),this.queue.push({...t,queuedAt:performance.now(),epoch:this.epoch}),this.queue.length>8&&this.queue.shift()}flush(){if(!this.ctx||this.ctx.state!=="running")return;const t=this.queue.splice(0);for(const e of t){if(!Sv(e.epoch,this.epoch,performance.now()-e.queuedAt,e.kind)){this.mark(`expired:${e.kind}`);continue}if(e.kind==="step"||e.kind==="stepMonster")continue;const n=_o[e.kind];if(n&&!this.buffers.has(n)){this.queue.push(e);continue}this.emit(e.kind,e.pos,e.volume,!!e.occluded,e.rate??1)}}holdAmbience(t){const e=(this.ctx?.currentTime??0)+Math.max(0,t);this.nextEnvironmentalCue=Math.max(this.nextEnvironmentalCue,e),this.nextHeartbeat=Math.max(this.nextHeartbeat,e),this.nextBreath=Math.max(this.nextBreath,e),this.nextElectricalCue=Math.max(this.nextElectricalCue,e)}stopLive(){for(const t of this.liveSources)try{t.stop()}catch{}this.liveSources.clear(),this.activeSteps.clear()}ensureBed(){if(this.bedRunning)return;const t=this.ctx,e=this.buffers.get("bed");if(!t||t.state!=="running"||!e||!this.bedGain)return;this.stopBed();const n=t.createBufferSource();n.buffer=e,n.loop=!0,n.connect(this.bedGain),n.start(t.currentTime),this.bed=n,this.bedRunning=!0,this.mark("bed-start")}stopBed(){if(this.bed){try{this.bed.stop()}catch{}try{this.bed.disconnect()}catch{}this.bed=null,this.bedRunning=!1}}tuneBed(){const t=this.buffers.get("bed");t&&(this.bedBase=Mv(Av(t),yo(t)),this.applyGains())}applyGains(){const t=this.ctx?.currentTime??0,e=(n,s)=>{n&&(n.gain.cancelScheduledValues(t),n.gain.setTargetAtTime(s,t,.025))};e(this.master,this.masterVol*(this.muted?.4:1)),e(this.bedGain,this.bedBase*this.musicVol/Ec),e(this.stepGain,this.sfxVol/xo),e(this.sfxGain,this.sfxVol/xo),e(this.scareGain,this.sfxVol/xo)}cutSteps(t){const e=this.ctx;if(!e)return[];const n=new Float32Array(t.length),s=t.numberOfChannels;for(let o=0;o<s;o++){const a=t.getChannelData(o);for(let l=0;l<a.length;l++)n[l]+=a[l]/s}return mv(n,t.sampleRate).map(o=>{const a=Math.max(0,Math.floor(o.start*t.sampleRate)),l=Math.min(t.length,Math.max(a+8,Math.floor(o.end*t.sampleRate))),c=e.createBuffer(s,l-a,t.sampleRate);for(let h=0;h<s;h++){const u=c.getChannelData(h);t.copyFromChannel(u,h,a),vv(u,t.sampleRate,.008)}return c})}capture(t){const e=this.analyser;if(!e)return Promise.resolve({rms:0,peak:0});const n=new Float32Array(e.fftSize),s=performance.now();let r=0,o=0,a=0;return new Promise(l=>{const c=()=>{e.getFloatTimeDomainData(n);for(let h=0;h<n.length;h++){const u=n[h]??0,d=Math.abs(u);d>r&&(r=d),o+=u*u,a++}performance.now()-s<t?setTimeout(c,20):l({rms:Math.sqrt(o/Math.max(1,a)),peak:r})};c()})}mark(t){this.trace.push(t),this.trace.length>100&&this.trace.splice(0,this.trace.length-80)}fail(t){this.failures.push(t),this.failures.length>12&&this.failures.shift(),this.mark(`fejl:${t}`),console.error(`[Skt. Agnes] Lyd: ${t}`)}}function yo(i){let t=0;for(let e=0;e<i.numberOfChannels;e++)t=Math.max(t,_v(i.getChannelData(e)));return t}function Av(i){let t=0;for(let e=0;e<i.numberOfChannels;e++)t=Math.max(t,yv(i.getChannelData(e)));return t}function Rv(i,t){const e={door:[.26,95,55],doorSlam:[.46,82,38],locked:[.22,220,155],pickup:[.21,410,520],click:[.1,420,280],fail:[.21,135,65],whisper:[1.4,330,160],growl:[.75,72,45],sting:[.8,260,64],key:[.18,630,740],generator:[1.1,54,85],creak:[.75,130,68],thunder:[1.6,74,25],paper:[.2,270,190],heartbeat:[.3,58,42],breath:[1.25,185,120],lampBuzz:[.54,80,97],pipeKnock:[.72,110,48],distantBell:[2.2,185,169],waterDrop:[.21,600,210],airRumble:[2.8,49,63]},[n,s,r]=e[t]??[.1,180,180],o=i.sampleRate,a=Math.max(64,Math.floor(o*n)),l=i.createBuffer(1,a,o),c=l.getChannelData(0);let h=0;for(let u=0;u<a;u++){const d=u/a;h+=2*Math.PI*(s+(r-s)*d)/o;const p=Math.pow(Math.sin(Math.PI*d),1.3),f=t==="heartbeat"?d<.35?1:d>.48&&d<.78?.55:0:1;c[u]=(Math.sin(h)*.76+Math.sin(h*1.98)*.18)*p*f*.45}return l}function Cv(i){const t=i.sampleRate,e=Math.floor(t*.09),n=i.createBuffer(1,e,t),s=n.getChannelData(0);for(let r=0;r<e;r++){const o=Math.sin(Math.PI*r/(e-1));s[r]=Math.sin(2*Math.PI*180*r/t)*o*.4}return n}function Pv(i){return new Promise(t=>setTimeout(t,i))}function kv(i=0,t=0,e=0){return{x:i,y:t,z:e}}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function Zh(i,t,e){return i+(t-i)*e}function Cs(i,t){const e=i.x-t.x,n=i.z-t.z;return Math.hypot(e,n)}function Dv(i,t){return Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)}function Jh(i){return{x:Math.sin(i),z:Math.cos(i)}}function Qh(i){return{x:-Math.cos(i),z:Math.sin(i)}}function Rc(i,t,e,n,s=!1){const r=s?-n:n;return{yaw:i-e,pitch:Ke(t-r,-1.2,1.2)}}function Iv(i){let t=i;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function Mo(i,t){return Iv(t-i)}function Hi(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ea(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class Lv{a=[];get size(){return this.a.length}push(t,e){const n=this.a;n.push({p:t,id:e});let s=n.length-1;for(;s>0;){const r=s-1>>1;if(n[r].p<=n[s].p)break;const o=n[r];n[r]=n[s],n[s]=o,s=r}}pop(){const t=this.a;if(!t.length)return;const e=t[0],n=t.pop();if(t.length>0&&n){t[0]=n;let s=0;for(;;){const r=s*2+1,o=r+1;let a=s;if(r<t.length&&t[r].p<t[a].p&&(a=r),o<t.length&&t[o].p<t[a].p&&(a=o),a===s)break;const l=t[a];t[a]=t[s],t[s]=l,s=a}}return e}}function Lr(i,t){return!(t.allowFloor&&!t.allowFloor(i.floor)||i.doorId&&t.blockDoor&&t.blockDoor(i.doorId))}function Uv(i,t,e,n={}){const s=i.nodes;if(!s.length)return null;const r=bo(i,t,n);if(r<0)return null;const o=Ov(e.y),a=!n.allowFloor||n.allowFloor(o);let l=-1;if(a?l=bo(i,e,n):(l=Fv(i,e,n),l<0&&(l=bo(i,e,n))),l<0)return null;const c=zv(s,r,l,u=>Lr(s[u],n));if(!c)return null;const h=c.map(u=>({x:s[u].x,y:s[u].y,z:s[u].z}));return Bv(h,i,n,Nv(i))}function Nv(i){const t=new Map;for(const e of i.nodes){const n=`${e.ix},${e.iz}`;let s=t.get(n);s||(s=[],t.set(n,s)),s.push(e.id)}return t}function bo(i,t,e,n){let s=-1,r=1/0;for(const o of i.nodes){if(!Lr(o,e))continue;const a=Math.abs(o.y-t.y);if(a>3.2)continue;const l=(o.x-t.x)**2+(o.z-t.z)**2+a*a*.15;l<r&&(r=l,s=o.id)}return s}function Fv(i,t,e){let n=-1,s=1/0;for(const r of i.nodes){if(!r.stair||!Lr(r,e))continue;const o=(r.x-t.x)**2+(r.z-t.z)**2;o<s&&(s=o,n=r.id)}return n}function Ov(i){return i<2?-1:i<6?0:1}function zv(i,t,e,n){if(!n(t)||!n(e))return null;if(t===e)return[t];const s=new Map,r=new Map,o=new Set,a=new Lv;s.set(t,0);const l=Cs(i[t],i[e]);a.push(l,t);const c=i.length*12+32;let h=0;for(;a.size>0&&h++<c;){const u=a.pop();if(!u)break;const d=u.id;if(o.has(d))continue;if(d===e){const f=[d];let v=d;for(;r.has(v);)v=r.get(v),f.push(v);return f.reverse(),f}o.add(d);const p=s.get(d)??1/0;for(const f of i[d].links){if(!n(f.to)||o.has(f.to))continue;const v=p+f.cost;if(v+1e-6<(s.get(f.to)??1/0)){s.set(f.to,v),r.set(f.to,d);const m=Cs(i[f.to],i[e]);a.push(v+m,f.to)}}}return null}function Bv(i,t,e,n){if(i.length<3)return i;const s=[i[0]];let r=0;for(;r<i.length-1;){let o=i.length-1;for(;o>r+1&&!Gv(i[r],i[o],t,e,n);)o--;s.push(i[o]),r=o}return s}function Gv(i,t,e,n,s){const r=Dv(i,t),o=Math.max(2,Math.ceil(r/.25));for(let a=1;a<o;a++){const l=a/o,c={x:i.x+(t.x-i.x)*l,y:i.y+(t.y-i.y)*l,z:i.z+(t.z-i.z)*l};if(!Hv(e,c,n,s))return!1}return!0}function Hv(i,t,e,n){const s=i.cellSize,r=Math.floor(t.x/s),o=Math.floor(t.z/s);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){const c=n.get(`${r+a},${o+l}`);if(c)for(const h of c){const u=i.nodes[h];if(!Lr(u,e))continue;const d=u.x-t.x,p=u.z-t.z;if(d*d+p*p<=.42*.42&&Math.abs(u.y-t.y)<1.05)return!0}}return!1}function Cc(i={}){return{state:"Patrol",stateTime:0,waypointIndex:0,goal:null,lastSeen:null,lastHeard:null,suspicion:0,attackCooldown:0,unseenTime:0,searchLeft:0,blindTime:0,hesitate:0,speedMul:1,...i}}function Vv(i){return{...i,goal:i.goal?{...i.goal}:null,lastSeen:i.lastSeen?{...i.lastSeen}:null,lastHeard:i.lastHeard?{...i.lastHeard}:null}}function Wv(i,t){const e=Vv(i),n=Math.max(0,t.dt);e.stateTime+=n,e.attackCooldown=Math.max(0,e.attackCooldown-n),e.blindTime=Math.max(0,e.blindTime-n),e.hesitate=Math.max(0,e.hesitate-n),e.suspicion=Math.max(0,e.suspicion-n*.045);const s=e.blindTime>0,r=t.canSee&&!s&&!t.hiding;r?(e.unseenTime=0,e.lastSeen={...t.playerPos},e.suspicion=Math.min(1,e.suspicion+n*.7)):e.unseenTime+=n,t.flashlightHit&&!s&&(e.suspicion=Math.min(1,e.suspicion+n*1.1),e.lastSeen=e.lastSeen??{...t.playerPos}),t.hear&&t.hear.loudness>.12&&(e.lastHeard={...t.hear.pos},e.suspicion=Math.min(1,e.suspicion+t.hear.loudness*.25));let o=!1,a=!1;const l=(f,v)=>{e.state!==f&&(e.state=f,e.stateTime=0,e.speedMul=.88+t.rng()*.24,f==="Search"&&(e.searchLeft=6.5+t.rng()*3),f==="Attack"&&(e.attackCooldown=1.5,o=!0)),v&&(e.goal={...v})};if(t.hiding&&t.hideSpot&&t.knowsHide&&(e.state==="Search"||e.state==="Suspicious"||e.state==="Chase"||e.state==="Investigate")&&Cs(t.monsterPos,t.hideSpot)<1.75){const v=(t.holdBreath?.055:.26)*(.35+e.suspicion);t.rng()<v*n&&(a=!0)}const c=r&&t.allowChase&&t.distance<=1.32&&e.attackCooldown<=0;e.state!=="Attack"&&(c?l("Attack",t.playerPos):r&&t.allowChase?e.state==="Chase"?e.goal={...t.playerPos}:e.state==="LostPlayer"?l("Chase",t.playerPos):e.state==="Suspicious"?(e.goal={...t.playerPos},e.hesitate<=0&&l("Chase",t.playerPos)):(l("Suspicious",t.playerPos),e.hesitate=.45+t.rng()*1.15):r&&!t.allowChase||t.flashlightHit&&!s&&(e.state==="Idle"||e.state==="Patrol"||e.state==="ReturnToPatrol"||e.state==="Investigate")?l("Suspicious",t.playerPos):t.hear&&t.hear.loudness>.38&&e.state!=="Chase"&&e.state!=="LostPlayer"&&e.state!=="Suspicious"&&(t.hear.loudness>.84&&t.distance<6.5&&t.allowChase&&t.rng()<.55?l("Chase",t.hear.pos):l("Investigate",t.hear.pos)));const h=()=>{const f=t.waypoints;return f.length?(e.waypointIndex=(e.waypointIndex+1)%f.length,{...f[e.waypointIndex]}):e.goal},u=()=>{const f=t.waypoints;if(!f.length)return e.goal;let v=0,m=1/0;for(let g=0;g<f.length;g++){const S=Cs(t.monsterPos,f[g]);S<m&&(m=S,v=g)}return e.waypointIndex=v,{...f[v]}};switch(e.state){case"Idle":e.stateTime>1.5+t.rng()*2&&l("Patrol",h()??t.monsterPos);break;case"Patrol":!e.goal&&t.waypoints.length&&(e.goal={...t.waypoints[e.waypointIndex%t.waypoints.length]}),t.atGoal&&(t.rng()<.16?l("Idle",t.monsterPos):e.goal=h());break;case"Investigate":(t.atGoal||e.stateTime>11)&&l("Search",e.goal??t.monsterPos);break;case"Search":if(e.searchLeft-=n,t.atGoal){const f=e.lastHeard??e.lastSeen??t.monsterPos,v=Xv(f,t.searchSpots,t.checkedIds,t.rng);v.id&&t.checkedIds.add(v.id),e.goal=v.pos}e.searchLeft<=0&&l("ReturnToPatrol",u()??t.monsterPos);break;case"Suspicious":!r&&(t.atGoal&&e.stateTime>2.2||e.stateTime>8)&&l("Search",e.goal??t.monsterPos);break;case"Chase":r?e.goal={...t.playerPos}:e.lastSeen&&(e.goal={...e.lastSeen}),!r&&e.unseenTime>.55&&l("LostPlayer",e.lastSeen?{...e.lastSeen}:{...t.playerPos});break;case"Attack":e.stateTime>.82&&(r&&t.distance<2.4?l("Chase",t.playerPos):l("LostPlayer",e.lastSeen?{...e.lastSeen}:{...t.playerPos}));break;case"LostPlayer":(t.atGoal||e.stateTime>6.2)&&l("Search",e.goal??t.monsterPos);break;case"ReturnToPatrol":e.goal||(e.goal=u()),(t.atGoal||e.stateTime>16)&&l("Patrol",e.goal??h());break}let p={Idle:0,Patrol:1.48,Investigate:2.2,Search:1.22,Suspicious:1.28,Chase:3.7+t.aggression*.85,Attack:.85,LostPlayer:2.35,ReturnToPatrol:1.6}[e.state]*e.speedMul;return e.hesitate>0&&e.state==="Suspicious"&&(p*=.72),s&&(p*=.45),{bb:e,speed:p,attackPulse:o,foundHiding:a}}function Xv(i,t,e,n){const s=t.filter(o=>!e.has(o.id)&&Cs(i,o.pos)<8);if(s.length){const o=s[Math.floor(n()*s.length)%s.length];return{id:o.id,pos:{...o.pos}}}const r=n()*Math.PI*2;return{id:null,pos:kv(i.x+Math.cos(r)*2,i.y,i.z+Math.sin(r)*2)}}function qv(i){return i==="Run"||i==="Attack"?.62:i==="Search"?.5:.36}function Yv(i,t){return i==="Attack"?{clip:"Attack",timeScale:1}:i==="Search"||i==="Investigate"||i==="Suspicious"||i==="LostPlayer"?{clip:"Search",timeScale:.85}:i==="Idle"||t<.15?{clip:"Idle",timeScale:1}:i==="Chase"||t>2.6?{clip:"Run",timeScale:Math.max(.75,Math.min(1.35,t/3.4))}:{clip:"Walk",timeScale:Math.max(.7,Math.min(1.25,t/1.5))}}const jv=1.25;function $v(i,t){return t>0||i<=.05?"none":i>=jv?"banish":"blind"}const Hn=1e-4;function Kv(i,t,e,n){return n.standOnly&&e?!1:i+t>n.minY+.02&&i<n.maxY-.02}function Zv(i,t,e,n,s,r,o){const a=t+s;for(const l of o)if(!(l.standOnly&&r)&&!(a<=l.minY+.02||t>=l.maxY-.02)&&!(i<=l.minX-n||i>=l.maxX+n)&&!(e<=l.minZ-n||e>=l.maxZ+n))return!0;return!1}function tu(i,t,e,n,s,r){let o=i.x,a=i.z,l=!1;const c=r.filter(u=>Kv(i.y,n,s,u)),h=(u,d)=>{if(d!==0){u==="x"?o+=d:a+=d;for(let p=0;p<2;p++)for(const f of c){const v=f.minX-e,m=f.maxX+e,g=f.minZ-e,S=f.maxZ+e;if(u==="x"){if(a<=g+Hn||a>=S-Hn)continue;d>0&&i.x<=v+Hn&&o>v?(o=v,l=!0):d<0&&i.x>=m-Hn&&o<m?(o=m,l=!0):o>v&&o<m&&a>g&&a<S&&i.x>v&&i.x<m&&(o=o-v<m-o?v:m,l=!0)}else{if(o<=v+Hn||o>=m-Hn)continue;d>0&&i.z<=g+Hn&&a>g?(a=g,l=!0):d<0&&i.z>=S-Hn&&a<S?(a=S,l=!0):a>g&&a<S&&o>v&&o<m&&i.z>g&&i.z<S&&(a=a-g<S-a?g:S,l=!0)}}}};return h("x",t.x),h("z",t.z),{x:o,y:i.y,z:a,hit:l}}function Pc(i,t,e,n,s){for(const r of s){if(!r.standOnly||t<=r.minX||t>=r.maxX||e<=r.minZ||e>=r.maxZ)continue;if(i+n>r.minY+.02&&i<r.maxY-.02)return!0}return!1}function eu(i,t,e){const n=t.x-i.x,s=t.y-i.y,r=t.z-i.z;let o=0,a=1;const l=[[n,i.x,e.minX,e.maxX],[s,i.y,e.minY,e.maxY],[r,i.z,e.minZ,e.maxZ]];for(const[c,h,u,d]of l){if(Math.abs(c)<1e-8){if(h<u||h>d)return!1;continue}let p=(u-h)/c,f=(d-h)/c;if(p>f){const v=p;p=f,f=v}if(p>o&&(o=p),f<a&&(a=f),o>a)return!1}return a>.02&&o<.98}function Ps(i,t,e){for(const n of e)if(eu(i,t,n))return!1;return!0}function or(i,t,e,n=2.35){let s=null,r=n;const o=Math.hypot(t.x,t.y,t.z)||1,a=t.x/o,l=t.y/o,c=t.z/o;for(const d of e){const p=d.x-i.x,f=d.y-i.y,v=d.z-i.z,m=p*a+f*l+v*c;if(m<0||m>n)continue;const g=i.x+a*m,S=i.y+l*m,A=i.z+c*m;Math.hypot(g-d.x,S-d.y,A-d.z)<=d.radius&&m<r&&(s=d,r=m)}if(s)return s;let h=.35,u=n;for(const d of e){const p=d.x-i.x,f=d.y-i.y,v=d.z-i.z,m=Math.hypot(p,f,v);if(m>n||m<.001)continue;const g=(p*a+f*l+v*c)/m;g>h&&m<u+.4&&(s=d,h=g,u=m)}return s}const Jv={sprint:13,walk:4.3,crouch:1.15,door:16,drop:11,jump:8,landing:6,voice:9};function Qv(i){return Jv[i]}function tx(i){switch(i){case"sprint":return .92;case"door":return .88;case"drop":return .7;case"jump":return .58;case"landing":return .5;case"voice":return .64;case"walk":return .42;case"crouch":return .14}}function nu(i,t){return Math.pow(.52,Math.abs(i))*(t?.38:1)}function ex(i,t,e,n){const s=Math.hypot(i.x-t.x,i.z-t.z),r=1.15-Math.min(1,Math.max(0,e))*.7,o=(1.1+s*.18)*r,a=n()*Math.PI*2;return{x:i.x+Math.cos(a)*o,y:i.y,z:i.z+Math.sin(a)*o}}function nx(i,t,e,n,s){const r=Qv(e)*nu(n,s);return Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)<=r}function ix(i,t,e,n,s,r){const o=e.x-i.x,a=e.y-i.y,l=e.z-i.z,c=Math.hypot(o,a,l);if(c>s)return!1;if(c<.2)return!0;const h=Math.hypot(o,l)||1e-4;return(t.x*o+t.z*l)/h<n||Math.abs(a)>2.6&&c>3.5?!1:Ps(i,e,r)}function iu(i,t,e,n,s,r){const o=e.x-i.x,a=e.y-i.y,l=e.z-i.z,c=Math.hypot(o,a,l);if(c>s||c<.05)return!1;const h=Math.hypot(t.x,t.y,t.z)||1;return(t.x*o+t.y*a+t.z*l)/(h*c)<n?!1:Ps(i,e,r)}const sx=.36,rx=1.95,ox=Math.cos(48*Math.PI/180);class ax{group=new Yt;bb=Cc();pos={x:18,y:0,z:24};yaw=0;path=[];pathI=0;repath=0;goalKey="";phase=0;stuckT=0;stuckTries=0;anchorX=0;anchorZ=0;pelvis=null;spine=null;neck=null;head=null;thighL=null;thighR=null;shinL=null;shinR=null;footL=null;footR=null;armL=null;armR=null;foreL=null;foreR=null;checked=new Set;glide=0;watch=0;lookAt=0;beamTime=0;beamImmune=0;concealed=!1;constructor(){const t=new pt({color:"#353332",roughness:.94,metalness:.01}),e=new pt({color:"#232525",roughness:.99,metalness:0}),n=new pt({color:"#100c0c",roughness:.45}),s=new pt({color:"#1a1412",roughness:.5}),r=new pt({color:"#373a37",roughness:1,side:ge}),o=new pt({color:"#321e20",roughness:.98}),a=new pt({color:"#5d5953",roughness:.98}),l=new Yt;l.position.y=.96,this.pelvis=l,l.add(fn(new Z(new Me(.13,12,8),t),1.15,.72,.85));const c=new Yt;c.position.y=.02,c.rotation.x=.38,this.spine=c,l.add(c);const h=fn(new Z(lx(),t));c.add(h);const u=new Z(new fe(.44,.67),r);u.position.set(0,-.03,.185),u.rotation.z=-.1,c.add(u);for(let x=0;x<5;x++){const _=fn(new Z(new It(.18+x*.007,.018,.025),a));_.position.set(x%2?-.08:.08,.23-x*.107,.208),_.rotation.z=(x%2?1:-1)*.21,c.add(_)}const d=fn(new Z(new Me(.1,8,6),o));d.scale.set(1.3,.28,.25),d.position.set(.02,-.13,.19),c.add(d);for(let x=0;x<5;x++){const _=new Z(new fe(.052,.23+x*.05),r);_.position.set((x-2)*.075,-.43-x%2*.045,.13),_.rotation.z=(x-2)*.09,c.add(_)}const p=fn(new Z(new ui(.07,.22,3,6),t));p.rotation.z=Math.PI/2,p.position.y=.4,c.add(p);const f=this.leg(t,-1,.5,.46),v=this.leg(t,1,.47,.44);l.add(f.hip,v.hip),this.thighL=f.thigh,this.thighR=v.thigh,this.shinL=f.shin,this.shinR=v.shin,this.footL=f.foot,this.footR=v.foot;const m=this.arm(t,-1,.46,.4),g=this.arm(t,1,.42,.38);c.add(m.shoulder,g.shoulder),this.armL=m.upper,this.armR=g.upper,this.foreL=m.fore,this.foreR=g.fore;const S=new Yt;S.position.set(0,.52,.02),S.rotation.x=-.28,this.neck=S,c.add(S),S.add(Ui(.14,.042,.036,t,1));const A=new Yt;A.position.y=.14,this.head=A,S.add(A);const y=fn(new Z(new Me(.144,17,12),e));y.scale.set(.86,1.15,.68),y.position.y=.07;const w=new Z(cx(),r);w.position.set(0,.045,-.015),w.rotation.z=.07,w.castShadow=!0;const P=new Z(new Me(.125,14,10),n);P.scale.set(.85,1.17,.27),P.position.set(0,.06,.155),A.add(y,P,w);for(let x=0;x<6;x++){const _=new Z(new fe(.18+x%3*.028,.035),r);_.position.set(x%2?-.013:.013,.2-x*.05,.205),_.rotation.z=(x%3-1)*.18,A.add(_)}for(let x=0;x<4;x++){const _=new Z(new It(.006,.027,.006),s);_.position.set(-.038+x*.025,-.12,.205),_.rotation.z=x%2?.35:-.3,A.add(_)}const T=new Z(new fe(.31,.64,4,4),r);T.position.set(.15,-.35,.228),T.rotation.z=-.17,c.add(T),this.group.add(l),this.group.visible=!1}leg(t,e,n,s){const r=new Yt;r.position.set(e*.09,-.02,0);const o=new Yt;r.add(o),o.add(Ui(n,.055,.042,t));const a=new Yt;a.position.y=-n,o.add(a),a.add(Ui(s,.04,.03,t));const l=new Yt;l.position.y=-s,a.add(l);const c=fn(new Z(new It(.07,.035,.16),t));return c.position.set(0,-.02,.05),l.add(c),l.add(fn(new Z(new Me(.032,8,6),t))),{hip:r,thigh:o,shin:a,foot:l}}arm(t,e,n,s){const r=new Yt;r.position.set(e*.2,.4,.02),r.add(fn(new Z(new Me(.042,8,6),t)));const o=new Yt;o.rotation.z=e*.12,r.add(o),o.add(Ui(n,.04,.032,t));const a=new Yt;a.position.y=-n,a.rotation.x=.18,o.add(a),a.add(Ui(s,.03,.022,t));const l=new Yt;l.position.y=-s,a.add(l),l.add(fn(new Z(new Me(.028,8,6),t)));for(let c=0;c<3;c++){const h=new Yt;h.position.set((c-1)*.016,-.01,(c-1)*.01),h.rotation.x=.25+c*.04,h.rotation.z=e*(c-1)*.12;const u=.15+(c===1?.03:0);h.add(Ui(u,.008,.005,t,-1)),l.add(h)}return{shoulder:r,upper:o,fore:a}}reveal(t){this.concealed=!1,this.pos={...t},this.group.position.set(t.x,t.y,t.z),this.group.visible=!0,this.path=[],this.goalKey="",this.glide=0,this.bb.state="Patrol",this.bb.goal={...t}}face(t){this.yaw=t,this.group.rotation.y=t}spawn(t,e,n){this.pos={...t},this.yaw=e,this.bb=Cc({state:n}),this.group.position.set(t.x,t.y,t.z),this.group.visible=!0,this.path=[],this.anchorX=t.x,this.anchorZ=t.z,this.stuckT=0}update(t){const e=this.bb.state,n={x:this.pos.x,y:this.pos.y+1.7,z:this.pos.z},s=Jh(this.yaw);let r=null;for(const S of t.noises){if(!nx(n,S.pos,S.kind,S.floorDelta,S.occluded))continue;const A=tx(S.kind)*nu(S.floorDelta,S.occluded);(!r||A>r.loudness)&&(r={pos:ex(S.pos,n,A,Math.random),loudness:A})}const o=Math.hypot(t.playerPos.x-this.pos.x,t.playerPos.z-this.pos.z),l=(!t.flashlightOn?8.5:12.5)*(t.hiding?.2:1),c=!t.hiding&&ix(n,s,t.playerEye,ox,l,t.blockers),h=t.flashlightOn&&iu(t.camPos,t.camDir,{x:this.pos.x,y:this.pos.y+1.75,z:this.pos.z},Math.cos(.5),16,t.blockers);this.beamImmune=Math.max(0,this.beamImmune-t.dt),h&&this.beamImmune<=0?this.beamTime+=t.dt:this.beamTime=Math.max(0,this.beamTime-t.dt*1.5);const u=t.hideSpot,d=(S,A)=>!!u&&!!S&&Math.hypot(S.x-u.x,S.z-u.z)<A,p=d(this.bb.lastSeen,2.4)||d(this.bb.lastHeard,3.2)||d(r?.pos??null,3.2);this.lookAt=Mo(this.yaw,Math.atan2(t.playerPos.x-this.pos.x,t.playerPos.z-this.pos.z));const f=this.bb.goal,v=!!f&&Math.hypot(f.x-this.pos.x,f.z-this.pos.z)<.75,m=Wv(this.bb,{dt:t.dt,monsterPos:this.pos,playerPos:t.playerPos,canSee:c,hear:r,flashlightHit:h,distance:o,atGoal:v,hiding:t.hiding,hideSpot:t.hideSpot,holdBreath:t.holdBreath,allowChase:t.allowChase,aggression:t.aggression,rng:Math.random,waypoints:t.waypoints,knowsHide:p,searchSpots:t.searchSpots,checkedIds:this.checked});this.bb=m.bb;const g=$v(this.beamTime,this.beamImmune);return(g==="blind"||g==="banish")&&(this.bb.blindTime=Math.max(this.bb.blindTime,1.2),(this.bb.state==="Chase"||this.bb.state==="Attack")&&(this.bb.state="LostPlayer",this.bb.goal=this.bb.lastSeen?{...this.bb.lastSeen}:{...this.pos})),g==="banish"&&(this.concealed=!0,this.beamTime=0,this.beamImmune=12),this.concealed?(this.group.visible=!1,this.glide=0,this.animate(t.dt,0),{attack:!1,foundHiding:!1,state:this.bb.state,entered:this.bb.state!==e?this.bb.state:null}):(this.group.visible=!0,!this.concealed&&this.bb.state==="Patrol"&&this.bb.stateTime>8&&Math.random()<t.dt*.04&&t.waypoints.length&&(this.watch=1.4+Math.random()*2.2,this.bb.waypointIndex=(this.bb.waypointIndex+1+Math.floor(Math.random()*3))%t.waypoints.length,this.bb.goal={...t.waypoints[this.bb.waypointIndex]},this.path=[]),this.follow(t,m.speed),this.animate(t.dt,m.speed),this.group.position.set(this.pos.x,this.pos.y,this.pos.z),this.group.rotation.y=this.yaw,{attack:m.attackPulse,foundHiding:m.foundHiding,state:this.bb.state,entered:this.bb.state!==e?this.bb.state:null})}follow(t,e){if(this.watch>0){this.watch=Math.max(0,this.watch-t.dt),this.glide+=(0-this.glide)*Math.min(1,t.dt*6);return}const n=this.bb.goal,s=this.bb.state==="Chase"||this.bb.state==="Attack",r=(n&&e>=.05?e:0)*(s?1.05:1),o=s?Math.min(4.05,r):r,a=o>this.glide?2.2:5.5;if(this.glide+=(o-this.glide)*Math.min(1,t.dt*a),!n||this.glide<.05)return;e=this.glide;const l=`${n.x.toFixed(1)}|${n.z.toFixed(1)}|${this.bb.state}`;if(this.repath-=t.dt,l!==this.goalKey||this.repath<=0||this.pathI>=this.path.length){this.goalKey=l,this.repath=this.bb.state==="Chase"?.35:.8;const y=Uv(t.nav,this.pos,n,t.query);this.path=y??[],this.pathI=0}let c=n.x,h=n.z;if(this.pathI<this.path.length){const y=this.path[this.pathI];c=y.x,h=y.z,Math.hypot(y.x-this.pos.x,y.z-this.pos.z)<.4&&this.pathI++}const u=this.blockingDoor(t,c,h);if(u&&(t.requestOpen(u.id),(t.openAmount.get(u.id)??0)<.4&&Math.hypot((u.axis==="x"?u.coord:u.center)-this.pos.x,(u.axis==="z"?u.coord:u.center)-this.pos.z)<1.05))return;const d=c-this.pos.x,p=h-this.pos.z,f=Math.hypot(d,p)||1,v=Math.min(e*t.dt,f),m=tu(this.pos,{x:d/f*v,z:p/f*v},sx,rx,!1,t.colliders);this.pos.x=m.x,this.pos.z=m.z;const g=t.floorAt(this.pos.x,this.pos.z,this.pos.y);g!==null&&(this.pos.y=g);const S=Math.atan2(d,p);if(this.yaw+=Mo(this.yaw,S)*Math.min(1,t.dt*6),Math.hypot(this.pos.x-this.anchorX,this.pos.z-this.anchorZ)<.025?this.stuckT+=t.dt:(this.stuckT=0,this.anchorX=this.pos.x,this.anchorZ=this.pos.z),this.stuckT>.8&&t.waypoints.length){if(this.stuckT=0,this.stuckTries++,this.stuckTries>=3){this.stuckTries=0,this.concealed=!0;return}this.bb.waypointIndex=(this.bb.waypointIndex+1)%t.waypoints.length,this.bb.goal={...t.waypoints[this.bb.waypointIndex]},this.path=[],this.goalKey=""}}blockingDoor(t,e,n){let s=null,r=1.45;for(const o of t.doors){if(o.kind!=="door"||t.doorLocked(o.id)||(t.openAmount.get(o.id)??0)>.7)continue;const a=o.axis==="x"?o.coord:o.center,l=o.axis==="z"?o.coord:o.center,c=Math.hypot(a-this.pos.x,l-this.pos.z);if(c>r)continue;const h=Math.atan2(a-this.pos.x,l-this.pos.z),u=Math.atan2(e-this.pos.x,n-this.pos.z);Math.abs(Mo(h,u))>1.2||(s=o,r=c)}return s}animate(t,e){const n=Yv(this.bb.state,e),s=n.clip==="Run"||n.clip==="Attack",r=n.clip==="Search",o=n.clip==="Walk"||n.clip==="Run";this.phase+=t*(o?(1.7+Math.min(e,4)*.7)*n.timeScale:.45);const a=o?Math.sin(this.phase):r?Math.sin(this.phase*.45)*.35:0,l=n.clip==="Run"?.62:.48;if(this.thighL&&this.shinL&&this.footL&&this.poseLeg(this.thighL,this.shinL,this.footL,a,l),this.thighR&&this.shinR&&this.footR&&this.poseLeg(this.thighR,this.shinR,this.footR,-a,l),this.armL&&this.foreL&&this.poseArm(this.armL,this.foreL,-a,s,-1),this.armR&&this.foreR&&this.poseArm(this.armR,this.foreR,a,s,1),this.spine){const c=qv(n.clip);this.spine.rotation.x+=(c-this.spine.rotation.x)*Math.min(1,t*3)}if(this.neck&&this.spine&&(this.neck.rotation.x=-this.spine.rotation.x*.7),this.pelvis){const c=o?Math.abs(Math.sin(this.phase*2))*.02:0;this.pelvis.position.y=.96+c}if(this.head){const c=r?Math.sin(this.phase*.55)*.55:0;this.head.rotation.x=(s?.12:r?.2:.02)+Math.sin(this.phase*.37)*.04,this.head.rotation.y=Math.max(-.7,Math.min(.7,this.lookAt))*.35+c+Math.sin(this.phase*.23)*.06,this.head.rotation.z=Math.sin(this.phase*.51)*.04}}poseLeg(t,e,n,s,r){t.rotation.x=s*r;const o=.1+Math.max(0,s)*.95;e.rotation.x=o,n.rotation.x=-o*.75}poseArm(t,e,n,s,r){t.rotation.x=(s?.85:.18)+n*(s?.35:.5),t.rotation.z=r*(s?.05:.12),e.rotation.x=(s?.45:.22)+Math.abs(n)*.2}forgetHides(){this.checked.clear()}}function Ui(i,t,e,n,s=-1){const r=new Yt,o=new Z(hx(s<0?t:e,s<0?e:t,i),n);o.position.y=s*i/2,o.castShadow=!0;const a=new Z(new Me(t,8,6),n);return a.castShadow=!0,r.add(o,a),r}function fn(i,t=1,e=1,n=1){return i.scale.set(t,e,n),i.castShadow=!0,i}function lx(){const i=[new lt(.12,0),new lt(.15,.12),new lt(.19,.28),new lt(.17,.4),new lt(.09,.52)],t=new Dr(i,12);return su(t,.008),t}function cx(){const t=[{y:-.26,r:.26},{y:-.12,r:.22},{y:.06,r:.19},{y:.22,r:.185},{y:.37,r:.13},{y:.43,r:.018}],e=[],n=[];for(let r=0;r<t.length;r++){const{r:o,y:a}=t[r];for(let l=0;l<18;l++){const c=l/18*Math.PI*2,h=r===0?Math.sin(l*3.7)*.045:0,u=1+.09*Math.sin(l*1.61+r*2.3);e.push(Math.cos(c)*o*u,a+h,Math.sin(c)*o*u-l%3*.002)}}for(let r=0;r<t.length-1;r++)for(let o=0;o<18;o++){const a=r*18+o,l=r*18+(o+1)%18;n.push(a,l,a+18,l,l+18,a+18)}const s=new Ae;return s.setAttribute("position",new de(e,3)),s.setIndex(n),s.computeVertexNormals(),s}function hx(i,t,e){const n=new me(i,t,e,7,3);return su(n,.004),n}function su(i,t){const e=i.attributes.position;for(let n=0;n<e.count;n++){const s=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.sin(s*21+r*8)*Math.cos(o*17+r*6)*t,l=Math.hypot(s,o)||1;e.setXYZ(n,s+s/l*a,r,o+o/l*a)}i.computeVertexNormals()}function kc(){return{tension:10,stress:10,sinceScare:30,sinceSoft:4,suppress:0,softWindow:0,windowLeft:30}}function ux(i){return Zh(28,14,Ke(i,0,100)/100)}const So=["flicker","whisper","creak","knock","phone","breath","lightOut","radio","drop","thunder"];function dx(i,t){const e={...i},n=Math.max(0,t.dt);t.tookDamage&&(e.suppress=Math.max(e.suppress,8)),e.suppress=Math.max(0,e.suppress-n),e.sinceScare+=n,e.sinceSoft+=n,e.windowLeft-=n,e.windowLeft<=0&&(e.windowLeft=30,e.softWindow=0);const s=1-Ke(t.monsterDist/24,0,1);let r=10;r+=s*44,t.inDark&&(r+=12),t.sprinting&&(r+=6),t.health<45&&(r+=14),r+=Ke(t.story,0,1)*16,t.hiding&&(r-=12),t.monsterDist>30&&(r-=6),r=Ke(r,0,100);const o=1-Math.exp(-n*.4);e.stress=e.stress+(r-e.stress)*o,e.tension=Ke(e.stress+(t.tookDamage?10:0),0,100);let a=null;if(t.blocked){const d=Ke(e.tension/100*(e.suppress>0?.22:1),0,1);return{state:e,event:a,aggression:d}}const l=ux(e.tension),c=e.tension>30?.15+e.tension/100*.7:.02,h=t.rng();if(e.suppress<=0&&e.sinceScare>=l&&h<c*Math.min(n,.5))a={type:"scare"},e.sinceScare=0;else{const d=Zh(10,4,e.tension/100),p=.28+e.tension/120,f=t.rng();e.sinceSoft>=d&&e.softWindow<4&&f<p*Math.min(n,.5)&&(a={type:"soft",kind:So[Math.floor(t.rng()*So.length)%So.length]},e.sinceSoft=0,e.softWindow+=1)}const u=Ke(e.tension/100*(e.suppress>0?.22:1),0,1);return{state:e,event:a,aggression:u}}class fx{dust;lightning=0;constructor(t,e=0){const n=new Ae;n.setAttribute("position",new We(new Float32Array(3),3)),this.dust=new Xh(n,new $a({transparent:!0,opacity:0,size:.01})),this.dust.visible=!1}update(t,e,n,s){this.dust.visible=!1,this.lightning=0}strike(){this.lightning=0}}function px(){return{global:-999,byKind:{}}}function mx(i,t,e,n=!1){if(n||t==="attack")return!0;if(e-i.global<12)return!1;const s=i.byKind[t]??-999,r=t==="fake"?18:34;return e-s>=r}function gx(i,t,e){return{global:e,byKind:{...i.byKind,[t]:e}}}function vx(i){const t=[{k:"whisper",w:3},{k:"fake",w:2.2},{k:"flash",w:i.inDark?1.2:3},{k:"ceiling",w:1.8},{k:"shadow",w:i.inDark?3:1},{k:"behind",w:i.monsterNear?.6:2.6},{k:"door",w:i.doorOpenNear?3.4:0},{k:"still",w:i.inMannequinRoom?4:0}],e=t.reduce((s,r)=>s+r.w,0);let n=i.rng()*e;for(const s of t)if(!(s.w<=0)&&(n-=s.w,n<=0))return s.k;return"whisper"}class xx{constructor(t,e){this.audio=e,this.behindMesh=new Z(new fe(.7,1.6),new vn({color:"#050505",transparent:!0,opacity:.92,depthTest:!1,side:ge})),this.behindMesh.position.set(.15,-.1,.55),this.behindMesh.visible=!1,this.behindMesh.renderOrder=19,t.add(this.behindMesh)}memory=px();fx={trauma:0,flash:0,chroma:0,face:0,behind:0,subtitle:""};behindMesh;kindTimer=0;lastKind=null;lastAt=-999;trigger(t,e,n=!1){return mx(this.memory,t,e,n)?(this.memory=gx(this.memory,t,e),this.lastKind=t,this.lastAt=e,this.kindTimer=t==="attack"||t==="face"?.55:.7,this.fx.trauma=t==="fake"||t==="whisper"?.25:t==="attack"?1:.65,this.fx.chroma=t==="attack"||t==="face"?2.4:1,this.fx.flash=0,this.fx.face=0,this.fx.behind=t==="behind"?1:0,this.behindMesh.visible=this.fx.behind>0,t==="attack"||t==="face"?this.audio.play("scream"):t==="whisper"||t==="behind"?this.audio.play("whisper"):t==="fake"?this.audio.play("door",void 0,{volume:.4}):this.audio.play("sting"),t==="whisper"&&(this.fx.subtitle="…gå herfra…"),t==="behind"&&(this.fx.subtitle="…bag dig."),!0):!1}dynamic(t,e){const n=vx(e);return this.trigger(n,t)?n:null}dismiss(){this.kindTimer=0,this.fx={trauma:0,flash:0,chroma:.35,face:0,behind:0,subtitle:""},this.behindMesh.visible=!1}update(t){this.kindTimer-=t,this.fx.trauma=Math.max(0,this.fx.trauma-t*.8),this.fx.flash=Math.max(0,this.fx.flash-t*2.5),this.fx.chroma=Math.max(.35,this.fx.chroma-t*1.5),this.kindTimer<=0&&(this.fx.face=0,this.fx.behind=0,this.behindMesh.visible=!1,this.fx.subtitle&&(this.fx.subtitle=""))}}const ru=.3,Sr=1.7,_x=1.05,ou=1.62,yx=1,Mx=4.35,bx=7.1;function Sx(i,t,e,n){const s=Math.min(.05,Math.max(0,t.dt)),r={...i,justLanded:!1};if(s<=0)return r;let o=t.crouch||Pc(r.y,r.x,r.z,Sr,e);const a=Math.abs(t.forward)+Math.abs(t.strafe)>.01,l=t.sprint&&!o&&r.stamina>5&&a&&r.grounded,c=o?1.18:l?Mx:2.32;if(l)r.stamina=Ke(r.stamina-bx*s,0,100);else{const P=a?o?5:6.5:11;r.stamina=Ke(r.stamina+P*s,0,100)}t.jump&&r.grounded&&!o&&r.stamina>14&&(r.vy=4.25,r.stamina=Ke(r.stamina-16,0,100),r.grounded=!1);const h=Jh(r.yaw),u=Qh(r.yaw);let d=h.x*t.forward+u.x*t.strafe,p=h.z*t.forward+u.z*t.strafe;const f=Math.hypot(d,p);f>1&&(d/=f,p/=f);const v=d*c,m=p*c,g=r.grounded?14:3.2,S=1-Math.exp(-g*s);r.vx+=(v-r.vx)*S,r.vz+=(m-r.vz)*S;const A=tu(r,{x:r.vx*s,z:r.vz*s},ru,o?_x:Sr,o,e);n(A.x,A.z,r.y)===null?(r.vx=0,r.vz=0):(r.x=A.x,r.z=A.z,r.vx=(r.x-i.x)/s,r.vz=(r.z-i.z)/s);const w=n(r.x,r.z,r.y);return w!==null&&(r.vy-=12.5*s,r.y+=r.vy*s,r.y<=w?(r.justLanded=r.vy<-3.4,r.y=w,r.vy=0,r.grounded=!0):r.grounded=!1),Pc(r.y,r.x,r.z,Sr,e)&&(o=!0),r.crouching=o,r.pitch=Ke(r.pitch,-1.25,1.25),r}function wx(i,t,e,n=11){const s=Ke(e,0,.1),r=1-Math.exp(-Math.max(0,n)*s);return i+(t-i)*r}function Ex(i){return i?yx:ou}function Ta(i,t=.05){return!Number.isFinite(i)||i<=0?0:Math.min(t,i)}function Tx(i=24){const t=new Set,e=[];let n=!1;const s=[];return{on(r){return n?s.push(r):t.add(r),()=>{t.delete(r);const o=s.indexOf(r);o>=0&&s.splice(o,1)}},emit(r){e.push(r),e.length>i&&e.shift(),n=!0;for(const o of t)o(r);n=!1;for(const o of s.splice(0))t.add(o)},recent(){return e.slice()},clear(){e.length=0}}}function Dc(i){let t=i>>>0||1;return{seed:i>>>0||1,next(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},state(){return t},restore(e){t=e>>>0||1}}}function Ic(i,t,e,n,s){return i?iu(t,e,n,Math.cos(.5),16,s):!1}function Ax(i){const t=i.cells.filter(s=>{const r=Math.hypot(s.x-i.player.x,s.z-i.player.z);if(r<7||r>26||Math.abs(s.y-i.player.y)>5||i.recent.some(h=>Math.hypot(h.x-s.x,h.z-s.z)<3.5)||Math.hypot(s.x-i.from.x,s.z-i.from.z)<4)return!1;const o=s.x-i.player.x,a=s.z-i.player.z,l=Math.hypot(o,a)||1;return!((i.forward.x*o+i.forward.z*a)/l>.2&&i.visible(s)||i.visible(s))});if(!t.length)return null;const e=t.filter(s=>Math.hypot(s.x-i.player.x,s.z-i.player.z)>Math.hypot(i.from.x-i.player.x,i.from.z-i.player.z)),n=e.length?e:t;return n[Math.floor(i.rng()*n.length)%n.length]}function ks(){return{jumps:[],shadowAt:-100,slagter:0,slagterT:0,beats:[]}}const Rx=[{id:"door_patient",room:"patientgang",cue:"pass:patient"},{id:"door_operation",room:"operationsstue",cue:"pass:operation"},{id:"arkiv",room:"arkiv",cue:"archive"}];function Cx(i,t){const e={jumps:i.jumps.slice(),shadowAt:i.shadowAt,slagter:i.slagter,slagterT:i.slagterT,beats:(i.beats??[]).slice()},n=[];if(t.room&&t.room!==t.prevRoom)for(const o of Rx)o.room!==t.room||e.jumps.includes(o.id)||(e.jumps.push(o.id),n.push(o.cue));t.powerCut&&t.room==="slagterum"&&e.slagter===0&&(e.slagter=1,e.slagterT=0,n.push("blackout"),n.push("silence")),e.slagter===1?(e.slagterT+=t.dt,e.slagterT>1.35&&(e.slagter=2,e.slagterT=0,n.push("await-turn"))):e.slagter===2?(e.slagterT+=t.dt,t.lookingAtFigure&&(e.slagter=3,e.slagterT=0,n.push("charge"))):e.slagter===3&&(e.slagterT+=t.dt,t.beam?(e.slagter=4,n.push("banish")):e.slagterT>3.2&&(e.slagter=4,n.push("strike")));const s=(t.room==="patientgang"||t.room==="operationsstue")&&e.slagter<4,r=e.slagter>0&&e.slagter<4;return!s&&!r&&t.atDoor&&t.time-e.shadowAt>24&&n.length===0&&(e.shadowAt=t.time,n.push("shadow")),{state:e,cues:n}}const Px=90;function Lc(){return{epoch:1,recoveryUntil:0,pending:[]}}function kx(i){return{epoch:i.epoch+1,recoveryUntil:0,pending:[]}}function Dx(i,t,e){return{...i,recoveryUntil:Math.max(i.recoveryUntil,t+e)}}function Ix(i,t){return i.pending.some(e=>e.id===t.id)?i:{...i,pending:[...i.pending,{...t,epoch:i.epoch}]}}function Lx(i,t){const e=Math.max(0,t.dt);let n=i.pending.filter(a=>a.epoch===i.epoch&&!t.firedIds.includes(a.id));if(e>.5||t.blocked)return e>.5&&(n=n.filter(a=>a.dueTime>t.time)),{state:{...i,pending:n},fired:[]};const r=n.filter(a=>a.dueTime<=t.time&&(a.roomId===""||a.roomId===t.room)).sort((a,l)=>l.priority-a.priority||a.dueTime-l.dueTime).find(a=>a.size==="minor"||t.time>=i.recoveryUntil)??null,o=r?.size==="major";return r?{state:{...i,pending:n.filter(a=>a.id!==r.id),recoveryUntil:o?t.time+Px:i.recoveryUntil},fired:[r]}:{state:{...i,pending:n},fired:[]}}const Ux=new Set(["note_log","note_code","note_generator"]);function Nx(i){const t=[],e=(s,r)=>{i.fired.includes(s)||t.push({id:s,dueTime:i.time,roomId:r,priority:2,group:"major",size:"major"})};return i.time>=25&&i.room==="reception"&&e("reception_wake","reception"),i.readIds.some(s=>Ux.has(s)||s.startsWith("file_"))&&i.room==="arkiv"&&e("arkiv_names","arkiv"),i.room==="obduktion"&&e("obduktion_witness","obduktion"),t}const Fx={reception:"airRumble",patientgang:"waterDrop",operationsstue:"pipeKnock",slagterum:"pipeKnock",arkiv:"airRumble",laboratorium:"airRumble",obduktion:"pipeKnock",personalerum:"airRumble",kaeldergang:"waterDrop",kapel:"distantBell",observation:"airRumble",kammer:"pipeKnock",trappe0:"pipeKnock",trappe1:"pipeKnock",trappe2:"waterDrop"},Uc={x:45.8,y:5.2,z:9.2};function wo(){return{roomId:"",nextAt:8,seq:0}}function Ox(i,t){const e=t==="waterDrop"||t==="distantBell"?.82:.16,n=t==="distantBell"?.78:.22;return{kind:t,x:i.x+i.w*e,y:i.floorY+2.2,z:i.z+i.d*n}}function zx(i,t){const e=t.room,n=e?.id??"",s=n!==i.roomId;let r=i.nextAt;(s||t.dt>.5)&&(r=Math.max(r,t.time+6));const o=e?Fx[e.id]:void 0;if(!e||!o||t.time<r)return{state:{...i,roomId:n,nextAt:r},cue:null};const a=i.seq+1;return{state:{roomId:n,nextAt:t.time+16+a%6,seq:a},cue:Ox(e,o)}}function Bx(i,t,e){return i?t-e>=11:!1}function Gx(i,t){if(Math.abs(t-i)<.001)return!1;const e=i<=.02||i>=.98,n=t>.02&&t<.98;return e&&n}const Dt={0:0,1:4,2:8},Vi=3.5,Ie=.5,ar=.45,Nc="door_stilhed",lr=(i,t,e,n,s,r,o,a,l,c)=>({id:i,name:t,floor:e,x:n,z:s,w:r,d:o,floorMat:a,wallMat:l,light:c}),Ze=[...[["reception","Receptionen","wood","panel","always-warm"],["patientgang","Patientgangen","tile","plaster","always-dim"],["operationsstue","Operationsstuen","tile","tile","power"],["slagterum","Slagterummet","tile","brick","always-red"],["trappe0","Trappeopgang","concrete","damp","always-dim"]].map((i,t)=>lr(i[0],i[1],0,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),...[["arkiv","Arkivrummet","wood","panel","always-dim"],["laboratorium","Det aflåste laboratorium","tile","tile","power"],["obduktion","Obduktionssalen","tile","tile","always-dim"],["personalerum","Det forladte personalerum","carpet","plaster","always-warm"],["trappe1","Trappeopgang","concrete","damp","always-dim"]].map((i,t)=>lr(i[0],i[1],1,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),...[["kaeldergang","Kældergangen","concrete","damp","always-dim"],["kapel","Det mørke kapel","stone","brick","always-candle"],["observation","Observationsrummet","tile","plaster","none"],["kammer","Det sidste kammer","concrete","damp","always-dim"],["trappe2","Trappeopgang","concrete","damp","none"]].map((i,t)=>lr(i[0],i[1],2,t*12,0,t===4?8:12,12,i[2],i[3],i[4])),lr("stilhed","Ud til stilheden",2,36,12,12,6,"concrete","damp","none")],au=[{id:"door_rec_pat",a:"reception",b:"patientgang",kind:"door",signA:"Patientgangen",signB:"Receptionen"},{id:"door_pat_op",a:"patientgang",b:"operationsstue",kind:"door",signA:"Operationsstuen",signB:"Gang"},{id:"door_op_slag",a:"operationsstue",b:"slagterum",kind:"door",signA:"Slagterummet",signB:"Operationsstuen"},{id:"door_slag_trappe",a:"slagterum",b:"trappe0",kind:"door",signA:"Trappe",signB:"Slagterummet"},{id:"door_arkiv_lab",a:"arkiv",b:"laboratorium",kind:"door",locked:!0,keyId:"key_op",signA:"Laboratorium",signB:"Arkivrummet"},{id:"door_lab_obd",a:"laboratorium",b:"obduktion",kind:"door",signA:"Obduktionssalen",signB:"Laboratorium"},{id:"door_obd_pers",a:"obduktion",b:"personalerum",kind:"door",signA:"Personalerum",signB:"Obduktionssalen"},{id:"door_pers_trappe",a:"personalerum",b:"trappe1",kind:"door",signA:"Trappe",signB:"Personalerum"},{id:"door_kael_kapel",a:"kaeldergang",b:"kapel",kind:"door",signA:"Kapellet",signB:"Kældergangen"},{id:"door_kapel_obs",a:"kapel",b:"observation",kind:"door",signA:"Observation",signB:"Kapellet"},{id:"door_obs_kammer",a:"observation",b:"kammer",kind:"door",signA:"Det sidste kammer",signB:"Observation"},{id:"door_kammer_trappe",a:"kammer",b:"trappe2",kind:"door",signA:"Trappe",signB:"Kammeret"},{id:"door_stilhed",a:"kammer",b:"stilhed",kind:"door",locked:!0,signA:"UD TIL STILHEDEN",signB:""}],Aa=[{id:"stair_01",x:50.75,z:.95,w:2.55,d:4.35,fromFloor:0,toFloor:1,axis:"z"},{id:"stair_12",x:50.75,z:6.7,w:2.55,d:4.35,fromFloor:1,toFloor:2,axis:"z"}];function ut(i,t,e,n,s,r,o,a){return{id:i,room:t,kind:e,x:n,z:s,rot:0,w:r,d:o,h:a,block:"always"}}const Ur=[ut("rec_desk","reception","receptiondesk",4,9.5,2.6,.86,1.12),ut("rec_chair","reception","chair",4,8.4,.45,.45,.9),ut("pat_bench","patientgang","bench",18,2.2,1.4,.45,.48),ut("op_table","operationsstue","gurney",30,9.2,1.8,.7,.85),ut("op_cab","operationsstue","cabinet",26.8,2.2,.6,1.4,1.6),ut("slag_table","slagterum","table",42,9.4,1.8,.8,.8),ut("slag_hook","slagterum","beam",40,2.4,2.2,.2,.15),ut("ark_shelf","arkiv","shelf",2.2,9.2,.5,2.4,2),ut("ark_table","arkiv","table",8,2.4,1.2,.7,.75),ut("lab_bench","laboratorium","table",16,9.2,1.6,.7,.9),ut("obd_table","obduktion","gurney",30,9,1.9,.7,.8),ut("pers_sofa","personalerum","sofa",42,9.2,1.6,.7,.7),ut("kap_altar","kapel","altar",18,9.4,1.4,.6,1),ut("obs_desk","observation","desk",30,2.4,1.2,.6,.75),ut("kam_bed","kammer","bed",40,9,1.8,.9,.55),ut("rec_records","reception","recordcabinet",1.15,3.25,1.2,.48,1.8),ut("rec_filing","reception","filing",8.8,2,.72,.56,1.35),ut("rec_sidechair","reception","chair",7.1,9.65,.45,.45,.9),ut("rec_sideboard","reception","sideboard",9.5,9.8,1.35,.52,1),ut("pat_gurney","patientgang","gurney",15.1,9.3,1.9,.7,.85),ut("pat_locker","patientgang","locker",14,2.2,.76,.65,1.8),ut("pat_wheelchair","patientgang","wheelchair",22.3,2,.65,.82,1.1),ut("op_screen","operationsstue","foldscreen",34.7,9.55,1.4,.2,1.95),ut("op_iv","operationsstue","ivstand",27.4,9,.32,.32,1.85),ut("op_trolley","operationsstue","medicalcart",33.6,2.15,.72,.56,.9),ut("slag_locker","slagterum","locker",38.1,9.6,.9,.6,1.8),ut("slag_cart","slagterum","medicalcart",45.4,2.1,.85,.58,.94),ut("slag_shelf","slagterum","shelf",45.5,9.7,.5,2.2,2),ut("ark_file","arkiv","filing",3.7,2,.78,.56,1.4),ut("ark_records","arkiv","recordcabinet",9,9.5,1.4,.48,1.8),ut("ark_chair","arkiv","chair",8,3.5,.46,.46,.92),ut("ark_safe","arkiv","safe",10.2,9.55,.55,.48,.78),ut("lab_cart","laboratorium","medicalcart",22.4,2,.74,.56,.9),ut("lab_screen","laboratorium","foldscreen",21.8,9.5,1.4,.17,1.9),ut("lab_iv","laboratorium","ivstand",13.5,2.3,.32,.32,1.8),ut("obd_cabinet","obduktion","recordcabinet",26.4,2,1.4,.5,1.85),ut("obd_trolley","obduktion","medicalcart",34.3,9.5,.82,.57,.85),ut("obd_screen","obduktion","foldscreen",34.1,2,1.45,.18,1.95),ut("pers_radio","personalerum","sideboard",45.8,9.2,1.1,.5,.9),ut("pers_filing","personalerum","filing",38.2,2.2,.75,.55,1.35),ut("pers_armchair","personalerum","chair",39.4,9.15,.46,.46,.93),ut("kael_shelf","kaeldergang","shelf",2.1,9.55,.5,2.1,1.9),ut("kael_cart","kaeldergang","medicalcart",9.55,2,.8,.57,.9),ut("kael_locker","kaeldergang","locker",7.4,9.65,.74,.56,1.75),ut("kap_pew1","kapel","pew",15,2,1.65,.5,.9),ut("kap_pew2","kapel","pew",20.7,2,1.65,.5,.9),ut("kap_filing","kapel","recordcabinet",22.4,9.6,.75,.45,1.6),ut("obs_screen","observation","foldscreen",26,9.5,1.4,.18,1.9),ut("obs_gurney","observation","gurney",33.6,9.2,1.75,.7,.85),ut("obs_locker","observation","locker",34.4,2,.8,.56,1.8),ut("kam_cart","kammer","medicalcart",45.5,2.15,.8,.56,.9),ut("kam_dresser","kammer","dresser",38.1,2,1.1,.54,1.2),ut("kam_chair","kammer","chair",45.5,9.5,.46,.46,.9),ut("rec_waitbench","reception","bench",2.8,2,1.5,.5,.5),ut("rec_pigeon","reception","shelf",6.35,2.15,.6,.4,1.9),ut("pat_medicine","patientgang","medicalcart",20.15,2.2,.72,.55,.9),ut("pat_cabinet","patientgang","recordcabinet",22.65,9.5,.8,.5,1.55),ut("op_sparecase","operationsstue","shelf",30,2.2,1.3,.42,1.75),ut("op_assistantchair","operationsstue","chair",32,9.35,.46,.46,.85),ut("slag_washstation","slagterum","cabinet",37.25,2.15,.65,.5,1.3),ut("slag_rustbucket","slagterum","barrel",43.3,2.25,.55,.55,.76),ut("ark_filing2","arkiv","filing",5.45,9.45,.75,.54,1.28),ut("ark_bookcase","arkiv","shelf",1.15,2.2,.55,2,2.1),ut("lab_archive","laboratorium","filing",17.1,2.3,.75,.55,1.35),ut("lab_stool","laboratorium","chair",18.6,9.3,.46,.46,.85),ut("obd_cab2","obduktion","cabinet",30.8,2.1,.72,.55,1.55),ut("obd_tray2","obduktion","medicalcart",32.2,9.45,.75,.55,.88),ut("pers_bench","personalerum","bench",43.1,2.15,1.25,.5,.45),ut("pers_wardrobe","personalerum","locker",46.6,2.1,.72,.6,1.8),ut("kael_spares","kaeldergang","cabinet",2.6,2,.75,.55,1.45),ut("kael_cables","kaeldergang","barrel",4.8,2.2,.6,.6,.82),ut("kap_pew3","kapel","pew",15,3.65,1.65,.5,.9),ut("kap_pew4","kapel","pew",20.7,3.65,1.65,.5,.9),ut("obs_supply","observation","medicalcart",27.45,2.2,.76,.56,.85),ut("obs_records","observation","filing",28.15,9.4,.7,.56,1.35),ut("kam_nightstand","kammer","cabinet",42.1,9.45,.68,.5,.88),ut("kam_storage","kammer","shelf",42.2,2,.62,1.15,1.7)],lu=[{id:"bat_gang",room:"patientgang",itemId:"battery",x:20,z:9.2},{id:"bat_pers",room:"personalerum",itemId:"battery",x:44,z:3},{id:"key_op_pick",room:"operationsstue",itemId:"key_op",x:32,z:3},{id:"key_arkiv_pick",room:"arkiv",itemId:"key_arkiv",x:6,z:3.2},{id:"key_kapel_pick",room:"kapel",itemId:"key_kapel",x:14.5,z:9}],Hx=[{id:"dev_generator",kind:"generator",room:"kaeldergang",x:8.8,z:8.35},{id:"dev_safe",kind:"safe",room:"arkiv",x:10.2,z:8.55},{id:"dev_radio",kind:"radio",room:"personalerum",x:45.8,z:8.35}],Vx=[{id:"hide_pat",room:"patientgang",kind:"locker",x:14,z:3.2},{id:"hide_kael",room:"kaeldergang",kind:"locker",x:7.4,z:8.55},{id:"hide_obs",room:"observation",kind:"locker",x:34.4,z:3.05},{id:"hide_kam",room:"kammer",kind:"bed",x:40,z:7.85}],Wx=[{room:"slagterum",kind:"blood",x:40,z:6.5,rot:.2,w:1.4,d:.5},{room:"obduktion",kind:"blood",x:28,z:8,rot:.4,w:1.2,d:.45},{room:"kammer",kind:"puddle",x:42,z:4,rot:0,w:1.1,d:.8}],Xx={};function qx(){Yx();const i=jx(),t=$x(i),e=Zx(t),n=Qx(i,e),s=t_();return{rooms:Ze,doors:i,walls:t,colliders:e,props:Ur,pickups:lu,devices:Hx,hides:Vx,decals:Wx,stairs:Aa,nav:n,lights:s}}function Yx(){for(let t=0;t<Ze.length;t++)for(let e=t+1;e<Ze.length;e++){const n=Ze[t],s=Ze[e];if(n.floor!==s.floor)continue;const r=Math.min(n.x+n.w,s.x+s.w)-Math.max(n.x,s.x),o=Math.min(n.z+n.d,s.z+s.d)-Math.max(n.z,s.z);if(r>.02&&o>.02)throw new Error(`Rum overlapper: ${n.id} og ${s.id}`)}const i=new Set(Ze.map(t=>t.id));for(const t of au){if(!i.has(t.a)||!i.has(t.b))throw new Error(`Forbindelse ${t.id} mangler rum`);if(!cu(qn(t.a),qn(t.b)))throw new Error(`Forbindelse ${t.id} rører ikke`)}for(const t of Ur){const e=qn(t.room);if(!Fc(e,t.x,t.z,.05))throw new Error(`Prop ${t.id} er uden for ${t.room}`)}for(const t of lu){const e=qn(t.room);if(!Fc(e,t.x,t.z,.02))throw new Error(`Pickup ${t.id} er uden for ${t.room}`)}}function qn(i){const t=Ze.find(e=>e.id===i);if(!t)throw new Error(`Ukendt rum ${i}`);return t}function Fc(i,t,e,n=0){return t>=i.x-n&&t<=i.x+i.w+n&&e>=i.z-n&&e<=i.z+i.d+n}function cu(i,t){if(i.floor!==t.floor)return null;const e=Math.max(i.z,t.z),n=Math.min(i.z+i.d,t.z+t.d),s=Math.max(i.x,t.x),r=Math.min(i.x+i.w,t.x+t.w),o=Math.abs(i.x+i.w-t.x)<.03||Math.abs(t.x+t.w-i.x)<.03,a=Math.abs(i.z+i.d-t.z)<.03||Math.abs(t.z+t.d-i.z)<.03;return o&&n-e>.4?{axis:"x",coord:Math.abs(i.x+i.w-t.x)<.03?i.x+i.w:t.x+t.w,min:e,max:n}:a&&r-s>.4?{axis:"z",coord:Math.abs(i.z+i.d-t.z)<.03?i.z+i.d:t.z+t.d,min:s,max:r}:null}function jx(){return au.map(i=>{const t=qn(i.a),e=qn(i.b),n=cu(t,e);if(!n)throw new Error(`Dør ${i.id} uden kant`);const s=n.max-n.min,r=.26;let o=i.width??(i.kind==="arch"?Math.min(2.7,s-.8):1.15);if(o=Math.min(o,s-r*2),o<.82)throw new Error(`Dør ${i.id} er for smal (${o.toFixed(2)} / overlap ${s.toFixed(2)})`);const a=i.at??.5;let l=n.min+s*a;const c=o/2;return l=Math.max(n.min+r+c,Math.min(n.max-r-c,l)),{id:i.id,kind:i.kind,floor:t.floor,axis:n.axis,coord:n.coord,spanMin:l-c,spanMax:l+c,center:l,width:o,locked:!!i.locked,keyId:i.keyId,needsPower:i.needsPower,a:i.a,b:i.b,signA:i.signA,signB:i.signB}})}function $x(i){const t=i.map(n=>({floor:n.floor,axis:n.axis,coord:n.coord,min:n.spanMin,max:n.spanMax})),e=[];for(const n of Ze){const s=[{axis:"z",coord:n.z,min:n.x,max:n.x+n.w},{axis:"z",coord:n.z+n.d,min:n.x,max:n.x+n.w},{axis:"x",coord:n.x,min:n.z,max:n.z+n.d},{axis:"x",coord:n.x+n.w,min:n.z,max:n.z+n.d}];for(const r of s){let o=[[r.min,r.max]],a=!0;for(const l of Ze){if(l.id===n.id||l.floor!==n.floor)continue;const c=Kx(r,l);c&&(a=!1,l.id<n.id&&(o=Oc(o,c.min,c.max)))}for(const l of t)l.floor!==n.floor||l.axis!==r.axis||Math.abs(l.coord-r.coord)>.04||(o=Oc(o,l.min,l.max));for(const[l,c]of o)c-l<.12||e.push({floor:n.floor,axis:r.axis,coord:r.coord,min:l,max:c,mat:n.wallMat,exterior:a,roomId:n.id})}}return e}function Kx(i,t){if(i.axis==="x"){const o=t.x+t.w,a=t.x;if(Math.abs(o-i.coord)>.03&&Math.abs(a-i.coord)>.03)return null;const l=Math.max(i.min,t.z),c=Math.min(i.max,t.z+t.d);return c-l<.2?null:{min:l,max:c}}const e=t.z+t.d,n=t.z;if(Math.abs(e-i.coord)>.03&&Math.abs(n-i.coord)>.03)return null;const s=Math.max(i.min,t.x),r=Math.min(i.max,t.x+t.w);return r-s<.2?null:{min:s,max:r}}function Oc(i,t,e){const n=[];for(const[s,r]of i){if(e<=s||t>=r){n.push([s,r]);continue}t>s&&n.push([s,Math.max(s,t)]),e<r&&n.push([Math.min(r,e),r])}return n}function Zx(i){const t=[];for(const n of i){const s=Dt[n.floor],r=s+Vi;n.axis==="x"?t.push({minX:n.coord-.22/2,maxX:n.coord+.22/2,minY:s,maxY:r,minZ:n.min,maxZ:n.max,id:"wall"}):t.push({minX:n.min,maxX:n.max,minY:s,maxY:r,minZ:n.coord-.22/2,maxZ:n.coord+.22/2,id:"wall"})}for(const n of Ur){if(n.block==="none")continue;const s=qn(n.room),{bw:r,bd:o}=hu(n.w,n.d,n.rot),a=Dt[s.floor]+(n.yOff??0);t.push({minX:n.x-r/2,maxX:n.x+r/2,minY:a,maxY:a+n.h,minZ:n.z-o/2,maxZ:n.z+o/2,id:n.id,standOnly:n.block==="stand",blocksUntilUnlock:n.blocksUntilUnlock})}return t}function hu(i,t,e){const n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e));return{bw:i*n+t*s,bd:i*s+t*n}}function Jx(i,t){if(i.kind!=="door"||t>.28)return null;const e=Dt[i.floor],n=.16;return i.axis==="x"?{minX:i.coord-n/2,maxX:i.coord+n/2,minY:e,maxY:e+2.55,minZ:i.spanMin,maxZ:i.spanMax,id:i.id}:{minX:i.spanMin,maxX:i.spanMax,minY:e,maxY:e+2.55,minZ:i.coord-n/2,maxZ:i.coord+n/2,id:i.id}}function cr(i,t){return i.kind==="arch"?!1:!!(i.locked&&!t.has(i.id))}function ps(i,t,e){const n=i.colliders.filter(s=>!s.blocksUntilUnlock||!t.has(s.blocksUntilUnlock));for(const s of i.doors){const r=Jx(s,e.get(s.id)??0);r&&n.push(r)}return n}function Qx(i,t){const e=[],n=new Map,s=l=>{const c={...l,id:e.length,links:[]};return e.push(c),c},r=(l,c,h)=>{for(const u of Ur){if(u.block==="none"||u.blocksUntilUnlock||qn(u.room).floor!==h)continue;const{bw:d,bd:p}=hu(u.w,u.d,u.rot),f=.12;if(Math.abs(l-u.x)<=d/2+f&&Math.abs(c-u.z)<=p/2+f)return!0}return!1},o=(l,c)=>{for(const h of Aa)if(l>=h.x-.12&&l<=h.x+h.w+.12&&c>=h.z-.12&&c<=h.z+h.d+.12)return!0;return!1};for(const l of Ze){const c=Dt[l.floor],h=Math.floor(l.x/Ie)-1,u=Math.floor((l.x+l.w)/Ie)+1,d=Math.floor(l.z/Ie)-1,p=Math.floor((l.z+l.d)/Ie)+1;for(let f=h;f<=u;f++)for(let v=d;v<=p;v++){const m=(f+.5)*Ie,g=(v+.5)*Ie;if(m<l.x+ar||m>l.x+l.w-ar||g<l.z+ar||g>l.z+l.d-ar||o(m,g)||r(m,g,l.floor))continue;const S=`${f},${v},${l.floor}`;if(n.has(S))continue;const A=s({ix:f,iz:v,x:m,y:c,z:g,floor:l.floor});n.set(S,A)}}for(const l of i){const h=l.width*.4,u=l.axis==="x"?l.coord-1.05:l.center-h,d=l.axis==="x"?l.coord+1.05:l.center+h,p=l.axis==="z"?l.coord-1.05:l.center-h,f=l.axis==="z"?l.coord+1.05:l.center+h,v=Math.floor(u/Ie)-1,m=Math.floor(d/Ie)+1,g=Math.floor(p/Ie)-1,S=Math.floor(f/Ie)+1;for(let A=v;A<=m;A++)for(let y=g;y<=S;y++){const w=(A+.5)*Ie,P=(y+.5)*Ie;if(w<u||w>d||P<p||P>f||r(w,P,l.floor))continue;const T=`${A},${y},${l.floor}`;if(n.has(T))continue;const x=s({ix:A,iz:y,x:w,y:Dt[l.floor],z:P,floor:l.floor,doorId:l.kind==="arch"?void 0:l.id});n.set(T,x)}}const a=(l,c)=>{if(l.id===c.id)return;const h=Math.hypot(l.x-c.x,l.z-c.z,(l.y-c.y)*.65);l.links.some(u=>u.to===c.id)||l.links.push({to:c.id,cost:h}),c.links.some(u=>u.to===l.id)||c.links.push({to:l.id,cost:h})};for(const l of e)if(!l.stair)for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){if(c===0&&h===0)continue;const u=n.get(`${l.ix+c},${l.iz+h},${l.floor}`);if(!u||u.stair||u.id<l.id)continue;if(Math.abs(c)===1&&Math.abs(h)===1){const p=n.get(`${l.ix+c},${l.iz},${l.floor}`),f=n.get(`${l.ix},${l.iz+h},${l.floor}`);if(!p||!f||p.stair||f.stair)continue}Math.hypot(l.x-u.x,l.z-u.z)>.92||a(l,u)}for(const l of Aa){const c=[],h=l.axis==="z"?l.d:l.w,u=Math.max(2,Math.round(h/Ie));for(let d=0;d<=u;d++){const p=d/u,f=l.axis==="z"?l.x+l.w*.5:l.x+p*l.w,v=l.axis==="z"?l.z+p*l.d:l.z+l.d*.5,m=Dt[l.fromFloor]+p*(Dt[l.toFloor]-Dt[l.fromFloor]),g=m<2?-1:m<6?0:1;c.push(s({ix:Math.floor(f/Ie),iz:Math.floor(v/Ie),x:f,y:m,z:v,floor:g,stair:!0}))}for(let d=0;d<c.length-1;d++)a(c[d],c[d+1]);zc(c[0],l.fromFloor,n,e,t),zc(c[c.length-1],l.toFloor,n,e,t)}return{nodes:e,cellSize:Ie}}function zc(i,t,e,n,s){const r=[];for(const o of n){if(o.stair||o.floor!==t)continue;Math.hypot(o.x-i.x,o.z-i.z)<3.4&&r.push(o)}r.sort((o,a)=>Math.hypot(o.x-i.x,o.z-i.z)-Math.hypot(a.x-i.x,a.z-i.z));for(const o of r){const a=(o.y+i.y)*.5+.4,l={x:i.x,y:a,z:i.z},c={x:o.x,y:a,z:o.z};let h=!1;for(const d of s)if(!d.standOnly&&!(d.maxY<a-.2||d.minY>a+.2)&&eu(l,c,d)){h=!0;break}if(h)continue;const u=Math.hypot(o.x-i.x,o.z-i.z,(o.y-i.y)*.65);i.links.some(d=>d.to===o.id)||i.links.push({to:o.id,cost:u}),o.links.some(d=>d.to===i.id)||o.links.push({to:i.id,cost:u});return}throw new Error(`Trappe ende kunne ikke forbindes (floor ${t} @ ${i.x.toFixed(1)},${i.z.toFixed(1)})`)}function t_(){const i=[];for(const t of Ze){if(t.light==="none")continue;e_(t).forEach((n,s)=>{const r=n_(t.light);i.push({id:`${t.id}_${s}`,room:t.id,x:n.x,z:n.z,y:Dt[t.floor]+(t.outdoors?2.4:2.7),color:r.color,intensity:r.intensity,distance:r.distance,mode:r.mode,flicker:r.flicker})})}return i}function e_(i){return i.id==="reception"?[{x:i.x+2.25,z:i.z+3},{x:i.x+6.05,z:i.z+6.1},{x:i.x+9.2,z:i.z+9}]:i.lightAt?[i.lightAt]:Math.max(i.w,i.d)>18?i.w>=i.d?[{x:i.x+i.w*.33,z:i.z+i.d*.5},{x:i.x+i.w*.67,z:i.z+i.d*.5}]:[{x:i.x+i.w*.5,z:i.z+i.d*.33},{x:i.x+i.w*.5,z:i.z+i.d*.67}]:[{x:i.x+i.w*.5,z:i.z+i.d*.5}]}function n_(i){switch(i){case"always-warm":return{color:"#f0c49f",intensity:5.7,distance:9.5,mode:"always",flicker:!0};case"always-dim":return{color:"#cbbfba",intensity:3.2,distance:7.5,mode:"always",flicker:!0};case"always-candle":return{color:"#ff9d62",intensity:3.9,distance:7,mode:"always",flicker:!0};case"always-red":return{color:"#d4473f",intensity:3.8,distance:7.5,mode:"always",flicker:!0};case"secret":return{color:"#e1c7a6",intensity:5,distance:8,mode:"secret",flicker:!0};case"power":return{color:"#b5c6ce",intensity:5.1,distance:9,mode:"power",flicker:!1};default:return{color:"#ffffff",intensity:0,distance:1,mode:"always",flicker:!1}}}function i_(i,t,e){if(t<i.x||t>i.x+i.w||e<i.z||e>i.z+i.d)return null;const n=i.axis==="z"?(e-i.z)/i.d:(t-i.x)/i.w,s=Dt[i.fromFloor],r=Dt[i.toFloor],o=Math.max(0,Math.min(1,n));return s+o*(r-s)}function ms(i,t,e,n){for(const o of i.stairs){const a=i_(o,t,e);if(a!==null)return a}let s=null,r=1e9;for(const o of i.rooms){if(t<o.x||t>o.x+o.w||e<o.z||e>o.z+o.d)continue;const a=Dt[o.floor],l=Math.abs(a-n);l<r&&(r=l,s=a)}return s}function Vn(i,t,e,n){let s=null,r=1e9;for(const o of i.rooms){if(t<o.x||t>o.x+o.w||e<o.z||e>o.z+o.d)continue;const a=Math.abs(Dt[o.floor]-n);a<r&&(r=a,s=o)}return s}function s_(i,t,e){const n=new Set(["yard","tunnel"]);e||n.add("secret");const s=[];for(const r of i.rooms){if(!t(r.floor)||n.has(r.id))continue;const o=Xx[r.id],a=o?o.x:r.x+r.w*.5,l=o?o.z:r.z+r.d*.5;s.push({x:a,y:Dt[r.floor],z:l})}return s}function uu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ae;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Bc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let v=0;v<o[h].length;++v)p.push(o[h][v][d]);const f=Bc(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}return l}function Bc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new We(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<e;f++){const v=h.getComponent(d,f);a.setComponent(d+u,f,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const du=[{id:"worn_planks",author:"Dimitrios Savva",page:"https://polyhaven.com/a/worn_planks",slots:["wood"],tint:"#e4d0b4",normal:.55},{id:"brown_planks_05",author:"Rob Tuytel",page:"https://polyhaven.com/a/brown_planks_05",slots:["panel","door","trim"],tint:"#c9aa86",normal:.4},{id:"beige_wall_001",author:"Dimitrios Savva, Rico Cilliers",page:"https://polyhaven.com/a/beige_wall_001",slots:["plaster"],tint:"#ddd4c8",normal:.35},{id:"painted_plaster_wall",author:"Amal Kumar",page:"https://polyhaven.com/a/painted_plaster_wall",slots:["ceiling"],tint:"#c8c2b8",normal:.3},{id:"concrete_wall_001",author:"Dimitrios Savva, Rico Cilliers",page:"https://polyhaven.com/a/concrete_wall_001",slots:["damp"],tint:"#aeb5ae",normal:.45},{id:"red_brick_03",author:"Rob Tuytel",page:"https://polyhaven.com/a/red_brick_03",slots:["brick"],tint:"#e0b5a4",normal:.7},{id:"old_linoleum_flooring_01",author:"Charlotte Baglioni",page:"https://polyhaven.com/a/old_linoleum_flooring_01",slots:["tileFloor"],tint:"#d5d0c6",normal:.25},{id:"long_white_tiles",author:"Jenelle van Heerden, Sergej Majboroda",page:"https://polyhaven.com/a/long_white_tiles",slots:["tileWall"],tint:"#e4ebe6",normal:.35},{id:"concrete_floor_worn_001",author:"Dimitrios Savva, Rico Cilliers",page:"https://polyhaven.com/a/concrete_floor_worn_001",slots:["concrete","stone"],tint:"#c9c5bc",normal:.55},{id:"dirty_carpet",author:"Rohit Seervi",page:"https://polyhaven.com/a/dirty_carpet",slots:["carpet"],tint:"#b3a898",normal:.2,repeat:3}],Gc=new Set;async function r_(){const i=new rv,t=new Map;return await Promise.all(du.map(async e=>{const[n,s,r]=await Promise.all([i.loadAsync(`/textures/cc0/${e.id}_diff.jpg`),i.loadAsync(`/textures/cc0/${e.id}_rough.jpg`),i.loadAsync(`/textures/cc0/${e.id}_nor_gl.jpg`)]);Eo(n,!0,e.repeat??1),Eo(s,!1,e.repeat??1),Eo(r,!1,e.repeat??1),t.set(e.id,{map:n,rough:s,normal:r})})),t}function o_(i,t){let e=0;for(const n of du){const s=t.get(n.id);if(s)for(const r of n.slots){const o=i[r];o instanceof pt&&(To(o.map),To(o.roughnessMap),To(o.normalMap),o.map=s.map,o.roughnessMap=s.rough,o.normalMap=s.normal,o.normalScale.set(n.normal,n.normal),o.color.set(n.tint),o.needsUpdate=!0,e++)}}return e}function Eo(i,t,e){i.colorSpace=t?_e:mn,i.wrapS=i.wrapT=jn,i.repeat.set(e,e),i.anisotropy=8,i.needsUpdate=!0}function To(i){!i||Gc.has(i)||(Gc.add(i),i.dispose())}function Ra(i=512){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");if(!e)throw new Error("Canvas 2D er ikke tilgængelig");return{c:t,g:e,size:i}}function Hc(i,t){const e=new Float32Array(t*t);for(let n=0;n<e.length;n++)e[n]=i();return e}function a_(i,t,e,n){const s=(e%t+t)%t,r=(n%t+t)%t,o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=(o+1)%t,u=(a+1)%t,d=i[a*t+o],p=i[a*t+h],f=i[u*t+o],v=i[u*t+h];return d+(p-d)*l+(f-d)*c+(d-p-f+v)*l*c}function $e(i,t,e,n){let s=0,r=.5,o=1;for(let a=0;a<5;a++)s+=r*a_(i,t,e*o%t,n*o%t),o*=2,r*=.5;return s}function Ca(i,t=!0,e=!0){const n=new Yi(i);return n.colorSpace=e?_e:mn,n.wrapS=n.wrapT=t?jn:Xn,n.anisotropy=4,n.needsUpdate=!0,n}function Ao(i,t,e,n,s){i.strokeStyle=`rgba(20,16,14,${s})`,i.lineWidth=1;for(let r=0;r<n;r++){let o=t()*e,a=t()*e;i.beginPath(),i.moveTo(o,a);const l=6+Math.floor(t()*14);for(let c=0;c<l;c++)o+=(t()-.5)*28,a+=(t()-.3)*22,i.lineTo(o,a);i.stroke()}}function Ue(i,t){const e=Hi(t),n=Hc(e,128),s=Ra();i(s.g,s.size,n,e);const r=Ra(256),o=Hc(Hi(t^2654435769),64),a=r.g.createImageData(256,256);for(let l=0;l<256;l++)for(let c=0;c<256;c++){const h=$e(o,64,c/4,l/4),u=Math.max(0,Math.min(255,150+h*90)),d=(l*256+c)*4;a.data[d]=a.data[d+1]=a.data[d+2]=u,a.data[d+3]=255}return r.g.putImageData(a,0,0),{map:Ca(s.c,!0,!0),rough:Ca(r.c,!0,!1)}}function Ne(i,t,e,n={}){return new pt({map:i,roughnessMap:t,color:e,roughness:.92,metalness:.02,...n})}function l_(){const i=Ue((y,w,P)=>{y.fillStyle="#8c847a",y.fillRect(0,0,w,w);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.35,x*.35),M=Math.min(1,x/w)*.35+(x>w*.82?(x/w-.82)*1.4:0),k=Math.exp(-((_-180)**2+(x-300)**2)/18e3)*.25,I=(x*w+_)*4,H=.78+b*.28-M*.45-k;T.data[I]*=H,T.data[I+1]*=H*.98,T.data[I+2]*=H*.94}y.putImageData(T,0,0),Ao(y,Hi(3),w,18,.35)},11),t=Ue((y,w,P)=>{y.fillStyle="#667064",y.fillRect(0,0,w,w);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.4,x*.5),M=Math.sin(_*.2)*.5+.5,k=x/w,I=(x*w+_)*4,H=.7+b*.25-k*.35*M;T.data[I]=T.data[I]*H*.85,T.data[I+1]=T.data[I+1]*H,T.data[I+2]=T.data[I+2]*H*.8}y.putImageData(T,0,0)},19),e=Ue((y,w)=>{y.fillStyle="#4a302c",y.fillRect(0,0,w,w);const P=64,T=30;for(let x=0;x<w/T+1;x++)for(let _=0;_<w/P+2;_++){const b=x%2?P/2:0,M=90+(x*13+_*7)%40;y.fillStyle=`rgb(${M+40},${M*.45},${M*.38})`,y.fillRect(_*P-b+2,x*T+2,P-4,T-4)}Ao(y,Hi(8),w,8,.4)},23),n=Ue((y,w,P)=>{y.fillStyle="#6b5342",y.fillRect(0,0,w,w),y.strokeStyle="rgba(30,20,12,0.45)";for(let x=0;x<w;x+=96)y.strokeRect(x+8,8,80,w-16),y.strokeRect(x+16,20,64,w-40);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.8,x*.15),M=(x*w+_)*4,k=.85+b*.2;T.data[M]*=k,T.data[M+1]*=k,T.data[M+2]*=k*.9}y.putImageData(T,0,0)},29),s=Ue((y,w)=>{y.fillStyle="#8a8780",y.fillRect(0,0,w,w);const P=64;for(let T=0;T<w;T+=P)for(let x=0;x<w;x+=P){const _=(x*3+T*5)%17/40;y.fillStyle=`rgba(60,58,52,${.05+_})`,y.fillRect(x+2,T+2,P-4,P-4),(x+T)%(P*5)===0&&(y.strokeStyle="rgba(40,30,28,0.45)",y.strokeRect(x+8,T+8,P-16,P-16))}},31),r=Ue((y,w,P)=>{y.fillStyle="#6a6762",y.fillRect(0,0,w,w);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.5,x*.5),M=(x*w+_)*4,k=.75+b*.4;T.data[M]*=k,T.data[M+1]*=k,T.data[M+2]*=k}y.putImageData(T,0,0),Ao(y,Hi(4),w,10,.4)},37),o=Ue((y,w,P)=>{for(let x=0;x<w;x+=48){const _=70+x%96;y.fillStyle=`rgb(${_+30},${_*.62},${_*.38})`,y.fillRect(0,x,w,46),y.fillStyle="rgba(20,12,8,0.35)",y.fillRect(0,x+45,w,3)}const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.15,x*1.4),M=(x*w+_)*4,k=.82+b*.28;T.data[M]*=k,T.data[M+1]*=k,T.data[M+2]*=k}y.putImageData(T,0,0)},41),a=Ue((y,w,P)=>{y.fillStyle="#7c776f",y.fillRect(0,0,w,w);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.22,x*.22),M=(Math.floor(_/80)+Math.floor(x/80))%2?.92:1,k=(x*w+_)*4,I=(.72+b*.35)*M;T.data[k]*=I,T.data[k+1]*=I,T.data[k+2]*=I*.95}y.putImageData(T,0,0)},43),l=Ue((y,w,P)=>{y.fillStyle="#5a2c30",y.fillRect(0,0,w,w);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.9,x*.9),M=Math.exp(-((_-w/2)**2)/4e4)*.2,k=(x*w+_)*4,I=.75+b*.35+M;T.data[k]*=I,T.data[k+1]*=I*.9,T.data[k+2]*=I*.88}y.putImageData(T,0,0)},47),c=Ue((y,w)=>{y.fillStyle="#6e6b64",y.fillRect(0,0,w,w);const P=72;for(let T=0;T<w;T+=P)for(let x=0;x<w;x+=P){const _=150+(x*9+T*3)%50;y.fillStyle=`rgb(${_},${_-4},${_-10})`,y.fillRect(x+2,T+2,P-4,P-4),(x/P+T/P)%7===0&&(y.fillStyle="rgba(40,20,16,0.25)",y.fillRect(x+10,T+10,P-20,P-20))}},53),h=Ue((y,w,P)=>{y.fillStyle="#5a564e",y.fillRect(0,0,w,w);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.6,x*.2),M=$e(P,128,_*.1+20,x*.1)>.62?.35:0,k=(x*w+_)*4;T.data[k]=90*(.7+b*.4)+M*80,T.data[k+1]=82*(.7+b*.3)+M*30,T.data[k+2]=70*(.7+b*.3)}y.putImageData(T,0,0)},59),u=Ue((y,w,P)=>{y.fillStyle="#6d4e46",y.fillRect(0,0,w,w);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*1.2,x*1.2),M=Math.sin(x*.4)*.04,k=(x*w+_)*4,I=.8+b*.3+M;T.data[k]*=I,T.data[k+1]*=I,T.data[k+2]*=I}y.putImageData(T,0,0)},61),d=Ue((y,w,P)=>{y.fillStyle="#74716b",y.fillRect(0,0,w,w);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.3,x*.3),M=Math.exp(-((_-200)**2+(x-220)**2)/9e3)*.45,k=(x*w+_)*4,I=.8+b*.15-M;T.data[k]*=I,T.data[k+1]*=I*(1-M*.3),T.data[k+2]*=I*(1-M*.4)}y.putImageData(T,0,0)},67),p=Ue((y,w)=>{y.fillStyle="#3a312a",y.fillRect(0,0,w,w)},71),f=Ue((y,w,P)=>{y.fillStyle="#4e3b2e",y.fillRect(0,0,w,w),y.strokeStyle="rgba(20,12,8,0.6)",y.lineWidth=6,y.strokeRect(28,28,w-56,w*.42),y.strokeRect(28,w*.5,w-56,w*.42);const T=y.getImageData(0,0,w,w);for(let x=0;x<w;x++)for(let _=0;_<w;_++){const b=$e(P,128,_*.2,x*.8),M=(x*w+_)*4,k=.85+b*.25;T.data[M]*=k,T.data[M+1]*=k,T.data[M+2]*=k}y.putImageData(T,0,0)},73),v=Ra();{const y=v.g;y.clearRect(0,0,512,512);const w=Hi(99);y.fillStyle="rgba(90,8,10,0.0)";for(let P=0;P<40;P++)y.fillStyle=`rgba(${80+w()*40},${6+w()*8},8,${.25+w()*.55})`,y.beginPath(),y.ellipse(40+w()*430,180+w()*160,20+w()*80,8+w()*24,w()*3,0,Math.PI*2),y.fill();y.fillStyle="rgba(60,4,6,0.7)",y.beginPath(),y.ellipse(256,270,180,36,.2,0,Math.PI*2),y.fill()}const m=Ca(v.c,!1,!0),g=new pt({map:m,transparent:!0,depthWrite:!1,roughness:.45,metalness:.05,color:"#7a1014",polygonOffset:!0,polygonOffsetFactor:-2}),S=new pt({color:"#141820",roughness:.15,metalness:.4,transparent:!0,opacity:.45,emissive:"#0a1018",emissiveIntensity:.2}),A={plaster:Ne(i.map,i.rough,"#ffffff"),damp:Ne(t.map,t.rough,"#ffffff"),brick:Ne(e.map,e.rough,"#ffffff"),panel:Ne(n.map,n.rough,"#ffffff"),tileWall:Ne(s.map,s.rough,"#ffffff",{roughness:.55}),concrete:Ne(r.map,r.rough,"#ffffff"),wood:Ne(o.map,o.rough,"#ffffff",{roughness:.78}),stone:Ne(a.map,a.rough,"#ffffff"),carpet:Ne(l.map,l.rough,"#ffffff",{roughness:1}),tileFloor:Ne(c.map,c.rough,"#ffffff",{roughness:.42,metalness:.08}),metal:Ne(h.map,h.rough,"#ffffff",{roughness:.55,metalness:.45}),fabric:Ne(u.map,u.rough,"#ffffff",{roughness:.95}),ceiling:Ne(d.map,d.rough,"#ffffff"),trim:Ne(p.map,p.rough,"#ffffff",{roughness:.7}),door:Ne(f.map,f.rough,"#ffffff",{roughness:.65}),blood:g,glass:S,eye:new pt({color:"#200000",emissive:"#ff1a12",emissiveIntensity:2.4,roughness:.3}),monster:new pt({color:"#0c0b0d",roughness:.84,metalness:.06}),dispose(){const y=new Set,w=P=>{!P||y.has(P)||(y.add(P),P.dispose())};for(const P of Object.values(A))if(P instanceof xn){const T=P;w(T.map),w(T.roughnessMap),w(T.normalMap),T.dispose()}}};return A}function c_(i,t){const e=new Yt;e.name="SktAgnes_SetDressing_V2";const n=new pt({color:"#4f4940",metalness:.65,roughness:.88}),s=new pt({color:"#242528",roughness:.94,metalness:.22}),r=new pt({color:"#b1a48b",roughness:1,side:ge}),o=new pt({color:"#2f3935",transparent:!0,opacity:.65,metalness:.23,roughness:.24}),a=new pt({color:"#4e4844",roughness:1,side:ge}),l=new vn({color:"#241916",transparent:!0,opacity:.43,depthWrite:!1}),c=new Set,h=[n,s,r,o,a,l],u=(m,g,S,A,y,w,P)=>{const T=new Z(new It(m,g,S),P);return T.position.set(A,y,w),T.castShadow=!0,T.receiveShadow=!0,e.add(T),T},d=(m,g,S,A)=>{const y=g.clone().sub(m),w=new Z(new me(S,S,y.length(),7),A);w.position.copy(m).addScaledVector(y,.5),w.quaternion.setFromUnitVectors(new U(0,1,0),y.normalize()),w.castShadow=!0,e.add(w)},p=(m,g,S,A)=>{const y=document.createElement("canvas");y.width=384,y.height=160;const w=y.getContext("2d");if(!w)return;w.fillStyle="#aaa08d",w.fillRect(0,0,384,160),w.fillStyle="#34312d",w.fillRect(12,12,360,136),w.strokeStyle="#655f53",w.lineWidth=3,w.strokeRect(24,25,335,110),w.textAlign="center",w.fillStyle="#c6b39a",w.font="bold 29px Georgia",w.fillText(m,192,76),w.font="16px monospace",w.fillText("SKT. AGNES  •  1987",192,107);const P=new Yi(y);P.colorSpace=_e,c.add(P);const T=new pt({map:P,roughness:.93});h.push(T);const x=new Z(new fe(.96,.4),T);x.position.set(g,S,A),e.add(x)},f={reception:"MODTAGELSE",patientgang:"PATIENTER",operationsstue:"STERILT",slagterum:"FORBUDT",arkiv:"JOURNALER",laboratorium:"LABORATORIUM",obduktion:"SEKTIONSSTUE",personalerum:"PERSONALE",kaeldergang:"KÆLDER",kapel:"STILHED",observation:"OBSERVATION",kammer:"ISOLATION",stilhed:"UDGANG",trappe0:"ETAGE 1",trappe1:"ETAGE 2",trappe2:"ETAGE 3"},v={reception:[4,.83,9.5],operationsstue:[30,.91,9.2],slagterum:[42,.86,9.4],arkiv:[8,.8,2.4],laboratorium:[16,.97,9.2],obduktion:[30,.88,9],personalerum:[45.8,.96,9.2],observation:[30,.82,2.4]};for(const m of t){if(m.outdoors)continue;const g=Dt[m.floor],S=Ea("set-dressing-"+m.id)>>>0,A=_=>((S^_*2654435761)>>>0)%1e3/1e3,y=g+Vi-.34,w=m.z+.19;d(new U(m.x+.4,y,w),new U(m.x+m.w-.4,y,w),.034,n);for(let _=1;_<=3;_++){const b=m.x+m.w*_/4;u(.08,.13,.11,b,y,w-.03,s)}p(f[m.id]??"AFDELING",m.x+Math.min(m.w-1.3,1.75),g+1.68,m.z+.145);for(let _=0;_<4;_++){const b=m.x+.75+_*.14+A(_+3)*.4,M=m.z+.7+A(_+7)*.65,k=new Z(new fe(.21+A(_+11)*.14,.19),r);k.rotation.x=-Math.PI/2,k.rotation.z=(A(_+17)-.5)*1,k.position.set(b,g+.079+_*5e-4,M),k.receiveShadow=!0,e.add(k)}const P=new Z(new Ir(.27+A(19)*.38,13),l);P.rotation.x=-Math.PI/2,P.position.set(m.x+m.w*.77,g+.081,m.z+1.15),P.scale.set(1.5,.65,1),e.add(P);const T=new Z(new fe(.54,.28),a);T.rotation.x=-Math.PI/2,T.rotation.z=A(41),T.position.set(m.x+m.w-1.1,g+.085,m.z+m.d-.8),e.add(T);const x=v[m.id];if(x){const[_,b,M]=x,k=g+b;for(let I=0;I<4;I++)u(.28,.012,.2,_-.38+I*.03,k+I*.014,M-.08,I%2?r:a);u(.3,.035,.16,_+.34,k+.025,M+.12,s);for(let I=0;I<3;I++){const H=new Z(new me(.028,.032,.13+I*.028,8),o);H.position.set(_+.23+I*.09,k+.115+I*.013,M-.14),H.castShadow=!0,e.add(H)}}}return i.add(e),()=>{i.remove(e),e.traverse(m=>{m instanceof Z&&m.geometry.dispose()}),h.forEach(m=>m.dispose()),c.forEach(m=>m.dispose())}}const h_={reception:"Efterladt nattevagt og slidt administrationsskranke",patientgang:"Forladte patienter og nummererede døre",operationsstue:"Afbrudt indgreb og klinisk metal",slagterum:"Isoleret vaskeområde, kroge og forseglede beholdere",arkiv:"Overfyldt journalarkiv og glemte navne",laboratorium:"Forældet kemiudstyr og registreringsapparater",obduktion:"Obduktionsinstrumenter og kolde stålflader",personalerum:"Sidste kaffepause, radio og vagtbytter",kaeldergang:"Våd teknik, tre sikringer og generator",kapel:"Slidt kapel, 1907 og støvede votivlys",observation:"Observationsglas og patientfiksering",kammer:"Tom journalreol, isolationsseng og udgangsspor",trappe0:"Slidte gelændere og trappeskilte",trappe1:"Fugtskjolder og nedlagt el",trappe2:"Tunge beslag og mørk trappe",stilhed:"Udgang, regn og en sidste tung lås"};function u_(i,t){const e={wood:new pt({color:"#4c382e",roughness:.88}),rust:new pt({color:"#5b4137",metalness:.57,roughness:.79}),enamel:new pt({color:"#596862",metalness:.18,roughness:.73}),porcelain:new pt({color:"#aaa89a",metalness:.02,roughness:.88}),paper:new pt({color:"#b2a48b",roughness:1}),ink:new pt({color:"#1a1b1b",roughness:.98}),cloth:new pt({color:"#4b4744",roughness:1,side:ge}),brass:new pt({color:"#857352",metalness:.72,roughness:.56}),glass:new pt({color:"#465d59",metalness:.08,roughness:.2,transparent:!0,opacity:.66}),stain:new pt({color:"#29241d",roughness:1,transparent:!0,opacity:.48,depthWrite:!1,side:ge}),glow:new pt({color:"#b0a084",emissive:"#806b48",emissiveIntensity:.15,roughness:.83})},n={box:new It(1,1,1),cylinder:new me(.5,.5,1,10),sphere:new Me(.5,10,8),torus:new $n(.5,.09,6,12),sheet:new fe(1,1)},s=[],r=(f,v,m,g,S,A,y,w,P,T=0,x=0,_=0)=>{const b=new Kt,M=new U(f.x+g,Dt[f.floor]+S,f.z+A),k=new Kn().setFromEuler(new en(x,T,_,"XYZ"));b.compose(M,k,new U(y,w,P)),s.push({shape:v,finish:m,matrix:b})},o=(f,v,m,g,S,A,y,w,P=0)=>r(f,"box",v,m,g,S,A,y,w,P),a=(f,v,m,g,S=1)=>{r(f,"cylinder","glass",v,m+.1*S,g,.11*S,.2*S,.11*S),o(f,"rust",v,m+.21*S,g,.12*S,.025*S,.12*S)},l=(f,v,m,g,S)=>{for(let A=0;A<S;A++)o(f,A%3===0?"cloth":"paper",v+A*.045,m+.028+A*.013,g,.36,.012,.23,(A%3-1)*.035)},c=(f,v,m,g)=>{o(f,"ink",v,m,g,.32,.22,.08),r(f,"sphere","glow",v-.075,m+.035,g+.05,.045,.045,.045),r(f,"cylinder","brass",v+.075,m+.035,g+.05,.08,.04,.08,0,Math.PI/2)},h=(f,v,m)=>{o(f,"wood",v,2.18,m,.49,.49,.075),r(f,"cylinder","paper",v,2.18,m+.043,.38,.035,.38,0,Math.PI/2),o(f,"ink",v,2.19,m+.068,.025,.16,.01,.6),o(f,"ink",v+.035,2.13,m+.07,.095,.017,.01,.3)},u=f=>{o(f,"rust",f.w*.46,2.98,.28,f.w*.58,.044,.055);for(let m=0;m<3;m++)o(f,"rust",f.w*(.2+m*.2),2.98-.055,.28,.065,.12,.07);o(f,"wood",Math.max(1,f.w-2.3),1.66,.2,.86,.61,.07),o(f,"paper",Math.max(1,f.w-2.3),1.66,.247,.71,.45,.012);for(let m=0;m<3;m++)o(f,"ink",Math.max(1,f.w-2.53),1.78-m*.095,.258,.42+m*.07,.014,.01);for(let m=0;m<3;m++)r(f,"sheet","paper",.62+m*.2,.09+m*.001,.67+m%2*.14,.18+m*.04,.21,1,m*.2,-Math.PI/2);o(f,"stain",f.w-1.12,.85,.222,.46,1.2,.016)};for(const f of t)switch(f.id!=="stilhed"&&u(f),f.id){case"reception":o(f,"ink",4.54,.88,9.42,.34,.085,.18),o(f,"ink",4.52,.99,9.4,.3,.054,.075,.19),l(f,3.52,.84,9.25,5),r(f,"cylinder","porcelain",4.86,.98,9.7,.15,.2,.15),r(f,"torus","porcelain",4.97,1,9.7,.095,.095,.095),h(f,5.3,.25),c(f,9.48,1.48,9.56),o(f,"paper",9.33,1.07,9.38,.38,.025,.3);break;case"patientgang":for(let v=0;v<3;v++)o(f,"brass",3.25+v*.38,.91,9.3,.024,.08,.56),o(f,"cloth",3.21+v*.39,.94,9.3,.22,.045,.57);o(f,"enamel",10.2,1.35,.18,.55,.71,.12);for(let v=0;v<3;v++)a(f,2.1+v*.22,.4,.45,1.3);break;case"operationsstue":r(f,"cylinder","rust",6.1,3.12,8.6,.05,.6,.05),r(f,"cylinder","enamel",6.1,2.74,8.6,.97,.14,.97),r(f,"cylinder","glow",6.1,2.65,8.6,.62,.023,.62);for(let v=0;v<5;v++)o(f,"rust",8.88+v*.105,.98,2.07,.025,.025,.3,v*.06);a(f,3.45,.95,9.2),l(f,6.35,.92,9,3);break;case"slagterum":for(let v=0;v<5;v++)o(f,"rust",4.6+v*.39,2.63,2.42,.024,.52,.026),r(f,"torus","rust",4.6+v*.39,2.35,2.42,.08,.12,.08);a(f,5.65,.84,9.3),o(f,"enamel",6.1,.85,9.34,.34,.035,.25);break;case"arkiv":for(let v=0;v<14;v++)o(f,v%4===0?"paper":"cloth",2.12,.34+v%3*.47,8.27+Math.floor(v/3)*.19,.19,.3,.045);l(f,8,.8,2.4,6),o(f,"brass",8.48,.82,2.14,.1,.4,.08),r(f,"sphere","glow",8.48,1.04,2.14,.27,.12,.26);break;case"laboratorium":for(let v=0;v<6;v++)a(f,3.75+v%3*.18,.95,9.15+Math.floor(v/3)*.16,.8+v%2*.5);o(f,"rust",4.3,1.12,9.45,.03,.48,.04),o(f,"brass",4.3,1.35,9.45,.32,.03,.04),c(f,9.8,1.2,.43);break;case"obduktion":for(let v=0;v<4;v++)o(f,"rust",5.88+v*.105,.96,9.2,.026,.025,.35);r(f,"cylinder","brass",7.9,.12,8.8,.34,.025,.34),a(f,6.58,.93,9.2),l(f,2.3,1.15,2,4);break;case"personalerum":o(f,"wood",9.9,1.08,9.17,.56,.28,.19),o(f,"ink",9.9,1.1,9.29,.48,.18,.015),r(f,"cylinder","brass",10.02,1.11,9.31,.07,.045,.07,0,Math.PI/2),r(f,"sphere","glow",9.75,1.14,9.32,.05,.05,.05),r(f,"cylinder","porcelain",9.16,1.02,9.43,.15,.18,.15),l(f,9,.96,9.15,4),h(f,5.6,.25);break;case"kaeldergang":o(f,"rust",8.8,.65,9.15,1.18,1.12,.7),o(f,"ink",8.8,1.24,8.78,.82,.37,.06);for(let v=0;v<3;v++)o(f,"porcelain",8.55+v*.23,1.25,8.733,.12,.17,.035),o(f,v===0?"rust":v===1?"enamel":"brass",8.55+v*.23,1.25,8.7,.09,.11,.02);r(f,"cylinder","rust",9.05,1.39,9.14,.34,.24,.34);for(let v=0;v<3;v++)o(f,"rust",1.02+v*.2,2.52,10.92,.055,.98,.08);break;case"kapel":for(let v=0;v<5;v++)r(f,"cylinder","porcelain",5.13+v*.38,1.13,9.48,.078,.25+v%2*.1,.078),r(f,"sphere","glow",5.13+v*.38,1.3+v%2*.1,9.48,.04,.09,.04);o(f,"brass",6.06,1.2,9.18,.43,.19,.07),l(f,5.53,1.12,9.42,2),o(f,"rust",6.4,1.4,.21,.65,.48,.1);break;case"observation":o(f,"rust",5.3,1.72,.18,1.42,.94,.07),o(f,"glass",5.3,1.72,.245,1.29,.79,.018),c(f,7.5,1,2.15);for(let v=0;v<3;v++)o(f,"cloth",9.08,.98,9.05+v*.2,.48,.06,.07);break;case"kammer":for(let v=0;v<3;v++)o(f,"cloth",4.05+v*.45,.51,9.1,.11,.08,.75);l(f,2.1,1.29,2.05,6),o(f,"rust",9.6,1.49,.23,.65,.83,.1),c(f,1.6,1.1,2.25);break;case"trappe0":case"trappe1":case"trappe2":for(let v=0;v<5;v++)o(f,"rust",f.w-.54,.7+v*.38,1.05,.05,.12,.08);o(f,"paper",1.2,1.7,.22,.7,.43,.04);break;case"stilhed":o(f,"rust",6,1.48,5.68,2.3,2.7,.22),o(f,"brass",6.9,1.35,5.52,.19,.37,.1),o(f,"ink",6,2.5,5.5,.94,.09,.04);break}const d=new Yt;d.name="SktAgnes_VisualV3_Detail";const p=new Map;for(const f of s){const v=f.shape+":"+f.finish,m=p.get(v)??[];m.push(f),p.set(v,m)}for(const[f,v]of p){const[m,g]=f.split(":"),S=new ja(n[m],e[g],v.length);v.forEach((A,y)=>S.setMatrixAt(y,A.matrix)),S.instanceMatrix.needsUpdate=!0,S.castShadow=!1,S.receiveShadow=!1,S.frustumCulled=!1,S.name="V3_"+f,d.add(S)}return d.userData.v3DetailCount=s.length,d.userData.v3RoomThemes=h_,i.add(d),()=>{i.remove(d),Object.values(n).forEach(f=>f.dispose()),Object.values(e).forEach(f=>f.dispose())}}const d_={reception:["MODTAGELSE","NATTEVAGT 1987"],patientgang:["PATIENTFLØJEN","STUE 01 - 08"],operationsstue:["OPERATION","STERILT OMRÅDE"],slagterum:["SERVICEFLØJ","PERSONALEADGANG"],arkiv:["JOURNALARKIV","ADGANG BEGRÆNSET"],laboratorium:["LABORATORIUM","PRØVEREGISTER"],obduktion:["OBDUKTION","REGISTRERING"],personalerum:["PERSONALE","VAGTSKIFTE"],kaeldergang:["TEKNISK DRIFT","HØJSPÆNDING"],kapel:["SANKT AGNES","GRUNDLAGT 1907"],observation:["OBSERVATION","ADGANG KUN PERSONALE"],kammer:["ISOLATION","PATIENTJOURNAL"],trappe0:["TRAPPE","STUEETAGE"],trappe1:["TRAPPE","FØRSTE SAL"],trappe2:["TRAPPE","KÆLDERFLØJ"]};function f_(i,t,e){const n=new Yt;n.name="SktAgnes_CinematicArtV3";const s={box:new It(1,1,1),rod:new me(.5,.5,1,12),orb:new Me(.5,12,9),ring:new $n(.5,.075,7,15),sheet:new fe(1,1)},r=[],o=(x,_)=>{const b=document.createElement("canvas");b.width=b.height=128;const M=b.getContext("2d");let k=x>>>0;const I=()=>(k=k*1664525+1013904223>>>0,k/4294967296);if(M){M.fillStyle="#e4e1d9",M.fillRect(0,0,128,128);for(let C=0;C<490;C++){const F=I()*128,G=I()*128,L=.02+I()*.14;M.fillStyle="rgba(26,24,20,"+L.toFixed(3)+")",M.fillRect(F,G,.5+I()*2.6,.5+I()*2.6)}for(let C=0;C<46;C++){const F=I()*128,G=I()*128;M.beginPath(),M.moveTo(F,G),_==="grain"?M.lineTo(F+I()*1.5,G+8+I()*50):_==="scratch"?M.lineTo(F+4+I()*18,G+I()*2):M.arc(F,G,.3+I()*2.8,0,Math.PI*2),M.strokeStyle="rgba(41,33,24,"+(.04+I()*.17).toFixed(3)+")",M.lineWidth=.6,M.stroke()}}const H=new Yi(b);return H.colorSpace=_e,H.wrapS=H.wrapT=jn,r.push(H),H},a={paint:new pt({color:"#65716a",map:o(81,"pitted"),roughness:.83,metalness:.13}),iron:new pt({color:"#5d5e5b",map:o(73,"scratch"),roughness:.62,metalness:.77}),brass:new pt({color:"#8d7b5e",map:o(52,"scratch"),roughness:.53,metalness:.8}),porcelain:new pt({color:"#aaa699",roughness:.78,metalness:0}),glass:new pt({color:"#62746e",roughness:.22,metalness:.08,transparent:!0,opacity:.62,depthWrite:!1}),oak:new pt({color:"#584438",map:o(110,"grain"),roughness:.9}),paper:new pt({color:"#b3a58e",map:o(15,"pitted"),roughness:1,side:ge}),cloth:new pt({color:"#504c47",map:o(126,"grain"),roughness:1,side:ge}),rubber:new pt({color:"#242a29",roughness:.94}),shadow:new pt({color:"#1c2020",roughness:1}),warm:new pt({color:"#927c56",roughness:.75,emissive:"#24190c",emissiveIntensity:.09}),rust:new pt({color:"#745244",map:o(48,"pitted"),roughness:.92,metalness:.44})},l=new Map,c=new Set;let h=0;const u=(x,_,b,M,k,I,H,C,F,G=0,L=0,W=0)=>{const J=new Kt;J.compose(new U(x.x+M,Dt[x.floor]+k,x.z+I),new Kn().setFromEuler(new en(G,L,W)),new U(H,C,F));const rt=_+":"+b,ot=l.get(rt)??[];ot.push({shape:_,finish:b,transform:J}),l.set(rt,ot),h++},d=(x,_,b,M,k,I,H,C,F=0)=>u(x,"box",_,b,M,k,I,H,C,0,F),p=(x,_,b,M,k,I,H,C=0,F=0,G=0)=>u(x,"rod",_,b,M,k,I*2,H,I*2,C,F,G),f=(x,_,b,M,k=1)=>{p(x,"glass",_,b+.08*k,M,.041*k,.16*k),p(x,"rust",_,b+.17*k,M,.048*k,.025*k),d(x,"paper",_,b+.09*k,M+.045*k,.072*k,.038*k,.007)},v=(x,_,b,M,k)=>{for(let I=0;I<k;I++){const H=.12+I%3*.017;d(x,I%4===0?"cloth":"paper",_+I*.035,b+H/2,M,.025,H,.22),d(x,"brass",_+I*.035,b+H*.65,M+.115,.013,.015,.008)}},m=(x,_,b,M)=>{d(x,"oak",_,b,M,.67,.88,.04),d(x,"paper",_,b,M+.029,.59,.78,.008),d(x,"iron",_,b+.36,M+.045,.16,.044,.025);for(let k=0;k<7;k++)d(x,k===4?"rust":"shadow",_-.19+k%2*.038,b+.22-k*.07,M+.037,.3-k%3*.053,.009,.007)},g=(x,_,b,M,k)=>{p(x,"iron",_+k/2,b,M,.043,k,0,0,Math.PI/2);for(const I of[.35,k-.25])u(x,"ring","rust",_+I,b,M,.16,.16,.16,0,Math.PI/2)},S=(x,_,b,M)=>{u(x,"rod","iron",_,b,M,.27,.043,.27,Math.PI/2),u(x,"rod","paper",_,b,M+.027,.19,.014,.19,Math.PI/2),d(x,"shadow",_+.034,b+.011,M+.035,.075,.008,.008,.44)},A=(x,_,b,M,k)=>{p(x,"porcelain",_,b+k/2,M,.055,k),p(x,"warm",_,b+k+.02,M,.024,.06)},y=[],w=[],P=(x,_,b,M,k,I,H,C,F)=>{const G=document.createElement("canvas");G.width=768,G.height=384;const L=G.getContext("2d");if(!L)return;L.fillStyle="#302d2a",L.fillRect(0,0,G.width,G.height),L.fillStyle="#b9ae91",L.fillRect(30,27,708,330),L.fillStyle="#746d5c",L.fillRect(45,41,678,300),L.fillStyle="#d0c3a5",L.fillRect(52,47,664,288),L.fillStyle="#3a3b36",L.textAlign="center",L.font="bold 49px Georgia,serif",L.fillText(C,384,148,650),L.fillStyle="#67574b",L.font="33px Georgia,serif",L.fillText(F,384,217,655),L.fillStyle="#6d302b",L.fillRect(275,257,220,5);for(let ot=0;ot<520;ot++){const Nt=(ot*173+17)%768,$=(ot*101+53)%384;L.fillStyle=ot%3===0?"rgba(46,31,20,0.20)":"rgba(70,59,41,0.09)",L.fillRect(Nt,$,2+ot%5,1+ot%3)}const W=new Yi(G);W.colorSpace=_e,W.anisotropy=4;const J=new pt({map:W,roughness:.93}),rt=new Z(new fe(k,I),J);rt.position.set(x.x+_,Dt[x.floor]+b,x.z+M),rt.rotation.y=Math.PI,rt.name="V3_Poster_"+x.id+"_"+C,n.add(rt),y.push(J),w.push(W),d(x,"iron",_,b,M+H*-.027,k+.1,I+.1,.048)};for(const x of t){if(x.outdoors)continue;const _=x.w-.95,b=d_[x.id];if(b){const M=document.createElement("canvas");M.width=512,M.height=192;const k=M.getContext("2d");if(k){k.fillStyle="#262c2b",k.fillRect(0,0,512,192),k.fillStyle="#827b68",k.fillRect(11,11,490,170),k.fillStyle="#b9ab91",k.fillRect(15,15,482,162),k.fillStyle="#292a29",k.font="bold 35px Georgia, serif",k.textAlign="center",k.fillText(b[0],256,79,465),k.font="25px Georgia, serif",k.fillText(b[1],256,127,465);for(let F=0;F<190;F++){const G=(F*71+x.id.length*37)%512,L=(F*47+x.floor*59)%192;k.fillStyle=F%2?"rgba(40,40,28,.13)":"rgba(244,218,171,.09)",k.fillRect(G,L,1+F%3,1+F%2)}const I=new Yi(M);I.colorSpace=_e,I.anisotropy=2;const H=new pt({map:I,roughness:.93,metalness:.03}),C=new Z(new fe(1.25,.47),H);C.position.set(x.x+_,Dt[x.floor]+1.69,x.z+.156),C.name="V3_Sign_"+x.id,n.add(C),w.push(I),y.push(H),d(x,"iron",_,1.69,.13,1.35,.56,.045)}}for(let M=0;M<3;M++)d(x,"paint",.75+M*.72,.86,.205,.6,.08,.045),p(x,"iron",.46+M*.72,.86,.253,.022,.032,Math.PI/2);switch(x.id){case"reception":{d(x,"oak",4.35,1.79,.28,1.85,.87,.42);for(let M=0;M<6;M++){const k=3.6+M%3*.69,I=1.58+Math.floor(M/3)*.43;d(x,"shadow",k,I,.505,.58,.31,.015),v(x,k-.23,I-.13,.54,4)}m(x,8.2,1.78,.29);for(let M=0;M<3;M++)f(x,9.22+M*.14,1.04,9.67);P(x,4.25,2.53,11.78,3.1,.91,-1,"SANKT AGNES","MODTAGELSE  •  NATTJENESTE"),P(x,9.25,2.13,11.78,1.55,.85,-1,"VISITATION","JOURNALER / 1987"),d(x,"rubber",3.24,1.19,9.42,.36,.12,.23),d(x,"iron",3.24,1.28,9.42,.2,.03,.12),u(x,"rod","porcelain",3.24,1.271,9.34,.118,.018,.118,Math.PI/2);for(let M=0;M<8;M++){const k=M*Math.PI/4;u(x,"orb","shadow",3.24+Math.cos(k)*.041,1.295,9.34+Math.sin(k)*.041,.016,.009,.016)}d(x,"brass",4.65,1.19,9.56,.22,.025,.18),p(x,"brass",4.65,1.39,9.56,.017,.38),u(x,"orb","warm",4.65,1.59,9.55,.34,.14,.22),v(x,3.65,1.17,9.68,8),v(x,4.12,1.17,9.66,5),u(x,"orb","brass",4.95,1.23,9.22,.18,.1,.18),d(x,"brass",4.95,1.17,9.22,.21,.027,.21),d(x,"iron",2.52,.63,11.69,2.25,.67,.17);for(let M=0;M<13;M++)d(x,"paint",1.5+M*.17,.65,11.58,.085,.53,.09);break}case"patientgang":{d(x,"paint",7.6,1.35,.28,1.27,.8,.19);for(let M=0;M<4;M++)d(x,M===0?"warm":"shadow",7.23+M*.25,1.52,.393,.085,.12,.02);m(x,9.57,1.78,.28),P(x,5.5,2.62,11.78,1.78,.72,-1,"PATIENTFLØJ","STUE 01–08  •  STILHED"),g(x,1.6,1.05,11.68,2.3),g(x,7.2,1.05,11.68,2.2);break}case"operationsstue":{d(x,"iron",9.2,1.68,.31,1.43,1.57,.3);for(let M=0;M<3;M++)d(x,"glass",8.73+M*.48,1.72,.49,.4,.93,.027),d(x,"paint",8.73+M*.48,1.18,.51,.4,.055,.025);for(let M=0;M<6;M++)f(x,9.3+M%3*.18,1.3+Math.floor(M/3)*.38,.42,.7);d(x,"iron",4.45,1.09,9.34,.94,.045,.4);for(let M=0;M<3;M++)d(x,"brass",4.2+M*.25,1.16,9.38,.018,.032,.27);break}case"slagterum":{d(x,"iron",6.7,.82,.36,1.36,.12,.57),d(x,"porcelain",6.7,.87,.37,1.14,.08,.45);for(let M=0;M<4;M++)p(x,"rust",4.3+M*.37,2.58,.55,.016,.46),u(x,"ring","iron",4.3+M*.37,2.31,.55,.17,.18,.17);g(x,2.7,2.92,.52,5.4);break}case"arkiv":{m(x,6.7,1.74,.3),P(x,6.45,2.52,11.78,2.24,.72,-1,"ARKIVET","INGEN ADGANG UDEN NØGLE"),d(x,"oak",4.1,.64,9.42,.76,1.26,.38);for(let M=0;M<10;M++)v(x,3.8+M%5*.16,.83+Math.floor(M/5)*.45,9.32,2);d(x,"iron",7.7,1.18,2.34,.52,.31,.4);for(const M of[-.18,.18])u(x,"ring","iron",7.7+M,1.35,2.35,.22,.22,.22);break}case"laboratorium":{d(x,"iron",9.3,1.53,.28,1.5,1.32,.32);for(let M=0;M<9;M++)f(x,8.77+M%3*.22,1.01+Math.floor(M/3)*.36,.53);S(x,7.1,1.78,.39),P(x,6.25,2.53,11.78,2.22,.72,-1,"LABORATORIUM","PRØVER  •  ADGANG FORBUDT"),m(x,5.68,1.82,.28);break}case"obduktion":{d(x,"iron",8.65,.83,.35,1.16,.1,.55),d(x,"shadow",8.65,.86,.35,.83,.035,.3);for(let M=0;M<4;M++)f(x,8.33+M*.2,.88,.28);m(x,6.9,1.79,.25);for(let M=0;M<3;M++)d(x,"brass",4.1+M*.19,1.07,9.23,.028,.022,.29,.1);break}case"personalerum":{d(x,"oak",7.6,1.71,.29,1.72,.95,.1);for(let M=0;M<7;M++)d(x,M%3===0?"cloth":"paper",7.1+M%4*.35,1.92-Math.floor(M/4)*.4,.36,.29,.34,.012,M%2?.08:-.08);m(x,4.7,1.72,.27);for(let M=0;M<3;M++)f(x,9.54+M*.16,1.06,9.32);break}case"kaeldergang":{d(x,"iron",8.6,1.74,.31,1.47,1.01,.25);for(let M=0;M<3;M++)S(x,8.12+M*.48,1.89,.47);g(x,1.5,2.43,.38,6.4);for(let M=0;M<5;M++)d(x,"rust",1.8+M*.12,.94,9.18,.04,.038,.38);break}case"kapel":{for(let M=0;M<7;M++)A(x,4.2+M*.35,1.03,9.4,.12+M%3*.05);d(x,"oak",6.4,2.03,.27,.12,.74,.1),d(x,"oak",6.4,2.17,.34,.47,.11,.07),m(x,9.2,1.67,.29);break}case"observation":{d(x,"iron",5,1.84,.28,1.9,1,.06),d(x,"glass",5,1.84,.327,1.71,.81,.016),m(x,8.45,1.8,.28),d(x,"shadow",9.13,.83,9.11,.39,.02,.72);break}case"kammer":{d(x,"oak",7.7,1.66,.28,1.1,.71,.09);for(let M=0;M<9;M++)d(x,"shadow",7.26+M%3*.35,1.35+Math.floor(M/3)*.18,.35,.28,.016,.013);m(x,3.8,1.79,.25),v(x,2.12,1.34,2.18,5);break}case"trappe0":case"trappe1":case"trappe2":{for(const M of[.29,7.71]){d(x,"iron",M,1.15,3,.065,.075,3.95),d(x,"brass",M,1.18,3,.095,.018,3.95);for(const k of[1.25,3,4.75])d(x,"iron",M,1,k,.14,.33,.052);d(x,"iron",M,2.9,7.45,.065,.075,3.7);for(const k of[5.76,7.3,9.07])d(x,"iron",M,2.75,k,.14,.33,.052)}g(x,.75,3.07,11.7,5.7),P(x,4,1.72,11.79,2.7,.76,-1,"TRAPPEOPGANG",x.floor===0?"TIL 1. SAL":x.floor===1?"TIL 2. SAL":"UDGANG"),d(x,"paint",6.6,1.34,.38,.78,1.04,.19);for(let M=0;M<6;M++)d(x,M===0?"rust":"iron",6.35+M%3*.24,1.65-Math.floor(M/3)*.37,.493,.13,.13,.028);break}}}const T=new Map(t.map(x=>[x.id,x]));for(const x of e){const _=T.get(x.room);if(!_)continue;const b=x.x-_.x,M=x.z-_.z;if(x.kind==="shelf"||x.kind==="bookshelf"){for(let k=0;k<2;k++){const I=x.h*(.47+k*.28)+.02;v(_,b-x.w*.36,I,M,Math.min(7,Math.floor(x.w*7)))}c.add(x.id)}else if(x.kind==="medicalcart"){for(let k=0;k<3;k++)f(_,b-.19+k*.18,x.h-.04,M-.05,.75);d(_,"cloth",b+.05,x.h+.025,M+.15,.3,.055,.17),c.add(x.id)}}for(const[x,_]of l){const[b,M]=x.split(":"),k=new ja(s[b],a[M],_.length);_.forEach((I,H)=>k.setMatrixAt(H,I.transform)),k.instanceMatrix.needsUpdate=!0,k.castShadow=!1,k.receiveShadow=!1,k.frustumCulled=!1,k.name="V3C_"+x,n.add(k)}return n.userData.visualPartCount=h,n.userData.decoratedFurniture=[...c],n.userData.visualOnly=!0,i.add(n),()=>{i.remove(n),Object.values(s).forEach(x=>x.dispose()),Object.values(a).forEach(x=>x.dispose()),r.forEach(x=>x.dispose());for(const x of y)x.dispose();for(const x of w)x.dispose();for(const x of n.children)x instanceof Z&&x.name.startsWith("V3_Sign_")&&x.geometry.dispose()}}const p_={wood:"wood",tile:"tileFloor",concrete:"concrete",carpet:"carpet",stone:"stone"},m_={plaster:"plaster",tile:"tileWall",concrete:"concrete",panel:"panel",brick:"brick",damp:"damp"};function g_(i,t,e){const n=l_(),s=e?o_(n,e):0,r=c_(i,t.rooms),o=u_(i,t.rooms),a=f_(i,t.rooms,t.props),l=new Map,c=(C,F)=>{const G=l.get(C)??[];G.push(F),l.set(C,G)};for(const C of t.rooms){const F=Dt[C.floor],G=`${C.id}|${p_[C.floorMat]}`;for(const L of Vc(C,v_(C.id,t)))c(G,ve(L.x,F+.02,L.z,L.w,.08,L.d));if(!C.outdoors){const L=`${C.id}|ceiling`,W=F+Vi-.05;for(const J of Vc(C,x_(C.id,t)))c(L,ve(J.x,W,J.z,J.w,.08,J.d))}}for(const C of t.walls){const F=t.rooms.find(J=>J.id===C.roomId),G=F?m_[F.wallMat]:"plaster",L=Dt[C.floor];C.axis==="x"?c(`${C.roomId}|${G}`,ve(C.coord-.11,L,C.min,.22,Vi,C.max-C.min)):c(`${C.roomId}|${G}`,ve(C.min,L,C.coord-.11,C.max-C.min,Vi,.22));const W=.16;C.axis==="x"?c(`${C.roomId}|trim`,ve(C.coord-.13,L,C.min,.08,W,C.max-C.min)):c(`${C.roomId}|trim`,ve(C.min,L,C.coord-.13,C.max-C.min,W,.08))}for(const C of t.doors)y_(C,c);const h=[],u=[],d=[];let p=new Yt,f=new Yt,v=new Yt;for(const C of t.props){const F=t.rooms.find(W=>W.id===C.room);if(!F)continue;const G=Dt[F.floor]+(C.yOff??0);if(C.kind==="chair"){h.push(zi(C.x,G,C.z,C.rot));continue}if(C.kind==="crate"){u.push(zi(C.x,G+.34,C.z,C.rot));continue}if(C.kind==="barrel"){d.push(zi(C.x,G+.42,C.z,C.rot));continue}const L=M_(C.kind,C.w,C.h,C.d);if(C.kind==="mannequin"||C.kind==="pot"||C.id==="secretshelf"){const W=new Yt;for(const J of L){const rt=n[J.mat];if(!(rt instanceof xn))continue;const ot=new Z(J.geo,rt);ot.castShadow=!0,ot.receiveShadow=!0,W.add(ot)}W.position.set(C.x,G,C.z),W.rotation.y=C.rot,i.add(W),C.kind==="mannequin"?(p=W,W.visible=!1):C.kind==="pot"?f=W:v=W;continue}for(const W of L)W.geo.applyMatrix4(zi(C.x,G,C.z,C.rot)),c(`${F.id}|${W.mat}`,W.geo)}for(const C of t.stairs){const G=Dt[C.fromFloor],L=Dt[C.toFloor];if(C.axis!=="z")continue;const W=L-G,J=C.d/21,rt=C.x+.18,ot=C.w-.36;for(let it=0;it<21;it++){const mt=(it+1)/21,yt=G+mt*W,Rt=C.z+it*J,ne=.105;if(c("stairs|stone",ve(rt,yt-ne,Rt,ot,ne,J*1.005)),it>0){const Gt=G+it/21*W;c("stairs|stone",ve(rt+.015,Gt-.04,Rt,ot-.03,yt-Gt+.04,.065))}c("stairs|trim",ve(rt+.035,yt-.02,Rt+J*.85,ot-.07,.026,J*.13)),c("stairs|metal",ve(rt+.12,yt-.008,Rt+J*.68,ot-.24,.009,J*.045))}const Nt=-Math.atan2(W,C.d),$=Math.hypot(C.d,W);for(const it of[rt+.13,rt+ot-.13]){const mt=new It(.13,.25,$);mt.rotateX(Nt),mt.translate(it,(G+L)*.5-.22,C.z+C.d*.5),c("stairs|metal",mt)}const nt=-Math.atan2(W,C.d),ft=Math.hypot(C.d,W);for(const it of[C.x+.18,C.x+C.w-.18]){const mt=new It(.085,.1,ft);mt.rotateX(nt),mt.translate(it,(G+L)*.5+.83,C.z+C.d*.5),c("stairs|metal",mt);for(let yt=0;yt<=21;yt+=2){const Rt=yt/21;c("stairs|metal",ve(it-.04,G+W*Rt,C.z+C.d*Rt-.04,.08,.83,.08))}}}for(const C of t.decals){const F=t.rooms.find(J=>J.id===C.room);if(!F)continue;const G=Dt[F.floor]+.06,L=new fe(C.w,C.d);L.rotateX(-Math.PI/2),L.applyMatrix4(zi(C.x,G,C.z,C.rot));const W=new Z(L,C.kind==="blood"?n.blood:n.concrete);W.receiveShadow=!0,i.add(W)}const m=[],g=new me(.04,.05,.18,6),S=n.glass;for(const C of t.rooms){if(C.outdoors||C.w<5||C.d<5)continue;const F=Ea(C.id),G=1+F%3;for(let L=0;L<G;L++){const W=new Z(g,S),J=(F>>L*3&7)/7,rt=(F>>L*5+2&7)/7;W.position.set(C.x+.6+J*(C.w-1.2),Dt[C.floor]+.1,C.z+.6+rt*(C.d-1.2)),W.userData.detail=!0,i.add(W),m.push(W)}if(F%2===0){const L=S_();L.position.set(C.x+.35,Dt[C.floor]+Vi-.45,C.z+.35),L.userData.detail=!0,i.add(L),m.push(L)}}let A=0;for(const C of t.walls){if(!C.exterior||A>14||C.max-C.min<3.2||Ea(C.roomId+C.coord)%3!==0)continue;const G=Dt[C.floor]+1.45,L=(C.min+C.max)/2;n.trim;const W=new Z(new fe(1.15,1.5),n.glass);C.axis==="x"?(W.position.set(C.coord,G,L),W.rotation.y=Math.PI/2,c(`${C.roomId}|trim`,ve(C.coord-.08,G-.8,L-.65,.08,1.6,.08)),c(`${C.roomId}|trim`,ve(C.coord-.08,G-.8,L+.57,.08,1.6,.08))):(W.position.set(L,G,C.coord),c(`${C.roomId}|trim`,ve(L-.65,G-.8,C.coord-.08,.08,1.6,.08)),c(`${C.roomId}|trim`,ve(L+.57,G-.8,C.coord-.08,.08,1.6,.08))),W.userData.window=!0,i.add(W),A++}const y=[];for(const[C,F]of l){const G=C.split("|")[1],L=uu(F,!1);if(!L)continue;L.computeVertexNormals();const W=n[G];if(!(W instanceof xn))continue;const J=new Z(L,W);J.castShadow=!0,J.receiveShadow=!0,i.add(J),y.push(L);for(const rt of F)rt.dispose()}const w=Ro(b_(),n.wood,h,i),P=Ro(new It(.68,.68,.68),n.wood,u,i),T=Ro(new me(.28,.3,.85,8),n.metal,d,i),x=new Map;for(const C of t.doors){if(C.kind==="arch"||C.kind==="hidden")continue;const F=new Yt,G=n.door.clone(),L=new Z(new It(C.width*.96,2.42,.12),G);L.castShadow=!0,L.receiveShadow=!0,L.position.set(C.width*.48,1.21,0);const W=new pt({color:"#1c2425",roughness:.96}),J=new pt({color:"#554d3c",roughness:.53,metalness:.67}),rt=C.width*.76;for(const nt of[-1,1])for(const ft of[-.56,.51]){const it=new Z(new It(rt,.84,.012),W);it.position.set(0,ft,nt*.066),L.add(it);for(const mt of[-.39,.39]){const yt=new Z(new It(rt,.034,.025),G);yt.position.set(0,ft+mt,nt*.084),L.add(yt)}for(const mt of[-1,1]){const yt=new Z(new It(.035,.79,.025),G);yt.position.set(mt*rt*.48,ft,nt*.084),L.add(yt)}}const ot=new Z(new It(.09,.26,.015),J);ot.position.set(C.width*.29,-.09,.09),L.add(ot);for(const nt of[-1,1]){const ft=new Z(new Me(.043,12,10),J);ft.position.set(C.width*.29,-.09,nt*.13),L.add(ft)}const Nt=new Z(new It(rt,.18,.017),J);Nt.position.set(0,-1.04,.073),L.add(Nt),F.add(L);const $=Dt[C.floor];C.axis==="x"?(F.position.set(C.coord,$,C.spanMin),F.rotation.y=-Math.PI/2):(F.position.set(C.spanMin,$,C.coord),F.rotation.y=0),F.userData.closedYaw=F.rotation.y,F.userData.swing=1,F.userData.panel=L,i.add(F),x.set(C.id,F),w_(i,C)}const _=new Map;for(const C of t.pickups){const F=t.rooms.find(L=>L.id===C.room);if(!F)continue;const G=E_(C.itemId,n);G.position.set(C.x,Dt[F.floor]+.85,C.z),i.add(G),_.set(C.id,G)}const b=[];for(const C of t.lights){let F;if(C.room==="hall"){const ot=new ba(C.color,C.intensity,C.distance,1.05,.55,1.15);ot.position.set(C.x,C.y,C.z),ot.target.position.set(C.x,Dt[0],C.z),ot.castShadow=!0,ot.shadow.mapSize.set(512,512),ot.shadow.bias=-4e-4,i.add(ot,ot.target),F=ot}else{const ot=new Kh(C.color,C.intensity,C.distance,1.35);ot.position.set(C.x,C.y,C.z),i.add(ot),F=ot}const G=new Yt;G.position.set(C.x,C.y+.14,C.z);const L=new pt({color:"#333738",metalness:.65,roughness:.81}),W=new pt({color:"#b8bdb6",emissive:C.color,emissiveIntensity:.55,roughness:.34,metalness:.04}),J=new Z(new It(1.42,.12,.31),L);J.castShadow=!0,G.add(J);const rt=new Z(new It(1.27,.026,.24),n.trim);rt.position.y=-.073,G.add(rt);for(const ot of[-.075,.075]){const Nt=new Z(new It(1.22,.036,.066),W);Nt.position.set(0,-.108,ot),G.add(Nt)}for(const ot of[-.64,.64]){const Nt=new Z(new It(.048,.045,.27),L);Nt.position.set(ot,-.105,0),G.add(Nt)}i.add(G),b.push({def:C,light:F,base:C.intensity,lens:W})}const M=new Ae,k=400,I=new Float32Array(k*3);for(let C=0;C<k;C++)I[C*3]=30+Math.random()*8,I[C*3+1]=Math.random()*6,I[C*3+2]=28+Math.random()*8;M.setAttribute("position",new We(I,3));const H=new Xh(M,new $a({color:"#9bb0c4",size:.035,transparent:!0,opacity:.35,depthWrite:!1}));return H.visible=!1,i.add(H),{materials:n,doors:x,pickups:_,lights:b,mannequin:p,pot:f,secretShelf:v,detail:m,rain:H,photoSlots:s,dispose(){a(),o(),r(),n.dispose();for(const C of y)C.dispose();w.geometry.dispose(),P.geometry.dispose(),T.geometry.dispose(),M.dispose(),H.material.dispose()}}}function v_(i,t){return i==="trappe1"?t.stairs.filter(e=>e.id==="stair_01"):i==="trappe2"?t.stairs.filter(e=>e.id==="stair_12"):[]}function x_(i,t){return i==="trappe0"?t.stairs.filter(e=>e.id==="stair_01"):i==="trappe1"?t.stairs.filter(e=>e.id==="stair_12"):[]}function Vc(i,t){let e=[i];for(const n of t){const s=[];for(const r of e)s.push(...__(r,n));e=s}return e.filter(n=>n.w>.05&&n.d>.05)}function __(i,t){const e=i.x+i.w,n=i.z+i.d,s=t.x+t.w,r=t.z+t.d,o=Math.max(i.x,t.x),a=Math.max(i.z,t.z),l=Math.min(e,s),c=Math.min(n,r);if(l-o<.05||c-a<.05)return[i];const h=[];return a>i.z&&h.push({x:i.x,z:i.z,w:i.w,d:a-i.z}),n>c&&h.push({x:i.x,z:c,w:i.w,d:n-c}),o>i.x&&h.push({x:i.x,z:a,w:o-i.x,d:c-a}),e>l&&h.push({x:l,z:a,w:e-l,d:c-a}),h}function ve(i,t,e,n,s,r){const o=new It(Math.max(.02,n),Math.max(.02,s),Math.max(.02,r));return fu(o,Math.max(.02,n),Math.max(.02,s),Math.max(.02,r)),o.applyMatrix4(zi(i+n/2,t+s/2,e+r/2,0)),o}function fu(i,t,e,n){const s=i.getAttribute("uv"),r=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let o=0;o<6;o++){const a=r[o][0]*.42,l=r[o][1]*.42;for(let c=0;c<4;c++){const h=o*4+c;s.setXY(h,s.getX(h)*a,s.getY(h)*l)}}s.needsUpdate=!0}function zi(i,t,e,n){const s=new Kt,r=new Kn().setFromAxisAngle(new U(0,1,0),n);return s.compose(new U(i,t,e),r,new U(1,1,1)),s}function y_(i,t){const e=Dt[i.floor],n=2.55,s=.08;i.axis==="x"?(t("frame|trim",ve(i.coord-.06,e,i.spanMin-s,.12,n,s)),t("frame|trim",ve(i.coord-.06,e,i.spanMax,.12,n,s)),t("frame|trim",ve(i.coord-.06,e+n-s,i.spanMin,.12,s,i.width))):(t("frame|trim",ve(i.spanMin-s,e,i.coord-.06,s,n,.12)),t("frame|trim",ve(i.spanMax,e,i.coord-.06,s,n,.12)),t("frame|trim",ve(i.spanMin,e+n-s,i.coord-.06,i.width,s,.12)))}function Y(i,t,e,n,s,r,o){const a=new It(i,t,e);return fu(a,i,t,e),a.translate(n,s+t/2,r),{geo:a,mat:o}}function M_(i,t,e,n){switch(i){case"pillar":return[Y(t,e,n,0,0,0,"stone")];case"bench":return[Y(t,.08,n,0,.42,0,"wood"),Y(.08,.42,n,-t/2,0,0,"wood"),Y(.08,.42,n,t/2,0,0,"wood")];case"receptiondesk":{const s=-n*.5,r=[Y(t*.96,e*.84,n*.82,0,.07,0,"wood"),Y(t*1.04,.075,n*1.08,0,e-.09,0,"trim"),Y(t*1.04,.1,n*.22,0,e-.03,s+n*.09,"wood"),Y(t*.99,e*.72,.033,0,.13,s-.012,"wood"),Y(t*.98,.115,.04,0,.07,s-.05,"metal"),Y(t*1.05,.065,.052,0,e*.71,s-.052,"trim"),Y(t*.66,.034,.03,0,e*.55,n*.49,"metal")];for(let o=0;o<13;o++){const a=(o/12-.5)*(t*.91);r.push(Y(.023,e*(o%4===0?.62:.55),.052,a,.14,s-.057,o%3===0?"trim":"wood"))}for(const o of[-1,1])r.push(Y(.09,e*.84,n*.86,o*t*.47,.06,0,"wood")),r.push(Y(.035,e*.58,.048,o*t*.48,.22,s-.045,"metal"));return r}case"desk":case"table":return[Y(t,.08,n,0,e-.08,0,"wood"),Y(.08,e-.08,.08,-t/2+.08,0,-n/2+.08,"wood"),Y(.08,e-.08,.08,t/2-.08,0,-n/2+.08,"wood"),Y(.08,e-.08,.08,-t/2+.08,0,n/2-.08,"wood"),Y(.08,e-.08,.08,t/2-.08,0,n/2-.08,"wood")];case"shelf":case"bookshelf":return[Y(t,e,.06,0,0,-n/2,"wood"),Y(t,.05,n,0,.15,0,"wood"),Y(t,.05,n,0,e*.45,0,"wood"),Y(t,.05,n,0,e*.75,0,"wood")];case"locker":return[Y(t,e,n,0,0,0,"metal"),Y(t*.92,.055,.025,0,e*.92,n/2,"trim"),Y(t*.92,.055,.025,0,e*.14,n/2,"trim"),Y(.04,e*.76,.03,-t*.035,e*.15,n/2,"trim"),Y(.025,.16,.05,t*.27,e*.51,n/2,"trim"),...[-.3,-.18,-.06].map(s=>Y(t*.56,.021,.027,-t*.03,e*(.81+s),n/2,"trim"))];case"recordcabinet":return[Y(t,e,n,0,0,0,"wood"),Y(t*1.02,.06,n*1.04,0,e-.05,0,"trim"),Y(t*.95,.095,n*.96,0,0,0,"trim"),...[0,1,2].flatMap(s=>{const r=e*(.12+s*.25);return[Y(t*.86,e*.195,.027,0,r,n*.512,"trim"),Y(t*.8,e*.163,.032,0,r+e*.014,n*.534,"wood"),Y(t*.25,.055,.041,0,r+e*.135,n*.566,"metal"),Y(t*.23,.023,.055,0,r+e*.05,n*.57,"trim")]})];case"filing":return[Y(t,e,n,0,0,0,"metal"),Y(t*1.035,.05,n*1.03,0,e-.055,0,"trim"),Y(t*.93,.08,n*.96,0,0,0,"trim"),...[0,1,2,3].flatMap(s=>{const r=e*(.1+s*.217);return[Y(t*.85,e*.16,.024,0,r,n*.516,"trim"),Y(t*.79,e*.125,.028,0,r+e*.015,n*.535,"metal"),Y(t*.28,.047,.03,0,r+e*.106,n*.556,"trim"),Y(t*.25,.031,.053,0,r+e*.034,n*.562,"metal")]})];case"sideboard":return[Y(t,e*.72,n,0,e*.24,0,"wood"),Y(t*1.08,.064,n*1.06,0,e*.94,0,"wood"),...[-.22,.22].map(s=>Y(.065,.026,.065,s*t,e*.57,n*.53,"metal")),...[-.36,.36].map(s=>Y(.09,e*.18,.1,s*t,0,n*.37,"wood"))];case"counter":return[Y(t,e,n,0,0,0,"tileWall"),Y(t,.06,n,0,e-.06,0,"metal")];case"pew":return[Y(t,.095,n*.86,0,.43,0,"wood"),Y(t,.59,.095,0,.4,-n*.51,"wood"),...[-1,1].flatMap(s=>[Y(.1,.55,n*.89,s*t*.45,.01,0,"wood"),Y(.19,.12,n*.8,s*t*.45,.015,0,"trim"),Y(.055,.12,n*.54,s*t*.42,.54,-n*.28,"trim")]),Y(t*.83,.032,.2,0,.3,-n*.12,"wood")];case"altar":return[Y(t,e,n,0,0,0,"stone"),Y(.08,.35,.08,-.3,e,0,"trim")];case"sofa":return[Y(t,.28,n,0,.26,0,"fabric"),Y(t,.5,.16,0,.43,-n/2+.08,"fabric"),...[-1,1].map(s=>Y(.18,.36,n,s*(t/2-.09),.28,0,"fabric")),...[-.28,.28].map(s=>Y(t*.38,.08,n*.65,s*t*.7,.51,.06,"fabric"))];case"medicalcart":return[Y(t*1.025,.066,n*1.08,0,e-.074,0,"metal"),Y(t,.05,n,0,.31,0,"metal"),...[-1,1].flatMap(s=>[-1,1].map(r=>Y(.035,e-.11,.035,s*(t/2-.065),.11,r*(n/2-.065),"metal"))),...[-1,1].flatMap(s=>[-1,1].map(r=>Y(.11,.1,.11,s*(t/2-.1),.02,r*(n/2-.07),"trim"))),Y(t*.83,.033,n*.81,0,e*.58,0,"metal"),...[-1,1].map(s=>Y(t*.98,.13,.034,0,e-.16,s*n*.54,"trim")),...[-1,1].map(s=>Y(.034,.13,n*.86,s*t*.52,e-.16,0,"trim")),Y(t*.46,.055,.042,0,e*.61,n*.52,"trim"),Y(t*.61,.045,.27,0,.34,0,"glass")];case"foldscreen":return[...[-.33,0,.33].map(s=>Y(t*.31,e*.83,.038,t*s,.2,0,"fabric")),...[-.49,-.16,.16,.49].map(s=>Y(.031,e,.05,t*s,0,0,"metal")),Y(t,.04,.06,0,e-.06,0,"metal")];case"ivstand":return[Y(.045,e,.045,0,0,0,"metal"),Y(t,.04,.045,0,.03,0,"metal"),Y(.045,.04,n,0,.03,0,"metal"),Y(.22,.035,.04,0,e-.06,0,"metal"),Y(.08,.22,.045,t*.25,e-.38,0,"glass")];case"bathtub":return[Y(t,e,n,0,0,0,"tileWall")];case"gurney":return[Y(t*.93,.075,n*.93,0,.66,0,"metal"),Y(t*.91,.11,n*.83,0,.73,0,"fabric"),Y(t*.84,.034,n*.77,0,.84,0,"fabric"),Y(t*.23,.085,n*.57,-t*.31,.86,0,"trim"),...[-1,1].flatMap(s=>[-1,1].map(r=>Y(.045,.68,.045,s*(t/2-.11),.03,r*(n/2-.12),"metal"))),...[-1,1].map(s=>Y(t*.73,.036,.04,0,.51,s*n*.54,"metal")),...[-1,1].map(s=>Y(t*.63,.034,.042,0,.84,s*n*.54,"metal")),...[-1,1].map(s=>[Y(.035,.17,.035,-t*.28,.67,s*n*.54,"metal"),Y(.035,.17,.035,t*.28,.67,s*n*.54,"metal")]).flat(),...[-1,1].flatMap(s=>[-1,1].map(r=>Y(.12,.12,.12,s*(t/2-.13),.005,r*(n/2-.13),"trim"))),Y(t*.49,.021,n*.62,t*.13,.87,0,"glass"),Y(t*.47,.04,n*.46,0,.27,0,"metal")];case"cabinet":return[Y(t,e,n,0,0,0,"wood"),Y(t*.92,e*.78,.022,0,e*.13,n*.52,"trim"),...[-1,1].flatMap(s=>[Y(t*.44,e*.73,.029,s*t*.23,e*.155,n*.537,"wood"),Y(.028,.14,.047,s*t*.08,e*.5,n*.568,"metal")])];case"dresser":return[Y(t,e,n,0,0,0,"wood"),Y(t*1.04,.055,n*1.06,0,e-.05,0,"trim"),...[0,1,2].flatMap(s=>{const r=e*(.14+s*.252);return[Y(t*.88,e*.18,.026,0,r,n*.51,"trim"),Y(t*.82,e*.15,.031,0,r+e*.013,n*.53,"wood"),Y(t*.3,.036,.045,0,r+e*.06,n*.56,"metal")]})];case"stove":return[Y(t,e,n,0,0,0,"metal")];case"generator":case"boiler":return[Y(t,e,n,0,0,0,"metal"),Y(.2,.5,.2,0,e,0,"trim")];case"fridge":return[Y(t,e,n,0,0,0,"metal")];case"safe":return[Y(t,e,n,0,0,0,"metal"),Y(t*.78,e*.72,.03,0,e*.06,n*.52,"trim"),Y(.1,.1,.05,t*.18,e*.42,n*.55,"metal")];case"bed":return[Y(t,.11,n,0,.31,0,"metal"),Y(t*.91,.17,n*.9,0,.42,0,"fabric"),Y(t*.36,.095,n*.77,-t*.27,.6,0,"trim"),Y(t*.49,.052,n*.94,t*.18,.61,0,"glass"),Y(.065,.72,n*1.05,-t*.51,0,0,"metal"),Y(.065,.52,n*1.05,t*.51,0,0,"metal"),...[-1,1].flatMap(s=>[Y(t*.82,.044,.048,0,.82,s*n*.52,"metal"),Y(t*.8,.04,.06,0,.62,s*n*.52,"metal")]),...[-1,1].flatMap(s=>[-1,1].map(r=>Y(.047,.38,.047,s*t*.46,0,r*n*.44,"metal")))];case"wheelchair":{const s=[Y(t*.7,.085,n*.62,0,.47,.015,"fabric"),Y(t*.72,.47,.065,0,.57,-n*.37,"fabric"),Y(t*.8,.045,n*.65,0,.39,0,"metal"),...[-1,1].map(r=>Y(.04,.25,n*.64,r*t*.45,.51,0,"metal")),...[-1,1].map(r=>Y(.2,.045,n*.48,r*t*.43,.72,-n*.1,"fabric")),...[-1,1].map(r=>Y(.035,.47,.04,r*t*.43,.09,-n*.36,"metal")),Y(t*1.04,.035,.04,0,.34,n*.3,"metal")];for(const r of[-1,1]){const o=new $n(.27,.035,8,24);o.rotateY(Math.PI/2),o.translate(r*t*.5,.34,-.03),s.push({geo:o,mat:"metal"});const a=new $n(.27,.016,6,24);a.rotateY(Math.PI/2),a.translate(r*t*.5+r*.001,.34,-.03),s.push({geo:a,mat:"monster"});for(let l=0;l<6;l++){const c=Math.PI*l/3,h=new It(.012,.42,.018);h.rotateX(c),h.translate(r*t*.5,.34,-.03),s.push({geo:h,mat:"trim"})}}return s}case"plant":return[Y(.22,.28,.22,0,0,0,"trim")];case"beam":return[Y(t,e,n,0,0,0,"wood")];case"mannequin":return[Y(.32,.7,.16,0,.85,0,"monster"),Y(.18,.22,.16,0,1.55,0,"monster"),Y(.1,.7,.1,-.24,.85,0,"monster"),Y(.1,.7,.1,.24,.85,0,"monster")];case"pot":return[Y(.22,.2,.22,0,.7,0,"metal")];default:return[Y(t,e,n,0,0,0,"trim")]}}function b_(){const i=[Y(.4,.06,.4,0,.46,0,"wood"),Y(.4,.42,.06,0,.5,-.17,"wood"),Y(.05,.46,.05,-.16,0,-.16,"wood"),Y(.05,.46,.05,.16,0,-.16,"wood"),Y(.05,.46,.05,-.16,0,.16,"wood"),Y(.05,.46,.05,.16,0,.16,"wood")];return uu(i.map(e=>e.geo),!1)??new It(.4,.9,.4)}function Ro(i,t,e,n){const s=new ja(i,t,Math.max(1,e.length));return s.castShadow=!0,s.receiveShadow=!0,e.forEach((r,o)=>s.setMatrixAt(o,r)),e.length||(s.count=0),s.instanceMatrix.needsUpdate=!0,n.add(s),s}function S_(){const i=new Yt,t=new vn({color:"#c8c2b6",transparent:!0,opacity:.18,side:ge,depthWrite:!1}),e=new Z(new fe(.7,.7),t),n=new Z(new fe(.7,.7),t);return n.rotation.y=.8,i.add(e,n),i}function w_(i,t,e){const n=(r,o,a,l,c)=>{if(!r)return;const h=document.createElement("canvas");h.width=256,h.height=64;const u=h.getContext("2d");if(!u)return;u.fillStyle="#2a241e",u.fillRect(0,0,256,64),u.strokeStyle="#8a7a66",u.strokeRect(3,3,250,58),u.fillStyle="#e6d7c4",u.font="28px Georgia",u.textAlign="center",u.textBaseline="middle",u.fillText(r,128,34);const d=new Yi(h);d.colorSpace=_e;const p=new Z(new fe(.72,.18),new pt({map:d,roughness:.8,emissive:"#2a2118",emissiveIntensity:.25}));p.position.set(o,a,l),p.rotation.y=c,i.add(p)},s=Dt[t.floor]+2.15;t.axis==="x"?(n(t.signA??"",t.coord-.2,s,t.center,Math.PI/2),n(t.signB??"",t.coord+.2,s,t.center,-Math.PI/2)):(n(t.signA??"",t.center,s,t.coord-.2,0),n(t.signB??"",t.center,s,t.coord+.2,Math.PI))}function E_(i,t){const e=new Yt;let n;if(i.includes("fuse")){const s=i.includes("red")?"#b4231c":i.includes("blue")?"#2458a8":"#c6a227";n=new Z(new me(.05,.05,.16,8),new pt({color:s,roughness:.4,metalness:.3,emissive:s,emissiveIntensity:.2}))}else i==="battery"?n=new Z(new me(.05,.05,.16,8),t.metal):i.includes("key")?n=new Z(new It(.16,.04,.05),t.metal):i==="medkit"?n=new Z(new It(.22,.1,.16),new pt({color:"#f2f2f0",roughness:.5})):i==="rosary"?n=new Z(new $n(.08,.015,6,12),t.metal):i==="crowbar"?(n=new Z(new It(.5,.04,.04),t.metal),n.rotation.z=.4):i==="evidence"?n=new Z(new It(.28,.04,.2),t.door):n=new Z(new It(.2,.02,.16),t.door);return e.add(n),e}const Wc=.4,T_=1-1e-6;function tl(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function pu(i){const t=new Set,e=new Set;for(const n of i){if(!n.id||!n.roomId||t.has(n.id))throw new Error("Duplicate or empty container ID: "+n.id);if(t.add(n.id),n.kind!=="drawer"&&n.kind!=="cabinet")throw new Error("Invalid container kind: "+n.id);if(n.duration!==void 0&&(!Number.isFinite(n.duration)||n.duration<=0))throw new Error("Invalid animation duration: "+n.id);if(n.slideDistance!==void 0&&(!Number.isFinite(n.slideDistance)||n.slideDistance<0))throw new Error("Invalid slide distance: "+n.id);if(n.swingRadians!==void 0&&(!Number.isFinite(n.swingRadians)||n.swingRadians<0))throw new Error("Invalid swing angle: "+n.id);for(const s of n.contents){if(!s.id||!s.itemId||e.has(s.id))throw new Error("Duplicate or invalid loot-slot ID: "+s.id);e.add(s.id)}}}function ys(){return{progress:0,target:"closed",takenIds:[]}}function mu(i,t){return i.inRange?i.lineOfSight?t.requiresItem&&!i.hasRequiredItem?"locked":null:"occluded":"out_of_range"}function A_(i,t,e){const n=mu(e,i);if(n)return{state:t,effect:n};const s=t.target==="open"?1:0;if(Math.abs(tl(t.progress)-s)>1e-6)return{state:t,effect:"busy"};const r=t.target==="open"?"closed":"open";return{state:{...t,target:r},effect:r==="open"?"opening":"closing"}}function R_(i,t,e,n=!1){if(n)return t;const s=Ta(e);if(s===0)return t;const r=i.duration??Wc,o=s/(Number.isFinite(r)&&r>0?r:Wc),a=t.target==="open"?1:0,l=tl(t.progress);if(Math.abs(l-a)<=1e-6)return t;const c=a>l?Math.min(1,l+o):Math.max(0,l-o);return{...t,progress:c}}function C_(i,t){const e=tl(t.progress);return{slide:i.kind==="drawer"?e*(i.slideDistance??.28):0,swing:i.kind==="cabinet"?e*(i.swingRadians??Math.PI*.53):0}}function P_(i,t,e,n,s){const r=mu(n,i);if(r)return{state:t,itemId:null,effect:r};if(t.progress<T_||t.target!=="open")return{state:t,itemId:null,effect:"closed"};const o=i.contents.find(a=>a.id===e);return o?t.takenIds.includes(e)?{state:t,itemId:null,effect:"already_taken"}:s?{state:{...t,takenIds:[...t.takenIds,e]},itemId:o.itemId,effect:"taken"}:{state:t,itemId:null,effect:"no_space"}:{state:t,itemId:null,effect:"unknown"}}function k_(i,t){return pu(i),{version:1,containers:i.map(e=>{const n=t.get(e.id)??ys(),s=new Set(e.contents.map(r=>r.id));return{id:e.id,open:n.target==="open",takenIds:[...new Set(n.takenIds.filter(r=>s.has(r)))]}})}}function Xc(i,t){pu(i);const e=new Map,n=t&&typeof t=="object"?t:null,s=n?.version===1&&Array.isArray(n.containers)?n.containers:[];for(const r of i){const o=s.find(h=>!!h&&typeof h=="object"&&h.id===r.id),a=new Set(r.contents.map(h=>h.id)),l=o?.open===!0,c=Array.isArray(o?.takenIds)?[...new Set(o.takenIds.filter(h=>typeof h=="string"&&a.has(h)))]:[];e.set(r.id,{progress:l?1:0,target:l?"open":"closed",takenIds:c})}return e}const Pa=new pt({color:"#4a382c",roughness:.84}),gu=new pt({color:"#8d6b52",roughness:.68}),vu=new pt({color:"#b7aa96",metalness:.55,roughness:.38}),D_=new pt({color:"#d7c39a",roughness:1}),xu=new pt({color:"#2a211b",roughness:1});function I_(i){const t=Ze.find(s=>s.id===i.spec.roomId),e=t?Dt[t.floor]:0,n=new Yt;return n.position.set(i.x,e+i.y,i.z),n.rotation.y=i.yaw,i.spec.kind==="drawer"?L_(i.spec,n):U_(n)}function L_(i,t){const e=new Z(new It(.78,.24,.42),Pa);e.position.z=-.16;const n=new Yt,s=new Z(new It(.72,.16,.4),gu),r=new Z(new It(.6,.03,.26),xu);r.position.y=.07;const o=new Z(new It(.02,.08,.28),Pa);o.position.set(-.28,.08,0);const a=o.clone();a.position.x=.28;const l=new Z(new It(.16,.025,.03),vu);if(l.position.set(0,.02,.21),n.add(s,r,o,a,l),i.contents.length){const c=new Z(new It(.28,.012,.16),D_);c.name="loot",c.position.y=.1,n.add(c)}return t.add(e,n),{id:i.id,root:t,mover:n}}function U_(i){const t=new Z(new It(.86,1.15,.4),Pa);t.position.z=-.12;const e=new Z(new It(.7,.95,.02),xu);e.position.z=.02;const n=new Yt;n.position.set(-.4,0,.1);const s=new Z(new It(.78,1.05,.035),gu);s.position.x=.39;const r=new Z(new It(.025,.12,.035),vu);return r.position.set(.66,0,.03),n.add(s,r),i.add(t,e,n),{id:"",root:i,mover:n}}function N_(i,t,e){const n=C_(i,t);i.kind==="drawer"?(e.position.z=n.slide,e.rotation.y=0):(e.position.z=0,e.rotation.y=-n.swing)}const Bi=[{spec:{id:"rec_desk_drawer",roomId:"reception",kind:"drawer",contents:[{id:"loot_note_log",itemId:"note_log"}],slideDistance:.22},x:4,z:8.95,y:.78,yaw:Math.PI},{spec:{id:"rec_file_empty",roomId:"reception",kind:"drawer",contents:[],slideDistance:.2},x:8.35,z:2.55,y:.42,yaw:0},{spec:{id:"rec_file_journal",roomId:"reception",kind:"drawer",contents:[{id:"loot_file_1",itemId:"file_1"}],slideDistance:.2},x:8.8,z:2.55,y:.78,yaw:0},{spec:{id:"rec_file_battery",roomId:"reception",kind:"drawer",contents:[{id:"loot_rec_battery",itemId:"battery"}],slideDistance:.2},x:9.25,z:2.55,y:1.14,yaw:0},{spec:{id:"ark_table_drawer",roomId:"arkiv",kind:"drawer",contents:[{id:"loot_note_code",itemId:"note_code"}],slideDistance:.22},x:8,z:2.9,y:.72,yaw:0},{spec:{id:"ark_file_drawer",roomId:"arkiv",kind:"drawer",contents:[{id:"loot_file_2",itemId:"file_2"}],slideDistance:.2},x:3.7,z:2.55,y:.7,yaw:0},{spec:{id:"ark_locked_cabinet",roomId:"arkiv",kind:"cabinet",contents:[{id:"loot_file_3",itemId:"file_3"}],requiresItem:"key_arkiv",swingRadians:.9},x:1.35,z:10.35,y:1.05,yaw:Math.PI},{spec:{id:"pers_side_drawer",roomId:"personalerum",kind:"drawer",contents:[{id:"loot_pers_battery",itemId:"battery"}],slideDistance:.2},x:44.2,z:8.9,y:.7,yaw:Math.PI},{spec:{id:"pers_wardrobe",roomId:"personalerum",kind:"cabinet",contents:[{id:"loot_file_4",itemId:"file_4"}],swingRadians:.9},x:46.55,z:2.7,y:1.05,yaw:0},{spec:{id:"op_fuse_drawer",roomId:"operationsstue",kind:"drawer",contents:[{id:"loot_fuse_red",itemId:"fuse_red"}],slideDistance:.2},x:26.8,z:2.7,y:.85,yaw:0},{spec:{id:"lab_fuse_drawer",roomId:"laboratorium",kind:"drawer",contents:[{id:"loot_fuse_blue",itemId:"fuse_blue"}],slideDistance:.2},x:16,z:8.7,y:.82,yaw:Math.PI},{spec:{id:"kael_note_drawer",roomId:"kaeldergang",kind:"drawer",contents:[{id:"loot_note_generator",itemId:"note_generator"}],slideDistance:.2},x:2.6,z:2.65,y:.7,yaw:0},{spec:{id:"kael_fuse_cabinet",roomId:"kaeldergang",kind:"cabinet",contents:[{id:"loot_fuse_yellow",itemId:"fuse_yellow"}],swingRadians:.85},x:4.4,z:2.55,y:1,yaw:0},{spec:{id:"pat_med_drawer",roomId:"patientgang",kind:"drawer",contents:[{id:"loot_pat_battery",itemId:"battery"}],slideDistance:.18},x:20.15,z:2.65,y:.78,yaw:0},{spec:{id:"obd_file_drawer",roomId:"obduktion",kind:"drawer",contents:[{id:"loot_file_5",itemId:"file_5"}],slideDistance:.2},x:30.8,z:2.65,y:.8,yaw:0},{spec:{id:"obs_empty_drawer",roomId:"observation",kind:"drawer",contents:[],slideDistance:.18},x:30,z:2.85,y:.62,yaw:0},{spec:{id:"kam_empty_drawer",roomId:"kammer",kind:"drawer",contents:[],slideDistance:.18},x:38.1,z:2.6,y:.7,yaw:0}];function Co(){return Bi.map(i=>i.spec)}class F_{constructor(t){this.scene=t,this.reset();for(const e of Bi){const n=I_(e);n.id=e.spec.id,this.scene.add(n.root),this.rigs.push(n)}}states=new Map;rigs=[];reset(){this.states=Xc(Co(),null)}load(t){this.states=Xc(Co(),t),this.pose()}save(){return k_(Co(),this.states)}step(t,e){for(const n of Bi){const s=this.states.get(n.spec.id)??ys();this.states.set(n.spec.id,R_(n.spec,s,t,e))}this.pose()}candidates(){return Bi.map(t=>{const e=this.states.get(t.spec.id)??ys(),n=qc(t);return{id:t.spec.id,kind:"container",x:n.x,y:n.y,z:n.z,radius:.36,prompt:O_(t,e)}})}state(t){return this.states.get(t)??null}use(t,e,n,s,r){const o=Bi.find(p=>p.spec.id===t);if(!o)return{effect:"unknown",itemId:null,kind:"drawer",x:0,y:0,z:0};const a=qc(o),l={kind:o.spec.kind,x:a.x,y:a.y,z:a.z},c={inRange:!0,lineOfSight:Ps(e,a,r),hasRequiredItem:!o.spec.requiresItem||n(o.spec.requiresItem)};let h=this.states.get(t)??ys();const u=o.spec.contents.find(p=>!h.takenIds.includes(p.id));if(h.target==="open"&&h.progress>.999&&u){const p=P_(o.spec,h,u.id,c,s(u.itemId));return this.states.set(t,p.state),{effect:p.effect,itemId:p.itemId,...l}}const d=A_(o.spec,h,c);return this.states.set(t,d.state),{effect:d.effect,itemId:null,...l}}pose(){for(const t of this.rigs){const e=Bi.find(r=>r.spec.id===t.id);if(!e)continue;const n=this.states.get(t.id)??ys();N_(e.spec,n,t.mover);const s=e.spec.contents.some(r=>!n.takenIds.includes(r.id));t.mover.traverse(r=>{r.name==="loot"&&(r.visible=s&&n.progress>.35)})}}}function qc(i){const t=Ze.find(n=>n.id===i.spec.roomId),e=.46;return{x:i.x+Math.sin(i.yaw)*e,y:(t?Dt[t.floor]:0)+Math.max(i.y,.95),z:i.z+Math.cos(i.yaw)*e}}function O_(i,t){const e=i.spec.kind==="cabinet";return i.spec.requiresItem&&t.target==="closed"?e?"Låst skab":"Låst skuffe":t.target==="open"&&t.progress>.98?i.spec.contents.some(s=>!t.takenIds.includes(s.id))?"Tag indholdet":e?"Luk lågen":"Luk skuffen":e?"Skab":"Skuffe"}class z_{constructor(t){this.el=t,window.addEventListener("keydown",e=>{Yc(e.target)&&e.code!=="Escape"||((e.ctrlKey||e.metaKey||e.code==="ControlLeft"||e.code==="ControlRight")&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),this.edges.add(e.code),["KeyE","KeyF","KeyR","Tab","KeyI","Escape","KeyG","KeyQ","Space","F3","F4","ArrowUp","ArrowDown","Enter"].includes(e.code)&&e.preventDefault()))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("mousemove",e=>{(this.pointerLocked||e.buttons===1)&&(this.lookX+=e.movementX,this.lookY+=e.movementY)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.el}),window.addEventListener("blur",()=>{this.keys.clear()})}keys=new Set;edges=new Set;lookX=0;lookY=0;pointerLocked=!1;virtual=null;sens=.00215;setSensitivity(t){this.sens=t}consumeLook(){const t=this.lookX*this.sens,e=this.lookY*this.sens;return this.lookX=0,this.lookY=0,{x:t,y:e}}wish(){const t=this.virtual,e=r=>this.keys.has(r),n=t?.forward??(e("KeyW")||e("ArrowUp")?1:0)-(e("KeyS")||e("ArrowDown")?1:0),s=t?.strafe??(e("KeyD")||e("ArrowRight")?1:0)-(e("KeyA")||e("ArrowLeft")?1:0);return{forward:n,strafe:s,sprint:t?.sprint??(e("ShiftLeft")||e("ShiftRight")),crouch:t?.crouch??(e("ControlLeft")||e("ControlRight")||e("KeyC")),jump:t?.jump??e("Space")}}pressed(t){return this.edges.has(t)?(this.edges.delete(t),!0):!1}formFocused(){return Yc(document.activeElement)}takeFirst(t){for(const e of t)if(this.edges.has(e))return this.edges.delete(e),e;return null}discard(t){for(const e of t)this.edges.delete(e)}lock(){const e=this.el.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}unlock(){document.pointerLockElement&&document.exitPointerLock()}}function Yc(i){if(!(i instanceof HTMLElement))return!1;if(i.isContentEditable)return!0;const t=i.tagName;if(t==="TEXTAREA"||t==="SELECT")return!0;if(t!=="INPUT")return!1;const e=i.type;return e!=="button"&&e!=="submit"&&e!=="checkbox"&&e!=="radio"}const B_=["Escape","Tab","KeyI"],G_=["KeyE","KeyF","KeyR","KeyG","KeyQ","Space","F3","F4","F6","F7"];function H_(i){return i==="ArrowUp"||i==="KeyW"?"up":i==="ArrowDown"||i==="KeyS"?"down":i==="Enter"||i==="KeyE"?"use":"none"}function V_(i,t){if(!t)return{type:"none"};if(i==="playing"){if(t==="Escape")return{type:"mode",mode:"paused"};if(t==="Tab"||t==="KeyI")return{type:"mode",mode:"inventory"}}else if(i==="paused"){if(t==="Escape")return{type:"mode",mode:"playing"};if(t==="Tab"||t==="KeyI")return{type:"mode",mode:"inventory"}}else if(i==="inventory"){if(t==="Escape"||t==="Tab"||t==="KeyI")return{type:"mode",mode:"playing"}}else if(i==="examine"||i==="keypad"){if(t==="Escape")return{type:"mode",mode:"playing"}}else if((i==="settings"||i==="slots"||i==="credits"||i==="exit")&&t==="Escape")return{type:"back"};return{type:"none"}}const W_="1907",je=(i,t,e,n)=>({id:i,name:t,description:e,kind:"note",stack:1,droppable:!1,text:n}),gi={note_maja:je("note_maja","Majas brev","Kuverten er fugtig. Blækket er Majas.",`Emil

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
Hemmelige rum er ikke tegnet. Tunnellen er kun en stiplet streg.`}},el=["file_1","file_2","file_3","file_4","file_5","file_6"];function si(i){const t=gi[i];if(!t)throw new Error(`Ukendt genstand: ${i}`);return t}function _u(i){return i.map(t=>({...t}))}function nl(i,t){return i.reduce((e,n)=>n.itemId===t?e+n.count:e,0)}function ue(i,t){return nl(i,t)>0}function Ni(i,t,e=1){const n=gi[t];if(!n||!Number.isFinite(e)||e<=0)return{slots:i,added:0};const s=_u(i);let r=Math.min(e,Math.max(0,n.stack-nl(s,t)));const o=r,a=s.find(l=>l.itemId===t);if(a){const l=Math.min(r,n.stack-a.count);a.count+=l,r-=l}return r>0&&s.push({itemId:t,count:r}),{slots:s,added:o}}function Tr(i,t,e=1){const n=_u(i);let s=e;for(let r=n.length-1;r>=0&&s>0;r--){if(n[r].itemId!==t)continue;const o=Math.min(n[r].count,s);n[r].count-=o,s-=o,n[r].count<=0&&n.splice(r,1)}return n}function jc(i,t){const e=gi[t];return!e||!e.droppable||nl(i,t)<=0?{slots:i,dropped:!1}:{slots:Tr(i,t,1),dropped:!0}}function X_(i,t){const e=gi[t];return!e||e.kind!=="consumable"||!ue(i,t)?{slots:i,heal:0}:{slots:Tr(i,t,1),heal:e.heal??0}}const yu=100,Mu=100/170,q_=Mu*.18,Y_=45;function j_(i,t,e){const n=Math.max(0,e);let s=i,r=t,o=!1;return r?(s=Math.max(0,s-Mu*n),s<=0&&(r=!1,o=!0)):s=Math.min(yu,s+q_*n),{charge:s,on:r,died:o}}function Po(i,t=Y_){return Math.min(yu,Math.max(0,i)+t)}function hr(i){return i<=.5?"empty":i<12?"critical":i<25?"low":"ok"}const $_=["fuse_red","fuse_blue","fuse_yellow"];function ur(i,t){return i.readIds.includes(t)}function K_(i){return $_.filter(t=>ue(i.inventory,t)).length}function $c(i){return["key_op","key_arkiv","key_kapel"].filter(t=>ue(i.inventory,t)).length}function ko(i){return el.filter(t=>ue(i.inventory,t)).length}const il=[{id:"m1_brev",requires:[],text:()=>"Læs Majas brev.",hint:()=>"Det ligger i inventaret. Undersøg det.",done:i=>ur(i,"note_maja")},{id:"m2_reception",requires:["m1_brev"],text:()=>"Læs vagtbogen i receptionen.",hint:()=>"Den ligger ved skranken.",done:i=>ur(i,"note_log")},{id:"m3_generator",requires:["m2_reception"],text:i=>i.flags.generatorOn?"Generatoren kører.":`Find tre sikringer og start generatoren (${K_(i)}/3).`,hint:i=>ur(i,"note_generator")?"Rød, blå og gul skal sidde i generatoren samtidig.":"Nødstrømmen står et sted i kælderen.",done:i=>i.flags.generatorOn},{id:"m4_arkiv",requires:["m2_reception"],text:()=>"Undersøg arkivet og find stiftelsesprotokollen.",hint:()=>"Protokollen siger, hvilket årstal pengeskabet bruger.",done:i=>ur(i,"note_code")},{id:"m5_nogler",requires:["m4_arkiv"],text:i=>`Find nøglerne fra operationsstuen, arkivet og kapellet (${$c(i)}/3).`,hint:()=>"De tre nøgler ligger ikke i samme rum.",done:i=>$c(i)>=3},{id:"m6_beviser",requires:["m5_nogler"],optional:!0,text:i=>i.flags.secretOpen?`Den skjulte gang er åben. Saml journaler (${ko(i)}/6) og bevismappen.`:`Saml patientjournaler (${ko(i)}/6) og kapellets bevismappe.`,hint:()=>"Det ændrer slutningen. Det låser ikke døren.",done:i=>ue(i.inventory,"evidence")&&ko(i)>=6},{id:"m7_udgang",requires:["m5_nogler"],text:()=>"Åbn UD TIL STILHEDEN.",hint:i=>i.flags.generatorOn?i.flags.safeOpen?"Tre nøgler, strøm og hovednøglen.":"Pengeskabet bruger stiftelsesåret.":"Bagporten er død uden strøm.",done:()=>!1}];function Z_(i){const t=il.find(e=>e.id===i);if(!t)throw new Error(`Ukendt mission: ${i}`);return t}function bu(i,t){return i.requires.every(e=>Z_(e).done(t))}function J_(i,t){return{id:i.id,text:i.text(t),done:i.done(t),hint:i.hint(t),optional:!!i.optional}}function Q_(i){return il.filter(t=>bu(t,i)).map(t=>J_(t,i))}function ty(i){const t=Q_(i).filter(e=>!e.optional);return t.find(e=>!e.done)??t[t.length-1]}function ey(i){const t=il.filter(n=>!n.optional&&n.id!=="m7_udgang");return t.filter(n=>bu(n,i)&&n.done(i)).length/t.length}const di={x:6,y:0,z:6,yaw:Math.PI/2},dr={x:42,y:0,z:9,yaw:Math.PI};function Ar(){return{version:1,playTime:0,player:{x:di.x,y:di.y,z:di.z,yaw:di.yaw,pitch:0,health:100,stamina:100,battery:100,flashlightOn:!1,crouching:!1},inventory:[{itemId:"note_maja",count:1}],pickedUp:[],flags:{generatorOn:!1,secretOpen:!1,safeOpen:!1,radioOn:!1,introDone:!1,mannequinUsed:!1,mannequinOn:!1,powerCut:!1},visited:["reception"],doorsOpen:[],doorsUnlocked:[],monster:{x:dr.x,y:dr.y,z:dr.z,yaw:dr.yaw,state:"Patrol",waypointIndex:0,suspicion:0,blindTime:0},rosaryCharges:2,iFrame:0,events:ks(),readIds:[]}}function Su(i){return el.reduce((t,e)=>t+(ue(i.inventory,e)?1:0),0)}const wu=[{id:"key_op",name:"Nøgle fra operationsstuen"},{id:"key_arkiv",name:"Nøgle fra arkivet"},{id:"key_kapel",name:"Nøgle fra kapellet"}];function Kc(i){return wu.filter(t=>ue(i.inventory,t.id)).length}function ny(i){return wu.filter(t=>!ue(i.inventory,t.id)).map(t=>t.name)}function Eu(i){const t=ny(i);return t.length?`UD TIL STILHEDEN er låst. Mangler: ${t.join(", ")}.`:i.flags.generatorOn?!i.flags.safeOpen&&!ue(i.inventory,"master_key")?"Kræver hovednøglen fra pengeskabet.":null:"Låsen er død. Generatoren mangler strøm."}function Zc(i,t,e){return e&&i.flags.secretOpen&&t==="slagterum"?"tunnel":t==="stilhed"&&Eu(i)===null?"yard":null}function fr(i){return ty(i)}function iy(i){return ey(i)}function sy(i,t){if(t==="death")return"optagelsen";if(t==="tunnel")return"flugten";const e=Su(i),n=ue(i.inventory,"evidence"),s=ue(i.inventory,"rosary");return n&&s&&e>=6?"vidnet":n?"sandheden":"tom_port"}function ry(i){switch(i){case"vidnet":return{kicker:"Afslutning",title:"Vidnet",paragraphs:["Bagporten giver sig, da strømmen og nøglen endelig er enige. Regnen er koldere end huset. Under armen har du bevismappen, rosenkransen og alle seks journaler.","Maja står ikke på vejen. Det gør ingen. Men navnene gør. I morgen er Skt. Agnes ikke længere en anekdote, nogen kan lukke en dør på.","Et sted bag dig standser et par skridt ved tærsklen og bliver der. Huset husker. Nu gør nogen udenfor det også."]};case"sandheden":return{kicker:"Afslutning",title:"Sandheden",paragraphs:["Du har ikke hvert ark. Du har nok. Bevismappen vejer mere end lygten, og porten lukker bag dig med en lyd der endelig lyder som en lås og ikke som en mund.","Artiklen vil blive modsagt. Det er i orden. Modsigelse er også et spor, og spor er det eneste, Vogteren ikke kan patruljere."]};case"tom_port":return{kicker:"Afslutning",title:"Den tomme port",paragraphs:["Porten åbner. Du løber. Dine hænder er tomme.",'I dagslys vil du lyde som alle de andre, der "bare havde en fornemmelse" af Skt. Agnes. Huset beholder papirerne. Du beholder pulsen. Ingen af delene rækker.']};case"flugten":return{kicker:"Afslutning",title:"Flugten",paragraphs:["Tunnellen lugter af jern og regn. Du kravler ud under marehalmen, og vinden tager lygten et øjeblik, før den giver den tilbage.","Bag dig bliver bygningen stående med sine arkiver, sine senge og sin vagt. Du slap ud. Det er ikke det samme som at afslutte noget."]};case"optagelsen":return{kicker:"Afslutning",title:"Optagelsen",paragraphs:["Lygten peger op i loftet. Nogen samler den op. Det er ikke dig.","Dit navn står på en linje, der ikke fandtes i går, med en håndskrift du genkender. Vogteren retter på uniformen og fortsætter sin runde. Der er én seng mere, end der var."]}}}const Tu=[0,1,2,3],Au=i=>`skt-agnes-save-${i}`;function oy(){return localStorage}const ay=new Set(["note","story","map","collectible"]),ly=new Set(["Idle","Patrol","Investigate","Search","Suspicious","Chase","Attack","LostPlayer","ReturnToPatrol"]);function Le(i,t){return typeof i=="number"&&Number.isFinite(i)?i:t}function gs(i,t,e){return Math.max(t,Math.min(e,i))}function vs(i){return Array.isArray(i)?i.filter(t=>typeof t=="string"):[]}function cy(i){if(!Array.isArray(i))return[];const t=new Map;for(const e of i){if(!e||typeof e!="object")continue;const n=e.itemId,s=e.count,r=typeof n=="string"?gi[n]:void 0;!r||typeof s!="number"||!Number.isFinite(s)||s<=0||t.set(n,Math.min(r.stack,(t.get(n)??0)+s))}return[...t].map(([e,n])=>({itemId:e,count:Math.floor(n)}))}function hy(i){if(!i||typeof i!="object")return null;const t=i;if(!t.player||typeof t.player.x!="number"||!Number.isFinite(t.player.x)||!Array.isArray(t.inventory))return null;const e=Ar(),n=cy(t.inventory),s=t.readIds,r=Array.isArray(s)?s.filter(c=>typeof c=="string"&&!!gi[c]):n.map(c=>c.itemId).filter(c=>c!=="note_maja"&&ay.has(gi[c]?.kind??"")),o={...e.flags},a=t.flags??{};for(const c of Object.keys(e.flags))o[c]=a[c]===!0;const l=t.monster&&typeof t.monster.x=="number"?t.monster:e.monster;return{...e,version:1,playTime:Math.max(0,Le(t.playTime,0)),player:{...e.player,x:t.player.x,y:Le(t.player.y,e.player.y),z:Le(t.player.z,e.player.z),yaw:Le(t.player.yaw,e.player.yaw),pitch:gs(Le(t.player.pitch,0),-1.2,1.2),health:gs(Le(t.player.health,100),0,100),stamina:gs(Le(t.player.stamina,100),0,100),battery:gs(Le(t.player.battery,100),0,100),flashlightOn:t.player.flashlightOn===!0,crouching:t.player.crouching===!0},inventory:n,pickedUp:vs(t.pickedUp),flags:o,visited:vs(t.visited).length?vs(t.visited):e.visited,doorsOpen:vs(t.doorsOpen),doorsUnlocked:vs(t.doorsUnlocked),monster:{...e.monster,x:Le(l.x,e.monster.x),y:Le(l.y,e.monster.y),z:Le(l.z,e.monster.z),yaw:Le(l.yaw,e.monster.yaw),state:ly.has(l.state)?l.state:e.monster.state,waypointIndex:Number.isInteger(l.waypointIndex)?l.waypointIndex:0,suspicion:Le(l.suspicion,0),blindTime:Le(l.blindTime,0)},rosaryCharges:gs(Math.round(Le(t.rosaryCharges,e.rosaryCharges)),0,2),iFrame:Math.max(0,Le(t.iFrame,0)),events:t.events&&Array.isArray(t.events.jumps)?{...ks(),...t.events,jumps:t.events.jumps.filter(c=>typeof c=="string"),beats:Array.isArray(t.events.beats)?t.events.beats.filter(c=>typeof c=="string"):[]}:ks(),readIds:r,containers:t.containers&&typeof t.containers=="object"?t.containers:void 0}}function uy(i,t,e,n=Date.now()){const s={version:1,slot:t,savedAt:n,snapshot:structuredClone(e)};return i.setItem(Au(t),JSON.stringify(s)),s}function Es(i,t){const e=i.getItem(Au(t));if(!e)return null;try{const n=JSON.parse(e);if(!n||n.version!==void 0&&n.version!==1)return null;const s=hy(n.snapshot);return s?{version:1,slot:t,savedAt:typeof n.savedAt=="number"&&Number.isFinite(n.savedAt)?n.savedAt:0,snapshot:s}:null}catch{return null}}function Jc(i){return Tu.map(t=>Es(i,t))}function Qc(i){let t=null;for(const e of Tu){const n=Es(i,e);n&&(!t||n.savedAt>t.savedAt)&&(t=n)}return t}const Ru="skt-agnes-settings";function ka(){const i=typeof navigator<"u"?navigator:void 0,t=i?i.deviceMemory:void 0,e=i?.hardwareConcurrency;return{quality:t!==void 0&&t<=4||e!==void 0&&e<=4?"low":"medium",resolutionScale:1,mouseSensitivity:95e-5,masterVolume:.8,musicVolume:.7,sfxVolume:.85,brightness:1,fpsCap:60,fullscreen:!1,motionBlur:!1,cameraShake:!0,reduceFlicker:!1,subtitles:!0,invertY:!1}}function Fi(i,t,e){return Math.max(t,Math.min(e,i))}function sl(i){const t=ka(),e=i??{},n=e.quality==="low"||e.quality==="high"||e.quality==="medium"?e.quality:t.quality,s=e.fpsCap,r=s===0||s===30||s===60||s===120?s:t.fpsCap;return{quality:n,resolutionScale:Fi(typeof e.resolutionScale=="number"?e.resolutionScale:t.resolutionScale,.5,1.25),mouseSensitivity:Fi(typeof e.mouseSensitivity=="number"?e.mouseSensitivity:t.mouseSensitivity,4e-4,.01),masterVolume:Fi(typeof e.masterVolume=="number"?e.masterVolume:t.masterVolume,0,1),musicVolume:Fi(typeof e.musicVolume=="number"?e.musicVolume:t.musicVolume,0,1),sfxVolume:Fi(typeof e.sfxVolume=="number"?e.sfxVolume:t.sfxVolume,0,1),brightness:Fi(typeof e.brightness=="number"?e.brightness:t.brightness,.55,1.6),fpsCap:r,fullscreen:typeof e.fullscreen=="boolean"?e.fullscreen:t.fullscreen,motionBlur:typeof e.motionBlur=="boolean"?e.motionBlur:t.motionBlur,cameraShake:typeof e.cameraShake=="boolean"?e.cameraShake:t.cameraShake,reduceFlicker:typeof e.reduceFlicker=="boolean"?e.reduceFlicker:t.reduceFlicker,subtitles:typeof e.subtitles=="boolean"?e.subtitles:t.subtitles,invertY:typeof e.invertY=="boolean"?e.invertY:t.invertY}}function dy(i){const t=i.getItem(Ru);if(!t)return ka();try{return sl(JSON.parse(t))}catch{return ka()}}function fy(i,t){i.setItem(Ru,JSON.stringify(sl(t)))}const Ts={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const py=new Wa(-1,1,1,-1,0,1);class my extends Ae{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const gy=new my;class Nr{constructor(t){this._mesh=new Z(gy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,py)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Da extends xi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pn.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Nr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class th extends xi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class vy extends xi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class eh{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new lt);this._width=n.width,this._height=n.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Da(Ts),this.copyPass.material.blending=ze,this.clock=new dv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}th!==void 0&&(o instanceof th?n=!0:o instanceof vy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nh extends xi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Vt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const xy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Qi extends xi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new Vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Je(r,o,{type:un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Je(r,o,{type:un});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=xy;this.highPassUniforms=Pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new lt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ts;this.copyUniforms=Pn.clone(h.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:wr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Vt,this.oldClearAlpha=1,this.basic=new vn,this.fsQuad=new Nr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Qi.BlurDirectionX=new lt(1,0);Qi.BlurDirectionY=new lt(0,1);const _y={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class yy extends xi{constructor(){super();const t=_y;this.uniforms=Pn.clone(t.uniforms),this.material=new tv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Nr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class My{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,p=c-u,f=t-d,v=e-p;let m,g;f>v?(m=1,g=0):(m=0,g=1);const S=f-m+h,A=v-g+h,y=f-1+2*h,w=v-1+2*h,P=l&255,T=c&255,x=this.perm[P+this.perm[T]]%12,_=this.perm[P+m+this.perm[T+g]]%12,b=this.perm[P+1+this.perm[T+1]]%12;let M=.5-f*f-v*v;M<0?n=0:(M*=M,n=M*M*this.dot(this.grad3[x],f,v));let k=.5-S*S-A*A;k<0?s=0:(k*=k,s=k*k*this.dot(this.grad3[_],S,A));let I=.5-y*y-w*w;return I<0?r=0:(I*=I,r=I*I*this.dot(this.grad3[b],y,w)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),p=1/6,f=(h+u+d)*p,v=h-f,m=u-f,g=d-f,S=t-v,A=e-m,y=n-g;let w,P,T,x,_,b;S>=A?A>=y?(w=1,P=0,T=0,x=1,_=1,b=0):S>=y?(w=1,P=0,T=0,x=1,_=0,b=1):(w=0,P=0,T=1,x=1,_=0,b=1):A<y?(w=0,P=0,T=1,x=0,_=1,b=1):S<y?(w=0,P=1,T=0,x=0,_=1,b=1):(w=0,P=1,T=0,x=1,_=1,b=0);const M=S-w+p,k=A-P+p,I=y-T+p,H=S-x+2*p,C=A-_+2*p,F=y-b+2*p,G=S-1+3*p,L=A-1+3*p,W=y-1+3*p,J=h&255,rt=u&255,ot=d&255,Nt=this.perm[J+this.perm[rt+this.perm[ot]]]%12,$=this.perm[J+w+this.perm[rt+P+this.perm[ot+T]]]%12,nt=this.perm[J+x+this.perm[rt+_+this.perm[ot+b]]]%12,ft=this.perm[J+1+this.perm[rt+1+this.perm[ot+1]]]%12;let it=.6-S*S-A*A-y*y;it<0?s=0:(it*=it,s=it*it*this.dot3(this.grad3[Nt],S,A,y));let mt=.6-M*M-k*k-I*I;mt<0?r=0:(mt*=mt,r=mt*mt*this.dot3(this.grad3[$],M,k,I));let yt=.6-H*H-C*C-F*F;yt<0?o=0:(yt*=yt,o=yt*yt*this.dot3(this.grad3[nt],H,C,F));let Rt=.6-G*G-L*L-W*W;return Rt<0?a=0:(Rt*=Rt,a=Rt*Rt*this.dot3(this.grad3[ft],G,L,W)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,p,f;const v=(t+e+n+s)*l,m=Math.floor(t+v),g=Math.floor(e+v),S=Math.floor(n+v),A=Math.floor(s+v),y=(m+g+S+A)*c,w=m-y,P=g-y,T=S-y,x=A-y,_=t-w,b=e-P,M=n-T,k=s-x,I=_>b?32:0,H=_>M?16:0,C=b>M?8:0,F=_>k?4:0,G=b>k?2:0,L=M>k?1:0,W=I+H+C+F+G+L,J=o[W][0]>=3?1:0,rt=o[W][1]>=3?1:0,ot=o[W][2]>=3?1:0,Nt=o[W][3]>=3?1:0,$=o[W][0]>=2?1:0,nt=o[W][1]>=2?1:0,ft=o[W][2]>=2?1:0,it=o[W][3]>=2?1:0,mt=o[W][0]>=1?1:0,yt=o[W][1]>=1?1:0,Rt=o[W][2]>=1?1:0,ne=o[W][3]>=1?1:0,Gt=_-J+c,le=b-rt+c,O=M-ot+c,Ce=k-Nt+c,Xt=_-$+2*c,qt=b-nt+2*c,Pt=M-ft+2*c,ie=k-it+2*c,Ct=_-mt+3*c,D=b-yt+3*c,E=M-Rt+3*c,V=k-ne+3*c,Q=_-1+4*c,et=b-1+4*c,K=M-1+4*c,St=k-1+4*c,ht=m&255,gt=g&255,Wt=S&255,st=A&255,Mt=a[ht+a[gt+a[Wt+a[st]]]]%32,kt=a[ht+J+a[gt+rt+a[Wt+ot+a[st+Nt]]]]%32,Lt=a[ht+$+a[gt+nt+a[Wt+ft+a[st+it]]]]%32,bt=a[ht+mt+a[gt+yt+a[Wt+Rt+a[st+ne]]]]%32,jt=a[ht+1+a[gt+1+a[Wt+1+a[st+1]]]]%32;let Ut=.6-_*_-b*b-M*M-k*k;Ut<0?h=0:(Ut*=Ut,h=Ut*Ut*this.dot4(r[Mt],_,b,M,k));let Zt=.6-Gt*Gt-le*le-O*O-Ce*Ce;Zt<0?u=0:(Zt*=Zt,u=Zt*Zt*this.dot4(r[kt],Gt,le,O,Ce));let N=.6-Xt*Xt-qt*qt-Pt*Pt-ie*ie;N<0?d=0:(N*=N,d=N*N*this.dot4(r[Lt],Xt,qt,Pt,ie));let ct=.6-Ct*Ct-D*D-E*E-V*V;ct<0?p=0:(ct*=ct,p=ct*ct*this.dot4(r[bt],Ct,D,E,V));let j=.6-Q*Q-et*et-K*K-St*St;return j<0?f=0:(j*=j,f=j*j*this.dot4(r[jt],Q,et,K,St)),27*(h+u+d+p+f)}}const pr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new lt},cameraProjectionMatrix:{value:new Kt},cameraInverseProjectionMatrix:{value:new Kt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},mr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},gr={uniforms:{tDiffuse:{value:null},resolution:{value:new lt}},vertexShader:`varying vec2 vUv;

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

		}`};class Wn extends xi{constructor(t,e,n,s,r=32){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const o=new qa;o.format=mi,o.type=pi,this.normalRenderTarget=new Je(this.width,this.height,{minFilter:Be,magFilter:Be,type:un,depthTexture:o}),this.ssaoRenderTarget=new Je(this.width,this.height,{type:un}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new be({defines:Object.assign({},pr.defines),uniforms:Pn.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,blending:ze}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new ev,this.normalMaterial.blending=ze,this.blurMaterial=new be({defines:Object.assign({},gr.defines),uniforms:Pn.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new be({defines:Object.assign({},mr.defines),uniforms:Pn.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,blending:ze}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new be({uniforms:Pn.clone(Ts.uniforms),vertexShader:Ts.vertexShader,fragmentShader:Ts.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ch,blendDst:Uo,blendEquation:Rn,blendSrcAlpha:lh,blendDstAlpha:Uo,blendEquationAlpha:Rn}),this.fsQuad=new Nr(null),this.originalClearColor=new Vt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Wn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=ze,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ze,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ze,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Wn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ah,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new U;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=wd.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}generateRandomKernelRotations(){const n=new My,s=16,r=new Float32Array(s);for(let o=0;o<s;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=n.noise3d(a,l,c)}this.noiseTexture=new Wh(r,4,4,Cr,cn),this.noiseTexture.wrapS=jn,this.noiseTexture.wrapT=jn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}}Wn.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const ih={uniforms:{tDiffuse:{value:null},uExposure:{value:.62},uDamage:{value:0},uFade:{value:0},uGrain:{value:.012},uChroma:{value:.12},uVignette:{value:.72},uBlur:{value:new lt},uTime:{value:0},uLow:{value:0},uFlash:{value:0}},vertexShader:`
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
  `};class by{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.renderer.toneMapping=kn,this.composer=new eh(t),this.grade=new Da(ih),this.applyQuality("medium")}composer;grade;bloom=null;ssao=null;get uniforms(){return this.grade.uniforms}applyQuality(t){const e=this.renderer.getSize(new lt);if(this.composer.dispose(),this.composer=new eh(this.renderer),this.ssao=null,this.bloom=null,t==="high")try{const n=new Wn(this.scene,this.camera,e.x,e.y,12);n.kernelRadius=8,n.minDistance=.002,n.maxDistance=.08,this.ssao=n,this.composer.addPass(n)}catch{this.composer.addPass(new nh(this.scene,this.camera))}else this.composer.addPass(new nh(this.scene,this.camera));t!=="low"&&(this.bloom=new Qi(new lt(e.x,e.y),t==="high"?.28:.18,.45,.86),this.composer.addPass(this.bloom)),this.grade=new Da(ih),this.composer.addPass(this.grade),this.composer.addPass(new yy),this.setSize(e.x,e.y)}setSize(t,e){this.composer.setSize(t,e),this.ssao?.setSize(t,e),this.bloom?.setSize(t,e)}render(){this.composer.render()}dispose(){this.composer.dispose()}}const Sy=new Set(["stilhed","secret"]);function wy(i,t,e){const n=Number.isFinite(e)&&e>0?Math.min(3,e):1;return{width:Math.max(1,Math.round(Math.max(1,i)*n)),height:Math.max(1,Math.round(Math.max(1,t)*n))}}function Ey(i){return i==="m2_reception"?"reception":i==="m3_generator"?"kaeldergang":i==="m4_arkiv"?"arkiv":i==="m7_udgang"?"kammer":null}function Ty(i){const t=i.rooms.filter(u=>u.floor===i.floor),e=u=>i.visited.has(u),n=u=>Sy.has(u)||u.startsWith("trappe"),s=new Set;for(const u of t)e(u.id)&&s.add(u.id);for(const u of i.doors)u.floor===i.floor&&(e(u.a)&&!n(u.b)&&s.add(u.b),e(u.b)&&!n(u.a)&&s.add(u.a));const r=t.filter(u=>s.has(u.id)),o=r.length?r:t.filter(u=>u.id==="reception");let a=1/0,l=1/0,c=-1/0,h=-1/0;for(const u of o)a=Math.min(a,u.x),l=Math.min(l,u.z),c=Math.max(c,u.x+u.w),h=Math.max(h,u.z+u.d);return Number.isFinite(a)||(a=0,l=0,c=1,h=1),Ay(i,r,a,l,c,h)}function Ay(i,t,e,n,s,r){const c=Math.min(188/Math.max(1,s-e),122/Math.max(1,r-n)),h=S=>16+(S-e)*c,u=S=>22+(S-n)*c,d=t.find(S=>i.px>=S.x&&i.px<=S.x+S.w&&i.pz>=S.z&&i.pz<=S.z+S.d),p=t.map(S=>{const A=i.visited.has(S.id);return{id:S.id,known:A,here:S.id===d?.id,x:h(S.x),y:u(S.z),w:S.w*c,h:S.d*c,label:A?Py(S.name):"?"}}),f=i.doors.filter(S=>S.floor===i.floor&&t.some(A=>A.id===S.a)&&t.some(A=>A.id===S.b)).map(S=>({id:S.id,x:h(S.axis==="x"?S.coord:S.center),y:u(S.axis==="z"?S.coord:S.center),locked:S.locked})),v=i.goals.filter(S=>S.floor===i.floor&&i.visited.has(S.roomId)).map(S=>({id:S.id,x:h(S.x),y:u(S.z)})),m=i.batteries.filter(S=>S.floor===i.floor).map(S=>({x:h(S.x),y:u(S.z)})),g=i.monster?.show&&i.monster.floor===i.floor?{x:h(i.monster.x),y:u(i.monster.z)}:null;return{rooms:p,doors:f,goals:v,batteries:m,player:{x:h(i.px),y:u(i.pz),yaw:i.yaw},monster:g}}function Ry(i,t,e,n){const s=Cy(n,t,e);i.clearRect(0,0,t,e),i.fillStyle="rgba(8,7,8,0.72)",i.fillRect(0,0,t,e),i.fillStyle="#cbbba4",i.font=`${Math.max(11,Math.round(t/20))}px Georgia, serif`,i.fillText(`Etage ${n.floor+1}`,8,Math.max(14,Math.round(e/11)));for(const r of s.rooms)i.fillStyle=r.here?"rgba(120,40,36,0.85)":r.known?"rgba(60,52,48,0.9)":"rgba(28,26,28,0.9)",i.fillRect(r.x,r.y,r.w,r.h),i.strokeStyle="rgba(210,196,176,0.35)",i.strokeRect(r.x+.5,r.y+.5,r.w-1,r.h-1),i.fillStyle=r.known?"#e7dcc7":"#8a8178",i.font=`${Math.max(10,Math.round(t/22))}px Georgia, serif`,i.fillText(r.label,r.x+4,r.y+Math.max(14,r.h*.28));for(const r of s.doors)i.fillStyle=r.locked?"#8d4a3a":"#d7cbb6",i.fillRect(r.x-3,r.y-1.5,6,3);for(const r of s.goals)i.strokeStyle="#e7dcc7",i.beginPath(),i.arc(r.x,r.y,5,0,Math.PI*2),i.stroke();for(const r of s.batteries)i.fillStyle="#d7c27a",i.fillRect(r.x-2,r.y-2,4,4);s.monster&&(i.fillStyle="#ff3b32",i.beginPath(),i.arc(s.monster.x,s.monster.y,4,0,Math.PI*2),i.fill()),i.save(),i.translate(s.player.x,s.player.y),i.rotate(-s.player.yaw),i.fillStyle="#f4efe6",i.beginPath(),i.moveTo(0,7),i.lineTo(4,-4),i.lineTo(-4,-4),i.closePath(),i.fill(),i.restore()}function Cy(i,t,e){const n=Ty(i);if(t===220&&e===150)return n;const s=t/220,r=e/150,o=Math.min(s,r),a=l=>({...l,x:l.x*s,y:l.y*r});return{rooms:n.rooms.map(l=>({...l,x:l.x*s,y:l.y*r,w:l.w*o,h:l.h*o})),doors:n.doors.map(a),goals:n.goals.map(a),batteries:n.batteries.map(a),player:{...a(n.player),yaw:n.player.yaw},monster:n.monster?a(n.monster):null}}function Py(i){return i.length>16?i.slice(0,15)+"…":i}function ky(i){return i.map(t=>({id:t.id,name:t.name,floor:t.floor,x:t.x,z:t.z,w:t.w,d:t.d}))}const Do=[{at:.7,title:"SKT. AGNES – 1987",body:"Hospitalet blev lukket efter en række uforklarlige hændelser. Siden har bygningen stået tom. I hvert fald ifølge de officielle oplysninger."},{at:7.4,title:"",body:"Jeg hedder Emil Kragh. Maja forsvandt, da hun begyndte at undersøge, hvad der egentlig skete her."},{at:13.4,title:"",body:"Hendes sidste spor førte mig til Skt. Agnes. Jeg er nødt til at finde ud af, hvad der skete med hende."},{at:19.2,title:"NYT MÅL",body:"Find og læs Majas brev."}],Dy=24.4;function Iy(i){if(i>=Dy)return{beat:Do[Do.length-1]??null,done:!0};let t=null;for(const e of Do)i>=e.at&&(t=e);return{beat:t,done:!1}}function Ly(i){return i==="low"?4:i==="high"?8:6}const Uy=new Set(["reception","patientgang","kaeldergang"]);function Ny(i,t,e){if(e)return .92+.05*Math.sin(i*.22+t);const n=.9+.06*Math.sin(i*.31+t),s=Math.pow(Math.max(0,Math.sin(i*.17+t*1.7)),4);return n*(1-s*.28)}class Fy{constructor(t,e,n,s){this.ui=e,this.storage=n??oy(),this.settings=dy(this.storage);const r=new URLSearchParams(location.search),o=r.has("test");this.testMode=o,this.wantsIntro=!o||r.has("intro");const a=Number(r.get("seed")),l=Number.isFinite(a)&&a>0?Math.floor(a):o?1:Date.now()%2147483646+1;this.rng=Dc(l),this.renderer=new Fg({canvas:t,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,stencil:!0}),this.renderer.outputColorSpace=_e,this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.renderer.shadowMap.type=oh,this.renderer.setClearColor(460298),this.scene.background=new Vt(460298),this.scene.fog=new Ya(658191,.028),this.scene.add(new uv(2106925,.028));const c=new ov(2372419,855051,.075);this.scene.add(c);const h=new hv(9018282,.018);h.position.set(-20,40,-10),this.scene.add(h),this.world=qx(),this.built=g_(this.scene,this.world,s),this.containers=new F_(this.scene),this.monster=new ax,this.scene.add(this.monster.group),this.atmo=new fx(this.scene,24),this.scene.add(this.camera),this.spot=new ba("#eee2cb",0,21,.5,.72,1.25),this.spot.castShadow=this.settings.quality!=="low",this.spot.shadow.mapSize.set(this.settings.quality==="high"?1024:512,this.settings.quality==="high"?1024:512),this.spot.shadow.bias=-25e-5,this.spot.shadow.camera.near=.1,this.spot.shadow.camera.far=18,this.camera.add(this.spot),this.spot.position.set(.18,-.16,-.55),this.spot.target.position.set(.18,-.14,-12),this.camera.add(this.spot.target),this.viewmodel=this.buildViewmodel(),this.camera.add(this.viewmodel),this.lunge=this.buildLunge(),this.camera.add(this.lunge),this.shadowMesh=new Z(new ui(.22,1.1,3,6),new vn({color:"#2a241f"})),this.shadowMesh.visible=!1,this.scene.add(this.shadowMesh),this.butcher=this.buildButcher(),this.scene.add(this.butcher),this.peek=this.buildPasser(),this.scene.add(this.peek),this.spawnCells=this.world.nav.nodes.filter(p=>!p.doorId&&!p.stair&&p.links.length>0&&(p.ix+p.iz)%3===0).map(p=>({x:p.x,y:p.y,z:p.z}));const u=new me(.05,1.15,7,16,1,!0);u.translate(0,-3.5,0),u.rotateX(Math.PI/2),this.cone=new Z(u,new vn({color:"#ffe6c2",transparent:!0,opacity:.045,depthWrite:!1,side:ge,blending:wr})),this.camera.add(this.cone),this.shadow=new Z(new fe(1.4,2.2),new vn({color:"#050505",transparent:!0,opacity:0,depthWrite:!1,side:ge})),this.scene.add(this.shadow),this.post=new by(this.renderer,this.scene,this.camera),this.post.applyQuality(this.settings.quality),this.scares=new xx(this.camera,this.audio),this.input=new z_(t),this.input.setSensitivity(this.settings.mouseSensitivity);const d=()=>{this.audio.ensure(),this.audio.resume()};window.addEventListener("pointerdown",d),window.addEventListener("keydown",d),t.addEventListener("click",()=>{d(),this.mode==="playing"&&this.input.lock()}),this.resize(),window.addEventListener("resize",()=>this.resize()),this.applyVolumes(),this.ui.continueEnabled(!!Qc(this.storage)),this.ui.fillSettings(this.settings),this.installApi(),t.addEventListener("webglcontextlost",p=>{p.preventDefault(),this.contextLost=!0,this.ui.fatal("Grafikkortet slap spillet. Genindlæs siden.")}),t.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.ui.fatal("Grafikkortet kom tilbage. Genindlæs siden for at fortsætte.")}),this.ui.root.querySelector("#intro")?.addEventListener("click",()=>{this.introTime>=0&&this.finishIntro()})}renderer;scene=new Og;camera=new He(72,1,.08,80);world;built;post;audio=new Tv;input;monster;atmo;scares;director=kc();schedule=Lc();tone=wo();radioAt=-99;extraCueAt=28;settings;storage;mode="menu";settingsFrom="menu";slotMode="load";snap=Ar();sim=zy();open=new Map;desired=new Map;unlocked=new Set;hiding=null;holdBreath=!1;cameraEye=ou;bob=0;trauma=0;damage=0;fade=0;flash=0;message="";messageT=0;toast="";toastT=0;subtitleT=0;lastObjective="";autosavedIntro=!1;invIndex=0;code="";showPerf=!1;fps=60;fpsAcc=0;fpsFrames=0;acc=0;noises=[];runtime=[];containers;rosaryCd=0;stepDist=0;batteryWarned=!1;creepIn=12;aimedDoor="";prevRoom="";prevFlash=!1;lungeT=0;lunge;shadowMesh;shadowT=0;shadowFrom=new U;shadowTo=new U;butcher;recentSpawns=[];hideWait=0;knocks=[];showAudio=!1;lookSX=0;lookSY=0;blackout=0;peekT=0;peekCool=12;passT=0;passFrom=new U;passTo=new U;beamHold=0;butcherHit=!1;monsterShown=0;monsterRoom="";monsterRoomUntil=0;peek;spawnCells=[];mannequinT=0;looked=0;lightCut=new Map;lampShown=new Map;lampClock=-1;spot;cone;viewmodel;shadow;clock=0;aggression=0;camDir=new U;testMode=new URLSearchParams(location.search).has("test");ended=!1;frozen=!1;rafId=0;introTime=-1;introBeat=-1;frameError=!1;contextLost=!1;wantsIntro;bus=Tx();rng=Dc(1);start(){this.audio.enableRoomTones(),this.ui.show("menu"),this.mode="menu",this.clock=performance.now(),this.rafId=requestAnimationFrame(this.onFrame)}onFrame=t=>{if(!(this.frozen||this.contextLost)){try{const e=Ta((t-this.clock)/1e3||0);this.clock=t,this.fpsAcc+=e,this.fpsFrames++,this.fpsAcc>=.5&&(this.fps=this.fpsFrames/this.fpsAcc,this.fpsAcc=0,this.fpsFrames=0);const n=this.settings.fpsCap;if(n>0){this.acc+=e;const s=1/n;if(this.acc>=s-1e-4){const r=Ta(this.acc);this.acc=0,this.advance(r)}}else this.advance(e)}catch(e){this.frameError||(this.frameError=!0,console.error(e))}this.rafId=requestAnimationFrame(this.onFrame)}};setFrozen(t){this.frozen=t,t?cancelAnimationFrame(this.rafId):(this.clock=performance.now(),this.rafId=requestAnimationFrame(this.onFrame))}advance(t){this.applyModalKeys(),this.mode==="playing"?this.updatePlaying(t):(this.mode==="menu"||this.mode==="credits"||this.mode==="exit")&&this.updateIdle(t),this.render(t),this.audio.update(t)}updateIdle(t){const e=performance.now()*12e-5,n=2.2+Math.sin(e)*.35;this.camera.position.set(5.2,1.55,n),this.camera.lookAt(10,1.35,6),this.viewmodel.visible=!1,this.lunge.visible=!1,this.cone.visible=!1,this.spot.intensity=0,this.atmo.update(t,this.camera.position,new U(0,0,1),!1),this.tickRain(t),this.tickLights(performance.now()/1e3,!1)}updatePlaying(t){if(this.introTime>=0){this.stepIntro(t);return}this.containers.step(t,!1),this.viewmodel.visible=!0,this.snap.playTime+=t,this.snap.iFrame=Math.max(0,this.snap.iFrame-t),this.rosaryCd=Math.max(0,this.rosaryCd-t),this.messageT=Math.max(0,this.messageT-t),this.toastT=Math.max(0,this.toastT-t),this.subtitleT=Math.max(0,this.subtitleT-t),this.damage=Math.max(0,this.damage-t*.8),this.noises.length=0,this.stepPower(t),!this.autosavedIntro&&this.snap.playTime>2&&(this.autosavedIntro=!0,this.persist(0));const e=this.input.consumeLook();this.lookSX=this.lookSX*.4+e.x*.6,this.lookSY=this.lookSY*.4+e.y*.6;const n=Rc(this.sim.yaw,this.sim.pitch,this.lookSX,this.lookSY,this.settings.invertY);this.sim.yaw=n.yaw,this.sim.pitch=n.pitch;const s=this.input.wish();this.holdBreath=!!this.hiding&&s.sprint,this.input.pressed("F3")&&(this.showPerf=!this.showPerf),this.input.pressed("F4")&&(this.showAudio=!this.showAudio),(this.testMode||new URLSearchParams(location.search).has("debug"))&&this.input.pressed("F6")&&(this.snap.playTime+=30),(this.testMode||new URLSearchParams(location.search).has("debug"))&&this.input.pressed("F7")&&this.runShadow(),this.input.pressed("KeyF")&&this.toggleFlash(),this.input.pressed("KeyR")&&this.swapBattery(),this.input.pressed("KeyG")&&this.dropBattery(),this.input.pressed("KeyQ")&&this.useRosary(),this.input.pressed("KeyE")&&this.interact();const r=ps(this.world,this.unlocked,this.open);if(this.hiding)this.audio.setLocomotion(!1,!1,!0),this.stepDist=0;else{const l=this.sim.grounded,c=this.sim.x,h=this.sim.z;this.sim=Sx(this.sim,{...s,dt:t},r,(v,m,g)=>ms(this.world,v,m,g));const u=Math.hypot(this.sim.x-c,this.sim.z-h);s.jump&&l&&!this.sim.grounded&&this.noise("jump"),this.sim.justLanded&&this.noise("landing");const d=s.sprint&&this.sim.stamina>5&&!this.sim.crouching,f=Math.abs(s.forward)+Math.abs(s.strafe)>.01&&this.sim.grounded&&u>.002;if(this.audio.setLocomotion(f,d,this.sim.crouching),f){this.stepDist+=u;const v=this.sim.crouching?.72:d?1.45:1.05;this.stepDist>=v&&(this.stepDist-=v,this.audio.playFootstep(d,this.sim.crouching),this.noise(this.sim.crouching?"crouch":d?"sprint":"walk"),Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.floorMat==="wood"&&Math.random()<.12&&this.audio.play("creak",this.feet(),{volume:.35}))}else this.stepDist=0;this.separateFromMonster(r)}this.placeCamera(s,t),this.camera.getWorldDirection(this.camDir);const o=this.computeChase();this.huntUnlocked()||this.holdGuardianBack();const a=this.monster.update({dt:t,playerPos:{x:this.sim.x,y:this.sim.y,z:this.sim.z},playerEye:this.eyePos(),hiding:!!this.hiding,hideSpot:this.hidePos(),holdBreath:this.holdBreath,camPos:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},camDir:{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},flashlightOn:this.sim.flashlightOn&&this.sim.battery>0,allowChase:o,aggression:this.aggression,waypoints:this.earlyPatrol(s_(this.world,l=>this.floorAllowed(l),this.snap.flags.secretOpen)),blockers:r,colliders:r,nav:this.world.nav,query:{allowFloor:l=>this.floorAllowed(l),blockDoor:l=>{const c=this.world.doors.find(h=>h.id===l);return c?cr(c,this.unlocked):!1}},doors:this.world.doors,openAmount:this.open,floorAt:(l,c,h)=>ms(this.world,l,c,h),requestOpen:l=>this.desired.set(l,1),doorLocked:l=>{const c=this.world.doors.find(h=>h.id===l);return c?cr(c,this.unlocked):!1},noises:this.huntUnlocked()?this.noises:[],searchSpots:this.world.hides.map(l=>{const c=this.world.rooms.find(h=>h.id===l.room);return{id:l.id,pos:{x:l.x,y:c?Dt[c.floor]:this.sim.y,z:l.z}}})});a.entered==="Chase"&&this.huntUnlocked()&&this.audio.play("growl",this.monster.pos,{volume:.8}),a.attack&&this.huntUnlocked()&&this.hurt(36,!0),a.foundHiding&&this.huntUnlocked()&&(this.hiding=null,this.hurt(28,!0),this.say("Den fandt dig.")),this.monster.group.visible=this.huntUnlocked(),this.huntUnlocked()&&(this.herdMonster(),this.relocateMonster(t,r)),this.stepEvents(t),this.stepKnocks(),this.stepDirector(t),this.animateDoors(t),this.drainLight(t),this.visit(),this.checkEnding(),this.syncHud(s),this.copySim()}stepDirector(t){const e=this.monsterDist(),n=Vn(this.world,this.sim.x,this.sim.z,this.sim.y),s=!(this.sim.flashlightOn&&this.sim.battery>1)&&!this.roomLit(n?.id),r=dx(this.director,{dt:t,health:this.snap.player.health,monsterDist:e,inDark:s,sprinting:this.input.wish().sprint&&!this.sim.crouching,hiding:!!this.hiding,tookDamage:this.damage>.85,story:iy(this.snap),rng:Math.random,blocked:this.monster.bb.state==="Attack"||this.lungeT>0||this.scares.fx.face>0||(this.snap.events?.slagter??0)>0&&(this.snap.events?.slagter??0)<4||!this.huntUnlocked()&&(n?.id==="patientgang"||n?.id==="operationsstue")});if(this.director=r.state,this.aggression=r.aggression,r.event?.type==="scare"){const u=this.scares.dynamic(this.snap.playTime,{inDark:s,monsterNear:e<10,doorOpenNear:[...this.open.values()].some(d=>d>.5),inMannequinRoom:n?.id==="r102",tension:this.director.tension,rng:Math.random});u&&this.applyScare(u)}else r.event?.type==="soft"&&this.soft(r.event.kind);this.scares.update(t),this.trauma=Math.max(this.trauma,this.settings.cameraShake?this.scares.fx.trauma:0),this.flash=Math.max(this.flash,this.scares.fx.flash),this.scares.fx.subtitle&&this.caption(this.scares.fx.subtitle,1.5);const o=this.monster.bb.state==="Chase"||this.monster.bb.state==="Attack";this.audio.setTension(this.director.tension,o);const a=(100-this.snap.player.health)/140+(e<8?.35:0)+(this.sim.stamina<30?.2:0);this.audio.setHeartbeat(this.hiding||this.snap.player.health<55||e<7?a:0);const l=this.sim.stamina<22?(22-this.sim.stamina)/28:0;this.audio.setBreath(this.holdBreath?.05:Math.max(l,e<6?.25:.05));const c=this.nearestLight();if(this.audio.setHum(!!c&&this.lightLevel(c.def)>.2,c?{x:c.def.x,y:c.def.y,z:c.def.z}:this.feet()),this.audio.setRadio(this.snap.flags.radioOn,Uc),this.audio.setZone(this.zoneFor(n?.id)),this.stepRoomTone(n,t),this.creepIn-=t,!this.huntUnlocked()&&(n?.id==="patientgang"||n?.id==="operationsstue"))this.creepIn=12;else if(this.creepIn<=0&&this.mode==="playing"){this.creepIn=16+Math.random()*18-this.director.tension*.05;const u=6+Math.random()*6,d=Math.random()*Math.PI*2,p=this.director.tension>55&&Math.random()<.35?"scream":"whisper";this.audio.play(p,{x:this.sim.x+Math.cos(d)*u,y:this.sim.y,z:this.sim.z+Math.sin(d)*u},{volume:.55,occluded:!0})}this.audio.setListener({x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},{x:0,y:1,z:0})}applyScare(t){t==="door"&&this.slamNearest(),t==="still"&&(this.built.mannequin.visible=!0,this.mannequinT=8,this.snap.flags.mannequinOn=!0),t==="fake"&&(this.built.pot.position.y=Dt[-1]?this.built.pot.position.y:this.built.pot.position.y),t==="ceiling"&&(this.trauma=Math.max(this.trauma,.5)),t==="flash"&&(this.flash=1),t==="shadow"&&(this.shadow.position.set(this.sim.x+this.camDir.x*3,this.sim.y+1.2,this.sim.z+this.camDir.z*3),this.shadow.material.opacity=.85)}soft(t){if(t==="flicker"||t==="lightOut"){const e=this.built.lights.filter(s=>this.lightLevel(s.def)>.2),n=e[Math.floor(Math.random()*e.length)];n&&this.lightCut.set(n.def.id,this.snap.playTime+(t==="lightOut"?5:1.2))}else if(t==="whisper"||t==="breath"){const e=t==="breath"?1.2:2.4;this.audio.play("whisper",{x:this.sim.x-this.camDir.x*e,y:this.sim.y+1.4,z:this.sim.z-this.camDir.z*e},{volume:t==="breath"?.85:.6}),this.caption(t==="breath"?"…åndedræt, lige bag dig.":"…Agnes…",1.8),t==="breath"&&this.audio.setHeartbeat(.55)}else t==="knock"?this.queueKnocks():t==="phone"?(this.audio.play("sting",{x:16,y:5,z:22},{volume:.8}),this.caption("En telefon ringer et sted i fløjen.",2.2)):t==="creak"?this.audio.play("creak",{x:this.sim.x+2,y:this.sim.y,z:this.sim.z+1},{volume:.5}):t==="thunder"?(this.audio.play("thunder"),this.atmo.strike(),this.flash=.55):t==="drop"?this.audio.play("door",{x:49,y:4,z:36},{volume:.5}):t==="shadow"?this.applyScare("shadow"):t==="radio"?this.audio.play("whisper",{x:53,y:5,z:2},{volume:.4}):t==="mannequin"&&!this.snap.flags.mannequinUsed&&(this.built.mannequin.visible=!0,this.mannequinT=10)}hurt(t,e){this.snap.iFrame>0||this.ended||(this.snap.player.health=Math.max(0,this.snap.player.health-t),this.sim.health=this.snap.player.health,this.snap.iFrame=1.2,this.damage=1,this.trauma=.9,e&&this.scares.trigger("attack",this.snap.playTime,!0),this.snap.player.health<=0&&this.finish("death"))}finish(t){if(this.ended)return;this.ended=!0;const e=sy(this.snap,t);this.ui.ending(e,t==="death"),this.setMode("ending"),this.fade=t==="death"?.65:.35,this.audio.play(t==="death"?"scream":"sting")}checkEnding(){if(this.ended)return;const t=Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"",e=Zc(this.snap,t,!1);e&&this.finish(e)}interact(){if(this.hiding){this.hiding=null,this.bus.emit({type:"playerRevealed"}),this.audio.play("door",this.feet(),{volume:.4});return}const t=or(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates());t&&(t.kind==="door"?this.useDoor(t.id):t.kind==="pickup"?this.take(t.id):t.kind==="hide"?this.enterHide(t.id):t.kind==="generator"?this.useGenerator():t.kind==="safe"?this.openKeypad():t.kind==="bookshelf"?this.useShelf():t.kind==="radio"?(this.snap.flags.radioOn=!this.snap.flags.radioOn,this.audio.play("click"),this.noise("voice"),this.say(this.snap.flags.radioOn?"Radioen knitrer.":"Radioen er slukket.")):t.kind==="container"&&this.useContainer(t.id))}useDoor(t){const e=this.world.doors.find(r=>r.id===t);if(!e)return;if(cr(e,this.unlocked)){if(e.id===Nc){const r=Eu(this.snap);if(r){this.say(r),this.audio.play("locked",this.doorPos(e),{volume:.7});return}this.unlocked.add(e.id),this.desired.set(e.id,1),this.bus.emit({type:"doorOpened",id:e.id}),this.audio.play("door",this.doorPos(e)),this.audio.play("key"),this.say("Låsene giver sig.");return}if(e.needsPower&&!this.snap.flags.generatorOn)this.say("Låsen er død. Generatoren mangler strøm.");else if(e.keyId==="chapel_key"&&!ue(this.snap.inventory,"chapel_key"))this.say("Låst. Nøglen ligger på sygeplejerskekontoret.");else if(e.keyId==="master_key"&&!ue(this.snap.inventory,"master_key"))this.say("Kræver hovednøglen fra pengeskabet.");else if(e.keyId&&ue(this.snap.inventory,e.keyId)&&(!e.needsPower||this.snap.flags.generatorOn)){this.unlocked.add(e.id),this.desired.set(e.id,1),this.bus.emit({type:"doorOpened",id:e.id}),this.audio.play("door",this.doorPos(e)),this.noise("door");return}else this.say("Låst.");this.audio.play("locked",this.doorPos(e),{volume:.6}),this.noise("door");return}const s=(this.open.get(e.id)??0)<=.4;this.desired.set(e.id,s?1:0),s&&this.bus.emit({type:"doorOpened",id:e.id}),this.audio.play("door",this.doorPos(e)),this.noise("door")}take(t){if(this.snap.pickedUp.includes(t))return;const e=this.world.pickups.find(o=>o.id===t)||this.runtime.find(o=>o.id===t);if(!e)return;const n=Ni(this.snap.inventory,e.itemId,1);if(!n.added){this.say("Du kan ikke bære flere.");return}this.snap.inventory=n.slots,"room"in e&&this.snap.pickedUp.push(t);const s=this.built.pickups.get(t)||this.runtime.find(o=>o.id===t)?.mesh;s&&(s.visible=!1),this.runtime=this.runtime.filter(o=>o.id!==t),this.audio.play(e.itemId.startsWith("note")||e.itemId.startsWith("file")?"paper":"pickup");const r=si(e.itemId);(r.kind==="note"||r.kind==="story"||r.kind==="map"||r.kind==="collectible")&&this.openExamine(e.itemId),e.itemId==="battery"&&(this.sim.battery=Po(this.sim.battery,50),this.say("Batteri. +50%.")),e.itemId.startsWith("key_")&&this.say(`${r.name}. Nøgler ${Kc(this.snap)}/3.`),e.itemId==="rosary"&&(this.snap.rosaryCharges=2),this.bus.emit({type:"itemFound",id:e.itemId}),this.refreshObjective()}useGenerator(){const t=["fuse_red","fuse_blue","fuse_yellow"];if(this.snap.flags.generatorOn){this.say("Generatoren kører allerede.");return}if(!t.every(s=>ue(this.snap.inventory,s))){const s=t.filter(r=>!ue(this.snap.inventory,r)).map(r=>si(r).name);this.say(`Mangler ${s.join(", ")}.`);return}for(const s of t)this.snap.inventory=Tr(this.snap.inventory,s,1);this.snap.flags.generatorOn=!0,this.bus.emit({type:"powerOn"});const e=this.world.devices.find(s=>s.kind==="generator"),n=e?this.world.rooms.find(s=>s.id===e.room):void 0;this.audio.play("generator",{x:e?.x??8.8,y:n?Dt[n.floor]+1:9,z:e?.z??8.35},{volume:.9}),this.say("Nødstrømmen vågner. Bagportens lås har strøm."),this.trauma=.3,this.refreshObjective()}openKeypad(){if(this.snap.flags.safeOpen){this.say("Pengeskabet er tomt.");return}this.code="",this.ui.keypad(this.code,ue(this.snap.inventory,"note_code")?"Stiftelsesåret.":"Du kender ikke koden endnu."),this.setMode("keypad")}submitCode(){this.code===W_?(this.snap.flags.safeOpen=!0,ue(this.snap.inventory,"master_key")||(this.snap.inventory=Ni(this.snap.inventory,"master_key").slots),ue(this.snap.inventory,"note_director")||(this.snap.inventory=Ni(this.snap.inventory,"note_director").slots),this.audio.play("key"),this.setMode("playing"),this.openExamine("note_director"),this.refreshObjective()):(this.audio.play("fail"),this.noise("door"),this.code="",this.ui.keypad(this.code,"Forkert. Lyden bar langt."))}useShelf(){const t=Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"";if(this.snap.flags.secretOpen){const e=Zc(this.snap,t,!0);e&&this.finish(e);return}if(!ue(this.snap.inventory,"crowbar")){this.say("Hylden rokker sig ikke. Du mangler noget at bryde med."),this.audio.play("locked");return}this.snap.flags.secretOpen=!0,this.unlocked.add("door_secret"),this.audio.play("doorSlam",{x:37,y:1,z:24},{volume:.8}),this.noise("door"),this.say("Hylden giver sig. Der er et rum bagved.")}enterHide(t){const e=this.world.hides.find(n=>n.id===t);e&&(this.hiding=t,this.bus.emit({type:"playerHidden",id:t}),this.sim.x=e.x,this.sim.z=e.z,this.sim.vx=0,this.sim.vz=0,this.audio.play("door",this.feet(),{volume:.3}),this.say(e.kind==="bed"?"Under sengen. Hold Shift for at holde vejret.":"I skabet. Hold Shift for at holde vejret. E for at komme ud."))}toggleFlash(){if(this.sim.battery<=1){this.audio.play("fail"),this.sim.flashlightOn=!1,this.say("Batteriet er tomt. Det lader langsomt, mens lygten er slukket.");return}const t=!this.sim.flashlightOn;this.sim.flashlightOn=t,this.audio.play("flash",void 0,{rate:t?1:.88}),t||this.say("Lygten er slukket. Batteriet lader.")}swapBattery(){if(!ue(this.snap.inventory,"battery")){this.audio.play("fail"),this.say("Ingen reservebatterier.");return}this.snap.inventory=Tr(this.snap.inventory,"battery",1),this.sim.battery=Po(this.sim.battery),this.sim.flashlightOn=!0,this.batteryWarned=!1,this.audio.play("click"),this.say("Batteri skiftet.")}dropBattery(){const t=jc(this.snap.inventory,"battery");if(!t.dropped){this.say("Ikke noget du kan smide.");return}this.snap.inventory=t.slots;const e=`drop_${Math.floor(Math.random()*1e6)}`,n=this.built.pickups.get("p_bat1")?.clone()??new Z(new Me(.08),new pt({color:"#888"}));n.visible=!0,n.position.set(this.sim.x,this.sim.y+.2,this.sim.z),this.scene.add(n),this.runtime.push({id:e,itemId:"battery",x:this.sim.x,y:this.sim.y+.4,z:this.sim.z,mesh:n}),this.audio.play("pickup",this.feet(),{volume:.4}),this.noise("drop")}useRosary(){if(!ue(this.snap.inventory,"rosary")||this.snap.rosaryCharges<=0||this.rosaryCd>0){ue(this.snap.inventory,"rosary")&&this.snap.rosaryCharges<=0&&this.say("Perlerne er kolde. Den virker ikke igen.");return}this.snap.rosaryCharges--,this.rosaryCd=6,this.monster.bb.blindTime=2.8,this.monster.bb.hesitate=2.8,(this.monster.bb.state==="Chase"||this.monster.bb.state==="Attack")&&(this.monster.bb.state="LostPlayer"),this.audio.play("key",this.feet(),{volume:.5}),this.say("Han tøver.")}drainLight(t){const e=j_(this.sim.battery,this.sim.flashlightOn,t);this.sim.battery=e.charge,this.sim.flashlightOn=e.on,e.died?(this.audio.play("metallic"),this.say("Lygten gik ud. Den lader langsomt op, når den er slukket."),this.batteryWarned=!1):this.sim.flashlightOn&&hr(this.sim.battery)==="critical"&&!this.batteryWarned?(this.batteryWarned=!0,this.say("Batteriet er næsten tomt.")):this.sim.battery>30&&(this.batteryWarned=!1)}syncView(){this.placeCamera({sprint:!1},1),this.camera.getWorldDirection(this.camDir)}placeCamera(t,e=1/60){const n=this.hiding&&this.world.hides.find(p=>p.id===this.hiding)?.kind==="bed"?.32:Ex(this.sim.crouching||!!this.hiding);this.cameraEye=e>=1?n:wx(this.cameraEye,n,e);const s=this.cameraEye,r=Math.hypot(this.sim.vx,this.sim.vz);r>.4&&this.sim.grounded&&!this.hiding&&(this.bob+=r*.016);const o=this.hiding?0:this.sim.crouching?.01:t.sprint?.04:.025,a=Qh(this.sim.yaw),l=this.sim.stamina<18&&this.settings.cameraShake?(18-this.sim.stamina)/18:0,c=Math.sin(performance.now()/1e3*1.7)*l*.012,h=this.settings.cameraShake?this.trauma*this.trauma:0;this.camera.position.set(this.sim.x+a.x*Math.cos(this.bob)*o+(Math.random()-.5)*h*.12,this.sim.y+s+Math.sin(this.bob*2)*o+c+(Math.random()-.5)*h*.08,this.sim.z+a.z*Math.cos(this.bob)*o),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.sim.yaw+Math.PI,this.camera.rotation.x=this.sim.pitch,this.camera.rotation.z=(Math.random()-.5)*h*.05;const u=Math.sin(this.bob);this.viewmodel.position.set(.2+u*.008,-.16-Math.abs(Math.sin(this.bob*2))*.008,-.36),this.viewmodel.rotation.z=u*.04,this.viewmodel.rotation.x=Math.sin(this.bob*2)*.02;const d=72+(t.sprint&&r>3?3:0);Math.abs(this.camera.fov-d)>.1&&(this.camera.fov=d,this.camera.updateProjectionMatrix())}render(t){const e=performance.now()/1e3;this.tickLights(e,this.mode==="playing"),this.tickRain(t),this.mode==="playing"&&this.atmo.update(t,this.camera.position,this.camDir,this.sim.flashlightOn&&this.sim.battery>0);const n=this.mode==="playing"&&this.sim.flashlightOn&&this.sim.battery>0,s=hr(this.sim.battery),r=n&&s==="critical"?.7+.12*Math.sin(e*1.3):1,o=s==="low"?.72:s==="critical"?.5:1,a=Math.max(.2,this.sim.battery/100);this.spot.intensity=n?53*a*o*r:0;const l=this.viewmodel.position;if(this.spot.position.set(l.x,l.y+.02,l.z-.2),this.spot.target.position.set(l.x,l.y+.02,-12),this.cone.visible=!1,this.mannequinT>0?(this.mannequinT-=t,this.built.mannequin.visible=!0,this.camDir.dot(new U(27.4-this.camera.position.x,1.5,26.4-this.camera.position.z).normalize())>.82&&this.monsterDistTo(27.4,26.4)<8?this.looked+=t:this.looked=0,this.looked>1.15&&(this.built.mannequin.visible=!1,this.mannequinT=0,this.snap.flags.mannequinUsed=!0,this.scares.trigger("face",this.snap.playTime,!0),this.looked=0)):this.snap.flags.mannequinOn,this.shadow.material.opacity>0){const d=this.shadow.material;d.opacity=Math.max(0,d.opacity-t),this.shadow.position.x+=this.camDir.z*t,this.shadow.position.z-=this.camDir.x*t}this.snap.flags.secretOpen&&(this.built.secretShelf.position.x+=(36-this.built.secretShelf.position.x)*Math.min(1,t*2));const c=this.post.uniforms,h=this.settings.motionBlur?Math.min(.02,Math.hypot(this.sim.vx,this.sim.vz)*.002):0;c.uExposure.value=.87*this.settings.brightness,c.uDamage.value=this.damage,c.uFade.value=this.fade,c.uGrain.value=0,c.uChroma.value=.08+this.scares.fx.chroma*.05,c.uTime.value=e,c.uLow.value=this.sim.health<40?(40-this.sim.health)/40:0,c.uFlash.value=0,c.uBlur.value.set(this.camDir.x*h,this.camDir.y*h),this.mode==="playing"&&this.blackout<=0&&(this.fade=Math.max(0,this.fade-t*.45)),this.trauma=Math.max(0,this.trauma-t),this.flash=Math.max(0,this.flash-t*1.5);const u=this.scene.fog;u.density=.025+this.director.tension*7e-5,this.post.render(),this.subtitleT<=0&&this.mode==="playing"&&this.ui.subtitle("")}tickLights(t,e){const n=this.lampClock<0?0:Math.min(.05,Math.max(0,t-this.lampClock));this.lampClock=t;for(const a of this.built.lights){let l=this.lightLevel(a.def);const c=this.lightCut.get(a.def.id)??0;if(e&&c>this.snap.playTime&&(l*=.55),l>0&&Uy.has(a.def.room)){const u=a.def.x*.59+a.def.z*.31;l*=Ny(t,u,this.settings.reduceFlicker)}this.snap.flags.radioOn&&a.def.room==="personalerum"&&(l*=1.12);const h=this.lampShown.get(a.def.id);h!==void 0&&n>0&&(l=h+(l-h)*(1-Math.exp(-n*1.4))),this.lampShown.set(a.def.id,l),a.lens&&(a.lens.emissiveIntensity=Math.max(.012,l*1.1)),(a.light instanceof ba||a.light instanceof Kh)&&(a.light.intensity=a.base*l)}const s=Ly(this.settings.quality),r=[...this.built.lights].sort((a,l)=>Math.hypot(a.def.x-this.camera.position.x,a.def.z-this.camera.position.z)-Math.hypot(l.def.x-this.camera.position.x,l.def.z-this.camera.position.z));r.forEach((a,l)=>{const c=l<s;a.light.visible=c,c||(a.light.intensity=0)});const o=r.find(a=>a.light.visible);if(o&&e){const a=o.light.intensity<o.base*.4;this.audio.setHum(!a&&this.lightLevel(o.def)>.2,{x:o.def.x,y:o.def.y,z:o.def.z})}}lightLevel(t){return t.mode==="power"?this.snap.flags.generatorOn?1:0:t.mode==="secret"?this.snap.flags.secretOpen?1:0:1}roomLit(t){return t?this.built.lights.some(e=>e.def.room===t&&this.lightLevel(e.def)>.4):!1}nearestLight(){let t=null,e=8;for(const n of this.built.lights){const s=Math.hypot(n.def.x-this.sim.x,n.def.z-this.sim.z);s<e&&(e=s,t=n)}return t}tickRain(t){const e=this.built.rain.geometry.getAttribute("position"),n=e.array;for(let s=0;s<n.length;s+=3)n[s+1]-=t*6,n[s+1]<.2&&(n[s+1]=6);e.needsUpdate=!0}animateDoors(t){for(const e of this.world.doors){if(e.kind!=="door")continue;const n=this.desired.get(e.id)??0,s=this.open.get(e.id)??0,r=s+Math.sign(n-s)*Math.min(Math.abs(n-s),t*8);this.open.set(e.id,r),Gx(s,r)&&this.audio.play("creak",this.doorPos(e),{volume:.35});const o=this.built.doors.get(e.id);if(!o)continue;const a=Number.isFinite(o.userData.closedYaw)?o.userData.closedYaw:0,l=o.userData.swing||1;o.rotation.y=a+r*1.7*l;const h=o.userData.panel?.material;if(h instanceof pt){const u=this.aimedDoor===e.id;h.emissive.set(u?"#6a3028":"#000000"),h.emissiveIntensity=u?.35:0}}}slamNearest(){let t=null,e=12;for(const s of this.world.doors){if((this.open.get(s.id)??0)<.4)continue;const r=this.doorPos(s),o=Math.hypot(r.x-this.sim.x,r.z-this.sim.z);o<e&&(e=o,t=s.id)}if(!t)return;this.desired.set(t,0),this.open.set(t,0);const n=this.world.doors.find(s=>s.id===t);this.audio.play("doorSlam",this.doorPos(n),{volume:.9}),this.noise("door"),e<4&&(this.trauma=Math.max(this.trauma,.45))}candidates(){const t=[];for(const n of this.world.doors){if(n.kind!=="door")continue;const s=this.doorPos(n),r=this.open.get(n.id)??0,a=cr(n,this.unlocked)?"Låst dør":r>.4?"Luk dør":"Åbn dør";t.push({id:n.id,kind:"door",x:s.x,y:s.y+1,z:s.z,radius:1.15,prompt:a})}for(const n of this.world.pickups){if(this.snap.pickedUp.includes(n.id))continue;const s=this.world.rooms.find(r=>r.id===n.room);s&&t.push({id:n.id,kind:"pickup",x:n.x,y:Dt[s.floor]+.8,z:n.z,radius:.55,prompt:si(n.itemId).name})}for(const n of this.runtime)t.push({id:n.id,kind:"pickup",x:n.x,y:n.y,z:n.z,radius:.5,prompt:"Batteri"});const e=this.world.props.find(n=>n.id==="slag_shelf");if(e){const n=this.world.rooms.find(s=>s.id===e.room);n&&t.push({id:e.id,kind:"bookshelf",x:e.x,y:Dt[n.floor]+1,z:e.z,radius:1.1,prompt:this.snap.flags.secretOpen?"Kravl ind i tunnellen":"Hylde"})}for(const n of this.world.devices){const s=this.world.rooms.find(o=>o.id===n.room),r={generator:"Generator",safe:"Pengeskab",bookshelf:this.snap.flags.secretOpen?"Kravl ind i tunnellen":"Hylde",radio:"Radio"};t.push({id:n.id,kind:n.kind,x:n.x,y:Dt[s.floor]+1,z:n.z,radius:.9,prompt:r[n.kind]})}t.push(...this.containers.candidates());for(const n of this.world.hides){const s=this.world.rooms.find(r=>r.id===n.room);t.push({id:n.id,kind:"hide",x:n.x,y:Dt[s.floor]+1,z:n.z,radius:.8,prompt:n.kind==="bed"?"Gem dig under sengen":"Gem dig i skabet"})}return t}syncHud(t){const e=this.hiding?null:or(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates());this.aimedDoor=e?.kind==="door"?e.id:"";const n=fr(this.snap);n.id!==this.lastObjective&&(this.lastObjective&&(this.toast=n.text,this.toastT=3.5,this.persist(0)),this.lastObjective=n.id);const s=Su(this.snap);this.ui.hud({objective:n.text,files:s?`Journaler ${s}/${el.length}`:"",prompt:this.messageT>0?this.message:this.hiding?"Forlad gemmested":e?e.prompt:"",stamina:this.sim.stamina,battery:this.sim.battery,batteryText:`${Math.round(this.sim.battery)}%${hr(this.sim.battery)==="critical"&&this.sim.flashlightOn?" · lavt":""}`,low:this.sim.health<40||hr(this.sim.battery)!=="ok",lockHint:this.mode==="playing"&&!this.input.pointerLocked}),this.ui.hurt(this.damage*.85+(this.sim.health<35?.25:0)),this.paintMap(),this.ui.toast(this.toastT>0?this.toast:"");const r=this.audio.debug();if(this.ui.audioDebug(`Lyd ${r.state}  ${r.sampleRate} Hz
Stemmer ${r.voices}
${r.failures.length?`FEJL ${r.failures.join(" | ")}
`:""}${r.last.join(`
`)}`,this.showAudio&&this.mode==="playing"),this.showPerf){const o=this.renderer.info.render;this.ui.perf(`FPS ${this.fps.toFixed(0)}
Kald ${o.calls}  Trekanter ${o.triangles}
${this.monster.bb.state}  spænding ${this.director.tension.toFixed(0)}
${this.sim.x.toFixed(1)} ${this.sim.y.toFixed(1)} ${this.sim.z.toFixed(1)}`,!0)}else this.ui.perf("",!1)}visit(){const t=Vn(this.world,this.sim.x,this.sim.z,this.sim.y);t&&(this.snap.visited.includes(t.id)||(this.snap.visited.push(t.id),new Set(this.snap.visited.map(n=>this.world.rooms.find(s=>s.id===n)?.floor)).size>1&&this.persist(0)))}refreshObjective(){fr(this.snap).id!==this.lastObjective&&this.lastObjective&&(this.bus.emit({type:"objectiveCompleted",id:this.lastObjective}),this.persist(0))}floorAllowed(t){return!0}huntUnlocked(){return(this.snap.events?.slagter??0)>=4}earlyPatrol(t){if(this.huntUnlocked())return t;const e=t.filter(n=>n.x>=36&&n.x<=48&&n.y<2);return e.length?e:t}holdGuardianBack(){if(this.huntUnlocked())return;const t=Math.hypot(this.monster.pos.x-this.sim.x,this.monster.pos.z-this.sim.z)<4;(this.monster.pos.x<36||this.monster.pos.y>2||t)&&(this.monster.pos={x:46.2,y:0,z:10.2},this.monster.group.position.set(46.2,0,10.2)),(this.monster.bb.state==="Chase"||this.monster.bb.state==="Attack"||this.monster.bb.state==="Investigate")&&(this.monster.bb.state="Patrol")}computeChase(){if(!this.huntUnlocked())return!1;const t=this.monsterDist();let e=this.snap.playTime>46||ue(this.snap.inventory,"note_code")||t<4.2;return this.director.suppress>0&&t>2.6&&(e=!1),e}noise(t,e){const n=e??this.feet(),s=n.y<2?-1:n.y<6?0:1,r=this.monster.pos.y<2?-1:this.monster.pos.y<6?0:1,o=!Ps(n,{x:this.monster.pos.x,y:this.monster.pos.y+1.5,z:this.monster.pos.z},ps(this.world,this.unlocked,this.open));this.noises.push({kind:t,pos:n,floorDelta:Math.abs(s-r),occluded:o}),this.bus.emit({type:"noiseEmitted",kind:t,x:n.x,y:n.y,z:n.z})}useContainer(t){const e=this.containers.use(t,this.eyePos(),s=>ue(this.snap.inventory,s),s=>Ni(this.snap.inventory,s,1).added>0,ps(this.world,this.unlocked,this.open)),n={x:e.x,y:e.y,z:e.z};e.effect==="opening"||e.effect==="closing"?(this.audio.play(e.kind==="cabinet"?"door":"creak",n,{volume:.62}),this.noise("door",n),this.say(e.effect==="opening"?e.kind==="cabinet"?"Lågen giver sig.":"Skuffen glider ud.":e.kind==="cabinet"?"Lågen går i.":"Skuffen går i.")):e.effect==="locked"?(this.audio.play("locked",n,{volume:.7}),this.noise("door",n),this.say("Låst. Du mangler den rigtige nøgle.")):e.effect==="busy"?this.say("Den bevæger sig stadig."):e.effect==="occluded"?this.say("Du kan ikke nå den."):e.effect==="no_space"?this.say("Du kan ikke bære flere."):e.effect==="taken"&&e.itemId?this.grantContainerItem(e.itemId):e.effect==="already_taken"&&this.say("Der er ikke mere.")}grantContainerItem(t){const e=Ni(this.snap.inventory,t,1);if(!e.added){this.say("Du kan ikke bære flere.");return}this.snap.inventory=e.slots;const n=t.startsWith("note")||t.startsWith("file");this.audio.play(n?"paper":t.startsWith("key")?"key":"pickup");const s=si(t);(s.kind==="note"||s.kind==="story"||s.kind==="map"||s.kind==="collectible")&&this.openExamine(t),t==="battery"?(this.sim.battery=Po(this.sim.battery,50),this.say("Batteri. +50%.")):t.startsWith("fuse_")?this.say(`${s.name}.`):n||this.say(s.name),this.bus.emit({type:"itemFound",id:t}),this.refreshObjective()}separateFromMonster(t){if(this.hiding||this.monster.concealed)return;const e=this.sim.x-this.monster.pos.x,n=this.sim.z-this.monster.pos.z,s=Math.hypot(e,n),r=.66;s>.001&&s<r&&Math.abs(this.sim.y-this.monster.pos.y)<1.5&&(this.sim.x+=e/s*(r-s),this.sim.z+=n/s*(r-s),ms(this.world,this.sim.x,this.sim.z,this.sim.y)===null&&(this.sim.x-=e/s*(r-s),this.sim.z-=n/s*(r-s)))}beginIntro(){if(!this.wantsIntro){this.introTime=-1,this.ui.hideIntro();return}this.introTime=0,this.introBeat=-1,this.snap.flags.introDone=!1,this.ui.setIntro("",""),this.ui.cinematic(!0),this.viewmodel.visible=!1,this.audio.play("sting",void 0,{volume:.22})}stepIntro(t){this.introTime+=t;const e=Iy(this.introTime);if(e.done){this.finishIntro();return}e.beat&&e.beat.at!==this.introBeat&&(this.introBeat=e.beat.at,this.ui.setIntro(e.beat.title,e.beat.body),e.beat.title==="NYT MÅL"&&this.audio.play("paper",void 0,{volume:.3})),this.viewmodel.visible=!1,this.lunge.visible=!1,this.cone.visible=!1,this.placeCamera({sprint:!1},t)}finishIntro(){this.introTime<0||(this.introTime=-1,this.introBeat=-1,this.snap.flags.introDone=!0,this.viewmodel.visible=!0,this.ui.hideIntro())}newGame(){this.snap=Ar(),this.ended=!1,this.autosavedIntro=!1,this.lastObjective="",this.fade=1,this.sim=Ia(this.snap.player),this.unlocked=new Set(this.snap.doorsUnlocked),this.open.clear(),this.desired.clear(),this.hiding=null,this.runtime.forEach(t=>t.mesh.visible=!1),this.runtime=[],this.containers.reset();for(const[t,e]of this.built.pickups)e.visible=!this.snap.pickedUp.includes(t);this.monster.spawn(this.snap.monster,this.snap.monster.yaw,"Patrol"),this.director=kc(),this.schedule=Lc(),this.tone=wo(),this.radioAt=-99,this.beginIntro(),this.creepIn=12,this.scares.dismiss(),this.audio.beginScene(),this.built.mannequin.visible=!1,this.built.secretShelf.position.x=37.32,this.viewmodel.visible=!0,this.lunge.visible=!1,this.setMode("playing"),this.audio.ensure()}applySnapshot(t){this.snap=t,this.ended=!1,this.sim=Ia(t.player),this.unlocked=new Set(t.doorsUnlocked),this.open.clear(),this.desired.clear();for(const e of t.doorsOpen)this.open.set(e,1),this.desired.set(e,1);this.hiding=null,this.containers.load(t.containers),this.snap.readIds||(this.snap.readIds=[]),this.settleLoadedBody();for(const[e,n]of this.built.pickups)n.visible=!t.pickedUp.includes(e);t.events||(t.events=ks()),this.monster.spawn(t.monster,t.monster.yaw,t.monster.state),this.monsterDist()<3&&(this.monster.pos={x:4,y:0,z:16},this.monster.group.position.set(4,0,16)),this.built.secretShelf.position.x=t.flags.secretOpen?36:37.32,this.built.mannequin.visible=!1,this.fade=.4,this.viewmodel.visible=!0,this.lunge.visible=!1,this.creepIn=12,this.schedule=kx(this.schedule),this.tone=wo(),this.radioAt=-99,this.introTime=-1,this.introBeat=-1,this.ui.hideIntro(),this.scares.dismiss(),this.audio.beginScene(),this.setMode("playing"),this.audio.ensure(),this.bus.emit({type:"saveLoaded",slot:-1})}settleLoadedBody(){const t=ms(this.world,this.sim.x,this.sim.z,this.sim.y),e=t!==null&&Zv(this.sim.x,t,this.sim.z,ru,Sr,this.sim.crouching,ps(this.world,this.unlocked,this.open));if(t===null||e){this.sim.x=di.x,this.sim.y=di.y,this.sim.z=di.z;return}this.sim.y=t}persist(t){this.snap.player.health<=0||(this.copySim(),this.snap.doorsOpen=this.world.doors.filter(e=>(this.open.get(e.id)??0)>.6).map(e=>e.id),this.snap.doorsUnlocked=[...this.unlocked],this.snap.monster={x:this.monster.pos.x,y:this.monster.pos.y,z:this.monster.pos.z,yaw:this.monster.yaw,state:this.monster.bb.state,waypointIndex:this.monster.bb.waypointIndex,suspicion:this.monster.bb.suspicion,blindTime:this.monster.bb.blindTime},uy(this.storage,t,this.snap),this.ui.continueEnabled(!0))}copySim(){this.snap.containers=this.containers.save(),this.snap.player={x:this.sim.x,y:this.sim.y,z:this.sim.z,yaw:this.sim.yaw,pitch:this.sim.pitch,health:this.sim.health,stamina:this.sim.stamina,battery:this.sim.battery,flashlightOn:this.sim.flashlightOn,crouching:this.sim.crouching}}setMode(t){const e=this.mode;this.mode=t,t!=="playing"?(this.input.unlock(),this.audio.setLocomotion(!1,!1,!1),this.stepDist=0,e==="playing"&&this.audio.suspendTransient()):e!=="playing"&&!this.testMode&&this.introTime<0&&this.input.lock();const n=t==="paused"?"pause":t;this.ui.show(n==="playing"?"playing":n),this.introTime>=0&&(this.viewmodel.visible=!1,this.ui.cinematic(!0)),this.audio.duck(t!=="playing"&&t!=="menu"),t==="inventory"&&this.refreshInv()}applyModalKeys(){const t=this.input.formFocused();if((this.mode!=="playing"||t||this.introTime>=0)&&this.input.discard(G_),this.introTime>=0&&!t){this.input.takeFirst(["Escape","Enter","Space"])&&this.finishIntro();return}if(this.mode==="inventory"&&!t){const s=H_(this.input.takeFirst(["ArrowUp","ArrowDown","KeyW","KeyS","Enter","KeyE"]));s==="up"&&(this.invIndex=Math.max(0,this.invIndex-1)),s==="down"&&(this.invIndex=Math.min(Math.max(0,this.snap.inventory.length-1),this.invIndex+1)),(s==="up"||s==="down")&&this.refreshInv(),s==="use"&&this.useSelected()}const e=this.input.takeFirst(t?["Escape"]:B_),n=V_(this.mode,e);n.type==="mode"?this.setMode(n.mode):n.type==="back"&&this.backFromOverlay()}backFromOverlay(){this.mode==="settings"?this.setMode(this.settingsFrom==="slots"?"menu":this.settingsFrom):this.mode==="slots"?this.setMode(this.slotMode==="save"?"paused":"menu"):(this.mode==="credits"||this.mode==="exit")&&this.setMode("menu")}refreshInv(){const t=this.snap.inventory.map(e=>{const n=si(e.itemId);return{name:n.name,count:e.count,desc:n.description}});this.invIndex>=t.length&&(this.invIndex=0),this.ui.keysLine(`Nøgler fundet: ${Kc(this.snap)}/3`),this.ui.inventory(t,this.invIndex)}openExamine(t){this.snap.readIds.includes(t)||(this.snap.readIds.push(t),this.refreshObjective());const e=si(t);let n="";t==="blueprint"&&(n=this.world.rooms.filter(s=>s.id!=="secret"||this.snap.visited.includes("secret")).map(s=>`<i class="${this.snap.visited.includes(s.id)?"on":""}">${s.name}</i>`).join("")),this.ui.examine(e,n),this.setMode("examine")}stepRoomTone(t,e){const n=t?{id:t.id,x:t.x,z:t.z,w:t.w,d:t.d,floorY:Dt[t.floor]}:null,s=zx(this.tone,{time:this.snap.playTime,dt:e,room:n});if(this.tone=s.state,s.cue){const r=s.cue;this.audio.play(r.kind,{x:r.x,y:r.y,z:r.z},{volume:.22,occluded:!1})}if(Bx(this.snap.flags.radioOn,this.snap.playTime,this.radioAt)&&(this.radioAt=this.snap.playTime,this.audio.play("whisper",Uc,{volume:.2,occluded:!0})),t&&this.snap.playTime>=this.extraCueAt){const r=["patientgang","observation","kammer"].includes(t.id),o=["slagterum","obduktion","kaeldergang"].includes(t.id);if(r||o){const a=r?"babyLaugh":"pigRhythm",l={x:t.x+Math.min(t.w-1,3),y:Dt[t.floor]+1.25,z:t.z+t.d-1.1};this.audio.playUserScare(a,l),this.extraCueAt=this.snap.playTime+65+t.id.length%5*11}}}zoneFor(t){return t?t==="kapel"?"chapel":t==="slagterum"||t==="obduktion"?"slagter":t.startsWith("trappe")||t==="patientgang"?"corridor":t==="observation"||t==="kammer"||t==="stilhed"?"dark":t==="kaeldergang"?"cellar":this.sim.y>6?"upper":"hall":"hall"}relocateMonster(t,e){if(!this.monster.concealed){this.hideWait=0;return}if(this.hideWait+=t,this.hideWait<1.2)return;const n={x:this.sim.x,y:this.sim.y,z:this.sim.z},s=Ax({cells:this.spawnCells,player:n,forward:{x:this.camDir.x,z:this.camDir.z},recent:this.recentSpawns,from:{...this.monster.pos},visible:o=>Ps(this.eyePos(),{x:o.x,y:o.y+1.4,z:o.z},e),rng:Math.random});!s||Ic(this.sim.flashlightOn&&this.sim.battery>0,this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},{x:s.x,y:s.y+1.6,z:s.z},e)||(this.monster.reveal(s),this.recentSpawns.push(s),this.recentSpawns.length>6&&this.recentSpawns.shift(),this.hideWait=0,this.audio.trace.push("relocate"))}stepEvents(t){this.snap.events||(this.snap.events=ks());const e=Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.id??"",n=or(this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},this.candidates()),s=n&&n.kind==="door"?this.open.get(n.id)??0:0,r=!!n&&n.kind==="door"&&s>.55&&n.id!==Nc,o=this.butcher.position,a=new U(o.x-this.camera.position.x,o.y+1.5-this.camera.position.y,o.z-this.camera.position.z),l=Math.max(.001,a.length()),c=(this.camDir.x*a.x+this.camDir.y*a.y+this.camDir.z*a.z)/l>.62,u=this.sim.flashlightOn&&this.sim.battery>0&&Ic(!0,this.eyePos(),{x:this.camDir.x,y:this.camDir.y,z:this.camDir.z},{x:o.x,y:o.y+1.5,z:o.z},ps(this.world,this.unlocked,this.open));this.beamHold=u?this.beamHold+t:0;const d=this.camDir.x*a.x+this.camDir.z*a.z<.25,p=Cx(this.snap.events,{dt:t,time:this.snap.playTime,room:e,prevRoom:this.prevRoom,flashlight:this.sim.flashlightOn,prevFlash:this.prevFlash,lookedAway:this.snap.events.slagter===2&&d,atDoor:r,powerCut:this.snap.flags.powerCut,lookingAtFigure:this.snap.events.slagter===2&&c,beam:this.snap.events.slagter===3&&this.beamHold>.28});this.huntUnlocked()&&this.maybePeek(n),this.snap.events=p.state,this.prevRoom=e,this.prevFlash=this.sim.flashlightOn;for(const f of p.cues)this.fireCue(f,n?.id);if(this.stepPasser(t),this.stepButcherCharge(t),p.cues.some(f=>f.startsWith("jump")||f==="figure")&&(this.schedule=Dx(this.schedule,this.snap.playTime,20),this.director={...this.director,suppress:Math.max(this.director.suppress,6)}),this.runSchedule(e,t),this.lungeT>0){this.lungeT=Math.max(0,this.lungeT-t),this.lunge.visible=this.lungeT>0;const f=1-this.lungeT/2;this.lunge.position.z=-.9+f*.5}else this.lunge.visible=!1;if(this.shadowT>0){this.shadowT=Math.max(0,this.shadowT-t);const f=1-this.shadowT/1.1;this.shadowMesh.position.lerpVectors(this.shadowFrom,this.shadowTo,Math.min(1,f)),this.shadowMesh.position.y=this.shadowFrom.y+1,this.shadowMesh.visible=this.shadowT>0,this.audio.moveTracked(this.shadowMesh.position)}}runSchedule(t,e){this.snap.events.beats||(this.snap.events.beats=[]);for(const s of Nx({time:this.snap.playTime,room:t,readIds:this.snap.readIds,fired:this.snap.events.beats}))this.schedule=Ix(this.schedule,s);const n=Lx(this.schedule,{dt:e,time:this.snap.playTime,room:t,blocked:this.monster.bb.state==="Attack"||this.lungeT>0||this.scares.fx.face>0,firedIds:this.snap.events.beats});this.schedule=n.state;for(const s of n.fired)this.playBeat(s.id)}playBeat(t){if(this.snap.events.beats.includes(t)||this.snap.events.beats.push(t),this.director={...this.director,suppress:Math.max(this.director.suppress,8),sinceScare:0},t==="reception_wake"){this.lightCut.set("reception_0",this.snap.playTime+.45),this.lightCut.set("reception_1",this.snap.playTime+1.15),this.lightCut.set("reception_2",this.snap.playTime+1.9),this.audio.play("door",{x:14,y:0,z:6},{volume:.45,occluded:!0}),this.caption("Majas brev peger mod arkivet.",2.4);return}if(t==="arkiv_names"){this.shadowFrom.set(6,this.sim.y,3.4),this.shadowTo.copy(this.shadowFrom),this.shadowT=1.1,this.audio.play("paper",{x:6,y:this.sim.y+1,z:3.4},{volume:.7}),this.caption("Navnene stemmer ikke med journalen.",2.4);return}if(t==="obduktion_witness"){const e=this.sim.y;this.audio.play("metallic",{x:this.sim.x,y:e+.8,z:this.sim.z},{volume:.65});for(const n of this.built.lights)(n.def.room==="operationsstue"||n.def.room==="obduktion")&&this.lightCut.set(n.def.id,this.snap.playTime+2.4);this.shadowFrom.set(this.sim.x+this.camDir.x*2.8,e,this.sim.z+this.camDir.z*2.8),this.shadowTo.copy(this.shadowFrom),this.shadowT=1.1,this.caption("Noget står i døråbningen.",2.2)}}fireCue(t,e){if(t==="pass:patient"){this.beginPass("door_pat_op",1.15,1),this.audio.play("whisper",this.passFrom,{volume:.45}),this.settings.cameraShake&&(this.trauma=Math.max(this.trauma,.16));return}if(t==="pass:operation"){this.beginPass("door_op_slag",.72,.86),this.audio.play("creak",this.passFrom,{volume:.55}),this.settings.cameraShake&&(this.trauma=Math.max(this.trauma,.2));return}if(t==="archive"){this.passFrom.set(3.1,4,9.6),this.passTo.set(8.8,4,9.6),this.passT=1.35,this.peek.scale.set(1,1.05,1),this.peek.position.copy(this.passFrom),this.peek.visible=!0,this.audio.play("paper",{x:6,y:5,z:8.4},{volume:.8}),this.audio.play("whisper",{x:6,y:5.4,z:8.4},{volume:.5}),this.settings.cameraShake&&(this.trauma=Math.max(this.trauma,.28)),this.say("Noget bevægede sig mellem reolerne.");return}if(t==="blackout"){this.butcher.position.set(42,0,2.4),this.butcher.visible=!1,this.butcherHit=!1,this.beamHold=0,this.audio.play("metallic",{x:42,y:1,z:6},{volume:.55});return}if(t==="await-turn"){this.audio.play("deep",{x:42,y:1.2,z:2.4},{volume:.45});return}if(t==="charge"){this.butcher.visible=!0,this.butcher.position.set(42,0,2.4),this.audio.play("scream",{x:42,y:1.6,z:3},{volume:.72}),this.settings.cameraShake&&(this.trauma=Math.max(this.trauma,.34));return}if(t==="banish"){this.butcher.visible=!1,this.audio.play("whisper",{x:this.butcher.position.x,y:1.4,z:this.butcher.position.z},{volume:.4}),this.say("Lyset jog den væk.");return}if(t==="strike"){this.butcherHit||(this.butcherHit=!0,this.hurt(18,!1)),this.butcher.visible=!1,this.say("Den ramte dig og var væk.");return}if(t==="silence"){this.audio.hush(3.5);return}if(t==="deep"){this.audio.play("deep",{x:40,y:1.2,z:3},{volume:1});return}if(t==="figure"){this.butcher.visible=!0;return}if(t==="hide-figure"){this.butcher.visible=!1;return}t!=="steps"&&t==="shadow"&&this.runShadow(e)}runShadow(t){const e=this.world.doors.find(c=>c.id===t)??this.world.doors.find(c=>c.id==="door_rec_pat");if(!e)return;const n=Dt[e.floor],s=Math.random()<.5?1:-1,r=1.6,o=Math.sign(e.coord-this.sim.x||1),a=Math.sign(e.coord-this.sim.z||1);if(e.axis==="z"){const c=e.coord+a*.85;this.shadowFrom.set(e.center-s*r,n,c),this.shadowTo.set(e.center+s*r,n,c)}else{const c=e.coord+o*.85;this.shadowFrom.set(c,n,e.center-s*r),this.shadowTo.set(c,n,e.center+s*r)}this.shadowT=1.1,this.shadowMesh.position.copy(this.shadowFrom),this.shadowMesh.position.y=n+1,this.shadowMesh.visible=!0;const l={x:(this.shadowFrom.x+this.shadowTo.x)/2,y:n+1.2,z:(this.shadowFrom.z+this.shadowTo.z)/2};this.audio.playTracked("shadow",l),this.audio.play("creak",l,{volume:.7}),this.audio.setHeartbeat(.7),this.flash=.4;for(const c of this.built.lights)Math.hypot(c.def.x-l.x,c.def.z-l.z)<8&&this.lightCut.set(c.def.id,this.snap.playTime+.7)}paintMap(){const t=this.ui.root.querySelector("#minimap"),e=t?.getContext("2d");if(!t||!e)return;const n=t.clientWidth||t.width,s=t.clientHeight||t.height,r=wy(n,s,window.devicePixelRatio||1);(t.width!==r.width||t.height!==r.height)&&(t.width=r.width,t.height=r.height);const a=Vn(this.world,this.sim.x,this.sim.z,this.sim.y)?.floor??0,l=Ey(fr(this.snap).id),c=[],h=this.world.rooms.find(f=>f.id===l);h&&this.snap.visited.includes(h.id)&&c.push({id:fr(this.snap).id,roomId:h.id,x:h.x+h.w*.5,z:h.z+h.d*.5,floor:h.floor});const u=Math.round(this.monster.pos.y/4),p=Math.hypot(this.monster.pos.x-this.sim.x,this.monster.pos.z-this.sim.z)<16&&u===a&&!this.monster.concealed&&this.snap.playTime<this.monsterShown;Ry(e,t.width,t.height,{rooms:ky(this.world.rooms),floor:a,px:this.sim.x,pz:this.sim.z,yaw:this.sim.yaw,visited:new Set(this.snap.visited),monster:{x:this.monster.pos.x,z:this.monster.pos.z,floor:u,show:p},batteries:this.world.pickups.filter(f=>f.itemId==="battery"&&this.snap.visited.includes(f.room)&&!this.snap.pickedUp.includes(f.id)).map(f=>({x:f.x,z:f.z,floor:this.world.rooms.find(v=>v.id===f.room)?.floor??0})),doors:this.world.doors.map(f=>({id:f.id,floor:f.floor,axis:f.axis,coord:f.coord,center:f.center,a:f.a,b:f.b,locked:f.locked})),goals:c})}herdMonster(){const t=Vn(this.world,this.monster.pos.x,this.monster.pos.z,this.monster.pos.y);if(t&&t.id!==this.monsterRoom&&(this.monsterRoom=t.id,this.monsterShown=this.snap.playTime+3.6,this.monsterRoomUntil=this.snap.playTime+120),this.monsterRoomUntil>0&&this.snap.playTime>this.monsterRoomUntil&&!this.monster.concealed){const e=this.world.rooms.filter(s=>!s.id.startsWith("trappe")&&s.id!=="stilhed"&&s.id!==this.monsterRoom),n=e[Math.floor(Math.random()*e.length)];if(!n)return;this.monsterRoomUntil=this.snap.playTime+120,this.monster.bb.state="Patrol",this.monster.bb.goal={x:n.x+n.w*.5,y:Dt[n.floor],z:n.z+n.d*.5},this.monsterShown=this.snap.playTime+3.6}}beginPass(t,e,n){const s=this.world.doors.find(a=>a.id===t);if(!s)return;const r=Dt[s.floor];this.desired.set(s.id,1),this.open.set(s.id,1);const o=s.axis==="x"?Math.sign(this.sim.x-s.coord)||-1:Math.sign(this.sim.z-s.coord)||-1;if(s.axis==="x"){const a=s.coord+o*.62;this.passFrom.set(a,r,s.center-.95),this.passTo.set(a,r,s.center+.95)}else{const a=s.coord+o*.62;this.passFrom.set(s.center-.95,r,a),this.passTo.set(s.center+.95,r,a)}this.passT=e,this.peek.scale.set(n,n,n),this.peek.position.copy(this.passFrom),this.peek.rotation.set(0,Math.atan2(this.passTo.x-this.passFrom.x,this.passTo.z-this.passFrom.z),0),this.peek.visible=!0}stepPasser(t){if(this.passT<=0)return;const e=this.peek.scale.y<.95?.72:this.passFrom.y>2?1.35:1.15,n=1-this.passT/e;this.peek.position.lerpVectors(this.passFrom,this.passTo,Math.max(0,Math.min(1,n))),this.peek.rotation.set(0,Math.atan2(this.passTo.x-this.passFrom.x,this.passTo.z-this.passFrom.z),0),this.passT=Math.max(0,this.passT-t),this.peek.visible=this.passT>0}stepButcherCharge(t){if((this.snap.events?.slagter??0)!==3||!this.butcher.visible)return;const e=this.sim.x-this.butcher.position.x,n=this.sim.z-this.butcher.position.z,s=Math.hypot(e,n)||.001,r=Math.min(s-1.7,5.6*t);r>0&&(this.butcher.position.x+=e/s*r,this.butcher.position.z+=n/s*r),this.butcher.lookAt(this.sim.x,1.4,this.sim.z),this.settings.cameraShake&&(this.trauma=Math.max(this.trauma,.12))}maybePeek(t){if(this.passT>0||this.peekT>0||this.peekCool>0||!t||t.kind!=="door"||Math.hypot(this.sim.vx,this.sim.vz)>.4||Math.random()>.012)return;const e=this.world.doors.find(o=>o.id===t.id);if(!e)return;const n=Dt[e.floor],s=Math.sign(e.coord-this.sim.x||1),r=Math.sign(e.coord-this.sim.z||1);this.peek.position.set(e.axis==="x"?e.coord+s*.42:e.spanMin+.15,n,e.axis==="z"?e.coord+r*.42:e.spanMin+.15),this.peek.lookAt(this.camera.position.x,this.peek.position.y+1.5,this.camera.position.z),this.peek.visible=!0,this.peekT=1.25,this.peekCool=26,this.audio.play("whisper",{x:this.peek.position.x,y:n+1.5,z:this.peek.position.z},{volume:.55}),this.audio.trace.push("peek")}stepPower(t){if(!this.snap.flags.powerCut&&this.snap.playTime>=120&&(this.snap.flags.powerCut=!0,this.blackout=.8,this.fade=.92,this.sim.flashlightOn=!1,this.sim.x=42,this.sim.y=0,this.sim.z=8,this.sim.yaw=0,this.sim.vx=0,this.sim.vz=0,this.sim.vy=0,this.audio.play("metallic"),this.audio.trace.push("power-cut")),this.blackout>0&&(this.blackout=Math.max(0,this.blackout-t),this.fade=this.blackout/.8),this.peekCool=Math.max(0,this.peekCool-t),this.peekT>0){this.peekT=Math.max(0,this.peekT-t),this.peek.visible=this.peekT>0;const e=this.peekT>.8?(1.3-this.peekT)/.5:Math.min(1,this.peekT/.35);this.peek.position.y=Dt[Math.round(this.sim.y/4)]+1.45,this.peek.scale.setScalar(.2+.8*Math.max(0,Math.min(1,e)))}}stepKnocks(){if(!this.knocks.length)return;const t=this.snap.playTime;this.knocks=this.knocks.filter(e=>e.at>t?!0:(this.audio.play("door",e.pos,{volume:.75}),this.audio.trace.push("knock"),!1))}queueKnocks(){const t={x:-this.camDir.x,z:-this.camDir.z};for(let e=0;e<3;e++){const n=7-e*2.2;this.knocks.push({at:this.snap.playTime+.35+e*.7,pos:{x:this.sim.x+t.x*n,y:this.sim.y+1,z:this.sim.z+t.z*n}})}}buildViewmodel(){const t=new Yt,e=new pt({color:"#e0c2a4",roughness:.62,emissive:"#5c4030",emissiveIntensity:.22,depthTest:!1}),n=new pt({color:"#3a3734",roughness:.4,metalness:.7,emissive:"#141312",emissiveIntensity:.18,depthTest:!1}),s=new pt({color:"#d5d0c8",roughness:.28,metalness:.8,emissive:"#2a2926",emissiveIntensity:.2,depthTest:!1}),r=new vn({color:"#fff6df",depthTest:!1}),o=f=>(f.frustumCulled=!1,f.renderOrder=3,f.traverse(v=>{v.frustumCulled=!1,v.renderOrder=3}),f),a=new Z(new me(.026,.03,.2,16),n);a.rotation.x=Math.PI/2,a.position.z=-.02;const l=new Z(new me(.042,.034,.06,16),s);l.rotation.x=Math.PI/2,l.position.z=-.15;const c=new Z(new Ir(.034,20),r);c.position.z=-.182,c.rotation.y=Math.PI;const h=new Z(new me(.008,.008,.018,8),s);h.position.set(0,.032,.02);const u=Io(ri(.12,-.14,.16),ri(.03,-.04,.04),.04,.028,e),d=Oy(ri(.02,-.02,-.01),.034,e),p=Io(ri(.04,-.01,.02),ri(.01,.03,-.06),.013,.01,e);t.add(o(a),o(l),o(c),o(h),o(u),o(d),o(p));for(let f=0;f<3;f++){const v=-.01-f*.04;t.add(o(Io(ri(.03,-.01,v),ri(-.015,.028,v-.015),.011,.008,e)))}return t.renderOrder=3,t}buildLunge(){const t=new Yt,e=new pt({color:"#292928",roughness:.97}),n=new pt({color:"#191a1a",roughness:.92}),s=new pt({color:"#4c4741",roughness:1});for(const r of[-1,1]){const o=new Yt;o.position.set(r*.34,-.18,-.08),o.rotation.z=-r*.24;const a=new Z(new me(.06,.095,.38,10),e);a.rotation.z=-r*.28,o.add(a);const l=new Z(new me(.063,.07,.045,10),s);l.position.set(-r*.045,.18,.025),o.add(l);const c=new Z(new Me(.077,10,7),n);c.position.set(-r*.09,.27,.08),o.add(c);for(let h=0;h<4;h++){const u=new Z(new me(.014,.022,.15+h%3*.035,7),n);u.position.set(-r*(.12+h*.039),.37+h%2*.025,.085),u.rotation.z=-r*(.2+h*.08),o.add(u)}t.add(o)}return t.position.set(0,-.16,-.7),t.visible=!1,t.renderOrder=20,t}buildPasser(){const t=new Yt,e=new pt({color:"#1c1916",roughness:.78}),n=new Z(new me(.18,.46,1.25,8),e);n.position.y=.72,n.castShadow=!0,t.add(n);const s=new Z(new ui(.17,.38,4,8),e);s.position.y=1.28,s.castShadow=!0,t.add(s);const r=new Z(new Me(.14,12,10),e);r.scale.set(.86,1.18,.8),r.position.y=1.74,t.add(r);for(const o of[-1,1]){const a=new Z(new ui(.05,.46,3,6),e);a.position.set(o*.3,1.16,.02),a.rotation.z=o*.22,t.add(a)}return t.visible=!1,t}buildButcher(){const t=new Yt;t.position.set(40,0,3);const e=new pt({color:"#292628",roughness:.99,side:ge}),n=new pt({color:"#665b4e",roughness:.98,side:ge}),s=new pt({color:"#481919",roughness:.87}),r=new pt({color:"#44413d",roughness:.98}),o=new pt({color:"#66615b",metalness:.7,roughness:.52}),a=new pt({color:"#34312f",roughness:.96}),l=new Z(new ui(.28,.76,6,12),e);l.position.y=1.11,l.castShadow=!0,t.add(l);for(const p of[-1,1]){const f=new Z(new me(.13,.105,.84,8),e);f.position.set(p*.14,.44,0),t.add(f);const v=new Z(new It(.24,.16,.39),e);v.position.set(p*.14,.08,.095),t.add(v);const m=new Z(new me(.085,.065,.81,8),e);m.position.set(p*.38,1.18,.02),m.rotation.z=p*.18,t.add(m);const g=new Z(new Me(.09,10,8),a);g.position.set(p*.46,.76,.04),t.add(g)}const c=new Z(new fe(.52,.95),n);c.position.set(0,1,.29),c.rotation.z=.045,t.add(c);for(let p=0;p<5;p++){const f=new Z(new It(.045,.22+p%3*.06,.01),s);f.position.set((p-2)*.09,1.01-p%2*.16,.304),f.rotation.z=(p-2)*.1,t.add(f)}const h=new Z(new Me(.19,18,14),a);h.scale.set(.87,1.14,.8),h.position.set(0,1.78,.02),h.castShadow=!0,t.add(h);const u=new Z(new It(.3,.14,.035),r);u.position.set(0,1.71,.17),t.add(u);for(const p of[-1,1]){const f=new Z(new It(.034,.72,.032),n);f.position.set(p*.235,1.26,.29),t.add(f);for(let v=0;v<3;v++){const m=new Z(new It(.24,.047,.019),n);m.position.set(p*.012,1.83-v*.06,.182+.006*v),m.rotation.z=p*.08+v*.045,t.add(m)}}const d=new Z(new It(.1,.42,.018),o);d.position.set(.48,.52,.17),d.rotation.z=-.2,t.add(d);for(let p=0;p<4;p++){const f=new Z(new $n(.07,.013,6,12,Math.PI*1.65),o);f.position.set(-1.18+p*.72,2.4,-.25),f.rotation.x=Math.PI/2,t.add(f)}return t.visible=!1,t}caption(t,e){this.settings.subtitles&&(this.ui.subtitle(t),this.subtitleT=e)}say(t){this.message=t,this.messageT=2.6}eyePos(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}feet(){return{x:this.sim.x,y:this.sim.y,z:this.sim.z}}hidePos(){const t=this.world.hides.find(e=>e.id===this.hiding);return t?{x:t.x,y:this.sim.y,z:t.z}:null}doorPos(t){return{x:t.axis==="x"?t.coord:t.center,y:Dt[t.floor]+1,z:t.axis==="z"?t.coord:t.center}}monsterDist(){return Math.hypot(this.monster.pos.x-this.sim.x,this.monster.pos.z-this.sim.z)}monsterDistTo(t,e){return Math.hypot(this.camera.position.x-t,this.camera.position.z-e)}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix();const n=this.settings.quality==="low"?1:this.settings.quality==="high"?1.5:1.25,s=Math.min(window.devicePixelRatio||1,n)*this.settings.resolutionScale;this.renderer.setPixelRatio(s),this.renderer.setSize(t,e,!1),this.post.setSize(Math.floor(t*s),Math.floor(e*s))}applyVolumes(){this.audio.setVolumes(this.settings.masterVolume,this.settings.musicVolume,this.settings.sfxVolume)}applyPatch(t){const e=this.settings.quality;if(this.settings=sl({...this.settings,...t}),fy(this.storage,this.settings),this.ui.fillSettings(this.settings),this.applyVolumes(),this.input.setSensitivity(this.settings.mouseSensitivity),t.quality&&t.quality!==e){this.post.applyQuality(this.settings.quality),this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.spot.castShadow=this.settings.quality!=="low";for(const n of this.built.detail)n.visible=this.settings.quality!=="low"}t.fullscreen!==void 0&&(this.settings.fullscreen?document.documentElement.requestFullscreen?.().catch(()=>{}):document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{})),this.resize()}bindUi(){}handle(t,e){if(t==="new")this.newGame();else if(t==="continue"){const n=Qc(this.storage);n&&this.applySnapshot(n.snapshot)}else if(t==="openLoad")this.slotMode="load",this.ui.slots(Jc(this.storage),"INDLÆS"),this.setMode("slots");else if(t==="openSave")this.slotMode="save",this.ui.slots(Jc(this.storage),"GEM"),this.setMode("slots");else if(t==="slot"&&typeof e=="number")if(this.slotMode==="save")this.persist(e),this.say("Gemt."),this.setMode("paused");else{const n=Es(this.storage,e);n&&this.applySnapshot(n.snapshot)}else if(t==="closeSlots")this.setMode(this.slotMode==="save"?"paused":"menu");else if(t==="settings")this.settingsFrom=this.mode==="playing"?"paused":this.mode,this.ui.fillSettings(this.settings),this.setMode("settings");else if(t==="closeSettings")this.setMode(this.settingsFrom==="slots"?"menu":this.settingsFrom);else if(t==="resume")this.setMode("playing");else if(t==="restart")this.newGame();else if(t==="menu")!this.ended&&this.snap.playTime>1&&this.persist(0),this.setMode("menu");else if(t==="exit")this.setMode("exit"),window.close();else if(t==="exitBack")this.setMode("menu");else if(t==="credits")this.setMode("credits");else if(t==="creditsBack")this.setMode("menu");else if(t==="closeInv")this.setMode("playing");else if(t==="inventory")(this.mode==="playing"||this.mode==="paused")&&this.setMode("inventory");else if(t==="select"&&typeof e=="number")this.invIndex=e,this.refreshInv();else if(t==="use")this.useSelected();else if(t==="drop")this.dropSelected();else if(t==="closeEx")this.setMode(this.snap.playTime>0&&!this.ended?"playing":"menu");else if(t==="digit"&&typeof e=="string")this.code.length<4&&(this.code+=e),this.ui.keypad(this.code,"Stiftelsesåret.");else if(t==="keyOk")this.submitCode();else if(t==="keyClear")this.code="",this.ui.keypad(this.code,"Stiftelsesåret.");else if(t==="keyClose")this.setMode("playing");else if(t!=="patch")if(t==="endMenu")this.setMode("menu");else if(t==="endRetry"){const n=Es(this.storage,0);n?this.applySnapshot(n.snapshot):this.newGame()}else t==="endNew"&&this.newGame()}useSelected(){const t=this.snap.inventory[this.invIndex];if(!t)return;const e=si(t.itemId);if(e.kind==="consumable"){const n=X_(this.snap.inventory,t.itemId);n.heal&&(this.snap.inventory=n.slots,this.sim.health=Math.min(100,this.sim.health+n.heal),this.snap.player.health=this.sim.health,this.audio.play("pickup"),this.refreshInv());return}(e.text||e.kind==="map"||e.kind==="note"||e.kind==="story"||e.kind==="collectible")&&this.openExamine(t.itemId)}dropSelected(){const t=this.snap.inventory[this.invIndex];if(!t)return;const e=jc(this.snap.inventory,t.itemId);if(!e.dropped){this.say("Den skal du beholde.");return}this.snap.inventory=e.slots,this.refreshInv()}installApi(){const t=this;window.__AGNES__={ready:!0,introOn:()=>t.introTime>=0,seed:()=>t.rng.seed,photos:()=>t.built.photoSlots,signals:()=>t.bus.recent(),hiding:()=>t.hiding,face:e=>{t.sim.yaw=e,t.syncView()},gfx:()=>{const e=t.renderer.info.render;return{fps:t.fps,calls:e.calls,triangles:e.triangles,lights:t.built.lights.filter(n=>n.light.visible).length,flash:0,face:t.scares.fx.face}},lamps:()=>t.built.lights.filter(e=>e.def.room==="reception").map(e=>e.light.intensity),mode:()=>t.mode,start:()=>t.newGame(),snapshot:()=>(t.copySim(),JSON.parse(JSON.stringify(t.snap))),setMove:e=>{t.input.virtual=e},look:(e,n)=>{const s=Rc(t.sim.yaw,t.sim.pitch,e,n,t.settings.invertY);t.sim.yaw=s.yaw,t.sim.pitch=s.pitch,t.syncView()},act:e=>{e==="interact"?t.interact():e==="flashlight"?t.toggleFlash():e==="pause"?t.setMode("paused"):e==="inventory"?t.setMode("inventory"):e==="reload"?t.swapBattery():t.handle(e)},teleport:(e,n,s)=>{t.sim.x=e,t.sim.y=n,t.sim.z=s;const r=ms(t.world,e,s,n);r!==null&&(t.sim.y=r),t.syncView()},freeze:e=>t.setFrozen(e),give:e=>{t.snap.inventory=Ni(t.snap.inventory,e).slots},setFlag:(e,n)=>{t.snap.flags[e]=n,e==="secretOpen"&&n&&t.unlocked.add("door_secret"),e==="generatorOn"&&(t.snap.flags.generatorOn=n)},unlock:e=>t.unlocked.add(e),forceMonster:e=>{t.monster.bb.state=e},faceMonster:e=>t.monster.face(e),placeMonster:(e,n,s)=>{t.monster.pos={x:e,y:n,z:s},t.monster.group.position.set(e,n,s),t.monster.bb.state="Idle",t.monster.face(Math.PI),t.snap.iFrame=8,t.scares.fx.face=0,t.scares.update(10)},scare:e=>t.scares.trigger(e,t.snap.playTime,!0),save:e=>t.persist(e),load:e=>{const n=Es(t.storage,e);return n&&t.applySnapshot(n.snapshot),!!n},restart:()=>t.newGame(),fps:()=>t.fps,monster:()=>({x:t.monster.pos.x,y:t.monster.pos.y,z:t.monster.pos.z,state:t.monster.bb.state}),doorOpen:e=>(t.open.get(e)??0)>.6,container:e=>t.containers.state(e),aim:()=>{const e=or(t.eyePos(),{x:t.camDir.x,y:t.camDir.y,z:t.camDir.z},t.candidates());return e?{id:e.id,kind:e.kind,prompt:e.prompt}:null},tension:()=>t.director.tension,lastScare:()=>t.scares.lastKind,audioLog:()=>t.audio.trace.slice(),monsterHidden:()=>t.monster.concealed,events:()=>t.snap.events,advance:e=>{t.testMode&&(t.snap.playTime+=e)},tick:e=>{if(!t.testMode)return;let n=e;for(;n>1e-4;){const s=Math.min(.05,n);t.advance(s),n-=s}},figure:()=>({passer:t.peek.visible,passerX:t.peek.position.x,passerZ:t.peek.position.z,butcher:t.butcher.visible,butcherX:t.butcher.position.x,butcherZ:t.butcher.position.z}),emptyLight:()=>{t.sim.battery=.15},ping:e=>{t.audio.play(e,{x:t.sim.x+1.5,y:t.sim.y+1,z:t.sim.z+1.5},{volume:1})},probe:e=>t.audio.sampleMix(e),audition:e=>t.audio.audition(e),measureBed:()=>t.audio.measureBed()}}}function ri(i,t,e){return new U(i,t,e)}function Io(i,t,e,n,s){const r=new U().subVectors(t,i),o=Math.max(.001,r.length()),a=new Z(new me(e,n,o,12),s);return a.position.copy(i).lerp(t,.5),a.quaternion.setFromUnitVectors(new U(0,1,0),r.normalize()),a}function Oy(i,t,e){const n=new Z(new Me(t,12,8),e);return n.position.copy(i),n}function zy(){return Ia(Ar().player)}function Ia(i){return{...i,vy:0,vx:0,vz:0,grounded:!0,justLanded:!1}}class By{root;hooks;constructor(t,e){this.root=t,this.hooks=e,t.innerHTML=Hy,this.bind()}bind(){const t=this.hooks,e=(a,l)=>{this.root.querySelector(a)?.addEventListener("click",l)};e("#btn-new",t.newGame),e("#btn-continue",t.continue),e("#btn-load",t.openLoad),e("#btn-settings",t.settings),e("#btn-credits",t.credits),e("#btn-exit",t.exit),e("#btn-resume",t.resume),e("#btn-save",t.openSave),e("#btn-pause-settings",t.settings),e("#btn-restart",t.restart),e("#btn-menu",t.menu),e("#btn-settings-back",t.closeSettings),e("#btn-slots-back",t.closeSlots),e("#btn-credits-back",t.creditsBack),e("#btn-exit-back",t.exitBack),e("#btn-inv-close",t.closeInventory),e("#btn-inv-hud",t.openInventory),e("#btn-use",t.useItem),e("#btn-drop",t.dropItem),e("#btn-examine-close",t.closeExamine),e("#btn-key-ok",t.keypadOk),e("#btn-key-clear",t.keypadClear),e("#btn-key-close",t.closeKeypad),e("#btn-end-menu",t.endingMenu),e("#btn-end-retry",t.endingRetry),e("#btn-end-new",t.endingNew),this.root.querySelectorAll("[data-digit]").forEach(a=>{a.addEventListener("click",()=>t.digit(a.dataset.digit||""))});const n=(a,l)=>{const c=this.root.querySelector(a);c?.addEventListener("input",()=>t.patchSettings({[l]:Number(c.value)}))};n("#set-res","resolutionScale"),n("#set-sens","mouseSensitivity"),n("#set-master","masterVolume"),n("#set-music","musicVolume"),n("#set-sfx","sfxVolume"),n("#set-bright","brightness");const s=this.root.querySelector("#set-quality");s?.addEventListener("change",()=>t.patchSettings({quality:s.value}));const r=this.root.querySelector("#set-fps");r?.addEventListener("change",()=>t.patchSettings({fpsCap:Number(r.value)}));const o=(a,l)=>{const c=this.root.querySelector(a);c?.addEventListener("change",()=>t.patchSettings({[l]:c.checked}))};o("#set-blur","motionBlur"),o("#set-shake","cameraShake"),o("#set-subs","subtitles"),o("#set-flicker","reduceFlicker"),o("#set-full","fullscreen"),o("#set-invert","invertY")}show(t){t==="paused"&&(t="pause");for(const s of this.root.querySelectorAll(".screen"))s.classList.add("hidden");if(this.q("#loading").classList.toggle("hidden",t!=="loading"),this.q("#fatal").classList.toggle("hidden",t!=="fatal"),t==="none"||t==="playing"){this.q("#hud").classList.toggle("hidden",t!=="playing");return}this.q("#hud").classList.toggle("hidden",t!=="playing");const n={menu:"#menu",pause:"#pause",settings:"#settings",slots:"#slots",credits:"#credits",exit:"#exit",inventory:"#inventory",examine:"#examine",keypad:"#keypad",ending:"#ending",loading:"#loading",fatal:"#fatal"}[t];n&&this.q(n).classList.remove("hidden"),(t==="inventory"||t==="examine"||t==="keypad")&&this.q("#hud").classList.add("hidden")}status(t){this.q("#loading").textContent=t}fatal(t){this.q("#fatal").textContent=t,this.show("fatal")}continueEnabled(t){this.q("#btn-continue").disabled=!t}hud(t){this.q("#obj-text").textContent=t.objective,this.q("#files").textContent=t.files,this.q("#prompt").innerHTML=t.prompt?`<b>E</b> ${Gy(t.prompt)}`:"";const e=this.q("#stam");e.classList.toggle("low",t.stamina<25);const n=e.querySelector("i");n&&(n.style.width=`${t.stamina}%`);const s=this.q("#bat i");s&&(s.style.width=`${t.battery}%`),this.q("#bat").classList.toggle("low",t.battery<25);const r=this.q("#bat-label");r&&(r.textContent=t.batteryText?`Batteri ${t.batteryText}`:"Batteri"),this.q("#lock-hint").classList.toggle("hidden",!t.lockHint)}hurt(t){this.q("#hurt").style.opacity=String(Math.max(0,Math.min(1,t)))}setIntro(t,e){this.q("#intro").classList.remove("hidden"),this.q("#intro-title").textContent=t,this.q("#intro-body").textContent=e}hideIntro(){this.q("#intro").classList.add("hidden"),this.cinematic(!1)}cinematic(t){this.q("#hud").classList.toggle("hidden",t)}subtitle(t){this.q("#subtitle").textContent=t}toast(t){this.q("#toast").textContent=t}audioDebug(t,e){const n=this.q("#audio-debug");n.classList.toggle("hidden",!e),n.textContent=t}perf(t,e){const n=this.q("#perf");n.classList.toggle("hidden",!e),n.textContent=t}fillSettings(t){this.q("#set-quality").value=t.quality,this.q("#set-fps").value=String(t.fpsCap),this.setRange("#set-res",t.resolutionScale),this.setRange("#set-sens",t.mouseSensitivity),this.setRange("#set-master",t.masterVolume),this.setRange("#set-music",t.musicVolume),this.setRange("#set-sfx",t.sfxVolume),this.setRange("#set-bright",t.brightness),this.q("#set-blur").checked=t.motionBlur,this.q("#set-shake").checked=t.cameraShake,this.q("#set-subs").checked=t.subtitles,this.q("#set-flicker").checked=t.reduceFlicker,this.q("#set-invert").checked=t.invertY,this.q("#set-full").checked=t.fullscreen}slots(t,e){this.q("#slots h2").textContent=e;const n=this.q("#slot-list");n.innerHTML="";const s=["Checkpoint","Plads 1","Plads 2","Plads 3"];t.forEach((r,o)=>{const a=document.createElement("button");a.className="slot";const l=r?new Date(r.savedAt).toLocaleString("da-DK"):"Tom",c=r?`${Math.floor(r.snapshot.playTime/60)} min`:"";a.textContent=`${s[o]} — ${l} ${c}`,a.addEventListener("click",()=>this.hooks.pickSlot(o)),n.appendChild(a)})}keysLine(t){const e=this.root.querySelector("#inv-keys");e&&(e.textContent=t)}inventory(t,e){const n=this.q("#inv-list");if(n.innerHTML="",!t.length){const r=document.createElement("div");r.className="note",r.textContent="Du har kun lygten.",n.appendChild(r)}t.forEach((r,o)=>{const a=document.createElement("button");a.className="inv-item"+(o===e?" on":""),o===e&&a.setAttribute("aria-current","true"),a.textContent=r.count>1?`${r.name} ×${r.count}`:r.name,a.addEventListener("click",()=>this.hooks.selectItem(o)),n.appendChild(a)});const s=t[e];this.q("#inv-desc").textContent=s?s.desc:"Vælg en genstand."}examine(t,e){this.q("#ex-title").textContent=t?.name??"",this.q("#ex-body").textContent=t?.text||t?.description||"",this.q("#ex-map").innerHTML=e}keypad(t,e){this.q("#key-code").textContent=t.padEnd(4,"·"),this.q("#key-hint").textContent=e}ending(t,e){const n=ry(t);this.q("#end-kicker").textContent=n.kicker,this.q("#end-title").textContent=n.title,this.q("#end-body").textContent=n.paragraphs.join(`

`),this.q("#btn-end-retry").classList.toggle("hidden",!e),this.q("#btn-end-new").classList.toggle("hidden",!e)}setRange(t,e){const n=this.q(t);n.value=String(e)}q(t){const e=this.root.querySelector(t);if(!e)throw new Error(`Mangler ${t}`);return e}}function Gy(i){return i.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]??t)}const Hy=`
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
`,rl=document.getElementById("app");if(!rl)throw new Error("Mangler #app");let Qt;const Vy={newGame:()=>Qt?.handle("new"),continue:()=>Qt?.handle("continue"),openLoad:()=>Qt?.handle("openLoad"),openSave:()=>Qt?.handle("openSave"),pickSlot:i=>Qt?.handle("slot",i),closeSlots:()=>Qt?.handle("closeSlots"),settings:()=>Qt?.handle("settings"),closeSettings:()=>Qt?.handle("closeSettings"),resume:()=>Qt?.handle("resume"),restart:()=>Qt?.handle("restart"),menu:()=>Qt?.handle("menu"),exit:()=>Qt?.handle("exit"),exitBack:()=>Qt?.handle("exitBack"),credits:()=>Qt?.handle("credits"),creditsBack:()=>Qt?.handle("creditsBack"),closeInventory:()=>Qt?.handle("closeInv"),openInventory:()=>Qt?.handle("inventory"),selectItem:i=>Qt?.handle("select",i),useItem:()=>Qt?.handle("use"),dropItem:()=>Qt?.handle("drop"),closeExamine:()=>Qt?.handle("closeEx"),digit:i=>Qt?.handle("digit",i),keypadOk:()=>Qt?.handle("keyOk"),keypadClear:()=>Qt?.handle("keyClear"),closeKeypad:()=>Qt?.handle("keyClose"),patchSettings:i=>Qt?.applyPatch(i),endingMenu:()=>Qt?.handle("endMenu"),endingRetry:()=>Qt?.handle("endRetry"),endingNew:()=>Qt?.handle("endNew")},Lo=new By(rl,Vy),sh=rl.querySelector("#view");try{if(!sh)throw new Error("Mangler lærred");r_().catch(i=>(console.warn("CC0-overflader kunne ikke indlæses. Proceduralt fallback bruges.",i),null)).then(i=>{try{Qt=new Fy(sh,Lo,void 0,i),Qt.start()}catch(t){const e=t instanceof Error?t.message:"Ukendt fejl";Lo.fatal(`Spillet kunne ikke starte. ${e}`),console.error(t)}})}catch(i){const t=i instanceof Error?i.message:"Ukendt fejl";Lo.fatal(`Spillet kunne ikke starte. ${t}`),console.error(i)}
