/*
 * IMPORTANT: Your use of this software indicates your acceptance of the terms
 * found at http://www.adobe.com/products/eulas/tou_typekit NOTE THAT YOUR
 * RIGHTS TO THIS SOFTWARE ARE LIMITED. USE AT YOUR OWN RISK. For font license
 * information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"f":"//use.edgefonts.net/c/e239ac/1w;source-sans-pro,2,bmh:R:i3,bmk:R:i4,bmm:R:i6,bmp:R:i7,bmg:R:n3,bmj:R:n4,bml:R:n6,bmn:R:n7/{format}{/extras*}","fi":[17270,17271,17265,17269,17272,17273,17267,17268],"fn":["source-sans-pro",["i3","i4","i6","i7","n3","n4","n6","n7"]],"ht":"tk","p":"//p.typekit.net/p.gif?s=4&h={host}&f=17270.17271.17265.17269.17272.17273.17267.17268&app={app}&_={_}","ps":4};
/*{"k":"1.11.3","created":"2015-01-14 15:50:16 UTC"}*/
;(function(window,document,undefined){
var aa=this;function ba(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return h.apply(null,arguments)}var ea=Date.now||function(){return+new Date};
function fa(a,b){this.qa=a;this.ba=b||a;this.ca=null;this.L=this.ba.document}fa.prototype.createElement=function(a,b,c){a=this.L.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.L.createTextNode(c));return a};function k(a,b,c){a=a.L.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function ga(a,b){function c(){a.L.body?b():setTimeout(c,0)}c()}
function l(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ia(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}function ja(a,b){/^http(s)?:$/.test(b)&&(a.ca=b)}
function m(a){if(null!==a.ca)a=a.ca;else{var b=a.ba.location.protocol;"about:"==b&&(b=a.qa.location.protocol);a="https:"==b?"https:":"http:"}return"https:"===a}function ka(a){return a.ba.location.hostname||a.qa.location.hostname}function la(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b}),d=!1;c.onload=function(){d||(d=!0)};c.onerror=function(){d||(d=!0)};k(a,"head",c)}
function ma(a,b,c){var d=a.L.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);window.setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function n(a,b,c,d){this.Sa=a;this.ea=b;this.Ra=c;this.Ha=d}
ba("webfont.BrowserInfo",n);n.prototype.Ia=function(){return this.Sa};n.prototype.hasWebFontSupport=n.prototype.Ia;n.prototype.Ja=function(){return this.ea};n.prototype.hasWebKitFallbackBug=n.prototype.Ja;n.prototype.Ka=function(){return this.Ra};n.prototype.hasWebKitMetricsBug=n.prototype.Ka;n.prototype.Ga=function(){return this.Ha};n.prototype.hasNativeFontLoading=n.prototype.Ga;function q(a,b,c,d){this.g=null!=a?a:null;this.o=null!=b?b:null;this.I=null!=c?c:null;this.m=null!=d?d:null}var na=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
q.prototype.compare=function(a){return this.g>a.g||this.g===a.g&&this.o>a.o||this.g===a.g&&this.o===a.o&&this.I>a.I?1:this.g<a.g||this.g===a.g&&this.o<a.o||this.g===a.g&&this.o===a.o&&this.I<a.I?-1:0};function r(a,b){return-1===a.compare(b)}function t(a,b){return 0===a.compare(b)||1===a.compare(b)}function u(a,b){return 0===a.compare(b)}q.prototype.toString=function(){return[this.g,this.o||"",this.I||"",this.m||""].join("")};
function v(a){a=na.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new q(b,c,d,e)}function x(a,b,c,d,e,f,g,p){this.W=a;this.A=b;this.F=c;this.T=d;this.n=e;this.l=f;this.S=g;this.C=p}ba("webfont.UserAgent",x);x.prototype.getName=function(){return this.W};x.prototype.getName=x.prototype.getName;
x.prototype.Ea=function(){return this.F};x.prototype.getEngine=x.prototype.Ea;x.prototype.Fa=function(){return this.n};x.prototype.getPlatform=x.prototype.Fa;x.prototype.Da=function(){return this.S};x.prototype.getDocumentMode=x.prototype.Da;x.prototype.Ca=function(){return this.C};x.prototype.getBrowserInfo=x.prototype.Ca;function oa(a,b){this.e=a;this.s=b}var pa=new x("Unknown",new q,"Unknown",new q,"Unknown",new q,void 0,new n(!1,!1,!1,!1));
oa.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")||-1!=this.e.indexOf("Trident/")){a=y(this);var b=v(A(this)),c=null,d=null,e=null,e=B(this.e,/Trident\/([\d\w\.]+)/,1),f=C(this.s),c=-1!=this.e.indexOf("MSIE")?v(B(this.e,/MSIE ([\d\w\.]+)/,1)):v(B(this.e,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=v(e)):(d="Unknown",e=new q);a=new x("MSIE",c,d,e,a,b,f,new n("Windows"==a&&6<=c.g||"Windows Phone"==a&&8<=b.g,!1,!1,!!this.s.fonts))}else if(-1!=this.e.indexOf("Opera"))a:if(a="Unknown",b=v(B(this.e,
/Presto\/([\d\w\.]+)/,1)),c=v(A(this)),d=C(this.s),null!==b.g?a="Presto":(-1!=this.e.indexOf("Gecko")&&(a="Gecko"),b=v(B(this.e,/rv:([^\)]+)/,1))),-1!=this.e.indexOf("Opera Mini/"))f=v(B(this.e,/Opera Mini\/([\d\.]+)/,1)),a=new x("OperaMini",f,a,b,y(this),c,d,new n(!1,!1,!1,!!this.s.fonts));else{if(-1!=this.e.indexOf("Version/")&&(f=v(B(this.e,/Version\/([\d\.]+)/,1)),null!==f.g)){a=new x("Opera",f,a,b,y(this),c,d,new n(10<=f.g,!1,!1,!!this.s.fonts));break a}f=v(B(this.e,/Opera[\/ ]([\d\.]+)/,1));
a=null!==f.g?new x("Opera",f,a,b,y(this),c,d,new n(10<=f.g,!1,!1,!!this.s.fonts)):new x("Opera",new q,a,b,y(this),c,d,new n(!1,!1,!1,!!this.s.fonts))}else/OPR\/[\d.]+/.test(this.e)?a=qa(this):/AppleWeb(K|k)it/.test(this.e)?a=qa(this):-1!=this.e.indexOf("Gecko")?(a="Unknown",b=new q,c=v(A(this)),d=!1,-1!=this.e.indexOf("Firefox")?(a="Firefox",b=v(B(this.e,/Firefox\/([\d\w\.]+)/,1)),d=3<=b.g&&5<=b.o):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),f=v(B(this.e,/rv:([^\)]+)/,1)),d||(d=1<f.g||1==f.g&&9<
f.o||1==f.g&&9==f.o&&2<=f.I),a=new x(a,b,"Gecko",f,y(this),c,C(this.s),new n(d,!1,!1,!!this.s.fonts))):a=pa;return a};function y(a){var b=B(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=B(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function A(a){var b=B(a.e,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=B(a.e,/Windows Phone( OS)? ([^;)]+)/,2))||(b=B(a.e,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=B(a.e,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=B(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function qa(a){var b=y(a),c=v(A(a)),d=v(B(a.e,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new q,f="Unknown",g=!1;/OPR\/[\d.]+/.test(a.e)?e="Opera":-1!=a.e.indexOf("Chrome")||-1!=a.e.indexOf("CrMo")||-1!=a.e.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.e)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.e.indexOf("PhantomJS")?e="PhantomJS":-1!=a.e.indexOf("Safari")?e="Safari":-1!=a.e.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.e.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=B(a.e,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=B(a.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.e.indexOf("Version/")?f=B(a.e,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=B(a.e,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=B(a.e,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=B(a.e,/PhantomJS\/([\d.]+)/,1));f=v(f);g="AdobeAIR"==e?2<f.g||2==f.g&&5<=f.o:"BlackBerry"==b?10<=c.g:"Android"==b?2<c.g||2==c.g&&1<c.o:526<=d.g||525<=d.g&&13<=d.o;return new x(e,f,"AppleWebKit",d,b,c,C(a.s),new n(g,536>d.g||536==
d.g&&11>d.o,"iPhone"==b||"iPad"==b||"iPod"==b||"Macintosh"==b,!!a.s.fonts))}function B(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function C(a){if(a.documentMode)return a.documentMode}function ra(a){this.Ma=a||"-"}ra.prototype.m=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Ma)};function sa(a,b,c,d,e){this.h=a;this.t=b;this.Y=c;this.r="wf";this.q=new ra("-");this.za=!1!==d;this.J=!1!==e}
function D(a){if(a.J){var b=ia(a.t,a.q.m(a.r,"active")),c=[],d=[a.q.m(a.r,"loading")];b||c.push(a.q.m(a.r,"inactive"));l(a.t,c,d)}E(a,"inactive")}function E(a,b,c){if(a.za&&a.Y[b])if(c)a.Y[b](c.getName(),F(c));else a.Y[b]()}function G(a,b){this.W=a;this.fa=4;this.X="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.X=c[1],this.fa=parseInt(c[2],10))}G.prototype.getName=function(){return this.W};function F(a){return a.X+a.fa}
function H(a,b){this.h=a;this.P=b;this.B=this.h.createElement("span",{"aria-hidden":"true"},this.P)}function ta(a){k(a.h,"body",a.B)}
function ua(a){var b;b=[];for(var c=a.W.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.X?c="oblique":"i"===a.X&&(c="italic");return"display:block;position:absolute;top:0px;left:0px;visibility:hidden;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.fa+"00")+";")}
H.prototype.remove=function(){var a=this.B;a.parentNode&&a.parentNode.removeChild(a)};function va(a,b,c,d,e,f,g,p){this.ga=a;this.La=b;this.h=c;this.D=d;this.P=p||"BESbswy";this.C=e;this.Q={};this.da=f||3E3;this.ra=g||null;this.O=this.N=null;a=new H(this.h,this.P);ta(a);for(var w in I)I.hasOwnProperty(w)&&(b=new G(I[w],F(this.D)),b=ua(b),a.B.style.cssText=b,this.Q[I[w]]=a.B.offsetWidth);a.remove()}var I={$a:"serif",Za:"sans-serif",Va:"monospace"};
va.prototype.start=function(){this.N=new H(this.h,this.P);ta(this.N);this.O=new H(this.h,this.P);ta(this.O);this.Pa=ea();var a=new G(this.D.getName()+",serif",F(this.D)),a=ua(a);this.N.B.style.cssText=a;a=new G(this.D.getName()+",sans-serif",F(this.D));a=ua(a);this.O.B.style.cssText=a;wa(this)};function xa(a,b,c){for(var d in I)if(I.hasOwnProperty(d)&&b===a.Q[I[d]]&&c===a.Q[I[d]])return!0;return!1}
function wa(a){var b=a.N.B.offsetWidth,c=a.O.B.offsetWidth;b===a.Q.serif&&c===a.Q["sans-serif"]||a.C.ea&&xa(a,b,c)?ea()-a.Pa>=a.da?a.C.ea&&xa(a,b,c)&&(null===a.ra||a.ra.hasOwnProperty(a.D.getName()))?ya(a,a.ga):ya(a,a.La):za(a):ya(a,a.ga)}function za(a){setTimeout(h(function(){wa(this)},a),25)}function ya(a,b){a.N.remove();a.O.remove();b(a.D)}function Aa(a,b,c,d){this.h=b;this.G=c;this.$=0;this.wa=this.pa=!1;this.da=d;this.C=a.C}
Aa.prototype.Aa=function(a){var b=this.G;b.J&&l(b.t,[b.q.m(b.r,a.getName(),F(a).toString(),"active")],[b.q.m(b.r,a.getName(),F(a).toString(),"loading"),b.q.m(b.r,a.getName(),F(a).toString(),"inactive")]);E(b,"fontactive",a);this.wa=!0;Ba(this)};
Aa.prototype.Ba=function(a){var b=this.G;if(b.J){var c=ia(b.t,b.q.m(b.r,a.getName(),F(a).toString(),"active")),d=[],e=[b.q.m(b.r,a.getName(),F(a).toString(),"loading")];c||d.push(b.q.m(b.r,a.getName(),F(a).toString(),"inactive"));l(b.t,d,e)}E(b,"fontinactive",a);Ba(this)};function Ba(a){0==--a.$&&a.pa&&(a.wa?(a=a.G,a.J&&l(a.t,[a.q.m(a.r,"active")],[a.q.m(a.r,"loading"),a.q.m(a.r,"inactive")]),E(a,"active")):D(a.G))}
function Ca(){var a=[{name:"font-family",value:J.c[K+1]}];this.Oa=[J.c[K]];this.ka=a}function Da(a){for(var b=a.Oa.join(","),c=[],d=0;d<a.ka.length;d++){var e=a.ka[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function Ea(a){this.h=a}Ea.prototype.toString=function(){return encodeURIComponent(ka(this.h))};function Fa(a,b){this.u=a;this.v=b}
Fa.prototype.toString=function(){for(var a=[],b=0;b<this.v.length;b++)for(var c=this.v[b],d=c.H(),c=c.H(this.u),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function L(a){this.Qa=a}
L.prototype.m=function(a,b){var c=b||{},d=this.Qa.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Ga(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Ha(a,b){this.M=a;this.U=b;this.ma={};this.la={}}Ha.prototype.H=function(a){return a?(this.ma[a]||this.U).slice(0):this.U.slice(0)};
function Ia(a,b,c){for(var d=[],e=a.M.split(",")[0].replace(/"|'/g,""),f=a.H(),g,p=[],w={},s=0;s<f.length;s++)g=f[s],0<g.length&&!w[g]&&(w[g]=!0,p.push(g));c=c.ua?c.ua(e,p,d):p;a.ma[b]=c;a.la[b]=d}function Ja(a,b){for(var c=a.H(b),d=a.la[b]||[],e=[],f=0;f<c.length;f++)e.push(new G(a.M,c[f]));for(f=0;f<d.length;f++)if(c=d[f].M,c!==a.M)for(var g=d[f].H(),p=0;p<g.length;p++)e.push(new G(c,g[p]));return e}function Ka(a,b){this.M=a;this.U=b}Ka.prototype.H=function(){return this.U};
function La(a){var b=new Image(1,1);b.src=a;b.onload=function(){b.onload=null};setTimeout(function(){b.src="about:blank";b.onload=null},3E3)}function Ma(){this.ha=this.xa=this.K=this.V=this.na=!0}function M(a){return"Windows"===a.n}function N(a){return M(a)&&u(a.l,new q(5,1))||M(a)&&u(a.l,new q(5,2))||M(a)&&u(a.l,new q(6,0))||M(a)&&t(a.l,new q(6,1))}function O(a){return"Macintosh"===a.n&&(t(a.l,new q(10,4))||null===a.l.g)}function Na(a,b){return b.na&&("iPhone"===a.n||"iPod"===a.n)}
function Oa(a,b){return Na(a,b)&&t(a.l,new q(4,2))&&r(a.l,new q(5))}function Pa(a,b){return b.V&&"iPad"===a.n&&t(a.l,new q(4,2))&&r(a.l,new q(5))}function P(a,b){return b.K&&"Android"===a.n}function Qa(a,b){return P(a,b)&&t(a.l,new q(2,2))&&r(a.l,new q(3,1))}function Ra(a,b){return P(a,b)&&t(a.l,new q(3,1))&&r(a.l,new q(4,1))}function Q(a){return"Linux"===a.n||"Ubuntu"===a.n}
function Sa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.F||"Unknown"===a.getName()&&"AppleWebKit"===a.F&&("iPhone"===a.n||"iPad"===a.n||"iPod"===a.n)}function Ta(a){return"Safari"===a.getName()&&"AppleWebKit"===a.F&&t(a.T,new q(525,13))&&r(a.T,new q(534,50))}function Ua(a){return"BuiltinBrowser"===a.getName()}function Va(a){this.ua=a}function Wa(a,b){return b}
var R={Wa:"a",Ya:"b",ab:"d",Ua:"i",Xa:"j",Ta:"k",NONE:"x"},S={a:function(a,b){return Ta(a)&&N(a)||Ua(a)&&(Qa(a,b)||P(a,b)&&t(a.l,new q(4,1)))||b.K&&"Silk"===a.getName()&&r(a.A,new q(2))&&(Qa(a,b)||O)||b.K&&"Silk"===a.getName()&&t(a.A,new q(2))&&P(a,b)&&t(a.l,new q(4,1))||Sa(a)&&(Pa(a,b)||Oa(a,b))||"Chrome"===a.getName()&&t(a.A,new q(6))&&(Pa(a,b)||Oa(a,b))||"AdobeAIR"===a.getName()&&t(a.A,new q(2,5))&&(M(a)&&null===a.l.g||Q(a))},b:function(a){return Ta(a)&&O(a)||"AdobeAIR"===a.getName()&&t(a.A,new q(2,
5))&&O(a)},d:function(a,b){return"Chrome"===a.getName()&&t(a.A,new q(6))&&(N(a)||Q(a)||O(a)||P(a,b)||"CrOS"===a.n||"CrKey"===a.n||b.V&&"iPad"===a.n&&t(a.l,new q(5))||Na(a,b)&&t(a.l,new q(5)))||"Gecko"===a.F&&1===a.T.compare(new q(1,9,1))&&(N(a)||Q(a)||O(a)||P(a,b))||"Safari"===a.getName()&&"AppleWebKit"===a.F&&t(a.T,new q(534,50))&&(N(a)||O(a))||Sa(a)&&(b.V&&"iPad"===a.n&&t(a.l,new q(5))||Na(a,b)&&t(a.l,new q(5)))||"Opera"===a.getName()&&t(a.A,new q(11,10))&&(N(a)||Q(a)||O(a)||P(a,b))||"MSIE"===a.getName()&&
9<=a.S&&(M(a)&&t(a.l,new q(6,1))||M(a)&&u(a.l,new q(6,0)))||"MSIE"===a.getName()&&b.xa&&"Windows Phone"===a.n&&t(a.l,new q(8))||Ua(a)&&(b.ha&&"BlackBerry"===a.n&&t(a.l,new q(10))||Q(a))},j:function(a,b){return Ua(a)&&Ra(a,b)||b.K&&"Silk"===a.getName()&&t(a.A,new q(2))&&(Ra(a,b)||Q(a))},i:function(a){return"MSIE"===a.getName()&&t(a.A,new q(6,0))&&(void 0===a.S||9>a.S)&&N(a)},x:function(){return!1}},Xa={};
Xa.i=new Va(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new Ka(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var p=f[g];if(a[p]){d=d.concat(a[p]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
g==e&&c.push(g);return c});var T={};T.a=T.j=T.b=T.d=T.j=function(){return[]};T.i=function(a,b,c){return[new Ea(a),new Fa(b,c)]};T.k=function(a){return[new Ea(a)]};function Ya(a,b,c){return T[b](a,b,c)}function U(a){this.h=a;this.u="x";this.ia=this.e=null;this.v=[];this.R=[];this.Z=null}U.prototype.supportsConfiguredBrowser=function(){return"x"!==this.u};
U.prototype.init=function(){if(0<this.R.length){for(var a=[],b=0;b<this.R.length;b++)a.push(Da(this.R[b]));var b=this.h,a=a.join(""),c=this.h.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));k(b,"head",c)}};
U.prototype.load=function(a,b,c,d,e){if(this.u){for(var f=Xa[this.u]||new Va(Wa),g=0;g<this.v.length;g++)Ia(this.v[g],this.u,f);this.Z&&(f=Ya(this.h,this.u,this.v),f=Ga(this.u,f),e&&(f.contextPath=e),e=this.Z.m(m(this.h),f),la(this.h,e));if(c){for(var p=[],w={},s=new Aa(this.e,this.h,b,d),g=0;g<this.v.length;g++)p=p.concat(Ja(this.v[g],this.u));for(g=0;g<p.length;g++)w[p[g].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";ga(this.h,function(){var b=p,c={},d=w||{};if(0===b.length&&a)D(s.G);
else{s.$+=b.length;a&&(s.pa=a);for(var e=0;e<b.length;e++){var f=b[e],g=d[f.getName()],z=s.G,ha=f;z.J&&l(z.t,[z.q.m(z.r,ha.getName(),F(ha).toString(),"loading")]);E(z,"fontloading",ha);z=null;z=new va(h(s.Aa,s),h(s.Ba,s),s.h,f,s.C,s.da,c,g);z.start()}}})}}};
U.prototype.performOptionalActions=function(a){this.oa&&ga(this.h,function(a,c,d,e){return function(){var c=a.oa;if(c.ta){var d=window.__adobewebfontsappname__,d=d?d.toString().substr(0,20):"";La(c.ta.m(m(e),{host:encodeURIComponent(ka(e)),app:encodeURIComponent(d),_:(+new Date).toString()}))}}}(this,a,this.e,this.h))};function Za(a,b,c,d){this.Na=a;this.ja=null;this.va=this.aa=!0;this.h=b;this.e=c;this.t=d;this.w=[]}Za.prototype.ya=function(a){this.w.push(a)};
Za.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);d.protocol&&ja(this.h,d.protocol);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)$a(this,c[g],function(){0==--f&&ab(e,d)});else ab(this,d)};function $a(a,b,c){b=a.Na.m(m(a.h),{id:encodeURIComponent(b)});ma(a.h,b,c)}
function ab(a,b){if(0!=a.w.length){a.ja=b.contextPath||".";a.aa=!1!==b.events;a.va=!1!==b.classes;for(var c=new sa(a.h,a.t,b,a.aa,a.va),d=!1,e=0;e<a.w.length;e++)a.w[e].init(),d=d||a.w[e].supportsConfiguredBrowser();if(d)for(c.J&&l(c.t,[c.q.m(c.r,"loading")]),E(c,"loading"),d=b.timeout,e=0;e<a.w.length;e++){var f=a.w[e];f.supportsConfiguredBrowser()&&(f.load(e==a.w.length-1,c,a.aa,d,a.ja),f.performOptionalActions(window))}else D(c);a.w=[]}}
var bb=(new oa(navigator.userAgent,document)).parse(),cb=new fa(window);window.Typekit||(window.Typekit={});if(!window.Typekit.load){var db=window.Typekit.config||{},eb=null;db.k&&(eb=new L(db.k));var V=new Za(eb,cb,bb,document.documentElement);window.Typekit.load=function(){V.load.apply(V,arguments)};window.Typekit.addKit=function(){V.ya.apply(V,arguments)}}var fb,gb=null,W,X,J=window.Typekit.config||{};J.p&&(gb=new L(J.p));X=new U(cb);X.oa=new function(){this.ta=gb};W=new Ma;W.na=!J.si;W.V=!J.st;
W.K=!J.sa;W.xa=!J.sw;W.ha=!J.sb;X.ia=W;J.f&&(fb=new L(J.f),X.Z=fb);var K;if(J.fn)for(K=0;K<J.fn.length;K+=2)X.v.push(new Ha(J.fn[K],J.fn[K+1]));if(J.c)for(K=0;K<J.c.length;K+=2)X.R.push(new Ca);X.e=bb;var Y;a:{var hb=X.e,ib=new Ma,jb=X.ia||ib,Z;for(Z in R){var $=R[Z];if(S[$]&&S[$](hb,jb)){Y=$;break a}}for(Z in R)if($=R[Z],S[$]&&S[$](hb,ib)){Y="x";break a}Y="k"}X.u=Y;window.Typekit.addKit(X);if(window.WebFont)try{window.Typekit.load()}catch(kb){};
})(this,document);
try{Typekit.load();}catch(e){};
