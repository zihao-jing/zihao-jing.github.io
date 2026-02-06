/* ==========================================================================
   Theme toggle
   ========================================================================== */

(function() {
  var storageKey = "site-theme";
  var docEl = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var label = toggle ? toggle.querySelector(".theme-toggle__text") : null;
  var mediaQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  var getSystemTheme = function() {
    return mediaQuery && mediaQuery.matches ? "dark" : "light";
  };

  var getStoredTheme = function() {
    try {
      return localStorage.getItem(storageKey);
    } catch (e) {
      return null;
    }
  };

  var setStoredTheme = function(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      // Ignore storage errors.
    }
  };

  var applyTheme = function(theme) {
    docEl.setAttribute("data-theme", theme);
    if (!toggle) {
      return;
    }
    var nextLabel = theme === "dark" ? "Light mode" : "Dark mode";
    toggle.setAttribute("aria-pressed", theme === "dark");
    toggle.setAttribute("title", nextLabel);
    if (label) {
      label.textContent = nextLabel;
    }
  };

  var initTheme = function() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
    } else {
      applyTheme(getSystemTheme());
    }
  };

  initTheme();

  if (mediaQuery) {
    var handleChange = function(e) {
      var stored = getStoredTheme();
      if (stored !== "light" && stored !== "dark") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
    }
  }

  if (toggle) {
    toggle.addEventListener("click", function() {
      var current = docEl.getAttribute("data-theme") || getSystemTheme();
      var next = current === "dark" ? "light" : "dark";
      setStoredTheme(next);
      applyTheme(next);
    });
  }
})();
