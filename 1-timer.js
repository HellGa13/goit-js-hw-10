import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as l}from"./assets/vendor-A92OCY9B.js";const t=document.querySelector("button[data-start]");t.disabled=!0;const a=document.getElementById("datetime-picker");let r=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r<=new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),t.disabled=!0):t.disabled=!1}};h(a,p);const D=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),w=document.querySelector("[data-seconds]");let i;t.addEventListener("click",()=>{t.disabled=!0,a.disabled=!0,i=setInterval(()=>{const o=r-new Date;if(o<=0)clearInterval(i),l.success({title:"Success",message:"Countdown finished"}),a.disabled=!1;else{const{days:d,hours:c,minutes:u,seconds:s}=C(o);D.textContent=n(d),S.textContent=n(c),b.textContent=n(u),w.textContent=n(s)}},1e3)});function C(e){const s=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:m,minutes:y,seconds:f}}function n(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
