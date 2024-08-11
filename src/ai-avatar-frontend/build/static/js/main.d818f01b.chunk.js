(this["webpackJsonpai-avatar-frontend"]=this["webpackJsonpai-avatar-frontend"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/astrid_seeger.91fe1939.png"},21:function(e,t,a){e.exports=a.p+"static/media/michael_schulze.d19e7ad0.png"},22:function(e,t,a){e.exports=a.p+"static/media/lieselotte_daenger.a7459b0b.png"},23:function(e,t,a){e.exports=a(43)},30:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),l=a.n(i),s=a(13),c=(a(30),a(3)),o=(a(14),a(9)),m=a.n(o);var d=()=>r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"80",height:"80"},r.a.createElement("path",{id:"line1",d:"M20 10 L20 90",stroke:"white","stroke-width":"8","stroke-linecap":"round",begin:"0s"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M20 10 L20 90; M20 30 L20 70; M20 10 L20 90;",repeatCount:"indefinite",begin:"0.1s"})),r.a.createElement("path",{id:"line2",d:"M35 20 L35 80",stroke:"white","stroke-width":"8","stroke-linecap":"round"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M35 20 L35 80; M35 40 L35 60; M35 20 L35 80;",repeatCount:"indefinite",begin:"0.2s"})),r.a.createElement("path",{id:"line3",d:"M50 10 L50 90",stroke:"white","stroke-width":"8","stroke-linecap":"round"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M50 10 L50 90; M50 30 L50 70; M50 10 L50 90;",repeatCount:"indefinite",begin:"0.3s"})),r.a.createElement("path",{id:"line4",d:"M65 20 L65 80",stroke:"white","stroke-width":"8","stroke-linecap":"round"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M65 20 L65 80; M65 40 L65 60; M65 20 L65 80;",repeatCount:"indefinite",begin:"0.4s"})),r.a.createElement("path",{id:"line5",d:"M80 10 L80 90",stroke:"white","stroke-width":"8","stroke-linecap":"round"},r.a.createElement("animate",{attributeName:"d",dur:"1s",values:"M80 10 L80 90; M80 30 L80 70; M80 10 L80 90;",repeatCount:"indefinite",begin:"0.5s"})));var u=()=>r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-mic",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"}),r.a.createElement("path",{d:"M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"}));var h=e=>{let{sendMessage:t,dictaphoneState:a}=e;const{transcript:n,browserSupportsSpeechRecognition:i}=Object(o.useSpeechRecognition)();if(!i)return r.a.createElement("span",null,"Dieser Browser unterst\xfctzt keine Spracherkennung. Diese App ist prim\xe4r f\xfcr Google Chrome und andere Chromium-basierte Browser entwickelt.");return r.a.createElement("div",{className:"chat-input-container d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("button",{className:"round-button btn btn-primary dictaphone-button",style:{borderRadius:"50%",width:"100px",height:"100px",margin:"10px"},onMouseDown:m.a.startListening,onMouseUp:()=>{var e;e=7e3,new Promise(t=>setTimeout(t,e)),m.a.stopListening(),t(n)}},(()=>{switch(a){case 1:return r.a.createElement(u,null);case 2:return r.a.createElement("div",{className:"spinner-border text-light",role:"status"});case 3:return r.a.createElement(d,null);default:return null}})()),r.a.createElement("p",{className:"text-primary",style:{margin:"0 0 0 10px"}},"Zur Spracheingabe Button dr\xfccken und halten")))},g=a(45);var p=a(20),v=a.n(p),b=a(21),E=a.n(b),f=a(22),w=a.n(f);var y=e=>{let{vignetteName:t,apiKey:a,handleApiKeyChange:n}=e;return r.a.createElement("div",null,r.a.createElement("h4",{style:{margin:"20px"}},t),(e=>{switch(e){case"Michael Schulze":return r.a.createElement("img",{src:E.a,className:"img-fluid rounded",alt:"Michael Schulze"});case"Astrid Seeger":return r.a.createElement("img",{src:v.a,className:"img-fluid rounded",alt:"Astrid Seeger"});case"Lieselotte Daenger":return r.a.createElement("img",{src:w.a,className:"img-fluid rounded",alt:"Lieselotte D\xe4nger"});default:return r.a.createElement("div",null)}})(t),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"apiKeyInput",className:"form-label",style:{display:"flex",alignItems:"center"}},r.a.createElement("h4",{style:{margin:"0 10px 0 0"}},"API Key"),r.a.createElement("span",{className:"d-inline-block",tabIndex:"0","data-toggle":"tooltip",title:"Der API-Key kann der LimeSurvey Umfrage entnommen werden."},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),r.a.createElement("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})))),r.a.createElement("input",{type:"text",className:"form-control",id:"apiKeyInput",placeholder:"Hier Key einf\xfcgen",value:a,onChange:n}))))};const x={"astrid-seeger":"Astrid Seeger","michael-schulze":"Michael Schulze","lieselotte-daenger":"Lieselotte Daenger"};var k=e=>{let{vignette:t}=e;const i=x[t]||"Unknown Vignette",[l,s]=Object(n.useState)([]),[c,o]=Object(n.useState)(""),[m,d]=Object(n.useState)(""),[u,p]=Object(n.useState)(1),[v,b]=Object(n.useState)(!0),[E,f]=Object(n.useState)(!1),[w,k]=Object(n.useState)("");a(40).config();console.log("0b352ca3d02658057e0c16ec3dc5f680");const N=Object(n.useRef)(null),M={stability:.5,similarity_boost:.75,style:1,use_speaker_boost:!0};Object(n.useEffect)(()=>{N.current&&(N.current.scrollTop=N.current.scrollHeight)},[l]),Object(n.useEffect)(()=>{i&&S(i)},[i]);const S=async e=>{try{const t="https://llm-patient-simulation-backend.vercel.app/conversation/vignette?name=".concat(encodeURIComponent(e)),a=await fetch(t,{method:"POST"});if(a.ok)s([]);else if(0===a.status)console.error("Failed to update vignette: CORS issue detected.");else if(a.ok||a.status){const e=await a.text();console.error("Failed to update vignette: ".concat(a.status," - ").concat(e))}else console.error("Failed to update vignette: Network error.")}catch(w){console.error("Error:",w.message)}},L=async e=>{if(e&&m){p(2),o("");try{const t="https://llm-patient-simulation-backend.vercel.app/retrieve_answer?message=".concat(encodeURIComponent(e),"&api_key=").concat(m),a=await fetch(t,{method:"POST",headers:{accept:"application/json"}});if(!a.ok)throw new Error("Failed to retrieve answer");const n=await a.json();if(s([...l,{user:"Me",text:e},{user:"Bot",text:n.answer}]),o(""),p(1),v){(async e=>{let{voiceId:t,text:a,apiKey:n,voiceSettings:r,onLoading:i,onError:l}=e;const s={"Content-Type":"application/json","xi-api-key":n};console.log(s);const c={text:a,voice_settings:r,model_id:"eleven_multilingual_v1"};try{const e=await g.a.get("https://api.elevenlabs.io/v1/voices",{headers:s});if(200===e.status){const t=e.data.voices.filter(e=>e.fine_tuning&&"de"===e.fine_tuning.language);console.log("German Voices:",t)}else console.log("Error: Unable to fetch voices.");const a=await g.a.post("".concat("https://api.elevenlabs.io/v1/text-to-speech","/").concat(t),c,{headers:s,responseType:"blob"});if(200===a.status){new Audio(URL.createObjectURL(a.data)).play()}else console.log("Error: Unable to stream audio.")}catch(w){console.log("Error: Unable to stream audio.")}})({voiceId:"Michael Schulze"==i?"t0jbNlBVZ17f02VDIeMI":"pFZP5JQG7iQjIQuC4Bku",text:n.answer,apiKey:"0b352ca3d02658057e0c16ec3dc5f680",voiceSettings:M,onLoading:f,onError:k})}}catch(w){console.error("Error sending message:",w)}}};return r.a.createElement("div",{style:{maxHeightHeight:"100vh"}},r.a.createElement("nav",{class:"navbar bg-dark border-bottom border-body h-10","data-bs-theme":"dark"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("span",{class:"navbar-text"},"Einsatz KI-basierter Patientensimulationen in der medizinischen Lehre"))),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:{minHeight:"90vh",overflow:"hidden",background:"#696969"}},r.a.createElement("div",{className:"row",style:{width:"100%"}},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"h-90 d-flex flex-column justify-content-center align-items-center",style:{color:"#faf8ff",height:"90vh"}},r.a.createElement("div",null,r.a.createElement(y,{vignetteName:i,apiKey:m,handleApiKeyChange:e=>{d(e.target.value)}}),r.a.createElement("div",{className:"form-check form-switch"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onInput:()=>{b(!v)},checked:v}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{display:"flex",alignItems:"center"}},r.a.createElement("p",{style:{margin:"0 10px 0 0"}},"Audio generieren "),r.a.createElement("span",{className:"d-inline-block",tabIndex:"0","data-toggle":"tooltip",title:"Der API-Key kann der LimeSurvey Umfrage entnommen werden."},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),r.a.createElement("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})))))))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"rounded-xl shadow-lg",style:{backgroundColor:"white",height:"100vh",overflow:"hidden"}},r.a.createElement("div",{className:"chat-container overflow-auto",style:{height:"60%",padding:"10px",position:"relative"}},l.length>0?l.map((e,t)=>((e,t)=>{const a="Me"===e.user;return r.a.createElement("div",{key:t,className:"d-flex ".concat(a?"justify-content-end":"justify-content-start"," my-2")},r.a.createElement("div",{className:"p-2 rounded ".concat(a?"bg-primary text-white":"bg-light text-dark"),style:{maxWidth:"70%"}},e.text))})(e,t)):r.a.createElement("div",{class:"m-4"},r.a.createElement("h3",null,"Dies ist die KI-basierte Patientensimulation"),r.a.createElement("p",{class:"lead"},"Sie sind eingeladen, ein Anamnesegespr\xe4ch mit einem simulierten Patienten zu f\xfchren. Diese Simulation soll Ihnen die M\xf6glichkeit geben, Ihre F\xe4higkeiten in der Gespr\xe4chsf\xfchrung und Diagnosestellung zu testen und zu verbessern."),r.a.createElement("p",{class:"text-muted"},"Starten Sie das Gespr\xe4ch, indem Sie den Patienten begr\xfc\xdfen oder eine Frage stellen."))),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center align-items-end",style:{height:"20%"}},r.a.createElement("div",{className:"position-fixed bottom-0 mb-3 p-2 rounded-l shadow",style:{width:"60%",left:"60%",transform:"translateX(-50%)",background:"linear-gradient(white, rgba(255, 255, 255, 0))"}},r.a.createElement(h,{sendMessage:L,dictaphoneState:u,disabled:!m}),r.a.createElement("div",{className:"input-group mt-3"},r.a.createElement("input",{type:"text",className:"form-control",value:c,onChange:e=>o(e.target.value),onKeyDown:e=>{"Enter"===e.key&&c&&L(c)},placeholder:"Anamnesegespr\xe4ch mit Patienten durch Text- oder Spracheingabe beginnen."}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:()=>L(c),className:"btn btn-primary",disabled:!c||!m},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"}))))))))))))};var N=()=>r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",element:r.a.createElement(c.a,{to:"/astrid-seeger"})}),r.a.createElement(c.b,{path:"/astrid-seeger",element:r.a.createElement(k,{vignette:"astrid-seeger"})}),r.a.createElement(c.b,{path:"/michael-schulze",element:r.a.createElement(k,{vignette:"michael-schulze"})}),r.a.createElement(c.b,{path:"/lieselotte-daenger",element:r.a.createElement(k,{vignette:"lieselotte-daenger"})}),r.a.createElement(c.b,{path:"*",element:r.a.createElement(c.a,{to:"/"})}));var M=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:i,getTTFB:l}=t;a(e),n(e),r(e),i(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(s.a,null,r.a.createElement(N,null))),M()}},[[23,1,2]]]);
//# sourceMappingURL=main.d818f01b.chunk.js.map