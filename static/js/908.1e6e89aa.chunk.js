"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[908],{3728:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(9379),s=o(45),r=(o(5043),o(4282)),l=o(579);const n=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:o="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:h,text:p,imageSrc:m}=e,g=(0,s.A)(e,n);return(0,l.jsxs)(r.A,(0,a.A)((0,a.A)({variant:t,size:o,type:i,disabled:c,onClick:d,className:u,title:h},g),{},{children:[m&&(0,l.jsx)("img",{src:m,alt:p,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",p]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>s});o(5043);var a=o(579);const s=()=>(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})},6313:(e,t,o)=>{o.d(t,{A:()=>l});o(5043);var a=o(4104),s=o(4282),r=o(579);const l=e=>{let{show:t,onHide:o,title:l,children:n,footerButtons:i}=e;return(0,r.jsxs)(a.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,r.jsx)(a.A.Header,{closeButton:!0,children:(0,r.jsx)(a.A.Title,{children:l||"Modal Title"})}),(0,r.jsx)(a.A.Body,{children:n}),(0,r.jsx)(a.A.Footer,{children:i?i.map(((e,t)=>(0,r.jsx)(s.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,r.jsx)(s.A,{variant:"secondary",onClick:o,children:"Close"})})]})}},2725:(e,t,o)=>{o.d(t,{A:()=>n});var a=o(9379),s=o(45),r=o(2115);const l=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],n=()=>{const e=e=>{let{message:t,type:o="default",position:n="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:h=!1,draggable:p=!0,theme:m="light",transition:g=r.br}=e,v=(0,s.A)(e,l);(r.oR[o]||r.oR)(t,(0,a.A)({position:n,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:p,theme:m,transition:g},v))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,a.A)({message:t,type:"warn"},o))}}}},9908:(e,t,o)=>{o.r(t),o.d(t,{default:()=>G});var a=o(5043),s=o(4391),r=(o(2342),o(9555),o(3003)),l=o(2670),n=o(2115),i=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),h=o(2725),p=o(579);const m=(0,a.forwardRef)(((e,t)=>{let{fileTypes:o=["JPEG","PNG","GIF","XLSX","CSV"],multiple:s=!0,onUpload:r,onReset:l,disabled:n=!1,message:i="Drag & Drop your files here or Click to browse"}=e;const[c,d]=(0,a.useState)([]),{showErrorToast:m}=(0,h.A)();(0,a.useImperativeHandle)(t,(()=>({handleClearFiles:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];d([]),r&&r([]),l&&l(e)}})));const g=()=>{t.current.handleClearFiles(!1)};return(0,p.jsxs)("div",{className:"file-upload-container ".concat(n?"disabled":""),children:[(0,p.jsx)("h2",{children:n?"Please select an operation first":"Drag & Drop Files"}),(0,p.jsxs)("div",{className:"upload-area",children:[(0,p.jsx)(u.l,{multiple:s,handleChange:e=>{const t=s?[...e]:[e];d(t),r&&r(t)},name:"file",types:o,disabled:n,hoverTitle:n?"":"Drop here"}),(0,p.jsx)("div",{className:"file-list",children:c.length>0?c.map(((e,t)=>(0,p.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,p.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,p.jsx)("button",{onClick:g,style:{background:"none",border:"none",cursor:n?"not-allowed":"pointer",color:"red",opacity:n?.5:1},disabled:n,children:"X"})]},t))):(0,p.jsx)("p",{children:i})})]})]})}));var g=o(3277);var v=o(6713),b=o(1238);const y=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Physical Product/Raw Material","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP","Drawing Required","1st Article Required","Release Phase","Long Description"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}'),f=(e,t,o)=>new Promise(((a,s)=>{var r,l;console.log("\ud83d\udd0d Starting template validation..."),console.log({operation:o,fileName:e.name});const n={1:"Physical Product",2:"Physical Product Structure",3:"Document",4:"Physical Product-Document"}[o],i=(null===(r=y.o[n])||void 0===r?void 0:r.fileHeaders)||[],c=(null===(l=y.o[n])||void 0===l?void 0:l.mandatoryAttributes)||[];if(!o)return void s({errors:["Please select an operation first."],headers:[]});if(!Array.isArray(t))return console.error("\u274c Invalid Collaborative Space list"),void s({errors:["Internal error: Invalid Collaborative Space list."],headers:[]});const d=new FileReader;d.readAsBinaryString(e),d.onload=async e=>{const o=b.LF(e.target.result,{type:"binary",dense:!0,cellDates:!0,cellNF:!1,cellText:!1}),r=o.SheetNames[0],l=o.Sheets[r],d=b.Wp.sheet_to_json(l,{header:1})[0]||[];if(!i.every((e=>d.includes(e))))return console.error("\u274c Template mismatch detected!"),void s({isTemplateMismatch:!0,errors:["The template uploaded does not match the selected operation."],headers:d});const u=b.Wp.sheet_to_json(l,{header:1})[0]||[];if(!u||0===u.length)return void s({errors:["The uploaded file has no content or is empty."],headers:[]});const h=b.Wp.sheet_to_json(l,{defval:""});if(0===h.length)return void s({errors:["The uploaded file contains headers but no data rows."],headers:u});const p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(h,1e3),m=[],g=["MMI-","RS-","DAN-","RSC-","TF-","ROXA-"];let v={mandatory:0,collabSpace:0,einPrefix:0,docPrefix:0};for(let a=0;a<p.length;a++){const e=p[a],o=Math.round((a+1)/p.length*100);e.forEach(((e,o)=>{const s=1e3*a+o;if(c.forEach((t=>{e[t]&&""!==e[t].toString().trim()||(v.mandatory++,m.push("Row ".concat(s+2,': "').concat(t,'" is required but is empty')))})),"Physical Product"===n||"Document"===n){var r;const o=(null===(r=e["Collaborative Space"])||void 0===r?void 0:r.trim())||"";o&&t.includes(o)||(v.collabSpace++,m.push("Row ".concat(s+2,': "').concat(o?'You are not allowed to create in "Collaborative Space -" ('.concat(o,")"):'Collaborative Space" is Missing or Empty')))}let l=null,i="";var d;if("Physical Product"===n||"Physical Product Structure"===n)i="EIN Number",l=(null===(d=e[i])||void 0===d?void 0:d.toString().trim())||null,l&&g.some((e=>l.startsWith(e)))&&(v.einPrefix++,m.push("Row ".concat(s+2,': "EIN Number" value "').concat(l,'" has an invalid prefix.')));else if("Physical Product-Document"===n||"Document"===n){var u;i="Document Name",l=(null===(u=e[i])||void 0===u?void 0:u.toString().trim())||null,l&&g.some((e=>l.startsWith(e)))&&(v.docPrefix++,m.push("Row ".concat(s+2,': "Document Name" value "').concat(l,'" has an invalid prefix.')))}})),o%25===0&&console.log("Processing: ".concat(o,"% complete"),{processedRows:1e3*(a+1),totalRows:h.length,currentErrors:{mandatory:v.mandatory,collaborativeSpace:v.collabSpace,einPrefix:v.einPrefix,documentPrefix:v.docPrefix,total:m.length}})}if(m.length>0)return console.log("\u274c Validation completed with errors:",{total:m.length,byType:v}),void s({errors:m,headers:u,mandatoryAttributes:c});console.log("\u2705 Validation completed successfully"),a({headers:u,sheetData:h,validationErrors:[],mandatoryAttributes:c})},d.onerror=()=>{console.error("\u274c Error reading file"),s({errors:["File reading failed."],headers:[],isTemplateMismatch:!1})}})),x=e=>{let{index:t,selectedValue:o,options:a,onChange:s,size:r,className:l}=e;return(0,p.jsxs)(c.A.Select,{"aria-label":"Attribute selection",value:o||"",onChange:e=>{void 0!==t?s(t,e.target.value):s(e.target.value)},size:r,className:l,children:[(0,p.jsx)("option",{value:"",children:a.defaultLabel})," ",a.list.map(((e,t)=>(0,p.jsx)("option",{value:e.value,children:e.label},t)))]})};var w=o(314),N=o(6313),C=o(7348),j=o(4005);const A=e=>{let{variant:t="info",message:o,show:a=!0,className:s=""}=e;return a?(0,p.jsx)(j.A,{variant:t,className:s,children:o}):null},S=e=>{let{errors:t}=e;console.log("[ErrorPopup.jsx] errors:",t);const o=(0,a.useMemo)((()=>{const e=t.reduce(((e,t)=>{const o=t.match(/Row (\d+):/),a=t.match(/"([^"]*)" (?:is required|value)/),s=t.split(": ").slice(1).join(": "),r=o?o[1]:"N/A",l=a?a[1]:t.includes("Collaborative Space")?"Collaborative Space":"N/A";return e[r]||(e[r]={rowNumber:r,columns:[],errors:[]}),e[r].columns.push(l),e[r].errors.push(s||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),s=new C.jS({fixedWidth:!0,defaultHeight:50}),r=e=>{let{key:t,index:a,style:r,parent:l}=e;const n=o[a];return(0,p.jsx)(C.dl,{cache:s,columnIndex:0,rowIndex:a,parent:l,children:(0,p.jsxs)("div",{style:r,className:"table-row",children:[(0,p.jsx)("div",{className:"table-cell",style:{width:"15%"},children:n.rowNumber}),(0,p.jsx)("div",{className:"table-cell",style:{width:"25%"},children:n.columns.map(((e,t)=>(0,p.jsx)("div",{children:e},t)))}),(0,p.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,p.jsx)("ul",{className:"error-list",children:n.errors.map(((e,t)=>(0,p.jsx)("li",{children:e},t)))})})]})},t)};return(0,p.jsxs)("div",{className:"error-popup-container",children:[(0,p.jsx)(A,{variant:"danger",message:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",o.length," errors found)"]}),className:"custom-alert"}),(0,p.jsxs)("div",{className:"table-wrapper",children:[(0,p.jsxs)("div",{className:"static-header",children:[(0,p.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,p.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,p.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,p.jsx)("div",{className:"table-container",children:(0,p.jsx)(C.t$,{children:e=>{let{height:t,width:a}=e;return(0,p.jsx)(C.B8,{width:a,height:t,rowCount:o.length,rowHeight:s.rowHeight,deferredMeasurementCache:s,rowRenderer:r})}})})]})]})},P=e=>{let{show:t,onHide:o,errors:a}=e;return console.log("[ContentErrorsModal.jsx] errors:",a),(0,p.jsx)(N.A,{show:t,onHide:o,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:o}],children:(0,p.jsx)(S,{errors:a})})},D=e=>{let{show:t,onHide:o,onConfirm:a}=e;return(0,p.jsx)(N.A,{show:t,onHide:o,title:"Confirmation",footerButtons:[{label:"Cancel",variant:"danger",onClick:o},{label:"Confirm",variant:"success",onClick:a}],children:(0,p.jsx)("p",{children:"Are you sure you want to submit?"})})};var T=o(9379),k=o(4196);const R=e=>{let{columnHeaders:t,handleCheckboxChange:o,checkedItems:s,handleSelectChange:r,selectedAttributes:l,mappedAttributes:n,mandatoryAttributes:i}=e;const{allNLSValues:c=[],dropdownOptions:d=[]}=n||{};console.log("Mapped Attributes prop:",n),console.log("columnHeaders",t),console.log("static table recieved manditory Attribute",i),console.log("Dropdown Options :",d),a.useEffect((()=>{console.log("Debug NLS matches:"),console.log("All NLS Values:",c),t.forEach((e=>{console.log('Checking header: "'.concat(e,'"')),console.log("Available NLS matches:",c.filter((t=>t.toLowerCase().trim()===e.toLowerCase().trim())))}))}),[c,t]);return(0,p.jsxs)(k.A,{bordered:!0,className:"table-light ",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{className:"header-styling",children:" Column Name"}),(0,p.jsx)("th",{className:"header-styling",children:"Attribute Name"})]})}),(0,p.jsx)("tbody",{children:t.map(((e,t)=>{const o=i.includes(e),a=(e=>{if(!Array.isArray(c))return console.warn("allNLSValues is not an array:",c),!1;const t=e.toLowerCase().trim(),o=c.some((e=>e.toLowerCase().trim()===t));return console.log('Column "'.concat(e,'" NLS match:'),o?"Found \u2705":"Not Found \u274c"),o})(e);return console.log("Row ".concat(t,":"),{header:e,hasNLS:a,isMandatory:o,defaultLabel:a?e:""}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:e}),(0,p.jsx)("td",{children:(0,p.jsx)(x,{index:t,selectedValue:l[t]||e,onChange:r,size:"lg",className:"w-100",disabled:!a,options:{defaultLabel:a?e:"Please select from Drop Down",list:d.map((e=>({value:e.backendName,label:e.uiLabel})))}})})]},t)}))})]})};var E=o(2268),I=o(6047);const M=()=>{const{showErrorToast:e}=(0,h.A)(),[t,o]=(0,a.useState)([]),s="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";return(0,a.useEffect)((()=>{(async()=>{try{var t,a,r,l,n,i,c,d;console.log("Fetching column mapping...");const u=await(0,E.I)();if(!u)return void e(g.rK);const h=await(0,I.ui)("GET","".concat(s,"/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1"),"",u);if(!h||!h.output)throw new Error("Failed to fetch metadata.");console.log("Metadata Member:",h.output.member);const p=null===(t=h.output)||void 0===t||null===(a=t.member)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.id;if(!p)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",p);const m=await(0,I.ui)("POST","".concat(s,"/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest"),{busIDs:[p]},u);if(!m||!m.output)throw new Error("Failed to fetch attribute data.");console.log("Attribute Response:",m.output);const v=(null===(l=m.output.results)||void 0===l||null===(n=l[0])||void 0===n?void 0:n.groupData)||[],b=v.filter((e=>e.path&&"XP_VPMReference_Ext"===e.extension)).map((e=>{var t;return{displayName:e.nls,technicalName:e.name,fullPath:e.path,dimensionType:e.dimensionType,unit:e.unitName,group:e.groupNLS,defaultValue:(null===(t=e.value)||void 0===t?void 0:t[0])||null}}));console.log("Path Info:",b),console.log("Full Group Data (with all NLS values):",v.map((e=>e.nls)));const y=v.map((e=>e.nls)),f=((null===(i=m.output.results)||void 0===i||null===(c=i[0])||void 0===c||null===(d=c.groupData)||void 0===d?void 0:d.filter((e=>!0===e.deploymentExtension)))||[]).map((e=>({uiLabel:e.nls,backendName:e.name})));console.log("Mapped Attributes:",f),console.log("All available NLS values:",y),console.log("Mapped Attributes (for dropdown):",f),o({allNLSValues:v.map((e=>e.nls)),dropdownOptions:f})}catch(u){console.error("Error fetching column mapping:",u),e(u.message||"Error fetching column mapping.")}})()}),[]),{mappedAttributes:t}},F=e=>{let{columnHeaders:t,mandatoryAttributes:o}=e;console.log("MappedList - Received columnHeaders:",t),console.log("MappedList - Received mandatoryAttributes:",o);const{mappedAttributes:s}=M(),[r,l]=(0,a.useState)({}),[n,i]=(0,a.useState)({}),[c,d]=(0,a.useState)({allNLSValues:[],dropdownOptions:[]});(0,a.useEffect)((()=>{Array.isArray(s)&&(console.log("Filtered mapped attributes:",s),d({allNLSValues:s.map((e=>e.uiLabel)),dropdownOptions:s}))}),[s]);return(0,p.jsx)(R,{columnHeaders:t,handleCheckboxChange:e=>{l((0,T.A)((0,T.A)({},r),{},{[e]:!r[e]}))},checkedItems:r,handleSelectChange:(e,t)=>{i((0,T.A)((0,T.A)({},n),{},{[e]:t}))},selectedAttributes:n,mappedAttributes:s,mandatoryAttributes:o})},L=e=>{let{show:t,onHide:o,columnHeaders:a,mandatoryAttributes:s}=e;const r=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("strong",{children:"\u26a0\ufe0fNote:"})," All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name."]});return(0,p.jsxs)(N.A,{show:t,onHide:o,title:"Manage Spreadsheet Columns",footerButtons:[{label:"Ok",variant:"primary",onClick:o},{label:"Cancel",variant:"danger",onClick:o}],children:[(0,p.jsx)(A,{variant:"info",message:r,className:"mapped-popup-alert"}),(0,p.jsx)(F,{columnHeaders:a,mandatoryAttributes:s})]})},O="1",H="2",U="3",V="4",_={[O]:e=>{var t,o;const a=(null===(t=e["Physical product/Raw Material"])||void 0===t||null===(o=t.toLowerCase())||void 0===o?void 0:o.trim())||"";let s;return s=a.includes("physical product")?"VPMReference":a.includes("raw material")?"Raw_Material":"",{type:s,title:e.Title||"",attributes:{description:e.Description||"",path:e["Item Catalog Category"]||"","dseno:EnterpriseAttributes":{"XP_VPMReference_Ext.EMR_ERP_PrimaryUOM":e["Unit Of Measure"]||e["Unit of Measure"]||""},"dseng:EnterpriseReference":{partNumber:e["EIN Number"]||""}},classificationType:e.Type||"",collabspace:e["Collaborative Space"]||e.Collabspace||""}},[H]:e=>({parentId:e["Parent EIN"]||"",childId:e["Child EIN"]||"",relationshipType:"Product Structure",attributes:{quantity:e.Quantity||"1",unit:e.Unit||"Each"}}),[U]:e=>({type:"Document",title:e["Document Name"]||"",attributes:{description:e.Description||"","document:attributes":{documentType:e["Document Type"]||"",revision:e.Revision||""}},collabspace:e["Collaborative Space"]||e.Collabspace||""}),[V]:e=>({productId:e["Product EIN"]||"",documentId:e["Document Name"]||"",relationshipType:e["Relationship Type"]||"Reference"})},q=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;if(!Array.isArray(e)||0===e.length)return{items:[],chunks:[],totalItems:0,totalChunks:0};console.log("Raw Sheet Data:",e),console.log("Operation Type:",t);const a=_[t];if(!a)return console.error("No mapper found for operation type: ".concat(t)),{items:[],chunks:[],totalItems:0,totalChunks:0};const s=e.map(((e,t)=>a(e))),r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const o=[];for(let a=0;a<e.length;a+=t)o.push(e.slice(a,a+t));return o}(s,o),l={items:s,chunks:r,totalItems:s.length,totalChunks:r.length};return console.log("Final mapped data:",l),l};var z=o(3862);const B={1:"/massUpload/uploadPhysicalProduct",2:"/massUpload/uploadProductStructure",3:"/massUpload/uploadDocument",4:"/massUpload/uploadProductDocument"},X=()=>{const[e,t]=(0,a.useState)([]),[o,s]=(0,a.useState)(!1),[r,l]=(0,a.useState)(!1),[n,u]=(0,a.useState)(!1),[b,y]=(0,a.useState)(!1),{showErrorToast:N,showSuccessToast:C}=(0,h.A)(),[j,A]=(0,a.useState)(!1),[S,T]=(0,a.useState)(""),[k,R]=(0,a.useState)([]),[E,I]=(0,a.useState)([]),[M,F]=(0,a.useState)([]),O=(0,a.useRef)(),[H,U]=(0,a.useState)(null);(0,a.useEffect)((()=>{console.log("[MassUpload.jsx] Global collabSpaceTitles:",w.oX),Array.isArray(w.oX)?t([...w.oX]):console.error("[MassUpload.jsx] \u274c globalCollabSpaceTitles is not an array!",w.oX),console.log("[MassUpload.jsx] Retrieved collabSpaceTitles:",e)}),[]);const V=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];s(!1),l(!1),u(!1),y(!1),A(!1),T(""),R([]),I([]),F([]),U(null);const t=document.querySelector('select[aria-label="Choose Operations"]');t&&(t.value=""),e||C("Widget reset successfully!")};(0,a.useEffect)((()=>{console.log("Operation Choice updated:",S)}),[S]);const _=0===E.length||k.length>0,X=0===E.length;console.log("Errors in Massupload.jsx:",k);const W=!S;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i.A,{className:"mt-3",gap:4,children:[(0,p.jsxs)(i.A,{direction:"horizontal",children:[(0,p.jsx)(x,{selectedValue:S,onChange:e=>{console.log("Operation selected:",e),T(e)},size:"lg",className:"w-50",options:{defaultLabel:"Choose Operations",list:[{value:"1",label:"Physical Product/Raw Material"},{value:"2",label:"Physical Product Structure"},{value:"3",label:"Document"},{value:"4",label:"Physical Product-Document"}]}}),(0,p.jsx)("div",{className:"p-2 ms-auto",children:"3"===S&&(0,p.jsx)(c.A.Group,{controlId:"formFileMultiple",children:(0,p.jsx)(c.A.Control,{type:"file",multiple:!0})})}),(0,p.jsx)("div",{className:"p-2",children:(0,p.jsx)(d.A,{variant:"link ms-auto",size:"lg",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(g._2)}window.open(o,"_blank")})(N)(S)},text:"Download Template"})})]}),(0,p.jsx)("div",{className:W?"opacity-50":"",children:(0,p.jsx)(m,{ref:O,fileTypes:["XLSX"],multiple:!1,onUpload:async t=>{if(0!==t.length)try{A(!0),console.log("Starting file validation..."),console.log("Selected Operation:",S),console.log("File:",t[0].name);const o=await f(t[0],e,S),{headers:a=[],validationErrors:s=[],mandatoryAttributes:r=[],sheetData:n=[]}=o;if(I(a),F(r),n.length>0){const e=q(n,S);console.log("Mapped JSON data:",e),U(e)}0===s.length?(R([]),C("File validated successfully!")):(R(s),l(!0))}catch(o){console.error("Validation failed:",o);const{errors:e=["Unknown validation error."],headers:t=[],mandatoryAttributes:a=[],isTemplateMismatch:s=!1}=o;if(s)return N("The template uploaded and the selected operation do not match"),V(!0),void(O.current&&O.current.handleClearFiles());R(e),I(t),F(a),l(!0)}finally{A(!1)}},onReset:V,disabled:W,message:W?"Please select an operation first":"Drag & Drop your files here or Click to browse"})}),j&&(0,p.jsx)(v.A,{}),(0,p.jsxs)(i.A,{direction:"horizontal",gap:2,children:[(0,p.jsx)(c.A.Check,{type:"checkbox",label:"Background",className:"size-increase"}),(0,p.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[k.length>0&&(0,p.jsx)(d.A,{variant:"danger",onClick:()=>u(!0),text:"Content Errors (".concat(k.length,")")}),(0,p.jsx)(d.A,{variant:X?"secondary":"info",onClick:()=>{u(!1),y(!0)},text:"Manage Spreadsheet Columns",disabled:X}),(0,p.jsx)(d.A,{variant:_?"secondary":"primary",disabled:_,size:"lg",onClick:()=>s(!0),text:"Submit"})]})]})]}),(0,p.jsx)(P,{show:n,onHide:()=>u(!1),errors:k}),(0,p.jsx)(D,{show:o,onHide:()=>s(!1),onConfirm:async()=>{try{if(!H)return void N("No data to submit");const t=B[S];if(!t)return void N("Invalid operation type");const{chunks:o,totalChunks:a}=H;let r=0,l=0;C("Starting upload of ".concat(a," chunks..."));for(let s=0;s<o.length;s++)try{const e=o[s];200===(await z.A.post(t,{items:e})).status&&(r++,s%5===0&&C("Processed ".concat(s+1," of ").concat(a," chunks...")))}catch(e){console.error("Chunk ".concat(s+1," failed:"),e),l++}const n="Upload complete: ".concat(r," chunks successful, ").concat(l," failed");l>0?N(n):(C("Upload successful!"),s(!1),V())}catch(e){console.error("Upload error:",e),N("Upload failed: ".concat(e.message))}}}),(0,p.jsx)(L,{show:b,onHide:()=>y(!1),columnHeaders:E,mandatoryAttributes:M})]})};let W=null;function G(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),W||(W=s.createRoot(o)),W.render((0,p.jsxs)(r.Kq,{store:l.A,children:[(0,p.jsx)(X,{}),(0,p.jsx)(n.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>s});var a=o(6047);const s=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,a.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",s=await new Promise(((e,a)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:a})})),r=s.csrf.name,l=s.csrf.value,n="SecurityContext",i=e;return{[r]:l,[n]:i}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=908.1e6e89aa.chunk.js.map