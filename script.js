
document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".mobile-toggle");
  const nav=document.querySelector(".nav");

  if(toggle && nav){
    toggle.setAttribute("aria-expanded","false");
    toggle.addEventListener("click",()=>{
      const open=nav.classList.toggle("open");
      document.body.classList.toggle("nav-open",open);
      toggle.setAttribute("aria-expanded",open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click",()=>{
        nav.classList.remove("open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded","false");
      });
    });
  }

  const path=location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".nav a[data-page]").forEach(a=>{
    if(a.getAttribute("data-page")===path) a.classList.add("active");
  });
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent="115");

  // Best-effort deterrence against casual copying/downloading.
  // Browsers and operating systems do not provide a way to block screenshots reliably.
  document.body.classList.add("protected-content");
  document.addEventListener("contextmenu",e=>e.preventDefault());
  document.addEventListener("copy",e=>e.preventDefault());
  document.addEventListener("cut",e=>e.preventDefault());
  document.addEventListener("dragstart",e=>e.preventDefault());
  document.addEventListener("keydown",e=>{
    const modifier=e.ctrlKey||e.metaKey;
    if(modifier && ["c","s","u","p"].includes(e.key.toLowerCase())){
      e.preventDefault();
    }
  });
});


// v55: modal for latest-news images.
document.addEventListener("DOMContentLoaded",()=>{
  let lastTrigger=null;

  const closeModal=(modal)=>{
    if(!modal) return;
    modal.hidden=true;
    document.body.classList.remove("modal-open");
    if(lastTrigger) lastTrigger.focus();
  };

  document.querySelectorAll("[data-modal-target]").forEach(trigger=>{
    trigger.addEventListener("click",()=>{
      const modal=document.getElementById(trigger.getAttribute("data-modal-target"));
      if(!modal) return;
      lastTrigger=trigger;
      modal.hidden=false;
      document.body.classList.add("modal-open");
      const closeBtn=modal.querySelector(".site-modal-close");
      if(closeBtn) closeBtn.focus();
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach(el=>{
    el.addEventListener("click",()=>closeModal(el.closest(".site-modal")));
  });

  document.addEventListener("keydown",e=>{
    if(e.key!=="Escape") return;
    const modal=document.querySelector(".site-modal:not([hidden])");
    if(modal) closeModal(modal);
  });
});
