import{r as a,u as n,g as x,a as h,b as m,f as _,s as f,d as j,j as t,v}from"./index-CkAxOgN8.js";import{g as C,C as L}from"./CatalogElement-DN-WA39N.js";const N="_textNone_yu2hx_1",S="_catalogWrapper_yu2hx_8",F="_catalogList_yu2hx_15",W="_loadMoreButton_yu2hx_21",s={textNone:N,catalogWrapper:S,catalogList:F,loadMoreButton:W},M=()=>{const[c,d]=a.useState(4),[o,i]=a.useState([]),u=n(x),g=n(h),e=n(C),r=m(),p=()=>{d(l=>l+4)};return a.useEffect(()=>{i(e)},[e]),a.useEffect(()=>{if(u)return i(_(e,g)),()=>{r(f(!1)),r(j(""))}},[u,g,r,e]),t.jsx(t.Fragment,{children:t.jsxs("div",{className:s.catalogWrapper,children:[o.length===0&&t.jsx("p",{className:s.textNone,children:"You don`t have any chosen campers"}),t.jsx("ul",{className:s.catalogList,children:o.slice(0,c).map(l=>t.jsx(L,{camper:l},v()))}),c<o.length&&t.jsx("button",{onClick:p,className:s.loadMoreButton,children:"Load more"})]})})};export{M as default};