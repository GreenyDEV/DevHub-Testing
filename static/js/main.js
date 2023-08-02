window.devhub = {};

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

setTimeout(
  console.log.bind(console,"%cHello! If you are seeing this, you are in the console! Please leave if you dont know what you are doing.","background: purple;color:#FFF;padding:4px;border-radius: 5px;line-height: 26px; font-size:24px;")
);

setTimeout(() => {  
  console.log("Scripts loaded"); 
  console.log("Loading settings")

  devhub.settings("Cloak", 'devhub.cloak(window.location.href, "https://google.com")')
  
  if (location.pathname == "/") {
    
  }
}, 100);