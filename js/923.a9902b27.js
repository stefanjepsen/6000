(self["webpackChunktest_app"]=self["webpackChunktest_app"]||[]).push([[923],{1923:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>E});var l=o(3673),a=o(8880),n=o(2323);const c={class:"q-py-lg q-px-md row items-end q-col-gutter-md"},i={class:"col"},d=(0,l.Wm)("img",{src:"https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_748_3235_1940/master/3235.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=172ccbaa7535c9e16d0455138d20a07c"},null,-1),s={class:"col col-shrink"},r=(0,l.Wm)("img",{src:"https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_748_3235_1940/master/3235.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=172ccbaa7535c9e16d0455138d20a07c"},null,-1),u=(0,l.Wm)("strong",{Stefan:"",Dillerman:""},null,-1),m={class:"text-grey-7"},w=(0,l.Uk)("@StefanNignoggeer "),f=(0,l.Wm)("br",{class:"lt-md"},null,-1),p={class:"twoot-icons row justify-between q-mt-sm"};function g(e,t,o,g,h,b){const q=(0,l.up)("q-avatar"),v=(0,l.up)("q-input"),W=(0,l.up)("q-btn"),k=(0,l.up)("q-separator"),y=(0,l.up)("q-item-section"),_=(0,l.up)("q-item-label"),Q=(0,l.up)("q-item"),C=(0,l.up)("q-list"),Z=(0,l.up)("q-scroll-area"),x=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(x,{class:"relative-position"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"absolute full-width full-height"},{default:(0,l.w5)((()=>[(0,l.Wm)("div",c,[(0,l.Wm)("div",i,[(0,l.Wm)(v,{class:"new-twoot",autogrow:"","bottom-slots":"",modelValue:e.newQweetContent,"onUpdate:modelValue":t[1]||(t[1]=t=>e.newQweetContent=t),label:"Whats twooting yo?",counter:"",maxlength:"280"},{before:(0,l.w5)((()=>[(0,l.Wm)(q,{size:"xl"},{default:(0,l.w5)((()=>[d])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)("div",s,[(0,l.Wm)(W,{onClick:e.addNewQweet,class:"q-mb-lg",disable:!e.newQweetContent,unelevated:"",rounded:"","no-caps":"",color:"primary",label:"Twoot"},null,8,["onClick","disable"])])]),(0,l.Wm)(k,{size:"10px",color:"grey-2",class:"divider"}),(0,l.Wm)(C,{separator:""},{default:(0,l.w5)((()=>[(0,l.Wm)(a.W3,{appear:"","enter-active-class":"animated fadeIn slow","leave-active-class":"animated bounceOutDown slow"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.qweets,(t=>((0,l.wg)(),(0,l.j4)(Q,{key:t.id,class:"qweetStyle q-py-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{avatar:"",top:""},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{size:"xl"},{default:(0,l.w5)((()=>[r])),_:1})])),_:1}),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"text-subtitle1"},{default:(0,l.w5)((()=>[u,(0,l.Wm)("span",m,[w,f,(0,l.Uk)(" • "+(0,n.zw)(e.filterTime(t.date)),1)])])),_:2},1024),(0,l.Wm)(_,{class:"twoot-content text-body1"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.content),1)])),_:2},1024),(0,l.Wm)("div",p,[(0,l.Wm)(W,{color:"grey",icon:"far fa-comment",size:"sm",flat:"",round:""}),(0,l.Wm)(W,{color:"grey",icon:"fas fa-retweet",size:"sm",flat:"",round:""}),(0,l.Wm)(W,{onClick:o=>e.toggleLiked(t),color:t.liked?"accent":"grey",size:"sm",flat:"",round:"",icon:t.liked?"fas fa-heart":"far fa-heart"},null,8,["onClick","color","icon"]),(0,l.Wm)(W,{onClick:o=>e.deleteQweet(t),color:"grey",icon:"fas fa-trash",size:"sm",flat:"",round:""},null,8,["onClick"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}o(5363);var h=o(1959),b=o(6280),q=o(2490),v=o(2607),W=o(9582);const k=(0,l.aZ)({name:"PageHome",setup(){const e=(0,h.iH)(""),t=(0,h.iH)([]);function o(){let t={content:e.value,date:Date.now(),liked:!1};q.db.collection("qweets").add(t).then((e=>{console.log("Document written with ID: ",e.id)})).catch((e=>{console.error("Error adding document: ",e)})),e.value=""}function a(e){q.db.collection("qweets").doc(e.id).delete().then((()=>{console.log("Document successfully deleted!")})).catch((e=>{console.error("Error removing document: ",e)}))}function n(e){return(0,b.Z)(e,new Date)}function c(e){q.db.collection("qweets").doc(e.id).update({liked:!e.liked}).then((()=>{console.log("Document successfully updated!")})).catch((e=>{console.error("Error updating document: ",e)}))}const i=(0,W.tv)(),d=(0,W.yj)();return(0,l.wF)((()=>{v.Z.auth().onAuthStateChanged((e=>{e?"/login"!=d.path&&"/register"!=d.path||i.replace("/"):i.replace("/login")}))})),(0,l.bv)((()=>{q.db.collection("qweets").orderBy("date").onSnapshot((e=>{e.docChanges().forEach((e=>{let o=e.doc.data();if(o.id=e.doc.id,"added"===e.type&&(console.log("New qweet: ",o),t.value.unshift(o)),"modified"===e.type){console.log("Modified qweet: ",o);let e=t.value.findIndex((e=>e.id===o.id));Object.assign(t.value[e],o)}if("removed"===e.type){console.log("Removed qweet: ",o);let e=t.value.findIndex((e=>e.id===o.id));t.value.splice(e,1)}}))}))})),{newQweetContent:e,qweets:t,filterTime:n,addNewQweet:o,deleteQweet:a,toggleLiked:c,ref:h.iH}}});var y=o(4379),_=o(7704),Q=o(6805),C=o(5096),Z=o(4607),x=o(5869),z=o(7011),j=o(3414),D=o(2035),I=o(2350),S=o(7518),H=o.n(S);k.render=g;const E=k;H()(k,"components",{QPage:y.Z,QScrollArea:_.Z,QInput:Q.Z,QAvatar:C.Z,QBtn:Z.Z,QSeparator:x.Z,QList:z.Z,QItem:j.Z,QItemSection:D.Z,QItemLabel:I.Z})}}]);