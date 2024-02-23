(()=>{"use strict";var e,t={1392:(e,t,r)=>{var o=r(8302),n=r.n(o),i=r(4035);function a(e){var t=d();e.save(t.concat(".png"))}function s(e,t){var r=d(),o=document.createElement("div");o.id="hidden_div",o.style.display="none",document.body.appendChild(o);var n=new i(t,o);n.setup=function(){n.createCanvas(e.width,e.height,e.SVG)},n.setup(),n.draw(),n.save(r.concat(".svg")),n.remove(),o.remove()}function d(){return document.title+"_"+(new Date).toISOString()}function c(e,t,r,o,n){void 0===o&&(o=e.windowWidth),void 0===n&&(n=e.windowHeight);var i=e.min(o/t,n/r);e.resizeCanvas(i*t,i*r)}function l(e,t,r,o){var n=t.split(":");if(2!==n.length&&(n=t.split("x")),2===n.length){var i=parseFloat(n[0]);if(!isNaN(i)){var a=parseFloat(n[1]);isNaN(a)||c(e,i,a,r,o)}}}function u(e){return void 0===e&&(e=800),Math.max(e,.9*window.innerHeight)}function p(e,t){return void 0===e&&(e=800),void 0===t&&(t=0),Math.max(e,.9*(window.innerWidth-2*t))}var h=r(363),f=r.n(h),g=r(2264),m=r(4288);function v(e){document.body.style.backgroundColor=e.toString()}class b{#e;#t;#r;#o;#n;#i;#a;#s;p5;constructor(e,t,r="webm"){this.p5=e,this.format=r,this.input=t}get blob(){return this.#e}get stream(){return this.#i}get input(){return this.#r}set input(e){if(void 0!==this.#i&&this.#i===e)return;if(this.recording)return console.error("VideoRecorder input was assigned a new value while recording.           Call stop() before changing the input");if(void 0===e)return void 0===this.p5.drawingContext?.canvas?console.error("VideoRecorder couldn't find canvas to record"):this.input=this.p5.drawingContext.canvas,void("undefined"!=typeof soundOut&&void 0!==soundOut.output&&this.addInput(soundOut.output));const t=Array.isArray(e)?this.#d(e):this.#c(e);this.#r=e,this.#i=t,this.#l()}get format(){return this.#n.mimeType}set format(e){return"."===e.charAt(0)&&(e=e.slice(1)),0==b.isSupported(e)?console.error(`Video format ${e} is not supported on this browser`):this.recording?console.error("Can't set format while video recorder is recording"):(this.#o=e.split("/").length>1?e:`video/${e}`,void(void 0!==this.#i&&this.#l()))}get onFileReady(){return this.#s}set onFileReady(e){if("function"!=typeof e)return console.error("VideoRecorder onFileReady must be of type function but was assigned to "+typeof e);this.#s=e}get recording(){return void 0!==this.#n&&"recording"===this.#n.state}get url(){return this.#a}addInput(e){void 0!==this.#i?(this.#c(e).getTracks().forEach((e=>this.#i.addTrack(e))),this.#l()):this.input=e}#u(e){const{context:t}=e,r=t.createMediaStreamDestination();return e.connect(r),r.stream}erase(){if(this.recording)return console.error("erase() was called while the video recorder was recording. Call stop() before erasing.");this.#t=[]}canRecord(e){return b.canRecord(e)}static canRecord(e){return e instanceof MediaStream||e instanceof AudioNode||"function"==typeof e.captureStream||"function"==typeof e.elt?.captureStream}#p(){this.#e=new Blob(this.#t,{type:this.#n.mimeType}),this.#a=URL.createObjectURL(this.#e),"function"==typeof this.#s&&this.#s()}#l(){this.#n=new MediaRecorder(this.#i,{mimeType:this.#o}),this.#n.onstop=()=>this.#p(),this.#n.ondataavailable=e=>this.#t.push(e.data)}#d(e){return e.forEach((e=>this.addInput(e))),this.#i}#c(e){return 0==this.canRecord(e)?console.error(`Selected VideoRecorder input of type ${typeof e} cannot be recorded in this browser`):e instanceof MediaStream?e:e instanceof AudioNode?this.#u(e):"function"==typeof e.captureStream?this.#h(e):e instanceof this.p5.Element?this.#h(e.elt):void 0}isSupported(e){return b.isSupported(e)}static isSupported(e){return"."===e.charAt(0)&&(e=e.slice(1)),MediaRecorder.isTypeSupported(e.split("/").length>1?e:`video/${e}`)}#h(e){return"function"!=typeof e.captureStream?console.error(`Can't capture stream from input ${e}`):e.captureStream()}pause(){this.#n.pause()}resume(){this.#n.resume()}save(e){if(void 0===this.#e)return console.error("save() was called before a video file was created.          Use onFileReady event to call a function when the video file is ready.");let t=this.#o.match(/\/([^;]*)/)?.[1];[e,t]=this.p5._checkFileExtension(e,t),this.p5.downloadFile(this.#e,e,t)}start(){this.erase(),this.#n.start()}stop(){console.assert(this.recording,"stop() was called while the video recorder was not recording. Call start() before stopping."),this.#n.stop()}}var y={baseWidth:10,dropOff:.1,spacing:5,sinMult:20},w=f().create(10,10,"settings");w.hide(),w.bindRange("baseWidth",0,100,y.baseWidth,1,y),w.bindRange("dropOff",0,.15,y.dropOff,.001,y),w.bindRange("spacing",0,50,y.spacing,1,y),w.bindRange("sinMult",0,100,y.sinMult,1,y);var k=function(e,t){void 0===e&&(e=1);var r,o=248*e,n=document.createElement("style");n.innerHTML=".tp-dfwv {\n  transform: scale("+e.toString()+");\n  transform-origin: top right;\n}\n",document.body.appendChild(n),(r=document.createElement("style")).innerHTML=":root {\n  --tp-base-background-color: hsla(0, 0%, 0%, 1.00);\n  --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);\n  --tp-button-background-color: hsla(0, 0%, 70%, 1.00);\n  --tp-button-background-color-active: hsla(0, 0%, 85%, 1.00);\n  --tp-button-background-color-focus: hsla(0, 0%, 80%, 1.00);\n  --tp-button-background-color-hover: hsla(0, 0%, 75%, 1.00);\n  --tp-button-foreground-color: hsla(0, 0%, 0%, 1.00);\n  --tp-container-background-color: hsla(0, 0%, 10%, 1.00);\n  --tp-container-background-color-active: hsla(0, 0%, 25%, 1.00);\n  --tp-container-background-color-focus: hsla(0, 0%, 20%, 1.00);\n  --tp-container-background-color-hover: hsla(0, 0%, 15%, 1.00);\n  --tp-container-foreground-color: hsla(0, 0%, 50%, 1.00);\n  --tp-groove-foreground-color: hsla(0, 0%, 10%, 1.00);\n  --tp-input-background-color: hsla(0, 0%, 10%, 1.00);\n  --tp-input-background-color-active: hsla(0, 0%, 25%, 1.00);\n  --tp-input-background-color-focus: hsla(0, 0%, 20%, 1.00);\n  --tp-input-background-color-hover: hsla(0, 0%, 15%, 1.00);\n  --tp-input-foreground-color: hsla(0, 0%, 70%, 1.00);\n  --tp-label-foreground-color: hsla(0, 0%, 50%, 1.00);\n  --tp-monitor-background-color: hsla(0, 0%, 8%, 1.00);\n  --tp-monitor-foreground-color: hsla(0, 0%, 48%, 1.00);\n}\n",document.body.appendChild(r);var i=new g.X6({title:"untitled_32"});return i.registerPlugin(m),{pane:i,uiWidth:o}}(1.1),S=k.pane,R=k.uiWidth;S.addBinding(y,"baseWidth",{min:0,max:100,step:1}),S.addBinding(y,"dropOff",{min:0,max:.15,step:.001}),S.addBinding(y,"spacing",{min:0}),S.addBinding(y,"sinMult"),n()(i);var x=function(e){var t,r=null;e.setup=function(){var o=e.createCanvas(e.windowWidth,e.windowHeight);!function(e,t,r,o,n){for(var i=0,d=e.controller.rackController.rack.children;i<d.length;i++){var c=d[i];if("props"in c&&"Misc"===c.props.get("title"))return}void 0===o&&(o=p()),void 0===n&&(n=u());var h=e.addFolder({title:"Misc"}),f={background:"#999999",direction:"vertical",aspect:"1x1",zoom:1,translation:{x:0,y:0}};h.addBinding(f,"background",{view:"color",color:{}}).on("change",(function(){v(t.color(f.background))})),h.addBinding(f,"zoom",{max:2,min:0}).on("change",(function(){var e=document.getElementById("defaultCanvas0");e.style.transform="scale("+f.zoom.toString()+")",e.style.zIndex="-1"})),h.addBinding(f,"translation").on("change",(function(){var e=document.getElementById("defaultCanvas0");e.style.zIndex="-1",e.style.translate=(3*f.translation.x).toString()+"px "+(3*f.translation.y).toString()+"px"}));var g=function(){var e=f.aspect;if("horizontal"===f.direction){var r=e.split("x");e=r[1]+"x"+r[0]}l(t,e,o,n)},m=["vertical","horizontal"];h.addBinding(f,"direction",{view:"radiogrid",groupName:"pageDirection",label:"",size:[2,1],cells:function(e,t){return{title:m[t+e],value:m[t+e]}}}).on("change",g);var y=["1x1","11x14","2x3","9x16","11x17","17x22"];h.addBinding(f,"aspect",{view:"radiogrid",groupName:"aspect ratio",label:"aspect ratio",size:[3,2],cells:function(e,t){return{title:y[3*t+e],value:y[3*t+e]}}}).on("change",g),h.addButton({title:"Export PNG"}).on("click",(function(){a(t)})),h.addButton({title:"Export SVG"}).on("click",(function(){s(t,r)}));var w=new b(t,void 0,"mp4");w.onFileReady=function(){w.save(document.title+"_"+(new Date).toISOString())};var k=h.addButton({title:"Start Recording..."}).on("click",(function(){w.recording?(w.stop(),k.title="Start Recording..."):(w.start(),k.title="Stop Recording...")}))}(S,e,x,p(800,R)),e.angleMode(e.DEGREES),t=e.createGraphics(100,100),o.drop((function(t){"image"===t.type?r=e.loadImage(t.data,(function(){r.resize(100,100),r.loadPixels()})):console.log("Not an image file!")})),v(e.color("#999999")),l(e,"1x1",p(800,R),u())},e.draw=function(){e.background(255),t.fill(0),t.strokeWeight(0),null===r?t.circle(50,50,100):t.image(r,0,0,100,100),function(t,r,o,n,i,a,s,d){for(var c=y.baseWidth,l=0,u=0;e.abs(u)<e.abs(n);){for(var p=y.baseWidth,h=0,f=0;e.abs(f)<e.abs(o);)e.image(a,2.5+f,2.5+u,p,c),f+=1*(p+y.spacing),p=e.min(s(h),e.abs(o)-e.abs(f)),h++;u+=1*(c+y.spacing),c=e.min(s(l),e.abs(n)-e.abs(u)),l++}}(0,0,1200,1500,0,t,(function(t,r){return y.baseWidth+y.baseWidth/2*e.sin(t*y.sinMult-90)}))},e.mouseClicked=function(){},e.keyPressed=function(){!function(e,t){"s"===e.key?a(e):"S"===e.key?s(e,t):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?c(e,11,14):"3"===e.key&&c(e,9,16)}(e,x),e.keyCode!==e.ESCAPE&&"q"!==e.key||w.toggleVisibility()}};new i(x,document.body)}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(l=0;l<e.length;l++){for(var[r,n,i]=e[l],s=!0,d=0;d<r.length;d++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[d])))?r.splice(d--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,n,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={3256:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[a,s,d]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(d)var l=d(o)}for(t&&t(r);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},r=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[4035,8302,363,8535],(()=>o(1392)));n=o.O(n)})();