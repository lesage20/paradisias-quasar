import{_ as h,Q,a as x,b as k,c,d as w}from"./ParadisiasTable.5f65f4f3.js";import{Q as y}from"./selection.29a9574d.js";import{u as v,b as m,a as d,Q as C}from"./use-quasar.c9bd820d.js";import{Q as u}from"./QItemLabel.ab9e0354.js";import{k as E,ay as n,U as p,b1 as a,X as o,a2 as e,D as t,W as L,aE as I,a1 as l,I as S,b$ as i,A as _}from"./index.625d7ed3.js";import{Q as z}from"./QPage.f386977d.js";const B={class:"row gt-sm"},T={class:"col-xs-12"},D={class:"row lt-md"},F={class:"col-xs-12"},N=l(" Employ\xE9s "),V={class:"text-grey"},Z=l(" Listes d'employ\xE9s "),X={setup($){const f=v();function g(){f.dialog({persistent:!0,attrs:{"append-icon":"search"},prompt:{outlined:!0,rounded:!0,dense:!1},title:"Rechercher un client",position:"bottom",class:"text-center",style:"border-top-left-radius: 30px; border-top-right-radius: 30px"})}const r=E([{nom:"Le Sage",email:"angezanou00@gmail.com",numero:"0787572030",password:"password",role:"administrateur"},{nom:"Zanou Grace",email:"gracezanou00@gmail.com",numero:"0787572030",password:"password",role:"comptable"},{nom:"Zanou Esperance",email:"esperance@gmail.com",numero:"0787572030",password:"password",role:"secretaire"},{nom:"Zannou Lysette",email:"angezao00@gmail.com",numero:"0787572030",password:"password",role:"strategie marketing"}]);return(b,A)=>(n(),p(z,{padding:""},{default:a(()=>[o("div",B,[o("div",T,[e(h,{items:r.value,title:"Employ\xE9s"},null,8,["items"])])]),o("div",D,[o("div",F,[e(y,null,{default:a(()=>[e(Q,null,{default:a(()=>[N]),_:1}),e(x),o("span",V,t(r.value.length)+" Employ\xE9s ",1)]),_:1}),e(d,null,{default:a(()=>[e(m,{class:"text-grey-7",caption:""},{default:a(()=>[Z]),_:1})]),_:1}),e(C,{separator:""},{default:a(()=>[(n(!0),L(S,null,I(r.value,s=>(n(),p(d,{key:s.nom},{default:a(()=>[e(m,null,{default:a(()=>[e(u,null,{default:a(()=>[l(t(s.nom),1)]),_:2},1024),e(u,{caption:"",lines:"2"},{default:a(()=>[l(t(s.role)+" \u2022 "+t(s.numero)+" \u2022 "+t(s.email),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),e(w,{position:"bottom-right",offset:[18,18],class:"lt-md"},{default:a(()=>[e(k,{color:"blue-9",direction:"up"},{icon:a(({opened:s})=>[e(i,{class:_({"example-fab-animate--hover":s!==!0}),name:"keyboard_arrow_up"},null,8,["class"])]),"active-icon":a(({opened:s})=>[e(i,{class:_({"example-fab-animate":s===!0}),name:"close"},null,8,["class"])]),default:a(()=>[e(c,{color:"teal","external-label":"",onClick:b.onClick},{icon:a(()=>[e(i,{name:"add"})]),_:1},8,["onClick"]),e(c,{color:"secondary","external-label":"",icon:"search",onClick:g})]),_:1})]),_:1})])]),_:1}))}};export{X as default};
