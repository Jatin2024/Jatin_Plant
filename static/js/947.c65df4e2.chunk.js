"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[947],{6313:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var n=a(4104),o=a(4282),l=a(579);const s=e=>{let{show:t,onHide:a,title:s,children:i,footerButtons:r}=e;return(0,l.jsxs)(n.A,{show:t,onHide:a,size:"lg",centered:!0,children:[(0,l.jsx)(n.A.Header,{closeButton:!0,children:(0,l.jsx)(n.A.Title,{children:s||"Modal Title"})}),(0,l.jsx)(n.A.Body,{children:i}),(0,l.jsx)(n.A.Footer,{children:r?r.map(((e,t)=>(0,l.jsx)(o.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,l.jsx)(o.A,{variant:"secondary",onClick:a,children:"Close"})})]})}},7725:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(5043),o=a(4391),l=(a(2342),a(9555),a(3003)),s=a(2670),i=a(2115),r=(a(8421),a(4050),a(9959),a(174)),c=a(2725),d=a(3277),u=a(6713),p=a(5645),g=a(1584),m=a(314);const h=()=>{const{showErrorToast:e}=(0,c.A)(),{handlePlantAssignment:t}=(0,g.A)(),a=(0,l.d4)((e=>e.droppedObject.isDropped)),o=(0,l.d4)((e=>e.droppedObject.loading)),s=(0,l.wA)(),i=(0,n.useCallback)((async a=>{try{var n,o;const r={success:"true",data:{cardData:{Type:"Change Action","Maturity State":"In Work",Owner:"Sudarshan Sambamurthy","Collaborative Space":"Micro Motion","Collaborative Space Title":"MSOL-Micro Motion","Dropped Revision":"","Dropped Revision ID":"","Latest Released Revision":"","Latest Released Revision ID":"",EIN:"","CAD Format":"",imageURL:"https://oi000186152-us1-space.3dexperience.3ds.com:443/enovia/snresources/images/icons/large/I_ECM_CA108x144.png",relativePath:"/resources/v1/modeler/dslc/changeaction/474D00260AC21A0067CA9D1000015F59",Title:null===(n=a[0])||void 0===n?void 0:n.displayName,Name:null===(o=a[0])||void 0===o?void 0:o.displayName,organization:"BU-0000001","Latest Revision":"-"}}};if(r.success){s((0,p.um)({cardData:r.data.cardData}));const e=r.data.cardData;var l,i;if(console.log("[Dragged Items are]",e),s((0,p.Rr)(!0)),r)await t(e["Collaborative Space"],e["Maturity State"],null===(l=a[0])||void 0===l?void 0:l.objectId,null===(i=a[0])||void 0===i?void 0:i.objectType)}else e(d.wX)}catch(r){console.error("[FetchObjectDetails] Error fetching details:",r),e(d.wX)}finally{s((0,p.r1)(!1))}}),[s,t]),r=(0,n.useCallback)((async t=>{console.log("[handleDrop] handleDrop called with dataItems:",t);try{if(t&&t.length>0){var a;const n=null===(a=t[0])||void 0===a?void 0:a.objectType;if(!["VPMReference","Document","Raw_Material","Change Action"].includes(n))return void e(d.Zo);s((0,p.Rr)(!0)),console.log("[handleDrop] \ud83d\udd04 Force setting `loading = true`..."),s((0,p.r1)(!1)),setTimeout((()=>s((0,p.r1)(!0))),0),await i(t)}else console.warn("[handleDrop] No data items to process.")}catch(n){console.error("[Drop] Error in handleDrop:",n),s((0,p.r1)(!1)),console.log("[handleDrop] Error in handleDrop, setting loading to false"),e(d.nz)}}),[i,e]);return{initializeDroppableArea:(0,n.useCallback)((()=>{a?console.log("[initializeDroppableArea] \u23f3 isDropped is already true. Skipping reset."):(console.log("[initializeDroppableArea] \ud83d\ude80 Resetting isDropped to false..."),s((0,p.Rr)(!1)));const t=setInterval((()=>{const a=document.querySelector(".droppable-container");a&&(clearInterval(t),(0,m.pn)(a,r,s,e))}),100);return()=>clearInterval(t)}),[r,s]),loading:o,handleDrop:r}};var v=a(579);const A=()=>{const{handleDrop:e}=h(),{showSuccessToast:t,showErrorToast:a}=(0,c.A)(),[o,l]=(0,n.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,n.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var n,o;const i=(new Error).stack.split("\n"),c=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(i)&&!c)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),l(!0);const u=s.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===u||void 0===u||null===(n=u.data)||void 0===n||null===(o=n.items)||void 0===o||!o.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",u),void l(!1);try{await(0,r.M)(u.data.items,e)}catch(p){console.error("[WidgetLifecycle] \u274c Error during refresh:",p),a(d.H6)}finally{l(!1),t(d._l)}}))}),[]),o?(0,v.jsx)(u.A,{}):null};var f=a(45),b=a(9379),C=(a(4816),a(2691)),j=a(4282),M=a(3637),P=a(768),D=a(759),w=a(184),x=a(3825);const y=e=>{let{plants:t=[],itemId:a,isRemoveMode:n,handleRemovePlant:o}=e;return console.log("PlantRenderer received plants:",t),null!==t&&void 0!==t&&t.length?(0,v.jsx)(v.Fragment,{children:t.map((e=>(0,v.jsxs)("span",{style:{marginRight:"8px",display:"inline-flex",alignItems:"center",color:e.color||"black",fontWeight:"bold"},children:[e.PlantName,n&&(0,v.jsx)(x.zhF,{size:16,style:{cursor:"pointer",color:"red",marginLeft:"4px"},onClick:()=>o(a,e.PlantID)})]},e.PlantID)))}):"N/A"},S=(e,t)=>e?e.map((e=>"Change Action"===t?{ItemName:(null===e||void 0===e?void 0:e.ItemTitle)||"N/A",Plant:(null===e||void 0===e?void 0:e.ItemPlants)||[],ItemId:(null===e||void 0===e?void 0:e.ItemId)||"N/A"}:{Plant:(null===e||void 0===e?void 0:e.title)||"N/A",Seq:(null===e||void 0===e?void 0:e.Seq)||"1",Status:"Current","MFG Change":(null===e||void 0===e?void 0:e.MFGChange)||"N/A","MFG Status":(null===e||void 0===e?void 0:e.MFGStatus)||"N/A",Change:(null===e||void 0===e?void 0:e.Change)||"N/A","Change Status":(null===e||void 0===e?void 0:e.ChangeStatus)||"N/A","Oracle Template":e.OracleTemplate||"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":!1,MBom:e.MBOM?"Make":"Buy","Sort Value":""})):[],N=[{accessorKey:"Available Plant",header:"Available Plant"}];var O=a(3127),I=a(5362),R=a(6313);const E=e=>{let{onAddPlant:t,addedPlant:a,onSave:o,onRemove:l,uniquedata:s,uniqueColumn:i,CAName:r,state:u,type:p,isMFGCA:g}=e;const{showWarningToast:m}=(0,c.A)(),[h,A]=(0,n.useState)(!1),f=(0,n.useRef)();console.log("[Unique Table Data]:",s);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"d-flex cta-absolute",children:[!g&&(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{"Change Action"===p||r?A(!0):m("RELEASED"===u?d.sL:d.Ru)},children:"Add Plant"}),g&&(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{A(!0)},children:"Add/Update Plants"}),(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{o&&r?o():m("RELEASED"===u?d.EZ:d.nX)},children:"Save"}),(0,v.jsx)("button",{className:"btn btn-outline-danger btn-lg m-2",onClick:()=>{l&&l()},children:"Remove"})]}),(0,v.jsx)(R.A,{show:h,onHide:()=>A(!1),title:"Available Plant",footerButtons:[{label:"Add",variant:"primary",onClick:()=>{var e;null===(e=f.current)||void 0===e||e.addPlant(),A(!1)}},{label:"Close",variant:"danger",onClick:()=>A(!1)}],children:(0,v.jsx)("div",{className:"modal-body",children:(0,v.jsx)(I.A,{ref:f,data:s,columns:i,CAName:r,addedItem:e=>{if(console.log(e),"Change Action"===p)e.length>0&&(t(e),a(e));else if(e.length>0){const n=e.map((e=>({title:e,Seq:"1",Status:"Current","MFG Change":"N/A","MFG Status":"N/A",Change:"N/A","Change Status":"N/A","Oracle Template":"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":"false",MBom:"Buy","Sort Value":""})));t(n),a(e)}},state:u})})})]})};a(4119);var k=a(1397),T=a(4675);const B=()=>{const{handleDrop:e}=h(),{performSearch:t}=(0,T.A)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"droppable-container mt-4",children:[(0,v.jsx)(M.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,v.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,v.jsxs)("div",{className:"divider-container",children:[(0,v.jsx)("hr",{className:"divider"}),(0,v.jsx)("span",{className:"divider-text",children:"or"}),(0,v.jsx)("hr",{className:"divider"})]}),(0,v.jsx)(k.A,{onSearch:a=>{t(a,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{console.log("Selected objects:",t),console.log("objectId: selectedObjects[0].id",t[0].id),t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})},F=["title"],L=()=>{const{initializeDroppableArea:e,loading:t}=h(),[a,o]=(0,n.useState)(0),[s,i]=(0,n.useState)([]),[r,g]=(0,n.useState)([]),[m,A]=(0,n.useState)(null),[x,I]=(0,n.useState)([]),[R,k]=(0,n.useState)([]),[T,L]=(0,n.useState)(!1),[q,_]=(0,n.useState)(!1),[K,U]=(0,n.useState)(!1),[G,z]=(0,n.useState)(!1),V=(0,l.wA)(),{showSuccessToast:W,showErrorToast:H}=(0,c.A)();let X=window.widget.getValue("Credentials");console.log("Security context is: ",X);const Y=(0,n.useCallback)(((e,t)=>{k((a=>a.map((a=>a.ItemId===e?(0,b.A)((0,b.A)({},a),{},{ItemPlants:a.ItemPlants.filter((e=>e.PlantID!==t))}):a))))}),[k]);console.log("Table Data after Adding:",s);const Z=(0,l.d4)((e=>e.droppedObject.selectedTableRows)),J=(0,l.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",J);const Q=(0,l.d4)((e=>e.droppedObject.CAItemObjectDetails.CAItemDetails));console.log("The CA Item Details are:",Q);const $=(0,l.d4)((e=>e.droppedObject.CAItemObjectDetails.CAallPlants));console.log("For CA all Plants are: ",$);const ee=(0,l.d4)((e=>e.droppedObject.CAItemObjectDetails.CAisMFGCA));console.log("isMFGCA value is:",ee);const te=(0,l.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",te);const ae=(0,l.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",ae);const ne=(0,l.d4)((e=>e.droppedObject.isDropped)),oe=(0,l.d4)((e=>e.droppedObject.plantObjectData.allPlants));console.log("[PlantAssignment] plant object data: ",oe);const le=(0,l.d4)((e=>e.droppedObject.plantObjectData.uniquePlants));console.log("[Plant Assignment] Unique Plants:",le);const se=(0,l.d4)((e=>e.droppedObject.plantObjectData.initialAssignedPlants));console.log("The Assigned Plants are:",se);const ie=(0,l.d4)((e=>e.droppedObject.plantObjectData.productChildren));console.log("[Plant Assignment] Product Children:",ie);const re=(0,l.d4)((e=>e.droppedObject.plantObjectData.CAName));console.log("[plant Assignment] CAName:",re);const ce=(0,l.d4)((e=>e.droppedObject.plantObjectData.headers));console.log("[Plant Assignment] Headers are: ",ce);const de=(0,n.useCallback)((()=>{let e=$.map((e=>e.title.replace(/^Plant /,"")));const t=0===Z.length?s:Z;let a=[...new Set(t.flatMap((e=>{var t;return(null===(t=e.Plant)||void 0===t?void 0:t.map((e=>e.PlantName)))||[]})))],n=e.filter((e=>!a.includes(e))).map((e=>({title:e})));return console.log("Unique table plants are :",n),ee?e.map((e=>({title:e}))):n}),[$,s,Z,ee]),ue=e=>{i(e)};if(console.log("Tanble Data is:",s),(0,n.useEffect)((()=>{s.length>=0&&o((e=>e+1))}),[s]),J.cardData&&J.initialDraggedData)var pe,ge,me=J.cardData["Maturity State"],he=null===(pe=J.initialDraggedData)||void 0===pe||null===(ge=pe.data)||void 0===ge?void 0:ge.items[0].objectType;const[ve,Ae]=(0,n.useState)(se);console.log("Duplicate Initial Assigned Classes are:",ve),(0,n.useEffect)((()=>{Ae(se),"Change Action"===he?k(Q):g(se)}),[se,he,Q]),(0,n.useEffect)((()=>{I("Change Action"===he?de():le)}),[de,le,he]);const fe=async e=>{var t,a;let n={};const o=[];console.log("Table Data",e),console.log("Before DupInitialAssignedClasses:",ve);let l=[],s=ve.map((t=>{let a=(0,b.A)({},t);return e.forEach((e=>{var t;let o={};const s=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=oe.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(a.title===e.Plant){(a.MBOM?"Make":"Buy")!==e.MBom&&(/^\d/.test(s)?(n["MBOM".concat(s)]="Make"===e.MBom,o.MBOMName="MBOM".concat(s),o.MBOMValue="Make"===e.MBom):(n["".concat(s,"MBOM")]="Make"===e.MBom,o.MBOMName="".concat(s,"MBOM"),o.MBOMValue="Make"===e.MBom),a.MBOM="Make"===e.MBom,o=(0,b.A)((0,b.A)({},o),{},{id:i,title:e.Plant,Type:"Update"}),l.push(o))}})),a}));e.forEach((e=>{if(!ve.find((t=>t.title===e.Plant))){var t;const a=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=oe.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(i){let t={id:i,title:e.Plant},r={};o.push(i),"Make"===e.MBom?(/^\d/.test(a)?(n["MBOM".concat(a)]=!0,r.MBOMName="MBOM".concat(a)):(n["".concat(a,"MBOM")]=!0,r.MBOMName="".concat(a,"MBOM")),t.MBOM=!0,r.MBOMValue=!0):(t.MBOM=!1,r.MBOMValue=!1),s.push(t),r=(0,b.A)((0,b.A)({},r),{},{id:i,title:e.Plant,Type:"New"}),l.push(r)}}}));let i=[];ve.forEach((t=>{if(!e.some((e=>e.Plant===t.title))){var a;const e=null===(a=oe.find((e=>e.title===t.title)))||void 0===a?void 0:a.id;e&&i.push(e)}})),s=s.filter((e=>!i.includes(e.id))),console.log("Rows getting deleted rowstoDelete:",i),console.log("After DupInitialAssignedClasses:",s),console.log("Classes to be Classified:",o),console.log("Updated Items:",n),console.log();const c=await(0,O.i)(n,o,s,ce,null===(t=J.initialDraggedData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.items[0].objectId,oe,ie,he,i,l,ae);if(c.success){_(!1),console.log("Save result:",c),""===c.Finalmessage||null==c.Finalmessage?W(d.KF):H((e=>{if(!e)return"An error occurred.";const t=e.split("\n").filter((e=>""!==e.trim()));return(0,v.jsxs)("div",{style:{userSelect:"text",cursor:"text",position:"relative",paddingRight:"40px"},children:[(0,v.jsx)("strong",{children:"Errors:"}),(0,v.jsx)("button",{onClick:()=>{const e=t.map((e=>"- ".concat(e))).join("\n");navigator.clipboard.writeText(e)},style:{position:"absolute",right:"10px",top:"-12px",background:"none",border:"none",cursor:"pointer",fontSize:"16px",color:"grey"},children:(0,v.jsx)(w.zU_,{size:12})}),(0,v.jsx)("ol",{children:t.map(((e,t)=>(0,v.jsx)("li",{children:e},t)))})]})})(c.Finalmessage),{autoClose:!1,closeOnClick:!1});let e=[];if(c.ErrorObj&&Object.keys(c.ErrorObj).length>0){let t=function(e,t,a,n){return console.log("Assigned Plants are:",t),console.log("unique Plants are:",n),e.forEach((e=>{"New"===e.type?(a=a.filter((t=>t.title!==e.title)),n.some((t=>t.title===e.title))||n.push(e)):"Update"===e.type&&(a=a.map((t=>t.title===e.title?(0,b.A)((0,b.A)({},t),{},{MBOM:"false"}):t)))})),{updatedAssignedClasses:a,uniquePlant:n}}(c.ErrorObj,r,s,le);console.log("response is ",t),t&&(I(t.uniquePlant),e=t.updatedAssignedClasses)}else e=s;e&&(g(e),Ae(e))}else _(!1),H(d.fm)};(0,n.useEffect)((()=>{ne||e()}),[ne,e]),(0,n.useEffect)((()=>{L(te)}),[te]);const be=(0,n.useMemo)((()=>S("Change Action"===he?R:r,he)),[R,r,he]),Ce=(0,n.useMemo)((()=>(e=>e?e.map((e=>({"Available Plant":(null===e||void 0===e?void 0:e.title)||"N/A"}))):[])(x)),[x]);console.log("[Plant Assignment] Unique Table Data:",Ce),(0,n.useEffect)((()=>{be.length>=0&&(console.log("New Table Data:",be),i(be),o((e=>e+1)))}),[be]);const je=(0,n.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let a={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(a.EIN=t.EIN||"N/A",a["CAD Format"]=t["CAD Format"]||"N/A"),a})(J)),[J]);console.log(je),(0,n.useEffect)((()=>{U(!!je)}),[je]);const Me=(0,n.useMemo)((()=>((e,t,a,n)=>(console.log("type here is: ",t),"Change Action"===t?[{accessorKey:"ItemName",header:"Item Name"},{accessorKey:"Plant",header:"Plant",cell:e=>{let{row:t}=e;return(0,v.jsx)(y,{plants:t.original.Plant,itemId:t.original.ItemId,isRemoveMode:a,handleRemovePlant:n})}}]:[{accessorKey:"Plant",header:"Plant"},{accessorKey:"Seq",header:"Seq"},{accessorKey:"MBom",header:"MBom",cell:t=>{let{row:a,getValue:n,table:o}=t;return(0,v.jsxs)("select",{value:n(),onChange:t=>{var n;if(!e)return;const l=t.target.value,s=o.getRowModel().rows.map((e=>e.id===a.id?(0,b.A)((0,b.A)({},e.original),{},{MBom:l}):e.original));null===(n=o.options.meta)||void 0===n||n.updateTableData(s)},disabled:!e,className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:(0,b.A)((0,b.A)({},!1===e&&{appearance:"none"}),{},{width:"70%",padding:"5px",fontSize:"14px",color:"#333",background:"none",border:"none",textAlign:"left"}),onMouseOver:t=>{e&&(t.target.style.border="1px solid #ccc")},onMouseOut:t=>{e&&(t.target.style.border="none")},children:[(0,v.jsx)("option",{value:"Make",children:"Make"}),(0,v.jsx)("option",{value:"Buy",children:"Buy"})]})}},{accessorKey:"Status",header:"Status"},{accessorKey:"MFG Change",header:"MFG Change"},{accessorKey:"MFG Status",header:"MFG Status"},{accessorKey:"Change",header:"Change"},{accessorKey:"Change Status",header:"Change Status"},{accessorKey:"Oracle Template",header:"Oracle Template"},{accessorKey:"ERP Status",header:"ERP Status"},{accessorKey:"ERP Export",header:"ERP Export"},{accessorKey:"Lead Plant",header:"Lead Plant"},{accessorKey:"Sort Value",header:"Sort Value"}]))(re,he,G,Y)),[re,he,G,Y]),Pe=(0,n.useMemo)((()=>N),[]);(0,n.useEffect)((()=>{console.log("[PlantAssignment] State Changes:",{loading:t,loadingParentDetails:te,isDropped:ne})}),[t,te,ne]);return(0,v.jsxs)(v.Fragment,{children:[q&&(0,v.jsx)(u.A,{}),!ne&&!t&&!T&&(0,v.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"},children:[(0,v.jsx)(B,{}),(0,v.jsxs)("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:"10px",alignItems:"center"},children:[(0,v.jsx)(C.A.Group,{controlId:"formFileMultiple",children:(0,v.jsx)(C.A.Control,{type:"file",multiple:!0,onChange:e=>{A(e.target.files.length>0?e.target.files:null)}})}),(0,v.jsx)(j.A,{variant:"outline-primary",onClick:()=>{m&&console.log("Files submitted:",m)},style:{cursor:m?"pointer":"not-allowed",opacity:m?1:.5},children:"Create Manufacturing CA"})]})]}),ne&&(0,v.jsxs)(v.Fragment,{children:[t&&(0,v.jsx)(u.A,{}),(0,v.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsx)("div",{className:" p-0 pt-4",children:(0,v.jsx)(M.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{e(),V((0,p.Rr)(!1)),V((0,p.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),V((0,p.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{}})),i([]),U(!1)}})}),je&&(0,v.jsx)(D.A,{data:je})]})}),T?(0,v.jsx)("div",{className:"loading-indicator mt-5",children:(0,v.jsx)(u.A,{})}):(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"wrapper-cta",children:[(0,v.jsx)(E,{uniquedata:Ce,uniqueColumn:Pe,CAName:re,onAddPlant:e=>{console.log("Data Received",e),console.log("[Plant Assignment] Table data",s),console.log("Added Data from Toolbar",e),o((e=>e+1)),"Change Action"===he?(console.log("Change Action Plant is Added"),k((t=>t.map((t=>{if(!(0===Z.length||Z.some((e=>e.ItemId===t.ItemId))))return t;let a=t.ItemPlants||[];const n=new Set(Q.flatMap((e=>e.ItemPlants||[])).map((e=>e.PlantName.trim()))),o=new Set(a.map((e=>e.PlantName.trim()))),l=e.map((e=>{const t=$.find((t=>t.title.replace(/^Plant\s+/,"").trim()===e.trim()));if(!t)return null;const a=n.has(e.trim()),l=o.has(e.trim());return(0,b.A)({PlantName:e,PlantID:t.id},ee&&!a&&{color:l?void 0:"green"})})).filter(Boolean);return(0,b.A)((0,b.A)({},t),{},{ItemPlants:[...a,...l]})}))))):i((t=>[...e.map((e=>{let{title:t}=e,a=(0,f.A)(e,F);return(0,b.A)({Plant:t},a)})),...t]))},addedPlant:e=>{console.log("The data received from Child is:",e);const t=Ce.filter((t=>!e.find((e=>e===t["Available Plant"]))));if(console.log("Updated Table Data after unique:",t),t){const e=t.map((e=>({title:e["Available Plant"]})));console.log(e),I(e)}},onSave:async()=>{console.log("OnSave is Called with the TableData",s),_(!0),await fe(s)},onRemove:async()=>{if("Change Action"===he)console.log("Remove is clicked for Chnage Action"),z(!0);else if(console.log("Selected Table Rows:",Z),console.log("handleRemove is Called with the TableData",s),Z.length>0){const e=Z.map((e=>e.Plant));console.log("Selected Titles:",e);const t=e.map((e=>({title:e})));console.log("Removed Titles:",t);const a=s.filter((t=>!e.includes(t.Plant)));console.log("updateTableData",ue),ue&&(i(a),o((e=>e+1))),I((e=>[...e,...t]))}else alert("Please select at least one row to remove.")},state:me,type:he,isMFGCA:ee}),(0,v.jsx)(P.A,{data:s,columns:Me,meta:{updateTableData:ue},widgetType:"Plant_Assignment_Widget"},a)]})})]})]})};let q=null;function _(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let a=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");a||(a=document.createElement("div"),a.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(a):document.body.appendChild(a)),q||(q=o.createRoot(a)),q.render((0,v.jsxs)(l.Kq,{store:s.A,children:[(0,v.jsx)(A,{}),(0,v.jsx)(L,{}),(0,v.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()}}]);
//# sourceMappingURL=947.c65df4e2.chunk.js.map