import{r as l,u as s,g as x,a as _,b as L,c as j,s as C,d as N,j as t}from"./index-C_jP6aHn.js";import{f as S,C as W}from"./filteredList-BxIVYKYK.js";const E="_textNone_s62qw_1",M="_catalogWrapper_s62qw_9",O="_catalogList_s62qw_16",T="_loadMoreButton_s62qw_22",o={textNone:E,catalogWrapper:M,catalogList:O,loadMoreButton:T},b=a=>a.catalog.items,q=a=>a.catalog.isLoading,w=a=>a.catalog.error,v=()=>{const[i,f]=l.useState(4),[c,g]=l.useState([]),n=s(b),h=s(q),d=s(w),p=s(x),u=s(_),e=L();l.useEffect(()=>{e(j())},[e]);const m=()=>{f(r=>r+4)};return l.useEffect(()=>{if(p)return g(S(n,u)),()=>{e(C(!1)),e(N(""))};g(n)},[p,n,u,e]),h?t.jsx("p",{children:"Loading..."}):d?t.jsx("p",{children:d}):t.jsxs("div",{className:o.catalogWrapper,children:[c.length===0&&t.jsx("p",{className:o.textNone,children:"There are no campers for this order"}),t.jsx("ul",{className:o.catalogList,children:c.slice(0,i).map(r=>t.jsx(W,{camper:r},r._id))}),i<c.length&&t.jsx("div",{className:o.loadMoreWrapper,children:t.jsx("button",{onClick:m,className:o.loadMoreButton,children:"Load more"})})]})};export{v as default};
