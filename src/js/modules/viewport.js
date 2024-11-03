window.addEventListener("load", onLoadFunction);

function onLoadFunction() {
  onResizeFunction();
  window.addEventListener("resize", onResizeFunction);
}

function onResizeFunction() {
  const html = document.querySelector("html");
  const vw = html.clientWidth;
  if (innerWidth < 480) {
    html.setAttribute("style", `--width-max-window: ${vw}px`);
  } else {
    html.removeAttribute("style", `--width-max-window: ${vw}px`);
  }
}
