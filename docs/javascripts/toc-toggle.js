/**
 * Collapsible TOC items in the left navigation sidebar.
 * When toc.integrate is enabled, TOC headings appear under the active page.
 * This script makes them collapsible (closed by default, click to toggle).
 */
document.addEventListener("DOMContentLoaded", function () {
  function initTocToggle() {
    // Find all integrated TOC nav containers in the left sidebar
    var tocNavs = document.querySelectorAll(
      ".md-sidebar--primary .md-nav--integrated"
    );

    tocNavs.forEach(function (tocNav) {
      // Already processed
      if (tocNav.dataset.tocToggle) return;
      tocNav.dataset.tocToggle = "true";

      // Find the parent link (the page name like "Installation")
      var parentItem = tocNav.closest(".md-nav__item");
      if (!parentItem) return;

      var parentLink = parentItem.querySelector(":scope > .md-nav__link");
      if (!parentLink) return;

      // Collapse by default
      tocNav.style.display = "none";

      // Create toggle arrow
      var toggle = document.createElement("span");
      toggle.className = "toc-toggle";
      toggle.innerHTML = "&#9656;"; // right triangle ▸
      toggle.style.cssText =
        "cursor:pointer;margin-left:auto;padding:0 0.4rem;font-size:0.7rem;color:inherit;opacity:0.5;transition:transform 0.2s;user-select:none;";
      parentLink.style.display = "flex";
      parentLink.style.alignItems = "center";
      parentLink.appendChild(toggle);

      // Toggle on click
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = tocNav.style.display !== "none";
        tocNav.style.display = isOpen ? "none" : "block";
        toggle.style.transform = isOpen ? "rotate(0deg)" : "rotate(90deg)";
      });
    });
  }

  // Run on page load
  initTocToggle();

  // Re-run on navigation (instant loading)
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      initTocToggle();
    });
  }
});
