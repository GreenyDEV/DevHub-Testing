const xor={encode:o=>o?encodeURIComponent(o.toString().split("").map((o,e)=>e%2?String.fromCharCode(2^o.charCodeAt()):o).join("")):o,decode(o){if(!o)return o;let[e,...r]=o.split("?");return decodeURIComponent(e).split("").map((o,e)=>e%2?String.fromCharCode(2^o.charCodeAt(0)):o).join("")+(r.length?"?"+r.join("?"):"")}};
window.loadstring = eval,window.xor = xor;

fetch('/nav/nav.html')
  .then(res => res.text())
  .then(content => {
    document.body.insertAdjacentHTML('afterbegin', content);
    if (window.self !== window.top) {
      window.parent.postMessage('loaded', location.origin);
    }
  }).catch(e => {
    alert(e);
  });

fetch('js/settings.js').then(r => r.text()).then(r => eval(r));

const scripts = [
    'js/registerSW.js',
    'js/AT.js',
    'js/assets.js',
];

scripts.forEach(script => {
    const el = document.createElement('script');
    el.src = script;
    document.body.appendChild(el);
});

var page = window.location.pathname.split('/').pop().split('.')[0];
// settings and page for future