import{aP as y,r as x,j as T,a as w,bj as I,k as V,g as a,o as m,d as v,e as o,f as d,w as g,h,t as r,F as j,p as q,x as f,i as F,bk as U,aQ as D,Y as L,bl as Q}from"./index-Cxs7iahU.js";const Y=e=>{const s=e.type;return delete e.type,y({url:`/message/list/${s}`,method:"get",data:e})},G=e=>{const{id:s,type:t}=e;return delete e.id,delete e.type,y({url:`/message/read/${t}/${s}`,method:"post",data:e})},H=e=>{const s=e.type;return delete e.type,y({url:`/message/readAll/${s}`,method:"post",data:e})},J=e=>{const{id:s,type:t}=e;return delete e.id,delete e.type,y({url:`/message/${t}/${s}`,method:"delete",data:e})},K={key:0},O={class:"txt-r"},W={class:"events"},X={class:"label"},Z={class:"content"},ee={class:"summary"},te={class:"date"},se={class:"extra text"},ne={class:"actions"},oe=o("i",{class:"el-icon-edit"},null,-1),ae=o("i",{class:"el-icon-delete"},null,-1),le={class:"flex-center"},ce={key:1},ie={class:"nodata txt-c"},re={__name:"MessageItem",props:{type:String},setup(e){const s=x([]),{t}=T(),C=e,c=w({pageNum:1,pageSize:20}),k=x(0),_=I(C,"type"),p=()=>{const{pageNum:l,pageSize:i}=c;Y({type:_.value,pageNum:l,pageSize:i}).then(u=>{s.value=u.data.content||[],k.value=u.data.totalSize||0}).catch(()=>{s.value=[]})},z=l=>{G({type:_.value,id:l}).then(()=>{f.success(t("tips.success")),p()})},S=()=>{H({type:_.value}).then(()=>{f.success(t("tips.success")),p()})},b=l=>{D.confirm(t("tips.deleteConfirm"),t("tips.deleteTitle"),{confirmButtonText:t("action.confirm"),cancelButtonText:t("action.cancel"),type:"warning",draggable:!0}).then(()=>{J({type:_.value,id:l}).then(()=>{f.success(t("tips.success")),p()})})};function N(l){c.pageSize=l,c.pageNum=1,p()}function $(l){c.pageNum=l,p()}return p(),(l,i)=>{const u=F,B=V("comment"),E=L,M=Q,P=U;return a(s).length?(m(),v("div",K,[o("div",O,[d(u,{plain:"",type:"primary",onClick:i[0]||(i[0]=n=>S())},{default:g(()=>[h(r(a(t)("action.markedAllRead")),1)]),_:1})]),o("div",W,[(m(!0),v(j,null,q(a(s),(n,R)=>(m(),v("div",{class:"event",key:R},[o("div",X,[d(M,{"is-dot":!n.isRead},{default:g(()=>[d(E,null,{default:g(()=>[d(B)]),_:1})]),_:2},1032,["is-dot"])]),o("div",Z,[o("div",ee,[h(r(n.title)+" ",1),o("div",te,r(n.date),1)]),o("div",se,r(n.content),1),o("div",ne,[d(u,{link:"",disabled:n.isRead,class:"action a-read",onClick:A=>z(n.id)},{default:g(()=>[oe,h(" "+r(a(t)("action.markedRead")),1)]),_:2},1032,["disabled","onClick"]),d(u,{link:"",class:"action a-delete",onClick:A=>b(n.id)},{default:g(()=>[ae,h(" "+r(a(t)("action.delete")),1)]),_:2},1032,["onClick"])])])]))),128))]),o("div",le,[d(P,{currentPage:a(c).pageNum,"onUpdate:currentPage":i[1]||(i[1]=n=>a(c).pageNum=n),"page-size":a(c).pageSize,"onUpdate:pageSize":i[2]||(i[2]=n=>a(c).pageSize=n),total:a(k)||0,layout:"prev, pager, next",onSizeChange:N,onCurrentChange:$},null,8,["currentPage","page-size","total"])])])):(m(),v("div",ce,[o("div",ie,r(a(t)("nodata")),1)]))}}};export{re as default};
