(()=>{"use strict";var n,e={750:(n,e,o)=>{var t=o(302),i=o.n(t),r=o(35);function a(n,e,o){var t=n.min(n.windowWidth/e,n.windowHeight/o);n.resizeCanvas(t*e,t*o)}function s(n,e,o){for(var t=0;t<e;t++)for(var i=0;i<n;i++)o(i,t)}function c(n,e,o){return{x:e*n,y:o*n}}var u=o(363),d={numPts:75,spacing:10,zoom:15,color1:"#018f14",color2:"#002afd"},l=o.n(u)().create(10,10,"settings");l.hide(),l.bindNumber("numPts",0,1e3,d.numPts,1,d),l.bindRange("spacing",0,100,d.spacing,1,d),l.bindRange("zoom",1,100,d.zoom,1,d),i()(r);var p=function(n){n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight)},n.draw=function(){n.background(0),n.noFill(),n.translate(n.windowWidth/2-d.numPts*d.spacing/2,n.windowHeight/2-d.numPts/11*14*d.spacing/2),n.stroke(d.color1),s(d.numPts,d.numPts/11*14,(function(e,o){var t=c(d.spacing,e,o);n.circle(t.x,t.y,n.noise(e/d.zoom,o/d.zoom)*d.spacing/2)})),n.translate(d.spacing/2,d.spacing/2),n.stroke(d.color2),s(d.numPts,d.numPts/11*14,(function(e,o){var t=c(d.spacing,e,o);n.circle(t.x,t.y,d.spacing/2-n.noise(e/d.zoom,o/d.zoom)*d.spacing/2)}))},n.mouseClicked=function(){},n.keyPressed=function(){(function(n,e){"s"===n.key?function(n){var e=(new Date).toISOString();n.save(e.concat(".png"))}(n):"S"===n.key?function(n,e){var o=(new Date).toISOString(),t=document.createElement("div");t.id="hidden_div",t.style.display="none",document.body.appendChild(t);var i=new r(e,t);i.setup=function(){i.createCanvas(n.width,n.height,n.SVG)},i.setup(),i.draw(),i.save(o.concat(".svg")),i.remove(),t.remove()}(n,e):"1"===n.key?n.resizeCanvas(n.windowWidth,n.windowHeight):"2"===n.key?a(n,11,14):"3"===n.key&&a(n,9,16)})(n,p),n.keyCode===n.ESCAPE&&l.toggleVisibility()}};new r(p,document.body)}},o={};function t(n){var i=o[n];if(void 0!==i)return i.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.m=e,n=[],t.O=(e,o,i,r)=>{if(!o){var a=1/0;for(d=0;d<n.length;d++){for(var[o,i,r]=n[d],s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(t.O).every((n=>t.O[n](o[c])))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){n.splice(d--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var d=n.length;d>0&&n[d-1][2]>r;d--)n[d]=n[d-1];n[d]=[o,i,r]},t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={299:0};t.O.j=e=>0===n[e];var e=(e,o)=>{var i,r,[a,s,c]=o,u=0;if(a.some((e=>0!==n[e]))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(c)var d=c(t)}for(e&&e(o);u<a.length;u++)r=a[u],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(d)},o=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var i=t.O(void 0,[35,302,363],(()=>t(750)));i=t.O(i)})();