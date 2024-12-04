(()=>{"use strict";var e,n={7778:(e,n,t)=>{var i=t(8302),r=t.n(i),a=t(4035);function o(){return document.title+"_"+(new Date).toISOString()}var u=t(363);var s={numPts:75,spacing:8,zoom:25,minSquareLen:1,maxSquareLen:.9,xOffset:0,yOffset:0,filled:!1,radius:10},d=t.n(u)().create(10,10,"settings");d.hide(),d.bindNumber("numPts",0,1e3,s.numPts,1,s),d.bindRange("spacing",0,100,s.spacing,1,s),d.bindRange("zoom",1,100,s.zoom,1,s),d.bindRange("minSquareLen",0,10,s.minSquareLen,.1,s),d.bindRange("maxSquareLen",0,10,s.maxSquareLen,.05,s),d.bindBoolean("filled",s.filled,s),r()(a);var c=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),d.addText("Aspect Ratio","11x14",(function(n){!function(e,n,t,i){var r=n.split(":");if(2!==r.length&&(r=n.split("x")),2===r.length){var a=parseFloat(r[0]);if(!isNaN(a)){var o=parseFloat(r[1]);isNaN(o)||function(e,n,t,i,r){void 0===i&&(i=e.windowWidth),void 0===r&&(r=e.windowHeight);var a=e.min(i/n,r/t);e.resizeCanvas(a*n,a*t)}(e,a,o,void 0,void 0)}}}(e,n)}))},e.draw=function(){e.background(255),s.filled?e.fill(0):e.noFill(),e.strokeWeight(2),e.translate(e.width/2-s.numPts*s.spacing/2,e.height/2-s.numPts/4*5.5*s.spacing/2),e.stroke(0),function(e,n,t){for(var i=0;i<n;i++)for(var r=0;r<e;r++)t(r,i)}(s.numPts,s.numPts,(function(n,t){var i=n-s.numPts/2+.5,r=t-s.numPts/2+.5,a=Math.sqrt(i*i+r*r);if(a<=s.numPts/2){var o=function(e,n,t){return{x:n*e,y:t*e}}(s.spacing,n,t);e.square(o.x,o.y,function(e,n,t){return 1-t/(s.numPts/2)*s.maxSquareLen+s.minSquareLen}(0,0,a))}}))},e.mouseClicked=function(){},e.mouseDragged=function(){s.xOffset+=(e.pmouseX-e.mouseX)/3,s.yOffset+=(e.pmouseY-e.mouseY)/3},e.keyPressed=function(){(function(e,n){"s"===e.key?function(e){var n=o();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var t=o(),i=document.createElement("div");i.id="hidden_div",i.style.display="none",document.body.appendChild(i);var r=new a(n,i);r.setup=function(){r.createCanvas(e.width,e.height,e.SVG)},r.setup(),r.draw(),r.save(t.concat(".svg")),r.remove(),i.remove()}(e,n):"1"===e.key||"2"===e.key||e.key})(e,c),e.keyCode!==e.ESCAPE&&"q"!==e.key||d.toggleVisibility()}};new a(c,document.body)}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,i),a.exports}i.m=n,e=[],i.O=(n,t,r,a)=>{if(!t){var o=1/0;for(c=0;c<e.length;c++){for(var[t,r,a]=e[c],u=!0,s=0;s<t.length;s++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](t[s])))?t.splice(s--,1):(u=!1,a<o&&(o=a));if(u){e.splice(c--,1);var d=r();void 0!==d&&(n=d)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,r,a]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={5452:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var r,a,[o,u,s]=t,d=0;if(o.some((n=>0!==e[n]))){for(r in u)i.o(u,r)&&(i.m[r]=u[r]);if(s)var c=s(i)}for(n&&n(t);d<o.length;d++)a=o[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},t=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var r=i.O(void 0,[4035,8302,363],(()=>i(7778)));r=i.O(r)})();