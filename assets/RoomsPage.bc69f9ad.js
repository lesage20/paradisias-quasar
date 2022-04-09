import{_ as p,Q as O,a as w,e as f,b as B,c as x,d as j}from"./ParadisiasTable.a6fc717a.js";import{Q as z}from"./selection.4bb06095.js";import{u as I,b as u,a as y,Q as L}from"./use-quasar.387f8988.js";import{k as S,Q as b,ay as i,U as n,b1 as e,X as l,a2 as t,x as h,D as a,W as T,aE as A,b_ as m,a1 as o,bY as Q,I as F,b$ as d,A as D}from"./index.146c8c49.js";import{Q as _}from"./QItemLabel.b3680312.js";import{Q as N}from"./QPage.87e34b13.js";const V={class:"row gt-sm"},$={class:"col-xs-12 col-md-6"},E={class:"col-xs-12 col-md-6"},P={class:"col-xs-12"},q={class:"row lt-md"},R={class:"col-xs-12"},U=o(" Chambres "),W={class:"text-grey"},X=o(" Listes des chambres tout type confondu vous pouvez chercher dans la liste "),Y=o(),G=l("br",null,null,-1),ot={setup(H){const v=I();function k(){v.dialog({persistent:!0,prompt:{},title:"Rechercher une chambre",position:"bottom",class:"text-center",style:"border-top-left-radius: 30px; border-top-right-radius: 30px"})}const r=S([{nom:"B1",type:"junior",prix:12500,statut:"Occup\xE9e"},{nom:"B2",type:"junior",prix:12500,statut:"Disponible"},{nom:"B3",type:"junior",prix:12500,statut:"Occup\xE9e"},{nom:"B4",type:"junior",prix:12500,statut:"Disponible"},{nom:"C5",type:"junior",prix:12500,statut:"Disponible"},{nom:"C6",type:"junior",prix:12500,statut:"Occup\xE9e"},{nom:"C8",type:"junior",prix:12500,statut:"Occup\xE9e"},{nom:"D10",type:"senior",prix:15e3,statut:"Occup\xE9e"},{nom:"D11",type:"senior",prix:15e3,statut:"Disponible"},{nom:"D12",type:"senior",prix:15e3,statut:"Occup\xE9e"},{nom:"D13",type:"senior",prix:15e3,statut:"Occup\xE9e"},{nom:"D14",type:"senior",prix:15e3,statut:"Occup\xE9e"},{nom:"D15",type:"senior",prix:15e3,statut:"Disponible"},{nom:"D9",type:"mini-suite",prix:25e3,statut:"Disponible"},{nom:"D16",type:"mini-suite",prix:25e3,statut:"Disponible"}]),C=b(()=>r.value.filter(c=>c.statut==="Disponible")),g=b(()=>r.value.filter(c=>c.statut==="Occup\xE9e"));return(c,J)=>(i(),n(N,null,{default:e(()=>[l("div",V,[l("div",$,[t(p,{items:h(C),actions:!1,title:"Chambres disponbles"},null,8,["items"])]),l("div",E,[t(p,{items:h(g),actions:!1,title:"Chambres occup\xE9es"},null,8,["items"])]),l("div",P,[t(p,{items:r.value,title:"Chambres"},null,8,["items"])])]),l("div",q,[l("div",R,[t(z,null,{default:e(()=>[t(O,null,{default:e(()=>[U]),_:1}),t(w),l("span",W,a(r.value.length)+" chambres ",1)]),_:1}),t(y,null,{default:e(()=>[t(u,{class:"text-grey-7",caption:""},{default:e(()=>[X]),_:1})]),_:1}),t(L,{separator:""},{default:e(()=>[(i(!0),T(F,null,A(r.value,s=>(i(),n(y,{key:s.nom},{default:e(()=>[t(u,{avatar:""},{default:e(()=>[s.type=="junior"?(i(),n(m,{key:0,color:"primary","text-color":"white"},{default:e(()=>[o(a(s.nom),1)]),_:2},1024)):s.type=="senior"?(i(),n(m,{key:1,color:"pink-8","text-color":"white"},{default:e(()=>[o(a(s.nom),1)]),_:2},1024)):(i(),n(m,{key:2,color:"dark","text-color":"yellow"},{default:e(()=>[o(a(s.nom),1)]),_:2},1024))]),_:2},1024),t(u,null,{default:e(()=>[t(_,null,{default:e(()=>[o("Chambre "+a(s.nom),1)]),_:2},1024),t(_,{caption:"",lines:"2"},{default:e(()=>[o(a(s.type)+" \u2022 "+a(s.prix)+"fcfa ",1)]),_:2},1024)]),_:2},1024),t(u,{side:"",top:""},{default:e(()=>[t(_,{caption:""},{default:e(()=>[s.statut=="Disponible"?(i(),n(f,{key:0,color:"positive","text-color":"white",size:"sm"},{default:e(()=>[o(a(s.statut),1)]),_:2},1024)):(i(),n(f,{key:1,color:"negative","text-color":"white",size:"sm"},{default:e(()=>[o(a(s.statut),1)]),_:2},1024)),Y,G,t(Q,{icon:"mdi-pencil",flat:"",size:"sm",round:""}),t(Q,{icon:"mdi-delete",flat:"",size:"sm",round:""})]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),t(j,{position:"bottom-right",offset:[18,18],class:"lt-md"},{default:e(()=>[t(B,{color:"purple",direction:"up"},{icon:e(({opened:s})=>[t(d,{class:D({"example-fab-animate--hover":s!==!0}),name:"keyboard_arrow_up"},null,8,["class"])]),"active-icon":e(({opened:s})=>[t(d,{class:D({"example-fab-animate":s===!0}),name:"close"},null,8,["class"])]),default:e(()=>[t(x,{color:"teal","external-label":"",onClick:c.onClick},{icon:e(()=>[t(d,{name:"add"})]),_:1},8,["onClick"]),t(x,{color:"secondary","external-label":"",icon:"search",onClick:k})]),_:1})]),_:1})])]),_:1}))}};export{ot as default};