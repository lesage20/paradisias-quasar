var j=Object.defineProperty,D=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var g=(e,a,n)=>a in e?j(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,o=(e,a)=>{for(var n in a||(a={}))T.call(a,n)&&g(e,n,a[n]);if(k)for(var n of k(a))A.call(a,n)&&g(e,n,a[n]);return e},d=(e,a)=>D(e,P(a));import{bs as m,Q as u,ac as c,bR as h,bJ as B,c2 as F,bL as L,c3 as N,k as y,a9 as _,c4 as W,bH as H,bw as J,af as M,c5 as O}from"./index.625d7ed3.js";var G=m({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const n=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:n.value},h(a.default))}}),V=m({name:"QItem",props:d(o(o({},B),F),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:a,emit:n}){const{proxy:{$q:l}}=_(),v=L(e,l),{hasRouterLink:C,hasLink:b,linkProps:Q,linkClass:x,linkTag:R,navigateToRouterLink:E}=N(),i=y(null),r=y(null),f=u(()=>e.clickable===!0||b.value===!0||e.tag==="label"),s=u(()=>e.disable!==!0&&f.value===!0),K=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(v.value===!0?" q-item--dark":"")+(b.value===!0?x.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=u(()=>{if(e.insetLevel===void 0)return null;const t=l.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function w(t){s.value===!0&&(r.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===i.value?r.value.focus():document.activeElement===r.value&&i.value.focus()),C.value===!0&&E(t),n("click",t))}function I(t){if(s.value===!0&&W(t,13)===!0){H(t),t.qKeyEvent=!0;const q=new MouseEvent("click",t);q.qKeyEvent=!0,i.value.dispatchEvent(q)}n("keyup",t)}function $(){const t=J(a.default,[]);return s.value===!0&&t.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:r})),t}return()=>{const t={ref:i,class:K.value,style:S.value,onClick:w,onKeyup:I};return s.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,Q.value)):f.value===!0&&(t["aria-disabled"]="true"),c(R.value,t,$())}}}),X=m({name:"QList",props:d(o({},B),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:a}){const n=_(),l=L(e,n.proxy.$q),v=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>c("div",{class:v.value},h(a.default))}});function Y(){return M(O)}export{X as Q,V as a,G as b,Y as u};
