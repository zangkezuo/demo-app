import{aP as f,a as b,c as g,o as E,d as V,e as W,f as o,w as l,g as e,h as k,t as y,E as B,i as w,ai as x}from"./index-Cxs7iahU.js";import{a as I,E as P}from"./el-form-item-gSEbeYeG.js";import{u as T}from"./use-table-handlers-D1FrOxBz.js";const v=r=>f({url:"/logs/operation/listPage",method:"get",data:r}),C={class:"main-body"},D={class:"toolbar"},S={__name:"Operation",setup(r){const a=b({operator:""}),{t,tableRef:i,doSearch:p}=T(),c=g(()=>[{prop:"id",label:t("thead.ID"),minWidth:60},{prop:"operator",label:t("thead.operator"),minWidth:100},{prop:"ip",label:t("thead.IP"),minWidth:120},{prop:"operation",label:t("thead.operation"),minWidth:180},{prop:"duration",label:t("thead.duration"),minWidth:80},{prop:"createdTime",label:t("thead.operateTime"),minWidth:120}]);return(N,n)=>{const d=B,s=I,m=w,_=P,u=x;return E(),V("div",C,[W("div",D,[o(_,{inline:!0,model:e(a)},{default:l(()=>[o(s,null,{default:l(()=>[o(d,{modelValue:e(a).operator,"onUpdate:modelValue":n[0]||(n[0]=h=>e(a).operator=h),placeholder:e(t)("thead.operator")},null,8,["modelValue","placeholder"])]),_:1}),o(s,null,{default:l(()=>[o(m,{icon:"search",type:"primary",onClick:e(p)},{default:l(()=>[k(y(e(t)("action.search")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),o(u,{ref_key:"tableRef",ref:i,"get-page":e(v),filters:e(a),columns:e(c),showOperation:!1,showBatchDelete:!1},null,8,["get-page","filters","columns"])])}}};export{S as default};
