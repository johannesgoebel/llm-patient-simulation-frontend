(this["webpackJsonpai-avatar-frontend"]=this["webpackJsonpai-avatar-frontend"]||[]).push([[0],{20:function(e,t,a){e.exports=a(41)},27:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),l=a.n(i),o=a(13),c=(a(27),a(14),a(9)),s=a.n(c);var d=()=>r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"80",height:"80"},r.a.createElement("path",{id:"line1",d:"M20 10 L20 90",stroke:"white","stroke-width":"8","stroke-linecap":"round",begin:"0s"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M20 10 L20 90; M20 30 L20 70; M20 10 L20 90;",repeatCount:"indefinite",begin:"0.1s"})),r.a.createElement("path",{id:"line2",d:"M35 20 L35 80",stroke:"white","stroke-width":"8","stroke-linecap":"round"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M35 20 L35 80; M35 40 L35 60; M35 20 L35 80;",repeatCount:"indefinite",begin:"0.2s"})),r.a.createElement("path",{id:"line3",d:"M50 10 L50 90",stroke:"white","stroke-width":"8","stroke-linecap":"round"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M50 10 L50 90; M50 30 L50 70; M50 10 L50 90;",repeatCount:"indefinite",begin:"0.3s"})),r.a.createElement("path",{id:"line4",d:"M65 20 L65 80",stroke:"white","stroke-width":"8","stroke-linecap":"round"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M65 20 L65 80; M65 40 L65 60; M65 20 L65 80;",repeatCount:"indefinite",begin:"0.4s"})),r.a.createElement("path",{id:"line5",d:"M80 10 L80 90",stroke:"white","stroke-width":"8","stroke-linecap":"round"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M80 10 L80 90; M80 30 L80 70; M80 10 L80 90;",repeatCount:"indefinite",begin:"0.5s"})));var m=()=>r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-mic",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"}),r.a.createElement("path",{d:"M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"}));var u=e=>{let{sendMessage:t,dictaphoneState:a}=e;const{transcript:n,browserSupportsSpeechRecognition:i}=Object(c.useSpeechRecognition)();if(!i)return r.a.createElement("span",null,"Browser doesn't support speech recognition. This app is primarily developed for Google Chrome.");return r.a.createElement("div",{className:"chat-input-container  d-flex flex-column align-items-center"},r.a.createElement("button",{className:"round-button btn btn-primary dictaphone-button",style:{borderRadius:"50%",width:"100px",height:"100px",margin:"20px"},onMouseDown:s.a.startListening,onMouseUp:()=>{var e;e=5e3,new Promise(t=>setTimeout(t,e)),s.a.stopListening(),t(n)}},(()=>{switch(a){case 1:return r.a.createElement(m,null);case 2:return r.a.createElement("div",{className:"spinner-border text-light",role:"status"});case 3:return r.a.createElement(d,null);default:return null}})()),r.a.createElement("p",{className:"text-primary"},"Zur Spracheingabe Button dr\xfccken und halten"))},h=a(43);var p=()=>{const[e,t]=Object(n.useState)([]),[i,l]=Object(n.useState)(""),[o,c]=Object(n.useState)("Astrid Seeger"),[s,d]=Object(n.useState)(""),[m,p]=Object(n.useState)(1),[g,b]=Object(n.useState)(!1),[v,f]=Object(n.useState)(!1),[w,E]=Object(n.useState)("");a(37).config();console.log("0b352ca3d02658057e0c16ec3dc5f680");const y=Object(n.useRef)(null),k={stability:.5,similarity_boost:.75,style:1,use_speaker_boost:!0};Object(n.useEffect)(()=>{y.current&&(y.current.scrollTop=y.current.scrollHeight)},[e]);const x=async e=>{try{const a="https://llm-patient-simulation-backend.vercel.app/conversation/vignette?name=".concat(encodeURIComponent(e)),n=await fetch(a,{method:"POST"});if(n.ok)c(e),t([]);else if(0===n.status)console.error("Failed to update vignette: CORS issue detected.");else if(n.ok||n.status){const e=await n.text();console.error("Failed to update vignette: ".concat(n.status," - ").concat(e))}else console.error("Failed to update vignette: Network error.")}catch(w){console.error("Error:",w.message)}},N=async a=>{if(a&&s){p(2),l("");try{const n="https://llm-patient-simulation-backend.vercel.app/retrieve_answer?message=".concat(encodeURIComponent(a),"&api_key=").concat(s),r=await fetch(n,{method:"POST",headers:{accept:"application/json"}});if(!r.ok)throw new Error("Failed to retrieve answer");const i=await r.json();if(t([...e,{user:"Me",text:a},{user:"Bot",text:i.answer}]),l(""),p(1),g){(async e=>{let{voiceId:t,text:a,apiKey:n,voiceSettings:r,onLoading:i,onError:l}=e;const o={"Content-Type":"application/json","xi-api-key":n};console.log(o);const c={text:a,voice_settings:r,model_id:"eleven_multilingual_v1"};try{const e=await h.a.get("https://api.elevenlabs.io/v1/voices",{headers:o});if(200===e.status){const t=e.data.voices.filter(e=>e.fine_tuning&&"de"===e.fine_tuning.language);console.log("German Voices:",t)}else console.log("Error: Unable to fetch voices.");const a=await h.a.post("".concat("https://api.elevenlabs.io/v1/text-to-speech","/").concat(t),c,{headers:o,responseType:"blob"});if(200===a.status){new Audio(URL.createObjectURL(a.data)).play()}else console.log("Error: Unable to stream audio.")}catch(w){console.log("Error: Unable to stream audio.")}})({voiceId:"Michael Schulze"==o?"t0jbNlBVZ17f02VDIeMI":"pFZP5JQG7iQjIQuC4Bku",text:i.answer,apiKey:"0b352ca3d02658057e0c16ec3dc5f680",voiceSettings:k,onLoading:f,onError:E})}}catch(w){console.error("Error sending message:",w)}}};return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:{minHeight:"100vh",overflow:"hidden",background:"#696969"}},r.a.createElement("div",{className:"row",style:{width:"100%"}},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"h-100 d-flex flex-column justify-content-center align-items-center",style:{color:"#faf8ff",height:"100vh"}},r.a.createElement("div",null,r.a.createElement("h4",{style:{margin:"20px"}},"Auswahl der Fallvignette"),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"button",className:"btn btn-lg ".concat("Astrid Seeger"===o?"btn-primary":"btn-secondary"),onClick:()=>x("Astrid Seeger")},"Astrid Seeger"),r.a.createElement("button",{type:"button",className:"btn btn-lg ".concat("Michael Schulze"===o?"btn-primary":"btn-secondary"),onClick:()=>x("Michael Schulze")},"Michael Schulze"),r.a.createElement("button",{type:"button",className:"btn btn-lg ".concat("Lieselotte Daenger"===o?"btn-primary":"btn-secondary"),onClick:()=>x("Lieselotte Daenger")},"Lieselotte D\xe4nger")),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"apiKeyInput",className:"form-label"},r.a.createElement("h4",{style:{margin:"20px"}},"API Key")),r.a.createElement("input",{type:"text",className:"form-control",id:"apiKeyInput",placeholder:"Hier Key einf\xfcgen",value:s,onChange:e=>{d(e.target.value)}}))),r.a.createElement("div",{className:"form-check form-switch"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onInput:()=>{b(!g)},checked:g}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Audio generieren"))))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"rounded-xl shadow-lg",style:{backgroundColor:"white",height:"100vh",overflow:"hidden"}},r.a.createElement("div",{className:"chat-container overflow-auto",style:{height:"60%",padding:"10px",position:"relative"}},e.map((e,t)=>((e,t)=>{const a="Me"===e.user;return r.a.createElement("div",{key:t,className:"d-flex ".concat(a?"justify-content-end":"justify-content-start"," my-2")},r.a.createElement("div",{className:"p-2 rounded ".concat(a?"bg-primary text-white":"bg-light text-dark"),style:{maxWidth:"70%"}},e.text))})(e,t))),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center align-items-end",style:{height:"20%"}},r.a.createElement("div",{className:"position-fixed bottom-0 mb-3 p-2 rounded-l shadow",style:{width:"60%",left:"60%",transform:"translateX(-50%)",background:"linear-gradient(white, rgba(255, 255, 255, 0))"}},r.a.createElement(u,{sendMessage:N,dictaphoneState:m,disabled:!s}),r.a.createElement("div",{className:"input-group mt-3"},r.a.createElement("input",{type:"text",className:"form-control",value:i,onChange:e=>l(e.target.value),onKeyDown:e=>{"Enter"===e.key&&i&&N(i)},placeholder:"Hier Nachricht eintragen.."}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:()=>N(i),className:"btn btn-primary",disabled:!i||!s},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"}))))))))))))},g=(a(40),a(3));var b=function(){return r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",element:r.a.createElement(p,null)}))};var v=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:i,getTTFB:l}=t;a(e),n(e),r(e),i(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(o.a,{basename:"/llm-patient-simulation-frontend"},r.a.createElement(b,null))),v()}},[[20,1,2]]]);
//# sourceMappingURL=main.cdc74e23.chunk.js.map