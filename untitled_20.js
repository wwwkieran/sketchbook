(()=>{"use strict";var e,n={186:(e,n,t)=>{var i=t(8302),o=t.n(i),r=t(4035);function a(){return document.title+"_"+(new Date).toISOString()}function u(e,n,t){var i=e.min(e.windowWidth/n,e.windowHeight/t);e.resizeCanvas(i*n,i*t)}var c=t(363),s={numPts:75,spacing:8,zoom:25,color1:"#0773ff",color2:"#e236ff",minCircleD:1,maxCircleDMult:.9,background:"#000000",xOffset:0,yOffset:0},d=t.n(c)().create(10,10,"settings");d.hide(),d.bindNumber("numPts",0,1e3,s.numPts,1,s),d.bindRange("spacing",0,100,s.spacing,1,s),d.bindRange("zoom",1,100,s.zoom,1,s),d.bindRange("minCircleD",0,10,s.minCircleD,.1,s),d.bindRange("maxCircleDMult",0,1,s.maxCircleDMult,.05,s),d.bindColor("background",s.background,s),o()(r);var f=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),d.addButton("Randomize Noise",(function(){e.noiseSeed()}))},e.draw=function(){e.background(s.background),e.noFill(),e.translate(e.width/2-s.numPts*s.spacing/2,e.height/2-s.numPts/11*14*s.spacing/2),e.stroke(s.color1),function(e,n,t){for(var i=0;i<n;i++)for(var o=0;o<e;o++)t(o,i)}(s.numPts,s.numPts/11*14,(function(n,t){var i=function(e,n,t){return{x:n*e,y:t*e}}(s.spacing,n,t),o=function(n,t,i){var o=e.noise((s.xOffset+n)/s.zoom,(s.yOffset+t)/s.zoom)-.5,r=3;return e.max(s.minCircleD,r*o*s.maxCircleDMult*s.spacing)}(n,t);e.line(i.x,i.y-o/2,i.x,i.y+o/2),e.line(i.x-o/2,i.y,i.x+o/2,i.y)}))},e.mouseClicked=function(){},e.mouseDragged=function(){s.xOffset+=(e.pmouseX-e.mouseX)/3,s.yOffset+=(e.pmouseY-e.mouseY)/3},e.keyPressed=function(){(function(e,n){"s"===e.key?function(e){var n=a();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var t=a(),i=document.createElement("div");i.id="hidden_div",i.style.display="none",document.body.appendChild(i);var o=new r(n,i);o.setup=function(){o.createCanvas(e.width,e.height,e.SVG)},o.setup(),o.draw(),o.save(t.concat(".svg")),o.remove(),i.remove()}(e,n):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?u(e,11,14):"3"===e.key&&u(e,9,16)})(e,f),e.keyCode===e.ESCAPE&&d.toggleVisibility()}};new r(f,document.body)}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=(n,t,o,r)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,o,r]=e[d],u=!0,c=0;c<t.length;c++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(u=!1,r<a&&(a=r));if(u){e.splice(d--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,o,r]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={2866:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var o,r,[a,u,c]=t,s=0;if(a.some((n=>0!==e[n]))){for(o in u)i.o(u,o)&&(i.m[o]=u[o]);if(c)var d=c(i)}for(n&&n(t);s<a.length;s++)r=a[s],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},t=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=i.O(void 0,[4035,8302,363],(()=>i(186)));o=i.O(o)})();