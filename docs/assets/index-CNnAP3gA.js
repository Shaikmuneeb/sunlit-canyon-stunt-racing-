(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="170",Nc=0,So=1,Fc=2,Wl=1,Xl=2,vi=3,Ei=0,Oe=1,Fe=2,Ue=0,Bi=1,Qi=2,yo=3,bo=4,ql=5,Mi=100,Oc=101,Bc=102,zc=103,kc=104,ia=200,Vc=201,Gc=202,Hc=203,na=204,sa=205,Yl=206,Wc=207,Kl=208,Xc=209,qc=210,Yc=211,Kc=212,$c=213,Zc=214,ra=0,aa=1,oa=2,Pn=3,la=4,ca=5,ha=6,ua=7,$l=0,jc=1,Jc=2,zi=0,Zl=1,jl=2,Jl=3,qa=4,Qc=5,Ql=6,tc=7,ec=300,Ln=301,Dn=302,da=303,fa=304,fr=306,rs=1e3,ji=1001,pa=1002,Be=1003,th=1004,gs=1005,li=1006,vr=1007,Ji=1008,Ai=1009,ic=1010,nc=1011,as=1012,Ya=1013,tn=1014,ci=1015,ni=1016,Ka=1017,$a=1018,en=1020,sc=35902,rc=1021,ac=1022,ii=1023,oc=1024,lc=1025,An=1026,nn=1027,Za=1028,ja=1029,cc=1030,Ja=1031,Qa=1033,Js=33776,Qs=33777,tr=33778,er=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,Ma=37492,Sa=37496,ya=37808,ba=37809,Ta=37810,wa=37811,Ea=37812,Aa=37813,Ra=37814,Ca=37815,Pa=37816,La=37817,Da=37818,Ia=37819,Ua=37820,Na=37821,ir=36492,Fa=36494,Oa=36495,hc=36283,Ba=36284,za=36285,ka=36286,eh=3200,ih=3201,to=0,nh=1,Oi="",Ce="srgb",Fn="srgb-linear",pr="linear",ie="srgb",an=7680,To=519,sh=512,rh=513,ah=514,uc=515,oh=516,lh=517,ch=518,hh=519,Va=35044,wo="300 es",yi=2e3,or=2001;class On{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const ts=Math.PI/180,os=180/Math.PI;function Ti(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[s&255]+Ae[s>>8&255]+Ae[s>>16&255]+Ae[s>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function eo(s,t){return(s%t+t)%t}function uh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function dh(s,t,e){return s!==t?(e-s)/(t-s):0}function es(s,t,e){return(1-e)*s+e*t}function fh(s,t,e,i){return es(s,t,1-Math.exp(-e*i))}function ph(s,t=1){return t-Math.abs(eo(s,t*2)-t)}function mh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function gh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function _h(s,t){return s+Math.floor(Math.random()*(t-s+1))}function vh(s,t){return s+Math.random()*(t-s)}function xh(s){return s*(.5-Math.random())}function Mh(s){s!==void 0&&(Eo=s);let t=Eo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sh(s){return s*ts}function yh(s){return s*os}function bh(s){return(s&s-1)===0&&s!==0}function Th(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Eh(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),d=a((t-i)/2),m=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ei(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ah={DEG2RAD:ts,RAD2DEG:os,generateUUID:Ti,clamp:be,euclideanModulo:eo,mapLinear:uh,inverseLerp:dh,lerp:es,damp:fh,pingpong:ph,smoothstep:mh,smootherstep:gh,randInt:_h,randFloat:vh,randFloatSpread:xh,seededRandom:Mh,degToRad:Sh,radToDeg:yh,isPowerOfTwo:bh,ceilPowerOfTwo:Th,floorPowerOfTwo:wh,setQuaternionFromProperEuler:Eh,normalize:ne,denormalize:ei};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,n,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],_=n[0],f=n[3],p=n[6],v=n[1],M=n[4],x=n[7],L=n[2],E=n[5],w=n[8];return r[0]=a*_+o*v+l*L,r[3]=a*f+o*M+l*E,r[6]=a*p+o*x+l*w,r[1]=c*_+u*v+h*L,r[4]=c*f+u*M+h*E,r[7]=c*p+u*x+h*w,r[2]=d*_+m*v+g*L,r[5]=d*f+m*M+g*E,r[8]=d*p+m*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,m=c*r-a*l,g=e*h+i*d+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(n*c-u*i)*_,t[2]=(o*i-n*a)*_,t[3]=d*_,t[4]=(u*e-n*l)*_,t[5]=(n*r-o*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new kt;function dc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rh(){const s=lr("canvas");return s.style.display="block",s}const Ao={};function Jn(s){s in Ao||(Ao[s]=!0,console.warn(s))}function Ch(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ph(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(s.r=Rn(s.r),s.g=Rn(s.g),s.b=Rn(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?pr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ro=[.64,.33,.3,.6,.15,.06],Co=[.2126,.7152,.0722],Po=[.3127,.329],Lo=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Do=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Fn]:{primaries:Ro,whitePoint:Po,transfer:pr,toXYZ:Lo,fromXYZ:Do,luminanceCoefficients:Co,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:Ro,whitePoint:Po,transfer:ie,toXYZ:Lo,fromXYZ:Do,luminanceCoefficients:Co,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});let on;class Dh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{on===void 0&&(on=lr("canvas")),on.width=t.width,on.height=t.height;const i=on.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=on}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(wi(e[i]/255)*255):e[i]=wi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ih=0;class fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Mr(n[a].image)):r.push(Mr(n[a]))}else r=Mr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Mr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uh=0;class Pe extends On{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,i=ji,n=ji,r=li,a=Ji,o=ii,l=Ai,c=Pe.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Ti(),this.name="",this.source=new fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=ec;Pe.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,n=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(m+1)/2,L=(p+1)/2,E=(u+d)/4,w=(h+_)/4,C=(g+f)/4;return M>x&&M>L?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=E/i,r=w/i):x>L?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=E/n,r=C/n):L<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(L),i=w/r,n=C/r),this.set(i,n,r,e),this}let v=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nh extends On{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Pe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class We extends Nh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class pc extends Pe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fh extends Pe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==m||u!==g){let f=1-o;const p=l*d+c*m+u*g+h*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const L=Math.sqrt(M),E=Math.atan2(L,p*v);f=Math.sin(f*E)/L,o=Math.sin(o*E)/L}const x=o*v;if(l=l*f+d*x,c=c*f+m*x,u=u*f+g*x,h=h*f+_*x,f===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*m-c*d,t[e+1]=l*g+u*d+c*h-o*m,t[e+2]=c*g+u*m+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(r/2),d=l(i/2),m=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-n)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(r-c)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-n)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=n*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Io.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Io.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),u=2*(o*e-r*n),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=n+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Sr.copy(this).projectOnVector(t),this.sub(Sr)}reflect(t){return this.sub(Sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new P,Io=new hs;class us{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vn),vs.subVectors(this.max,Vn),ln.subVectors(t.a,Vn),cn.subVectors(t.b,Vn),hn.subVectors(t.c,Vn),Li.subVectors(cn,ln),Di.subVectors(hn,cn),Vi.subVectors(ln,hn);let e=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-Vi.z,Vi.y,Li.z,0,-Li.x,Di.z,0,-Di.x,Vi.z,0,-Vi.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-Vi.y,Vi.x,0];return!yr(e,ln,cn,hn,vs)||(e=[1,0,0,0,1,0,0,0,1],!yr(e,ln,cn,hn,vs))?!1:(xs.crossVectors(Li,Di),e=[xs.x,xs.y,xs.z],yr(e,ln,cn,hn,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new P,new P,new P,new P,new P,new P,new P,new P],je=new P,_s=new us,ln=new P,cn=new P,hn=new P,Li=new P,Di=new P,Vi=new P,Vn=new P,vs=new P,xs=new P,Gi=new P;function yr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Gi.fromArray(s,r);const o=n.x*Math.abs(Gi.x)+n.y*Math.abs(Gi.y)+n.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Oh=new us,Gn=new P,br=new P;class ds{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Oh.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gn.subVectors(t,this.center);const e=Gn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Gn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gn.copy(t.center).add(br)),this.expandByPoint(Gn.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new P,Tr=new P,Ms=new P,Ii=new P,wr=new P,Ss=new P,Er=new P;class io{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Tr.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(Tr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ms),o=Ii.dot(this.direction),l=-Ii.dot(Ms),c=Ii.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Tr).addScaledVector(Ms,d),m}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const i=pi.dot(this.direction),n=pi.dot(pi)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,n,r){wr.subVectors(e,t),Ss.subVectors(i,t),Er.crossVectors(wr,Ss);let a=this.direction.dot(Er),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,t);const l=o*this.direction.dot(Ss.crossVectors(Ii,Ss));if(l<0)return null;const c=o*this.direction.dot(wr.cross(Ii));if(c<0||l+c>a)return null;const u=-o*Ii.dot(Er);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,n,r,a,o,l,c,u,h,d,m,g,_,f){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,u,h,d,m,g,_,f)}set(t,e,i,n,r,a,o,l,c,u,h,d,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/un.setFromMatrixColumn(t,0).length(),r=1/un.setFromMatrixColumn(t,1).length(),a=1/un.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bh,t,zh)}lookAt(t,e,i){const n=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Ui.crossVectors(i,Ge),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Ui.crossVectors(i,Ge)),Ui.normalize(),ys.crossVectors(Ge,Ui),n[0]=Ui.x,n[4]=ys.x,n[8]=Ge.x,n[1]=Ui.y,n[5]=ys.y,n[9]=Ge.y,n[2]=Ui.z,n[6]=ys.z,n[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],_=i[6],f=i[10],p=i[14],v=i[3],M=i[7],x=i[11],L=i[15],E=n[0],w=n[4],C=n[8],b=n[12],S=n[1],R=n[5],U=n[9],O=n[13],W=n[2],X=n[6],H=n[10],$=n[14],V=n[3],Q=n[7],rt=n[11],gt=n[15];return r[0]=a*E+o*S+l*W+c*V,r[4]=a*w+o*R+l*X+c*Q,r[8]=a*C+o*U+l*H+c*rt,r[12]=a*b+o*O+l*$+c*gt,r[1]=u*E+h*S+d*W+m*V,r[5]=u*w+h*R+d*X+m*Q,r[9]=u*C+h*U+d*H+m*rt,r[13]=u*b+h*O+d*$+m*gt,r[2]=g*E+_*S+f*W+p*V,r[6]=g*w+_*R+f*X+p*Q,r[10]=g*C+_*U+f*H+p*rt,r[14]=g*b+_*O+f*$+p*gt,r[3]=v*E+M*S+x*W+L*V,r[7]=v*w+M*R+x*X+L*Q,r[11]=v*C+M*U+x*H+L*rt,r[15]=v*b+M*O+x*$+L*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+r*l*h-n*c*h-r*o*d+i*c*d+n*o*m-i*l*m)+_*(+e*l*m-e*c*d+r*a*d-n*a*m+n*c*u-r*l*u)+f*(+e*c*h-e*o*m-r*a*h+i*a*m+r*o*u-i*c*u)+p*(-n*o*u-e*l*h+e*o*d+n*a*h-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],v=h*f*c-_*d*c+_*l*m-o*f*m-h*l*p+o*d*p,M=g*d*c-u*f*c-g*l*m+a*f*m+u*l*p-a*d*p,x=u*_*c-g*h*c+g*o*m-a*_*m-u*o*p+a*h*p,L=g*h*l-u*_*l-g*o*d+a*_*d+u*o*f-a*h*f,E=e*v+i*M+n*x+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(_*d*r-h*f*r-_*n*m+i*f*m+h*n*p-i*d*p)*w,t[2]=(o*f*r-_*l*r+_*n*c-i*f*c-o*n*p+i*l*p)*w,t[3]=(h*l*r-o*d*r-h*n*c+i*d*c+o*n*m-i*l*m)*w,t[4]=M*w,t[5]=(u*f*r-g*d*r+g*n*m-e*f*m-u*n*p+e*d*p)*w,t[6]=(g*l*r-a*f*r-g*n*c+e*f*c+a*n*p-e*l*p)*w,t[7]=(a*d*r-u*l*r+u*n*c-e*d*c-a*n*m+e*l*m)*w,t[8]=x*w,t[9]=(g*h*r-u*_*r-g*i*m+e*_*m+u*i*p-e*h*p)*w,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*p+e*o*p)*w,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*m-e*o*m)*w,t[12]=L*w,t[13]=(u*_*n-g*h*n+g*i*d-e*_*d-u*i*f+e*h*f)*w,t[14]=(g*o*n-a*_*n-g*i*l+e*_*l+a*i*f-e*o*f)*w,t[15]=(a*h*n-u*o*n+u*i*l-e*h*l-a*i*d+e*o*d)*w,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,m=r*u,g=r*h,_=a*u,f=a*h,p=o*h,v=l*c,M=l*u,x=l*h,L=i.x,E=i.y,w=i.z;return n[0]=(1-(_+p))*L,n[1]=(m+x)*L,n[2]=(g-M)*L,n[3]=0,n[4]=(m-x)*E,n[5]=(1-(d+p))*E,n[6]=(f+v)*E,n[7]=0,n[8]=(g+M)*w,n[9]=(f-v)*w,n[10]=(1-(d+_))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=un.set(n[0],n[1],n[2]).length();const a=un.set(n[4],n[5],n[6]).length(),o=un.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Je.copy(this);const c=1/r,u=1/a,h=1/o;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=yi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-n),h=(e+t)/(e-t),d=(i+n)/(i-n);let m,g;if(o===yi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===or)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=yi){const l=this.elements,c=1/(e-t),u=1/(i-n),h=1/(a-r),d=(e+t)*c,m=(i+n)*u;let g,_;if(o===yi)g=(a+r)*h,_=-2*h;else if(o===or)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const un=new P,Je=new se,Bh=new P(0,0,0),zh=new P(1,1,1),Ui=new P,ys=new P,Ge=new P,Uo=new se,No=new hs;class hi{constructor(t=0,e=0,i=0,n=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return No.setFromEuler(this),this.setFromQuaternion(No,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kh=0;const Fo=new P,dn=new hs,mi=new se,bs=new P,Hn=new P,Vh=new P,Gh=new hs,Oo=new P(1,0,0),Bo=new P(0,1,0),zo=new P(0,0,1),ko={type:"added"},Hh={type:"removed"},fn={type:"childadded",child:null},Ar={type:"childremoved",child:null};class ve extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new P,e=new hi,i=new hs,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new se},normalMatrix:{value:new kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.multiply(dn),this}rotateOnWorldAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.premultiply(dn),this}rotateX(t){return this.rotateOnAxis(Oo,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(zo,t)}translateOnAxis(t,e){return Fo.copy(t).applyQuaternion(this.quaternion),this.position.add(Fo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oo,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?bs.copy(t):bs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Hn,bs,this.up):mi.lookAt(bs,Hn,this.up),this.quaternion.setFromRotationMatrix(mi),n&&(mi.extractRotation(n.matrixWorld),dn.setFromRotationMatrix(mi),this.quaternion.premultiply(dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ko),fn.child=t,this.dispatchEvent(fn),fn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hh),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ko),fn.child=t,this.dispatchEvent(fn),fn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,t,Vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,Gh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ve.DEFAULT_UP=new P(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new P,gi=new P,Rr=new P,_i=new P,pn=new P,mn=new P,Vo=new P,Cr=new P,Pr=new P,Lr=new P,Dr=new pe,Ir=new pe,Ur=new pe;class Ke{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Qe.subVectors(t,e),n.cross(Qe);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Qe.subVectors(n,e),gi.subVectors(i,e),Rr.subVectors(t,e);const a=Qe.dot(Qe),o=Qe.dot(gi),l=Qe.dot(Rr),c=gi.dot(gi),u=gi.dot(Rr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Dr.setScalar(0),Ir.setScalar(0),Ur.setScalar(0),Dr.fromBufferAttribute(t,e),Ir.fromBufferAttribute(t,i),Ur.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Dr,r.x),a.addScaledVector(Ir,r.y),a.addScaledVector(Ur,r.z),a}static isFrontFacing(t,e,i,n){return Qe.subVectors(i,e),gi.subVectors(t,e),Qe.cross(gi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Qe.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;pn.subVectors(n,i),mn.subVectors(r,i),Cr.subVectors(t,i);const l=pn.dot(Cr),c=mn.dot(Cr);if(l<=0&&c<=0)return e.copy(i);Pr.subVectors(t,n);const u=pn.dot(Pr),h=mn.dot(Pr);if(u>=0&&h<=u)return e.copy(n);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(pn,a);Lr.subVectors(t,r);const m=pn.dot(Lr),g=mn.dot(Lr);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(mn,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Vo.subVectors(r,n),o=(h-u)/(h-u+(m-g)),e.copy(n).addScaledVector(Vo,o);const p=1/(f+_+d);return a=_*p,o=d*p,e.copy(i).addScaledVector(pn,a).addScaledVector(mn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Nr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class dt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Kt.workingColorSpace){if(t=eo(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Nr(a,r,t+1/3),this.g=Nr(a,r,t),this.b=Nr(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,n),this}setStyle(t,e=Ce){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const i=gc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Kt.fromWorkingColorSpace(Re.copy(this),t),Math.round(be(Re.r*255,0,255))*65536+Math.round(be(Re.g*255,0,255))*256+Math.round(be(Re.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,n=Re.g,r=Re.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Ce){Kt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,n=Re.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Ts);const i=es(Ni.h,Ts.h,e),n=es(Ni.s,Ts.s,e),r=es(Ni.l,Ts.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new dt;dt.NAMES=gc;let Wh=0;class Ri extends On{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ti(),this.name="",this.blending=Bi,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=sa,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Pn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=an,this.stencilZFail=an,this.stencilZPass=an,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==na&&(i.blendSrc=this.blendSrc),this.blendDst!==sa&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==an&&(i.stencilFail=this.stencilFail),this.stencilZFail!==an&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==an&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ne extends Ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new P,ws=new wt;class we{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Va,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}}class _c extends we{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class vc extends we{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ht extends we{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xh=0;const qe=new se,Fr=new ve,gn=new P,He=new us,Wn=new us,Se=new P;class re extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dc(t)?vc:_c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,i){return qe.makeTranslation(t,e,i),this.applyMatrix4(qe),this}scale(t,e,i){return qe.makeScale(t,e,i),this.applyMatrix4(qe),this}lookAt(t){return Fr.lookAt(t),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gn).negate(),this.translate(gn.x,gn.y,gn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(i,3))}else{for(let i=0,n=e.count;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Wn.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(He.min,Wn.min),He.expandByPoint(Se),Se.addVectors(He.max,Wn.max),He.expandByPoint(Se)):(He.expandByPoint(Wn.min),He.expandByPoint(Wn.max))}He.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Se.fromBufferAttribute(o,c),l&&(gn.fromBufferAttribute(t,c),Se.add(gn)),n=Math.max(n,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new P,l[C]=new P;const c=new P,u=new P,h=new P,d=new wt,m=new wt,g=new wt,_=new P,f=new P;function p(C,b,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),m.sub(d),g.sub(d);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(_),o[b].add(_),o[S].add(_),l[C].add(f),l[b].add(f),l[S].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,b=v.length;C<b;++C){const S=v[C],R=S.start,U=S.count;for(let O=R,W=R+U;O<W;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new P,x=new P,L=new P,E=new P;function w(C){L.fromBufferAttribute(n,C),E.copy(L);const b=o[C];M.copy(b),M.sub(L.multiplyScalar(L.dot(b))).normalize(),x.crossVectors(E,b);const R=x.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,R)}for(let C=0,b=v.length;C<b;++C){const S=v[C],R=S.start,U=S.count;for(let O=R,W=R+U;O<W;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[m++]}return new we(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new re,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(n[l]=u,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new se,Hi=new io,Es=new ds,Ho=new P,As=new P,Rs=new P,Cs=new P,Or=new P,Ps=new P,Wo=new P,Ls=new P;class xt extends ve{constructor(t=new re,e=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Or.fromBufferAttribute(h,t),a?Ps.addScaledVector(Or,u):Ps.addScaledVector(Or.sub(e),u))}e.add(Ps)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Es.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Es,Ho)===null||Hi.origin.distanceToSquared(Ho)>(t.far-t.near)**2))&&(Go.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(Go),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],v=Math.max(f.start,m.start),M=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let x=v,L=M;x<L;x+=3){const E=o.getX(x),w=o.getX(x+1),C=o.getX(x+2);n=Ds(this,p,t,i,c,u,h,E,w,C),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=f.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=o.getX(f),M=o.getX(f+1),x=o.getX(f+2);n=Ds(this,a,t,i,c,u,h,v,M,x),n&&(n.faceIndex=Math.floor(f/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],v=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let x=v,L=M;x<L;x+=3){const E=x,w=x+1,C=x+2;n=Ds(this,p,t,i,c,u,h,E,w,C),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=f.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=f,M=f+1,x=f+2;n=Ds(this,a,t,i,c,u,h,v,M,x),n&&(n.faceIndex=Math.floor(f/3),e.push(n))}}}}function qh(s,t,e,i,n,r,a,o){let l;if(t.side===Oe?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Ei,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ls);return c<e.near||c>e.far?null:{distance:c,point:Ls.clone(),object:s}}function Ds(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,As),s.getVertexPosition(l,Rs),s.getVertexPosition(c,Cs);const u=qh(s,t,e,i,As,Rs,Cs,Wo);if(u){const h=new P;Ke.getBarycoord(Wo,As,Rs,Cs,h),n&&(u.uv=Ke.getInterpolatedAttribute(n,o,l,c,h,new wt)),r&&(u.uv1=Ke.getInterpolatedAttribute(r,o,l,c,h,new wt)),a&&(u.normal=Ke.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Ke.getNormal(As,Rs,Cs,d.normal),u.face=d,u.barycoord=h}return u}class ke extends re{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function g(_,f,p,v,M,x,L,E,w,C,b){const S=x/w,R=L/C,U=x/2,O=L/2,W=E/2,X=w+1,H=C+1;let $=0,V=0;const Q=new P;for(let rt=0;rt<H;rt++){const gt=rt*R-O;for(let Dt=0;Dt<X;Dt++){const Yt=Dt*S-U;Q[_]=Yt*v,Q[f]=gt*M,Q[p]=W,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[f]=0,Q[p]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Dt/w),h.push(1-rt/C),$+=1}}for(let rt=0;rt<C;rt++)for(let gt=0;gt<w;gt++){const Dt=d+gt+X*rt,Yt=d+gt+X*(rt+1),q=d+(gt+1)+X*(rt+1),tt=d+(gt+1)+X*rt;l.push(Dt,Yt,tt),l.push(Yt,q,tt),V+=6}o.addGroup(m,V,b),m+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function In(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const i=In(s[e]);for(const n in i)t[n]=i[n]}return t}function Yh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const bi={clone:In,merge:De};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class me extends Ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=In(t.uniforms),this.uniformsGroups=Yh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Mc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new P,Xo=new wt,qo=new wt;class Ye extends Mc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Xo,qo),e.subVectors(qo,Xo)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _n=-90,vn=1;class Zh extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ye(_n,vn,t,e);n.layers=this.layers,this.add(n);const r=new Ye(_n,vn,t,e);r.layers=this.layers,this.add(r);const a=new Ye(_n,vn,t,e);a.layers=this.layers,this.add(a);const o=new Ye(_n,vn,t,e);o.layers=this.layers,this.add(o);const l=new Ye(_n,vn,t,e);l.layers=this.layers,this.add(l);const c=new Ye(_n,vn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===or)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sc extends Pe{constructor(t,e,i,n,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ln,super(t,e,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jh extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Sc(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ke(5,5,5),r=new me({name:"CubemapFromEquirect",uniforms:In(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:Ue});r.uniforms.tEquirect.value=e;const a=new xt(n,r),o=e.minFilter;return e.minFilter===Ji&&(e.minFilter=li),new Zh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Br=new P,Jh=new P,Qh=new kt;class Ki{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Br.subVectors(i,e).cross(Jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Br),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qh.getNormalMatrix(t),n=this.coplanarPoint(Br).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new ds,Is=new P;class no{constructor(t=new Ki,e=new Ki,i=new Ki,n=new Ki,r=new Ki,a=new Ki){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yi){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],d=n[7],m=n[8],g=n[9],_=n[10],f=n[11],p=n[12],v=n[13],M=n[14],x=n[15];if(i[0].setComponents(l-r,d-c,f-m,x-p).normalize(),i[1].setComponents(l+r,d+c,f+m,x+p).normalize(),i[2].setComponents(l+a,d+u,f+g,x+v).normalize(),i[3].setComponents(l-a,d-u,f-g,x-v).normalize(),i[4].setComponents(l-o,d-h,f-_,x-M).normalize(),e===yi)i[5].setComponents(l+o,d+h,f+_,x+M).normalize();else if(e===or)i[5].setComponents(o,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Is.x=n.normal.x>0?t.max.x:t.min.x,Is.y=n.normal.y>0?t.max.y:t.min.y,Is.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yc(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tu(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}class si extends re{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=t/o,d=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const v=p*d-a;for(let M=0;M<c;M++){const x=M*h-r;g.push(x,-v,0),_.push(0,0,1),f.push(M/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const M=v+c*p,x=v+c*(p+1),L=v+1+c*(p+1),E=v+1+c*p;m.push(M,x,E),m.push(x,L,E)}this.setIndex(m),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.widthSegments,t.heightSegments)}}var eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
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
#endif`,nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
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
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu=`#ifdef USE_BATCHING
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
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pu=`#ifdef USE_IRIDESCENCE
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
#endif`,mu=`#ifdef USE_BUMPMAP
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
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tu=`#define PI 3.141592653589793
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
} // validated`,wu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eu=`vec3 transformedNormal = objectNormal;
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
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
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
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
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
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
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
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ju=`PhysicalMaterial material;
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
#endif`,Qu=`struct PhysicalMaterial {
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
}`,td=`
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`#ifdef USE_MORPHTARGETS
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
#endif`,_d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bd=`#ifdef USE_NORMALMAP
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
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zd=`float getShadowMask() {
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
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,$d=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
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
}`,lf=`#if DEPTH_PACKING == 3200
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
}`,cf=`#define DISTANCE
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
}`,hf=`#define DISTANCE
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#include <common>
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
}`,gf=`uniform vec3 diffuse;
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
}`,_f=`#define LAMBERT
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
}`,vf=`#define LAMBERT
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
}`,xf=`#define MATCAP
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
}`,Mf=`#define MATCAP
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
}`,Sf=`#define NORMAL
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
}`,yf=`#define NORMAL
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
}`,bf=`#define PHONG
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
}`,Tf=`#define PHONG
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
}`,wf=`#define STANDARD
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
}`,Ef=`#define STANDARD
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
}`,Af=`#define TOON
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
}`,Rf=`#define TOON
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
}`,Cf=`uniform float size;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Df=`uniform vec3 color;
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
}`,If=`uniform float rotation;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:eu,alphahash_pars_fragment:iu,alphamap_fragment:nu,alphamap_pars_fragment:su,alphatest_fragment:ru,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:lu,batching_pars_vertex:cu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:gu,clipping_planes_pars_fragment:_u,clipping_planes_pars_vertex:vu,clipping_planes_vertex:xu,color_fragment:Mu,color_pars_fragment:Su,color_pars_vertex:yu,color_vertex:bu,common:Tu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:Eu,displacementmap_pars_vertex:Au,displacementmap_vertex:Ru,emissivemap_fragment:Cu,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Du,envmap_fragment:Iu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Nu,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:Yu,envmap_vertex:Ou,fog_vertex:Bu,fog_pars_vertex:zu,fog_fragment:ku,fog_pars_fragment:Vu,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:Hu,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:Ku,lights_toon_pars_fragment:$u,lights_phong_fragment:Zu,lights_phong_pars_fragment:ju,lights_physical_fragment:Ju,lights_physical_pars_fragment:Qu,lights_fragment_begin:td,lights_fragment_maps:ed,lights_fragment_end:id,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:ld,map_particle_fragment:cd,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:fd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:_d,normal_fragment_begin:vd,normal_fragment_maps:xd,normal_pars_fragment:Md,normal_pars_vertex:Sd,normal_vertex:yd,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:Ad,opaque_fragment:Rd,packing:Cd,premultiplied_alpha_fragment:Pd,project_vertex:Ld,dithering_fragment:Dd,dithering_pars_fragment:Id,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Od,shadowmap_vertex:Bd,shadowmask_pars_fragment:zd,skinbase_vertex:kd,skinning_pars_vertex:Vd,skinning_vertex:Gd,skinnormal_vertex:Hd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:Yd,transmission_fragment:Kd,transmission_pars_fragment:$d,uv_pars_fragment:Zd,uv_pars_vertex:jd,uv_vertex:Jd,worldpos_vertex:Qd,background_vert:tf,background_frag:ef,backgroundCube_vert:nf,backgroundCube_frag:sf,cube_vert:rf,cube_frag:af,depth_vert:of,depth_frag:lf,distanceRGBA_vert:cf,distanceRGBA_frag:hf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:pf,meshbasic_vert:mf,meshbasic_frag:gf,meshlambert_vert:_f,meshlambert_frag:vf,meshmatcap_vert:xf,meshmatcap_frag:Mf,meshnormal_vert:Sf,meshnormal_frag:yf,meshphong_vert:bf,meshphong_frag:Tf,meshphysical_vert:wf,meshphysical_frag:Ef,meshtoon_vert:Af,meshtoon_frag:Rf,points_vert:Cf,points_frag:Pf,shadow_vert:Lf,shadow_frag:Df,sprite_vert:If,sprite_frag:Uf},ot={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},oi={basic:{uniforms:De([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:De([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new dt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:De([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:De([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:De([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new dt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:De([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:De([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:De([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:De([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:De([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:De([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:De([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:De([ot.lights,ot.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};oi.physical={uniforms:De([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Us={r:0,b:0,g:0},Xi=new hi,Nf=new se;function Ff(s,t,e,i,n,r,a){const o=new dt(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const x=g(v);x===null?p(o,l):x&&x.isColor&&(p(x,1),M=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(v,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===fr)?(u===void 0&&(u=new xt(new ke(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:In(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Xi.copy(M.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nf.makeRotationFromEuler(Xi)),u.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ie,(h!==x||d!==x.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new xt(new si(2,2),new me({name:"BackgroundMaterial",uniforms:In(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,m=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(Us,xc(s)),i.buffers.color.setClear(Us.r,Us.g,Us.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:_,addToRenderList:f}}function Of(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,a=!1;function o(S,R,U,O,W){let X=!1;const H=h(O,U,R);r!==H&&(r=H,c(r.object)),X=m(S,O,U,W),X&&g(S,O,U,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(S,R,U,O),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,R,U){const O=U.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let X=W[R.id];X===void 0&&(X={},W[R.id]=X);let H=X[O];return H===void 0&&(H=d(l()),X[O]=H),H}function d(S){const R=[],U=[],O=[];for(let W=0;W<e;W++)R[W]=0,U[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:O,object:S,attributes:{},index:null}}function m(S,R,U,O){const W=r.attributes,X=R.attributes;let H=0;const $=U.getAttributes();for(const V in $)if($[V].location>=0){const rt=W[V];let gt=X[V];if(gt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),rt===void 0||rt.attribute!==gt||gt&&rt.data!==gt.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(S,R,U,O){const W={},X=R.attributes;let H=0;const $=U.getAttributes();for(const V in $)if($[V].location>=0){let rt=X[V];rt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor));const gt={};gt.attribute=rt,rt&&rt.data&&(gt.data=rt.data),W[V]=gt,H++}r.attributes=W,r.attributesNum=H,r.index=O}function _(){const S=r.newAttributes;for(let R=0,U=S.length;R<U;R++)S[R]=0}function f(S){p(S,0)}function p(S,R){const U=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;U[S]=1,O[S]===0&&(s.enableVertexAttribArray(S),O[S]=1),W[S]!==R&&(s.vertexAttribDivisor(S,R),W[S]=R)}function v(){const S=r.newAttributes,R=r.enabledAttributes;for(let U=0,O=R.length;U<O;U++)R[U]!==S[U]&&(s.disableVertexAttribArray(U),R[U]=0)}function M(S,R,U,O,W,X,H){H===!0?s.vertexAttribIPointer(S,R,U,W,X):s.vertexAttribPointer(S,R,U,O,W,X)}function x(S,R,U,O){_();const W=O.attributes,X=U.getAttributes(),H=R.defaultAttributeValues;for(const $ in X){const V=X[$];if(V.location>=0){let Q=W[$];if(Q===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const rt=Q.normalized,gt=Q.itemSize,Dt=t.get(Q);if(Dt===void 0)continue;const Yt=Dt.buffer,q=Dt.type,tt=Dt.bytesPerElement,ft=q===s.INT||q===s.UNSIGNED_INT||Q.gpuType===Ya;if(Q.isInterleavedBufferAttribute){const it=Q.data,vt=it.stride,At=Q.offset;if(it.isInstancedInterleavedBuffer){for(let at=0;at<V.locationSize;at++)p(V.location+at,it.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let at=0;at<V.locationSize;at++)f(V.location+at);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let at=0;at<V.locationSize;at++)M(V.location+at,gt/V.locationSize,q,rt,vt*tt,(At+gt/V.locationSize*at)*tt,ft)}else{if(Q.isInstancedBufferAttribute){for(let it=0;it<V.locationSize;it++)p(V.location+it,Q.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let it=0;it<V.locationSize;it++)f(V.location+it);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let it=0;it<V.locationSize;it++)M(V.location+it,gt/V.locationSize,q,rt,gt*tt,gt/V.locationSize*it*tt,ft)}}else if(H!==void 0){const rt=H[$];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(V.location,rt);break;case 3:s.vertexAttrib3fv(V.location,rt);break;case 4:s.vertexAttrib4fv(V.location,rt);break;default:s.vertexAttrib1fv(V.location,rt)}}}}v()}function L(){C();for(const S in i){const R=i[S];for(const U in R){const O=R[U];for(const W in O)u(O[W].object),delete O[W];delete R[U]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const U in R){const O=R[U];for(const W in O)u(O[W].object),delete O[W];delete R[U]}delete i[S.id]}function w(S){for(const R in i){const U=i[R];if(U[S.id]===void 0)continue;const O=U[S.id];for(const W in O)u(O[W].object),delete O[W];delete U[S.id]}}function C(){b(),a=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:f,disableUnusedAttributes:v}}function Bf(s,t,e){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,i,1)}function l(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zf(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){return!(w!==ii&&i.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ai&&i.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ci&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:L,maxSamples:E}}function kf(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Ki,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||n;return n=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,p=s.get(h);if(!n||g===null||g.length===0||r&&!f)r?u(null):c();else{const v=r?0:i,M=v*4;let x=p.clippingState||null;l.value=x,x=u(g,d,M,m);for(let L=0;L!==M;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,x=m;M!==_;++M,x+=4)a.copy(h[M]).applyMatrix4(v,o),a.normal.toArray(f,x),f[x+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Vf(s){let t=new WeakMap;function e(a,o){return o===da?a.mapping=Ln:o===fa&&(a.mapping=Dn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===da||o===fa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class so extends Mc{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const En=4,Yo=[.125,.215,.35,.446,.526,.582],Zi=20,zr=new so,Ko=new dt;let kr=null,Vr=0,Gr=0,Hr=!1;const $i=(1+Math.sqrt(5))/2,xn=1/$i,$o=[new P(-$i,xn,0),new P($i,xn,0),new P(-xn,0,$i),new P(xn,0,$i),new P(0,$i,-xn),new P(0,$i,xn),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){kr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Vr,Gr),this._renderer.xr.enabled=Hr,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ln||t.mapping===Dn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:ni,format:ii,colorSpace:Fn,depthBuffer:!1},n=jo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gf(r)),this._blurMaterial=Hf(r,t,e)}return n}_compileMaterial(t){const e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,i,n){const o=new Ye(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ko),u.toneMapping=zi,u.autoClear=!1;const m=new Ne({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new xt(new ke,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(Ko),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Ns(n,v*M,p>2?M:0,M,M),u.setRenderTarget(n),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Ln||t.mapping===Dn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ns(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,zr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$o[(n-r-1)%$o.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xt(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zi-1),_=r/g,f=isFinite(r)?1+Math.floor(u*_):Zi;f>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zi}`);const p=[];let v=0;for(let w=0;w<Zi;++w){const C=w/_,b=Math.exp(-C*C/2);p.push(b),w===0?v+=b:w<f&&(v+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const x=this._sizeLods[n],L=3*x*(n>M-En?n-M+En:0),E=4*(this._cubeSize-x);Ns(e,L,E,3*x,2*x),l.setRenderTarget(e),l.render(h,zr)}}function Gf(s){const t=[],e=[],i=[];let n=s;const r=s-En+1+Yo.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-En?l=Yo[a-s+En-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,p=1,v=new Float32Array(_*g*m),M=new Float32Array(f*g*m),x=new Float32Array(p*g*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,C=E>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(b,_*g*E),M.set(d,f*g*E);const S=[E,E,E,E,E,E];x.set(S,p*g*E)}const L=new re;L.setAttribute("position",new we(v,_)),L.setAttribute("uv",new we(M,f)),L.setAttribute("faceIndex",new we(x,p)),t.push(L),n>En&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jo(s,t,e){const i=new We(s,t,e);return i.texture.mapping=fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Hf(s,t,e){const i=new Float32Array(Zi),n=new P(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Ue,depthTest:!1,depthWrite:!1})}function Jo(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Ue,depthTest:!1,depthWrite:!1})}function Qo(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ue,depthTest:!1,depthWrite:!1})}function ro(){return`

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
	`}function Wf(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===da||l===fa,u=l===Ln||l===Dn;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Zo(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&n(m)?(e===null&&(e=new Zo(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Xf(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Jn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function qf(s,t,e,i){const n={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",a),delete n[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],s.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let M=0,x=v.length;M<x;M+=3){const L=v[M+0],E=v[M+1],w=v[M+2];d.push(L,E,E,w,w,L)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const L=M+0,E=M+1,w=M+2;d.push(L,E,E,w,w,L)}}else return;const f=new(dc(d)?vc:_c)(d,1);f.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Yf(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){s.drawElements(i,m,r,d*a),e.update(m,i,1)}function c(d,m,g){g!==0&&(s.drawElementsInstanced(i,m,r,d*a,g),e.update(m,i,g))}function u(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,i,1)}function h(d,m,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/a,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=m[v]*_[v];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Kf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function $f(s,t,e){const i=new WeakMap,n=new pe;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),f===!0&&(x=3);let L=o.attributes.position.count*x,E=1;L>t.maxTextureSize&&(E=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*E*4*h),C=new pc(w,L,E,h);C.type=ci,C.needsUpdate=!0;const b=x*4;for(let R=0;R<h;R++){const U=p[R],O=v[R],W=M[R],X=L*E*4*R;for(let H=0;H<U.count;H++){const $=H*b;g===!0&&(n.fromBufferAttribute(U,H),w[X+$+0]=n.x,w[X+$+1]=n.y,w[X+$+2]=n.z,w[X+$+3]=0),_===!0&&(n.fromBufferAttribute(O,H),w[X+$+4]=n.x,w[X+$+5]=n.y,w[X+$+6]=n.z,w[X+$+7]=0),f===!0&&(n.fromBufferAttribute(W,H),w[X+$+8]=n.x,w[X+$+9]=n.y,w[X+$+10]=n.z,w[X+$+11]=W.itemSize===4?n.w:1)}}d={count:h,texture:C,size:new wt(L,E)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Zf(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(n.get(h)!==c&&(t.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class ao extends Pe{constructor(t,e,i,n,r,a,o,l,c,u=An){if(u!==An&&u!==nn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===An&&(i=tn),i===void 0&&u===nn&&(i=en),super(null,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bc=new Pe,tl=new ao(1,1),Tc=new pc,wc=new Fh,Ec=new Sc,el=[],il=[],nl=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function Bn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=el[n];if(r===void 0&&(r=new Float32Array(n),el[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function mr(s,t){let e=il[t];e===void 0&&(e=new Int32Array(t),il[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function jf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function Qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function ep(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,i))return;rl.set(i),s.uniformMatrix2fv(this.addr,!1,rl),Me(e,i)}}function ip(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,i))return;sl.set(i),s.uniformMatrix3fv(this.addr,!1,sl),Me(e,i)}}function np(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,i))return;nl.set(i),s.uniformMatrix4fv(this.addr,!1,nl),Me(e,i)}}function sp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function dp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(tl.compareFunction=uc,r=tl):r=bc,e.setTexture2D(t||r,n)}function fp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||wc,n)}function pp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Ec,n)}function mp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Tc,n)}function gp(s){switch(s){case 5126:return jf;case 35664:return Jf;case 35665:return Qf;case 35666:return tp;case 35674:return ep;case 35675:return ip;case 35676:return np;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function _p(s,t){s.uniform1fv(this.addr,t)}function vp(s,t){const e=Bn(t,this.size,2);s.uniform2fv(this.addr,e)}function xp(s,t){const e=Bn(t,this.size,3);s.uniform3fv(this.addr,e)}function Mp(s,t){const e=Bn(t,this.size,4);s.uniform4fv(this.addr,e)}function Sp(s,t){const e=Bn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function yp(s,t){const e=Bn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bp(s,t){const e=Bn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tp(s,t){s.uniform1iv(this.addr,t)}function wp(s,t){s.uniform2iv(this.addr,t)}function Ep(s,t){s.uniform3iv(this.addr,t)}function Ap(s,t){s.uniform4iv(this.addr,t)}function Rp(s,t){s.uniform1uiv(this.addr,t)}function Cp(s,t){s.uniform2uiv(this.addr,t)}function Pp(s,t){s.uniform3uiv(this.addr,t)}function Lp(s,t){s.uniform4uiv(this.addr,t)}function Dp(s,t,e){const i=this.cache,n=t.length,r=mr(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||bc,r[a])}function Ip(s,t,e){const i=this.cache,n=t.length,r=mr(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||wc,r[a])}function Up(s,t,e){const i=this.cache,n=t.length,r=mr(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Ec,r[a])}function Np(s,t,e){const i=this.cache,n=t.length,r=mr(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Tc,r[a])}function Fp(s){switch(s){case 5126:return _p;case 35664:return vp;case 35665:return xp;case 35666:return Mp;case 35674:return Sp;case 35675:return yp;case 35676:return bp;case 5124:case 35670:return Tp;case 35667:case 35671:return wp;case 35668:case 35672:return Ep;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Np}}class Op{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gp(e.type)}}class Bp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fp(e.type)}}class zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function al(s,t){s.seq.push(t),s.map[t.id]=t}function kp(s,t,e){const i=s.name,n=i.length;for(Wr.lastIndex=0;;){const r=Wr.exec(i),a=Wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){al(e,c===void 0?new Op(o,s,t):new Bp(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new zp(o),al(e,h)),e=h}}}class nr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);kp(r,a,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function ol(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Vp=37297;let Gp=0;function Hp(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const ll=new kt;function Wp(s){Kt._getMatrix(ll,Kt.workingColorSpace,s);const t=`mat3( ${ll.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case pr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function cl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Hp(s.getShaderSource(t),a)}else return n}function Xp(s,t){const e=Wp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qp(s,t){let e;switch(t){case Zl:e="Linear";break;case jl:e="Reinhard";break;case Jl:e="Cineon";break;case qa:e="ACESFilmic";break;case Ql:e="AgX";break;case tc:e="Neutral";break;case Qc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fs=new P;function Yp(){Kt.getLuminanceCoefficients(Fs);const s=Fs.x.toFixed(4),t=Fs.y.toFixed(4),e=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qn).join(`
`)}function $p(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Qn(s){return s!==""}function hl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(s){return s.replace(jp,Qp)}const Jp=new Map;function Qp(s,t){let e=Gt[t];if(e===void 0){const i=Jp.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ga(e)}const tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(s){return s.replace(tm,em)}function em(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function fl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function im(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function nm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ln:case Dn:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Dn:t="ENVMAP_MODE_REFRACTION";break}return t}function rm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $l:t="ENVMAP_BLENDING_MULTIPLY";break;case jc:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function am(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function om(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=im(e),c=nm(e),u=sm(e),h=rm(e),d=am(e),m=Kp(e),g=$p(r),_=n.createProgram();let f,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qn).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qn).join(`
`),p.length>0&&(p+=`
`)):(f=[fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qn).join(`
`),p=[fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==zi?qp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Xp("linearToOutputTexel",e.outputColorSpace),Yp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qn).join(`
`)),a=Ga(a),a=hl(a,e),a=ul(a,e),o=Ga(o),o=hl(o,e),o=ul(o,e),a=dl(a),o=dl(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+f+a,x=v+p+o,L=ol(n,n.VERTEX_SHADER,M),E=ol(n,n.FRAGMENT_SHADER,x);n.attachShader(_,L),n.attachShader(_,E),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(R){if(s.debug.checkShaderErrors){const U=n.getProgramInfoLog(_).trim(),O=n.getShaderInfoLog(L).trim(),W=n.getShaderInfoLog(E).trim();let X=!0,H=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,L,E);else{const $=cl(n,L,"vertex"),V=cl(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+$+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||W==="")&&(H=!1);H&&(R.diagnostics={runnable:X,programLog:U,vertexShader:{log:O,prefix:f},fragmentShader:{log:W,prefix:p}})}n.deleteShader(L),n.deleteShader(E),C=new nr(n,_),b=Zp(n,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(_,Vp)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=E,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new hm(t),e.set(t,i)),i}}class hm{constructor(t){this.id=lm++,this.code=t,this.usedTimes=0}}function um(s,t,e,i,n,r,a){const o=new mc,l=new cm,c=new Set,u=[],h=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function f(b,S,R,U,O){const W=U.fog,X=O.geometry,H=b.isMeshStandardMaterial?U.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),V=$&&$.mapping===fr?$.image.height:null,Q=g[b.type];b.precision!==null&&(m=n.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=rt!==void 0?rt.length:0;let Dt=0;X.morphAttributes.position!==void 0&&(Dt=1),X.morphAttributes.normal!==void 0&&(Dt=2),X.morphAttributes.color!==void 0&&(Dt=3);let Yt,q,tt,ft;if(Q){const ee=oi[Q];Yt=ee.vertexShader,q=ee.fragmentShader}else Yt=b.vertexShader,q=b.fragmentShader,l.update(b),tt=l.getVertexShaderID(b),ft=l.getFragmentShaderID(b);const it=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),At=O.isInstancedMesh===!0,at=O.isBatchedMesh===!0,Pt=!!b.map,It=!!b.matcap,Xt=!!$,I=!!b.aoMap,he=!!b.lightMap,Vt=!!b.bumpMap,Ot=!!b.normalMap,Ct=!!b.displacementMap,te=!!b.emissiveMap,Rt=!!b.metalnessMap,A=!!b.roughnessMap,y=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,j=b.iridescence>0,Y=b.sheen>0,_t=b.transmission>0,st=y&&!!b.anisotropyMap,lt=B&&!!b.clearcoatMap,Wt=B&&!!b.clearcoatNormalMap,J=B&&!!b.clearcoatRoughnessMap,pt=j&&!!b.iridescenceMap,Lt=j&&!!b.iridescenceThicknessMap,Ut=Y&&!!b.sheenColorMap,mt=Y&&!!b.sheenRoughnessMap,qt=!!b.specularMap,Nt=!!b.specularColorMap,Zt=!!b.specularIntensityMap,D=_t&&!!b.transmissionMap,nt=_t&&!!b.thicknessMap,G=!!b.gradientMap,Z=!!b.alphaMap,ut=b.alphaTest>0,ct=!!b.alphaHash,Bt=!!b.extensions;let ue=zi;b.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Ee={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Yt,fragmentShader:q,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:at,batchingColor:at&&O._colorsTexture!==null,instancing:At,instancingColor:At&&O.instanceColor!==null,instancingMorph:At&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Fn,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:It,envMap:Xt,envMapMode:Xt&&$.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:he,bumpMap:Vt,normalMap:Ot,displacementMap:d&&Ct,emissiveMap:te,normalMapObjectSpace:Ot&&b.normalMapType===nh,normalMapTangentSpace:Ot&&b.normalMapType===to,metalnessMap:Rt,roughnessMap:A,anisotropy:y,anisotropyMap:st,clearcoat:B,clearcoatMap:lt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:J,dispersion:K,iridescence:j,iridescenceMap:pt,iridescenceThicknessMap:Lt,sheen:Y,sheenColorMap:Ut,sheenRoughnessMap:mt,specularMap:qt,specularColorMap:Nt,specularIntensityMap:Zt,transmission:_t,transmissionMap:D,thicknessMap:nt,gradientMap:G,opaque:b.transparent===!1&&b.blending===Bi&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:ct,combine:b.combine,mapUv:Pt&&_(b.map.channel),aoMapUv:I&&_(b.aoMap.channel),lightMapUv:he&&_(b.lightMap.channel),bumpMapUv:Vt&&_(b.bumpMap.channel),normalMapUv:Ot&&_(b.normalMap.channel),displacementMapUv:Ct&&_(b.displacementMap.channel),emissiveMapUv:te&&_(b.emissiveMap.channel),metalnessMapUv:Rt&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:st&&_(b.anisotropyMap.channel),clearcoatMapUv:lt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(b.sheenRoughnessMap.channel),specularMapUv:qt&&_(b.specularMap.channel),specularColorMapUv:Nt&&_(b.specularColorMap.channel),specularIntensityMapUv:Zt&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:nt&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ot||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Pt||Z),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Dt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&Kt.getTransfer(b.map.colorSpace)===ie,decodeVideoTextureEmissive:te&&b.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(b.emissiveMap.colorSpace)===ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fe,flipSided:b.side===Oe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||at)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(v(S,b),M(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const S=g[b.type];let R;if(S){const U=oi[S];R=bi.clone(U.uniforms)}else R=b.uniforms;return R}function L(b,S){let R;for(let U=0,O=u.length;U<O;U++){const W=u[U];if(W.cacheKey===S){R=W,++R.usedTimes;break}}return R===void 0&&(R=new om(s,S,b,r),u.push(R)),R}function E(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:C}}function dm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function fm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function pl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ml(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(h,d,m,g,_,f){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=f),t++,p}function o(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?i.push(p):m.transparent===!0?n.push(p):e.push(p)}function l(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?i.unshift(p):m.transparent===!0?n.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||fm),i.length>1&&i.sort(d||pl),n.length>1&&n.sort(d||pl)}function u(){for(let h=t,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function pm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new ml,s.set(i,[a])):n>=r.length?(a=new ml,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function mm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new dt};break;case"SpotLight":e={position:new P,direction:new P,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let _m=0;function vm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xm(s){const t=new mm,e=gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,r=new se,a=new se;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,v=0,M=0,x=0,L=0,E=0,w=0;c.sort(vm);for(let b=0,S=c.length;b<S;b++){const R=c[b],U=R.color,O=R.intensity,W=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=U.r*O,h+=U.g*O,d+=U.b*O;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],O);w++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=R.shadow.matrix,v++}i.directional[m]=H,m++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(U).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[_]=H;const $=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,$.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[_]=$.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=X,x++}_++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(U).multiplyScalar(O),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[f]=H,f++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const $=R.shadow,V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(O),H.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[p]=H,p++}}f>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==f||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==x||C.numSpotMaps!==L||C.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=f,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+L-E,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=f,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=x,C.numSpotMaps=L,C.numLightProbes=w,i.version=_m++)}function l(c,u){let h=0,d=0,m=0,g=0,_=0;const f=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const M=c[p];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(f),h++}else if(M.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(f),m++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:i}}function gl(s){const t=new xm(s),e=[],i=[];function n(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mm(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new gl(s),t.set(n,[o])):r>=a.length?(o=new gl(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Sm extends Ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ym extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
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
}`;function wm(s,t,e){let i=new no;const n=new wt,r=new wt,a=new pe,o=new Sm({depthPacking:ih}),l=new ym,c={},u=e.maxTextureSize,h={[Ei]:Oe,[Oe]:Ei,[Fe]:Fe},d=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:bm,fragmentShader:Tm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new re;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let p=this.type;this.render=function(E,w,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Ue),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==vi&&this.type===vi,W=p===vi&&this.type!==vi;for(let X=0,H=E.length;X<H;X++){const $=E[X],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const Q=V.getFrameExtents();if(n.multiply(Q),r.copy(V.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/Q.x),n.x=r.x*Q.x,V.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/Q.y),n.y=r.y*Q.y,V.mapSize.y=r.y)),V.map===null||O===!0||W===!0){const gt=this.type!==vi?{minFilter:Be,magFilter:Be}:{};V.map!==null&&V.map.dispose(),V.map=new We(n.x,n.y,gt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const rt=V.getViewportCount();for(let gt=0;gt<rt;gt++){const Dt=V.getViewport(gt);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),U.viewport(a),V.updateMatrices($,gt),i=V.getFrustum(),x(w,C,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===vi&&v(V,C),V.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(b,S,R)};function v(E,w){const C=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new We(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,C,m,_,null)}function M(E,w,C,b){let S=null;const R=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=C.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=S.uuid,O=w.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let X=W[O];X===void 0&&(X=S.clone(),W[O]=X,w.addEventListener("dispose",L)),S=X}if(S.visible=w.visible,S.wireframe=w.wireframe,b===vi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=s.properties.get(S);U.light=C}return S}function x(E,w,C,b,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===vi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const O=t.update(E),W=E.material;if(Array.isArray(W)){const X=O.groups;for(let H=0,$=X.length;H<$;H++){const V=X[H],Q=W[V.materialIndex];if(Q&&Q.visible){const rt=M(E,Q,b,S);E.onBeforeShadow(s,E,w,C,O,rt,V),s.renderBufferDirect(C,null,O,rt,E,V),E.onAfterShadow(s,E,w,C,O,rt,V)}}}else if(W.visible){const X=M(E,W,b,S);E.onBeforeShadow(s,E,w,C,O,X,null),s.renderBufferDirect(C,null,O,X,E,null),E.onAfterShadow(s,E,w,C,O,X,null)}}const U=E.children;for(let O=0,W=U.length;O<W;O++)x(U[O],w,C,b,S)}function L(E){E.target.removeEventListener("dispose",L);for(const C in c){const b=c[C],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Em={[ra]:aa,[oa]:ha,[la]:ua,[Pn]:ca,[aa]:ra,[ha]:oa,[ua]:la,[ca]:Pn};function Am(s,t){function e(){let D=!1;const nt=new pe;let G=null;const Z=new pe(0,0,0,0);return{setMask:function(ut){G!==ut&&!D&&(s.colorMask(ut,ut,ut,ut),G=ut)},setLocked:function(ut){D=ut},setClear:function(ut,ct,Bt,ue,Ee){Ee===!0&&(ut*=ue,ct*=ue,Bt*=ue),nt.set(ut,ct,Bt,ue),Z.equals(nt)===!1&&(s.clearColor(ut,ct,Bt,ue),Z.copy(nt))},reset:function(){D=!1,G=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,nt=!1,G=null,Z=null,ut=null;return{setReversed:function(ct){if(nt!==ct){const Bt=t.get("EXT_clip_control");nt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ut;ut=null,this.setClear(ue)}nt=ct},getReversed:function(){return nt},setTest:function(ct){ct?it(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(ct){G!==ct&&!D&&(s.depthMask(ct),G=ct)},setFunc:function(ct){if(nt&&(ct=Em[ct]),Z!==ct){switch(ct){case ra:s.depthFunc(s.NEVER);break;case aa:s.depthFunc(s.ALWAYS);break;case oa:s.depthFunc(s.LESS);break;case Pn:s.depthFunc(s.LEQUAL);break;case la:s.depthFunc(s.EQUAL);break;case ca:s.depthFunc(s.GEQUAL);break;case ha:s.depthFunc(s.GREATER);break;case ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ut!==ct&&(nt&&(ct=1-ct),s.clearDepth(ct),ut=ct)},reset:function(){D=!1,G=null,Z=null,ut=null,nt=!1}}}function n(){let D=!1,nt=null,G=null,Z=null,ut=null,ct=null,Bt=null,ue=null,Ee=null;return{setTest:function(ee){D||(ee?it(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(ee){nt!==ee&&!D&&(s.stencilMask(ee),nt=ee)},setFunc:function(ee,$e,ui){(G!==ee||Z!==$e||ut!==ui)&&(s.stencilFunc(ee,$e,ui),G=ee,Z=$e,ut=ui)},setOp:function(ee,$e,ui){(ct!==ee||Bt!==$e||ue!==ui)&&(s.stencilOp(ee,$e,ui),ct=ee,Bt=$e,ue=ui)},setLocked:function(ee){D=ee},setClear:function(ee){Ee!==ee&&(s.clearStencil(ee),Ee=ee)},reset:function(){D=!1,nt=null,G=null,Z=null,ut=null,ct=null,Bt=null,ue=null,Ee=null}}}const r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],g=null,_=!1,f=null,p=null,v=null,M=null,x=null,L=null,E=null,w=new dt(0,0,0),C=0,b=!1,S=null,R=null,U=null,O=null,W=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let Q=null,rt={};const gt=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),Yt=new pe().fromArray(gt),q=new pe().fromArray(Dt);function tt(D,nt,G,Z){const ut=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<G;Bt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(nt+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ct}const ft={};ft[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(s.DEPTH_TEST),a.setFunc(Pn),Vt(!1),Ot(So),it(s.CULL_FACE),I(Ue);function it(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function vt(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function At(D,nt){return h[D]!==nt?(s.bindFramebuffer(D,nt),h[D]=nt,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=nt),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function at(D,nt){let G=m,Z=!1;if(D){G=d.get(nt),G===void 0&&(G=[],d.set(nt,G));const ut=D.textures;if(G.length!==ut.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Bt=ut.length;ct<Bt;ct++)G[ct]=s.COLOR_ATTACHMENT0+ct;G.length=ut.length,Z=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Z=!0);Z&&s.drawBuffers(G)}function Pt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const It={[Mi]:s.FUNC_ADD,[Oc]:s.FUNC_SUBTRACT,[Bc]:s.FUNC_REVERSE_SUBTRACT};It[zc]=s.MIN,It[kc]=s.MAX;const Xt={[ia]:s.ZERO,[Vc]:s.ONE,[Gc]:s.SRC_COLOR,[na]:s.SRC_ALPHA,[qc]:s.SRC_ALPHA_SATURATE,[Kl]:s.DST_COLOR,[Yl]:s.DST_ALPHA,[Hc]:s.ONE_MINUS_SRC_COLOR,[sa]:s.ONE_MINUS_SRC_ALPHA,[Xc]:s.ONE_MINUS_DST_COLOR,[Wc]:s.ONE_MINUS_DST_ALPHA,[Yc]:s.CONSTANT_COLOR,[Kc]:s.ONE_MINUS_CONSTANT_COLOR,[$c]:s.CONSTANT_ALPHA,[Zc]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,nt,G,Z,ut,ct,Bt,ue,Ee,ee){if(D===Ue){_===!0&&(vt(s.BLEND),_=!1);return}if(_===!1&&(it(s.BLEND),_=!0),D!==ql){if(D!==f||ee!==b){if((p!==Mi||x!==Mi)&&(s.blendEquation(s.FUNC_ADD),p=Mi,x=Mi),ee)switch(D){case Bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qi:s.blendFunc(s.ONE,s.ONE);break;case yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,M=null,L=null,E=null,w.set(0,0,0),C=0,f=D,b=ee}return}ut=ut||nt,ct=ct||G,Bt=Bt||Z,(nt!==p||ut!==x)&&(s.blendEquationSeparate(It[nt],It[ut]),p=nt,x=ut),(G!==v||Z!==M||ct!==L||Bt!==E)&&(s.blendFuncSeparate(Xt[G],Xt[Z],Xt[ct],Xt[Bt]),v=G,M=Z,L=ct,E=Bt),(ue.equals(w)===!1||Ee!==C)&&(s.blendColor(ue.r,ue.g,ue.b,Ee),w.copy(ue),C=Ee),f=D,b=!1}function he(D,nt){D.side===Fe?vt(s.CULL_FACE):it(s.CULL_FACE);let G=D.side===Oe;nt&&(G=!G),Vt(G),D.blending===Bi&&D.transparent===!1?I(Ue):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function Ot(D){D!==Nc?(it(s.CULL_FACE),D!==R&&(D===So?s.cullFace(s.BACK):D===Fc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),R=D}function Ct(D){D!==U&&(H&&s.lineWidth(D),U=D)}function te(D,nt,G){D?(it(s.POLYGON_OFFSET_FILL),(O!==nt||W!==G)&&(s.polygonOffset(nt,G),O=nt,W=G)):vt(s.POLYGON_OFFSET_FILL)}function Rt(D){D?it(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+X-1),Q!==D&&(s.activeTexture(D),Q=D)}function y(D,nt,G){G===void 0&&(Q===null?G=s.TEXTURE0+X-1:G=Q);let Z=rt[G];Z===void 0&&(Z={type:void 0,texture:void 0},rt[G]=Z),(Z.type!==D||Z.texture!==nt)&&(Q!==G&&(s.activeTexture(G),Q=G),s.bindTexture(D,nt||ft[D]),Z.type=D,Z.texture=nt)}function B(){const D=rt[Q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(D){Yt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Yt.copy(D))}function mt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function qt(D,nt){let G=c.get(nt);G===void 0&&(G=new WeakMap,c.set(nt,G));let Z=G.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(nt,D.name),G.set(D,Z))}function Nt(D,nt){const Z=c.get(nt).get(D);l.get(nt)!==Z&&(s.uniformBlockBinding(nt,Z,D.__bindingPointIndex),l.set(nt,Z))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Q=null,rt={},h={},d=new WeakMap,m=[],g=null,_=!1,f=null,p=null,v=null,M=null,x=null,L=null,E=null,w=new dt(0,0,0),C=0,b=!1,S=null,R=null,U=null,O=null,W=null,Yt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:vt,bindFramebuffer:At,drawBuffers:at,useProgram:Pt,setBlending:I,setMaterial:he,setFlipSided:Vt,setCullFace:Ot,setLineWidth:Ct,setPolygonOffset:te,setScissorTest:Rt,activeTexture:A,bindTexture:y,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:pt,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:Nt,texStorage2D:Wt,texStorage3D:J,texSubImage2D:Y,texSubImage3D:_t,compressedTexSubImage2D:st,compressedTexSubImage3D:lt,scissor:Ut,viewport:mt,reset:Zt}}function _l(s,t,e,i){const n=Rm(i);switch(e){case rc:return s*t;case oc:return s*t;case lc:return s*t*2;case Za:return s*t/n.components*n.byteLength;case ja:return s*t/n.components*n.byteLength;case cc:return s*t*2/n.components*n.byteLength;case Ja:return s*t*2/n.components*n.byteLength;case ac:return s*t*3/n.components*n.byteLength;case ii:return s*t*4/n.components*n.byteLength;case Qa:return s*t*4/n.components*n.byteLength;case Js:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ga:case va:return Math.max(s,16)*Math.max(t,8)/4;case ma:case _a:return Math.max(s,8)*Math.max(t,8)/2;case xa:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ir:case Fa:case Oa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hc:case Ba:return Math.ceil(s/4)*Math.ceil(t/4)*8;case za:case ka:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rm(s){switch(s){case Ai:case ic:return{byteLength:1,components:1};case as:case nc:case ni:return{byteLength:2,components:1};case Ka:case $a:return{byteLength:2,components:4};case tn:case Ya:case ci:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Cm(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return m?new OffscreenCanvas(A,y):lr("canvas")}function _(A,y,B){let K=1;const j=Rt(A);if((j.width>B||j.height>B)&&(K=B/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(K*j.width),_t=Math.floor(K*j.height);h===void 0&&(h=g(Y,_t));const st=y?g(Y,_t):h;return st.width=Y,st.height=_t,st.getContext("2d").drawImage(A,0,0,Y,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+_t+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function f(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(A,y,B,K,j=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=y;if(y===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),y===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),y===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),y===s.RGBA){const _t=j?pr:Kt.getTransfer(K);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=_t===ie?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(A,y){let B;return A?y===null||y===tn||y===en?B=s.DEPTH24_STENCIL8:y===ci?B=s.DEPTH32F_STENCIL8:y===as&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===tn||y===en?B=s.DEPTH_COMPONENT24:y===ci?B=s.DEPTH_COMPONENT32F:y===as&&(B=s.DEPTH_COMPONENT16),B}function L(A,y){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==li?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function E(A){const y=A.target;y.removeEventListener("dispose",E),C(y),y.isVideoTexture&&u.delete(y)}function w(A){const y=A.target;y.removeEventListener("dispose",w),S(y)}function C(A){const y=i.get(A);if(y.__webglInit===void 0)return;const B=A.source,K=d.get(B);if(K){const j=K[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(A),Object.keys(K).length===0&&d.delete(B)}i.remove(A)}function b(A){const y=i.get(A);s.deleteTexture(y.__webglTexture);const B=A.source,K=d.get(B);delete K[y.__cacheKey],a.memory.textures--}function S(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let j=0;j<y.__webglFramebuffer[K].length;j++)s.deleteFramebuffer(y.__webglFramebuffer[K][j]);else s.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)s.deleteFramebuffer(y.__webglFramebuffer[K]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,j=B.length;K<j;K++){const Y=i.get(B[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(B[K])}i.remove(A)}let R=0;function U(){R=0}function O(){const A=R;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),R+=1,A}function W(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const B=i.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,A,y);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function H(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function $(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,y);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function V(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){tt(B,A,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const Q={[rs]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[pa]:s.MIRRORED_REPEAT},rt={[Be]:s.NEAREST,[th]:s.NEAREST_MIPMAP_NEAREST,[gs]:s.NEAREST_MIPMAP_LINEAR,[li]:s.LINEAR,[vr]:s.LINEAR_MIPMAP_NEAREST,[Ji]:s.LINEAR_MIPMAP_LINEAR},gt={[sh]:s.NEVER,[hh]:s.ALWAYS,[rh]:s.LESS,[uc]:s.LEQUAL,[ah]:s.EQUAL,[ch]:s.GEQUAL,[oh]:s.GREATER,[lh]:s.NOTEQUAL};function Dt(A,y){if(y.type===ci&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===li||y.magFilter===vr||y.magFilter===gs||y.magFilter===Ji||y.minFilter===li||y.minFilter===vr||y.minFilter===gs||y.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Q[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Q[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Q[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,rt[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,rt[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Be||y.minFilter!==gs&&y.minFilter!==Ji||y.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Yt(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",E));const K=y.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const Y=W(y);if(Y!==A.__cacheKey){j[Y]===void 0&&(j[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[Y].usedTimes++;const _t=j[A.__cacheKey];_t!==void 0&&(j[A.__cacheKey].usedTimes--,_t.usedTimes===0&&b(y)),A.__cacheKey=Y,A.__webglTexture=j[Y].texture}return B}function q(A,y,B){let K=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=s.TEXTURE_3D);const j=Yt(A,y),Y=y.source;e.bindTexture(K,A.__webglTexture,s.TEXTURE0+B);const _t=i.get(Y);if(Y.version!==_t.__version||j===!0){e.activeTexture(s.TEXTURE0+B);const st=Kt.getPrimaries(Kt.workingColorSpace),lt=y.colorSpace===Oi?null:Kt.getPrimaries(y.colorSpace),Wt=y.colorSpace===Oi||st===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let J=_(y.image,!1,n.maxTextureSize);J=te(y,J);const pt=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type);let Ut=M(y.internalFormat,pt,Lt,y.colorSpace,y.isVideoTexture);Dt(K,y);let mt;const qt=y.mipmaps,Nt=y.isVideoTexture!==!0,Zt=_t.__version===void 0||j===!0,D=Y.dataReady,nt=L(y,J);if(y.isDepthTexture)Ut=x(y.format===nn,y.type),Zt&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Ut,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,Ut,J.width,J.height,0,pt,Lt,null));else if(y.isDataTexture)if(qt.length>0){Nt&&Zt&&e.texStorage2D(s.TEXTURE_2D,nt,Ut,qt[0].width,qt[0].height);for(let G=0,Z=qt.length;G<Z;G++)mt=qt[G],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Lt,mt.data):e.texImage2D(s.TEXTURE_2D,G,Ut,mt.width,mt.height,0,pt,Lt,mt.data);y.generateMipmaps=!1}else Nt?(Zt&&e.texStorage2D(s.TEXTURE_2D,nt,Ut,J.width,J.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,pt,Lt,J.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,J.width,J.height,0,pt,Lt,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Nt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,Ut,qt[0].width,qt[0].height,J.depth);for(let G=0,Z=qt.length;G<Z;G++)if(mt=qt[G],y.format!==ii)if(pt!==null)if(Nt){if(D)if(y.layerUpdates.size>0){const ut=_l(mt.width,mt.height,y.format,y.type);for(const ct of y.layerUpdates){const Bt=mt.data.subarray(ct*ut/mt.data.BYTES_PER_ELEMENT,(ct+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ct,mt.width,mt.height,1,pt,Bt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,J.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Ut,mt.width,mt.height,J.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,J.depth,pt,Lt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Ut,mt.width,mt.height,J.depth,0,pt,Lt,mt.data)}else{Nt&&Zt&&e.texStorage2D(s.TEXTURE_2D,nt,Ut,qt[0].width,qt[0].height);for(let G=0,Z=qt.length;G<Z;G++)mt=qt[G],y.format!==ii?pt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Ut,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Lt,mt.data):e.texImage2D(s.TEXTURE_2D,G,Ut,mt.width,mt.height,0,pt,Lt,mt.data)}else if(y.isDataArrayTexture)if(Nt){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,Ut,J.width,J.height,J.depth),D)if(y.layerUpdates.size>0){const G=_l(J.width,J.height,y.format,y.type);for(const Z of y.layerUpdates){const ut=J.data.subarray(Z*G/J.data.BYTES_PER_ELEMENT,(Z+1)*G/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,pt,Lt,ut)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pt,Lt,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,J.width,J.height,J.depth,0,pt,Lt,J.data);else if(y.isData3DTexture)Nt?(Zt&&e.texStorage3D(s.TEXTURE_3D,nt,Ut,J.width,J.height,J.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pt,Lt,J.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,J.width,J.height,J.depth,0,pt,Lt,J.data);else if(y.isFramebufferTexture){if(Zt)if(Nt)e.texStorage2D(s.TEXTURE_2D,nt,Ut,J.width,J.height);else{let G=J.width,Z=J.height;for(let ut=0;ut<nt;ut++)e.texImage2D(s.TEXTURE_2D,ut,Ut,G,Z,0,pt,Lt,null),G>>=1,Z>>=1}}else if(qt.length>0){if(Nt&&Zt){const G=Rt(qt[0]);e.texStorage2D(s.TEXTURE_2D,nt,Ut,G.width,G.height)}for(let G=0,Z=qt.length;G<Z;G++)mt=qt[G],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt,Lt,mt):e.texImage2D(s.TEXTURE_2D,G,Ut,pt,Lt,mt);y.generateMipmaps=!1}else if(Nt){if(Zt){const G=Rt(J);e.texStorage2D(s.TEXTURE_2D,nt,Ut,G.width,G.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Lt,J)}else e.texImage2D(s.TEXTURE_2D,0,Ut,pt,Lt,J);f(y)&&p(K),_t.__version=Y.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function tt(A,y,B){if(y.image.length!==6)return;const K=Yt(A,y),j=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const Y=i.get(j);if(j.version!==Y.__version||K===!0){e.activeTexture(s.TEXTURE0+B);const _t=Kt.getPrimaries(Kt.workingColorSpace),st=y.colorSpace===Oi?null:Kt.getPrimaries(y.colorSpace),lt=y.colorSpace===Oi||_t===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Wt=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Wt&&!J?pt[Z]=_(y.image[Z],!0,n.maxCubemapSize):pt[Z]=J?y.image[Z].image:y.image[Z],pt[Z]=te(y,pt[Z]);const Lt=pt[0],Ut=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),qt=M(y.internalFormat,Ut,mt,y.colorSpace),Nt=y.isVideoTexture!==!0,Zt=Y.__version===void 0||K===!0,D=j.dataReady;let nt=L(y,Lt);Dt(s.TEXTURE_CUBE_MAP,y);let G;if(Wt){Nt&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,qt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){G=pt[Z].mipmaps;for(let ut=0;ut<G.length;ut++){const ct=G[ut];y.format!==ii?Ut!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Ut,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,qt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Ut,mt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,qt,ct.width,ct.height,0,Ut,mt,ct.data)}}}else{if(G=y.mipmaps,Nt&&Zt){G.length>0&&nt++;const Z=Rt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,qt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Ut,mt,pt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,pt[Z].width,pt[Z].height,0,Ut,mt,pt[Z].data);for(let ut=0;ut<G.length;ut++){const Bt=G[ut].image[Z].image;Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Bt.width,Bt.height,Ut,mt,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,qt,Bt.width,Bt.height,0,Ut,mt,Bt.data)}}else{Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ut,mt,pt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,Ut,mt,pt[Z]);for(let ut=0;ut<G.length;ut++){const ct=G[ut];Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ut,mt,ct.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,qt,Ut,mt,ct.image[Z])}}}f(y)&&p(s.TEXTURE_CUBE_MAP),Y.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ft(A,y,B,K,j,Y){const _t=r.convert(B.format,B.colorSpace),st=r.convert(B.type),lt=M(B.internalFormat,_t,st,B.colorSpace),Wt=i.get(y),J=i.get(B);if(J.__renderTarget=y,!Wt.__hasExternalTextures){const pt=Math.max(1,y.width>>Y),Lt=Math.max(1,y.height>>Y);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,lt,pt,Lt,y.depth,0,_t,st,null):e.texImage2D(j,Y,lt,pt,Lt,0,_t,st,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Ot(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,j,J.__webglTexture,0,Vt(y)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,j,J.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(A,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){const K=y.depthTexture,j=K&&K.isDepthTexture?K.type:null,Y=x(y.stencilBuffer,j),_t=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=Vt(y);Ot(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,Y,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,Y,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Y,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,A)}else{const K=y.textures;for(let j=0;j<K.length;j++){const Y=K[j],_t=r.convert(Y.format,Y.colorSpace),st=r.convert(Y.type),lt=M(Y.internalFormat,_t,st,Y.colorSpace),Wt=Vt(y);B&&Ot(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,lt,y.width,y.height):Ot(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,lt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,lt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const j=K.__webglTexture,Y=Vt(y);if(y.depthTexture.format===An)Ot(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(y.depthTexture.format===nn)Ot(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function At(A){const y=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=K}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");vt(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=s.createRenderbuffer(),it(y.__webglDepthbuffer[K],A,!1);else{const j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),it(y.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(A,y,B){const K=i.get(A);y!==void 0&&ft(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&At(A)}function Pt(A){const y=A.texture,B=i.get(A),K=i.get(y);A.addEventListener("dispose",w);const j=A.textures,Y=A.isWebGLCubeRenderTarget===!0,_t=j.length>1;if(_t||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=y.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[st]=[];for(let lt=0;lt<y.mipmaps.length;lt++)B.__webglFramebuffer[st][lt]=s.createFramebuffer()}else B.__webglFramebuffer[st]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)B.__webglFramebuffer[st]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(_t)for(let st=0,lt=j.length;st<lt;st++){const Wt=i.get(j[st]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Ot(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){const lt=j[st];B.__webglColorRenderbuffer[st]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[st]);const Wt=r.convert(lt.format,lt.colorSpace),J=r.convert(lt.type),pt=M(lt.internalFormat,Wt,J,lt.colorSpace,A.isXRRenderTarget===!0),Lt=Vt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,pt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,B.__webglColorRenderbuffer[st])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),it(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,y);for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)ft(B.__webglFramebuffer[st][lt],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else ft(B.__webglFramebuffer[st],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);f(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let st=0,lt=j.length;st<lt;st++){const Wt=j[st],J=i.get(Wt);e.bindTexture(s.TEXTURE_2D,J.__webglTexture),Dt(s.TEXTURE_2D,Wt),ft(B.__webglFramebuffer,A,Wt,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,0),f(Wt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let st=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),Dt(st,y),y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)ft(B.__webglFramebuffer[lt],A,y,s.COLOR_ATTACHMENT0,st,lt);else ft(B.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,st,0);f(y)&&p(st),e.unbindTexture()}A.depthBuffer&&At(A)}function It(A){const y=A.textures;for(let B=0,K=y.length;B<K;B++){const j=y[B];if(f(j)){const Y=v(A),_t=i.get(j).__webglTexture;e.bindTexture(Y,_t),p(Y),e.unbindTexture()}}}const Xt=[],I=[];function he(A){if(A.samples>0){if(Ot(A)===!1){const y=A.textures,B=A.width,K=A.height;let j=s.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=i.get(A),st=y.length>1;if(st)for(let lt=0;lt<y.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let lt=0;lt<y.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),st){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[lt]);const Wt=i.get(y[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,j,s.NEAREST),l===!0&&(Xt.length=0,I.length=0,Xt.push(s.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Xt.push(Y),I.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),st)for(let lt=0;lt<y.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[lt]);const Wt=i.get(y[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Vt(A){return Math.min(n.maxSamples,A.samples)}function Ot(A){const y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ct(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function te(A,y){const B=A.colorSpace,K=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Fn&&B!==Oi&&(Kt.getTransfer(B)===ie?(K!==ii||j!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=at,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Ot}function Pm(s,t){function e(i,n=Oi){let r;const a=Kt.getTransfer(n);if(i===Ai)return s.UNSIGNED_BYTE;if(i===Ka)return s.UNSIGNED_SHORT_4_4_4_4;if(i===$a)return s.UNSIGNED_SHORT_5_5_5_1;if(i===sc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ic)return s.BYTE;if(i===nc)return s.SHORT;if(i===as)return s.UNSIGNED_SHORT;if(i===Ya)return s.INT;if(i===tn)return s.UNSIGNED_INT;if(i===ci)return s.FLOAT;if(i===ni)return s.HALF_FLOAT;if(i===rc)return s.ALPHA;if(i===ac)return s.RGB;if(i===ii)return s.RGBA;if(i===oc)return s.LUMINANCE;if(i===lc)return s.LUMINANCE_ALPHA;if(i===An)return s.DEPTH_COMPONENT;if(i===nn)return s.DEPTH_STENCIL;if(i===Za)return s.RED;if(i===ja)return s.RED_INTEGER;if(i===cc)return s.RG;if(i===Ja)return s.RG_INTEGER;if(i===Qa)return s.RGBA_INTEGER;if(i===Js||i===Qs||i===tr||i===er)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ma||i===ga||i===_a||i===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xa||i===Ma||i===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xa||i===Ma)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ya||i===ba||i===Ta||i===wa||i===Ea||i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ta)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Aa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ra)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ca)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===La)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Da)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ia)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ua)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Na)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ir||i===Fa||i===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ir)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===Ba||i===za||i===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ir)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===en?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class Lm extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fe extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dm={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,i),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Um=`
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

}`;class Nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Pe,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new me({vertexShader:Im,fragmentShader:Um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fm extends On{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const _=new Nm,f=e.getContextAttributes();let p=null,v=null;const M=[],x=[],L=new wt;let E=null;const w=new Ye;w.viewport=new pe;const C=new Ye;C.viewport=new pe;const b=[w,C],S=new Lm;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=M[q];return tt===void 0&&(tt=new Xr,M[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=M[q];return tt===void 0&&(tt=new Xr,M[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=M[q];return tt===void 0&&(tt=new Xr,M[q]=tt),tt.getHandSpace()};function O(q){const tt=x.indexOf(q.inputSource);if(tt===-1)return;const ft=M[tt];ft!==void 0&&(ft.update(q.inputSource,q.frame,c||a),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",X);for(let q=0;q<M.length;q++){const tt=x[q];tt!==null&&(x[q]=null,M[q].disconnect(tt))}R=null,U=null,_.reset(),t.setRenderTarget(p),m=null,d=null,h=null,n=null,v=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",W),n.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),n.renderState.layers===void 0){const tt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(n,e,tt),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new We(m.framebufferWidth,m.framebufferHeight,{format:ii,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let tt=null,ft=null,it=null;f.depth&&(it=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=f.stencil?nn:An,ft=f.stencil?en:tn);const vt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};h=new XRWebGLBinding(n,e),d=h.createProjectionLayer(vt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new We(d.textureWidth,d.textureHeight,{format:ii,type:Ai,depthTexture:new ao(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Yt.setContext(n),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let tt=0;tt<q.removed.length;tt++){const ft=q.removed[tt],it=x.indexOf(ft);it>=0&&(x[it]=null,M[it].disconnect(ft))}for(let tt=0;tt<q.added.length;tt++){const ft=q.added[tt];let it=x.indexOf(ft);if(it===-1){for(let At=0;At<M.length;At++)if(At>=x.length){x.push(ft),it=At;break}else if(x[At]===null){x[At]=ft,it=At;break}if(it===-1)break}const vt=M[it];vt&&vt.connect(ft)}}const H=new P,$=new P;function V(q,tt,ft){H.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(ft.matrixWorld);const it=H.distanceTo($),vt=tt.projectionMatrix.elements,At=ft.projectionMatrix.elements,at=vt[14]/(vt[10]-1),Pt=vt[14]/(vt[10]+1),It=(vt[9]+1)/vt[5],Xt=(vt[9]-1)/vt[5],I=(vt[8]-1)/vt[0],he=(At[8]+1)/At[0],Vt=at*I,Ot=at*he,Ct=it/(-I+he),te=Ct*-I;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(te),q.translateZ(Ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),vt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Rt=at+Ct,A=Pt+Ct,y=Vt-te,B=Ot+(it-te),K=It*Pt/A*Rt,j=Xt*Pt/A*Rt;q.projectionMatrix.makePerspective(y,B,K,j,Rt,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let tt=q.near,ft=q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),S.near=C.near=w.near=tt,S.far=C.far=w.far=ft,(R!==S.near||U!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,U=S.far),w.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const it=q.parent,vt=S.cameras;Q(S,it);for(let At=0;At<vt.length;At++)Q(vt[At],it);vt.length===2?V(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),rt(q,S,it)};function rt(q,tt,ft){ft===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=os*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let gt=null;function Dt(q,tt){if(u=tt.getViewerPose(c||a),g=tt,u!==null){const ft=u.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let it=!1;ft.length!==S.cameras.length&&(S.cameras.length=0,it=!0);for(let At=0;At<ft.length;At++){const at=ft[At];let Pt=null;if(m!==null)Pt=m.getViewport(at);else{const Xt=h.getViewSubImage(d,at);Pt=Xt.viewport,At===0&&(t.setRenderTargetTextures(v,Xt.colorTexture,d.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(v))}let It=b[At];It===void 0&&(It=new Ye,It.layers.enable(At),It.viewport=new pe,b[At]=It),It.matrix.fromArray(at.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(at.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),At===0&&(S.matrix.copy(It.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),it===!0&&S.cameras.push(It)}const vt=n.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const At=h.getDepthInformation(ft[0]);At&&At.isValid&&At.texture&&_.init(t,At,n.renderState)}}for(let ft=0;ft<M.length;ft++){const it=x[ft],vt=M[ft];it!==null&&vt!==void 0&&vt.update(it,tt,c||a)}gt&&gt(q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Yt=new yc;Yt.setAnimationLoop(Dt),this.setAnimationLoop=function(q){gt=q},this.dispose=function(){}}}const qi=new hi,Om=new se;function Bm(s,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,xc(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,x)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,v,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Oe&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Oe&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,x=v.envMapRotation;M&&(f.envMap.value=M,qi.copy(x),qi.x*=-1,qi.y*=-1,qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),f.envMapRotation.value.setFromMatrix4(Om.makeRotationFromEuler(qi)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,v,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*v,f.scale.value=M*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,v){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const v=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function zm(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function c(v,M){let x=n[v.id];x===void 0&&(g(v),x=u(v),n[v.id]=x,v.addEventListener("dispose",f));const L=M.program;i.updateUBOMapping(v,L);const E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function u(v){const M=h();v.__bindingPointIndex=M;const x=s.createBuffer(),L=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=n[v.id],x=v.uniforms,L=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,w=x.length;E<w;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,S=C.length;b<S;b++){const R=C[b];if(m(R,E,b,L)===!0){const U=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let X=0;X<O.length;X++){const H=O[X],$=_(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,U+W,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,M,x,L){const E=v.value,w=M+"_"+x;if(L[w]===void 0)return typeof E=="number"||typeof E=="boolean"?L[w]=E:L[w]=E.clone(),!0;{const C=L[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return L[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){const M=v.uniforms;let x=0;const L=16;for(let w=0,C=M.length;w<C;w++){const b=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,R=b.length;S<R;S++){const U=b[S],O=Array.isArray(U.value)?U.value:[U.value];for(let W=0,X=O.length;W<X;W++){const H=O[W],$=_(H),V=x%L,Q=V%$.boundary,rt=V+Q;x+=Q,rt!==0&&L-rt<$.storage&&(x+=L-rt),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=$.storage}}}const E=x%L;return E>0&&(x+=L-E),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function f(v){const M=v.target;M.removeEventListener("dispose",f);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function p(){for(const v in n)s.deleteBuffer(n[v]);a=[],n={},r={}}return{bind:l,update:c,dispose:p}}class km{constructor(t={}){const{canvas:e=Rh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,p=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=zi,this.toneMappingExposure=1;const x=this;let L=!1,E=0,w=0,C=null,b=-1,S=null;const R=new pe,U=new pe;let O=null;const W=new dt(0);let X=0,H=e.width,$=e.height,V=1,Q=null,rt=null;const gt=new pe(0,0,H,$),Dt=new pe(0,0,H,$);let Yt=!1;const q=new no;let tt=!1,ft=!1;const it=new se,vt=new se,At=new P,at=new pe,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Xt(){return C===null?V:1}let I=i;function he(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){const N="webgl2";if(I=he(N,T),I===null)throw he(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Vt,Ot,Ct,te,Rt,A,y,B,K,j,Y,_t,st,lt,Wt,J,pt,Lt,Ut,mt,qt,Nt,Zt,D;function nt(){Vt=new Xf(I),Vt.init(),Nt=new Pm(I,Vt),Ot=new zf(I,Vt,t,Nt),Ct=new Am(I,Vt),Ot.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),te=new Kf(I),Rt=new dm,A=new Cm(I,Vt,Ct,Rt,Ot,Nt,te),y=new Vf(x),B=new Wf(x),K=new tu(I),Zt=new Of(I,K),j=new qf(I,K,te,Zt),Y=new Zf(I,j,K,te),Ut=new $f(I,Ot,A),J=new kf(Rt),_t=new um(x,y,B,Vt,Ot,Zt,J),st=new Bm(x,Rt),lt=new pm,Wt=new Mm(Vt),Lt=new Ff(x,y,B,Ct,Y,m,l),pt=new wm(x,Y,Ot),D=new zm(I,te,Ot,Ct),mt=new Bf(I,Vt,te),qt=new Yf(I,Vt,te),te.programs=_t.programs,x.capabilities=Ot,x.extensions=Vt,x.properties=Rt,x.renderLists=lt,x.shadowMap=pt,x.state=Ct,x.info=te}nt();const G=new Fm(x,I);this.xr=G,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(H,$,!1))},this.getSize=function(T){return T.set(H,$)},this.setSize=function(T,N,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,$=N,e.width=Math.floor(T*V),e.height=Math.floor(N*V),z===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(H*V,$*V).floor()},this.setDrawingBufferSize=function(T,N,z){H=T,$=N,V=z,e.width=Math.floor(T*z),e.height=Math.floor(N*z),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(gt)},this.setViewport=function(T,N,z,k){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,N,z,k),Ct.viewport(R.copy(gt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Dt)},this.setScissor=function(T,N,z,k){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,N,z,k),Ct.scissor(U.copy(Dt).multiplyScalar(V).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(T){Ct.setScissorTest(Yt=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(T=!0,N=!0,z=!0){let k=0;if(T){let F=!1;if(C!==null){const et=C.texture.format;F=et===Qa||et===Ja||et===ja}if(F){const et=C.texture.type,ht=et===Ai||et===tn||et===as||et===en||et===Ka||et===$a,Mt=Lt.getClearColor(),St=Lt.getClearAlpha(),Ft=Mt.r,zt=Mt.g,yt=Mt.b;ht?(g[0]=Ft,g[1]=zt,g[2]=yt,g[3]=St,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ft,_[1]=zt,_[2]=yt,_[3]=St,I.clearBufferiv(I.COLOR,0,_))}else k|=I.COLOR_BUFFER_BIT}N&&(k|=I.DEPTH_BUFFER_BIT),z&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),lt.dispose(),Wt.dispose(),Rt.dispose(),y.dispose(),B.dispose(),Y.dispose(),Zt.dispose(),D.dispose(),_t.dispose(),G.dispose(),G.removeEventListener("sessionstart",fo),G.removeEventListener("sessionend",po),ki.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=te.autoReset,N=pt.enabled,z=pt.autoUpdate,k=pt.needsUpdate,F=pt.type;nt(),te.autoReset=T,pt.enabled=N,pt.autoUpdate=z,pt.needsUpdate=k,pt.type=F}function ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bt(T){const N=T.target;N.removeEventListener("dispose",Bt),ue(N)}function ue(T){Ee(T),Rt.remove(T)}function Ee(T){const N=Rt.get(T).programs;N!==void 0&&(N.forEach(function(z){_t.releaseProgram(z)}),T.isShaderMaterial&&_t.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,z,k,F,et){N===null&&(N=Pt);const ht=F.isMesh&&F.matrixWorld.determinant()<0,Mt=Dc(T,N,z,k,F);Ct.setMaterial(k,ht);let St=z.index,Ft=1;if(k.wireframe===!0){if(St=j.getWireframeAttribute(z),St===void 0)return;Ft=2}const zt=z.drawRange,yt=z.attributes.position;let jt=zt.start*Ft,ae=(zt.start+zt.count)*Ft;et!==null&&(jt=Math.max(jt,et.start*Ft),ae=Math.min(ae,(et.start+et.count)*Ft)),St!==null?(jt=Math.max(jt,0),ae=Math.min(ae,St.count)):yt!=null&&(jt=Math.max(jt,0),ae=Math.min(ae,yt.count));const oe=ae-jt;if(oe<0||oe===1/0)return;Zt.setup(F,k,Mt,z,St);let ze,Jt=mt;if(St!==null&&(ze=K.get(St),Jt=qt,Jt.setIndex(ze)),F.isMesh)k.wireframe===!0?(Ct.setLineWidth(k.wireframeLinewidth*Xt()),Jt.setMode(I.LINES)):Jt.setMode(I.TRIANGLES);else if(F.isLine){let Et=k.linewidth;Et===void 0&&(Et=1),Ct.setLineWidth(Et*Xt()),F.isLineSegments?Jt.setMode(I.LINES):F.isLineLoop?Jt.setMode(I.LINE_LOOP):Jt.setMode(I.LINE_STRIP)}else F.isPoints?Jt.setMode(I.POINTS):F.isSprite&&Jt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Et=F._multiDrawStarts,di=F._multiDrawCounts,Qt=F._multiDrawCount,Ze=St?K.get(St).bytesPerElement:1,rn=Rt.get(k).currentProgram.getUniforms();for(let Ve=0;Ve<Qt;Ve++)rn.setValue(I,"_gl_DrawID",Ve),Jt.render(Et[Ve]/Ze,di[Ve])}else if(F.isInstancedMesh)Jt.renderInstances(jt,oe,F.count);else if(z.isInstancedBufferGeometry){const Et=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,di=Math.min(z.instanceCount,Et);Jt.renderInstances(jt,oe,di)}else Jt.render(jt,oe)};function ee(T,N,z){T.transparent===!0&&T.side===Fe&&T.forceSinglePass===!1?(T.side=Oe,T.needsUpdate=!0,ms(T,N,z),T.side=Ei,T.needsUpdate=!0,ms(T,N,z),T.side=Fe):ms(T,N,z)}this.compile=function(T,N,z=null){z===null&&(z=T),p=Wt.get(z),p.init(N),M.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const k=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const et=F.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const Mt=et[ht];ee(Mt,z,F),k.add(Mt)}else ee(et,z,F),k.add(et)}),M.pop(),p=null,k},this.compileAsync=function(T,N,z=null){const k=this.compile(T,N,z);return new Promise(F=>{function et(){if(k.forEach(function(ht){Rt.get(ht).currentProgram.isReady()&&k.delete(ht)}),k.size===0){F(T);return}setTimeout(et,10)}Vt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let $e=null;function ui(T){$e&&$e(T)}function fo(){ki.stop()}function po(){ki.start()}const ki=new yc;ki.setAnimationLoop(ui),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(T){$e=T,G.setAnimationLoop(T),T===null?ki.stop():ki.start()},G.addEventListener("sessionstart",fo),G.addEventListener("sessionend",po),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,C),p=Wt.get(T,M.length),p.init(N),M.push(p),vt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(vt),ft=this.localClippingEnabled,tt=J.init(this.clippingPlanes,ft),f=lt.get(T,v.length),f.init(),v.push(f),G.enabled===!0&&G.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&_r(et,N,-1/0,x.sortObjects)}_r(T,N,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(Q,rt),It=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,It&&Lt.addToRenderList(f,T),this.info.render.frame++,tt===!0&&J.beginShadows();const z=p.state.shadowsArray;pt.render(z,T,N),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=f.opaque,F=f.transmissive;if(p.setupLights(),N.isArrayCamera){const et=N.cameras;if(F.length>0)for(let ht=0,Mt=et.length;ht<Mt;ht++){const St=et[ht];go(k,F,T,St)}It&&Lt.render(T);for(let ht=0,Mt=et.length;ht<Mt;ht++){const St=et[ht];mo(f,T,St,St.viewport)}}else F.length>0&&go(k,F,T,N),It&&Lt.render(T),mo(f,T,N);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,N),Zt.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],tt===!0&&J.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?f=v[v.length-1]:f=null};function _r(T,N,z,k){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){k&&at.setFromMatrixPosition(T.matrixWorld).applyMatrix4(vt);const ht=Y.update(T),Mt=T.material;Mt.visible&&f.push(T,ht,Mt,z,at.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const ht=Y.update(T),Mt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),at.copy(T.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),at.copy(ht.boundingSphere.center)),at.applyMatrix4(T.matrixWorld).applyMatrix4(vt)),Array.isArray(Mt)){const St=ht.groups;for(let Ft=0,zt=St.length;Ft<zt;Ft++){const yt=St[Ft],jt=Mt[yt.materialIndex];jt&&jt.visible&&f.push(T,ht,jt,z,at.z,yt)}}else Mt.visible&&f.push(T,ht,Mt,z,at.z,null)}}const et=T.children;for(let ht=0,Mt=et.length;ht<Mt;ht++)_r(et[ht],N,z,k)}function mo(T,N,z,k){const F=T.opaque,et=T.transmissive,ht=T.transparent;p.setupLightsView(z),tt===!0&&J.setGlobalState(x.clippingPlanes,z),k&&Ct.viewport(R.copy(k)),F.length>0&&ps(F,N,z),et.length>0&&ps(et,N,z),ht.length>0&&ps(ht,N,z),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function go(T,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new We(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?ni:Ai,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const et=p.state.transmissionRenderTarget[k.id],ht=k.viewport||R;et.setSize(ht.z,ht.w);const Mt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(W),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),It&&Lt.render(z);const St=x.toneMapping;x.toneMapping=zi;const Ft=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),tt===!0&&J.setGlobalState(x.clippingPlanes,k),ps(T,z,k),A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let yt=0,jt=N.length;yt<jt;yt++){const ae=N[yt],oe=ae.object,ze=ae.geometry,Jt=ae.material,Et=ae.group;if(Jt.side===Fe&&oe.layers.test(k.layers)){const di=Jt.side;Jt.side=Oe,Jt.needsUpdate=!0,_o(oe,z,k,ze,Jt,Et),Jt.side=di,Jt.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et))}x.setRenderTarget(Mt),x.setClearColor(W,X),Ft!==void 0&&(k.viewport=Ft),x.toneMapping=St}function ps(T,N,z){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,et=T.length;F<et;F++){const ht=T[F],Mt=ht.object,St=ht.geometry,Ft=k===null?ht.material:k,zt=ht.group;Mt.layers.test(z.layers)&&_o(Mt,N,z,St,Ft,zt)}}function _o(T,N,z,k,F,et){T.onBeforeRender(x,N,z,k,F,et),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,N,z,k,T,et),F.transparent===!0&&F.side===Fe&&F.forceSinglePass===!1?(F.side=Oe,F.needsUpdate=!0,x.renderBufferDirect(z,N,k,F,T,et),F.side=Ei,F.needsUpdate=!0,x.renderBufferDirect(z,N,k,F,T,et),F.side=Fe):x.renderBufferDirect(z,N,k,F,T,et),T.onAfterRender(x,N,z,k,F,et)}function ms(T,N,z){N.isScene!==!0&&(N=Pt);const k=Rt.get(T),F=p.state.lights,et=p.state.shadowsArray,ht=F.state.version,Mt=_t.getParameters(T,F.state,et,N,z),St=_t.getProgramCacheKey(Mt);let Ft=k.programs;k.environment=T.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(T.isMeshStandardMaterial?B:y).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",Bt),Ft=new Map,k.programs=Ft);let zt=Ft.get(St);if(zt!==void 0){if(k.currentProgram===zt&&k.lightsStateVersion===ht)return xo(T,Mt),zt}else Mt.uniforms=_t.getUniforms(T),T.onBeforeCompile(Mt,x),zt=_t.acquireProgram(Mt,St),Ft.set(St,zt),k.uniforms=Mt.uniforms;const yt=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(yt.clippingPlanes=J.uniform),xo(T,Mt),k.needsLights=Uc(T),k.lightsStateVersion=ht,k.needsLights&&(yt.ambientLightColor.value=F.state.ambient,yt.lightProbe.value=F.state.probe,yt.directionalLights.value=F.state.directional,yt.directionalLightShadows.value=F.state.directionalShadow,yt.spotLights.value=F.state.spot,yt.spotLightShadows.value=F.state.spotShadow,yt.rectAreaLights.value=F.state.rectArea,yt.ltc_1.value=F.state.rectAreaLTC1,yt.ltc_2.value=F.state.rectAreaLTC2,yt.pointLights.value=F.state.point,yt.pointLightShadows.value=F.state.pointShadow,yt.hemisphereLights.value=F.state.hemi,yt.directionalShadowMap.value=F.state.directionalShadowMap,yt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,yt.spotShadowMap.value=F.state.spotShadowMap,yt.spotLightMatrix.value=F.state.spotLightMatrix,yt.spotLightMap.value=F.state.spotLightMap,yt.pointShadowMap.value=F.state.pointShadowMap,yt.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=zt,k.uniformsList=null,zt}function vo(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=nr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function xo(T,N){const z=Rt.get(T);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Dc(T,N,z,k,F){N.isScene!==!0&&(N=Pt),A.resetTextureUnits();const et=N.fog,ht=k.isMeshStandardMaterial?N.environment:null,Mt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fn,St=(k.isMeshStandardMaterial?B:y).get(k.envMap||ht),Ft=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,zt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),yt=!!z.morphAttributes.position,jt=!!z.morphAttributes.normal,ae=!!z.morphAttributes.color;let oe=zi;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(oe=x.toneMapping);const ze=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Jt=ze!==void 0?ze.length:0,Et=Rt.get(k),di=p.state.lights;if(tt===!0&&(ft===!0||T!==S)){const Xe=T===S&&k.id===b;J.setState(k,T,Xe)}let Qt=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==di.state.version||Et.outputColorSpace!==Mt||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==St||k.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==J.numPlanes||Et.numIntersection!==J.numIntersection)||Et.vertexAlphas!==Ft||Et.vertexTangents!==zt||Et.morphTargets!==yt||Et.morphNormals!==jt||Et.morphColors!==ae||Et.toneMapping!==oe||Et.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Et.__version=k.version);let Ze=Et.currentProgram;Qt===!0&&(Ze=ms(k,N,F));let rn=!1,Ve=!1,zn=!1;const le=Ze.getUniforms(),ri=Et.uniforms;if(Ct.useProgram(Ze.program)&&(rn=!0,Ve=!0,zn=!0),k.id!==b&&(b=k.id,Ve=!0),rn||S!==T){Ct.buffers.depth.getReversed()?(it.copy(T.projectionMatrix),Ph(it),Lh(it),le.setValue(I,"projectionMatrix",it)):le.setValue(I,"projectionMatrix",T.projectionMatrix),le.setValue(I,"viewMatrix",T.matrixWorldInverse);const Ci=le.map.cameraPosition;Ci!==void 0&&Ci.setValue(I,At.setFromMatrixPosition(T.matrixWorld)),Ot.logarithmicDepthBuffer&&le.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&le.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Ve=!0,zn=!0)}if(F.isSkinnedMesh){le.setOptional(I,F,"bindMatrix"),le.setOptional(I,F,"bindMatrixInverse");const Xe=F.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),le.setValue(I,"boneTexture",Xe.boneTexture,A))}F.isBatchedMesh&&(le.setOptional(I,F,"batchingTexture"),le.setValue(I,"batchingTexture",F._matricesTexture,A),le.setOptional(I,F,"batchingIdTexture"),le.setValue(I,"batchingIdTexture",F._indirectTexture,A),le.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(I,"batchingColorTexture",F._colorsTexture,A));const kn=z.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Ut.update(F,z,Ze),(Ve||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,le.setValue(I,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ri.envMap.value=St,ri.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(ri.envMapIntensity.value=N.environmentIntensity),Ve&&(le.setValue(I,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Ic(ri,zn),et&&k.fog===!0&&st.refreshFogUniforms(ri,et),st.refreshMaterialUniforms(ri,k,V,$,p.state.transmissionRenderTarget[T.id]),nr.upload(I,vo(Et),ri,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(nr.upload(I,vo(Et),ri,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&le.setValue(I,"center",F.center),le.setValue(I,"modelViewMatrix",F.modelViewMatrix),le.setValue(I,"normalMatrix",F.normalMatrix),le.setValue(I,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Xe=k.uniformsGroups;for(let Ci=0,Pi=Xe.length;Ci<Pi;Ci++){const Mo=Xe[Ci];D.update(Mo,Ze),D.bind(Mo,Ze)}}return Ze}function Ic(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Uc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,N,z){Rt.get(T.texture).__webglTexture=N,Rt.get(T.depthTexture).__webglTexture=z;const k=Rt.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const z=Rt.get(T);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,z=0){C=T,E=N,w=z;let k=!0,F=null,et=!1,ht=!1;if(T){const St=Rt.get(T);if(St.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(St.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(St.__hasExternalTextures)A.rebindTextures(T,Rt.get(T.texture).__webglTexture,Rt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const yt=T.depthTexture;if(St.__boundDepthTexture!==yt){if(yt!==null&&Rt.has(yt)&&(T.width!==yt.image.width||T.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ht=!0);const zt=Rt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?F=zt[N][z]:F=zt[N],et=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?F=Rt.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[z]:F=zt,R.copy(T.viewport),U.copy(T.scissor),O=T.scissorTest}else R.copy(gt).multiplyScalar(V).floor(),U.copy(Dt).multiplyScalar(V).floor(),O=Yt;if(Ct.bindFramebuffer(I.FRAMEBUFFER,F)&&k&&Ct.drawBuffers(T,F),Ct.viewport(R),Ct.scissor(U),Ct.setScissorTest(O),et){const St=Rt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,z)}else if(ht){const St=Rt.get(T.texture),Ft=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.__webglTexture,z||0,Ft)}b=-1},this.readRenderTargetPixels=function(T,N,z,k,F,et,ht){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht]),Mt){Ct.bindFramebuffer(I.FRAMEBUFFER,Mt);try{const St=T.texture,Ft=St.format,zt=St.type;if(!Ot.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-k&&z>=0&&z<=T.height-F&&I.readPixels(N,z,k,F,Nt.convert(Ft),Nt.convert(zt),et)}finally{const St=C!==null?Rt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(T,N,z,k,F,et,ht){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht]),Mt){const St=T.texture,Ft=St.format,zt=St.type;if(!Ot.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-k&&z>=0&&z<=T.height-F){Ct.bindFramebuffer(I.FRAMEBUFFER,Mt);const yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(N,z,k,F,Nt.convert(Ft),Nt.convert(zt),0);const jt=C!==null?Rt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,jt);const ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ch(I,ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(yt),I.deleteSync(ae),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,z=0){T.isTexture!==!0&&(Jn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(T.image.width*k),et=Math.floor(T.image.height*k),ht=N!==null?N.x:0,Mt=N!==null?N.y:0;A.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,ht,Mt,F,et),Ct.unbindTexture()},this.copyTextureToTexture=function(T,N,z=null,k=null,F=0){T.isTexture!==!0&&(Jn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let et,ht,Mt,St,Ft,zt,yt,jt,ae;const oe=T.isCompressedTexture?T.mipmaps[F]:T.image;z!==null?(et=z.max.x-z.min.x,ht=z.max.y-z.min.y,Mt=z.isBox3?z.max.z-z.min.z:1,St=z.min.x,Ft=z.min.y,zt=z.isBox3?z.min.z:0):(et=oe.width,ht=oe.height,Mt=oe.depth||1,St=0,Ft=0,zt=0),k!==null?(yt=k.x,jt=k.y,ae=k.z):(yt=0,jt=0,ae=0);const ze=Nt.convert(N.format),Jt=Nt.convert(N.type);let Et;N.isData3DTexture?(A.setTexture3D(N,0),Et=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Et=I.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Et=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const di=I.getParameter(I.UNPACK_ROW_LENGTH),Qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ze=I.getParameter(I.UNPACK_SKIP_PIXELS),rn=I.getParameter(I.UNPACK_SKIP_ROWS),Ve=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,oe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,oe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,St),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,zt);const zn=T.isDataArrayTexture||T.isData3DTexture,le=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const ri=Rt.get(T),kn=Rt.get(N),Xe=Rt.get(ri.__renderTarget),Ci=Rt.get(kn.__renderTarget);Ct.bindFramebuffer(I.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Pi=0;Pi<Mt;Pi++)zn&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.get(T).__webglTexture,F,zt+Pi),T.isDepthTexture?(le&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.get(N).__webglTexture,F,ae+Pi),I.blitFramebuffer(St,Ft,et,ht,yt,jt,et,ht,I.DEPTH_BUFFER_BIT,I.NEAREST)):le?I.copyTexSubImage3D(Et,F,yt,jt,ae+Pi,St,Ft,et,ht):I.copyTexSubImage2D(Et,F,yt,jt,ae+Pi,St,Ft,et,ht);Ct.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else le?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Et,F,yt,jt,ae,et,ht,Mt,ze,Jt,oe.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,F,yt,jt,ae,et,ht,Mt,ze,oe.data):I.texSubImage3D(Et,F,yt,jt,ae,et,ht,Mt,ze,Jt,oe):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,yt,jt,et,ht,ze,Jt,oe.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,yt,jt,oe.width,oe.height,ze,oe.data):I.texSubImage2D(I.TEXTURE_2D,F,yt,jt,et,ht,ze,Jt,oe);I.pixelStorei(I.UNPACK_ROW_LENGTH,di),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,rn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),F===0&&N.generateMipmaps&&I.generateMipmap(Et),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,N,z=null,k=null,F=0){return T.isTexture!==!0&&(Jn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,T=arguments[2],N=arguments[3],F=arguments[4]||0),Jn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,z,k,F)},this.initRenderTarget=function(T){Rt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,Ct.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class oo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vm extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new P;class cr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class is extends Ri{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Mn;const Xn=new P,Sn=new P,yn=new P,bn=new wt,qn=new wt,Ac=new se,Os=new P,Yn=new P,Bs=new P,vl=new wt,qr=new wt,xl=new wt;class sr extends ve{constructor(t=new is){if(super(),this.isSprite=!0,this.type="Sprite",Mn===void 0){Mn=new re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Gm(e,5);Mn.setIndex([0,1,2,0,2,3]),Mn.setAttribute("position",new cr(i,3,0,!1)),Mn.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=Mn,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sn.setFromMatrixScale(this.matrixWorld),Ac.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sn.multiplyScalar(-yn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;zs(Os.set(-.5,-.5,0),yn,a,Sn,n,r),zs(Yn.set(.5,-.5,0),yn,a,Sn,n,r),zs(Bs.set(.5,.5,0),yn,a,Sn,n,r),vl.set(0,0),qr.set(1,0),xl.set(1,1);let o=t.ray.intersectTriangle(Os,Yn,Bs,!1,Xn);if(o===null&&(zs(Yn.set(-.5,.5,0),yn,a,Sn,n,r),qr.set(0,1),o=t.ray.intersectTriangle(Os,Bs,Yn,!1,Xn),o===null))return;const l=t.ray.origin.distanceTo(Xn);l<t.near||l>t.far||e.push({distance:l,point:Xn.clone(),uv:Ke.getInterpolation(Xn,Os,Yn,Bs,vl,qr,xl,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zs(s,t,e,i,n,r){bn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(qn.x=r*bn.x-n*bn.y,qn.y=n*bn.x+r*bn.y):qn.copy(bn),s.copy(t),s.x+=qn.x,s.y+=qn.y,s.applyMatrix4(Ac)}class Hm extends Pe{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Be,u=Be,h,d){super(null,a,o,l,c,u,n,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha extends Ri{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hr=new P,ur=new P,Ml=new se,Kn=new io,ks=new ds,Yr=new P,Sl=new P;class Wm extends ve{constructor(t=new re,e=new Ha){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)hr.fromBufferAttribute(e,n-1),ur.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=hr.distanceTo(ur);t.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(n),ks.radius+=r,t.ray.intersectsSphere(ks)===!1)return;Ml.copy(n).invert(),Kn.copy(t.ray).applyMatrix4(Ml);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=m,f=g-1;_<f;_+=c){const p=u.getX(_),v=u.getX(_+1),M=Vs(this,t,Kn,l,p,v);M&&e.push(M)}if(this.isLineLoop){const _=u.getX(g-1),f=u.getX(m),p=Vs(this,t,Kn,l,_,f);p&&e.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=m,f=g-1;_<f;_+=c){const p=Vs(this,t,Kn,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Vs(this,t,Kn,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vs(s,t,e,i,n,r){const a=s.geometry.attributes.position;if(hr.fromBufferAttribute(a,n),ur.fromBufferAttribute(a,r),e.distanceSqToSegment(hr,ur,Yr,Sl)>i)return;Yr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Yr);if(!(l<t.near||l>t.far))return{distance:l,point:Sl.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const yl=new P,bl=new P;class Tl extends Wm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)yl.fromBufferAttribute(e,n),bl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+yl.distanceTo(bl);t.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xm extends Ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wl=new se,Wa=new io,Gs=new ds,Hs=new P;class qm extends ve{constructor(t=new re,e=new Xm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(n),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;wl.copy(n).invert(),Wa.copy(t.ray).applyMatrix4(wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const f=c.getX(g);Hs.fromBufferAttribute(h,f),El(Hs,f,l,n,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,_=m;g<_;g++)Hs.fromBufferAttribute(h,g),El(Hs,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function El(s,t,e,i,n,r,a){const o=Wa.distanceSqToPoint(s);if(o<e){const l=new P;Wa.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class fs extends Pe{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ym{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const u=i[n],d=i[n+1]-u,m=(a-u)/d;return(n+m)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new wt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,n=[],r=[],a=[],o=new P,l=new se;for(let m=0;m<=t;m++){const g=m/t;n[m]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),d=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(n[m-1],n[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(be(n[m-1].dot(n[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(n[m],r[m])}if(e===!0){let m=Math.acos(be(r[0].dot(r[t]),-1,1));m/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],m*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function lo(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,m*=u,n(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const Ws=new P,Kr=new lo,$r=new lo,Zr=new lo;class Km extends Ym{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=n[(o-1)%r]:(Ws.subVectors(n[0],n[1]).add(n[0]),c=Ws);const h=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?u=n[(o+2)%r]:(Ws.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=Ws),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Kr.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,f),$r.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,f),Zr.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,f)}else this.curveType==="catmullrom"&&(Kr.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),$r.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Zr.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Kr.calc(l),$r.calc(l),Zr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ie extends re{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const u=[],h=[],d=[],m=[];let g=0;const _=[],f=i/2;let p=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(m,2));function v(){const x=new P,L=new P;let E=0;const w=(e-t)/i;for(let C=0;C<=r;C++){const b=[],S=C/r,R=S*(e-t)+t;for(let U=0;U<=n;U++){const O=U/n,W=O*l+o,X=Math.sin(W),H=Math.cos(W);L.x=R*X,L.y=-S*i+f,L.z=R*H,h.push(L.x,L.y,L.z),x.set(X,w,H).normalize(),d.push(x.x,x.y,x.z),m.push(O,1-S),b.push(g++)}_.push(b)}for(let C=0;C<n;C++)for(let b=0;b<r;b++){const S=_[b][C],R=_[b+1][C],U=_[b+1][C+1],O=_[b][C+1];(t>0||b!==0)&&(u.push(S,R,O),E+=3),(e>0||b!==r-1)&&(u.push(R,U,O),E+=3)}c.addGroup(p,E,0),p+=E}function M(x){const L=g,E=new wt,w=new P;let C=0;const b=x===!0?t:e,S=x===!0?1:-1;for(let U=1;U<=n;U++)h.push(0,f*S,0),d.push(0,S,0),m.push(.5,.5),g++;const R=g;for(let U=0;U<=n;U++){const W=U/n*l+o,X=Math.cos(W),H=Math.sin(W);w.x=b*H,w.y=f*S,w.z=b*X,h.push(w.x,w.y,w.z),d.push(0,S,0),E.x=X*.5+.5,E.y=H*.5*S+.5,m.push(E.x,E.y),g++}for(let U=0;U<n;U++){const O=L+U,W=R+U;x===!0?u.push(W,W+1,O):u.push(W+1,W,O),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Un extends Ie{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Un(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class co extends re{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),u(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const M=new P,x=new P,L=new P;for(let E=0;E<e.length;E+=3)m(e[E+0],M),m(e[E+1],x),m(e[E+2],L),l(M,x,L,v)}function l(v,M,x,L){const E=L+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const b=v.clone().lerp(x,C/E),S=M.clone().lerp(x,C/E),R=E-C;for(let U=0;U<=R;U++)U===0&&C===E?w[C][U]=b:w[C][U]=b.clone().lerp(S,U/R)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(w[C][S+1]),d(w[C+1][S]),d(w[C][S])):(d(w[C][S+1]),d(w[C+1][S+1]),d(w[C+1][S]))}}function c(v){const M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const v=new P;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=f(v)/2/Math.PI+.5,L=p(v)/Math.PI+.5;a.push(x,1-L)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){const M=a[v+0],x=a[v+2],L=a[v+4],E=Math.max(M,x,L),w=Math.min(M,x,L);E>.9&&w<.1&&(M<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),L<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function m(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const v=new P,M=new P,x=new P,L=new P,E=new wt,w=new wt,C=new wt;for(let b=0,S=0;b<r.length;b+=9,S+=6){v.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),E.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),L.copy(v).add(M).add(x).divideScalar(3);const R=f(L);_(E,S+0,v,R),_(w,S+2,M,R),_(C,S+4,x,R)}}function _(v,M,x,L){L<0&&v.x===1&&(a[M]=v.x-1),x.x===0&&x.z===0&&(a[M]=L/2/Math.PI+.5)}function f(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.vertices,t.indices,t.radius,t.details)}}class ns extends co{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ns(t.radius,t.detail)}}class ho extends re{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/n,m=new P,g=new wt;for(let _=0;_<=n;_++){for(let f=0;f<=i;f++){const p=r+f/i*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<n;_++){const f=_*(i+1);for(let p=0;p<i;p++){const v=p+f,M=v,x=v+i+1,L=v+i+2,E=v+1;o.push(M,x,E),o.push(x,L,E)}}this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ls extends re{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,m=[],g=[],_=[],f=[];for(let p=0;p<=i;p++){const v=[],M=p/i;let x=0;p===0&&a===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const E=L/e;h.x=-t*Math.cos(n+E*r)*Math.sin(a+M*o),h.y=t*Math.cos(a+M*o),h.z=t*Math.sin(n+E*r)*Math.sin(a+M*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(E+x,1-M),v.push(c++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const M=u[p][v+1],x=u[p][v],L=u[p+1][v],E=u[p+1][v+1];(p!==0||a>0)&&m.push(M,x,E),(p!==i-1||l<Math.PI)&&m.push(x,L,E)}this.setIndex(m),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dr extends re{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],u=new P,h=new P,d=new P;for(let m=0;m<=i;m++)for(let g=0;g<=n;g++){const _=g/n*r,f=m/i*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(_),h.y=(t+e*Math.cos(f))*Math.sin(_),h.z=e*Math.sin(f),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=n;g++){const _=(n+1)*m+g-1,f=(n+1)*(m-1)+g-1,p=(n+1)*(m-1)+g,v=(n+1)*m+g;a.push(_,f,v),a.push(f,p,v)}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $m extends me{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class $t extends Ri{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zm extends $t{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class jm extends Ri{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class uo extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jm extends uo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jr=new se,Al=new P,Rl=new P;class Qm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),Rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rl),e.updateMatrixWorld(),jr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class t0 extends Qm{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class e0 extends uo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class i0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);const de=Math.PI*2,Tt=(s,t,e)=>s<t?t:s>e?e:s,ye=(s,t,e)=>s+(t-s)*e,n0=s=>(s=Tt(s,0,1),s*s*(3-2*s)),_e=(s,t,e,i)=>ye(s,t,1-Math.exp(-e*i)),Cn=s=>(s=(s+Math.PI)%de,s<0&&(s+=de),s-Math.PI),rr=(s,t)=>Cn(s-t),s0=s=>s<0?-1:1,ti=(s,t=2)=>{if(!isFinite(s)||s<0)return"--:--.--";const e=Math.floor(s/60),i=s-e*60;return`${e}:${i.toFixed(t).padStart(t?3+t:2,"0")}`},Ll=s=>{if(!isFinite(s))return"--";const t=s>=0?"+":"-",e=Math.abs(s);return`${t}${e.toFixed(2)}`};function xi(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Rc(s=1){const t=new Uint8Array(512),e=xi(s),i=new Uint8Array(256);for(let a=0;a<256;a++)i[a]=a;for(let a=255;a>0;a--){const o=Math.floor(e()*(a+1)),l=i[a];i[a]=i[o],i[o]=l}for(let a=0;a<512;a++)t[a]=i[a&255];const n=a=>a*a*a*(a*(a*6-15)+10),r=a=>t[a]/255*2-1;return function(a,o){const l=Math.floor(a)&255,c=Math.floor(o)&255,u=a-Math.floor(a),h=o-Math.floor(o),d=n(u),m=n(h),g=r(t[l]+c),_=r(t[l]+c+1),f=r(t[l+1]+c),p=r(t[l+1]+c+1);return ye(ye(g,f,d),ye(_,p,d),m)}}const Tn=[[0,400,6,30,0],[0,320,6,30,0],[8,245,8,30,.02],[35,180,11,28,.05],[85,130,14,26,.09],[150,100,15,24,.07],[220,88,16,24,.05],[290,78,17,24,.03],[355,52,15,26,-.04],[405,8,11,28,-.06],[440,-50,5,30,0],[460,-100,3,30,0],[485,-160,0,30,0],[500,-220,0,28,.04],[495,-280,2,26,.09],[460,-325,5,26,.07],[400,-350,8,26,.04],[330,-345,10,26,0],[265,-315,10,28,0],[230,-260,7,32,0],[240,-195,1,40,0],[250,-135,-1,46,0],[235,-75,0,42,0],[195,-35,2,34,0],[135,-20,4,32,0],[65,-50,5,30,0],[-15,-80,6,30,0],[-100,-100,8,28,.04],[-180,-85,10,26,.06],[-250,-40,13,24,.05],[-295,25,14,24,.03],[-305,95,10,26,-.02],[-280,165,8,28,-.04],[-235,225,7,30,-.02],[-170,280,6,30,0],[-95,325,6,30,0],[-35,375,6,30,0]],r0=2.2,Te={road:new dt("#20282b"),roadAlt:new dt("#2d3739"),shoulder:new dt("#9b6748"),line:new dt("#f5eee0"),dash:new dt("#fff4cf"),rockLow:new dt("#8e3f2c"),rockMid:new dt("#b55a38"),rockHigh:new dt("#d48252"),rockTop:new dt("#e6a878"),rockDark:new dt("#6b2f24")};function ai(s,t,e,i){return s.copy(t).lerp(e,i)}function ar(s,t,e){const i=document.createElement("canvas");i.width=s,i.height=t;const n=i.getContext("2d");e(n,s,t);const r=new fs(i);return r.colorSpace=Ce,r.anisotropy=4,r}class a0{constructor(t){this.scene=t,this.group=new fe,this.group.name="track",t.add(this.group),this.rng=xi(1337),this.noise=Rc(9241),this.ramps=[],this.gates=[],this.wallGaps=[],this.tunnelRanges=[],this.arches=[],this.decorColliders=[],this._buildSpline(),this._buildFeatures(),this._buildRoad(),this._buildBranchRoute(),this._buildRamps(),this._buildWalls(),this._buildGates(),this._buildTunnels(),this._buildArches(),this._buildRoadside(),this._buildMinimap()}_buildSpline(){const t=Tn.map(n=>new P(n[0],n[2],n[1]));this.curve=new Km(t,!0,"catmullrom",.5);const e=this.curve.getLength();this.count=Math.max(256,Math.round(e/r0)),this.step=this.curve.getLength()/this.count,this.length=this.step*this.count,this.samples=[];const i=Tn.map(n=>new P(n[0],n[2],n[1]));for(let n=0;n<this.count;n++){const r=n/this.count,a=this.curve.getPointAt(r),o=this.curve.getTangentAt(r).normalize(),l=new P(o.z,0,-o.x).normalize();let c=1/0,u=1/0,h=0,d=0;for(let v=0;v<i.length;v++){const M=a.distanceToSquared(i[v]);M<c?(u=c,d=h,c=M,h=v):M<u&&(u=M,d=v)}const m=1/(Math.sqrt(c)+.001),g=1/(Math.sqrt(u)+.001),_=m/(m+g),f=ye(Tn[h][3],Tn[d][3],_),p=ye(Tn[h][4],Tn[d][4],_);this.samples.push({i:n,s:n*this.step,pos:a,tan:o,right:l,width:f,bank:p,gap:!1,tunnel:!1,stripNoise:this.noise(n*.21,3.7)})}this._sampleAt=n=>{n=(n%this.length+this.length)%this.length;const r=n/this.step,a=Math.floor(r)%this.count,o=(a+1)%this.count,l=r-Math.floor(r);return{i0:a,i1:o,t:l}}}_buildBranchRoute(){const t=this.branchRoute,e=Math.max(48,Math.round(t.length/3.4));for(let h=0;h<=e;h++){const d=h/e,m=t.start+t.length*d,g=this.getSample(m).a,_=Math.sin(Math.PI*d)*3.1,f=Math.sin(Math.PI*d)*8.2,p=this.samplePos(m,f);p.y+=_;const v=t.start+t.length*Math.max(0,d-1/e),M=t.start+t.length*Math.min(1,d+1/e),x=this.samplePos(v,Math.sin(Math.PI*Math.max(0,d-1/e))*8.2),L=this.samplePos(M,Math.sin(Math.PI*Math.min(1,d+1/e))*8.2);x.y+=Math.sin(Math.PI*Math.max(0,d-1/e))*3.1,L.y+=Math.sin(Math.PI*Math.min(1,d+1/e))*3.1;const E=L.sub(x).normalize(),w=new P(E.z,0,-E.x).normalize();t.samples.push({routeS:m,pos:p,tan:E,right:w,width:t.width,bank:g.bank})}const i=[],n=[],r=[],a=new dt;for(let h=0;h<t.samples.length;h++){const d=t.samples[h];for(const m of[-1,1]){const g=d.pos.clone().addScaledVector(d.right,m*t.width*.5);i.push(g.x,g.y+.03,g.z),a.set(m<0?"#26363a":"#314347"),r.push(a.r,a.g,a.b)}if(h<t.samples.length-1){const m=h*2;n.push(m,m+2,m+1,m+1,m+2,m+3)}}const o=new re;o.setAttribute("position",new Ht(i,3)),o.setAttribute("color",new Ht(r,3)),o.setIndex(n),o.computeVertexNormals();const l=new xt(o,new $t({vertexColors:!0,roughness:.82,metalness:.12,flatShading:!0}));l.name="canyon-cut-branch",l.receiveShadow=!0,this.group.add(l);const c=[];for(let h=0;h<t.samples.length-1;h++)for(const d of[-1,1]){const m=t.samples[h],g=t.samples[h+1],_=m.pos.clone().addScaledVector(m.right,d*(t.width*.5-.15)),f=g.pos.clone().addScaledVector(g.right,d*(t.width*.5-.15));c.push(_.x,_.y+.08,_.z,f.x,f.y+.08,f.z)}const u=new re;u.setAttribute("position",new Ht(c,3)),this.group.add(new Tl(u,new Ha({color:"#ffd166",transparent:!0,opacity:.9})))}findS(t,e){let i=0,n=1/0;for(const r of this.samples){const a=(r.pos.x-t)**2+(r.pos.z-e)**2;a<n&&(n=a,i=r.s)}return i}smoothRange(t,e){return[t-e,t+e]}markGapRange(t,e){const i=this.length;let n=t;for(;;){const r=Math.round(n/this.step)%this.count;if(this.samples[(r+this.count)%this.count].gap=!0,n+=this.step,(t<e?n>e:n>e+i)||n>t+i)break}}getSample(t){const{i0:e,i1:i,t:n}=this._sampleAt(t);return{a:this.samples[e],b:this.samples[i],t:n}}samplePos(t,e=0,i=new P){const{a:n,b:r,t:a}=this.getSample(t),o=ye(n.pos.x,r.pos.x,a),l=ye(n.pos.z,r.pos.z,a),c=ye(n.pos.y,r.pos.y,a),u=ye(n.right.x,r.right.x,a),h=ye(n.right.z,r.right.z,a);ye(n.width,r.width,a);const d=ye(n.bank,r.bank,a);return i.set(o+u*e,c+Math.tan(d)*e,l+h*e),i}surfaceAt(t,e,i="main"){var u;if(i==="branch"&&((u=this.branchRoute)!=null&&u.samples.length)){const h=this.branchRoute;let d=t-h.start;for(;d<0;)d+=this.length;for(;d>h.length;)d-=this.length;const m=Tt(d/h.length,0,1)*(h.samples.length-1),g=Math.min(h.samples.length-2,Math.floor(m)),_=m-g,f=h.samples[g],p=h.samples[g+1];return Math.abs(e)>h.width/2+1.5?null:ye(f.pos.y,p.pos.y,_)+Math.tan(ye(f.bank,p.bank,_))*e}const{a:n,b:r,t:a}=this.getSample(t);if(n.gap||r.gap)return null;const o=ye(n.width,r.width,a);if(Math.abs(e)>o/2+2.4)return null;const l=ye(n.bank,r.bank,a);let c=ye(n.pos.y,r.pos.y,a)+Math.tan(l)*e;for(const h of this.ramps){const d=(t-h.s+this.length*1.5)%this.length-this.length*.5;if(Math.abs(d)>h.length/2)continue;const m=e-h.lat;if(Math.abs(m)>h.width/2)continue;const g=Tt((d+h.length/2)/h.length,0,1),_=n0(Tt((h.width/2-Math.abs(m))/1.2,0,1));c+=h.height*Math.pow(g,1.15)*_}return c}rampAt(t,e){let i=null,n=1/0;for(const r of this.ramps){const a=(t-r.s+this.length*1.5)%this.length-this.length*.5,o=Math.abs(e-r.lat);if(Math.abs(a)<=r.length*.5&&o<=r.width*.5){const l=Math.abs(a)+o;l<n&&(i=r,n=l)}}return i}isGap(t){const{a:e,b:i,t:n}=this.getSample(t);return e.gap||i.gap}nearest(t,e,i=null){var _;const n=this.count;let r=0,a=n-1;if(i!=null){const f=Math.round(i/this.step),p=34;r=f-p,a=f+p}let o=null,l=1/0;for(let f=r;f<=a;f++){const p=this.samples[(f%n+n)%n],v=t-p.pos.x,M=e-p.pos.z,x=v*v+M*M;x<l&&(l=x,o=p)}o||(o=this.samples[0]);const c=t-o.pos.x,u=e-o.pos.z;let h=c*o.tan.x+u*o.tan.z;h=Tt(h,-this.step*1.2,this.step*1.2);const d=c*o.right.x+u*o.right.z;let m=o.s+h;m=(m%this.length+this.length)%this.length;let g={s:m,lat:d,dist:Math.sqrt(l),sample:o,route:"main"};if((_=this.branchRoute)!=null&&_.samples.length){let f=null,p=1/0;for(const v of this.branchRoute.samples){const M=t-v.pos.x,x=e-v.pos.z,L=M*M+x*x;L<p&&(p=L,f=v)}if(f&&p<l&&p<(this.branchRoute.width*.62)**2){const v=t-f.pos.x,M=e-f.pos.z;let x=Tt(v*f.tan.x+M*f.tan.z,-4,4);const L=v*f.right.x+M*f.right.z;g={s:Tt(f.routeS+x,this.branchRoute.start,this.branchRoute.end),lat:L,dist:Math.sqrt(p),sample:f,route:"branch"}}}return g}nearestGlobal(t,e){return this.nearest(t,e,0)}clampToRoad(t,e){const{a:i}=this.getSample(t),n=i.width/2-1.4;return Tt(e,-n,n)}startPose(){const t=((this.gateS[0]-20)%this.length+this.length)%this.length,e=this.samplePos(t,0),{a:i}=this.getSample(t);return{s:t,pos:e,yaw:Math.atan2(i.tan.x,i.tan.z)}}_buildFeatures(){const t=this.findS(456,-88),e=this.findS(477,-136);this.gap={start:t,end:e},this.markGapRange(t,e);const i=this.findS(494,-262),n=this.findS(462,-318);this.tunnelRanges.push({start:i,end:n,length:8});for(let g=i;g<n;g+=this.step)this.samples[Math.round(g/this.step)%this.count].tunnel=!0;const r=7;this.ramps.push({s:this.findS(460,-100)-13,lat:0,width:15,length:22,height:3.4,gapKicker:!0}),this.ramps.push({s:this.findS(392,22),lat:2.5,width:11,length:16,height:2.1}),this.ramps.push({s:this.findS(352,-348),lat:r,width:11,length:17,height:3.2,shortCut:!0});let a=this.findS(382,-350)-16,o=this.findS(286,-326)+22;o<=a&&(o+=this.length),this.branchRoute={start:a,end:o,length:o-a,width:9.5,samples:[]},this.ramps.push({s:this.findS(248,-112),lat:0,width:13,length:18,height:2.4,island:!0});const l=this.gap.start-30,c=this.gap.end+34;this.wallGaps.push({a:l,b:c,sides:"both"});const u=this.findS(370,-352)-18,h=this.findS(300,-332)+26;this.wallGaps.push({a:u,b:h,sides:"right"}),this.wallGaps.push({a:this.findS(246,-170),b:this.findS(232,-90),sides:"both"}),this.gateS=[];const d=7;for(let g=0;g<d;g++){let _=this.length*g/d,f=0;for(;this.isGap(_)&&f<40;)_=(_+6)%this.length,f++;this.gateS.push(_)}const m=4;this.gateS=this.gateS.slice(m).concat(this.gateS.slice(0,m))}_wallBlocked(t,e){const i=(e%this.length+this.length)%this.length;for(const n of this.wallGaps)if(n.sides==="both"||n.sides===t){const r=this.length,a=(n.a%r+r)%r,o=(n.b%r+r)%r;if(a<o){if(i>=a&&i<=o)return!0}else if(i>=a||i<=o)return!0}return!1}_buildRoad(){const t=this.count,e=[-1.12,-1.02,-.9,-.45,0,.45,.9,1.02,1.12],i=[],n=[],r=[],a=new dt,o=[];for(let _=0;_<t;_++){const f=this.samples[_],p=[];for(let v=0;v<e.length;v++){const M=e[v]*f.width/2,x=f.pos.x+f.right.x*M,L=f.pos.z+f.right.z*M,E=f.pos.y+Math.tan(f.bank)*M+.02;p.push([x,E,L]);const w=Math.abs(e[v]),C=f.stripNoise*.035;w>1?ai(a,Te.shoulder,Te.rockLow,.15+C):w>.88?ai(a,Te.line,Te.line,0):w<.02?ai(a,Te.road,Te.roadAlt,.55+C):ai(a,Te.road,Te.roadAlt,.35+C),o0(n,a.r,a.g,a.b)}o.push(p)}for(let _=0;_<t;_++){const f=(_+1)%t,p=this.samples[_],v=this.samples[f];if(!(p.gap||v.gap))for(let M=0;M<e.length-1;M++){const x=_*e.length+M,L=f*e.length+M;r.push(x,L,x+1),r.push(x+1,L,L+1)}}for(let _=0;_<t;_++)for(let f=0;f<e.length;f++)i.push(...o[_][f]);const l=new re;l.setAttribute("position",new Ht(i,3)),l.setAttribute("color",new Ht(n,3)),l.setIndex(r),l.computeVertexNormals();const c=new $t({vertexColors:!0,roughness:.96,metalness:0,side:Fe,flatShading:!0}),u=new xt(l,c);u.receiveShadow=!0,u.name="road",this.group.add(u),this._buildPaint(),this._buildEdgeLights();const h=this.samplePos((this.gap.start+this.gap.end)/2,0),d=new si(120,120,1,1);d.rotateX(-Math.PI/2);const m=new $t({color:"#3a1f1a",roughness:1}),g=new xt(d,m);g.position.set(h.x,h.y-26,h.z),this.group.add(g)}_buildPaint(){const t=[],e=this.count;for(let _=0;_<e;_+=4){const f=this.samples[_];if(f.gap)continue;const p=f.s,v=f.width;for(const M of[-1,1]){const x=M*(v/2)*.955,L=this.samplePos(p-1.4,x-.24),E=this.samplePos(p-1.4,x+.24),w=this.samplePos(p+1.4,x+.24),C=this.samplePos(p+1.4,x-.24);t.push([L,E,w,C])}}const i=new re,n=[],r=[];let a=0;for(const _ of t){for(const f of _)n.push(f.x,f.y+.035,f.z);r.push(a,a+1,a+2,a,a+2,a+3),a+=4}i.setAttribute("position",new Ht(n,3)),i.setIndex(r),i.computeVertexNormals();const o=new $t({color:"#f4dfae",emissive:"#c79a55",emissiveIntensity:.24,roughness:.7,flatShading:!0}),l=new xt(i,o);l.receiveShadow=!0,this.group.add(l);const c=[];for(let _=0;_<e;_+=5){const f=this.samples[_];if(f.gap)continue;const p=f.s;for(const v of[-.18,.18]){const M=f.width*v,x=this.samplePos(p-2.2,M-.11),L=this.samplePos(p-2.2,M+.11),E=this.samplePos(p+2.2,M+.11),w=this.samplePos(p+2.2,M-.11);c.push([x,L,E,w])}}const u=new re,h=[],d=[];let m=0;for(const _ of c){for(const f of _)h.push(f.x,f.y+.03,f.z);d.push(m,m+1,m+2,m,m+2,m+3),m+=4}u.setAttribute("position",new Ht(h,3)),u.setIndex(d),u.computeVertexNormals();const g=new $t({color:"#e8cf99",roughness:.8,flatShading:!0});this.group.add(new xt(u,g)),this._buildArrows()}_buildArrows(){const t=[];for(let n=34;n<this.length;n+=86){let r=!1;for(let h=-6;h<=10;h+=2)this.isGap(n+h)&&(r=!0);if(r)continue;const a=this.samplePos(n+5.5,0),o=this.samplePos(n-1.5,-4.4),l=this.samplePos(n-1.5,4.4),c=this.samplePos(n+1.2,0),u=.055;t.push(a.x,a.y+u,a.z,c.x,c.y+u,c.z,o.x,o.y+u,o.z,a.x,a.y+u,a.z,l.x,l.y+u,l.z,c.x,c.y+u,c.z)}const e=new re;e.setAttribute("position",new Ht(t,3)),e.computeVertexNormals();const i=new xt(e,new Ne({color:"#ffd395",transparent:!0,opacity:.38,depthWrite:!1,side:Fe}));i.renderOrder=1,this.group.add(i)}_buildEdgeLights(){const t=[];for(const r of[-1,1])for(let a=0;a<=this.count;a++){const o=this.samples[a%this.count];if(a<this.count&&!o.gap){const l=r*(o.width/2)*.985,c=this.samplePos(o.s,l);t.push(c.x,c.y+.07,c.z)}}const e=new re,i=[];for(let r=0;r<this.count;r++){const a=this.samples[r],o=this.samples[(r+1)%this.count];if(!(a.gap||o.gap))for(const l of[-1,1]){const c=l*(a.width/2)*.985,u=l*(o.width/2)*.985,h=this.samplePos(a.s,c),d=this.samplePos(o.s,u);i.push(h.x,h.y+.08,h.z,d.x,d.y+.08,d.z)}}e.setAttribute("position",new Ht(i,3));const n=new Ha({color:"#baf4e6",transparent:!0,opacity:.82});this.group.add(new Tl(e,n))}_buildRamps(){this.rampMeshes=[];for(const t of this.ramps){const e=new re,i=10,n=[],r=[],a=new dt;for(let g=0;g<=i;g++){const _=g/i,f=t.s-t.length/2+t.length*_,p=t.height*Math.pow(_,1.15);for(const v of[-1,1]){const M=t.lat+v*t.width/2,x=this.samplePos(f,M);n.push(x.x,x.y+.04,x.z),n.push(x.x,x.y+p+.06,x.z),ai(a,Te.roadAlt,Te.rockMid,.15+_*.4),r.push(a.r,a.g,a.b),ai(a,Te.line,Te.rockHigh,_),r.push(a.r,a.g,a.b)}}const o=[];for(let g=0;g<i;g++){const _=g*4,f=(g+1)*4;o.push(_+1,f+1,_+3,_+3,f+1,f+3),o.push(_,_+1,f,f,_+1,f+1),o.push(_+2,f+2,_+3,_+3,f+2,f+3)}const l=i*4;o.push(l,l+1,l+2,l+2,l+1,l+3),e.setAttribute("position",new Ht(n,3)),e.setAttribute("color",new Ht(r,3)),e.setIndex(o),e.computeVertexNormals();const c=new $t({vertexColors:!0,roughness:.9,side:Fe,flatShading:!0}),u=new xt(e,c);u.castShadow=!0,u.receiveShadow=!0,this.group.add(u),this.rampMeshes.push(u);const h=this.samplePos(t.s-t.length/2-2,t.lat),d=t.shortCut?"CANYON CUT  ▲":t.gapKicker?"BIG AIR  ▲":"KICKER  ▲",m=l0(d,t.shortCut?"#ffd166":"#f7e3bb",.8);m.position.set(h.x,h.y+2.1,h.z),this.group.add(m),this.arches.push(m)}}_buildWalls(){const t=[{out:.7,up:.4},{out:1.6,up:4.5},{out:3,up:9.5},{out:5.2,up:14.5},{out:7.4,up:19}],e=Te.rockLow,i=Te.rockMid,n=Te.rockHigh,r=Te.rockTop,a=Te.rockDark;for(const o of[-1,1]){const l=[],c=[],u=new dt,h=[];for(let v=0;v<this.count;v+=2){const M=this.samples[v];if(this._wallBlocked(o<0?"left":"right",M.s)){h.push(null);continue}const x=M.width/2,L=[];for(let E=0;E<t.length;E++){const w=t[E],C=this.noise(v*.09+E*3.1,o*2.2)*(.5+E*.85),b=x+w.out+C,S=w.up+this.noise(v*.13+E,o*9.1)*(E*1.4),R=o*b,U=M.pos.x+M.right.x*R,O=M.pos.z+M.right.z*R,W=M.pos.y+Math.tan(M.bank)*R+S;L.push([U,W,O]);const X=E/(t.length-1);X<.2?ai(u,a,e,.4+M.stripNoise*.2):X<.5?ai(u,e,i,.4):X<.8?ai(u,i,n,.5):ai(u,n,r,.6);const H=.9+this.noise(v*.4,E*2.2)*.16;c.push(u.r*H,u.g*H,u.b*H)}h.push(L)}h.forEach(v=>v&&v.forEach(M=>l.push(...M)));const d=new Map;let m=0;h.forEach((v,M)=>{v&&(d.set(M,m),m+=t.length)});const g=[];for(let v=0;v<h.length;v++){const M=h[v],x=h[(v+1)%h.length];if(!M||!x)continue;const L=d.get(v),E=d.get((v+1)%h.length);if(!(L===void 0||E===void 0))for(let w=0;w<t.length-1;w++)g.push(L+w,E+w,L+w+1,L+w+1,E+w,E+w+1)}const _=new re;_.setAttribute("position",new Ht(l,3)),_.setAttribute("color",new Ht(c,3)),_.setIndex(g),_.computeVertexNormals();const f=new $t({vertexColors:!0,roughness:1,metalness:0,flatShading:!0,side:Fe}),p=new xt(_,f);p.castShadow=!0,p.receiveShadow=!0,this.group.add(p),this[o<0?"wallLeft":"wallRight"]=p}}_buildGates(){const t=["#ffce6e","#ff9d4d","#ffce6e"];this.gateS.forEach((e,i)=>{const n=new fe,r=this.samplePos(e,0),a=this.getSample(e).a,o=Math.atan2(a.tan.x,a.tan.z);n.position.copy(r),n.rotation.y=o;const l=a.width,c=new ke(1.1,9,1.1),u=new $t({color:"#3e2b27",roughness:.8,metalness:.2}),h=new Ne({color:"#ffc46b"});for(const f of[-1,1]){const p=new xt(c,u);p.position.set(f*(l/2+.6),4.4,0),p.castShadow=!0,n.add(p);const v=new xt(new ke(.24,7.4,.24),h);v.position.set(f*(l/2+.6),4.4,-.62),n.add(v)}const d=new xt(new ke(l+2.8,1.4,1.4),u);d.position.set(0,9,0),d.castShadow=!0,n.add(d);const m=i===0?ar(1024,160,(f,p,v)=>{f.fillStyle="#2a1b17",f.fillRect(0,0,p,v),f.fillStyle="#ffce6e",f.fillRect(0,0,p,8),f.fillRect(0,v-8,p,8),f.font='900 92px "Arial Black", sans-serif',f.textAlign="center",f.textBaseline="middle",f.fillStyle="#f7e3bb",f.fillText("SUNBREAK  START",p/2,v/2-2)}):ar(1024,160,(f,p,v)=>{f.fillStyle="#2a1b17",f.fillRect(0,0,p,v);const M=t[i%t.length];f.fillStyle=M,f.fillRect(0,0,p,7),f.fillRect(0,v-7,p,7),f.font='900 72px "Arial Black", sans-serif',f.textAlign="center",f.textBaseline="middle",f.fillStyle="#f7e3bb",f.fillText(`CHECKPOINT  ${i}`,p/2,v/2+2);for(let x=0;x<6;x++)f.fillStyle=x%2?"#ffce6e":"#b55a38",f.fillRect(p-210+x*30,40,18,80)}),g=new si(l+2.2,2),_=new Ne({map:m,transparent:!0,side:Ei});for(const f of[-1,1]){const p=new xt(g,_);p.position.set(0,7.7,f*.03),p.rotation.y=f<0?Math.PI:0,n.add(p)}if(i===0){const f=[];for(let p=0;p<5;p++){const v=new Ne({color:"#42211b"}),M=new xt(new ls(.46,12,10),v);M.position.set((p-2)*1.7,6.25,.1),n.add(M),f.push(v)}this.startLights=f}n.name=`gate-${i}`,this.group.add(n),this.gates.push({s:e,idx:i,group:n,emissive:h})})}setStartLights(t,e=!1){this.startLights&&this.startLights.forEach((i,n)=>{const r=n<t;i.color.set(r?e?"#8dffb0":"#ff4a2a":"#42211b")})}_buildTunnels(){const t=new $t({color:"#8a4630",roughness:1,flatShading:!0}),e=new Ne({color:"#ffd08a"});this.tunnelLights=[];for(const i of this.tunnelRanges){const n=Math.max(2,Math.floor((i.end-i.start)/9));for(let r=0;r<=n;r++){const a=i.start+(i.end-i.start)*r/n,o=this.samplePos(a,0),l=this.getSample(a).a,c=Math.atan2(l.tan.x,l.tan.z),u=l.width/2+3.5,h=new xt(new dr(u,2.4,5,12,Math.PI),t);h.position.set(o.x,o.y-1.2,o.z),h.rotation.y=c,h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),this.tunnelLights.push(h);for(const d of[-1,1]){const m=this.samplePos(a,d*(l.width/2+.9)),g=new xt(new ke(.35,1.4,.35),e);g.position.set(m.x,m.y+4.2,m.z),g.rotation.y=c,this.group.add(g)}}for(let r=0;r<n;r++){const a=i.start+(i.end-i.start)*(r+.5)/n,o=this.samplePos(a,0),l=this.getSample(a).a,c=Math.atan2(l.tan.x,l.tan.z),u=new xt(new ke(l.width+12,5,9),t);u.position.set(o.x,o.y+11,o.z),u.rotation.y=c,u.castShadow=!0,this.group.add(u)}}}_buildArches(){const t=[{x:96,z:-29,radius:17},{x:246,z:-118,radius:20}],e=new $t({color:"#b4603c",roughness:1,flatShading:!0});for(const o of t){const l=this.findS(o.x,o.z),c=this.samplePos(l,0),u=this.getSample(l).a,h=Math.atan2(u.tan.x,u.tan.z),d=new xt(new dr(o.radius,3,6,14,Math.PI),e);d.position.set(c.x,c.y-.5,c.z),d.rotation.y=h,d.castShadow=!0,d.receiveShadow=!0,this.group.add(d)}const i=this.findS(246,-140),n=this.samplePos(i,0),r=new Un(10,34,7,3);r.translate(0,16,0);const a=new xt(r,e);a.position.set(n.x,n.y-6,n.z),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a),this.island=a,this.decorColliders.push({x:n.x,z:n.z,r:10,y:n.y})}_buildRoadside(){const t=ar(512,256,(h,d,m)=>{h.fillStyle="#2a1b17",h.fillRect(0,0,d,m),h.fillStyle="#ffce6e",h.fillRect(0,0,d,10),h.fillRect(0,m-10,d,10),h.fillStyle="#f7e3bb",h.font='900 62px "Arial Black", sans-serif',h.textAlign="center",h.fillText("STAY",d/2,95),h.fillStyle="#ff9d4d",h.fillText("FAST",d/2,170),h.font="700 30px sans-serif",h.fillStyle="#e8cfa2",h.fillText("SUNBREAK CANYON",d/2,220)}),e=new $t({map:t,roughness:.8,emissive:"#3a2015",emissiveIntensity:.3,side:Fe}),i=new $t({color:"#4a3028",roughness:.9}),n=this.findS(242,-205);for(const[h,d]of[[0,1],[260,-1]]){const m=n+h,g=this.getSample(m).a,_=d*(g.width/2-1),f=this.samplePos(m,_),p=new xt(new si(5.2,2.6),e);p.position.set(f.x,f.y+4.6,f.z),p.rotation.y=Math.atan2(g.tan.x,g.tan.z),this.group.add(p);for(const v of[-1,1]){const M=new xt(new ke(.28,5.2,.28),i),x=this.samplePos(m,_+v*1.7);M.position.set(x.x,f.y+2.6,x.z),this.group.add(M)}}const r=new $t({color:"#6d3325",roughness:1,flatShading:!0}),a=xi(77),o=[[this.findS(210,92),1],[this.findS(475,-250),-1],[this.findS(-210,245),1],[this.findS(-265,40),-1],[this.findS(70,-55),1]];for(const[h,d]of o){const m=this.getSample(h).a,g=d*(m.width/2+2.2),_=this.samplePos(h,g),f=4+a()*5,p=new Ie(.8,1.25,f,6,2),v=new xt(p,r);v.position.set(_.x,_.y+f/2,_.z),v.rotation.y=a()*de,v.castShadow=!0,this.group.add(v),this.decorColliders.push({x:_.x,z:_.z,r:1.35,y:_.y})}const l=new $t({color:"#cf4938",roughness:.6,metalness:.15,flatShading:!0}),c=new $t({color:"#f1dfb5",roughness:.72,metalness:.05,flatShading:!0}),u=[[this.findS(310,80),150,1],[this.findS(455,-165),130,-1],[this.findS(-250,15),110,1]];for(const[h,d,m]of u)for(let g=0;g<d;g+=7.2){const _=h+g,f=this.getSample(_).a,p=m*(f.width/2+1.25),v=this.samplePos(_,p),M=new xt(new ke(.42,.72,6.6),Math.floor(g/7.2)%2?c:l);M.position.set(v.x,v.y+.36,v.z),M.rotation.y=Math.atan2(f.tan.x,f.tan.z),M.castShadow=!0,M.receiveShadow=!0,this.group.add(M)}}_buildMinimap(){this.mapPoints=[];for(let t=0;t<this.length;t+=16){const e=this.samplePos(t,0);this.mapPoints.push({x:e.x,z:e.z})}}}function o0(s,t,e,i){s.push(t,e,i)}function l0(s,t="#ffffff",e=1){const i=ar(512,128,(a,o,l)=>{a.clearRect(0,0,o,l),a.fillStyle="rgba(30,18,14,0.82)",a.beginPath(),a.roundRect(6,20,o-12,l-40,18),a.fill(),a.strokeStyle=t,a.lineWidth=5,a.stroke(),a.fillStyle=t,a.font='900 52px "Arial Black", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(s,o/2,l/2+2)}),n=new is({map:i,transparent:!0,depthWrite:!1}),r=new sr(n);return r.scale.set(6*e,1.5*e,1),r}class c0{constructor(t,e){this.scene=t,this.track=e,this.rng=xi(4242),this.noise=Rc(771),this.weatherClock=0,this.weather=.22,this.wind=new P(1,0,.28).normalize(),this.baseSunDir=new P(-.48,.44,-.76).normalize(),this.buildSky(),this.buildLights(),this.buildTerrain(),this.buildMesas(),this.buildHorizonRidges(),this.buildHeroLandmarks(),this.buildFlora(),this.buildDustDevils(),this.buildWindDust()}buildSky(){const t=this.baseSunDir.clone();this.sunDir=t;const e=new ls(1600,32,20),i=new me({side:Oe,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:t},topColor:{value:new dt("#27384c")},midColor:{value:new dt("#8d5c57")},horizonColor:{value:new dt("#f3a15d")},hazeColor:{value:new dt("#d8754a")}},vertexShader:`
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
      `}),n=new xt(e,i);n.frustumCulled=!1,this.scene.add(n),this.sky=n;const r=u0();this.sunSprite=new sr(new is({map:r,color:"#fff0c2",transparent:!0,opacity:.86,depthWrite:!1,blending:Qi})),this.sunSprite.scale.set(92,92,1),this.scene.add(this.sunSprite),this.scene.fog=new oo(new dt("#c96849"),82e-5),this.skyMaterial=i}buildLights(){const t=new Jm("#ffd0a0","#3b1b1a",1.08);this.scene.add(t);const e=new Cl("#ffbd78",3.5);e.position.copy(this.sunDir).multiplyScalar(260),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const i=170;e.shadow.camera.left=-i,e.shadow.camera.right=i,e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.camera.near=20,e.shadow.camera.far=620,e.shadow.bias=-7e-4,e.shadow.normalBias=.35,this.scene.add(e),this.scene.add(e.target),this.sun=e,this.hemi=t,this.ambient=new e0("#d65e45",.2),this.scene.add(this.ambient);const n=new Cl("#b83f32",.48);n.position.set(.4,-.5,.6),this.scene.add(n)}updateSun(t){t&&(this.sun.target.position.set(t.x,t.y,t.z),this.sun.position.set(t.x,t.y,t.z).addScaledVector(this.sunDir,300),this.sun.target.updateMatrixWorld(),this.sky.position.set(t.x,0,t.z))}trackDistance(t,e){let i=1/0,n=null;const r=this.track.samples;for(let a=0;a<r.length;a+=5){const o=r[a],l=(o.pos.x-t)**2+(o.pos.z-e)**2;l<i&&(i=l,n=o)}return{dist:Math.sqrt(i),sample:n}}buildTerrain(){const i=new si(2e3,2e3,110,110);i.rotateX(-Math.PI/2);const n=i.attributes.position,r=[],a=new dt,o=new dt("#c1865a"),l=new dt("#a96942"),c=new dt("#8f5238"),u=new dt("#a6482f"),h=new dt("#7d3626");for(let g=0;g<n.count;g++){const _=n.getX(g),f=n.getZ(g),p=this.trackDistance(_,f),v=p.sample,M=p.dist,x=v?v.width/2:14,L=v?v.pos.y:0,E=this.noise(_*.008,f*.008),w=this.noise(_*.031,f*.031);let C;if(M<x+26)C=L-7.2+w*1.4-Tt((x+26-M)/26,0,1)*.8;else{const R=Tt((M-x-26)/120,0,1);C=L-7.2+R*R*38+E*16+w*2.6}const b=Math.abs(this.noise(_*.0035+4,f*.0035-8));M>x+20&&(C-=h0(b,.06)*5),n.setY(g,C);const S=Tt((C-L+9)/30+(M-x)/160+w*.15,0,1);a.copy(o).lerp(l,Tt(E*.5+.5,0,1)),a.lerp(c,Tt(w*.4+.3,0,1)*.45),a.lerp(u,Tt(S*1.5,0,1)),a.lerp(h,Tt((S-.55)*1.4,0,1)),M<x+3&&a.lerp(l,.35),r.push(a.r,a.g,a.b)}i.setAttribute("color",new Ht(r,3)),i.computeVertexNormals();const d=new $t({vertexColors:!0,roughness:1,metalness:0,flatShading:!0}),m=new xt(i,d);m.receiveShadow=!0,m.name="terrain",this.scene.add(m),this.terrain=m}buildMesas(){const t=xi(818);this.mesas=new fe,this.scene.add(this.mesas);const e=["#9c422c","#b05637","#c06c44","#853826","#d18a5d"],i=[];let n=0;for(;i.length<26&&n<900;){n++;const a=t()*de,o=190+t()*640,l=Math.cos(a)*o,c=Math.sin(a)*o;if(this.trackDistance(l,c).dist<85)continue;let h=!1;for(const d of i)(d.x-l)**2+(d.z-c)**2<110*110&&(h=!0);h||i.push({x:l,z:c})}for(const a of i){const o=this.trackDistance(a.x,a.z),l=(o.sample?o.sample.pos.y:0)-8+t()*6,c=30+t()*85,u=22+t()*46,h=5+Math.floor(t()*3),d=new fe,m=2+Math.floor(t()*3);for(let g=0;g<m;g++){const _=1-g/(m+.6),f=u*(.65+_*.55),p=c/m*(.7+t()*.6),v=new Ie(f*(.78+t()*.12),f,p,h,2),M=new $t({color:e[Math.floor(t()*e.length)],roughness:1,flatShading:!0}),x=new xt(v,M);x.position.set(0,c/m*g+p/2,0),x.rotation.y=t()*de,x.castShadow=!0,x.receiveShadow=!0,d.add(x)}for(let g=0;g<3;g++){const _=4+t()*9,f=new ns(_,0),p=new xt(f,new $t({color:e[Math.floor(t()*e.length)],roughness:1,flatShading:!0})),v=t()*de;p.position.set(Math.cos(v)*(u+4),_*.5,Math.sin(v)*(u+4)),p.rotation.set(t()*de,t()*de,t()*de),p.castShadow=!0,d.add(p)}d.position.set(a.x,l,a.z),this.mesas.add(d)}const r=new $t({color:"#8e3c29",roughness:1,flatShading:!0});for(let a=0;a<14;a++){const o=a/14*this.track.length+40,l=this.track.getSample(o).a,c=a%2?1:-1,u=this.track.samplePos(o,c*(l.width/2+18)),h=16+t()*30,d=new Un(9+t()*12,h,6,2);d.translate(0,h/2,0);const m=new xt(d,r);m.position.set(u.x,u.y-12,u.z),m.rotation.y=t()*de,m.castShadow=!0,m.receiveShadow=!0,this.mesas.add(m)}}buildHorizonRidges(){const t=xi(1818);this.horizon=new fe,this.scene.add(this.horizon);const e=new $t({color:"#6b3030",roughness:1,flatShading:!0}),i=new $t({color:"#a6503b",roughness:1,flatShading:!0});for(let n=0;n<22;n++){const r=n/22*de+(t()-.5)*.12,a=720+t()*260,o=42+t()*90,l=55+t()*105,c=new fe,u=new xt(new Ie(o*.72,o,l,5+Math.floor(t()*3),1),n%3===0?i:e);if(u.position.y=l*.5-14,u.rotation.y=t()*de,u.castShadow=!0,c.add(u),n%2===0){const h=new xt(new Ie(o*.45,o*.7,16+t()*20,6,1),i);h.position.y=l-4,h.rotation.y=t()*de,c.add(h)}c.position.set(Math.cos(r)*a,-18,Math.sin(r)*a),c.rotation.y=-r*.35,this.horizon.add(c)}this.horizon.renderOrder=-2}buildHeroLandmarks(){const t=xi(6161),e=new fe;this.scene.add(e);const i=["#713225","#8e3d2b","#aa5135","#c16a43","#d88455"],n=[{s:this.track.findS(110,-34),side:-1,height:38,width:15,name:"sun pillar"},{s:this.track.findS(238,-103),side:1,height:46,width:18,name:"hairpin spire"},{s:this.track.findS(352,-344),side:-1,height:30,width:22,name:"branch sentinel"},{s:this.track.findS(454,-116),side:1,height:52,width:20,name:"gap monolith"},{s:this.track.findS(480,-284),side:-1,height:34,width:25,name:"tunnel shoulder"},{s:this.track.findS(305,-330),side:1,height:42,width:16,name:"mesa needle"}];for(const r of n){const a=this.track.getSample(r.s).a,o=r.side*(a.width/2+22+t()*8),l=this.track.samplePos(r.s,o),c=new fe,u=3+Math.floor(t()*2);for(let d=0;d<u;d++){const m=d/u,g=r.height/u*(.82+t()*.28),_=r.width*(.72-m*.28)*(.86+t()*.2),f=new xt(new Ie(_*.78,_,g,5+d%2,1),new $t({color:i[(d+Math.floor(t()*2))%i.length],roughness:1,flatShading:!0}));f.position.y=d*(r.height/u)+g*.5,f.rotation.y=t()*de,f.castShadow=!0,f.receiveShadow=!0,c.add(f)}const h=new xt(new ns(r.width*.5,0),new $t({color:"#d88455",roughness:1,flatShading:!0}));h.position.y=r.height+2,h.scale.y=.55,c.add(h),c.position.set(l.x,l.y-8,l.z),c.rotation.y=Math.atan2(a.tan.x,a.tan.z)+r.side*.38,c.name=r.name,e.add(c)}for(const r of[-1,1]){const a=this.track.findS(372,-350),o=this.track.getSample(a).a,l=this.track.samplePos(a,r*(o.width/2+34)),c=new xt(new Ie(18,25,8,6,1),new $t({color:r<0?"#8e3d2b":"#a95035",roughness:1,flatShading:!0}));c.position.set(l.x,l.y+7,l.z),c.rotation.y=Math.atan2(o.tan.x,o.tan.z),c.castShadow=!0,c.receiveShadow=!0,e.add(c)}this.heroLandmarks=e}buildFlora(){const t=xi(9911);this.flora=new fe,this.scene.add(this.flora);const e=new $t({color:"#4c6b4f",roughness:.9,flatShading:!0}),i=new $t({color:"#e6b54a",roughness:.8,emissive:"#7a4a13",emissiveIntensity:.2}),n=new $t({color:"#8a4530",roughness:1,flatShading:!0});for(let a=0;a<90;a++){const o=t()*de,l=40+t()*520,c=Math.cos(o)*l,u=Math.sin(o)*l,h=this.trackDistance(c,u);if(h.dist<h.sample.width/2+7||h.dist>120)continue;this.track.samplePos(h.sample.s,(c-h.sample.pos.x)*h.sample.right.x+(u-h.sample.pos.z)*h.sample.right.z);const d=this.terrainHeightAt(c,u);if(t()<.45){const m=new fe,g=3+t()*4.5,_=new xt(new Ie(.42,.55,g,6),e);_.position.y=g/2,_.castShadow=!0,m.add(_);const f=1+Math.floor(t()*3);for(let v=0;v<f;v++){const M=g*(.35+t()*.25),x=new xt(new Ie(.28,.32,M,5),e);x.position.set((t()-.5)*1.4,g*(.42+t()*.18),0),x.rotation.z=(t()-.5)*.7,x.castShadow=!0,m.add(x)}const p=new xt(new ls(.36,6,5),i);p.position.y=g+.2,m.add(p),m.position.set(c,d,u),m.rotation.y=t()*de,this.flora.add(m)}else{const m=1.2+t()*4.2,g=new xt(new ns(m,0),n);g.position.set(c,d+m*.4,u),g.rotation.set(t()*de,t()*de,t()*de),g.castShadow=!0,g.receiveShadow=!0,this.flora.add(g)}}const r=new $t({color:"#8f7a45",roughness:1,flatShading:!0});for(let a=0;a<60;a++){const o=t()*this.track.length,l=this.track.getSample(o).a;if(this.track.isGap(o))continue;const u=(t()<.5?-1:1)*(l.width/2+3+t()*12),h=this.track.samplePos(o,u),d=new fe;for(let m=0;m<5;m++){const g=new Un(.25,1.2+t(),4),_=new xt(g,r);_.position.set((t()-.5)*.9,.6,(t()-.5)*.9),_.rotation.z=(t()-.5)*.6,d.add(_)}d.position.set(h.x,h.y-.2,h.z),this.flora.add(d)}}terrainHeightAt(t,e){const i=this.trackDistance(t,e),n=i.sample,r=i.dist,a=n?n.width/2:14,o=n?n.pos.y:0,l=this.noise(t*.008,e*.008),c=this.noise(t*.031,e*.031);if(r<a+26)return o-7.2+c*1.4;const u=Tt((r-a-26)/120,0,1);return o-7.2+u*u*38+l*16+c*2.6}buildDustDevils(){const t=new fe;this.scene.add(t);const e=14;this.devils=[];const i=xi(51),n=Dl();for(let r=0;r<e;r++){const a=new is({map:n,color:"#e9bd90",transparent:!0,opacity:.15,depthWrite:!1}),o=new sr(a),l=45+i()*70;o.scale.set(l,l*2.4,1);const c=i()*de,u=120+i()*520;o.position.set(Math.cos(c)*u,8+i()*18,Math.sin(c)*u),t.add(o),this.devils.push({sprite:o,speed:1+i()*2,phase:i()*de})}this.devilsGroup=t}buildWindDust(){const t=new fe;this.scene.add(t);const e=Dl();this.windDust=[];for(let i=0;i<22;i++){const n=new is({map:e,color:i%3===0?"#f4c58d":"#d99867",transparent:!0,opacity:0,depthWrite:!1,blending:Bi}),r=new sr(n);r.scale.set(18+this.rng()*28,3.5+this.rng()*5,1),t.add(r),this.windDust.push({sprite:r,offset:new P((this.rng()-.5)*90,1.2+this.rng()*7,(this.rng()-.5)*90),phase:this.rng()*de,speed:7+this.rng()*12})}this.windDustGroup=t}update(t,e,i){this.weatherClock+=t;const n=.5+.5*Math.sin(this.weatherClock*.22)+.18*Math.sin(this.weatherClock*.71+1.7);this.weather=Tt(.2+n*.55,.12,.86);const r=this.weatherClock*.018+Math.sin(this.weatherClock*.11)*.22,a=.39+Math.sin(this.weatherClock*.075)*.08;this.wind.set(Math.cos(r),0,Math.sin(r)).normalize(),this.sunDir.copy(this.baseSunDir).applyAxisAngle(new P(0,1,0),r*.16),this.sunDir.y=a,this.sunDir.normalize(),this.skyMaterial&&this.skyMaterial.uniforms.sunDir.value.copy(this.sunDir),this.sun&&(this.sun.position.copy(e).addScaledVector(this.sunDir,300),this.sun.intensity=3+(1-this.weather)*1,this.sun.color.setHSL(.075-this.weather*.018,.7,.68)),this.hemi&&(this.hemi.intensity=.92+(1-this.weather)*.28),this.ambient&&(this.ambient.intensity=.16+this.weather*.12),this.scene.fog&&(this.scene.fog.density=72e-5+this.weather*36e-5);for(const o of this.windDust){const l=o.sprite.position;l.addScaledVector(this.wind,(o.speed+n*9)*t),l.y+=Math.sin(i*.8+o.phase)*t*.35,l.distanceTo(e)>90&&l.copy(e).add(o.offset),o.sprite.material.opacity=Tt((this.weather-.16)*.24,0,.18)*(.7+.3*Math.sin(i+o.phase))}for(const o of this.devils)o.sprite.position.x+=(12+o.speed*4+n*8)*t,o.sprite.position.x>900&&(o.sprite.position.x=-900),o.sprite.position.y+=Math.sin(i*.4+o.phase)*t*.25;this.sky&&(this.sky.position.x=e.x),this.sunSprite&&(this.sunSprite.position.copy(e).addScaledVector(this.sunDir,920),this.sunSprite.position.y+=18)}}function h0(s,t){return Tt(1-Math.abs(s)/t,0,1)}function Dl(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(255,255,255,0.85)"),e.addColorStop(.45,"rgba(255,255,255,0.28)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new fs(s)}function u0(){const s=document.createElement("canvas");s.width=256,s.height=256;const t=s.getContext("2d"),e=t.createRadialGradient(128,128,8,128,128,128);e.addColorStop(0,"rgba(255,255,245,1)"),e.addColorStop(.16,"rgba(255,232,170,.95)"),e.addColorStop(.42,"rgba(255,166,86,.42)"),e.addColorStop(1,"rgba(255,126,53,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new fs(s);return i.colorSpace=Ce,i}const d0=24,f0=Math.PI;function Il(s,t={}){return new $t({color:s,roughness:.55,metalness:.25,flatShading:!0,...t})}function Jr(s,t={}){return new Zm({color:s,roughness:.2,metalness:.7,clearcoat:.85,clearcoatRoughness:.14,flatShading:!0,...t})}function ce(s,t,e,i,n=0,r=0,a=0){const o=new xt(new ke(s,t,e),i);return o.position.set(n,r,a),o.castShadow=!0,o.receiveShadow=!0,o}class Ul{constructor(t,e={}){this.group=new fe,this.tilt=new fe,this.group.add(this.tilt),t.add(this.group);const i=Jr(e.body||"#14a89e"),n=Jr(e.bodyDark||"#08736f",{roughness:.28,metalness:.62}),r=Il("#10191d",{roughness:.3,metalness:.7}),a=Jr(e.accent||"#ff7a2f",{emissive:e.emissive||"#ff421c",emissiveIntensity:.9,roughness:.22,metalness:.45}),o=Il(e.trim||"#ffd07c",{emissive:e.trimEmissive||"#b8551f",emissiveIntensity:.22,roughness:.3,metalness:.65}),l=new $t({color:"#091c25",roughness:.08,metalness:.86,transparent:!0,opacity:.94}),c=new $t({color:"#080d10",roughness:.94,metalness:.03}),u=new $t({color:"#b9e0d8",roughness:.19,metalness:.94,flatShading:!0}),h=new fe;this.tilt.add(h),this.body=h,this.tilt.rotation.y=f0,h.add(ce(2.12,.48,3.55,i,0,.64,.05)),h.add(ce(1.82,.27,1.18,i,0,.54,-2.05)),h.add(ce(1.46,.18,.62,o,0,.55,-2.61)),h.add(ce(2.34,.18,.28,r,0,.39,-2.5)),h.add(ce(2.16,.2,.28,r,0,.42,2.03));const d=ce(1.55,.54,1.55,r,0,1.13,.18);d.rotation.x=-.04,h.add(d);const m=ce(1.42,.4,.1,l,0,1.18,-.62);m.rotation.x=-.58,h.add(m);const g=ce(1.42,.1,1.08,n,0,1.43,.28);h.add(g);const _=ce(1.34,.3,.08,l,0,1.17,.91);_.rotation.x=.48,h.add(_),h.add(ce(.1,.12,1.22,a,0,1.5,.18)),h.add(ce(.22,.035,3.55,o,0,.9,-.02)),h.add(ce(.09,.045,2.2,a,0,.93,.9)),this.sideLights=[];for(const S of[-1,1]){h.add(ce(.16,.2,2.7,r,S*1.08,.48,0)),h.add(ce(.08,.06,2.25,a,S*1.12,.68,.02));const R=ce(.035,.08,1.25,o,S*1.15,.77,-.18);h.add(R),this.sideLights.push(R);const U=new xt(new Ie(.34,.34,.045,24),o);U.rotation.z=Math.PI/2,U.position.set(S*1.12,.88,.22),h.add(U);const O=new xt(new si(.5,.38),new Ne({map:p0("07"),transparent:!0}));O.position.set(S*1.145,.88,.22),O.rotation.y=S>0?Math.PI/2:-Math.PI/2,h.add(O)}for(const S of[-1,1]){h.add(ce(.42,.06,.42,a,S*1.02,.5,-2.42));const R=ce(.08,.82,.08,r,S*.68,1.13,.93);R.rotation.x=.16,h.add(R)}h.add(ce(1.42,.08,.08,r,0,1.55,.93)),h.add(ce(.1,.44,.1,r,-.78,1.2,1.86)),h.add(ce(.1,.44,.1,r,.78,1.2,1.86));const f=ce(2.1,.1,.54,a,0,1.45,1.98);f.rotation.x=.1,h.add(f),h.add(ce(1.55,.04,.09,o,0,1.5,2.23));const p=new Ne({color:"#fff1c7"}),v=new Ne({color:"#a5151d"});this.tailMats=[v],h.add(ce(1.26,.1,.05,p,0,.7,-2.66));for(const S of[-1,1])h.add(ce(.5,.12,.05,v,S*.57,.82,1.99));this.wheels=[];const M=new Ie(.5,.5,.38,18);M.rotateZ(Math.PI/2);const x=new Ie(.3,.3,.4,10);x.rotateZ(Math.PI/2);const L=new Ie(.1,.1,.42,10);L.rotateZ(Math.PI/2);const E=[[-1,.48,-1.38,!0],[1,.48,-1.38,!0],[-1.02,.5,1.38,!1],[1.02,.5,1.38,!1]];for(const[S,R,U,O]of E){const W=new fe;W.position.set(S,R,U);const X=new fe;W.add(X),X.add(new xt(M,c)),X.add(new xt(x,u)),X.add(new xt(L,a));for(let H=0;H<5;H++){const $=new xt(new ke(.43,.055,.08),u);$.rotation.x=H/5*Math.PI,X.add($)}this.tilt.add(W),this.wheels.push({pivot:W,spin:X,front:O,baseY:R})}this.flames=[];const w=new Ne({color:"#ffb35c",transparent:!0,opacity:.9,blending:Qi,depthWrite:!1});for(const S of[-1,1]){const R=new xt(new Un(.17,1.25,7),w.clone());R.rotation.x=Math.PI/2,R.position.set(S*.42,.48,2.48),R.visible=!1,this.tilt.add(R),this.flames.push(R)}const C=new xt(new si(2.8,4.8),new Ne({color:"#29e8d2",transparent:!0,opacity:0,blending:Qi,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.y=.06,this.tilt.add(C),this.underglow=C;const b=new xt(new si(3.4,5.3),new Ne({map:m0(),transparent:!0,opacity:.46,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.y=.08,this.group.add(b),this.blob=b,this.bodyRoll=0,this.bodyPitch=0,this.susp=0,this.suspVel=0,this.wheelSpin=0}setPose(t,e,i,n){this.group.position.copy(t),this.group.rotation.y=e}update(t,e){const{speed:i,steer:n,lateral:r,grounded:a,boostActive:o,throttle:l}=e;this.wheelSpin+=e.forwardSpeed/.46*t;for(const g of this.wheels)g.spin.rotation.x=this.wheelSpin,g.front&&(g.pivot.rotation.y=n*.4),g.pivot.position.y=g.baseY+this.susp*.35;const c=Tt(-n*.055-r*.004,-.12,.12),u=Tt((e.accel||0)*-.0018+(e.braking?.035:0),-.06,.06);this.bodyRoll=_e(this.bodyRoll,c,8,t),this.bodyPitch=_e(this.bodyPitch,u,7,t),this.suspVel+=(-this.susp*150-this.suspVel*14)*t,this.susp+=this.suspVel*t,this.tilt.rotation.z=(e.bank||0)+this.bodyRoll,this.tilt.rotation.x=(e.slope||0)*.6+this.bodyPitch,this.tilt.position.y=this.susp*.35,this.body.position.y=-this.susp*.06,this.blob.position.y=.06-(e.airHeight||0);const h=1+Tt((e.airHeight||0)/12,0,.8);this.blob.scale.set(h,h,1),this.blob.material.opacity=.4/h;const d=o;for(const g of this.flames)if(g.visible=d,d){const _=.8+Math.random()*.55;g.scale.set(1,_,1),g.material.opacity=.6+Math.random()*.35}this.underglow.material.opacity=_e(this.underglow.material.opacity,o?.4:0,10,t);const m=e.braking;for(const g of this.tailMats)g.color.setHex(m?"#ff2617":"#b32a20")}wheelWorld(t,e=new P){return this.wheels[t].pivot.getWorldPosition(e),e}addSuspensionKick(t){this.suspVel+=t}}function p0(s){const t=document.createElement("canvas");t.width=256,t.height=192;const e=t.getContext("2d");e.clearRect(0,0,256,192),e.fillStyle="#22201f",e.font='900 132px "Arial Black", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(s,128,104);const i=new fs(t);return i.colorSpace=Ce,i}function m0(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new fs(s)}class Nl{constructor(t,e,i={}){this.track=t,this.model=e,this.events=i,this.pos=new P,this.vel=new P,this.yaw=0,this.vy=0,this.s=0,this.lat=0,this.route="main",this.grounded=!0,this.airborne=!1,this.airTime=0,this.steer=0,this.boostMeter=40,this.boosting=!1,this.drifting=!1,this.driftTime=0,this.driftChain=0,this.lastDrift=0,this.driftScore=0,this.chainMultiplier=1,this.slip=0,this.forwardSpeed=0,this.lateralSpeed=0,this.speed=0,this.slope=0,this.bank=0,this.offRoad=!1,this.offRoadTime=0,this.wallContact=0,this.wallRideTime=0,this.wallRideCooldown=0,this.needsRecovery=!1,this.recoveryReason="",this.resetTimer=0,this.impactTimer=0,this.crashTimer=0,this.lastSurfaceY=0,this.nearMissCooldown=new Map,this.nearMissCount=0,this.boostTime=0,this.airBoostAwarded=!1,this.landImpact=0,this.assist=.4,this.controlLock=0,this.input={steer:0,throttle:0,brake:0,handbrake:!1,boost:!1},this.prevInput={handbrake:!1,boost:!1},this.onGroundSurface=!0}reset(t,e=0){const i=this.track.samplePos(t,e),n=this.track.getSample(t).a;this.pos.copy(i),this.pos.y+=.05,this.yaw=Math.atan2(n.tan.x,n.tan.z),this.vel.set(0,0,0),this.vy=0,this.s=t,this.lat=e,this.route="main",this.grounded=!0,this.airborne=!1,this.airTime=0,this.boostMeter=45,this.boosting=!1,this.drifting=!1,this.driftChain=0,this.driftScore=0,this.chainMultiplier=1,this.steer=0,this.forwardSpeed=0,this.lateralSpeed=0,this.speed=0,this.offRoad=!1,this.offRoadTime=0,this.wallRideTime=0,this.needsRecovery=!1,this.resetTimer=0,this.airBoostAwarded=!1,this.landImpact=0}addBoost(t){this.boostMeter=Tt(this.boostMeter+t,0,100)}useBoost(t){this.boosting=t&&this.boostMeter>1}crash(t=1){var i,n;if(this.crashTimer>.4)return;this.crashTimer=.9;const e=.55*t;this.vel.multiplyScalar(1-e),this.vy=Math.min(this.vy,0),this.driftChain=0,this.driftScore=0,this.chainMultiplier=1,this.drifting=!1,this.impactTimer=.5,this.controlLock=.28,this.boosting=!1,(n=(i=this.events).onCrash)==null||n.call(i,t,this.pos.clone())}requestRecovery(t){this.needsRecovery=!0,this.recoveryReason=t,this.drifting=!1,this.driftChain=0}groundAt(t,e){const{a:i}=this.track.getSample(t),n=this.track.surfaceAt(t,e,this.route);if(n!==null){const r=Math.abs(e)<=i.width/2+.4;return{y:n,kind:r?"road":"shoulder"}}return this.track.isGap(t)?null:{y:i.pos.y-7.1,kind:"sand"}}update(t,e,i=.4){var S,R,U,O,W,X,H,$,V,Q,rt,gt,Dt,Yt,q,tt,ft,it,vt,At;this.assist=i,this.controlLock=Math.max(0,this.controlLock-t),this.crashTimer=Math.max(0,this.crashTimer-t),this.impactTimer=Math.max(0,this.impactTimer-t),this.wallRideCooldown=Math.max(0,this.wallRideCooldown-t);const n=this.controlLock>0?0:e.steer,r=this.controlLock>0?0:e.throttle,a=this.controlLock>0?0:e.brake;let o=this.track.nearest(this.pos.x,this.pos.z,this.s);this.s=o.s,this.lat=o.lat,this.route=o.route||"main";const l=o.sample;this.bank=l.bank,l.right;let c=new P(Math.sin(this.yaw),0,Math.cos(this.yaw)),u=this.groundAt(this.s,this.lat);this.speed=Math.hypot(this.vel.x,this.vel.z);let h=null,d=0;if(this.grounded){if(!u)this.grounded=!1,this.airborne=!0,this.airTime=0;else if(this.pos.y=u.y,this.vy=0,this.route==="main"){const at=this.track.rampAt(this.s,this.lat);if(at&&this.speed>18&&at.height>=2.4){const Pt=(this.s-at.s+this.track.length*1.5)%this.track.length-this.track.length*.5;Tt((Pt+at.length*.5)/at.length,0,1)>(at.gapKicker?.52:.72)&&(h=at,d=this.speed,this.grounded=!1,this.airborne=!0,this.airTime=0,this.vy=Tt(d*(at.height/at.length)*.72+at.height*1.4,7,16),this.pos.y=u.y+.12,(R=(S=this.events).onTakeoff)==null||R.call(S,at,this.pos.clone(),d))}}}this.grounded||(this.vy-=d0*t,this.pos.y+=this.vy*t,this.airTime+=t,u&&this.pos.y<=u.y+.18&&this.land(u.y));const m=this.grounded;if(m){const at=Tt(this.speed/7,0,1),Pt=e.handbrake&&this.speed>9;Pt&&!this.drifting&&(this.drifting=!0,this.driftTime=0,(O=(U=this.events).onDriftStart)==null||O.call(U,this.pos.clone())),this.drifting&&(Math.abs(this.slip)>.16||Pt)&&this.speed>7&&(this.driftTime+=t);const It=1.95/(1+this.speed*.012)*(.42+at*.58),Xt=this.forwardSpeed<-1.5?-1:1;let I=n*It*Xt;if(this.drifting&&(I*=1.55),this.assist>0){const he=Tt((Math.abs(this.slip)-.5)*2,0,1);I-=s0(this.slip)*he*1*this.assist,Math.abs(n)<.05&&this.speed>8&&(I+=-this.slip*.7*this.assist)}this.yaw=Cn(this.yaw+I*t),this.steer=_e(this.steer,n,13,t)}else this.yaw=Cn(this.yaw+n*.85*t),this.steer=_e(this.steer,n,7,t);c=new P(Math.sin(this.yaw),0,Math.cos(this.yaw));const g=new P(c.z,0,-c.x);let _=this.vel.x*c.x+this.vel.z*c.z,f=this.vel.x*g.x+this.vel.z*g.z;if(h&&(_=Math.max(_,d)),m){let at=this.drifting?2.15:10.5;this.drifting&&this.assist>.5&&(at*=1.2),e.handbrake&&(at*=.72),this.impactTimer>0&&(at*=.8),f*=Math.exp(-at*t),this.lateralSpeed=f}if(m){if(r>.02&&_>-2){let Pt=30*(1-Math.pow(Tt(Math.abs(_)/108,0,1),1.75))*r;this.boosting&&(Pt+=19*r),_+=Pt*t}a>.02&&(_>1.5?_-=44*a*t:_>-16&&(_-=13*a*t)),e.handbrake&&(_*=1-.42*t),this.offRoad&&(_*=1-1.6*t),this.impactTimer>0&&(_*=1-1.4*t)}e.boost&&this.boostMeter>.5?(this.boosting=!0,this.boostMeter=Math.max(0,this.boostMeter-25*t),this.boostTime+=t,_+=17*t,this.boostMeter<=0&&(this.boosting=!1),m||(this.vy=Math.max(this.vy,-13))):(this.boosting=!1,this.boostTime=0);const v=.004*this.speed*this.speed+.45;_-=Math.sign(_)*Math.min(Math.abs(_),v*t),m||(f*=Math.exp(-.25*t)),Math.abs(_)<.03&&(_=0),this.vel.x=c.x*_+g.x*f,this.vel.z=c.z*_+g.z*f,this.forwardSpeed=_,this.lateralSpeed=f,this.speed=Math.hypot(this.vel.x,this.vel.z),this.slip=this.speed>2?Math.atan2(f,Math.abs(_)+.001):0,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,o=this.track.nearest(this.pos.x,this.pos.z,this.s),this.s=o.s,this.lat=o.lat;const M=o.sample,x=M.width/2;if(this.wallContact=0,m){const at=x+1;if(Math.abs(this.lat)>at){const Pt=Math.sign(this.lat),It=Math.abs(this.lat)-at;this.pos.x-=M.right.x*Pt*It,this.pos.z-=M.right.z*Pt*It,this.lat=Pt*at;const Xt=this.vel.x*M.right.x*Pt+this.vel.z*M.right.z*Pt;Xt>0&&(this.vel.x-=M.right.x*Pt*Xt*1.3,this.vel.z-=M.right.z*Pt*Xt*1.3),this.wallContact=1;const I=Math.abs(Math.atan2(Xt,Math.abs(this.forwardSpeed)+.01)),he=this.speed;if(I>.5&&he>13)this.crash(Tt(I*1.3,.4,1));else{this.impactTimer=Math.max(this.impactTimer,.12),he>22?(this.wallRideTime+=t,this.wallRideTime>.15&&(this.addBoost(14*t),(X=(W=this.events).onWallRide)==null||X.call(W,this.pos.clone(),Pt,he),this.wallRideCooldown<=0&&(this.wallRideCooldown=.28,($=(H=this.events).onWallSpark)==null||$.call(H,this.pos.clone(),Pt,M)))):this.wallRideTime=0;const Vt=Math.atan2(M.tan.x,M.tan.z),Ot=rr(this.yaw,Vt);this.yaw=Cn(this.yaw-Math.sign(Ot)*Math.min(Math.abs(Ot),2.2*t))}(Q=(V=this.events).onWallHit)==null||Q.call(V,this.pos.clone(),this.speed)}else this.wallRideTime=0}const L=this.groundAt(this.s,this.lat);if(this.grounded&&L){const at=Math.max(.35,Math.abs(this.forwardSpeed)*t),Pt=((this.s-at)%this.track.length+this.track.length)%this.track.length,It=this.groundAt(Pt,this.lat);let Xt=0;It&&It.kind==="road"&&L.kind==="road"&&(Xt=(L.y-It.y)/at),Xt=Tt(Xt,-.95,1),this.slope=Math.atan(Xt),this.vy=Xt*this.forwardSpeed*.94,this.pos.y=L.y}else this.grounded||(this.slope=_e(this.slope,Tt(-this.vy*.03,-.5,.5),1.5,t));const E=L!==null&&L.kind==="road";if(L!==null&&!E&&this.grounded?(this.offRoad=!0,this.offRoadTime+=t,(gt=(rt=this.events).onOffRoad)==null||gt.call(rt,this.pos.clone()),this.offRoadTime>3.4&&this.requestRecovery("offroad")):E||!this.grounded?(this.offRoadTime=0,this.offRoad=!1):L||(this.offRoad=!1,this.offRoadTime=0,this.pos.y<-35&&this.requestRecovery("fall")),this.checkProps(t),this.drifting&&this.grounded&&this.speed>12&&Math.abs(this.slip)>.12){this.driftChain+=t,this.lastDrift=Math.max(0,this.driftChain);const at=(4+Math.min(18,Math.abs(this.slip)*26))*t;this.addBoost(at),this.driftScore+=Math.abs(this.slip)*this.speed*t*2.2;const Pt=1+Math.min(3,Math.floor(this.driftChain/1.4));Pt>this.chainMultiplier&&(this.chainMultiplier=Pt,(Yt=(Dt=this.events).onChainStep)==null||Yt.call(Dt,Pt)),(tt=(q=this.events).onDriftTick)==null||tt.call(q,this.driftChain,this.slip)}else this.drifting&&(this.driftChain>.4&&((it=(ft=this.events).onDriftEnd)==null||it.call(ft,this.driftChain,this.chainMultiplier)),this.drifting=!1,this.driftChain=0,this.chainMultiplier=1);!this.grounded&&this.airTime>.55&&!this.airBoostAwarded&&(this.airBoostAwarded=!0,this.addBoost(10),(At=(vt=this.events).onAirtime)==null||At.call(vt,this.airTime)),this.grounded&&(this.airBoostAwarded=!1),this.grounded&&this.speed<1.2&&r>.1?(this.resetTimer+=t,this.resetTimer>5&&this.requestRecovery("stuck")):this.resetTimer=0;const b=Math.atan(Math.tan(this.bank)+this.lat*8e-4);this.model.group.position.set(this.pos.x,this.pos.y,this.pos.z),this.model.group.rotation.y=this.yaw,this.model.update(t,{speed:this.speed,steer:this.steer,lateral:this.lateralSpeed,grounded:this.grounded,boostActive:this.boosting,throttle:r,braking:a>.1,bank:this.grounded?b:this.model.bodyRoll*.25,slope:this.grounded?this.slope:0,airHeight:this.grounded?0:Math.max(0,this.pos.y-(L?L.y:this.pos.y-3)),forwardSpeed:this.forwardSpeed,accel:r*20-a*30})}land(t){var r,a,o,l;const e=Math.max(0,-this.vy);this.pos.y=t,this.vy=0,this.grounded=!0,this.airborne=!1,this.landImpact=e,this.model.addSuspensionKick(-Tt(e*.16,.4,5.5)),(a=(r=this.events).onLand)==null||a.call(r,e,this.pos.clone(),this.slip,this.airTime,this.speed);const n=.035+Tt(Math.abs(this.slip)/1.1,0,1)*.22+Tt((e-14)/60,0,.3);this.vel.multiplyScalar(1-n),e>6&&this.speed>.5&&(e>17||Math.abs(this.slip)>.55?this.crash(Tt(e/38,.12,.5)):this.addBoost(6+Math.min(14,e*.7))),Math.abs(this.slip)<.3&&e>3&&e<17&&((l=(o=this.events).onCleanLanding)==null||l.call(o,e,this.pos.clone()),this.addBoost(7)),this.airTime=0}checkProps(t){var e,i,n,r;for(const a of this.track.decorColliders){const o=this.pos.x-a.x,l=this.pos.z-a.z,c=o*o+l*l,u=a.r+1.05;if(c<u*u){const h=Math.sqrt(c)||.001,d=u-h;this.pos.x+=o/h*d,this.pos.z+=l/h*d,this.speed>6&&(this.crash(Tt(this.speed/55,.25,.9)),(i=(e=this.events).onPropHit)==null||i.call(e,this.pos.clone()))}else if(c<(a.r+5.2)**2&&this.speed>26){const h=a;(this.nearMissCooldown.get(h)||0)<=0&&(this.nearMissCooldown.set(h,3.5),this.nearMissCount++,this.addBoost(9),(r=(n=this.events).onNearMiss)==null||r.call(n,this.pos.clone()))}}for(const[a,o]of this.nearMissCooldown)o>0&&this.nearMissCooldown.set(a,o-t)}}const g0=`
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
`,_0=`
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.06, d) * vAlpha;
    gl_FragColor = vec4(vColor, a);
  }
`;class Fl{constructor(t,e,i,n){this.capacity=e,this.additive=i,this.tint=n,this.count=0;const r=new re;this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e),r.setAttribute("position",new we(this.positions,3)),r.setAttribute("aColor",new we(this.colors,3)),r.setAttribute("aSize",new we(this.sizes,1)),r.setAttribute("aAlpha",new we(this.alphas,1));const a=new me({uniforms:{},vertexShader:g0,fragmentShader:_0,transparent:!0,depthWrite:!1,blending:i?Qi:Bi});this.points=new qm(r,a),this.points.frustumCulled=!1,this.points.renderOrder=i?3:2,t.add(this.points),this.geo=r,this.data=[];for(let o=0;o<e;o++)this.data.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size0:1,size1:1,r:1,g:1,b:1,drag:1,gravity:0,alpha:1});this.cursor=0}spawn(t){const e=this.data[this.cursor];this.cursor=(this.cursor+1)%this.capacity,e.alive=!0,e.x=t.x,e.y=t.y,e.z=t.z,e.vx=t.vx||0,e.vy=t.vy||0,e.vz=t.vz||0,e.life=0,e.maxLife=t.life||1,e.size0=t.size0||1,e.size1=t.size1||e.size0,e.r=t.r??1,e.g=t.g??1,e.b=t.b??1,e.drag=t.drag??1.5,e.gravity=t.gravity??0,e.alpha=t.alpha??1,e.additive=this.additive}update(t){let e=!1;for(let i=0;i<this.capacity;i++){const n=this.data[i];if(!n.alive){this.alphas[i]=0,this.sizes[i]=0;continue}if(e=!0,n.life+=t,n.life>=n.maxLife){n.alive=!1,this.alphas[i]=0,this.sizes[i]=0;continue}const r=Math.exp(-n.drag*t);n.vx*=r,n.vz*=r,n.vy=n.vy*r-n.gravity*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t;const a=n.life/n.maxLife;this.positions[i*3]=n.x,this.positions[i*3+1]=n.y,this.positions[i*3+2]=n.z,this.colors[i*3]=n.r,this.colors[i*3+1]=n.g,this.colors[i*3+2]=n.b,this.sizes[i]=n.size0+(n.size1-n.size0)*a,this.alphas[i]=n.alpha*(1-a)*Math.min(1,a*12)}(e||this._hadAny)&&(this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0,this._hadAny=e)}}class v0{constructor(t,e=900){this.capacity=e;const i=new re;this.positions=new Float32Array(e*4*3),this.alphas=new Float32Array(e*4);const n=[];for(let o=0;o<e;o++){const l=o*4;n.push(l,l+1,l+2,l,l+2,l+3)}i.setAttribute("position",new we(this.positions,3)),i.setAttribute("aAlpha",new we(this.alphas,1)),i.setIndex(n);const r=new me({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,vertexShader:`
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
      `}),a=new xt(i,r);a.frustumCulled=!1,a.renderOrder=1,t.add(a),this.geo=i,this.cursor=0,this.data=[];for(let o=0;o<e;o++)this.data.push({life:0,maxLife:14,alive:!1})}add(t,e,i,n,r,a=.34,o=.9){const l=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const c=l*4,u=-r*a*.5,h=n*a*.5,d=this.positions;d[c*3]=t-u,d[c*3+1]=i,d[c*3+2]=e-h,d[(c+1)*3]=t+u,d[(c+1)*3+1]=i,d[(c+1)*3+2]=e+h,d[(c+2)*3]=t+u+n*.9,d[(c+2)*3+1]=i,d[(c+2)*3+2]=e+h+r*.9,d[(c+3)*3]=t-u+n*.9,d[(c+3)*3+1]=i,d[(c+3)*3+2]=e-h+r*.9;for(let m=0;m<4;m++)this.alphas[c+m]=o;this.data[l].life=0,this.data[l].maxLife=14,this.data[l].alive=!0,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}update(t){let e=!1;this.positions;for(let i=0;i<this.capacity;i++){const n=this.data[i];if(n.alive){if(n.life+=t,n.life>=n.maxLife){n.alive=!1;const r=i*4;for(let a=0;a<4;a++)this.alphas[r+a]=0;e=!0}else if(n.life>n.maxLife-3){const r=i*4,a=(n.maxLife-n.life)/3*.8;for(let o=0;o<4;o++)this.alphas[r+o]=a;e=!0}}}e&&(this.geo.attributes.aAlpha.needsUpdate=!0)}clear(){for(let t=0;t<this.capacity;t++){this.data[t].alive=!1;for(let e=0;e<4;e++)this.alphas[t*4+e]=0}this.geo.attributes.aAlpha.needsUpdate=!0}}class x0{constructor(t){this.scene=t,this.dust=new Fl(t,900,!1),this.sparks=new Fl(t,500,!0),this.rings=[],this.skid=new v0(t),this.lastSkid=[null,null]}update(t){this.dust.update(t),this.sparks.update(t),this.skid.update(t)}reset(){this.skid.clear(),this.lastSkid=[null,null]}driftSmoke(t,e,i,n=1){const r=2+Math.floor(n*1.8);for(let a=0;a<r;a++)this.dust.spawn({x:t.x+(Math.random()-.5)*.7,y:t.y+.18,z:t.z+(Math.random()-.5)*.7,vx:i.x*.14+(Math.random()-.5)*1.8,vy:.8+Math.random()*1,vz:i.z*.14+(Math.random()-.5)*1.8,life:.8+Math.random()*.9,size0:.45,size1:1.9+Math.random()*1.1,r:.8,g:.68,b:.52,alpha:.16+Math.random()*.11,drag:1.9,gravity:-.5})}tireDust(t,e,i=1){for(let n=0;n<3;n++)this.dust.spawn({x:t.x+(Math.random()-.5)*1.4,y:t.y+.25,z:t.z+(Math.random()-.5)*1.4,vx:e.x*.22+(Math.random()-.5)*3,vy:.8+Math.random()*1.6,vz:e.z*.22+(Math.random()-.5)*3,life:1+Math.random()*.7,size0:.5,size1:2.4,r:.76,g:.61,b:.45,alpha:.19,drag:1.7,gravity:-.4})}landingDust(t,e=8){const i=Tt(Math.floor(e*1.4),6,26);for(let n=0;n<i;n++){const r=n/i*Math.PI*2+Math.random()*.4,a=2+Math.random()*4;this.dust.spawn({x:t.x+Math.cos(r)*1.2,y:t.y+.15,z:t.z+Math.sin(r)*1.2,vx:Math.cos(r)*a+(Math.random()-.5),vy:.6+Math.random()*1.8,vz:Math.sin(r)*a+(Math.random()-.5),life:1.1+Math.random()*.8,size0:.8,size1:3.1,r:.8,g:.66,b:.5,alpha:.2,drag:2.2,gravity:-.3})}}wallSparks(t,e,i){for(let n=0;n<14;n++){const r=i||{x:0,z:1};this.sparks.spawn({x:t.x,y:t.y+.5+Math.random()*.8,z:t.z,vx:-e*Math.cos(Math.random()*1.4)*(2+Math.random()*5)+r.x*8,vy:1+Math.random()*4,vz:-e*Math.sin(Math.random()*1.4)*(2+Math.random()*5)+r.z*8,life:.35+Math.random()*.5,size0:.35,size1:.05,r:1,g:.72,b:.25,alpha:1,drag:.7,gravity:16})}}boostTrail(t,e,i){for(let n=0;n<8;n++){const r=t.x-e.x*2.4+i*.42+(Math.random()-.5)*.3,a=t.z-e.z*2.4+(Math.random()-.5)*.3;this.sparks.spawn({x:r,y:t.y+.5+Math.random()*.2,z:a,vx:-e.x*6+(Math.random()-.5)*1.5,vy:.2+Math.random()*1,vz:-e.z*6+(Math.random()-.5)*1.5,life:.34+Math.random()*.36,size0:1.25+Math.random()*.45,size1:.1,r:.35,g:.95,b:.95,alpha:.95,drag:2,gravity:-1})}for(let n=0;n<3;n++)this.dust.spawn({x:t.x-e.x*2.2,y:t.y+.4,z:t.z-e.z*2.2,vx:-e.x*3,vy:.6,vz:-e.z*3,life:.5,size0:.6,size1:2.2,r:1,g:.75,b:.5,alpha:.18,drag:2})}crashBurst(t,e){for(let i=0;i<22;i++)this.sparks.spawn({x:t.x+(Math.random()-.5),y:t.y+.8,z:t.z+(Math.random()-.5),vx:(Math.random()-.5)*14+e.x*4,vy:3+Math.random()*7,vz:(Math.random()-.5)*14+e.z*4,life:.4+Math.random()*.5,size0:.5,size1:.05,r:1,g:.6,b:.2,alpha:1,drag:.8,gravity:15});this.landingDust(t,18)}jumpDust(t){for(let e=0;e<8;e++)this.dust.spawn({x:t.x+(Math.random()-.5)*2,y:t.y+.3,z:t.z+(Math.random()-.5)*2,vx:(Math.random()-.5)*4,vy:.4+Math.random()*2,vz:(Math.random()-.5)*4,life:.7,size0:.8,size1:3,r:.8,g:.68,b:.52,alpha:.22,drag:2})}addRing(t,e="#ffd08a",i=14){const n=new Ne({color:e,transparent:!0,opacity:.55,side:Fe,depthWrite:!1}),r=new xt(new ho(.6,1,32),n);r.rotation.x=-Math.PI/2,r.position.set(t.x,t.y+.2,t.z),this.scene.add(r),this.rings.push({mesh:r,life:0,maxLife:.8,maxScale:i})}updateRings(t){for(let e=this.rings.length-1;e>=0;e--){const i=this.rings[e];i.life+=t;const n=i.life/i.maxLife,r=1+n*i.maxScale;i.mesh.scale.set(r,r,r),i.mesh.material.opacity=.5*(1-n),n>=1&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.rings.splice(e,1))}}skidTrail(t,e,i,n=1){const r=this.lastSkid[t],a=e.y+.045;if(!r){this.lastSkid[t]={x:e.x,z:e.z,y:a};return}const o=e.x-r.x,l=e.z-r.z,c=Math.hypot(o,l);c>.34&&c<4&&(this.skid.add(r.x,r.z,a,o/c,l/c,.3,.8*n),this.skid.add(r.x+i.x*.55,r.z+i.z*.55,a,o/c,l/c,.24,.7*n),this.lastSkid[t]={x:e.x,z:e.z,y:a})}endSkid(){this.lastSkid=[null,null]}}const $n=["chase","far","hood"];function Xs(s){return new P(Math.sin(s),0,Math.cos(s))}class M0{constructor(t,e,i){this.camera=t,this.track=e,this.env=i,this.modeIndex=0,this.mode=$n[0],this.yaw=0,this.pos=new P,this.look=new P,this.basePos=new P,this.baseLook=new P,this.trauma=0,this.time=0,this.fov=t.fov,this.roll=0,this.introAngle=0,this.snapped=!1}cycle(){return this.modeIndex=(this.modeIndex+1)%$n.length,this.mode=$n[this.modeIndex],this.snapped=!1,this.mode}setMode(t){this.modeIndex=Tt(t,0,$n.length-1),this.mode=$n[this.modeIndex]}addShake(t){this.trauma=Tt(this.trauma+t,0,1.2)}reset(){this.snapped=!1,this.trauma=0,this.introAngle=0}snapTo(t,e=8){const i=Xs(t.yaw);this.yaw=t.yaw,this.pos.copy(t.pos).addScaledVector(i,-e),this.pos.y=t.pos.y+3.1,this.basePos.copy(this.pos),this.baseLook.copy(t.pos).add(new P(0,1.4,0)),this.snapped=!0}update(t,e,i={}){this.time+=t;const{intro:n=!1,finished:r=!1,paused:a=!1}=i,o=Tt(e.speed/82,0,1.15),l=this.camera;if(this.trauma=Math.max(0,this.trauma-t*1.5),n){this.introAngle+=t*.06;const w=e.pos,C=10.3,b=Xs(e.yaw),S=new P(b.z,0,-b.x),R=Math.sin(this.introAngle)*.42,U=new P().copy(w).addScaledVector(b,-Math.cos(R)*C).addScaledVector(S,Math.sin(R)*C);U.y=w.y+3.5+Math.sin(this.introAngle*.7)*.25;const O=this.env?this.env.terrainHeightAt(U.x,U.z):-100;U.y=Math.max(U.y,O+2.2),this.snapped?(this.pos.x=_e(this.pos.x,U.x,6,t),this.pos.z=_e(this.pos.z,U.z,6,t),this.pos.y=_e(this.pos.y,U.y,5,t)):(this.pos.copy(U),this.snapped=!0),this.look.lerp(new P(w.x+b.x*11,w.y+1.55,w.z+b.z*11),1-Math.exp(-5*t)),l.position.copy(this.pos),l.up.set(0,1,0),l.lookAt(this.look),this.setFov(52,t);return}if(r){this.introAngle+=t*.28;const w=e.pos,C=10,b=e.yaw+Math.PI*.6+this.introAngle*.5,S=new P(w.x+Math.cos(b)*C,w.y+3.4,w.z+Math.sin(b)*C),R=this.env?this.env.terrainHeightAt(S.x,S.z):-100;S.y=Math.max(S.y,R+2),this.pos.lerp(S,1-Math.exp(-3*t)),this.look.lerp(new P(w.x,w.y+1.1,w.z),1-Math.exp(-5*t)),l.position.copy(this.pos),l.up.set(0,1,0),l.lookAt(this.look),this.setFov(54,t);return}if(this.mode==="hood"){const w=Xs(e.yaw),C=new P(0,1,0),b=new P().copy(e.pos).addScaledVector(w,.45).addScaledVector(C,1.35);this.pos.lerp(b,1-Math.exp(-24*t)),this.look.copy(this.pos).addScaledVector(w,24).addScaledVector(C,1.2+e.slope*6),this.applyShake(t,.025*(1+o)),l.position.copy(this.pos),l.up.set(0,1,0),l.lookAt(this.look),this.roll=-e.lateralSpeed*.0022,l.rotateZ(this.roll),this.setFov(66+o*6+(e.boosting?2:0),t);return}const c=this.mode==="far",u=(c?12.5:7.4)+o*(c?3:2),h=(c?5.4:3)+o*.5;let d=e.yaw;if(e.speed>9){const w=Math.atan2(e.vel.x,e.vel.z);Math.abs(rr(w,e.yaw))<=Math.PI*.6&&(d=w)}const m=c?.48:.28,g=Cn(e.yaw+rr(d,e.yaw)*m),_=c?3.4:e.grounded?6.2:3.8;this.snapped?this.yaw=Cn(this.yaw+rr(g,this.yaw)*(1-Math.exp(-_*t))):this.yaw=g;const f=Xs(this.yaw),p=new P(f.z,0,-f.x),v=new P().copy(e.pos).addScaledVector(f,-u).addScaledVector(p,Tt(e.lateralSpeed*.045,-1.2,1.2));if(v.y=e.pos.y+h+(e.grounded?0:Tt(e.airTime*.4,0,1.4)),this.track){const w=this.track.nearest(v.x,v.z,e.s),C=Math.max(3.5,w.sample.width/2-1.15);if(Math.abs(w.lat)>C){const b=(Math.abs(w.lat)-C)*Math.sign(w.lat);v.x-=w.sample.right.x*b,v.z-=w.sample.right.z*b}}const M=this.env?this.env.terrainHeightAt(v.x,v.z):-100;if(v.y<M+1.6&&(v.y=M+1.6),!this.snapped)this.pos.copy(v),this.look.copy(e.pos),this.snapped=!0;else{const w=c?4.5:11;this.pos.x=_e(this.pos.x,v.x,w,t),this.pos.z=_e(this.pos.z,v.z,w,t),this.pos.y=_e(this.pos.y,v.y,e.grounded?6.5:4,t),this.look.x=_e(this.look.x,e.pos.x,14,t),this.look.y=_e(this.look.y,e.pos.y+1.35,e.grounded?8:5,t),this.look.z=_e(this.look.z,e.pos.z,14,t)}const x=new P().copy(e.pos).addScaledVector(f,8+o*9+(e.boosting?2.5:0)).addScaledVector(new P(0,1,0),1.2);this.look.lerp(x,1-Math.exp(-3.5*t)),this.applyShake(t,.018*(1+o)),l.position.copy(this.pos),l.position.add(this.shakeOffset),l.up.set(0,1,0),l.lookAt(this.look);const L=-e.bank*.27-Tt(e.lateralSpeed*.0022,-.04,.04);this.roll=_e(this.roll,e.grounded?L:L*.4,5,t),l.rotateZ(this.roll);const E=c?60:62;this.setFov(E+o*7+(e.boosting?3.5:0),t,a)}applyShake(t,e){const i=this.trauma*this.trauma;if(this.shakeOffset||(this.shakeOffset=new P),i<5e-4){this.shakeOffset.multiplyScalar(1-Math.min(1,t*10));return}const n=this.time*39,r=i*e*3.2;this.shakeOffset.set(Math.sin(n*1.7)*r,Math.sin(n*2.3+1.7)*r*.7,Math.sin(n*2.9+3.1)*r*.5)}setFov(t,e,i=!1){this.fov=_e(this.fov,t,4,e),Math.abs(this.camera.fov-this.fov)>.02&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}}const qs=s=>440*Math.pow(2,(s-69)/12),S0=[40,-1,40,41,40,-1,43,40,38,-1,40,41,43,45,40,47],Ol=[64,-1,68,69,71,69,68,64,65,-1,64,62,-1,64,65,68],y0=[69,71,72,74,72,71,69,68,65,64,65,68,69,-1,68,64];class b0{constructor(){this.ready=!1,this.musicVolume=.65,this.sfxVolume=.8,this.intensity=0,this.phase="menu",this.paused=!1,this.step=0,this.nextNoteTime=0,this.timer=null,this.musicStarted=!1,this.engineRpm=0,this.muted=!1}init(){if(this.ready)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=.9,this.limiter=e.createDynamicsCompressor(),this.limiter.threshold.value=-12,this.limiter.knee.value=20,this.limiter.ratio.value=4,this.limiter.attack.value=.004,this.limiter.release.value=.22,this.master.connect(this.limiter),this.limiter.connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVolume,this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=0,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this.makeImpulse(1.7,2.6),this.reverbGain=e.createGain(),this.reverbGain.gain.value=.24,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.musicReverb=e.createGain(),this.musicReverb.gain.value=.16,this.musicReverb.connect(this.reverb),this.noiseBuffer=this.makeNoise(2.5),this.setupEngine(),this.setupTires(),this.setupWind(),this.setupBoost(),this.ready=!0,this.startMusic(),this.musicBus.gain.setTargetAtTime(this.musicVolume*.5,e.currentTime,2)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}makeNoise(t){const e=this.ctx,i=Math.floor(e.sampleRate*t),n=e.createBuffer(1,i,e.sampleRate),r=n.getChannelData(0);let a=0;for(let o=0;o<i;o++){const l=Math.random()*2-1;a=.96*a+.04*l,r[o]=l*.7+a*3.2}return n}makeImpulse(t,e){const i=this.ctx,n=i.sampleRate,r=Math.floor(n*t),a=i.createBuffer(2,r,n);for(let o=0;o<2;o++){const l=a.getChannelData(o);for(let c=0;c<r;c++)l[c]=(Math.random()*2-1)*Math.pow(1-c/r,e)*(c<n*.01?c/(n*.01):1)}return a}makeLoopNoise(){const t=this.ctx.createBufferSource();return t.buffer=this.noiseBuffer,t.loop=!0,t.start(),t}setupEngine(){const t=this.ctx;this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineFilter=t.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=800,this.engineFilter.Q.value=4,this.engineGain.connect(this.engineFilter),this.engineFilter.connect(this.sfxBus),this.osc1=t.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.value=60,this.osc2=t.createOscillator(),this.osc2.type="sawtooth",this.osc2.frequency.value=62,this.osc2.detune.value=9,this.osc3=t.createOscillator(),this.osc3.type="square",this.osc3.frequency.value=30;const e=t.createGain();e.gain.value=.55,this.osc1.connect(this.engineFilter),this.osc2.connect(this.engineFilter),this.osc3.connect(e),e.connect(this.engineFilter),this.osc1.start(),this.osc2.start(),this.osc3.start(),this.engineNoise=this.makeLoopNoise(),this.engineNoiseGain=t.createGain(),this.engineNoiseGain.gain.value=0;const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=420,i.Q.value=1.1,this.engineNoise.connect(i),i.connect(this.engineNoiseGain),this.engineNoiseGain.connect(this.sfxBus),this.engineNoiseBp=i}setupTires(){const t=this.ctx;this.tireNoise=this.makeLoopNoise(),this.tireFilter=t.createBiquadFilter(),this.tireFilter.type="bandpass",this.tireFilter.frequency.value=1700,this.tireFilter.Q.value=7,this.tireGain=t.createGain(),this.tireGain.gain.value=0,this.tireNoise.connect(this.tireFilter),this.tireFilter.connect(this.tireGain),this.tireGain.connect(this.sfxBus),this.tireGain.connect(this.reverb),this.sandNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=520,this.sandGain=t.createGain(),this.sandGain.gain.value=0,this.sandNoise.connect(e),e.connect(this.sandGain),this.sandGain.connect(this.sfxBus)}setupWind(){const t=this.ctx;this.windNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700;const i=t.createBiquadFilter();i.type="highpass",i.frequency.value=120,this.windGain=t.createGain(),this.windGain.gain.value=.02,this.windNoise.connect(i),i.connect(e),e.connect(this.windGain),this.windGain.connect(this.sfxBus)}setupBoost(){const t=this.ctx;this.boostNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="bandpass",e.frequency.value=900,e.Q.value=1.4,this.boostGain=t.createGain(),this.boostGain.gain.value=0,this.boostNoise.connect(e),e.connect(this.boostGain),this.boostGain.connect(this.sfxBus),this.boostFilter=e}updateEngine(t){if(!this.ready)return;const e=this.ctx.currentTime,{speed:i=0,throttle:n=0,boosting:r=!1,slip:a=0,grounded:o=!0,offRoad:l=!1,slipFactor:c=0,active:u=!0}=t,h=i*3.6,d=Tt(Math.floor(h/52),0,5),m=(h-d*52)/52,g=Tt(.16+m*.84+n*.06,0,1.1),_=44+g*(86+d*9)+(r?16:0);this.engineFilter.frequency.setTargetAtTime(500+g*1500+n*700,e,.06),this.osc1.frequency.setTargetAtTime(_,e,.045),this.osc2.frequency.setTargetAtTime(_*1.01,e,.045),this.osc3.frequency.setTargetAtTime(_*.5,e,.045),this.engineNoiseBp.frequency.setTargetAtTime(300+g*800,e,.08);const f=u?(.11+n*.1+g*.05)*(this.paused?.4:1):0;this.engineGain.gain.setTargetAtTime(f,e,.1),this.engineNoiseGain.gain.setTargetAtTime(u?.035+n*.03:0,e,.1);const p=o?Tt((c-.08)*.55,0,.28)*Tt(i/22,0,1):0;this.tireGain.gain.setTargetAtTime(u?p:0,e,.05),this.tireFilter.frequency.setTargetAtTime(1400+c*900,e,.1),this.sandGain.gain.setTargetAtTime(u&&l?.16:0,e,.1);const v=Tt(i/78,0,1);this.windGain.gain.setTargetAtTime(.015+v*v*.16,e,.2),this.boostGain.gain.setTargetAtTime(r?.15:0,e,.09),this.boostFilter.frequency.setTargetAtTime(r?1500:500,e,.2)}boostWhoosh(){if(!this.ready)return;const t=this.ctx,e=t.currentTime,i=t.createBufferSource();i.buffer=this.noiseBuffer;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(400,e),n.frequency.exponentialRampToValueAtTime(2600,e+.35),n.Q.value=2;const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.34,e+.05),r.gain.exponentialRampToValueAtTime(.001,e+.5),i.connect(n),n.connect(r),r.connect(this.sfxBus),i.start(e),i.stop(e+.55);const a=t.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(90,e),a.frequency.exponentialRampToValueAtTime(220,e+.4);const o=t.createGain();o.gain.setValueAtTime(.08,e),o.gain.exponentialRampToValueAtTime(.001,e+.45),a.connect(o),o.connect(this.sfxBus),a.start(e),a.stop(e+.5)}tone({freq:t=440,type:e="sine",dur:i=.2,gain:n=.1,when:r=0,slide:a=null,filter:o=null}){if(!this.ready)return;const l=this.ctx,c=l.currentTime+r,u=l.createOscillator();u.type=e,u.frequency.setValueAtTime(t,c),a&&u.frequency.exponentialRampToValueAtTime(Math.max(20,a),c+i);const h=l.createGain();h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(n,c+.012),h.gain.exponentialRampToValueAtTime(8e-4,c+i);let d=u;if(o){const m=l.createBiquadFilter();m.type="lowpass",m.frequency.value=o,u.connect(m),d=m}d.connect(h),h.connect(this.sfxBus),u.start(c),u.stop(c+i+.05)}noiseBurst({dur:t=.2,gain:e=.2,freq:i=1200,type:n="bandpass",q:r=1,when:a=0}){if(!this.ready)return;const o=this.ctx,l=o.currentTime+a,c=o.createBufferSource();c.buffer=this.noiseBuffer;const u=o.createBiquadFilter();u.type=n,u.frequency.value=i,u.Q.value=r;const h=o.createGain();h.gain.setValueAtTime(e,l),h.gain.exponentialRampToValueAtTime(.001,l+t),c.connect(u),u.connect(h),h.connect(this.sfxBus),c.start(l),c.stop(l+t+.02)}landing(t=10){const e=Tt(t/20,.2,1.3);this.tone({freq:120,slide:40,type:"sine",dur:.28,gain:.22*e}),this.noiseBurst({dur:.22,gain:.18*e,freq:420,q:.7})}impact(t=1){this.noiseBurst({dur:.32,gain:.3*t,freq:240,q:.8}),this.tone({freq:90,slide:30,type:"square",dur:.25,gain:.16*t}),this.tone({freq:2400,slide:900,type:"triangle",dur:.12,gain:.05*t})}wallScrape(){this.noiseBurst({dur:.1,gain:.08,freq:3200,q:6})}checkpoint(){this.tone({freq:740,type:"triangle",dur:.16,gain:.14}),this.tone({freq:988,type:"triangle",dur:.22,gain:.12,when:.09}),this.tone({freq:1480,type:"sine",dur:.3,gain:.08,when:.18})}lap(){[659,784,988,1319].forEach((e,i)=>this.tone({freq:e,type:"triangle",dur:.3,gain:.13,when:i*.11}))}driftChain(t=2){const e=520+t*90;this.tone({freq:e,type:"sine",dur:.12,gain:.07}),this.tone({freq:e*1.5,type:"sine",dur:.16,gain:.05,when:.05})}nearMiss(){this.tone({freq:1800,slide:900,type:"sine",dur:.16,gain:.07}),this.noiseBurst({dur:.16,gain:.05,freq:2600,q:2})}branchCue(){this.tone({freq:392,type:"triangle",dur:.12,gain:.08}),this.tone({freq:587,type:"triangle",dur:.18,gain:.1,when:.08}),this.tone({freq:880,type:"sine",dur:.28,gain:.08,when:.16})}rivalPass(){this.tone({freq:320,slide:760,type:"sawtooth",dur:.22,gain:.07,filter:1800})}countdown(t=!1){t?(this.tone({freq:880,type:"square",dur:.5,gain:.15,filter:3e3}),this.tone({freq:1320,type:"triangle",dur:.6,gain:.1}),this.noiseBurst({dur:.5,gain:.1,freq:800,q:.7})):this.tone({freq:440,type:"square",dur:.18,gain:.13,filter:2200})}uiClick(){this.tone({freq:520,type:"triangle",dur:.06,gain:.07})}uiBack(){this.tone({freq:380,slide:240,type:"triangle",dur:.1,gain:.06})}finish(){[523,659,784,1046,1319,1568].forEach((e,i)=>this.tone({freq:e,type:"triangle",dur:.5,gain:.12,when:i*.14})),this.noiseBurst({dur:1.2,gain:.08,freq:700,q:.6,when:.1})}setPaused(t){if(this.paused=t,!this.ready)return;const e=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(t?this.musicVolume*.12:this.musicVolume*(this.intensity>0?.5:.62),e,.3),this.sfxBus.gain.setTargetAtTime(t?0:this.sfxVolume,e,.2),this.engineGain.gain.setTargetAtTime(0,e,.1)}setVolumes(t,e){if(this.musicVolume=t,this.sfxVolume=e,!this.ready)return;const i=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.paused?t*.12:t*(this.intensity>0?.5:.62),i,.2),this.sfxBus.gain.setTargetAtTime(this.paused?0:e,i,.15)}setIntensity(t){this.intensity=t,this.ready&&this.musicBus.gain.setTargetAtTime(this.paused?this.musicVolume*.12:this.musicVolume*(t>0?.52:.62),this.ctx.currentTime,1.2)}setPhase(t){if(this.phase=t,!this.ready)return;const e=t==="results"?.58:t==="menu"?.62:.52;this.musicBus.gain.setTargetAtTime(this.paused?this.musicVolume*.12:this.musicVolume*e,this.ctx.currentTime,.8)}startMusic(){!this.ready||this.musicStarted||(this.musicStarted=!0,this.nextNoteTime=this.ctx.currentTime+.15,this.step=0,this.timer=setInterval(()=>this.scheduler(),25),this.scheduler())}scheduler(){if(!this.ready)return;const t=60/124/4;for(;this.nextNoteTime<this.ctx.currentTime+.16;)this.playStep(this.step,this.nextNoteTime,t),this.nextNoteTime+=t,this.step=(this.step+1)%64}playStep(t,e,i){this.ctx;const n=Math.floor(t/16),r=t%16,a=this.intensity,o=a>=2||this.phase==="results",l=this.phase==="final";if((r===0||r===6||r===8||r===14&&a>0||r===11&&o)&&this.musicKick(e),(r===4||r===12)&&this.musicSnare(e,o),r%2===0&&a>0?this.musicHat(e,r%4===0?.06:.035):a===0&&r%4===2&&this.musicHat(e,.02),o&&r%2===1&&this.musicHat(e,.018),(l||this.phase==="results")&&r%4===1){const u=[76,80,83,88][(n+r)%4];this.musicLead(e,u,i*1.4,2)}const c=S0[r];if(c>=0&&this.musicBass(e,c,i*1.7,a),r===0){const u=[40,41,40,38][n%4];this.musicPad(e,[u,u+7,u+12,u+15],i*16)}if(a>=1){const h=(n%4<2?Ol:y0)[r];h>0&&this.musicLead(e,h+(n%2===1?12:0),i*(o?1.4:2),a)}else if(n%2===0){const h=Ol[r];h>0&&r%4===0&&this.musicLead(e,h,i*3,0)}a>0&&r>=13&&n%4===3&&this.musicTom(e,120+(15-r)*20,.09)}musicKick(t){const e=this.ctx,i=e.createOscillator(),n=e.createGain();i.type="sine",i.frequency.setValueAtTime(150,t),i.frequency.exponentialRampToValueAtTime(42,t+.16),n.gain.setValueAtTime(.55,t),n.gain.exponentialRampToValueAtTime(.001,t+.3),i.connect(n),n.connect(this.musicBus),i.start(t),i.stop(t+.32)}musicSnare(t,e){const i=this.ctx,n=i.createBufferSource();n.buffer=this.noiseBuffer;const r=i.createBiquadFilter();r.type="bandpass",r.frequency.value=2100,r.Q.value=1.2;const a=i.createGain();a.gain.setValueAtTime(e?.22:.15,t),a.gain.exponentialRampToValueAtTime(.001,t+.18),n.connect(r),r.connect(a),a.connect(this.musicBus),n.start(t),n.stop(t+.2);const o=i.createOscillator(),l=i.createGain();o.type="triangle",o.frequency.setValueAtTime(190,t),l.gain.setValueAtTime(.09,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),o.connect(l),l.connect(this.musicBus),o.start(t),o.stop(t+.14)}musicHat(t,e){const i=this.ctx,n=i.createBufferSource();n.buffer=this.noiseBuffer;const r=i.createBiquadFilter();r.type="highpass",r.frequency.value=7200;const a=i.createGain();a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(.001,t+.05),n.connect(r),r.connect(a),a.connect(this.musicBus),n.start(t),n.stop(t+.06)}musicBass(t,e,i,n){const r=this.ctx,a=r.createOscillator(),o=r.createOscillator();a.type="sawtooth",o.type="square",a.frequency.value=qs(e),o.frequency.value=qs(e)*.5;const l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1200,t),l.frequency.exponentialRampToValueAtTime(260,t+i),l.Q.value=5;const c=r.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(n>0?.24:.14,t+.01),c.gain.exponentialRampToValueAtTime(.001,t+i),a.connect(l),o.connect(l),l.connect(c),c.connect(this.musicBus),a.start(t),o.start(t),a.stop(t+i+.02),o.stop(t+i+.02)}musicPad(t,e,i){const n=this.ctx,r=n.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.055,t+.8),r.gain.linearRampToValueAtTime(0,t+i);const a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.7,r.connect(a),a.connect(this.musicBus),a.connect(this.musicReverb);for(const o of e){const l=n.createOscillator();l.type="sawtooth",l.frequency.value=qs(o),l.detune.value=(Math.random()-.5)*14,l.connect(r),l.start(t),l.stop(t+i+.1)}}musicLead(t,e,i,n){const r=this.ctx,a=r.createGain(),o=n>0?.085:.05;a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(o,t+.02),a.gain.exponentialRampToValueAtTime(.001,t+i);const l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(3200,t),l.frequency.exponentialRampToValueAtTime(1400,t+i),l.Q.value=2,a.connect(l),l.connect(this.musicBus),l.connect(this.musicReverb);for(const[c,u,h]of[["sawtooth",0,1],["triangle",7,2]]){const d=r.createOscillator();d.type=c,d.frequency.value=qs(e)*h,d.detune.value=u,d.connect(a),d.start(t),d.stop(t+i+.05)}}musicTom(t,e,i){const n=this.ctx,r=n.createOscillator(),a=n.createGain();r.type="sine",r.frequency.setValueAtTime(e,t),r.frequency.exponentialRampToValueAtTime(e*.55,t+.16),a.gain.setValueAtTime(i,t),a.gain.exponentialRampToValueAtTime(.001,t+.2),r.connect(a),a.connect(this.musicBus),r.start(t),r.stop(t+.22)}}const T0={ArrowUp:"throttle",KeyW:"throttle",ArrowDown:"brake",KeyS:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",Space:"drift",ShiftLeft:"boost",ShiftRight:"boost",KeyC:"camera",KeyR:"restart",Escape:"pause",KeyP:"pause",KeyM:"mute",Enter:"confirm",KeyH:"help",Tab:"help"},w0={pause:["Escape","KeyP"],camera:["KeyC"],restart:["KeyR"],confirm:["Enter","NumpadEnter"],back:["Escape","Backspace"],help:["KeyH","Tab"],mute:["KeyM"],up:["ArrowUp","KeyW"],down:["ArrowDown","KeyS"],left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"]},Ys=-1;class E0{constructor(t){this.canvas=t,this.keys=new Set,this.buffer=new Map,this.state={steer:0,throttle:0,brake:0,handbrake:!1,boost:!1},this.rawSteer=0,this.touch={left:!1,right:!1,throttle:!1,brake:!1,drift:!1,boost:!1},this.mouse={down:!1,right:!1,x:.5,y:.5,active:!1},this.gamepadIndex=null,this.pad={steer:0,throttle:0,brake:0,drift:!1,boost:!1},this.boostLatch=0,this.driftLatch=0,this.lastDevice="keyboard",this.onFirstInput=null,this.interacted=!1,window.addEventListener("keydown",e=>this.onKeyDown(e),{passive:!1}),window.addEventListener("keyup",e=>this.onKeyUp(e)),window.addEventListener("blur",()=>{this.keys.clear(),this.state.handbrake=!1,this.state.boost=!1}),t.addEventListener("pointerdown",e=>{var i;this.notify(),e.button===0?(this.mouse.down=!0,this.mouse.active=!0,this.mouse.x=e.clientX/window.innerWidth*2-1,this.lastDevice="mouse",(i=t.setPointerCapture)==null||i.call(t,e.pointerId)):e.button===2&&(this.mouse.right=!0)}),t.addEventListener("pointerup",e=>{e.button===0&&(this.mouse.down=!1),e.button===2&&(this.mouse.right=!1)}),t.addEventListener("pointercancel",()=>{this.mouse.down=!1,this.mouse.right=!1}),t.addEventListener("pointermove",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=e.clientY/window.innerHeight*2-1,this.mouse.down&&(this.mouse.active=!0)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("gamepadconnected",e=>{this.gamepadIndex=e.gamepad.index,this.lastDevice="gamepad",this.notify()}),window.addEventListener("gamepaddisconnected",()=>{this.gamepadIndex=null}),window.addEventListener("pointerdown",()=>this.notify(),{once:!0}),window.addEventListener("keydown",()=>this.notify(),{once:!0})}notify(){var t;this.interacted=!0,(t=this.onFirstInput)==null||t.call(this)}onKeyDown(t){if(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))return;const e=T0[t.code];if(e){if((["throttle","brake","left","right","drift","boost","help"].includes(e)||t.code==="Space")&&t.preventDefault(),!this.keys.has(t.code)){e==="boost"&&(this.boostLatch=.18),e==="drift"&&(this.driftLatch=.18);for(const[i,n]of Object.entries(w0))n.includes(t.code)&&this.buffer.set(i,performance.now());t.code==="Space"&&this.buffer.set("confirm",performance.now())}this.keys.add(t.code),this.lastDevice="keyboard",this.mouse.active=!1}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&this.buffer.set(t.code.replace("Arrow","").toLowerCase(),performance.now())}onKeyUp(t){this.keys.delete(t.code)}key(...t){return t.some(e=>this.keys.has(e))}consume(t,e=220){const i=this.buffer.get(t);return i===void 0?!1:performance.now()-i>e?(this.buffer.delete(t),!1):(this.buffer.delete(t),!0)}clearBuffer(){this.buffer.clear()}setTouch(t,e){t in this.touch&&(this.touch[t]=e),e&&(this.lastDevice="touch")}resetTouch(){for(const t of Object.keys(this.touch))this.touch[t]=!1}pollGamepad(){var l,c,u,h,d,m,g,_,f,p;if(!navigator.getGamepads)return;const t=navigator.getGamepads();let e=this.gamepadIndex!==null?t[this.gamepadIndex]:null;if(!e){for(const v of t)if(v&&v.connected){e=v,this.gamepadIndex=v.index;break}}if(!e||!e.connected){this.pad.steer=0,this.pad.throttle=0,this.pad.brake=0,this.pad.drift=!1,this.pad.boost=!1;return}const i=e.axes[0]||0,n=.16;let r=Math.abs(i)<n?0:Math.sign(i)*(Math.abs(i)-n)/(1-n);r=Math.sign(r)*Math.pow(Math.abs(r),1.35),this.pad.steer=r*Ys,this.pad.throttle=((l=e.buttons[7])==null?void 0:l.value)||0,this.pad.brake=((c=e.buttons[6])==null?void 0:c.value)||0;const a=v=>{var M;return!!((M=e.buttons[v])!=null&&M.pressed)};this.pad.drift=a(0),this.pad.boost=a(1)||a(5),(this.pad.drift||this.pad.boost||Math.abs(r)>.2||this.pad.throttle>.1)&&(this.lastDevice="gamepad"),(u=e.buttons[0])!=null&&u.pressed&&this.buffer.set("confirm",performance.now()),(h=e.buttons[9])!=null&&h.pressed&&this.buffer.set("pause",performance.now()),(d=e.buttons[3])!=null&&d.pressed&&this.buffer.set("restart",performance.now()),(m=e.buttons[2])!=null&&m.pressed&&this.buffer.set("camera",performance.now());const o=e.axes[1]||0;o<-.6&&this.buffer.set("up",performance.now()),o>.6&&this.buffer.set("down",performance.now()),(g=e.buttons[12])!=null&&g.pressed&&this.buffer.set("up",performance.now()),(_=e.buttons[13])!=null&&_.pressed&&this.buffer.set("down",performance.now()),(f=e.buttons[14])!=null&&f.pressed&&this.buffer.set("left",performance.now()),(p=e.buttons[15])!=null&&p.pressed&&this.buffer.set("right",performance.now())}update(t){this.pollGamepad();const e=this.touch,i=this.key("ArrowLeft","KeyA"),n=this.key("ArrowRight","KeyD");let r=((n?1:0)-(i?1:0))*Ys;(i||n)&&(this.lastDevice="keyboard");const a=this.mouse.down&&this.mouse.active&&this.lastDevice==="mouse"?Tt(this.mouse.x*1.5,-1,1)*Ys:null,o=Math.abs(this.pad.steer)>.02?this.pad.steer:null;let l,c=8;e.left||e.right?(l=((e.right?1:0)-(e.left?1:0))*Ys,c=9):a!==null?(l=a,c=12,this.lastDevice="mouse"):o!==null?(l=o,c=13):(l=r,c=r===0?13:7.2),this.rawSteer=l,this.state.steer=_e(this.state.steer,l,c,t);const u=this.key("ArrowUp","KeyW"),h=this.key("ArrowDown","KeyS");let d=u?1:0,m=h?1:0;this.mouse.down&&(d=1),this.mouse.right&&(m=1),this.pad.throttle>.05&&(d=Math.max(d,this.pad.throttle)),this.pad.brake>.05&&(m=Math.max(m,this.pad.brake)),e.throttle&&(d=1),e.brake&&(m=1),this.state.throttle=_e(this.state.throttle,d,d>this.state.throttle?10:16,t),this.state.brake=_e(this.state.brake,m,m>this.state.brake?14:18,t),this.boostLatch=Math.max(0,this.boostLatch-t),this.driftLatch=Math.max(0,this.driftLatch-t),this.state.boost=this.key("ShiftLeft","ShiftRight")||this.pad.boost||e.boost||this.boostLatch>0,this.state.handbrake=this.key("Space")||this.pad.drift||e.drift||this.driftLatch>0;for(const[g,_]of this.buffer)performance.now()-_>900&&this.buffer.delete(g)}getDrivingState(){return{steer:this.state.steer,throttle:this.state.throttle,brake:this.state.brake,handbrake:this.state.handbrake,boost:this.state.boost}}}const bt=(s,t=document)=>t.querySelector(s),Zn=(s,t=document)=>Array.from(t.querySelectorAll(s));class A0{constructor(t,e,i,n={}){this.track=t,this.audio=e,this.input=i,this.handlers=n,this.current="title",this.previous="title",this.settings=null,this.last={},this.hintTimer=0,this.deltaTimer=0,this.countdownText="",this.hud=bt("#hud"),this.screens={title:bt("#screen-title"),how:bt("#screen-how"),settings:bt("#screen-settings"),pause:bt("#screen-pause"),results:bt("#screen-results")},this.el={lap:bt("#lap-value"),position:bt("#position-value"),time:bt("#time-value"),best:bt("#best-value"),delta:bt("#delta"),speed:bt("#speed-value"),boost:bt("#boost-fill"),boostPct:bt("#boost-pct"),style:bt("#style-value"),chain:bt("#chain"),chainMult:bt("#chain-mult"),chainTime:bt("#chain-time"),toasts:bt("#toasts"),hint:bt("#hint"),countdown:bt("#countdown"),recover:bt("#recover"),cp:bt("#cp-count"),sector:bt("#sector-value"),split:bt("#split-value"),rivalGap:bt("#rival-gap"),titleBest:bt("#title-best"),pauseSub:bt("#pause-sub"),pauseTime:bt("#pause-time"),pauseBest:bt("#pause-best"),fade:bt("#fade"),touch:bt("#touch")},this.bindStatic(),this.bindTouch(),this.setupMinimap(),this.updateTouchVisibility(!1)}bindStatic(){var r;Zn("[data-action]").forEach(a=>{a.addEventListener("click",o=>{var c;o.preventDefault(),o.stopPropagation();const l=a.dataset.action;(c=this.audio)==null||c.uiClick(),this.handleAction(l)})}),(r=bt("#btn-pause"))==null||r.addEventListener("click",a=>{var o,l,c;a.stopPropagation(),(o=this.audio)==null||o.uiClick(),(c=(l=this.handlers).onPause)==null||c.call(l)});const t=bt("#toggle-assist");t==null||t.addEventListener("click",()=>{var o,l,c;const a=t.getAttribute("aria-checked")!=="true";t.setAttribute("aria-checked",String(a)),(o=this.audio)==null||o.uiClick(),(c=(l=this.handlers).onAssist)==null||c.call(l,a)}),Zn("#seg-camera button").forEach(a=>{a.addEventListener("click",()=>{var l,c,u;const o=Number(a.dataset.cam);Zn("#seg-camera button").forEach(h=>h.classList.toggle("is-on",h===a)),(l=this.audio)==null||l.uiClick(),(u=(c=this.handlers).onCamera)==null||u.call(c,o,!0)})});const e=bt("#slider-music");e==null||e.addEventListener("input",()=>{var a,o;bt("#music-val").textContent=e.value,(o=(a=this.handlers).onMusic)==null||o.call(a,Number(e.value)/100)});const i=bt("#slider-sfx");i==null||i.addEventListener("input",()=>{var a,o;bt("#sfx-val").textContent=i.value,(o=(a=this.handlers).onSfx)==null||o.call(a,Number(i.value)/100)});const n=bt("#toggle-touch");n==null||n.addEventListener("click",()=>{var o,l,c;const a=n.getAttribute("aria-checked")!=="true";(o=this.audio)==null||o.uiClick(),(c=(l=this.handlers).onTouchToggle)==null||c.call(l,a)})}handleAction(t){var e,i,n,r,a,o,l,c,u,h,d,m,g;switch(t){case"start":(i=(e=this.handlers).onStart)==null||i.call(e);break;case"pause":(r=(n=this.handlers).onPause)==null||r.call(n);break;case"resume":(o=(a=this.handlers).onResume)==null||o.call(a);break;case"restart":(c=(l=this.handlers).onRestart)==null||c.call(l);break;case"quit":(h=(u=this.handlers).onQuit)==null||h.call(u);break;case"reset-records":(m=(d=this.handlers).onResetRecords)==null||m.call(d),this.toast("Records cleared",{label:"",value:"OK",big:!1});break;case"settings":this.openSettings();break;case"how":this.openHow();break;case"back":(g=this.audio)==null||g.uiBack(),this.back();break}}openSettings(){this.previous=this.current==="settings"?this.previous:this.current,this.showScreen("settings")}openHow(){this.previous=this.current,this.showScreen("how")}back(){const t=this.previous&&this.previous!=="settings"&&this.previous!=="how"?this.previous:"title";this.showScreen(t)}showScreen(t){this.current=t||null;for(const[e,i]of Object.entries(this.screens))i.classList.toggle("is-hidden",e!==t);document.body.dataset.screen=t||"race",this.hud.classList.toggle("is-off",!!t&&t!=="pause")}setHUD(t){this.hud.classList.toggle("is-hidden",!t)}setScreen(t){this.showScreen(t)}updateTouchVisibility(t){this.el.touch.classList.toggle("is-on",!!t)}setSettings(t){this.settings=t;const e=bt("#toggle-assist");e&&e.setAttribute("aria-checked",String(!!t.assist)),Zn("#seg-camera button").forEach(a=>a.classList.toggle("is-on",Number(a.dataset.cam)===(t.camera||0)));const i=bt("#slider-music");i&&(i.value=Math.round((t.music??.65)*100),bt("#music-val").textContent=i.value);const n=bt("#slider-sfx");n&&(n.value=Math.round((t.sfx??.8)*100),bt("#sfx-val").textContent=n.value);const r=bt("#toggle-touch");r&&r.setAttribute("aria-checked",String(!!t.touch))}setTitleBest(t){this.el.titleBest.textContent=t&&t.lap?`BEST LAP ${ti(t.lap)}`:"BEST LAP —"}updateHUD(t){const e=this.el,i=`${t.lap}<i>/${t.totalLaps}</i>`;this.last.lap!==i&&(e.lap.innerHTML=i,this.last.lap=i);const n=ti(t.time);this.last.time!==n&&(e.time.textContent=n,this.last.time=n);const r=`${t.position}<i>/${t.totalRacers}</i>`;this.last.position!==r&&(e.position.innerHTML=r,this.last.position=r);const a=t.bestLap?ti(t.bestLap):"—";this.last.best!==a&&(e.best.textContent=a,this.last.best=a);const o=Math.round(Math.max(0,t.speed*3.6));this.last.speed!==o&&(e.speed.textContent=String(o),this.last.speed=o);const l=Tt(t.boost,0,100),c=Math.round(l);this.last.boost!==c&&(e.boost.style.width=`${l}%`,e.boostPct.textContent=`${c}%`,e.boost.classList.toggle("is-low",l<18),this.last.boost=c);const u=Math.round(t.style);this.last.style!==u&&(e.style.textContent=u.toLocaleString("en-US"),this.last.style=u);const h=`CP ${t.checkpoint}/${t.totalCheckpoints}`;this.last.cp!==h&&(e.cp.textContent=h,this.last.cp=h);const d=`${String(t.sector).padStart(2,"0")}/${String(t.totalCheckpoints).padStart(2,"0")}`;this.last.sector!==d&&(e.sector.textContent=d,this.last.sector=d);const m=t.sectorDelta==null?"—":`${t.sectorDelta<=0?"":"+"}${t.sectorDelta.toFixed(2)}s`;this.last.split!==m&&(e.split.textContent=m,e.split.classList.toggle("is-ahead",t.sectorDelta!=null&&t.sectorDelta<=0),e.split.classList.toggle("is-behind",t.sectorDelta!=null&&t.sectorDelta>0),this.last.split=m);const g=t.rivalGap,_=g==null?"—":`${g>=0?"+":"-"}${Math.max(.1,Math.abs(g)/Math.max(t.speed,28)).toFixed(1)}s`;this.last.rivalGap!==_&&(e.rivalGap.textContent=_,e.rivalGap.classList.toggle("is-ahead",g>0),e.rivalGap.classList.toggle("is-behind",g<0),this.last.rivalGap=_);const f=!!t.chain.active&&t.chain.chain>.28;if(e.chain.classList.toggle("is-on",f),f){const p=`x${t.chain.mult}`;e.chainMult.textContent!==p&&(e.chainMult.textContent=p),e.chainTime.textContent=`${t.chain.chain.toFixed(1)}s`}}showDelta(t){const e=this.el.delta;e.textContent=Ll(t),e.classList.remove("fast","slow"),e.classList.add(t<=0?"fast":"slow"),e.classList.add("is-on"),clearTimeout(this.deltaTimer),this.deltaTimer=setTimeout(()=>e.classList.remove("is-on"),2800)}countdown(t,e=!1){const i=this.el.countdown;if(!t){i.classList.remove("is-on","pop","go","word"),i.textContent="",this.countdownText="";return}i.classList.remove("is-on","pop","go","word"),i.textContent=t,i.offsetWidth,i.classList.add("is-on","pop"),i.classList.toggle("go",e),i.classList.toggle("word",t.length>3),this.countdownText=t}recover(t){this.el.recover.classList.toggle("is-on",t)}toast(t,e={}){const{value:i="",cls:n="",big:r=!1,duration:a=1.9}=e;if(!t&&!i)return;const o=document.createElement("div");for(o.className=`toast ${n} ${r?"big":""}`.trim(),o.innerHTML=i?`<b>${i}</b>${t}`:t,this.el.toasts.appendChild(o);this.el.toasts.children.length>3;)this.el.toasts.removeChild(this.el.toasts.firstElementChild);setTimeout(()=>o.remove(),Math.max(900,a*1e3))}hint(t,e=4){const i=this.el.hint;if(!t){i.classList.remove("is-on");return}i.innerHTML=t,i.classList.add("is-on"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>i.classList.remove("is-on"),e*1e3)}setPauseInfo({lap:t,totalLaps:e,time:i,bestLap:n}){this.el.pauseSub.textContent=`Sunbreak Canyon · Lap ${t} of ${e}`,this.el.pauseTime.textContent=ti(i),this.el.pauseBest.textContent=n?ti(n):"—"}setResults(t){bt("#results-title").innerHTML=t.title||"Sunbreak <em>Flyer</em>",bt("#results-total").textContent=ti(t.total),bt("#results-record").classList.toggle("is-on",!!t.newBest);const e=bt("#results-lap-rows");e.innerHTML="";const i=t.best;t.laps.forEach((n,r)=>{if(!isFinite(n))return;const a=Math.abs(n-i)<.001,o=document.createElement("div");o.className=`results-lap${a?" is-best":""}`;const l=n-i;o.innerHTML=`
        <span>LAP ${r+1}</span>
        <strong>${ti(n)}</strong>
        <span class="lap-delta ${l<-.001?"fast":l>.001?"slow":""}">${a?"BEST":Ll(l)}</span>`,e.appendChild(o)}),bt("#results-best").textContent=ti(i),bt("#results-best-delta").textContent=t.bestLabel||"",bt("#stat-style").textContent=Math.round(t.style).toLocaleString("en-US"),bt("#stat-speed").innerHTML=`${Math.round(t.topSpeed)} <i>km/h</i>`,bt("#stat-chain").innerHTML=`${t.bestChain.toFixed(1)} <i>s</i>`,bt("#stat-air").innerHTML=`${t.airTime.toFixed(1)} <i>s</i>`,bt("#stat-near").textContent=String(t.nearMisses),bt("#stat-land").textContent=String(t.cleanLandings)}setupMinimap(){const t=bt("#minimap");if(!t)return;this.map=t,this.mapCtx=t.getContext("2d"),this.mapW=t.width,this.mapH=t.height;const e=this.track.mapPoints;let i=1/0,n=-1/0,r=1/0,a=-1/0;for(const _ of e)i=Math.min(i,_.x),n=Math.max(n,_.x),r=Math.min(r,_.z),a=Math.max(a,_.z);const o=34,l=Math.min((this.mapW-o*2)/Math.max(1,n-i),(this.mapH-o*2)/Math.max(1,a-r)),c=(i+n)/2,u=(r+a)/2;this.mapScale=l,this.mapCenter={x:c,z:u},this.toMap=(_,f)=>({x:this.mapW/2+(_-c)*l,y:this.mapH/2+(f-u)*l});const h=document.createElement("canvas");h.width=this.mapW,h.height=this.mapH;const d=h.getContext("2d");d.lineJoin="round",d.lineCap="round";const m=new Path2D;e.forEach((_,f)=>{const p=this.toMap(_.x,_.z);f===0?m.moveTo(p.x,p.y):m.lineTo(p.x,p.y)}),m.closePath(),d.strokeStyle="rgba(20, 9, 5, 0.55)",d.lineWidth=18,d.stroke(m),d.strokeStyle="rgba(255, 168, 84, 0.16)",d.lineWidth=13,d.stroke(m),d.strokeStyle="rgba(244, 227, 194, 0.34)",d.lineWidth=7,d.stroke(m),d.strokeStyle="rgba(255, 218, 158, 0.92)",d.lineWidth=3,d.stroke(m),this.gateMap=this.track.gateS.map(_=>{const f=this.track.samplePos(_,0);return this.toMap(f.x,f.z)});for(const _ of this.gateMap)d.beginPath(),d.arc(_.x,_.y,3.1,0,Math.PI*2),d.fillStyle="rgba(30, 16, 10, 0.9)",d.fill(),d.beginPath(),d.arc(_.x,_.y,1.7,0,Math.PI*2),d.fillStyle="rgba(255, 203, 110, 0.85)",d.fill();const g=this.toMap(this.track.samplePos(this.track.gateS[0],0).x,this.track.samplePos(this.track.gateS[0],0).z);d.save(),d.translate(g.x,g.y),d.rotate(-.5),d.fillStyle="#8cf5d9",d.fillRect(-5,-1.2,10,2.4),d.restore(),this.mapBase=h}drawMinimap(t,e=0){if(!this.mapCtx)return;const i=this.mapCtx;if(i.clearRect(0,0,this.mapW,this.mapH),i.drawImage(this.mapBase,0,0),this.gateMap&&this.gateMap[e]){const l=this.gateMap[e];i.beginPath(),i.arc(l.x,l.y,7,0,Math.PI*2),i.strokeStyle="rgba(255, 203, 110, 0.55)",i.lineWidth=1.5,i.stroke()}const n=this.toMap(t.pos.x,t.pos.z),r=Math.sin(t.yaw),a=Math.cos(t.yaw),o=Math.atan2(a,r)+Math.PI/2;i.save(),i.translate(n.x,n.y),i.rotate(o),i.shadowColor="rgba(255, 160, 70, 0.95)",i.shadowBlur=10,i.beginPath(),i.moveTo(0,-7.5),i.lineTo(5.2,5.2),i.lineTo(0,2.6),i.lineTo(-5.2,5.2),i.closePath(),i.fillStyle="#ffb356",i.fill(),i.shadowBlur=0,i.lineWidth=1,i.strokeStyle="rgba(34, 15, 8, 0.85)",i.stroke(),i.restore()}bindTouch(){const t=Zn("#touch [data-touch]"),e=new Map;for(const i of t){const n=i.dataset.touch,r=o=>{var l,c;o.preventDefault(),o.stopPropagation(),i.classList.add("is-held"),(l=i.setPointerCapture)==null||l.call(i,o.pointerId),e.set(o.pointerId,n),this.input.setTouch(n,!0),(c=this.audio)==null||c.uiClick()},a=o=>{o.preventDefault(),o.stopPropagation(),i.classList.remove("is-held"),this.input.setTouch(n,!1),e.delete(o.pointerId)};i.addEventListener("pointerdown",r),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a),i.addEventListener("lostpointercapture",a),i.addEventListener("contextmenu",o=>o.preventDefault())}}fade(t){this.el.fade.classList.toggle("is-on",!!t)}}const ss={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class sn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const R0=new so(-1,1,1,-1,0,1);class C0 extends re{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const P0=new C0;class gr{constructor(t){this._mesh=new xt(P0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,R0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Cc extends sn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=bi.clone(t.uniforms),this.material=new me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new gr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bl extends sn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class L0 extends sn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class D0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new wt);this._width=i.width,this._height=i.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cc(ss),this.copyPass.material.blending=Ue,this.clock=new i0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Bl!==void 0&&(a instanceof Bl?i=!0:a instanceof L0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class I0 extends sn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const U0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class N0 extends sn{constructor(){super();const t=U0;this.uniforms=bi.clone(t.uniforms),this.material=new $m({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new gr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Kt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class F0{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,n){return t[0]*e+t[1]*i+t[2]*n}dot4(t,e,i,n,r){return t[0]*e+t[1]*i+t[2]*n+t[3]*r}noise(t,e){let i,n,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,m=c-h,g=t-d,_=e-m;let f,p;g>_?(f=1,p=0):(f=0,p=1);const v=g-f+u,M=_-p+u,x=g-1+2*u,L=_-1+2*u,E=l&255,w=c&255,C=this.perm[E+this.perm[w]]%12,b=this.perm[E+f+this.perm[w+p]]%12,S=this.perm[E+1+this.perm[w+1]]%12;let R=.5-g*g-_*_;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[C],g,_));let U=.5-v*v-M*M;U<0?n=0:(U*=U,n=U*U*this.dot(this.grad3[b],v,M));let O=.5-x*x-L*L;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[S],x,L)),70*(i+n+r)}noise3d(t,e,i){let n,r,a,o;const c=(t+e+i)*.3333333333333333,u=Math.floor(t+c),h=Math.floor(e+c),d=Math.floor(i+c),m=1/6,g=(u+h+d)*m,_=u-g,f=h-g,p=d-g,v=t-_,M=e-f,x=i-p;let L,E,w,C,b,S;v>=M?M>=x?(L=1,E=0,w=0,C=1,b=1,S=0):v>=x?(L=1,E=0,w=0,C=1,b=0,S=1):(L=0,E=0,w=1,C=1,b=0,S=1):M<x?(L=0,E=0,w=1,C=0,b=1,S=1):v<x?(L=0,E=1,w=0,C=0,b=1,S=1):(L=0,E=1,w=0,C=1,b=1,S=0);const R=v-L+m,U=M-E+m,O=x-w+m,W=v-C+2*m,X=M-b+2*m,H=x-S+2*m,$=v-1+3*m,V=M-1+3*m,Q=x-1+3*m,rt=u&255,gt=h&255,Dt=d&255,Yt=this.perm[rt+this.perm[gt+this.perm[Dt]]]%12,q=this.perm[rt+L+this.perm[gt+E+this.perm[Dt+w]]]%12,tt=this.perm[rt+C+this.perm[gt+b+this.perm[Dt+S]]]%12,ft=this.perm[rt+1+this.perm[gt+1+this.perm[Dt+1]]]%12;let it=.6-v*v-M*M-x*x;it<0?n=0:(it*=it,n=it*it*this.dot3(this.grad3[Yt],v,M,x));let vt=.6-R*R-U*U-O*O;vt<0?r=0:(vt*=vt,r=vt*vt*this.dot3(this.grad3[q],R,U,O));let At=.6-W*W-X*X-H*H;At<0?a=0:(At*=At,a=At*At*this.dot3(this.grad3[tt],W,X,H));let at=.6-$*$-V*V-Q*Q;return at<0?o=0:(at*=at,o=at*at*this.dot3(this.grad3[ft],$,V,Q)),32*(n+r+a+o)}noise4d(t,e,i,n){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,m,g;const _=(t+e+i+n)*l,f=Math.floor(t+_),p=Math.floor(e+_),v=Math.floor(i+_),M=Math.floor(n+_),x=(f+p+v+M)*c,L=f-x,E=p-x,w=v-x,C=M-x,b=t-L,S=e-E,R=i-w,U=n-C,O=b>S?32:0,W=b>R?16:0,X=S>R?8:0,H=b>U?4:0,$=S>U?2:0,V=R>U?1:0,Q=O+W+X+H+$+V,rt=a[Q][0]>=3?1:0,gt=a[Q][1]>=3?1:0,Dt=a[Q][2]>=3?1:0,Yt=a[Q][3]>=3?1:0,q=a[Q][0]>=2?1:0,tt=a[Q][1]>=2?1:0,ft=a[Q][2]>=2?1:0,it=a[Q][3]>=2?1:0,vt=a[Q][0]>=1?1:0,At=a[Q][1]>=1?1:0,at=a[Q][2]>=1?1:0,Pt=a[Q][3]>=1?1:0,It=b-rt+c,Xt=S-gt+c,I=R-Dt+c,he=U-Yt+c,Vt=b-q+2*c,Ot=S-tt+2*c,Ct=R-ft+2*c,te=U-it+2*c,Rt=b-vt+3*c,A=S-At+3*c,y=R-at+3*c,B=U-Pt+3*c,K=b-1+4*c,j=S-1+4*c,Y=R-1+4*c,_t=U-1+4*c,st=f&255,lt=p&255,Wt=v&255,J=M&255,pt=o[st+o[lt+o[Wt+o[J]]]]%32,Lt=o[st+rt+o[lt+gt+o[Wt+Dt+o[J+Yt]]]]%32,Ut=o[st+q+o[lt+tt+o[Wt+ft+o[J+it]]]]%32,mt=o[st+vt+o[lt+At+o[Wt+at+o[J+Pt]]]]%32,qt=o[st+1+o[lt+1+o[Wt+1+o[J+1]]]]%32;let Nt=.6-b*b-S*S-R*R-U*U;Nt<0?u=0:(Nt*=Nt,u=Nt*Nt*this.dot4(r[pt],b,S,R,U));let Zt=.6-It*It-Xt*Xt-I*I-he*he;Zt<0?h=0:(Zt*=Zt,h=Zt*Zt*this.dot4(r[Lt],It,Xt,I,he));let D=.6-Vt*Vt-Ot*Ot-Ct*Ct-te*te;D<0?d=0:(D*=D,d=D*D*this.dot4(r[Ut],Vt,Ot,Ct,te));let nt=.6-Rt*Rt-A*A-y*y-B*B;nt<0?m=0:(nt*=nt,m=nt*nt*this.dot4(r[mt],Rt,A,y,B));let G=.6-K*K-j*j-Y*Y-_t*_t;return G<0?g=0:(G*=G,g=G*G*this.dot4(r[qt],K,j,Y,_t)),27*(u+h+d+m+g)}}const Ks={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new wt},cameraProjectionMatrix:{value:new se},cameraInverseProjectionMatrix:{value:new se},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},$s={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},Zs={uniforms:{tDiffuse:{value:null},resolution:{value:new wt}},vertexShader:`varying vec2 vUv;

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

		}`};class Si extends sn{constructor(t,e,i,n,r=32){super(),this.width=i!==void 0?i:512,this.height=n!==void 0?n:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new ao;a.format=nn,a.type=en,this.normalRenderTarget=new We(this.width,this.height,{minFilter:Be,magFilter:Be,type:ni,depthTexture:a}),this.ssaoRenderTarget=new We(this.width,this.height,{type:ni}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new me({defines:Object.assign({},Ks.defines),uniforms:bi.clone(Ks.uniforms),vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader,blending:Ue}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new jm,this.normalMaterial.blending=Ue,this.blurMaterial=new me({defines:Object.assign({},Zs.defines),uniforms:bi.clone(Zs.uniforms),vertexShader:Zs.vertexShader,fragmentShader:Zs.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new me({defines:Object.assign({},$s.defines),uniforms:bi.clone($s.uniforms),vertexShader:$s.vertexShader,fragmentShader:$s.fragmentShader,blending:Ue}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new me({uniforms:bi.clone(ss.uniforms),vertexShader:ss.vertexShader,fragmentShader:ss.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Kl,blendDst:ia,blendEquation:Mi,blendSrcAlpha:Yl,blendDstAlpha:ia,blendEquationAlpha:Mi}),this.fsQuad=new gr(null),this.originalClearColor=new dt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,i){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Si.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Ue,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case Si.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ue,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case Si.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:i);break;case Si.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ue,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case Si.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ql,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,i,n,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,i,n,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n=e.clearColor||n,r=e.clearAlpha||r,n!=null&&(t.setClearColor(n),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let i=0;i<t;i++){const n=new P;n.x=Math.random()*2-1,n.y=Math.random()*2-1,n.z=Math.random(),n.normalize();let r=i/t;r=Ah.lerp(.1,1,r*r),n.multiplyScalar(r),e.push(n)}}generateRandomKernelRotations(){const i=new F0,n=4*4,r=new Float32Array(n);for(let a=0;a<n;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=i.noise3d(o,l,c)}this.noiseTexture=new Hm(r,4,4,Za,ci),this.noiseTexture.wrapS=rs,this.noiseTexture.wrapT=rs,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){const n=e.get(i);i.visible=n}),e.clear()}}Si.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const O0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Nn extends sn{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new We(r,a,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new We(r,a,{type:ni});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new We(r,a,{type:ni});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=O0;this.highPassUniforms=bi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new wt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ss;this.copyUniforms=bi.clone(u.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Qi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new Ne,this.fsQuad=new gr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new wt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Nn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Nn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new wt(.5,.5)},direction:{value:new wt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Nn.BlurDirectionX=new wt(1,0);Nn.BlurDirectionY=new wt(0,1);const Yi=3,wn=6,js=8,zl="sunbreak.settings.v1",Qr="sunbreak.records.v1",jn=1/120,kl={steer:0,throttle:0,brake:0,handbrake:!1,boost:!1};function Vl(s,t){try{const e=localStorage.getItem(s);if(!e)return t;const i=JSON.parse(e);return i&&typeof i=="object"?i:t}catch{return t}}function ta(s,t){try{localStorage.setItem(s,JSON.stringify(t))}catch{}}class B0{constructor(t){this.canvas=t,this.time=0,this.state="title",this.renderer=new km({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xl,this.renderer.toneMapping=qa,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=Ce,this.scene=new Vm,this.camera=new Ye(62,1,.25,1800),this.setupPost(),this.track=new a0(this.scene),this.env=new c0(this.scene,this.track),this.effects=new x0(this.scene),this.model=new Ul(this.scene),this.rivals=this.createRivals(),this.audio=new b0,this.input=new E0(t),this.rig=new M0(this.camera,this.track,this.env),this.settings={assist:!0,music:.65,sfx:.8,camera:0,touch:this.isCoarsePointer(),seenTutorial:!1,...Vl(zl,{})},this.settings.camera=Tt(Number(this.settings.camera)||0,0,2),typeof this.settings.touch!="boolean"&&(this.settings.touch=this.isCoarsePointer()),this.records={bestLap:null,bestSplits:[],bestTotal:null,...Vl(Qr,{})},this.recordsAtStart={...this.records},this.laps=[],this.lap=1,this.checkpoint=0,this.lapActive=!1,this.raceStarted=!1,this.raceTime=0,this.lapTime=0,this.accum=0,this.countdownTimer=0,this.countdownShown=0,this.style=0,this.splits=[],this.stats={topSpeed:0,nearMisses:0,cleanLandings:0,bestChain:0,airTime:0},this.finishTimer=0,this.goTimer=0,this.hintClock=0,this.wasBoosting=!1,this.recoverTimer=0,this.muted=!1,this.lastRacePosition=js,this.pausedFrom="racing",this.tutorialHints=!this.settings.seenTutorial,this.hintStage=0,this.finishedResults=null,this.car=new Nl(this.track,this.model,this.buildCarEvents()),this.ui=new A0(this.track,this.audio,this.input,{onStart:()=>this.startRace(),onPause:()=>this.togglePause(),onResume:()=>this.resume(),onRestart:()=>this.startRace(),onQuit:()=>this.enterTitle(),onAssist:e=>{this.settings.assist=e,this.saveSettings()},onCamera:(e,i)=>{this.settings.camera=e,this.rig.setMode(e),this.saveSettings(),i||this.ui.toast(`CAMERA · ${this.rig.mode.toUpperCase()}`)},onMusic:e=>{this.settings.music=e,this.audio.setVolumes(this.settings.music,this.settings.sfx),this.saveSettings()},onSfx:e=>{this.settings.sfx=e,this.audio.setVolumes(this.settings.music,this.settings.sfx),this.saveSettings()},onTouchToggle:e=>{this.settings.touch=e,this.saveSettings(),this.syncTouchControls()},onResetRecords:()=>{this.records={bestLap:null,bestSplits:[],bestTotal:null},ta(Qr,this.records),this.ui.setTitleBest(this.records)}}),this.ui.setSettings(this.settings),this.ui.setTitleBest(this.records),this.input.onFirstInput=()=>{this.audio.init(),this.audio.setVolumes(this.settings.music,this.settings.sfx),this.audio.resume()},this.resize(),this.enterTitle()}createRivals(){return[{body:"#d9433f",bodyDark:"#8e242b",accent:"#ffb13b",emissive:"#ff4b1f",trim:"#ffe0a2"},{body:"#4f6ee8",bodyDark:"#263c9a",accent:"#ff5d8f",emissive:"#ff244d",trim:"#b8c9ff"},{body:"#e4a634",bodyDark:"#9f5d1e",accent:"#f6f0d0",emissive:"#ffc84a",trim:"#fff0a6"},{body:"#d967b8",bodyDark:"#7a2f76",accent:"#65e4ff",emissive:"#28c9ff",trim:"#d6fbff"},{body:"#f1eee4",bodyDark:"#6c6b70",accent:"#ff5a36",emissive:"#ff2a19",trim:"#ffffff"},{body:"#805bd8",bodyDark:"#39266f",accent:"#9bff72",emissive:"#59dc49",trim:"#e7ddff"},{body:"#45a7a2",bodyDark:"#1d5c66",accent:"#f5d15b",emissive:"#ffae28",trim:"#d9fff2"}].map((e,i)=>{const n=new Ul(this.scene,e),r=new Nl(this.track,n,{});return n.group.visible=!1,n.group.scale.setScalar(.92),{model:n,car:r,index:i,distance:0,speed:66,lat:i%2?3.8:-3.8,targetLat:i%2?3.8:-3.8,shortcutLap:-1}})}resetRivals(t){const e=[-58,34,86,-112,142,-166,205];this.playerStartS=t,this.rivals.forEach((i,n)=>{i.distance=e[n];const r=((t+i.distance)%this.track.length+this.track.length)%this.track.length;i.car.reset(r,i.lat),i.car.assist=.35,i.model.group.visible=!0,i.car.model.group.position.copy(i.car.pos),i.car.model.group.rotation.y=i.car.yaw})}updateRivals(t){if(this.state!=="racing")return;const e=this.playerRaceDistance(),i=this.track.ramps.find(n=>n.shortCut);this.rivals.forEach((n,r)=>{const a=n.car;if(a.needsRecovery){const x=((a.s-20)%this.track.length+this.track.length)%this.track.length;a.reset(x,r%2?3.8:-3.8)}const l=((a.s%this.track.length+this.track.length)%this.track.length-i.s+this.track.length*1.5)%this.track.length-this.track.length*.5,c=Math.floor(n.distance/this.track.length);n.targetLat=Math.sin(this.time*.35+r*1.9)*3.2,Math.abs(l)<34&&n.shortcutLap!==c&&(n.targetLat=i.lat,Math.abs(l)<5&&Math.abs(n.lat-i.lat)<2.8&&(n.distance+=16,n.shortcutLap=c)),Math.abs(n.distance-e)<24&&(n.targetLat=Tt(n.targetLat+(r%2?-5:5),-8.5,8.5)),n.lat+=(n.targetLat-n.lat)*Tt(t*4.5,0,1);const u=a.s+22,h=this.track.samplePos(u,n.lat),d=h.x-a.pos.x,m=h.z-a.pos.z,g=Math.atan2(d,m),_=Math.atan2(Math.sin(g-a.yaw),Math.cos(g-a.yaw)),f=Tt(_*1.55,-1,1),p=Math.abs(_),v=p>.82&&a.speed>24,M=p<.35&&a.boostMeter>28&&Math.abs(n.distance-e)>18;a.update(t,{steer:f,throttle:p>1.25?.72:1,brake:p>1.35?.25:0,handbrake:v,boost:M},.35),n.distance+=Math.max(0,a.forwardSpeed)*t,n.speed=a.speed})}resolveVehicleCollisions(){const t=[{car:this.car,model:this.model,player:!0},...this.rivals.map(r=>({car:r.car,model:r.model,player:!1}))],i=1.62*2,n=.18;for(let r=0;r<t.length-1;r++){const a=t[r].car;for(let o=r+1;o<t.length;o++){const l=t[o].car,c=Math.abs(a.pos.y-l.pos.y);if(c>2.4||!a.grounded&&!l.grounded&&c>1.2)continue;let u=l.pos.x-a.pos.x,h=l.pos.z-a.pos.z,d=Math.hypot(u,h);if(d<.001){const v=a.yaw||0;u=Math.sin(v),h=Math.cos(v),d=.001}else u/=d,h/=d;if(d>=i)continue;const g=(i-d)*.52;a.pos.x-=u*g,a.pos.z-=h*g,l.pos.x+=u*g,l.pos.z+=h*g;const _=l.vel.x-a.vel.x,f=l.vel.z-a.vel.z,p=_*u+f*h;if(p<0){const v=-1.42*p*.5;a.vel.x-=u*v,a.vel.z-=h*v,l.vel.x+=u*v,l.vel.z+=h*v;const M=-h,x=u,E=(_*M+f*x)*n*.5;a.vel.x+=M*E,a.vel.z+=x*E,l.vel.x-=M*E,l.vel.z-=x*E}for(const v of[t[r],t[o]]){const M=v.car;M.impactTimer=Math.max(M.impactTimer,.16),M.model.addSuspensionKick(-.45);const x=new P(Math.sin(M.yaw),0,Math.cos(M.yaw));M.forwardSpeed=M.vel.x*x.x+M.vel.z*x.z,M.speed=Math.hypot(M.vel.x,M.vel.z),M.model.group.position.copy(M.pos)}}}}playerRaceDistance(){const t=((this.car.s-this.playerStartS)%this.track.length+this.track.length)%this.track.length;return Math.max(0,(this.lap-1)*this.track.length+t)}racerPosition(){const t=this.playerRaceDistance();return 1+this.rivals.filter(e=>e.distance>t).length}checkShortcutLine(){const t=this.track.ramps.find(i=>i.shortCut);if(!t||this.shortcutClaimedLap===this.lap)return;const e=(this.car.s-t.s+this.track.length*1.5)%this.track.length-this.track.length*.5;Math.abs(e)<t.length*.52&&(this.car.route==="branch"||Math.abs(this.car.lat-t.lat)<t.width*.46)&&this.car.speed>24&&(this.shortcutClaimedLap=this.lap,this.car.addBoost(16),this.style+=240,this.audio.boostWhoosh(),this.audio.branchCue(),this.effects.addRing(this.car.pos,"#ffd166",12),this.ui.toast("CANYON CUT",{value:"+240",cls:"good"}))}titlePose(){const t=((this.track.findS(96,-29)-22)%this.track.length+this.track.length)%this.track.length,e=this.track.samplePos(t,0),{a:i}=this.track.getSample(t);return{s:t,pos:e,yaw:Math.atan2(i.tan.x,i.tan.z)}}setupPost(){this.composer=new D0(this.renderer),this.composer.addPass(new I0(this.scene,this.camera)),this.ssaoPass=new Si(this.scene,this.camera,1,1),this.ssaoPass.kernelRadius=5.5,this.ssaoPass.minDistance=.0015,this.ssaoPass.maxDistance=.12,this.ssaoPass.output=Si.OUTPUT.Default,this.composer.addPass(this.ssaoPass),this.bloomPass=new Nn(new wt(1,1),.34,.48,.78),this.composer.addPass(this.bloomPass);const t={uniforms:{tDiffuse:{value:null}},vertexShader:`
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
      `};this.gradePass=new Cc(t),this.composer.addPass(this.gradePass),this.composer.addPass(new N0)}isCoarsePointer(){return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||(navigator.maxTouchPoints||0)>0}saveSettings(){ta(zl,this.settings)}saveRecords(){ta(Qr,this.records)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.composer&&this.composer.setSize(t,e),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}syncTouchControls(){const t=["countdown","racing","paused"].includes(this.state);this.ui.updateTouchVisibility(this.settings.touch&&t)}enterTitle(){this.state="title",this.rivals.forEach(e=>{e.model.group.visible=!1}),this.audio.setPaused(!1),this.ui.setHUD(!1),this.audio.setPhase("menu"),this.ui.showScreen("title"),this.ui.setTitleBest(this.records),this.ui.updateTouchVisibility(!1),this.ui.countdown(""),this.ui.recover(!1),this.ui.hint(""),this.ui.setSettings(this.settings),this.input.resetTouch(),this.input.clearBuffer(),this.audio.setPaused(!1),this.audio.setIntensity(0),this.audio.updateEngine({active:!1,speed:0}),this.track.setStartLights(0),this.rig.setMode(this.settings.camera),this.rig.reset();const t=this.titlePose();this.car.reset(t.s,0),this.car.yaw=t.yaw,this.car.model.group.position.copy(this.car.pos),this.car.model.group.rotation.y=t.yaw,this.effects.reset(),this.rig.introAngle=0,this.rig.snapped=!1,this.finishTimer=0,this.recoverTimer=0}startRace(){this.audio.init(),this.audio.resume(),this.audio.setPaused(!1),this.audio.setIntensity(1),this.audio.setPhase("race"),this.audio.setVolumes(this.settings.music,this.settings.sfx),this.ui.fade(!0),setTimeout(()=>this.ui.fade(!1),140),this.ui.showScreen(null),this.ui.setHUD(!0),this.ui.countdown(""),this.ui.recover(!1),this.ui.hint(""),this.ui.setSettings(this.settings),this.syncTouchControls();const t=this.track.startPose();this.resetRivals(t.s),this.car.reset(t.s,0),this.car.yaw=t.yaw,this.car.model.group.position.copy(this.car.pos),this.car.model.group.rotation.y=t.yaw,this.car.controlLock=0,this.effects.reset(),this.laps=[],this.lap=1,this.checkpoint=0,this.lapActive=!1,this.raceStarted=!1,this.raceTime=0,this.lapTime=0,this.accum=0,this.style=0,this.splits=[],this.stats={topSpeed:0,nearMisses:0,cleanLandings:0,bestChain:0,airTime:0},this.recordsAtStart={bestLap:this.records.bestLap,bestSplits:[...this.records.bestSplits||[]],bestTotal:this.records.bestTotal},this.countdownTimer=3,this.countdownShown=3,this.finishTimer=0,this.recoverTimer=0,this.finishedResults=null,this.hintStage=0,this.shortcutClaimedLap=-1,this.lastRacePosition=js,this.hintClock=0,this.goTimer=0,this.wasBoosting=!1,this.tutorialHints=!this.settings.seenTutorial,this.pausedFrom="racing",this.state="countdown",this.syncTouchControls(),this.ui.countdown("3"),this.ui.hint(""),this.audio.countdown(!1),this.track.setStartLights(1),this.rig.setMode(this.settings.camera),this.rig.reset(),this.rig.snapTo(this.car,8.6),this.input.resetTouch(),this.input.clearBuffer()}togglePause(){if(this.state==="paused"){this.resume();return}this.state!=="racing"&&this.state!=="countdown"||(this.pausedFrom=this.state,this.state="paused",this.audio.setPaused(!0),this.input.resetTouch(),this.input.clearBuffer(),this.ui.setPauseInfo({lap:this.lap,totalLaps:Yi,time:this.raceTime,bestLap:this.currentBestLap()}),this.ui.showScreen("pause"),this.ui.setHUD(!0),this.syncTouchControls())}resume(){var t,e;this.state==="paused"&&(this.state=this.pausedFrom,this.audio.setPaused(!1),this.ui.showScreen(null),this.ui.setHUD(!0),this.input.resetTouch(),this.input.clearBuffer(),this.syncTouchControls(),(e=(t=this.ui).setPauseInfo)==null||e.call(t,{lap:this.lap,totalLaps:Yi,time:this.raceTime,bestLap:this.currentBestLap()}))}currentBestLap(){let t=this.records.bestLap&&isFinite(this.records.bestLap)?this.records.bestLap:1/0;for(const e of this.laps)e<t&&(t=e);return isFinite(t)?t:null}buildCarEvents(){return{onLand:(t,e,i,n)=>{const r=Tt(t/22,.25,1.2);this.effects.landingDust(e,t),this.effects.addRing(e,"#ffd296",10+r*6),this.audio.landing(t),this.rig.addShake(.12+r*.4),this.stats.airTime+=n},onCrash:(t,e)=>{const i=new P(Math.sin(this.car.yaw),0,Math.cos(this.car.yaw));this.effects.crashBurst(e,i),this.audio.impact(t),this.rig.addShake(.45+t*.5),this.effects.endSkid()},onWallSpark:(t,e,i)=>{this.effects.wallSparks(t,e,i?i.tan:null),this.audio.wallScrape()},onWallRide:()=>{this.style+=20/60},onWallHit:(t,e)=>{e>30&&this.rig.addShake(.18)},onPropHit:()=>{this.audio.impact(.5),this.rig.addShake(.35),this.ui.toast("ROCK CONTACT",{cls:""})},onNearMiss:t=>{this.style+=150,this.stats.nearMisses+=1,this.audio.nearMiss(),this.effects.sparks.spawn({x:t.x,y:t.y+1,z:t.z,vx:0,vy:1,vz:0,life:.1,size0:.1,size1:.1,r:1,g:1,b:1,alpha:0}),this.ui.toast("NEAR MISS",{value:"+150",cls:"good"})},onDriftStart:()=>{},onDriftEnd:(t,e)=>{if(t>.55){const i=Math.round(t*e*26);this.style+=i,this.ui.toast("CHAIN BANKED",{value:`+${i}`,cls:"big"}),this.effects.endSkid()}},onChainStep:t=>{this.audio.driftChain(t),t>1&&this.ui.toast(`CHAIN x${t}`,{cls:"big"})},onDriftTick:(t,e)=>{this.stats.bestChain=Math.max(this.stats.bestChain,t)},onCleanLanding:t=>{this.style+=100,this.stats.cleanLandings+=1,this.ui.toast("CLEAN LANDING",{value:"+100",cls:"good"})},onAirtime:t=>{this.style+=80,this.ui.toast("BIG AIR",{value:"+80",cls:"good"})},onOffRoad:()=>{}}}update(t){const e=Tt(t,0,.05);switch(this.time+=e,this.input.update(e),this.handleGlobalInput(),this.state){case"title":this.updateTitle(e);break;case"countdown":this.updateCountdown(e);break;case"racing":this.updateRacing(e);break;case"paused":this.updatePaused(e);break;case"finished":this.updateFinished(e);break}this.env.update(e,this.camera.position,this.time),this.env.updateSun(this.car.pos),this.effects.update(e),this.effects.updateRings(e),this.updateRecoverBanner(e)}handleGlobalInput(){this.input.consume("mute")&&(this.muted=!this.muted,this.audio.ready&&this.audio.master.gain.setTargetAtTime(this.muted?0:.9,this.audio.ctx.currentTime,.05),this.ui.toast(this.muted?"SOUND OFF":"SOUND ON",{cls:""}));const t=this.ui.current;if(t==="settings"||t==="how"){(this.input.consume("back")||this.input.consume("pause"))&&(this.input.clearBuffer(),this.audio.uiBack(),this.ui.back());return}if(this.input.consume("pause")){this.state==="paused"?this.resume():(this.state==="racing"||this.state==="countdown")&&this.togglePause();return}if(this.state==="title"&&this.input.consume("confirm")){this.startRace();return}if(this.state==="finished"&&this.input.consume("confirm")&&this.finishTimer<=0){this.startRace();return}if(this.state==="racing"||this.state==="countdown"){if(this.input.consume("camera")){const e=this.rig.cycle();this.settings.camera=this.rig.modeIndex,this.saveSettings(),this.ui.toast(`CAMERA · ${e.toUpperCase()}`)}this.input.consume("restart")&&this.startRace()}else this.state==="paused"&&this.input.consume("restart")&&this.startRace()}updateTitle(t){this.car.update(t,kl,this.assistValue()),this.rig.update(t,this.car,{intro:!0}),this.audio.updateEngine({active:!1,speed:0}),this.ui.drawMinimap(this.car,0)}updatePaused(t){this.rig.update(t,this.car,{paused:!0}),this.audio.updateEngine({active:!1,speed:0})}updateCountdown(t){this.audio.updateEngine({active:!0,speed:0,throttle:this.input.state.throttle,grounded:!0,slipFactor:0}),this.car.update(t,kl,this.assistValue()),this.rig.update(t,this.car,{}),this.countdownTimer-=t;const e=Math.ceil(this.countdownTimer);e!==this.countdownShown&&(e>=1&&e<=3?(this.ui.countdown(String(e)),this.audio.countdown(!1),this.track.setStartLights(e===3?1:e===2?3:5)):e<=0&&(this.ui.countdown("GO!",!0),this.audio.countdown(!0),this.track.setStartLights(5,!0),this.state="racing",this.raceStarted=!0,this.goTimer=.75),this.countdownShown=e),this.countdownTimer<-.7&&this.ui.countdown(""),this.ui.updateHUD(this.hudState()),this.ui.drawMinimap(this.car,0)}updateRacing(t){const e=this.input.getDrivingState(),i=this.assistValue();this.hintClock+=t,this.goTimer>0&&(this.goTimer-=t,this.goTimer<=0&&(this.ui.countdown(""),this.track.setStartLights(0))),this.accum+=t;let n=0;for(;this.accum>=jn&&n<8&&this.state==="racing";){this.lapActive&&(this.raceTime+=jn,this.lapTime+=jn);const o=this.car.s;this.car.update(jn,e,i),this.checkShortcutLine(),this.checkGates(o,this.car.s),this.car.needsRecovery&&this.handleRecovery(),this.accum-=jn,n+=1}n===8&&(this.accum=0),this.rig.update(t,this.car,{}),this.updateRivals(t),this.resolveVehicleCollisions();const r=this.racerPosition();if(r!==this.lastRacePosition){const o=r<this.lastRacePosition;this.audio.rivalPass(),this.ui.toast(o?"OVERTAKE":"POSITION LOST",{value:`${r}/${js}`,cls:o?"good":""}),this.lastRacePosition=r}this.emitEffects(t,e);const a=this.car.speed;this.stats.topSpeed=Math.max(this.stats.topSpeed,a*3.6),this.stats.bestChain=Math.max(this.stats.bestChain,this.car.driftChain),this.audio.updateEngine({active:!0,speed:a,throttle:e.throttle,boosting:this.car.boosting,slip:this.car.slip,slipFactor:Math.abs(this.car.slip),grounded:this.car.grounded,offRoad:this.car.offRoad}),this.ui.updateHUD(this.hudState()),this.ui.drawMinimap(this.car,this.checkpoint>=wn?0:this.checkpoint+1),this.updateHints()}updateFinished(t){this.rig.update(t,this.car,{finished:!0}),this.audio.updateEngine({active:!1,speed:0}),this.finishTimer>0&&(this.finishTimer-=t,this.finishTimer<=0&&(this.ui.countdown(""),this.ui.setResults(this.finishedResults),this.ui.showScreen("results"),this.ui.setHUD(!1),this.ui.updateTouchVisibility(!1),this.audio.setIntensity(0)))}assistValue(){return this.settings.assist?.55:0}hudState(){var n;const t=this.playerRaceDistance(),e=this.rivals.map(r=>r.distance-t).filter(r=>Math.abs(r)>.5).sort((r,a)=>Math.abs(r)-Math.abs(a))[0],i=(n=this.records.bestSplits)==null?void 0:n[Math.max(0,this.checkpoint-1)];return{lap:Math.min(this.lap,Yi),totalLaps:Yi,time:this.raceTime,bestLap:this.currentBestLap(),speed:this.car.speed,boost:this.car.boostMeter,style:this.style+this.car.driftScore*.55,chain:{active:this.car.drifting,chain:this.car.driftChain,mult:this.car.chainMultiplier},checkpoint:this.checkpoint,totalCheckpoints:wn,position:this.racerPosition(),totalRacers:js,sector:Math.min(this.checkpoint+1,wn),sectorDelta:isFinite(i)?this.lapTime-i:null,rivalGap:e??null}}checkGates(t,e){const i=this.track.length;let n=e-t;if(n>i/2&&(n-=i),n<-i/2&&(n+=i),n<=0||Math.abs(n)>90)return;const r=this.track.gateS,a=[];for(let o=0;o<r.length;o++){let l=((r[o]-t)%i+i)%i;l<=n+.001&&a.push({i:o,rel:l})}a.sort((o,l)=>o.rel-l.rel);for(const o of a)this.onGate(o.i)}onGate(t){var e;if(this.raceStarted){if(t===0){if(!this.lapActive){this.lapActive=!0,this.lapTime=0,this.raceTime=0,this.checkpoint=0,this.splits=[],this.laps=[],this.ui.toast("LIGHTS OUT · GO",{cls:"big"});return}this.checkpoint>=wn&&this.completeLap();return}if(this.lapActive&&t===this.checkpoint+1&&t<=wn){this.checkpoint=t,this.audio.checkpoint(),this.splits[t-1]=this.lapTime;const i=(e=this.records.bestSplits)==null?void 0:e[t-1];isFinite(i)&&this.ui.showDelta(this.lapTime-i),this.ui.toast(`CHECKPOINT ${t}/${wn}`,{value:ti(this.lapTime)})}}}completeLap(){const t=this.lapTime;this.laps.push(t),this.lapActive=!1;const e=this.records.bestLap,i=this.splits.slice();if((!e||t<e)&&(this.records.bestLap=t,this.records.bestSplits=i),this.lap>=Yi){this.finishRace();return}this.ui.toast(`LAP ${this.lap} COMPLETE`,{value:ti(t),cls:"big"}),this.audio.lap(),this.lap+=1,this.shortcutClaimedLap=-1,this.checkpoint=0,this.lapTime=0,this.splits=[],this.lapActive=!0,e&&this.ui.showDelta(t-e),this.lap===Yi&&(this.audio.setIntensity(2),this.audio.setPhase("final"),this.ui.toast("FINAL LAP · SEND IT",{cls:"big"})),this.saveRecords()}finishRace(){this.state="finished",this.lap=Yi,this.records.bestTotal=!this.records.bestTotal||this.raceTime<this.records.bestTotal?this.raceTime:this.records.bestTotal,this.saveRecords();const t=Math.min(...this.laps),e=this.recordsAtStart.bestLap?t<this.recordsAtStart.bestLap-.001:!0,i=this.recordsAtStart.bestTotal?this.raceTime<this.recordsAtStart.bestTotal-.001:!0,n=e?"Canyon <em>Legend</em>":i?"New <em>Benchmark</em>":"Sunbreak <em>Flyer</em>";this.finishedResults={laps:this.laps.slice(),best:t,total:this.raceTime,style:this.style+this.car.driftScore*.55,topSpeed:this.stats.topSpeed,bestChain:this.stats.bestChain,airTime:this.stats.airTime,nearMisses:this.stats.nearMisses,cleanLandings:this.stats.cleanLandings,newBest:e||i,newBestLap:e,title:n,bestLabel:e?"NEW PERSONAL BEST":this.recordsAtStart.bestLap?`RECORD ${ti(this.recordsAtStart.bestLap)}`:""},this.finishTimer=2.1,this.audio.setPhase("results"),this.ui.countdown("FINISH",!0),this.audio.finish(),this.effects.addRing(this.car.pos,"#8cf5d9",20),this.effects.crashBurst(this.car.pos,new P(Math.sin(this.car.yaw),0,Math.cos(this.car.yaw))),this.ui.hint(""),this.ui.recover(!1),this.input.resetTouch(),this.ui.updateTouchVisibility(!1)}handleRecovery(){const t=this.car.recoveryReason;let e=this.car.s;(t==="fall"||this.track.isGap(e))&&(e=this.track.gap.start-20);for(let n=0;n<50&&this.track.isGap(e);n++)e-=4;const i=this.track.length;e=(e%i+i)%i,this.car.reset(e,0),this.car.boostMeter=Math.max(this.car.boostMeter,35),this.car.controlLock=.55,this.car.needsRecovery=!1,this.car.model.group.position.copy(this.car.pos),this.car.model.group.rotation.y=this.car.yaw,this.effects.endSkid(),this.effects.landingDust(this.car.pos,8),this.rig.snapTo(this.car,8.4),this.audio.landing(6),this.recoverTimer=1.5,this.ui.recover(!0),this.ui.toast("BACK ON THE LINE",{value:"GO",cls:""})}updateRecoverBanner(t){this.recoverTimer>0&&(this.recoverTimer-=t,this.recoverTimer<=0&&this.ui.recover(!1))}emitEffects(t,e){const i=this.car,n=new P(Math.sin(i.yaw),0,Math.cos(i.yaw));if(new P(n.z,0,-n.x),this.model.group.updateMatrixWorld(!0),i.grounded&&(i.drifting||e.handbrake)&&i.speed>7){const a=Tt(Math.abs(i.slip)*1.6,.25,1);for(const o of[2,3])this.model.wheelWorld(o,this._wheelPos||(this._wheelPos=new P)),this.effects.skidTrail(o,this._wheelPos,n,a),this.effects.driftSmoke(this._wheelPos,o===2?-1:1,i.vel,a)}else this.effects.endSkid();if(i.offRoad&&i.grounded&&i.speed>3){const a=new P().copy(i.pos).addScaledVector(n,-1.4);Math.random()<.75&&this.effects.tireDust(a,i.vel,1)}i.boosting&&(this.effects.boostTrail(i.pos,n,1),Math.random()<.4&&this.rig.addShake(.035),this.wasBoosting||this.audio.boostWhoosh()),this.wasBoosting=i.boosting,!i.grounded&&i.airTime>.15&&Math.random()<.4&&this.effects.jumpDust(new P().copy(i.pos).addScaledVector(n,-1.2))}updateHints(){if(!this.tutorialHints)return;const t=this.settings.touch;this.hintStage===0&&this.hintClock>.8?(this.hintStage=1,this.ui.hint(t?"Hold <b>GAS</b> to launch · <b>DRIFT</b> through the first corner":"Hold <b>W</b> / <b>↑</b> to launch · <b>SPACE</b> to drift",5.5)):this.hintStage===1&&this.hintClock>7?(this.hintStage=2,this.ui.hint(t?"Slides fill your <b>BOOST</b> meter · tap <b>BOOST</b> on the straights":"Drifting fills <b>BOOST</b> · hit <b>SHIFT</b> on the straights",5.5)):this.hintStage===2&&this.hintClock>15?(this.hintStage=3,this.ui.hint(t?"Steer with the arrows · <b>DRIFT</b> + <b>BOOST</b> wins races":"<b>C</b> camera · <b>R</b> restart · <b>ESC</b> pause",4.5)):this.hintStage===3&&this.hintClock>21&&(this.hintStage=4,this.ui.hint(""),this.tutorialHints=!1,this.settings.seenTutorial=!0,this.saveSettings())}render(){this.composer.render()}onVisibilityHidden(){(this.state==="racing"||this.state==="countdown")&&this.togglePause()}}const Pc=document.getElementById("game"),cs=new B0(Pc);window.__sunbreak=cs;let Gl=performance.now(),ea=0,Hl=0;function Lc(s){const t=(s-Gl)/1e3;Gl=s;const e=Math.min(.05,Math.max(0,t));cs.update(e),cs.render(),ea+=1,t>.05&&(Hl+=1),ea===120&&(window.__sunbreakFps=Math.round(1e3/((s-z0)/ea)),window.__sunbreakSlowFrames=Hl),requestAnimationFrame(Lc)}let z0=performance.now();requestAnimationFrame(Lc);window.addEventListener("resize",()=>{cs.resize()});document.addEventListener("visibilitychange",()=>{document.hidden&&cs.onVisibilityHidden()});Pc.addEventListener("webglcontextlost",s=>{s.preventDefault(),console.warn("WebGL context lost")});
