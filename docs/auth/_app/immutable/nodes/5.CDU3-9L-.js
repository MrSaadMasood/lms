import{a as M,g as P,f as b}from"../chunks/pages.C1yzUioW.js";import{e as S}from"../chunks/index.D1XTZfZp.js";import{s as T,b as u,h as w,d as m,c as d,l as c}from"../chunks/scheduler.BZkyrStM.js";import{S as N,i as O,c as _,a as g,m as $,t as h,b as v,d as y}from"../chunks/index.BLFDKRva.js";import{F as j,Q as B}from"../chunks/FieldDetails.D3WwSHra.js";import{P as F}from"../chunks/PreviousNextPage.DID6LrID.js";const Q=M(),q=({params:n,url:a})=>{const o=P(n.mutation),t=b(a.pathname);if(!o||!t)throw S(404,`Mutation ${n.mutation} not found.`);return{field:o,page:t}},U=Object.freeze(Object.defineProperty({__proto__:null,load:q,prerender:Q},Symbol.toStringTag,{value:"Module"}));function x(n){let a,o,t,r,i,f;return document.title=a="Mutation - "+n[0].field.name,t=new j({props:{field:n[0].field,type:B.MUTATION}}),i=new F({props:{page:n[0].page}}),{c(){o=u(),_(t.$$.fragment),r=u(),_(i.$$.fragment)},l(e){w("svelte-1ha51ns",document.head).forEach(m),o=d(e),g(t.$$.fragment,e),r=d(e),g(i.$$.fragment,e)},m(e,s){c(e,o,s),$(t,e,s),c(e,r,s),$(i,e,s),f=!0},p(e,[s]){(!f||s&1)&&a!==(a="Mutation - "+e[0].field.name)&&(document.title=a);const l={};s&1&&(l.field=e[0].field),t.$set(l);const p={};s&1&&(p.page=e[0].page),i.$set(p)},i(e){f||(h(t.$$.fragment,e),h(i.$$.fragment,e),f=!0)},o(e){v(t.$$.fragment,e),v(i.$$.fragment,e),f=!1},d(e){e&&(m(o),m(r)),y(t,e),y(i,e)}}}function z(n,a,o){let{data:t}=a;return n.$$set=r=>{"data"in r&&o(0,t=r.data)},[t]}class k extends N{constructor(a){super(),O(this,a,z,x,T,{data:0})}}export{k as component,U as universal};
