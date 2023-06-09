const xor={encode:o=>o?encodeURIComponent(o.toString().split("").map((o,e)=>e%2?String.fromCharCode(2^o.charCodeAt()):o).join("")):o,decode(o){if(!o)return o;let[e,...r]=o.split("?");return decodeURIComponent(e).split("").map((o,e)=>e%2?String.fromCharCode(2^o.charCodeAt(0)):o).join("")+(r.length?"?"+r.join("?"):"")}};
window.xor = xor;
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

fetch('js/assets.js').then(r => r.text()).then(r => eval(r))
fetch('js/presets.js').then(r => r.text()).then(r => eval(r))
fetch('js/load.js').then(r => r.text()).then(r => eval(r))
fetch('js/search.js').then(r => r.text()).then(r => eval(r))
