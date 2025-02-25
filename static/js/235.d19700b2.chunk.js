"use strict";(self.webpackChunkdancing_dragons=self.webpackChunkdancing_dragons||[]).push([[235],{235:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});var a=t(43),n=t(344),r=t(579);function l(e){let{className:s="",children:t,...a}=e;return(0,r.jsx)("div",{className:`bg-gray-800/50 rounded-xl border border-gray-700 ${s}`,...a,children:t})}function i(e){let{className:s="",children:t,...a}=e;return(0,r.jsx)("div",{className:`p-6 ${s}`,...a,children:t})}function o(e){let{className:s="",children:t,...a}=e;return(0,r.jsx)("h3",{className:`text-lg font-semibold text-orange-300 ${s}`,...a,children:t})}function c(e){let{className:s="",children:t,...a}=e;return(0,r.jsx)("div",{className:`p-6 pt-0 ${s}`,...a,children:t})}const d=function(){const[e,s]=(0,a.useState)(!1),t=function(e){const[s,t]=(0,a.useState)((()=>window.matchMedia(e).matches));return(0,a.useEffect)((()=>{const s=window.matchMedia(e),a=e=>t(e.matches);return s.addEventListener?(s.addEventListener("change",a),()=>s.removeEventListener("change",a)):(s.addListener(a),()=>s.removeListener(a))}),[e]),s}("(max-width: 768px)");return(0,r.jsxs)("section",{className:`min-h-screen bg-gray-900 ${t?"pt-20":"pt-32"} px-4`,children:[(0,r.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,r.jsxs)("div",{className:"text-center mb-16",children:[(0,r.jsx)("h1",{className:"text-3xl md:text-4xl font-bold mb-6 text-orange-300",children:"Upcoming Events"}),(0,r.jsx)("p",{className:"text-lg md:text-xl text-gray-300 max-w-2xl mx-auto",children:"Join us for community adventures, movement practices, and growth experiences."})]}),(0,r.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:(0,r.jsxs)(l,{className:"col-span-full",children:[(0,r.jsx)(i,{children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("i",{className:"fas fa-calendar text-4xl text-orange-500 mb-4"}),(0,r.jsx)(o,{children:"Join Our Private Events"})]})}),(0,r.jsxs)(c,{children:[(0,r.jsx)("p",{className:"text-gray-300 mb-6 text-center",children:"Our events are shared privately through Signal groups to ensure privacy and safety. Connect with us to access upcoming adventures."}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("button",{onClick:()=>s(!0),className:"bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full  text-white font-semibold transition-all duration-300  hover:-translate-y-1 inline-flex items-center gap-2 active:transform active:scale-95",children:[(0,r.jsx)("i",{className:"fas fa-user-plus"}),"Get Connected"]})})]})]})}),(0,r.jsx)("div",{className:"mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:"fa-shield-alt",title:"End-to-End Encryption",desc:"Secure communication"},{icon:"fa-user-secret",title:"Private Groups",desc:"Vetted members only"},{icon:"fa-location-dot",title:"Location Privacy",desc:"Secure meeting points"},{icon:"fa-database",title:"Zero Storage",desc:"No personal data kept"}].map(((e,s)=>(0,r.jsxs)("div",{className:"bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-orange-500/30 transition-all duration-300 transform hover:-translate-y-1",children:[(0,r.jsx)("div",{className:"text-orange-500 text-2xl mb-4",children:(0,r.jsx)("i",{className:`fas ${e.icon}`})}),(0,r.jsx)("h3",{className:"text-lg font-semibold mb-2 text-orange-300",children:e.title}),(0,r.jsx)("p",{className:"text-gray-400",children:e.desc})]},s)))})]}),(0,r.jsx)(n.C,{isOpen:e,onClose:()=>s(!1)})]})}},344:(e,s,t)=>{t.d(s,{C:()=>l});var a=t(43),n=t(579);function r(e){let{isOpen:s,onClose:t,title:r,children:l,size:i="md"}=e;const o=(0,a.useRef)(null);if((0,a.useEffect)((()=>(s?(document.body.style.overflow="hidden",setTimeout((()=>{o.current&&o.current.scrollIntoView({behavior:"smooth",block:"center"})}),100)):document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"})),[s]),(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.key&&s&&t()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[s,t]),!s)return null;return(0,n.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto",children:[(0,n.jsx)("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm",onClick:t}),(0,n.jsxs)("div",{ref:o,className:`${{sm:"max-w-md",md:"max-w-xl",lg:"max-w-2xl",xl:"max-w-4xl"}[i]} w-full max-h-[90vh] overflow-y-auto \n                    bg-gray-900 rounded-xl shadow-2xl border border-gray-700 \n                    z-10 transform transition-all duration-300 relative`,children:[r&&(0,n.jsxs)("div",{className:"sticky top-0 flex items-center justify-between p-6  border-b border-gray-700 bg-gray-900/95 backdrop-blur-sm",children:[(0,n.jsx)("h2",{className:"text-xl font-bold text-orange-300",children:r}),(0,n.jsx)("button",{onClick:t,className:"text-gray-400 hover:text-white transition-colors p-2","aria-label":"Close modal",children:(0,n.jsx)("i",{className:"fas fa-times text-xl"})})]}),(0,n.jsx)("div",{className:"p-6 relative",children:l}),!r&&(0,n.jsx)("button",{onClick:t,className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2  bg-gray-800/50 rounded-full hover:bg-gray-700/50","aria-label":"Close modal",children:(0,n.jsx)("i",{className:"fas fa-times"})})]})]})}function l(e){let{isOpen:s,onClose:t}=e;return(0,a.useEffect)((()=>{s&&window.scrollTo({top:0,behavior:"smooth"})}),[s]),(0,n.jsx)(r,{isOpen:s,onClose:t,title:"Join the Fun!",size:"md",children:(0,n.jsxs)("div",{className:"relative space-y-6",children:[(0,n.jsxs)("div",{className:"bg-gray-800/50 rounded-xl p-6 space-y-4",children:[(0,n.jsxs)("div",{className:"flex items-center gap-4 text-orange-300",children:[(0,n.jsx)("i",{className:"fas fa-sparkles text-2xl"}),(0,n.jsx)("h3",{className:"text-xl font-semibold",children:"Ready for Adventure?"})]}),(0,n.jsx)("p",{className:"text-gray-300",children:"Connect with us on Signal to join festival crews, adventure squads, and an amazing community of women who love to celebrate life!"})]}),(0,n.jsxs)("div",{className:"bg-gray-800/50 rounded-xl p-6 space-y-4",children:[(0,n.jsx)("h4",{className:"font-semibold text-orange-300",children:"Here's what happens next:"}),(0,n.jsxs)("ol",{className:"space-y-3 text-gray-300",children:[(0,n.jsxs)("li",{className:"flex items-start gap-3",children:[(0,n.jsx)("span",{className:"text-orange-500 mt-1",children:"1."}),(0,n.jsx)("span",{children:"Quick hello on Signal - let's get to know each other!"})]}),(0,n.jsxs)("li",{className:"flex items-start gap-3",children:[(0,n.jsx)("span",{className:"text-orange-500 mt-1",children:"2."}),(0,n.jsx)("span",{children:"Share what you love - festivals, hiking, or both?"})]}),(0,n.jsxs)("li",{className:"flex items-start gap-3",children:[(0,n.jsx)("span",{className:"text-orange-500 mt-1",children:"3."}),(0,n.jsx)("span",{children:"Get invited to the groups that match your vibe"})]})]})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,n.jsxs)("a",{href:"https://signal.me/#eu/--flkIBHugKFa1TKXL56Kmeaedgfnriw96sBgiKuTB1izx9pLetA-K8vts4rIN90",target:"_blank",rel:"noopener noreferrer",className:"w-full bg-orange-500 hover:bg-orange-600 text-white  py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-102",onClick:()=>{setTimeout(t,100)},children:[(0,n.jsx)("i",{className:"fas fa-sparkles"}),"Let's Connect!"]}),(0,n.jsx)("button",{onClick:t,className:"w-full border border-gray-700 text-gray-300 hover:text-white py-4 rounded-xl text-lg font-semibold transition-colors duration-300",children:"Maybe Later"})]}),(0,n.jsxs)("p",{className:"text-sm text-gray-400 text-center",children:[(0,n.jsx)("i",{className:"fas fa-heart text-orange-500 mr-2"}),"Good Vibes & Great Adventures Await"]})]})})}}}]);
//# sourceMappingURL=235.d19700b2.chunk.js.map