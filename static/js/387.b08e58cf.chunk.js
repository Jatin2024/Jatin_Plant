"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[387],{5362:(e,s,t)=>{t.d(s,{A:()=>r});var o=t(5043),a=t(8931),n=t(7111),l=t(3277),i=t(2725),c=t(579);const r=(0,o.forwardRef)(((e,s)=>{let{data:t,columns:r,addedItem:d,CAName:u,state:p}=e;const{showWarningToast:m}=(0,i.A)(),[g,h]=(0,o.useState)({});(0,o.useEffect)((()=>{h({})}),[t]);const f=()=>{const e=v.getSelectedRowModel().rows.map((e=>e.original["Available Plant"]));0!==e.length?(d(e),h({})):m(l.e1)};(0,o.useImperativeHandle)(s,(()=>({addPlant:f})));const w=(0,o.useMemo)((()=>[{id:"select",cell:e=>{let{row:s}=e;return(0,c.jsx)("input",{type:"checkbox",className:"form-check-input",checked:s.getIsSelected(),onChange:s.getToggleSelectedHandler()})}},...r]),[r]),v=(0,a.N4)({data:t,columns:w,state:{rowSelection:g},enableRowSelection:!0,onRowSelectionChange:h,getCoreRowModel:(0,n.HT)()});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{type:"button",className:"btn btn-outline-primary me-3",onClick:()=>{v.getRowModel().rows.forEach((e=>e.toggleSelected(!0)))},children:"Select All"}),(0,c.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{v.getRowModel().rows.forEach((e=>e.toggleSelected(!1)))},children:"Deselect All"})]}),v.getRowModel().rows.length>0?(0,c.jsx)("div",{className:"overflow-auto",style:{maxHeight:"60vh"},children:v.getRowModel().rows.map((e=>(0,c.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center",style:{backgroundColor:e.getIsSelected()?"#d5e8f2":"inherit"},children:[(0,c.jsx)("div",{className:"me-3",children:(0,a.Kv)(e.getVisibleCells()[0].column.columnDef.cell,e.getVisibleCells()[0].getContext())}),(0,c.jsx)("div",{children:e.original[r[0].accessorKey]})]},e.id)))}):(0,c.jsx)("p",{className:"text-muted p-3",children:"No data available"})]})}))},1584:(e,s,t)=>{t.d(s,{A:()=>p});var o=t(3003),a=t(9379),n=t(6047);const l=async(e,s,t)=>{try{const t="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";let o=[];console.log("[All Plant Service] CollabSpaces: ",e),console.log("[All Plant Service] headers: ",s);const a=await(0,n.fV)(),l=async e=>new Promise(((t,o)=>{a.authenticatedRequest(e,{method:"GET",headers:s,type:"json",onComplete:e=>{console.log("Received response:",e),t(e)},onFailure:e=>{console.error("Request failed:",e),o(e)}})})),i=e.map((async e=>{try{var s,a;const r="".concat(t,"/resources/v1/modeler/dslib/dslib:Library/search?$searchStr=").concat(e),d=null===(s=(await l(r)).member)||void 0===s||null===(a=s.find((s=>s.title===e)))||void 0===a?void 0:a.id;if(console.log("[All Plant Service] Library id is:",d),d){const e="".concat(t,"/resources/v1/modeler/dslib/dslib:Library/").concat(d,"?$mask=dslib:ExpandClassifiableClassesMask"),s=await l(e),{member:a}=s;if(a&&a.length>0){var n,i;console.log("[Library Data Service] Member found:",a);const e=null===(n=a[0])||void 0===n?void 0:n.ChildClasses;if((null===e||void 0===e||null===(i=e.member)||void 0===i?void 0:i.length)>0){var c;const s=null===(c=e.member[0].ChildClasses)||void 0===c?void 0:c.member;if(s&&s.length>0){const e=s.filter((e=>!o.some((s=>s.id===e.id))));o=[...o,...e]}}}}}catch(r){throw console.error("Error processing group:",e,r),r}}));return await Promise.all(i),o}catch(o){throw console.error("[All Plant Service] Error occurred:",o),o}},i=async(e,s)=>{let t={CAAtt:[]};console.log("We are into Search CA Details");const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";try{var a;const i=await(0,n.fV)(),c=async e=>new Promise(((t,o)=>{i.authenticatedRequest(e,{method:"GET",headers:s,type:"json",onComplete:e=>{console.log("Received response:",e),t(e)},onFailure:e=>{console.error("Request failed:",e),o(e)}})}));let r="".concat(o,"/resources/v1/modeler/dslc/changeaction/search?$searchStr=name:").concat(e);const d=null===(a=(await c(r)).changeAction[0])||void 0===a?void 0:a.identifier;if(console.log("Response From 1st Call",d),d){const e="".concat(o,"/resources/v1/modeler/dslc/changeaction/").concat(d,"?$fields=proposedChanges,flowDown"),s=await c(e);if(console.log("Response From 2nd Call",s),s){for(const e of s.isFlowDownOf||[])if("Change Action"===e.type){const s="".concat(o,"/resources/v1/modeler/dslc/changeaction/").concat(e.identifier,"?$fields=proposedChanges,flowDown");try{const e=await c(s);console.log("Response From 3rd Call",e),e&&t.CAAtt.push({CATitle:e.title,CAState:e.state})}catch(l){console.error("Error fetching parent CA data:",l)}}t.MCOState=s.state,t.MCOTitle=s.title}}return console.log("Final CA Details",t),t}catch(l){throw console.error("Error in SearchCA:",l),l}};var c=t(5645),r=(t(5043),t(3277)),d=t(2725),u=t(2268);const p=()=>{const{showErrorToast:e}=(0,d.A)(),s=(0,o.wA)();let t=window.widget.getValue("email");console.log("Email in usePlantAssignment:",t);return{handlePlantAssignment:async(o,d,p,h)=>{try{s((0,c.Ve)(!0));const f=await(0,u.I)();if(!f)return void e(r.rK);console.log("[UsePlantAssignment] Headers:",f);let w=[];if("Change Action"===h){console.log("The object Type is Change Action");const e=async()=>{const e="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/changeaction/".concat(p,"?%24fields=proposedChanges"),s=await(0,n.ui)("GET",e,"",f);if(console.log("Response from Change Action URL:",s),s.status&&s.output){const e=s.output.proposedChanges.map((async e=>{const s=e.where.identifier,t=e.where.type;try{const[e,o]=await Promise.all([m(s,f),g(s,t,f)]);w.push({ItemId:s,ItemType:t,ItemState:(null===o||void 0===o?void 0:o.member[0].state)||"N/A",ItemTitle:(null===o||void 0===o?void 0:o.member[0].title)||"N/A",ItemPlants:e})}catch(o){console.error("Error processing change for item ".concat(s,":"),o)}}));await Promise.all(e)}else console.error("Invalid response structure or no proposed changes.")},t=async()=>{const e=await l([o],f);console.log("Parallel API response:",e),s((0,c.QL)(e))};return await Promise.all([e(),t()]),s((0,c.Ve)(!1)),void s((0,c.OL)(w))}const v=await(async(e,s,t)=>{try{const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";console.log("[UserGroup Status] ProductId: ",s);const l=await(0,n.fV)();let i="".concat(o,"/resources/v1/modeler/dslc/sharing/getSharing");const c=await new Promise(((t,o)=>{l.authenticatedRequest(i,{method:"POST",headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify({data:[{objectID:s}]}),type:"json",onComplete:t,onFailure:o})}));console.log("[Assigned Plant Service] Data received:",c);let r=[],d={groups:[]};if(c&&(c.results.forEach((e=>{e.sharings.userGroups.forEach((e=>{"Can Edit"===e.access&&d.groups.push({uri:e.userGroupID.replace(/[<>]/g,"")})}))})),d.groups.length>0)){let e="https://oi000186152-us1-usersgroup.3dexperience.3ds.com/3drdfpersist/resources/v1/usersgroup/groups?select=uri,members,title";const s=await new Promise(((s,t)=>{l.authenticatedRequest(e,{method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(d),type:"json",onComplete:s,onFailure:t})}));console.log("Group Response is:",s),s&&(r=s.groups.filter((e=>e.members.includes(t))).map((e=>e.title)))}return console.log("[UserGroup Status] User Groups:",r),r}catch(o){throw console.error("[UserGroup Status] Error occurred:",o),o}})(f,p,t);console.log("[Plant Assignment] User Groups:",v);let y=[...v,o];console.log("[Use Plant Assignment] All CollabSpaces:",y);let C=[];if(y.length>0?(C=await l(y,f),console.log("[Use Plant Assignment] All Plants:",C)):console.warn("[Use Plant Assignment] No CollabSpaces found."),C.length>0){const e=await(async(e,s,t)=>{try{const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";console.log("[Assigned Plant Service] Plant Members:",e);const a="".concat(o,"/resources/v1/modeler/dslib/dslib:ClassifiedItem/").concat(t,"?$mask=dslib:ClassificationAttributesMask"),l=await(0,n.fV)(),c=await new Promise(((e,t)=>{l.authenticatedRequest(a,{method:"GET",headers:s,type:"json",onComplete:e,onFailure:t})}));console.log("[Assigned Plant Service] Data received:",c);let r=[],d=[],u=c.member[0].ClassificationAttributes.member;return await Promise.all(u.map((async t=>{console.log("Class Item is ",t);for(let o of e)if(t.ClassID===o.id){let e=o.title;e=e.replace("Plant","").replace(/\s+/g,"");let a={id:t.ClassID,title:o.title};const n=t.Attributes.map((t=>t.name.includes("FlowDownCA")&&t.value?i(t.value,s).then((e=>{if(e){console.log(e),a.MFGChange=null===e||void 0===e?void 0:e.MCOTitle,a.MFGStatus=null===e||void 0===e?void 0:e.MCOState;let s="",t="";e.CAAtt.forEach((e=>{s+=","+e.CATitle,t+=","+e.CAState})),a.Change=s.slice(1),a.ChangeStatus=t.slice(1)}})):(a[t.name.replace(e,"").trim()]=t.value,Promise.resolve())));await Promise.all(n),r=[...r,a],console.log("Initial Assigned Classes",r),console.log("Processed Object:",a)}}))),console.log("[Assigned Plant Service] Initial Assigned Classes:",r),d=e.filter((e=>!r.some((s=>s.id===e.id)))),console.log("uniqueInAllclasses--:",d),{success:!0,data:{plantData:{allPlants:e,initialAssignedPlants:r,uniquePlants:d}}}}catch(o){return console.error("[Object Details] Failed to fetch data:",o),{success:!1,error:o}}})(C,f,p);console.log("[Use Plant Assignment]: ",e),e.success?(s((0,c.Lq)(e.data.plantData)),s((0,c.lL)(f))):console.error("Failed to fetch plant data.")}else console.warn("[Use Plant Assignment] No Plants found.");let b={};b="Raw_Material"===h?{success:!0,data:[]}:await(async(e,s)=>{const t="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";let o="".concat(t,"/resources/v1/modeler/dseng/dseng:EngItem/");o+=s,o+="/expand";let l={expandDepth:1,type_filter_bo:["VPMReference"],type_filter_rel:["VPMInstance"]};try{console.log("[SearchCAService] ProductId is:",s);const i=await(0,n.fV)(),c=(s,t,o)=>new Promise(((n,l)=>{i.authenticatedRequest(s,{method:t,headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify(o),type:"json",onComplete:e=>{console.log("Received response:",e),n(e)},onFailure:e=>{console.error("Request failed:",e),l(e)}})})),r=await c(o,"POST",l);console.log("[Get CA Details Service] Data received:",r);const{member:d}=r;if(d){let e=r.member.filter((e=>("VPMReference"===e.type||"Raw_Material"===e.type)&&e.id!==s)).map((e=>({id:e.id,type:e.type,name:e.title,state:e.state})));return e.length>0&&await Promise.all(e.map((async e=>{if("released"===e.state.toLowerCase()){let s="".concat(t,"/resources/v1/modeler/dslib/dslib:ClassifiedItem/").concat(e.id,"?$mask=dslib:ClassificationAttributesMask");const o=await c(s,"GET","");console.log("classResponse->",o);const a=o.member.flatMap((e=>{var s;return null!==(s=e.ClassificationAttributes)&&void 0!==s&&s.member?e.ClassificationAttributes.member.map((e=>e.ClassID)):[]}));e.classes=a}}))),{success:!0,data:e}}}catch(i){return console.error("Error while Fetching",i),{success:!1,data:[],error:i}}})(f,p),console.log("Type After:",h),console.log("[Use Plant Assignment] Product Children:",b),b.success&&s((0,c.VG)(b.data));const A=await(async(e,s,t)=>{const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";let l=!1,i=[];const c="".concat(o,"/resources/enorelnav/v2/navigate/setPreferences");let r={widgetId:"ENORIPE_Relations_Preview_2751_2038-15:33:22",relations:["caproposedwhere_from"],allRelationsMode:!1,publicationsMode:!1,computeWithInstances:!1,attributesForView:["ds6w:status","ds6w:type","ds6w:identifier"],label:"ENXENG_AP-e1331143-1734517777960",lang:"en",ghostMode:!1},d="".concat(o,"/resources/enorelnav/v2/navigate/getEcosystem"),u={widgetId:"ENORIPE_Relations_Preview_2751_2038-15:33:22",responseMode:"objectsByPatterns",label:"ENXENG_AP-e1331143-1734517780491",ids:[s]};try{console.log("[Get CA Details] Product ID:",s);const p=await(0,n.fV)(),m=await new Promise(((s,t)=>{p.authenticatedRequest(c,{method:"POST",headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify(r),type:"json",onComplete:s,onFailure:t})}));if(console.log("[Get CA Details Service] Data received:",m),"OK"===m.status){const n=await new Promise(((s,t)=>{p.authenticatedRequest(d,{method:"POST",headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify(u),type:"json",onComplete:s,onFailure:t})}));console.log("[Get CA Details Service] Data received:",n),n.objectsByPatterns.caproposedwhere_from&&await Promise.all(n.objectsByPatterns.caproposedwhere_from.map((async a=>{if("Complete"!==a["ds6w:status"].slice(14)){let n="".concat(o,"/resources/v1/modeler/dslc/changeaction/").concat(a.id,"?$fields=proposedChanges,flowDown");const c=await new Promise(((s,t)=>{p.authenticatedRequest(n,{method:"GET",headers:e,type:"json",onComplete:s,onFailure:t})}));Array.isArray(c.proposedChanges)&&c.proposedChanges.forEach((e=>{i.push({identifier:e.where.identifier,action:e.whats[0].what})})),l="released"!==t.toLowerCase()||i.some((e=>e.identifier===s&&"Modify"===e.action))}})))}else console.error("Unable to Fetch the ");return console.log("Status is coming inside 7"),console.log("Response Object is:",l),{success:!0,data:l,proposedChanges:i}}catch(p){throw console.error("Failed Request:",{url:c,headers:e,body:r,error:p}),p}})(f,p,d);console.log("[Use Plant Assignment] CA Details:",A),A.success&&(s((0,c.ug)(A.data)),s((0,c.aB)(A.proposedChanges))),console.log("[Plant Assignment] All services executed successfully.")}catch(f){console.error("[Plant Assignment] Error:",f),e("An error occurred while fetching plant assignment data.")}finally{s((0,c.Ve)(!1))}}}};async function m(e,s){const t=[],o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslib/dslib:ClassifiedItem/".concat(e,"?$mask=dslib:ClassificationAttributesMask");try{const a=await(0,n.ui)("GET",o,"",s);console.log("Response for identifier ".concat(e,":"),a),a.output.member&&a.output.member[0].ClassificationAttributes?a.output.member[0].ClassificationAttributes.member.forEach((e=>{const s=e.ClassID;e.Attributes.forEach((e=>{e.name.includes("PlantId")&&t.push({PlantName:e.value,PlantID:s})}))})):console.log("No valid classification data for identifier ".concat(e))}catch(a){console.error("Error fetching assigned classes for ".concat(e,":"),a)}return t}async function g(e,s,t){let o="";o="Raw_Material"===s?"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dsrm/dsrm:RawMaterial/".concat(e):"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dseng/dseng:EngItem/".concat(e,"?mask=dsmveng:EngItemMask.Details");try{const s=await(0,n.ui)("GET",o,"",t);return s.status&&s.output?s.output:(console.log("No valid response for identifier ".concat(e)),{})}catch(a){return console.error("Error fetching item details for ".concat(e,":"),a),{}}}},2268:(e,s,t)=>{t.d(s,{I:()=>a});var o=t(6047);const a=async()=>{try{let e=window.widget.getValue("Credentials");const s=await(0,o.fV)();console.log("Security Context is:",e);const t="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",a=await new Promise(((e,o)=>{s.authenticatedRequest(t,{method:"GET",type:"json",onComplete:e,onFailure:o})})),n=a.csrf.name,l=a.csrf.value,i="SecurityContext",c=e;return{[n]:l,[i]:c}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},3127:(e,s,t)=>{t.d(s,{i:()=>l});var o=t(9379),a=t(9722),n=t(6047);const l=async(e,s,t,l,i,c,r,d,u,p,m)=>{try{const e="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";console.log("[Save Data] Starting data saving process..."),console.log("Type in Save Table Data:",d),console.log("Final aRRAY IS inside Save:",p),console.log("Proposed Changes in Save",m);const s=await(0,n.fV)(),t=async(e,t,a)=>(console.log("Fetching URL:",e),console.log("Request Body:",JSON.stringify(t,null,2)),new Promise(((n,i)=>{s.authenticatedRequest(e,{method:a,headers:(0,o.A)((0,o.A)({},l),{},{"Content-Type":"application/json"}),data:JSON.stringify(t),type:"json",onComplete:e=>{console.log("Response received:",e),n(e)},onFailure:e=>{console.error("Request failed:",e),i(e)}})}))),c=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";console.log("Fetching URL:",e),console.log("Method is:"),console.log("Request Body:",JSON.stringify(s,null,2));try{const n=await(0,a.A)({url:e,method:t,headers:(0,o.A)((0,o.A)({},l),{},{"Content-Type":"application/json"}),data:s});return console.log("Response received:",n.data),n.data}catch(n){throw console.error("Request failed:",n),n}};let h=r.filter((e=>{if("released"===e.state.toLowerCase()){return!m.find((s=>s.identifier===e.id&&"modify"===s.action.toLowerCase()))}return!1}));console.log("NotPropagableChilds ARE :",h);let f=[];p.forEach((e=>{if(e.MBOMValue){let s=[];h.forEach((t=>{t.classes.includes(e.id)||s.push({childId:t.id,childName:t.name})})),s.length>0&&f.push({id:e.id,title:e.title,childs:s,type:e.Type})}}));let w="";console.log("ErrorObj IS",f),f.forEach((e=>{let s="";if(Array.isArray(e.childs)&&e.childs.every((e=>e.childName))){const t=e.childs.map((e=>e.childName)).join(", ");console.log("Chilld Titles are",t),s="new"!==e.type.toLowerCase()?"".concat(e.title," MBOM can't be Make due to unclassified child items: ").concat(t):"Unable to classify product ".concat(e.title," due to unclassified child items: ").concat(t),console.log("Message is:",s)}else s="Invalid child data for ".concat(e.title,".");w+="".concat(s,"\n")})),console.log(f),console.log("Concatenated Messages:\n",w);let v=p.filter((e=>"new"===e.Type.toLowerCase()&&!f.some((s=>s.id===e.id)))).map((e=>e.id));console.log("New Classes are:",v);let y={};p.forEach((e=>{!f.some((s=>s.id===e.id))&&("update"===e.Type.toLowerCase()||"new"===e.Type.toLowerCase()&&e.MBOMValue)&&(y[e.MBOMName]=e.MBOMValue)})),console.log("Update body is:",y);let C=p.filter((e=>e.MBOMValue&&!f.some((s=>s.id===e.id)))).map((e=>e.id));if(console.log("Propogateable classes are",C),v.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",s={id:i,type:d,classes:v,mode:"classifyParent"};const t=await c(e,s,"POST");console.log("classifyResponse:",JSON.stringify(t))}if(Object.keys(y).length>0){var g;const s="".concat(e,"/resources/v1/modeler/dslib/dslib:ClassifiedItem/").concat(i),o=await t(s,"","GET");console.log("CStamp Response:",o);let a=(null===(g=o.member[0])||void 0===g?void 0:g.cestamp)||"";y.cestamp=a;const n="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/updateClassificationAttribute?id=".concat(i);await c(n,y,"PATCH"),console.log("Updated database successfully.")}if(C.length>0&&r.length>0&&"VPMReference"===d){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",s={id:i,type:d,classes:C,childs:r,mode:"classifychilds"};const t=await c(e,s,"POST");console.log("child classifyResponse:",JSON.stringify(t))}if(u.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/declassifyProductToClass",s={id:i,type:d,classes:u};const t=await c(e,s,"POST");console.log("declassifyResponse:",JSON.stringify(t))}return console.log("All classification API calls completed successfully."),{success:!0,message:"Data saved successfully",ErrorObj:f,Finalmessage:w}}catch(h){return console.error("Error occurred:",h),{success:!1,message:"Failed to save data",error:h}}}}}]);
//# sourceMappingURL=387.b08e58cf.chunk.js.map