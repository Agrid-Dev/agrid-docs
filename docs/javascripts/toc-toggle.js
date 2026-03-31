/**
 * Collapsible TOC items in the left navigation sidebar.
 * Closed by default. A small arrow appears on the active page to toggle.
 */
document.addEventListener("DOMContentLoaded", function () {
  function initTocToggle() {
    var tocNavs = document.querySelectorAll(
      ".md-sidebar--primary .md-nav--secondary"
    );

    tocNavs.forEach(function (tocNav) {
      if (tocNav.dataset.tocToggle) return;
      tocNav.dataset.tocToggle = "true";

      // Hide the "Table of contents" label (causes duplicate + hamburger icon)
      var tocLabel = tocNav.querySelector(".md-nav__title");
      if (tocLabel) tocLabel.style.display = "none";

      // Find the parent nav item and its link
      var parentItem = tocNav.closest(".md-nav__item");
      if (!parentItem) return;

      var parentLink = parentItem.querySelector(":scope > .md-nav__link");
      if (!parentLink) return;

      // Only show toggle on the active page
      if (!parentLink.classList.contains("md-nav__link--active")) {
        tocNav.style.display = "none";
        return;
      }

      // Collapse TOC by default
      tocNav.style.display = "none";

      // Create toggle arrow
      var toggle = document.createElement("span");
      toggle.className = "toc-toggle";
      toggle.innerHTML = "&#9656;"; // ▸
      parentLink.style.display = "flex";
      parentLink.style.alignItems = "center";
      parentLink.appendChild(toggle);

      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = tocNav.style.display !== "none";
        tocNav.style.display = isOpen ? "none" : "block";
        toggle.style.transform = isOpen ? "rotate(0deg)" : "rotate(90deg)";
      });
    });
  }

  initTocToggle();

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      initTocToggle();
    });
  }
});
