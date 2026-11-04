(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="170",Rc=0,_o=1,Cc=2,Nl=1,Fl=2,vn=3,bn=0,Ne=1,Ue=2,Ie=0,Qn=1,es=2,vo=3,xo=4,Ol=5,xn=100,Pc=101,Lc=102,Dc=103,Ic=104,jr=200,Uc=201,Nc=202,Fc=203,Jr=204,Qr=205,Bl=206,Oc=207,zl=208,Bc=209,zc=210,kc=211,Vc=212,Gc=213,Hc=214,ta=0,ea=1,na=2,Ai=3,ia=4,sa=5,ra=6,aa=7,kl=0,Wc=1,Xc=2,Fn=0,Vl=1,Gl=2,Hl=3,ka=4,qc=5,Wl=6,Xl=7,ql=300,Ri=301,Ci=302,oa=303,la=304,cr=306,ns=1e3,Zn=1001,ca=1002,Fe=1003,Yc=1004,ds=1005,on=1006,pr=1007,$n=1008,En=1009,Yl=1010,Kl=1011,is=1012,Va=1013,ti=1014,ln=1015,On=1016,Ga=1017,Ha=1018,ei=1020,Zl=35902,$l=1021,jl=1022,tn=1023,Jl=1024,Ql=1025,bi=1026,ni=1027,Wa=1028,Xa=1029,tc=1030,qa=1031,Ya=1033,Ys=33776,Ks=33777,Zs=33778,$s=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,_a=37808,va=37809,xa=37810,Ma=37811,Sa=37812,ya=37813,Ta=37814,ba=37815,Ea=37816,wa=37817,Aa=37818,Ra=37819,Ca=37820,Pa=37821,js=36492,La=36494,Da=36495,ec=36283,Ia=36284,Ua=36285,Na=36286,Kc=3200,Zc=3201,Ka=0,$c=1,Nn="",De="srgb",Di="srgb-linear",hr="linear",te="srgb",si=7680,Mo=519,jc=512,Jc=513,Qc=514,nc=515,th=516,eh=517,nh=518,ih=519,Fa=35044,So="300 es",Sn=2e3,nr=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yo=1234567;const Qi=Math.PI/180,ss=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function Za(s,t){return(s%t+t)%t}function sh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function rh(s,t,e){return s!==t?(e-s)/(t-s):0}function ts(s,t,e){return(1-e)*s+e*t}function ah(s,t,e,n){return ts(s,t,1-Math.exp(-e*n))}function oh(s,t=1){return t-Math.abs(Za(s,t*2)-t)}function lh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ch(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function hh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function uh(s,t){return s+Math.random()*(t-s)}function dh(s){return s*(.5-Math.random())}function fh(s){s!==void 0&&(yo=s);let t=yo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ph(s){return s*Qi}function mh(s){return s*ss}function gh(s){return(s&s-1)===0&&s!==0}function _h(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xh(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mh={DEG2RAD:Qi,RAD2DEG:ss,generateUUID:yn,clamp:Se,euclideanModulo:Za,mapLinear:sh,inverseLerp:rh,lerp:ts,damp:ah,pingpong:oh,smoothstep:lh,smootherstep:ch,randInt:hh,randFloat:uh,randFloatSpread:dh,seededRandom:fh,degToRad:ph,radToDeg:mh,isPowerOfTwo:gh,ceilPowerOfTwo:_h,floorPowerOfTwo:vh,setQuaternionFromProperEuler:xh,normalize:ee,denormalize:Qe};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],S=i[4],x=i[7],L=i[2],A=i[5],E=i[8];return r[0]=a*_+o*v+l*L,r[3]=a*m+o*S+l*A,r[6]=a*f+o*x+l*E,r[1]=c*_+h*v+d*L,r[4]=c*m+h*S+d*A,r[7]=c*f+h*x+d*E,r[2]=u*_+p*v+g*L,r[5]=u*m+p*S+g*A,r[8]=u*f+p*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(mr.makeScale(t,e)),this}rotate(t){return this.premultiply(mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new Ot;function ic(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sh(){const s=ir("canvas");return s.style.display="block",s}const To={};function ji(s){s in To||(To[s]=!0,console.warn(s))}function yh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Th(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?hr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ei(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const bo=[.64,.33,.3,.6,.15,.06],Eo=[.2126,.7152,.0722],wo=[.3127,.329],Ao=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ro=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Di]:{primaries:bo,whitePoint:wo,transfer:hr,toXYZ:Ao,fromXYZ:Ro,luminanceCoefficients:Eo,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:bo,whitePoint:wo,transfer:te,toXYZ:Ao,fromXYZ:Ro,luminanceCoefficients:Eo,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let ri;class Eh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=ir("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wh=0;class sc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(gr(i[a].image)):r.push(gr(i[a]))}else r=gr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function gr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ah=0;class Ce extends Ii{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=Zn,i=Zn,r=on,a=$n,o=tn,l=En,c=Ce.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=yn(),this.name="",this.source=new sc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=ql;Ce.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(p+1)/2,L=(f+1)/2,A=(h+u)/4,E=(d+_)/4,C=(g+m)/4;return S>x&&S>L?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=E/n):x>L?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=C/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=E/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rc extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ch extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*_,v=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const L=Math.sqrt(S),A=Math.atan2(L,f*v);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const x=o*v;if(l=l*m+u*x,c=c*m+p*x,h=h*m+g*x,d=d*m+_*x,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Co.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Co.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new P,Co=new os;class ls{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(r,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),ps.subVectors(this.max,Bi),ai.subVectors(t.a,Bi),oi.subVectors(t.b,Bi),li.subVectors(t.c,Bi),Cn.subVectors(oi,ai),Pn.subVectors(li,oi),zn.subVectors(ai,li);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-zn.z,zn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,zn.z,0,-zn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-zn.y,zn.x,0];return!vr(e,ai,oi,li,ps)||(e=[1,0,0,0,1,0,0,0,1],!vr(e,ai,oi,li,ps))?!1:(ms.crossVectors(Cn,Pn),e=[ms.x,ms.y,ms.z],vr(e,ai,oi,li,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new P,new P,new P,new P,new P,new P,new P,new P],Ze=new P,fs=new ls,ai=new P,oi=new P,li=new P,Cn=new P,Pn=new P,zn=new P,Bi=new P,ps=new P,ms=new P,kn=new P;function vr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){kn.fromArray(s,r);const o=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ph=new ls,zi=new P,xr=new P;class cs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ph.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);const e=zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(xr)),this.expandByPoint(zi.copy(t.center).sub(xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new P,Mr=new P,gs=new P,Ln=new P,Sr=new P,_s=new P,yr=new P;class $a{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Mr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Mr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(gs),o=Ln.dot(this.direction),l=-Ln.dot(gs),c=Ln.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Mr).addScaledVector(gs,u),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,i,r){Sr.subVectors(e,t),_s.subVectors(n,t),yr.crossVectors(Sr,_s);let a=this.direction.dot(yr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,t);const l=o*this.direction.dot(_s.crossVectors(Ln,_s));if(l<0)return null;const c=o*this.direction.dot(Sr.cross(Ln));if(c<0||l+c>a)return null;const h=-o*Ln.dot(yr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,r,a,o,l,c,h,d,u,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,p,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lh,t,Dh)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Dn.crossVectors(n,ke),Dn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Dn.crossVectors(n,ke)),Dn.normalize(),vs.crossVectors(ke,Dn),i[0]=Dn.x,i[4]=vs.x,i[8]=ke.x,i[1]=Dn.y,i[5]=vs.y,i[9]=ke.y,i[2]=Dn.z,i[6]=vs.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],S=n[7],x=n[11],L=n[15],A=i[0],E=i[4],C=i[8],y=i[12],M=i[1],R=i[5],I=i[9],O=i[13],H=i[2],X=i[6],W=i[10],$=i[14],V=i[3],tt=i[7],at=i[11],mt=i[15];return r[0]=a*A+o*M+l*H+c*V,r[4]=a*E+o*R+l*X+c*tt,r[8]=a*C+o*I+l*W+c*at,r[12]=a*y+o*O+l*$+c*mt,r[1]=h*A+d*M+u*H+p*V,r[5]=h*E+d*R+u*X+p*tt,r[9]=h*C+d*I+u*W+p*at,r[13]=h*y+d*O+u*$+p*mt,r[2]=g*A+_*M+m*H+f*V,r[6]=g*E+_*R+m*X+f*tt,r[10]=g*C+_*I+m*W+f*at,r[14]=g*y+_*O+m*$+f*mt,r[3]=v*A+S*M+x*H+L*V,r[7]=v*E+S*R+x*X+L*tt,r[11]=v*C+S*I+x*W+L*at,r[15]=v*y+S*O+x*$+L*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*p-n*l*p)+_*(+e*l*p-e*c*u+r*a*u-i*a*p+i*c*h-r*l*h)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=d*m*c-_*u*c+_*l*p-o*m*p-d*l*f+o*u*f,S=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,x=h*_*c-g*d*c+g*o*p-a*_*p-h*o*f+a*d*f,L=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,A=e*v+n*S+i*x+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=v*E,t[1]=(_*u*r-d*m*r-_*i*p+n*m*p+d*i*f-n*u*f)*E,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*f+n*l*f)*E,t[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*p-n*l*p)*E,t[4]=S*E,t[5]=(h*m*r-g*u*r+g*i*p-e*m*p-h*i*f+e*u*f)*E,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*f-e*l*f)*E,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*p+e*l*p)*E,t[8]=x*E,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*E,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*E,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*p-e*o*p)*E,t[12]=L*E,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*E,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*E,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,v=l*c,S=l*h,x=l*d,L=n.x,A=n.y,E=n.z;return i[0]=(1-(_+f))*L,i[1]=(p+x)*L,i[2]=(g-S)*L,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(u+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+S)*E,i[9]=(m-v)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ci.set(i[0],i[1],i[2]).length();const a=ci.set(i[4],i[5],i[6]).length(),o=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);const c=1/r,h=1/a,d=1/o;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=d,$e.elements[9]*=d,$e.elements[10]*=d,e.setFromRotationMatrix($e),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Sn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(o===Sn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===nr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Sn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*c,p=(n+i)*h;let g,_;if(o===Sn)g=(a+r)*d,_=-2*d;else if(o===nr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new P,$e=new ie,Lh=new P(0,0,0),Dh=new P(1,1,1),Dn=new P,vs=new P,ke=new P,Po=new ie,Lo=new os;class hn{constructor(t=0,e=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Po.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Po,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ih=0;const Do=new P,hi=new os,mn=new ie,xs=new P,ki=new P,Uh=new P,Nh=new os,Io=new P(1,0,0),Uo=new P(0,1,0),No=new P(0,0,1),Fo={type:"added"},Fh={type:"removed"},ui={type:"childadded",child:null},Tr={type:"childremoved",child:null};class pe extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new P,e=new hn,n=new os,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ot}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Io,t)}rotateY(t){return this.rotateOnAxis(Uo,t)}rotateZ(t){return this.rotateOnAxis(No,t)}translateOnAxis(t,e){return Do.copy(t).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Io,t)}translateY(t){return this.translateOnAxis(Uo,t)}translateZ(t){return this.translateOnAxis(No,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ki,xs,this.up):mn.lookAt(xs,ki,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(mn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fo),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fh),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fo),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new P(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new P,gn=new P,br=new P,_n=new P,di=new P,fi=new P,Oo=new P,Er=new P,wr=new P,Ar=new P,Rr=new ue,Cr=new ue,Pr=new ue;class qe{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),gn.subVectors(n,e),br.subVectors(t,e);const a=je.dot(je),o=je.dot(gn),l=je.dot(br),c=gn.dot(gn),h=gn.dot(br),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Rr.setScalar(0),Cr.setScalar(0),Pr.setScalar(0),Rr.fromBufferAttribute(t,e),Cr.fromBufferAttribute(t,n),Pr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Rr,r.x),a.addScaledVector(Cr,r.y),a.addScaledVector(Pr,r.z),a}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),gn.subVectors(t,e),je.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;di.subVectors(i,n),fi.subVectors(r,n),Er.subVectors(t,n);const l=di.dot(Er),c=fi.dot(Er);if(l<=0&&c<=0)return e.copy(n);wr.subVectors(t,i);const h=di.dot(wr),d=fi.dot(wr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(di,a);Ar.subVectors(t,r);const p=di.dot(Ar),g=fi.dot(Ar);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(fi,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Oo.subVectors(r,i),o=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Oo,o);const f=1/(m+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Lr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Za(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lr(a,r,t+1/3),this.g=Lr(a,r,t),this.b=Lr(a,r,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Se(Ae.r*255,0,255))*65536+Math.round(Se(Ae.g*255,0,255))*256+Math.round(Se(Ae.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,r=Ae.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=De){qt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Ms);const n=ts(In.h,Ms.h,e),i=ts(In.s,Ms.s,e),r=ts(In.l,Ms.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new _t;_t.NAMES=oc;let Oh=0;class wn extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=yn(),this.name="",this.blending=Qn,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Be extends wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new P,Ss=new Lt;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class lc extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cc extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bh=0;const We=new ie,Dr=new pe,pi=new P,Ve=new ls,Vi=new ls,_e=new P;class oe extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ic(t)?cc:lc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Dr.lookAt(t),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Ve.min,Vi.min),Ve.expandByPoint(_e),_e.addVectors(Ve.max,Vi.max),Ve.expandByPoint(_e)):(Ve.expandByPoint(Vi.min),Ve.expandByPoint(Vi.max))}Ve.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(t,c),_e.add(pi)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new P,l[C]=new P;const c=new P,h=new P,d=new P,u=new Lt,p=new Lt,g=new Lt,_=new P,m=new P;function f(C,y,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[C].add(_),o[y].add(_),o[M].add(_),l[C].add(m),l[y].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,y=v.length;C<y;++C){const M=v[C],R=M.start,I=M.count;for(let O=R,H=R+I;O<H;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new P,x=new P,L=new P,A=new P;function E(C){L.fromBufferAttribute(i,C),A.copy(L);const y=o[C];S.copy(y),S.sub(L.multiplyScalar(L.dot(y))).normalize(),x.crossVectors(A,y);const R=x.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,R)}for(let C=0,y=v.length;C<y;++C){const M=v[C],R=M.start,I=M.count;for(let O=R,H=R+I;O<H;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Te(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bo=new ie,Vn=new $a,ys=new cs,zo=new P,Ts=new P,bs=new P,Es=new P,Ir=new P,ws=new P,ko=new P,As=new P;class At extends pe{constructor(t=new oe,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ir.fromBufferAttribute(d,t),a?ws.addScaledVector(Ir,h):ws.addScaledVector(Ir.sub(e),h))}e.add(ws)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(ys.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ys,zo)===null||Vn.origin.distanceToSquared(zo)>(t.far-t.near)**2))&&(Bo.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(Bo),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,L=S;x<L;x+=3){const A=o.getX(x),E=o.getX(x+1),C=o.getX(x+2);i=Rs(this,f,t,n,c,h,d,A,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);i=Rs(this,a,t,n,c,h,d,v,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,L=S;x<L;x+=3){const A=x,E=x+1,C=x+2;i=Rs(this,f,t,n,c,h,d,A,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,S=m+1,x=m+2;i=Rs(this,a,t,n,c,h,d,v,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function zh(s,t,e,n,i,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===bn,o),l===null)return null;As.copy(o),As.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(As);return c<e.near||c>e.far?null:{distance:c,point:As.clone(),object:s}}function Rs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ts),s.getVertexPosition(l,bs),s.getVertexPosition(c,Es);const h=zh(s,t,e,n,Ts,bs,Es,ko);if(h){const d=new P;qe.getBarycoord(ko,Ts,bs,Es,d),i&&(h.uv=qe.getInterpolatedAttribute(i,o,l,c,d,new Lt)),r&&(h.uv1=qe.getInterpolatedAttribute(r,o,l,c,d,new Lt)),a&&(h.normal=qe.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};qe.getNormal(Ts,bs,Es,u.normal),h.face=u,h.barycoord=d}return h}class Ge extends oe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(d,2));function g(_,m,f,v,S,x,L,A,E,C,y){const M=x/E,R=L/C,I=x/2,O=L/2,H=A/2,X=E+1,W=C+1;let $=0,V=0;const tt=new P;for(let at=0;at<W;at++){const mt=at*R-O;for(let Ct=0;Ct<X;Ct++){const Xt=Ct*M-I;tt[_]=Xt*v,tt[m]=mt*S,tt[f]=H,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[f]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Ct/E),d.push(1-at/C),$+=1}}for(let at=0;at<C;at++)for(let mt=0;mt<E;mt++){const Ct=u+mt+X*at,Xt=u+mt+X*(at+1),q=u+(mt+1)+X*(at+1),et=u+(mt+1)+X*at;l.push(Ct,Xt,et),l.push(Xt,q,et),V+=6}o.addGroup(p,V,y),p+=V,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Le(s){const t={};for(let e=0;e<s.length;e++){const n=Pi(s[e]);for(const i in n)t[i]=n[i]}return t}function kh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function hc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const jn={clone:Pi,merge:Le};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ve extends wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uc extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new P,Vo=new Lt,Go=new Lt;class Xe extends uc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Vo,Go),e.subVectors(Go,Vo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class Hh extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(mi,gi,t,e);i.layers=this.layers,this.add(i);const r=new Xe(mi,gi,t,e);r.layers=this.layers,this.add(r);const a=new Xe(mi,gi,t,e);a.layers=this.layers,this.add(a);const o=new Xe(mi,gi,t,e);o.layers=this.layers,this.add(o);const l=new Xe(mi,gi,t,e);l.layers=this.layers,this.add(l);const c=new Xe(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dc extends Ce{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wh extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new dc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ge(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Ie});r.uniforms.tEquirect.value=e;const a=new At(i,r),o=e.minFilter;return e.minFilter===$n&&(e.minFilter=on),new Hh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Ur=new P,Xh=new P,qh=new Ot;class qn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ur.subVectors(n,e).cross(Xh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qh.getNormalMatrix(t),i=this.coplanarPoint(Ur).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new cs,Cs=new P;class ja{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,a=new qn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],v=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-r,u-c,m-p,x-f).normalize(),n[1].setComponents(l+r,u+c,m+p,x+f).normalize(),n[2].setComponents(l+a,u+h,m+g,x+v).normalize(),n[3].setComponents(l-a,u-h,m-g,x-v).normalize(),n[4].setComponents(l-o,u-d,m-_,x-S).normalize(),e===Sn)n[5].setComponents(l+o,u+d,m+_,x+S).normalize();else if(e===nr)n[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cs.x=i.normal.x>0?t.max.x:t.min.x,Cs.y=i.normal.y>0?t.max.y:t.min.y,Cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Yh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class nn extends oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*u-a;for(let S=0;S<c;S++){const x=S*d-r;g.push(x,-v,0),_.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const S=v+c*f,x=v+c*(f+1),L=v+1+c*(f+1),A=v+1+c*f;p.push(S,x,A),p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zh=`#ifdef USE_ALPHAHASH
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
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tu=`#ifdef USE_AOMAP
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
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nu=`#ifdef USE_BATCHING
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
#endif`,iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,au=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ou=`#ifdef USE_IRIDESCENCE
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
#endif`,lu=`#ifdef USE_BUMPMAP
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_u=`#define PI 3.141592653589793
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xu=`vec3 transformedNormal = objectNormal;
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
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nu=`#ifdef USE_GRADIENTMAP
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
}`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
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
#endif`,ku=`#ifdef USE_ENVMAP
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
#endif`,Vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
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
#endif`,qu=`struct PhysicalMaterial {
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
}`,Yu=`
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
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,id=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
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
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dd=`float getShadowMask() {
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
}`,Id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kd=`uniform sampler2D t2D;
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
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
}`,tf=`#if DEPTH_PACKING == 3200
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
}`,ef=`#define DISTANCE
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
}`,nf=`#define DISTANCE
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
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`uniform float scale;
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
}`,of=`uniform vec3 diffuse;
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
}`,lf=`#include <common>
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
}`,cf=`uniform vec3 diffuse;
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
}`,hf=`#define LAMBERT
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
}`,uf=`#define LAMBERT
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
}`,df=`#define MATCAP
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
}`,ff=`#define MATCAP
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
}`,pf=`#define NORMAL
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
}`,mf=`#define NORMAL
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
}`,gf=`#define PHONG
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
}`,_f=`#define PHONG
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
}`,vf=`#define STANDARD
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
}`,xf=`#define STANDARD
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
}`,Mf=`#define TOON
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
}`,Sf=`#define TOON
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
}`,yf=`uniform float size;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,bf=`#include <common>
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
}`,Ef=`uniform vec3 color;
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
}`,wf=`uniform float rotation;
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
}`,Af=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Kh,alphahash_pars_fragment:Zh,alphamap_fragment:$h,alphamap_pars_fragment:jh,alphatest_fragment:Jh,alphatest_pars_fragment:Qh,aomap_fragment:tu,aomap_pars_fragment:eu,batching_pars_vertex:nu,batching_vertex:iu,begin_vertex:su,beginnormal_vertex:ru,bsdfs:au,iridescence_fragment:ou,bumpmap_pars_fragment:lu,clipping_planes_fragment:cu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:du,color_fragment:fu,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:gu,common:_u,cube_uv_reflection_fragment:vu,defaultnormal_vertex:xu,displacementmap_pars_vertex:Mu,displacementmap_vertex:Su,emissivemap_fragment:yu,emissivemap_pars_fragment:Tu,colorspace_fragment:bu,colorspace_pars_fragment:Eu,envmap_fragment:wu,envmap_common_pars_fragment:Au,envmap_pars_fragment:Ru,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:ku,envmap_vertex:Pu,fog_vertex:Lu,fog_pars_vertex:Du,fog_fragment:Iu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Nu,lightmap_pars_fragment:Fu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:Bu,lights_pars_begin:zu,lights_toon_fragment:Vu,lights_toon_pars_fragment:Gu,lights_phong_fragment:Hu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:qu,lights_fragment_begin:Yu,lights_fragment_maps:Ku,lights_fragment_end:Zu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:Qu,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphinstance_vertex:ad,morphcolor_vertex:od,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:hd,normal_fragment_begin:ud,normal_fragment_maps:dd,normal_pars_fragment:fd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:xd,iridescence_pars_fragment:Md,opaque_fragment:Sd,packing:yd,premultiplied_alpha_fragment:Td,project_vertex:bd,dithering_fragment:Ed,dithering_pars_fragment:wd,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Dd,skinbase_vertex:Id,skinning_pars_vertex:Ud,skinning_vertex:Nd,skinnormal_vertex:Fd,specularmap_fragment:Od,specularmap_pars_fragment:Bd,tonemapping_fragment:zd,tonemapping_pars_fragment:kd,transmission_fragment:Vd,transmission_pars_fragment:Gd,uv_pars_fragment:Hd,uv_pars_vertex:Wd,uv_vertex:Xd,worldpos_vertex:qd,background_vert:Yd,background_frag:Kd,backgroundCube_vert:Zd,backgroundCube_frag:$d,cube_vert:jd,cube_frag:Jd,depth_vert:Qd,depth_frag:tf,distanceRGBA_vert:ef,distanceRGBA_frag:nf,equirect_vert:sf,equirect_frag:rf,linedashed_vert:af,linedashed_frag:of,meshbasic_vert:lf,meshbasic_frag:cf,meshlambert_vert:hf,meshlambert_frag:uf,meshmatcap_vert:df,meshmatcap_frag:ff,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:gf,meshphong_frag:_f,meshphysical_vert:vf,meshphysical_frag:xf,meshtoon_vert:Mf,meshtoon_frag:Sf,points_vert:yf,points_frag:Tf,shadow_vert:bf,shadow_frag:Ef,sprite_vert:wf,sprite_frag:Af},ot={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},an={basic:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new _t(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Le([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Le([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new _t(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Le([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Le([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Le([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Le([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Le([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Le([ot.lights,ot.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};an.physical={uniforms:Le([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ps={r:0,b:0,g:0},Hn=new hn,Rf=new ie;function Cf(s,t,e,n,i,r,a){const o=new _t(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?e:t).get(S)),S}function _(v){let S=!1;const x=g(v);x===null?f(o,l):x&&x.isColor&&(f(x,1),S=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===cr)?(h===void 0&&(h=new At(new Ge(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:Pi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hn.copy(S.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rf.makeRotationFromEuler(Hn)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==te,(d!==x||u!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new At(new nn(2,2),new ve({name:"BackgroundMaterial",uniforms:Pi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,p=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,S){v.getRGB(Ps,hc(s)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:_,addToRenderList:m}}function Pf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(M,R,I,O,H){let X=!1;const W=d(O,I,R);r!==W&&(r=W,c(r.object)),X=p(M,O,I,H),X&&g(M,O,I,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(M,R,I,O),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,R,I){const O=I.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let X=H[R.id];X===void 0&&(X={},H[R.id]=X);let W=X[O];return W===void 0&&(W=u(l()),X[O]=W),W}function u(M){const R=[],I=[],O=[];for(let H=0;H<e;H++)R[H]=0,I[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,R,I,O){const H=r.attributes,X=R.attributes;let W=0;const $=I.getAttributes();for(const V in $)if($[V].location>=0){const at=H[V];let mt=X[V];if(mt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(M,R,I,O){const H={},X=R.attributes;let W=0;const $=I.getAttributes();for(const V in $)if($[V].location>=0){let at=X[V];at===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),H[V]=mt,W++}r.attributes=H,r.attributesNum=W,r.index=O}function _(){const M=r.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function m(M){f(M,0)}function f(M,R){const I=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;I[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),H[M]!==R&&(s.vertexAttribDivisor(M,R),H[M]=R)}function v(){const M=r.newAttributes,R=r.enabledAttributes;for(let I=0,O=R.length;I<O;I++)R[I]!==M[I]&&(s.disableVertexAttribArray(I),R[I]=0)}function S(M,R,I,O,H,X,W){W===!0?s.vertexAttribIPointer(M,R,I,H,X):s.vertexAttribPointer(M,R,I,O,H,X)}function x(M,R,I,O){_();const H=O.attributes,X=I.getAttributes(),W=R.defaultAttributeValues;for(const $ in X){const V=X[$];if(V.location>=0){let tt=H[$];if(tt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const at=tt.normalized,mt=tt.itemSize,Ct=t.get(tt);if(Ct===void 0)continue;const Xt=Ct.buffer,q=Ct.type,et=Ct.bytesPerElement,it=q===s.INT||q===s.UNSIGNED_INT||tt.gpuType===Va;if(tt.isInterleavedBufferAttribute){const j=tt.data,dt=j.stride,gt=tt.offset;if(j.isInstancedInterleavedBuffer){for(let Tt=0;Tt<V.locationSize;Tt++)f(V.location+Tt,j.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Tt=0;Tt<V.locationSize;Tt++)m(V.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let Tt=0;Tt<V.locationSize;Tt++)S(V.location+Tt,mt/V.locationSize,q,at,dt*et,(gt+mt/V.locationSize*Tt)*et,it)}else{if(tt.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)f(V.location+j,tt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let j=0;j<V.locationSize;j++)S(V.location+j,mt/V.locationSize,q,at,mt*et,mt/V.locationSize*j*et,it)}}else if(W!==void 0){const at=W[$];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(V.location,at);break;case 3:s.vertexAttrib3fv(V.location,at);break;case 4:s.vertexAttrib4fv(V.location,at);break;default:s.vertexAttrib1fv(V.location,at)}}}}v()}function L(){C();for(const M in n){const R=n[M];for(const I in R){const O=R[I];for(const H in O)h(O[H].object),delete O[H];delete R[I]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const I in R){const O=R[I];for(const H in O)h(O[H].object),delete O[H];delete R[I]}delete n[M.id]}function E(M){for(const R in n){const I=n[R];if(I[M.id]===void 0)continue;const O=I[M.id];for(const H in O)h(O[H].object),delete O[H];delete I[M.id]}}function C(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Lf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Df(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==tn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==En&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ln&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function If(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new qn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,S=v*4;let x=f.clippingState||null;l.value=x,x=h(g,u,S,p);for(let L=0;L!==S;++L)x[L]=e[L];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==_;++S,x+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Uf(s){let t=new WeakMap;function e(a,o){return o===oa?a.mapping=Ri:o===la&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===oa||o===la)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ja extends uc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,Ho=[.125,.215,.35,.446,.526,.582],Kn=20,Nr=new Ja,Wo=new _t;let Fr=null,Or=0,Br=0,zr=!1;const Yn=(1+Math.sqrt(5))/2,_i=1/Yn,Xo=[new P(-Yn,_i,0),new P(Yn,_i,0),new P(-_i,0,Yn),new P(_i,0,Yn),new P(0,Yn,-_i),new P(0,Yn,_i),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fr,Or,Br),this._renderer.xr.enabled=zr,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:On,format:tn,colorSpace:Di,depthBuffer:!1},i=Yo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(r)),this._blurMaterial=Ff(r,t,e)}return i}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Nr)}_sceneToCubeUV(t,e,n,i){const o=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Wo),h.toneMapping=Fn,h.autoClear=!1;const p=new Be({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new At(new Ge,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Wo),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;Ls(i,v*S,f>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ri||t.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xo[(i-r-1)%Xo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new At(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const f=[];let v=0;for(let E=0;E<Kn;++E){const C=E/_,y=Math.exp(-C*C/2);f.push(y),E===0?v+=y:E<m&&(v+=2*y)}for(let E=0;E<f.length;E++)f[E]=f[E]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const x=this._sizeLods[i],L=3*x*(i>S-Ti?i-S+Ti:0),A=4*(this._cubeSize-x);Ls(e,L,A,3*x,2*x),l.setRenderTarget(e),l.render(d,Nr)}}function Nf(s){const t=[],e=[],n=[];let i=s;const r=s-Ti+1+Ho.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ti?l=Ho[a-s+Ti-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),S=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,C=A>2?0:-1,y=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(y,_*g*A),S.set(u,m*g*A);const M=[A,A,A,A,A,A];x.set(M,f*g*A)}const L=new oe;L.setAttribute("position",new Te(v,_)),L.setAttribute("uv",new Te(S,m)),L.setAttribute("faceIndex",new Te(x,f)),t.push(L),i>Ti&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yo(s,t,e){const n=new cn(s,t,e);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ff(s,t,e){const n=new Float32Array(Kn),i=new P(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function Ko(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function Zo(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function Of(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===oa||l===la,h=l===Ri||l===Ci;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new qo(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new qo(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zf(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let S=0,x=v.length;S<x;S+=3){const L=v[S+0],A=v[S+1],E=v[S+2];u.push(L,A,A,E,E,L)}}else if(g!==void 0){const v=g.array;_=g.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const L=S+0,A=S+1,E=S+2;u.push(L,A,A,E,E,L)}}else return;const m=new(ic(u)?cc:lc)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function kf(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*a),e.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Vf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gf(s,t,e){const n=new WeakMap,i=new ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=o.attributes.position.count*x,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const E=new Float32Array(L*A*4*d),C=new rc(E,L,A,d);C.type=ln,C.needsUpdate=!0;const y=x*4;for(let R=0;R<d;R++){const I=f[R],O=v[R],H=S[R],X=L*A*4*R;for(let W=0;W<I.count;W++){const $=W*y;g===!0&&(i.fromBufferAttribute(I,W),E[X+$+0]=i.x,E[X+$+1]=i.y,E[X+$+2]=i.z,E[X+$+3]=0),_===!0&&(i.fromBufferAttribute(O,W),E[X+$+4]=i.x,E[X+$+5]=i.y,E[X+$+6]=i.z,E[X+$+7]=0),m===!0&&(i.fromBufferAttribute(H,W),E[X+$+8]=i.x,E[X+$+9]=i.y,E[X+$+10]=i.z,E[X+$+11]=H.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Lt(L,A)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Hf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class to extends Ce{constructor(t,e,n,i,r,a,o,l,c,h=bi){if(h!==bi&&h!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=ti),n===void 0&&h===ni&&(n=ei),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pc=new Ce,$o=new to(1,1),mc=new rc,gc=new Ch,_c=new dc,jo=[],Jo=[],Qo=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function Ui(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=jo[i];if(r===void 0&&(r=new Float32Array(i),jo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ur(s,t){let e=Jo[t];e===void 0&&(e=new Int32Array(t),Jo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Wf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function Yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function Kf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;el.set(n),s.uniformMatrix2fv(this.addr,!1,el),ge(e,n)}}function Zf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;tl.set(n),s.uniformMatrix3fv(this.addr,!1,tl),ge(e,n)}}function $f(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Qo.set(n),s.uniformMatrix4fv(this.addr,!1,Qo),ge(e,n)}}function jf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function Qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function ep(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function rp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($o.compareFunction=nc,r=$o):r=pc,e.setTexture2D(t||r,i)}function ap(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gc,i)}function op(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_c,i)}function lp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mc,i)}function cp(s){switch(s){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return Kf;case 35675:return Zf;case 35676:return $f;case 5124:case 35670:return jf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}function hp(s,t){s.uniform1fv(this.addr,t)}function up(s,t){const e=Ui(t,this.size,2);s.uniform2fv(this.addr,e)}function dp(s,t){const e=Ui(t,this.size,3);s.uniform3fv(this.addr,e)}function fp(s,t){const e=Ui(t,this.size,4);s.uniform4fv(this.addr,e)}function pp(s,t){const e=Ui(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function mp(s,t){const e=Ui(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gp(s,t){const e=Ui(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _p(s,t){s.uniform1iv(this.addr,t)}function vp(s,t){s.uniform2iv(this.addr,t)}function xp(s,t){s.uniform3iv(this.addr,t)}function Mp(s,t){s.uniform4iv(this.addr,t)}function Sp(s,t){s.uniform1uiv(this.addr,t)}function yp(s,t){s.uniform2uiv(this.addr,t)}function Tp(s,t){s.uniform3uiv(this.addr,t)}function bp(s,t){s.uniform4uiv(this.addr,t)}function Ep(s,t,e){const n=this.cache,i=t.length,r=ur(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||pc,r[a])}function wp(s,t,e){const n=this.cache,i=t.length,r=ur(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||gc,r[a])}function Ap(s,t,e){const n=this.cache,i=t.length,r=ur(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_c,r[a])}function Rp(s,t,e){const n=this.cache,i=t.length,r=ur(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||mc,r[a])}function Cp(s){switch(s){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return yp;case 36295:return Tp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}class Pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cp(e.type)}}class Lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cp(e.type)}}class Dp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function nl(s,t){s.seq.push(t),s.map[t.id]=t}function Ip(s,t,e){const n=s.name,i=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),a=kr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nl(e,c===void 0?new Pp(o,s,t):new Lp(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Dp(o),nl(e,d)),e=d}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Ip(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function il(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Up=37297;let Np=0;function Fp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const sl=new Ot;function Op(s){qt._getMatrix(sl,qt.workingColorSpace,s);const t=`mat3( ${sl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case hr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Fp(s.getShaderSource(t),a)}else return i}function Bp(s,t){const e=Op(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zp(s,t){let e;switch(t){case Vl:e="Linear";break;case Gl:e="Reinhard";break;case Hl:e="Cineon";break;case ka:e="ACESFilmic";break;case Wl:e="AgX";break;case Xl:e="Neutral";break;case qc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ds=new P;function kp(){qt.getLuminanceCoefficients(Ds);const s=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function Gp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ji(s){return s!==""}function al(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(s){return s.replace(Wp,qp)}const Xp=new Map;function qp(s,t){let e=Bt[t];if(e===void 0){const n=Xp.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(s){return s.replace(Yp,Kp)}function Kp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function $p(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ri:case Ci:t="ENVMAP_TYPE_CUBE";break;case cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Jp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kl:t="ENVMAP_BLENDING_MULTIPLY";break;case Wc:t="ENVMAP_BLENDING_MIX";break;case Xc:t="ENVMAP_BLENDING_ADD";break}return t}function Qp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Zp(e),c=$p(e),h=jp(e),d=Jp(e),u=Qp(e),p=Vp(e),g=Gp(r),_=i.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),f.length>0&&(f+=`
`)):(m=[cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),f=[cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Bp("linearToOutputTexel",e.outputColorSpace),kp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),a=Oa(a),a=al(a,e),a=ol(a,e),o=Oa(o),o=al(o,e),o=ol(o,e),a=ll(a),o=ll(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=v+m+a,x=v+f+o,L=il(i,i.VERTEX_SHADER,S),A=il(i,i.FRAGMENT_SHADER,x);i.attachShader(_,L),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(R){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(L).trim(),H=i.getShaderInfoLog(A).trim();let X=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,A);else{const $=rl(i,L,"vertex"),V=rl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+$+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||H==="")&&(W=!1);W&&(R.diagnostics={runnable:X,programLog:I,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(L),i.deleteShader(A),C=new Js(i,_),y=Hp(i,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Up)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let em=0;class nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new im(t),e.set(t,n)),n}}class im{constructor(t){this.id=em++,this.code=t,this.usedTimes=0}}function sm(s,t,e,n,i,r,a){const o=new ac,l=new nm,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,I,O){const H=I.fog,X=O.geometry,W=y.isMeshStandardMaterial?I.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),V=$&&$.mapping===cr?$.image.height:null,tt=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=at!==void 0?at.length:0;let Ct=0;X.morphAttributes.position!==void 0&&(Ct=1),X.morphAttributes.normal!==void 0&&(Ct=2),X.morphAttributes.color!==void 0&&(Ct=3);let Xt,q,et,it;if(tt){const Qt=an[tt];Xt=Qt.vertexShader,q=Qt.fragmentShader}else Xt=y.vertexShader,q=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),it=l.getFragmentShaderID(y);const j=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),gt=O.isInstancedMesh===!0,Tt=O.isBatchedMesh===!0,Yt=!!y.map,zt=!!y.matcap,ne=!!$,U=!!y.aoMap,be=!!y.lightMap,Vt=!!y.bumpMap,Gt=!!y.normalMap,wt=!!y.displacementMap,Jt=!!y.emissiveMap,bt=!!y.metalnessMap,w=!!y.roughnessMap,T=y.anisotropy>0,B=y.clearcoat>0,K=y.dispersion>0,J=y.iridescence>0,Y=y.sheen>0,vt=y.transmission>0,rt=T&&!!y.anisotropyMap,lt=B&&!!y.clearcoatMap,kt=B&&!!y.clearcoatNormalMap,Q=B&&!!y.clearcoatRoughnessMap,ft=J&&!!y.iridescenceMap,Rt=J&&!!y.iridescenceThicknessMap,Dt=Y&&!!y.sheenColorMap,pt=Y&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,It=!!y.specularColorMap,Kt=!!y.specularIntensityMap,D=vt&&!!y.transmissionMap,st=vt&&!!y.thicknessMap,G=!!y.gradientMap,Z=!!y.alphaMap,ut=y.alphaTest>0,ct=!!y.alphaHash,Nt=!!y.extensions;let he=Fn;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(he=s.toneMapping);const Ee={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:Xt,fragmentShader:q,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&O._colorsTexture!==null,instancing:gt,instancingColor:gt&&O.instanceColor!==null,instancingMorph:gt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Di,alphaToCoverage:!!y.alphaToCoverage,map:Yt,matcap:zt,envMap:ne,envMapMode:ne&&$.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:be,bumpMap:Vt,normalMap:Gt,displacementMap:u&&wt,emissiveMap:Jt,normalMapObjectSpace:Gt&&y.normalMapType===$c,normalMapTangentSpace:Gt&&y.normalMapType===Ka,metalnessMap:bt,roughnessMap:w,anisotropy:T,anisotropyMap:rt,clearcoat:B,clearcoatMap:lt,clearcoatNormalMap:kt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:Dt,sheenRoughnessMap:pt,specularMap:Wt,specularColorMap:It,specularIntensityMap:Kt,transmission:vt,transmissionMap:D,thicknessMap:st,gradientMap:G,opaque:y.transparent===!1&&y.blending===Qn&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:ct,combine:y.combine,mapUv:Yt&&_(y.map.channel),aoMapUv:U&&_(y.aoMap.channel),lightMapUv:be&&_(y.lightMap.channel),bumpMapUv:Vt&&_(y.bumpMap.channel),normalMapUv:Gt&&_(y.normalMap.channel),displacementMapUv:wt&&_(y.displacementMap.channel),emissiveMapUv:Jt&&_(y.emissiveMap.channel),metalnessMapUv:bt&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:rt&&_(y.anisotropyMap.channel),clearcoatMapUv:lt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(y.sheenRoughnessMap.channel),specularMapUv:Wt&&_(y.specularMap.channel),specularColorMapUv:It&&_(y.specularColorMap.channel),specularIntensityMapUv:Kt&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:st&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Gt||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Yt||Z),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:dt,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:Yt&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===te,decodeVideoTextureEmissive:Jt&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ue,flipSided:y.side===Ne,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Nt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&y.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const M=g[y.type];let R;if(M){const I=an[M];R=jn.clone(I.uniforms)}else R=y.uniforms;return R}function L(y,M){let R;for(let I=0,O=h.length;I<O;I++){const H=h[I];if(H.cacheKey===M){R=H,++R.usedTimes;break}}return R===void 0&&(R=new tm(s,M,y,r),h.push(R)),R}function A(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:C}}function rm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function am(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function hl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ul(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,p,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||am),n.length>1&&n.sort(u||hl),i.length>1&&i.sort(u||hl)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function om(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new ul,s.set(n,[a])):i>=r.length?(a=new ul,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function lm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new _t};break;case"SpotLight":e={position:new P,direction:new P,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function cm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let hm=0;function um(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function dm(s){const t=new lm,e=cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new ie,a=new ie;function o(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,S=0,x=0,L=0,A=0,E=0;c.sort(um);for(let y=0,M=c.length;y<M;y++){const R=c[y],I=R.color,O=R.intensity,H=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=I.r*O,d+=I.g*O,u+=I.b*O;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],O);E++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,v++}n.directional[p]=W,p++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(I).multiplyScalar(O),W.distance=H,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const $=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,$.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=$.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,x++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(I).multiplyScalar(O),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const $=R.shadow,V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(O),W.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[f]=W,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==v||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==L||C.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=v,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=L,C.numLightProbes=E,n.version=hm++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const S=c[f];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function dl(s){const t=new dm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function fm(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new dl(s),t.set(i,[o])):r>=a.length?(o=new dl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class pm extends wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mm extends wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_m=`uniform sampler2D shadow_pass;
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
}`;function vm(s,t,e){let n=new ja;const i=new Lt,r=new Lt,a=new ue,o=new pm({depthPacking:Zc}),l=new mm,c={},h=e.maxTextureSize,d={[bn]:Ne,[Ne]:bn,[Ue]:Ue},u=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:gm,fragmentShader:_m}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new oe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let f=this.type;this.render=function(A,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Ie),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=f!==vn&&this.type===vn,H=f===vn&&this.type!==vn;for(let X=0,W=A.length;X<W;X++){const $=A[X],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const tt=V.getFrameExtents();if(i.multiply(tt),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,V.mapSize.y=r.y)),V.map===null||O===!0||H===!0){const mt=this.type!==vn?{minFilter:Fe,magFilter:Fe}:{};V.map!==null&&V.map.dispose(),V.map=new cn(i.x,i.y,mt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const at=V.getViewportCount();for(let mt=0;mt<at;mt++){const Ct=V.getViewport(mt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),I.viewport(a),V.updateMatrices($,mt),n=V.getFrustum(),x(E,C,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===vn&&v(V,C),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,R)};function v(A,E){const C=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,C,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,C,p,_,null)}function S(A,E,C,y){let M=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=M.uuid,O=E.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let X=H[O];X===void 0&&(X=M.clone(),H[O]=X,E.addEventListener("dispose",L)),M=X}if(M.visible=E.visible,M.wireframe=E.wireframe,y===vn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=s.properties.get(M);I.light=C}return M}function x(A,E,C,y,M){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const O=t.update(A),H=A.material;if(Array.isArray(H)){const X=O.groups;for(let W=0,$=X.length;W<$;W++){const V=X[W],tt=H[V.materialIndex];if(tt&&tt.visible){const at=S(A,tt,y,M);A.onBeforeShadow(s,A,E,C,O,at,V),s.renderBufferDirect(C,null,O,at,A,V),A.onAfterShadow(s,A,E,C,O,at,V)}}}else if(H.visible){const X=S(A,H,y,M);A.onBeforeShadow(s,A,E,C,O,X,null),s.renderBufferDirect(C,null,O,X,A,null),A.onAfterShadow(s,A,E,C,O,X,null)}}const I=A.children;for(let O=0,H=I.length;O<H;O++)x(I[O],E,C,y,M)}function L(A){A.target.removeEventListener("dispose",L);for(const C in c){const y=c[C],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const xm={[ta]:ea,[na]:ra,[ia]:aa,[Ai]:sa,[ea]:ta,[ra]:na,[aa]:ia,[sa]:Ai};function Mm(s,t){function e(){let D=!1;const st=new ue;let G=null;const Z=new ue(0,0,0,0);return{setMask:function(ut){G!==ut&&!D&&(s.colorMask(ut,ut,ut,ut),G=ut)},setLocked:function(ut){D=ut},setClear:function(ut,ct,Nt,he,Ee){Ee===!0&&(ut*=he,ct*=he,Nt*=he),st.set(ut,ct,Nt,he),Z.equals(st)===!1&&(s.clearColor(ut,ct,Nt,he),Z.copy(st))},reset:function(){D=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,G=null,Z=null,ut=null;return{setReversed:function(ct){if(st!==ct){const Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const he=ut;ut=null,this.setClear(he)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?j(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(ct){G!==ct&&!D&&(s.depthMask(ct),G=ct)},setFunc:function(ct){if(st&&(ct=xm[ct]),Z!==ct){switch(ct){case ta:s.depthFunc(s.NEVER);break;case ea:s.depthFunc(s.ALWAYS);break;case na:s.depthFunc(s.LESS);break;case Ai:s.depthFunc(s.LEQUAL);break;case ia:s.depthFunc(s.EQUAL);break;case sa:s.depthFunc(s.GEQUAL);break;case ra:s.depthFunc(s.GREATER);break;case aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ut!==ct&&(st&&(ct=1-ct),s.clearDepth(ct),ut=ct)},reset:function(){D=!1,G=null,Z=null,ut=null,st=!1}}}function i(){let D=!1,st=null,G=null,Z=null,ut=null,ct=null,Nt=null,he=null,Ee=null;return{setTest:function(Qt){D||(Qt?j(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!D&&(s.stencilMask(Qt),st=Qt)},setFunc:function(Qt,Ye,un){(G!==Qt||Z!==Ye||ut!==un)&&(s.stencilFunc(Qt,Ye,un),G=Qt,Z=Ye,ut=un)},setOp:function(Qt,Ye,un){(ct!==Qt||Nt!==Ye||he!==un)&&(s.stencilOp(Qt,Ye,un),ct=Qt,Nt=Ye,he=un)},setLocked:function(Qt){D=Qt},setClear:function(Qt){Ee!==Qt&&(s.clearStencil(Qt),Ee=Qt)},reset:function(){D=!1,st=null,G=null,Z=null,ut=null,ct=null,Nt=null,he=null,Ee=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,S=null,x=null,L=null,A=null,E=new _t(0,0,0),C=0,y=!1,M=null,R=null,I=null,O=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=$>=2);let tt=null,at={};const mt=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),Xt=new ue().fromArray(mt),q=new ue().fromArray(Ct);function et(D,st,G,Z){const ut=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<G;Nt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(st+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ct}const it={};it[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),it[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),it[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(Ai),Vt(!1),Gt(_o),j(s.CULL_FACE),U(Ie);function j(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function dt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function gt(D,st){return d[D]!==st?(s.bindFramebuffer(D,st),d[D]=st,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=st),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Tt(D,st){let G=p,Z=!1;if(D){G=u.get(st),G===void 0&&(G=[],u.set(st,G));const ut=D.textures;if(G.length!==ut.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Nt=ut.length;ct<Nt;ct++)G[ct]=s.COLOR_ATTACHMENT0+ct;G.length=ut.length,Z=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Z=!0);Z&&s.drawBuffers(G)}function Yt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const zt={[xn]:s.FUNC_ADD,[Pc]:s.FUNC_SUBTRACT,[Lc]:s.FUNC_REVERSE_SUBTRACT};zt[Dc]=s.MIN,zt[Ic]=s.MAX;const ne={[jr]:s.ZERO,[Uc]:s.ONE,[Nc]:s.SRC_COLOR,[Jr]:s.SRC_ALPHA,[zc]:s.SRC_ALPHA_SATURATE,[zl]:s.DST_COLOR,[Bl]:s.DST_ALPHA,[Fc]:s.ONE_MINUS_SRC_COLOR,[Qr]:s.ONE_MINUS_SRC_ALPHA,[Bc]:s.ONE_MINUS_DST_COLOR,[Oc]:s.ONE_MINUS_DST_ALPHA,[kc]:s.CONSTANT_COLOR,[Vc]:s.ONE_MINUS_CONSTANT_COLOR,[Gc]:s.CONSTANT_ALPHA,[Hc]:s.ONE_MINUS_CONSTANT_ALPHA};function U(D,st,G,Z,ut,ct,Nt,he,Ee,Qt){if(D===Ie){_===!0&&(dt(s.BLEND),_=!1);return}if(_===!1&&(j(s.BLEND),_=!0),D!==Ol){if(D!==m||Qt!==y){if((f!==xn||x!==xn)&&(s.blendEquation(s.FUNC_ADD),f=xn,x=xn),Qt)switch(D){case Qn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case es:s.blendFunc(s.ONE,s.ONE);break;case vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case es:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,S=null,L=null,A=null,E.set(0,0,0),C=0,m=D,y=Qt}return}ut=ut||st,ct=ct||G,Nt=Nt||Z,(st!==f||ut!==x)&&(s.blendEquationSeparate(zt[st],zt[ut]),f=st,x=ut),(G!==v||Z!==S||ct!==L||Nt!==A)&&(s.blendFuncSeparate(ne[G],ne[Z],ne[ct],ne[Nt]),v=G,S=Z,L=ct,A=Nt),(he.equals(E)===!1||Ee!==C)&&(s.blendColor(he.r,he.g,he.b,Ee),E.copy(he),C=Ee),m=D,y=!1}function be(D,st){D.side===Ue?dt(s.CULL_FACE):j(s.CULL_FACE);let G=D.side===Ne;st&&(G=!G),Vt(G),D.blending===Qn&&D.transparent===!1?U(Ie):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Jt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Gt(D){D!==Rc?(j(s.CULL_FACE),D!==R&&(D===_o?s.cullFace(s.BACK):D===Cc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),R=D}function wt(D){D!==I&&(W&&s.lineWidth(D),I=D)}function Jt(D,st,G){D?(j(s.POLYGON_OFFSET_FILL),(O!==st||H!==G)&&(s.polygonOffset(st,G),O=st,H=G)):dt(s.POLYGON_OFFSET_FILL)}function bt(D){D?j(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function w(D){D===void 0&&(D=s.TEXTURE0+X-1),tt!==D&&(s.activeTexture(D),tt=D)}function T(D,st,G){G===void 0&&(tt===null?G=s.TEXTURE0+X-1:G=tt);let Z=at[G];Z===void 0&&(Z={type:void 0,texture:void 0},at[G]=Z),(Z.type!==D||Z.texture!==st)&&(tt!==G&&(s.activeTexture(G),tt=G),s.bindTexture(D,st||it[D]),Z.type=D,Z.texture=st)}function B(){const D=at[tt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(D){Xt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Xt.copy(D))}function pt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Wt(D,st){let G=c.get(st);G===void 0&&(G=new WeakMap,c.set(st,G));let Z=G.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(st,D.name),G.set(D,Z))}function It(D,st){const Z=c.get(st).get(D);l.get(st)!==Z&&(s.uniformBlockBinding(st,Z,D.__bindingPointIndex),l.set(st,Z))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,at={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,S=null,x=null,L=null,A=null,E=new _t(0,0,0),C=0,y=!1,M=null,R=null,I=null,O=null,H=null,Xt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:dt,bindFramebuffer:gt,drawBuffers:Tt,useProgram:Yt,setBlending:U,setMaterial:be,setFlipSided:Vt,setCullFace:Gt,setLineWidth:wt,setPolygonOffset:Jt,setScissorTest:bt,activeTexture:w,bindTexture:T,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ft,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:It,texStorage2D:kt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:lt,scissor:Dt,viewport:pt,reset:Kt}}function fl(s,t,e,n){const i=Sm(n);switch(e){case $l:return s*t;case Jl:return s*t;case Ql:return s*t*2;case Wa:return s*t/i.components*i.byteLength;case Xa:return s*t/i.components*i.byteLength;case tc:return s*t*2/i.components*i.byteLength;case qa:return s*t*2/i.components*i.byteLength;case jl:return s*t*3/i.components*i.byteLength;case tn:return s*t*4/i.components*i.byteLength;case Ya:return s*t*4/i.components*i.byteLength;case Ys:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zs:case $s:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(s,16)*Math.max(t,8)/4;case ha:case da:return Math.max(s,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ba:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case js:case La:case Da:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ec:case Ia:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ua:case Na:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sm(s){switch(s){case En:case Yl:return{byteLength:1,components:1};case is:case Kl:case On:return{byteLength:2,components:1};case Ga:case Ha:return{byteLength:2,components:4};case ti:case Va:case ln:return{byteLength:4,components:1};case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ym(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,T){return p?new OffscreenCanvas(w,T):ir("canvas")}function _(w,T,B){let K=1;const J=bt(w);if((J.width>B||J.height>B)&&(K=B/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(K*J.width),vt=Math.floor(K*J.height);d===void 0&&(d=g(Y,vt));const rt=T?g(Y,vt):d;return rt.width=Y,rt.height=vt,rt.getContext("2d").drawImage(w,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+vt+")."),rt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){s.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(w,T,B,K,J=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=T;if(T===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8)),T===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),T===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8)),T===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),T===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),T===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),T===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),T===s.RGBA){const vt=J?hr:qt.getTransfer(K);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=vt===te?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(w,T){let B;return w?T===null||T===ti||T===ei?B=s.DEPTH24_STENCIL8:T===ln?B=s.DEPTH32F_STENCIL8:T===is&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ti||T===ei?B=s.DEPTH_COMPONENT24:T===ln?B=s.DEPTH_COMPONENT32F:T===is&&(B=s.DEPTH_COMPONENT16),B}function L(w,T){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fe&&w.minFilter!==on?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function A(w){const T=w.target;T.removeEventListener("dispose",A),C(T),T.isVideoTexture&&h.delete(T)}function E(w){const T=w.target;T.removeEventListener("dispose",E),M(T)}function C(w){const T=n.get(w);if(T.__webglInit===void 0)return;const B=w.source,K=u.get(B);if(K){const J=K[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(w),Object.keys(K).length===0&&u.delete(B)}n.remove(w)}function y(w){const T=n.get(w);s.deleteTexture(T.__webglTexture);const B=w.source,K=u.get(B);delete K[T.__cacheKey],a.memory.textures--}function M(w){const T=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let J=0;J<T.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(T.__webglFramebuffer[K][J]);else s.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)s.deleteFramebuffer(T.__webglFramebuffer[K]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=w.textures;for(let K=0,J=B.length;K<J;K++){const Y=n.get(B[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(w)}let R=0;function I(){R=0}function O(){const w=R;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),R+=1,w}function H(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function X(w,T){const B=n.get(w);if(w.isVideoTexture&&wt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,w,T);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+T)}function W(w,T){const B=n.get(w);if(w.version>0&&B.__version!==w.version){q(B,w,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+T)}function $(w,T){const B=n.get(w);if(w.version>0&&B.__version!==w.version){q(B,w,T);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+T)}function V(w,T){const B=n.get(w);if(w.version>0&&B.__version!==w.version){et(B,w,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+T)}const tt={[ns]:s.REPEAT,[Zn]:s.CLAMP_TO_EDGE,[ca]:s.MIRRORED_REPEAT},at={[Fe]:s.NEAREST,[Yc]:s.NEAREST_MIPMAP_NEAREST,[ds]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[pr]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},mt={[jc]:s.NEVER,[ih]:s.ALWAYS,[Jc]:s.LESS,[nc]:s.LEQUAL,[Qc]:s.EQUAL,[nh]:s.GEQUAL,[th]:s.GREATER,[eh]:s.NOTEQUAL};function Ct(w,T){if(T.type===ln&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===on||T.magFilter===pr||T.magFilter===ds||T.magFilter===$n||T.minFilter===on||T.minFilter===pr||T.minFilter===ds||T.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,tt[T.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,tt[T.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,tt[T.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,at[T.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,at[T.minFilter]),T.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,mt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fe||T.minFilter!==ds&&T.minFilter!==$n||T.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Xt(w,T){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",A));const K=T.source;let J=u.get(K);J===void 0&&(J={},u.set(K,J));const Y=H(T);if(Y!==w.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[Y].usedTimes++;const vt=J[w.__cacheKey];vt!==void 0&&(J[w.__cacheKey].usedTimes--,vt.usedTimes===0&&y(T)),w.__cacheKey=Y,w.__webglTexture=J[Y].texture}return B}function q(w,T,B){let K=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=s.TEXTURE_3D);const J=Xt(w,T),Y=T.source;e.bindTexture(K,w.__webglTexture,s.TEXTURE0+B);const vt=n.get(Y);if(Y.version!==vt.__version||J===!0){e.activeTexture(s.TEXTURE0+B);const rt=qt.getPrimaries(qt.workingColorSpace),lt=T.colorSpace===Nn?null:qt.getPrimaries(T.colorSpace),kt=T.colorSpace===Nn||rt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Q=_(T.image,!1,i.maxTextureSize);Q=Jt(T,Q);const ft=r.convert(T.format,T.colorSpace),Rt=r.convert(T.type);let Dt=S(T.internalFormat,ft,Rt,T.colorSpace,T.isVideoTexture);Ct(K,T);let pt;const Wt=T.mipmaps,It=T.isVideoTexture!==!0,Kt=vt.__version===void 0||J===!0,D=Y.dataReady,st=L(T,Q);if(T.isDepthTexture)Dt=x(T.format===ni,T.type),Kt&&(It?e.texStorage2D(s.TEXTURE_2D,1,Dt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Dt,Q.width,Q.height,0,ft,Rt,null));else if(T.isDataTexture)if(Wt.length>0){It&&Kt&&e.texStorage2D(s.TEXTURE_2D,st,Dt,Wt[0].width,Wt[0].height);for(let G=0,Z=Wt.length;G<Z;G++)pt=Wt[G],It?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,Rt,pt.data):e.texImage2D(s.TEXTURE_2D,G,Dt,pt.width,pt.height,0,ft,Rt,pt.data);T.generateMipmaps=!1}else It?(Kt&&e.texStorage2D(s.TEXTURE_2D,st,Dt,Q.width,Q.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Rt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,Q.width,Q.height,0,ft,Rt,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){It&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Dt,Wt[0].width,Wt[0].height,Q.depth);for(let G=0,Z=Wt.length;G<Z;G++)if(pt=Wt[G],T.format!==tn)if(ft!==null)if(It){if(D)if(T.layerUpdates.size>0){const ut=fl(pt.width,pt.height,T.format,T.type);for(const ct of T.layerUpdates){const Nt=pt.data.subarray(ct*ut/pt.data.BYTES_PER_ELEMENT,(ct+1)*ut/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ct,pt.width,pt.height,1,ft,Nt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Dt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,Q.depth,ft,Rt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Dt,pt.width,pt.height,Q.depth,0,ft,Rt,pt.data)}else{It&&Kt&&e.texStorage2D(s.TEXTURE_2D,st,Dt,Wt[0].width,Wt[0].height);for(let G=0,Z=Wt.length;G<Z;G++)pt=Wt[G],T.format!==tn?ft!==null?It?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Dt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,Rt,pt.data):e.texImage2D(s.TEXTURE_2D,G,Dt,pt.width,pt.height,0,ft,Rt,pt.data)}else if(T.isDataArrayTexture)if(It){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Dt,Q.width,Q.height,Q.depth),D)if(T.layerUpdates.size>0){const G=fl(Q.width,Q.height,T.format,T.type);for(const Z of T.layerUpdates){const ut=Q.data.subarray(Z*G/Q.data.BYTES_PER_ELEMENT,(Z+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ft,Rt,ut)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Rt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,Q.width,Q.height,Q.depth,0,ft,Rt,Q.data);else if(T.isData3DTexture)It?(Kt&&e.texStorage3D(s.TEXTURE_3D,st,Dt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Rt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,Q.width,Q.height,Q.depth,0,ft,Rt,Q.data);else if(T.isFramebufferTexture){if(Kt)if(It)e.texStorage2D(s.TEXTURE_2D,st,Dt,Q.width,Q.height);else{let G=Q.width,Z=Q.height;for(let ut=0;ut<st;ut++)e.texImage2D(s.TEXTURE_2D,ut,Dt,G,Z,0,ft,Rt,null),G>>=1,Z>>=1}}else if(Wt.length>0){if(It&&Kt){const G=bt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,st,Dt,G.width,G.height)}for(let G=0,Z=Wt.length;G<Z;G++)pt=Wt[G],It?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,ft,Rt,pt):e.texImage2D(s.TEXTURE_2D,G,Dt,ft,Rt,pt);T.generateMipmaps=!1}else if(It){if(Kt){const G=bt(Q);e.texStorage2D(s.TEXTURE_2D,st,Dt,G.width,G.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Rt,Q)}else e.texImage2D(s.TEXTURE_2D,0,Dt,ft,Rt,Q);m(T)&&f(K),vt.__version=Y.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function et(w,T,B){if(T.image.length!==6)return;const K=Xt(w,T),J=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);const Y=n.get(J);if(J.version!==Y.__version||K===!0){e.activeTexture(s.TEXTURE0+B);const vt=qt.getPrimaries(qt.workingColorSpace),rt=T.colorSpace===Nn?null:qt.getPrimaries(T.colorSpace),lt=T.colorSpace===Nn||vt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const kt=T.isCompressedTexture||T.image[0].isCompressedTexture,Q=T.image[0]&&T.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!kt&&!Q?ft[Z]=_(T.image[Z],!0,i.maxCubemapSize):ft[Z]=Q?T.image[Z].image:T.image[Z],ft[Z]=Jt(T,ft[Z]);const Rt=ft[0],Dt=r.convert(T.format,T.colorSpace),pt=r.convert(T.type),Wt=S(T.internalFormat,Dt,pt,T.colorSpace),It=T.isVideoTexture!==!0,Kt=Y.__version===void 0||K===!0,D=J.dataReady;let st=L(T,Rt);Ct(s.TEXTURE_CUBE_MAP,T);let G;if(kt){It&&Kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Wt,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){G=ft[Z].mipmaps;for(let ut=0;ut<G.length;ut++){const ct=G[ut];T.format!==tn?Dt!==null?It?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Dt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Wt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Dt,pt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Wt,ct.width,ct.height,0,Dt,pt,ct.data)}}}else{if(G=T.mipmaps,It&&Kt){G.length>0&&st++;const Z=bt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,Dt,pt,ft[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,ft[Z].width,ft[Z].height,0,Dt,pt,ft[Z].data);for(let ut=0;ut<G.length;ut++){const Nt=G[ut].image[Z].image;It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Nt.width,Nt.height,Dt,pt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Wt,Nt.width,Nt.height,0,Dt,pt,Nt.data)}}else{It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Dt,pt,ft[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Dt,pt,ft[Z]);for(let ut=0;ut<G.length;ut++){const ct=G[ut];It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Dt,pt,ct.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Wt,Dt,pt,ct.image[Z])}}}m(T)&&f(s.TEXTURE_CUBE_MAP),Y.__version=J.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function it(w,T,B,K,J,Y){const vt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),lt=S(B.internalFormat,vt,rt,B.colorSpace),kt=n.get(T),Q=n.get(B);if(Q.__renderTarget=T,!kt.__hasExternalTextures){const ft=Math.max(1,T.width>>Y),Rt=Math.max(1,T.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,lt,ft,Rt,T.depth,0,vt,rt,null):e.texImage2D(J,Y,lt,ft,Rt,0,vt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Gt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,Q.__webglTexture,0,Vt(T)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,Q.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function j(w,T,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),T.depthBuffer){const K=T.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=x(T.stencilBuffer,J),vt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=Vt(T);Gt(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Y,T.width,T.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Y,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Y,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,w)}else{const K=T.textures;for(let J=0;J<K.length;J++){const Y=K[J],vt=r.convert(Y.format,Y.colorSpace),rt=r.convert(Y.type),lt=S(Y.internalFormat,vt,rt,Y.colorSpace),kt=Vt(T);B&&Gt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,lt,T.width,T.height):Gt(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,lt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,lt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(T.depthTexture);K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const J=K.__webglTexture,Y=Vt(T);if(T.depthTexture.format===bi)Gt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(T.depthTexture.format===ni)Gt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function gt(w){const T=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=K}if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");dt(T.__webglFramebuffer,w)}else if(B){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=s.createRenderbuffer(),j(T.__webglDepthbuffer[K],w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),j(T.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(w,T,B){const K=n.get(w);T!==void 0&&it(K.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&gt(w)}function Yt(w){const T=w.texture,B=n.get(w),K=n.get(T);w.addEventListener("dispose",E);const J=w.textures,Y=w.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=T.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let lt=0;lt<T.mipmaps.length;lt++)B.__webglFramebuffer[rt][lt]=s.createFramebuffer()}else B.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<T.mipmaps.length;rt++)B.__webglFramebuffer[rt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(vt)for(let rt=0,lt=J.length;rt<lt;rt++){const kt=n.get(J[rt]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&Gt(w)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const lt=J[rt];B.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const kt=r.convert(lt.format,lt.colorSpace),Q=r.convert(lt.type),ft=S(lt.internalFormat,kt,Q,lt.colorSpace,w.isXRRenderTarget===!0),Rt=Vt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ft,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),j(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,T);for(let rt=0;rt<6;rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let lt=0;lt<T.mipmaps.length;lt++)it(B.__webglFramebuffer[rt][lt],w,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else it(B.__webglFramebuffer[rt],w,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(T)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,lt=J.length;rt<lt;rt++){const kt=J[rt],Q=n.get(kt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ct(s.TEXTURE_2D,kt),it(B.__webglFramebuffer,w,kt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(kt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(rt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),Ct(rt,T),T.mipmaps&&T.mipmaps.length>0)for(let lt=0;lt<T.mipmaps.length;lt++)it(B.__webglFramebuffer[lt],w,T,s.COLOR_ATTACHMENT0,rt,lt);else it(B.__webglFramebuffer,w,T,s.COLOR_ATTACHMENT0,rt,0);m(T)&&f(rt),e.unbindTexture()}w.depthBuffer&&gt(w)}function zt(w){const T=w.textures;for(let B=0,K=T.length;B<K;B++){const J=T[B];if(m(J)){const Y=v(w),vt=n.get(J).__webglTexture;e.bindTexture(Y,vt),f(Y),e.unbindTexture()}}}const ne=[],U=[];function be(w){if(w.samples>0){if(Gt(w)===!1){const T=w.textures,B=w.width,K=w.height;let J=s.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(w),rt=T.length>1;if(rt)for(let lt=0;lt<T.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let lt=0;lt<T.length;lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[lt]);const kt=n.get(T[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,kt,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,J,s.NEAREST),l===!0&&(ne.length=0,U.length=0,ne.push(s.COLOR_ATTACHMENT0+lt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ne.push(Y),U.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let lt=0;lt<T.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[lt]);const kt=n.get(T[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const T=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Vt(w){return Math.min(i.maxSamples,w.samples)}function Gt(w){const T=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function wt(w){const T=a.render.frame;h.get(w)!==T&&(h.set(w,T),w.update())}function Jt(w,T){const B=w.colorSpace,K=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Di&&B!==Nn&&(qt.getTransfer(B)===te?(K!==tn||J!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Tt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Gt}function Tm(s,t){function e(n,i=Nn){let r;const a=qt.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===Ga)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return s.BYTE;if(n===Kl)return s.SHORT;if(n===is)return s.UNSIGNED_SHORT;if(n===Va)return s.INT;if(n===ti)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===On)return s.HALF_FLOAT;if(n===$l)return s.ALPHA;if(n===jl)return s.RGB;if(n===tn)return s.RGBA;if(n===Jl)return s.LUMINANCE;if(n===Ql)return s.LUMINANCE_ALPHA;if(n===bi)return s.DEPTH_COMPONENT;if(n===ni)return s.DEPTH_STENCIL;if(n===Wa)return s.RED;if(n===Xa)return s.RED_INTEGER;if(n===tc)return s.RG;if(n===qa)return s.RG_INTEGER;if(n===Ya)return s.RGBA_INTEGER;if(n===Ys||n===Ks||n===Zs||n===$s)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===va||n===xa||n===Ma||n===Sa||n===ya||n===Ta||n===ba||n===Ea||n===wa||n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===La||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===js)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===Ia||n===Ua||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ei?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class bm extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ye extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Em={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
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

}`;class Rm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ce,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ve({vertexShader:wm,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cm extends Ii{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new Rm,m=e.getContextAttributes();let f=null,v=null;const S=[],x=[],L=new Lt;let A=null;const E=new Xe;E.viewport=new ue;const C=new Xe;C.viewport=new ue;const y=[E,C],M=new bm;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=S[q];return et===void 0&&(et=new Vr,S[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=S[q];return et===void 0&&(et=new Vr,S[q]=et),et.getGripSpace()},this.getHand=function(q){let et=S[q];return et===void 0&&(et=new Vr,S[q]=et),et.getHandSpace()};function O(q){const et=x.indexOf(q.inputSource);if(et===-1)return;const it=S[et];it!==void 0&&(it.update(q.inputSource,q.frame,c||a),it.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let q=0;q<S.length;q++){const et=x[q];et!==null&&(x[q]=null,S[q].disconnect(et))}R=null,I=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,v=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new cn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,it=null,j=null;m.depth&&(j=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?ni:bi,it=m.stencil?ei:ti);const dt={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new cn(u.textureWidth,u.textureHeight,{format:tn,type:En,depthTexture:new to(u.textureWidth,u.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let et=0;et<q.removed.length;et++){const it=q.removed[et],j=x.indexOf(it);j>=0&&(x[j]=null,S[j].disconnect(it))}for(let et=0;et<q.added.length;et++){const it=q.added[et];let j=x.indexOf(it);if(j===-1){for(let gt=0;gt<S.length;gt++)if(gt>=x.length){x.push(it),j=gt;break}else if(x[gt]===null){x[gt]=it,j=gt;break}if(j===-1)break}const dt=S[j];dt&&dt.connect(it)}}const W=new P,$=new P;function V(q,et,it){W.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(it.matrixWorld);const j=W.distanceTo($),dt=et.projectionMatrix.elements,gt=it.projectionMatrix.elements,Tt=dt[14]/(dt[10]-1),Yt=dt[14]/(dt[10]+1),zt=(dt[9]+1)/dt[5],ne=(dt[9]-1)/dt[5],U=(dt[8]-1)/dt[0],be=(gt[8]+1)/gt[0],Vt=Tt*U,Gt=Tt*be,wt=j/(-U+be),Jt=wt*-U;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Jt),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),dt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=Tt+wt,w=Yt+wt,T=Vt-Jt,B=Gt+(j-Jt),K=zt*Yt/w*bt,J=ne*Yt/w*bt;q.projectionMatrix.makePerspective(T,B,K,J,bt,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function tt(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,it=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(it=_.depthFar)),M.near=C.near=E.near=et,M.far=C.far=E.far=it,(R!==M.near||I!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,I=M.far),E.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=E.layers.mask|C.layers.mask;const j=q.parent,dt=M.cameras;tt(M,j);for(let gt=0;gt<dt.length;gt++)tt(dt[gt],j);dt.length===2?V(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),at(q,M,j)};function at(q,et,it){it===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(it.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let mt=null;function Ct(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const it=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let j=!1;it.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let gt=0;gt<it.length;gt++){const Tt=it[gt];let Yt=null;if(p!==null)Yt=p.getViewport(Tt);else{const ne=d.getViewSubImage(u,Tt);Yt=ne.viewport,gt===0&&(t.setRenderTargetTextures(v,ne.colorTexture,u.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(v))}let zt=y[gt];zt===void 0&&(zt=new Xe,zt.layers.enable(gt),zt.viewport=new ue,y[gt]=zt),zt.matrix.fromArray(Tt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Tt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),gt===0&&(M.matrix.copy(zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),j===!0&&M.cameras.push(zt)}const dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const gt=d.getDepthInformation(it[0]);gt&&gt.isValid&&gt.texture&&_.init(t,gt,i.renderState)}}for(let it=0;it<S.length;it++){const j=x[it],dt=S[it];j!==null&&dt!==void 0&&dt.update(j,et,c||a)}mt&&mt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Xt=new fc;Xt.setAnimationLoop(Ct),this.setAnimationLoop=function(q){mt=q},this.dispose=function(){}}}const Wn=new hn,Pm=new ie;function Lm(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,hc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ne&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ne&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,Wn.copy(x),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),m.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Wn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ne&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const x=S.program;n.uniformBlockBinding(v,x)}function c(v,S){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(v,L);const A=t.render.frame;r[v.id]!==A&&(u(v),r[v.id]=A)}function h(v){const S=d();v.__bindingPointIndex=S;const x=s.createBuffer(),L=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const S=i[v.id],x=v.uniforms,L=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,E=x.length;A<E;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,M=C.length;y<M;y++){const R=C[y];if(p(R,A,y,L)===!0){const I=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let X=0;X<O.length;X++){const W=O[X],$=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,I+H,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,S,x,L){const A=v.value,E=S+"_"+x;if(L[E]===void 0)return typeof A=="number"||typeof A=="boolean"?L[E]=A:L[E]=A.clone(),!0;{const C=L[E];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[E]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){const S=v.uniforms;let x=0;const L=16;for(let E=0,C=S.length;E<C;E++){const y=Array.isArray(S[E])?S[E]:[S[E]];for(let M=0,R=y.length;M<R;M++){const I=y[M],O=Array.isArray(I.value)?I.value:[I.value];for(let H=0,X=O.length;H<X;H++){const W=O[H],$=_(W),V=x%L,tt=V%$.boundary,at=V+tt;x+=tt,at!==0&&L-at<$.storage&&(x+=L-at),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=$.storage}}}const A=x%L;return A>0&&(x+=L-A),v.__size=x,v.__cache={},this}function _(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function f(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Im{constructor(t={}){const{canvas:e=Sh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let L=!1,A=0,E=0,C=null,y=-1,M=null;const R=new ue,I=new ue;let O=null;const H=new _t(0);let X=0,W=e.width,$=e.height,V=1,tt=null,at=null;const mt=new ue(0,0,W,$),Ct=new ue(0,0,W,$);let Xt=!1;const q=new ja;let et=!1,it=!1;const j=new ie,dt=new ie,gt=new P,Tt=new ue,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ne(){return C===null?V:1}let U=n;function be(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${za}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){const N="webgl2";if(U=be(N,b),U===null)throw be(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Vt,Gt,wt,Jt,bt,w,T,B,K,J,Y,vt,rt,lt,kt,Q,ft,Rt,Dt,pt,Wt,It,Kt,D;function st(){Vt=new Bf(U),Vt.init(),It=new Tm(U,Vt),Gt=new Df(U,Vt,t,It),wt=new Mm(U,Vt),Gt.reverseDepthBuffer&&u&&wt.buffers.depth.setReversed(!0),Jt=new Vf(U),bt=new rm,w=new ym(U,Vt,wt,bt,Gt,It,Jt),T=new Uf(x),B=new Of(x),K=new Yh(U),Kt=new Pf(U,K),J=new zf(U,K,Jt,Kt),Y=new Hf(U,J,K,Jt),Dt=new Gf(U,Gt,w),Q=new If(bt),vt=new sm(x,T,B,Vt,Gt,Kt,Q),rt=new Lm(x,bt),lt=new om,kt=new fm(Vt),Rt=new Cf(x,T,B,wt,Y,p,l),ft=new vm(x,Y,Gt),D=new Dm(U,Jt,Gt,wt),pt=new Lf(U,Vt,Jt),Wt=new kf(U,Vt,Jt),Jt.programs=vt.programs,x.capabilities=Gt,x.extensions=Vt,x.properties=bt,x.renderLists=lt,x.shadowMap=ft,x.state=wt,x.info=Jt}st();const G=new Cm(x,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(W,$,!1))},this.getSize=function(b){return b.set(W,$)},this.setSize=function(b,N,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,$=N,e.width=Math.floor(b*V),e.height=Math.floor(N*V),z===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(W*V,$*V).floor()},this.setDrawingBufferSize=function(b,N,z){W=b,$=N,V=z,e.width=Math.floor(b*z),e.height=Math.floor(N*z),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,N,z,k){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,N,z,k),wt.viewport(R.copy(mt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,N,z,k){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,N,z,k),wt.scissor(I.copy(Ct).multiplyScalar(V).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(b){wt.setScissorTest(Xt=b)},this.setOpaqueSort=function(b){tt=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(b=!0,N=!0,z=!0){let k=0;if(b){let F=!1;if(C!==null){const nt=C.texture.format;F=nt===Ya||nt===qa||nt===Xa}if(F){const nt=C.texture.type,ht=nt===En||nt===ti||nt===is||nt===ei||nt===Ga||nt===Ha,xt=Rt.getClearColor(),Mt=Rt.getClearAlpha(),Ut=xt.r,Ft=xt.g,St=xt.b;ht?(g[0]=Ut,g[1]=Ft,g[2]=St,g[3]=Mt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ut,_[1]=Ft,_[2]=St,_[3]=Mt,U.clearBufferiv(U.COLOR,0,_))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT),z&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),lt.dispose(),kt.dispose(),bt.dispose(),T.dispose(),B.dispose(),Y.dispose(),Kt.dispose(),D.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",lo),G.removeEventListener("sessionend",co),Bn.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Jt.autoReset,N=ft.enabled,z=ft.autoUpdate,k=ft.needsUpdate,F=ft.type;st(),Jt.autoReset=b,ft.enabled=N,ft.autoUpdate=z,ft.needsUpdate=k,ft.type=F}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nt(b){const N=b.target;N.removeEventListener("dispose",Nt),he(N)}function he(b){Ee(b),bt.remove(b)}function Ee(b){const N=bt.get(b).programs;N!==void 0&&(N.forEach(function(z){vt.releaseProgram(z)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,z,k,F,nt){N===null&&(N=Yt);const ht=F.isMesh&&F.matrixWorld.determinant()<0,xt=Ec(b,N,z,k,F);wt.setMaterial(k,ht);let Mt=z.index,Ut=1;if(k.wireframe===!0){if(Mt=J.getWireframeAttribute(z),Mt===void 0)return;Ut=2}const Ft=z.drawRange,St=z.attributes.position;let Zt=Ft.start*Ut,se=(Ft.start+Ft.count)*Ut;nt!==null&&(Zt=Math.max(Zt,nt.start*Ut),se=Math.min(se,(nt.start+nt.count)*Ut)),Mt!==null?(Zt=Math.max(Zt,0),se=Math.min(se,Mt.count)):St!=null&&(Zt=Math.max(Zt,0),se=Math.min(se,St.count));const re=se-Zt;if(re<0||re===1/0)return;Kt.setup(F,k,xt,z,Mt);let Oe,$t=pt;if(Mt!==null&&(Oe=K.get(Mt),$t=Wt,$t.setIndex(Oe)),F.isMesh)k.wireframe===!0?(wt.setLineWidth(k.wireframeLinewidth*ne()),$t.setMode(U.LINES)):$t.setMode(U.TRIANGLES);else if(F.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),wt.setLineWidth(yt*ne()),F.isLineSegments?$t.setMode(U.LINES):F.isLineLoop?$t.setMode(U.LINE_LOOP):$t.setMode(U.LINE_STRIP)}else F.isPoints?$t.setMode(U.POINTS):F.isSprite&&$t.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)$t.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))$t.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const yt=F._multiDrawStarts,dn=F._multiDrawCounts,jt=F._multiDrawCount,Ke=Mt?K.get(Mt).bytesPerElement:1,ii=bt.get(k).currentProgram.getUniforms();for(let ze=0;ze<jt;ze++)ii.setValue(U,"_gl_DrawID",ze),$t.render(yt[ze]/Ke,dn[ze])}else if(F.isInstancedMesh)$t.renderInstances(Zt,re,F.count);else if(z.isInstancedBufferGeometry){const yt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,dn=Math.min(z.instanceCount,yt);$t.renderInstances(Zt,re,dn)}else $t.render(Zt,re)};function Qt(b,N,z){b.transparent===!0&&b.side===Ue&&b.forceSinglePass===!1?(b.side=Ne,b.needsUpdate=!0,us(b,N,z),b.side=bn,b.needsUpdate=!0,us(b,N,z),b.side=Ue):us(b,N,z)}this.compile=function(b,N,z=null){z===null&&(z=b),f=kt.get(z),f.init(N),S.push(f),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),b!==z&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const k=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const nt=F.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){const xt=nt[ht];Qt(xt,z,F),k.add(xt)}else Qt(nt,z,F),k.add(nt)}),S.pop(),f=null,k},this.compileAsync=function(b,N,z=null){const k=this.compile(b,N,z);return new Promise(F=>{function nt(){if(k.forEach(function(ht){bt.get(ht).currentProgram.isReady()&&k.delete(ht)}),k.size===0){F(b);return}setTimeout(nt,10)}Vt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ye=null;function un(b){Ye&&Ye(b)}function lo(){Bn.stop()}function co(){Bn.start()}const Bn=new fc;Bn.setAnimationLoop(un),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(b){Ye=b,G.setAnimationLoop(b),b===null?Bn.stop():Bn.start()},G.addEventListener("sessionstart",lo),G.addEventListener("sessionend",co),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,C),f=kt.get(b,S.length),f.init(N),S.push(f),dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(dt),it=this.localClippingEnabled,et=Q.init(this.clippingPlanes,it),m=lt.get(b,v.length),m.init(),v.push(m),G.enabled===!0&&G.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&fr(nt,N,-1/0,x.sortObjects)}fr(b,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(tt,at),zt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,zt&&Rt.addToRenderList(m,b),this.info.render.frame++,et===!0&&Q.beginShadows();const z=f.state.shadowsArray;ft.render(z,b,N),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const nt=N.cameras;if(F.length>0)for(let ht=0,xt=nt.length;ht<xt;ht++){const Mt=nt[ht];uo(k,F,b,Mt)}zt&&Rt.render(b);for(let ht=0,xt=nt.length;ht<xt;ht++){const Mt=nt[ht];ho(m,b,Mt,Mt.viewport)}}else F.length>0&&uo(k,F,b,N),zt&&Rt.render(b),ho(m,b,N);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,N),Kt.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function fr(b,N,z,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){k&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);const ht=Y.update(b),xt=b.material;xt.visible&&m.push(b,ht,xt,z,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const ht=Y.update(b),xt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Tt.copy(ht.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(xt)){const Mt=ht.groups;for(let Ut=0,Ft=Mt.length;Ut<Ft;Ut++){const St=Mt[Ut],Zt=xt[St.materialIndex];Zt&&Zt.visible&&m.push(b,ht,Zt,z,Tt.z,St)}}else xt.visible&&m.push(b,ht,xt,z,Tt.z,null)}}const nt=b.children;for(let ht=0,xt=nt.length;ht<xt;ht++)fr(nt[ht],N,z,k)}function ho(b,N,z,k){const F=b.opaque,nt=b.transmissive,ht=b.transparent;f.setupLightsView(z),et===!0&&Q.setGlobalState(x.clippingPlanes,z),k&&wt.viewport(R.copy(k)),F.length>0&&hs(F,N,z),nt.length>0&&hs(nt,N,z),ht.length>0&&hs(ht,N,z),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function uo(b,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new cn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?On:En,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const nt=f.state.transmissionRenderTarget[k.id],ht=k.viewport||R;nt.setSize(ht.z,ht.w);const xt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(H),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),zt&&Rt.render(z);const Mt=x.toneMapping;x.toneMapping=Fn;const Ut=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),et===!0&&Q.setGlobalState(x.clippingPlanes,k),hs(b,z,k),w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let St=0,Zt=N.length;St<Zt;St++){const se=N[St],re=se.object,Oe=se.geometry,$t=se.material,yt=se.group;if($t.side===Ue&&re.layers.test(k.layers)){const dn=$t.side;$t.side=Ne,$t.needsUpdate=!0,fo(re,z,k,Oe,$t,yt),$t.side=dn,$t.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt))}x.setRenderTarget(xt),x.setClearColor(H,X),Ut!==void 0&&(k.viewport=Ut),x.toneMapping=Mt}function hs(b,N,z){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,nt=b.length;F<nt;F++){const ht=b[F],xt=ht.object,Mt=ht.geometry,Ut=k===null?ht.material:k,Ft=ht.group;xt.layers.test(z.layers)&&fo(xt,N,z,Mt,Ut,Ft)}}function fo(b,N,z,k,F,nt){b.onBeforeRender(x,N,z,k,F,nt),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,N,z,k,b,nt),F.transparent===!0&&F.side===Ue&&F.forceSinglePass===!1?(F.side=Ne,F.needsUpdate=!0,x.renderBufferDirect(z,N,k,F,b,nt),F.side=bn,F.needsUpdate=!0,x.renderBufferDirect(z,N,k,F,b,nt),F.side=Ue):x.renderBufferDirect(z,N,k,F,b,nt),b.onAfterRender(x,N,z,k,F,nt)}function us(b,N,z){N.isScene!==!0&&(N=Yt);const k=bt.get(b),F=f.state.lights,nt=f.state.shadowsArray,ht=F.state.version,xt=vt.getParameters(b,F.state,nt,N,z),Mt=vt.getProgramCacheKey(xt);let Ut=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?B:T).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Nt),Ut=new Map,k.programs=Ut);let Ft=Ut.get(Mt);if(Ft!==void 0){if(k.currentProgram===Ft&&k.lightsStateVersion===ht)return mo(b,xt),Ft}else xt.uniforms=vt.getUniforms(b),b.onBeforeCompile(xt,x),Ft=vt.acquireProgram(xt,Mt),Ut.set(Mt,Ft),k.uniforms=xt.uniforms;const St=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=Q.uniform),mo(b,xt),k.needsLights=Ac(b),k.lightsStateVersion=ht,k.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ft,k.uniformsList=null,Ft}function po(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Js.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function mo(b,N){const z=bt.get(b);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Ec(b,N,z,k,F){N.isScene!==!0&&(N=Yt),w.resetTextureUnits();const nt=N.fog,ht=k.isMeshStandardMaterial?N.environment:null,xt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Di,Mt=(k.isMeshStandardMaterial?B:T).get(k.envMap||ht),Ut=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),St=!!z.morphAttributes.position,Zt=!!z.morphAttributes.normal,se=!!z.morphAttributes.color;let re=Fn;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(re=x.toneMapping);const Oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$t=Oe!==void 0?Oe.length:0,yt=bt.get(k),dn=f.state.lights;if(et===!0&&(it===!0||b!==M)){const He=b===M&&k.id===y;Q.setState(k,b,He)}let jt=!1;k.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==dn.state.version||yt.outputColorSpace!==xt||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==Mt||k.fog===!0&&yt.fog!==nt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==Ut||yt.vertexTangents!==Ft||yt.morphTargets!==St||yt.morphNormals!==Zt||yt.morphColors!==se||yt.toneMapping!==re||yt.morphTargetsCount!==$t)&&(jt=!0):(jt=!0,yt.__version=k.version);let Ke=yt.currentProgram;jt===!0&&(Ke=us(k,N,F));let ii=!1,ze=!1,Fi=!1;const ae=Ke.getUniforms(),sn=yt.uniforms;if(wt.useProgram(Ke.program)&&(ii=!0,ze=!0,Fi=!0),k.id!==y&&(y=k.id,ze=!0),ii||M!==b){wt.buffers.depth.getReversed()?(j.copy(b.projectionMatrix),Th(j),bh(j),ae.setValue(U,"projectionMatrix",j)):ae.setValue(U,"projectionMatrix",b.projectionMatrix),ae.setValue(U,"viewMatrix",b.matrixWorldInverse);const An=ae.map.cameraPosition;An!==void 0&&An.setValue(U,gt.setFromMatrixPosition(b.matrixWorld)),Gt.logarithmicDepthBuffer&&ae.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ae.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,ze=!0,Fi=!0)}if(F.isSkinnedMesh){ae.setOptional(U,F,"bindMatrix"),ae.setOptional(U,F,"bindMatrixInverse");const He=F.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ae.setValue(U,"boneTexture",He.boneTexture,w))}F.isBatchedMesh&&(ae.setOptional(U,F,"batchingTexture"),ae.setValue(U,"batchingTexture",F._matricesTexture,w),ae.setOptional(U,F,"batchingIdTexture"),ae.setValue(U,"batchingIdTexture",F._indirectTexture,w),ae.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&ae.setValue(U,"batchingColorTexture",F._colorsTexture,w));const Oi=z.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Dt.update(F,z,Ke),(ze||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,ae.setValue(U,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(sn.envMap.value=Mt,sn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(sn.envMapIntensity.value=N.environmentIntensity),ze&&(ae.setValue(U,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&wc(sn,Fi),nt&&k.fog===!0&&rt.refreshFogUniforms(sn,nt),rt.refreshMaterialUniforms(sn,k,V,$,f.state.transmissionRenderTarget[b.id]),Js.upload(U,po(yt),sn,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Js.upload(U,po(yt),sn,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ae.setValue(U,"center",F.center),ae.setValue(U,"modelViewMatrix",F.modelViewMatrix),ae.setValue(U,"normalMatrix",F.normalMatrix),ae.setValue(U,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const He=k.uniformsGroups;for(let An=0,Rn=He.length;An<Rn;An++){const go=He[An];D.update(go,Ke),D.bind(go,Ke)}}return Ke}function wc(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Ac(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,z){bt.get(b.texture).__webglTexture=N,bt.get(b.depthTexture).__webglTexture=z;const k=bt.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const z=bt.get(b);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,z=0){C=b,A=N,E=z;let k=!0,F=null,nt=!1,ht=!1;if(b){const Mt=bt.get(b);if(Mt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(Mt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Mt.__hasExternalTextures)w.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const St=b.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&bt.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ht=!0);const Ft=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?F=Ft[N][z]:F=Ft[N],nt=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?F=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[z]:F=Ft,R.copy(b.viewport),I.copy(b.scissor),O=b.scissorTest}else R.copy(mt).multiplyScalar(V).floor(),I.copy(Ct).multiplyScalar(V).floor(),O=Xt;if(wt.bindFramebuffer(U.FRAMEBUFFER,F)&&k&&wt.drawBuffers(b,F),wt.viewport(R),wt.scissor(I),wt.setScissorTest(O),nt){const Mt=bt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,z)}else if(ht){const Mt=bt.get(b.texture),Ut=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,z||0,Ut)}y=-1},this.readRenderTargetPixels=function(b,N,z,k,F,nt,ht){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){wt.bindFramebuffer(U.FRAMEBUFFER,xt);try{const Mt=b.texture,Ut=Mt.format,Ft=Mt.type;if(!Gt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&z>=0&&z<=b.height-F&&U.readPixels(N,z,k,F,It.convert(Ut),It.convert(Ft),nt)}finally{const Mt=C!==null?bt.get(C).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(b,N,z,k,F,nt,ht){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){const Mt=b.texture,Ut=Mt.format,Ft=Mt.type;if(!Gt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-k&&z>=0&&z<=b.height-F){wt.bindFramebuffer(U.FRAMEBUFFER,xt);const St=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),U.readPixels(N,z,k,F,It.convert(Ut),It.convert(Ft),0);const Zt=C!==null?bt.get(C).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Zt);const se=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await yh(U,se,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(St),U.deleteSync(se),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,z=0){b.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(b.image.width*k),nt=Math.floor(b.image.height*k),ht=N!==null?N.x:0,xt=N!==null?N.y:0;w.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,ht,xt,F,nt),wt.unbindTexture()},this.copyTextureToTexture=function(b,N,z=null,k=null,F=0){b.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let nt,ht,xt,Mt,Ut,Ft,St,Zt,se;const re=b.isCompressedTexture?b.mipmaps[F]:b.image;z!==null?(nt=z.max.x-z.min.x,ht=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,Mt=z.min.x,Ut=z.min.y,Ft=z.isBox3?z.min.z:0):(nt=re.width,ht=re.height,xt=re.depth||1,Mt=0,Ut=0,Ft=0),k!==null?(St=k.x,Zt=k.y,se=k.z):(St=0,Zt=0,se=0);const Oe=It.convert(N.format),$t=It.convert(N.type);let yt;N.isData3DTexture?(w.setTexture3D(N,0),yt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),yt=U.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const dn=U.getParameter(U.UNPACK_ROW_LENGTH),jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ke=U.getParameter(U.UNPACK_SKIP_PIXELS),ii=U.getParameter(U.UNPACK_SKIP_ROWS),ze=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);const Fi=b.isDataArrayTexture||b.isData3DTexture,ae=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const sn=bt.get(b),Oi=bt.get(N),He=bt.get(sn.__renderTarget),An=bt.get(Oi.__renderTarget);wt.bindFramebuffer(U.READ_FRAMEBUFFER,He.__webglFramebuffer),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Rn=0;Rn<xt;Rn++)Fi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(b).__webglTexture,F,Ft+Rn),b.isDepthTexture?(ae&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(N).__webglTexture,F,se+Rn),U.blitFramebuffer(Mt,Ut,nt,ht,St,Zt,nt,ht,U.DEPTH_BUFFER_BIT,U.NEAREST)):ae?U.copyTexSubImage3D(yt,F,St,Zt,se+Rn,Mt,Ut,nt,ht):U.copyTexSubImage2D(yt,F,St,Zt,se+Rn,Mt,Ut,nt,ht);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ae?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(yt,F,St,Zt,se,nt,ht,xt,Oe,$t,re.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,F,St,Zt,se,nt,ht,xt,Oe,re.data):U.texSubImage3D(yt,F,St,Zt,se,nt,ht,xt,Oe,$t,re):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,St,Zt,nt,ht,Oe,$t,re.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,St,Zt,re.width,re.height,Oe,re.data):U.texSubImage2D(U.TEXTURE_2D,F,St,Zt,nt,ht,Oe,$t,re);U.pixelStorei(U.UNPACK_ROW_LENGTH,dn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,ii),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze),F===0&&N.generateMipmaps&&U.generateMipmap(yt),wt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,z=null,k=null,F=0){return b.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0),ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,z,k,F)},this.initRenderTarget=function(b){bt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),wt.unbindTexture()},this.resetState=function(){A=0,E=0,C=null,wt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class eo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(t),this.density=e}clone(){return new eo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Um extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new P;class sr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class no extends wn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vi;const Gi=new P,xi=new P,Mi=new P,Si=new Lt,Hi=new Lt,vc=new ie,Is=new P,Wi=new P,Us=new P,pl=new Lt,Gr=new Lt,ml=new Lt;class xc extends pe{constructor(t=new no){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nm(e,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new sr(n,3,0,!1)),vi.setAttribute("uv",new sr(n,2,3,!1))}this.geometry=vi,this.material=t,this.center=new Lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xi.setFromMatrixScale(this.matrixWorld),vc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xi.multiplyScalar(-Mi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ns(Is.set(-.5,-.5,0),Mi,a,xi,i,r),Ns(Wi.set(.5,-.5,0),Mi,a,xi,i,r),Ns(Us.set(.5,.5,0),Mi,a,xi,i,r),pl.set(0,0),Gr.set(1,0),ml.set(1,1);let o=t.ray.intersectTriangle(Is,Wi,Us,!1,Gi);if(o===null&&(Ns(Wi.set(-.5,.5,0),Mi,a,xi,i,r),Gr.set(0,1),o=t.ray.intersectTriangle(Is,Us,Wi,!1,Gi),o===null))return;const l=t.ray.origin.distanceTo(Gi);l<t.near||l>t.far||e.push({distance:l,point:Gi.clone(),uv:qe.getInterpolation(Gi,Is,Wi,Us,pl,Gr,ml,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ns(s,t,e,n,i,r){Si.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Hi.x=r*Si.x-i*Si.y,Hi.y=i*Si.x+r*Si.y):Hi.copy(Si),s.copy(t),s.x+=Hi.x,s.y+=Hi.y,s.applyMatrix4(vc)}class Fm extends Ce{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Fe,h=Fe,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rr=new P,ar=new P,gl=new ie,Xi=new $a,Fs=new cs,Hr=new P,_l=new P;class Om extends pe{constructor(t=new oe,e=new Mc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)rr.fromBufferAttribute(e,i-1),ar.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=rr.distanceTo(ar);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=r,t.ray.intersectsSphere(Fs)===!1)return;gl.copy(i).invert(),Xi.copy(t.ray).applyMatrix4(gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),v=h.getX(_+1),S=Os(this,t,Xi,l,f,v);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Os(this,t,Xi,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=Os(this,t,Xi,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Os(this,t,Xi,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Os(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(rr.fromBufferAttribute(a,i),ar.fromBufferAttribute(a,r),e.distanceSqToSegment(rr,ar,Hr,_l)>n)return;Hr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Hr);if(!(l<t.near||l>t.far))return{distance:l,point:_l.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const vl=new P,xl=new P;class Bm extends Om{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)vl.fromBufferAttribute(e,i),xl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vl.distanceTo(xl);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zm extends wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ml=new ie,Ba=new $a,Bs=new cs,zs=new P;class km extends pe{constructor(t=new oe,e=new zm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=r,t.ray.intersectsSphere(Bs)===!1)return;Ml.copy(i).invert(),Ba.copy(t.ray).applyMatrix4(Ml);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,_=p;g<_;g++){const m=c.getX(g);zs.fromBufferAttribute(d,m),Sl(zs,m,l,i,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,_=p;g<_;g++)zs.fromBufferAttribute(d,g),Sl(zs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sl(s,t,e,n,i,r,a){const o=Ba.distanceSqToPoint(s);if(o<e){const l=new P;Ba.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class dr extends Ce{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,p=(a-h)/u;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],a=[],o=new P,l=new ie;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Se(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Se(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function io(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,i(a,o,u,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const ks=new P,Wr=new io,Xr=new io,qr=new io;class Gm extends Vm{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ks.subVectors(i[0],i[1]).add(i[0]),c=ks);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ks.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ks),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wr.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),Xr.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),qr.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Wr.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Xr.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),qr.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Wr.calc(l),Xr.calc(l),qr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class en extends oe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;v(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(p,2));function v(){const x=new P,L=new P;let A=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const y=[],M=C/r,R=M*(e-t)+t;for(let I=0;I<=i;I++){const O=I/i,H=O*l+o,X=Math.sin(H),W=Math.cos(H);L.x=R*X,L.y=-M*n+m,L.z=R*W,d.push(L.x,L.y,L.z),x.set(X,E,W).normalize(),u.push(x.x,x.y,x.z),p.push(O,1-M),y.push(g++)}_.push(y)}for(let C=0;C<i;C++)for(let y=0;y<r;y++){const M=_[y][C],R=_[y+1][C],I=_[y+1][C+1],O=_[y][C+1];(t>0||y!==0)&&(h.push(M,R,O),A+=3),(e>0||y!==r-1)&&(h.push(R,I,O),A+=3)}c.addGroup(f,A,0),f+=A}function S(x){const L=g,A=new Lt,E=new P;let C=0;const y=x===!0?t:e,M=x===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let I=0;I<=i;I++){const H=I/i*l+o,X=Math.cos(H),W=Math.sin(H);E.x=y*W,E.y=m*M,E.z=y*X,d.push(E.x,E.y,E.z),u.push(0,M,0),A.x=X*.5+.5,A.y=W*.5*M+.5,p.push(A.x,A.y),g++}for(let I=0;I<i;I++){const O=L+I,H=R+I;x===!0?h.push(H,H+1,O):h.push(H+1,H,O),C+=3}c.addGroup(f,C,x===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Li extends en{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Li(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class so extends oe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const S=new P,x=new P,L=new P;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],x),p(e[A+2],L),l(S,x,L,v)}function l(v,S,x,L){const A=L+1,E=[];for(let C=0;C<=A;C++){E[C]=[];const y=v.clone().lerp(x,C/A),M=S.clone().lerp(x,C/A),R=A-C;for(let I=0;I<=R;I++)I===0&&C===A?E[C][I]=y:E[C][I]=y.clone().lerp(M,I/R)}for(let C=0;C<A;C++)for(let y=0;y<2*(A-C)-1;y++){const M=Math.floor(y/2);y%2===0?(u(E[C][M+1]),u(E[C+1][M]),u(E[C][M])):(u(E[C][M+1]),u(E[C+1][M+1]),u(E[C+1][M]))}}function c(v){const S=new P;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(v),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const v=new P;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const x=m(v)/2/Math.PI+.5,L=f(v)/Math.PI+.5;a.push(x,1-L)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const S=a[v+0],x=a[v+2],L=a[v+4],A=Math.max(S,x,L),E=Math.min(S,x,L);A>.9&&E<.1&&(S<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),L<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,S){const x=v*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const v=new P,S=new P,x=new P,L=new P,A=new Lt,E=new Lt,C=new Lt;for(let y=0,M=0;y<r.length;y+=9,M+=6){v.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),A.set(a[M+0],a[M+1]),E.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),L.copy(v).add(S).add(x).divideScalar(3);const R=m(L);_(A,M+0,v,R),_(E,M+2,S,R),_(C,M+4,x,R)}}function _(v,S,x,L){L<0&&v.x===1&&(a[S]=v.x-1),x.x===0&&x.z===0&&(a[S]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.vertices,t.indices,t.radius,t.details)}}class or extends so{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new or(t.radius,t.detail)}}class ro extends oe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,p=new P,g=new Lt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const v=f+m,S=v,x=v+n+1,L=v+n+2,A=v+1;o.push(S,x,A),o.push(x,L,A)}}this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rs extends oe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new P,u=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const v=[],S=f/n;let x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(i+A*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(i+A*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+x,1-S),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){const S=h[f][v+1],x=h[f][v],L=h[f+1][v],A=h[f+1][v+1];(f!==0||a>0)&&p.push(S,x,A),(f!==n-1||l<Math.PI)&&p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lr extends oe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,d=new P,u=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,v=(i+1)*p+g;a.push(_,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Hm extends ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ce extends wn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wm extends wn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class ao extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xm extends ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yr=new ie,yl=new P,Tl=new P;class qm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),Tl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tl),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ym extends qm{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bl extends ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Ym}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Km extends ao{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=El(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=El();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function El(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);const Me=Math.PI*2,Pt=(s,t,e)=>s<t?t:s>e?e:s,Re=(s,t,e)=>s+(t-s)*e,$m=s=>(s=Pt(s,0,1),s*s*(3-2*s)),fe=(s,t,e,n)=>Re(s,t,1-Math.exp(-e*n)),wi=s=>(s=(s+Math.PI)%Me,s<0&&(s+=Me),s-Math.PI),Qs=(s,t)=>wi(s-t),jm=s=>s<0?-1:1,Je=(s,t=2)=>{if(!isFinite(s)||s<0)return"--:--.--";const e=Math.floor(s/60),n=s-e*60;return`${e}:${n.toFixed(t).padStart(t?3+t:2,"0")}`},wl=s=>{if(!isFinite(s))return"--";const t=s>=0?"+":"-",e=Math.abs(s);return`${t}${e.toFixed(2)}`};function Jn(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Sc(s=1){const t=new Uint8Array(512),e=Jn(s),n=new Uint8Array(256);for(let a=0;a<256;a++)n[a]=a;for(let a=255;a>0;a--){const o=Math.floor(e()*(a+1)),l=n[a];n[a]=n[o],n[o]=l}for(let a=0;a<512;a++)t[a]=n[a&255];const i=a=>a*a*a*(a*(a*6-15)+10),r=a=>t[a]/255*2-1;return function(a,o){const l=Math.floor(a)&255,c=Math.floor(o)&255,h=a-Math.floor(a),d=o-Math.floor(o),u=i(h),p=i(d),g=r(t[l]+c),_=r(t[l]+c+1),m=r(t[l+1]+c),f=r(t[l+1]+c+1);return Re(Re(g,m,u),Re(_,f,u),p)}}const yi=[[0,400,6,30,0],[0,320,6,30,0],[8,245,8,30,.02],[35,180,11,28,.05],[85,130,14,26,.09],[150,100,15,24,.07],[220,88,16,24,.05],[290,78,17,24,.03],[355,52,15,26,-.04],[405,8,11,28,-.06],[440,-50,5,30,0],[460,-100,3,30,0],[485,-160,0,30,0],[500,-220,0,28,.04],[495,-280,2,26,.09],[460,-325,5,26,.07],[400,-350,8,26,.04],[330,-345,10,26,0],[265,-315,10,28,0],[230,-260,7,32,0],[240,-195,1,40,0],[250,-135,-1,46,0],[235,-75,0,42,0],[195,-35,2,34,0],[135,-20,4,32,0],[65,-50,5,30,0],[-15,-80,6,30,0],[-100,-100,8,28,.04],[-180,-85,10,26,.06],[-250,-40,13,24,.05],[-295,25,14,24,.03],[-305,95,10,26,-.02],[-280,165,8,28,-.04],[-235,225,7,30,-.02],[-170,280,6,30,0],[-95,325,6,30,0],[-35,375,6,30,0]],Jm=2.2,xe={road:new _t("#4b3a35"),roadAlt:new _t("#5a453d"),shoulder:new _t("#a9825c"),line:new _t("#e8d9b5"),dash:new _t("#f0d9a2"),rockLow:new _t("#8e3f2c"),rockMid:new _t("#b55a38"),rockHigh:new _t("#d48252"),rockTop:new _t("#e6a878"),rockDark:new _t("#6b2f24")};function rn(s,t,e,n){return s.copy(t).lerp(e,n)}function tr(s,t,e){const n=document.createElement("canvas");n.width=s,n.height=t;const i=n.getContext("2d");e(i,s,t);const r=new dr(n);return r.colorSpace=De,r.anisotropy=4,r}class Qm{constructor(t){this.scene=t,this.group=new ye,this.group.name="track",t.add(this.group),this.rng=Jn(1337),this.noise=Sc(9241),this.ramps=[],this.gates=[],this.wallGaps=[],this.tunnelRanges=[],this.arches=[],this.decorColliders=[],this._buildSpline(),this._buildFeatures(),this._buildRoad(),this._buildRamps(),this._buildWalls(),this._buildGates(),this._buildTunnels(),this._buildArches(),this._buildRoadside(),this._buildMinimap()}_buildSpline(){const t=yi.map(i=>new P(i[0],i[2],i[1]));this.curve=new Gm(t,!0,"catmullrom",.5);const e=this.curve.getLength();this.count=Math.max(256,Math.round(e/Jm)),this.step=this.curve.getLength()/this.count,this.length=this.step*this.count,this.samples=[];const n=yi.map(i=>new P(i[0],i[2],i[1]));for(let i=0;i<this.count;i++){const r=i/this.count,a=this.curve.getPointAt(r),o=this.curve.getTangentAt(r).normalize(),l=new P(o.z,0,-o.x).normalize();let c=1/0,h=1/0,d=0,u=0;for(let v=0;v<n.length;v++){const S=a.distanceToSquared(n[v]);S<c?(h=c,u=d,c=S,d=v):S<h&&(h=S,u=v)}const p=1/(Math.sqrt(c)+.001),g=1/(Math.sqrt(h)+.001),_=p/(p+g),m=Re(yi[d][3],yi[u][3],_),f=Re(yi[d][4],yi[u][4],_);this.samples.push({i,s:i*this.step,pos:a,tan:o,right:l,width:m,bank:f,gap:!1,tunnel:!1,stripNoise:this.noise(i*.21,3.7)})}this._sampleAt=i=>{i=(i%this.length+this.length)%this.length;const r=i/this.step,a=Math.floor(r)%this.count,o=(a+1)%this.count,l=r-Math.floor(r);return{i0:a,i1:o,t:l}}}findS(t,e){let n=0,i=1/0;for(const r of this.samples){const a=(r.pos.x-t)**2+(r.pos.z-e)**2;a<i&&(i=a,n=r.s)}return n}smoothRange(t,e){return[t-e,t+e]}markGapRange(t,e){const n=this.length;let i=t;for(;;){const r=Math.round(i/this.step)%this.count;if(this.samples[(r+this.count)%this.count].gap=!0,i+=this.step,(t<e?i>e:i>e+n)||i>t+n)break}}getSample(t){const{i0:e,i1:n,t:i}=this._sampleAt(t);return{a:this.samples[e],b:this.samples[n],t:i}}samplePos(t,e=0,n=new P){const{a:i,b:r,t:a}=this.getSample(t),o=Re(i.pos.x,r.pos.x,a),l=Re(i.pos.z,r.pos.z,a),c=Re(i.pos.y,r.pos.y,a),h=Re(i.right.x,r.right.x,a),d=Re(i.right.z,r.right.z,a);Re(i.width,r.width,a);const u=Re(i.bank,r.bank,a);return n.set(o+h*e,c+Math.tan(u)*e,l+d*e),n}surfaceAt(t,e){const{a:n,b:i,t:r}=this.getSample(t);if(n.gap||i.gap)return null;const a=Re(n.width,i.width,r);if(Math.abs(e)>a/2+2.4)return null;const o=Re(n.bank,i.bank,r);let l=Re(n.pos.y,i.pos.y,r)+Math.tan(o)*e;for(const c of this.ramps){const h=(t-c.s+this.length*1.5)%this.length-this.length*.5;if(Math.abs(h)>c.length/2)continue;const d=e-c.lat;if(Math.abs(d)>c.width/2)continue;const u=Pt((h+c.length/2)/c.length,0,1),p=$m(Pt((c.width/2-Math.abs(d))/1.2,0,1));l+=c.height*Math.pow(u,1.15)*p}return l}isGap(t){const{a:e,b:n,t:i}=this.getSample(t);return e.gap||n.gap}nearest(t,e,n=null){const i=this.count;let r=0,a=i-1;if(n!=null){const g=Math.round(n/this.step),_=34;r=g-_,a=g+_}let o=null,l=1/0;for(let g=r;g<=a;g++){const _=this.samples[(g%i+i)%i],m=t-_.pos.x,f=e-_.pos.z,v=m*m+f*f;v<l&&(l=v,o=_)}o||(o=this.samples[0]);const c=t-o.pos.x,h=e-o.pos.z;let d=c*o.tan.x+h*o.tan.z;d=Pt(d,-this.step*1.2,this.step*1.2);const u=c*o.right.x+h*o.right.z;let p=o.s+d;return p=(p%this.length+this.length)%this.length,{s:p,lat:u,dist:Math.sqrt(l),sample:o}}nearestGlobal(t,e){return this.nearest(t,e,0)}clampToRoad(t,e){const{a:n}=this.getSample(t),i=n.width/2-1.4;return Pt(e,-i,i)}startPose(){const t=((this.gateS[0]-20)%this.length+this.length)%this.length,e=this.samplePos(t,0),{a:n}=this.getSample(t);return{s:t,pos:e,yaw:Math.atan2(n.tan.x,n.tan.z)}}_buildFeatures(){const t=this.findS(456,-88),e=this.findS(477,-136);this.gap={start:t,end:e},this.markGapRange(t,e);const n=this.findS(494,-262),i=this.findS(462,-318);this.tunnelRanges.push({start:n,end:i,length:8});for(let u=n;u<i;u+=this.step)this.samples[Math.round(u/this.step)%this.count].tunnel=!0;const r=7;this.ramps.push({s:this.findS(460,-100)-13,lat:0,width:15,length:22,height:3.4,gapKicker:!0}),this.ramps.push({s:this.findS(392,22),lat:2.5,width:11,length:16,height:2.1}),this.ramps.push({s:this.findS(352,-348),lat:r,width:11,length:17,height:3.2,shortCut:!0}),this.ramps.push({s:this.findS(248,-112),lat:0,width:13,length:18,height:2.4,island:!0});const a=this.gap.start-30,o=this.gap.end+34;this.wallGaps.push({a,b:o,sides:"both"});const l=this.findS(370,-352)-18,c=this.findS(300,-332)+26;this.wallGaps.push({a:l,b:c,sides:"right"}),this.wallGaps.push({a:this.findS(246,-170),b:this.findS(232,-90),sides:"both"}),this.gateS=[];const h=7;for(let u=0;u<h;u++){let p=this.length*u/h,g=0;for(;this.isGap(p)&&g<40;)p=(p+6)%this.length,g++;this.gateS.push(p)}const d=4;this.gateS=this.gateS.slice(d).concat(this.gateS.slice(0,d))}_wallBlocked(t,e){const n=(e%this.length+this.length)%this.length;for(const i of this.wallGaps)if(i.sides==="both"||i.sides===t){const r=this.length,a=(i.a%r+r)%r,o=(i.b%r+r)%r;if(a<o){if(n>=a&&n<=o)return!0}else if(n>=a||n<=o)return!0}return!1}_buildRoad(){const t=this.count,e=[-1.12,-1.02,-.9,-.45,0,.45,.9,1.02,1.12],n=[],i=[],r=[],a=new _t,o=[];for(let _=0;_<t;_++){const m=this.samples[_],f=[];for(let v=0;v<e.length;v++){const S=e[v]*m.width/2,x=m.pos.x+m.right.x*S,L=m.pos.z+m.right.z*S,A=m.pos.y+Math.tan(m.bank)*S+.02;f.push([x,A,L]);const E=Math.abs(e[v]),C=m.stripNoise*.035;E>1?rn(a,xe.shoulder,xe.rockLow,.15+C):E>.88?rn(a,xe.line,xe.line,0):E<.02?rn(a,xe.road,xe.roadAlt,.55+C):rn(a,xe.road,xe.roadAlt,.35+C),t0(i,a.r,a.g,a.b)}o.push(f)}for(let _=0;_<t;_++){const m=(_+1)%t,f=this.samples[_],v=this.samples[m];if(!(f.gap||v.gap))for(let S=0;S<e.length-1;S++){const x=_*e.length+S,L=m*e.length+S;r.push(x,L,x+1),r.push(x+1,L,L+1)}}for(let _=0;_<t;_++)for(let m=0;m<e.length;m++)n.push(...o[_][m]);const l=new oe;l.setAttribute("position",new Ht(n,3)),l.setAttribute("color",new Ht(i,3)),l.setIndex(r),l.computeVertexNormals();const c=new ce({vertexColors:!0,roughness:.96,metalness:0,side:Ue,flatShading:!0}),h=new At(l,c);h.receiveShadow=!0,h.name="road",this.group.add(h),this._buildPaint(),this._buildEdgeLights();const d=this.samplePos((this.gap.start+this.gap.end)/2,0),u=new nn(120,120,1,1);u.rotateX(-Math.PI/2);const p=new ce({color:"#3a1f1a",roughness:1}),g=new At(u,p);g.position.set(d.x,d.y-26,d.z),this.group.add(g)}_buildPaint(){const t=[],e=this.count;for(let _=0;_<e;_+=4){const m=this.samples[_];if(m.gap)continue;const f=m.s,v=m.width;for(const S of[-1,1]){const x=S*(v/2)*.955,L=this.samplePos(f-1.4,x-.24),A=this.samplePos(f-1.4,x+.24),E=this.samplePos(f+1.4,x+.24),C=this.samplePos(f+1.4,x-.24);t.push([L,A,E,C])}}const n=new oe,i=[],r=[];let a=0;for(const _ of t){for(const m of _)i.push(m.x,m.y+.035,m.z);r.push(a,a+1,a+2,a,a+2,a+3),a+=4}n.setAttribute("position",new Ht(i,3)),n.setIndex(r),n.computeVertexNormals();const o=new ce({color:"#f4dfae",emissive:"#c79a55",emissiveIntensity:.24,roughness:.7,flatShading:!0}),l=new At(n,o);l.receiveShadow=!0,this.group.add(l);const c=[];for(let _=0;_<e;_+=5){const m=this.samples[_];if(m.gap)continue;const f=m.s,v=this.samplePos(f-2.2,-.22),S=this.samplePos(f-2.2,.22),x=this.samplePos(f+2.2,.22),L=this.samplePos(f+2.2,-.22);c.push([v,S,x,L])}const h=new oe,d=[],u=[];let p=0;for(const _ of c){for(const m of _)d.push(m.x,m.y+.03,m.z);u.push(p,p+1,p+2,p,p+2,p+3),p+=4}h.setAttribute("position",new Ht(d,3)),h.setIndex(u),h.computeVertexNormals();const g=new ce({color:"#e8cf99",roughness:.8,flatShading:!0});this.group.add(new At(h,g)),this._buildArrows()}_buildArrows(){const t=[];for(let i=34;i<this.length;i+=86){let r=!1;for(let d=-6;d<=10;d+=2)this.isGap(i+d)&&(r=!0);if(r)continue;const a=this.samplePos(i+5.5,0),o=this.samplePos(i-1.5,-4.4),l=this.samplePos(i-1.5,4.4),c=this.samplePos(i+1.2,0),h=.055;t.push(a.x,a.y+h,a.z,c.x,c.y+h,c.z,o.x,o.y+h,o.z,a.x,a.y+h,a.z,l.x,l.y+h,l.z,c.x,c.y+h,c.z)}const e=new oe;e.setAttribute("position",new Ht(t,3)),e.computeVertexNormals();const n=new At(e,new Be({color:"#ffd395",transparent:!0,opacity:.38,depthWrite:!1,side:Ue}));n.renderOrder=1,this.group.add(n)}_buildEdgeLights(){const t=[];for(const r of[-1,1])for(let a=0;a<=this.count;a++){const o=this.samples[a%this.count];if(a<this.count&&!o.gap){const l=r*(o.width/2)*.985,c=this.samplePos(o.s,l);t.push(c.x,c.y+.07,c.z)}}const e=new oe,n=[];for(let r=0;r<this.count;r++){const a=this.samples[r],o=this.samples[(r+1)%this.count];if(!(a.gap||o.gap))for(const l of[-1,1]){const c=l*(a.width/2)*.985,h=l*(o.width/2)*.985,d=this.samplePos(a.s,c),u=this.samplePos(o.s,h);n.push(d.x,d.y+.08,d.z,u.x,u.y+.08,u.z)}}e.setAttribute("position",new Ht(n,3));const i=new Mc({color:"#ffb257",transparent:!0,opacity:.55});this.group.add(new Bm(e,i))}_buildRamps(){this.rampMeshes=[];for(const t of this.ramps){const e=new oe,n=10,i=[],r=[],a=new _t;for(let g=0;g<=n;g++){const _=g/n,m=t.s-t.length/2+t.length*_,f=t.height*Math.pow(_,1.15);for(const v of[-1,1]){const S=t.lat+v*t.width/2,x=this.samplePos(m,S);i.push(x.x,x.y+.04,x.z),i.push(x.x,x.y+f+.06,x.z),rn(a,xe.roadAlt,xe.rockMid,.15+_*.4),r.push(a.r,a.g,a.b),rn(a,xe.line,xe.rockHigh,_),r.push(a.r,a.g,a.b)}}const o=[];for(let g=0;g<n;g++){const _=g*4,m=(g+1)*4;o.push(_+1,m+1,_+3,_+3,m+1,m+3),o.push(_,_+1,m,m,_+1,m+1),o.push(_+2,m+2,_+3,_+3,m+2,m+3)}const l=n*4;o.push(l,l+1,l+2,l+2,l+1,l+3),e.setAttribute("position",new Ht(i,3)),e.setAttribute("color",new Ht(r,3)),e.setIndex(o),e.computeVertexNormals();const c=new ce({vertexColors:!0,roughness:.9,side:Ue,flatShading:!0}),h=new At(e,c);h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),this.rampMeshes.push(h);const d=this.samplePos(t.s-t.length/2-2,t.lat),u=t.shortCut?"CANYON CUT  ▲":t.gapKicker?"BIG AIR  ▲":"KICKER  ▲",p=e0(u,t.shortCut?"#ffd166":"#f7e3bb",.8);p.position.set(d.x,d.y+2.1,d.z),this.group.add(p),this.arches.push(p)}}_buildWalls(){const t=[{out:.7,up:.4},{out:1.6,up:4.5},{out:3,up:9.5},{out:5.2,up:14.5},{out:7.4,up:19}],e=xe.rockLow,n=xe.rockMid,i=xe.rockHigh,r=xe.rockTop,a=xe.rockDark;for(const o of[-1,1]){const l=[],c=[],h=new _t,d=[];for(let v=0;v<this.count;v+=2){const S=this.samples[v];if(this._wallBlocked(o<0?"left":"right",S.s)){d.push(null);continue}const x=S.width/2,L=[];for(let A=0;A<t.length;A++){const E=t[A],C=this.noise(v*.09+A*3.1,o*2.2)*(.5+A*.85),y=x+E.out+C,M=E.up+this.noise(v*.13+A,o*9.1)*(A*1.4),R=o*y,I=S.pos.x+S.right.x*R,O=S.pos.z+S.right.z*R,H=S.pos.y+Math.tan(S.bank)*R+M;L.push([I,H,O]);const X=A/(t.length-1);X<.2?rn(h,a,e,.4+S.stripNoise*.2):X<.5?rn(h,e,n,.4):X<.8?rn(h,n,i,.5):rn(h,i,r,.6);const W=.9+this.noise(v*.4,A*2.2)*.16;c.push(h.r*W,h.g*W,h.b*W)}d.push(L)}d.forEach(v=>v&&v.forEach(S=>l.push(...S)));const u=new Map;let p=0;d.forEach((v,S)=>{v&&(u.set(S,p),p+=t.length)});const g=[];for(let v=0;v<d.length;v++){const S=d[v],x=d[(v+1)%d.length];if(!S||!x)continue;const L=u.get(v),A=u.get((v+1)%d.length);if(!(L===void 0||A===void 0))for(let E=0;E<t.length-1;E++)g.push(L+E,A+E,L+E+1,L+E+1,A+E,A+E+1)}const _=new oe;_.setAttribute("position",new Ht(l,3)),_.setAttribute("color",new Ht(c,3)),_.setIndex(g),_.computeVertexNormals();const m=new ce({vertexColors:!0,roughness:1,metalness:0,flatShading:!0,side:Ue}),f=new At(_,m);f.castShadow=!0,f.receiveShadow=!0,this.group.add(f),this[o<0?"wallLeft":"wallRight"]=f}}_buildGates(){const t=["#ffce6e","#ff9d4d","#ffce6e"];this.gateS.forEach((e,n)=>{const i=new ye,r=this.samplePos(e,0),a=this.getSample(e).a,o=Math.atan2(a.tan.x,a.tan.z);i.position.copy(r),i.rotation.y=o;const l=a.width,c=new Ge(1.1,9,1.1),h=new ce({color:"#3e2b27",roughness:.8,metalness:.2}),d=new Be({color:"#ffc46b"});for(const m of[-1,1]){const f=new At(c,h);f.position.set(m*(l/2+.6),4.4,0),f.castShadow=!0,i.add(f);const v=new At(new Ge(.24,7.4,.24),d);v.position.set(m*(l/2+.6),4.4,-.62),i.add(v)}const u=new At(new Ge(l+2.8,1.4,1.4),h);u.position.set(0,9,0),u.castShadow=!0,i.add(u);const p=n===0?tr(1024,160,(m,f,v)=>{m.fillStyle="#2a1b17",m.fillRect(0,0,f,v),m.fillStyle="#ffce6e",m.fillRect(0,0,f,8),m.fillRect(0,v-8,f,8),m.font='900 92px "Arial Black", sans-serif',m.textAlign="center",m.textBaseline="middle",m.fillStyle="#f7e3bb",m.fillText("SUNBREAK  START",f/2,v/2-2)}):tr(1024,160,(m,f,v)=>{m.fillStyle="#2a1b17",m.fillRect(0,0,f,v);const S=t[n%t.length];m.fillStyle=S,m.fillRect(0,0,f,7),m.fillRect(0,v-7,f,7),m.font='900 72px "Arial Black", sans-serif',m.textAlign="center",m.textBaseline="middle",m.fillStyle="#f7e3bb",m.fillText(`CHECKPOINT  ${n}`,f/2,v/2+2);for(let x=0;x<6;x++)m.fillStyle=x%2?"#ffce6e":"#b55a38",m.fillRect(f-210+x*30,40,18,80)}),g=new nn(l+2.2,2),_=new Be({map:p,transparent:!0,side:bn});for(const m of[-1,1]){const f=new At(g,_);f.position.set(0,7.7,m*.03),f.rotation.y=m<0?Math.PI:0,i.add(f)}if(n===0){const m=[];for(let f=0;f<5;f++){const v=new Be({color:"#42211b"}),S=new At(new rs(.46,12,10),v);S.position.set((f-2)*1.7,6.25,.1),i.add(S),m.push(v)}this.startLights=m}i.name=`gate-${n}`,this.group.add(i),this.gates.push({s:e,idx:n,group:i,emissive:d})})}setStartLights(t,e=!1){this.startLights&&this.startLights.forEach((n,i)=>{const r=i<t;n.color.set(r?e?"#8dffb0":"#ff4a2a":"#42211b")})}_buildTunnels(){const t=new ce({color:"#8a4630",roughness:1,flatShading:!0}),e=new Be({color:"#ffd08a"});this.tunnelLights=[];for(const n of this.tunnelRanges){const i=Math.max(2,Math.floor((n.end-n.start)/9));for(let r=0;r<=i;r++){const a=n.start+(n.end-n.start)*r/i,o=this.samplePos(a,0),l=this.getSample(a).a,c=Math.atan2(l.tan.x,l.tan.z),h=l.width/2+3.5,d=new At(new lr(h,2.4,5,12,Math.PI),t);d.position.set(o.x,o.y-1.2,o.z),d.rotation.y=c,d.castShadow=!0,d.receiveShadow=!0,this.group.add(d),this.tunnelLights.push(d);for(const u of[-1,1]){const p=this.samplePos(a,u*(l.width/2+.9)),g=new At(new Ge(.35,1.4,.35),e);g.position.set(p.x,p.y+4.2,p.z),g.rotation.y=c,this.group.add(g)}}for(let r=0;r<i;r++){const a=n.start+(n.end-n.start)*(r+.5)/i,o=this.samplePos(a,0),l=this.getSample(a).a,c=Math.atan2(l.tan.x,l.tan.z),h=new At(new Ge(l.width+12,5,9),t);h.position.set(o.x,o.y+11,o.z),h.rotation.y=c,h.castShadow=!0,this.group.add(h)}}}_buildArches(){const t=[{x:96,z:-29,radius:17},{x:246,z:-118,radius:20}],e=new ce({color:"#b4603c",roughness:1,flatShading:!0});for(const o of t){const l=this.findS(o.x,o.z),c=this.samplePos(l,0),h=this.getSample(l).a,d=Math.atan2(h.tan.x,h.tan.z),u=new At(new lr(o.radius,3,6,14,Math.PI),e);u.position.set(c.x,c.y-.5,c.z),u.rotation.y=d,u.castShadow=!0,u.receiveShadow=!0,this.group.add(u)}const n=this.findS(246,-140),i=this.samplePos(n,0),r=new Li(10,34,7,3);r.translate(0,16,0);const a=new At(r,e);a.position.set(i.x,i.y-6,i.z),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a),this.island=a,this.decorColliders.push({x:i.x,z:i.z,r:10,y:i.y})}_buildRoadside(){const t=tr(512,256,(l,c,h)=>{l.fillStyle="#2a1b17",l.fillRect(0,0,c,h),l.fillStyle="#ffce6e",l.fillRect(0,0,c,10),l.fillRect(0,h-10,c,10),l.fillStyle="#f7e3bb",l.font='900 62px "Arial Black", sans-serif',l.textAlign="center",l.fillText("STAY",c/2,95),l.fillStyle="#ff9d4d",l.fillText("FAST",c/2,170),l.font="700 30px sans-serif",l.fillStyle="#e8cfa2",l.fillText("SUNBREAK CANYON",c/2,220)}),e=new ce({map:t,roughness:.8,emissive:"#3a2015",emissiveIntensity:.3,side:Ue}),n=new ce({color:"#4a3028",roughness:.9}),i=this.findS(242,-205);for(const[l,c]of[[0,1],[260,-1]]){const h=i+l,d=this.getSample(h).a,u=c*(d.width/2-1),p=this.samplePos(h,u),g=new At(new nn(5.2,2.6),e);g.position.set(p.x,p.y+4.6,p.z),g.rotation.y=Math.atan2(d.tan.x,d.tan.z),this.group.add(g);for(const _ of[-1,1]){const m=new At(new Ge(.28,5.2,.28),n),f=this.samplePos(h,u+_*1.7);m.position.set(f.x,p.y+2.6,f.z),this.group.add(m)}}const r=new ce({color:"#6d3325",roughness:1,flatShading:!0}),a=Jn(77),o=[[this.findS(210,92),1],[this.findS(475,-250),-1],[this.findS(-210,245),1],[this.findS(-265,40),-1],[this.findS(70,-55),1]];for(const[l,c]of o){const h=this.getSample(l).a,d=c*(h.width/2+2.2),u=this.samplePos(l,d),p=4+a()*5,g=new en(.8,1.25,p,6,2),_=new At(g,r);_.position.set(u.x,u.y+p/2,u.z),_.rotation.y=a()*Me,_.castShadow=!0,this.group.add(_),this.decorColliders.push({x:u.x,z:u.z,r:1.35,y:u.y})}}_buildMinimap(){this.mapPoints=[];for(let t=0;t<this.length;t+=16){const e=this.samplePos(t,0);this.mapPoints.push({x:e.x,z:e.z})}}}function t0(s,t,e,n){s.push(t,e,n)}function e0(s,t="#ffffff",e=1){const n=tr(512,128,(a,o,l)=>{a.clearRect(0,0,o,l),a.fillStyle="rgba(30,18,14,0.82)",a.beginPath(),a.roundRect(6,20,o-12,l-40,18),a.fill(),a.strokeStyle=t,a.lineWidth=5,a.stroke(),a.fillStyle=t,a.font='900 52px "Arial Black", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(s,o/2,l/2+2)}),i=new no({map:n,transparent:!0,depthWrite:!1}),r=new xc(i);return r.scale.set(6*e,1.5*e,1),r}class n0{constructor(t,e){this.scene=t,this.track=e,this.rng=Jn(4242),this.noise=Sc(771),this.buildSky(),this.buildLights(),this.buildTerrain(),this.buildMesas(),this.buildFlora(),this.buildDustDevils()}buildSky(){const t=new P(-.48,.44,-.76).normalize();this.sunDir=t;const e=new rs(1600,32,20),n=new ve({side:Ne,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:t},topColor:{value:new _t("#27384c")},midColor:{value:new _t("#8d5c57")},horizonColor:{value:new _t("#f3a15d")},hazeColor:{value:new _t("#d8754a")}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vDir;
        uniform vec3 sunDir;
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 hazeColor;
        void main() {
          float h = clamp(vDir.y, -1.0, 1.0);
          vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
          col = mix(col, topColor, smoothstep(0.22, 0.85, h));
          // dusty haze band low on the horizon
          col = mix(col, hazeColor, smoothstep(0.16, -0.02, h) * 0.55);
          // sun glow
          float sd = max(dot(normalize(vDir), sunDir), 0.0);
          col += vec3(1.0, 0.38, 0.14) * pow(sd, 14.0) * 0.86;
          col += vec3(1.0, 0.72, 0.38) * pow(sd, 240.0) * 2.1;
          // sun disc
          col += vec3(1.0, 0.95, 0.8) * smoothstep(0.9992, 0.99975, sd) * 2.2;
          // faint warm clouds
          float band = sin(vDir.x * 5.0 + vDir.z * 3.0) * 0.5 + 0.5;
          float c = smoothstep(0.045, 0.0, abs(h - 0.1)) * band * 0.10;
          col = mix(col, vec3(1.0, 0.86, 0.7), c);
          gl_FragColor = vec4(col, 1.0);
        }
      `}),i=new At(e,n);i.frustumCulled=!1,this.scene.add(i),this.sky=i,this.scene.fog=new eo(new _t("#c96849"),82e-5)}buildLights(){const t=new Xm("#ffd0a0","#3b1b1a",1.08);this.scene.add(t);const e=new bl("#ffbd78",3.5);e.position.copy(this.sunDir).multiplyScalar(260),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const n=170;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,e.shadow.camera.near=20,e.shadow.camera.far=620,e.shadow.bias=-7e-4,e.shadow.normalBias=.35,this.scene.add(e),this.scene.add(e.target),this.sun=e,this.ambient=new Km("#d65e45",.2),this.scene.add(this.ambient);const i=new bl("#b83f32",.48);i.position.set(.4,-.5,.6),this.scene.add(i)}updateSun(t){t&&(this.sun.target.position.set(t.x,t.y,t.z),this.sun.position.set(t.x,t.y,t.z).addScaledVector(this.sunDir,300),this.sun.target.updateMatrixWorld(),this.sky.position.set(t.x,0,t.z))}trackDistance(t,e){let n=1/0,i=null;const r=this.track.samples;for(let a=0;a<r.length;a+=5){const o=r[a],l=(o.pos.x-t)**2+(o.pos.z-e)**2;l<n&&(n=l,i=o)}return{dist:Math.sqrt(n),sample:i}}buildTerrain(){const n=new nn(2e3,2e3,110,110);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=[],a=new _t,o=new _t("#c1865a"),l=new _t("#a96942"),c=new _t("#8f5238"),h=new _t("#a6482f"),d=new _t("#7d3626");for(let g=0;g<i.count;g++){const _=i.getX(g),m=i.getZ(g),f=this.trackDistance(_,m),v=f.sample,S=f.dist,x=v?v.width/2:14,L=v?v.pos.y:0,A=this.noise(_*.008,m*.008),E=this.noise(_*.031,m*.031);let C;if(S<x+26)C=L-7.2+E*1.4-Pt((x+26-S)/26,0,1)*.8;else{const R=Pt((S-x-26)/120,0,1);C=L-7.2+R*R*38+A*16+E*2.6}const y=Math.abs(this.noise(_*.0035+4,m*.0035-8));S>x+20&&(C-=i0(y,.06)*5),i.setY(g,C);const M=Pt((C-L+9)/30+(S-x)/160+E*.15,0,1);a.copy(o).lerp(l,Pt(A*.5+.5,0,1)),a.lerp(c,Pt(E*.4+.3,0,1)*.45),a.lerp(h,Pt(M*1.5,0,1)),a.lerp(d,Pt((M-.55)*1.4,0,1)),S<x+3&&a.lerp(l,.35),r.push(a.r,a.g,a.b)}n.setAttribute("color",new Ht(r,3)),n.computeVertexNormals();const u=new ce({vertexColors:!0,roughness:1,metalness:0,flatShading:!0}),p=new At(n,u);p.receiveShadow=!0,p.name="terrain",this.scene.add(p),this.terrain=p}buildMesas(){const t=Jn(818);this.mesas=new ye,this.scene.add(this.mesas);const e=["#9c422c","#b05637","#c06c44","#853826","#d18a5d"],n=[];let i=0;for(;n.length<26&&i<900;){i++;const a=t()*Me,o=190+t()*640,l=Math.cos(a)*o,c=Math.sin(a)*o;if(this.trackDistance(l,c).dist<85)continue;let d=!1;for(const u of n)(u.x-l)**2+(u.z-c)**2<110*110&&(d=!0);d||n.push({x:l,z:c})}for(const a of n){const o=this.trackDistance(a.x,a.z),l=(o.sample?o.sample.pos.y:0)-8+t()*6,c=30+t()*85,h=22+t()*46,d=5+Math.floor(t()*3),u=new ye,p=2+Math.floor(t()*3);for(let g=0;g<p;g++){const _=1-g/(p+.6),m=h*(.65+_*.55),f=c/p*(.7+t()*.6),v=new en(m*(.78+t()*.12),m,f,d,2),S=new ce({color:e[Math.floor(t()*e.length)],roughness:1,flatShading:!0}),x=new At(v,S);x.position.set(0,c/p*g+f/2,0),x.rotation.y=t()*Me,x.castShadow=!0,x.receiveShadow=!0,u.add(x)}for(let g=0;g<3;g++){const _=4+t()*9,m=new or(_,0),f=new At(m,new ce({color:e[Math.floor(t()*e.length)],roughness:1,flatShading:!0})),v=t()*Me;f.position.set(Math.cos(v)*(h+4),_*.5,Math.sin(v)*(h+4)),f.rotation.set(t()*Me,t()*Me,t()*Me),f.castShadow=!0,u.add(f)}u.position.set(a.x,l,a.z),this.mesas.add(u)}const r=new ce({color:"#8e3c29",roughness:1,flatShading:!0});for(let a=0;a<14;a++){const o=a/14*this.track.length+40,l=this.track.getSample(o).a,c=a%2?1:-1,h=this.track.samplePos(o,c*(l.width/2+18)),d=16+t()*30,u=new Li(9+t()*12,d,6,2);u.translate(0,d/2,0);const p=new At(u,r);p.position.set(h.x,h.y-12,h.z),p.rotation.y=t()*Me,p.castShadow=!0,p.receiveShadow=!0,this.mesas.add(p)}}buildFlora(){const t=Jn(9911);this.flora=new ye,this.scene.add(this.flora);const e=new ce({color:"#4c6b4f",roughness:.9,flatShading:!0}),n=new ce({color:"#e6b54a",roughness:.8,emissive:"#7a4a13",emissiveIntensity:.2}),i=new ce({color:"#8a4530",roughness:1,flatShading:!0});for(let a=0;a<90;a++){const o=t()*Me,l=40+t()*520,c=Math.cos(o)*l,h=Math.sin(o)*l,d=this.trackDistance(c,h);if(d.dist<d.sample.width/2+7||d.dist>120)continue;this.track.samplePos(d.sample.s,(c-d.sample.pos.x)*d.sample.right.x+(h-d.sample.pos.z)*d.sample.right.z);const u=this.terrainHeightAt(c,h);if(t()<.45){const p=new ye,g=3+t()*4.5,_=new At(new en(.42,.55,g,6),e);_.position.y=g/2,_.castShadow=!0,p.add(_);const m=1+Math.floor(t()*3);for(let v=0;v<m;v++){const S=g*(.35+t()*.25),x=new At(new en(.28,.32,S,5),e);x.position.set((t()-.5)*1.4,g*(.42+t()*.18),0),x.rotation.z=(t()-.5)*.7,x.castShadow=!0,p.add(x)}const f=new At(new rs(.36,6,5),n);f.position.y=g+.2,p.add(f),p.position.set(c,u,h),p.rotation.y=t()*Me,this.flora.add(p)}else{const p=1.2+t()*4.2,g=new At(new or(p,0),i);g.position.set(c,u+p*.4,h),g.rotation.set(t()*Me,t()*Me,t()*Me),g.castShadow=!0,g.receiveShadow=!0,this.flora.add(g)}}const r=new ce({color:"#8f7a45",roughness:1,flatShading:!0});for(let a=0;a<60;a++){const o=t()*this.track.length,l=this.track.getSample(o).a;if(this.track.isGap(o))continue;const h=(t()<.5?-1:1)*(l.width/2+3+t()*12),d=this.track.samplePos(o,h),u=new ye;for(let p=0;p<5;p++){const g=new Li(.25,1.2+t(),4),_=new At(g,r);_.position.set((t()-.5)*.9,.6,(t()-.5)*.9),_.rotation.z=(t()-.5)*.6,u.add(_)}u.position.set(d.x,d.y-.2,d.z),this.flora.add(u)}}terrainHeightAt(t,e){const n=this.trackDistance(t,e),i=n.sample,r=n.dist,a=i?i.width/2:14,o=i?i.pos.y:0,l=this.noise(t*.008,e*.008),c=this.noise(t*.031,e*.031);if(r<a+26)return o-7.2+c*1.4;const h=Pt((r-a-26)/120,0,1);return o-7.2+h*h*38+l*16+c*2.6}buildDustDevils(){const t=new ye;this.scene.add(t);const e=14;this.devils=[];const n=Jn(51),i=s0();for(let r=0;r<e;r++){const a=new no({map:i,color:"#e9bd90",transparent:!0,opacity:.15,depthWrite:!1}),o=new xc(a),l=45+n()*70;o.scale.set(l,l*2.4,1);const c=n()*Me,h=120+n()*520;o.position.set(Math.cos(c)*h,8+n()*18,Math.sin(c)*h),t.add(o),this.devils.push({sprite:o,speed:1+n()*2,phase:n()*Me})}this.devilsGroup=t}update(t,e,n){for(const i of this.devils)i.sprite.position.x+=(12+i.speed*4)*t,i.sprite.position.x>900&&(i.sprite.position.x=-900),i.sprite.position.y+=Math.sin(n*.4+i.phase)*t*.25;this.sky&&(this.sky.position.x=e.x)}}function i0(s,t){return Pt(1-Math.abs(s)/t,0,1)}function s0(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(255,255,255,0.85)"),e.addColorStop(.45,"rgba(255,255,255,0.28)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new dr(s)}const r0=24,a0=Math.PI;function qi(s,t={}){return new ce({color:s,roughness:.55,metalness:.25,flatShading:!0,...t})}function le(s,t,e,n,i=0,r=0,a=0){const o=new At(new Ge(s,t,e),n);return o.position.set(i,r,a),o.castShadow=!0,o.receiveShadow=!0,o}class o0{constructor(t){this.group=new ye,this.tilt=new ye,this.group.add(this.tilt),t.add(this.group);const e=qi("#14a89e",{roughness:.27,metalness:.72}),n=qi("#08736f",{roughness:.34,metalness:.58}),i=qi("#10191d",{roughness:.3,metalness:.7}),r=qi("#ff7a2f",{emissive:"#ff421c",emissiveIntensity:.9,roughness:.28,metalness:.35}),a=qi("#ffd07c",{emissive:"#b8551f",emissiveIntensity:.22,roughness:.3,metalness:.65}),o=new ce({color:"#091c25",roughness:.08,metalness:.86,transparent:!0,opacity:.94}),l=new ce({color:"#080d10",roughness:.94,metalness:.03}),c=new ce({color:"#b9e0d8",roughness:.19,metalness:.94,flatShading:!0}),h=new ye;this.tilt.add(h),this.body=h,this.tilt.rotation.y=a0,h.add(le(2.12,.48,3.55,e,0,.64,.05)),h.add(le(1.82,.27,1.18,e,0,.54,-2.05)),h.add(le(1.46,.18,.62,a,0,.55,-2.61)),h.add(le(2.34,.18,.28,i,0,.39,-2.5)),h.add(le(2.16,.2,.28,i,0,.42,2.03));const d=le(1.55,.54,1.55,i,0,1.13,.18);d.rotation.x=-.04,h.add(d);const u=le(1.42,.4,.1,o,0,1.18,-.62);u.rotation.x=-.58,h.add(u);const p=le(1.42,.1,1.08,n,0,1.43,.28);h.add(p);const g=le(1.34,.3,.08,o,0,1.17,.91);g.rotation.x=.48,h.add(g),h.add(le(.1,.12,1.22,r,0,1.5,.18)),h.add(le(.22,.035,3.55,a,0,.9,-.02)),h.add(le(.09,.045,2.2,r,0,.93,.9)),this.sideLights=[];for(const y of[-1,1]){h.add(le(.16,.2,2.7,i,y*1.08,.48,0)),h.add(le(.08,.06,2.25,r,y*1.12,.68,.02));const M=le(.035,.08,1.25,a,y*1.15,.77,-.18);h.add(M),this.sideLights.push(M);const R=new At(new en(.34,.34,.045,24),a);R.rotation.z=Math.PI/2,R.position.set(y*1.12,.88,.22),h.add(R);const I=new At(new nn(.5,.38),new Be({map:l0("07"),transparent:!0}));I.position.set(y*1.145,.88,.22),I.rotation.y=y>0?Math.PI/2:-Math.PI/2,h.add(I)}for(const y of[-1,1]){h.add(le(.42,.06,.42,r,y*1.02,.5,-2.42));const M=le(.08,.82,.08,i,y*.68,1.13,.93);M.rotation.x=.16,h.add(M)}h.add(le(1.42,.08,.08,i,0,1.55,.93)),h.add(le(.1,.44,.1,i,-.78,1.2,1.86)),h.add(le(.1,.44,.1,i,.78,1.2,1.86));const _=le(2.1,.1,.54,r,0,1.45,1.98);_.rotation.x=.1,h.add(_),h.add(le(1.55,.04,.09,a,0,1.5,2.23));const m=new Be({color:"#fff1c7"}),f=new Be({color:"#a5151d"});this.tailMats=[f],h.add(le(1.26,.1,.05,m,0,.7,-2.66));for(const y of[-1,1])h.add(le(.5,.12,.05,f,y*.57,.82,1.99));this.wheels=[];const v=new en(.5,.5,.38,18);v.rotateZ(Math.PI/2);const S=new en(.3,.3,.4,10);S.rotateZ(Math.PI/2);const x=new en(.1,.1,.42,10);x.rotateZ(Math.PI/2);const L=[[-1,.48,-1.38,!0],[1,.48,-1.38,!0],[-1.02,.5,1.38,!1],[1.02,.5,1.38,!1]];for(const[y,M,R,I]of L){const O=new ye;O.position.set(y,M,R);const H=new ye;O.add(H),H.add(new At(v,l)),H.add(new At(S,c)),H.add(new At(x,r));for(let X=0;X<5;X++){const W=new At(new Ge(.43,.055,.08),c);W.rotation.x=X/5*Math.PI,H.add(W)}this.tilt.add(O),this.wheels.push({pivot:O,spin:H,front:I,baseY:M})}this.flames=[];const A=new Be({color:"#ffb35c",transparent:!0,opacity:.9,blending:es,depthWrite:!1});for(const y of[-1,1]){const M=new At(new Li(.17,1.25,7),A.clone());M.rotation.x=Math.PI/2,M.position.set(y*.42,.48,2.48),M.visible=!1,this.tilt.add(M),this.flames.push(M)}const E=new At(new nn(2.8,4.8),new Be({color:"#29e8d2",transparent:!0,opacity:0,blending:es,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.y=.06,this.tilt.add(E),this.underglow=E;const C=new At(new nn(3.4,5.3),new Be({map:c0(),transparent:!0,opacity:.46,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.y=.08,this.group.add(C),this.blob=C,this.bodyRoll=0,this.bodyPitch=0,this.susp=0,this.suspVel=0,this.wheelSpin=0}setPose(t,e,n,i){this.group.position.copy(t),this.group.rotation.y=e}update(t,e){const{speed:n,steer:i,lateral:r,grounded:a,boostActive:o,throttle:l}=e;this.wheelSpin+=e.forwardSpeed/.46*t;for(const g of this.wheels)g.spin.rotation.x=this.wheelSpin,g.front&&(g.pivot.rotation.y=i*.4),g.pivot.position.y=g.baseY+this.susp*.35;const c=Pt(-i*.055-r*.004,-.12,.12),h=Pt((e.accel||0)*-.0018+(e.braking?.035:0),-.06,.06);this.bodyRoll=fe(this.bodyRoll,c,8,t),this.bodyPitch=fe(this.bodyPitch,h,7,t),this.suspVel+=(-this.susp*150-this.suspVel*14)*t,this.susp+=this.suspVel*t,this.tilt.rotation.z=(e.bank||0)+this.bodyRoll,this.tilt.rotation.x=(e.slope||0)*.6+this.bodyPitch,this.tilt.position.y=this.susp*.35,this.body.position.y=-this.susp*.06,this.blob.position.y=.06-(e.airHeight||0);const d=1+Pt((e.airHeight||0)/12,0,.8);this.blob.scale.set(d,d,1),this.blob.material.opacity=.4/d;const u=o;for(const g of this.flames)if(g.visible=u,u){const _=.8+Math.random()*.55;g.scale.set(1,_,1),g.material.opacity=.6+Math.random()*.35}this.underglow.material.opacity=fe(this.underglow.material.opacity,o?.4:0,10,t);const p=e.braking;for(const g of this.tailMats)g.color.setHex(p?"#ff2617":"#b32a20")}wheelWorld(t,e=new P){return this.wheels[t].pivot.getWorldPosition(e),e}addSuspensionKick(t){this.suspVel+=t}}function l0(s){const t=document.createElement("canvas");t.width=256,t.height=192;const e=t.getContext("2d");e.clearRect(0,0,256,192),e.fillStyle="#22201f",e.font='900 132px "Arial Black", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(s,128,104);const n=new dr(t);return n.colorSpace=De,n}function c0(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new dr(s)}class h0{constructor(t,e,n={}){this.track=t,this.model=e,this.events=n,this.pos=new P,this.vel=new P,this.yaw=0,this.vy=0,this.s=0,this.lat=0,this.grounded=!0,this.airborne=!1,this.airTime=0,this.steer=0,this.boostMeter=40,this.boosting=!1,this.drifting=!1,this.driftTime=0,this.driftChain=0,this.lastDrift=0,this.driftScore=0,this.chainMultiplier=1,this.slip=0,this.forwardSpeed=0,this.lateralSpeed=0,this.speed=0,this.slope=0,this.bank=0,this.offRoad=!1,this.offRoadTime=0,this.wallContact=0,this.wallRideTime=0,this.wallRideCooldown=0,this.needsRecovery=!1,this.recoveryReason="",this.resetTimer=0,this.impactTimer=0,this.crashTimer=0,this.lastSurfaceY=0,this.nearMissCooldown=new Map,this.nearMissCount=0,this.boostTime=0,this.airBoostAwarded=!1,this.landImpact=0,this.assist=.4,this.controlLock=0,this.input={steer:0,throttle:0,brake:0,handbrake:!1,boost:!1},this.prevInput={handbrake:!1,boost:!1},this.onGroundSurface=!0}reset(t,e=0){const n=this.track.samplePos(t,e),i=this.track.getSample(t).a;this.pos.copy(n),this.pos.y+=.05,this.yaw=Math.atan2(i.tan.x,i.tan.z),this.vel.set(0,0,0),this.vy=0,this.s=t,this.lat=e,this.grounded=!0,this.airborne=!1,this.airTime=0,this.boostMeter=45,this.boosting=!1,this.drifting=!1,this.driftChain=0,this.driftScore=0,this.chainMultiplier=1,this.steer=0,this.forwardSpeed=0,this.lateralSpeed=0,this.speed=0,this.offRoad=!1,this.offRoadTime=0,this.wallRideTime=0,this.needsRecovery=!1,this.resetTimer=0,this.airBoostAwarded=!1,this.landImpact=0}addBoost(t){this.boostMeter=Pt(this.boostMeter+t,0,100)}useBoost(t){this.boosting=t&&this.boostMeter>1}crash(t=1){var n,i;if(this.crashTimer>.4)return;this.crashTimer=.9;const e=.55*t;this.vel.multiplyScalar(1-e),this.vy=Math.min(this.vy,0),this.driftChain=0,this.driftScore=0,this.chainMultiplier=1,this.drifting=!1,this.impactTimer=.5,this.controlLock=.28,this.boosting=!1,(i=(n=this.events).onCrash)==null||i.call(n,t,this.pos.clone())}requestRecovery(t){this.needsRecovery=!0,this.recoveryReason=t,this.drifting=!1,this.driftChain=0}groundAt(t,e){const{a:n}=this.track.getSample(t),i=this.track.surfaceAt(t,e);if(i!==null){const r=Math.abs(e)<=n.width/2+.4;return{y:i,kind:r?"road":"shoulder"}}return this.track.isGap(t)?null:{y:n.pos.y-7.1,kind:"sand"}}update(t,e,n=.4){var C,y,M,R,I,O,H,X,W,$,V,tt,at,mt,Ct,Xt,q,et;this.assist=n,this.controlLock=Math.max(0,this.controlLock-t),this.crashTimer=Math.max(0,this.crashTimer-t),this.impactTimer=Math.max(0,this.impactTimer-t),this.wallRideCooldown=Math.max(0,this.wallRideCooldown-t);const i=this.controlLock>0?0:e.steer,r=this.controlLock>0?0:e.throttle,a=this.controlLock>0?0:e.brake;let o=this.track.nearest(this.pos.x,this.pos.z,this.s);this.s=o.s,this.lat=o.lat;const l=o.sample;this.bank=l.bank,l.right;let c=new P(Math.sin(this.yaw),0,Math.cos(this.yaw)),h=this.groundAt(this.s,this.lat);this.speed=Math.hypot(this.vel.x,this.vel.z),this.grounded&&(h?(this.pos.y=h.y,this.vy=0):(this.grounded=!1,this.airborne=!0,this.airTime=0)),this.grounded||(this.vy-=r0*t,this.pos.y+=this.vy*t,this.airTime+=t,h&&this.pos.y<=h.y+.18&&this.land(h.y));const d=this.grounded;if(d){const it=Pt(this.speed/7,0,1),j=e.handbrake&&this.speed>9;j&&!this.drifting&&(this.drifting=!0,this.driftTime=0,(y=(C=this.events).onDriftStart)==null||y.call(C,this.pos.clone())),this.drifting&&(Math.abs(this.slip)>.16||j)&&this.speed>7&&(this.driftTime+=t);const dt=1.95/(1+this.speed*.012)*(.42+it*.58),gt=this.forwardSpeed<-1.5?-1:1;let Tt=i*dt*gt;if(this.drifting&&(Tt*=1.55),this.assist>0){const Yt=Pt((Math.abs(this.slip)-.5)*2,0,1);Tt-=jm(this.slip)*Yt*1*this.assist,Math.abs(i)<.05&&this.speed>8&&(Tt+=-this.slip*.7*this.assist)}this.yaw=wi(this.yaw+Tt*t),this.steer=fe(this.steer,i,13,t)}else this.yaw=wi(this.yaw+i*.85*t),this.steer=fe(this.steer,i,7,t);c=new P(Math.sin(this.yaw),0,Math.cos(this.yaw));const u=new P(c.z,0,-c.x);let p=this.vel.x*c.x+this.vel.z*c.z,g=this.vel.x*u.x+this.vel.z*u.z;if(d){let it=this.drifting?2.15:10.5;this.drifting&&this.assist>.5&&(it*=1.2),e.handbrake&&(it*=.72),this.impactTimer>0&&(it*=.8),g*=Math.exp(-it*t),this.lateralSpeed=g}if(d){if(r>.02&&p>-2){let j=30*(1-Math.pow(Pt(Math.abs(p)/108,0,1),1.75))*r;this.boosting&&(j+=19*r),p+=j*t}a>.02&&(p>1.5?p-=44*a*t:p>-16&&(p-=13*a*t)),e.handbrake&&(p*=1-.42*t),this.offRoad&&(p*=1-1.6*t),this.impactTimer>0&&(p*=1-1.4*t)}e.boost&&this.boostMeter>.5?(this.boosting=!0,this.boostMeter=Math.max(0,this.boostMeter-25*t),this.boostTime+=t,p+=17*t,this.boostMeter<=0&&(this.boosting=!1),d||(this.vy=Math.max(this.vy,-13))):(this.boosting=!1,this.boostTime=0);const m=.004*this.speed*this.speed+.45;p-=Math.sign(p)*Math.min(Math.abs(p),m*t),d||(g*=Math.exp(-.25*t)),Math.abs(p)<.03&&(p=0),this.vel.x=c.x*p+u.x*g,this.vel.z=c.z*p+u.z*g,this.forwardSpeed=p,this.lateralSpeed=g,this.speed=Math.hypot(this.vel.x,this.vel.z),this.slip=this.speed>2?Math.atan2(g,Math.abs(p)+.001):0,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,o=this.track.nearest(this.pos.x,this.pos.z,this.s),this.s=o.s,this.lat=o.lat;const f=o.sample,v=f.width/2;if(this.wallContact=0,d){const it=v+1;if(Math.abs(this.lat)>it){const j=Math.sign(this.lat),dt=Math.abs(this.lat)-it;this.pos.x-=f.right.x*j*dt,this.pos.z-=f.right.z*j*dt,this.lat=j*it;const gt=this.vel.x*f.right.x*j+this.vel.z*f.right.z*j;gt>0&&(this.vel.x-=f.right.x*j*gt*1.3,this.vel.z-=f.right.z*j*gt*1.3),this.wallContact=1;const Tt=Math.abs(Math.atan2(gt,Math.abs(this.forwardSpeed)+.01)),Yt=this.speed;if(Tt>.5&&Yt>13)this.crash(Pt(Tt*1.3,.4,1));else{this.impactTimer=Math.max(this.impactTimer,.12),Yt>22?(this.wallRideTime+=t,this.wallRideTime>.15&&(this.addBoost(14*t),(R=(M=this.events).onWallRide)==null||R.call(M,this.pos.clone(),j,Yt),this.wallRideCooldown<=0&&(this.wallRideCooldown=.28,(O=(I=this.events).onWallSpark)==null||O.call(I,this.pos.clone(),j,f)))):this.wallRideTime=0;const zt=Math.atan2(f.tan.x,f.tan.z),ne=Qs(this.yaw,zt);this.yaw=wi(this.yaw-Math.sign(ne)*Math.min(Math.abs(ne),2.2*t))}(X=(H=this.events).onWallHit)==null||X.call(H,this.pos.clone(),this.speed)}else this.wallRideTime=0}const S=this.groundAt(this.s,this.lat);if(this.grounded&&S){const it=Math.max(.35,Math.abs(this.forwardSpeed)*t),j=((this.s-it)%this.track.length+this.track.length)%this.track.length,dt=this.groundAt(j,this.lat);let gt=0;dt&&dt.kind==="road"&&S.kind==="road"&&(gt=(S.y-dt.y)/it),gt=Pt(gt,-.95,1),this.slope=Math.atan(gt),this.vy=gt*this.forwardSpeed*.94,this.pos.y=S.y}else this.grounded||(this.slope=fe(this.slope,Pt(-this.vy*.03,-.5,.5),1.5,t));const x=S!==null&&S.kind==="road";if(S!==null&&!x&&this.grounded?(this.offRoad=!0,this.offRoadTime+=t,($=(W=this.events).onOffRoad)==null||$.call(W,this.pos.clone()),this.offRoadTime>3.4&&this.requestRecovery("offroad")):x||!this.grounded?(this.offRoadTime=0,this.offRoad=!1):S||(this.offRoad=!1,this.offRoadTime=0,this.pos.y<-35&&this.requestRecovery("fall")),this.checkProps(t),this.drifting&&this.grounded&&this.speed>12&&Math.abs(this.slip)>.12){this.driftChain+=t,this.lastDrift=Math.max(0,this.driftChain);const it=(4+Math.min(18,Math.abs(this.slip)*26))*t;this.addBoost(it),this.driftScore+=Math.abs(this.slip)*this.speed*t*2.2;const j=1+Math.min(3,Math.floor(this.driftChain/1.4));j>this.chainMultiplier&&(this.chainMultiplier=j,(tt=(V=this.events).onChainStep)==null||tt.call(V,j)),(mt=(at=this.events).onDriftTick)==null||mt.call(at,this.driftChain,this.slip)}else this.drifting&&(this.driftChain>.4&&((Xt=(Ct=this.events).onDriftEnd)==null||Xt.call(Ct,this.driftChain,this.chainMultiplier)),this.drifting=!1,this.driftChain=0,this.chainMultiplier=1);!this.grounded&&this.airTime>.55&&!this.airBoostAwarded&&(this.airBoostAwarded=!0,this.addBoost(10),(et=(q=this.events).onAirtime)==null||et.call(q,this.airTime)),this.grounded&&(this.airBoostAwarded=!1),this.grounded&&this.speed<1.2&&r>.1?(this.resetTimer+=t,this.resetTimer>5&&this.requestRecovery("stuck")):this.resetTimer=0;const E=Math.atan(Math.tan(this.bank)+this.lat*8e-4);this.model.group.position.set(this.pos.x,this.pos.y,this.pos.z),this.model.group.rotation.y=this.yaw,this.model.update(t,{speed:this.speed,steer:this.steer,lateral:this.lateralSpeed,grounded:this.grounded,boostActive:this.boosting,throttle:r,braking:a>.1,bank:this.grounded?E:this.model.bodyRoll*.25,slope:this.grounded?this.slope:0,airHeight:this.grounded?0:Math.max(0,this.pos.y-(S?S.y:this.pos.y-3)),forwardSpeed:this.forwardSpeed,accel:r*20-a*30})}land(t){var r,a,o,l;const e=Math.max(0,-this.vy);this.pos.y=t,this.vy=0,this.grounded=!0,this.airborne=!1,this.landImpact=e,this.model.addSuspensionKick(-Pt(e*.16,.4,5.5)),(a=(r=this.events).onLand)==null||a.call(r,e,this.pos.clone(),this.slip,this.airTime,this.speed);const i=.035+Pt(Math.abs(this.slip)/1.1,0,1)*.22+Pt((e-14)/60,0,.3);this.vel.multiplyScalar(1-i),e>6&&this.speed>.5&&(e>17||Math.abs(this.slip)>.55?this.crash(Pt(e/38,.12,.5)):this.addBoost(6+Math.min(14,e*.7))),Math.abs(this.slip)<.3&&e>3&&e<17&&((l=(o=this.events).onCleanLanding)==null||l.call(o,e,this.pos.clone()),this.addBoost(7)),this.airTime=0}checkProps(t){var e,n,i,r;for(const a of this.track.decorColliders){const o=this.pos.x-a.x,l=this.pos.z-a.z,c=o*o+l*l,h=a.r+1.05;if(c<h*h){const d=Math.sqrt(c)||.001,u=h-d;this.pos.x+=o/d*u,this.pos.z+=l/d*u,this.speed>6&&(this.crash(Pt(this.speed/55,.25,.9)),(n=(e=this.events).onPropHit)==null||n.call(e,this.pos.clone()))}else if(c<(a.r+5.2)**2&&this.speed>26){const d=a;(this.nearMissCooldown.get(d)||0)<=0&&(this.nearMissCooldown.set(d,3.5),this.nearMissCount++,this.addBoost(9),(r=(i=this.events).onNearMiss)==null||r.call(i,this.pos.clone()))}}for(const[a,o]of this.nearMissCooldown)o>0&&this.nearMissCooldown.set(a,o-t)}}const u0=`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vAlpha = aAlpha;
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (320.0 / max(0.1, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`,d0=`
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.06, d) * vAlpha;
    gl_FragColor = vec4(vColor, a);
  }
`;class Al{constructor(t,e,n,i){this.capacity=e,this.additive=n,this.tint=i,this.count=0;const r=new oe;this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e),r.setAttribute("position",new Te(this.positions,3)),r.setAttribute("aColor",new Te(this.colors,3)),r.setAttribute("aSize",new Te(this.sizes,1)),r.setAttribute("aAlpha",new Te(this.alphas,1));const a=new ve({uniforms:{},vertexShader:u0,fragmentShader:d0,transparent:!0,depthWrite:!1,blending:n?es:Qn});this.points=new km(r,a),this.points.frustumCulled=!1,this.points.renderOrder=n?3:2,t.add(this.points),this.geo=r,this.data=[];for(let o=0;o<e;o++)this.data.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size0:1,size1:1,r:1,g:1,b:1,drag:1,gravity:0,alpha:1});this.cursor=0}spawn(t){const e=this.data[this.cursor];this.cursor=(this.cursor+1)%this.capacity,e.alive=!0,e.x=t.x,e.y=t.y,e.z=t.z,e.vx=t.vx||0,e.vy=t.vy||0,e.vz=t.vz||0,e.life=0,e.maxLife=t.life||1,e.size0=t.size0||1,e.size1=t.size1||e.size0,e.r=t.r??1,e.g=t.g??1,e.b=t.b??1,e.drag=t.drag??1.5,e.gravity=t.gravity??0,e.alpha=t.alpha??1,e.additive=this.additive}update(t){let e=!1;for(let n=0;n<this.capacity;n++){const i=this.data[n];if(!i.alive){this.alphas[n]=0,this.sizes[n]=0;continue}if(e=!0,i.life+=t,i.life>=i.maxLife){i.alive=!1,this.alphas[n]=0,this.sizes[n]=0;continue}const r=Math.exp(-i.drag*t);i.vx*=r,i.vz*=r,i.vy=i.vy*r-i.gravity*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t;const a=i.life/i.maxLife;this.positions[n*3]=i.x,this.positions[n*3+1]=i.y,this.positions[n*3+2]=i.z,this.colors[n*3]=i.r,this.colors[n*3+1]=i.g,this.colors[n*3+2]=i.b,this.sizes[n]=i.size0+(i.size1-i.size0)*a,this.alphas[n]=i.alpha*(1-a)*Math.min(1,a*12)}(e||this._hadAny)&&(this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0,this._hadAny=e)}}class f0{constructor(t,e=900){this.capacity=e;const n=new oe;this.positions=new Float32Array(e*4*3),this.alphas=new Float32Array(e*4);const i=[];for(let o=0;o<e;o++){const l=o*4;i.push(l,l+1,l+2,l,l+2,l+3)}n.setAttribute("position",new Te(this.positions,3)),n.setAttribute("aAlpha",new Te(this.alphas,1)),n.setIndex(i);const r=new ve({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,vertexShader:`
        attribute float aAlpha;
        varying float vA;
        void main() {
          vA = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying float vA;
        void main() {
          gl_FragColor = vec4(0.09, 0.065, 0.055, vA * 0.65);
        }
      `}),a=new At(n,r);a.frustumCulled=!1,a.renderOrder=1,t.add(a),this.geo=n,this.cursor=0,this.data=[];for(let o=0;o<e;o++)this.data.push({life:0,maxLife:14,alive:!1})}add(t,e,n,i,r,a=.34,o=.9){const l=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const c=l*4,h=-r*a*.5,d=i*a*.5,u=this.positions;u[c*3]=t-h,u[c*3+1]=n,u[c*3+2]=e-d,u[(c+1)*3]=t+h,u[(c+1)*3+1]=n,u[(c+1)*3+2]=e+d,u[(c+2)*3]=t+h+i*.9,u[(c+2)*3+1]=n,u[(c+2)*3+2]=e+d+r*.9,u[(c+3)*3]=t-h+i*.9,u[(c+3)*3+1]=n,u[(c+3)*3+2]=e-d+r*.9;for(let p=0;p<4;p++)this.alphas[c+p]=o;this.data[l].life=0,this.data[l].maxLife=14,this.data[l].alive=!0,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}update(t){let e=!1;this.positions;for(let n=0;n<this.capacity;n++){const i=this.data[n];if(i.alive){if(i.life+=t,i.life>=i.maxLife){i.alive=!1;const r=n*4;for(let a=0;a<4;a++)this.alphas[r+a]=0;e=!0}else if(i.life>i.maxLife-3){const r=n*4,a=(i.maxLife-i.life)/3*.8;for(let o=0;o<4;o++)this.alphas[r+o]=a;e=!0}}}e&&(this.geo.attributes.aAlpha.needsUpdate=!0)}clear(){for(let t=0;t<this.capacity;t++){this.data[t].alive=!1;for(let e=0;e<4;e++)this.alphas[t*4+e]=0}this.geo.attributes.aAlpha.needsUpdate=!0}}class p0{constructor(t){this.scene=t,this.dust=new Al(t,900,!1),this.sparks=new Al(t,500,!0),this.rings=[],this.skid=new f0(t),this.lastSkid=[null,null]}update(t){this.dust.update(t),this.sparks.update(t),this.skid.update(t)}reset(){this.skid.clear(),this.lastSkid=[null,null]}driftSmoke(t,e,n,i=1){const r=1+Math.floor(i*1.1);for(let a=0;a<r;a++)this.dust.spawn({x:t.x+(Math.random()-.5)*.7,y:t.y+.18,z:t.z+(Math.random()-.5)*.7,vx:n.x*.14+(Math.random()-.5)*1.8,vy:.8+Math.random()*1,vz:n.z*.14+(Math.random()-.5)*1.8,life:.8+Math.random()*.9,size0:.45,size1:1.9+Math.random()*1.1,r:.8,g:.68,b:.52,alpha:.13+Math.random()*.09,drag:1.9,gravity:-.5})}tireDust(t,e,n=1){for(let i=0;i<2;i++)this.dust.spawn({x:t.x+(Math.random()-.5)*1.4,y:t.y+.25,z:t.z+(Math.random()-.5)*1.4,vx:e.x*.22+(Math.random()-.5)*3,vy:.8+Math.random()*1.6,vz:e.z*.22+(Math.random()-.5)*3,life:1+Math.random()*.7,size0:.5,size1:2.4,r:.76,g:.61,b:.45,alpha:.16,drag:1.7,gravity:-.4})}landingDust(t,e=8){const n=Pt(Math.floor(e*1.4),6,26);for(let i=0;i<n;i++){const r=i/n*Math.PI*2+Math.random()*.4,a=2+Math.random()*4;this.dust.spawn({x:t.x+Math.cos(r)*1.2,y:t.y+.15,z:t.z+Math.sin(r)*1.2,vx:Math.cos(r)*a+(Math.random()-.5),vy:.6+Math.random()*1.8,vz:Math.sin(r)*a+(Math.random()-.5),life:1.1+Math.random()*.8,size0:.8,size1:3.1,r:.8,g:.66,b:.5,alpha:.2,drag:2.2,gravity:-.3})}}wallSparks(t,e,n){for(let i=0;i<14;i++){const r=n||{x:0,z:1};this.sparks.spawn({x:t.x,y:t.y+.5+Math.random()*.8,z:t.z,vx:-e*Math.cos(Math.random()*1.4)*(2+Math.random()*5)+r.x*8,vy:1+Math.random()*4,vz:-e*Math.sin(Math.random()*1.4)*(2+Math.random()*5)+r.z*8,life:.35+Math.random()*.5,size0:.35,size1:.05,r:1,g:.72,b:.25,alpha:1,drag:.7,gravity:16})}}boostTrail(t,e,n){for(let i=0;i<2;i++){const r=t.x-e.x*2.4+n*.42+(Math.random()-.5)*.3,a=t.z-e.z*2.4+(Math.random()-.5)*.3;this.sparks.spawn({x:r,y:t.y+.5+Math.random()*.2,z:a,vx:-e.x*6+(Math.random()-.5)*1.5,vy:.2+Math.random()*1,vz:-e.z*6+(Math.random()-.5)*1.5,life:.25+Math.random()*.25,size0:.9,size1:.1,r:.35,g:.95,b:.95,alpha:.85,drag:2,gravity:-1})}for(let i=0;i<1;i++)this.dust.spawn({x:t.x-e.x*2.2,y:t.y+.4,z:t.z-e.z*2.2,vx:-e.x*3,vy:.6,vz:-e.z*3,life:.5,size0:.6,size1:2.2,r:1,g:.75,b:.5,alpha:.18,drag:2})}crashBurst(t,e){for(let n=0;n<22;n++)this.sparks.spawn({x:t.x+(Math.random()-.5),y:t.y+.8,z:t.z+(Math.random()-.5),vx:(Math.random()-.5)*14+e.x*4,vy:3+Math.random()*7,vz:(Math.random()-.5)*14+e.z*4,life:.4+Math.random()*.5,size0:.5,size1:.05,r:1,g:.6,b:.2,alpha:1,drag:.8,gravity:15});this.landingDust(t,18)}jumpDust(t){for(let e=0;e<8;e++)this.dust.spawn({x:t.x+(Math.random()-.5)*2,y:t.y+.3,z:t.z+(Math.random()-.5)*2,vx:(Math.random()-.5)*4,vy:.4+Math.random()*2,vz:(Math.random()-.5)*4,life:.7,size0:.8,size1:3,r:.8,g:.68,b:.52,alpha:.22,drag:2})}addRing(t,e="#ffd08a",n=14){const i=new Be({color:e,transparent:!0,opacity:.55,side:Ue,depthWrite:!1}),r=new At(new ro(.6,1,32),i);r.rotation.x=-Math.PI/2,r.position.set(t.x,t.y+.2,t.z),this.scene.add(r),this.rings.push({mesh:r,life:0,maxLife:.8,maxScale:n})}updateRings(t){for(let e=this.rings.length-1;e>=0;e--){const n=this.rings[e];n.life+=t;const i=n.life/n.maxLife,r=1+i*n.maxScale;n.mesh.scale.set(r,r,r),n.mesh.material.opacity=.5*(1-i),i>=1&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.rings.splice(e,1))}}skidTrail(t,e,n,i=1){const r=this.lastSkid[t],a=e.y+.045;if(!r){this.lastSkid[t]={x:e.x,z:e.z,y:a};return}const o=e.x-r.x,l=e.z-r.z,c=Math.hypot(o,l);c>.34&&c<4&&(this.skid.add(r.x,r.z,a,o/c,l/c,.3,.8*i),this.skid.add(r.x+n.x*.55,r.z+n.z*.55,a,o/c,l/c,.24,.7*i),this.lastSkid[t]={x:e.x,z:e.z,y:a})}endSkid(){this.lastSkid=[null,null]}}const Yi=["chase","far","hood"];function Vs(s){return new P(Math.sin(s),0,Math.cos(s))}class m0{constructor(t,e,n){this.camera=t,this.track=e,this.env=n,this.modeIndex=0,this.mode=Yi[0],this.yaw=0,this.pos=new P,this.look=new P,this.basePos=new P,this.baseLook=new P,this.trauma=0,this.time=0,this.fov=t.fov,this.roll=0,this.introAngle=0,this.snapped=!1}cycle(){return this.modeIndex=(this.modeIndex+1)%Yi.length,this.mode=Yi[this.modeIndex],this.snapped=!1,this.mode}setMode(t){this.modeIndex=Pt(t,0,Yi.length-1),this.mode=Yi[this.modeIndex]}addShake(t){this.trauma=Pt(this.trauma+t,0,1.2)}reset(){this.snapped=!1,this.trauma=0,this.introAngle=0}snapTo(t,e=8){const n=Vs(t.yaw);this.yaw=t.yaw,this.pos.copy(t.pos).addScaledVector(n,-e),this.pos.y=t.pos.y+3.1,this.basePos.copy(this.pos),this.baseLook.copy(t.pos).add(new P(0,1.4,0)),this.snapped=!0}update(t,e,n={}){this.time+=t;const{intro:i=!1,finished:r=!1,paused:a=!1}=n,o=Pt(e.speed/82,0,1.15),l=this.camera;if(this.trauma=Math.max(0,this.trauma-t*1.5),i){this.introAngle+=t*.06;const E=e.pos,C=10.3,y=Vs(e.yaw),M=new P(y.z,0,-y.x),R=Math.sin(this.introAngle)*.42,I=new P().copy(E).addScaledVector(y,-Math.cos(R)*C).addScaledVector(M,Math.sin(R)*C);I.y=E.y+3.5+Math.sin(this.introAngle*.7)*.25;const O=this.env?this.env.terrainHeightAt(I.x,I.z):-100;I.y=Math.max(I.y,O+2.2),this.snapped?(this.pos.x=fe(this.pos.x,I.x,6,t),this.pos.z=fe(this.pos.z,I.z,6,t),this.pos.y=fe(this.pos.y,I.y,5,t)):(this.pos.copy(I),this.snapped=!0),this.look.lerp(new P(E.x+y.x*11,E.y+1.55,E.z+y.z*11),1-Math.exp(-5*t)),l.position.copy(this.pos),l.up.set(0,1,0),l.lookAt(this.look),this.setFov(52,t);return}if(r){this.introAngle+=t*.28;const E=e.pos,C=10,y=e.yaw+Math.PI*.6+this.introAngle*.5,M=new P(E.x+Math.cos(y)*C,E.y+3.4,E.z+Math.sin(y)*C),R=this.env?this.env.terrainHeightAt(M.x,M.z):-100;M.y=Math.max(M.y,R+2),this.pos.lerp(M,1-Math.exp(-3*t)),this.look.lerp(new P(E.x,E.y+1.1,E.z),1-Math.exp(-5*t)),l.position.copy(this.pos),l.up.set(0,1,0),l.lookAt(this.look),this.setFov(54,t);return}if(this.mode==="hood"){const E=Vs(e.yaw),C=new P(0,1,0),y=new P().copy(e.pos).addScaledVector(E,.45).addScaledVector(C,1.35);this.pos.lerp(y,1-Math.exp(-24*t)),this.look.copy(this.pos).addScaledVector(E,24).addScaledVector(C,1.2+e.slope*6),this.applyShake(t,.025*(1+o)),l.position.copy(this.pos),l.up.set(0,1,0),l.lookAt(this.look),this.roll=-e.lateralSpeed*.0022,l.rotateZ(this.roll),this.setFov(66+o*6+(e.boosting?2:0),t);return}const c=this.mode==="far",h=(c?12.5:7.4)+o*(c?3:2),d=(c?5.4:3)+o*.5;let u=e.yaw;if(e.speed>9){const E=Math.atan2(e.vel.x,e.vel.z);Math.abs(Qs(E,e.yaw))<=Math.PI*.6&&(u=E)}const p=c?.48:.28,g=wi(e.yaw+Qs(u,e.yaw)*p),_=c?3.4:e.grounded?6.2:3.8;this.snapped?this.yaw=wi(this.yaw+Qs(g,this.yaw)*(1-Math.exp(-_*t))):this.yaw=g;const m=Vs(this.yaw),f=new P(m.z,0,-m.x),v=new P().copy(e.pos).addScaledVector(m,-h).addScaledVector(f,Pt(e.lateralSpeed*.045,-1.2,1.2));if(v.y=e.pos.y+d+(e.grounded?0:Pt(e.airTime*.4,0,1.4)),this.track){const E=this.track.nearest(v.x,v.z,e.s),C=Math.max(3.5,E.sample.width/2-1.15);if(Math.abs(E.lat)>C){const y=(Math.abs(E.lat)-C)*Math.sign(E.lat);v.x-=E.sample.right.x*y,v.z-=E.sample.right.z*y}}const S=this.env?this.env.terrainHeightAt(v.x,v.z):-100;if(v.y<S+1.6&&(v.y=S+1.6),!this.snapped)this.pos.copy(v),this.look.copy(e.pos),this.snapped=!0;else{const E=c?4.5:11;this.pos.x=fe(this.pos.x,v.x,E,t),this.pos.z=fe(this.pos.z,v.z,E,t),this.pos.y=fe(this.pos.y,v.y,e.grounded?6.5:4,t),this.look.x=fe(this.look.x,e.pos.x,14,t),this.look.y=fe(this.look.y,e.pos.y+1.35,e.grounded?8:5,t),this.look.z=fe(this.look.z,e.pos.z,14,t)}const x=new P().copy(e.pos).addScaledVector(m,8+o*8).addScaledVector(new P(0,1,0),1.2);this.look.lerp(x,1-Math.exp(-3.5*t)),this.applyShake(t,.018*(1+o)),l.position.copy(this.pos),l.position.add(this.shakeOffset),l.up.set(0,1,0),l.lookAt(this.look);const L=-e.bank*.24-Pt(e.lateralSpeed*.002,-.035,.035);this.roll=fe(this.roll,e.grounded?L:L*.4,5,t),l.rotateZ(this.roll);const A=c?60:62;this.setFov(A+o*6+(e.boosting?2.5:0),t,a)}applyShake(t,e){const n=this.trauma*this.trauma;if(this.shakeOffset||(this.shakeOffset=new P),n<5e-4){this.shakeOffset.multiplyScalar(1-Math.min(1,t*10));return}const i=this.time*39,r=n*e*3.2;this.shakeOffset.set(Math.sin(i*1.7)*r,Math.sin(i*2.3+1.7)*r*.7,Math.sin(i*2.9+3.1)*r*.5)}setFov(t,e,n=!1){this.fov=fe(this.fov,t,4,e),Math.abs(this.camera.fov-this.fov)>.02&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}}const Gs=s=>440*Math.pow(2,(s-69)/12),g0=[40,-1,40,41,40,-1,43,40,38,-1,40,41,43,45,40,47],Rl=[64,-1,68,69,71,69,68,64,65,-1,64,62,-1,64,65,68],_0=[69,71,72,74,72,71,69,68,65,64,65,68,69,-1,68,64];class v0{constructor(){this.ready=!1,this.musicVolume=.65,this.sfxVolume=.8,this.intensity=0,this.paused=!1,this.step=0,this.nextNoteTime=0,this.timer=null,this.musicStarted=!1,this.engineRpm=0,this.muted=!1}init(){if(this.ready)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=.9,this.limiter=e.createDynamicsCompressor(),this.limiter.threshold.value=-12,this.limiter.knee.value=20,this.limiter.ratio.value=4,this.limiter.attack.value=.004,this.limiter.release.value=.22,this.master.connect(this.limiter),this.limiter.connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVolume,this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=0,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this.makeImpulse(1.7,2.6),this.reverbGain=e.createGain(),this.reverbGain.gain.value=.24,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.musicReverb=e.createGain(),this.musicReverb.gain.value=.16,this.musicReverb.connect(this.reverb),this.noiseBuffer=this.makeNoise(2.5),this.setupEngine(),this.setupTires(),this.setupWind(),this.setupBoost(),this.ready=!0,this.startMusic(),this.musicBus.gain.setTargetAtTime(this.musicVolume*.5,e.currentTime,2)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}makeNoise(t){const e=this.ctx,n=Math.floor(e.sampleRate*t),i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);let a=0;for(let o=0;o<n;o++){const l=Math.random()*2-1;a=.96*a+.04*l,r[o]=l*.7+a*3.2}return i}makeImpulse(t,e){const n=this.ctx,i=n.sampleRate,r=Math.floor(i*t),a=n.createBuffer(2,r,i);for(let o=0;o<2;o++){const l=a.getChannelData(o);for(let c=0;c<r;c++)l[c]=(Math.random()*2-1)*Math.pow(1-c/r,e)*(c<i*.01?c/(i*.01):1)}return a}makeLoopNoise(){const t=this.ctx.createBufferSource();return t.buffer=this.noiseBuffer,t.loop=!0,t.start(),t}setupEngine(){const t=this.ctx;this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineFilter=t.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=800,this.engineFilter.Q.value=4,this.engineGain.connect(this.engineFilter),this.engineFilter.connect(this.sfxBus),this.osc1=t.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.value=60,this.osc2=t.createOscillator(),this.osc2.type="sawtooth",this.osc2.frequency.value=62,this.osc2.detune.value=9,this.osc3=t.createOscillator(),this.osc3.type="square",this.osc3.frequency.value=30;const e=t.createGain();e.gain.value=.55,this.osc1.connect(this.engineFilter),this.osc2.connect(this.engineFilter),this.osc3.connect(e),e.connect(this.engineFilter),this.osc1.start(),this.osc2.start(),this.osc3.start(),this.engineNoise=this.makeLoopNoise(),this.engineNoiseGain=t.createGain(),this.engineNoiseGain.gain.value=0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=420,n.Q.value=1.1,this.engineNoise.connect(n),n.connect(this.engineNoiseGain),this.engineNoiseGain.connect(this.sfxBus),this.engineNoiseBp=n}setupTires(){const t=this.ctx;this.tireNoise=this.makeLoopNoise(),this.tireFilter=t.createBiquadFilter(),this.tireFilter.type="bandpass",this.tireFilter.frequency.value=1700,this.tireFilter.Q.value=7,this.tireGain=t.createGain(),this.tireGain.gain.value=0,this.tireNoise.connect(this.tireFilter),this.tireFilter.connect(this.tireGain),this.tireGain.connect(this.sfxBus),this.tireGain.connect(this.reverb),this.sandNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=520,this.sandGain=t.createGain(),this.sandGain.gain.value=0,this.sandNoise.connect(e),e.connect(this.sandGain),this.sandGain.connect(this.sfxBus)}setupWind(){const t=this.ctx;this.windNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700;const n=t.createBiquadFilter();n.type="highpass",n.frequency.value=120,this.windGain=t.createGain(),this.windGain.gain.value=.02,this.windNoise.connect(n),n.connect(e),e.connect(this.windGain),this.windGain.connect(this.sfxBus)}setupBoost(){const t=this.ctx;this.boostNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="bandpass",e.frequency.value=900,e.Q.value=1.4,this.boostGain=t.createGain(),this.boostGain.gain.value=0,this.boostNoise.connect(e),e.connect(this.boostGain),this.boostGain.connect(this.sfxBus),this.boostFilter=e}updateEngine(t){if(!this.ready)return;const e=this.ctx.currentTime,{speed:n=0,throttle:i=0,boosting:r=!1,slip:a=0,grounded:o=!0,offRoad:l=!1,slipFactor:c=0,active:h=!0}=t,d=n*3.6,u=Pt(Math.floor(d/52),0,5),p=(d-u*52)/52,g=Pt(.16+p*.84+i*.06,0,1.1),_=44+g*(86+u*9)+(r?16:0);this.engineFilter.frequency.setTargetAtTime(500+g*1500+i*700,e,.06),this.osc1.frequency.setTargetAtTime(_,e,.045),this.osc2.frequency.setTargetAtTime(_*1.01,e,.045),this.osc3.frequency.setTargetAtTime(_*.5,e,.045),this.engineNoiseBp.frequency.setTargetAtTime(300+g*800,e,.08);const m=h?(.11+i*.1+g*.05)*(this.paused?.4:1):0;this.engineGain.gain.setTargetAtTime(m,e,.1),this.engineNoiseGain.gain.setTargetAtTime(h?.035+i*.03:0,e,.1);const f=o?Pt((c-.08)*.55,0,.28)*Pt(n/22,0,1):0;this.tireGain.gain.setTargetAtTime(h?f:0,e,.05),this.tireFilter.frequency.setTargetAtTime(1400+c*900,e,.1),this.sandGain.gain.setTargetAtTime(h&&l?.16:0,e,.1);const v=Pt(n/78,0,1);this.windGain.gain.setTargetAtTime(.015+v*v*.16,e,.2),this.boostGain.gain.setTargetAtTime(r?.15:0,e,.09),this.boostFilter.frequency.setTargetAtTime(r?1500:500,e,.2)}boostWhoosh(){if(!this.ready)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuffer;const i=t.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(400,e),i.frequency.exponentialRampToValueAtTime(2600,e+.35),i.Q.value=2;const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.34,e+.05),r.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(i),i.connect(r),r.connect(this.sfxBus),n.start(e),n.stop(e+.55);const a=t.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(90,e),a.frequency.exponentialRampToValueAtTime(220,e+.4);const o=t.createGain();o.gain.setValueAtTime(.08,e),o.gain.exponentialRampToValueAtTime(.001,e+.45),a.connect(o),o.connect(this.sfxBus),a.start(e),a.stop(e+.5)}tone({freq:t=440,type:e="sine",dur:n=.2,gain:i=.1,when:r=0,slide:a=null,filter:o=null}){if(!this.ready)return;const l=this.ctx,c=l.currentTime+r,h=l.createOscillator();h.type=e,h.frequency.setValueAtTime(t,c),a&&h.frequency.exponentialRampToValueAtTime(Math.max(20,a),c+n);const d=l.createGain();d.gain.setValueAtTime(0,c),d.gain.linearRampToValueAtTime(i,c+.012),d.gain.exponentialRampToValueAtTime(8e-4,c+n);let u=h;if(o){const p=l.createBiquadFilter();p.type="lowpass",p.frequency.value=o,h.connect(p),u=p}u.connect(d),d.connect(this.sfxBus),h.start(c),h.stop(c+n+.05)}noiseBurst({dur:t=.2,gain:e=.2,freq:n=1200,type:i="bandpass",q:r=1,when:a=0}){if(!this.ready)return;const o=this.ctx,l=o.currentTime+a,c=o.createBufferSource();c.buffer=this.noiseBuffer;const h=o.createBiquadFilter();h.type=i,h.frequency.value=n,h.Q.value=r;const d=o.createGain();d.gain.setValueAtTime(e,l),d.gain.exponentialRampToValueAtTime(.001,l+t),c.connect(h),h.connect(d),d.connect(this.sfxBus),c.start(l),c.stop(l+t+.02)}landing(t=10){const e=Pt(t/20,.2,1.3);this.tone({freq:120,slide:40,type:"sine",dur:.28,gain:.22*e}),this.noiseBurst({dur:.22,gain:.18*e,freq:420,q:.7})}impact(t=1){this.noiseBurst({dur:.32,gain:.3*t,freq:240,q:.8}),this.tone({freq:90,slide:30,type:"square",dur:.25,gain:.16*t}),this.tone({freq:2400,slide:900,type:"triangle",dur:.12,gain:.05*t})}wallScrape(){this.noiseBurst({dur:.1,gain:.08,freq:3200,q:6})}checkpoint(){this.tone({freq:740,type:"triangle",dur:.16,gain:.14}),this.tone({freq:988,type:"triangle",dur:.22,gain:.12,when:.09}),this.tone({freq:1480,type:"sine",dur:.3,gain:.08,when:.18})}lap(){[659,784,988,1319].forEach((e,n)=>this.tone({freq:e,type:"triangle",dur:.3,gain:.13,when:n*.11}))}driftChain(t=2){const e=520+t*90;this.tone({freq:e,type:"sine",dur:.12,gain:.07}),this.tone({freq:e*1.5,type:"sine",dur:.16,gain:.05,when:.05})}nearMiss(){this.tone({freq:1800,slide:900,type:"sine",dur:.16,gain:.07}),this.noiseBurst({dur:.16,gain:.05,freq:2600,q:2})}countdown(t=!1){t?(this.tone({freq:880,type:"square",dur:.5,gain:.15,filter:3e3}),this.tone({freq:1320,type:"triangle",dur:.6,gain:.1}),this.noiseBurst({dur:.5,gain:.1,freq:800,q:.7})):this.tone({freq:440,type:"square",dur:.18,gain:.13,filter:2200})}uiClick(){this.tone({freq:520,type:"triangle",dur:.06,gain:.07})}uiBack(){this.tone({freq:380,slide:240,type:"triangle",dur:.1,gain:.06})}finish(){[523,659,784,1046,1319,1568].forEach((e,n)=>this.tone({freq:e,type:"triangle",dur:.5,gain:.12,when:n*.14})),this.noiseBurst({dur:1.2,gain:.08,freq:700,q:.6,when:.1})}setPaused(t){if(this.paused=t,!this.ready)return;const e=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(t?this.musicVolume*.12:this.musicVolume*(this.intensity>0?.5:.62),e,.3),this.sfxBus.gain.setTargetAtTime(t?0:this.sfxVolume,e,.2),this.engineGain.gain.setTargetAtTime(0,e,.1)}setVolumes(t,e){if(this.musicVolume=t,this.sfxVolume=e,!this.ready)return;const n=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.paused?t*.12:t*(this.intensity>0?.5:.62),n,.2),this.sfxBus.gain.setTargetAtTime(this.paused?0:e,n,.15)}setIntensity(t){this.intensity=t,this.ready&&this.musicBus.gain.setTargetAtTime(this.paused?this.musicVolume*.12:this.musicVolume*(t>0?.52:.62),this.ctx.currentTime,1.2)}startMusic(){!this.ready||this.musicStarted||(this.musicStarted=!0,this.nextNoteTime=this.ctx.currentTime+.15,this.step=0,this.timer=setInterval(()=>this.scheduler(),25),this.scheduler())}scheduler(){if(!this.ready)return;const t=60/124/4;for(;this.nextNoteTime<this.ctx.currentTime+.16;)this.playStep(this.step,this.nextNoteTime,t),this.nextNoteTime+=t,this.step=(this.step+1)%64}playStep(t,e,n){this.ctx;const i=Math.floor(t/16),r=t%16,a=this.intensity,o=a>=2;(r===0||r===6||r===8||r===14&&a>0||r===11&&o)&&this.musicKick(e),(r===4||r===12)&&this.musicSnare(e,o),r%2===0&&a>0?this.musicHat(e,r%4===0?.06:.035):a===0&&r%4===2&&this.musicHat(e,.02),o&&r%2===1&&this.musicHat(e,.018);const l=g0[r];if(l>=0&&this.musicBass(e,l,n*1.7,a),r===0){const c=[40,41,40,38][i%4];this.musicPad(e,[c,c+7,c+12,c+15],n*16)}if(a>=1){const h=(i%4<2?Rl:_0)[r];h>0&&this.musicLead(e,h+(i%2===1?12:0),n*(o?1.4:2),a)}else if(i%2===0){const h=Rl[r];h>0&&r%4===0&&this.musicLead(e,h,n*3,0)}a>0&&r>=13&&i%4===3&&this.musicTom(e,120+(15-r)*20,.09)}musicKick(t){const e=this.ctx,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(150,t),n.frequency.exponentialRampToValueAtTime(42,t+.16),i.gain.setValueAtTime(.55,t),i.gain.exponentialRampToValueAtTime(.001,t+.3),n.connect(i),i.connect(this.musicBus),n.start(t),n.stop(t+.32)}musicSnare(t,e){const n=this.ctx,i=n.createBufferSource();i.buffer=this.noiseBuffer;const r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=2100,r.Q.value=1.2;const a=n.createGain();a.gain.setValueAtTime(e?.22:.15,t),a.gain.exponentialRampToValueAtTime(.001,t+.18),i.connect(r),r.connect(a),a.connect(this.musicBus),i.start(t),i.stop(t+.2);const o=n.createOscillator(),l=n.createGain();o.type="triangle",o.frequency.setValueAtTime(190,t),l.gain.setValueAtTime(.09,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),o.connect(l),l.connect(this.musicBus),o.start(t),o.stop(t+.14)}musicHat(t,e){const n=this.ctx,i=n.createBufferSource();i.buffer=this.noiseBuffer;const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=7200;const a=n.createGain();a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(.001,t+.05),i.connect(r),r.connect(a),a.connect(this.musicBus),i.start(t),i.stop(t+.06)}musicBass(t,e,n,i){const r=this.ctx,a=r.createOscillator(),o=r.createOscillator();a.type="sawtooth",o.type="square",a.frequency.value=Gs(e),o.frequency.value=Gs(e)*.5;const l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1200,t),l.frequency.exponentialRampToValueAtTime(260,t+n),l.Q.value=5;const c=r.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(i>0?.24:.14,t+.01),c.gain.exponentialRampToValueAtTime(.001,t+n),a.connect(l),o.connect(l),l.connect(c),c.connect(this.musicBus),a.start(t),o.start(t),a.stop(t+n+.02),o.stop(t+n+.02)}musicPad(t,e,n){const i=this.ctx,r=i.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.055,t+.8),r.gain.linearRampToValueAtTime(0,t+n);const a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.7,r.connect(a),a.connect(this.musicBus),a.connect(this.musicReverb);for(const o of e){const l=i.createOscillator();l.type="sawtooth",l.frequency.value=Gs(o),l.detune.value=(Math.random()-.5)*14,l.connect(r),l.start(t),l.stop(t+n+.1)}}musicLead(t,e,n,i){const r=this.ctx,a=r.createGain(),o=i>0?.085:.05;a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(o,t+.02),a.gain.exponentialRampToValueAtTime(.001,t+n);const l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(3200,t),l.frequency.exponentialRampToValueAtTime(1400,t+n),l.Q.value=2,a.connect(l),l.connect(this.musicBus),l.connect(this.musicReverb);for(const[c,h,d]of[["sawtooth",0,1],["triangle",7,2]]){const u=r.createOscillator();u.type=c,u.frequency.value=Gs(e)*d,u.detune.value=h,u.connect(a),u.start(t),u.stop(t+n+.05)}}musicTom(t,e,n){const i=this.ctx,r=i.createOscillator(),a=i.createGain();r.type="sine",r.frequency.setValueAtTime(e,t),r.frequency.exponentialRampToValueAtTime(e*.55,t+.16),a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(.001,t+.2),r.connect(a),a.connect(this.musicBus),r.start(t),r.stop(t+.22)}}const x0={ArrowUp:"throttle",KeyW:"throttle",ArrowDown:"brake",KeyS:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",Space:"drift",ShiftLeft:"boost",ShiftRight:"boost",KeyC:"camera",KeyR:"restart",Escape:"pause",KeyP:"pause",KeyM:"mute",Enter:"confirm",KeyH:"help",Tab:"help"},M0={pause:["Escape","KeyP"],camera:["KeyC"],restart:["KeyR"],confirm:["Enter","NumpadEnter"],back:["Escape","Backspace"],help:["KeyH","Tab"],mute:["KeyM"],up:["ArrowUp","KeyW"],down:["ArrowDown","KeyS"],left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"]},Hs=-1;class S0{constructor(t){this.canvas=t,this.keys=new Set,this.buffer=new Map,this.state={steer:0,throttle:0,brake:0,handbrake:!1,boost:!1},this.rawSteer=0,this.touch={left:!1,right:!1,throttle:!1,brake:!1,drift:!1,boost:!1},this.mouse={down:!1,right:!1,x:.5,y:.5,active:!1},this.gamepadIndex=null,this.pad={steer:0,throttle:0,brake:0,drift:!1,boost:!1},this.boostLatch=0,this.driftLatch=0,this.lastDevice="keyboard",this.onFirstInput=null,this.interacted=!1,window.addEventListener("keydown",e=>this.onKeyDown(e),{passive:!1}),window.addEventListener("keyup",e=>this.onKeyUp(e)),window.addEventListener("blur",()=>{this.keys.clear(),this.state.handbrake=!1,this.state.boost=!1}),t.addEventListener("pointerdown",e=>{var n;this.notify(),e.button===0?(this.mouse.down=!0,this.mouse.active=!0,this.mouse.x=e.clientX/window.innerWidth*2-1,this.lastDevice="mouse",(n=t.setPointerCapture)==null||n.call(t,e.pointerId)):e.button===2&&(this.mouse.right=!0)}),t.addEventListener("pointerup",e=>{e.button===0&&(this.mouse.down=!1),e.button===2&&(this.mouse.right=!1)}),t.addEventListener("pointercancel",()=>{this.mouse.down=!1,this.mouse.right=!1}),t.addEventListener("pointermove",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=e.clientY/window.innerHeight*2-1,this.mouse.down&&(this.mouse.active=!0)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("gamepadconnected",e=>{this.gamepadIndex=e.gamepad.index,this.lastDevice="gamepad",this.notify()}),window.addEventListener("gamepaddisconnected",()=>{this.gamepadIndex=null}),window.addEventListener("pointerdown",()=>this.notify(),{once:!0}),window.addEventListener("keydown",()=>this.notify(),{once:!0})}notify(){var t;this.interacted=!0,(t=this.onFirstInput)==null||t.call(this)}onKeyDown(t){if(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))return;const e=x0[t.code];if(e){if((["throttle","brake","left","right","drift","boost","help"].includes(e)||t.code==="Space")&&t.preventDefault(),!this.keys.has(t.code)){e==="boost"&&(this.boostLatch=.18),e==="drift"&&(this.driftLatch=.18);for(const[n,i]of Object.entries(M0))i.includes(t.code)&&this.buffer.set(n,performance.now());t.code==="Space"&&this.buffer.set("confirm",performance.now())}this.keys.add(t.code),this.lastDevice="keyboard",this.mouse.active=!1}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&this.buffer.set(t.code.replace("Arrow","").toLowerCase(),performance.now())}onKeyUp(t){this.keys.delete(t.code)}key(...t){return t.some(e=>this.keys.has(e))}consume(t,e=220){const n=this.buffer.get(t);return n===void 0?!1:performance.now()-n>e?(this.buffer.delete(t),!1):(this.buffer.delete(t),!0)}clearBuffer(){this.buffer.clear()}setTouch(t,e){t in this.touch&&(this.touch[t]=e),e&&(this.lastDevice="touch")}resetTouch(){for(const t of Object.keys(this.touch))this.touch[t]=!1}pollGamepad(){var l,c,h,d,u,p,g,_,m,f;if(!navigator.getGamepads)return;const t=navigator.getGamepads();let e=this.gamepadIndex!==null?t[this.gamepadIndex]:null;if(!e){for(const v of t)if(v&&v.connected){e=v,this.gamepadIndex=v.index;break}}if(!e||!e.connected){this.pad.steer=0,this.pad.throttle=0,this.pad.brake=0,this.pad.drift=!1,this.pad.boost=!1;return}const n=e.axes[0]||0,i=.16;let r=Math.abs(n)<i?0:Math.sign(n)*(Math.abs(n)-i)/(1-i);r=Math.sign(r)*Math.pow(Math.abs(r),1.35),this.pad.steer=r*Hs,this.pad.throttle=((l=e.buttons[7])==null?void 0:l.value)||0,this.pad.brake=((c=e.buttons[6])==null?void 0:c.value)||0;const a=v=>{var S;return!!((S=e.buttons[v])!=null&&S.pressed)};this.pad.drift=a(0),this.pad.boost=a(1)||a(5),(this.pad.drift||this.pad.boost||Math.abs(r)>.2||this.pad.throttle>.1)&&(this.lastDevice="gamepad"),(h=e.buttons[0])!=null&&h.pressed&&this.buffer.set("confirm",performance.now()),(d=e.buttons[9])!=null&&d.pressed&&this.buffer.set("pause",performance.now()),(u=e.buttons[3])!=null&&u.pressed&&this.buffer.set("restart",performance.now()),(p=e.buttons[2])!=null&&p.pressed&&this.buffer.set("camera",performance.now());const o=e.axes[1]||0;o<-.6&&this.buffer.set("up",performance.now()),o>.6&&this.buffer.set("down",performance.now()),(g=e.buttons[12])!=null&&g.pressed&&this.buffer.set("up",performance.now()),(_=e.buttons[13])!=null&&_.pressed&&this.buffer.set("down",performance.now()),(m=e.buttons[14])!=null&&m.pressed&&this.buffer.set("left",performance.now()),(f=e.buttons[15])!=null&&f.pressed&&this.buffer.set("right",performance.now())}update(t){this.pollGamepad();const e=this.touch,n=this.key("ArrowLeft","KeyA"),i=this.key("ArrowRight","KeyD");let r=((i?1:0)-(n?1:0))*Hs;(n||i)&&(this.lastDevice="keyboard");const a=this.mouse.down&&this.mouse.active&&this.lastDevice==="mouse"?Pt(this.mouse.x*1.5,-1,1)*Hs:null,o=Math.abs(this.pad.steer)>.02?this.pad.steer:null;let l,c=8;e.left||e.right?(l=((e.right?1:0)-(e.left?1:0))*Hs,c=9):a!==null?(l=a,c=12,this.lastDevice="mouse"):o!==null?(l=o,c=13):(l=r,c=r===0?13:7.2),this.rawSteer=l,this.state.steer=fe(this.state.steer,l,c,t);const h=this.key("ArrowUp","KeyW"),d=this.key("ArrowDown","KeyS");let u=h?1:0,p=d?1:0;this.mouse.down&&(u=1),this.mouse.right&&(p=1),this.pad.throttle>.05&&(u=Math.max(u,this.pad.throttle)),this.pad.brake>.05&&(p=Math.max(p,this.pad.brake)),e.throttle&&(u=1),e.brake&&(p=1),this.state.throttle=fe(this.state.throttle,u,u>this.state.throttle?10:16,t),this.state.brake=fe(this.state.brake,p,p>this.state.brake?14:18,t),this.boostLatch=Math.max(0,this.boostLatch-t),this.driftLatch=Math.max(0,this.driftLatch-t),this.state.boost=this.key("ShiftLeft","ShiftRight")||this.pad.boost||e.boost||this.boostLatch>0,this.state.handbrake=this.key("Space")||this.pad.drift||e.drift||this.driftLatch>0;for(const[g,_]of this.buffer)performance.now()-_>900&&this.buffer.delete(g)}getDrivingState(){return{steer:this.state.steer,throttle:this.state.throttle,brake:this.state.brake,handbrake:this.state.handbrake,boost:this.state.boost}}}const Et=(s,t=document)=>t.querySelector(s),Ki=(s,t=document)=>Array.from(t.querySelectorAll(s));class y0{constructor(t,e,n,i={}){this.track=t,this.audio=e,this.input=n,this.handlers=i,this.current="title",this.previous="title",this.settings=null,this.last={},this.hintTimer=0,this.deltaTimer=0,this.countdownText="",this.hud=Et("#hud"),this.screens={title:Et("#screen-title"),how:Et("#screen-how"),settings:Et("#screen-settings"),pause:Et("#screen-pause"),results:Et("#screen-results")},this.el={lap:Et("#lap-value"),time:Et("#time-value"),best:Et("#best-value"),delta:Et("#delta"),speed:Et("#speed-value"),boost:Et("#boost-fill"),boostPct:Et("#boost-pct"),style:Et("#style-value"),chain:Et("#chain"),chainMult:Et("#chain-mult"),chainTime:Et("#chain-time"),toasts:Et("#toasts"),hint:Et("#hint"),countdown:Et("#countdown"),recover:Et("#recover"),cp:Et("#cp-count"),titleBest:Et("#title-best"),pauseSub:Et("#pause-sub"),pauseTime:Et("#pause-time"),pauseBest:Et("#pause-best"),fade:Et("#fade"),touch:Et("#touch")},this.bindStatic(),this.bindTouch(),this.setupMinimap(),this.updateTouchVisibility(!1)}bindStatic(){var r;Ki("[data-action]").forEach(a=>{a.addEventListener("click",o=>{var c;o.preventDefault(),o.stopPropagation();const l=a.dataset.action;(c=this.audio)==null||c.uiClick(),this.handleAction(l)})}),(r=Et("#btn-pause"))==null||r.addEventListener("click",a=>{var o,l,c;a.stopPropagation(),(o=this.audio)==null||o.uiClick(),(c=(l=this.handlers).onPause)==null||c.call(l)});const t=Et("#toggle-assist");t==null||t.addEventListener("click",()=>{var o,l,c;const a=t.getAttribute("aria-checked")!=="true";t.setAttribute("aria-checked",String(a)),(o=this.audio)==null||o.uiClick(),(c=(l=this.handlers).onAssist)==null||c.call(l,a)}),Ki("#seg-camera button").forEach(a=>{a.addEventListener("click",()=>{var l,c,h;const o=Number(a.dataset.cam);Ki("#seg-camera button").forEach(d=>d.classList.toggle("is-on",d===a)),(l=this.audio)==null||l.uiClick(),(h=(c=this.handlers).onCamera)==null||h.call(c,o,!0)})});const e=Et("#slider-music");e==null||e.addEventListener("input",()=>{var a,o;Et("#music-val").textContent=e.value,(o=(a=this.handlers).onMusic)==null||o.call(a,Number(e.value)/100)});const n=Et("#slider-sfx");n==null||n.addEventListener("input",()=>{var a,o;Et("#sfx-val").textContent=n.value,(o=(a=this.handlers).onSfx)==null||o.call(a,Number(n.value)/100)});const i=Et("#toggle-touch");i==null||i.addEventListener("click",()=>{var o,l,c;const a=i.getAttribute("aria-checked")!=="true";(o=this.audio)==null||o.uiClick(),(c=(l=this.handlers).onTouchToggle)==null||c.call(l,a)})}handleAction(t){var e,n,i,r,a,o,l,c,h,d,u,p,g;switch(t){case"start":(n=(e=this.handlers).onStart)==null||n.call(e);break;case"pause":(r=(i=this.handlers).onPause)==null||r.call(i);break;case"resume":(o=(a=this.handlers).onResume)==null||o.call(a);break;case"restart":(c=(l=this.handlers).onRestart)==null||c.call(l);break;case"quit":(d=(h=this.handlers).onQuit)==null||d.call(h);break;case"reset-records":(p=(u=this.handlers).onResetRecords)==null||p.call(u),this.toast("Records cleared",{label:"",value:"OK",big:!1});break;case"settings":this.openSettings();break;case"how":this.openHow();break;case"back":(g=this.audio)==null||g.uiBack(),this.back();break}}openSettings(){this.previous=this.current==="settings"?this.previous:this.current,this.showScreen("settings")}openHow(){this.previous=this.current,this.showScreen("how")}back(){const t=this.previous&&this.previous!=="settings"&&this.previous!=="how"?this.previous:"title";this.showScreen(t)}showScreen(t){this.current=t||null;for(const[e,n]of Object.entries(this.screens))n.classList.toggle("is-hidden",e!==t);document.body.dataset.screen=t||"race",this.hud.classList.toggle("is-off",!!t&&t!=="pause")}setHUD(t){this.hud.classList.toggle("is-hidden",!t)}setScreen(t){this.showScreen(t)}updateTouchVisibility(t){this.el.touch.classList.toggle("is-on",!!t)}setSettings(t){this.settings=t;const e=Et("#toggle-assist");e&&e.setAttribute("aria-checked",String(!!t.assist)),Ki("#seg-camera button").forEach(a=>a.classList.toggle("is-on",Number(a.dataset.cam)===(t.camera||0)));const n=Et("#slider-music");n&&(n.value=Math.round((t.music??.65)*100),Et("#music-val").textContent=n.value);const i=Et("#slider-sfx");i&&(i.value=Math.round((t.sfx??.8)*100),Et("#sfx-val").textContent=i.value);const r=Et("#toggle-touch");r&&r.setAttribute("aria-checked",String(!!t.touch))}setTitleBest(t){this.el.titleBest.textContent=t&&t.lap?`BEST LAP ${Je(t.lap)}`:"BEST LAP —"}updateHUD(t){const e=this.el,n=`${t.lap}<i>/${t.totalLaps}</i>`;this.last.lap!==n&&(e.lap.innerHTML=n,this.last.lap=n);const i=Je(t.time);this.last.time!==i&&(e.time.textContent=i,this.last.time=i);const r=t.bestLap?Je(t.bestLap):"—";this.last.best!==r&&(e.best.textContent=r,this.last.best=r);const a=Math.round(Math.max(0,t.speed*3.6));this.last.speed!==a&&(e.speed.textContent=String(a),this.last.speed=a);const o=Pt(t.boost,0,100),l=Math.round(o);this.last.boost!==l&&(e.boost.style.width=`${o}%`,e.boostPct.textContent=`${l}%`,e.boost.classList.toggle("is-low",o<18),this.last.boost=l);const c=Math.round(t.style);this.last.style!==c&&(e.style.textContent=c.toLocaleString("en-US"),this.last.style=c);const h=`CP ${t.checkpoint}/${t.totalCheckpoints}`;this.last.cp!==h&&(e.cp.textContent=h,this.last.cp=h);const d=!!t.chain.active&&t.chain.chain>.28;if(e.chain.classList.toggle("is-on",d),d){const u=`x${t.chain.mult}`;e.chainMult.textContent!==u&&(e.chainMult.textContent=u),e.chainTime.textContent=`${t.chain.chain.toFixed(1)}s`}}showDelta(t){const e=this.el.delta;e.textContent=wl(t),e.classList.remove("fast","slow"),e.classList.add(t<=0?"fast":"slow"),e.classList.add("is-on"),clearTimeout(this.deltaTimer),this.deltaTimer=setTimeout(()=>e.classList.remove("is-on"),2800)}countdown(t,e=!1){const n=this.el.countdown;if(!t){n.classList.remove("is-on","pop","go","word"),n.textContent="",this.countdownText="";return}n.classList.remove("is-on","pop","go","word"),n.textContent=t,n.offsetWidth,n.classList.add("is-on","pop"),n.classList.toggle("go",e),n.classList.toggle("word",t.length>3),this.countdownText=t}recover(t){this.el.recover.classList.toggle("is-on",t)}toast(t,e={}){const{value:n="",cls:i="",big:r=!1,duration:a=1.9}=e;if(!t&&!n)return;const o=document.createElement("div");for(o.className=`toast ${i} ${r?"big":""}`.trim(),o.innerHTML=n?`<b>${n}</b>${t}`:t,this.el.toasts.appendChild(o);this.el.toasts.children.length>3;)this.el.toasts.removeChild(this.el.toasts.firstElementChild);setTimeout(()=>o.remove(),Math.max(900,a*1e3))}hint(t,e=4){const n=this.el.hint;if(!t){n.classList.remove("is-on");return}n.innerHTML=t,n.classList.add("is-on"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>n.classList.remove("is-on"),e*1e3)}setPauseInfo({lap:t,totalLaps:e,time:n,bestLap:i}){this.el.pauseSub.textContent=`Sunbreak Canyon · Lap ${t} of ${e}`,this.el.pauseTime.textContent=Je(n),this.el.pauseBest.textContent=i?Je(i):"—"}setResults(t){Et("#results-title").innerHTML=t.title||"Sunbreak <em>Flyer</em>",Et("#results-total").textContent=Je(t.total),Et("#results-record").classList.toggle("is-on",!!t.newBest);const e=Et("#results-lap-rows");e.innerHTML="";const n=t.best;t.laps.forEach((i,r)=>{if(!isFinite(i))return;const a=Math.abs(i-n)<.001,o=document.createElement("div");o.className=`results-lap${a?" is-best":""}`;const l=i-n;o.innerHTML=`
        <span>LAP ${r+1}</span>
        <strong>${Je(i)}</strong>
        <span class="lap-delta ${l<-.001?"fast":l>.001?"slow":""}">${a?"BEST":wl(l)}</span>`,e.appendChild(o)}),Et("#results-best").textContent=Je(n),Et("#results-best-delta").textContent=t.bestLabel||"",Et("#stat-style").textContent=Math.round(t.style).toLocaleString("en-US"),Et("#stat-speed").innerHTML=`${Math.round(t.topSpeed)} <i>km/h</i>`,Et("#stat-chain").innerHTML=`${t.bestChain.toFixed(1)} <i>s</i>`,Et("#stat-air").innerHTML=`${t.airTime.toFixed(1)} <i>s</i>`,Et("#stat-near").textContent=String(t.nearMisses),Et("#stat-land").textContent=String(t.cleanLandings)}setupMinimap(){const t=Et("#minimap");if(!t)return;this.map=t,this.mapCtx=t.getContext("2d"),this.mapW=t.width,this.mapH=t.height;const e=this.track.mapPoints;let n=1/0,i=-1/0,r=1/0,a=-1/0;for(const _ of e)n=Math.min(n,_.x),i=Math.max(i,_.x),r=Math.min(r,_.z),a=Math.max(a,_.z);const o=34,l=Math.min((this.mapW-o*2)/Math.max(1,i-n),(this.mapH-o*2)/Math.max(1,a-r)),c=(n+i)/2,h=(r+a)/2;this.mapScale=l,this.mapCenter={x:c,z:h},this.toMap=(_,m)=>({x:this.mapW/2+(_-c)*l,y:this.mapH/2+(m-h)*l});const d=document.createElement("canvas");d.width=this.mapW,d.height=this.mapH;const u=d.getContext("2d");u.lineJoin="round",u.lineCap="round";const p=new Path2D;e.forEach((_,m)=>{const f=this.toMap(_.x,_.z);m===0?p.moveTo(f.x,f.y):p.lineTo(f.x,f.y)}),p.closePath(),u.strokeStyle="rgba(20, 9, 5, 0.55)",u.lineWidth=18,u.stroke(p),u.strokeStyle="rgba(255, 168, 84, 0.16)",u.lineWidth=13,u.stroke(p),u.strokeStyle="rgba(244, 227, 194, 0.34)",u.lineWidth=7,u.stroke(p),u.strokeStyle="rgba(255, 218, 158, 0.92)",u.lineWidth=3,u.stroke(p),this.gateMap=this.track.gateS.map(_=>{const m=this.track.samplePos(_,0);return this.toMap(m.x,m.z)});for(const _ of this.gateMap)u.beginPath(),u.arc(_.x,_.y,3.1,0,Math.PI*2),u.fillStyle="rgba(30, 16, 10, 0.9)",u.fill(),u.beginPath(),u.arc(_.x,_.y,1.7,0,Math.PI*2),u.fillStyle="rgba(255, 203, 110, 0.85)",u.fill();const g=this.toMap(this.track.samplePos(this.track.gateS[0],0).x,this.track.samplePos(this.track.gateS[0],0).z);u.save(),u.translate(g.x,g.y),u.rotate(-.5),u.fillStyle="#8cf5d9",u.fillRect(-5,-1.2,10,2.4),u.restore(),this.mapBase=d}drawMinimap(t,e=0){if(!this.mapCtx)return;const n=this.mapCtx;if(n.clearRect(0,0,this.mapW,this.mapH),n.drawImage(this.mapBase,0,0),this.gateMap&&this.gateMap[e]){const l=this.gateMap[e];n.beginPath(),n.arc(l.x,l.y,7,0,Math.PI*2),n.strokeStyle="rgba(255, 203, 110, 0.55)",n.lineWidth=1.5,n.stroke()}const i=this.toMap(t.pos.x,t.pos.z),r=Math.sin(t.yaw),a=Math.cos(t.yaw),o=Math.atan2(a,r)+Math.PI/2;n.save(),n.translate(i.x,i.y),n.rotate(o),n.shadowColor="rgba(255, 160, 70, 0.95)",n.shadowBlur=10,n.beginPath(),n.moveTo(0,-7.5),n.lineTo(5.2,5.2),n.lineTo(0,2.6),n.lineTo(-5.2,5.2),n.closePath(),n.fillStyle="#ffb356",n.fill(),n.shadowBlur=0,n.lineWidth=1,n.strokeStyle="rgba(34, 15, 8, 0.85)",n.stroke(),n.restore()}bindTouch(){const t=Ki("#touch [data-touch]"),e=new Map;for(const n of t){const i=n.dataset.touch,r=o=>{var l,c;o.preventDefault(),o.stopPropagation(),n.classList.add("is-held"),(l=n.setPointerCapture)==null||l.call(n,o.pointerId),e.set(o.pointerId,i),this.input.setTouch(i,!0),(c=this.audio)==null||c.uiClick()},a=o=>{o.preventDefault(),o.stopPropagation(),n.classList.remove("is-held"),this.input.setTouch(i,!1),e.delete(o.pointerId)};n.addEventListener("pointerdown",r),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),n.addEventListener("lostpointercapture",a),n.addEventListener("contextmenu",o=>o.preventDefault())}}fade(t){this.el.fade.classList.toggle("is-on",!!t)}}const er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ni{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const T0=new Ja(-1,1,1,-1,0,1);class b0 extends oe{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const E0=new b0;class oo{constructor(t){this._mesh=new At(E0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,T0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class yc extends Ni{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=jn.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new oo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Cl extends Ni{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class w0 extends Ni{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class A0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Lt);this._width=n.width,this._height=n.height,e=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yc(er),this.copyPass.material.blending=Ie,this.clock=new Zm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cl!==void 0&&(a instanceof Cl?n=!0:a instanceof w0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class R0 extends Ni{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const C0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class P0 extends Ni{constructor(){super();const t=C0;this.uniforms=jn.clone(t.uniforms),this.material=new Hm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new oo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class L0{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}noise(t,e){let n,i,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,p=c-d,g=t-u,_=e-p;let m,f;g>_?(m=1,f=0):(m=0,f=1);const v=g-m+h,S=_-f+h,x=g-1+2*h,L=_-1+2*h,A=l&255,E=c&255,C=this.perm[A+this.perm[E]]%12,y=this.perm[A+m+this.perm[E+f]]%12,M=this.perm[A+1+this.perm[E+1]]%12;let R=.5-g*g-_*_;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[C],g,_));let I=.5-v*v-S*S;I<0?i=0:(I*=I,i=I*I*this.dot(this.grad3[y],v,S));let O=.5-x*x-L*L;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[M],x,L)),70*(n+i+r)}noise3d(t,e,n){let i,r,a,o;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),p=1/6,g=(h+d+u)*p,_=h-g,m=d-g,f=u-g,v=t-_,S=e-m,x=n-f;let L,A,E,C,y,M;v>=S?S>=x?(L=1,A=0,E=0,C=1,y=1,M=0):v>=x?(L=1,A=0,E=0,C=1,y=0,M=1):(L=0,A=0,E=1,C=1,y=0,M=1):S<x?(L=0,A=0,E=1,C=0,y=1,M=1):v<x?(L=0,A=1,E=0,C=0,y=1,M=1):(L=0,A=1,E=0,C=1,y=1,M=0);const R=v-L+p,I=S-A+p,O=x-E+p,H=v-C+2*p,X=S-y+2*p,W=x-M+2*p,$=v-1+3*p,V=S-1+3*p,tt=x-1+3*p,at=h&255,mt=d&255,Ct=u&255,Xt=this.perm[at+this.perm[mt+this.perm[Ct]]]%12,q=this.perm[at+L+this.perm[mt+A+this.perm[Ct+E]]]%12,et=this.perm[at+C+this.perm[mt+y+this.perm[Ct+M]]]%12,it=this.perm[at+1+this.perm[mt+1+this.perm[Ct+1]]]%12;let j=.6-v*v-S*S-x*x;j<0?i=0:(j*=j,i=j*j*this.dot3(this.grad3[Xt],v,S,x));let dt=.6-R*R-I*I-O*O;dt<0?r=0:(dt*=dt,r=dt*dt*this.dot3(this.grad3[q],R,I,O));let gt=.6-H*H-X*X-W*W;gt<0?a=0:(gt*=gt,a=gt*gt*this.dot3(this.grad3[et],H,X,W));let Tt=.6-$*$-V*V-tt*tt;return Tt<0?o=0:(Tt*=Tt,o=Tt*Tt*this.dot3(this.grad3[it],$,V,tt)),32*(i+r+a+o)}noise4d(t,e,n,i){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,u,p,g;const _=(t+e+n+i)*l,m=Math.floor(t+_),f=Math.floor(e+_),v=Math.floor(n+_),S=Math.floor(i+_),x=(m+f+v+S)*c,L=m-x,A=f-x,E=v-x,C=S-x,y=t-L,M=e-A,R=n-E,I=i-C,O=y>M?32:0,H=y>R?16:0,X=M>R?8:0,W=y>I?4:0,$=M>I?2:0,V=R>I?1:0,tt=O+H+X+W+$+V,at=a[tt][0]>=3?1:0,mt=a[tt][1]>=3?1:0,Ct=a[tt][2]>=3?1:0,Xt=a[tt][3]>=3?1:0,q=a[tt][0]>=2?1:0,et=a[tt][1]>=2?1:0,it=a[tt][2]>=2?1:0,j=a[tt][3]>=2?1:0,dt=a[tt][0]>=1?1:0,gt=a[tt][1]>=1?1:0,Tt=a[tt][2]>=1?1:0,Yt=a[tt][3]>=1?1:0,zt=y-at+c,ne=M-mt+c,U=R-Ct+c,be=I-Xt+c,Vt=y-q+2*c,Gt=M-et+2*c,wt=R-it+2*c,Jt=I-j+2*c,bt=y-dt+3*c,w=M-gt+3*c,T=R-Tt+3*c,B=I-Yt+3*c,K=y-1+4*c,J=M-1+4*c,Y=R-1+4*c,vt=I-1+4*c,rt=m&255,lt=f&255,kt=v&255,Q=S&255,ft=o[rt+o[lt+o[kt+o[Q]]]]%32,Rt=o[rt+at+o[lt+mt+o[kt+Ct+o[Q+Xt]]]]%32,Dt=o[rt+q+o[lt+et+o[kt+it+o[Q+j]]]]%32,pt=o[rt+dt+o[lt+gt+o[kt+Tt+o[Q+Yt]]]]%32,Wt=o[rt+1+o[lt+1+o[kt+1+o[Q+1]]]]%32;let It=.6-y*y-M*M-R*R-I*I;It<0?h=0:(It*=It,h=It*It*this.dot4(r[ft],y,M,R,I));let Kt=.6-zt*zt-ne*ne-U*U-be*be;Kt<0?d=0:(Kt*=Kt,d=Kt*Kt*this.dot4(r[Rt],zt,ne,U,be));let D=.6-Vt*Vt-Gt*Gt-wt*wt-Jt*Jt;D<0?u=0:(D*=D,u=D*D*this.dot4(r[Dt],Vt,Gt,wt,Jt));let st=.6-bt*bt-w*w-T*T-B*B;st<0?p=0:(st*=st,p=st*st*this.dot4(r[pt],bt,w,T,B));let G=.6-K*K-J*J-Y*Y-vt*vt;return G<0?g=0:(G*=G,g=G*G*this.dot4(r[Wt],K,J,Y,vt)),27*(h+d+u+p+g)}}const Ws={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Lt},cameraProjectionMatrix:{value:new ie},cameraInverseProjectionMatrix:{value:new ie},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},Xs={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},qs={uniforms:{tDiffuse:{value:null},resolution:{value:new Lt}},vertexShader:`varying vec2 vUv;

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

		}`};class Mn extends Ni{constructor(t,e,n,i,r=32){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new to;a.format=ni,a.type=ei,this.normalRenderTarget=new cn(this.width,this.height,{minFilter:Fe,magFilter:Fe,type:On,depthTexture:a}),this.ssaoRenderTarget=new cn(this.width,this.height,{type:On}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new ve({defines:Object.assign({},Ws.defines),uniforms:jn.clone(Ws.uniforms),vertexShader:Ws.vertexShader,fragmentShader:Ws.fragmentShader,blending:Ie}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Wm,this.normalMaterial.blending=Ie,this.blurMaterial=new ve({defines:Object.assign({},qs.defines),uniforms:jn.clone(qs.uniforms),vertexShader:qs.vertexShader,fragmentShader:qs.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ve({defines:Object.assign({},Xs.defines),uniforms:jn.clone(Xs.uniforms),vertexShader:Xs.vertexShader,fragmentShader:Xs.fragmentShader,blending:Ie}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ve({uniforms:jn.clone(er.uniforms),vertexShader:er.vertexShader,fragmentShader:er.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:zl,blendDst:jr,blendEquation:xn,blendSrcAlpha:Bl,blendDstAlpha:jr,blendEquationAlpha:xn}),this.fsQuad=new oo(null),this.originalClearColor=new _t}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Mn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Mn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Mn.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Mn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Mn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ol,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,i,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,i,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const i=new P;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let r=n/t;r=Mh.lerp(.1,1,r*r),i.multiplyScalar(r),e.push(i)}}generateRandomKernelRotations(){const n=new L0,i=4*4,r=new Float32Array(i);for(let a=0;a<i;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=n.noise3d(o,l,c)}this.noiseTexture=new Fm(r,4,4,Wa,ln),this.noiseTexture.wrapS=ns,this.noiseTexture.wrapT=ns,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const i=e.get(n);n.visible=i}),e.clear()}}Mn.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Xn=3,Zi=6,Pl="sunbreak.settings.v1",Kr="sunbreak.records.v1",$i=1/120,Ll={steer:0,throttle:0,brake:0,handbrake:!1,boost:!1};function Dl(s,t){try{const e=localStorage.getItem(s);if(!e)return t;const n=JSON.parse(e);return n&&typeof n=="object"?n:t}catch{return t}}function Zr(s,t){try{localStorage.setItem(s,JSON.stringify(t))}catch{}}class D0{constructor(t){this.canvas=t,this.time=0,this.state="title",this.renderer=new Im({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fl,this.renderer.toneMapping=ka,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=De,this.scene=new Um,this.camera=new Xe(62,1,.25,1800),this.setupPost(),this.track=new Qm(this.scene),this.env=new n0(this.scene,this.track),this.effects=new p0(this.scene),this.model=new o0(this.scene),this.audio=new v0,this.input=new S0(t),this.rig=new m0(this.camera,this.track,this.env),this.settings={assist:!0,music:.65,sfx:.8,camera:0,touch:this.isCoarsePointer(),seenTutorial:!1,...Dl(Pl,{})},this.settings.camera=Pt(Number(this.settings.camera)||0,0,2),typeof this.settings.touch!="boolean"&&(this.settings.touch=this.isCoarsePointer()),this.records={bestLap:null,bestSplits:[],bestTotal:null,...Dl(Kr,{})},this.recordsAtStart={...this.records},this.laps=[],this.lap=1,this.checkpoint=0,this.lapActive=!1,this.raceStarted=!1,this.raceTime=0,this.lapTime=0,this.accum=0,this.countdownTimer=0,this.countdownShown=0,this.style=0,this.splits=[],this.stats={topSpeed:0,nearMisses:0,cleanLandings:0,bestChain:0,airTime:0},this.finishTimer=0,this.goTimer=0,this.hintClock=0,this.wasBoosting=!1,this.recoverTimer=0,this.muted=!1,this.pausedFrom="racing",this.tutorialHints=!this.settings.seenTutorial,this.hintStage=0,this.finishedResults=null,this.car=new h0(this.track,this.model,this.buildCarEvents()),this.ui=new y0(this.track,this.audio,this.input,{onStart:()=>this.startRace(),onPause:()=>this.togglePause(),onResume:()=>this.resume(),onRestart:()=>this.startRace(),onQuit:()=>this.enterTitle(),onAssist:e=>{this.settings.assist=e,this.saveSettings()},onCamera:(e,n)=>{this.settings.camera=e,this.rig.setMode(e),this.saveSettings(),n||this.ui.toast(`CAMERA · ${this.rig.mode.toUpperCase()}`)},onMusic:e=>{this.settings.music=e,this.audio.setVolumes(this.settings.music,this.settings.sfx),this.saveSettings()},onSfx:e=>{this.settings.sfx=e,this.audio.setVolumes(this.settings.music,this.settings.sfx),this.saveSettings()},onTouchToggle:e=>{this.settings.touch=e,this.saveSettings(),this.syncTouchControls()},onResetRecords:()=>{this.records={bestLap:null,bestSplits:[],bestTotal:null},Zr(Kr,this.records),this.ui.setTitleBest(this.records)}}),this.ui.setSettings(this.settings),this.ui.setTitleBest(this.records),this.input.onFirstInput=()=>{this.audio.init(),this.audio.setVolumes(this.settings.music,this.settings.sfx),this.audio.resume()},this.resize(),this.enterTitle()}titlePose(){const t=((this.track.findS(96,-29)-22)%this.track.length+this.track.length)%this.track.length,e=this.track.samplePos(t,0),{a:n}=this.track.getSample(t);return{s:t,pos:e,yaw:Math.atan2(n.tan.x,n.tan.z)}}setupPost(){this.composer=new A0(this.renderer),this.composer.addPass(new R0(this.scene,this.camera)),this.ssaoPass=new Mn(this.scene,this.camera,1,1),this.ssaoPass.kernelRadius=5.5,this.ssaoPass.minDistance=.0015,this.ssaoPass.maxDistance=.12,this.ssaoPass.output=Mn.OUTPUT.Default,this.composer.addPass(this.ssaoPass);const t={uniforms:{tDiffuse:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        varying vec2 vUv;
        void main() {
          vec3 col = texture2D(tDiffuse, vUv).rgb;
          // Warm highlights, protected shadow detail, and restrained contrast.
          col = mix(col, col * vec3(1.06, 0.93, 0.86), 0.22);
          col = max(col - vec3(0.012, 0.006, 0.004), 0.0);
          float vig = smoothstep(0.98, 0.35, length((vUv - 0.5) * vec2(1.08, 1.0)));
          col *= mix(0.88, 1.0, vig);
          gl_FragColor = vec4(col, 1.0);
        }
      `};this.gradePass=new yc(t),this.composer.addPass(this.gradePass),this.composer.addPass(new P0)}isCoarsePointer(){return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||(navigator.maxTouchPoints||0)>0}saveSettings(){Zr(Pl,this.settings)}saveRecords(){Zr(Kr,this.records)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.composer&&this.composer.setSize(t,e),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}syncTouchControls(){const t=["countdown","racing","paused"].includes(this.state);this.ui.updateTouchVisibility(this.settings.touch&&t)}enterTitle(){this.state="title",this.ui.setHUD(!1),this.ui.showScreen("title"),this.ui.setTitleBest(this.records),this.ui.updateTouchVisibility(!1),this.ui.countdown(""),this.ui.recover(!1),this.ui.hint(""),this.ui.setSettings(this.settings),this.input.resetTouch(),this.input.clearBuffer(),this.audio.setPaused(!1),this.audio.setIntensity(0),this.audio.updateEngine({active:!1,speed:0}),this.track.setStartLights(0),this.rig.setMode(this.settings.camera),this.rig.reset();const t=this.titlePose();this.car.reset(t.s,0),this.car.yaw=t.yaw,this.car.model.group.position.copy(this.car.pos),this.car.model.group.rotation.y=t.yaw,this.effects.reset(),this.rig.introAngle=0,this.rig.snapped=!1,this.finishTimer=0,this.recoverTimer=0}startRace(){this.audio.init(),this.audio.resume(),this.audio.setPaused(!1),this.audio.setIntensity(1),this.audio.setVolumes(this.settings.music,this.settings.sfx),this.ui.fade(!0),setTimeout(()=>this.ui.fade(!1),140),this.ui.showScreen(null),this.ui.setHUD(!0),this.ui.countdown(""),this.ui.recover(!1),this.ui.hint(""),this.ui.setSettings(this.settings),this.syncTouchControls();const t=this.track.startPose();this.car.reset(t.s,0),this.car.yaw=t.yaw,this.car.model.group.position.copy(this.car.pos),this.car.model.group.rotation.y=t.yaw,this.car.controlLock=0,this.effects.reset(),this.laps=[],this.lap=1,this.checkpoint=0,this.lapActive=!1,this.raceStarted=!1,this.raceTime=0,this.lapTime=0,this.accum=0,this.style=0,this.splits=[],this.stats={topSpeed:0,nearMisses:0,cleanLandings:0,bestChain:0,airTime:0},this.recordsAtStart={bestLap:this.records.bestLap,bestSplits:[...this.records.bestSplits||[]],bestTotal:this.records.bestTotal},this.countdownTimer=3,this.countdownShown=3,this.finishTimer=0,this.recoverTimer=0,this.finishedResults=null,this.hintStage=0,this.hintClock=0,this.goTimer=0,this.wasBoosting=!1,this.tutorialHints=!this.settings.seenTutorial,this.pausedFrom="racing",this.state="countdown",this.syncTouchControls(),this.ui.countdown("3"),this.ui.hint(""),this.audio.countdown(!1),this.track.setStartLights(1),this.rig.setMode(this.settings.camera),this.rig.reset(),this.rig.snapTo(this.car,8.6),this.input.resetTouch(),this.input.clearBuffer()}togglePause(){if(this.state==="paused"){this.resume();return}this.state!=="racing"&&this.state!=="countdown"||(this.pausedFrom=this.state,this.state="paused",this.audio.setPaused(!0),this.input.resetTouch(),this.input.clearBuffer(),this.ui.setPauseInfo({lap:this.lap,totalLaps:Xn,time:this.raceTime,bestLap:this.currentBestLap()}),this.ui.showScreen("pause"),this.ui.setHUD(!0),this.syncTouchControls())}resume(){var t,e;this.state==="paused"&&(this.state=this.pausedFrom,this.audio.setPaused(!1),this.ui.showScreen(null),this.ui.setHUD(!0),this.input.resetTouch(),this.input.clearBuffer(),this.syncTouchControls(),(e=(t=this.ui).setPauseInfo)==null||e.call(t,{lap:this.lap,totalLaps:Xn,time:this.raceTime,bestLap:this.currentBestLap()}))}currentBestLap(){let t=this.records.bestLap&&isFinite(this.records.bestLap)?this.records.bestLap:1/0;for(const e of this.laps)e<t&&(t=e);return isFinite(t)?t:null}buildCarEvents(){return{onLand:(t,e,n,i)=>{const r=Pt(t/22,.25,1.2);this.effects.landingDust(e,t),this.effects.addRing(e,"#ffd296",10+r*6),this.audio.landing(t),this.rig.addShake(.12+r*.4),this.stats.airTime+=i},onCrash:(t,e)=>{const n=new P(Math.sin(this.car.yaw),0,Math.cos(this.car.yaw));this.effects.crashBurst(e,n),this.audio.impact(t),this.rig.addShake(.45+t*.5),this.effects.endSkid()},onWallSpark:(t,e,n)=>{this.effects.wallSparks(t,e,n?n.tan:null),this.audio.wallScrape()},onWallRide:()=>{this.style+=20/60},onWallHit:(t,e)=>{e>30&&this.rig.addShake(.18)},onPropHit:()=>{this.audio.impact(.5),this.rig.addShake(.35),this.ui.toast("ROCK CONTACT",{cls:""})},onNearMiss:t=>{this.style+=150,this.stats.nearMisses+=1,this.audio.nearMiss(),this.effects.sparks.spawn({x:t.x,y:t.y+1,z:t.z,vx:0,vy:1,vz:0,life:.1,size0:.1,size1:.1,r:1,g:1,b:1,alpha:0}),this.ui.toast("NEAR MISS",{value:"+150",cls:"good"})},onDriftStart:()=>{},onDriftEnd:(t,e)=>{if(t>.55){const n=Math.round(t*e*26);this.style+=n,this.ui.toast("CHAIN BANKED",{value:`+${n}`,cls:"big"}),this.effects.endSkid()}},onChainStep:t=>{this.audio.driftChain(t),t>1&&this.ui.toast(`CHAIN x${t}`,{cls:"big"})},onDriftTick:(t,e)=>{this.stats.bestChain=Math.max(this.stats.bestChain,t)},onCleanLanding:t=>{this.style+=100,this.stats.cleanLandings+=1,this.ui.toast("CLEAN LANDING",{value:"+100",cls:"good"})},onAirtime:t=>{this.style+=80,this.ui.toast("BIG AIR",{value:"+80",cls:"good"})},onOffRoad:()=>{}}}update(t){const e=Pt(t,0,.05);switch(this.time+=e,this.input.update(e),this.handleGlobalInput(),this.state){case"title":this.updateTitle(e);break;case"countdown":this.updateCountdown(e);break;case"racing":this.updateRacing(e);break;case"paused":this.updatePaused(e);break;case"finished":this.updateFinished(e);break}this.env.update(e,this.camera.position,this.time),this.env.updateSun(this.car.pos),this.effects.update(e),this.effects.updateRings(e),this.updateRecoverBanner(e)}handleGlobalInput(){this.input.consume("mute")&&(this.muted=!this.muted,this.audio.ready&&this.audio.master.gain.setTargetAtTime(this.muted?0:.9,this.audio.ctx.currentTime,.05),this.ui.toast(this.muted?"SOUND OFF":"SOUND ON",{cls:""}));const t=this.ui.current;if(t==="settings"||t==="how"){(this.input.consume("back")||this.input.consume("pause"))&&(this.input.clearBuffer(),this.audio.uiBack(),this.ui.back());return}if(this.input.consume("pause")){this.state==="paused"?this.resume():(this.state==="racing"||this.state==="countdown")&&this.togglePause();return}if(this.state==="title"&&this.input.consume("confirm")){this.startRace();return}if(this.state==="finished"&&this.input.consume("confirm")&&this.finishTimer<=0){this.startRace();return}if(this.state==="racing"||this.state==="countdown"){if(this.input.consume("camera")){const e=this.rig.cycle();this.settings.camera=this.rig.modeIndex,this.saveSettings(),this.ui.toast(`CAMERA · ${e.toUpperCase()}`)}this.input.consume("restart")&&this.startRace()}else this.state==="paused"&&this.input.consume("restart")&&this.startRace()}updateTitle(t){this.car.update(t,Ll,this.assistValue()),this.rig.update(t,this.car,{intro:!0}),this.audio.updateEngine({active:!1,speed:0}),this.ui.drawMinimap(this.car,0)}updatePaused(t){this.rig.update(t,this.car,{paused:!0}),this.audio.updateEngine({active:!1,speed:0})}updateCountdown(t){this.audio.updateEngine({active:!0,speed:0,throttle:this.input.state.throttle,grounded:!0,slipFactor:0}),this.car.update(t,Ll,this.assistValue()),this.rig.update(t,this.car,{}),this.countdownTimer-=t;const e=Math.ceil(this.countdownTimer);e!==this.countdownShown&&(e>=1&&e<=3?(this.ui.countdown(String(e)),this.audio.countdown(!1),this.track.setStartLights(e===3?1:e===2?3:5)):e<=0&&(this.ui.countdown("GO!",!0),this.audio.countdown(!0),this.track.setStartLights(5,!0),this.state="racing",this.raceStarted=!0,this.goTimer=.75),this.countdownShown=e),this.countdownTimer<-.7&&this.ui.countdown(""),this.ui.updateHUD(this.hudState()),this.ui.drawMinimap(this.car,0)}updateRacing(t){const e=this.input.getDrivingState(),n=this.assistValue();this.hintClock+=t,this.goTimer>0&&(this.goTimer-=t,this.goTimer<=0&&(this.ui.countdown(""),this.track.setStartLights(0))),this.accum+=t;let i=0;for(;this.accum>=$i&&i<8&&this.state==="racing";){this.lapActive&&(this.raceTime+=$i,this.lapTime+=$i);const a=this.car.s;this.car.update($i,e,n),this.checkGates(a,this.car.s),this.car.needsRecovery&&this.handleRecovery(),this.accum-=$i,i+=1}i===8&&(this.accum=0),this.rig.update(t,this.car,{}),this.emitEffects(t,e);const r=this.car.speed;this.stats.topSpeed=Math.max(this.stats.topSpeed,r*3.6),this.stats.bestChain=Math.max(this.stats.bestChain,this.car.driftChain),this.audio.updateEngine({active:!0,speed:r,throttle:e.throttle,boosting:this.car.boosting,slip:this.car.slip,slipFactor:Math.abs(this.car.slip),grounded:this.car.grounded,offRoad:this.car.offRoad}),this.ui.updateHUD(this.hudState()),this.ui.drawMinimap(this.car,this.checkpoint>=Zi?0:this.checkpoint+1),this.updateHints()}updateFinished(t){this.rig.update(t,this.car,{finished:!0}),this.audio.updateEngine({active:!1,speed:0}),this.finishTimer>0&&(this.finishTimer-=t,this.finishTimer<=0&&(this.ui.countdown(""),this.ui.setResults(this.finishedResults),this.ui.showScreen("results"),this.ui.setHUD(!1),this.ui.updateTouchVisibility(!1),this.audio.setIntensity(0)))}assistValue(){return this.settings.assist?.55:0}hudState(){return{lap:Math.min(this.lap,Xn),totalLaps:Xn,time:this.raceTime,bestLap:this.currentBestLap(),speed:this.car.speed,boost:this.car.boostMeter,style:this.style+this.car.driftScore*.55,chain:{active:this.car.drifting,chain:this.car.driftChain,mult:this.car.chainMultiplier},checkpoint:this.checkpoint,totalCheckpoints:Zi}}checkGates(t,e){const n=this.track.length;let i=e-t;if(i>n/2&&(i-=n),i<-n/2&&(i+=n),i<=0||Math.abs(i)>90)return;const r=this.track.gateS,a=[];for(let o=0;o<r.length;o++){let l=((r[o]-t)%n+n)%n;l<=i+.001&&a.push({i:o,rel:l})}a.sort((o,l)=>o.rel-l.rel);for(const o of a)this.onGate(o.i)}onGate(t){var e;if(this.raceStarted){if(t===0){if(!this.lapActive){this.lapActive=!0,this.lapTime=0,this.raceTime=0,this.checkpoint=0,this.splits=[],this.laps=[],this.ui.toast("LIGHTS OUT · GO",{cls:"big"});return}this.checkpoint>=Zi&&this.completeLap();return}if(this.lapActive&&t===this.checkpoint+1&&t<=Zi){this.checkpoint=t,this.audio.checkpoint(),this.splits[t-1]=this.lapTime;const n=(e=this.records.bestSplits)==null?void 0:e[t-1];isFinite(n)&&this.ui.showDelta(this.lapTime-n),this.ui.toast(`CHECKPOINT ${t}/${Zi}`,{value:Je(this.lapTime)})}}}completeLap(){const t=this.lapTime;this.laps.push(t),this.lapActive=!1;const e=this.records.bestLap,n=this.splits.slice();if((!e||t<e)&&(this.records.bestLap=t,this.records.bestSplits=n),this.lap>=Xn){this.finishRace();return}this.ui.toast(`LAP ${this.lap} COMPLETE`,{value:Je(t),cls:"big"}),this.audio.lap(),this.lap+=1,this.checkpoint=0,this.lapTime=0,this.splits=[],this.lapActive=!0,e&&this.ui.showDelta(t-e),this.lap===Xn&&(this.audio.setIntensity(2),this.ui.toast("FINAL LAP · SEND IT",{cls:"big"})),this.saveRecords()}finishRace(){this.state="finished",this.lap=Xn,this.records.bestTotal=!this.records.bestTotal||this.raceTime<this.records.bestTotal?this.raceTime:this.records.bestTotal,this.saveRecords();const t=Math.min(...this.laps),e=this.recordsAtStart.bestLap?t<this.recordsAtStart.bestLap-.001:!0,n=this.recordsAtStart.bestTotal?this.raceTime<this.recordsAtStart.bestTotal-.001:!0,i=e?"Canyon <em>Legend</em>":n?"New <em>Benchmark</em>":"Sunbreak <em>Flyer</em>";this.finishedResults={laps:this.laps.slice(),best:t,total:this.raceTime,style:this.style+this.car.driftScore*.55,topSpeed:this.stats.topSpeed,bestChain:this.stats.bestChain,airTime:this.stats.airTime,nearMisses:this.stats.nearMisses,cleanLandings:this.stats.cleanLandings,newBest:e||n,newBestLap:e,title:i,bestLabel:e?"NEW PERSONAL BEST":this.recordsAtStart.bestLap?`RECORD ${Je(this.recordsAtStart.bestLap)}`:""},this.finishTimer=2.1,this.ui.countdown("FINISH",!0),this.audio.finish(),this.effects.addRing(this.car.pos,"#8cf5d9",20),this.effects.crashBurst(this.car.pos,new P(Math.sin(this.car.yaw),0,Math.cos(this.car.yaw))),this.ui.hint(""),this.ui.recover(!1),this.input.resetTouch(),this.ui.updateTouchVisibility(!1)}handleRecovery(){const t=this.car.recoveryReason;let e=this.car.s;(t==="fall"||this.track.isGap(e))&&(e=this.track.gap.start-20);for(let i=0;i<50&&this.track.isGap(e);i++)e-=4;const n=this.track.length;e=(e%n+n)%n,this.car.reset(e,0),this.car.boostMeter=Math.max(this.car.boostMeter,35),this.car.controlLock=.55,this.car.needsRecovery=!1,this.car.model.group.position.copy(this.car.pos),this.car.model.group.rotation.y=this.car.yaw,this.effects.endSkid(),this.effects.landingDust(this.car.pos,8),this.rig.snapTo(this.car,8.4),this.audio.landing(6),this.recoverTimer=1.5,this.ui.recover(!0),this.ui.toast("BACK ON THE LINE",{value:"GO",cls:""})}updateRecoverBanner(t){this.recoverTimer>0&&(this.recoverTimer-=t,this.recoverTimer<=0&&this.ui.recover(!1))}emitEffects(t,e){const n=this.car,i=new P(Math.sin(n.yaw),0,Math.cos(n.yaw));if(new P(i.z,0,-i.x),this.model.group.updateMatrixWorld(!0),n.grounded&&(n.drifting||e.handbrake)&&n.speed>7){const a=Pt(Math.abs(n.slip)*1.6,.25,1);for(const o of[2,3])this.model.wheelWorld(o,this._wheelPos||(this._wheelPos=new P)),this.effects.skidTrail(o,this._wheelPos,i,a),this.effects.driftSmoke(this._wheelPos,o===2?-1:1,n.vel,a)}else this.effects.endSkid();if(n.offRoad&&n.grounded&&n.speed>3){const a=new P().copy(n.pos).addScaledVector(i,-1.4);Math.random()<.75&&this.effects.tireDust(a,n.vel,1)}n.boosting&&(this.effects.boostTrail(n.pos,i,1),Math.random()<.4&&this.rig.addShake(.035),this.wasBoosting||this.audio.boostWhoosh()),this.wasBoosting=n.boosting,!n.grounded&&n.airTime>.15&&Math.random()<.4&&this.effects.jumpDust(new P().copy(n.pos).addScaledVector(i,-1.2))}updateHints(){if(!this.tutorialHints)return;const t=this.settings.touch;this.hintStage===0&&this.hintClock>.8?(this.hintStage=1,this.ui.hint(t?"Hold <b>GAS</b> to launch · <b>DRIFT</b> through the first corner":"Hold <b>W</b> / <b>↑</b> to launch · <b>SPACE</b> to drift",5.5)):this.hintStage===1&&this.hintClock>7?(this.hintStage=2,this.ui.hint(t?"Slides fill your <b>BOOST</b> meter · tap <b>BOOST</b> on the straights":"Drifting fills <b>BOOST</b> · hit <b>SHIFT</b> on the straights",5.5)):this.hintStage===2&&this.hintClock>15?(this.hintStage=3,this.ui.hint(t?"Steer with the arrows · <b>DRIFT</b> + <b>BOOST</b> wins races":"<b>C</b> camera · <b>R</b> restart · <b>ESC</b> pause",4.5)):this.hintStage===3&&this.hintClock>21&&(this.hintStage=4,this.ui.hint(""),this.tutorialHints=!1,this.settings.seenTutorial=!0,this.saveSettings())}render(){this.composer.render()}onVisibilityHidden(){(this.state==="racing"||this.state==="countdown")&&this.togglePause()}}const Tc=document.getElementById("game"),as=new D0(Tc);window.__sunbreak=as;let Il=performance.now(),$r=0,Ul=0;function bc(s){const t=(s-Il)/1e3;Il=s;const e=Math.min(.05,Math.max(0,t));as.update(e),as.render(),$r+=1,t>.05&&(Ul+=1),$r===120&&(window.__sunbreakFps=Math.round(1e3/((s-I0)/$r)),window.__sunbreakSlowFrames=Ul),requestAnimationFrame(bc)}let I0=performance.now();requestAnimationFrame(bc);window.addEventListener("resize",()=>{as.resize()});document.addEventListener("visibilitychange",()=>{document.hidden&&as.onVisibilityHidden()});Tc.addEventListener("webglcontextlost",s=>{s.preventDefault(),console.warn("WebGL context lost")});
