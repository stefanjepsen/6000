(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"05a2":function(a,t,e){"use strict";e("d6dc")},d6dc:function(a,t,e){},eaff:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"window-height window-width row justify-center items-center",staticStyle:{background:"linear-gradient(#8274c5, #5a4a9f)"}},[e("div",{staticClass:"column q-pa-lg"},[e("div",{staticClass:"row"},[e("q-card",{staticClass:"shadow-24",staticStyle:{width:"300px",height:"485px"},attrs:{square:""}},[e("q-card-section",{staticClass:"bg-deep-purple-7"},[e("h4",{staticClass:"text-h5 text-white q-my-md"},[a._v("Registration")])]),e("q-card-section",[e("q-form",{staticClass:"q-px-sm q-pt-xl q-pb-lg",on:{submit:function(t){return t.preventDefault(),a.pressed(t)}}},[e("q-input",{attrs:{square:"",clearable:"",type:"email",label:"Email"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:a.email,callback:function(t){a.email=t},expression:"email"}}),e("q-input",{attrs:{square:"",clearable:"",type:"displayName",label:"displayName",required:""},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:a.displayName,callback:function(t){a.displayName=t},expression:"displayName"}}),e("q-input",{attrs:{square:"",clearable:"",type:"password",label:"Password"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:a.password,callback:function(t){a.password=t},expression:"password"}}),e("q-card-actions",{staticClass:"q-px-lg"},[e("q-btn",{staticClass:"full-width text-white",attrs:{type:"submit",unelevated:"",size:"lg",color:"purple-4",label:"Get Started"}})],1)],1)],1),e("q-card-section",{staticClass:"text-right q-pa-sm"},[e("q-btn",{staticClass:"bg-deep-purple-7",attrs:{to:"/Login","text-color":"white",label:"To login"}})],1),e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn slow","leave-active-class":"animated fadeOut slow"}},[a.error?e("q-card",{staticClass:"shadow-24 q-mt-lg",staticStyle:{width:"300px"},attrs:{square:"",elevated:""}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[a._v("Fejl 40")])]),e("q-card-section",{staticClass:"q-pt-none"},[a._v("\n              "+a._s(a.error)+"\n            ")])],1):a._e()],1)],1)],1)])])},r=[],i=(e("5319"),e("fc1b")),l=e("2591"),n=(e("ea7b"),{data(){return{email:"",password:"",displayName:"",error:""}},methods:{pressed(){l["a"].auth().createUserWithEmailAndPassword(this.email,this.password).then((a=>i["a"].collection("users").doc(this.email).set({displayName:this.displayName}))).then((()=>{console.log("It works "+this.displayName),this.$router.replace({name:"Board"})})).catch((a=>this.error=a))}}}),o=n,c=(e("05a2"),e("2877")),d=e("9989"),p=e("f09f"),u=e("a370"),m=e("0378"),q=e("27f9"),h=e("0016"),w=e("4b7e"),f=e("9c40"),b=e("eebe"),y=e.n(b),x=Object(c["a"])(o,s,r,!1,null,null,null);t["default"]=x.exports;y()(x,"components",{QPage:d["a"],QCard:p["a"],QCardSection:u["a"],QForm:m["a"],QInput:q["a"],QIcon:h["a"],QCardActions:w["a"],QBtn:f["a"]})}}]);