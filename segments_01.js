(()=>{"use strict";var e,n={500:(e,n,i)=>{var t=i(302),o=i.n(t),r=i(35);function a(e,n,i){var t=e.min(e.windowWidth/n,e.windowHeight/i);e.resizeCanvas(t*n,t*i)}var s=i(363),d=function(e,n){this.x=e,this.y=n},c={numLines:75,spacing:10,lineLen:1e3,ptsPerLine:10,disturbance:300,color1:"#018f14",color2:"#002afd",xZoom:200,yZoom:200,weight:3},u=i.n(s)().create(10,10,"settings");u.hide(),u.bindNumber("numLines",0,1e3,c.numLines,1,c),u.bindRange("spacing",0,100,c.spacing,.5,c),u.bindRange("lineLen",0,2e3,c.lineLen,1,c),u.bindRange("ptsPerLine",0,100,c.ptsPerLine,1,c),u.bindRange("disturbance",0,1e3,c.disturbance,1,c),u.bindRange("xZoom",0,1e3,c.xZoom,1,c),u.bindRange("yZoom",0,1e3,c.yZoom,1,c),u.bindRange("weight",0,10,c.weight,.1,c),o()(r);var l=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight)},e.draw=function(){var n=["#217074","#37745B","#8B9D77","#E7EAEF","#EDC5AB"],i=0;e.background(0),e.translate(e.windowWidth/2-c.numLines*c.spacing/2,e.windowHeight/2-c.lineLen/2),e.noFill(),e.strokeCap(e.PROJECT),e.strokeWeight(c.weight);for(var t=0;t<c.numLines;t++)for(var o=null,r=0;r<c.ptsPerLine;r++){var a=t*c.spacing,s=r*c.lineLen/c.ptsPerLine;e.stroke(e.color(n[i%n.length]));var u=new d(a+c.disturbance*e.noise(a/c.xZoom,s/c.yZoom),s);null!==o&&e.line(o.x,o.y,u.x,u.y),o=u,i++}},e.mouseClicked=function(){},e.keyPressed=function(){(function(e,n){"s"===e.key?function(e){var n=(new Date).toISOString();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var i=(new Date).toISOString(),t=document.createElement("div");t.id="hidden_div",t.style.display="none",document.body.appendChild(t);var o=new r(n,t);o.setup=function(){o.createCanvas(e.width,e.height,e.SVG)},o.setup(),o.draw(),o.save(i.concat(".svg")),o.remove(),t.remove()}(e,n):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?a(e,11,14):"3"===e.key&&a(e,9,16)})(e,l),e.keyCode===e.ESCAPE&&u.toggleVisibility()}};new r(l,document.body)}},i={};function t(e){var o=i[e];if(void 0!==o)return o.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,t),r.exports}t.m=n,e=[],t.O=(n,i,o,r)=>{if(!i){var a=1/0;for(u=0;u<e.length;u++){for(var[i,o,r]=e[u],s=!0,d=0;d<i.length;d++)(!1&r||a>=r)&&Object.keys(t.O).every((e=>t.O[e](i[d])))?i.splice(d--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,o,r]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={99:0};t.O.j=n=>0===e[n];var n=(n,i)=>{var o,r,[a,s,d]=i,c=0;if(a.some((n=>0!==e[n]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(d)var u=d(t)}for(n&&n(i);c<a.length;c++)r=a[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},i=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var o=t.O(void 0,[35,302,363],(()=>t(500)));o=t.O(o)})();