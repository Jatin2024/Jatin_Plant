"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[279],{6313:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var o=a(4104),l=a(4282),n=a(579);const s=e=>{let{show:t,onHide:a,title:s,children:i,footerButtons:r}=e;return(0,n.jsxs)(o.A,{show:t,onHide:a,size:"lg",centered:!0,children:[(0,n.jsx)(o.A.Header,{closeButton:!0,children:(0,n.jsx)(o.A.Title,{children:s||"Modal Title"})}),(0,n.jsx)(o.A.Body,{children:i}),(0,n.jsx)(o.A.Footer,{children:r?r.map(((e,t)=>(0,n.jsx)(l.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,n.jsx)(l.A,{variant:"secondary",onClick:a,children:"Close"})})]})}},5362:(e,t,a)=>{a.d(t,{A:()=>c});var o=a(5043),l=a(8931),n=a(7111),s=a(3277),i=a(2725),r=a(579);const c=(0,o.forwardRef)(((e,t)=>{let{data:a,columns:c,addedItem:d,CAName:u,state:g}=e;const{showWarningToast:m}=(0,i.A)(),[p,h]=(0,o.useState)({});(0,o.useEffect)((()=>{h({})}),[a]);const f=()=>{const e=v.getSelectedRowModel().rows.map((e=>e.original["Available Plant"]));0!==e.length?(d(e),h({})):m(s.e1)};(0,o.useImperativeHandle)(t,(()=>({addPlant:f})));const A=(0,o.useMemo)((()=>[{id:"select",cell:e=>{let{row:t}=e;return(0,r.jsx)("input",{type:"checkbox",className:"form-check-input",checked:t.getIsSelected(),onChange:t.getToggleSelectedHandler()})}},...c]),[c]),v=(0,l.N4)({data:a,columns:A,state:{rowSelection:p},enableRowSelection:!0,onRowSelectionChange:h,getCoreRowModel:(0,n.HT)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",className:"btn btn-outline-primary me-3",onClick:()=>{v.getRowModel().rows.forEach((e=>e.toggleSelected(!0)))},children:"Select All"}),(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{v.getRowModel().rows.forEach((e=>e.toggleSelected(!1)))},children:"Deselect All"})]}),v.getRowModel().rows.length>0?(0,r.jsx)("div",{className:"overflow-auto",style:{maxHeight:"60vh"},children:v.getRowModel().rows.map((e=>(0,r.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center",style:{backgroundColor:e.getIsSelected()?"#d5e8f2":"inherit"},children:[(0,r.jsx)("div",{className:"me-3",children:(0,l.Kv)(e.getVisibleCells()[0].column.columnDef.cell,e.getVisibleCells()[0].getContext())}),(0,r.jsx)("div",{children:e.original[c[0].accessorKey]})]},e.id)))}):(0,r.jsx)("p",{className:"text-muted p-3",children:"No data available"})]})}))},9298:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var o=a(5043),l=a(4391),n=(a(2342),a(9555),a(3003)),s=a(2670),i=a(2115),r=(a(8421),a(4050),a(9959),a(174)),c=a(2725),d=a(3277),u=a(6713),g=a(7419),m=a(579);const p=()=>{const{handleDrop:e}=(0,g.A)(),{showSuccessToast:t,showErrorToast:a}=(0,c.A)(),[l,n]=(0,o.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,o.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var o,l;const i=(new Error).stack.split("\n"),c=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(i)&&!c)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),n(!0);const u=s.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===u||void 0===u||null===(o=u.data)||void 0===o||null===(l=o.items)||void 0===l||!l.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",u),void n(!1);try{await(0,r.M)(u.data.items,e)}catch(g){console.error("[WidgetLifecycle] \u274c Error during refresh:",g),a(d.H6)}finally{n(!1),t(d._l)}}))}),[]),l?(0,m.jsx)(u.A,{}):null};var h=a(45),f=a(9379),A=(a(4816),a(2691)),v=a(4282),b=a(3637),C=a(768),y=a(759),w=a(5645),P=a(184),j=a(3825);const M=e=>{let{plants:t=[],itemId:a,isRemoveMode:o,handleRemovePlant:l}=e;return console.log("PlantRenderer received plants:",t),null!==t&&void 0!==t&&t.length?(0,m.jsx)(m.Fragment,{children:t.map((e=>(0,m.jsxs)("span",{style:{marginRight:"8px",display:"inline-flex",alignItems:"center",color:e.color||"black",fontWeight:"bold"},children:[e.PlantName,o&&(0,m.jsx)(j.zhF,{size:16,style:{cursor:"pointer",color:"red",marginLeft:"4px"},onClick:()=>l(a,e.PlantID)})]},e.PlantID)))}):"N/A"},x=(e,t)=>e?e.map((e=>"Change Action"===t?{ItemName:(null===e||void 0===e?void 0:e.ItemTitle)||"N/A",Plant:(null===e||void 0===e?void 0:e.ItemPlants)||[],ItemId:(null===e||void 0===e?void 0:e.ItemId)||"N/A"}:{Plant:(null===e||void 0===e?void 0:e.title)||"N/A",Seq:(null===e||void 0===e?void 0:e.Seq)||"1",Status:"Current","MFG Change":(null===e||void 0===e?void 0:e.MFGChange)||"N/A","MFG Status":(null===e||void 0===e?void 0:e.MFGStatus)||"N/A",Change:(null===e||void 0===e?void 0:e.Change)||"N/A","Change Status":(null===e||void 0===e?void 0:e.ChangeStatus)||"N/A","Oracle Template":e.OracleTemplate||"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":!1,MBom:e.MBOM?"Make":"Buy","Sort Value":""})):[],S=[{accessorKey:"Available Plant",header:"Available Plant"}];var I=a(3127),N=a(5362),D=a(6313);const O=e=>{let{onAddPlant:t,addedPlant:a,onSave:l,onRemove:n,uniquedata:s,uniqueColumn:i,CAName:r,state:u,type:g,isMFGCA:p}=e;const{showWarningToast:h}=(0,c.A)(),[f,A]=(0,o.useState)(!1),v=(0,o.useRef)();console.log("[Unique Table Data]:",s);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"d-flex cta-absolute",children:[!p&&(0,m.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{"Change Action"===g||r?A(!0):h("RELEASED"===u?d.sL:d.Ru)},children:"Add Plant"}),p&&(0,m.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{A(!0)},children:"Add/Update Plants"}),(0,m.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{l&&("Change Action"===g||r)?l():h("RELEASED"===u?d.EZ:d.nX)},children:"Save"}),(0,m.jsx)("button",{className:"btn btn-outline-danger btn-lg m-2",onClick:()=>{n&&n()},children:"Remove"})]}),(0,m.jsx)(D.A,{show:f,onHide:()=>A(!1),title:"Available Plant",footerButtons:[{label:"Add",variant:"primary",onClick:()=>{var e;null===(e=v.current)||void 0===e||e.addPlant(),A(!1)}},{label:"Close",variant:"danger",onClick:()=>A(!1)}],children:(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsx)(N.A,{ref:v,data:s,columns:i,CAName:r,addedItem:e=>{if(console.log(e),"Change Action"===g)e.length>0&&(t(e),a(e));else if(e.length>0){const o=e.map((e=>({title:e,Seq:"1",Status:"Current","MFG Change":"N/A","MFG Status":"N/A",Change:"N/A","Change Status":"N/A","Oracle Template":"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":"false",MBom:"Buy","Sort Value":""})));t(o),a(e)}},state:u})})})]})};a(4119);var R=a(1397),T=a(4675);const E=()=>{const{handleDrop:e}=(0,g.A)(),{performSearch:t}=(0,T.A)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"droppable-container mt-4",children:[(0,m.jsx)(b.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,m.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,m.jsxs)("div",{className:"divider-container",children:[(0,m.jsx)("hr",{className:"divider"}),(0,m.jsx)("span",{className:"divider-text",children:"or"}),(0,m.jsx)("hr",{className:"divider"})]}),(0,m.jsx)(R.A,{onSearch:a=>{t(a,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{console.log("Selected objects:",t),console.log("objectId: selectedObjects[0].id",t[0].id),t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})};var k=a(6047);const B=["title"],F=["color"],L=()=>{const{initializeDroppableArea:e,loading:t}=(0,g.A)(),[a,l]=(0,o.useState)(0),[s,i]=(0,o.useState)([]),[r,p]=(0,o.useState)([]),[j,N]=(0,o.useState)(null),[D,R]=(0,o.useState)([]),[T,k]=(0,o.useState)([]),[F,L]=(0,o.useState)(!1),[V,_]=(0,o.useState)(!1),[K,U]=(0,o.useState)(!1),[G,z]=(0,o.useState)(!1),H=(0,n.wA)(),{showSuccessToast:W,showErrorToast:J}=(0,c.A)();let Y=window.widget.getValue("Credentials");console.log("Security context is: ",Y);const X=(0,o.useCallback)(((e,t)=>{k((a=>a.map((a=>a.ItemId===e?(0,f.A)((0,f.A)({},a),{},{ItemPlants:a.ItemPlants.filter((e=>e.PlantID!==t))}):a))))}),[k]);console.log("Table Data after Adding:",s);const Z=(0,n.d4)((e=>e.droppedObject.selectedTableRows)),Q=(0,n.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",Q);const $=(0,n.d4)((e=>e.droppedObject.CAItemObjectDetails.CAItemDetails));console.log("The CA Item Details are:",$);const ee=(0,n.d4)((e=>e.droppedObject.CAItemObjectDetails.CAallPlants));console.log("For CA all Plants are: ",ee);const te=(0,n.d4)((e=>e.droppedObject.CAItemObjectDetails.CAisMFGCA));console.log("isMFGCA value is:",te);const ae=(0,n.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",ae);const oe=(0,n.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",oe);const le=(0,n.d4)((e=>e.droppedObject.isDropped)),ne=(0,n.d4)((e=>e.droppedObject.plantObjectData.allPlants));console.log("[PlantAssignment] plant object data: ",ne);const se=(0,n.d4)((e=>e.droppedObject.plantObjectData.uniquePlants));console.log("[Plant Assignment] Unique Plants:",se);const ie=(0,n.d4)((e=>e.droppedObject.plantObjectData.initialAssignedPlants));console.log("The Assigned Plants are:",ie);const re=(0,n.d4)((e=>e.droppedObject.plantObjectData.productChildren));console.log("[Plant Assignment] Product Children:",re);const ce=(0,n.d4)((e=>e.droppedObject.plantObjectData.CAName));console.log("[plant Assignment] CAName:",ce);const de=(0,n.d4)((e=>e.droppedObject.plantObjectData.headers));console.log("[Plant Assignment] Headers are: ",de);const ue=(0,o.useCallback)((()=>{let e=ee.map((e=>e.title.replace(/^Plant /,"")));const t=0===Z.length?s:Z;let a=[...new Set(t.flatMap((e=>{var t;return(null===(t=e.Plant)||void 0===t?void 0:t.map((e=>e.PlantName)))||[]})))],o=e.filter((e=>!a.includes(e))).map((e=>({title:e})));return console.log("Unique table plants are :",o),te?e.map((e=>({title:e}))):o}),[ee,s,Z,te]),ge=e=>{i(e)};if(console.log("Tanble Data is:",s),(0,o.useEffect)((()=>{s.length>=0&&l((e=>e+1))}),[s]),Q.cardData&&Q.initialDraggedData)var me,pe,he=Q.cardData["Maturity State"],fe=null===(me=Q.initialDraggedData)||void 0===me||null===(pe=me.data)||void 0===pe?void 0:pe.items[0].objectType;const[Ae,ve]=(0,o.useState)(ie);console.log("Duplicate Initial Assigned Classes are:",Ae),(0,o.useEffect)((()=>{ve(ie),"Change Action"===fe?k($):p(ie)}),[ie,fe,$]),(0,o.useEffect)((()=>{"Change Action"===fe&&R(ue())}),[ue,fe]),(0,o.useEffect)((()=>{"Change Action"!==fe&&R(se)}),[se,fe]);const be=async e=>{var t,a;let o={};const l=[];console.log("Table Data",e),console.log("Before DupInitialAssignedClasses:",Ae);let n=[],s=Ae.map((t=>{let a=(0,f.A)({},t);return e.forEach((e=>{var t;let l={};const s=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=ne.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(a.title===e.Plant){(a.MBOM?"Make":"Buy")!==e.MBom&&(/^\d/.test(s)?(o["MBOM".concat(s)]="Make"===e.MBom,l.MBOMName="MBOM".concat(s),l.MBOMValue="Make"===e.MBom):(o["".concat(s,"MBOM")]="Make"===e.MBom,l.MBOMName="".concat(s,"MBOM"),l.MBOMValue="Make"===e.MBom),a.MBOM="Make"===e.MBom,l=(0,f.A)((0,f.A)({},l),{},{id:i,title:e.Plant,Type:"Update"}),n.push(l))}})),a}));e.forEach((e=>{if(!Ae.find((t=>t.title===e.Plant))){var t;const a=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=ne.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(i){let t={id:i,title:e.Plant},r={};l.push(i),"Make"===e.MBom?(/^\d/.test(a)?(o["MBOM".concat(a)]=!0,r.MBOMName="MBOM".concat(a)):(o["".concat(a,"MBOM")]=!0,r.MBOMName="".concat(a,"MBOM")),t.MBOM=!0,r.MBOMValue=!0):(t.MBOM=!1,r.MBOMValue=!1),s.push(t),r=(0,f.A)((0,f.A)({},r),{},{id:i,title:e.Plant,Type:"New"}),n.push(r)}}}));let i=[];Ae.forEach((t=>{if(!e.some((e=>e.Plant===t.title))){var a;const e=null===(a=ne.find((e=>e.title===t.title)))||void 0===a?void 0:a.id;e&&i.push(e)}})),s=s.filter((e=>!i.includes(e.id))),console.log("Rows getting deleted rowstoDelete:",i),console.log("After DupInitialAssignedClasses:",s),console.log("Classes to be Classified:",l),console.log("Updated Items:",o),console.log();const c=await(0,I.i)(o,l,s,de,null===(t=Q.initialDraggedData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.items[0].objectId,ne,re,fe,i,n,oe);if(c.success){_(!1),console.log("Save result:",c),""===c.Finalmessage||null==c.Finalmessage?W(d.KF):J((e=>{if(!e)return"An error occurred.";const t=e.split("\n").filter((e=>""!==e.trim()));return(0,m.jsxs)("div",{style:{userSelect:"text",cursor:"text",position:"relative",paddingRight:"40px"},children:[(0,m.jsx)("strong",{children:"Errors:"}),(0,m.jsx)("button",{onClick:()=>{const e=t.map((e=>"- ".concat(e))).join("\n");navigator.clipboard.writeText(e)},style:{position:"absolute",right:"10px",top:"-12px",background:"none",border:"none",cursor:"pointer",fontSize:"16px",color:"grey"},children:(0,m.jsx)(P.zU_,{size:12})}),(0,m.jsx)("ol",{children:t.map(((e,t)=>(0,m.jsx)("li",{children:e},t)))})]})})(c.Finalmessage),{autoClose:!1,closeOnClick:!1});let e=[];if(c.ErrorObj&&Object.keys(c.ErrorObj).length>0){let t=function(e,t,a,o){return console.log("Assigned Plants are:",t),console.log("unique Plants are:",o),e.forEach((e=>{"New"===e.type?(a=a.filter((t=>t.title!==e.title)),o.some((t=>t.title===e.title))||o.push(e)):"Update"===e.type&&(a=a.map((t=>t.title===e.title?(0,f.A)((0,f.A)({},t),{},{MBOM:"false"}):t)))})),{updatedAssignedClasses:a,uniquePlant:o}}(c.ErrorObj,r,s,se);console.log("response is ",t),t&&(R(t.uniquePlant),e=t.updatedAssignedClasses)}else e=s;e&&(p(e),ve(e))}else _(!1),J(d.fm)};(0,o.useEffect)((()=>{le||e()}),[le,e]),(0,o.useEffect)((()=>{L(ae)}),[ae]);const Ce=(0,o.useMemo)((()=>x("Change Action"===fe?T:r,fe)),[T,r,fe]),ye=(0,o.useMemo)((()=>(e=>e?e.map((e=>({"Available Plant":(null===e||void 0===e?void 0:e.title)||"N/A"}))):[])(D)),[D]);console.log("[Plant Assignment] Unique Table Data:",ye),(0,o.useEffect)((()=>{Ce.length>=0&&(console.log("New Table Data:",Ce),i(Ce),l((e=>e+1)))}),[Ce]);const we=(0,o.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let a={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(a.EIN=t.EIN||"N/A",a["CAD Format"]=t["CAD Format"]||"N/A"),a})(Q)),[Q]);console.log(we),(0,o.useEffect)((()=>{U(!!we)}),[we]);const Pe=(0,o.useMemo)((()=>((e,t,a,o)=>(console.log("type here is: ",t),"Change Action"===t?[{accessorKey:"ItemName",header:"Item Name"},{accessorKey:"Plant",header:"Plant",cell:e=>{let{row:t}=e;return(0,m.jsx)(M,{plants:t.original.Plant,itemId:t.original.ItemId,isRemoveMode:a,handleRemovePlant:o})}}]:[{accessorKey:"Plant",header:"Plant"},{accessorKey:"Seq",header:"Seq"},{accessorKey:"MBom",header:"MBom",cell:t=>{let{row:a,getValue:o,table:l}=t;return(0,m.jsxs)("select",{value:o(),onChange:t=>{var o;if(!e)return;const n=t.target.value,s=l.getRowModel().rows.map((e=>e.id===a.id?(0,f.A)((0,f.A)({},e.original),{},{MBom:n}):e.original));null===(o=l.options.meta)||void 0===o||o.updateTableData(s)},disabled:!e,className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:(0,f.A)((0,f.A)({},!1===e&&{appearance:"none"}),{},{width:"70%",padding:"5px",fontSize:"14px",color:"#333",background:"none",border:"none",textAlign:"left"}),onMouseOver:t=>{e&&(t.target.style.border="1px solid #ccc")},onMouseOut:t=>{e&&(t.target.style.border="none")},children:[(0,m.jsx)("option",{value:"Make",children:"Make"}),(0,m.jsx)("option",{value:"Buy",children:"Buy"})]})}},{accessorKey:"Status",header:"Status"},{accessorKey:"MFG Change",header:"MFG Change"},{accessorKey:"MFG Status",header:"MFG Status"},{accessorKey:"Change",header:"Change"},{accessorKey:"Change Status",header:"Change Status"},{accessorKey:"Oracle Template",header:"Oracle Template"},{accessorKey:"ERP Status",header:"ERP Status"},{accessorKey:"ERP Export",header:"ERP Export"},{accessorKey:"Lead Plant",header:"Lead Plant"},{accessorKey:"Sort Value",header:"Sort Value"}]))(ce,fe,G,X)),[ce,fe,G,X]),je=(0,o.useMemo)((()=>S),[]);(0,o.useEffect)((()=>{console.log("[PlantAssignment] State Changes:",{loading:t,loadingParentDetails:ae,isDropped:le})}),[t,ae,le]);return(0,m.jsxs)(m.Fragment,{children:[V&&(0,m.jsx)(u.A,{}),!le&&!t&&!F&&(0,m.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"},children:[(0,m.jsx)(E,{}),(0,m.jsxs)("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:"10px",alignItems:"center"},children:[(0,m.jsx)(A.A.Group,{controlId:"formFileMultiple",children:(0,m.jsx)(A.A.Control,{type:"file",multiple:!0,onChange:e=>{N(e.target.files.length>0?e.target.files:null)}})}),(0,m.jsx)(v.A,{variant:"outline-primary",onClick:()=>{j&&console.log("Files submitted:",j)},style:{cursor:j?"pointer":"not-allowed",opacity:j?1:.5},children:"Create Manufacturing CA"})]})]}),le&&(0,m.jsxs)(m.Fragment,{children:[t&&(0,m.jsx)(u.A,{}),(0,m.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,m.jsxs)("div",{className:"d-flex ",children:[(0,m.jsx)("div",{className:" p-0 pt-4",children:(0,m.jsx)(b.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{e(),H((0,w.Rr)(!1)),H((0,w.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),H((0,w.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{},proposedChanges:[]})),H((0,w.OL)({CAItemDetails:[],CAallPlants:[],CAisMFGCA:!1,CAheaders:{}})),i([]),U(!1)}})}),we&&(0,m.jsx)(y.A,{data:we,widgetType:"PlantAssignment"})]})}),F?(0,m.jsx)("div",{className:"loading-indicator mt-5",children:(0,m.jsx)(u.A,{})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"wrapper-cta",children:[(0,m.jsx)(O,{uniquedata:ye,uniqueColumn:je,CAName:ce,onAddPlant:e=>{console.log("Data Received",e),console.log("[Plant Assignment] Table data",s),console.log("Added Data from Toolbar",e),console.log("CA Table data is",$),l((e=>e+1)),"Change Action"===fe?(console.log("Change Action Plant is Added"),k((t=>t.map((t=>{if(!(0===Z.length||Z.some((e=>e.ItemId===t.ItemId))))return t;const a=$.find((e=>e.ItemId===t.ItemId)),o=(null===a||void 0===a?void 0:a.ItemPlants)||[],l=t.ItemPlants||[],n=l.map((t=>te&&e.includes(t.PlantName.trim())&&o.some((e=>e.PlantName.trim()===t.PlantName.trim()))?(0,f.A)((0,f.A)({},t),{},{color:"red"}):t)),s=[];return e.forEach((e=>{const t=ee.find((t=>t.title.replace(/^Plant\s+/,"").trim()===e.trim()));if(!t)return;const a=o.some((t=>t.PlantName.trim()===e.trim()));l.some((t=>t.PlantName.trim()===e.trim()))||s.push((0,f.A)({PlantName:e,PlantID:t.id},te&&{color:a?"red":"green"}))})),(0,f.A)((0,f.A)({},t),{},{ItemPlants:[...n,...s]})}))))):i((t=>[...e.map((e=>{let{title:t}=e,a=(0,h.A)(e,B);return(0,f.A)({Plant:t},a)})),...t]))},addedPlant:e=>{console.log("The data received from Child is:",e);const t=ye.filter((t=>!e.find((e=>e===t["Available Plant"]))));if(console.log("Updated Table Data after unique:",t),t){const e=t.map((e=>({title:e["Available Plant"]})));console.log(e),R(e)}},onSave:async()=>{if(console.log("OnSave is Called with the TableData",s),_(!0),"Change Action"===fe){if(!0===te){console.log("Manufacturing CA Save Called");const{response:e,payload:t}=q(s,Q,$);if(console.log("response from Save Api is :",e),e){const e=t.Items.map((e=>({ItemId:e.ItemId,ItemType:e.ItemType,ItemState:e.ItemState,ItemTitle:e.ItemTitle,ItemPlants:e.ItemPlants.map((e=>{let{PlantName:t,PlantID:a}=e;return{PlantName:t,PlantID:a}}))})));H((0,w.OL)(e))}else console.warn("Save API returned false")}}else await be(s)},onRemove:async()=>{if("Change Action"===fe)console.log("Remove is clicked for Chnage Action"),z(!0);else if(console.log("Selected Table Rows:",Z),console.log("handleRemove is Called with the TableData",s),Z.length>0){const e=Z.map((e=>e.Plant));console.log("Selected Titles:",e);const t=e.map((e=>({title:e})));console.log("Removed Titles:",t);const a=s.filter((t=>!e.includes(t.Plant)));console.log("updateTableData",ge),ge&&(i(a),l((e=>e+1))),R((e=>[...e,...t]))}else alert("Please select at least one row to remove.")},state:he,type:fe,isMFGCA:te}),(0,m.jsx)(C.A,{data:s,columns:Pe,meta:{updateTableData:ge},widgetType:"Plant_Assignment_Widget"},a)]})})]})]})},q=async(e,t,a)=>{var o,l,n;const s=(null===(o=t.initialDraggedData)||void 0===o||null===(l=o.data)||void 0===l||null===(n=l.items)||void 0===n?void 0:n[0])||{},i=t.cardData||{},r={CATitle:i.Title,CAId:s.objectId,CAOrganization:i.organization,CACollabSpace:i["Collaborative Space"],CAOwner:"e1331143",Items:e.map((e=>{const t=a.find((t=>t.ItemId===e.ItemId));return{ItemId:e.ItemId,ItemType:(null===t||void 0===t?void 0:t.ItemType)||"VPMReference",ItemState:(null===t||void 0===t?void 0:t.ItemState)||"IN_WORK",ItemTitle:e.ItemName,ItemPlants:e.Plant.filter((e=>e.color)).map((e=>{const{color:t}=e,a=(0,h.A)(e,F);return(0,f.A)((0,f.A)({},a),{},{PlantType:"green"===t?"New":"old"})}))}}))};console.log("Payload for the Save is :",r);try{return{response:await(0,k.Fd)("POST","https://emr-product-datahub-server-sap-stage.azurewebsites.net/flowDownCA/processMFGCA",r),payload:r}}catch(c){throw console.error("Failed to send CA save data:",c),c}};let V=null;function _(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let a=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");a||(a=document.createElement("div"),a.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(a):document.body.appendChild(a)),V||(V=l.createRoot(a)),V.render((0,m.jsxs)(n.Kq,{store:s.A,children:[(0,m.jsx)(p,{}),(0,m.jsx)(L,{}),(0,m.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()},3127:(e,t,a)=>{a.d(t,{i:()=>s});var o=a(9379),l=a(9722),n=a(6047);const s=async(e,t,a,s,i,r,c,d,u,g,m)=>{try{const e="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";console.log("[Save Data] Starting data saving process..."),console.log("Type in Save Table Data:",d),console.log("Final aRRAY IS inside Save:",g),console.log("Proposed Changes in Save",m);const t=await(0,n.fV)(),a=async(e,a,l)=>(console.log("Fetching URL:",e),console.log("Request Body:",JSON.stringify(a,null,2)),new Promise(((n,i)=>{t.authenticatedRequest(e,{method:l,headers:(0,o.A)((0,o.A)({},s),{},{"Content-Type":"application/json"}),data:JSON.stringify(a),type:"json",onComplete:e=>{console.log("Response received:",e),n(e)},onFailure:e=>{console.error("Request failed:",e),i(e)}})}))),r=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";console.log("Fetching URL:",e),console.log("Method is:"),console.log("Request Body:",JSON.stringify(t,null,2));try{const n=await(0,l.A)({url:e,method:a,headers:(0,o.A)((0,o.A)({},s),{},{"Content-Type":"application/json"}),data:t});return console.log("Response received:",n.data),n.data}catch(n){throw console.error("Request failed:",n),n}};let h=c.filter((e=>{if("released"===e.state.toLowerCase()){return!m.find((t=>t.identifier===e.id&&"modify"===t.action.toLowerCase()))}return!1}));console.log("NotPropagableChilds ARE :",h);let f=[];g.forEach((e=>{if(e.MBOMValue){let t=[];h.forEach((a=>{a.classes.includes(e.id)||t.push({childId:a.id,childName:a.name})})),t.length>0&&f.push({id:e.id,title:e.title,childs:t,type:e.Type})}}));let A="";console.log("ErrorObj IS",f),f.forEach((e=>{let t="";if(Array.isArray(e.childs)&&e.childs.every((e=>e.childName))){const a=e.childs.map((e=>e.childName)).join(", ");console.log("Chilld Titles are",a),t="new"!==e.type.toLowerCase()?"".concat(e.title," MBOM can't be Make due to unclassified child items: ").concat(a):"Unable to classify product ".concat(e.title," due to unclassified child items: ").concat(a),console.log("Message is:",t)}else t="Invalid child data for ".concat(e.title,".");A+="".concat(t,"\n")})),console.log(f),console.log("Concatenated Messages:\n",A);let v=g.filter((e=>"new"===e.Type.toLowerCase()&&!f.some((t=>t.id===e.id)))).map((e=>e.id));console.log("New Classes are:",v);let b={};g.forEach((e=>{!f.some((t=>t.id===e.id))&&("update"===e.Type.toLowerCase()||"new"===e.Type.toLowerCase()&&e.MBOMValue)&&(b[e.MBOMName]=e.MBOMValue)})),console.log("Update body is:",b);let C=g.filter((e=>e.MBOMValue&&!f.some((t=>t.id===e.id)))).map((e=>e.id));if(console.log("Propogateable classes are",C),v.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",t={id:i,type:d,classes:v,mode:"classifyParent"};const a=await r(e,t,"POST");console.log("classifyResponse:",JSON.stringify(a))}if(Object.keys(b).length>0){var p;const t="".concat(e,"/resources/v1/modeler/dslib/dslib:ClassifiedItem/").concat(i),o=await a(t,"","GET");console.log("CStamp Response:",o);let l=(null===(p=o.member[0])||void 0===p?void 0:p.cestamp)||"";b.cestamp=l;const n="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/updateClassificationAttribute?id=".concat(i);await r(n,b,"PATCH"),console.log("Updated database successfully.")}if(C.length>0&&c.length>0&&"VPMReference"===d){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",t={id:i,type:d,classes:C,childs:c,mode:"classifychilds"};const a=await r(e,t,"POST");console.log("child classifyResponse:",JSON.stringify(a))}if(u.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/declassifyProductToClass",t={id:i,type:d,classes:u};const a=await r(e,t,"POST");console.log("declassifyResponse:",JSON.stringify(a))}return console.log("All classification API calls completed successfully."),{success:!0,message:"Data saved successfully",ErrorObj:f,Finalmessage:A}}catch(h){return console.error("Error occurred:",h),{success:!1,message:"Failed to save data",error:h}}}}}]);
//# sourceMappingURL=279.10936c43.chunk.js.map