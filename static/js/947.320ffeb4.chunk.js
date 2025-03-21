"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[947],{6313:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var o=a(4104),n=a(4282),l=a(579);const s=e=>{let{show:t,onHide:a,title:s,children:i,footerButtons:r}=e;return(0,l.jsxs)(o.A,{show:t,onHide:a,size:"lg",centered:!0,children:[(0,l.jsx)(o.A.Header,{closeButton:!0,children:(0,l.jsx)(o.A.Title,{children:s||"Modal Title"})}),(0,l.jsx)(o.A.Body,{children:i}),(0,l.jsx)(o.A.Footer,{children:r?r.map(((e,t)=>(0,l.jsx)(n.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,l.jsx)(n.A,{variant:"secondary",onClick:a,children:"Close"})})]})}},7725:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var o=a(5043),n=a(4391),l=(a(2342),a(9555),a(3003)),s=a(2670),i=a(2115),r=(a(8421),a(4050),a(9959),a(174)),d=a(2725),c=a(3277),u=a(6713),p=a(5645),g=a(1584),m=a(314);const h=()=>{const{showErrorToast:e}=(0,d.A)(),{handlePlantAssignment:t}=(0,g.A)(),a=(0,l.d4)((e=>e.droppedObject.isDropped)),n=(0,l.d4)((e=>e.droppedObject.loading)),s=(0,l.wA)(),i=(0,o.useCallback)((async a=>{try{var o,n;const r={success:"true",data:{cardData:{Type:"Change Action","Maturity State":"Completed",Owner:"Sudarshan Sambamurthy","Collaborative Space":"Micro Motion","Collaborative Space Title":"MSOL-Micro Motion","Dropped Revision":"","Dropped Revision ID":"","Latest Released Revision":"","Latest Released Revision ID":"",EIN:"","CAD Format":"",imageURL:"https://oi000186152-us1-space.3dexperience.3ds.com:443/enovia/snresources/images/icons/large/I_ECM_CA108x144.png",relativePath:"/resources/v1/modeler/dslc/changeaction/474D00260AC21A0067CA9D1000015F59",Title:null===(o=a[0])||void 0===o?void 0:o.displayName,Name:null===(n=a[0])||void 0===n?void 0:n.displayName,organization:"BU-0000001","Latest Revision":"-"}}};if(r.success){s((0,p.um)({cardData:r.data.cardData}));const e=r.data.cardData;var l,i;if(console.log("[Dragged Items are]",e),s((0,p.Rr)(!0)),r)await t(e["Collaborative Space"],e["Maturity State"],null===(l=a[0])||void 0===l?void 0:l.objectId,null===(i=a[0])||void 0===i?void 0:i.objectType)}else e(c.wX)}catch(r){console.error("[FetchObjectDetails] Error fetching details:",r),e(c.wX)}finally{s((0,p.r1)(!1))}}),[s,t]),r=(0,o.useCallback)((async t=>{console.log("[handleDrop] handleDrop called with dataItems:",t);try{if(t&&t.length>0){var a;const o=null===(a=t[0])||void 0===a?void 0:a.objectType;if(!["VPMReference","Document","Raw_Material","Change Action"].includes(o))return void e(c.Zo);s((0,p.Rr)(!0)),console.log("[handleDrop] \ud83d\udd04 Force setting `loading = true`..."),s((0,p.r1)(!1)),setTimeout((()=>s((0,p.r1)(!0))),0),await i(t)}else console.warn("[handleDrop] No data items to process.")}catch(o){console.error("[Drop] Error in handleDrop:",o),s((0,p.r1)(!1)),console.log("[handleDrop] Error in handleDrop, setting loading to false"),e(c.nz)}}),[i,e]);return{initializeDroppableArea:(0,o.useCallback)((()=>{a?console.log("[initializeDroppableArea] \u23f3 isDropped is already true. Skipping reset."):(console.log("[initializeDroppableArea] \ud83d\ude80 Resetting isDropped to false..."),s((0,p.Rr)(!1)));const t=setInterval((()=>{const a=document.querySelector(".droppable-container");a&&(clearInterval(t),(0,m.pn)(a,r,s,e))}),100);return()=>clearInterval(t)}),[r,s]),loading:n,handleDrop:r}};var v=a(579);const f=()=>{const{handleDrop:e}=h(),{showSuccessToast:t,showErrorToast:a}=(0,d.A)(),[n,l]=(0,o.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,o.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var o,n;const i=(new Error).stack.split("\n"),d=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(i)&&!d)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),l(!0);const u=s.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===u||void 0===u||null===(o=u.data)||void 0===o||null===(n=o.items)||void 0===n||!n.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",u),void l(!1);try{await(0,r.M)(u.data.items,e)}catch(p){console.error("[WidgetLifecycle] \u274c Error during refresh:",p),a(c.H6)}finally{l(!1),t(c._l)}}))}),[]),n?(0,v.jsx)(u.A,{}):null};var A=a(9379),b=a(45),j=(a(4816),a(2691)),M=a(4282),C=a(3637),D=a(768),w=a(759),x=a(3204);const y=(e,t)=>e?e.map((e=>{var a;return"Change Action"===t?{ItemName:(null===e||void 0===e?void 0:e.ItemTitle)||"N/A",Plant:null!==e&&void 0!==e&&null!==(a=e.ItemPlants)&&void 0!==a&&a.length?e.ItemPlants.map((e=>e.PlantName)).join(", "):"N/A"}:{Plant:(null===e||void 0===e?void 0:e.title)||"N/A",Seq:(null===e||void 0===e?void 0:e.Seq)||"1",Status:"Current","MFG Change":(null===e||void 0===e?void 0:e.MFGChange)||"N/A","MFG Status":(null===e||void 0===e?void 0:e.MFGStatus)||"N/A",Change:(null===e||void 0===e?void 0:e.Change)||"N/A","Change Status":(null===e||void 0===e?void 0:e.ChangeStatus)||"N/A","Oracle Template":e.OracleTemplate||"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":!1,MBom:e.MBOM?"Make":"Buy","Sort Value":""}})):[],P=[{accessorKey:"Available Plant",header:"Available Plant"}];var S=a(3127),N=a(5362),O=a(6313);const R=e=>{let{onAddPlant:t,addedPlant:a,onSave:n,onRemove:l,uniquedata:s,uniqueColumn:i,CAName:r,state:u}=e;const{showWarningToast:p}=(0,d.A)(),[g,m]=(0,o.useState)([]),[h,f]=(0,o.useState)([]),[A,b]=(0,o.useState)(!1),j=(0,o.useRef)();console.log("[Unique Table Data]:",s);return console.log("Added item data:",h),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"d-flex cta-absolute",children:[(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{r?b(!0):p("RELEASED"===u?c.sL:c.Ru)},children:"Add Plant"}),(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{n&&r?n():p("RELEASED"===u?c.EZ:c.nX)},children:"Save"}),(0,v.jsx)("button",{className:"btn btn-outline-danger btn-lg m-2",onClick:()=>{l&&l()},children:"Remove"})]}),(0,v.jsx)(O.A,{show:A,onHide:()=>b(!1),title:"Available Plant",footerButtons:[{label:"Add",variant:"primary",onClick:()=>{var e;null===(e=j.current)||void 0===e||e.addPlant(),b(!1)}},{label:"Close",variant:"danger",onClick:()=>b(!1)}],children:(0,v.jsx)("div",{className:"modal-body",children:(0,v.jsx)(N.A,{ref:j,data:s,columns:i,CAName:r,addedItem:e=>{if(console.log(e),m(e),e.length>0){const o=e.map((e=>({title:e,Seq:"1",Status:"Current","MFG Change":"N/A","MFG Status":"N/A",Change:"N/A","Change Status":"N/A","Oracle Template":"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":"false",MBom:"Buy","Sort Value":""})));t(o),f(o),a(e)}},state:u})})})]})};a(4119);var E=a(1397),T=a(4675);const B=()=>{const{handleDrop:e}=h(),{performSearch:t}=(0,T.A)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"droppable-container mt-4",children:[(0,v.jsx)(C.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,v.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,v.jsxs)("div",{className:"divider-container",children:[(0,v.jsx)("hr",{className:"divider"}),(0,v.jsx)("span",{className:"divider-text",children:"or"}),(0,v.jsx)("hr",{className:"divider"})]}),(0,v.jsx)(E.A,{onSearch:a=>{t(a,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{console.log("Selected objects:",t),console.log("objectId: selectedObjects[0].id",t[0].id),t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})},k=["title"],I=()=>{const{initializeDroppableArea:e,loading:t}=h(),[a,n]=(0,o.useState)(0),[s,i]=(0,o.useState)([]),[r,g]=(0,o.useState)([]),[m,f]=(0,o.useState)(null),[N,O]=(0,o.useState)([]),[E,T]=(0,o.useState)([]),[I,F]=(0,o.useState)(!1),[L,_]=(0,o.useState)(!1),[q,K]=(0,o.useState)(!1),U=(0,l.wA)(),{showSuccessToast:V,showErrorToast:z}=(0,d.A)();console.log("Table Data after Adding:",s);const G=(0,l.d4)((e=>e.droppedObject.selectedTableRows)),W=(0,l.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",W);const H=(0,l.d4)((e=>e.droppedObject.CAItemDetails)),X=(0,l.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",X);const Y=(0,l.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",Y);const Z=(0,l.d4)((e=>e.droppedObject.isDropped)),J=(0,l.d4)((e=>e.droppedObject.plantObjectData.allPlants));console.log("[PlantAssignment] plant object data: ",J);const Q=(0,l.d4)((e=>e.droppedObject.plantObjectData.uniquePlants));console.log("[Plant Assignment] Unique Plants:",Q),(0,o.useEffect)((()=>{O(Q)}),[Q]);const $=(0,l.d4)((e=>e.droppedObject.plantObjectData.initialAssignedPlants));console.log("The Assigned Plants are:",$);const ee=(0,l.d4)((e=>e.droppedObject.plantObjectData.productChildren));console.log("[Plant Assignment] Product Children:",ee);const te=(0,l.d4)((e=>e.droppedObject.plantObjectData.CAName));console.log("[plant Assignment] CAName:",te);const ae=(0,l.d4)((e=>e.droppedObject.plantObjectData.headers));console.log("[Plant Assignment] Headers are: ",ae);const oe=e=>{i(e)};if(console.log("Tanble Data is:",s),(0,o.useEffect)((()=>{s.length>=0&&n((e=>e+1))}),[s]),W.cardData&&W.initialDraggedData)var ne,le,se=W.cardData["Maturity State"],ie=null===(ne=W.initialDraggedData)||void 0===ne||null===(le=ne.data)||void 0===le?void 0:le.items[0].objectType;const[re,de]=(0,o.useState)($);console.log("Duplicate Initial Assigned Classes are:",re),(0,o.useEffect)((()=>{de($),g($)}),[$]);const ce=async e=>{var t,a;let o={};const n=[];console.log("Table Data",e),console.log("Before DupInitialAssignedClasses:",re);let l=[],s=re.map((t=>{let a=(0,A.A)({},t);return e.forEach((e=>{var t;let n={};const s=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=J.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(a.title===e.Plant){(a.MBOM?"Make":"Buy")!==e.MBom&&(/^\d/.test(s)?(o["MBOM".concat(s)]="Make"===e.MBom,n.MBOMName="MBOM".concat(s),n.MBOMValue="Make"===e.MBom):(o["".concat(s,"MBOM")]="Make"===e.MBom,n.MBOMName="".concat(s,"MBOM"),n.MBOMValue="Make"===e.MBom),a.MBOM="Make"===e.MBom,n=(0,A.A)((0,A.A)({},n),{},{id:i,title:e.Plant,Type:"Update"}),l.push(n))}})),a}));e.forEach((e=>{if(!re.find((t=>t.title===e.Plant))){var t;const a=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=J.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(i){let t={id:i,title:e.Plant},r={};n.push(i),"Make"===e.MBom?(/^\d/.test(a)?(o["MBOM".concat(a)]=!0,r.MBOMName="MBOM".concat(a)):(o["".concat(a,"MBOM")]=!0,r.MBOMName="".concat(a,"MBOM")),t.MBOM=!0,r.MBOMValue=!0):(t.MBOM=!1,r.MBOMValue=!1),s.push(t),r=(0,A.A)((0,A.A)({},r),{},{id:i,title:e.Plant,Type:"New"}),l.push(r)}}}));let i=[];re.forEach((t=>{if(!e.some((e=>e.Plant===t.title))){var a;const e=null===(a=J.find((e=>e.title===t.title)))||void 0===a?void 0:a.id;e&&i.push(e)}})),s=s.filter((e=>!i.includes(e.id))),console.log("Rows getting deleted rowstoDelete:",i),console.log("After DupInitialAssignedClasses:",s),console.log("Classes to be Classified:",n),console.log("Updated Items:",o),console.log();const d=await(0,S.i)(o,n,s,ae,null===(t=W.initialDraggedData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.items[0].objectId,J,ee,ie,i,l,Y);if(d.success){_(!1),console.log("Save result:",d),""===d.Finalmessage||null==d.Finalmessage?V(c.KF):z((e=>{if(!e)return"An error occurred.";const t=e.split("\n").filter((e=>""!==e.trim()));return(0,v.jsxs)("div",{style:{userSelect:"text",cursor:"text",position:"relative",paddingRight:"40px"},children:[(0,v.jsx)("strong",{children:"Errors:"}),(0,v.jsx)("button",{onClick:()=>{const e=t.map((e=>"- ".concat(e))).join("\n");navigator.clipboard.writeText(e)},style:{position:"absolute",right:"10px",top:"-12px",background:"none",border:"none",cursor:"pointer",fontSize:"16px",color:"grey"},children:(0,v.jsx)(x.zU_,{size:12})}),(0,v.jsx)("ol",{children:t.map(((e,t)=>(0,v.jsx)("li",{children:e},t)))})]})})(d.Finalmessage),{autoClose:!1,closeOnClick:!1});let e=[];if(d.ErrorObj&&Object.keys(d.ErrorObj).length>0){let t=function(e,t,a,o){return console.log("Assigned Plants are:",t),console.log("unique Plants are:",o),e.forEach((e=>{"New"===e.type?(a=a.filter((t=>t.title!==e.title)),o.some((t=>t.title===e.title))||o.push(e)):"Update"===e.type&&(a=a.map((t=>t.title===e.title?(0,A.A)((0,A.A)({},t),{},{MBOM:"false"}):t)))})),{updatedAssignedClasses:a,uniquePlant:o}}(d.ErrorObj,r,s,Q);console.log("response is ",t),t&&(O(t.uniquePlant),e=t.updatedAssignedClasses)}else e=s;e&&(g(e),de(e))}else _(!1),z(c.fm)};(0,o.useEffect)((()=>{Z||e()}),[Z,e]),(0,o.useEffect)((()=>{F(X)}),[X]);const ue=(0,o.useMemo)((()=>y("Change Action"===ie?H:r,ie)),[H,r,ie]),pe=(0,o.useMemo)((()=>(e=>e?e.map((e=>({"Available Plant":(null===e||void 0===e?void 0:e.title)||"N/A"}))):[])(N)),[N]);console.log("[Plant Assignment] Unique Table Data:",pe),(0,o.useEffect)((()=>{ue.length>=0&&(console.log("New Table Data:",ue),i(ue),n((e=>e+1)))}),[ue]);const ge=(0,o.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let a={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(a.EIN=t.EIN||"N/A",a["CAD Format"]=t["CAD Format"]||"N/A"),a})(W)),[W]);console.log(ge),(0,o.useEffect)((()=>{K(!!ge)}),[ge]);const me=(0,o.useMemo)((()=>((e,t)=>(console.log("type here is: ",t),"Change Action"===t?[{accessorKey:"ItemName",header:"Item Name"},{accessorKey:"Plant",header:"Plant"}]:[{accessorKey:"Plant",header:"Plant"},{accessorKey:"Seq",header:"Seq"},{accessorKey:"MBom",header:"MBom",cell:t=>{let{row:a,getValue:o,table:n}=t;return(0,v.jsxs)("select",{value:o(),onChange:t=>{var o;if(!e)return;const l=t.target.value,s=n.getRowModel().rows.map((e=>e.id===a.id?(0,A.A)((0,A.A)({},e.original),{},{MBom:l}):e.original));null===(o=n.options.meta)||void 0===o||o.updateTableData(s)},disabled:!e,className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:(0,A.A)((0,A.A)({},!1===e&&{appearance:"none"}),{},{width:"70%",padding:"5px",fontSize:"14px",color:"#333",background:"none",border:"none",textAlign:"left"}),onMouseOver:t=>{e&&(t.target.style.border="1px solid #ccc")},onMouseOut:t=>{e&&(t.target.style.border="none")},children:[(0,v.jsx)("option",{value:"Make",children:"Make"}),(0,v.jsx)("option",{value:"Buy",children:"Buy"})]})}},{accessorKey:"Status",header:"Status"},{accessorKey:"MFG Change",header:"MFG Change"},{accessorKey:"MFG Status",header:"MFG Status"},{accessorKey:"Change",header:"Change"},{accessorKey:"Change Status",header:"Change Status"},{accessorKey:"Oracle Template",header:"Oracle Template"},{accessorKey:"ERP Status",header:"ERP Status"},{accessorKey:"ERP Export",header:"ERP Export"},{accessorKey:"Lead Plant",header:"Lead Plant"},{accessorKey:"Sort Value",header:"Sort Value"}]))(te,ie)),[te,ie]),he=(0,o.useMemo)((()=>P),[]);(0,o.useEffect)((()=>{console.log("[PlantAssignment] State Changes:",{loading:t,loadingParentDetails:X,isDropped:Z})}),[t,X,Z]);return(0,v.jsxs)(v.Fragment,{children:[L&&(0,v.jsx)(u.A,{}),!Z&&!t&&!I&&(0,v.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"},children:[(0,v.jsx)(B,{}),(0,v.jsxs)("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:"10px",alignItems:"center"},children:[(0,v.jsx)(j.A.Group,{controlId:"formFileMultiple",children:(0,v.jsx)(j.A.Control,{type:"file",multiple:!0,onChange:e=>{f(e.target.files.length>0?e.target.files:null)}})}),(0,v.jsx)(M.A,{variant:"outline-primary",onClick:()=>{m&&console.log("Files submitted:",m)},style:{cursor:m?"pointer":"not-allowed",opacity:m?1:.5},children:"Create Manufacturing CA"})]})]}),Z&&(0,v.jsxs)(v.Fragment,{children:[t&&(0,v.jsx)(u.A,{}),(0,v.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsx)("div",{className:" p-0 pt-4",children:(0,v.jsx)(C.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{e(),U((0,p.Rr)(!1)),U((0,p.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),U((0,p.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{}})),i([]),K(!1)}})}),ge&&(0,v.jsx)(w.A,{data:ge})]})}),I?(0,v.jsx)("div",{className:"loading-indicator mt-5",children:(0,v.jsx)(u.A,{})}):(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"wrapper-cta",children:[(0,v.jsx)(R,{uniquedata:pe,data:s,uniqueColumn:he,CAName:te,onAddPlant:e=>{console.log("Data Received"),T(e),console.log("[Plant Assignment] Table data",s),console.log("Added Data from Toolbar",e),i((t=>[...e.map((e=>{let{title:t}=e,a=(0,b.A)(e,k);return(0,A.A)({Plant:t},a)})),...t])),n((e=>e+1))},addedPlant:e=>{console.log("The data received from Child is:",e);const t=pe.filter((t=>!e.find((e=>e===t["Available Plant"]))));if(console.log("Updated Table Data after unique:",t),t){const e=t.map((e=>({title:e["Available Plant"]})));console.log(e),O(e)}},onSave:async()=>{console.log("OnSave is Called with the TableData",s),_(!0),await ce(s)},onRemove:async()=>{if(console.log("Selected Table Rows:",G),console.log("handleRemove is Called with the TableData",s),G.length>0){const e=G.map((e=>e.Plant));console.log("Selected Titles:",e);const t=e.map((e=>({title:e})));console.log("Removed Titles:",t);const a=s.filter((t=>!e.includes(t.Plant)));console.log("updateTableData",oe),oe&&(i(a),n((e=>e+1))),O((e=>[...e,...t]))}else alert("Please select at least one row to remove.")},state:se}),(0,v.jsx)(D.A,{data:s,columns:me,meta:{updateTableData:oe},widgetType:"Plant_Assignment_Widget"},a)]})})]})]})};let F=null;function L(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let a=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");a||(a=document.createElement("div"),a.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(a):document.body.appendChild(a)),F||(F=n.createRoot(a)),F.render((0,v.jsxs)(l.Kq,{store:s.A,children:[(0,v.jsx)(f,{}),(0,v.jsx)(I,{}),(0,v.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()}}]);
//# sourceMappingURL=947.320ffeb4.chunk.js.map