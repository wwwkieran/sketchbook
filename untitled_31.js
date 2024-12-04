(()=>{"use strict";var e,n={485:(e,n,i)=>{var t=i(8302),a=i.n(t),r=i(4035);function o(){return document.title+"_"+(new Date).toISOString()}var s=i(363),d={baseWidth:10,dropOff:.1,spacing:5,sinMult:20},c=i.n(s)().create(10,10,"settings");c.hide(),c.bindRange("baseWidth",0,100,d.baseWidth,1,d),c.bindRange("dropOff",0,.15,d.dropOff,.001,d),c.bindRange("spacing",0,50,d.spacing,1,d),c.bindRange("sinMult",0,100,d.sinMult,1,d),a()(r);var u=function(e){var n,i=null;e.setup=function(){var t=e.createCanvas(e.windowWidth,e.windowHeight);c.addText("Aspect Ratio","11x14",(function(n){!function(e,n,i,t){var a=n.split(":");if(2!==a.length&&(a=n.split("x")),2===a.length){var r=parseFloat(a[0]);if(!isNaN(r)){var o=parseFloat(a[1]);isNaN(o)||function(e,n,i,t,a){void 0===t&&(t=e.windowWidth),void 0===a&&(a=e.windowHeight);var r=e.min(t/n,a/i);e.resizeCanvas(r*n,r*i)}(e,r,o,void 0,void 0)}}}(e,n)})),e.angleMode(e.DEGREES),n=e.createGraphics(100,100),t.drop((function(n){"image"===n.type?i=e.loadImage(n.data,(function(){i.resize(100,100),i.loadPixels()})):console.log("Not an image file!")}))},e.draw=function(){e.background(255),n.fill(0),n.strokeWeight(0),null===i?n.square(0,0,100):n.image(i,0,0,100,100),function(n,i,t,a,r,o,s,c){for(var u=d.baseWidth,l=0,f=0;e.abs(f)<e.abs(1e3);){for(var v=d.baseWidth,p=0,g=0;e.abs(g)<e.abs(800);)e.image(o,50+g,50+f,v,u),g+=1*(v+d.spacing),v=s(p),p++;f+=1*(u+d.spacing),u=s(l),l++}}(0,0,0,0,0,n,(function(n,i){return d.baseWidth+d.baseWidth/2*e.sin(n*d.sinMult)}))},e.mouseClicked=function(){},e.keyPressed=function(){(function(e,n){"s"===e.key?function(e){var n=o();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var i=o(),t=document.createElement("div");t.id="hidden_div",t.style.display="none",document.body.appendChild(t);var a=new r(n,t);a.setup=function(){a.createCanvas(e.width,e.height,e.SVG)},a.setup(),a.draw(),a.save(i.concat(".svg")),a.remove(),t.remove()}(e,n):"1"===e.key||"2"===e.key||e.key})(e,u),e.keyCode!==e.ESCAPE&&"q"!==e.key||c.toggleVisibility()}};new r(u,document.body)}},i={};function t(e){var a=i[e];if(void 0!==a)return a.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,t),r.exports}t.m=n,e=[],t.O=(n,i,a,r)=>{if(!i){var o=1/0;for(u=0;u<e.length;u++){for(var[i,a,r]=e[u],s=!0,d=0;d<i.length;d++)(!1&r||o>=r)&&Object.keys(t.O).every((e=>t.O[e](i[d])))?i.splice(d--,1):(s=!1,r<o&&(o=r));if(s){e.splice(u--,1);var c=a();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,a,r]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={7297:0};t.O.j=n=>0===e[n];var n=(n,i)=>{var a,r,[o,s,d]=i,c=0;if(o.some((n=>0!==e[n]))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(d)var u=d(t)}for(n&&n(i);c<o.length;c++)r=o[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},i=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var a=t.O(void 0,[4035,8302,363],(()=>t(485)));a=t.O(a)})();