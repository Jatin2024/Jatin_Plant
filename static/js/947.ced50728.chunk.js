"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[947],{6313:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var n=a(4104),l=a(4282),o=a(579);const s=e=>{let{show:t,onHide:a,title:s,children:i,footerButtons:r}=e;return(0,o.jsxs)(n.A,{show:t,onHide:a,size:"lg",centered:!0,children:[(0,o.jsx)(n.A.Header,{closeButton:!0,children:(0,o.jsx)(n.A.Title,{children:s||"Modal Title"})}),(0,o.jsx)(n.A.Body,{children:i}),(0,o.jsx)(n.A.Footer,{children:r?r.map(((e,t)=>(0,o.jsx)(l.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,o.jsx)(l.A,{variant:"secondary",onClick:a,children:"Close"})})]})}},7725:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(5043),l=a(4391),o=(a(2342),a(9555),a(3003)),s=a(2670),i=a(2115),r=(a(8421),a(4050),a(9959),a(174)),d=a(2725),c=a(3277),u=a(6713),p=a(5645),g=a(1584),m=a(314);const h=()=>{const{showErrorToast:e}=(0,d.A)(),{handlePlantAssignment:t}=(0,g.A)(),a=(0,o.d4)((e=>e.droppedObject.isDropped)),l=(0,o.d4)((e=>e.droppedObject.loading)),s=(0,o.wA)(),i=(0,n.useCallback)((async a=>{try{const o=await(0,m.Sj)({dataItems:a});if(o.success){s((0,p.um)({cardData:o.data.cardData}));const e=o.data.cardData;var n,l;if(console.log("[Dragged Items are]",e),s((0,p.Rr)(!0)),o)await t(e["Collaborative Space"],e["Maturity State"],null===(n=a[0])||void 0===n?void 0:n.objectId,null===(l=a[0])||void 0===l?void 0:l.objectType)}else e(c.wX)}catch(o){console.error("[FetchObjectDetails] Error fetching details:",o),e(c.wX)}finally{s((0,p.r1)(!1))}}),[s,t]),r=(0,n.useCallback)((async t=>{console.log("[handleDrop] handleDrop called with dataItems:",t);try{if(t&&t.length>0){var a;const n=null===(a=t[0])||void 0===a?void 0:a.objectType;if(!["VPMReference","Document","Raw_Material","Change Action"].includes(n))return void e(c.Zo);s((0,p.Rr)(!0)),console.log("[handleDrop] \ud83d\udd04 Force setting `loading = true`..."),s((0,p.r1)(!1)),setTimeout((()=>s((0,p.r1)(!0))),0),await i(t)}else console.warn("[handleDrop] No data items to process.")}catch(n){console.error("[Drop] Error in handleDrop:",n),s((0,p.r1)(!1)),console.log("[handleDrop] Error in handleDrop, setting loading to false"),e(c.nz)}}),[i,e]);return{initializeDroppableArea:(0,n.useCallback)((()=>{a?console.log("[initializeDroppableArea] \u23f3 isDropped is already true. Skipping reset."):(console.log("[initializeDroppableArea] \ud83d\ude80 Resetting isDropped to false..."),s((0,p.Rr)(!1)));const t=setInterval((()=>{const a=document.querySelector(".droppable-container");a&&(clearInterval(t),(0,m.pn)(a,r,s,e))}),100);return()=>clearInterval(t)}),[r,s]),loading:l,handleDrop:r}};var A=a(579);const v=()=>{const{handleDrop:e}=h(),{showSuccessToast:t,showErrorToast:a}=(0,d.A)(),[l,o]=(0,n.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,n.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var n,l;const i=(new Error).stack.split("\n"),d=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(i)&&!d)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),o(!0);const u=s.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===u||void 0===u||null===(n=u.data)||void 0===n||null===(l=n.items)||void 0===l||!l.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",u),void o(!1);try{await(0,r.M)(u.data.items,e)}catch(p){console.error("[WidgetLifecycle] \u274c Error during refresh:",p),a(c.H6)}finally{o(!1),t(c._l)}}))}),[]),l?(0,A.jsx)(u.A,{}):null};var f=a(45),b=a(9379),j=(a(4816),a(2691)),C=a(4282),P=a(3637),w=a(768),M=a(759),x=a(184),D=a(3825);const y=e=>{let{plants:t=[],itemId:a,isRemoveMode:n,handleRemovePlant:l}=e;return console.log("PlantRenderer received plants:",t),null!==t&&void 0!==t&&t.length?(0,A.jsx)(A.Fragment,{children:t.map((e=>(0,A.jsxs)("span",{style:{marginRight:"8px",display:"inline-flex",alignItems:"center",color:e.color||"black",fontWeight:"bold"},children:[e.PlantName,n&&(0,A.jsx)(D.zhF,{size:16,style:{cursor:"pointer",color:"red",marginLeft:"4px"},onClick:()=>l(a,e.PlantID)})]},e.PlantID)))}):"N/A"},S=(e,t)=>e?e.map((e=>"Change Action"===t?{ItemName:(null===e||void 0===e?void 0:e.ItemTitle)||"N/A",Plant:(null===e||void 0===e?void 0:e.ItemPlants)||[],ItemId:(null===e||void 0===e?void 0:e.ItemId)||"N/A"}:{Plant:(null===e||void 0===e?void 0:e.title)||"N/A",Seq:(null===e||void 0===e?void 0:e.Seq)||"1",Status:"Current","MFG Change":(null===e||void 0===e?void 0:e.MFGChange)||"N/A","MFG Status":(null===e||void 0===e?void 0:e.MFGStatus)||"N/A",Change:(null===e||void 0===e?void 0:e.Change)||"N/A","Change Status":(null===e||void 0===e?void 0:e.ChangeStatus)||"N/A","Oracle Template":e.OracleTemplate||"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":!1,MBom:e.MBOM?"Make":"Buy","Sort Value":""})):[],N=[{accessorKey:"Available Plant",header:"Available Plant"}];var O=a(3127),I=a(5362),R=a(6313);const E=e=>{let{onAddPlant:t,addedPlant:a,onSave:l,onRemove:o,uniquedata:s,uniqueColumn:i,CAName:r,state:u,type:p,isMFGCA:g}=e;const{showWarningToast:m}=(0,d.A)(),[h,v]=(0,n.useState)(!1),f=(0,n.useRef)();console.log("[Unique Table Data]:",s);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{className:"d-flex cta-absolute",children:[!g&&(0,A.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{"Change Action"===p||r?v(!0):m("RELEASED"===u?c.sL:c.Ru)},children:"Add Plant"}),g&&(0,A.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{v(!0)},children:"Add/Update Plants"}),(0,A.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{l&&r?l():m("RELEASED"===u?c.EZ:c.nX)},children:"Save"}),(0,A.jsx)("button",{className:"btn btn-outline-danger btn-lg m-2",onClick:()=>{o&&o()},children:"Remove"})]}),(0,A.jsx)(R.A,{show:h,onHide:()=>v(!1),title:"Available Plant",footerButtons:[{label:"Add",variant:"primary",onClick:()=>{var e;null===(e=f.current)||void 0===e||e.addPlant(),v(!1)}},{label:"Close",variant:"danger",onClick:()=>v(!1)}],children:(0,A.jsx)("div",{className:"modal-body",children:(0,A.jsx)(I.A,{ref:f,data:s,columns:i,CAName:r,addedItem:e=>{if(console.log(e),"Change Action"===p)e.length>0&&(t(e),a(e));else if(e.length>0){const n=e.map((e=>({title:e,Seq:"1",Status:"Current","MFG Change":"N/A","MFG Status":"N/A",Change:"N/A","Change Status":"N/A","Oracle Template":"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":"false",MBom:"Buy","Sort Value":""})));t(n),a(e)}},state:u})})})]})};a(4119);var k=a(1397),T=a(4675);const B=()=>{const{handleDrop:e}=h(),{performSearch:t}=(0,T.A)();return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:"droppable-container mt-4",children:[(0,A.jsx)(P.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,A.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,A.jsxs)("div",{className:"divider-container",children:[(0,A.jsx)("hr",{className:"divider"}),(0,A.jsx)("span",{className:"divider-text",children:"or"}),(0,A.jsx)("hr",{className:"divider"})]}),(0,A.jsx)(k.A,{onSearch:a=>{t(a,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{console.log("Selected objects:",t),console.log("objectId: selectedObjects[0].id",t[0].id),t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})},F=["title"],L=()=>{const{initializeDroppableArea:e,loading:t}=h(),[a,l]=(0,n.useState)(0),[s,i]=(0,n.useState)([]),[r,g]=(0,n.useState)([]),[m,v]=(0,n.useState)(null),[D,I]=(0,n.useState)([]),[R,k]=(0,n.useState)([]),[T,L]=(0,n.useState)(!1),[q,_]=(0,n.useState)(!1),[K,G]=(0,n.useState)(!1),[U,V]=(0,n.useState)(!1),z=(0,o.wA)(),{showSuccessToast:W,showErrorToast:H}=(0,d.A)();let X=window.widget.getValue("Credentials");console.log("Security context is: ",X);const Y=(0,n.useCallback)(((e,t)=>{k((a=>a.map((a=>a.ItemId===e?(0,b.A)((0,b.A)({},a),{},{ItemPlants:a.ItemPlants.filter((e=>e.PlantID!==t))}):a))))}),[k]);console.log("Table Data after Adding:",s);const Z=(0,o.d4)((e=>e.droppedObject.selectedTableRows)),J=(0,o.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",J);const Q=(0,o.d4)((e=>e.droppedObject.CAItemObjectDetails.CAItemDetails));console.log("The CA Item Details are:",Q);const $=(0,o.d4)((e=>e.droppedObject.CAItemObjectDetails.CAallPlants));console.log("For CA all Plants are: ",$);const ee=(0,o.d4)((e=>e.droppedObject.CAItemObjectDetails.CAisMFGCA));console.log("isMFGCA value is:",ee);const te=(0,o.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",te);const ae=(0,o.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",ae);const ne=(0,o.d4)((e=>e.droppedObject.isDropped)),le=(0,o.d4)((e=>e.droppedObject.plantObjectData.allPlants));console.log("[PlantAssignment] plant object data: ",le);const oe=(0,o.d4)((e=>e.droppedObject.plantObjectData.uniquePlants));console.log("[Plant Assignment] Unique Plants:",oe);const se=(0,o.d4)((e=>e.droppedObject.plantObjectData.initialAssignedPlants));console.log("The Assigned Plants are:",se);const ie=(0,o.d4)((e=>e.droppedObject.plantObjectData.productChildren));console.log("[Plant Assignment] Product Children:",ie);const re=(0,o.d4)((e=>e.droppedObject.plantObjectData.CAName));console.log("[plant Assignment] CAName:",re);const de=(0,o.d4)((e=>e.droppedObject.plantObjectData.headers));console.log("[Plant Assignment] Headers are: ",de);const ce=(0,n.useCallback)((()=>{let e=$.map((e=>e.title.replace(/^Plant /,"")));const t=0===Z.length?s:Z;let a=[...new Set(t.flatMap((e=>{var t;return(null===(t=e.Plant)||void 0===t?void 0:t.map((e=>e.PlantName)))||[]})))],n=e.filter((e=>!a.includes(e))).map((e=>({title:e})));return console.log("Unique table plants are :",n),ee?e.map((e=>({title:e}))):n}),[$,s,Z,ee]),ue=e=>{i(e)};if(console.log("Tanble Data is:",s),(0,n.useEffect)((()=>{s.length>=0&&l((e=>e+1))}),[s]),J.cardData&&J.initialDraggedData)var pe,ge,me=J.cardData["Maturity State"],he=null===(pe=J.initialDraggedData)||void 0===pe||null===(ge=pe.data)||void 0===ge?void 0:ge.items[0].objectType;const[Ae,ve]=(0,n.useState)(se);console.log("Duplicate Initial Assigned Classes are:",Ae),(0,n.useEffect)((()=>{ve(se),"Change Action"===he?k(Q):g(se)}),[se,he,Q]),(0,n.useEffect)((()=>{I("Change Action"===he?ce():oe)}),[ce,oe,he]);const fe=async e=>{var t,a;let n={};const l=[];console.log("Table Data",e),console.log("Before DupInitialAssignedClasses:",Ae);let o=[],s=Ae.map((t=>{let a=(0,b.A)({},t);return e.forEach((e=>{var t;let l={};const s=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=le.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(a.title===e.Plant){(a.MBOM?"Make":"Buy")!==e.MBom&&(/^\d/.test(s)?(n["MBOM".concat(s)]="Make"===e.MBom,l.MBOMName="MBOM".concat(s),l.MBOMValue="Make"===e.MBom):(n["".concat(s,"MBOM")]="Make"===e.MBom,l.MBOMName="".concat(s,"MBOM"),l.MBOMValue="Make"===e.MBom),a.MBOM="Make"===e.MBom,l=(0,b.A)((0,b.A)({},l),{},{id:i,title:e.Plant,Type:"Update"}),o.push(l))}})),a}));e.forEach((e=>{if(!Ae.find((t=>t.title===e.Plant))){var t;const a=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=le.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(i){let t={id:i,title:e.Plant},r={};l.push(i),"Make"===e.MBom?(/^\d/.test(a)?(n["MBOM".concat(a)]=!0,r.MBOMName="MBOM".concat(a)):(n["".concat(a,"MBOM")]=!0,r.MBOMName="".concat(a,"MBOM")),t.MBOM=!0,r.MBOMValue=!0):(t.MBOM=!1,r.MBOMValue=!1),s.push(t),r=(0,b.A)((0,b.A)({},r),{},{id:i,title:e.Plant,Type:"New"}),o.push(r)}}}));let i=[];Ae.forEach((t=>{if(!e.some((e=>e.Plant===t.title))){var a;const e=null===(a=le.find((e=>e.title===t.title)))||void 0===a?void 0:a.id;e&&i.push(e)}})),s=s.filter((e=>!i.includes(e.id))),console.log("Rows getting deleted rowstoDelete:",i),console.log("After DupInitialAssignedClasses:",s),console.log("Classes to be Classified:",l),console.log("Updated Items:",n),console.log();const d=await(0,O.i)(n,l,s,de,null===(t=J.initialDraggedData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.items[0].objectId,le,ie,he,i,o,ae);if(d.success){_(!1),console.log("Save result:",d),""===d.Finalmessage||null==d.Finalmessage?W(c.KF):H((e=>{if(!e)return"An error occurred.";const t=e.split("\n").filter((e=>""!==e.trim()));return(0,A.jsxs)("div",{style:{userSelect:"text",cursor:"text",position:"relative",paddingRight:"40px"},children:[(0,A.jsx)("strong",{children:"Errors:"}),(0,A.jsx)("button",{onClick:()=>{const e=t.map((e=>"- ".concat(e))).join("\n");navigator.clipboard.writeText(e)},style:{position:"absolute",right:"10px",top:"-12px",background:"none",border:"none",cursor:"pointer",fontSize:"16px",color:"grey"},children:(0,A.jsx)(x.zU_,{size:12})}),(0,A.jsx)("ol",{children:t.map(((e,t)=>(0,A.jsx)("li",{children:e},t)))})]})})(d.Finalmessage),{autoClose:!1,closeOnClick:!1});let e=[];if(d.ErrorObj&&Object.keys(d.ErrorObj).length>0){let t=function(e,t,a,n){return console.log("Assigned Plants are:",t),console.log("unique Plants are:",n),e.forEach((e=>{"New"===e.type?(a=a.filter((t=>t.title!==e.title)),n.some((t=>t.title===e.title))||n.push(e)):"Update"===e.type&&(a=a.map((t=>t.title===e.title?(0,b.A)((0,b.A)({},t),{},{MBOM:"false"}):t)))})),{updatedAssignedClasses:a,uniquePlant:n}}(d.ErrorObj,r,s,oe);console.log("response is ",t),t&&(I(t.uniquePlant),e=t.updatedAssignedClasses)}else e=s;e&&(g(e),ve(e))}else _(!1),H(c.fm)};(0,n.useEffect)((()=>{ne||e()}),[ne,e]),(0,n.useEffect)((()=>{L(te)}),[te]);const be=(0,n.useMemo)((()=>S("Change Action"===he?R:r,he)),[R,r,he]),je=(0,n.useMemo)((()=>(e=>e?e.map((e=>({"Available Plant":(null===e||void 0===e?void 0:e.title)||"N/A"}))):[])(D)),[D]);console.log("[Plant Assignment] Unique Table Data:",je),(0,n.useEffect)((()=>{be.length>=0&&(console.log("New Table Data:",be),i(be),l((e=>e+1)))}),[be]);const Ce=(0,n.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let a={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(a.EIN=t.EIN||"N/A",a["CAD Format"]=t["CAD Format"]||"N/A"),a})(J)),[J]);console.log(Ce),(0,n.useEffect)((()=>{G(!!Ce)}),[Ce]);const Pe=(0,n.useMemo)((()=>((e,t,a,n)=>(console.log("type here is: ",t),"Change Action"===t?[{accessorKey:"ItemName",header:"Item Name"},{accessorKey:"Plant",header:"Plant",cell:e=>{let{row:t}=e;return(0,A.jsx)(y,{plants:t.original.Plant,itemId:t.original.ItemId,isRemoveMode:a,handleRemovePlant:n})}}]:[{accessorKey:"Plant",header:"Plant"},{accessorKey:"Seq",header:"Seq"},{accessorKey:"MBom",header:"MBom",cell:t=>{let{row:a,getValue:n,table:l}=t;return(0,A.jsxs)("select",{value:n(),onChange:t=>{var n;if(!e)return;const o=t.target.value,s=l.getRowModel().rows.map((e=>e.id===a.id?(0,b.A)((0,b.A)({},e.original),{},{MBom:o}):e.original));null===(n=l.options.meta)||void 0===n||n.updateTableData(s)},disabled:!e,className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:(0,b.A)((0,b.A)({},!1===e&&{appearance:"none"}),{},{width:"70%",padding:"5px",fontSize:"14px",color:"#333",background:"none",border:"none",textAlign:"left"}),onMouseOver:t=>{e&&(t.target.style.border="1px solid #ccc")},onMouseOut:t=>{e&&(t.target.style.border="none")},children:[(0,A.jsx)("option",{value:"Make",children:"Make"}),(0,A.jsx)("option",{value:"Buy",children:"Buy"})]})}},{accessorKey:"Status",header:"Status"},{accessorKey:"MFG Change",header:"MFG Change"},{accessorKey:"MFG Status",header:"MFG Status"},{accessorKey:"Change",header:"Change"},{accessorKey:"Change Status",header:"Change Status"},{accessorKey:"Oracle Template",header:"Oracle Template"},{accessorKey:"ERP Status",header:"ERP Status"},{accessorKey:"ERP Export",header:"ERP Export"},{accessorKey:"Lead Plant",header:"Lead Plant"},{accessorKey:"Sort Value",header:"Sort Value"}]))(re,he,U,Y)),[re,he,U,Y]),we=(0,n.useMemo)((()=>N),[]);(0,n.useEffect)((()=>{console.log("[PlantAssignment] State Changes:",{loading:t,loadingParentDetails:te,isDropped:ne})}),[t,te,ne]);return(0,A.jsxs)(A.Fragment,{children:[q&&(0,A.jsx)(u.A,{}),!ne&&!t&&!T&&(0,A.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"},children:[(0,A.jsx)(B,{}),(0,A.jsxs)("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:"10px",alignItems:"center"},children:[(0,A.jsx)(j.A.Group,{controlId:"formFileMultiple",children:(0,A.jsx)(j.A.Control,{type:"file",multiple:!0,onChange:e=>{v(e.target.files.length>0?e.target.files:null)}})}),(0,A.jsx)(C.A,{variant:"outline-primary",onClick:()=>{m&&console.log("Files submitted:",m)},style:{cursor:m?"pointer":"not-allowed",opacity:m?1:.5},children:"Create Manufacturing CA"})]})]}),ne&&(0,A.jsxs)(A.Fragment,{children:[t&&(0,A.jsx)(u.A,{}),(0,A.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,A.jsxs)("div",{className:"d-flex ",children:[(0,A.jsx)("div",{className:" p-0 pt-4",children:(0,A.jsx)(P.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{e(),z((0,p.Rr)(!1)),z((0,p.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),z((0,p.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{}})),i([]),G(!1)}})}),Ce&&(0,A.jsx)(M.A,{data:Ce})]})}),T?(0,A.jsx)("div",{className:"loading-indicator mt-5",children:(0,A.jsx)(u.A,{})}):(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:"wrapper-cta",children:[(0,A.jsx)(E,{uniquedata:je,uniqueColumn:we,CAName:re,onAddPlant:e=>{console.log("Data Received",e),console.log("[Plant Assignment] Table data",s),console.log("Added Data from Toolbar",e),l((e=>e+1)),"Change Action"===he?(console.log("Change Action Plant is Added"),k((t=>t.map((t=>{if(!(0===Z.length||Z.some((e=>e.ItemId===t.ItemId))))return t;let a=t.ItemPlants||[];const n=new Set(Q.flatMap((e=>e.ItemPlants||[])).map((e=>e.PlantName.trim()))),l=new Set(a.map((e=>e.PlantName.trim()))),o=e.map((e=>{const t=$.find((t=>t.title.replace(/^Plant\s+/,"").trim()===e.trim()));if(!t)return null;const a=n.has(e.trim()),o=l.has(e.trim());return(0,b.A)({PlantName:e,PlantID:t.id},ee&&!a&&{color:o?void 0:"green"})})).filter(Boolean);return(0,b.A)((0,b.A)({},t),{},{ItemPlants:[...a,...o]})}))))):i((t=>[...e.map((e=>{let{title:t}=e,a=(0,f.A)(e,F);return(0,b.A)({Plant:t},a)})),...t]))},addedPlant:e=>{console.log("The data received from Child is:",e);const t=je.filter((t=>!e.find((e=>e===t["Available Plant"]))));if(console.log("Updated Table Data after unique:",t),t){const e=t.map((e=>({title:e["Available Plant"]})));console.log(e),I(e)}},onSave:async()=>{console.log("OnSave is Called with the TableData",s),_(!0),await fe(s)},onRemove:async()=>{if("Change Action"===he)console.log("Remove is clicked for Chnage Action"),V(!0);else if(console.log("Selected Table Rows:",Z),console.log("handleRemove is Called with the TableData",s),Z.length>0){const e=Z.map((e=>e.Plant));console.log("Selected Titles:",e);const t=e.map((e=>({title:e})));console.log("Removed Titles:",t);const a=s.filter((t=>!e.includes(t.Plant)));console.log("updateTableData",ue),ue&&(i(a),l((e=>e+1))),I((e=>[...e,...t]))}else alert("Please select at least one row to remove.")},state:me,type:he,isMFGCA:ee}),(0,A.jsx)(w.A,{data:s,columns:Pe,meta:{updateTableData:ue},widgetType:"Plant_Assignment_Widget"},a)]})})]})]})};let q=null;function _(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let a=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");a||(a=document.createElement("div"),a.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(a):document.body.appendChild(a)),q||(q=l.createRoot(a)),q.render((0,A.jsxs)(o.Kq,{store:s.A,children:[(0,A.jsx)(v,{}),(0,A.jsx)(L,{}),(0,A.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()}}]);
//# sourceMappingURL=947.ced50728.chunk.js.map