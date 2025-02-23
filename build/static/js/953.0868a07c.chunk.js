"use strict";(self.webpackChunkdancing_dragons=self.webpackChunkdancing_dragons||[]).push([[953],{953:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var a=s(43),n=s(522),i=s(132),l=s(29);setInterval((function(){for(let t=0;t<localStorage.length;t++){const s=localStorage.key(t);if(s.startsWith("event_"))try{const{expiration:e}=JSON.parse(localStorage.getItem(s));new Date(e)<new Date&&localStorage.removeItem(s)}catch(e){localStorage.removeItem(s)}}}),36e5);var r=s(579);function c(e){let{current:t,max:s,waitlist:a=0}=e;const n=t/s*100;return(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between text-sm",children:[(0,r.jsx)("span",{className:"text-gray-400",children:"Participants"}),(0,r.jsxs)("span",{className:"text-white",children:[t," / ",s]})]}),(0,r.jsx)("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:(0,r.jsx)("div",{className:"h-full rounded-full transition-all duration-500 "+(n>=90?"bg-orange-500":n>=70?"bg-orange-400":"bg-orange-300"),style:{width:`${n}%`}})}),a>0&&(0,r.jsxs)("div",{className:"text-sm text-orange-400",children:[a," on waitlist"]})]})}function o(e){let{event:t}=e;const s=new Date(t.date),a=new Date,n=Math.ceil((s-a)/864e5);return(0,r.jsx)("div",{className:"space-y-4",children:(0,r.jsx)(i.Zp,{children:(0,r.jsxs)(i.Wu,{children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)("div",{className:"bg-gray-800 p-3 rounded text-orange-500",children:(0,r.jsx)("i",{className:"fas fa-clock text-xl"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-white",children:s.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}),(0,r.jsxs)("div",{className:"text-gray-400",children:[t.time," (",t.duration," minutes)"]})]})]}),n>0&&(0,r.jsxs)("div",{className:"mt-3 text-sm text-orange-300",children:[n," days until event"]})]})})})}function d(e){let{requirements:t}=e;const s=t.split("\n").filter(Boolean);return(0,r.jsx)("div",{className:"space-y-2",children:s.map(((e,t)=>(0,r.jsxs)("div",{className:"flex items-start gap-3 text-gray-300",children:[(0,r.jsx)("i",{className:"fas fa-check-circle text-orange-500 mt-1"}),(0,r.jsx)("span",{children:e})]},t)))})}const x=function(e){var t;let{isOpen:s,onClose:x,event:m}=e;const[h,g]=(0,a.useState)((()=>function(e,t){const s=localStorage.getItem(`event_${t}`);if(!s)return!1;try{const{token:a,expiration:n}=JSON.parse(s);return new Date(n)<new Date?(localStorage.removeItem(`event_${t}`),!1):e===a}catch(a){return!1}}(localStorage.getItem(`event_${m.id}_token`),m.id)));return(0,r.jsx)(n.a,{isOpen:s,onClose:x,title:m.title,size:"lg",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsx)(o,{event:m}),(0,r.jsx)(c,{current:m.capacity-m.spotsLeft,max:m.capacity,waitlist:(null===(t=m.waitlist)||void 0===t?void 0:t.length)||0}),(0,r.jsx)(i.Zp,{children:(0,r.jsxs)(i.Wu,{className:"space-y-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold text-orange-300",children:"Event Details"}),(0,r.jsx)("p",{className:"text-gray-300",children:m.description}),m.requirements&&(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("h4",{className:"font-medium text-white mb-3",children:"Requirements"}),(0,r.jsx)(d,{requirements:m.requirements})]})]})})]}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsx)(l.LocationDetailsCard,{event:m,isParticipant:h}),(0,r.jsx)("div",{className:"flex gap-4",children:h?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{className:"flex-1 bg-orange-500 hover:bg-orange-600 text-white  px-6 py-3 rounded-xl transition-colors",children:"View Signal Group"}),(0,r.jsx)("button",{className:"px-6 py-3 border border-orange-500 text-orange-500  rounded-xl hover:bg-orange-500/10 transition-colors",children:"Cancel RSVP"})]}):(0,r.jsx)("button",{className:"flex-1 bg-orange-500 hover:bg-orange-600 text-white  px-6 py-3 rounded-xl transition-colors",children:m.spotsLeft>0?"RSVP Now":"Join Waitlist"})}),(0,r.jsxs)("div",{className:"text-sm text-gray-400",children:[(0,r.jsxs)("p",{className:"flex items-center gap-2",children:[(0,r.jsx)("i",{className:"fas fa-shield-alt"}),"Privacy protected:"]}),(0,r.jsxs)("ul",{className:"mt-2 space-y-1 pl-6 list-disc",children:[(0,r.jsx)("li",{children:"Location details shared via Signal"}),(0,r.jsx)("li",{children:"Anonymous participation"}),(0,r.jsx)("li",{children:"No personal data stored"}),(0,r.jsx)("li",{children:"Auto-delete after event"})]})]})]})]})})}}}]);
//# sourceMappingURL=953.0868a07c.chunk.js.map