(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"7cc1":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",[s("div",{staticClass:"q-pa-md row"},[s("div",{staticClass:"col-8 offset-2"},[s("div",{staticClass:"row q-gutter-xs"},[s("div",{staticClass:"col-3 offset-1"},[s("h5",[t._v("To do")]),s("q-separator",{attrs:{dark:"",inset:""}}),s("q-card")],1),s("div",{staticClass:"col-3 offset-1"},[s("h5",[t._v("Doing")]),s("q-separator",{attrs:{dark:"",inset:""}})],1),s("div",{staticClass:"col-3 offset-1"},[s("h5",[t._v("Done")]),s("q-separator",{attrs:{dark:"",inset:""}})],1)])])]),s("div",{staticClass:"q-pa-md row q-gutter-md"})])},o=[],r=s("fc1b"),c={data(){return{}},methods(){r["a"].collection("projects").get().then((t=>{t.forEach((t=>{console.log(t.id," => ",t.data())}))})).catch((t=>{console.log("Error getting documents: ",t)}))}},i=c,n=s("2877"),d=s("9989"),l=s("eb85"),f=s("f09f"),p=s("eebe"),u=s.n(p),v=Object(n["a"])(i,e,o,!1,null,"c5103bd6",null);a["default"]=v.exports;u()(v,"components",{QPage:d["a"],QSeparator:l["a"],QCard:f["a"]})}}]);