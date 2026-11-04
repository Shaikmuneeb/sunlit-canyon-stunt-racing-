(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="170",Dc=0,xo=1,Ic=2,kl=1,Vl=2,vi=3,wi=0,Fe=1,Ne=2,Ie=0,Ji=1,Rn=2,Mo=3,So=4,Gl=5,xi=100,Uc=101,Nc=102,Fc=103,Oc=104,Qr=200,Bc=201,zc=202,kc=203,ta=204,ea=205,Hl=206,Vc=207,Wl=208,Gc=209,Hc=210,Wc=211,Xc=212,qc=213,Yc=214,ia=0,na=1,sa=2,Cn=3,ra=4,aa=5,oa=6,la=7,Xl=0,Kc=1,Zc=2,Oi=0,ql=1,Yl=2,Kl=3,Ha=4,$c=5,Zl=6,$l=7,jl=300,Pn=301,Ln=302,ca=303,ha=304,cr=306,ns=1e3,Zi=1001,ua=1002,Oe=1003,jc=1004,fs=1005,li=1006,mr=1007,$i=1008,Ei=1009,Jl=1010,Ql=1011,ss=1012,Wa=1013,Qi=1014,ci=1015,ni=1016,Xa=1017,qa=1018,tn=1020,tc=35902,ec=1021,ic=1022,ei=1023,nc=1024,sc=1025,wn=1026,en=1027,Ya=1028,Ka=1029,rc=1030,Za=1031,$a=1033,Ks=33776,Zs=33777,$s=33778,js=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,_a=37492,va=37496,xa=37808,Ma=37809,Sa=37810,ya=37811,ba=37812,Ta=37813,wa=37814,Ea=37815,Aa=37816,Ra=37817,Ca=37818,Pa=37819,La=37820,Da=37821,Js=36492,Ia=36494,Ua=36495,ac=36283,Na=36284,Fa=36285,Oa=36286,Jc=3200,Qc=3201,ja=0,th=1,Fi="",De="srgb",Nn="srgb-linear",hr="linear",te="srgb",rn=7680,yo=519,eh=512,ih=513,nh=514,oc=515,sh=516,rh=517,ah=518,oh=519,Ba=35044,bo="300 es",Si=2e3,ir=2001;class Fn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let To=1234567;const ts=Math.PI/180,rs=180/Math.PI;function bi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[s&255]+Ae[s>>8&255]+Ae[s>>16&255]+Ae[s>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Me(s,t,e){return Math.max(t,Math.min(e,s))}function Ja(s,t){return(s%t+t)%t}function lh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function ch(s,t,e){return s!==t?(e-s)/(t-s):0}function es(s,t,e){return(1-e)*s+e*t}function hh(s,t,e,i){return es(s,t,1-Math.exp(-e*i))}function uh(s,t=1){return t-Math.abs(Ja(s,t*2)-t)}function dh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function fh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ph(s,t){return s+Math.floor(Math.random()*(t-s+1))}function mh(s,t){return s+Math.random()*(t-s)}function gh(s){return s*(.5-Math.random())}function _h(s){s!==void 0&&(To=s);let t=To+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vh(s){return s*ts}function xh(s){return s*rs}function Mh(s){return(s&s-1)===0&&s!==0}function Sh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bh(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ti(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Th={DEG2RAD:ts,RAD2DEG:rs,generateUUID:bi,clamp:Me,euclideanModulo:Ja,mapLinear:lh,inverseLerp:ch,lerp:es,damp:hh,pingpong:uh,smoothstep:dh,smootherstep:fh,randInt:ph,randFloat:mh,randFloatSpread:gh,seededRandom:_h,degToRad:vh,radToDeg:xh,isPowerOfTwo:Mh,ceilPowerOfTwo:Sh,floorPowerOfTwo:yh,setQuaternionFromProperEuler:bh,normalize:ee,denormalize:ti};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,n,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],v=n[1],M=n[4],x=n[7],L=n[2],A=n[5],w=n[8];return r[0]=a*_+o*v+l*L,r[3]=a*m+o*M+l*A,r[6]=a*f+o*x+l*w,r[1]=c*_+u*v+h*L,r[4]=c*m+u*M+h*A,r[7]=c*f+u*x+h*w,r[2]=d*_+p*v+g*L,r[5]=d*m+p*M+g*A,r[8]=d*f+p*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=e*h+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(n*c-u*i)*_,t[2]=(o*i-n*a)*_,t[3]=d*_,t[4]=(u*e-n*l)*_,t[5]=(n*r-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Ot;function lc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wh(){const s=nr("canvas");return s.style.display="block",s}const wo={};function Jn(s){s in wo||(wo[s]=!0,console.warn(s))}function Eh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ah(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?hr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function En(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Eo=[.64,.33,.3,.6,.15,.06],Ao=[.2126,.7152,.0722],Ro=[.3127,.329],Co=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Nn]:{primaries:Eo,whitePoint:Ro,transfer:hr,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:Ao,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:Eo,whitePoint:Ro,transfer:te,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:Ao,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let an;class Ch{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{an===void 0&&(an=nr("canvas")),an.width=t.width,an.height=t.height;const i=an.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=an}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=nr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ti(e[i]/255)*255):e[i]=Ti(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ph=0;class cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(_r(n[a].image)):r.push(_r(n[a]))}else r=_r(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function _r(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ch.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lh=0;class Ce extends Fn{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=Zi,n=Zi,r=li,a=$i,o=ei,l=Ei,c=Ce.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=bi(),this.name="",this.source=new cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=jl;Ce.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,n=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(p+1)/2,L=(f+1)/2,A=(u+d)/4,w=(h+_)/4,C=(g+m)/4;return M>x&&M>L?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=A/i,r=w/i):x>L?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=A/n,r=C/n):L<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(L),i=w/r,n=C/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dh extends Fn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ce(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class He extends Dh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class hc extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ih extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*_,v=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const L=Math.sqrt(M),A=Math.atan2(L,f*v);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const x=o*v;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-o*p,t[e+2]=c*g+u*p+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(r/2),d=l(i/2),p=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=n*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),u=2*(o*e-r*n),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=n+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vr.copy(this).projectOnVector(t),this.sub(vr)}reflect(t){return this.sub(vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new P,Lo=new ls;class cs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ps.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ps.copy(i.boundingBox)),ps.applyMatrix4(t.matrixWorld),this.union(ps)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kn),ms.subVectors(this.max,kn),on.subVectors(t.a,kn),ln.subVectors(t.b,kn),cn.subVectors(t.c,kn),Pi.subVectors(ln,on),Li.subVectors(cn,ln),zi.subVectors(on,cn);let e=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-zi.z,zi.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,zi.z,0,-zi.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-zi.y,zi.x,0];return!xr(e,on,ln,cn,ms)||(e=[1,0,0,0,1,0,0,0,1],!xr(e,on,ln,cn,ms))?!1:(gs.crossVectors(Pi,Li),e=[gs.x,gs.y,gs.z],xr(e,on,ln,cn,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new P,new P,new P,new P,new P,new P,new P,new P],$e=new P,ps=new cs,on=new P,ln=new P,cn=new P,Pi=new P,Li=new P,zi=new P,kn=new P,ms=new P,gs=new P,ki=new P;function xr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ki.fromArray(s,r);const o=n.x*Math.abs(ki.x)+n.y*Math.abs(ki.y)+n.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),u=i.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Uh=new cs,Vn=new P,Mr=new P;class hs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Uh.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vn.subVectors(t,this.center);const e=Vn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Vn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vn.copy(t.center).add(Mr)),this.expandByPoint(Vn.copy(t.center).sub(Mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new P,Sr=new P,_s=new P,Di=new P,yr=new P,vs=new P,br=new P;class Qa{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Sr.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(Sr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(_s),o=Di.dot(this.direction),l=-Di.dot(_s),c=Di.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Sr).addScaledVector(_s,d),p}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const i=pi.dot(this.direction),n=pi.dot(pi)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,n,r){yr.subVectors(e,t),vs.subVectors(i,t),br.crossVectors(yr,vs);let a=this.direction.dot(br),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,t);const l=o*this.direction.dot(vs.crossVectors(Di,vs));if(l<0)return null;const c=o*this.direction.dot(yr.cross(Di));if(c<0||l+c>a)return null;const u=-o*Di.dot(br);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,n,r,a,o,l,c,u,h,d,p,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,u,h,d,p,g,_,m)}set(t,e,i,n,r,a,o,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/hn.setFromMatrixColumn(t,0).length(),r=1/hn.setFromMatrixColumn(t,1).length(),a=1/hn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nh,t,Fh)}lookAt(t,e,i){const n=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Ii.crossVectors(i,Ve),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Ii.crossVectors(i,Ve)),Ii.normalize(),xs.crossVectors(Ve,Ii),n[0]=Ii.x,n[4]=xs.x,n[8]=Ve.x,n[1]=Ii.y,n[5]=xs.y,n[9]=Ve.y,n[2]=Ii.z,n[6]=xs.z,n[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],M=i[7],x=i[11],L=i[15],A=n[0],w=n[4],C=n[8],b=n[12],S=n[1],R=n[5],I=n[9],O=n[13],W=n[2],X=n[6],H=n[10],Z=n[14],V=n[3],tt=n[7],at=n[11],gt=n[15];return r[0]=a*A+o*S+l*W+c*V,r[4]=a*w+o*R+l*X+c*tt,r[8]=a*C+o*I+l*H+c*at,r[12]=a*b+o*O+l*Z+c*gt,r[1]=u*A+h*S+d*W+p*V,r[5]=u*w+h*R+d*X+p*tt,r[9]=u*C+h*I+d*H+p*at,r[13]=u*b+h*O+d*Z+p*gt,r[2]=g*A+_*S+m*W+f*V,r[6]=g*w+_*R+m*X+f*tt,r[10]=g*C+_*I+m*H+f*at,r[14]=g*b+_*O+m*Z+f*gt,r[3]=v*A+M*S+x*W+L*V,r[7]=v*w+M*R+x*X+L*tt,r[11]=v*C+M*I+x*H+L*at,r[15]=v*b+M*O+x*Z+L*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*h-n*c*h-r*o*d+i*c*d+n*o*p-i*l*p)+_*(+e*l*p-e*c*d+r*a*d-n*a*p+n*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+i*a*p+r*o*u-i*c*u)+f*(-n*o*u-e*l*h+e*o*d+n*a*h-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=h*m*c-_*d*c+_*l*p-o*m*p-h*l*f+o*d*f,M=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,x=u*_*c-g*h*c+g*o*p-a*_*p-u*o*f+a*h*f,L=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,A=e*v+i*M+n*x+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=v*w,t[1]=(_*d*r-h*m*r-_*n*p+i*m*p+h*n*f-i*d*f)*w,t[2]=(o*m*r-_*l*r+_*n*c-i*m*c-o*n*f+i*l*f)*w,t[3]=(h*l*r-o*d*r-h*n*c+i*d*c+o*n*p-i*l*p)*w,t[4]=M*w,t[5]=(u*m*r-g*d*r+g*n*p-e*m*p-u*n*f+e*d*f)*w,t[6]=(g*l*r-a*m*r-g*n*c+e*m*c+a*n*f-e*l*f)*w,t[7]=(a*d*r-u*l*r+u*n*c-e*d*c-a*n*p+e*l*p)*w,t[8]=x*w,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*f-e*h*f)*w,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*f+e*o*f)*w,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*p-e*o*p)*w,t[12]=L*w,t[13]=(u*_*n-g*h*n+g*i*d-e*_*d-u*i*m+e*h*m)*w,t[14]=(g*o*n-a*_*n-g*i*l+e*_*l+a*i*m-e*o*m)*w,t[15]=(a*h*n-u*o*n+u*i*l-e*h*l-a*i*d+e*o*d)*w,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,_=a*u,m=a*h,f=o*h,v=l*c,M=l*u,x=l*h,L=i.x,A=i.y,w=i.z;return n[0]=(1-(_+f))*L,n[1]=(p+x)*L,n[2]=(g-M)*L,n[3]=0,n[4]=(p-x)*A,n[5]=(1-(d+f))*A,n[6]=(m+v)*A,n[7]=0,n[8]=(g+M)*w,n[9]=(m-v)*w,n[10]=(1-(d+_))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=hn.set(n[0],n[1],n[2]).length();const a=hn.set(n[4],n[5],n[6]).length(),o=hn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],je.copy(this);const c=1/r,u=1/a,h=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=h,je.elements[9]*=h,je.elements[10]*=h,e.setFromRotationMatrix(je),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Si){const l=this.elements,c=2*r/(e-t),u=2*r/(i-n),h=(e+t)/(e-t),d=(i+n)/(i-n);let p,g;if(o===Si)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ir)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Si){const l=this.elements,c=1/(e-t),u=1/(i-n),h=1/(a-r),d=(e+t)*c,p=(i+n)*u;let g,_;if(o===Si)g=(a+r)*h,_=-2*h;else if(o===ir)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hn=new P,je=new se,Nh=new P(0,0,0),Fh=new P(1,1,1),Ii=new P,xs=new P,Ve=new P,Do=new se,Io=new ls;class hi{constructor(t=0,e=0,i=0,n=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Io.setFromEuler(this),this.setFromQuaternion(Io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oh=0;const Uo=new P,un=new ls,mi=new se,Ms=new P,Gn=new P,Bh=new P,zh=new ls,No=new P(1,0,0),Fo=new P(0,1,0),Oo=new P(0,0,1),Bo={type:"added"},kh={type:"removed"},dn={type:"childadded",child:null},Tr={type:"childremoved",child:null};class me extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new P,e=new hi,i=new ls,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new se},normalMatrix:{value:new Ot}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return un.setFromAxisAngle(t,e),this.quaternion.multiply(un),this}rotateOnWorldAxis(t,e){return un.setFromAxisAngle(t,e),this.quaternion.premultiply(un),this}rotateX(t){return this.rotateOnAxis(No,t)}rotateY(t){return this.rotateOnAxis(Fo,t)}rotateZ(t){return this.rotateOnAxis(Oo,t)}translateOnAxis(t,e){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(No,t)}translateY(t){return this.translateOnAxis(Fo,t)}translateZ(t){return this.translateOnAxis(Oo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ms.copy(t):Ms.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Gn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Gn,Ms,this.up):mi.lookAt(Ms,Gn,this.up),this.quaternion.setFromRotationMatrix(mi),n&&(mi.extractRotation(n.matrixWorld),un.setFromRotationMatrix(mi),this.quaternion.premultiply(un.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bo),dn.child=t,this.dispatchEvent(dn),dn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kh),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bo),dn.child=t,this.dispatchEvent(dn),dn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gn,t,Bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gn,zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}me.DEFAULT_UP=new P(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new P,gi=new P,wr=new P,_i=new P,fn=new P,pn=new P,zo=new P,Er=new P,Ar=new P,Rr=new P,Cr=new ue,Pr=new ue,Lr=new ue;class Ye{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Je.subVectors(t,e),n.cross(Je);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Je.subVectors(n,e),gi.subVectors(i,e),wr.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(gi),l=Je.dot(wr),c=gi.dot(gi),u=gi.dot(wr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Cr.setScalar(0),Pr.setScalar(0),Lr.setScalar(0),Cr.fromBufferAttribute(t,e),Pr.fromBufferAttribute(t,i),Lr.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Cr,r.x),a.addScaledVector(Pr,r.y),a.addScaledVector(Lr,r.z),a}static isFrontFacing(t,e,i,n){return Je.subVectors(i,e),gi.subVectors(t,e),Je.cross(gi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Je.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;fn.subVectors(n,i),pn.subVectors(r,i),Er.subVectors(t,i);const l=fn.dot(Er),c=pn.dot(Er);if(l<=0&&c<=0)return e.copy(i);Ar.subVectors(t,n);const u=fn.dot(Ar),h=pn.dot(Ar);if(u>=0&&h<=u)return e.copy(n);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(fn,a);Rr.subVectors(t,r);const p=fn.dot(Rr),g=pn.dot(Rr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(pn,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return zo.subVectors(r,n),o=(h-u)/(h-u+(p-g)),e.copy(n).addScaledVector(zo,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(i).addScaledVector(fn,a).addScaledVector(pn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Dr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class dt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=qt.workingColorSpace){if(t=Ja(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Dr(a,r,t+1/3),this.g=Dr(a,r,t),this.b=Dr(a,r,t-1/3)}return qt.toWorkingColorSpace(this,n),this}setStyle(t,e=De){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const i=dc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return qt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Me(Re.r*255,0,255))*65536+Math.round(Me(Re.g*255,0,255))*256+Math.round(Me(Re.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,n=Re.g,r=Re.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=De){qt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,n=Re.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Ss);const i=es(Ui.h,Ss.h,e),n=es(Ui.s,Ss.s,e),r=es(Ui.l,Ss.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new dt;dt.NAMES=dc;let Vh=0;class Ai extends Fn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=bi(),this.name="",this.blending=Ji,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Cn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rn,this.stencilZFail=rn,this.stencilZPass=rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ta&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ue extends Ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new P,ys=new yt;class Te{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ba,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),n=ee(n,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ba&&(t.usage=this.usage),t}}class fc extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class pc extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class zt extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Gh=0;const Xe=new se,Ir=new me,mn=new P,Ge=new cs,Hn=new cs,ve=new P;class re extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lc(t)?pc:fc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,i){return Xe.makeTranslation(t,e,i),this.applyMatrix4(Xe),this}scale(t,e,i){return Xe.makeScale(t,e,i),this.applyMatrix4(Xe),this}lookAt(t){return Ir.lookAt(t),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(i,3))}else{for(let i=0,n=e.count;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hn.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ge.min,Hn.min),Ge.expandByPoint(ve),ve.addVectors(Ge.max,Hn.max),Ge.expandByPoint(ve)):(Ge.expandByPoint(Hn.min),Ge.expandByPoint(Hn.max))}Ge.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ve.fromBufferAttribute(o,c),l&&(mn.fromBufferAttribute(t,c),ve.add(mn)),n=Math.max(n,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new P,l[C]=new P;const c=new P,u=new P,h=new P,d=new yt,p=new yt,g=new yt,_=new P,m=new P;function f(C,b,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(_),o[b].add(_),o[S].add(_),l[C].add(m),l[b].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,b=v.length;C<b;++C){const S=v[C],R=S.start,I=S.count;for(let O=R,W=R+I;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new P,x=new P,L=new P,A=new P;function w(C){L.fromBufferAttribute(n,C),A.copy(L);const b=o[C];M.copy(b),M.sub(L.multiplyScalar(L.dot(b))).normalize(),x.crossVectors(A,b);const R=x.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,R)}for(let C=0,b=v.length;C<b;++C){const S=v[C],R=S.start,I=S.count;for(let O=R,W=R+I;O<W;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Te(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new re,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(n[l]=u,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new se,Vi=new Qa,bs=new hs,Vo=new P,Ts=new P,ws=new P,Es=new P,Ur=new P,As=new P,Go=new P,Rs=new P;class At extends me{constructor(t=new re,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){As.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ur.fromBufferAttribute(h,t),a?As.addScaledVector(Ur,u):As.addScaledVector(Ur.sub(e),u))}e.add(As)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(bs.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(bs,Vo)===null||Vi.origin.distanceToSquared(Vo)>(t.far-t.near)**2))&&(ko.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(ko),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,L=M;x<L;x+=3){const A=o.getX(x),w=o.getX(x+1),C=o.getX(x+2);n=Cs(this,f,t,i,c,u,h,A,w,C),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);n=Cs(this,a,t,i,c,u,h,v,M,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,L=M;x<L;x+=3){const A=x,w=x+1,C=x+2;n=Cs(this,f,t,i,c,u,h,A,w,C),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,M=m+1,x=m+2;n=Cs(this,a,t,i,c,u,h,v,M,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Hh(s,t,e,i,n,r,a,o){let l;if(t.side===Fe?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===wi,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:s}}function Cs(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Ts),s.getVertexPosition(l,ws),s.getVertexPosition(c,Es);const u=Hh(s,t,e,i,Ts,ws,Es,Go);if(u){const h=new P;Ye.getBarycoord(Go,Ts,ws,Es,h),n&&(u.uv=Ye.getInterpolatedAttribute(n,o,l,c,h,new yt)),r&&(u.uv1=Ye.getInterpolatedAttribute(r,o,l,c,h,new yt)),a&&(u.normal=Ye.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Ye.getNormal(Ts,ws,Es,d.normal),u.face=d,u.barycoord=h}return u}class ze extends re{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function g(_,m,f,v,M,x,L,A,w,C,b){const S=x/w,R=L/C,I=x/2,O=L/2,W=A/2,X=w+1,H=C+1;let Z=0,V=0;const tt=new P;for(let at=0;at<H;at++){const gt=at*R-O;for(let Lt=0;Lt<X;Lt++){const Xt=Lt*S-I;tt[_]=Xt*v,tt[m]=gt*M,tt[f]=W,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[f]=A>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(Lt/w),h.push(1-at/C),Z+=1}}for(let at=0;at<C;at++)for(let gt=0;gt<w;gt++){const Lt=d+gt+X*at,Xt=d+gt+X*(at+1),q=d+(gt+1)+X*(at+1),et=d+(gt+1)+X*at;l.push(Lt,Xt,et),l.push(Xt,q,et),V+=6}o.addGroup(p,V,b),p+=V,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Le(s){const t={};for(let e=0;e<s.length;e++){const i=Dn(s[e]);for(const n in i)t[n]=i[n]}return t}function Wh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const yi={clone:Dn,merge:Le};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class de extends Ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dn(t.uniforms),this.uniformsGroups=Wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class gc extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new P,Ho=new yt,Wo=new yt;class qe extends gc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Ho,Wo),e.subVectors(Wo,Ho)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gn=-90,_n=1;class Yh extends me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new qe(gn,_n,t,e);n.layers=this.layers,this.add(n);const r=new qe(gn,_n,t,e);r.layers=this.layers,this.add(r);const a=new qe(gn,_n,t,e);a.layers=this.layers,this.add(a);const o=new qe(gn,_n,t,e);o.layers=this.layers,this.add(o);const l=new qe(gn,_n,t,e);l.layers=this.layers,this.add(l);const c=new qe(gn,_n,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _c extends Ce{constructor(t,e,i,n,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Pn,super(t,e,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kh extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new _c(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ze(5,5,5),r=new de({name:"CubemapFromEquirect",uniforms:Dn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:Ie});r.uniforms.tEquirect.value=e;const a=new At(n,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=li),new Yh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Nr=new P,Zh=new P,$h=new Ot;class qi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Nr.subVectors(i,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Nr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||$h.getNormalMatrix(t),n=this.coplanarPoint(Nr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new hs,Ps=new P;class to{constructor(t=new qi,e=new qi,i=new qi,n=new qi,r=new qi,a=new qi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Si){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],d=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],v=n[13],M=n[14],x=n[15];if(i[0].setComponents(l-r,d-c,m-p,x-f).normalize(),i[1].setComponents(l+r,d+c,m+p,x+f).normalize(),i[2].setComponents(l+a,d+u,m+g,x+v).normalize(),i[3].setComponents(l-a,d-u,m-g,x-v).normalize(),i[4].setComponents(l-o,d-h,m-_,x-M).normalize(),e===Si)i[5].setComponents(l+o,d+h,m+_,x+M).normalize();else if(e===ir)i[5].setComponents(o,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ps.x=n.normal.x>0?t.max.x:t.min.x,Ps.y=n.normal.y>0?t.max.y:t.min.y,Ps.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vc(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function jh(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}class si extends re{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const v=f*d-a;for(let M=0;M<c;M++){const x=M*h-r;g.push(x,-v,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const M=v+c*f,x=v+c*(f+1),L=v+1+c*(f+1),A=v+1+c*f;p.push(M,x,A),p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
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
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,su=`#ifdef USE_AOMAP
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
#endif`,ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,au=`#ifdef USE_BATCHING
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
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uu=`#ifdef USE_IRIDESCENCE
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
#endif`,du=`#ifdef USE_BUMPMAP
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
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Su=`#define PI 3.141592653589793
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
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bu=`vec3 transformedNormal = objectNormal;
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
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
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
}`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hu=`uniform bool receiveShadow;
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
#endif`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
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
#endif`,$u=`struct PhysicalMaterial {
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
}`,ju=`
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
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ed=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ud=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
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
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fd=`float getShadowMask() {
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
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`#include <common>
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
}`,rf=`#if DEPTH_PACKING == 3200
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
}`,af=`#define DISTANCE
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
}`,of=`#define DISTANCE
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`uniform float scale;
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#define LAMBERT
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
}`,mf=`#define LAMBERT
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
}`,gf=`#define MATCAP
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
}`,_f=`#define MATCAP
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
}`,vf=`#define NORMAL
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
}`,xf=`#define NORMAL
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
}`,Mf=`#define PHONG
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
}`,Sf=`#define PHONG
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
}`,yf=`#define STANDARD
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
}`,bf=`#define STANDARD
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
}`,Tf=`#define TOON
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
}`,wf=`#define TOON
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
}`,Ef=`uniform float size;
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
}`,Af=`uniform vec3 diffuse;
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
}`,Rf=`#include <common>
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
}`,Cf=`uniform vec3 color;
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
}`,Pf=`uniform float rotation;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Jh,alphahash_pars_fragment:Qh,alphamap_fragment:tu,alphamap_pars_fragment:eu,alphatest_fragment:iu,alphatest_pars_fragment:nu,aomap_fragment:su,aomap_pars_fragment:ru,batching_pars_vertex:au,batching_vertex:ou,begin_vertex:lu,beginnormal_vertex:cu,bsdfs:hu,iridescence_fragment:uu,bumpmap_pars_fragment:du,clipping_planes_fragment:fu,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:_u,color_pars_fragment:vu,color_pars_vertex:xu,color_vertex:Mu,common:Su,cube_uv_reflection_fragment:yu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Tu,displacementmap_vertex:wu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Au,colorspace_fragment:Ru,colorspace_pars_fragment:Cu,envmap_fragment:Pu,envmap_common_pars_fragment:Lu,envmap_pars_fragment:Du,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Wu,envmap_vertex:Uu,fog_vertex:Nu,fog_pars_vertex:Fu,fog_fragment:Ou,fog_pars_fragment:Bu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:ku,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:Gu,lights_pars_begin:Hu,lights_toon_fragment:Xu,lights_toon_pars_fragment:qu,lights_phong_fragment:Yu,lights_phong_pars_fragment:Ku,lights_physical_fragment:Zu,lights_physical_pars_fragment:$u,lights_fragment_begin:ju,lights_fragment_maps:Ju,lights_fragment_end:Qu,logdepthbuf_fragment:td,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:id,logdepthbuf_vertex:nd,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphinstance_vertex:hd,morphcolor_vertex:ud,morphnormal_vertex:dd,morphtarget_pars_vertex:fd,morphtarget_vertex:pd,normal_fragment_begin:md,normal_fragment_maps:gd,normal_pars_fragment:_d,normal_pars_vertex:vd,normal_vertex:xd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:bd,iridescence_pars_fragment:Td,opaque_fragment:wd,packing:Ed,premultiplied_alpha_fragment:Ad,project_vertex:Rd,dithering_fragment:Cd,dithering_pars_fragment:Pd,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Ud,shadowmap_vertex:Nd,shadowmask_pars_fragment:Fd,skinbase_vertex:Od,skinning_pars_vertex:Bd,skinning_vertex:zd,skinnormal_vertex:kd,specularmap_fragment:Vd,specularmap_pars_fragment:Gd,tonemapping_fragment:Hd,tonemapping_pars_fragment:Wd,transmission_fragment:Xd,transmission_pars_fragment:qd,uv_pars_fragment:Yd,uv_pars_vertex:Kd,uv_vertex:Zd,worldpos_vertex:$d,background_vert:jd,background_frag:Jd,backgroundCube_vert:Qd,backgroundCube_frag:tf,cube_vert:ef,cube_frag:nf,depth_vert:sf,depth_frag:rf,distanceRGBA_vert:af,distanceRGBA_frag:of,equirect_vert:lf,equirect_frag:cf,linedashed_vert:hf,linedashed_frag:uf,meshbasic_vert:df,meshbasic_frag:ff,meshlambert_vert:pf,meshlambert_frag:mf,meshmatcap_vert:gf,meshmatcap_frag:_f,meshnormal_vert:vf,meshnormal_frag:xf,meshphong_vert:Mf,meshphong_frag:Sf,meshphysical_vert:yf,meshphysical_frag:bf,meshtoon_vert:Tf,meshtoon_frag:wf,points_vert:Ef,points_frag:Af,shadow_vert:Rf,shadow_frag:Cf,sprite_vert:Pf,sprite_frag:Lf},ot={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},oi={basic:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new dt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Le([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Le([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new dt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Le([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Le([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Le([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Le([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Le([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Le([ot.lights,ot.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};oi.physical={uniforms:Le([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ls={r:0,b:0,g:0},Hi=new hi,Df=new se;function If(s,t,e,i,n,r,a){const o=new dt(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const x=g(v);x===null?f(o,l):x&&x.isColor&&(f(x,1),M=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===cr)?(u===void 0&&(u=new At(new ze(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:Dn(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Hi.copy(M.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(Hi)),u.material.toneMapped=qt.getTransfer(x.colorSpace)!==te,(h!==x||d!==x.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new At(new si(2,2),new de({name:"BackgroundMaterial",uniforms:Dn(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=qt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,M){v.getRGB(Ls,mc(s)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:_,addToRenderList:m}}function Uf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,a=!1;function o(S,R,I,O,W){let X=!1;const H=h(O,I,R);r!==H&&(r=H,c(r.object)),X=p(S,O,I,W),X&&g(S,O,I,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(S,R,I,O),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,R,I){const O=I.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let X=W[R.id];X===void 0&&(X={},W[R.id]=X);let H=X[O];return H===void 0&&(H=d(l()),X[O]=H),H}function d(S){const R=[],I=[],O=[];for(let W=0;W<e;W++)R[W]=0,I[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,R,I,O){const W=r.attributes,X=R.attributes;let H=0;const Z=I.getAttributes();for(const V in Z)if(Z[V].location>=0){const at=W[V];let gt=X[V];if(gt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),at===void 0||at.attribute!==gt||gt&&at.data!==gt.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(S,R,I,O){const W={},X=R.attributes;let H=0;const Z=I.getAttributes();for(const V in Z)if(Z[V].location>=0){let at=X[V];at===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));const gt={};gt.attribute=at,at&&at.data&&(gt.data=at.data),W[V]=gt,H++}r.attributes=W,r.attributesNum=H,r.index=O}function _(){const S=r.newAttributes;for(let R=0,I=S.length;R<I;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const I=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;I[S]=1,O[S]===0&&(s.enableVertexAttribArray(S),O[S]=1),W[S]!==R&&(s.vertexAttribDivisor(S,R),W[S]=R)}function v(){const S=r.newAttributes,R=r.enabledAttributes;for(let I=0,O=R.length;I<O;I++)R[I]!==S[I]&&(s.disableVertexAttribArray(I),R[I]=0)}function M(S,R,I,O,W,X,H){H===!0?s.vertexAttribIPointer(S,R,I,W,X):s.vertexAttribPointer(S,R,I,O,W,X)}function x(S,R,I,O){_();const W=O.attributes,X=I.getAttributes(),H=R.defaultAttributeValues;for(const Z in X){const V=X[Z];if(V.location>=0){let tt=W[Z];if(tt===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const at=tt.normalized,gt=tt.itemSize,Lt=t.get(tt);if(Lt===void 0)continue;const Xt=Lt.buffer,q=Lt.type,et=Lt.bytesPerElement,nt=q===s.INT||q===s.UNSIGNED_INT||tt.gpuType===Wa;if(tt.isInterleavedBufferAttribute){const j=tt.data,ft=j.stride,_t=tt.offset;if(j.isInstancedInterleavedBuffer){for(let wt=0;wt<V.locationSize;wt++)f(V.location+wt,j.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let wt=0;wt<V.locationSize;wt++)m(V.location+wt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let wt=0;wt<V.locationSize;wt++)M(V.location+wt,gt/V.locationSize,q,at,ft*et,(_t+gt/V.locationSize*wt)*et,nt)}else{if(tt.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)f(V.location+j,tt.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let j=0;j<V.locationSize;j++)M(V.location+j,gt/V.locationSize,q,at,gt*et,gt/V.locationSize*j*et,nt)}}else if(H!==void 0){const at=H[Z];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(V.location,at);break;case 3:s.vertexAttrib3fv(V.location,at);break;case 4:s.vertexAttrib4fv(V.location,at);break;default:s.vertexAttrib1fv(V.location,at)}}}}v()}function L(){C();for(const S in i){const R=i[S];for(const I in R){const O=R[I];for(const W in O)u(O[W].object),delete O[W];delete R[I]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const I in R){const O=R[I];for(const W in O)u(O[W].object),delete O[W];delete R[I]}delete i[S.id]}function w(S){for(const R in i){const I=i[R];if(I[S.id]===void 0)continue;const O=I[S.id];for(const W in O)u(O[W].object),delete O[W];delete I[S.id]}}function C(){b(),a=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Nf(s,t,e){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ff(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){return!(w!==ei&&i.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ei&&i.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ci&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function Of(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new qi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||n;return n=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!n||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:i,M=v*4;let x=f.clippingState||null;l.value=x,x=u(g,d,M,p);for(let L=0;L!==M;++L)x[L]=e[L];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=p;M!==_;++M,x+=4)a.copy(h[M]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Bf(s){let t=new WeakMap;function e(a,o){return o===ca?a.mapping=Pn:o===ha&&(a.mapping=Ln),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ca||o===ha)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Kh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class eo extends gc{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Tn=4,Xo=[.125,.215,.35,.446,.526,.582],Ki=20,Fr=new eo,qo=new dt;let Or=null,Br=0,zr=0,kr=!1;const Yi=(1+Math.sqrt(5))/2,vn=1/Yi,Yo=[new P(-Yi,vn,0),new P(Yi,vn,0),new P(-vn,0,Yi),new P(vn,0,Yi),new P(0,Yi,-vn),new P(0,Yi,vn),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Or=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,Br,zr),this._renderer.xr.enabled=kr,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pn||t.mapping===Ln?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:ni,format:ei,colorSpace:Nn,depthBuffer:!1},n=Zo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zf(r)),this._blurMaterial=kf(r,t,e)}return n}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,i,n){const o=new qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(qo),u.toneMapping=Oi,u.autoClear=!1;const p=new Ue({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new At(new ze,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(qo),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const M=this._cubeSize;Ds(n,v*M,f>2?M:0,M,M),u.setRenderTarget(n),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Pn||t.mapping===Ln;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Fr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yo[(n-r-1)%Yo.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new At(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const f=[];let v=0;for(let w=0;w<Ki;++w){const C=w/_,b=Math.exp(-C*C/2);f.push(b),w===0?v+=b:w<m&&(v+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const x=this._sizeLods[n],L=3*x*(n>M-Tn?n-M+Tn:0),A=4*(this._cubeSize-x);Ds(e,L,A,3*x,2*x),l.setRenderTarget(e),l.render(h,Fr)}}function zf(s){const t=[],e=[],i=[];let n=s;const r=s-Tn+1+Xo.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-Tn?l=Xo[a-s+Tn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),M=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(b,_*g*A),M.set(d,m*g*A);const S=[A,A,A,A,A,A];x.set(S,f*g*A)}const L=new re;L.setAttribute("position",new Te(v,_)),L.setAttribute("uv",new Te(M,m)),L.setAttribute("faceIndex",new Te(x,f)),t.push(L),n>Tn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zo(s,t,e){const i=new He(s,t,e);return i.texture.mapping=cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function kf(s,t,e){const i=new Float32Array(Ki),n=new P(0,1,0);return new de({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:io(),fragmentShader:`

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
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function $o(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function jo(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function Vf(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ca||l===ha,u=l===Pn||l===Ln;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ko(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&n(p)?(e===null&&(e=new Ko(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Gf(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Jn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Hf(s,t,e,i){const n={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete n[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let M=0,x=v.length;M<x;M+=3){const L=v[M+0],A=v[M+1],w=v[M+2];d.push(L,A,A,w,w,L)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const L=M+0,A=M+1,w=M+2;d.push(L,A,A,w,w,L)}}else return;const m=new(lc(d)?pc:fc)(d,1);m.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Wf(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(i,p,r,d*a),e.update(p,i,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(i,p,r,d*a,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];e.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function qf(s,t,e){const i=new WeakMap,n=new ue;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=o.attributes.position.count*x,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*A*4*h),C=new hc(w,L,A,h);C.type=ci,C.needsUpdate=!0;const b=x*4;for(let R=0;R<h;R++){const I=f[R],O=v[R],W=M[R],X=L*A*4*R;for(let H=0;H<I.count;H++){const Z=H*b;g===!0&&(n.fromBufferAttribute(I,H),w[X+Z+0]=n.x,w[X+Z+1]=n.y,w[X+Z+2]=n.z,w[X+Z+3]=0),_===!0&&(n.fromBufferAttribute(O,H),w[X+Z+4]=n.x,w[X+Z+5]=n.y,w[X+Z+6]=n.z,w[X+Z+7]=0),m===!0&&(n.fromBufferAttribute(W,H),w[X+Z+8]=n.x,w[X+Z+9]=n.y,w[X+Z+10]=n.z,w[X+Z+11]=W.itemSize===4?n.w:1)}}d={count:h,texture:C,size:new yt(L,A)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Yf(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(n.get(h)!==c&&(t.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class no extends Ce{constructor(t,e,i,n,r,a,o,l,c,u=wn){if(u!==wn&&u!==en)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===wn&&(i=Qi),i===void 0&&u===en&&(i=tn),super(null,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xc=new Ce,Jo=new no(1,1),Mc=new hc,Sc=new Ih,yc=new _c,Qo=[],tl=[],el=new Float32Array(16),il=new Float32Array(9),nl=new Float32Array(4);function On(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Qo[n];if(r===void 0&&(r=new Float32Array(n),Qo[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ur(s,t){let e=tl[t];e===void 0&&(e=new Int32Array(t),tl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Kf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function $f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function Jf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;nl.set(i),s.uniformMatrix2fv(this.addr,!1,nl),_e(e,i)}}function Qf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;il.set(i),s.uniformMatrix3fv(this.addr,!1,il),_e(e,i)}}function tp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;el.set(i),s.uniformMatrix4fv(this.addr,!1,el),_e(e,i)}}function ep(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function rp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function cp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Jo.compareFunction=oc,r=Jo):r=xc,e.setTexture2D(t||r,n)}function hp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Sc,n)}function up(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||yc,n)}function dp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Mc,n)}function fp(s){switch(s){case 5126:return Kf;case 35664:return Zf;case 35665:return $f;case 35666:return jf;case 35674:return Jf;case 35675:return Qf;case 35676:return tp;case 5124:case 35670:return ep;case 35667:case 35671:return ip;case 35668:case 35672:return np;case 35669:case 35673:return sp;case 5125:return rp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(s,t){s.uniform1fv(this.addr,t)}function mp(s,t){const e=On(t,this.size,2);s.uniform2fv(this.addr,e)}function gp(s,t){const e=On(t,this.size,3);s.uniform3fv(this.addr,e)}function _p(s,t){const e=On(t,this.size,4);s.uniform4fv(this.addr,e)}function vp(s,t){const e=On(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xp(s,t){const e=On(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Mp(s,t){const e=On(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sp(s,t){s.uniform1iv(this.addr,t)}function yp(s,t){s.uniform2iv(this.addr,t)}function bp(s,t){s.uniform3iv(this.addr,t)}function Tp(s,t){s.uniform4iv(this.addr,t)}function wp(s,t){s.uniform1uiv(this.addr,t)}function Ep(s,t){s.uniform2uiv(this.addr,t)}function Ap(s,t){s.uniform3uiv(this.addr,t)}function Rp(s,t){s.uniform4uiv(this.addr,t)}function Cp(s,t,e){const i=this.cache,n=t.length,r=ur(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||xc,r[a])}function Pp(s,t,e){const i=this.cache,n=t.length,r=ur(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Sc,r[a])}function Lp(s,t,e){const i=this.cache,n=t.length,r=ur(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||yc,r[a])}function Dp(s,t,e){const i=this.cache,n=t.length,r=ur(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Mc,r[a])}function Ip(s){switch(s){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return xp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return yp;case 35668:case 35672:return bp;case 35669:case 35673:return Tp;case 5125:return wp;case 36294:return Ep;case 36295:return Ap;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}class Up{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fp(e.type)}}class Np{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ip(e.type)}}class Fp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function sl(s,t){s.seq.push(t),s.map[t.id]=t}function Op(s,t,e){const i=s.name,n=i.length;for(Vr.lastIndex=0;;){const r=Vr.exec(i),a=Vr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){sl(e,c===void 0?new Up(o,s,t):new Np(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new Fp(o),sl(e,h)),e=h}}}class Qs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);Op(r,a,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function rl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Bp=37297;let zp=0;function kp(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const al=new Ot;function Vp(s){qt._getMatrix(al,qt.workingColorSpace,s);const t=`mat3( ${al.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case hr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ol(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+kp(s.getShaderSource(t),a)}else return n}function Gp(s,t){const e=Vp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hp(s,t){let e;switch(t){case ql:e="Linear";break;case Yl:e="Reinhard";break;case Kl:e="Cineon";break;case Ha:e="ACESFilmic";break;case Zl:e="AgX";break;case $l:e="Neutral";break;case $c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new P;function Wp(){qt.getLuminanceCoefficients(Is);const s=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qn).join(`
`)}function qp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Yp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Qn(s){return s!==""}function ll(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(s){return s.replace(Kp,$p)}const Zp=new Map;function $p(s,t){let e=Bt[t];if(e===void 0){const i=Zp.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return za(e)}const jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(s){return s.replace(jp,Jp)}function Jp(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function ul(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Qp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function tm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pn:case Ln:t="ENVMAP_TYPE_CUBE";break;case cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function em(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ln:t="ENVMAP_MODE_REFRACTION";break}return t}function im(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Kc:t="ENVMAP_BLENDING_MIX";break;case Zc:t="ENVMAP_BLENDING_ADD";break}return t}function nm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function sm(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Qp(e),c=tm(e),u=em(e),h=im(e),d=nm(e),p=Xp(e),g=qp(r),_=n.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qn).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qn).join(`
`),f.length>0&&(f+=`
`)):(m=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qn).join(`
`),f=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Oi?Hp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Gp("linearToOutputTexel",e.outputColorSpace),Wp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qn).join(`
`)),a=za(a),a=ll(a,e),a=cl(a,e),o=za(o),o=ll(o,e),o=cl(o,e),a=hl(a),o=hl(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+m+a,x=v+f+o,L=rl(n,n.VERTEX_SHADER,M),A=rl(n,n.FRAGMENT_SHADER,x);n.attachShader(_,L),n.attachShader(_,A),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(R){if(s.debug.checkShaderErrors){const I=n.getProgramInfoLog(_).trim(),O=n.getShaderInfoLog(L).trim(),W=n.getShaderInfoLog(A).trim();let X=!0,H=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,L,A);else{const Z=ol(n,L,"vertex"),V=ol(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+Z+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||W==="")&&(H=!1);H&&(R.diagnostics={runnable:X,programLog:I,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}n.deleteShader(L),n.deleteShader(A),C=new Qs(n,_),b=Yp(n,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(_,Bp)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let rm=0;class am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new om(t),e.set(t,i)),i}}class om{constructor(t){this.id=rm++,this.code=t,this.usedTimes=0}}function lm(s,t,e,i,n,r,a){const o=new uc,l=new am,c=new Set,u=[],h=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,R,I,O){const W=I.fog,X=O.geometry,H=b.isMeshStandardMaterial?I.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),V=Z&&Z.mapping===cr?Z.image.height:null,tt=g[b.type];b.precision!==null&&(p=n.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=at!==void 0?at.length:0;let Lt=0;X.morphAttributes.position!==void 0&&(Lt=1),X.morphAttributes.normal!==void 0&&(Lt=2),X.morphAttributes.color!==void 0&&(Lt=3);let Xt,q,et,nt;if(tt){const Qt=oi[tt];Xt=Qt.vertexShader,q=Qt.fragmentShader}else Xt=b.vertexShader,q=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),nt=l.getFragmentShaderID(b);const j=s.getRenderTarget(),ft=s.state.buffers.depth.getReversed(),_t=O.isInstancedMesh===!0,wt=O.isBatchedMesh===!0,Yt=!!b.map,kt=!!b.matcap,ie=!!Z,U=!!b.aoMap,we=!!b.lightMap,Gt=!!b.bumpMap,Ht=!!b.normalMap,Ct=!!b.displacementMap,Jt=!!b.emissiveMap,Et=!!b.metalnessMap,E=!!b.roughnessMap,y=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,J=b.iridescence>0,Y=b.sheen>0,vt=b.transmission>0,rt=y&&!!b.anisotropyMap,lt=B&&!!b.clearcoatMap,Vt=B&&!!b.clearcoatNormalMap,Q=B&&!!b.clearcoatRoughnessMap,pt=J&&!!b.iridescenceMap,Pt=J&&!!b.iridescenceThicknessMap,Dt=Y&&!!b.sheenColorMap,mt=Y&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,It=!!b.specularColorMap,Kt=!!b.specularIntensityMap,D=vt&&!!b.transmissionMap,st=vt&&!!b.thicknessMap,G=!!b.gradientMap,$=!!b.alphaMap,ut=b.alphaTest>0,ct=!!b.alphaHash,Nt=!!b.extensions;let he=Oi;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(he=s.toneMapping);const Ee={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:Xt,fragmentShader:q,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:nt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:wt,batchingColor:wt&&O._colorsTexture!==null,instancing:_t,instancingColor:_t&&O.instanceColor!==null,instancingMorph:_t&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Nn,alphaToCoverage:!!b.alphaToCoverage,map:Yt,matcap:kt,envMap:ie,envMapMode:ie&&Z.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:we,bumpMap:Gt,normalMap:Ht,displacementMap:d&&Ct,emissiveMap:Jt,normalMapObjectSpace:Ht&&b.normalMapType===th,normalMapTangentSpace:Ht&&b.normalMapType===ja,metalnessMap:Et,roughnessMap:E,anisotropy:y,anisotropyMap:rt,clearcoat:B,clearcoatMap:lt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Pt,sheen:Y,sheenColorMap:Dt,sheenRoughnessMap:mt,specularMap:Wt,specularColorMap:It,specularIntensityMap:Kt,transmission:vt,transmissionMap:D,thicknessMap:st,gradientMap:G,opaque:b.transparent===!1&&b.blending===Ji&&b.alphaToCoverage===!1,alphaMap:$,alphaTest:ut,alphaHash:ct,combine:b.combine,mapUv:Yt&&_(b.map.channel),aoMapUv:U&&_(b.aoMap.channel),lightMapUv:we&&_(b.lightMap.channel),bumpMapUv:Gt&&_(b.bumpMap.channel),normalMapUv:Ht&&_(b.normalMap.channel),displacementMapUv:Ct&&_(b.displacementMap.channel),emissiveMapUv:Jt&&_(b.emissiveMap.channel),metalnessMapUv:Et&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:rt&&_(b.anisotropyMap.channel),clearcoatMapUv:lt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(b.sheenRoughnessMap.channel),specularMapUv:Wt&&_(b.specularMap.channel),specularColorMapUv:It&&_(b.specularColorMap.channel),specularIntensityMapUv:Kt&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:st&&_(b.thicknessMap.channel),alphaMapUv:$&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ht||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Yt||$),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ft,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:Yt&&b.map.isVideoTexture===!0&&qt.getTransfer(b.map.colorSpace)===te,decodeVideoTextureEmissive:Jt&&b.emissiveMap.isVideoTexture===!0&&qt.getTransfer(b.emissiveMap.colorSpace)===te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ne,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Nt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&b.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(v(S,b),M(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const S=g[b.type];let R;if(S){const I=oi[S];R=yi.clone(I.uniforms)}else R=b.uniforms;return R}function L(b,S){let R;for(let I=0,O=u.length;I<O;I++){const W=u[I];if(W.cacheKey===S){R=W,++R.usedTimes;break}}return R===void 0&&(R=new sm(s,S,b,r),u.push(R)),R}function A(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function cm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function hm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function dl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(h,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):e.push(f)}function l(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||hm),i.length>1&&i.sort(d||dl),n.length>1&&n.sort(d||dl)}function u(){for(let h=t,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function um(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new fl,s.set(i,[a])):n>=r.length?(a=new fl,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function dm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new dt};break;case"SpotLight":e={position:new P,direction:new P,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function fm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let pm=0;function mm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function gm(s){const t=new dm,e=fm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,r=new se,a=new se;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,M=0,x=0,L=0,A=0,w=0;c.sort(mm);for(let b=0,S=c.length;b<S;b++){const R=c[b],I=R.color,O=R.intensity,W=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*O,h+=I.g*O,d+=I.b*O;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],O);w++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,V=e.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=R.shadow.matrix,v++}i.directional[p]=H,p++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(I).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[_]=H;const Z=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,Z.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=Z.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=X,x++}_++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(I).multiplyScalar(O),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=H,m++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const Z=R.shadow,V=e.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(O),H.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==x||C.numSpotMaps!==L||C.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=x,C.numSpotMaps=L,C.numLightProbes=w,i.version=pm++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const M=c[f];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function pl(s){const t=new gm(s),e=[],i=[];function n(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _m(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new pl(s),t.set(n,[o])):r>=a.length?(o=new pl(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class vm extends Ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xm extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`;function ym(s,t,e){let i=new to;const n=new yt,r=new yt,a=new ue,o=new vm({depthPacking:Qc}),l=new xm,c={},u=e.maxTextureSize,h={[wi]:Fe,[Fe]:wi,[Ne]:Ne},d=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new re;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let f=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Ie),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=f!==vi&&this.type===vi,W=f===vi&&this.type!==vi;for(let X=0,H=A.length;X<H;X++){const Z=A[X],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const tt=V.getFrameExtents();if(n.multiply(tt),r.copy(V.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/tt.x),n.x=r.x*tt.x,V.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/tt.y),n.y=r.y*tt.y,V.mapSize.y=r.y)),V.map===null||O===!0||W===!0){const gt=this.type!==vi?{minFilter:Oe,magFilter:Oe}:{};V.map!==null&&V.map.dispose(),V.map=new He(n.x,n.y,gt),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const at=V.getViewportCount();for(let gt=0;gt<at;gt++){const Lt=V.getViewport(gt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),I.viewport(a),V.updateMatrices(Z,gt),i=V.getFrustum(),x(w,C,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===vi&&v(V,C),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,S,R)};function v(A,w){const C=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new He(n.x,n.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,C,p,_,null)}function M(A,w,C,b){let S=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=C.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=S.uuid,O=w.uuid;let W=c[I];W===void 0&&(W={},c[I]=W);let X=W[O];X===void 0&&(X=S.clone(),W[O]=X,w.addEventListener("dispose",L)),S=X}if(S.visible=w.visible,S.wireframe=w.wireframe,b===vi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=s.properties.get(S);I.light=C}return S}function x(A,w,C,b,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const O=t.update(A),W=A.material;if(Array.isArray(W)){const X=O.groups;for(let H=0,Z=X.length;H<Z;H++){const V=X[H],tt=W[V.materialIndex];if(tt&&tt.visible){const at=M(A,tt,b,S);A.onBeforeShadow(s,A,w,C,O,at,V),s.renderBufferDirect(C,null,O,at,A,V),A.onAfterShadow(s,A,w,C,O,at,V)}}}else if(W.visible){const X=M(A,W,b,S);A.onBeforeShadow(s,A,w,C,O,X,null),s.renderBufferDirect(C,null,O,X,A,null),A.onAfterShadow(s,A,w,C,O,X,null)}}const I=A.children;for(let O=0,W=I.length;O<W;O++)x(I[O],w,C,b,S)}function L(A){A.target.removeEventListener("dispose",L);for(const C in c){const b=c[C],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const bm={[ia]:na,[sa]:oa,[ra]:la,[Cn]:aa,[na]:ia,[oa]:sa,[la]:ra,[aa]:Cn};function Tm(s,t){function e(){let D=!1;const st=new ue;let G=null;const $=new ue(0,0,0,0);return{setMask:function(ut){G!==ut&&!D&&(s.colorMask(ut,ut,ut,ut),G=ut)},setLocked:function(ut){D=ut},setClear:function(ut,ct,Nt,he,Ee){Ee===!0&&(ut*=he,ct*=he,Nt*=he),st.set(ut,ct,Nt,he),$.equals(st)===!1&&(s.clearColor(ut,ct,Nt,he),$.copy(st))},reset:function(){D=!1,G=null,$.set(-1,0,0,0)}}}function i(){let D=!1,st=!1,G=null,$=null,ut=null;return{setReversed:function(ct){if(st!==ct){const Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const he=ut;ut=null,this.setClear(he)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?j(s.DEPTH_TEST):ft(s.DEPTH_TEST)},setMask:function(ct){G!==ct&&!D&&(s.depthMask(ct),G=ct)},setFunc:function(ct){if(st&&(ct=bm[ct]),$!==ct){switch(ct){case ia:s.depthFunc(s.NEVER);break;case na:s.depthFunc(s.ALWAYS);break;case sa:s.depthFunc(s.LESS);break;case Cn:s.depthFunc(s.LEQUAL);break;case ra:s.depthFunc(s.EQUAL);break;case aa:s.depthFunc(s.GEQUAL);break;case oa:s.depthFunc(s.GREATER);break;case la:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ut!==ct&&(st&&(ct=1-ct),s.clearDepth(ct),ut=ct)},reset:function(){D=!1,G=null,$=null,ut=null,st=!1}}}function n(){let D=!1,st=null,G=null,$=null,ut=null,ct=null,Nt=null,he=null,Ee=null;return{setTest:function(Qt){D||(Qt?j(s.STENCIL_TEST):ft(s.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!D&&(s.stencilMask(Qt),st=Qt)},setFunc:function(Qt,Ke,ui){(G!==Qt||$!==Ke||ut!==ui)&&(s.stencilFunc(Qt,Ke,ui),G=Qt,$=Ke,ut=ui)},setOp:function(Qt,Ke,ui){(ct!==Qt||Nt!==Ke||he!==ui)&&(s.stencilOp(Qt,Ke,ui),ct=Qt,Nt=Ke,he=ui)},setLocked:function(Qt){D=Qt},setClear:function(Qt){Ee!==Qt&&(s.clearStencil(Qt),Ee=Qt)},reset:function(){D=!1,st=null,G=null,$=null,ut=null,ct=null,Nt=null,he=null,Ee=null}}}const r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,M=null,x=null,L=null,A=null,w=new dt(0,0,0),C=0,b=!1,S=null,R=null,I=null,O=null,W=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Z>=2);let tt=null,at={};const gt=s.getParameter(s.SCISSOR_BOX),Lt=s.getParameter(s.VIEWPORT),Xt=new ue().fromArray(gt),q=new ue().fromArray(Lt);function et(D,st,G,$){const ut=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<G;Nt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(st+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ct}const nt={};nt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(Cn),Gt(!1),Ht(xo),j(s.CULL_FACE),U(Ie);function j(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function ft(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function _t(D,st){return h[D]!==st?(s.bindFramebuffer(D,st),h[D]=st,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=st),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=st),!0):!1}function wt(D,st){let G=p,$=!1;if(D){G=d.get(st),G===void 0&&(G=[],d.set(st,G));const ut=D.textures;if(G.length!==ut.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Nt=ut.length;ct<Nt;ct++)G[ct]=s.COLOR_ATTACHMENT0+ct;G.length=ut.length,$=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,$=!0);$&&s.drawBuffers(G)}function Yt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const kt={[xi]:s.FUNC_ADD,[Uc]:s.FUNC_SUBTRACT,[Nc]:s.FUNC_REVERSE_SUBTRACT};kt[Fc]=s.MIN,kt[Oc]=s.MAX;const ie={[Qr]:s.ZERO,[Bc]:s.ONE,[zc]:s.SRC_COLOR,[ta]:s.SRC_ALPHA,[Hc]:s.SRC_ALPHA_SATURATE,[Wl]:s.DST_COLOR,[Hl]:s.DST_ALPHA,[kc]:s.ONE_MINUS_SRC_COLOR,[ea]:s.ONE_MINUS_SRC_ALPHA,[Gc]:s.ONE_MINUS_DST_COLOR,[Vc]:s.ONE_MINUS_DST_ALPHA,[Wc]:s.CONSTANT_COLOR,[Xc]:s.ONE_MINUS_CONSTANT_COLOR,[qc]:s.CONSTANT_ALPHA,[Yc]:s.ONE_MINUS_CONSTANT_ALPHA};function U(D,st,G,$,ut,ct,Nt,he,Ee,Qt){if(D===Ie){_===!0&&(ft(s.BLEND),_=!1);return}if(_===!1&&(j(s.BLEND),_=!0),D!==Gl){if(D!==m||Qt!==b){if((f!==xi||x!==xi)&&(s.blendEquation(s.FUNC_ADD),f=xi,x=xi),Qt)switch(D){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rn:s.blendFunc(s.ONE,s.ONE);break;case Mo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case So:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Mo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case So:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,M=null,L=null,A=null,w.set(0,0,0),C=0,m=D,b=Qt}return}ut=ut||st,ct=ct||G,Nt=Nt||$,(st!==f||ut!==x)&&(s.blendEquationSeparate(kt[st],kt[ut]),f=st,x=ut),(G!==v||$!==M||ct!==L||Nt!==A)&&(s.blendFuncSeparate(ie[G],ie[$],ie[ct],ie[Nt]),v=G,M=$,L=ct,A=Nt),(he.equals(w)===!1||Ee!==C)&&(s.blendColor(he.r,he.g,he.b,Ee),w.copy(he),C=Ee),m=D,b=!1}function we(D,st){D.side===Ne?ft(s.CULL_FACE):j(s.CULL_FACE);let G=D.side===Fe;st&&(G=!G),Gt(G),D.blending===Ji&&D.transparent===!1?U(Ie):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Jt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function Ht(D){D!==Dc?(j(s.CULL_FACE),D!==R&&(D===xo?s.cullFace(s.BACK):D===Ic?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ft(s.CULL_FACE),R=D}function Ct(D){D!==I&&(H&&s.lineWidth(D),I=D)}function Jt(D,st,G){D?(j(s.POLYGON_OFFSET_FILL),(O!==st||W!==G)&&(s.polygonOffset(st,G),O=st,W=G)):ft(s.POLYGON_OFFSET_FILL)}function Et(D){D?j(s.SCISSOR_TEST):ft(s.SCISSOR_TEST)}function E(D){D===void 0&&(D=s.TEXTURE0+X-1),tt!==D&&(s.activeTexture(D),tt=D)}function y(D,st,G){G===void 0&&(tt===null?G=s.TEXTURE0+X-1:G=tt);let $=at[G];$===void 0&&($={type:void 0,texture:void 0},at[G]=$),($.type!==D||$.texture!==st)&&(tt!==G&&(s.activeTexture(G),tt=G),s.bindTexture(D,st||nt[D]),$.type=D,$.texture=st)}function B(){const D=at[tt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(D){Xt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Xt.copy(D))}function mt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Wt(D,st){let G=c.get(st);G===void 0&&(G=new WeakMap,c.set(st,G));let $=G.get(D);$===void 0&&($=s.getUniformBlockIndex(st,D.name),G.set(D,$))}function It(D,st){const $=c.get(st).get(D);l.get(st)!==$&&(s.uniformBlockBinding(st,$,D.__bindingPointIndex),l.set(st,$))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},tt=null,at={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,M=null,x=null,L=null,A=null,w=new dt(0,0,0),C=0,b=!1,S=null,R=null,I=null,O=null,W=null,Xt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ft,bindFramebuffer:_t,drawBuffers:wt,useProgram:Yt,setBlending:U,setMaterial:we,setFlipSided:Gt,setCullFace:Ht,setLineWidth:Ct,setPolygonOffset:Jt,setScissorTest:Et,activeTexture:E,bindTexture:y,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:pt,texImage3D:Pt,updateUBOMapping:Wt,uniformBlockBinding:It,texStorage2D:Vt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:lt,scissor:Dt,viewport:mt,reset:Kt}}function ml(s,t,e,i){const n=wm(i);switch(e){case ec:return s*t;case nc:return s*t;case sc:return s*t*2;case Ya:return s*t/n.components*n.byteLength;case Ka:return s*t/n.components*n.byteLength;case rc:return s*t*2/n.components*n.byteLength;case Za:return s*t*2/n.components*n.byteLength;case ic:return s*t*3/n.components*n.byteLength;case ei:return s*t*4/n.components*n.byteLength;case $a:return s*t*4/n.components*n.byteLength;case Ks:case Zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $s:case js:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fa:case ma:return Math.max(s,16)*Math.max(t,8)/4;case da:case pa:return Math.max(s,8)*Math.max(t,8)/2;case ga:case _a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Js:case Ia:case Ua:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ac:case Na:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fa:case Oa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wm(s){switch(s){case Ei:case Jl:return{byteLength:1,components:1};case ss:case Ql:case ni:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case Qi:case Wa:case ci:return{byteLength:4,components:1};case tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Em(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return p?new OffscreenCanvas(E,y):nr("canvas")}function _(E,y,B){let K=1;const J=Et(E);if((J.width>B||J.height>B)&&(K=B/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(K*J.width),vt=Math.floor(K*J.height);h===void 0&&(h=g(Y,vt));const rt=y?g(Y,vt):h;return rt.width=Y,rt.height=vt,rt.getContext("2d").drawImage(E,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+vt+")."),rt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(E,y,B,K,J=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=y;if(y===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),y===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),y===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),y===s.RGBA){const vt=J?hr:qt.getTransfer(K);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=vt===te?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(E,y){let B;return E?y===null||y===Qi||y===tn?B=s.DEPTH24_STENCIL8:y===ci?B=s.DEPTH32F_STENCIL8:y===ss&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qi||y===tn?B=s.DEPTH_COMPONENT24:y===ci?B=s.DEPTH_COMPONENT32F:y===ss&&(B=s.DEPTH_COMPONENT16),B}function L(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Oe&&E.minFilter!==li?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){const y=E.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&u.delete(y)}function w(E){const y=E.target;y.removeEventListener("dispose",w),S(y)}function C(E){const y=i.get(E);if(y.__webglInit===void 0)return;const B=E.source,K=d.get(B);if(K){const J=K[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(E),Object.keys(K).length===0&&d.delete(B)}i.remove(E)}function b(E){const y=i.get(E);s.deleteTexture(y.__webglTexture);const B=E.source,K=d.get(B);delete K[y.__cacheKey],a.memory.textures--}function S(E){const y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let J=0;J<y.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[K][J]);else s.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)s.deleteFramebuffer(y.__webglFramebuffer[K]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=E.textures;for(let K=0,J=B.length;K<J;K++){const Y=i.get(B[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(B[K])}i.remove(E)}let R=0;function I(){R=0}function O(){const E=R;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),R+=1,E}function W(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function X(E,y){const B=i.get(E);if(E.isVideoTexture&&Ct(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,E,y);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function H(E,y){const B=i.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function Z(E,y){const B=i.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,y);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function V(E,y){const B=i.get(E);if(E.version>0&&B.__version!==E.version){et(B,E,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const tt={[ns]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[ua]:s.MIRRORED_REPEAT},at={[Oe]:s.NEAREST,[jc]:s.NEAREST_MIPMAP_NEAREST,[fs]:s.NEAREST_MIPMAP_LINEAR,[li]:s.LINEAR,[mr]:s.LINEAR_MIPMAP_NEAREST,[$i]:s.LINEAR_MIPMAP_LINEAR},gt={[eh]:s.NEVER,[oh]:s.ALWAYS,[ih]:s.LESS,[oc]:s.LEQUAL,[nh]:s.EQUAL,[ah]:s.GEQUAL,[sh]:s.GREATER,[rh]:s.NOTEQUAL};function Lt(E,y){if(y.type===ci&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===li||y.magFilter===mr||y.magFilter===fs||y.magFilter===$i||y.minFilter===li||y.minFilter===mr||y.minFilter===fs||y.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,tt[y.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,tt[y.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,tt[y.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,at[y.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,at[y.minFilter]),y.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Oe||y.minFilter!==fs&&y.minFilter!==$i||y.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Xt(E,y){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));const K=y.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const Y=W(y);if(Y!==E.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[Y].usedTimes++;const vt=J[E.__cacheKey];vt!==void 0&&(J[E.__cacheKey].usedTimes--,vt.usedTimes===0&&b(y)),E.__cacheKey=Y,E.__webglTexture=J[Y].texture}return B}function q(E,y,B){let K=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=s.TEXTURE_3D);const J=Xt(E,y),Y=y.source;e.bindTexture(K,E.__webglTexture,s.TEXTURE0+B);const vt=i.get(Y);if(Y.version!==vt.__version||J===!0){e.activeTexture(s.TEXTURE0+B);const rt=qt.getPrimaries(qt.workingColorSpace),lt=y.colorSpace===Fi?null:qt.getPrimaries(y.colorSpace),Vt=y.colorSpace===Fi||rt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Q=_(y.image,!1,n.maxTextureSize);Q=Jt(y,Q);const pt=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type);let Dt=M(y.internalFormat,pt,Pt,y.colorSpace,y.isVideoTexture);Lt(K,y);let mt;const Wt=y.mipmaps,It=y.isVideoTexture!==!0,Kt=vt.__version===void 0||J===!0,D=Y.dataReady,st=L(y,Q);if(y.isDepthTexture)Dt=x(y.format===en,y.type),Kt&&(It?e.texStorage2D(s.TEXTURE_2D,1,Dt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Dt,Q.width,Q.height,0,pt,Pt,null));else if(y.isDataTexture)if(Wt.length>0){It&&Kt&&e.texStorage2D(s.TEXTURE_2D,st,Dt,Wt[0].width,Wt[0].height);for(let G=0,$=Wt.length;G<$;G++)mt=Wt[G],It?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(s.TEXTURE_2D,G,Dt,mt.width,mt.height,0,pt,Pt,mt.data);y.generateMipmaps=!1}else It?(Kt&&e.texStorage2D(s.TEXTURE_2D,st,Dt,Q.width,Q.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Pt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,Q.width,Q.height,0,pt,Pt,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){It&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Dt,Wt[0].width,Wt[0].height,Q.depth);for(let G=0,$=Wt.length;G<$;G++)if(mt=Wt[G],y.format!==ei)if(pt!==null)if(It){if(D)if(y.layerUpdates.size>0){const ut=ml(mt.width,mt.height,y.format,y.type);for(const ct of y.layerUpdates){const Nt=mt.data.subarray(ct*ut/mt.data.BYTES_PER_ELEMENT,(ct+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ct,mt.width,mt.height,1,pt,Nt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Dt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,Pt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Dt,mt.width,mt.height,Q.depth,0,pt,Pt,mt.data)}else{It&&Kt&&e.texStorage2D(s.TEXTURE_2D,st,Dt,Wt[0].width,Wt[0].height);for(let G=0,$=Wt.length;G<$;G++)mt=Wt[G],y.format!==ei?pt!==null?It?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Dt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(s.TEXTURE_2D,G,Dt,mt.width,mt.height,0,pt,Pt,mt.data)}else if(y.isDataArrayTexture)if(It){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Dt,Q.width,Q.height,Q.depth),D)if(y.layerUpdates.size>0){const G=ml(Q.width,Q.height,y.format,y.type);for(const $ of y.layerUpdates){const ut=Q.data.subarray($*G/Q.data.BYTES_PER_ELEMENT,($+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,pt,Pt,ut)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Pt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,Q.width,Q.height,Q.depth,0,pt,Pt,Q.data);else if(y.isData3DTexture)It?(Kt&&e.texStorage3D(s.TEXTURE_3D,st,Dt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Pt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,Q.width,Q.height,Q.depth,0,pt,Pt,Q.data);else if(y.isFramebufferTexture){if(Kt)if(It)e.texStorage2D(s.TEXTURE_2D,st,Dt,Q.width,Q.height);else{let G=Q.width,$=Q.height;for(let ut=0;ut<st;ut++)e.texImage2D(s.TEXTURE_2D,ut,Dt,G,$,0,pt,Pt,null),G>>=1,$>>=1}}else if(Wt.length>0){if(It&&Kt){const G=Et(Wt[0]);e.texStorage2D(s.TEXTURE_2D,st,Dt,G.width,G.height)}for(let G=0,$=Wt.length;G<$;G++)mt=Wt[G],It?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt,Pt,mt):e.texImage2D(s.TEXTURE_2D,G,Dt,pt,Pt,mt);y.generateMipmaps=!1}else if(It){if(Kt){const G=Et(Q);e.texStorage2D(s.TEXTURE_2D,st,Dt,G.width,G.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Pt,Q)}else e.texImage2D(s.TEXTURE_2D,0,Dt,pt,Pt,Q);m(y)&&f(K),vt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function et(E,y,B){if(y.image.length!==6)return;const K=Xt(E,y),J=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+B);const Y=i.get(J);if(J.version!==Y.__version||K===!0){e.activeTexture(s.TEXTURE0+B);const vt=qt.getPrimaries(qt.workingColorSpace),rt=y.colorSpace===Fi?null:qt.getPrimaries(y.colorSpace),lt=y.colorSpace===Fi||vt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Vt=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Vt&&!Q?pt[$]=_(y.image[$],!0,n.maxCubemapSize):pt[$]=Q?y.image[$].image:y.image[$],pt[$]=Jt(y,pt[$]);const Pt=pt[0],Dt=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Wt=M(y.internalFormat,Dt,mt,y.colorSpace),It=y.isVideoTexture!==!0,Kt=Y.__version===void 0||K===!0,D=J.dataReady;let st=L(y,Pt);Lt(s.TEXTURE_CUBE_MAP,y);let G;if(Vt){It&&Kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Wt,Pt.width,Pt.height);for(let $=0;$<6;$++){G=pt[$].mipmaps;for(let ut=0;ut<G.length;ut++){const ct=G[ut];y.format!==ei?Dt!==null?It?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,ct.width,ct.height,Dt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,Wt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,ct.width,ct.height,Dt,mt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,Wt,ct.width,ct.height,0,Dt,mt,ct.data)}}}else{if(G=y.mipmaps,It&&Kt){G.length>0&&st++;const $=Et(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Wt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Dt,mt,pt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,pt[$].width,pt[$].height,0,Dt,mt,pt[$].data);for(let ut=0;ut<G.length;ut++){const Nt=G[ut].image[$].image;It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,Nt.width,Nt.height,Dt,mt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,Wt,Nt.width,Nt.height,0,Dt,mt,Nt.data)}}else{It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Dt,mt,pt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,Dt,mt,pt[$]);for(let ut=0;ut<G.length;ut++){const ct=G[ut];It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,Dt,mt,ct.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,Wt,Dt,mt,ct.image[$])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),Y.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function nt(E,y,B,K,J,Y){const vt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),lt=M(B.internalFormat,vt,rt,B.colorSpace),Vt=i.get(y),Q=i.get(B);if(Q.__renderTarget=y,!Vt.__hasExternalTextures){const pt=Math.max(1,y.width>>Y),Pt=Math.max(1,y.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,lt,pt,Pt,y.depth,0,vt,rt,null):e.texImage2D(J,Y,lt,pt,Pt,0,vt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Ht(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,Q.__webglTexture,0,Gt(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,Q.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function j(E,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,E),y.depthBuffer){const K=y.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=x(y.stencilBuffer,J),vt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=Gt(y);Ht(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Y,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Y,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Y,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,E)}else{const K=y.textures;for(let J=0;J<K.length;J++){const Y=K[J],vt=r.convert(Y.format,Y.colorSpace),rt=r.convert(Y.type),lt=M(Y.internalFormat,vt,rt,Y.colorSpace),Vt=Gt(y);B&&Ht(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,lt,y.width,y.height):Ht(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,lt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,lt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const J=K.__webglTexture,Y=Gt(y);if(y.depthTexture.format===wn)Ht(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(y.depthTexture.format===en)Ht(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function _t(E){const y=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=K}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ft(y.__webglFramebuffer,E)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=s.createRenderbuffer(),j(y.__webglDepthbuffer[K],E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),j(y.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(E,y,B){const K=i.get(E);y!==void 0&&nt(K.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&_t(E)}function Yt(E){const y=E.texture,B=i.get(E),K=i.get(y);E.addEventListener("dispose",w);const J=E.textures,Y=E.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=y.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let lt=0;lt<y.mipmaps.length;lt++)B.__webglFramebuffer[rt][lt]=s.createFramebuffer()}else B.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)B.__webglFramebuffer[rt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(vt)for(let rt=0,lt=J.length;rt<lt;rt++){const Vt=i.get(J[rt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&Ht(E)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const lt=J[rt];B.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const Vt=r.convert(lt.format,lt.colorSpace),Q=r.convert(lt.type),pt=M(lt.internalFormat,Vt,Q,lt.colorSpace,E.isXRRenderTarget===!0),Pt=Gt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,pt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),j(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Lt(s.TEXTURE_CUBE_MAP,y);for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)nt(B.__webglFramebuffer[rt][lt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else nt(B.__webglFramebuffer[rt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(y)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,lt=J.length;rt<lt;rt++){const Vt=J[rt],Q=i.get(Vt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Lt(s.TEXTURE_2D,Vt),nt(B.__webglFramebuffer,E,Vt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(Vt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(rt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),Lt(rt,y),y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)nt(B.__webglFramebuffer[lt],E,y,s.COLOR_ATTACHMENT0,rt,lt);else nt(B.__webglFramebuffer,E,y,s.COLOR_ATTACHMENT0,rt,0);m(y)&&f(rt),e.unbindTexture()}E.depthBuffer&&_t(E)}function kt(E){const y=E.textures;for(let B=0,K=y.length;B<K;B++){const J=y[B];if(m(J)){const Y=v(E),vt=i.get(J).__webglTexture;e.bindTexture(Y,vt),f(Y),e.unbindTexture()}}}const ie=[],U=[];function we(E){if(E.samples>0){if(Ht(E)===!1){const y=E.textures,B=E.width,K=E.height;let J=s.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=i.get(E),rt=y.length>1;if(rt)for(let lt=0;lt<y.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let lt=0;lt<y.length;lt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[lt]);const Vt=i.get(y[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Vt,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,J,s.NEAREST),l===!0&&(ie.length=0,U.length=0,ie.push(s.COLOR_ATTACHMENT0+lt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ie.push(Y),U.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let lt=0;lt<y.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[lt]);const Vt=i.get(y[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Gt(E){return Math.min(n.maxSamples,E.samples)}function Ht(E){const y=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ct(E){const y=a.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function Jt(E,y){const B=E.colorSpace,K=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Nn&&B!==Fi&&(qt.getTransfer(B)===te?(K!==ei||J!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=wt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Ht}function Am(s,t){function e(i,n=Fi){let r;const a=qt.getTransfer(n);if(i===Ei)return s.UNSIGNED_BYTE;if(i===Xa)return s.UNSIGNED_SHORT_4_4_4_4;if(i===qa)return s.UNSIGNED_SHORT_5_5_5_1;if(i===tc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Jl)return s.BYTE;if(i===Ql)return s.SHORT;if(i===ss)return s.UNSIGNED_SHORT;if(i===Wa)return s.INT;if(i===Qi)return s.UNSIGNED_INT;if(i===ci)return s.FLOAT;if(i===ni)return s.HALF_FLOAT;if(i===ec)return s.ALPHA;if(i===ic)return s.RGB;if(i===ei)return s.RGBA;if(i===nc)return s.LUMINANCE;if(i===sc)return s.LUMINANCE_ALPHA;if(i===wn)return s.DEPTH_COMPONENT;if(i===en)return s.DEPTH_STENCIL;if(i===Ya)return s.RED;if(i===Ka)return s.RED_INTEGER;if(i===rc)return s.RG;if(i===Za)return s.RG_INTEGER;if(i===$a)return s.RGBA_INTEGER;if(i===Ks||i===Zs||i===$s||i===js)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===da||i===fa||i===pa||i===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ga||i===_a||i===va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ga||i===_a)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xa||i===Ma||i===Sa||i===ya||i===ba||i===Ta||i===wa||i===Ea||i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ta)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ea)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Aa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ra)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Js||i===Ia||i===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Js)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===Na||i===Fa||i===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Js)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class Rm extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class be extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cm={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lm=`
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

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ce,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new de({vertexShader:Pm,fragmentShader:Lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends Fn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new Dm,m=e.getContextAttributes();let f=null,v=null;const M=[],x=[],L=new yt;let A=null;const w=new qe;w.viewport=new ue;const C=new qe;C.viewport=new ue;const b=[w,C],S=new Rm;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=M[q];return et===void 0&&(et=new Gr,M[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=M[q];return et===void 0&&(et=new Gr,M[q]=et),et.getGripSpace()},this.getHand=function(q){let et=M[q];return et===void 0&&(et=new Gr,M[q]=et),et.getHandSpace()};function O(q){const et=x.indexOf(q.inputSource);if(et===-1)return;const nt=M[et];nt!==void 0&&(nt.update(q.inputSource,q.frame,c||a),nt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",X);for(let q=0;q<M.length;q++){const et=x[q];et!==null&&(x[q]=null,M[q].disconnect(et))}R=null,I=null,_.reset(),t.setRenderTarget(f),p=null,d=null,h=null,n=null,v=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(f=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",W),n.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),n.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,e,et),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new He(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,nt=null,j=null;m.depth&&(j=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?en:wn,nt=m.stencil?tn:Qi);const ft={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};h=new XRWebGLBinding(n,e),d=h.createProjectionLayer(ft),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new He(d.textureWidth,d.textureHeight,{format:ei,type:Ei,depthTexture:new no(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Xt.setContext(n),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let et=0;et<q.removed.length;et++){const nt=q.removed[et],j=x.indexOf(nt);j>=0&&(x[j]=null,M[j].disconnect(nt))}for(let et=0;et<q.added.length;et++){const nt=q.added[et];let j=x.indexOf(nt);if(j===-1){for(let _t=0;_t<M.length;_t++)if(_t>=x.length){x.push(nt),j=_t;break}else if(x[_t]===null){x[_t]=nt,j=_t;break}if(j===-1)break}const ft=M[j];ft&&ft.connect(nt)}}const H=new P,Z=new P;function V(q,et,nt){H.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(nt.matrixWorld);const j=H.distanceTo(Z),ft=et.projectionMatrix.elements,_t=nt.projectionMatrix.elements,wt=ft[14]/(ft[10]-1),Yt=ft[14]/(ft[10]+1),kt=(ft[9]+1)/ft[5],ie=(ft[9]-1)/ft[5],U=(ft[8]-1)/ft[0],we=(_t[8]+1)/_t[0],Gt=wt*U,Ht=wt*we,Ct=j/(-U+we),Jt=Ct*-U;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Jt),q.translateZ(Ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ft[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=wt+Ct,E=Yt+Ct,y=Gt-Jt,B=Ht+(j-Jt),K=kt*Yt/E*Et,J=ie*Yt/E*Et;q.projectionMatrix.makePerspective(y,B,K,J,Et,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function tt(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let et=q.near,nt=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(nt=_.depthFar)),S.near=C.near=w.near=et,S.far=C.far=w.far=nt,(R!==S.near||I!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,I=S.far),w.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const j=q.parent,ft=S.cameras;tt(S,j);for(let _t=0;_t<ft.length;_t++)tt(ft[_t],j);ft.length===2?V(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),at(q,S,j)};function at(q,et,nt){nt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(nt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let gt=null;function Lt(q,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const nt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let j=!1;nt.length!==S.cameras.length&&(S.cameras.length=0,j=!0);for(let _t=0;_t<nt.length;_t++){const wt=nt[_t];let Yt=null;if(p!==null)Yt=p.getViewport(wt);else{const ie=h.getViewSubImage(d,wt);Yt=ie.viewport,_t===0&&(t.setRenderTargetTextures(v,ie.colorTexture,d.ignoreDepthValues?void 0:ie.depthStencilTexture),t.setRenderTarget(v))}let kt=b[_t];kt===void 0&&(kt=new qe,kt.layers.enable(_t),kt.viewport=new ue,b[_t]=kt),kt.matrix.fromArray(wt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(wt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),_t===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),j===!0&&S.cameras.push(kt)}const ft=n.enabledFeatures;if(ft&&ft.includes("depth-sensing")){const _t=h.getDepthInformation(nt[0]);_t&&_t.isValid&&_t.texture&&_.init(t,_t,n.renderState)}}for(let nt=0;nt<M.length;nt++){const j=x[nt],ft=M[nt];j!==null&&ft!==void 0&&ft.update(j,et,c||a)}gt&&gt(q,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const Xt=new vc;Xt.setAnimationLoop(Lt),this.setAnimationLoop=function(q){gt=q},this.dispose=function(){}}}const Wi=new hi,Um=new se;function Nm(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,mc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,Wi.copy(x),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Wi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Fm(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function c(v,M){let x=n[v.id];x===void 0&&(g(v),x=u(v),n[v.id]=x,v.addEventListener("dispose",m));const L=M.program;i.updateUBOMapping(v,L);const A=t.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function u(v){const M=h();v.__bindingPointIndex=M;const x=s.createBuffer(),L=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=n[v.id],x=v.uniforms,L=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,w=x.length;A<w;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,S=C.length;b<S;b++){const R=C[b];if(p(R,A,b,L)===!0){const I=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let X=0;X<O.length;X++){const H=O[X],Z=_(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,I+W,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,M,x,L){const A=v.value,w=M+"_"+x;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{const C=L[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){const M=v.uniforms;let x=0;const L=16;for(let w=0,C=M.length;w<C;w++){const b=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,R=b.length;S<R;S++){const I=b[S],O=Array.isArray(I.value)?I.value:[I.value];for(let W=0,X=O.length;W<X;W++){const H=O[W],Z=_(H),V=x%L,tt=V%Z.boundary,at=V+tt;x+=tt,at!==0&&L-at<Z.storage&&(x+=L-at),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=Z.storage}}}const A=x%L;return A>0&&(x+=L-A),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function f(){for(const v in n)s.deleteBuffer(n[v]);a=[],n={},r={}}return{bind:l,update:c,dispose:f}}class Om{constructor(t={}){const{canvas:e=wh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Oi,this.toneMappingExposure=1;const x=this;let L=!1,A=0,w=0,C=null,b=-1,S=null;const R=new ue,I=new ue;let O=null;const W=new dt(0);let X=0,H=e.width,Z=e.height,V=1,tt=null,at=null;const gt=new ue(0,0,H,Z),Lt=new ue(0,0,H,Z);let Xt=!1;const q=new to;let et=!1,nt=!1;const j=new se,ft=new se,_t=new P,wt=new ue,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function ie(){return C===null?V:1}let U=i;function we(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ga}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){const N="webgl2";if(U=we(N,T),U===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Gt,Ht,Ct,Jt,Et,E,y,B,K,J,Y,vt,rt,lt,Vt,Q,pt,Pt,Dt,mt,Wt,It,Kt,D;function st(){Gt=new Gf(U),Gt.init(),It=new Am(U,Gt),Ht=new Ff(U,Gt,t,It),Ct=new Tm(U,Gt),Ht.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),Jt=new Xf(U),Et=new cm,E=new Em(U,Gt,Ct,Et,Ht,It,Jt),y=new Bf(x),B=new Vf(x),K=new jh(U),Kt=new Uf(U,K),J=new Hf(U,K,Jt,Kt),Y=new Yf(U,J,K,Jt),Dt=new qf(U,Ht,E),Q=new Of(Et),vt=new lm(x,y,B,Gt,Ht,Kt,Q),rt=new Nm(x,Et),lt=new um,Vt=new _m(Gt),Pt=new If(x,y,B,Ct,Y,p,l),pt=new ym(x,Y,Ht),D=new Fm(U,Jt,Ht,Ct),mt=new Nf(U,Gt,Jt),Wt=new Wf(U,Gt,Jt),Jt.programs=vt.programs,x.capabilities=Ht,x.extensions=Gt,x.properties=Et,x.renderLists=lt,x.shadowMap=pt,x.state=Ct,x.info=Jt}st();const G=new Im(x,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(H,Z,!1))},this.getSize=function(T){return T.set(H,Z)},this.setSize=function(T,N,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Z=N,e.width=Math.floor(T*V),e.height=Math.floor(N*V),z===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(H*V,Z*V).floor()},this.setDrawingBufferSize=function(T,N,z){H=T,Z=N,V=z,e.width=Math.floor(T*z),e.height=Math.floor(N*z),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(gt)},this.setViewport=function(T,N,z,k){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,N,z,k),Ct.viewport(R.copy(gt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Lt)},this.setScissor=function(T,N,z,k){T.isVector4?Lt.set(T.x,T.y,T.z,T.w):Lt.set(T,N,z,k),Ct.scissor(I.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(T){Ct.setScissorTest(Xt=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,N=!0,z=!0){let k=0;if(T){let F=!1;if(C!==null){const it=C.texture.format;F=it===$a||it===Za||it===Ka}if(F){const it=C.texture.type,ht=it===Ei||it===Qi||it===ss||it===tn||it===Xa||it===qa,xt=Pt.getClearColor(),Mt=Pt.getClearAlpha(),Ut=xt.r,Ft=xt.g,St=xt.b;ht?(g[0]=Ut,g[1]=Ft,g[2]=St,g[3]=Mt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ut,_[1]=Ft,_[2]=St,_[3]=Mt,U.clearBufferiv(U.COLOR,0,_))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT),z&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),lt.dispose(),Vt.dispose(),Et.dispose(),y.dispose(),B.dispose(),Y.dispose(),Kt.dispose(),D.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",ho),G.removeEventListener("sessionend",uo),Bi.stop()};function $(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=Jt.autoReset,N=pt.enabled,z=pt.autoUpdate,k=pt.needsUpdate,F=pt.type;st(),Jt.autoReset=T,pt.enabled=N,pt.autoUpdate=z,pt.needsUpdate=k,pt.type=F}function ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nt(T){const N=T.target;N.removeEventListener("dispose",Nt),he(N)}function he(T){Ee(T),Et.remove(T)}function Ee(T){const N=Et.get(T).programs;N!==void 0&&(N.forEach(function(z){vt.releaseProgram(z)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,z,k,F,it){N===null&&(N=Yt);const ht=F.isMesh&&F.matrixWorld.determinant()<0,xt=Cc(T,N,z,k,F);Ct.setMaterial(k,ht);let Mt=z.index,Ut=1;if(k.wireframe===!0){if(Mt=J.getWireframeAttribute(z),Mt===void 0)return;Ut=2}const Ft=z.drawRange,St=z.attributes.position;let Zt=Ft.start*Ut,ae=(Ft.start+Ft.count)*Ut;it!==null&&(Zt=Math.max(Zt,it.start*Ut),ae=Math.min(ae,(it.start+it.count)*Ut)),Mt!==null?(Zt=Math.max(Zt,0),ae=Math.min(ae,Mt.count)):St!=null&&(Zt=Math.max(Zt,0),ae=Math.min(ae,St.count));const oe=ae-Zt;if(oe<0||oe===1/0)return;Kt.setup(F,k,xt,z,Mt);let Be,$t=mt;if(Mt!==null&&(Be=K.get(Mt),$t=Wt,$t.setIndex(Be)),F.isMesh)k.wireframe===!0?(Ct.setLineWidth(k.wireframeLinewidth*ie()),$t.setMode(U.LINES)):$t.setMode(U.TRIANGLES);else if(F.isLine){let bt=k.linewidth;bt===void 0&&(bt=1),Ct.setLineWidth(bt*ie()),F.isLineSegments?$t.setMode(U.LINES):F.isLineLoop?$t.setMode(U.LINE_LOOP):$t.setMode(U.LINE_STRIP)}else F.isPoints?$t.setMode(U.POINTS):F.isSprite&&$t.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)$t.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))$t.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,di=F._multiDrawCounts,jt=F._multiDrawCount,Ze=Mt?K.get(Mt).bytesPerElement:1,sn=Et.get(k).currentProgram.getUniforms();for(let ke=0;ke<jt;ke++)sn.setValue(U,"_gl_DrawID",ke),$t.render(bt[ke]/Ze,di[ke])}else if(F.isInstancedMesh)$t.renderInstances(Zt,oe,F.count);else if(z.isInstancedBufferGeometry){const bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,di=Math.min(z.instanceCount,bt);$t.renderInstances(Zt,oe,di)}else $t.render(Zt,oe)};function Qt(T,N,z){T.transparent===!0&&T.side===Ne&&T.forceSinglePass===!1?(T.side=Fe,T.needsUpdate=!0,ds(T,N,z),T.side=wi,T.needsUpdate=!0,ds(T,N,z),T.side=Ne):ds(T,N,z)}this.compile=function(T,N,z=null){z===null&&(z=T),f=Vt.get(z),f.init(N),M.push(f),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const k=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const it=F.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const xt=it[ht];Qt(xt,z,F),k.add(xt)}else Qt(it,z,F),k.add(it)}),M.pop(),f=null,k},this.compileAsync=function(T,N,z=null){const k=this.compile(T,N,z);return new Promise(F=>{function it(){if(k.forEach(function(ht){Et.get(ht).currentProgram.isReady()&&k.delete(ht)}),k.size===0){F(T);return}setTimeout(it,10)}Gt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ke=null;function ui(T){Ke&&Ke(T)}function ho(){Bi.stop()}function uo(){Bi.start()}const Bi=new vc;Bi.setAnimationLoop(ui),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(T){Ke=T,G.setAnimationLoop(T),T===null?Bi.stop():Bi.start()},G.addEventListener("sessionstart",ho),G.addEventListener("sessionend",uo),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,C),f=Vt.get(T,M.length),f.init(N),M.push(f),ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(ft),nt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,nt),m=lt.get(T,v.length),m.init(),v.push(m),G.enabled===!0&&G.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&pr(it,N,-1/0,x.sortObjects)}pr(T,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(tt,at),kt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,kt&&Pt.addToRenderList(m,T),this.info.render.frame++,et===!0&&Q.beginShadows();const z=f.state.shadowsArray;pt.render(z,T,N),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const it=N.cameras;if(F.length>0)for(let ht=0,xt=it.length;ht<xt;ht++){const Mt=it[ht];po(k,F,T,Mt)}kt&&Pt.render(T);for(let ht=0,xt=it.length;ht<xt;ht++){const Mt=it[ht];fo(m,T,Mt,Mt.viewport)}}else F.length>0&&po(k,F,T,N),kt&&Pt.render(T),fo(m,T,N);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,N),Kt.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(f=M[M.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function pr(T,N,z,k){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){k&&wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ft);const ht=Y.update(T),xt=T.material;xt.visible&&m.push(T,ht,xt,z,wt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const ht=Y.update(T),xt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),wt.copy(T.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),wt.copy(ht.boundingSphere.center)),wt.applyMatrix4(T.matrixWorld).applyMatrix4(ft)),Array.isArray(xt)){const Mt=ht.groups;for(let Ut=0,Ft=Mt.length;Ut<Ft;Ut++){const St=Mt[Ut],Zt=xt[St.materialIndex];Zt&&Zt.visible&&m.push(T,ht,Zt,z,wt.z,St)}}else xt.visible&&m.push(T,ht,xt,z,wt.z,null)}}const it=T.children;for(let ht=0,xt=it.length;ht<xt;ht++)pr(it[ht],N,z,k)}function fo(T,N,z,k){const F=T.opaque,it=T.transmissive,ht=T.transparent;f.setupLightsView(z),et===!0&&Q.setGlobalState(x.clippingPlanes,z),k&&Ct.viewport(R.copy(k)),F.length>0&&us(F,N,z),it.length>0&&us(it,N,z),ht.length>0&&us(ht,N,z),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function po(T,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new He(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?ni:Ei,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const it=f.state.transmissionRenderTarget[k.id],ht=k.viewport||R;it.setSize(ht.z,ht.w);const xt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(W),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),kt&&Pt.render(z);const Mt=x.toneMapping;x.toneMapping=Oi;const Ut=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),et===!0&&Q.setGlobalState(x.clippingPlanes,k),us(T,z,k),E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let St=0,Zt=N.length;St<Zt;St++){const ae=N[St],oe=ae.object,Be=ae.geometry,$t=ae.material,bt=ae.group;if($t.side===Ne&&oe.layers.test(k.layers)){const di=$t.side;$t.side=Fe,$t.needsUpdate=!0,mo(oe,z,k,Be,$t,bt),$t.side=di,$t.needsUpdate=!0,Ft=!0}}Ft===!0&&(E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it))}x.setRenderTarget(xt),x.setClearColor(W,X),Ut!==void 0&&(k.viewport=Ut),x.toneMapping=Mt}function us(T,N,z){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,it=T.length;F<it;F++){const ht=T[F],xt=ht.object,Mt=ht.geometry,Ut=k===null?ht.material:k,Ft=ht.group;xt.layers.test(z.layers)&&mo(xt,N,z,Mt,Ut,Ft)}}function mo(T,N,z,k,F,it){T.onBeforeRender(x,N,z,k,F,it),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,N,z,k,T,it),F.transparent===!0&&F.side===Ne&&F.forceSinglePass===!1?(F.side=Fe,F.needsUpdate=!0,x.renderBufferDirect(z,N,k,F,T,it),F.side=wi,F.needsUpdate=!0,x.renderBufferDirect(z,N,k,F,T,it),F.side=Ne):x.renderBufferDirect(z,N,k,F,T,it),T.onAfterRender(x,N,z,k,F,it)}function ds(T,N,z){N.isScene!==!0&&(N=Yt);const k=Et.get(T),F=f.state.lights,it=f.state.shadowsArray,ht=F.state.version,xt=vt.getParameters(T,F.state,it,N,z),Mt=vt.getProgramCacheKey(xt);let Ut=k.programs;k.environment=T.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(T.isMeshStandardMaterial?B:y).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",Nt),Ut=new Map,k.programs=Ut);let Ft=Ut.get(Mt);if(Ft!==void 0){if(k.currentProgram===Ft&&k.lightsStateVersion===ht)return _o(T,xt),Ft}else xt.uniforms=vt.getUniforms(T),T.onBeforeCompile(xt,x),Ft=vt.acquireProgram(xt,Mt),Ut.set(Mt,Ft),k.uniforms=xt.uniforms;const St=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(St.clippingPlanes=Q.uniform),_o(T,xt),k.needsLights=Lc(T),k.lightsStateVersion=ht,k.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ft,k.uniformsList=null,Ft}function go(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Qs.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function _o(T,N){const z=Et.get(T);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Cc(T,N,z,k,F){N.isScene!==!0&&(N=Yt),E.resetTextureUnits();const it=N.fog,ht=k.isMeshStandardMaterial?N.environment:null,xt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Nn,Mt=(k.isMeshStandardMaterial?B:y).get(k.envMap||ht),Ut=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),St=!!z.morphAttributes.position,Zt=!!z.morphAttributes.normal,ae=!!z.morphAttributes.color;let oe=Oi;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Be=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$t=Be!==void 0?Be.length:0,bt=Et.get(k),di=f.state.lights;if(et===!0&&(nt===!0||T!==S)){const We=T===S&&k.id===b;Q.setState(k,T,We)}let jt=!1;k.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==di.state.version||bt.outputColorSpace!==xt||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==Mt||k.fog===!0&&bt.fog!==it||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==Ut||bt.vertexTangents!==Ft||bt.morphTargets!==St||bt.morphNormals!==Zt||bt.morphColors!==ae||bt.toneMapping!==oe||bt.morphTargetsCount!==$t)&&(jt=!0):(jt=!0,bt.__version=k.version);let Ze=bt.currentProgram;jt===!0&&(Ze=ds(k,N,F));let sn=!1,ke=!1,Bn=!1;const le=Ze.getUniforms(),ri=bt.uniforms;if(Ct.useProgram(Ze.program)&&(sn=!0,ke=!0,Bn=!0),k.id!==b&&(b=k.id,ke=!0),sn||S!==T){Ct.buffers.depth.getReversed()?(j.copy(T.projectionMatrix),Ah(j),Rh(j),le.setValue(U,"projectionMatrix",j)):le.setValue(U,"projectionMatrix",T.projectionMatrix),le.setValue(U,"viewMatrix",T.matrixWorldInverse);const Ri=le.map.cameraPosition;Ri!==void 0&&Ri.setValue(U,_t.setFromMatrixPosition(T.matrixWorld)),Ht.logarithmicDepthBuffer&&le.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&le.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,ke=!0,Bn=!0)}if(F.isSkinnedMesh){le.setOptional(U,F,"bindMatrix"),le.setOptional(U,F,"bindMatrixInverse");const We=F.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),le.setValue(U,"boneTexture",We.boneTexture,E))}F.isBatchedMesh&&(le.setOptional(U,F,"batchingTexture"),le.setValue(U,"batchingTexture",F._matricesTexture,E),le.setOptional(U,F,"batchingIdTexture"),le.setValue(U,"batchingIdTexture",F._indirectTexture,E),le.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(U,"batchingColorTexture",F._colorsTexture,E));const zn=z.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Dt.update(F,z,Ze),(ke||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,le.setValue(U,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ri.envMap.value=Mt,ri.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(ri.envMapIntensity.value=N.environmentIntensity),ke&&(le.setValue(U,"toneMappingExposure",x.toneMappingExposure),bt.needsLights&&Pc(ri,Bn),it&&k.fog===!0&&rt.refreshFogUniforms(ri,it),rt.refreshMaterialUniforms(ri,k,V,Z,f.state.transmissionRenderTarget[T.id]),Qs.upload(U,go(bt),ri,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qs.upload(U,go(bt),ri,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&le.setValue(U,"center",F.center),le.setValue(U,"modelViewMatrix",F.modelViewMatrix),le.setValue(U,"normalMatrix",F.normalMatrix),le.setValue(U,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const We=k.uniformsGroups;for(let Ri=0,Ci=We.length;Ri<Ci;Ri++){const vo=We[Ri];D.update(vo,Ze),D.bind(vo,Ze)}}return Ze}function Pc(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Lc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,N,z){Et.get(T.texture).__webglTexture=N,Et.get(T.depthTexture).__webglTexture=z;const k=Et.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const z=Et.get(T);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,z=0){C=T,A=N,w=z;let k=!0,F=null,it=!1,ht=!1;if(T){const Mt=Et.get(T);if(Mt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(Mt.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Mt.__hasExternalTextures)E.rebindTextures(T,Et.get(T.texture).__webglTexture,Et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const St=T.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&Et.has(St)&&(T.width!==St.image.width||T.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ht=!0);const Ft=Et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?F=Ft[N][z]:F=Ft[N],it=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?F=Et.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[z]:F=Ft,R.copy(T.viewport),I.copy(T.scissor),O=T.scissorTest}else R.copy(gt).multiplyScalar(V).floor(),I.copy(Lt).multiplyScalar(V).floor(),O=Xt;if(Ct.bindFramebuffer(U.FRAMEBUFFER,F)&&k&&Ct.drawBuffers(T,F),Ct.viewport(R),Ct.scissor(I),Ct.setScissorTest(O),it){const Mt=Et.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,z)}else if(ht){const Mt=Et.get(T.texture),Ut=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,z||0,Ut)}b=-1},this.readRenderTargetPixels=function(T,N,z,k,F,it,ht){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){Ct.bindFramebuffer(U.FRAMEBUFFER,xt);try{const Mt=T.texture,Ut=Mt.format,Ft=Mt.type;if(!Ht.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-k&&z>=0&&z<=T.height-F&&U.readPixels(N,z,k,F,It.convert(Ut),It.convert(Ft),it)}finally{const Mt=C!==null?Et.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(T,N,z,k,F,it,ht){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){const Mt=T.texture,Ut=Mt.format,Ft=Mt.type;if(!Ht.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-k&&z>=0&&z<=T.height-F){Ct.bindFramebuffer(U.FRAMEBUFFER,xt);const St=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.bufferData(U.PIXEL_PACK_BUFFER,it.byteLength,U.STREAM_READ),U.readPixels(N,z,k,F,It.convert(Ut),It.convert(Ft),0);const Zt=C!==null?Et.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,Zt);const ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Eh(U,ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,it),U.deleteBuffer(St),U.deleteSync(ae),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,z=0){T.isTexture!==!0&&(Jn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(T.image.width*k),it=Math.floor(T.image.height*k),ht=N!==null?N.x:0,xt=N!==null?N.y:0;E.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,ht,xt,F,it),Ct.unbindTexture()},this.copyTextureToTexture=function(T,N,z=null,k=null,F=0){T.isTexture!==!0&&(Jn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let it,ht,xt,Mt,Ut,Ft,St,Zt,ae;const oe=T.isCompressedTexture?T.mipmaps[F]:T.image;z!==null?(it=z.max.x-z.min.x,ht=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,Mt=z.min.x,Ut=z.min.y,Ft=z.isBox3?z.min.z:0):(it=oe.width,ht=oe.height,xt=oe.depth||1,Mt=0,Ut=0,Ft=0),k!==null?(St=k.x,Zt=k.y,ae=k.z):(St=0,Zt=0,ae=0);const Be=It.convert(N.format),$t=It.convert(N.type);let bt;N.isData3DTexture?(E.setTexture3D(N,0),bt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),bt=U.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),bt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const di=U.getParameter(U.UNPACK_ROW_LENGTH),jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ze=U.getParameter(U.UNPACK_SKIP_PIXELS),sn=U.getParameter(U.UNPACK_SKIP_ROWS),ke=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,oe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);const Bn=T.isDataArrayTexture||T.isData3DTexture,le=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const ri=Et.get(T),zn=Et.get(N),We=Et.get(ri.__renderTarget),Ri=Et.get(zn.__renderTarget);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,We.__webglFramebuffer),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ci=0;Ci<xt;Ci++)Bn&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(T).__webglTexture,F,Ft+Ci),T.isDepthTexture?(le&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(N).__webglTexture,F,ae+Ci),U.blitFramebuffer(Mt,Ut,it,ht,St,Zt,it,ht,U.DEPTH_BUFFER_BIT,U.NEAREST)):le?U.copyTexSubImage3D(bt,F,St,Zt,ae+Ci,Mt,Ut,it,ht):U.copyTexSubImage2D(bt,F,St,Zt,ae+Ci,Mt,Ut,it,ht);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else le?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(bt,F,St,Zt,ae,it,ht,xt,Be,$t,oe.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,F,St,Zt,ae,it,ht,xt,Be,oe.data):U.texSubImage3D(bt,F,St,Zt,ae,it,ht,xt,Be,$t,oe):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,St,Zt,it,ht,Be,$t,oe.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,St,Zt,oe.width,oe.height,Be,oe.data):U.texSubImage2D(U.TEXTURE_2D,F,St,Zt,it,ht,Be,$t,oe);U.pixelStorei(U.UNPACK_ROW_LENGTH,di),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,sn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke),F===0&&N.generateMipmaps&&U.generateMipmap(bt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,N,z=null,k=null,F=0){return T.isTexture!==!0&&(Jn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,T=arguments[2],N=arguments[3],F=arguments[4]||0),Jn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,z,k,F)},this.initRenderTarget=function(T){Et.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,Ct.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class so{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new so(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bm extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ba,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new P;class sr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),n=ee(n,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ro extends Ai{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xn;const Wn=new P,Mn=new P,Sn=new P,yn=new yt,Xn=new yt,bc=new se,Us=new P,qn=new P,Ns=new P,gl=new yt,Hr=new yt,_l=new yt;class Tc extends me{constructor(t=new ro){if(super(),this.isSprite=!0,this.type="Sprite",xn===void 0){xn=new re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zm(e,5);xn.setIndex([0,1,2,0,2,3]),xn.setAttribute("position",new sr(i,3,0,!1)),xn.setAttribute("uv",new sr(i,2,3,!1))}this.geometry=xn,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mn.setFromMatrixScale(this.matrixWorld),bc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Sn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mn.multiplyScalar(-Sn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Fs(Us.set(-.5,-.5,0),Sn,a,Mn,n,r),Fs(qn.set(.5,-.5,0),Sn,a,Mn,n,r),Fs(Ns.set(.5,.5,0),Sn,a,Mn,n,r),gl.set(0,0),Hr.set(1,0),_l.set(1,1);let o=t.ray.intersectTriangle(Us,qn,Ns,!1,Wn);if(o===null&&(Fs(qn.set(-.5,.5,0),Sn,a,Mn,n,r),Hr.set(0,1),o=t.ray.intersectTriangle(Us,Ns,qn,!1,Wn),o===null))return;const l=t.ray.origin.distanceTo(Wn);l<t.near||l>t.far||e.push({distance:l,point:Wn.clone(),uv:Ye.getInterpolation(Wn,Us,qn,Ns,gl,Hr,_l,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fs(s,t,e,i,n,r){yn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Xn.x=r*yn.x-n*yn.y,Xn.y=n*yn.x+r*yn.y):Xn.copy(yn),s.copy(t),s.x+=Xn.x,s.y+=Xn.y,s.applyMatrix4(bc)}class km extends Ce{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Oe,u=Oe,h,d){super(null,a,o,l,c,u,n,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka extends Ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rr=new P,ar=new P,vl=new se,Yn=new Qa,Os=new hs,Wr=new P,xl=new P;class Vm extends me{constructor(t=new re,e=new ka){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)rr.fromBufferAttribute(e,n-1),ar.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=rr.distanceTo(ar);t.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(n),Os.radius+=r,t.ray.intersectsSphere(Os)===!1)return;vl.copy(n).invert(),Yn.copy(t.ray).applyMatrix4(vl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=u.getX(_),v=u.getX(_+1),M=Bs(this,t,Yn,l,f,v);M&&e.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Bs(this,t,Yn,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=Bs(this,t,Yn,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Bs(this,t,Yn,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bs(s,t,e,i,n,r){const a=s.geometry.attributes.position;if(rr.fromBufferAttribute(a,n),ar.fromBufferAttribute(a,r),e.distanceSqToSegment(rr,ar,Wr,xl)>i)return;Wr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Wr);if(!(l<t.near||l>t.far))return{distance:l,point:xl.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const Ml=new P,Sl=new P;class yl extends Vm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Ml.fromBufferAttribute(e,n),Sl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ml.distanceTo(Sl);t.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gm extends Ai{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bl=new se,Va=new Qa,zs=new hs,ks=new P;class Hm extends me{constructor(t=new re,e=new Gm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(n),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;bl.copy(n).invert(),Va.copy(t.ray).applyMatrix4(bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);ks.fromBufferAttribute(h,m),Tl(ks,m,l,n,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)ks.fromBufferAttribute(h,g),Tl(ks,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tl(s,t,e,i,n,r,a){const o=Va.distanceSqToPoint(s);if(o<e){const l=new P;Va.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class dr extends Ce{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const u=i[n],d=i[n+1]-u,p=(a-u)/d;return(n+p)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new yt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,n=[],r=[],a=[],o=new P,l=new se;for(let p=0;p<=t;p++){const g=p/t;n[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),d=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Me(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],r[p])}if(e===!0){let p=Math.acos(Me(r[0].dot(r[t]),-1,1));p/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ao(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,n(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const Vs=new P,Xr=new ao,qr=new ao,Yr=new ao;class Xm extends Wm{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=n[(o-1)%r]:(Vs.subVectors(n[0],n[1]).add(n[0]),c=Vs);const h=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?u=n[(o+2)%r]:(Vs.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Xr.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),qr.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Yr.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Xr.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),qr.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Yr.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Xr.calc(l),qr.calc(l),Yr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class ii extends re{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new zt(h,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(p,2));function v(){const x=new P,L=new P;let A=0;const w=(e-t)/i;for(let C=0;C<=r;C++){const b=[],S=C/r,R=S*(e-t)+t;for(let I=0;I<=n;I++){const O=I/n,W=O*l+o,X=Math.sin(W),H=Math.cos(W);L.x=R*X,L.y=-S*i+m,L.z=R*H,h.push(L.x,L.y,L.z),x.set(X,w,H).normalize(),d.push(x.x,x.y,x.z),p.push(O,1-S),b.push(g++)}_.push(b)}for(let C=0;C<n;C++)for(let b=0;b<r;b++){const S=_[b][C],R=_[b+1][C],I=_[b+1][C+1],O=_[b][C+1];(t>0||b!==0)&&(u.push(S,R,O),A+=3),(e>0||b!==r-1)&&(u.push(R,I,O),A+=3)}c.addGroup(f,A,0),f+=A}function M(x){const L=g,A=new yt,w=new P;let C=0;const b=x===!0?t:e,S=x===!0?1:-1;for(let I=1;I<=n;I++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const R=g;for(let I=0;I<=n;I++){const W=I/n*l+o,X=Math.cos(W),H=Math.sin(W);w.x=b*H,w.y=m*S,w.z=b*X,h.push(w.x,w.y,w.z),d.push(0,S,0),A.x=X*.5+.5,A.y=H*.5*S+.5,p.push(A.x,A.y),g++}for(let I=0;I<n;I++){const O=L+I,W=R+I;x===!0?u.push(W,W+1,O):u.push(W+1,W,O),C+=3}c.addGroup(f,C,x===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class In extends ii{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new In(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oo extends re{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),u(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const M=new P,x=new P,L=new P;for(let A=0;A<e.length;A+=3)p(e[A+0],M),p(e[A+1],x),p(e[A+2],L),l(M,x,L,v)}function l(v,M,x,L){const A=L+1,w=[];for(let C=0;C<=A;C++){w[C]=[];const b=v.clone().lerp(x,C/A),S=M.clone().lerp(x,C/A),R=A-C;for(let I=0;I<=R;I++)I===0&&C===A?w[C][I]=b:w[C][I]=b.clone().lerp(S,I/R)}for(let C=0;C<A;C++)for(let b=0;b<2*(A-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(w[C][S+1]),d(w[C+1][S]),d(w[C][S])):(d(w[C][S+1]),d(w[C+1][S+1]),d(w[C+1][S]))}}function c(v){const M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const v=new P;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=m(v)/2/Math.PI+.5,L=f(v)/Math.PI+.5;a.push(x,1-L)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){const M=a[v+0],x=a[v+2],L=a[v+4],A=Math.max(M,x,L),w=Math.min(M,x,L);A>.9&&w<.1&&(M<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),L<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const v=new P,M=new P,x=new P,L=new P,A=new yt,w=new yt,C=new yt;for(let b=0,S=0;b<r.length;b+=9,S+=6){v.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),A.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),L.copy(v).add(M).add(x).divideScalar(3);const R=m(L);_(A,S+0,v,R),_(w,S+2,M,R),_(C,S+4,x,R)}}function _(v,M,x,L){L<0&&v.x===1&&(a[M]=v.x-1),x.x===0&&x.z===0&&(a[M]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.vertices,t.indices,t.radius,t.details)}}class or extends oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new or(t.radius,t.detail)}}class lo extends re{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/n,p=new P,g=new yt;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<n;_++){const m=_*(i+1);for(let f=0;f<i;f++){const v=f+m,M=v,x=v+i+1,L=v+i+2,A=v+1;o.push(M,x,A),o.push(x,L,A)}}this.setIndex(o),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class as extends re{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const v=[],M=f/i;let x=0;f===0&&a===0?x=.5/e:f===i&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const A=L/e;h.x=-t*Math.cos(n+A*r)*Math.sin(a+M*o),h.y=t*Math.cos(a+M*o),h.z=t*Math.sin(n+A*r)*Math.sin(a+M*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-M),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<e;v++){const M=u[f][v+1],x=u[f][v],L=u[f+1][v],A=u[f+1][v+1];(f!==0||a>0)&&p.push(M,x,A),(f!==i-1||l<Math.PI)&&p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lr extends re{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],u=new P,h=new P,d=new P;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){const _=g/n*r,m=p/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){const _=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,f=(n+1)*(p-1)+g,v=(n+1)*p+g;a.push(_,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qm extends de{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ne extends Ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ym extends ne{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Km extends Ai{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class co extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Zm extends co{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Kr=new se,wl=new P,El=new P;class $m{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),El.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(El),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jm extends $m{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Al extends co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new jm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jm extends co{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Rl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Rl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);const ye=Math.PI*2,Rt=(s,t,e)=>s<t?t:s>e?e:s,xe=(s,t,e)=>s+(t-s)*e,t0=s=>(s=Rt(s,0,1),s*s*(3-2*s)),pe=(s,t,e,i)=>xe(s,t,1-Math.exp(-e*i)),An=s=>(s=(s+Math.PI)%ye,s<0&&(s+=ye),s-Math.PI),tr=(s,t)=>An(s-t),e0=s=>s<0?-1:1,Qe=(s,t=2)=>{if(!isFinite(s)||s<0)return"--:--.--";const e=Math.floor(s/60),i=s-e*60;return`${e}:${i.toFixed(t).padStart(t?3+t:2,"0")}`},Cl=s=>{if(!isFinite(s))return"--";const t=s>=0?"+":"-",e=Math.abs(s);return`${t}${e.toFixed(2)}`};function ji(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function wc(s=1){const t=new Uint8Array(512),e=ji(s),i=new Uint8Array(256);for(let a=0;a<256;a++)i[a]=a;for(let a=255;a>0;a--){const o=Math.floor(e()*(a+1)),l=i[a];i[a]=i[o],i[o]=l}for(let a=0;a<512;a++)t[a]=i[a&255];const n=a=>a*a*a*(a*(a*6-15)+10),r=a=>t[a]/255*2-1;return function(a,o){const l=Math.floor(a)&255,c=Math.floor(o)&255,u=a-Math.floor(a),h=o-Math.floor(o),d=n(u),p=n(h),g=r(t[l]+c),_=r(t[l]+c+1),m=r(t[l+1]+c),f=r(t[l+1]+c+1);return xe(xe(g,m,d),xe(_,f,d),p)}}const bn=[[0,400,6,30,0],[0,320,6,30,0],[8,245,8,30,.02],[35,180,11,28,.05],[85,130,14,26,.09],[150,100,15,24,.07],[220,88,16,24,.05],[290,78,17,24,.03],[355,52,15,26,-.04],[405,8,11,28,-.06],[440,-50,5,30,0],[460,-100,3,30,0],[485,-160,0,30,0],[500,-220,0,28,.04],[495,-280,2,26,.09],[460,-325,5,26,.07],[400,-350,8,26,.04],[330,-345,10,26,0],[265,-315,10,28,0],[230,-260,7,32,0],[240,-195,1,40,0],[250,-135,-1,46,0],[235,-75,0,42,0],[195,-35,2,34,0],[135,-20,4,32,0],[65,-50,5,30,0],[-15,-80,6,30,0],[-100,-100,8,28,.04],[-180,-85,10,26,.06],[-250,-40,13,24,.05],[-295,25,14,24,.03],[-305,95,10,26,-.02],[-280,165,8,28,-.04],[-235,225,7,30,-.02],[-170,280,6,30,0],[-95,325,6,30,0],[-35,375,6,30,0]],i0=2.2,Se={road:new dt("#20282b"),roadAlt:new dt("#2d3739"),shoulder:new dt("#9b6748"),line:new dt("#f5eee0"),dash:new dt("#fff4cf"),rockLow:new dt("#8e3f2c"),rockMid:new dt("#b55a38"),rockHigh:new dt("#d48252"),rockTop:new dt("#e6a878"),rockDark:new dt("#6b2f24")};function ai(s,t,e,i){return s.copy(t).lerp(e,i)}function er(s,t,e){const i=document.createElement("canvas");i.width=s,i.height=t;const n=i.getContext("2d");e(n,s,t);const r=new dr(i);return r.colorSpace=De,r.anisotropy=4,r}class n0{constructor(t){this.scene=t,this.group=new be,this.group.name="track",t.add(this.group),this.rng=ji(1337),this.noise=wc(9241),this.ramps=[],this.gates=[],this.wallGaps=[],this.tunnelRanges=[],this.arches=[],this.decorColliders=[],this._buildSpline(),this._buildFeatures(),this._buildRoad(),this._buildBranchRoute(),this._buildRamps(),this._buildWalls(),this._buildGates(),this._buildTunnels(),this._buildArches(),this._buildRoadside(),this._buildMinimap()}_buildSpline(){const t=bn.map(n=>new P(n[0],n[2],n[1]));this.curve=new Xm(t,!0,"catmullrom",.5);const e=this.curve.getLength();this.count=Math.max(256,Math.round(e/i0)),this.step=this.curve.getLength()/this.count,this.length=this.step*this.count,this.samples=[];const i=bn.map(n=>new P(n[0],n[2],n[1]));for(let n=0;n<this.count;n++){const r=n/this.count,a=this.curve.getPointAt(r),o=this.curve.getTangentAt(r).normalize(),l=new P(o.z,0,-o.x).normalize();let c=1/0,u=1/0,h=0,d=0;for(let v=0;v<i.length;v++){const M=a.distanceToSquared(i[v]);M<c?(u=c,d=h,c=M,h=v):M<u&&(u=M,d=v)}const p=1/(Math.sqrt(c)+.001),g=1/(Math.sqrt(u)+.001),_=p/(p+g),m=xe(bn[h][3],bn[d][3],_),f=xe(bn[h][4],bn[d][4],_);this.samples.push({i:n,s:n*this.step,pos:a,tan:o,right:l,width:m,bank:f,gap:!1,tunnel:!1,stripNoise:this.noise(n*.21,3.7)})}this._sampleAt=n=>{n=(n%this.length+this.length)%this.length;const r=n/this.step,a=Math.floor(r)%this.count,o=(a+1)%this.count,l=r-Math.floor(r);return{i0:a,i1:o,t:l}}}_buildBranchRoute(){const t=this.branchRoute,e=Math.max(48,Math.round(t.length/3.4));for(let h=0;h<=e;h++){const d=h/e,p=t.start+t.length*d,g=this.getSample(p).a,_=Math.sin(Math.PI*d)*3.1,m=Math.sin(Math.PI*d)*8.2,f=this.samplePos(p,m);f.y+=_;const v=t.start+t.length*Math.max(0,d-1/e),M=t.start+t.length*Math.min(1,d+1/e),x=this.samplePos(v,Math.sin(Math.PI*Math.max(0,d-1/e))*8.2),L=this.samplePos(M,Math.sin(Math.PI*Math.min(1,d+1/e))*8.2);x.y+=Math.sin(Math.PI*Math.max(0,d-1/e))*3.1,L.y+=Math.sin(Math.PI*Math.min(1,d+1/e))*3.1;const A=L.sub(x).normalize(),w=new P(A.z,0,-A.x).normalize();t.samples.push({routeS:p,pos:f,tan:A,right:w,width:t.width,bank:g.bank})}const i=[],n=[],r=[],a=new dt;for(let h=0;h<t.samples.length;h++){const d=t.samples[h];for(const p of[-1,1]){const g=d.pos.clone().addScaledVector(d.right,p*t.width*.5);i.push(g.x,g.y+.03,g.z),a.set(p<0?"#26363a":"#314347"),r.push(a.r,a.g,a.b)}if(h<t.samples.length-1){const p=h*2;n.push(p,p+2,p+1,p+1,p+2,p+3)}}const o=new re;o.setAttribute("position",new zt(i,3)),o.setAttribute("color",new zt(r,3)),o.setIndex(n),o.computeVertexNormals();const l=new At(o,new ne({vertexColors:!0,roughness:.82,metalness:.12,flatShading:!0}));l.name="canyon-cut-branch",l.receiveShadow=!0,this.group.add(l);const c=[];for(let h=0;h<t.samples.length-1;h++)for(const d of[-1,1]){const p=t.samples[h],g=t.samples[h+1],_=p.pos.clone().addScaledVector(p.right,d*(t.width*.5-.15)),m=g.pos.clone().addScaledVector(g.right,d*(t.width*.5-.15));c.push(_.x,_.y+.08,_.z,m.x,m.y+.08,m.z)}const u=new re;u.setAttribute("position",new zt(c,3)),this.group.add(new yl(u,new ka({color:"#ffd166",transparent:!0,opacity:.9})))}findS(t,e){let i=0,n=1/0;for(const r of this.samples){const a=(r.pos.x-t)**2+(r.pos.z-e)**2;a<n&&(n=a,i=r.s)}return i}smoothRange(t,e){return[t-e,t+e]}markGapRange(t,e){const i=this.length;let n=t;for(;;){const r=Math.round(n/this.step)%this.count;if(this.samples[(r+this.count)%this.count].gap=!0,n+=this.step,(t<e?n>e:n>e+i)||n>t+i)break}}getSample(t){const{i0:e,i1:i,t:n}=this._sampleAt(t);return{a:this.samples[e],b:this.samples[i],t:n}}samplePos(t,e=0,i=new P){const{a:n,b:r,t:a}=this.getSample(t),o=xe(n.pos.x,r.pos.x,a),l=xe(n.pos.z,r.pos.z,a),c=xe(n.pos.y,r.pos.y,a),u=xe(n.right.x,r.right.x,a),h=xe(n.right.z,r.right.z,a);xe(n.width,r.width,a);const d=xe(n.bank,r.bank,a);return i.set(o+u*e,c+Math.tan(d)*e,l+h*e),i}surfaceAt(t,e,i="main"){var u;if(i==="branch"&&((u=this.branchRoute)!=null&&u.samples.length)){const h=this.branchRoute;let d=t-h.start;for(;d<0;)d+=this.length;for(;d>h.length;)d-=this.length;const p=Rt(d/h.length,0,1)*(h.samples.length-1),g=Math.min(h.samples.length-2,Math.floor(p)),_=p-g,m=h.samples[g],f=h.samples[g+1];return Math.abs(e)>h.width/2+1.5?null:xe(m.pos.y,f.pos.y,_)+Math.tan(xe(m.bank,f.bank,_))*e}const{a:n,b:r,t:a}=this.getSample(t);if(n.gap||r.gap)return null;const o=xe(n.width,r.width,a);if(Math.abs(e)>o/2+2.4)return null;const l=xe(n.bank,r.bank,a);let c=xe(n.pos.y,r.pos.y,a)+Math.tan(l)*e;for(const h of this.ramps){const d=(t-h.s+this.length*1.5)%this.length-this.length*.5;if(Math.abs(d)>h.length/2)continue;const p=e-h.lat;if(Math.abs(p)>h.width/2)continue;const g=Rt((d+h.length/2)/h.length,0,1),_=t0(Rt((h.width/2-Math.abs(p))/1.2,0,1));c+=h.height*Math.pow(g,1.15)*_}return c}isGap(t){const{a:e,b:i,t:n}=this.getSample(t);return e.gap||i.gap}nearest(t,e,i=null){var _;const n=this.count;let r=0,a=n-1;if(i!=null){const m=Math.round(i/this.step),f=34;r=m-f,a=m+f}let o=null,l=1/0;for(let m=r;m<=a;m++){const f=this.samples[(m%n+n)%n],v=t-f.pos.x,M=e-f.pos.z,x=v*v+M*M;x<l&&(l=x,o=f)}o||(o=this.samples[0]);const c=t-o.pos.x,u=e-o.pos.z;let h=c*o.tan.x+u*o.tan.z;h=Rt(h,-this.step*1.2,this.step*1.2);const d=c*o.right.x+u*o.right.z;let p=o.s+h;p=(p%this.length+this.length)%this.length;let g={s:p,lat:d,dist:Math.sqrt(l),sample:o,route:"main"};if((_=this.branchRoute)!=null&&_.samples.length){let m=null,f=1/0;for(const v of this.branchRoute.samples){const M=t-v.pos.x,x=e-v.pos.z,L=M*M+x*x;L<f&&(f=L,m=v)}if(m&&f<l&&f<(this.branchRoute.width*.62)**2){const v=t-m.pos.x,M=e-m.pos.z;let x=Rt(v*m.tan.x+M*m.tan.z,-4,4);const L=v*m.right.x+M*m.right.z;g={s:Rt(m.routeS+x,this.branchRoute.start,this.branchRoute.end),lat:L,dist:Math.sqrt(f),sample:m,route:"branch"}}}return g}nearestGlobal(t,e){return this.nearest(t,e,0)}clampToRoad(t,e){const{a:i}=this.getSample(t),n=i.width/2-1.4;return Rt(e,-n,n)}startPose(){const t=((this.gateS[0]-20)%this.length+this.length)%this.length,e=this.samplePos(t,0),{a:i}=this.getSample(t);return{s:t,pos:e,yaw:Math.atan2(i.tan.x,i.tan.z)}}_buildFeatures(){const t=this.findS(456,-88),e=this.findS(477,-136);this.gap={start:t,end:e},this.markGapRange(t,e);const i=this.findS(494,-262),n=this.findS(462,-318);this.tunnelRanges.push({start:i,end:n,length:8});for(let g=i;g<n;g+=this.step)this.samples[Math.round(g/this.step)%this.count].tunnel=!0;const r=7;this.ramps.push({s:this.findS(460,-100)-13,lat:0,width:15,length:22,height:3.4,gapKicker:!0}),this.ramps.push({s:this.findS(392,22),lat:2.5,width:11,length:16,height:2.1}),this.ramps.push({s:this.findS(352,-348),lat:r,width:11,length:17,height:3.2,shortCut:!0});let a=this.findS(382,-350)-16,o=this.findS(286,-326)+22;o<=a&&(o+=this.length),this.branchRoute={start:a,end:o,length:o-a,width:9.5,samples:[]},this.ramps.push({s:this.findS(248,-112),lat:0,width:13,length:18,height:2.4,island:!0});const l=this.gap.start-30,c=this.gap.end+34;this.wallGaps.push({a:l,b:c,sides:"both"});const u=this.findS(370,-352)-18,h=this.findS(300,-332)+26;this.wallGaps.push({a:u,b:h,sides:"right"}),this.wallGaps.push({a:this.findS(246,-170),b:this.findS(232,-90),sides:"both"}),this.gateS=[];const d=7;for(let g=0;g<d;g++){let _=this.length*g/d,m=0;for(;this.isGap(_)&&m<40;)_=(_+6)%this.length,m++;this.gateS.push(_)}const p=4;this.gateS=this.gateS.slice(p).concat(this.gateS.slice(0,p))}_wallBlocked(t,e){const i=(e%this.length+this.length)%this.length;for(const n of this.wallGaps)if(n.sides==="both"||n.sides===t){const r=this.length,a=(n.a%r+r)%r,o=(n.b%r+r)%r;if(a<o){if(i>=a&&i<=o)return!0}else if(i>=a||i<=o)return!0}return!1}_buildRoad(){const t=this.count,e=[-1.12,-1.02,-.9,-.45,0,.45,.9,1.02,1.12],i=[],n=[],r=[],a=new dt,o=[];for(let _=0;_<t;_++){const m=this.samples[_],f=[];for(let v=0;v<e.length;v++){const M=e[v]*m.width/2,x=m.pos.x+m.right.x*M,L=m.pos.z+m.right.z*M,A=m.pos.y+Math.tan(m.bank)*M+.02;f.push([x,A,L]);const w=Math.abs(e[v]),C=m.stripNoise*.035;w>1?ai(a,Se.shoulder,Se.rockLow,.15+C):w>.88?ai(a,Se.line,Se.line,0):w<.02?ai(a,Se.road,Se.roadAlt,.55+C):ai(a,Se.road,Se.roadAlt,.35+C),s0(n,a.r,a.g,a.b)}o.push(f)}for(let _=0;_<t;_++){const m=(_+1)%t,f=this.samples[_],v=this.samples[m];if(!(f.gap||v.gap))for(let M=0;M<e.length-1;M++){const x=_*e.length+M,L=m*e.length+M;r.push(x,L,x+1),r.push(x+1,L,L+1)}}for(let _=0;_<t;_++)for(let m=0;m<e.length;m++)i.push(...o[_][m]);const l=new re;l.setAttribute("position",new zt(i,3)),l.setAttribute("color",new zt(n,3)),l.setIndex(r),l.computeVertexNormals();const c=new ne({vertexColors:!0,roughness:.96,metalness:0,side:Ne,flatShading:!0}),u=new At(l,c);u.receiveShadow=!0,u.name="road",this.group.add(u),this._buildPaint(),this._buildEdgeLights();const h=this.samplePos((this.gap.start+this.gap.end)/2,0),d=new si(120,120,1,1);d.rotateX(-Math.PI/2);const p=new ne({color:"#3a1f1a",roughness:1}),g=new At(d,p);g.position.set(h.x,h.y-26,h.z),this.group.add(g)}_buildPaint(){const t=[],e=this.count;for(let _=0;_<e;_+=4){const m=this.samples[_];if(m.gap)continue;const f=m.s,v=m.width;for(const M of[-1,1]){const x=M*(v/2)*.955,L=this.samplePos(f-1.4,x-.24),A=this.samplePos(f-1.4,x+.24),w=this.samplePos(f+1.4,x+.24),C=this.samplePos(f+1.4,x-.24);t.push([L,A,w,C])}}const i=new re,n=[],r=[];let a=0;for(const _ of t){for(const m of _)n.push(m.x,m.y+.035,m.z);r.push(a,a+1,a+2,a,a+2,a+3),a+=4}i.setAttribute("position",new zt(n,3)),i.setIndex(r),i.computeVertexNormals();const o=new ne({color:"#f4dfae",emissive:"#c79a55",emissiveIntensity:.24,roughness:.7,flatShading:!0}),l=new At(i,o);l.receiveShadow=!0,this.group.add(l);const c=[];for(let _=0;_<e;_+=5){const m=this.samples[_];if(m.gap)continue;const f=m.s;for(const v of[-.18,.18]){const M=m.width*v,x=this.samplePos(f-2.2,M-.11),L=this.samplePos(f-2.2,M+.11),A=this.samplePos(f+2.2,M+.11),w=this.samplePos(f+2.2,M-.11);c.push([x,L,A,w])}}const u=new re,h=[],d=[];let p=0;for(const _ of c){for(const m of _)h.push(m.x,m.y+.03,m.z);d.push(p,p+1,p+2,p,p+2,p+3),p+=4}u.setAttribute("position",new zt(h,3)),u.setIndex(d),u.computeVertexNormals();const g=new ne({color:"#e8cf99",roughness:.8,flatShading:!0});this.group.add(new At(u,g)),this._buildArrows()}_buildArrows(){const t=[];for(let n=34;n<this.length;n+=86){let r=!1;for(let h=-6;h<=10;h+=2)this.isGap(n+h)&&(r=!0);if(r)continue;const a=this.samplePos(n+5.5,0),o=this.samplePos(n-1.5,-4.4),l=this.samplePos(n-1.5,4.4),c=this.samplePos(n+1.2,0),u=.055;t.push(a.x,a.y+u,a.z,c.x,c.y+u,c.z,o.x,o.y+u,o.z,a.x,a.y+u,a.z,l.x,l.y+u,l.z,c.x,c.y+u,c.z)}const e=new re;e.setAttribute("position",new zt(t,3)),e.computeVertexNormals();const i=new At(e,new Ue({color:"#ffd395",transparent:!0,opacity:.38,depthWrite:!1,side:Ne}));i.renderOrder=1,this.group.add(i)}_buildEdgeLights(){const t=[];for(const r of[-1,1])for(let a=0;a<=this.count;a++){const o=this.samples[a%this.count];if(a<this.count&&!o.gap){const l=r*(o.width/2)*.985,c=this.samplePos(o.s,l);t.push(c.x,c.y+.07,c.z)}}const e=new re,i=[];for(let r=0;r<this.count;r++){const a=this.samples[r],o=this.samples[(r+1)%this.count];if(!(a.gap||o.gap))for(const l of[-1,1]){const c=l*(a.width/2)*.985,u=l*(o.width/2)*.985,h=this.samplePos(a.s,c),d=this.samplePos(o.s,u);i.push(h.x,h.y+.08,h.z,d.x,d.y+.08,d.z)}}e.setAttribute("position",new zt(i,3));const n=new ka({color:"#baf4e6",transparent:!0,opacity:.82});this.group.add(new yl(e,n))}_buildRamps(){this.rampMeshes=[];for(const t of this.ramps){const e=new re,i=10,n=[],r=[],a=new dt;for(let g=0;g<=i;g++){const _=g/i,m=t.s-t.length/2+t.length*_,f=t.height*Math.pow(_,1.15);for(const v of[-1,1]){const M=t.lat+v*t.width/2,x=this.samplePos(m,M);n.push(x.x,x.y+.04,x.z),n.push(x.x,x.y+f+.06,x.z),ai(a,Se.roadAlt,Se.rockMid,.15+_*.4),r.push(a.r,a.g,a.b),ai(a,Se.line,Se.rockHigh,_),r.push(a.r,a.g,a.b)}}const o=[];for(let g=0;g<i;g++){const _=g*4,m=(g+1)*4;o.push(_+1,m+1,_+3,_+3,m+1,m+3),o.push(_,_+1,m,m,_+1,m+1),o.push(_+2,m+2,_+3,_+3,m+2,m+3)}const l=i*4;o.push(l,l+1,l+2,l+2,l+1,l+3),e.setAttribute("position",new zt(n,3)),e.setAttribute("color",new zt(r,3)),e.setIndex(o),e.computeVertexNormals();const c=new ne({vertexColors:!0,roughness:.9,side:Ne,flatShading:!0}),u=new At(e,c);u.castShadow=!0,u.receiveShadow=!0,this.group.add(u),this.rampMeshes.push(u);const h=this.samplePos(t.s-t.length/2-2,t.lat),d=t.shortCut?"CANYON CUT  ▲":t.gapKicker?"BIG AIR  ▲":"KICKER  ▲",p=r0(d,t.shortCut?"#ffd166":"#f7e3bb",.8);p.position.set(h.x,h.y+2.1,h.z),this.group.add(p),this.arches.push(p)}}_buildWalls(){const t=[{out:.7,up:.4},{out:1.6,up:4.5},{out:3,up:9.5},{out:5.2,up:14.5},{out:7.4,up:19}],e=Se.rockLow,i=Se.rockMid,n=Se.rockHigh,r=Se.rockTop,a=Se.rockDark;for(const o of[-1,1]){const l=[],c=[],u=new dt,h=[];for(let v=0;v<this.count;v+=2){const M=this.samples[v];if(this._wallBlocked(o<0?"left":"right",M.s)){h.push(null);continue}const x=M.width/2,L=[];for(let A=0;A<t.length;A++){const w=t[A],C=this.noise(v*.09+A*3.1,o*2.2)*(.5+A*.85),b=x+w.out+C,S=w.up+this.noise(v*.13+A,o*9.1)*(A*1.4),R=o*b,I=M.pos.x+M.right.x*R,O=M.pos.z+M.right.z*R,W=M.pos.y+Math.tan(M.bank)*R+S;L.push([I,W,O]);const X=A/(t.length-1);X<.2?ai(u,a,e,.4+M.stripNoise*.2):X<.5?ai(u,e,i,.4):X<.8?ai(u,i,n,.5):ai(u,n,r,.6);const H=.9+this.noise(v*.4,A*2.2)*.16;c.push(u.r*H,u.g*H,u.b*H)}h.push(L)}h.forEach(v=>v&&v.forEach(M=>l.push(...M)));const d=new Map;let p=0;h.forEach((v,M)=>{v&&(d.set(M,p),p+=t.length)});const g=[];for(let v=0;v<h.length;v++){const M=h[v],x=h[(v+1)%h.length];if(!M||!x)continue;const L=d.get(v),A=d.get((v+1)%h.length);if(!(L===void 0||A===void 0))for(let w=0;w<t.length-1;w++)g.push(L+w,A+w,L+w+1,L+w+1,A+w,A+w+1)}const _=new re;_.setAttribute("position",new zt(l,3)),_.setAttribute("color",new zt(c,3)),_.setIndex(g),_.computeVertexNormals();const m=new ne({vertexColors:!0,roughness:1,metalness:0,flatShading:!0,side:Ne}),f=new At(_,m);f.castShadow=!0,f.receiveShadow=!0,this.group.add(f),this[o<0?"wallLeft":"wallRight"]=f}}_buildGates(){const t=["#ffce6e","#ff9d4d","#ffce6e"];this.gateS.forEach((e,i)=>{const n=new be,r=this.samplePos(e,0),a=this.getSample(e).a,o=Math.atan2(a.tan.x,a.tan.z);n.position.copy(r),n.rotation.y=o;const l=a.width,c=new ze(1.1,9,1.1),u=new ne({color:"#3e2b27",roughness:.8,metalness:.2}),h=new Ue({color:"#ffc46b"});for(const m of[-1,1]){const f=new At(c,u);f.position.set(m*(l/2+.6),4.4,0),f.castShadow=!0,n.add(f);const v=new At(new ze(.24,7.4,.24),h);v.position.set(m*(l/2+.6),4.4,-.62),n.add(v)}const d=new At(new ze(l+2.8,1.4,1.4),u);d.position.set(0,9,0),d.castShadow=!0,n.add(d);const p=i===0?er(1024,160,(m,f,v)=>{m.fillStyle="#2a1b17",m.fillRect(0,0,f,v),m.fillStyle="#ffce6e",m.fillRect(0,0,f,8),m.fillRect(0,v-8,f,8),m.font='900 92px "Arial Black", sans-serif',m.textAlign="center",m.textBaseline="middle",m.fillStyle="#f7e3bb",m.fillText("SUNBREAK  START",f/2,v/2-2)}):er(1024,160,(m,f,v)=>{m.fillStyle="#2a1b17",m.fillRect(0,0,f,v);const M=t[i%t.length];m.fillStyle=M,m.fillRect(0,0,f,7),m.fillRect(0,v-7,f,7),m.font='900 72px "Arial Black", sans-serif',m.textAlign="center",m.textBaseline="middle",m.fillStyle="#f7e3bb",m.fillText(`CHECKPOINT  ${i}`,f/2,v/2+2);for(let x=0;x<6;x++)m.fillStyle=x%2?"#ffce6e":"#b55a38",m.fillRect(f-210+x*30,40,18,80)}),g=new si(l+2.2,2),_=new Ue({map:p,transparent:!0,side:wi});for(const m of[-1,1]){const f=new At(g,_);f.position.set(0,7.7,m*.03),f.rotation.y=m<0?Math.PI:0,n.add(f)}if(i===0){const m=[];for(let f=0;f<5;f++){const v=new Ue({color:"#42211b"}),M=new At(new as(.46,12,10),v);M.position.set((f-2)*1.7,6.25,.1),n.add(M),m.push(v)}this.startLights=m}n.name=`gate-${i}`,this.group.add(n),this.gates.push({s:e,idx:i,group:n,emissive:h})})}setStartLights(t,e=!1){this.startLights&&this.startLights.forEach((i,n)=>{const r=n<t;i.color.set(r?e?"#8dffb0":"#ff4a2a":"#42211b")})}_buildTunnels(){const t=new ne({color:"#8a4630",roughness:1,flatShading:!0}),e=new Ue({color:"#ffd08a"});this.tunnelLights=[];for(const i of this.tunnelRanges){const n=Math.max(2,Math.floor((i.end-i.start)/9));for(let r=0;r<=n;r++){const a=i.start+(i.end-i.start)*r/n,o=this.samplePos(a,0),l=this.getSample(a).a,c=Math.atan2(l.tan.x,l.tan.z),u=l.width/2+3.5,h=new At(new lr(u,2.4,5,12,Math.PI),t);h.position.set(o.x,o.y-1.2,o.z),h.rotation.y=c,h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),this.tunnelLights.push(h);for(const d of[-1,1]){const p=this.samplePos(a,d*(l.width/2+.9)),g=new At(new ze(.35,1.4,.35),e);g.position.set(p.x,p.y+4.2,p.z),g.rotation.y=c,this.group.add(g)}}for(let r=0;r<n;r++){const a=i.start+(i.end-i.start)*(r+.5)/n,o=this.samplePos(a,0),l=this.getSample(a).a,c=Math.atan2(l.tan.x,l.tan.z),u=new At(new ze(l.width+12,5,9),t);u.position.set(o.x,o.y+11,o.z),u.rotation.y=c,u.castShadow=!0,this.group.add(u)}}}_buildArches(){const t=[{x:96,z:-29,radius:17},{x:246,z:-118,radius:20}],e=new ne({color:"#b4603c",roughness:1,flatShading:!0});for(const o of t){const l=this.findS(o.x,o.z),c=this.samplePos(l,0),u=this.getSample(l).a,h=Math.atan2(u.tan.x,u.tan.z),d=new At(new lr(o.radius,3,6,14,Math.PI),e);d.position.set(c.x,c.y-.5,c.z),d.rotation.y=h,d.castShadow=!0,d.receiveShadow=!0,this.group.add(d)}const i=this.findS(246,-140),n=this.samplePos(i,0),r=new In(10,34,7,3);r.translate(0,16,0);const a=new At(r,e);a.position.set(n.x,n.y-6,n.z),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a),this.island=a,this.decorColliders.push({x:n.x,z:n.z,r:10,y:n.y})}_buildRoadside(){const t=er(512,256,(h,d,p)=>{h.fillStyle="#2a1b17",h.fillRect(0,0,d,p),h.fillStyle="#ffce6e",h.fillRect(0,0,d,10),h.fillRect(0,p-10,d,10),h.fillStyle="#f7e3bb",h.font='900 62px "Arial Black", sans-serif',h.textAlign="center",h.fillText("STAY",d/2,95),h.fillStyle="#ff9d4d",h.fillText("FAST",d/2,170),h.font="700 30px sans-serif",h.fillStyle="#e8cfa2",h.fillText("SUNBREAK CANYON",d/2,220)}),e=new ne({map:t,roughness:.8,emissive:"#3a2015",emissiveIntensity:.3,side:Ne}),i=new ne({color:"#4a3028",roughness:.9}),n=this.findS(242,-205);for(const[h,d]of[[0,1],[260,-1]]){const p=n+h,g=this.getSample(p).a,_=d*(g.width/2-1),m=this.samplePos(p,_),f=new At(new si(5.2,2.6),e);f.position.set(m.x,m.y+4.6,m.z),f.rotation.y=Math.atan2(g.tan.x,g.tan.z),this.group.add(f);for(const v of[-1,1]){const M=new At(new ze(.28,5.2,.28),i),x=this.samplePos(p,_+v*1.7);M.position.set(x.x,m.y+2.6,x.z),this.group.add(M)}}const r=new ne({color:"#6d3325",roughness:1,flatShading:!0}),a=ji(77),o=[[this.findS(210,92),1],[this.findS(475,-250),-1],[this.findS(-210,245),1],[this.findS(-265,40),-1],[this.findS(70,-55),1]];for(const[h,d]of o){const p=this.getSample(h).a,g=d*(p.width/2+2.2),_=this.samplePos(h,g),m=4+a()*5,f=new ii(.8,1.25,m,6,2),v=new At(f,r);v.position.set(_.x,_.y+m/2,_.z),v.rotation.y=a()*ye,v.castShadow=!0,this.group.add(v),this.decorColliders.push({x:_.x,z:_.z,r:1.35,y:_.y})}const l=new ne({color:"#cf4938",roughness:.6,metalness:.15,flatShading:!0}),c=new ne({color:"#f1dfb5",roughness:.72,metalness:.05,flatShading:!0}),u=[[this.findS(310,80),150,1],[this.findS(455,-165),130,-1],[this.findS(-250,15),110,1]];for(const[h,d,p]of u)for(let g=0;g<d;g+=7.2){const _=h+g,m=this.getSample(_).a,f=p*(m.width/2+1.25),v=this.samplePos(_,f),M=new At(new ze(.42,.72,6.6),Math.floor(g/7.2)%2?c:l);M.position.set(v.x,v.y+.36,v.z),M.rotation.y=Math.atan2(m.tan.x,m.tan.z),M.castShadow=!0,M.receiveShadow=!0,this.group.add(M)}}_buildMinimap(){this.mapPoints=[];for(let t=0;t<this.length;t+=16){const e=this.samplePos(t,0);this.mapPoints.push({x:e.x,z:e.z})}}}function s0(s,t,e,i){s.push(t,e,i)}function r0(s,t="#ffffff",e=1){const i=er(512,128,(a,o,l)=>{a.clearRect(0,0,o,l),a.fillStyle="rgba(30,18,14,0.82)",a.beginPath(),a.roundRect(6,20,o-12,l-40,18),a.fill(),a.strokeStyle=t,a.lineWidth=5,a.stroke(),a.fillStyle=t,a.font='900 52px "Arial Black", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(s,o/2,l/2+2)}),n=new ro({map:i,transparent:!0,depthWrite:!1}),r=new Tc(n);return r.scale.set(6*e,1.5*e,1),r}class a0{constructor(t,e){this.scene=t,this.track=e,this.rng=ji(4242),this.noise=wc(771),this.buildSky(),this.buildLights(),this.buildTerrain(),this.buildMesas(),this.buildFlora(),this.buildDustDevils()}buildSky(){const t=new P(-.48,.44,-.76).normalize();this.sunDir=t;const e=new as(1600,32,20),i=new de({side:Fe,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:t},topColor:{value:new dt("#27384c")},midColor:{value:new dt("#8d5c57")},horizonColor:{value:new dt("#f3a15d")},hazeColor:{value:new dt("#d8754a")}},vertexShader:`
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
      `}),n=new At(e,i);n.frustumCulled=!1,this.scene.add(n),this.sky=n,this.scene.fog=new so(new dt("#c96849"),82e-5)}buildLights(){const t=new Zm("#ffd0a0","#3b1b1a",1.08);this.scene.add(t);const e=new Al("#ffbd78",3.5);e.position.copy(this.sunDir).multiplyScalar(260),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const i=170;e.shadow.camera.left=-i,e.shadow.camera.right=i,e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.camera.near=20,e.shadow.camera.far=620,e.shadow.bias=-7e-4,e.shadow.normalBias=.35,this.scene.add(e),this.scene.add(e.target),this.sun=e,this.ambient=new Jm("#d65e45",.2),this.scene.add(this.ambient);const n=new Al("#b83f32",.48);n.position.set(.4,-.5,.6),this.scene.add(n)}updateSun(t){t&&(this.sun.target.position.set(t.x,t.y,t.z),this.sun.position.set(t.x,t.y,t.z).addScaledVector(this.sunDir,300),this.sun.target.updateMatrixWorld(),this.sky.position.set(t.x,0,t.z))}trackDistance(t,e){let i=1/0,n=null;const r=this.track.samples;for(let a=0;a<r.length;a+=5){const o=r[a],l=(o.pos.x-t)**2+(o.pos.z-e)**2;l<i&&(i=l,n=o)}return{dist:Math.sqrt(i),sample:n}}buildTerrain(){const i=new si(2e3,2e3,110,110);i.rotateX(-Math.PI/2);const n=i.attributes.position,r=[],a=new dt,o=new dt("#c1865a"),l=new dt("#a96942"),c=new dt("#8f5238"),u=new dt("#a6482f"),h=new dt("#7d3626");for(let g=0;g<n.count;g++){const _=n.getX(g),m=n.getZ(g),f=this.trackDistance(_,m),v=f.sample,M=f.dist,x=v?v.width/2:14,L=v?v.pos.y:0,A=this.noise(_*.008,m*.008),w=this.noise(_*.031,m*.031);let C;if(M<x+26)C=L-7.2+w*1.4-Rt((x+26-M)/26,0,1)*.8;else{const R=Rt((M-x-26)/120,0,1);C=L-7.2+R*R*38+A*16+w*2.6}const b=Math.abs(this.noise(_*.0035+4,m*.0035-8));M>x+20&&(C-=o0(b,.06)*5),n.setY(g,C);const S=Rt((C-L+9)/30+(M-x)/160+w*.15,0,1);a.copy(o).lerp(l,Rt(A*.5+.5,0,1)),a.lerp(c,Rt(w*.4+.3,0,1)*.45),a.lerp(u,Rt(S*1.5,0,1)),a.lerp(h,Rt((S-.55)*1.4,0,1)),M<x+3&&a.lerp(l,.35),r.push(a.r,a.g,a.b)}i.setAttribute("color",new zt(r,3)),i.computeVertexNormals();const d=new ne({vertexColors:!0,roughness:1,metalness:0,flatShading:!0}),p=new At(i,d);p.receiveShadow=!0,p.name="terrain",this.scene.add(p),this.terrain=p}buildMesas(){const t=ji(818);this.mesas=new be,this.scene.add(this.mesas);const e=["#9c422c","#b05637","#c06c44","#853826","#d18a5d"],i=[];let n=0;for(;i.length<26&&n<900;){n++;const a=t()*ye,o=190+t()*640,l=Math.cos(a)*o,c=Math.sin(a)*o;if(this.trackDistance(l,c).dist<85)continue;let h=!1;for(const d of i)(d.x-l)**2+(d.z-c)**2<110*110&&(h=!0);h||i.push({x:l,z:c})}for(const a of i){const o=this.trackDistance(a.x,a.z),l=(o.sample?o.sample.pos.y:0)-8+t()*6,c=30+t()*85,u=22+t()*46,h=5+Math.floor(t()*3),d=new be,p=2+Math.floor(t()*3);for(let g=0;g<p;g++){const _=1-g/(p+.6),m=u*(.65+_*.55),f=c/p*(.7+t()*.6),v=new ii(m*(.78+t()*.12),m,f,h,2),M=new ne({color:e[Math.floor(t()*e.length)],roughness:1,flatShading:!0}),x=new At(v,M);x.position.set(0,c/p*g+f/2,0),x.rotation.y=t()*ye,x.castShadow=!0,x.receiveShadow=!0,d.add(x)}for(let g=0;g<3;g++){const _=4+t()*9,m=new or(_,0),f=new At(m,new ne({color:e[Math.floor(t()*e.length)],roughness:1,flatShading:!0})),v=t()*ye;f.position.set(Math.cos(v)*(u+4),_*.5,Math.sin(v)*(u+4)),f.rotation.set(t()*ye,t()*ye,t()*ye),f.castShadow=!0,d.add(f)}d.position.set(a.x,l,a.z),this.mesas.add(d)}const r=new ne({color:"#8e3c29",roughness:1,flatShading:!0});for(let a=0;a<14;a++){const o=a/14*this.track.length+40,l=this.track.getSample(o).a,c=a%2?1:-1,u=this.track.samplePos(o,c*(l.width/2+18)),h=16+t()*30,d=new In(9+t()*12,h,6,2);d.translate(0,h/2,0);const p=new At(d,r);p.position.set(u.x,u.y-12,u.z),p.rotation.y=t()*ye,p.castShadow=!0,p.receiveShadow=!0,this.mesas.add(p)}}buildFlora(){const t=ji(9911);this.flora=new be,this.scene.add(this.flora);const e=new ne({color:"#4c6b4f",roughness:.9,flatShading:!0}),i=new ne({color:"#e6b54a",roughness:.8,emissive:"#7a4a13",emissiveIntensity:.2}),n=new ne({color:"#8a4530",roughness:1,flatShading:!0});for(let a=0;a<90;a++){const o=t()*ye,l=40+t()*520,c=Math.cos(o)*l,u=Math.sin(o)*l,h=this.trackDistance(c,u);if(h.dist<h.sample.width/2+7||h.dist>120)continue;this.track.samplePos(h.sample.s,(c-h.sample.pos.x)*h.sample.right.x+(u-h.sample.pos.z)*h.sample.right.z);const d=this.terrainHeightAt(c,u);if(t()<.45){const p=new be,g=3+t()*4.5,_=new At(new ii(.42,.55,g,6),e);_.position.y=g/2,_.castShadow=!0,p.add(_);const m=1+Math.floor(t()*3);for(let v=0;v<m;v++){const M=g*(.35+t()*.25),x=new At(new ii(.28,.32,M,5),e);x.position.set((t()-.5)*1.4,g*(.42+t()*.18),0),x.rotation.z=(t()-.5)*.7,x.castShadow=!0,p.add(x)}const f=new At(new as(.36,6,5),i);f.position.y=g+.2,p.add(f),p.position.set(c,d,u),p.rotation.y=t()*ye,this.flora.add(p)}else{const p=1.2+t()*4.2,g=new At(new or(p,0),n);g.position.set(c,d+p*.4,u),g.rotation.set(t()*ye,t()*ye,t()*ye),g.castShadow=!0,g.receiveShadow=!0,this.flora.add(g)}}const r=new ne({color:"#8f7a45",roughness:1,flatShading:!0});for(let a=0;a<60;a++){const o=t()*this.track.length,l=this.track.getSample(o).a;if(this.track.isGap(o))continue;const u=(t()<.5?-1:1)*(l.width/2+3+t()*12),h=this.track.samplePos(o,u),d=new be;for(let p=0;p<5;p++){const g=new In(.25,1.2+t(),4),_=new At(g,r);_.position.set((t()-.5)*.9,.6,(t()-.5)*.9),_.rotation.z=(t()-.5)*.6,d.add(_)}d.position.set(h.x,h.y-.2,h.z),this.flora.add(d)}}terrainHeightAt(t,e){const i=this.trackDistance(t,e),n=i.sample,r=i.dist,a=n?n.width/2:14,o=n?n.pos.y:0,l=this.noise(t*.008,e*.008),c=this.noise(t*.031,e*.031);if(r<a+26)return o-7.2+c*1.4;const u=Rt((r-a-26)/120,0,1);return o-7.2+u*u*38+l*16+c*2.6}buildDustDevils(){const t=new be;this.scene.add(t);const e=14;this.devils=[];const i=ji(51),n=l0();for(let r=0;r<e;r++){const a=new ro({map:n,color:"#e9bd90",transparent:!0,opacity:.15,depthWrite:!1}),o=new Tc(a),l=45+i()*70;o.scale.set(l,l*2.4,1);const c=i()*ye,u=120+i()*520;o.position.set(Math.cos(c)*u,8+i()*18,Math.sin(c)*u),t.add(o),this.devils.push({sprite:o,speed:1+i()*2,phase:i()*ye})}this.devilsGroup=t}update(t,e,i){for(const n of this.devils)n.sprite.position.x+=(12+n.speed*4)*t,n.sprite.position.x>900&&(n.sprite.position.x=-900),n.sprite.position.y+=Math.sin(i*.4+n.phase)*t*.25;this.sky&&(this.sky.position.x=e.x)}}function o0(s,t){return Rt(1-Math.abs(s)/t,0,1)}function l0(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(255,255,255,0.85)"),e.addColorStop(.45,"rgba(255,255,255,0.28)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new dr(s)}const c0=24,h0=Math.PI;function Pl(s,t={}){return new ne({color:s,roughness:.55,metalness:.25,flatShading:!0,...t})}function Zr(s,t={}){return new Ym({color:s,roughness:.2,metalness:.7,clearcoat:.85,clearcoatRoughness:.14,flatShading:!0,...t})}function ce(s,t,e,i,n=0,r=0,a=0){const o=new At(new ze(s,t,e),i);return o.position.set(n,r,a),o.castShadow=!0,o.receiveShadow=!0,o}class Ll{constructor(t,e={}){this.group=new be,this.tilt=new be,this.group.add(this.tilt),t.add(this.group);const i=Zr(e.body||"#14a89e"),n=Zr(e.bodyDark||"#08736f",{roughness:.28,metalness:.62}),r=Pl("#10191d",{roughness:.3,metalness:.7}),a=Zr(e.accent||"#ff7a2f",{emissive:e.emissive||"#ff421c",emissiveIntensity:.9,roughness:.22,metalness:.45}),o=Pl(e.trim||"#ffd07c",{emissive:e.trimEmissive||"#b8551f",emissiveIntensity:.22,roughness:.3,metalness:.65}),l=new ne({color:"#091c25",roughness:.08,metalness:.86,transparent:!0,opacity:.94}),c=new ne({color:"#080d10",roughness:.94,metalness:.03}),u=new ne({color:"#b9e0d8",roughness:.19,metalness:.94,flatShading:!0}),h=new be;this.tilt.add(h),this.body=h,this.tilt.rotation.y=h0,h.add(ce(2.12,.48,3.55,i,0,.64,.05)),h.add(ce(1.82,.27,1.18,i,0,.54,-2.05)),h.add(ce(1.46,.18,.62,o,0,.55,-2.61)),h.add(ce(2.34,.18,.28,r,0,.39,-2.5)),h.add(ce(2.16,.2,.28,r,0,.42,2.03));const d=ce(1.55,.54,1.55,r,0,1.13,.18);d.rotation.x=-.04,h.add(d);const p=ce(1.42,.4,.1,l,0,1.18,-.62);p.rotation.x=-.58,h.add(p);const g=ce(1.42,.1,1.08,n,0,1.43,.28);h.add(g);const _=ce(1.34,.3,.08,l,0,1.17,.91);_.rotation.x=.48,h.add(_),h.add(ce(.1,.12,1.22,a,0,1.5,.18)),h.add(ce(.22,.035,3.55,o,0,.9,-.02)),h.add(ce(.09,.045,2.2,a,0,.93,.9)),this.sideLights=[];for(const S of[-1,1]){h.add(ce(.16,.2,2.7,r,S*1.08,.48,0)),h.add(ce(.08,.06,2.25,a,S*1.12,.68,.02));const R=ce(.035,.08,1.25,o,S*1.15,.77,-.18);h.add(R),this.sideLights.push(R);const I=new At(new ii(.34,.34,.045,24),o);I.rotation.z=Math.PI/2,I.position.set(S*1.12,.88,.22),h.add(I);const O=new At(new si(.5,.38),new Ue({map:u0("07"),transparent:!0}));O.position.set(S*1.145,.88,.22),O.rotation.y=S>0?Math.PI/2:-Math.PI/2,h.add(O)}for(const S of[-1,1]){h.add(ce(.42,.06,.42,a,S*1.02,.5,-2.42));const R=ce(.08,.82,.08,r,S*.68,1.13,.93);R.rotation.x=.16,h.add(R)}h.add(ce(1.42,.08,.08,r,0,1.55,.93)),h.add(ce(.1,.44,.1,r,-.78,1.2,1.86)),h.add(ce(.1,.44,.1,r,.78,1.2,1.86));const m=ce(2.1,.1,.54,a,0,1.45,1.98);m.rotation.x=.1,h.add(m),h.add(ce(1.55,.04,.09,o,0,1.5,2.23));const f=new Ue({color:"#fff1c7"}),v=new Ue({color:"#a5151d"});this.tailMats=[v],h.add(ce(1.26,.1,.05,f,0,.7,-2.66));for(const S of[-1,1])h.add(ce(.5,.12,.05,v,S*.57,.82,1.99));this.wheels=[];const M=new ii(.5,.5,.38,18);M.rotateZ(Math.PI/2);const x=new ii(.3,.3,.4,10);x.rotateZ(Math.PI/2);const L=new ii(.1,.1,.42,10);L.rotateZ(Math.PI/2);const A=[[-1,.48,-1.38,!0],[1,.48,-1.38,!0],[-1.02,.5,1.38,!1],[1.02,.5,1.38,!1]];for(const[S,R,I,O]of A){const W=new be;W.position.set(S,R,I);const X=new be;W.add(X),X.add(new At(M,c)),X.add(new At(x,u)),X.add(new At(L,a));for(let H=0;H<5;H++){const Z=new At(new ze(.43,.055,.08),u);Z.rotation.x=H/5*Math.PI,X.add(Z)}this.tilt.add(W),this.wheels.push({pivot:W,spin:X,front:O,baseY:R})}this.flames=[];const w=new Ue({color:"#ffb35c",transparent:!0,opacity:.9,blending:Rn,depthWrite:!1});for(const S of[-1,1]){const R=new At(new In(.17,1.25,7),w.clone());R.rotation.x=Math.PI/2,R.position.set(S*.42,.48,2.48),R.visible=!1,this.tilt.add(R),this.flames.push(R)}const C=new At(new si(2.8,4.8),new Ue({color:"#29e8d2",transparent:!0,opacity:0,blending:Rn,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.y=.06,this.tilt.add(C),this.underglow=C;const b=new At(new si(3.4,5.3),new Ue({map:d0(),transparent:!0,opacity:.46,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.y=.08,this.group.add(b),this.blob=b,this.bodyRoll=0,this.bodyPitch=0,this.susp=0,this.suspVel=0,this.wheelSpin=0}setPose(t,e,i,n){this.group.position.copy(t),this.group.rotation.y=e}update(t,e){const{speed:i,steer:n,lateral:r,grounded:a,boostActive:o,throttle:l}=e;this.wheelSpin+=e.forwardSpeed/.46*t;for(const g of this.wheels)g.spin.rotation.x=this.wheelSpin,g.front&&(g.pivot.rotation.y=n*.4),g.pivot.position.y=g.baseY+this.susp*.35;const c=Rt(-n*.055-r*.004,-.12,.12),u=Rt((e.accel||0)*-.0018+(e.braking?.035:0),-.06,.06);this.bodyRoll=pe(this.bodyRoll,c,8,t),this.bodyPitch=pe(this.bodyPitch,u,7,t),this.suspVel+=(-this.susp*150-this.suspVel*14)*t,this.susp+=this.suspVel*t,this.tilt.rotation.z=(e.bank||0)+this.bodyRoll,this.tilt.rotation.x=(e.slope||0)*.6+this.bodyPitch,this.tilt.position.y=this.susp*.35,this.body.position.y=-this.susp*.06,this.blob.position.y=.06-(e.airHeight||0);const h=1+Rt((e.airHeight||0)/12,0,.8);this.blob.scale.set(h,h,1),this.blob.material.opacity=.4/h;const d=o;for(const g of this.flames)if(g.visible=d,d){const _=.8+Math.random()*.55;g.scale.set(1,_,1),g.material.opacity=.6+Math.random()*.35}this.underglow.material.opacity=pe(this.underglow.material.opacity,o?.4:0,10,t);const p=e.braking;for(const g of this.tailMats)g.color.setHex(p?"#ff2617":"#b32a20")}wheelWorld(t,e=new P){return this.wheels[t].pivot.getWorldPosition(e),e}addSuspensionKick(t){this.suspVel+=t}}function u0(s){const t=document.createElement("canvas");t.width=256,t.height=192;const e=t.getContext("2d");e.clearRect(0,0,256,192),e.fillStyle="#22201f",e.font='900 132px "Arial Black", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(s,128,104);const i=new dr(t);return i.colorSpace=De,i}function d0(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new dr(s)}class f0{constructor(t,e,i={}){this.track=t,this.model=e,this.events=i,this.pos=new P,this.vel=new P,this.yaw=0,this.vy=0,this.s=0,this.lat=0,this.route="main",this.grounded=!0,this.airborne=!1,this.airTime=0,this.steer=0,this.boostMeter=40,this.boosting=!1,this.drifting=!1,this.driftTime=0,this.driftChain=0,this.lastDrift=0,this.driftScore=0,this.chainMultiplier=1,this.slip=0,this.forwardSpeed=0,this.lateralSpeed=0,this.speed=0,this.slope=0,this.bank=0,this.offRoad=!1,this.offRoadTime=0,this.wallContact=0,this.wallRideTime=0,this.wallRideCooldown=0,this.needsRecovery=!1,this.recoveryReason="",this.resetTimer=0,this.impactTimer=0,this.crashTimer=0,this.lastSurfaceY=0,this.nearMissCooldown=new Map,this.nearMissCount=0,this.boostTime=0,this.airBoostAwarded=!1,this.landImpact=0,this.assist=.4,this.controlLock=0,this.input={steer:0,throttle:0,brake:0,handbrake:!1,boost:!1},this.prevInput={handbrake:!1,boost:!1},this.onGroundSurface=!0}reset(t,e=0){const i=this.track.samplePos(t,e),n=this.track.getSample(t).a;this.pos.copy(i),this.pos.y+=.05,this.yaw=Math.atan2(n.tan.x,n.tan.z),this.vel.set(0,0,0),this.vy=0,this.s=t,this.lat=e,this.route="main",this.grounded=!0,this.airborne=!1,this.airTime=0,this.boostMeter=45,this.boosting=!1,this.drifting=!1,this.driftChain=0,this.driftScore=0,this.chainMultiplier=1,this.steer=0,this.forwardSpeed=0,this.lateralSpeed=0,this.speed=0,this.offRoad=!1,this.offRoadTime=0,this.wallRideTime=0,this.needsRecovery=!1,this.resetTimer=0,this.airBoostAwarded=!1,this.landImpact=0}addBoost(t){this.boostMeter=Rt(this.boostMeter+t,0,100)}useBoost(t){this.boosting=t&&this.boostMeter>1}crash(t=1){var i,n;if(this.crashTimer>.4)return;this.crashTimer=.9;const e=.55*t;this.vel.multiplyScalar(1-e),this.vy=Math.min(this.vy,0),this.driftChain=0,this.driftScore=0,this.chainMultiplier=1,this.drifting=!1,this.impactTimer=.5,this.controlLock=.28,this.boosting=!1,(n=(i=this.events).onCrash)==null||n.call(i,t,this.pos.clone())}requestRecovery(t){this.needsRecovery=!0,this.recoveryReason=t,this.drifting=!1,this.driftChain=0}groundAt(t,e){const{a:i}=this.track.getSample(t),n=this.track.surfaceAt(t,e,this.route);if(n!==null){const r=Math.abs(e)<=i.width/2+.4;return{y:n,kind:r?"road":"shoulder"}}return this.track.isGap(t)?null:{y:i.pos.y-7.1,kind:"sand"}}update(t,e,i=.4){var C,b,S,R,I,O,W,X,H,Z,V,tt,at,gt,Lt,Xt,q,et;this.assist=i,this.controlLock=Math.max(0,this.controlLock-t),this.crashTimer=Math.max(0,this.crashTimer-t),this.impactTimer=Math.max(0,this.impactTimer-t),this.wallRideCooldown=Math.max(0,this.wallRideCooldown-t);const n=this.controlLock>0?0:e.steer,r=this.controlLock>0?0:e.throttle,a=this.controlLock>0?0:e.brake;let o=this.track.nearest(this.pos.x,this.pos.z,this.s);this.s=o.s,this.lat=o.lat,this.route=o.route||"main";const l=o.sample;this.bank=l.bank,l.right;let c=new P(Math.sin(this.yaw),0,Math.cos(this.yaw)),u=this.groundAt(this.s,this.lat);this.speed=Math.hypot(this.vel.x,this.vel.z),this.grounded&&(u?(this.pos.y=u.y,this.vy=0):(this.grounded=!1,this.airborne=!0,this.airTime=0)),this.grounded||(this.vy-=c0*t,this.pos.y+=this.vy*t,this.airTime+=t,u&&this.pos.y<=u.y+.18&&this.land(u.y));const h=this.grounded;if(h){const nt=Rt(this.speed/7,0,1),j=e.handbrake&&this.speed>9;j&&!this.drifting&&(this.drifting=!0,this.driftTime=0,(b=(C=this.events).onDriftStart)==null||b.call(C,this.pos.clone())),this.drifting&&(Math.abs(this.slip)>.16||j)&&this.speed>7&&(this.driftTime+=t);const ft=1.95/(1+this.speed*.012)*(.42+nt*.58),_t=this.forwardSpeed<-1.5?-1:1;let wt=n*ft*_t;if(this.drifting&&(wt*=1.55),this.assist>0){const Yt=Rt((Math.abs(this.slip)-.5)*2,0,1);wt-=e0(this.slip)*Yt*1*this.assist,Math.abs(n)<.05&&this.speed>8&&(wt+=-this.slip*.7*this.assist)}this.yaw=An(this.yaw+wt*t),this.steer=pe(this.steer,n,13,t)}else this.yaw=An(this.yaw+n*.85*t),this.steer=pe(this.steer,n,7,t);c=new P(Math.sin(this.yaw),0,Math.cos(this.yaw));const d=new P(c.z,0,-c.x);let p=this.vel.x*c.x+this.vel.z*c.z,g=this.vel.x*d.x+this.vel.z*d.z;if(h){let nt=this.drifting?2.15:10.5;this.drifting&&this.assist>.5&&(nt*=1.2),e.handbrake&&(nt*=.72),this.impactTimer>0&&(nt*=.8),g*=Math.exp(-nt*t),this.lateralSpeed=g}if(h){if(r>.02&&p>-2){let j=30*(1-Math.pow(Rt(Math.abs(p)/108,0,1),1.75))*r;this.boosting&&(j+=19*r),p+=j*t}a>.02&&(p>1.5?p-=44*a*t:p>-16&&(p-=13*a*t)),e.handbrake&&(p*=1-.42*t),this.offRoad&&(p*=1-1.6*t),this.impactTimer>0&&(p*=1-1.4*t)}e.boost&&this.boostMeter>.5?(this.boosting=!0,this.boostMeter=Math.max(0,this.boostMeter-25*t),this.boostTime+=t,p+=17*t,this.boostMeter<=0&&(this.boosting=!1),h||(this.vy=Math.max(this.vy,-13))):(this.boosting=!1,this.boostTime=0);const m=.004*this.speed*this.speed+.45;p-=Math.sign(p)*Math.min(Math.abs(p),m*t),h||(g*=Math.exp(-.25*t)),Math.abs(p)<.03&&(p=0),this.vel.x=c.x*p+d.x*g,this.vel.z=c.z*p+d.z*g,this.forwardSpeed=p,this.lateralSpeed=g,this.speed=Math.hypot(this.vel.x,this.vel.z),this.slip=this.speed>2?Math.atan2(g,Math.abs(p)+.001):0,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,o=this.track.nearest(this.pos.x,this.pos.z,this.s),this.s=o.s,this.lat=o.lat;const f=o.sample,v=f.width/2;if(this.wallContact=0,h){const nt=v+1;if(Math.abs(this.lat)>nt){const j=Math.sign(this.lat),ft=Math.abs(this.lat)-nt;this.pos.x-=f.right.x*j*ft,this.pos.z-=f.right.z*j*ft,this.lat=j*nt;const _t=this.vel.x*f.right.x*j+this.vel.z*f.right.z*j;_t>0&&(this.vel.x-=f.right.x*j*_t*1.3,this.vel.z-=f.right.z*j*_t*1.3),this.wallContact=1;const wt=Math.abs(Math.atan2(_t,Math.abs(this.forwardSpeed)+.01)),Yt=this.speed;if(wt>.5&&Yt>13)this.crash(Rt(wt*1.3,.4,1));else{this.impactTimer=Math.max(this.impactTimer,.12),Yt>22?(this.wallRideTime+=t,this.wallRideTime>.15&&(this.addBoost(14*t),(R=(S=this.events).onWallRide)==null||R.call(S,this.pos.clone(),j,Yt),this.wallRideCooldown<=0&&(this.wallRideCooldown=.28,(O=(I=this.events).onWallSpark)==null||O.call(I,this.pos.clone(),j,f)))):this.wallRideTime=0;const kt=Math.atan2(f.tan.x,f.tan.z),ie=tr(this.yaw,kt);this.yaw=An(this.yaw-Math.sign(ie)*Math.min(Math.abs(ie),2.2*t))}(X=(W=this.events).onWallHit)==null||X.call(W,this.pos.clone(),this.speed)}else this.wallRideTime=0}const M=this.groundAt(this.s,this.lat);if(this.grounded&&M){const nt=Math.max(.35,Math.abs(this.forwardSpeed)*t),j=((this.s-nt)%this.track.length+this.track.length)%this.track.length,ft=this.groundAt(j,this.lat);let _t=0;ft&&ft.kind==="road"&&M.kind==="road"&&(_t=(M.y-ft.y)/nt),_t=Rt(_t,-.95,1),this.slope=Math.atan(_t),this.vy=_t*this.forwardSpeed*.94,this.pos.y=M.y}else this.grounded||(this.slope=pe(this.slope,Rt(-this.vy*.03,-.5,.5),1.5,t));const x=M!==null&&M.kind==="road";if(M!==null&&!x&&this.grounded?(this.offRoad=!0,this.offRoadTime+=t,(Z=(H=this.events).onOffRoad)==null||Z.call(H,this.pos.clone()),this.offRoadTime>3.4&&this.requestRecovery("offroad")):x||!this.grounded?(this.offRoadTime=0,this.offRoad=!1):M||(this.offRoad=!1,this.offRoadTime=0,this.pos.y<-35&&this.requestRecovery("fall")),this.checkProps(t),this.drifting&&this.grounded&&this.speed>12&&Math.abs(this.slip)>.12){this.driftChain+=t,this.lastDrift=Math.max(0,this.driftChain);const nt=(4+Math.min(18,Math.abs(this.slip)*26))*t;this.addBoost(nt),this.driftScore+=Math.abs(this.slip)*this.speed*t*2.2;const j=1+Math.min(3,Math.floor(this.driftChain/1.4));j>this.chainMultiplier&&(this.chainMultiplier=j,(tt=(V=this.events).onChainStep)==null||tt.call(V,j)),(gt=(at=this.events).onDriftTick)==null||gt.call(at,this.driftChain,this.slip)}else this.drifting&&(this.driftChain>.4&&((Xt=(Lt=this.events).onDriftEnd)==null||Xt.call(Lt,this.driftChain,this.chainMultiplier)),this.drifting=!1,this.driftChain=0,this.chainMultiplier=1);!this.grounded&&this.airTime>.55&&!this.airBoostAwarded&&(this.airBoostAwarded=!0,this.addBoost(10),(et=(q=this.events).onAirtime)==null||et.call(q,this.airTime)),this.grounded&&(this.airBoostAwarded=!1),this.grounded&&this.speed<1.2&&r>.1?(this.resetTimer+=t,this.resetTimer>5&&this.requestRecovery("stuck")):this.resetTimer=0;const w=Math.atan(Math.tan(this.bank)+this.lat*8e-4);this.model.group.position.set(this.pos.x,this.pos.y,this.pos.z),this.model.group.rotation.y=this.yaw,this.model.update(t,{speed:this.speed,steer:this.steer,lateral:this.lateralSpeed,grounded:this.grounded,boostActive:this.boosting,throttle:r,braking:a>.1,bank:this.grounded?w:this.model.bodyRoll*.25,slope:this.grounded?this.slope:0,airHeight:this.grounded?0:Math.max(0,this.pos.y-(M?M.y:this.pos.y-3)),forwardSpeed:this.forwardSpeed,accel:r*20-a*30})}land(t){var r,a,o,l;const e=Math.max(0,-this.vy);this.pos.y=t,this.vy=0,this.grounded=!0,this.airborne=!1,this.landImpact=e,this.model.addSuspensionKick(-Rt(e*.16,.4,5.5)),(a=(r=this.events).onLand)==null||a.call(r,e,this.pos.clone(),this.slip,this.airTime,this.speed);const n=.035+Rt(Math.abs(this.slip)/1.1,0,1)*.22+Rt((e-14)/60,0,.3);this.vel.multiplyScalar(1-n),e>6&&this.speed>.5&&(e>17||Math.abs(this.slip)>.55?this.crash(Rt(e/38,.12,.5)):this.addBoost(6+Math.min(14,e*.7))),Math.abs(this.slip)<.3&&e>3&&e<17&&((l=(o=this.events).onCleanLanding)==null||l.call(o,e,this.pos.clone()),this.addBoost(7)),this.airTime=0}checkProps(t){var e,i,n,r;for(const a of this.track.decorColliders){const o=this.pos.x-a.x,l=this.pos.z-a.z,c=o*o+l*l,u=a.r+1.05;if(c<u*u){const h=Math.sqrt(c)||.001,d=u-h;this.pos.x+=o/h*d,this.pos.z+=l/h*d,this.speed>6&&(this.crash(Rt(this.speed/55,.25,.9)),(i=(e=this.events).onPropHit)==null||i.call(e,this.pos.clone()))}else if(c<(a.r+5.2)**2&&this.speed>26){const h=a;(this.nearMissCooldown.get(h)||0)<=0&&(this.nearMissCooldown.set(h,3.5),this.nearMissCount++,this.addBoost(9),(r=(n=this.events).onNearMiss)==null||r.call(n,this.pos.clone()))}}for(const[a,o]of this.nearMissCooldown)o>0&&this.nearMissCooldown.set(a,o-t)}}const p0=`
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
`,m0=`
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.06, d) * vAlpha;
    gl_FragColor = vec4(vColor, a);
  }
`;class Dl{constructor(t,e,i,n){this.capacity=e,this.additive=i,this.tint=n,this.count=0;const r=new re;this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e),r.setAttribute("position",new Te(this.positions,3)),r.setAttribute("aColor",new Te(this.colors,3)),r.setAttribute("aSize",new Te(this.sizes,1)),r.setAttribute("aAlpha",new Te(this.alphas,1));const a=new de({uniforms:{},vertexShader:p0,fragmentShader:m0,transparent:!0,depthWrite:!1,blending:i?Rn:Ji});this.points=new Hm(r,a),this.points.frustumCulled=!1,this.points.renderOrder=i?3:2,t.add(this.points),this.geo=r,this.data=[];for(let o=0;o<e;o++)this.data.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size0:1,size1:1,r:1,g:1,b:1,drag:1,gravity:0,alpha:1});this.cursor=0}spawn(t){const e=this.data[this.cursor];this.cursor=(this.cursor+1)%this.capacity,e.alive=!0,e.x=t.x,e.y=t.y,e.z=t.z,e.vx=t.vx||0,e.vy=t.vy||0,e.vz=t.vz||0,e.life=0,e.maxLife=t.life||1,e.size0=t.size0||1,e.size1=t.size1||e.size0,e.r=t.r??1,e.g=t.g??1,e.b=t.b??1,e.drag=t.drag??1.5,e.gravity=t.gravity??0,e.alpha=t.alpha??1,e.additive=this.additive}update(t){let e=!1;for(let i=0;i<this.capacity;i++){const n=this.data[i];if(!n.alive){this.alphas[i]=0,this.sizes[i]=0;continue}if(e=!0,n.life+=t,n.life>=n.maxLife){n.alive=!1,this.alphas[i]=0,this.sizes[i]=0;continue}const r=Math.exp(-n.drag*t);n.vx*=r,n.vz*=r,n.vy=n.vy*r-n.gravity*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t;const a=n.life/n.maxLife;this.positions[i*3]=n.x,this.positions[i*3+1]=n.y,this.positions[i*3+2]=n.z,this.colors[i*3]=n.r,this.colors[i*3+1]=n.g,this.colors[i*3+2]=n.b,this.sizes[i]=n.size0+(n.size1-n.size0)*a,this.alphas[i]=n.alpha*(1-a)*Math.min(1,a*12)}(e||this._hadAny)&&(this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0,this._hadAny=e)}}class g0{constructor(t,e=900){this.capacity=e;const i=new re;this.positions=new Float32Array(e*4*3),this.alphas=new Float32Array(e*4);const n=[];for(let o=0;o<e;o++){const l=o*4;n.push(l,l+1,l+2,l,l+2,l+3)}i.setAttribute("position",new Te(this.positions,3)),i.setAttribute("aAlpha",new Te(this.alphas,1)),i.setIndex(n);const r=new de({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,vertexShader:`
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
      `}),a=new At(i,r);a.frustumCulled=!1,a.renderOrder=1,t.add(a),this.geo=i,this.cursor=0,this.data=[];for(let o=0;o<e;o++)this.data.push({life:0,maxLife:14,alive:!1})}add(t,e,i,n,r,a=.34,o=.9){const l=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const c=l*4,u=-r*a*.5,h=n*a*.5,d=this.positions;d[c*3]=t-u,d[c*3+1]=i,d[c*3+2]=e-h,d[(c+1)*3]=t+u,d[(c+1)*3+1]=i,d[(c+1)*3+2]=e+h,d[(c+2)*3]=t+u+n*.9,d[(c+2)*3+1]=i,d[(c+2)*3+2]=e+h+r*.9,d[(c+3)*3]=t-u+n*.9,d[(c+3)*3+1]=i,d[(c+3)*3+2]=e-h+r*.9;for(let p=0;p<4;p++)this.alphas[c+p]=o;this.data[l].life=0,this.data[l].maxLife=14,this.data[l].alive=!0,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}update(t){let e=!1;this.positions;for(let i=0;i<this.capacity;i++){const n=this.data[i];if(n.alive){if(n.life+=t,n.life>=n.maxLife){n.alive=!1;const r=i*4;for(let a=0;a<4;a++)this.alphas[r+a]=0;e=!0}else if(n.life>n.maxLife-3){const r=i*4,a=(n.maxLife-n.life)/3*.8;for(let o=0;o<4;o++)this.alphas[r+o]=a;e=!0}}}e&&(this.geo.attributes.aAlpha.needsUpdate=!0)}clear(){for(let t=0;t<this.capacity;t++){this.data[t].alive=!1;for(let e=0;e<4;e++)this.alphas[t*4+e]=0}this.geo.attributes.aAlpha.needsUpdate=!0}}class _0{constructor(t){this.scene=t,this.dust=new Dl(t,900,!1),this.sparks=new Dl(t,500,!0),this.rings=[],this.skid=new g0(t),this.lastSkid=[null,null]}update(t){this.dust.update(t),this.sparks.update(t),this.skid.update(t)}reset(){this.skid.clear(),this.lastSkid=[null,null]}driftSmoke(t,e,i,n=1){const r=1+Math.floor(n*1.1);for(let a=0;a<r;a++)this.dust.spawn({x:t.x+(Math.random()-.5)*.7,y:t.y+.18,z:t.z+(Math.random()-.5)*.7,vx:i.x*.14+(Math.random()-.5)*1.8,vy:.8+Math.random()*1,vz:i.z*.14+(Math.random()-.5)*1.8,life:.8+Math.random()*.9,size0:.45,size1:1.9+Math.random()*1.1,r:.8,g:.68,b:.52,alpha:.13+Math.random()*.09,drag:1.9,gravity:-.5})}tireDust(t,e,i=1){for(let n=0;n<2;n++)this.dust.spawn({x:t.x+(Math.random()-.5)*1.4,y:t.y+.25,z:t.z+(Math.random()-.5)*1.4,vx:e.x*.22+(Math.random()-.5)*3,vy:.8+Math.random()*1.6,vz:e.z*.22+(Math.random()-.5)*3,life:1+Math.random()*.7,size0:.5,size1:2.4,r:.76,g:.61,b:.45,alpha:.16,drag:1.7,gravity:-.4})}landingDust(t,e=8){const i=Rt(Math.floor(e*1.4),6,26);for(let n=0;n<i;n++){const r=n/i*Math.PI*2+Math.random()*.4,a=2+Math.random()*4;this.dust.spawn({x:t.x+Math.cos(r)*1.2,y:t.y+.15,z:t.z+Math.sin(r)*1.2,vx:Math.cos(r)*a+(Math.random()-.5),vy:.6+Math.random()*1.8,vz:Math.sin(r)*a+(Math.random()-.5),life:1.1+Math.random()*.8,size0:.8,size1:3.1,r:.8,g:.66,b:.5,alpha:.2,drag:2.2,gravity:-.3})}}wallSparks(t,e,i){for(let n=0;n<14;n++){const r=i||{x:0,z:1};this.sparks.spawn({x:t.x,y:t.y+.5+Math.random()*.8,z:t.z,vx:-e*Math.cos(Math.random()*1.4)*(2+Math.random()*5)+r.x*8,vy:1+Math.random()*4,vz:-e*Math.sin(Math.random()*1.4)*(2+Math.random()*5)+r.z*8,life:.35+Math.random()*.5,size0:.35,size1:.05,r:1,g:.72,b:.25,alpha:1,drag:.7,gravity:16})}}boostTrail(t,e,i){for(let n=0;n<5;n++){const r=t.x-e.x*2.4+i*.42+(Math.random()-.5)*.3,a=t.z-e.z*2.4+(Math.random()-.5)*.3;this.sparks.spawn({x:r,y:t.y+.5+Math.random()*.2,z:a,vx:-e.x*6+(Math.random()-.5)*1.5,vy:.2+Math.random()*1,vz:-e.z*6+(Math.random()-.5)*1.5,life:.3+Math.random()*.32,size0:1.25+Math.random()*.45,size1:.1,r:.35,g:.95,b:.95,alpha:.9,drag:2,gravity:-1})}for(let n=0;n<3;n++)this.dust.spawn({x:t.x-e.x*2.2,y:t.y+.4,z:t.z-e.z*2.2,vx:-e.x*3,vy:.6,vz:-e.z*3,life:.5,size0:.6,size1:2.2,r:1,g:.75,b:.5,alpha:.18,drag:2})}crashBurst(t,e){for(let i=0;i<22;i++)this.sparks.spawn({x:t.x+(Math.random()-.5),y:t.y+.8,z:t.z+(Math.random()-.5),vx:(Math.random()-.5)*14+e.x*4,vy:3+Math.random()*7,vz:(Math.random()-.5)*14+e.z*4,life:.4+Math.random()*.5,size0:.5,size1:.05,r:1,g:.6,b:.2,alpha:1,drag:.8,gravity:15});this.landingDust(t,18)}jumpDust(t){for(let e=0;e<8;e++)this.dust.spawn({x:t.x+(Math.random()-.5)*2,y:t.y+.3,z:t.z+(Math.random()-.5)*2,vx:(Math.random()-.5)*4,vy:.4+Math.random()*2,vz:(Math.random()-.5)*4,life:.7,size0:.8,size1:3,r:.8,g:.68,b:.52,alpha:.22,drag:2})}addRing(t,e="#ffd08a",i=14){const n=new Ue({color:e,transparent:!0,opacity:.55,side:Ne,depthWrite:!1}),r=new At(new lo(.6,1,32),n);r.rotation.x=-Math.PI/2,r.position.set(t.x,t.y+.2,t.z),this.scene.add(r),this.rings.push({mesh:r,life:0,maxLife:.8,maxScale:i})}updateRings(t){for(let e=this.rings.length-1;e>=0;e--){const i=this.rings[e];i.life+=t;const n=i.life/i.maxLife,r=1+n*i.maxScale;i.mesh.scale.set(r,r,r),i.mesh.material.opacity=.5*(1-n),n>=1&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.rings.splice(e,1))}}skidTrail(t,e,i,n=1){const r=this.lastSkid[t],a=e.y+.045;if(!r){this.lastSkid[t]={x:e.x,z:e.z,y:a};return}const o=e.x-r.x,l=e.z-r.z,c=Math.hypot(o,l);c>.34&&c<4&&(this.skid.add(r.x,r.z,a,o/c,l/c,.3,.8*n),this.skid.add(r.x+i.x*.55,r.z+i.z*.55,a,o/c,l/c,.24,.7*n),this.lastSkid[t]={x:e.x,z:e.z,y:a})}endSkid(){this.lastSkid=[null,null]}}const Kn=["chase","far","hood"];function Gs(s){return new P(Math.sin(s),0,Math.cos(s))}class v0{constructor(t,e,i){this.camera=t,this.track=e,this.env=i,this.modeIndex=0,this.mode=Kn[0],this.yaw=0,this.pos=new P,this.look=new P,this.basePos=new P,this.baseLook=new P,this.trauma=0,this.time=0,this.fov=t.fov,this.roll=0,this.introAngle=0,this.snapped=!1}cycle(){return this.modeIndex=(this.modeIndex+1)%Kn.length,this.mode=Kn[this.modeIndex],this.snapped=!1,this.mode}setMode(t){this.modeIndex=Rt(t,0,Kn.length-1),this.mode=Kn[this.modeIndex]}addShake(t){this.trauma=Rt(this.trauma+t,0,1.2)}reset(){this.snapped=!1,this.trauma=0,this.introAngle=0}snapTo(t,e=8){const i=Gs(t.yaw);this.yaw=t.yaw,this.pos.copy(t.pos).addScaledVector(i,-e),this.pos.y=t.pos.y+3.1,this.basePos.copy(this.pos),this.baseLook.copy(t.pos).add(new P(0,1.4,0)),this.snapped=!0}update(t,e,i={}){this.time+=t;const{intro:n=!1,finished:r=!1,paused:a=!1}=i,o=Rt(e.speed/82,0,1.15),l=this.camera;if(this.trauma=Math.max(0,this.trauma-t*1.5),n){this.introAngle+=t*.06;const w=e.pos,C=10.3,b=Gs(e.yaw),S=new P(b.z,0,-b.x),R=Math.sin(this.introAngle)*.42,I=new P().copy(w).addScaledVector(b,-Math.cos(R)*C).addScaledVector(S,Math.sin(R)*C);I.y=w.y+3.5+Math.sin(this.introAngle*.7)*.25;const O=this.env?this.env.terrainHeightAt(I.x,I.z):-100;I.y=Math.max(I.y,O+2.2),this.snapped?(this.pos.x=pe(this.pos.x,I.x,6,t),this.pos.z=pe(this.pos.z,I.z,6,t),this.pos.y=pe(this.pos.y,I.y,5,t)):(this.pos.copy(I),this.snapped=!0),this.look.lerp(new P(w.x+b.x*11,w.y+1.55,w.z+b.z*11),1-Math.exp(-5*t)),l.position.copy(this.pos),l.up.set(0,1,0),l.lookAt(this.look),this.setFov(52,t);return}if(r){this.introAngle+=t*.28;const w=e.pos,C=10,b=e.yaw+Math.PI*.6+this.introAngle*.5,S=new P(w.x+Math.cos(b)*C,w.y+3.4,w.z+Math.sin(b)*C),R=this.env?this.env.terrainHeightAt(S.x,S.z):-100;S.y=Math.max(S.y,R+2),this.pos.lerp(S,1-Math.exp(-3*t)),this.look.lerp(new P(w.x,w.y+1.1,w.z),1-Math.exp(-5*t)),l.position.copy(this.pos),l.up.set(0,1,0),l.lookAt(this.look),this.setFov(54,t);return}if(this.mode==="hood"){const w=Gs(e.yaw),C=new P(0,1,0),b=new P().copy(e.pos).addScaledVector(w,.45).addScaledVector(C,1.35);this.pos.lerp(b,1-Math.exp(-24*t)),this.look.copy(this.pos).addScaledVector(w,24).addScaledVector(C,1.2+e.slope*6),this.applyShake(t,.025*(1+o)),l.position.copy(this.pos),l.up.set(0,1,0),l.lookAt(this.look),this.roll=-e.lateralSpeed*.0022,l.rotateZ(this.roll),this.setFov(66+o*6+(e.boosting?2:0),t);return}const c=this.mode==="far",u=(c?12.5:7.4)+o*(c?3:2),h=(c?5.4:3)+o*.5;let d=e.yaw;if(e.speed>9){const w=Math.atan2(e.vel.x,e.vel.z);Math.abs(tr(w,e.yaw))<=Math.PI*.6&&(d=w)}const p=c?.48:.28,g=An(e.yaw+tr(d,e.yaw)*p),_=c?3.4:e.grounded?6.2:3.8;this.snapped?this.yaw=An(this.yaw+tr(g,this.yaw)*(1-Math.exp(-_*t))):this.yaw=g;const m=Gs(this.yaw),f=new P(m.z,0,-m.x),v=new P().copy(e.pos).addScaledVector(m,-u).addScaledVector(f,Rt(e.lateralSpeed*.045,-1.2,1.2));if(v.y=e.pos.y+h+(e.grounded?0:Rt(e.airTime*.4,0,1.4)),this.track){const w=this.track.nearest(v.x,v.z,e.s),C=Math.max(3.5,w.sample.width/2-1.15);if(Math.abs(w.lat)>C){const b=(Math.abs(w.lat)-C)*Math.sign(w.lat);v.x-=w.sample.right.x*b,v.z-=w.sample.right.z*b}}const M=this.env?this.env.terrainHeightAt(v.x,v.z):-100;if(v.y<M+1.6&&(v.y=M+1.6),!this.snapped)this.pos.copy(v),this.look.copy(e.pos),this.snapped=!0;else{const w=c?4.5:11;this.pos.x=pe(this.pos.x,v.x,w,t),this.pos.z=pe(this.pos.z,v.z,w,t),this.pos.y=pe(this.pos.y,v.y,e.grounded?6.5:4,t),this.look.x=pe(this.look.x,e.pos.x,14,t),this.look.y=pe(this.look.y,e.pos.y+1.35,e.grounded?8:5,t),this.look.z=pe(this.look.z,e.pos.z,14,t)}const x=new P().copy(e.pos).addScaledVector(m,8+o*8).addScaledVector(new P(0,1,0),1.2);this.look.lerp(x,1-Math.exp(-3.5*t)),this.applyShake(t,.018*(1+o)),l.position.copy(this.pos),l.position.add(this.shakeOffset),l.up.set(0,1,0),l.lookAt(this.look);const L=-e.bank*.24-Rt(e.lateralSpeed*.002,-.035,.035);this.roll=pe(this.roll,e.grounded?L:L*.4,5,t),l.rotateZ(this.roll);const A=c?60:62;this.setFov(A+o*6+(e.boosting?2.5:0),t,a)}applyShake(t,e){const i=this.trauma*this.trauma;if(this.shakeOffset||(this.shakeOffset=new P),i<5e-4){this.shakeOffset.multiplyScalar(1-Math.min(1,t*10));return}const n=this.time*39,r=i*e*3.2;this.shakeOffset.set(Math.sin(n*1.7)*r,Math.sin(n*2.3+1.7)*r*.7,Math.sin(n*2.9+3.1)*r*.5)}setFov(t,e,i=!1){this.fov=pe(this.fov,t,4,e),Math.abs(this.camera.fov-this.fov)>.02&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}}const Hs=s=>440*Math.pow(2,(s-69)/12),x0=[40,-1,40,41,40,-1,43,40,38,-1,40,41,43,45,40,47],Il=[64,-1,68,69,71,69,68,64,65,-1,64,62,-1,64,65,68],M0=[69,71,72,74,72,71,69,68,65,64,65,68,69,-1,68,64];class S0{constructor(){this.ready=!1,this.musicVolume=.65,this.sfxVolume=.8,this.intensity=0,this.paused=!1,this.step=0,this.nextNoteTime=0,this.timer=null,this.musicStarted=!1,this.engineRpm=0,this.muted=!1}init(){if(this.ready)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=.9,this.limiter=e.createDynamicsCompressor(),this.limiter.threshold.value=-12,this.limiter.knee.value=20,this.limiter.ratio.value=4,this.limiter.attack.value=.004,this.limiter.release.value=.22,this.master.connect(this.limiter),this.limiter.connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVolume,this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=0,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this.makeImpulse(1.7,2.6),this.reverbGain=e.createGain(),this.reverbGain.gain.value=.24,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.musicReverb=e.createGain(),this.musicReverb.gain.value=.16,this.musicReverb.connect(this.reverb),this.noiseBuffer=this.makeNoise(2.5),this.setupEngine(),this.setupTires(),this.setupWind(),this.setupBoost(),this.ready=!0,this.startMusic(),this.musicBus.gain.setTargetAtTime(this.musicVolume*.5,e.currentTime,2)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}makeNoise(t){const e=this.ctx,i=Math.floor(e.sampleRate*t),n=e.createBuffer(1,i,e.sampleRate),r=n.getChannelData(0);let a=0;for(let o=0;o<i;o++){const l=Math.random()*2-1;a=.96*a+.04*l,r[o]=l*.7+a*3.2}return n}makeImpulse(t,e){const i=this.ctx,n=i.sampleRate,r=Math.floor(n*t),a=i.createBuffer(2,r,n);for(let o=0;o<2;o++){const l=a.getChannelData(o);for(let c=0;c<r;c++)l[c]=(Math.random()*2-1)*Math.pow(1-c/r,e)*(c<n*.01?c/(n*.01):1)}return a}makeLoopNoise(){const t=this.ctx.createBufferSource();return t.buffer=this.noiseBuffer,t.loop=!0,t.start(),t}setupEngine(){const t=this.ctx;this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineFilter=t.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=800,this.engineFilter.Q.value=4,this.engineGain.connect(this.engineFilter),this.engineFilter.connect(this.sfxBus),this.osc1=t.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.value=60,this.osc2=t.createOscillator(),this.osc2.type="sawtooth",this.osc2.frequency.value=62,this.osc2.detune.value=9,this.osc3=t.createOscillator(),this.osc3.type="square",this.osc3.frequency.value=30;const e=t.createGain();e.gain.value=.55,this.osc1.connect(this.engineFilter),this.osc2.connect(this.engineFilter),this.osc3.connect(e),e.connect(this.engineFilter),this.osc1.start(),this.osc2.start(),this.osc3.start(),this.engineNoise=this.makeLoopNoise(),this.engineNoiseGain=t.createGain(),this.engineNoiseGain.gain.value=0;const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=420,i.Q.value=1.1,this.engineNoise.connect(i),i.connect(this.engineNoiseGain),this.engineNoiseGain.connect(this.sfxBus),this.engineNoiseBp=i}setupTires(){const t=this.ctx;this.tireNoise=this.makeLoopNoise(),this.tireFilter=t.createBiquadFilter(),this.tireFilter.type="bandpass",this.tireFilter.frequency.value=1700,this.tireFilter.Q.value=7,this.tireGain=t.createGain(),this.tireGain.gain.value=0,this.tireNoise.connect(this.tireFilter),this.tireFilter.connect(this.tireGain),this.tireGain.connect(this.sfxBus),this.tireGain.connect(this.reverb),this.sandNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=520,this.sandGain=t.createGain(),this.sandGain.gain.value=0,this.sandNoise.connect(e),e.connect(this.sandGain),this.sandGain.connect(this.sfxBus)}setupWind(){const t=this.ctx;this.windNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700;const i=t.createBiquadFilter();i.type="highpass",i.frequency.value=120,this.windGain=t.createGain(),this.windGain.gain.value=.02,this.windNoise.connect(i),i.connect(e),e.connect(this.windGain),this.windGain.connect(this.sfxBus)}setupBoost(){const t=this.ctx;this.boostNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="bandpass",e.frequency.value=900,e.Q.value=1.4,this.boostGain=t.createGain(),this.boostGain.gain.value=0,this.boostNoise.connect(e),e.connect(this.boostGain),this.boostGain.connect(this.sfxBus),this.boostFilter=e}updateEngine(t){if(!this.ready)return;const e=this.ctx.currentTime,{speed:i=0,throttle:n=0,boosting:r=!1,slip:a=0,grounded:o=!0,offRoad:l=!1,slipFactor:c=0,active:u=!0}=t,h=i*3.6,d=Rt(Math.floor(h/52),0,5),p=(h-d*52)/52,g=Rt(.16+p*.84+n*.06,0,1.1),_=44+g*(86+d*9)+(r?16:0);this.engineFilter.frequency.setTargetAtTime(500+g*1500+n*700,e,.06),this.osc1.frequency.setTargetAtTime(_,e,.045),this.osc2.frequency.setTargetAtTime(_*1.01,e,.045),this.osc3.frequency.setTargetAtTime(_*.5,e,.045),this.engineNoiseBp.frequency.setTargetAtTime(300+g*800,e,.08);const m=u?(.11+n*.1+g*.05)*(this.paused?.4:1):0;this.engineGain.gain.setTargetAtTime(m,e,.1),this.engineNoiseGain.gain.setTargetAtTime(u?.035+n*.03:0,e,.1);const f=o?Rt((c-.08)*.55,0,.28)*Rt(i/22,0,1):0;this.tireGain.gain.setTargetAtTime(u?f:0,e,.05),this.tireFilter.frequency.setTargetAtTime(1400+c*900,e,.1),this.sandGain.gain.setTargetAtTime(u&&l?.16:0,e,.1);const v=Rt(i/78,0,1);this.windGain.gain.setTargetAtTime(.015+v*v*.16,e,.2),this.boostGain.gain.setTargetAtTime(r?.15:0,e,.09),this.boostFilter.frequency.setTargetAtTime(r?1500:500,e,.2)}boostWhoosh(){if(!this.ready)return;const t=this.ctx,e=t.currentTime,i=t.createBufferSource();i.buffer=this.noiseBuffer;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(400,e),n.frequency.exponentialRampToValueAtTime(2600,e+.35),n.Q.value=2;const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.34,e+.05),r.gain.exponentialRampToValueAtTime(.001,e+.5),i.connect(n),n.connect(r),r.connect(this.sfxBus),i.start(e),i.stop(e+.55);const a=t.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(90,e),a.frequency.exponentialRampToValueAtTime(220,e+.4);const o=t.createGain();o.gain.setValueAtTime(.08,e),o.gain.exponentialRampToValueAtTime(.001,e+.45),a.connect(o),o.connect(this.sfxBus),a.start(e),a.stop(e+.5)}tone({freq:t=440,type:e="sine",dur:i=.2,gain:n=.1,when:r=0,slide:a=null,filter:o=null}){if(!this.ready)return;const l=this.ctx,c=l.currentTime+r,u=l.createOscillator();u.type=e,u.frequency.setValueAtTime(t,c),a&&u.frequency.exponentialRampToValueAtTime(Math.max(20,a),c+i);const h=l.createGain();h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(n,c+.012),h.gain.exponentialRampToValueAtTime(8e-4,c+i);let d=u;if(o){const p=l.createBiquadFilter();p.type="lowpass",p.frequency.value=o,u.connect(p),d=p}d.connect(h),h.connect(this.sfxBus),u.start(c),u.stop(c+i+.05)}noiseBurst({dur:t=.2,gain:e=.2,freq:i=1200,type:n="bandpass",q:r=1,when:a=0}){if(!this.ready)return;const o=this.ctx,l=o.currentTime+a,c=o.createBufferSource();c.buffer=this.noiseBuffer;const u=o.createBiquadFilter();u.type=n,u.frequency.value=i,u.Q.value=r;const h=o.createGain();h.gain.setValueAtTime(e,l),h.gain.exponentialRampToValueAtTime(.001,l+t),c.connect(u),u.connect(h),h.connect(this.sfxBus),c.start(l),c.stop(l+t+.02)}landing(t=10){const e=Rt(t/20,.2,1.3);this.tone({freq:120,slide:40,type:"sine",dur:.28,gain:.22*e}),this.noiseBurst({dur:.22,gain:.18*e,freq:420,q:.7})}impact(t=1){this.noiseBurst({dur:.32,gain:.3*t,freq:240,q:.8}),this.tone({freq:90,slide:30,type:"square",dur:.25,gain:.16*t}),this.tone({freq:2400,slide:900,type:"triangle",dur:.12,gain:.05*t})}wallScrape(){this.noiseBurst({dur:.1,gain:.08,freq:3200,q:6})}checkpoint(){this.tone({freq:740,type:"triangle",dur:.16,gain:.14}),this.tone({freq:988,type:"triangle",dur:.22,gain:.12,when:.09}),this.tone({freq:1480,type:"sine",dur:.3,gain:.08,when:.18})}lap(){[659,784,988,1319].forEach((e,i)=>this.tone({freq:e,type:"triangle",dur:.3,gain:.13,when:i*.11}))}driftChain(t=2){const e=520+t*90;this.tone({freq:e,type:"sine",dur:.12,gain:.07}),this.tone({freq:e*1.5,type:"sine",dur:.16,gain:.05,when:.05})}nearMiss(){this.tone({freq:1800,slide:900,type:"sine",dur:.16,gain:.07}),this.noiseBurst({dur:.16,gain:.05,freq:2600,q:2})}countdown(t=!1){t?(this.tone({freq:880,type:"square",dur:.5,gain:.15,filter:3e3}),this.tone({freq:1320,type:"triangle",dur:.6,gain:.1}),this.noiseBurst({dur:.5,gain:.1,freq:800,q:.7})):this.tone({freq:440,type:"square",dur:.18,gain:.13,filter:2200})}uiClick(){this.tone({freq:520,type:"triangle",dur:.06,gain:.07})}uiBack(){this.tone({freq:380,slide:240,type:"triangle",dur:.1,gain:.06})}finish(){[523,659,784,1046,1319,1568].forEach((e,i)=>this.tone({freq:e,type:"triangle",dur:.5,gain:.12,when:i*.14})),this.noiseBurst({dur:1.2,gain:.08,freq:700,q:.6,when:.1})}setPaused(t){if(this.paused=t,!this.ready)return;const e=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(t?this.musicVolume*.12:this.musicVolume*(this.intensity>0?.5:.62),e,.3),this.sfxBus.gain.setTargetAtTime(t?0:this.sfxVolume,e,.2),this.engineGain.gain.setTargetAtTime(0,e,.1)}setVolumes(t,e){if(this.musicVolume=t,this.sfxVolume=e,!this.ready)return;const i=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.paused?t*.12:t*(this.intensity>0?.5:.62),i,.2),this.sfxBus.gain.setTargetAtTime(this.paused?0:e,i,.15)}setIntensity(t){this.intensity=t,this.ready&&this.musicBus.gain.setTargetAtTime(this.paused?this.musicVolume*.12:this.musicVolume*(t>0?.52:.62),this.ctx.currentTime,1.2)}startMusic(){!this.ready||this.musicStarted||(this.musicStarted=!0,this.nextNoteTime=this.ctx.currentTime+.15,this.step=0,this.timer=setInterval(()=>this.scheduler(),25),this.scheduler())}scheduler(){if(!this.ready)return;const t=60/124/4;for(;this.nextNoteTime<this.ctx.currentTime+.16;)this.playStep(this.step,this.nextNoteTime,t),this.nextNoteTime+=t,this.step=(this.step+1)%64}playStep(t,e,i){this.ctx;const n=Math.floor(t/16),r=t%16,a=this.intensity,o=a>=2;(r===0||r===6||r===8||r===14&&a>0||r===11&&o)&&this.musicKick(e),(r===4||r===12)&&this.musicSnare(e,o),r%2===0&&a>0?this.musicHat(e,r%4===0?.06:.035):a===0&&r%4===2&&this.musicHat(e,.02),o&&r%2===1&&this.musicHat(e,.018);const l=x0[r];if(l>=0&&this.musicBass(e,l,i*1.7,a),r===0){const c=[40,41,40,38][n%4];this.musicPad(e,[c,c+7,c+12,c+15],i*16)}if(a>=1){const u=(n%4<2?Il:M0)[r];u>0&&this.musicLead(e,u+(n%2===1?12:0),i*(o?1.4:2),a)}else if(n%2===0){const u=Il[r];u>0&&r%4===0&&this.musicLead(e,u,i*3,0)}a>0&&r>=13&&n%4===3&&this.musicTom(e,120+(15-r)*20,.09)}musicKick(t){const e=this.ctx,i=e.createOscillator(),n=e.createGain();i.type="sine",i.frequency.setValueAtTime(150,t),i.frequency.exponentialRampToValueAtTime(42,t+.16),n.gain.setValueAtTime(.55,t),n.gain.exponentialRampToValueAtTime(.001,t+.3),i.connect(n),n.connect(this.musicBus),i.start(t),i.stop(t+.32)}musicSnare(t,e){const i=this.ctx,n=i.createBufferSource();n.buffer=this.noiseBuffer;const r=i.createBiquadFilter();r.type="bandpass",r.frequency.value=2100,r.Q.value=1.2;const a=i.createGain();a.gain.setValueAtTime(e?.22:.15,t),a.gain.exponentialRampToValueAtTime(.001,t+.18),n.connect(r),r.connect(a),a.connect(this.musicBus),n.start(t),n.stop(t+.2);const o=i.createOscillator(),l=i.createGain();o.type="triangle",o.frequency.setValueAtTime(190,t),l.gain.setValueAtTime(.09,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),o.connect(l),l.connect(this.musicBus),o.start(t),o.stop(t+.14)}musicHat(t,e){const i=this.ctx,n=i.createBufferSource();n.buffer=this.noiseBuffer;const r=i.createBiquadFilter();r.type="highpass",r.frequency.value=7200;const a=i.createGain();a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(.001,t+.05),n.connect(r),r.connect(a),a.connect(this.musicBus),n.start(t),n.stop(t+.06)}musicBass(t,e,i,n){const r=this.ctx,a=r.createOscillator(),o=r.createOscillator();a.type="sawtooth",o.type="square",a.frequency.value=Hs(e),o.frequency.value=Hs(e)*.5;const l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1200,t),l.frequency.exponentialRampToValueAtTime(260,t+i),l.Q.value=5;const c=r.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(n>0?.24:.14,t+.01),c.gain.exponentialRampToValueAtTime(.001,t+i),a.connect(l),o.connect(l),l.connect(c),c.connect(this.musicBus),a.start(t),o.start(t),a.stop(t+i+.02),o.stop(t+i+.02)}musicPad(t,e,i){const n=this.ctx,r=n.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.055,t+.8),r.gain.linearRampToValueAtTime(0,t+i);const a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.7,r.connect(a),a.connect(this.musicBus),a.connect(this.musicReverb);for(const o of e){const l=n.createOscillator();l.type="sawtooth",l.frequency.value=Hs(o),l.detune.value=(Math.random()-.5)*14,l.connect(r),l.start(t),l.stop(t+i+.1)}}musicLead(t,e,i,n){const r=this.ctx,a=r.createGain(),o=n>0?.085:.05;a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(o,t+.02),a.gain.exponentialRampToValueAtTime(.001,t+i);const l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(3200,t),l.frequency.exponentialRampToValueAtTime(1400,t+i),l.Q.value=2,a.connect(l),l.connect(this.musicBus),l.connect(this.musicReverb);for(const[c,u,h]of[["sawtooth",0,1],["triangle",7,2]]){const d=r.createOscillator();d.type=c,d.frequency.value=Hs(e)*h,d.detune.value=u,d.connect(a),d.start(t),d.stop(t+i+.05)}}musicTom(t,e,i){const n=this.ctx,r=n.createOscillator(),a=n.createGain();r.type="sine",r.frequency.setValueAtTime(e,t),r.frequency.exponentialRampToValueAtTime(e*.55,t+.16),a.gain.setValueAtTime(i,t),a.gain.exponentialRampToValueAtTime(.001,t+.2),r.connect(a),a.connect(this.musicBus),r.start(t),r.stop(t+.22)}}const y0={ArrowUp:"throttle",KeyW:"throttle",ArrowDown:"brake",KeyS:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",Space:"drift",ShiftLeft:"boost",ShiftRight:"boost",KeyC:"camera",KeyR:"restart",Escape:"pause",KeyP:"pause",KeyM:"mute",Enter:"confirm",KeyH:"help",Tab:"help"},b0={pause:["Escape","KeyP"],camera:["KeyC"],restart:["KeyR"],confirm:["Enter","NumpadEnter"],back:["Escape","Backspace"],help:["KeyH","Tab"],mute:["KeyM"],up:["ArrowUp","KeyW"],down:["ArrowDown","KeyS"],left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"]},Ws=-1;class T0{constructor(t){this.canvas=t,this.keys=new Set,this.buffer=new Map,this.state={steer:0,throttle:0,brake:0,handbrake:!1,boost:!1},this.rawSteer=0,this.touch={left:!1,right:!1,throttle:!1,brake:!1,drift:!1,boost:!1},this.mouse={down:!1,right:!1,x:.5,y:.5,active:!1},this.gamepadIndex=null,this.pad={steer:0,throttle:0,brake:0,drift:!1,boost:!1},this.boostLatch=0,this.driftLatch=0,this.lastDevice="keyboard",this.onFirstInput=null,this.interacted=!1,window.addEventListener("keydown",e=>this.onKeyDown(e),{passive:!1}),window.addEventListener("keyup",e=>this.onKeyUp(e)),window.addEventListener("blur",()=>{this.keys.clear(),this.state.handbrake=!1,this.state.boost=!1}),t.addEventListener("pointerdown",e=>{var i;this.notify(),e.button===0?(this.mouse.down=!0,this.mouse.active=!0,this.mouse.x=e.clientX/window.innerWidth*2-1,this.lastDevice="mouse",(i=t.setPointerCapture)==null||i.call(t,e.pointerId)):e.button===2&&(this.mouse.right=!0)}),t.addEventListener("pointerup",e=>{e.button===0&&(this.mouse.down=!1),e.button===2&&(this.mouse.right=!1)}),t.addEventListener("pointercancel",()=>{this.mouse.down=!1,this.mouse.right=!1}),t.addEventListener("pointermove",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=e.clientY/window.innerHeight*2-1,this.mouse.down&&(this.mouse.active=!0)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("gamepadconnected",e=>{this.gamepadIndex=e.gamepad.index,this.lastDevice="gamepad",this.notify()}),window.addEventListener("gamepaddisconnected",()=>{this.gamepadIndex=null}),window.addEventListener("pointerdown",()=>this.notify(),{once:!0}),window.addEventListener("keydown",()=>this.notify(),{once:!0})}notify(){var t;this.interacted=!0,(t=this.onFirstInput)==null||t.call(this)}onKeyDown(t){if(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))return;const e=y0[t.code];if(e){if((["throttle","brake","left","right","drift","boost","help"].includes(e)||t.code==="Space")&&t.preventDefault(),!this.keys.has(t.code)){e==="boost"&&(this.boostLatch=.18),e==="drift"&&(this.driftLatch=.18);for(const[i,n]of Object.entries(b0))n.includes(t.code)&&this.buffer.set(i,performance.now());t.code==="Space"&&this.buffer.set("confirm",performance.now())}this.keys.add(t.code),this.lastDevice="keyboard",this.mouse.active=!1}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&this.buffer.set(t.code.replace("Arrow","").toLowerCase(),performance.now())}onKeyUp(t){this.keys.delete(t.code)}key(...t){return t.some(e=>this.keys.has(e))}consume(t,e=220){const i=this.buffer.get(t);return i===void 0?!1:performance.now()-i>e?(this.buffer.delete(t),!1):(this.buffer.delete(t),!0)}clearBuffer(){this.buffer.clear()}setTouch(t,e){t in this.touch&&(this.touch[t]=e),e&&(this.lastDevice="touch")}resetTouch(){for(const t of Object.keys(this.touch))this.touch[t]=!1}pollGamepad(){var l,c,u,h,d,p,g,_,m,f;if(!navigator.getGamepads)return;const t=navigator.getGamepads();let e=this.gamepadIndex!==null?t[this.gamepadIndex]:null;if(!e){for(const v of t)if(v&&v.connected){e=v,this.gamepadIndex=v.index;break}}if(!e||!e.connected){this.pad.steer=0,this.pad.throttle=0,this.pad.brake=0,this.pad.drift=!1,this.pad.boost=!1;return}const i=e.axes[0]||0,n=.16;let r=Math.abs(i)<n?0:Math.sign(i)*(Math.abs(i)-n)/(1-n);r=Math.sign(r)*Math.pow(Math.abs(r),1.35),this.pad.steer=r*Ws,this.pad.throttle=((l=e.buttons[7])==null?void 0:l.value)||0,this.pad.brake=((c=e.buttons[6])==null?void 0:c.value)||0;const a=v=>{var M;return!!((M=e.buttons[v])!=null&&M.pressed)};this.pad.drift=a(0),this.pad.boost=a(1)||a(5),(this.pad.drift||this.pad.boost||Math.abs(r)>.2||this.pad.throttle>.1)&&(this.lastDevice="gamepad"),(u=e.buttons[0])!=null&&u.pressed&&this.buffer.set("confirm",performance.now()),(h=e.buttons[9])!=null&&h.pressed&&this.buffer.set("pause",performance.now()),(d=e.buttons[3])!=null&&d.pressed&&this.buffer.set("restart",performance.now()),(p=e.buttons[2])!=null&&p.pressed&&this.buffer.set("camera",performance.now());const o=e.axes[1]||0;o<-.6&&this.buffer.set("up",performance.now()),o>.6&&this.buffer.set("down",performance.now()),(g=e.buttons[12])!=null&&g.pressed&&this.buffer.set("up",performance.now()),(_=e.buttons[13])!=null&&_.pressed&&this.buffer.set("down",performance.now()),(m=e.buttons[14])!=null&&m.pressed&&this.buffer.set("left",performance.now()),(f=e.buttons[15])!=null&&f.pressed&&this.buffer.set("right",performance.now())}update(t){this.pollGamepad();const e=this.touch,i=this.key("ArrowLeft","KeyA"),n=this.key("ArrowRight","KeyD");let r=((n?1:0)-(i?1:0))*Ws;(i||n)&&(this.lastDevice="keyboard");const a=this.mouse.down&&this.mouse.active&&this.lastDevice==="mouse"?Rt(this.mouse.x*1.5,-1,1)*Ws:null,o=Math.abs(this.pad.steer)>.02?this.pad.steer:null;let l,c=8;e.left||e.right?(l=((e.right?1:0)-(e.left?1:0))*Ws,c=9):a!==null?(l=a,c=12,this.lastDevice="mouse"):o!==null?(l=o,c=13):(l=r,c=r===0?13:7.2),this.rawSteer=l,this.state.steer=pe(this.state.steer,l,c,t);const u=this.key("ArrowUp","KeyW"),h=this.key("ArrowDown","KeyS");let d=u?1:0,p=h?1:0;this.mouse.down&&(d=1),this.mouse.right&&(p=1),this.pad.throttle>.05&&(d=Math.max(d,this.pad.throttle)),this.pad.brake>.05&&(p=Math.max(p,this.pad.brake)),e.throttle&&(d=1),e.brake&&(p=1),this.state.throttle=pe(this.state.throttle,d,d>this.state.throttle?10:16,t),this.state.brake=pe(this.state.brake,p,p>this.state.brake?14:18,t),this.boostLatch=Math.max(0,this.boostLatch-t),this.driftLatch=Math.max(0,this.driftLatch-t),this.state.boost=this.key("ShiftLeft","ShiftRight")||this.pad.boost||e.boost||this.boostLatch>0,this.state.handbrake=this.key("Space")||this.pad.drift||e.drift||this.driftLatch>0;for(const[g,_]of this.buffer)performance.now()-_>900&&this.buffer.delete(g)}getDrivingState(){return{steer:this.state.steer,throttle:this.state.throttle,brake:this.state.brake,handbrake:this.state.handbrake,boost:this.state.boost}}}const Tt=(s,t=document)=>t.querySelector(s),Zn=(s,t=document)=>Array.from(t.querySelectorAll(s));class w0{constructor(t,e,i,n={}){this.track=t,this.audio=e,this.input=i,this.handlers=n,this.current="title",this.previous="title",this.settings=null,this.last={},this.hintTimer=0,this.deltaTimer=0,this.countdownText="",this.hud=Tt("#hud"),this.screens={title:Tt("#screen-title"),how:Tt("#screen-how"),settings:Tt("#screen-settings"),pause:Tt("#screen-pause"),results:Tt("#screen-results")},this.el={lap:Tt("#lap-value"),position:Tt("#position-value"),time:Tt("#time-value"),best:Tt("#best-value"),delta:Tt("#delta"),speed:Tt("#speed-value"),boost:Tt("#boost-fill"),boostPct:Tt("#boost-pct"),style:Tt("#style-value"),chain:Tt("#chain"),chainMult:Tt("#chain-mult"),chainTime:Tt("#chain-time"),toasts:Tt("#toasts"),hint:Tt("#hint"),countdown:Tt("#countdown"),recover:Tt("#recover"),cp:Tt("#cp-count"),titleBest:Tt("#title-best"),pauseSub:Tt("#pause-sub"),pauseTime:Tt("#pause-time"),pauseBest:Tt("#pause-best"),fade:Tt("#fade"),touch:Tt("#touch")},this.bindStatic(),this.bindTouch(),this.setupMinimap(),this.updateTouchVisibility(!1)}bindStatic(){var r;Zn("[data-action]").forEach(a=>{a.addEventListener("click",o=>{var c;o.preventDefault(),o.stopPropagation();const l=a.dataset.action;(c=this.audio)==null||c.uiClick(),this.handleAction(l)})}),(r=Tt("#btn-pause"))==null||r.addEventListener("click",a=>{var o,l,c;a.stopPropagation(),(o=this.audio)==null||o.uiClick(),(c=(l=this.handlers).onPause)==null||c.call(l)});const t=Tt("#toggle-assist");t==null||t.addEventListener("click",()=>{var o,l,c;const a=t.getAttribute("aria-checked")!=="true";t.setAttribute("aria-checked",String(a)),(o=this.audio)==null||o.uiClick(),(c=(l=this.handlers).onAssist)==null||c.call(l,a)}),Zn("#seg-camera button").forEach(a=>{a.addEventListener("click",()=>{var l,c,u;const o=Number(a.dataset.cam);Zn("#seg-camera button").forEach(h=>h.classList.toggle("is-on",h===a)),(l=this.audio)==null||l.uiClick(),(u=(c=this.handlers).onCamera)==null||u.call(c,o,!0)})});const e=Tt("#slider-music");e==null||e.addEventListener("input",()=>{var a,o;Tt("#music-val").textContent=e.value,(o=(a=this.handlers).onMusic)==null||o.call(a,Number(e.value)/100)});const i=Tt("#slider-sfx");i==null||i.addEventListener("input",()=>{var a,o;Tt("#sfx-val").textContent=i.value,(o=(a=this.handlers).onSfx)==null||o.call(a,Number(i.value)/100)});const n=Tt("#toggle-touch");n==null||n.addEventListener("click",()=>{var o,l,c;const a=n.getAttribute("aria-checked")!=="true";(o=this.audio)==null||o.uiClick(),(c=(l=this.handlers).onTouchToggle)==null||c.call(l,a)})}handleAction(t){var e,i,n,r,a,o,l,c,u,h,d,p,g;switch(t){case"start":(i=(e=this.handlers).onStart)==null||i.call(e);break;case"pause":(r=(n=this.handlers).onPause)==null||r.call(n);break;case"resume":(o=(a=this.handlers).onResume)==null||o.call(a);break;case"restart":(c=(l=this.handlers).onRestart)==null||c.call(l);break;case"quit":(h=(u=this.handlers).onQuit)==null||h.call(u);break;case"reset-records":(p=(d=this.handlers).onResetRecords)==null||p.call(d),this.toast("Records cleared",{label:"",value:"OK",big:!1});break;case"settings":this.openSettings();break;case"how":this.openHow();break;case"back":(g=this.audio)==null||g.uiBack(),this.back();break}}openSettings(){this.previous=this.current==="settings"?this.previous:this.current,this.showScreen("settings")}openHow(){this.previous=this.current,this.showScreen("how")}back(){const t=this.previous&&this.previous!=="settings"&&this.previous!=="how"?this.previous:"title";this.showScreen(t)}showScreen(t){this.current=t||null;for(const[e,i]of Object.entries(this.screens))i.classList.toggle("is-hidden",e!==t);document.body.dataset.screen=t||"race",this.hud.classList.toggle("is-off",!!t&&t!=="pause")}setHUD(t){this.hud.classList.toggle("is-hidden",!t)}setScreen(t){this.showScreen(t)}updateTouchVisibility(t){this.el.touch.classList.toggle("is-on",!!t)}setSettings(t){this.settings=t;const e=Tt("#toggle-assist");e&&e.setAttribute("aria-checked",String(!!t.assist)),Zn("#seg-camera button").forEach(a=>a.classList.toggle("is-on",Number(a.dataset.cam)===(t.camera||0)));const i=Tt("#slider-music");i&&(i.value=Math.round((t.music??.65)*100),Tt("#music-val").textContent=i.value);const n=Tt("#slider-sfx");n&&(n.value=Math.round((t.sfx??.8)*100),Tt("#sfx-val").textContent=n.value);const r=Tt("#toggle-touch");r&&r.setAttribute("aria-checked",String(!!t.touch))}setTitleBest(t){this.el.titleBest.textContent=t&&t.lap?`BEST LAP ${Qe(t.lap)}`:"BEST LAP —"}updateHUD(t){const e=this.el,i=`${t.lap}<i>/${t.totalLaps}</i>`;this.last.lap!==i&&(e.lap.innerHTML=i,this.last.lap=i);const n=Qe(t.time);this.last.time!==n&&(e.time.textContent=n,this.last.time=n);const r=`${t.position}<i>/${t.totalRacers}</i>`;this.last.position!==r&&(e.position.innerHTML=r,this.last.position=r);const a=t.bestLap?Qe(t.bestLap):"—";this.last.best!==a&&(e.best.textContent=a,this.last.best=a);const o=Math.round(Math.max(0,t.speed*3.6));this.last.speed!==o&&(e.speed.textContent=String(o),this.last.speed=o);const l=Rt(t.boost,0,100),c=Math.round(l);this.last.boost!==c&&(e.boost.style.width=`${l}%`,e.boostPct.textContent=`${c}%`,e.boost.classList.toggle("is-low",l<18),this.last.boost=c);const u=Math.round(t.style);this.last.style!==u&&(e.style.textContent=u.toLocaleString("en-US"),this.last.style=u);const h=`CP ${t.checkpoint}/${t.totalCheckpoints}`;this.last.cp!==h&&(e.cp.textContent=h,this.last.cp=h);const d=!!t.chain.active&&t.chain.chain>.28;if(e.chain.classList.toggle("is-on",d),d){const p=`x${t.chain.mult}`;e.chainMult.textContent!==p&&(e.chainMult.textContent=p),e.chainTime.textContent=`${t.chain.chain.toFixed(1)}s`}}showDelta(t){const e=this.el.delta;e.textContent=Cl(t),e.classList.remove("fast","slow"),e.classList.add(t<=0?"fast":"slow"),e.classList.add("is-on"),clearTimeout(this.deltaTimer),this.deltaTimer=setTimeout(()=>e.classList.remove("is-on"),2800)}countdown(t,e=!1){const i=this.el.countdown;if(!t){i.classList.remove("is-on","pop","go","word"),i.textContent="",this.countdownText="";return}i.classList.remove("is-on","pop","go","word"),i.textContent=t,i.offsetWidth,i.classList.add("is-on","pop"),i.classList.toggle("go",e),i.classList.toggle("word",t.length>3),this.countdownText=t}recover(t){this.el.recover.classList.toggle("is-on",t)}toast(t,e={}){const{value:i="",cls:n="",big:r=!1,duration:a=1.9}=e;if(!t&&!i)return;const o=document.createElement("div");for(o.className=`toast ${n} ${r?"big":""}`.trim(),o.innerHTML=i?`<b>${i}</b>${t}`:t,this.el.toasts.appendChild(o);this.el.toasts.children.length>3;)this.el.toasts.removeChild(this.el.toasts.firstElementChild);setTimeout(()=>o.remove(),Math.max(900,a*1e3))}hint(t,e=4){const i=this.el.hint;if(!t){i.classList.remove("is-on");return}i.innerHTML=t,i.classList.add("is-on"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>i.classList.remove("is-on"),e*1e3)}setPauseInfo({lap:t,totalLaps:e,time:i,bestLap:n}){this.el.pauseSub.textContent=`Sunbreak Canyon · Lap ${t} of ${e}`,this.el.pauseTime.textContent=Qe(i),this.el.pauseBest.textContent=n?Qe(n):"—"}setResults(t){Tt("#results-title").innerHTML=t.title||"Sunbreak <em>Flyer</em>",Tt("#results-total").textContent=Qe(t.total),Tt("#results-record").classList.toggle("is-on",!!t.newBest);const e=Tt("#results-lap-rows");e.innerHTML="";const i=t.best;t.laps.forEach((n,r)=>{if(!isFinite(n))return;const a=Math.abs(n-i)<.001,o=document.createElement("div");o.className=`results-lap${a?" is-best":""}`;const l=n-i;o.innerHTML=`
        <span>LAP ${r+1}</span>
        <strong>${Qe(n)}</strong>
        <span class="lap-delta ${l<-.001?"fast":l>.001?"slow":""}">${a?"BEST":Cl(l)}</span>`,e.appendChild(o)}),Tt("#results-best").textContent=Qe(i),Tt("#results-best-delta").textContent=t.bestLabel||"",Tt("#stat-style").textContent=Math.round(t.style).toLocaleString("en-US"),Tt("#stat-speed").innerHTML=`${Math.round(t.topSpeed)} <i>km/h</i>`,Tt("#stat-chain").innerHTML=`${t.bestChain.toFixed(1)} <i>s</i>`,Tt("#stat-air").innerHTML=`${t.airTime.toFixed(1)} <i>s</i>`,Tt("#stat-near").textContent=String(t.nearMisses),Tt("#stat-land").textContent=String(t.cleanLandings)}setupMinimap(){const t=Tt("#minimap");if(!t)return;this.map=t,this.mapCtx=t.getContext("2d"),this.mapW=t.width,this.mapH=t.height;const e=this.track.mapPoints;let i=1/0,n=-1/0,r=1/0,a=-1/0;for(const _ of e)i=Math.min(i,_.x),n=Math.max(n,_.x),r=Math.min(r,_.z),a=Math.max(a,_.z);const o=34,l=Math.min((this.mapW-o*2)/Math.max(1,n-i),(this.mapH-o*2)/Math.max(1,a-r)),c=(i+n)/2,u=(r+a)/2;this.mapScale=l,this.mapCenter={x:c,z:u},this.toMap=(_,m)=>({x:this.mapW/2+(_-c)*l,y:this.mapH/2+(m-u)*l});const h=document.createElement("canvas");h.width=this.mapW,h.height=this.mapH;const d=h.getContext("2d");d.lineJoin="round",d.lineCap="round";const p=new Path2D;e.forEach((_,m)=>{const f=this.toMap(_.x,_.z);m===0?p.moveTo(f.x,f.y):p.lineTo(f.x,f.y)}),p.closePath(),d.strokeStyle="rgba(20, 9, 5, 0.55)",d.lineWidth=18,d.stroke(p),d.strokeStyle="rgba(255, 168, 84, 0.16)",d.lineWidth=13,d.stroke(p),d.strokeStyle="rgba(244, 227, 194, 0.34)",d.lineWidth=7,d.stroke(p),d.strokeStyle="rgba(255, 218, 158, 0.92)",d.lineWidth=3,d.stroke(p),this.gateMap=this.track.gateS.map(_=>{const m=this.track.samplePos(_,0);return this.toMap(m.x,m.z)});for(const _ of this.gateMap)d.beginPath(),d.arc(_.x,_.y,3.1,0,Math.PI*2),d.fillStyle="rgba(30, 16, 10, 0.9)",d.fill(),d.beginPath(),d.arc(_.x,_.y,1.7,0,Math.PI*2),d.fillStyle="rgba(255, 203, 110, 0.85)",d.fill();const g=this.toMap(this.track.samplePos(this.track.gateS[0],0).x,this.track.samplePos(this.track.gateS[0],0).z);d.save(),d.translate(g.x,g.y),d.rotate(-.5),d.fillStyle="#8cf5d9",d.fillRect(-5,-1.2,10,2.4),d.restore(),this.mapBase=h}drawMinimap(t,e=0){if(!this.mapCtx)return;const i=this.mapCtx;if(i.clearRect(0,0,this.mapW,this.mapH),i.drawImage(this.mapBase,0,0),this.gateMap&&this.gateMap[e]){const l=this.gateMap[e];i.beginPath(),i.arc(l.x,l.y,7,0,Math.PI*2),i.strokeStyle="rgba(255, 203, 110, 0.55)",i.lineWidth=1.5,i.stroke()}const n=this.toMap(t.pos.x,t.pos.z),r=Math.sin(t.yaw),a=Math.cos(t.yaw),o=Math.atan2(a,r)+Math.PI/2;i.save(),i.translate(n.x,n.y),i.rotate(o),i.shadowColor="rgba(255, 160, 70, 0.95)",i.shadowBlur=10,i.beginPath(),i.moveTo(0,-7.5),i.lineTo(5.2,5.2),i.lineTo(0,2.6),i.lineTo(-5.2,5.2),i.closePath(),i.fillStyle="#ffb356",i.fill(),i.shadowBlur=0,i.lineWidth=1,i.strokeStyle="rgba(34, 15, 8, 0.85)",i.stroke(),i.restore()}bindTouch(){const t=Zn("#touch [data-touch]"),e=new Map;for(const i of t){const n=i.dataset.touch,r=o=>{var l,c;o.preventDefault(),o.stopPropagation(),i.classList.add("is-held"),(l=i.setPointerCapture)==null||l.call(i,o.pointerId),e.set(o.pointerId,n),this.input.setTouch(n,!0),(c=this.audio)==null||c.uiClick()},a=o=>{o.preventDefault(),o.stopPropagation(),i.classList.remove("is-held"),this.input.setTouch(n,!1),e.delete(o.pointerId)};i.addEventListener("pointerdown",r),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a),i.addEventListener("lostpointercapture",a),i.addEventListener("contextmenu",o=>o.preventDefault())}}fade(t){this.el.fade.classList.toggle("is-on",!!t)}}const is={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class nn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const E0=new eo(-1,1,1,-1,0,1);class A0 extends re{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}}const R0=new A0;class fr{constructor(t){this._mesh=new At(R0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,E0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ec extends nn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof de?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yi.clone(t.uniforms),this.material=new de({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new fr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ul extends nn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class C0 extends nn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class P0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new yt);this._width=i.width,this._height=i.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ec(is),this.copyPass.material.blending=Ie,this.clock=new Qm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ul!==void 0&&(a instanceof Ul?i=!0:a instanceof C0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class L0 extends nn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const D0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class I0 extends nn{constructor(){super();const t=D0;this.uniforms=yi.clone(t.uniforms),this.material=new qm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new fr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$l&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class U0{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,n){return t[0]*e+t[1]*i+t[2]*n}dot4(t,e,i,n,r){return t[0]*e+t[1]*i+t[2]*n+t[3]*r}noise(t,e){let i,n,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,p=c-h,g=t-d,_=e-p;let m,f;g>_?(m=1,f=0):(m=0,f=1);const v=g-m+u,M=_-f+u,x=g-1+2*u,L=_-1+2*u,A=l&255,w=c&255,C=this.perm[A+this.perm[w]]%12,b=this.perm[A+m+this.perm[w+f]]%12,S=this.perm[A+1+this.perm[w+1]]%12;let R=.5-g*g-_*_;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[C],g,_));let I=.5-v*v-M*M;I<0?n=0:(I*=I,n=I*I*this.dot(this.grad3[b],v,M));let O=.5-x*x-L*L;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[S],x,L)),70*(i+n+r)}noise3d(t,e,i){let n,r,a,o;const c=(t+e+i)*.3333333333333333,u=Math.floor(t+c),h=Math.floor(e+c),d=Math.floor(i+c),p=1/6,g=(u+h+d)*p,_=u-g,m=h-g,f=d-g,v=t-_,M=e-m,x=i-f;let L,A,w,C,b,S;v>=M?M>=x?(L=1,A=0,w=0,C=1,b=1,S=0):v>=x?(L=1,A=0,w=0,C=1,b=0,S=1):(L=0,A=0,w=1,C=1,b=0,S=1):M<x?(L=0,A=0,w=1,C=0,b=1,S=1):v<x?(L=0,A=1,w=0,C=0,b=1,S=1):(L=0,A=1,w=0,C=1,b=1,S=0);const R=v-L+p,I=M-A+p,O=x-w+p,W=v-C+2*p,X=M-b+2*p,H=x-S+2*p,Z=v-1+3*p,V=M-1+3*p,tt=x-1+3*p,at=u&255,gt=h&255,Lt=d&255,Xt=this.perm[at+this.perm[gt+this.perm[Lt]]]%12,q=this.perm[at+L+this.perm[gt+A+this.perm[Lt+w]]]%12,et=this.perm[at+C+this.perm[gt+b+this.perm[Lt+S]]]%12,nt=this.perm[at+1+this.perm[gt+1+this.perm[Lt+1]]]%12;let j=.6-v*v-M*M-x*x;j<0?n=0:(j*=j,n=j*j*this.dot3(this.grad3[Xt],v,M,x));let ft=.6-R*R-I*I-O*O;ft<0?r=0:(ft*=ft,r=ft*ft*this.dot3(this.grad3[q],R,I,O));let _t=.6-W*W-X*X-H*H;_t<0?a=0:(_t*=_t,a=_t*_t*this.dot3(this.grad3[et],W,X,H));let wt=.6-Z*Z-V*V-tt*tt;return wt<0?o=0:(wt*=wt,o=wt*wt*this.dot3(this.grad3[nt],Z,V,tt)),32*(n+r+a+o)}noise4d(t,e,i,n){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,p,g;const _=(t+e+i+n)*l,m=Math.floor(t+_),f=Math.floor(e+_),v=Math.floor(i+_),M=Math.floor(n+_),x=(m+f+v+M)*c,L=m-x,A=f-x,w=v-x,C=M-x,b=t-L,S=e-A,R=i-w,I=n-C,O=b>S?32:0,W=b>R?16:0,X=S>R?8:0,H=b>I?4:0,Z=S>I?2:0,V=R>I?1:0,tt=O+W+X+H+Z+V,at=a[tt][0]>=3?1:0,gt=a[tt][1]>=3?1:0,Lt=a[tt][2]>=3?1:0,Xt=a[tt][3]>=3?1:0,q=a[tt][0]>=2?1:0,et=a[tt][1]>=2?1:0,nt=a[tt][2]>=2?1:0,j=a[tt][3]>=2?1:0,ft=a[tt][0]>=1?1:0,_t=a[tt][1]>=1?1:0,wt=a[tt][2]>=1?1:0,Yt=a[tt][3]>=1?1:0,kt=b-at+c,ie=S-gt+c,U=R-Lt+c,we=I-Xt+c,Gt=b-q+2*c,Ht=S-et+2*c,Ct=R-nt+2*c,Jt=I-j+2*c,Et=b-ft+3*c,E=S-_t+3*c,y=R-wt+3*c,B=I-Yt+3*c,K=b-1+4*c,J=S-1+4*c,Y=R-1+4*c,vt=I-1+4*c,rt=m&255,lt=f&255,Vt=v&255,Q=M&255,pt=o[rt+o[lt+o[Vt+o[Q]]]]%32,Pt=o[rt+at+o[lt+gt+o[Vt+Lt+o[Q+Xt]]]]%32,Dt=o[rt+q+o[lt+et+o[Vt+nt+o[Q+j]]]]%32,mt=o[rt+ft+o[lt+_t+o[Vt+wt+o[Q+Yt]]]]%32,Wt=o[rt+1+o[lt+1+o[Vt+1+o[Q+1]]]]%32;let It=.6-b*b-S*S-R*R-I*I;It<0?u=0:(It*=It,u=It*It*this.dot4(r[pt],b,S,R,I));let Kt=.6-kt*kt-ie*ie-U*U-we*we;Kt<0?h=0:(Kt*=Kt,h=Kt*Kt*this.dot4(r[Pt],kt,ie,U,we));let D=.6-Gt*Gt-Ht*Ht-Ct*Ct-Jt*Jt;D<0?d=0:(D*=D,d=D*D*this.dot4(r[Dt],Gt,Ht,Ct,Jt));let st=.6-Et*Et-E*E-y*y-B*B;st<0?p=0:(st*=st,p=st*st*this.dot4(r[mt],Et,E,y,B));let G=.6-K*K-J*J-Y*Y-vt*vt;return G<0?g=0:(G*=G,g=G*G*this.dot4(r[Wt],K,J,Y,vt)),27*(u+h+d+p+g)}}const Xs={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new yt},cameraProjectionMatrix:{value:new se},cameraInverseProjectionMatrix:{value:new se},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},qs={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},Ys={uniforms:{tDiffuse:{value:null},resolution:{value:new yt}},vertexShader:`varying vec2 vUv;

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

		}`};class Mi extends nn{constructor(t,e,i,n,r=32){super(),this.width=i!==void 0?i:512,this.height=n!==void 0?n:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new no;a.format=en,a.type=tn,this.normalRenderTarget=new He(this.width,this.height,{minFilter:Oe,magFilter:Oe,type:ni,depthTexture:a}),this.ssaoRenderTarget=new He(this.width,this.height,{type:ni}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new de({defines:Object.assign({},Xs.defines),uniforms:yi.clone(Xs.uniforms),vertexShader:Xs.vertexShader,fragmentShader:Xs.fragmentShader,blending:Ie}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Km,this.normalMaterial.blending=Ie,this.blurMaterial=new de({defines:Object.assign({},Ys.defines),uniforms:yi.clone(Ys.uniforms),vertexShader:Ys.vertexShader,fragmentShader:Ys.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new de({defines:Object.assign({},qs.defines),uniforms:yi.clone(qs.uniforms),vertexShader:qs.vertexShader,fragmentShader:qs.fragmentShader,blending:Ie}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new de({uniforms:yi.clone(is.uniforms),vertexShader:is.vertexShader,fragmentShader:is.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Wl,blendDst:Qr,blendEquation:xi,blendSrcAlpha:Hl,blendDstAlpha:Qr,blendEquationAlpha:xi}),this.fsQuad=new fr(null),this.originalClearColor=new dt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,i){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Mi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case Mi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case Mi.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:i);break;case Mi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case Mi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Gl,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,i,n,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,i,n,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n=e.clearColor||n,r=e.clearAlpha||r,n!=null&&(t.setClearColor(n),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let i=0;i<t;i++){const n=new P;n.x=Math.random()*2-1,n.y=Math.random()*2-1,n.z=Math.random(),n.normalize();let r=i/t;r=Th.lerp(.1,1,r*r),n.multiplyScalar(r),e.push(n)}}generateRandomKernelRotations(){const i=new U0,n=4*4,r=new Float32Array(n);for(let a=0;a<n;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=i.noise3d(o,l,c)}this.noiseTexture=new km(r,4,4,Ya,ci),this.noiseTexture.wrapS=ns,this.noiseTexture.wrapT=ns,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){const n=e.get(i);i.visible=n}),e.clear()}}Mi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const N0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Un extends nn{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,a,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new He(r,a,{type:ni});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new He(r,a,{type:ni});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=N0;this.highPassUniforms=yi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new de({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new yt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=is;this.copyUniforms=yi.clone(u.uniforms),this.blendMaterial=new de({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new Ue,this.fsQuad=new fr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new yt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Un.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Un.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new de({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new de({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Un.BlurDirectionX=new yt(1,0);Un.BlurDirectionY=new yt(0,1);const Xi=3,$n=6,F0=8,Nl="sunbreak.settings.v1",$r="sunbreak.records.v1",jn=1/120,Fl={steer:0,throttle:0,brake:0,handbrake:!1,boost:!1};function Ol(s,t){try{const e=localStorage.getItem(s);if(!e)return t;const i=JSON.parse(e);return i&&typeof i=="object"?i:t}catch{return t}}function jr(s,t){try{localStorage.setItem(s,JSON.stringify(t))}catch{}}class O0{constructor(t){this.canvas=t,this.time=0,this.state="title",this.renderer=new Om({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vl,this.renderer.toneMapping=Ha,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=De,this.scene=new Bm,this.camera=new qe(62,1,.25,1800),this.setupPost(),this.track=new n0(this.scene),this.env=new a0(this.scene,this.track),this.effects=new _0(this.scene),this.model=new Ll(this.scene),this.rivals=this.createRivals(),this.audio=new S0,this.input=new T0(t),this.rig=new v0(this.camera,this.track,this.env),this.settings={assist:!0,music:.65,sfx:.8,camera:0,touch:this.isCoarsePointer(),seenTutorial:!1,...Ol(Nl,{})},this.settings.camera=Rt(Number(this.settings.camera)||0,0,2),typeof this.settings.touch!="boolean"&&(this.settings.touch=this.isCoarsePointer()),this.records={bestLap:null,bestSplits:[],bestTotal:null,...Ol($r,{})},this.recordsAtStart={...this.records},this.laps=[],this.lap=1,this.checkpoint=0,this.lapActive=!1,this.raceStarted=!1,this.raceTime=0,this.lapTime=0,this.accum=0,this.countdownTimer=0,this.countdownShown=0,this.style=0,this.splits=[],this.stats={topSpeed:0,nearMisses:0,cleanLandings:0,bestChain:0,airTime:0},this.finishTimer=0,this.goTimer=0,this.hintClock=0,this.wasBoosting=!1,this.recoverTimer=0,this.muted=!1,this.pausedFrom="racing",this.tutorialHints=!this.settings.seenTutorial,this.hintStage=0,this.finishedResults=null,this.car=new f0(this.track,this.model,this.buildCarEvents()),this.ui=new w0(this.track,this.audio,this.input,{onStart:()=>this.startRace(),onPause:()=>this.togglePause(),onResume:()=>this.resume(),onRestart:()=>this.startRace(),onQuit:()=>this.enterTitle(),onAssist:e=>{this.settings.assist=e,this.saveSettings()},onCamera:(e,i)=>{this.settings.camera=e,this.rig.setMode(e),this.saveSettings(),i||this.ui.toast(`CAMERA · ${this.rig.mode.toUpperCase()}`)},onMusic:e=>{this.settings.music=e,this.audio.setVolumes(this.settings.music,this.settings.sfx),this.saveSettings()},onSfx:e=>{this.settings.sfx=e,this.audio.setVolumes(this.settings.music,this.settings.sfx),this.saveSettings()},onTouchToggle:e=>{this.settings.touch=e,this.saveSettings(),this.syncTouchControls()},onResetRecords:()=>{this.records={bestLap:null,bestSplits:[],bestTotal:null},jr($r,this.records),this.ui.setTitleBest(this.records)}}),this.ui.setSettings(this.settings),this.ui.setTitleBest(this.records),this.input.onFirstInput=()=>{this.audio.init(),this.audio.setVolumes(this.settings.music,this.settings.sfx),this.audio.resume()},this.resize(),this.enterTitle()}createRivals(){return[{body:"#d9433f",bodyDark:"#8e242b",accent:"#ffb13b",emissive:"#ff4b1f",trim:"#ffe0a2"},{body:"#4f6ee8",bodyDark:"#263c9a",accent:"#ff5d8f",emissive:"#ff244d",trim:"#b8c9ff"},{body:"#e4a634",bodyDark:"#9f5d1e",accent:"#f6f0d0",emissive:"#ffc84a",trim:"#fff0a6"},{body:"#d967b8",bodyDark:"#7a2f76",accent:"#65e4ff",emissive:"#28c9ff",trim:"#d6fbff"},{body:"#f1eee4",bodyDark:"#6c6b70",accent:"#ff5a36",emissive:"#ff2a19",trim:"#ffffff"},{body:"#805bd8",bodyDark:"#39266f",accent:"#9bff72",emissive:"#59dc49",trim:"#e7ddff"},{body:"#45a7a2",bodyDark:"#1d5c66",accent:"#f5d15b",emissive:"#ffae28",trim:"#d9fff2"}].map((e,i)=>{const n=new Ll(this.scene,e);return n.group.visible=!1,n.group.scale.setScalar(.92),{model:n,index:i,distance:0,speed:66,lat:i%2?3.8:-3.8,targetLat:i%2?3.8:-3.8,shortcutLap:-1}})}resetRivals(t){const e=[-58,34,86,-112,142,-166,205];this.playerStartS=t,this.rivals.forEach((i,n)=>{i.distance=e[n],i.model.group.visible=!0,this.poseRival(i)})}poseRival(t){const e=((this.playerStartS+t.distance)%this.track.length+this.track.length)%this.track.length,{a:i}=this.track.getSample(e),n=this.track.samplePos(e,t.lat);n.y+=.04,t.model.group.position.copy(n),t.model.group.rotation.y=Math.atan2(i.tan.x,i.tan.z),t.model.update(1/60,{speed:t.speed,steer:Rt((t.targetLat-t.lat)*.16,-1,1),lateral:0,grounded:!0,boostActive:!1,throttle:1,forwardSpeed:t.speed,accel:0,braking:!1,bank:i.bank,slope:0,airHeight:0})}updateRivals(t){if(this.state!=="racing")return;const e=this.playerRaceDistance(),i=this.track.ramps.find(n=>n.shortCut);this.rivals.forEach((n,r)=>{n.distance+=n.speed*t;const o=(((this.playerStartS+n.distance)%this.track.length+this.track.length)%this.track.length-i.s+this.track.length*1.5)%this.track.length-this.track.length*.5,l=Math.floor(n.distance/this.track.length);n.targetLat=Math.sin(this.time*.35+r*1.9)*3.2,Math.abs(o)<34&&n.shortcutLap!==l&&(n.targetLat=i.lat,Math.abs(o)<5&&Math.abs(n.lat-i.lat)<2.8&&(n.distance+=16,n.shortcutLap=l)),Math.abs(n.distance-e)<24&&(n.targetLat=Rt(n.targetLat+(r%2?-5:5),-8.5,8.5)),n.lat+=(n.targetLat-n.lat)*Rt(t*4.5,0,1),n.speed=66,this.poseRival(n)})}playerRaceDistance(){const t=((this.car.s-this.playerStartS)%this.track.length+this.track.length)%this.track.length;return Math.max(0,(this.lap-1)*this.track.length+t)}racerPosition(){const t=this.playerRaceDistance();return 1+this.rivals.filter(e=>e.distance>t).length}checkShortcutLine(){const t=this.track.ramps.find(i=>i.shortCut);if(!t||this.shortcutClaimedLap===this.lap)return;const e=(this.car.s-t.s+this.track.length*1.5)%this.track.length-this.track.length*.5;Math.abs(e)<t.length*.52&&(this.car.route==="branch"||Math.abs(this.car.lat-t.lat)<t.width*.46)&&this.car.speed>24&&(this.shortcutClaimedLap=this.lap,this.car.addBoost(16),this.style+=240,this.audio.boostWhoosh(),this.effects.addRing(this.car.pos,"#ffd166",12),this.ui.toast("CANYON CUT",{value:"+240",cls:"good"}))}titlePose(){const t=((this.track.findS(96,-29)-22)%this.track.length+this.track.length)%this.track.length,e=this.track.samplePos(t,0),{a:i}=this.track.getSample(t);return{s:t,pos:e,yaw:Math.atan2(i.tan.x,i.tan.z)}}setupPost(){this.composer=new P0(this.renderer),this.composer.addPass(new L0(this.scene,this.camera)),this.ssaoPass=new Mi(this.scene,this.camera,1,1),this.ssaoPass.kernelRadius=5.5,this.ssaoPass.minDistance=.0015,this.ssaoPass.maxDistance=.12,this.ssaoPass.output=Mi.OUTPUT.Default,this.composer.addPass(this.ssaoPass),this.bloomPass=new Un(new yt(1,1),.34,.48,.78),this.composer.addPass(this.bloomPass);const t={uniforms:{tDiffuse:{value:null}},vertexShader:`
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
      `};this.gradePass=new Ec(t),this.composer.addPass(this.gradePass),this.composer.addPass(new I0)}isCoarsePointer(){return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||(navigator.maxTouchPoints||0)>0}saveSettings(){jr(Nl,this.settings)}saveRecords(){jr($r,this.records)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.composer&&this.composer.setSize(t,e),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}syncTouchControls(){const t=["countdown","racing","paused"].includes(this.state);this.ui.updateTouchVisibility(this.settings.touch&&t)}enterTitle(){this.state="title",this.rivals.forEach(e=>{e.model.group.visible=!1}),this.audio.setPaused(!1),this.ui.setHUD(!1),this.ui.showScreen("title"),this.ui.setTitleBest(this.records),this.ui.updateTouchVisibility(!1),this.ui.countdown(""),this.ui.recover(!1),this.ui.hint(""),this.ui.setSettings(this.settings),this.input.resetTouch(),this.input.clearBuffer(),this.audio.setPaused(!1),this.audio.setIntensity(0),this.audio.updateEngine({active:!1,speed:0}),this.track.setStartLights(0),this.rig.setMode(this.settings.camera),this.rig.reset();const t=this.titlePose();this.car.reset(t.s,0),this.car.yaw=t.yaw,this.car.model.group.position.copy(this.car.pos),this.car.model.group.rotation.y=t.yaw,this.effects.reset(),this.rig.introAngle=0,this.rig.snapped=!1,this.finishTimer=0,this.recoverTimer=0}startRace(){this.audio.init(),this.audio.resume(),this.audio.setPaused(!1),this.audio.setIntensity(1),this.audio.setVolumes(this.settings.music,this.settings.sfx),this.ui.fade(!0),setTimeout(()=>this.ui.fade(!1),140),this.ui.showScreen(null),this.ui.setHUD(!0),this.ui.countdown(""),this.ui.recover(!1),this.ui.hint(""),this.ui.setSettings(this.settings),this.syncTouchControls();const t=this.track.startPose();this.resetRivals(t.s),this.car.reset(t.s,0),this.car.yaw=t.yaw,this.car.model.group.position.copy(this.car.pos),this.car.model.group.rotation.y=t.yaw,this.car.controlLock=0,this.effects.reset(),this.laps=[],this.lap=1,this.checkpoint=0,this.lapActive=!1,this.raceStarted=!1,this.raceTime=0,this.lapTime=0,this.accum=0,this.style=0,this.splits=[],this.stats={topSpeed:0,nearMisses:0,cleanLandings:0,bestChain:0,airTime:0},this.recordsAtStart={bestLap:this.records.bestLap,bestSplits:[...this.records.bestSplits||[]],bestTotal:this.records.bestTotal},this.countdownTimer=3,this.countdownShown=3,this.finishTimer=0,this.recoverTimer=0,this.finishedResults=null,this.hintStage=0,this.shortcutClaimedLap=-1,this.hintClock=0,this.goTimer=0,this.wasBoosting=!1,this.tutorialHints=!this.settings.seenTutorial,this.pausedFrom="racing",this.state="countdown",this.syncTouchControls(),this.ui.countdown("3"),this.ui.hint(""),this.audio.countdown(!1),this.track.setStartLights(1),this.rig.setMode(this.settings.camera),this.rig.reset(),this.rig.snapTo(this.car,8.6),this.input.resetTouch(),this.input.clearBuffer()}togglePause(){if(this.state==="paused"){this.resume();return}this.state!=="racing"&&this.state!=="countdown"||(this.pausedFrom=this.state,this.state="paused",this.audio.setPaused(!0),this.input.resetTouch(),this.input.clearBuffer(),this.ui.setPauseInfo({lap:this.lap,totalLaps:Xi,time:this.raceTime,bestLap:this.currentBestLap()}),this.ui.showScreen("pause"),this.ui.setHUD(!0),this.syncTouchControls())}resume(){var t,e;this.state==="paused"&&(this.state=this.pausedFrom,this.audio.setPaused(!1),this.ui.showScreen(null),this.ui.setHUD(!0),this.input.resetTouch(),this.input.clearBuffer(),this.syncTouchControls(),(e=(t=this.ui).setPauseInfo)==null||e.call(t,{lap:this.lap,totalLaps:Xi,time:this.raceTime,bestLap:this.currentBestLap()}))}currentBestLap(){let t=this.records.bestLap&&isFinite(this.records.bestLap)?this.records.bestLap:1/0;for(const e of this.laps)e<t&&(t=e);return isFinite(t)?t:null}buildCarEvents(){return{onLand:(t,e,i,n)=>{const r=Rt(t/22,.25,1.2);this.effects.landingDust(e,t),this.effects.addRing(e,"#ffd296",10+r*6),this.audio.landing(t),this.rig.addShake(.12+r*.4),this.stats.airTime+=n},onCrash:(t,e)=>{const i=new P(Math.sin(this.car.yaw),0,Math.cos(this.car.yaw));this.effects.crashBurst(e,i),this.audio.impact(t),this.rig.addShake(.45+t*.5),this.effects.endSkid()},onWallSpark:(t,e,i)=>{this.effects.wallSparks(t,e,i?i.tan:null),this.audio.wallScrape()},onWallRide:()=>{this.style+=20/60},onWallHit:(t,e)=>{e>30&&this.rig.addShake(.18)},onPropHit:()=>{this.audio.impact(.5),this.rig.addShake(.35),this.ui.toast("ROCK CONTACT",{cls:""})},onNearMiss:t=>{this.style+=150,this.stats.nearMisses+=1,this.audio.nearMiss(),this.effects.sparks.spawn({x:t.x,y:t.y+1,z:t.z,vx:0,vy:1,vz:0,life:.1,size0:.1,size1:.1,r:1,g:1,b:1,alpha:0}),this.ui.toast("NEAR MISS",{value:"+150",cls:"good"})},onDriftStart:()=>{},onDriftEnd:(t,e)=>{if(t>.55){const i=Math.round(t*e*26);this.style+=i,this.ui.toast("CHAIN BANKED",{value:`+${i}`,cls:"big"}),this.effects.endSkid()}},onChainStep:t=>{this.audio.driftChain(t),t>1&&this.ui.toast(`CHAIN x${t}`,{cls:"big"})},onDriftTick:(t,e)=>{this.stats.bestChain=Math.max(this.stats.bestChain,t)},onCleanLanding:t=>{this.style+=100,this.stats.cleanLandings+=1,this.ui.toast("CLEAN LANDING",{value:"+100",cls:"good"})},onAirtime:t=>{this.style+=80,this.ui.toast("BIG AIR",{value:"+80",cls:"good"})},onOffRoad:()=>{}}}update(t){const e=Rt(t,0,.05);switch(this.time+=e,this.input.update(e),this.handleGlobalInput(),this.state){case"title":this.updateTitle(e);break;case"countdown":this.updateCountdown(e);break;case"racing":this.updateRacing(e);break;case"paused":this.updatePaused(e);break;case"finished":this.updateFinished(e);break}this.env.update(e,this.camera.position,this.time),this.env.updateSun(this.car.pos),this.effects.update(e),this.effects.updateRings(e),this.updateRecoverBanner(e)}handleGlobalInput(){this.input.consume("mute")&&(this.muted=!this.muted,this.audio.ready&&this.audio.master.gain.setTargetAtTime(this.muted?0:.9,this.audio.ctx.currentTime,.05),this.ui.toast(this.muted?"SOUND OFF":"SOUND ON",{cls:""}));const t=this.ui.current;if(t==="settings"||t==="how"){(this.input.consume("back")||this.input.consume("pause"))&&(this.input.clearBuffer(),this.audio.uiBack(),this.ui.back());return}if(this.input.consume("pause")){this.state==="paused"?this.resume():(this.state==="racing"||this.state==="countdown")&&this.togglePause();return}if(this.state==="title"&&this.input.consume("confirm")){this.startRace();return}if(this.state==="finished"&&this.input.consume("confirm")&&this.finishTimer<=0){this.startRace();return}if(this.state==="racing"||this.state==="countdown"){if(this.input.consume("camera")){const e=this.rig.cycle();this.settings.camera=this.rig.modeIndex,this.saveSettings(),this.ui.toast(`CAMERA · ${e.toUpperCase()}`)}this.input.consume("restart")&&this.startRace()}else this.state==="paused"&&this.input.consume("restart")&&this.startRace()}updateTitle(t){this.car.update(t,Fl,this.assistValue()),this.rig.update(t,this.car,{intro:!0}),this.audio.updateEngine({active:!1,speed:0}),this.ui.drawMinimap(this.car,0)}updatePaused(t){this.rig.update(t,this.car,{paused:!0}),this.audio.updateEngine({active:!1,speed:0})}updateCountdown(t){this.audio.updateEngine({active:!0,speed:0,throttle:this.input.state.throttle,grounded:!0,slipFactor:0}),this.car.update(t,Fl,this.assistValue()),this.rig.update(t,this.car,{}),this.countdownTimer-=t;const e=Math.ceil(this.countdownTimer);e!==this.countdownShown&&(e>=1&&e<=3?(this.ui.countdown(String(e)),this.audio.countdown(!1),this.track.setStartLights(e===3?1:e===2?3:5)):e<=0&&(this.ui.countdown("GO!",!0),this.audio.countdown(!0),this.track.setStartLights(5,!0),this.state="racing",this.raceStarted=!0,this.goTimer=.75),this.countdownShown=e),this.countdownTimer<-.7&&this.ui.countdown(""),this.ui.updateHUD(this.hudState()),this.ui.drawMinimap(this.car,0)}updateRacing(t){const e=this.input.getDrivingState(),i=this.assistValue();this.hintClock+=t,this.goTimer>0&&(this.goTimer-=t,this.goTimer<=0&&(this.ui.countdown(""),this.track.setStartLights(0))),this.accum+=t;let n=0;for(;this.accum>=jn&&n<8&&this.state==="racing";){this.lapActive&&(this.raceTime+=jn,this.lapTime+=jn);const a=this.car.s;this.car.update(jn,e,i),this.checkShortcutLine(),this.checkGates(a,this.car.s),this.car.needsRecovery&&this.handleRecovery(),this.accum-=jn,n+=1}n===8&&(this.accum=0),this.rig.update(t,this.car,{}),this.updateRivals(t),this.emitEffects(t,e);const r=this.car.speed;this.stats.topSpeed=Math.max(this.stats.topSpeed,r*3.6),this.stats.bestChain=Math.max(this.stats.bestChain,this.car.driftChain),this.audio.updateEngine({active:!0,speed:r,throttle:e.throttle,boosting:this.car.boosting,slip:this.car.slip,slipFactor:Math.abs(this.car.slip),grounded:this.car.grounded,offRoad:this.car.offRoad}),this.ui.updateHUD(this.hudState()),this.ui.drawMinimap(this.car,this.checkpoint>=$n?0:this.checkpoint+1),this.updateHints()}updateFinished(t){this.rig.update(t,this.car,{finished:!0}),this.audio.updateEngine({active:!1,speed:0}),this.finishTimer>0&&(this.finishTimer-=t,this.finishTimer<=0&&(this.ui.countdown(""),this.ui.setResults(this.finishedResults),this.ui.showScreen("results"),this.ui.setHUD(!1),this.ui.updateTouchVisibility(!1),this.audio.setIntensity(0)))}assistValue(){return this.settings.assist?.55:0}hudState(){return{lap:Math.min(this.lap,Xi),totalLaps:Xi,time:this.raceTime,bestLap:this.currentBestLap(),speed:this.car.speed,boost:this.car.boostMeter,style:this.style+this.car.driftScore*.55,chain:{active:this.car.drifting,chain:this.car.driftChain,mult:this.car.chainMultiplier},checkpoint:this.checkpoint,totalCheckpoints:$n,position:this.racerPosition(),totalRacers:F0}}checkGates(t,e){const i=this.track.length;let n=e-t;if(n>i/2&&(n-=i),n<-i/2&&(n+=i),n<=0||Math.abs(n)>90)return;const r=this.track.gateS,a=[];for(let o=0;o<r.length;o++){let l=((r[o]-t)%i+i)%i;l<=n+.001&&a.push({i:o,rel:l})}a.sort((o,l)=>o.rel-l.rel);for(const o of a)this.onGate(o.i)}onGate(t){var e;if(this.raceStarted){if(t===0){if(!this.lapActive){this.lapActive=!0,this.lapTime=0,this.raceTime=0,this.checkpoint=0,this.splits=[],this.laps=[],this.ui.toast("LIGHTS OUT · GO",{cls:"big"});return}this.checkpoint>=$n&&this.completeLap();return}if(this.lapActive&&t===this.checkpoint+1&&t<=$n){this.checkpoint=t,this.audio.checkpoint(),this.splits[t-1]=this.lapTime;const i=(e=this.records.bestSplits)==null?void 0:e[t-1];isFinite(i)&&this.ui.showDelta(this.lapTime-i),this.ui.toast(`CHECKPOINT ${t}/${$n}`,{value:Qe(this.lapTime)})}}}completeLap(){const t=this.lapTime;this.laps.push(t),this.lapActive=!1;const e=this.records.bestLap,i=this.splits.slice();if((!e||t<e)&&(this.records.bestLap=t,this.records.bestSplits=i),this.lap>=Xi){this.finishRace();return}this.ui.toast(`LAP ${this.lap} COMPLETE`,{value:Qe(t),cls:"big"}),this.audio.lap(),this.lap+=1,this.shortcutClaimedLap=-1,this.checkpoint=0,this.lapTime=0,this.splits=[],this.lapActive=!0,e&&this.ui.showDelta(t-e),this.lap===Xi&&(this.audio.setIntensity(2),this.ui.toast("FINAL LAP · SEND IT",{cls:"big"})),this.saveRecords()}finishRace(){this.state="finished",this.lap=Xi,this.records.bestTotal=!this.records.bestTotal||this.raceTime<this.records.bestTotal?this.raceTime:this.records.bestTotal,this.saveRecords();const t=Math.min(...this.laps),e=this.recordsAtStart.bestLap?t<this.recordsAtStart.bestLap-.001:!0,i=this.recordsAtStart.bestTotal?this.raceTime<this.recordsAtStart.bestTotal-.001:!0,n=e?"Canyon <em>Legend</em>":i?"New <em>Benchmark</em>":"Sunbreak <em>Flyer</em>";this.finishedResults={laps:this.laps.slice(),best:t,total:this.raceTime,style:this.style+this.car.driftScore*.55,topSpeed:this.stats.topSpeed,bestChain:this.stats.bestChain,airTime:this.stats.airTime,nearMisses:this.stats.nearMisses,cleanLandings:this.stats.cleanLandings,newBest:e||i,newBestLap:e,title:n,bestLabel:e?"NEW PERSONAL BEST":this.recordsAtStart.bestLap?`RECORD ${Qe(this.recordsAtStart.bestLap)}`:""},this.finishTimer=2.1,this.ui.countdown("FINISH",!0),this.audio.finish(),this.effects.addRing(this.car.pos,"#8cf5d9",20),this.effects.crashBurst(this.car.pos,new P(Math.sin(this.car.yaw),0,Math.cos(this.car.yaw))),this.ui.hint(""),this.ui.recover(!1),this.input.resetTouch(),this.ui.updateTouchVisibility(!1)}handleRecovery(){const t=this.car.recoveryReason;let e=this.car.s;(t==="fall"||this.track.isGap(e))&&(e=this.track.gap.start-20);for(let n=0;n<50&&this.track.isGap(e);n++)e-=4;const i=this.track.length;e=(e%i+i)%i,this.car.reset(e,0),this.car.boostMeter=Math.max(this.car.boostMeter,35),this.car.controlLock=.55,this.car.needsRecovery=!1,this.car.model.group.position.copy(this.car.pos),this.car.model.group.rotation.y=this.car.yaw,this.effects.endSkid(),this.effects.landingDust(this.car.pos,8),this.rig.snapTo(this.car,8.4),this.audio.landing(6),this.recoverTimer=1.5,this.ui.recover(!0),this.ui.toast("BACK ON THE LINE",{value:"GO",cls:""})}updateRecoverBanner(t){this.recoverTimer>0&&(this.recoverTimer-=t,this.recoverTimer<=0&&this.ui.recover(!1))}emitEffects(t,e){const i=this.car,n=new P(Math.sin(i.yaw),0,Math.cos(i.yaw));if(new P(n.z,0,-n.x),this.model.group.updateMatrixWorld(!0),i.grounded&&(i.drifting||e.handbrake)&&i.speed>7){const a=Rt(Math.abs(i.slip)*1.6,.25,1);for(const o of[2,3])this.model.wheelWorld(o,this._wheelPos||(this._wheelPos=new P)),this.effects.skidTrail(o,this._wheelPos,n,a),this.effects.driftSmoke(this._wheelPos,o===2?-1:1,i.vel,a)}else this.effects.endSkid();if(i.offRoad&&i.grounded&&i.speed>3){const a=new P().copy(i.pos).addScaledVector(n,-1.4);Math.random()<.75&&this.effects.tireDust(a,i.vel,1)}i.boosting&&(this.effects.boostTrail(i.pos,n,1),Math.random()<.4&&this.rig.addShake(.035),this.wasBoosting||this.audio.boostWhoosh()),this.wasBoosting=i.boosting,!i.grounded&&i.airTime>.15&&Math.random()<.4&&this.effects.jumpDust(new P().copy(i.pos).addScaledVector(n,-1.2))}updateHints(){if(!this.tutorialHints)return;const t=this.settings.touch;this.hintStage===0&&this.hintClock>.8?(this.hintStage=1,this.ui.hint(t?"Hold <b>GAS</b> to launch · <b>DRIFT</b> through the first corner":"Hold <b>W</b> / <b>↑</b> to launch · <b>SPACE</b> to drift",5.5)):this.hintStage===1&&this.hintClock>7?(this.hintStage=2,this.ui.hint(t?"Slides fill your <b>BOOST</b> meter · tap <b>BOOST</b> on the straights":"Drifting fills <b>BOOST</b> · hit <b>SHIFT</b> on the straights",5.5)):this.hintStage===2&&this.hintClock>15?(this.hintStage=3,this.ui.hint(t?"Steer with the arrows · <b>DRIFT</b> + <b>BOOST</b> wins races":"<b>C</b> camera · <b>R</b> restart · <b>ESC</b> pause",4.5)):this.hintStage===3&&this.hintClock>21&&(this.hintStage=4,this.ui.hint(""),this.tutorialHints=!1,this.settings.seenTutorial=!0,this.saveSettings())}render(){this.composer.render()}onVisibilityHidden(){(this.state==="racing"||this.state==="countdown")&&this.togglePause()}}const Ac=document.getElementById("game"),os=new O0(Ac);window.__sunbreak=os;let Bl=performance.now(),Jr=0,zl=0;function Rc(s){const t=(s-Bl)/1e3;Bl=s;const e=Math.min(.05,Math.max(0,t));os.update(e),os.render(),Jr+=1,t>.05&&(zl+=1),Jr===120&&(window.__sunbreakFps=Math.round(1e3/((s-B0)/Jr)),window.__sunbreakSlowFrames=zl),requestAnimationFrame(Rc)}let B0=performance.now();requestAnimationFrame(Rc);window.addEventListener("resize",()=>{os.resize()});document.addEventListener("visibilitychange",()=>{document.hidden&&os.onVisibilityHidden()});Ac.addEventListener("webglcontextlost",s=>{s.preventDefault(),console.warn("WebGL context lost")});
