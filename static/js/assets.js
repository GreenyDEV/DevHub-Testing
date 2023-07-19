function cloak(url, redirect) {
  window.open('about:blank').document.write(`<head><title>New Tab</title></head><body><style>body {margin: 0;}</style><iframe style="border: none;" src="${url}" width="100%" height="100%"></body>`);
  if (redirect) {
    window.location.href = redirect;
  }
}
window.parent.cloak = cloak;

  function frame(url) {
    document.documentElement.remove();
    let iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = window.innerWidth;
    iframe.height = window.innerHeight;
    document.appendChild(iframe);
    }
window.parent.frame = frame;

function openProxy(urlToProxy) {
  localStorage.setItem("url", urlToProxy);
  location.href = "/load.html";
}
window.parent.openProxy = openProxy;
