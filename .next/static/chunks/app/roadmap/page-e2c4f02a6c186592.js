(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6943],{8917:function(e,s,t){Promise.resolve().then(t.bind(t,8829))},5156:function(e,s,t){"use strict";var a=t(7437),r=t(2265);s.default=()=>{let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var s,t;let a=null===(s=e.current)||void 0===s?void 0:s.querySelector("path");if(!a)return;let r=a.getTotalLength();a.style.transition="none",a.style.strokeDasharray="".concat(r," ").concat(r),a.style.strokeDashoffset=r,a.getBoundingClientRect(),a.style.transition="stroke-dashoffset 10ms linear";let n=()=>{let s=window.pageYOffset||document.documentElement.scrollTop,t=r-s*r/(document.documentElement.scrollHeight-document.documentElement.clientHeight);a.style.strokeDashoffset=t;let n=e.current;n&&(s>50?n.classList.add("rn-backto-top-active"):n.classList.remove("rn-backto-top-active"))};return n(),window.addEventListener("scroll",n),null===(t=e.current)||void 0===t||t.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),()=>{window.removeEventListener("scroll",n)}},[]),(0,a.jsx)("div",{className:"rn-progress-parent",ref:e,children:(0,a.jsx)("svg",{className:"rn-back-circle svg-inner",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,a.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})}},8829:function(e,s,t){"use strict";t.d(s,{default:function(){return b}});var a=t(7437),r=t(4272),n=t(9479),i=t(8355),l=t(4962),o=t(9237),c=t(2265),d=t(5078),u=t.n(d),h=JSON.parse('{"roadmap":[{"heading":"Define the problem","date":"25 APR, 2024","isCheck":true,"isLoading":false,"isBorader":true,"title":"Tacotron and Tacotron","desc":"It seems like your question is quite broad, and I\'m not sure which specific problem or context you\'re referring to.","list":[{"desc":"Around 2013, the use of deep learning, especially transformer architectures, revolutionized NLP."},{"desc":"These models often use recurrent neural networks (RNNs), LSTM networks, or transformer architectures."}]},{"heading":"Train the chatbot","date":"25 APR, 2024","isCheck":true,"isLoading":false,"isBorader":true,"title":"Choose a Platform","desc":"Clearly define the purpose of your chatbot. Determine if it will provide.","list":[{"desc":"Around 2013, the use of deep learning, especially transformer architectures"}]},{"heading":"Build the app","date":"25 APR, 2024","isCheck":false,"isLoading":true,"isBorader":true,"title":"","desc":"Research similar apps to understand market trends and identify opportunities."},{"heading":"Launch the app","date":"25 APR, 2024","isCheck":false,"isLoading":true,"isBorader":true,"title":"","desc":"Based on user feedback and insights, plan regular updates to enhance features, fix bugs, and introduce new functionalities."},{"heading":"Update the app","date":"25 APR, 2024","isCheck":false,"isLoading":true,"isBorader":true,"title":"","desc":"Bug Fixes Address critical bugs and issues reported by users"},{"heading":"Train the chatbot","date":"25 APR, 2024","isCheck":false,"isLoading":false,"isBorader":true,"title":"","desc":"If using machine learning, choose or build a suitable natural language processing (NLP) model. Popular choices."},{"heading":"Collect and Label","date":"25 APR, 2024","isCheck":false,"isLoading":false,"isBorader":true,"title":"","desc":"User Inputs Gather a diverse set of user inputs that your chatbot is likely to encounter."},{"heading":"Add more features","date":"25 APR, 2024","isCheck":false,"isLoading":false,"isBorader":false,"title":"","desc":"Enable the chatbot to handle and respond to multimedia inputs, such as images, videos, or audio clips."}]}'),m=()=>((0,c.useEffect)(()=>{u()()},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"roadmap-section rainbow-section-gap-big rainbow-section-gapBottom",children:(0,a.jsx)("div",{className:"container",children:h&&h.roadmap.map((e,s)=>(0,a.jsxs)("div",{className:"row changelog_info",id:"v120",children:[(0,a.jsx)("div",{className:"col-lg-3 changelog_date",children:(0,a.jsxs)("div",{className:"c_date",children:[(0,a.jsxs)("h6",{children:[e.heading," "]}),(0,a.jsx)("p",{children:e.date})]})}),(0,a.jsx)("div",{className:"col-lg-2",children:(0,a.jsxs)("div",{className:"version_info",children:[e.isCheck?(0,a.jsx)("div",{className:"c_version",children:(0,a.jsx)("i",{className:"fa-duotone fa-check"})}):e.isLoading?(0,a.jsx)("div",{className:"c_version bg-yellow",children:(0,a.jsx)("i",{className:"fa-duotone fa-loader"})}):(0,a.jsx)("div",{className:"c_version bg-info",children:(0,a.jsx)("i",{className:"fa-regular fa-message-lines"})}),e.isBorader?(0,a.jsx)("div",{className:"line bottom_half"}):""]})}),(0,a.jsx)("div",{className:"col-lg-3",children:(0,a.jsxs)("div",{className:"changelog_content",children:[(0,a.jsx)("p",{className:"text",children:e.desc}),(0,a.jsx)("p",{className:"title",children:e.title}),(0,a.jsx)("ul",{className:"content-list",children:e.list&&e.list.map((e,s)=>(0,a.jsx)("li",{children:e.desc},s))})]})})]},s))})})})),f=t(5156),p=t(7290),g=t(2706),b=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("main",{className:"page-wrapper",children:(0,a.jsxs)(r.ZP,{children:[(0,a.jsx)(p.Z,{}),(0,a.jsx)(n.Z,{headerTransparent:"header-transparent",headerSticky:"header-sticky",btnClass:"rainbow-gradient-btn"}),(0,a.jsx)(g.Z,{}),(0,a.jsx)(o.Z,{title:"Roadmap",text:"Roadmap"}),(0,a.jsx)(m,{}),(0,a.jsx)(f.default,{}),(0,a.jsx)(i.Z,{}),(0,a.jsx)(l.Z,{})]})})})},9237:function(e,s,t){"use strict";var a=t(7437),r=t(6648),n=t(7138);t(2265);var i=t(2664),l=t(6293),o=t(4272);s.Z=e=>{let{title:s,text:t}=e,{isLightTheme:c}=(0,o.bp)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"main-content",children:[(0,a.jsx)("div",{className:"breadcrumb-area breadcarumb-style1 pt--180 pb--60",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"breadcrumb-inner text-center",children:[(0,a.jsx)("h1",{className:"title theme-gradient h2",children:s}),(0,a.jsxs)("ul",{className:"page-list",children:[(0,a.jsx)("li",{className:"rainbow-breadcrumb-item",children:(0,a.jsx)(n.default,{href:"/",children:"Home"})}),(0,a.jsx)("li",{className:"rainbow-breadcrumb-item active",children:t})]})]})})})})}),(0,a.jsx)("div",{className:"chatenai-separator",children:(0,a.jsx)(r.default,{className:"w-100 ".concat(c?"separator-dark":"separator-light"),src:c?i.Z:l.Z,alt:"separator"})})]})})}},5078:function(e){var s;s=function(){return function(e){function s(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,s),r.l=!0,r.exports}var t={};return s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},s.p="dist/",s(s.s=0)}([function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};t(1);var r={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",selector:"[data-sal]",once:!0,disabled:!1},n=[],i=null,l=function(){document.body.classList.remove(r.disabledClassName)},o=function(){document.body.classList.add(r.disabledClassName)},c=function(e,s){e.forEach(function(e){e.intersectionRatio>=r.threshold?(e.target.classList.add(r.animateClassName),r.once&&s.unobserve(e.target)):r.once||e.target.classList.remove(r.animateClassName)})},d=function(){o(),i.disconnect(),i=null},u=function(){l(),i=new IntersectionObserver(c,{rootMargin:r.rootMargin,threshold:r.threshold}),(n=[].filter.call(document.querySelectorAll(r.selector),function(e){return r.animateClassName,!e.classList.contains(r.animateClassName)})).forEach(function(e){return i.observe(e)})};s.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;if(e!==r&&(r=a({},r,e)),!window.IntersectionObserver)throw o(),Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");return r.disabled||"function"==typeof r.disabled&&r.disabled()?o():u(),{elements:n,disable:d,enable:u}}},function(e,s){}]).default},e.exports=s()}},function(e){e.O(0,[998,5288,8124,9750,2971,7023,1744],function(){return e(e.s=8917)}),_N_E=e.O()}]);