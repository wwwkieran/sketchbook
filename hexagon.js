(()=>{"use strict";var e,t={5:(e,t,r)=>{var n=r(8302),o=r.n(n),i=r(4035);function a(e){var t=d();e.save(t.concat(".png"))}function s(e,t){var r=d(),n=document.createElement("div");n.id="hidden_div",n.style.display="none",document.body.appendChild(n);var o=new i(t,n);o.setup=function(){o.createCanvas(e.width,e.height,e.SVG)},o.setup(),o.draw(),o.save(r.concat(".svg")),o.remove(),n.remove()}function d(){return document.title+"_"+(new Date).toISOString()}function c(e,t,r,n){var o=t.split(":");if(2!==o.length&&(o=t.split("x")),2===o.length){var i=parseFloat(o[0]);if(!isNaN(i)){var a=parseFloat(o[1]);isNaN(a)||function(e,t,r,n,o){void 0===n&&(n=e.windowWidth),void 0===o&&(o=e.windowHeight);var i=e.min(n/t,o/r);e.resizeCanvas(i*t,i*r)}(e,i,a,r,n)}}}function l(e){return void 0===e&&(e=800),Math.max(e,.9*window.innerHeight)}function u(e,t){return void 0===e&&(e=800),void 0===t&&(t=0),Math.max(e,.9*(window.innerWidth-2*t))}var p=r(2264),h=r(4288),f=r(3048);function g(e){document.body.style.backgroundColor=e.toString()}class v{#e;#t;#r;#n;#o;#i;#a;#s;p5;constructor(e,t,r="webm"){this.p5=e,this.format=r,this.input=t}get blob(){return this.#e}get stream(){return this.#i}get input(){return this.#r}set input(e){if(void 0!==this.#i&&this.#i===e)return;if(this.recording)return console.error("VideoRecorder input was assigned a new value while recording.           Call stop() before changing the input");if(void 0===e)return void 0===this.p5.drawingContext?.canvas?console.error("VideoRecorder couldn't find canvas to record"):this.input=this.p5.drawingContext.canvas,void("undefined"!=typeof soundOut&&void 0!==soundOut.output&&this.addInput(soundOut.output));const t=Array.isArray(e)?this.#d(e):this.#c(e);this.#r=e,this.#i=t,this.#l()}get format(){return this.#o.mimeType}set format(e){return"."===e.charAt(0)&&(e=e.slice(1)),0==v.isSupported(e)?console.error(`Video format ${e} is not supported on this browser`):this.recording?console.error("Can't set format while video recorder is recording"):(this.#n=e.split("/").length>1?e:`video/${e}`,void(void 0!==this.#i&&this.#l()))}get onFileReady(){return this.#s}set onFileReady(e){if("function"!=typeof e)return console.error("VideoRecorder onFileReady must be of type function but was assigned to "+typeof e);this.#s=e}get recording(){return void 0!==this.#o&&"recording"===this.#o.state}get url(){return this.#a}addInput(e){void 0!==this.#i?(this.#c(e).getTracks().forEach((e=>this.#i.addTrack(e))),this.#l()):this.input=e}#u(e){const{context:t}=e,r=t.createMediaStreamDestination();return e.connect(r),r.stream}erase(){if(this.recording)return console.error("erase() was called while the video recorder was recording. Call stop() before erasing.");this.#t=[]}canRecord(e){return v.canRecord(e)}static canRecord(e){return e instanceof MediaStream||e instanceof AudioNode||"function"==typeof e.captureStream||"function"==typeof e.elt?.captureStream}#p(){this.#e=new Blob(this.#t,{type:this.#o.mimeType}),this.#a=URL.createObjectURL(this.#e),"function"==typeof this.#s&&this.#s()}#l(){this.#o=new MediaRecorder(this.#i,{mimeType:this.#n}),this.#o.onstop=()=>this.#p(),this.#o.ondataavailable=e=>this.#t.push(e.data)}#d(e){return e.forEach((e=>this.addInput(e))),this.#i}#c(e){return 0==this.canRecord(e)?console.error(`Selected VideoRecorder input of type ${typeof e} cannot be recorded in this browser`):e instanceof MediaStream?e:e instanceof AudioNode?this.#u(e):"function"==typeof e.captureStream?this.#h(e):e instanceof this.p5.Element?this.#h(e.elt):void 0}isSupported(e){return v.isSupported(e)}static isSupported(e){return"."===e.charAt(0)&&(e=e.slice(1)),MediaRecorder.isTypeSupported(e.split("/").length>1?e:`video/${e}`)}#h(e){return"function"!=typeof e.captureStream?console.error(`Can't capture stream from input ${e}`):e.captureStream()}pause(){this.#o.pause()}resume(){this.#o.resume()}save(e){if(void 0===this.#e)return console.error("save() was called before a video file was created.          Use onFileReady event to call a function when the video file is ready.");let t=this.#n.match(/\/([^;]*)/)?.[1];[e,t]=this.p5._checkFileExtension(e,t),this.p5.downloadFile(this.#e,e,t)}start(){this.erase(),this.#o.start()}stop(){console.assert(this.recording,"stop() was called while the video recorder was not recording. Call start() before stopping."),this.#o.stop()}}function m(e,t,r,n,o){for(var i=0,d=e.controller.rackController.rack.children;i<d.length;i++){var p=d[i];if("props"in p&&"Misc"===p.props.get("title"))return}void 0===n&&(n=u()),void 0===o&&(o=l());var h=e.addFolder({title:"Misc"}),f={background:"#999999",direction:"vertical",aspect:"1x1",zoom:1,translation:{x:0,y:0},file:""};h.addBinding(f,"background",{view:"color",color:{}}).on("change",(function(){g(t.color(f.background))})),h.addBinding(f,"zoom",{max:2,min:0}).on("change",(function(){var e=document.getElementById("defaultCanvas0");e.style.transform="scale("+f.zoom.toString()+")",e.style.zIndex="-1"})),h.addBinding(f,"translation").on("change",(function(){var e=document.getElementById("defaultCanvas0");e.style.zIndex="-1",e.style.translate=(3*f.translation.x).toString()+"px "+(3*f.translation.y).toString()+"px"}));var m=function(){var e=f.aspect;if("horizontal"===f.direction){var r=e.split("x");e=r[1]+"x"+r[0]}c(t,e,n,o)},y=["vertical","horizontal"];h.addBinding(f,"direction",{view:"radiogrid",groupName:"pageDirection",label:"",size:[2,1],cells:function(e,t){return{title:y[t+e],value:y[t+e]}}}).on("change",m);var w=["1x1","11x14","2x3","9x16","11x17","17x22","16x22","3x4","13x19","9x13","4x5","5x8","11x16","",""];h.addBinding(f,"aspect",{view:"radiogrid",groupName:"aspect ratio",label:"aspect ratio",size:[3,5],cells:function(e,t){return{title:w[3*t+e],value:w[3*t+e]}}}).on("change",m);var S=h.addFolder({title:"JSON",expanded:!1});S.addButton({title:"Export Settings"}).on("click",(function(){t.saveJSON(function(e){var t=e.exportState();return t.children=b(t.children,["Import Settings"]),t}(e),document.title+"_"+(new Date).toISOString())})),S.addBinding(f,"file",{label:"Import Settings",view:"file-input",lineCount:3,filetypes:[".json"]}).on("change",(function(t){t.value.text().then((function(t){e.importState(JSON.parse(t))}))})),h.addButton({title:"Export PNG"}).on("click",(function(){a(t)})),h.addButton({title:"Export SVG"}).on("click",(function(){s(t,r)}));var k=new v(t,void 0,"mp4");k.onFileReady=function(){k.save(document.title+"_"+(new Date).toISOString())};var x=h.addButton({title:"Start Recording..."}).on("click",(function(){k.recording?(k.stop(),x.title="Start Recording..."):(k.start(),x.title="Stop Recording...")}))}function b(e,t){for(var r=[],n=0,o=e;n<o.length;n++){var i=o[n];"title"in i&&t.includes(i.title)||"label"in i&&t.includes(i.label)||("children"in i&&(i.children=b(i.children,t)),r.push(i))}return r}var y={layers:5,radius:50},w=function(e,t){void 0===e&&(e=1);var r,n=248*e,o=document.createElement("style");o.innerHTML=".tp-dfwv {\n  transform: scale("+e.toString()+");\n  transform-origin: top right;\n}\n",document.body.appendChild(o),(r=document.createElement("style")).innerHTML=":root {\n  --tp-base-background-color: hsla(0, 0%, 0%, 1.00);\n  --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);\n  --tp-button-background-color: hsla(0, 0%, 70%, 1.00);\n  --tp-button-background-color-active: hsla(0, 0%, 85%, 1.00);\n  --tp-button-background-color-focus: hsla(0, 0%, 80%, 1.00);\n  --tp-button-background-color-hover: hsla(0, 0%, 75%, 1.00);\n  --tp-button-foreground-color: hsla(0, 0%, 0%, 1.00);\n  --tp-container-background-color: hsla(0, 0%, 10%, 1.00);\n  --tp-container-background-color-active: hsla(0, 0%, 25%, 1.00);\n  --tp-container-background-color-focus: hsla(0, 0%, 20%, 1.00);\n  --tp-container-background-color-hover: hsla(0, 0%, 15%, 1.00);\n  --tp-container-foreground-color: hsla(0, 0%, 50%, 1.00);\n  --tp-groove-foreground-color: hsla(0, 0%, 10%, 1.00);\n  --tp-input-background-color: hsla(0, 0%, 10%, 1.00);\n  --tp-input-background-color-active: hsla(0, 0%, 25%, 1.00);\n  --tp-input-background-color-focus: hsla(0, 0%, 20%, 1.00);\n  --tp-input-background-color-hover: hsla(0, 0%, 15%, 1.00);\n  --tp-input-foreground-color: hsla(0, 0%, 70%, 1.00);\n  --tp-label-foreground-color: hsla(0, 0%, 50%, 1.00);\n  --tp-monitor-background-color: hsla(0, 0%, 8%, 1.00);\n  --tp-monitor-foreground-color: hsla(0, 0%, 48%, 1.00);\n}\n",document.body.appendChild(r);var i=new p.X6({title:"Circles"});return i.registerPlugin(h),i.registerPlugin(f),{pane:i,uiWidth:n}}(1.1),S=w.pane,k=w.uiWidth;S.addBinding(y,"layers"),S.addBinding(y,"radius");var x=new Set,R=new Map;R.set("0 0 0",[{pattern:"rotate"}]),x.add("0 0"),o()(i);var O=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),g(e.color("#999999")),c(e,"1x1",u(800,k),l()),m(S,e,O,u(800,k)),e.frameRate(10)},e.draw=function(){var t;t=new Map,R.forEach((function(e,r){for(var n=function(e){var t=e.split(" ");return{q:parseInt(t[0]),r:parseInt(t[1]),edge:parseInt(t[2])}}(r),o=n.q,i=n.r,a=n.edge,s=0,d=e;s<d.length;s++){var c=d[s],l=void 0;"rotate"===c.pattern&&(l=C(o,i,a));var u=l.newQ,p=l.newR,h=l.newEdge;M(t,T(u,p,h),c)}})),R=t,e.background(255),e.translate(e.width/2,e.height/2),function(e,t){for(var r=-t;r<=t;r++)for(var n=Math.max(-t,-r-t);n<=Math.min(t,-r+t);n++)E(e,r,n)}(e,y.layers)},e.mousePressed=function(){var t,r,n=(t=e.mouseX-e.width/2,r=e.mouseY-e.height/2,{q:Math.round(2/3*t/y.radius),r:Math.round((-1/3*t+Math.sqrt(3)/3*r)/y.radius)}),o=n.r,i=n.q.toString()+" "+o.toString();x.has(i)?x.delete(i):x.add(i),console.log(i)},e.mouseReleased=function(){},e.mouseDragged=function(){},e.keyPressed=function(){!function(e,t){"s"===e.key?a(e):"S"===e.key?s(e,t):"1"===e.key||"2"===e.key||e.key}(e,O)}};function T(e,t,r){var n=e.toString()+" "+t.toString();return void 0!==r&&(n+=" "+r.toString()),n}function M(e,t,r){e.has(t)||e.set(t,[]),e.get(t).push(r)}function C(e,t,r,n){return{newQ:e,newR:t,newEdge:(r+1)%6}}function E(e,t,r){var n=function(e,t){return{x:y.radius*(1.5*e),y:y.radius*(Math.sqrt(3)*(t+e/2))}}(t,r),o=n.x,i=n.y,a=T(t,r);if(x.has(a)){e.push(),e.strokeWeight(5),e.stroke(230);for(var s=null,d=0;d<7;d++){var c=e.TWO_PI/6*d,l=o+(y.radius-5)*e.cos(c),u=i+(y.radius-5)*e.sin(c);null!==s&&(R.has(T(t,r,d-1))?e.stroke(100):e.stroke(230),e.line(s.xOffset,s.yOffset,l,u)),s={xOffset:l,yOffset:u}}e.pop()}}new i(O,document.body)}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(l=0;l<e.length;l++){for(var[r,o,i]=e[l],s=!0,d=0;d<r.length;d++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={9023:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,s,d]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(d)var l=d(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[4035,8302,9575],(()=>n(5)));o=n.O(o)})();