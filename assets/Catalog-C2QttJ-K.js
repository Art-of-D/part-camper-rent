import{r as l,u as s,g as f,a as F,b as j,c as N,d as L,e as E,f as k,h as C,i as M,j as t,C as y,v as T,k as W,l as b,m as B}from"./index-Ql5jfV9c.js";const D="_textNone_3vyfh_1",I="_catalogWrapper_3vyfh_8",S="_catalogList_3vyfh_14",A="_loadMoreButton_3vyfh_20",o={textNone:D,catalogWrapper:I,catalogList:S,loadMoreButton:A},V=()=>{const[i,u]=l.useState(4),r=s(f),d=s(F),g=s(j),p=s(N),h=s(L),v=s(E),e=k();l.useEffect(()=>{e(C())},[e]),l.useEffect(()=>{e(M())},[e]);const x=()=>{u(a=>a+4)},m=a=>{const n=W(r,a);e(b(n))},_=a=>{e(B(a))};return t.jsxs(t.Fragment,{children:[r.length===0&&!d&&!h&&t.jsx("p",{className:o.textNone,children:"There is no campers for this order"}),(g||v)&&t.jsx("p",{children:g}),!d&&!h&&t.jsxs("div",{className:o.catalogWrapper,children:[t.jsx("ul",{className:o.catalogList,children:r.slice(0,i).map(a=>{const n=p.some(c=>(c==null?void 0:c._id)===a._id);return t.jsx(y,{camper:a,favorite:n,handleAddFavorite:m,handleDeleteFavorite:_},T())})}),i<r.length&&t.jsx("div",{className:o.loadMoreWrapper,children:t.jsx("button",{onClick:x,className:o.loadMoreButton,children:"Load more"})})]})]})};export{V as default};
