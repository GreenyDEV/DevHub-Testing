const proxyList = [
    "https://math.devteam.tk/uv/service/",
    "https://reading.devteam.tk/uv/service/",
    "https://history.devteam.tk/uv/service/",
    "https://ela.devteam.tk/uv/service/",
    "https://school.devteam.tk/uv/service/",
    "https://login.devteam.tk/uv/service/",
    "https://googleauth.devteam.tk/uv/service/",
    "https://clever.devteam.tk/uv/service/",
    "https://ixl.devteam.tk/uv/service/",
    "https://iready.devteam.tk/uv/service/",
    "https://uv.devteam.tk/uv/service/",
];
window.parent.proxyList = proxyList

// LocalStorage Proxy Handler
if (!localStorage.getItem("proxyLink")) {
  localStorage.setItem("proxyLink", proxyList[Math.floor(Math.random() * proxyList.length)])
  };

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

function openMovies() {
window.open(localStorage.getItem('proxyLink')+xor.encode("https://devtv.darianalt.repl.co/"))
};
window.openMovies = openMovies;