(()=>{var e={};e.id=4966,e.ids=[4966],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},41667:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(12903),s(37764),s(89204),s(41888);var a=s(23191),r=s(88716),n=s(37922),i=s.n(n),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,12903)),"C:\\Users\\91738\\Desktop\\chatenai-nextjs-app-route\\app\\signup\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,37764)),"C:\\Users\\91738\\Desktop\\chatenai-nextjs-app-route\\app\\layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,89204)),"C:\\Users\\91738\\Desktop\\chatenai-nextjs-app-route\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,41888)),"C:\\Users\\91738\\Desktop\\chatenai-nextjs-app-route\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\91738\\Desktop\\chatenai-nextjs-app-route\\app\\signup\\page.js"],u="/signup/page",p={require:s,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},38095:(e,t,s)=>{Promise.resolve().then(s.bind(s,50364))},50364:(e,t,s)=>{"use strict";s.d(t,{default:()=>j});var a=s(10326),r=s(74368),n=s(25889),i=s(19294),o=s(79030),l=s(48531),c=s(78370),d=s(46226),u=s(90434),p=s(17577),h=s(77109),m=s(35047),g=s(99191),x=s.n(g),f=s(96277);let b=()=>{let{isLightTheme:e}=(0,r.bp)();(0,p.useEffect)(()=>{x()(),document.querySelectorAll(".bg-flashlight").forEach(e=>{e.onmousemove=function(t){let s=t.pageX-e.offsetLeft,a=t.pageY-e.offsetTop;e.style.setProperty("--x",s+"px"),e.style.setProperty("--y",a+"px")}})},[]);let[t,s]=(0,p.useState)(""),[n,i]=(0,p.useState)(""),[o,l]=(0,p.useState)(""),[c,g]=(0,p.useState)(""),[b,j]=(0,p.useState)(!1),[v,y]=(0,p.useState)(!1),A=(0,m.useRouter)(),N=async e=>{e.preventDefault(),g(""),o!==n&&g("Password and Confirm Password does not match"),j(!0);let s=await (0,h.signIn)("credentials",{redirect:!1,email:t,password:n,isSignUp:!0});if(s?.error)g(s.error),j(!1);else{let e=await (0,h.getSession)();e?(console.log("Session data:",e),0===e.user.user_id?g("User already exists"):(y(!0),setTimeout(()=>{A.push("/signin")},3e3))):console.log("No session available")}};return a.jsx(a.Fragment,{children:a.jsx("div",{className:"signup-area rainbow-section-gapTop-big","data-black-overlay":"2",children:a.jsx("div",{className:"sign-up-wrapper rainbow-section-gap",children:(0,a.jsxs)("div",{className:"sign-up-box bg-flashlight",children:[a.jsx("div",{className:"signup-box-top top-flashlight light-xl",children:a.jsx(d.default,{className:`${e?"boxed-logo-dark":"boxed-logo-light"}`,src:f.Z,width:476,height:158,alt:"sign-up logo"})}),a.jsx("div",{className:"separator-animated animated-true"}),(0,a.jsxs)("div",{className:"signup-box-bottom",children:[(0,a.jsxs)("div",{className:"signup-box-content",children:[a.jsx("h4",{className:"title",children:"Create Account"}),a.jsx("div",{className:"social-btn-grp"}),(0,a.jsxs)("form",{onSubmit:N,children:[(0,a.jsxs)("div",{className:"input-section mail-section",children:[a.jsx("div",{className:"icon",children:a.jsx("i",{className:"feather-mail"})}),a.jsx("input",{type:"email",placeholder:"Enter email address",value:t,onChange:e=>s(e.target.value)})]}),(0,a.jsxs)("div",{className:"input-section password-section",children:[a.jsx("div",{className:"icon",children:a.jsx("i",{className:"feather-lock"})}),a.jsx("input",{type:"password",placeholder:"Create Password",value:n,onChange:e=>i(e.target.value)})]}),(0,a.jsxs)("div",{className:"input-section password-section",children:[a.jsx("div",{className:"icon",children:a.jsx("i",{className:"feather-lock"})}),a.jsx("input",{type:"password",placeholder:"Confirm Password",value:o,onChange:e=>l(e.target.value)})]}),a.jsx("button",{type:"submit",className:"btn-default",disabled:b,children:b?"Creating account...":"Sign Up"})]}),c&&a.jsx("p",{style:{color:"red"},children:c}),v&&a.jsx("p",{style:{color:"#fff"},children:"Account Created, redirecting to signin..."})]}),a.jsx("div",{className:"signup-box-footer",children:(0,a.jsxs)("div",{className:"bottom-text",children:["Don't have an account?",a.jsx(u.default,{className:"btn-read-more ps-2",href:"/signin",children:a.jsx("span",{children:"Sign In"})})]})})]})]})})})})},j=()=>a.jsx(a.Fragment,{children:a.jsx("main",{className:"page-wrapper",children:(0,a.jsxs)(r.ZP,{children:[a.jsx(i.Z,{}),a.jsx(n.Z,{headerTransparent:"header-transparent",headerSticky:"header-sticky",btnClass:"btn-small round"}),a.jsx(o.Z,{}),a.jsx(b,{}),a.jsx(l.Z,{}),a.jsx(c.Z,{})]})})})},99191:function(e){var t;t=function(){return function(e){function t(a){if(s[a])return s[a].exports;var r=s[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var s={};return t.m=e,t.c=s,t.d=function(e,s,a){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=0)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};s(1);var r={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",selector:"[data-sal]",once:!0,disabled:!1},n=[],i=null,o=function(){document.body.classList.remove(r.disabledClassName)},l=function(){document.body.classList.add(r.disabledClassName)},c=function(e,t){e.forEach(function(e){e.intersectionRatio>=r.threshold?(e.target.classList.add(r.animateClassName),r.once&&t.unobserve(e.target)):r.once||e.target.classList.remove(r.animateClassName)})},d=function(){l(),i.disconnect(),i=null},u=function(){o(),i=new IntersectionObserver(c,{rootMargin:r.rootMargin,threshold:r.threshold}),(n=[].filter.call(document.querySelectorAll(r.selector),function(e){return r.animateClassName,!e.classList.contains(r.animateClassName)})).forEach(function(e){return i.observe(e)})};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;if(e!==r&&(r=a({},r,e)),!window.IntersectionObserver)throw l(),Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");return r.disabled||"function"==typeof r.disabled&&r.disabled()?l():u(),{elements:n,disable:d,enable:u}}},function(e,t){}]).default},e.exports=t()},12903:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>c});var a=s(19510),r=s(68570);let n=(0,r.createProxy)(String.raw`C:\Users\91738\Desktop\chatenai-nextjs-app-route\app\signup\index.js`),{__esModule:i,$$typeof:o}=n;n.default;let l=(0,r.createProxy)(String.raw`C:\Users\91738\Desktop\chatenai-nextjs-app-route\app\signup\index.js#default`),c={title:"SingUp || ChatenAI - AI SaaS Website NEXTJS14 UI Kit",description:"ChatenAI || ChatenAI - AI SaaS Website NEXTJS14 UI Kit"},d=()=>a.jsx(a.Fragment,{children:a.jsx(l,{})})},96277:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});let a={src:"/_next/static/media/boxed-logo.4278eb19.png",height:468,width:1410,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAU0lEQVR42mMQFFYW4lcUlNdVN43yl4tQFdPlElIUElJmEBJXF2HgFHYONoiaMkV/ZrhSEIMgj6SwOoOgsIoQt5yomqmsVaibqJ+mmCG7kIKQkDIAp2MLUQg2w4UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[8948,7055,285,2782,1866],()=>s(41667));module.exports=a})();