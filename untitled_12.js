(()=>{"use strict";var e,t={30:(e,t,r)=>{var n=r(302),o=r.n(n),a=r(35);function i(){return document.title+"_"+(new Date).toISOString()}function u(e,t,r){var n=e.min(e.windowWidth/t,e.windowHeight/r);e.resizeCanvas(n*t,n*r)}o()(a);var s=["#ba00ff","#00ffe1"],d=5,v=6,c=0,f=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight)},e.draw=function(){e.background(0),e.translate(e.windowWidth/2-500,e.windowHeight/2-500),e.noFill(),e.strokeWeight(4),e.stroke(s[0]);for(var t=0;t<100;t++)e.beginShape(),e.vertex(0,0),e.vertex(0,0),e.curveVertex(2+d*t,300),e.curveVertex(2-v*(100-t),600),e.vertex(t%5*-20,1e3),e.vertex(t%5*-20,1e3),e.endShape(),e.translate(10,0);for(e.translate(-1e3,0),e.stroke(s[1]),e.translate(500,500),e.rotate(c),e.translate(-500,-500),t=0;t<50;t++)e.beginShape(),e.vertex(t%5*-20,0),e.vertex(t%5*-20,0),e.curveVertex(2+d*t,300),e.curveVertex(2-v*(100-t),600),e.vertex(60,1e3),e.vertex(60,1e3),e.endShape(),e.translate(20,0)},e.keyPressed=function(){!function(e,t){"s"===e.key?function(e){var t=i();e.save(t.concat(".png"))}(e):"S"===e.key?function(e,t){var r=i(),n=document.createElement("div");n.id="hidden_div",n.style.display="none",document.body.appendChild(n);var o=new a(t,n);o.setup=function(){o.createCanvas(e.width,e.height,e.SVG)},o.setup(),o.draw(),o.save(r.concat(".svg")),o.remove(),n.remove()}(e,t):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?u(e,11,14):"3"===e.key&&u(e,9,16)}(e,f)},e.mouseDragged=function(){d+=(e.mouseX-e.pmouseX)/100,v+=(e.mouseY-e.pmouseY)/100},e.mouseWheel=function(e){c-=e.delta/100}};new a(f,document.body)}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(v=0;v<e.length;v++){for(var[r,o,a]=e[v],u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(v--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var v=e.length;v>0&&e[v-1][2]>a;v--)e[v]=e[v-1];e[v]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={538:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,u,s]=r,d=0;if(i.some((t=>0!==e[t]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var v=s(n)}for(t&&t(r);d<i.length;d++)a=i[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(v)},r=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[35,302],(()=>n(30)));o=n.O(o)})();