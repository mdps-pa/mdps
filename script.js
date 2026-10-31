document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      const open = nav.classList.toggle("open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      nav.classList.remove("open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a[data-page]").forEach((link) => {
    if (link.getAttribute("data-page") === path) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = "115";
  });

  // Latest-news image modal.
  let lastTrigger = null;

  const closeModal = (modal) => {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastTrigger) lastTrigger.focus();
  };

  document.querySelectorAll("[data-modal-target]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modal = document.getElementById(trigger.getAttribute("data-modal-target"));
      if (!modal) return;
      lastTrigger = trigger;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      const closeBtn = modal.querySelector(".site-modal-close");
      if (closeBtn) closeBtn.focus();
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", () => {
      closeModal(el.closest(".site-modal"));
    });
  });

  document.querySelectorAll(".site-modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openModal = document.querySelector(".site-modal:not([hidden])");
    if (openModal) closeModal(openModal);
  });
});



// v136 organization chart click-to-zoom
document.addEventListener("DOMContentLoaded", function () {
  const chartImage = document.getElementById("organizationChartImage");
  const lightbox = document.getElementById("orgImageLightbox");
  const closeButton = document.getElementById("orgImageClose");

  if (!chartImage || !lightbox) return;

  const closeOrgLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("org-image-open");
    setTimeout(() => {
      if (!lightbox.classList.contains("open")) lightbox.hidden = true;
    }, 180);
  };

  const openOrgLightbox = () => {
    lightbox.hidden = false;
    requestAnimationFrame(() => {
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("org-image-open");
    });
  };

  chartImage.addEventListener("click", function () {
    if (lightbox.classList.contains("open")) {
      closeOrgLightbox();
    } else {
      openOrgLightbox();
    }
  });

  lightbox.addEventListener("click", function () {
    closeOrgLightbox();
  });
  if (closeButton) {
    closeButton.addEventListener("click", function (event) {
      event.stopPropagation();
      closeOrgLightbox();
    });
  }


  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeOrgLightbox();
    }
  });
});


// v140 mobile dropdown collapse fix
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const dropdowns = Array.from(document.querySelectorAll(".nav .dropdown"));

  dropdowns.forEach(function (dropdown) {
    const button = dropdown.querySelector(":scope > button");
    if (!button) return;

    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", function (event) {
      if (window.innerWidth > 950) return;

      event.preventDefault();
      event.stopPropagation();

      const isOpen = dropdown.classList.contains("open");

      dropdowns.forEach(function (other) {
        if (other !== dropdown) {
          other.classList.remove("open");
          const otherButton = other.querySelector(":scope > button");
          if (otherButton) otherButton.setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        dropdown.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      } else {
        dropdown.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", function () {
      setTimeout(function () {
        if (!nav.classList.contains("open")) {
          dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove("open");
            const button = dropdown.querySelector(":scope > button");
            if (button) button.setAttribute("aria-expanded", "false");
          });
        }
      }, 0);
    });
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 950) {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("open");
        const button = dropdown.querySelector(":scope > button");
        if (button) button.setAttribute("aria-expanded", "false");
      });
    }
  });
});


// v141 ppoints flow image click-to-zoom
document.addEventListener("DOMContentLoaded", function () {
  const flowImage = document.getElementById("ppointsFlowImage");
  const lightbox = document.getElementById("ppointsFlowLightbox");
  const closeButton = document.getElementById("ppointsFlowClose");

  if (!flowImage || !lightbox) return;

  const closeFlowLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("org-image-open");
    setTimeout(() => {
      if (!lightbox.classList.contains("open")) lightbox.hidden = true;
    }, 180);
  };

  const openFlowLightbox = () => {
    lightbox.hidden = false;
    requestAnimationFrame(() => {
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("org-image-open");
    });
  };

  flowImage.addEventListener("click", function () {
    if (lightbox.classList.contains("open")) {
      closeFlowLightbox();
    } else {
      openFlowLightbox();
    }
  });

  lightbox.addEventListener("click", function () {
    closeFlowLightbox();
  });

  if (closeButton) {
    closeButton.addEventListener("click", function (event) {
      event.stopPropagation();
      closeFlowLightbox();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeFlowLightbox();
    }
  });
});

// v167 latest-news expand/collapse
document.addEventListener("DOMContentLoaded", function () {
  const panel = document.getElementById("latestNewsPanel");
  const button = document.getElementById("newsToggleBtn");
  if (!panel || !button) return;

  button.addEventListener("click", function () {
    const expanded = panel.classList.toggle("expanded");
    button.setAttribute("aria-expanded", expanded ? "true" : "false");
    button.textContent = expanded ? "收合最新消息 ↑" : "展開全部最新消息 ↓";
  });
});


// v174 global historical visit counter (Abacus API)
(function () {
  function setCounterText(value) {
    document.querySelectorAll('[data-site-visit-counter]').forEach(function (el) {
      el.textContent = value;
    });
  }

  function formatCounter(value) {
    var n = Number(value);
    if (!Number.isFinite(n)) return '—';
    return Math.max(0, n).toLocaleString('zh-TW');
  }

  function readOnlyJsonp(url) {
    return new Promise(function (resolve, reject) {
      var callbackName = '__mdpsAbacusCounter_' + Date.now();
      var script = document.createElement('script');
      var timer = window.setTimeout(function () {
        cleanup();
        reject(new Error('counter timeout'));
      }, 7000);

      function cleanup() {
        window.clearTimeout(timer);
        try { delete window[callbackName]; } catch (e) { window[callbackName] = undefined; }
        if (script.parentNode) script.parentNode.removeChild(script);
      }

      window[callbackName] = function (data) {
        cleanup();
        resolve(data);
      };

      script.async = true;
      script.onerror = function () {
        cleanup();
        reject(new Error('counter JSONP failed'));
      };
      script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + encodeURIComponent(callbackName);
      document.head.appendChild(script);
    });
  }

  document.addEventListener('DOMContentLoaded', async function () {
    if (!document.querySelector('[data-site-visit-counter]')) return;

    var namespace = 'mdps-pa-github-io';
    var key = 'historical-pageviews-v174';
    var base = 'https://abacus.jasoncameron.dev';
    var isLiveSite = location.hostname === 'mdps-pa.github.io';
    var endpoint = base + (isLiveSite ? '/hit/' : '/get/') + namespace + '/' + key;

    try {
      var response = await fetch(endpoint, { mode: 'cors', cache: 'no-store' });
      if (response.status === 404 && !isLiveSite) {
        setCounterText('0');
        return;
      }
      if (!response.ok) throw new Error('counter HTTP ' + response.status);
      var data = await response.json();
      if (!data || data.value === undefined) throw new Error('counter response invalid');
      setCounterText(formatCounter(data.value));
      return;
    } catch (fetchError) {
      // Read-only JSONP fallback: never increments a second time.
      try {
        var fallback = await readOnlyJsonp(base + '/get/' + namespace + '/' + key);
        if (fallback && fallback.value !== undefined) {
          setCounterText(formatCounter(fallback.value));
          return;
        }
      } catch (jsonpError) {}
      setCounterText('暫時無法讀取');
    }
  });
})();
