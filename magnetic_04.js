(()=>{"use strict";var n,e={876:(n,e,r)=>{var t=r(302),o=r.n(t),i=r(35);o()(i);var a=Array(2500).fill({x:window.innerWidth/2,y:window.innerHeight/2});new i((function(n){n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight)},n.draw=function(){function e(e,r,t){var o=r.x-e.x,i=r.y-e.y,a=n.sqrt(o*o+i*i);return{x:e.x+t*(o/a),y:e.y+t*(i/a)}}function r(n,e){return 50*n+e}function t(e,r){var t=r.x-e.x,o=r.y-e.y;return n.sqrt(t*t+o*o)}n.background(0),n.stroke(255),n.noFill();for(var o=window.innerWidth/2-375,i=window.innerHeight/2-375,u=0;u<50;u++)for(var s=0;s<50;s++){var c={x:o+15*s,y:i+15*u};n.mouseIsPressed&&t(c,{x:n.mouseX,y:n.mouseY})<=100&&(a[r(u,s)]={x:n.mouseX,y:n.mouseY});var w=a[r(u,s)],d=Math.min(1+Math.pow(t(c,w),1.5)/Math.pow(100,1.5)*30,30),f=e(c,w,d/2),v=e(c,w,-1*d/2);n.stroke(255),n.line(v.x,v.y,f.x,f.y)}},n.keyPressed=function(){!function(n){"s"===n.key?function(n){var e=(new Date).toISOString();n.save(e.concat(".png"))}(n):"S"===n.key&&function(n){var e=(new Date).toISOString();n.createCanvas(window.innerWidth,window.innerHeight,n.SVG),n.draw(),n.save(e.concat(".svg")),n.createCanvas(window.innerWidth,window.innerHeight),n.draw()}(n)}(n)}}),document.body)}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,n=[],t.O=(e,r,o,i)=>{if(!r){var a=1/0;for(w=0;w<n.length;w++){for(var[r,o,i]=n[w],u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((n=>t.O[n](r[s])))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){n.splice(w--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var w=n.length;w>0&&n[w-1][2]>i;w--)n[w]=n[w-1];n[w]=[r,o,i]},t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={706:0};t.O.j=e=>0===n[e];var e=(e,r)=>{var o,i,[a,u,s]=r,c=0;if(a.some((e=>0!==n[e]))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(s)var w=s(t)}for(e&&e(r);c<a.length;c++)i=a[c],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(w)},r=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=t.O(void 0,[35,302],(()=>t(876)));o=t.O(o)})();