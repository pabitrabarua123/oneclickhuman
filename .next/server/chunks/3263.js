"use strict";exports.id=3263,exports.ids=[3263],exports.modules={26466:(e,a,s)=>{s.d(a,{Z:()=>i});var l=s(10326);s(17577);var t=s(77097);let i=()=>(0,l.jsxs)(l.Fragment,{children:[l.jsx(t.u,{id:"my-tooltip",className:"custom-tooltip tooltip-inner"}),(0,l.jsxs)("form",{className:"new-chat-form border-gradient",children:[l.jsx("textarea",{rows:"1",placeholder:"Send a message..."}),l.jsx("div",{className:"left-icons",children:l.jsx("div",{title:"ChatenAI",className:"form-icon icon-gpt",children:l.jsx("i",{className:"feather-aperture"})})}),(0,l.jsxs)("div",{className:"right-icons",children:[(0,l.jsxs)("div",{className:"form-icon icon-plus","data-tooltip-id":"my-tooltip","data-tooltip-content":"Choose File",children:[l.jsx("input",{type:"file",className:"input-file",name:"myfile",multiple:!0}),l.jsx("i",{className:"feather-plus-circle"})]}),l.jsx("a",{className:"form-icon icon-mic","data-tooltip-id":"my-tooltip","data-tooltip-content":"Voice Search",children:l.jsx("i",{className:"feather-mic"})}),l.jsx("a",{className:"form-icon icon-send","data-tooltip-id":"my-tooltip","data-tooltip-content":"Send message",children:l.jsx("i",{className:"feather-send"})})]})]})]})},16186:(e,a,s)=>{s.d(a,{Z:()=>o});var l=s(10326),t=s(17577),i=s(99191),d=s.n(i),r=s(19681),c=s(90434);let o=()=>{let[e,a]=(0,t.useState)([]);return(0,t.useEffect)(()=>{d()()},[]),(0,l.jsxs)(l.Fragment,{children:[l.jsx("div",{id:"newchatModal",className:"modal rbt-modal-box copy-modal fade",tabIndex:"-1",children:l.jsx("div",{className:"modal-dialog modal-dialog-centered",children:(0,l.jsxs)("div",{className:"modal-content wrapper top-flashlight light-xl",children:[l.jsx("div",{className:"section-title text-center mb--30 sal-animate","data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"150",children:l.jsx("h3",{className:"title mb--0 w-600",children:"Unlock the power of AI"})}),l.jsx("div",{className:"genarator-section",children:l.jsx("ul",{className:"genarator-card-group",children:l.jsx(r.Z,{})})}),l.jsx("button",{className:"close-button","data-bs-dismiss":"modal",children:l.jsx("i",{className:"feather-x"})})]})})}),l.jsx("div",{id:"likeModal",className:"modal rbt-modal-box like-modal fade",tabIndex:"-1",children:l.jsx("div",{className:"modal-dialog modal-dialog-centered",children:(0,l.jsxs)("div",{className:"modal-content wrapper top-flashlight leftside light-xl",children:[l.jsx("h5",{className:"title",children:"Provide additional feedback"}),l.jsx("div",{className:"chat-form",children:l.jsx("div",{className:"border-gradient text-form",children:l.jsx("textarea",{rows:"6",placeholder:"Send a message..."})})}),l.jsx("div",{className:"bottom-btn mt--20",children:l.jsx(c.default,{className:"btn-default btn-small round",href:"#",children:"Send Feedback"})}),l.jsx("button",{className:"close-button","data-bs-dismiss":"modal",children:l.jsx("i",{className:"feather-x"})})]})})}),l.jsx("div",{id:"dislikeModal",className:"modal rbt-modal-box dislike-modal fade",tabIndex:"-1",children:l.jsx("div",{className:"modal-dialog modal-dialog-centered",children:(0,l.jsxs)("div",{className:"modal-content wrapper top-flashlight leftside light-xl",children:[l.jsx("h5",{className:"title",children:"Why do you like this response?"}),(0,l.jsxs)("select",{className:"form-select",multiple:!0,"aria-label":"multiple select example",value:e,onChange:e=>{a(Array.from(e.target.selectedOptions,e=>e.value))},children:[l.jsx("option",{value:"1",children:"Irrelevant"}),l.jsx("option",{value:"2",children:"Offensive"}),l.jsx("option",{value:"3",children:"Not Correct"})]}),(0,l.jsxs)("div",{className:"chat-form",children:[l.jsx("h6",{className:"title",children:"Provide your feedback"}),l.jsx("div",{className:"border-gradient text-form",children:l.jsx("textarea",{rows:"6",placeholder:"Send a message..."})})]}),l.jsx("div",{className:"bottom-btn mt--20",children:l.jsx(c.default,{className:"btn-default btn-small round",href:"#",children:"Send Feedback"})}),l.jsx("button",{className:"close-button","data-bs-dismiss":"modal",children:l.jsx("i",{className:"feather-x"})})]})})}),l.jsx("div",{id:"shareModal",className:"modal rbt-modal-box share-modal fade",tabIndex:"-1",children:l.jsx("div",{className:"modal-dialog modal-dialog-centered",children:(0,l.jsxs)("div",{className:"modal-content wrapper modal-small top-flashlight leftside light-xl",children:[l.jsx("h5",{className:"title",children:"Share"}),(0,l.jsxs)("ul",{className:"social-icon social-default transparent-with-border mb--20",children:[l.jsx("li",{"data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"200",children:l.jsx(c.default,{href:"https://www.facebook.com/",children:l.jsx("i",{className:"feather-facebook"})})}),l.jsx("li",{"data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"300",children:l.jsx(c.default,{href:"https://www.twitter.com",children:l.jsx("i",{className:"feather-twitter"})})}),l.jsx("li",{"data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"400",children:l.jsx(c.default,{href:"https://www.instagram.com/",children:l.jsx("i",{className:"feather-instagram"})})}),l.jsx("li",{"data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"500",children:l.jsx(c.default,{href:"https://www.linkdin.com/",children:l.jsx("i",{className:"feather-linkedin"})})})]}),l.jsx("div",{className:"chat-form",children:(0,l.jsxs)("div",{className:"border-gradient text-form d-flex align-items-center",children:[l.jsx("input",{type:"text",className:"copy-link-input",defaultValue:"https://www.youtube.com/",readOnly:!0}),l.jsx("button",{className:"btn-default bg-solid-primary",type:"submit",children:"Copy"})]})}),l.jsx("button",{className:"close-button","data-bs-dismiss":"modal",children:l.jsx("i",{className:"feather-x"})})]})})})]})}},19681:(e,a,s)=>{s.d(a,{Z:()=>r});var l=s(10326),t=s(46226),i=s(90434),d=s(75424);let r=()=>l.jsx(l.Fragment,{children:d&&d.leftPanel.map((e,a)=>l.jsx("li",{children:l.jsx(i.default,{href:e.link,className:`genarator-card ${"Coming"===e.badge?"disabled":""}`,children:(0,l.jsxs)("div",{className:"inner","data-bs-dismiss":"modal",children:[(0,l.jsxs)("div",{className:"left-align",children:[l.jsx("div",{className:"img-bar",children:l.jsx(t.default,{src:e.img,width:50,height:50,alt:"AI Generator"})}),l.jsx("h5",{className:"title",children:e.title})]}),l.jsx("div",{className:"right-align",children:""!==e.badge?l.jsx("span",{className:"rainbow-badge-card",children:e.badge}):l.jsx("div",{className:"icon-bar",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right __web-inspector-hide-shortcut__",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})})})]})})},a))})}};