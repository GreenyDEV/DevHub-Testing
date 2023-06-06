// Fetch NavBar
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
