import{aP as f,a as E,c as k,o as _,d as w,e as B,f as o,w as l,g as e,h as c,t as p,n as C,s as j,F as v,p as G,q as J,ag as K,aQ as $,E as X,i as Y,ai as Z,y as ee,z as te}from"./index-Cxs7iahU.js";import{E as oe}from"./el-dialog-nenOhrOA.js";import{a as le,E as ae}from"./el-form-item-gSEbeYeG.js";import{u as ne}from"./use-table-handlers-D1FrOxBz.js";const se=a=>f({url:"sys/user/listPage",method:"get",data:a});function re(a){return f({url:"sys/user/save",method:"post",data:a})}function de(a){const{id:d}=a;return delete a.id,f({url:`sys/user/update/${d}`,method:"post",data:a})}function ie(a){const{id:d}=a;return delete a.id,f({url:`sys/user/password/${d}`,method:"get",data:a})}const me=a=>f({url:"sys/user/delete",method:"post",data:a}),ue={class:"main-body"},ce={class:"toolbar"},ge={__name:"User",setup(a){const d=E({name:""}),i=E({id:"",name:"",roleId:""}),{t,tableRef:x,dialogVisible:h,isEdit:g,formLoading:I,formRef:R,doSearch:S,doAdd:P,doEdit:W,doSubmit:D,doRemove:H,doClose:y}=ne(i),N=[{type:"edit",show:n=>n.createdBy!=="system"},{type:"delete",show:n=>n.createdBy!=="system"}],T=k(()=>[{type:"selection",selectable:q},{prop:"id",label:t("thead.ID"),minWidth:50},{prop:"name",label:t("thead.username"),minWidth:120},{prop:"roleName",label:t("thead.group"),minWidth:120},{prop:"createdBy",label:t("thead.createdBy"),minWidth:120},{prop:"ip",label:t("thead.latestIp"),minWidth:100},{prop:"visitTime",label:t("thead.latestVisit"),minWidth:120}]),U=k(()=>({title:[{required:!0,message:t("form.titleRequired"),trigger:["blur","change"]},{min:2,max:60,message:t("form.titleError"),trigger:["blur","change"]}]}));function q(n){return n.createdBy!=="system"}function F(n,r){H(me,n,r)}function L(){D({save:re,update:de},n=>{g.value||$.alert(`${t("tips.success")}${t("form.username")}:${n.data.name},${t("form.password")}:${n.data.password}`,t("tips.title"),{confirmButtonText:t("action.confirm")})})}function z(){ie({...i}).then(n=>{$.alert(`${t("tips.success")}${t("form.username")}:${n.data.name},${t("form.password")}:${n.data.password}`,t("tips.title"),{confirmButtonText:t("action.confirm")})})}return(n,r)=>{const b=X,m=le,u=Y,V=ae,A=Z,M=te,O=ee,Q=oe;return _(),w(v,null,[B("div",ue,[B("div",ce,[o(V,{inline:!0,model:e(d)},{default:l(()=>[o(m,null,{default:l(()=>[o(b,{modelValue:e(d).name,"onUpdate:modelValue":r[0]||(r[0]=s=>e(d).name=s),plceholder:e(t)("thead.username")},null,8,["modelValue","plceholder"])]),_:1}),o(m,null,{default:l(()=>[o(u,{icon:"search",type:"primary",onClick:e(S)},{default:l(()=>[c(p(e(t)("action.search")),1)]),_:1},8,["onClick"])]),_:1}),o(m,null,{default:l(()=>[o(u,{icon:"plus",type:"primary",onClick:e(P)},{default:l(()=>[c(p(e(t)("action.add")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),o(A,{ref_key:"tableRef",ref:x,"get-page":e(se),filters:e(d),columns:e(T),operations:N,onHandleEdit:e(W),onHandleDelete:F},null,8,["get-page","filters","columns","onHandleEdit"])]),o(Q,{title:e(g)?e(t)("action.edit"):e(t)("action.add"),modelValue:e(h),"onUpdate:modelValue":r[3]||(r[3]=s=>K(h)?h.value=s:null),draggable:"",width:"40%","close-on-click-modal":!1,onClose:e(y)},{footer:l(()=>[o(u,{onClick:e(y)},{default:l(()=>[c(p(e(t)("action.cancel")),1)]),_:1},8,["onClick"]),e(g)?(_(),C(u,{key:0,type:"primary",onClick:z},{default:l(()=>[c(p(e(t)("form.resetPassword")),1)]),_:1})):j("",!0),o(u,{type:"primary",onClick:L,loading:e(I)},{default:l(()=>[c(p(e(t)("action.submit")),1)]),_:1},8,["loading"])]),default:l(()=>[o(V,{ref_key:"formRef",ref:R,model:e(i),"label-width":"80px",rules:e(U),"label-position":"right"},{default:l(()=>[o(m,{label:e(t)("form.username"),prop:"name"},{default:l(()=>[o(b,{modelValue:e(i).name,"onUpdate:modelValue":r[1]||(r[1]=s=>e(i).name=s),placeholder:e(t)("form.usernameHolder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:e(t)("form.group"),prop:"roleId"},{default:l(()=>[o(O,{modelValue:e(i).roleId,"onUpdate:modelValue":r[2]||(r[2]=s=>e(i).roleId=s),placeholder:e(t)("form.choose"),style:{width:"100%"}},{default:l(()=>[(_(!0),w(v,null,G(e(J),s=>(_(),C(M,{key:s.name,label:s.label,value:s.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue","onClose"])],64)}}};export{ge as default};
