import{_ as u,f as v}from"./chunks/style.4584ed3f.js";import{o,c as l,b as t,d as p,t as r,n as m,v as b,x as f,F as g,m as S,p as V,l as w,h as c,a as O,u as I,e as T}from"./app.59ba4b6e.js";const $=e=>(V("data-v-4bd3a125"),e=e(),w(),e),k={class:"select-container",ref:"select"},q=$(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{fill:"gray",d:"M6.7 14.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 8.425q.2 0 .388.075t.312.2l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275Z"})],-1)),y=[q],C={class:"select-options"},N=["onClick"];function P(e,s,i,h,d,n){return o(),l("div",k,[t("div",{class:"select-header",onClick:s[0]||(s[0]=(...a)=>e.toggleOptions&&e.toggleOptions(...a))},[p(r(e.selectedOption.label)+" ",1),t("div",{class:m(["icon",{"icon-up":e.isOptionsVisible,"icon-down":!e.isOptionsVisible}])},y,2)]),b(t("ul",C,[(o(!0),l(g,null,S(e.options,(a,_)=>(o(),l("li",{key:a.value,onClick:E=>e.selectOption(_)},r(a.label),9,N))),128))],512),[[f,e.isOptionsVisible]])],512)}const x=u(v,[["render",P],["__scopeId","data-v-4bd3a125"]]),A=t("h1",{id:"select-选择器",tabindex:"-1"},[p("Select 选择器 "),t("a",{class:"header-anchor",href:"#select-选择器","aria-hidden":"true"},"#")],-1),B=T("",3),j=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"component/select.md"}'),D={name:"component/select.md"},z=Object.assign(D,{setup(e){const s=c([{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}]),i=c("");return(h,d)=>(o(),l("div",null,[A,O(I(x),{style:{margin:"60px"},options:s.value,modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=n=>i.value=n)},null,8,["options","modelValue"]),B]))}});export{j as __pageData,z as default};
