(self["webpackChunktest_app"]=self["webpackChunktest_app"]||[]).push([[417],{417:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>W});var t=a(3673),s=a(8880);const u=(0,t.Wm)("h4",{class:"q-mt-none q-mb-md text-weight-bold"},"Register",-1),n={class:"q-pa-md",style:{"max-width":"400px"}},r=(0,t.Wm)("br",null,null,-1),o=(0,t.Uk)("Have an account? "),m=(0,t.Uk)("Login her ");function i(e,l,a,i,d,p){const c=(0,t.up)("q-input"),b=(0,t.up)("q-btn"),h=(0,t.up)("q-form"),g=(0,t.up)("router-link"),w=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(w,{class:"q-pa-lg"},{default:(0,t.w5)((()=>[u,(0,t.Wm)("div",n,[(0,t.Wm)(h,{onSubmit:(0,s.iM)(i.Register,["prevent"]),onReset:i.onReset,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{filled:"",modelValue:i.email,"onUpdate:modelValue":l[1]||(l[1]=e=>i.email=e),label:"Your Email *",hint:"Email","lazy-rules":"",rules:[e=>e&&e.length>0||"Please enter valid Email"]},null,8,["modelValue","rules"]),(0,t.Wm)(c,{filled:"",type:"password",modelValue:i.password,"onUpdate:modelValue":l[2]||(l[2]=e=>i.password=e),label:"Your Password *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Must be a valid password",e=>e&&e.length>8||"Must be atleast 8 chars"]},null,8,["modelValue","rules"]),(0,t.Wm)("div",null,[(0,t.Wm)(b,{label:"Submit",type:"submit",color:"primary",value:"Register"}),(0,t.Wm)(b,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"]),r,(0,t.Wm)("h5",null,[o,(0,t.Wm)(g,{to:"/login"},{default:(0,t.w5)((()=>[m])),_:1})])])])),_:1})}var d=a(1959),p=a(2607);const c={setup(){const e=(0,d.iH)(""),l=(0,d.iH)(""),a=()=>{p.Z.auth().createUserWithEmailAndPassword(e.value,l.value).then((e=>{alert(e)})).catch((e=>alert(e.message)))};function t(){e.value=null,l.value=null}return{Register:a,email:e,password:l,onReset:t}}};var b=a(4379),h=a(5269),g=a(6805),w=a(4607),v=a(7518),f=a.n(v);c.render=i;const W=c;f()(c,"components",{QPage:b.Z,QForm:h.Z,QInput:g.Z,QBtn:w.Z})}}]);