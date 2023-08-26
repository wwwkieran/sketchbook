(()=>{"use strict";var e,n={606:(e,n,t)=>{var i=t(302),o=t.n(i),r=t(35);function a(e,n,t){var i=e.min(e.windowWidth/n,e.windowHeight/t);e.resizeCanvas(i*n,i*t)}function c(e,n,t){for(var i=0;i<n;i++)for(var o=0;o<e;o++)t(o,i)}function s(e,n,t){return{x:n*e,y:t*e}}var u=t(363),d={numPts:75,spacing:8,zoom:25,color1:"#0773ff",color2:"#e236ff",minCircleD:1,maxCircleDMult:.5,background:"#000000",xOffset:0,yOffset:0},f=t.n(u)().create(10,10,"settings");f.hide(),f.bindNumber("numPts",0,1e3,d.numPts,1,d),f.bindRange("spacing",0,100,d.spacing,1,d),f.bindRange("zoom",1,100,d.zoom,1,d),f.bindRange("minCircleD",0,10,d.minCircleD,.1,d),f.bindRange("maxCircleDMult",0,1,d.maxCircleDMult,.05,d),f.bindColor("background",d.background,d),o()(r);var l=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),f.addButton("Randomize Noise",(function(){e.noiseSeed()}))},e.draw=function(){function n(n,t,i){var o=e.noise((d.xOffset+n)/d.zoom,(d.yOffset+t)/d.zoom)-.5,r=3;return i&&(r*=-1),e.max(d.minCircleD,r*o*d.maxCircleDMult*d.spacing)}e.background(d.background),e.noFill(),e.translate(e.width/2-d.numPts*d.spacing/2,e.height/2-d.numPts/11*14*d.spacing/2),e.stroke(d.color1),c(d.numPts,d.numPts/11*14,(function(t,i){var o=s(d.spacing,t,i);e.circle(o.x,o.y,n(t,i,!1))})),e.translate(d.spacing/2,d.spacing/2),e.stroke(d.color2),c(d.numPts,d.numPts/11*14,(function(t,i){var o=s(d.spacing,t,i);e.circle(o.x,o.y,n(t,i,!0))}))},e.mouseClicked=function(){},e.mouseDragged=function(){d.xOffset+=(e.pmouseX-e.mouseX)/3,d.yOffset+=(e.pmouseY-e.mouseY)/3},e.keyPressed=function(){(function(e,n){"s"===e.key?function(e){var n=(new Date).toISOString();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var t=(new Date).toISOString(),i=document.createElement("div");i.id="hidden_div",i.style.display="none",document.body.appendChild(i);var o=new r(n,i);o.setup=function(){o.createCanvas(e.width,e.height,e.SVG)},o.setup(),o.draw(),o.save(t.concat(".svg")),o.remove(),i.remove()}(e,n):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?a(e,11,14):"3"===e.key&&a(e,9,16)})(e,l),e.keyCode===e.ESCAPE&&f.toggleVisibility()}};new r(l,document.body)}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=(n,t,o,r)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,o,r]=e[d],c=!0,s=0;s<t.length;s++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](t[s])))?t.splice(s--,1):(c=!1,r<a&&(a=r));if(c){e.splice(d--,1);var u=o();void 0!==u&&(n=u)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,o,r]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={966:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var o,r,[a,c,s]=t,u=0;if(a.some((n=>0!==e[n]))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(s)var d=s(i)}for(n&&n(t);u<a.length;u++)r=a[u],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},t=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=i.O(void 0,[35,302,363],(()=>i(606)));o=i.O(o)})();