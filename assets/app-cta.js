/* JapanMust — app download button config.  EDIT ONLY THIS BLOCK AT LAUNCH.
   Every "Coming soon – get notified" button on the site reads from here.
   1) When the App Store listing is live, paste its URL into APP_STORE_URL.
      All buttons then switch to "Download on the App Store" automatically.
   2) NOTIFY_URL is where "get notified" goes before launch (mailto now;
      swap for a waitlist form URL whenever you have one). */
(function () {
  var CONFIG = {
    APP_STORE_URL: "",   // e.g. "https://apps.apple.com/app/idXXXXXXXXXX"  (empty = not launched yet)
    NOTIFY_URL: "mailto:hello@japanmust.com?subject=Notify%20me%20when%20Japan%20Interpreter%20launches"
  };

  function apply() {
    var live = !!CONFIG.APP_STORE_URL;
    var els = document.querySelectorAll("[data-app-cta]");
    for (var i = 0; i < els.length; i++) {
      var a = els[i];
      a.href = live ? CONFIG.APP_STORE_URL : CONFIG.NOTIFY_URL;
      a.textContent = live ? "Download on the App Store" : "Coming soon – get notified";
      if (live) { a.rel = "noopener"; }
    }
    var print = document.querySelectorAll("[data-print]");
    for (var j = 0; j < print.length; j++) {
      print[j].addEventListener("click", function () { window.print(); });
    }
  }
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", apply); } else { apply(); }
})();
