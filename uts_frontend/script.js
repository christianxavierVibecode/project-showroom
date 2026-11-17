function fadeIn() {
  document.body.classList.remove("loaded");
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 50);
}

window.addEventListener("load", fadeIn);

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    fadeIn();
  }
});

document.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (this.href && this.href.indexOf(".html") !== -1) {
      e.preventDefault();
      var tujuan = this.href;
      document.body.classList.remove("loaded");
      setTimeout(function () {
        window.location = tujuan;
      }, 500);
    }
  });
});
