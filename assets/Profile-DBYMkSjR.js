import{j as x,b as V,r as B,a as F,c as u,m as w,o as s,n as m,w as t,g as e,f as c,e as N,t as _,d as R,p as S,q,F as C,h as P,s as j,v as z,x as D,y as L,i as M,z as O}from"./index-Cxs7iahU.js";import{E as T,a as U}from"./el-form-item-gSEbeYeG.js";const J={__name:"Profile",setup(A){const{t:l}=x(),b=V(),d=B(),o=F({name:"",roleId:""}),r=u(()=>b.state.user.userInfo),n=u(()=>r.value.createdBy==="system"),y=u(()=>({roleId:{required:!0,message:l("form.roleRequired"),trigger:"blur"}}));w(r,()=>{g()},{immediate:!0});function g(){o.name=r.value.name,o.roleId=r.value.roleId}function I(){d.value.validate(i=>{i&&z({...o}).then(()=>{D.success(l("tips.success"))})})}return(i,p)=>{const f=U,h=O,v=L,E=M,k=T;return s(),m(k,{ref_key:"formRef",ref:d,model:e(o),rules:e(y),"label-width":"80px","label-position":"left"},{default:t(()=>[c(f,{label:e(l)("form.username")},{default:t(()=>[N("label",null,_(e(o).name),1)]),_:1},8,["label"]),c(f,{label:e(l)("form.group"),prop:e(n)?"":"roleId"},{default:t(()=>[c(v,{modelValue:e(o).roleId,"onUpdate:modelValue":p[0]||(p[0]=a=>e(o).roleId=a),disabled:e(n),placeholder:e(l)("form.choose"),style:{"margin-right":"10px"}},{default:t(()=>[(s(!0),R(C,null,S(e(q),a=>(s(),m(h,{key:a.name,label:a.label,value:a.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled","placeholder"]),e(n)?j("",!0):(s(),m(E,{key:0,type:"primary",onClick:I},{default:t(()=>[P(_(e(l)("action.apply")),1)]),_:1}))]),_:1},8,["label","prop"])]),_:1},8,["model","rules"])}}};export{J as default};
