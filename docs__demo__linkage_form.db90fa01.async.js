(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{taCx:function(e,t,a){"use strict";a.r(t);a("L/Qf");var r=a("2/Rp"),l=a("WmNS"),n=a.n(l),i=a("9og8"),o=(a("Y2jk"),a("zeV3")),d=(a("0lcf"),a("mr32")),c=(a("1vPl"),a("5rEg")),s=a("k1fw"),u=a("PpiC"),m=a("q1tI"),p=a.n(m),f=a("xvlK"),h=a("2YZa"),b=a("io9h"),w=[{title:"\u5e8f\u53f7",dataIndex:"index",valueType:"indexBorder",width:72},{title:"\u6807\u9898",dataIndex:"title",copyable:!0,ellipsis:!0,width:200,hideInSearch:!0},{title:"\u72b6\u6001",dataIndex:"state",initialValue:"all",filters:!0,valueEnum:{all:{text:"\u5168\u90e8",status:"Default"},open:{text:"\u672a\u89e3\u51b3",status:"Error"},closed:{text:"\u5df2\u89e3\u51b3",status:"Success"}}},{title:"\u6392\u5e8f\u65b9\u5f0f",key:"direction",hideInTable:!0,dataIndex:"direction",filters:!0,valueEnum:{asc:"\u6b63\u5e8f",desc:"\u5012\u5e8f"},renderFormItem:(e,t,a)=>{var r=t.type,l=t.defaultRender,n=Object(u["a"])(t,["type","defaultRender"]);if(console.log("item:",e),console.log("config:",Object(s["a"])({type:r,defaultRender:l},n)),console.log("form:",a),"form"===r)return null;var i=a.getFieldValue("state");return"open"!==i?p.a.createElement(c["a"],{placeholder:"\u8bf7\u8f93\u5165"}):l(e)}},{title:"\u6807\u7b7e",dataIndex:"labels",width:120,render:(e,t)=>p.a.createElement(o["default"],null,t.labels.map(e=>{var t=e.name,a=e.id,r=e.color;return p.a.createElement(d["a"],{color:r,key:a},t)}))},{title:"\u521b\u5efa\u65f6\u95f4",key:"since",dataIndex:"created_at",valueType:"dateTime"},{title:"option",valueType:"option",dataIndex:"id",render:(e,t)=>[p.a.createElement("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer"},"\u67e5\u770b"),p.a.createElement(h["b"],{onSelect:e=>window.alert(e),menus:[{key:"copy",name:"\u590d\u5236"},{key:"delete",name:"\u5220\u9664"}]})]}];t["default"]=()=>p.a.createElement(h["c"],{columns:w,request:Object(i["a"])(n.a.mark((function e(){var t,a=arguments;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",Object(b["a"])("https://proapi.azurewebsites.net/github/issues",{params:t}));case 2:case"end":return e.stop()}}),e)}))),rowKey:"id",dateFormatter:"string",headerTitle:"\u67e5\u8be2 Table",search:{collapsed:!1,optionRender:(e,t)=>{var a=e.searchText,r=e.resetText,l=t.form;return p.a.createElement(p.a.Fragment,null,p.a.createElement("a",{onClick:()=>{l.submit()}},a)," ",p.a.createElement("a",{onClick:()=>{l.resetFields()}},r)," ",p.a.createElement("a",null,"\u5bfc\u51fa"))}},toolBarRender:()=>[p.a.createElement(r["a"],{key:"3",type:"primary"},p.a.createElement(f["a"],null),"\u65b0\u5efa")]})}}]);