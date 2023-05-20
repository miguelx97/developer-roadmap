import{_ as x,h as a,p}from"./hooks.module.9ee1d4a4.js";import{a as k}from"./http.1ee0e3a2.js";import{a as I,u as A}from"./use-outside-click.bdc850c8.js";import{i as _}from"./jwt.2bcbdb7f.js";import{o}from"./jsxRuntime.module.8b00cb04.js";import{k as C}from"./preact.module.f1575aff.js";const N="/_astro/best-practices.a7417d1a.svg",R="/_astro/home.6aeb6e8b.svg",T="/_astro/user.851cf45a.svg",G="/_astro/roadmap.04fdf777.svg",L="/_astro/guide.6aa9fac6.svg",S="/_astro/video.e6296e1b.svg",i=[{url:"/",title:"Home",group:"Pages",icon:R},{url:"/settings/update-profile",title:"Account",group:"Pages",icon:T,isProtected:!0},{url:"/roadmaps",title:"Roadmaps",group:"Pages",icon:G},{url:"/best-practices",title:"Best Practices",group:"Pages",icon:N},{url:"/guides",title:"Guides",group:"Pages",icon:L},{url:"/videos",title:"Videos",group:"Pages",icon:S}];function h(n){const c=_();return!n.isProtected||c}function B(){const n=x(null),c=x(null),[g,l]=a(!1),[v,P]=a([]),[r,w]=a(i),[u,y]=a(""),[s,d]=a(0);I("mod_k",()=>{l(!0)}),A(c,()=>{l(!1)}),p(()=>{function e(t){l(!0)}return window.addEventListener("command.k",e),()=>{window.removeEventListener("command.k",e)}},[]),p(()=>{!g||!n.current||n.current.focus()},[g]);async function b(){if(v.length>0)return v;const{error:e,response:t}=await k("/pages.json");return t?(P([...i,...t].filter(h)),t):i.filter(h)}return p(()=>{if(!u){w(i.filter(h));return}const e=u.trim().toLowerCase();b().then((t=i)=>{const f=t.filter(m=>m.title.toLowerCase().indexOf(e)!==-1).slice(0,10);d(0),w(f)})},[u]),g?o("div",{className:"fixed left-0 right-0 top-0 z-50 flex h-full justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:o("div",{className:"relative top-0 h-full w-full max-w-lg p-2 sm:top-20 md:h-auto",children:o("div",{className:"relative rounded-lg bg-white shadow",ref:c,children:[o("input",{ref:n,autofocus:!0,type:"text",value:u,className:"w-full rounded-t-md border-b p-4 text-sm focus:bg-gray-50 focus:outline-0",placeholder:"Search roadmaps, guides or pages ..",autocomplete:"off",onInput:e=>{const t=e.target.value.trim();y(t)},onKeyDown:e=>{if(e.key==="ArrowDown"){const t=s<r.length-1;d(t?s+1:0)}else if(e.key==="ArrowUp"){const t=s>0;d(t?s-1:r.length-1)}else if(e.key==="Tab")e.preventDefault();else if(e.key==="Escape")l(!1);else if(e.key==="Enter"){const t=r[s];t&&(window.location.href=t.url)}}}),o("div",{class:"px-2 py-2",children:o("div",{className:"flex flex-col",children:[r.length===0&&o("div",{class:"p-5 text-center text-sm text-gray-400",children:"No results found"}),r.map((e,t)=>{const f=r[t-1],m=f&&f.group!==e.group;return o(C,{children:[m&&o("div",{class:"border-b border-gray-100"}),o("a",{class:`flex w-full items-center rounded p-2 text-sm ${t===s?"bg-gray-100":""}`,onMouseOver:()=>d(t),href:e.url,children:[!e.icon&&o("span",{class:"mr-2 text-gray-400",children:e.group}),e.icon&&o("img",{src:e.icon,class:"mr-2 h-4 w-4"}),e.title]})]})})]})})]})})}):null}export{B as CommandMenu};
