import{aR as Za,G as me,ak as He,a5 as ue,a7 as Je,a8 as Qe,aS as ze,am as Ee,r as T,L as Ke,c as h,aD as ea,ar as da,as as ja,at as ca,J as j,N as ie,o as k,d as D,e as Z,ac as fe,aT as pa,g as s,ag as Oe,Q as E,ax as oe,a3 as Te,h as qe,t as ne,S as de,O as le,R as fa,al as Ya,aU as va,aq as ha,aV as Xa,W as Ge,a2 as ma,a as Re,aW as Ja,m as se,ay as ba,ae as Qa,af as ga,az as et,aH as at,Y as ye,aX as ya,aI as ka,$ as tt,k as W,s as X,n as x,w as R,f as J,F as ve,aY as Ca,K as lt,ap as Na,p as ke,aZ as Ae,aj as aa,a6 as nt,T as ta,a_ as Ce,H as Ne,a$ as st,b0 as ot,b1 as it,b2 as Ea,b3 as rt,a1 as K,b4 as Se,b5 as $a,b6 as ut,b7 as dt,b8 as ct,b9 as pt,ba as ft,bb as vt,bc as ht,P as mt,E as bt,bd as gt,au as yt,aA as la,be as na,ah as kt,bf as Ct,bg as Nt,ad as sa,bh as Et,bi as $t}from"./index-Cxs7iahU.js";import{b as St}from"./el-form-item-gSEbeYeG.js";var wt=1,Vt=4;function Sa(e){return St(e,wt|Vt)}var Tt=1/0;function Lt(e){var t=e==null?0:e.length;return t?Za(e,Tt):[]}const oa=e=>[...new Set(e)],ia=e=>!e&&e!==0?[]:Array.isArray(e)?e:[e],wa=me({modelValue:{type:[String,Number,Boolean],default:void 0},size:He,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),Pt=me({...wa,border:Boolean}),Va={[ue]:e=>Je(e)||Qe(e)||ze(e),[Ee]:e=>Je(e)||Qe(e)||ze(e)},Ta=Symbol("radioGroupKey"),La=(e,t)=>{const n=T(),a=Ke(Ta,void 0),i=h(()=>!!a),p=h(()=>ea(e.value)?e.label:e.value),u=h({get(){return i.value?a.modelValue:e.modelValue},set(m){i.value?a.changeEvent(m):t&&t(ue,m),n.value.checked=e.modelValue===p.value}}),f=da(h(()=>a==null?void 0:a.size)),r=ja(h(()=>a==null?void 0:a.disabled)),v=T(!1),y=h(()=>r.value||i.value&&u.value!==p.value?-1:0);return ca({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},h(()=>i.value&&ea(e.value))),{radioRef:n,isGroup:i,radioGroup:a,focus:v,size:f,disabled:r,tabIndex:y,modelValue:u,actualValue:p}},_t=["value","name","disabled"],It=j({name:"ElRadio"}),Dt=j({...It,props:Pt,emits:Va,setup(e,{emit:t}){const n=e,a=ie("radio"),{radioRef:i,radioGroup:p,focus:u,size:f,disabled:r,modelValue:v,actualValue:y}=La(n,t);function m(){le(()=>t("change",v.value))}return(b,N)=>{var _;return k(),D("label",{class:E([s(a).b(),s(a).is("disabled",s(r)),s(a).is("focus",s(u)),s(a).is("bordered",b.border),s(a).is("checked",s(v)===s(y)),s(a).m(s(f))])},[Z("span",{class:E([s(a).e("input"),s(a).is("disabled",s(r)),s(a).is("checked",s(v)===s(y))])},[fe(Z("input",{ref_key:"radioRef",ref:i,"onUpdate:modelValue":N[0]||(N[0]=F=>Oe(v)?v.value=F:null),class:E(s(a).e("original")),value:s(y),name:b.name||((_=s(p))==null?void 0:_.name),disabled:s(r),type:"radio",onFocus:N[1]||(N[1]=F=>u.value=!0),onBlur:N[2]||(N[2]=F=>u.value=!1),onChange:m,onClick:N[3]||(N[3]=oe(()=>{},["stop"]))},null,42,_t),[[pa,s(v)]]),Z("span",{class:E(s(a).e("inner"))},null,2)],2),Z("span",{class:E(s(a).e("label")),onKeydown:N[4]||(N[4]=oe(()=>{},["stop"]))},[Te(b.$slots,"default",{},()=>[qe(ne(b.label),1)])],34)],2)}}});var Bt=de(Dt,[["__file","radio.vue"]]);const Mt=me({...wa}),Ft=["value","name","disabled"],zt=j({name:"ElRadioButton"}),Rt=j({...zt,props:Mt,setup(e){const t=e,n=ie("radio"),{radioRef:a,focus:i,size:p,disabled:u,modelValue:f,radioGroup:r,actualValue:v}=La(t),y=h(()=>({backgroundColor:(r==null?void 0:r.fill)||"",borderColor:(r==null?void 0:r.fill)||"",boxShadow:r!=null&&r.fill?`-1px 0 0 0 ${r.fill}`:"",color:(r==null?void 0:r.textColor)||""}));return(m,b)=>{var N;return k(),D("label",{class:E([s(n).b("button"),s(n).is("active",s(f)===s(v)),s(n).is("disabled",s(u)),s(n).is("focus",s(i)),s(n).bm("button",s(p))])},[fe(Z("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":b[0]||(b[0]=_=>Oe(f)?f.value=_:null),class:E(s(n).be("button","original-radio")),value:s(v),type:"radio",name:m.name||((N=s(r))==null?void 0:N.name),disabled:s(u),onFocus:b[1]||(b[1]=_=>i.value=!0),onBlur:b[2]||(b[2]=_=>i.value=!1),onClick:b[3]||(b[3]=oe(()=>{},["stop"]))},null,42,Ft),[[pa,s(f)]]),Z("span",{class:E(s(n).be("button","inner")),style:fa(s(f)===s(v)?s(y):{}),onKeydown:b[4]||(b[4]=oe(()=>{},["stop"]))},[Te(m.$slots,"default",{},()=>[qe(ne(m.label),1)])],38)],2)}}});var Pa=de(Rt,[["__file","radio-button.vue"]]);const At=me({id:{type:String,default:void 0},size:He,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...Ya(["ariaLabel"])}),xt=Va,Ht=["id","aria-label","aria-labelledby"],Kt=j({name:"ElRadioGroup"}),Ot=j({...Kt,props:At,emits:xt,setup(e,{emit:t}){const n=e,a=ie("radio"),i=va(),p=T(),{formItem:u}=ha(),{inputId:f,isLabeledByFormItem:r}=Xa(n,{formItemContext:u}),v=m=>{t(ue,m),le(()=>t("change",m))};Ge(()=>{const m=p.value.querySelectorAll("[type=radio]"),b=m[0];!Array.from(m).some(N=>N.checked)&&b&&(b.tabIndex=0)});const y=h(()=>n.name||i.value);return ma(Ta,Re({...Ja(n),changeEvent:v,name:y})),se(()=>n.modelValue,()=>{n.validateEvent&&(u==null||u.validate("change").catch(m=>ba()))}),ca({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-radio-group",ref:"https://element-plus.org/en-US/component/radio.html"},h(()=>!!n.label)),(m,b)=>(k(),D("div",{id:s(f),ref_key:"radioGroupRef",ref:p,class:E(s(a).b("group")),role:"radiogroup","aria-label":s(r)?void 0:m.label||m.ariaLabel||"radio-group","aria-labelledby":s(r)?s(u).labelId:void 0},[Te(m.$slots,"default")],10,Ht))}});var _a=de(Ot,[["__file","radio-group.vue"]]);const qt=Qa(Bt,{RadioButton:Pa,RadioGroup:_a}),kl=ga(_a);ga(Pa);var Gt=j({name:"NodeContent",setup(){return{ns:ie("cascader-node")}},render(){const{ns:e}=this,{node:t,panel:n}=this.$parent,{data:a,label:i}=t,{renderLabelFn:p}=n;return et("span",{class:e.e("label")},p?p({node:t,data:a}):i)}});const Ue=Symbol(),Ut=j({name:"ElCascaderNode",components:{ElCheckbox:at,ElRadio:qt,NodeContent:Gt,ElIcon:ye,Check:ya,Loading:ka,ArrowRight:tt},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:t}){const n=Ke(Ue),a=ie("cascader-node"),i=h(()=>n.isHoverMenu),p=h(()=>n.config.multiple),u=h(()=>n.config.checkStrictly),f=h(()=>{var $;return($=n.checkedNodes[0])==null?void 0:$.uid}),r=h(()=>e.node.isDisabled),v=h(()=>e.node.isLeaf),y=h(()=>u.value&&!v.value||!r.value),m=h(()=>N(n.expandingNode)),b=h(()=>u.value&&n.checkedNodes.some(N)),N=$=>{var z;const{level:A,uid:Y}=e.node;return((z=$==null?void 0:$.pathNodes[A-1])==null?void 0:z.uid)===Y},_=()=>{m.value||n.expandNode(e.node)},F=$=>{const{node:z}=e;$!==z.checked&&n.handleCheckChange(z,$)},H=()=>{n.lazyLoad(e.node,()=>{v.value||_()})},I=$=>{i.value&&(O(),!v.value&&t("expand",$))},O=()=>{const{node:$}=e;!y.value||$.loading||($.loaded?_():H())},B=()=>{i.value&&!v.value||(v.value&&!r.value&&!u.value&&!p.value?M(!0):O())},Q=$=>{u.value?(F($),e.node.loaded&&_()):M($)},M=$=>{e.node.loaded?(F($),!u.value&&_()):H()};return{panel:n,isHoverMenu:i,multiple:p,checkStrictly:u,checkedNodeId:f,isDisabled:r,isLeaf:v,expandable:y,inExpandingPath:m,inCheckedPath:b,ns:a,handleHoverExpand:I,handleExpand:O,handleClick:B,handleCheck:M,handleSelectCheck:Q}}}),Wt=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],Zt=Z("span",null,null,-1);function jt(e,t,n,a,i,p){const u=W("el-checkbox"),f=W("el-radio"),r=W("check"),v=W("el-icon"),y=W("node-content"),m=W("loading"),b=W("arrow-right");return k(),D("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:E([e.ns.b(),e.ns.is("selectable",e.checkStrictly),e.ns.is("active",e.node.checked),e.ns.is("disabled",!e.expandable),e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path"]),onMouseenter:t[2]||(t[2]=(...N)=>e.handleHoverExpand&&e.handleHoverExpand(...N)),onFocus:t[3]||(t[3]=(...N)=>e.handleHoverExpand&&e.handleHoverExpand(...N)),onClick:t[4]||(t[4]=(...N)=>e.handleClick&&e.handleClick(...N))},[X(" prefix "),e.multiple?(k(),x(u,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:t[0]||(t[0]=oe(()=>{},["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(k(),x(f,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:t[1]||(t[1]=oe(()=>{},["stop"]))},{default:R(()=>[X(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),Zt]),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(k(),x(v,{key:2,class:E(e.ns.e("prefix"))},{default:R(()=>[J(r)]),_:1},8,["class"])):X("v-if",!0),X(" content "),J(y),X(" postfix "),e.isLeaf?X("v-if",!0):(k(),D(ve,{key:3},[e.node.loading?(k(),x(v,{key:0,class:E([e.ns.is("loading"),e.ns.e("postfix")])},{default:R(()=>[J(m)]),_:1},8,["class"])):(k(),x(v,{key:1,class:E(["arrow-right",e.ns.e("postfix")])},{default:R(()=>[J(b)]),_:1},8,["class"]))],64))],42,Wt)}var Yt=de(Ut,[["render",jt],["__file","node.vue"]]);const Xt=j({name:"ElCascaderMenu",components:{Loading:ka,ElIcon:ye,ElScrollbar:Ca,ElCascaderNode:Yt},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const t=lt(),n=ie("cascader-menu"),{t:a}=Na(),i=va();let p=null,u=null;const f=Ke(Ue),r=T(null),v=h(()=>!e.nodes.length),y=h(()=>!f.initialLoaded),m=h(()=>`${i.value}-${e.index}`),b=H=>{p=H.target},N=H=>{if(!(!f.isHoverMenu||!p||!r.value))if(p.contains(H.target)){_();const I=t.vnode.el,{left:O}=I.getBoundingClientRect(),{offsetWidth:B,offsetHeight:Q}=I,M=H.clientX-O,$=p.offsetTop,z=$+p.offsetHeight;r.value.innerHTML=`
          <path style="pointer-events: auto;" fill="transparent" d="M${M} ${$} L${B} 0 V${$} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${M} ${z} L${B} ${Q} V${z} Z" />
        `}else u||(u=window.setTimeout(F,f.config.hoverThreshold))},_=()=>{u&&(clearTimeout(u),u=null)},F=()=>{r.value&&(r.value.innerHTML="",_())};return{ns:n,panel:f,hoverZone:r,isEmpty:v,isLoading:y,menuId:m,t:a,handleExpand:b,handleMouseMove:N,clearHoverZone:F}}});function Jt(e,t,n,a,i,p){const u=W("el-cascader-node"),f=W("loading"),r=W("el-icon"),v=W("el-scrollbar");return k(),x(v,{key:e.menuId,tag:"ul",role:"menu",class:E(e.ns.b()),"wrap-class":e.ns.e("wrap"),"view-class":[e.ns.e("list"),e.ns.is("empty",e.isEmpty)],onMousemove:e.handleMouseMove,onMouseleave:e.clearHoverZone},{default:R(()=>{var y;return[(k(!0),D(ve,null,ke(e.nodes,m=>(k(),x(u,{key:m.uid,node:m,"menu-id":e.menuId,onExpand:e.handleExpand},null,8,["node","menu-id","onExpand"]))),128)),e.isLoading?(k(),D("div",{key:0,class:E(e.ns.e("empty-text"))},[J(r,{size:"14",class:E(e.ns.is("loading"))},{default:R(()=>[J(f)]),_:1},8,["class"]),qe(" "+ne(e.t("el.cascader.loading")),1)],2)):e.isEmpty?(k(),D("div",{key:1,class:E(e.ns.e("empty-text"))},ne(e.t("el.cascader.noData")),3)):(y=e.panel)!=null&&y.isHoverMenu?(k(),D("svg",{key:2,ref:"hoverZone",class:E(e.ns.e("hover-zone"))},null,2)):X("v-if",!0)]}),_:1},8,["class","wrap-class","view-class","onMousemove","onMouseleave"])}var Qt=de(Xt,[["render",Jt],["__file","menu.vue"]]);let el=0;const al=e=>{const t=[e];let{parent:n}=e;for(;n;)t.unshift(n),n=n.parent;return t};class he{constructor(t,n,a,i=!1){this.data=t,this.config=n,this.parent=a,this.root=i,this.uid=el++,this.checked=!1,this.indeterminate=!1,this.loading=!1;const{value:p,label:u,children:f}=n,r=t[f],v=al(this);this.level=i?0:a?a.level+1:1,this.value=t[p],this.label=t[u],this.pathNodes=v,this.pathValues=v.map(y=>y.value),this.pathLabels=v.map(y=>y.label),this.childrenData=r,this.children=(r||[]).map(y=>new he(y,n,this)),this.loaded=!n.lazy||this.isLeaf||!Ae(r)}get isDisabled(){const{data:t,parent:n,config:a}=this,{disabled:i,checkStrictly:p}=a;return(aa(i)?i(t,this):!!t[i])||!p&&(n==null?void 0:n.isDisabled)}get isLeaf(){const{data:t,config:n,childrenData:a,loaded:i}=this,{lazy:p,leaf:u}=n,f=aa(u)?u(t,this):t[u];return nt(f)?p&&!i?!1:!(Array.isArray(a)&&a.length):!!f}get valueByOption(){return this.config.emitPath?this.pathValues:this.value}appendChild(t){const{childrenData:n,children:a}=this,i=new he(t,this.config,this);return Array.isArray(n)?n.push(t):this.childrenData=[t],a.push(i),i}calcText(t,n){const a=t?this.pathLabels.join(n):this.label;return this.text=a,a}broadcast(t,...n){const a=`onParent${ta(t)}`;this.children.forEach(i=>{i&&(i.broadcast(t,...n),i[a]&&i[a](...n))})}emit(t,...n){const{parent:a}=this,i=`onChild${ta(t)}`;a&&(a[i]&&a[i](...n),a.emit(t,...n))}onParentCheck(t){this.isDisabled||this.setCheckState(t)}onChildCheck(){const{children:t}=this,n=t.filter(i=>!i.isDisabled),a=n.length?n.every(i=>i.checked):!1;this.setCheckState(a)}setCheckState(t){const n=this.children.length,a=this.children.reduce((i,p)=>{const u=p.checked?1:p.indeterminate?.5:0;return i+u},0);this.checked=this.loaded&&this.children.filter(i=>!i.isDisabled).every(i=>i.loaded&&i.checked)&&t,this.indeterminate=this.loaded&&a!==n&&a>0}doCheck(t){if(this.checked===t)return;const{checkStrictly:n,multiple:a}=this.config;n||!a?this.checked=t:(this.broadcast("check",t),this.setCheckState(t),this.emit("check"))}}const xe=(e,t)=>e.reduce((n,a)=>(a.isLeaf?n.push(a):(!t&&n.push(a),n=n.concat(xe(a.children,t))),n),[]);class ra{constructor(t,n){this.config=n;const a=(t||[]).map(i=>new he(i,this.config));this.nodes=a,this.allNodes=xe(a,!1),this.leafNodes=xe(a,!0)}getNodes(){return this.nodes}getFlattedNodes(t){return t?this.leafNodes:this.allNodes}appendNode(t,n){const a=n?n.appendChild(t):new he(t,this.config);n||this.nodes.push(a),this.allNodes.push(a),a.isLeaf&&this.leafNodes.push(a)}appendNodes(t,n){t.forEach(a=>this.appendNode(a,n))}getNodeByValue(t,n=!1){return!t&&t!==0?null:this.getFlattedNodes(n).find(i=>Ce(i.value,t)||Ce(i.pathValues,t))||null}getSameNode(t){return t&&this.getFlattedNodes(!1).find(({value:a,level:i})=>Ce(t.value,a)&&t.level===i)||null}}const Ia=me({modelValue:{type:Ne([Number,String,Array])},options:{type:Ne(Array),default:()=>[]},props:{type:Ne(Object),default:()=>({})}}),tl={expandTrigger:"click",multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:st,value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},ll=e=>h(()=>({...tl,...e.props})),ua=e=>{if(!e)return 0;const t=e.id.split("-");return Number(t[t.length-2])},nl=e=>{if(!e)return;const t=e.querySelector("input");t?t.click():ot(e)&&e.click()},sl=(e,t)=>{const n=t.slice(0),a=n.map(p=>p.uid),i=e.reduce((p,u)=>{const f=a.indexOf(u.uid);return f>-1&&(p.push(u),n.splice(f,1),a.splice(f,1)),p},[]);return i.push(...n),i},ol=j({name:"ElCascaderPanel",components:{ElCascaderMenu:Qt},props:{...Ia,border:{type:Boolean,default:!0},renderLabel:Function},emits:[ue,Ee,"close","expand-change"],setup(e,{emit:t,slots:n}){let a=!1;const i=ie("cascader"),p=ll(e);let u=null;const f=T(!0),r=T([]),v=T(null),y=T([]),m=T(null),b=T([]),N=h(()=>p.value.expandTrigger==="hover"),_=h(()=>e.renderLabel||n.default),F=()=>{const{options:c}=e,C=p.value;a=!1,u=new ra(c,C),y.value=[u.getNodes()],C.lazy&&Ae(e.options)?(f.value=!1,H(void 0,g=>{g&&(u=new ra(g,C),y.value=[u.getNodes()]),f.value=!0,A(!1,!0)})):A(!1,!0)},H=(c,C)=>{const g=p.value;c=c||new he({},g,void 0,!0),c.loading=!0;const w=L=>{const V=c,G=V.root?null:V;L&&(u==null||u.appendNodes(L,G)),V.loading=!1,V.loaded=!0,V.childrenData=V.childrenData||[],C&&C(L)};g.lazyLoad(c,w)},I=(c,C)=>{var g;const{level:w}=c,L=y.value.slice(0,w);let V;c.isLeaf?V=c.pathNodes[w-2]:(V=c,L.push(c.children)),((g=m.value)==null?void 0:g.uid)!==(V==null?void 0:V.uid)&&(m.value=c,y.value=L,!C&&t("expand-change",(c==null?void 0:c.pathValues)||[]))},O=(c,C,g=!0)=>{const{checkStrictly:w,multiple:L}=p.value,V=b.value[0];a=!0,!L&&(V==null||V.doCheck(!1)),c.doCheck(C),z(),g&&!L&&!w&&t("close"),!g&&!L&&!w&&B(c)},B=c=>{c&&(c=c.parent,B(c),c&&I(c))},Q=c=>u==null?void 0:u.getFlattedNodes(c),M=c=>{var C;return(C=Q(c))==null?void 0:C.filter(g=>g.checked!==!1)},$=()=>{b.value.forEach(c=>c.doCheck(!1)),z(),y.value=y.value.slice(0,1),m.value=null,t("expand-change",[])},z=()=>{var c;const{checkStrictly:C,multiple:g}=p.value,w=b.value,L=M(!C),V=sl(w,L),G=V.map(P=>P.valueByOption);b.value=V,v.value=g?G:(c=G[0])!=null?c:null},A=(c=!1,C=!1)=>{const{modelValue:g}=e,{lazy:w,multiple:L,checkStrictly:V}=p.value,G=!V;if(!(!f.value||a||!C&&Ce(g,v.value)))if(w&&!c){const re=oa(Lt(ia(g))).map(U=>u==null?void 0:u.getNodeByValue(U)).filter(U=>!!U&&!U.loaded&&!U.loading);re.length?re.forEach(U=>{H(U,()=>A(!1,C))}):A(!0,C)}else{const P=L?ia(g):[g],re=oa(P.map(U=>u==null?void 0:u.getNodeByValue(U,G)));Y(re,C),v.value=Sa(g)}},Y=(c,C=!0)=>{const{checkStrictly:g}=p.value,w=b.value,L=c.filter(P=>!!P&&(g||P.isLeaf)),V=u==null?void 0:u.getSameNode(m.value),G=C&&V||L[0];G?G.pathNodes.forEach(P=>I(P,!0)):m.value=null,w.forEach(P=>P.doCheck(!1)),Re(L).forEach(P=>P.doCheck(!0)),b.value=L,le(ce)},ce=()=>{Ea&&r.value.forEach(c=>{const C=c==null?void 0:c.$el;if(C){const g=C.querySelector(`.${i.namespace.value}-scrollbar__wrap`),w=C.querySelector(`.${i.b("node")}.${i.is("active")}`)||C.querySelector(`.${i.b("node")}.in-active-path`);rt(g,w)}})},be=c=>{const C=c.target,{code:g}=c;switch(g){case K.up:case K.down:{c.preventDefault();const w=g===K.up?-1:1;Se($a(C,w,`.${i.b("node")}[tabindex="-1"]`));break}case K.left:{c.preventDefault();const w=r.value[ua(C)-1],L=w==null?void 0:w.$el.querySelector(`.${i.b("node")}[aria-expanded="true"]`);Se(L);break}case K.right:{c.preventDefault();const w=r.value[ua(C)+1],L=w==null?void 0:w.$el.querySelector(`.${i.b("node")}[tabindex="-1"]`);Se(L);break}case K.enter:nl(C);break}};return ma(Ue,Re({config:p,expandingNode:m,checkedNodes:b,isHoverMenu:N,initialLoaded:f,renderLabelFn:_,lazyLoad:H,expandNode:I,handleCheckChange:O})),se([p,()=>e.options],F,{deep:!0,immediate:!0}),se(()=>e.modelValue,()=>{a=!1,A()},{deep:!0}),se(()=>v.value,c=>{Ce(c,e.modelValue)||(t(ue,c),t(Ee,c))}),it(()=>r.value=[]),Ge(()=>!Ae(e.modelValue)&&A()),{ns:i,menuList:r,menus:y,checkedNodes:b,handleKeyDown:be,handleCheckChange:O,getFlattedNodes:Q,getCheckedNodes:M,clearCheckedNodes:$,calculateCheckedValue:z,scrollToExpandingNode:ce}}});function il(e,t,n,a,i,p){const u=W("el-cascader-menu");return k(),D("div",{class:E([e.ns.b("panel"),e.ns.is("bordered",e.border)]),onKeydown:t[0]||(t[0]=(...f)=>e.handleKeyDown&&e.handleKeyDown(...f))},[(k(!0),D(ve,null,ke(e.menus,(f,r)=>(k(),x(u,{key:r,ref_for:!0,ref:v=>e.menuList[r]=v,index:r,nodes:[...f]},null,8,["index","nodes"]))),128))],34)}var we=de(ol,[["render",il],["__file","index.vue"]]);we.install=e=>{e.component(we.name,we)};const rl=we,ul=me({...Ia,size:He,placeholder:String,disabled:Boolean,clearable:Boolean,filterable:Boolean,filterMethod:{type:Ne(Function),default:(e,t)=>e.text.includes(t)},separator:{type:String,default:" / "},showAllLevels:{type:Boolean,default:!0},collapseTags:Boolean,maxCollapseTags:{type:Number,default:1},collapseTagsTooltip:{type:Boolean,default:!1},debounce:{type:Number,default:300},beforeFilter:{type:Ne(Function),default:()=>!0},popperClass:{type:String,default:""},teleported:ut.teleported,tagType:{...dt.type,default:"info"},validateEvent:{type:Boolean,default:!0},...ct}),dl={[ue]:e=>!0,[Ee]:e=>!0,focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,visibleChange:e=>ze(e),expandChange:e=>!!e,removeTag:e=>!!e},cl={key:0},pl=["placeholder","onKeydown"],fl=["onClick"],vl="ElCascader",hl=j({name:vl}),ml=j({...hl,props:ul,emits:dl,setup(e,{expose:t,emit:n}){const a=e,i={modifiers:[{name:"arrowPosition",enabled:!0,phase:"main",fn:({state:l})=>{const{modifiersData:o,placement:d}=l;["right","left","bottom","top"].includes(d)||(o.arrow.x=35)},requires:["arrow"]}]},p=pt();let u=0,f=0;const r=ie("cascader"),v=ie("input"),{t:y}=Na(),{form:m,formItem:b}=ha(),{valueOnClear:N}=ft(a),_=T(null),F=T(null),H=T(null),I=T(null),O=T(null),B=T(!1),Q=T(!1),M=T(!1),$=T(!1),z=T(""),A=T(""),Y=T([]),ce=T([]),be=T([]),c=T(!1),C=h(()=>p.style),g=h(()=>a.disabled||(m==null?void 0:m.disabled)),w=h(()=>a.placeholder||y("el.cascader.placeholder")),L=h(()=>A.value||Y.value.length>0||c.value?"":w.value),V=da(),G=h(()=>["small"].includes(V.value)?"small":"default"),P=h(()=>!!a.props.multiple),re=h(()=>!a.filterable||P.value),U=h(()=>P.value?A.value:z.value),$e=h(()=>{var l;return((l=I.value)==null?void 0:l.checkedNodes)||[]}),Da=h(()=>!a.clearable||g.value||M.value||!Q.value?!1:!!$e.value.length),Le=h(()=>{const{showAllLevels:l,separator:o}=a,d=$e.value;return d.length?P.value?"":d[0].calcText(l,o):""}),Ba=h(()=>(b==null?void 0:b.validateState)||""),Pe=h({get(){return Sa(a.modelValue)},set(l){const o=l||N.value;n(ue,o),n(Ee,o),a.validateEvent&&(b==null||b.validate("change").catch(d=>ba()))}}),Ma=h(()=>[r.b(),r.m(V.value),r.is("disabled",g.value),p.class]),Fa=h(()=>[v.e("icon"),"icon-arrow-down",r.is("reverse",B.value)]),za=h(()=>r.is("focus",B.value||$.value)),We=h(()=>{var l,o;return(o=(l=_.value)==null?void 0:l.popperRef)==null?void 0:o.contentRef}),q=l=>{var o,d,S;g.value||(l=l??!B.value,l!==B.value&&(B.value=l,(d=(o=F.value)==null?void 0:o.input)==null||d.setAttribute("aria-expanded",`${l}`),l?(ge(),le((S=I.value)==null?void 0:S.scrollToExpandingNode)):a.filterable&&Me(),n("visibleChange",l)))},ge=()=>{le(()=>{var l;(l=_.value)==null||l.updatePopper()})},_e=()=>{M.value=!1},Ie=l=>{const{showAllLevels:o,separator:d}=a;return{node:l,key:l.uid,text:l.calcText(o,d),hitState:!1,closable:!g.value&&!l.isDisabled,isCollapseTag:!1}},De=l=>{var o;const d=l.node;d.doCheck(!1),(o=I.value)==null||o.calculateCheckedValue(),n("removeTag",d.valueByOption)},Ra=()=>{if(!P.value)return;const l=$e.value,o=[],d=[];if(l.forEach(S=>d.push(Ie(S))),ce.value=d,l.length){l.slice(0,a.maxCollapseTags).forEach(ee=>o.push(Ie(ee)));const S=l.slice(a.maxCollapseTags),ae=S.length;ae&&(a.collapseTags?o.push({key:-1,text:`+ ${ae}`,closable:!1,isCollapseTag:!0}):S.forEach(ee=>o.push(Ie(ee))))}Y.value=o},Ze=()=>{var l,o;const{filterMethod:d,showAllLevels:S,separator:ae}=a,ee=(o=(l=I.value)==null?void 0:l.getFlattedNodes(!a.props.checkStrictly))==null?void 0:o.filter(te=>te.isDisabled?!1:(te.calcText(S,ae),d(te,U.value)));P.value&&(Y.value.forEach(te=>{te.hitState=!1}),ce.value.forEach(te=>{te.hitState=!1})),M.value=!0,be.value=ee,ge()},Aa=()=>{var l;let o;M.value&&O.value?o=O.value.$el.querySelector(`.${r.e("suggestion-item")}`):o=(l=I.value)==null?void 0:l.$el.querySelector(`.${r.b("node")}[tabindex="-1"]`),o&&(o.focus(),!M.value&&o.click())},Be=()=>{var l,o;const d=(l=F.value)==null?void 0:l.input,S=H.value,ae=(o=O.value)==null?void 0:o.$el;if(!(!Ea||!d)){if(ae){const ee=ae.querySelector(`.${r.e("suggestion-list")}`);ee.style.minWidth=`${d.offsetWidth}px`}if(S){const{offsetHeight:ee}=S,te=Y.value.length>0?`${Math.max(ee+6,u)}px`:`${u}px`;d.style.height=te,ge()}}},xa=l=>{var o;return(o=I.value)==null?void 0:o.getCheckedNodes(l)},Ha=l=>{ge(),n("expandChange",l)},pe=l=>{var o;const d=(o=l.target)==null?void 0:o.value;if(l.type==="compositionend")c.value=!1,le(()=>Fe(d));else{const S=d[d.length-1]||"";c.value=!Et(S)}},Ka=l=>{if(!c.value)switch(l.code){case K.enter:q();break;case K.down:q(!0),le(Aa),l.preventDefault();break;case K.esc:B.value===!0&&(l.preventDefault(),l.stopPropagation(),q(!1));break;case K.tab:q(!1);break}},Oa=()=>{var l;(l=I.value)==null||l.clearCheckedNodes(),!B.value&&a.filterable&&Me(),q(!1),n("clear")},Me=()=>{const{value:l}=Le;z.value=l,A.value=l},qa=l=>{var o,d;const{checked:S}=l;P.value?(o=I.value)==null||o.handleCheckChange(l,!S,!1):(!S&&((d=I.value)==null||d.handleCheckChange(l,!0,!1)),q(!1))},Ga=l=>{const o=l.target,{code:d}=l;switch(d){case K.up:case K.down:{const S=d===K.up?-1:1;Se($a(o,S,`.${r.e("suggestion-item")}[tabindex="-1"]`));break}case K.enter:o.click();break}},Ua=()=>{const l=Y.value,o=l[l.length-1];f=A.value?0:f+1,!(!o||!f||a.collapseTags&&l.length>1)&&(o.hitState?De(o):o.hitState=!0)},je=l=>{const o=l.target,d=r.e("search-input");o.className===d&&($.value=!0),n("focus",l)},Ye=l=>{$.value=!1,n("blur",l)},Wa=vt(()=>{const{value:l}=U;if(!l)return;const o=a.beforeFilter(l);ht(o)?o.then(Ze).catch(()=>{}):o!==!1?Ze():_e()},a.debounce),Fe=(l,o)=>{!B.value&&q(!0),!(o!=null&&o.isComposing)&&(l?Wa():_e())},Xe=l=>Number.parseFloat($t(v.cssVarName("input-height"),l).value)-2;return se(M,ge),se([$e,g],Ra),se(Y,()=>{le(()=>Be())}),se(V,async()=>{await le();const l=F.value.input;u=Xe(l)||u,Be()}),se(Le,Me,{immediate:!0}),Ge(()=>{const l=F.value.input,o=Xe(l);u=l.offsetHeight||o,mt(l,Be)}),t({getCheckedNodes:xa,cascaderPanelRef:I,togglePopperVisible:q,contentRef:We}),(l,o)=>(k(),x(s(na),{ref_key:"tooltipRef",ref:_,visible:B.value,teleported:l.teleported,"popper-class":[s(r).e("dropdown"),l.popperClass],"popper-options":i,"fallback-placements":["bottom-start","bottom","top-start","top","right","left"],"stop-popper-mouse-event":!1,"gpu-acceleration":!1,placement:"bottom-start",transition:`${s(r).namespace.value}-zoom-in-top`,effect:"light",pure:"",persistent:"",onHide:_e},{default:R(()=>[fe((k(),D("div",{class:E(s(Ma)),style:fa(s(C)),onClick:o[5]||(o[5]=()=>q(s(re)?void 0:!0)),onKeydown:Ka,onMouseenter:o[6]||(o[6]=d=>Q.value=!0),onMouseleave:o[7]||(o[7]=d=>Q.value=!1)},[J(s(bt),{ref_key:"input",ref:F,modelValue:z.value,"onUpdate:modelValue":o[1]||(o[1]=d=>z.value=d),placeholder:s(L),readonly:s(re),disabled:s(g),"validate-event":!1,size:s(V),class:E(s(za)),tabindex:s(P)&&l.filterable&&!s(g)?-1:void 0,onCompositionstart:pe,onCompositionupdate:pe,onCompositionend:pe,onFocus:je,onBlur:Ye,onInput:Fe},{suffix:R(()=>[s(Da)?(k(),x(s(ye),{key:"clear",class:E([s(v).e("icon"),"icon-circle-close"]),onClick:oe(Oa,["stop"])},{default:R(()=>[J(s(gt))]),_:1},8,["class","onClick"])):(k(),x(s(ye),{key:"arrow-down",class:E(s(Fa)),onClick:o[0]||(o[0]=oe(d=>q(),["stop"]))},{default:R(()=>[J(s(yt))]),_:1},8,["class"]))]),_:1},8,["modelValue","placeholder","readonly","disabled","size","class","tabindex"]),s(P)?(k(),D("div",{key:0,ref_key:"tagWrapper",ref:H,class:E([s(r).e("tags"),s(r).is("validate",!!s(Ba))])},[(k(!0),D(ve,null,ke(Y.value,d=>(k(),x(s(la),{key:d.key,type:l.tagType,size:s(G),hit:d.hitState,closable:d.closable,"disable-transitions":"",onClose:S=>De(d)},{default:R(()=>[d.isCollapseTag===!1?(k(),D("span",cl,ne(d.text),1)):(k(),x(s(na),{key:1,disabled:B.value||!l.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],placement:"bottom",effect:"light"},{default:R(()=>[Z("span",null,ne(d.text),1)]),content:R(()=>[Z("div",{class:E(s(r).e("collapse-tags"))},[(k(!0),D(ve,null,ke(ce.value.slice(l.maxCollapseTags),(S,ae)=>(k(),D("div",{key:ae,class:E(s(r).e("collapse-tag"))},[(k(),x(s(la),{key:S.key,class:"in-tooltip",type:l.tagType,size:s(G),hit:S.hitState,closable:S.closable,"disable-transitions":"",onClose:ee=>De(S)},{default:R(()=>[Z("span",null,ne(S.text),1)]),_:2},1032,["type","size","hit","closable","onClose"]))],2))),128))],2)]),_:2},1032,["disabled"]))]),_:2},1032,["type","size","hit","closable","onClose"]))),128)),l.filterable&&!s(g)?fe((k(),D("input",{key:0,"onUpdate:modelValue":o[2]||(o[2]=d=>A.value=d),type:"text",class:E(s(r).e("search-input")),placeholder:s(Le)?"":s(w),onInput:o[3]||(o[3]=d=>Fe(A.value,d)),onClick:o[4]||(o[4]=oe(d=>q(!0),["stop"])),onKeydown:kt(Ua,["delete"]),onCompositionstart:pe,onCompositionupdate:pe,onCompositionend:pe,onFocus:je,onBlur:Ye},null,42,pl)),[[Ct,A.value]]):X("v-if",!0)],2)):X("v-if",!0)],38)),[[s(Nt),()=>q(!1),s(We)]])]),content:R(()=>[fe(J(s(rl),{ref_key:"cascaderPanelRef",ref:I,modelValue:s(Pe),"onUpdate:modelValue":o[8]||(o[8]=d=>Oe(Pe)?Pe.value=d:null),options:l.options,props:a.props,border:!1,"render-label":l.$slots.default,onExpandChange:Ha,onClose:o[9]||(o[9]=d=>l.$nextTick(()=>q(!1)))},null,8,["modelValue","options","props","render-label"]),[[sa,!M.value]]),l.filterable?fe((k(),x(s(Ca),{key:0,ref_key:"suggestionPanel",ref:O,tag:"ul",class:E(s(r).e("suggestion-panel")),"view-class":s(r).e("suggestion-list"),onKeydown:Ga},{default:R(()=>[be.value.length?(k(!0),D(ve,{key:0},ke(be.value,d=>(k(),D("li",{key:d.uid,class:E([s(r).e("suggestion-item"),s(r).is("checked",d.checked)]),tabindex:-1,onClick:S=>qa(d)},[Z("span",null,ne(d.text),1),d.checked?(k(),x(s(ye),{key:0},{default:R(()=>[J(s(ya))]),_:1})):X("v-if",!0)],10,fl))),128)):Te(l.$slots,"empty",{key:1},()=>[Z("li",{class:E(s(r).e("empty-text"))},ne(s(y)("el.cascader.noMatch")),3)])]),_:3},8,["class","view-class"])),[[sa,M.value]]):X("v-if",!0)]),_:3},8,["visible","teleported","popper-class","transition"]))}});var Ve=de(ml,[["__file","cascader.vue"]]);Ve.install=e=>{e.component(Ve.name,Ve)};const bl=Ve,Cl=bl;export{Cl as E,kl as a,qt as b};
