// Open TOC by default on page load
document.addEventListener("DOMContentLoaded", function () {
  var toc = document.getElementById("__toc");
  if (toc) toc.checked = true;
});
