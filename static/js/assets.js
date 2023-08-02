// Cloak Handler
devhub.cloak = function(url, redirect) {
  window.open('about:blank').document.write(`<head><title>New Tab</title></head><body><style>body {margin: 0;}</style><iframe style="border: none;" src="${url}" width="100%" height="100%"></body>`);
  if (redirect) {
    window.location.href = redirect;
  }
};

// iFrame (fullscren) handler
devhub.frame = function(url) {
  document.documentElement.remove();
  let iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = window.innerWidth;
  iframe.height = window.innerHeight;
  document.appendChild(iframe);
};

// Proxy Opener
devhub.openProxy = function(urlToProxy) {
  localStorage.setItem("url", urlToProxy);
  location.href = "/load.html";
};

// Custom console.log
devhub.log = function(data) {
  consolelog("%c[DevHub]%c", "color: purple; font-weight: bold", "", data);
};
// console.log override
consolelog = console.log;
console.log = devhub.log;

// Settings Handler/Loader
const style = `.settings-panel{position:fixed;bottom:20px;right:20px;padding:20px;background-color:rgba(0,0,0,0.8);color:white;border-radius:15px;max-height:50%;overflow-y:auto}.settings-title{font-size:24px;font-weight:bold;margin-bottom:10px;margin-top:-15px}.settings-button-container{display:flex;flex-direction:column-reverse; /* Change to column-reverse */ }.settings-button{background-color:#1E90FF;color:white;padding:10px;border:none;cursor:pointer;border-radius:5px;margin-top:10px}`;
const styleElement = document.createElement('style');
styleElement.textContent = style;
document.head.appendChild(styleElement);

let settingsPanel = null;
let settingsButtonContainer = null;

devhub.settings = function (text, onClickHandler) {
  if (!settingsPanel) {
    settingsPanel = document.createElement('div');
    settingsPanel.classList.add('settings-panel');

    const settingsTitle = document.createElement('div');
    settingsTitle.classList.add('settings-title');
    settingsTitle.textContent = 'Settings';

    settingsButtonContainer = document.createElement('div');
    settingsButtonContainer.classList.add('settings-button-container');

    settingsPanel.appendChild(settingsTitle);
    settingsPanel.appendChild(settingsButtonContainer);
    document.body.appendChild(settingsPanel);
  }

  const button = document.createElement('button');
  button.classList.add('settings-button');
  button.textContent = text;

  if (typeof onClickHandler === 'string') {
    button.addEventListener('click', () => eval(onClickHandler));
  } else if (typeof onClickHandler === 'function') {
    button.addEventListener('click', onClickHandler);
  } else {
    console.error('Invalid onClickHandler provided.');
  }

  settingsButtonContainer.insertBefore(button, settingsButtonContainer.firstChild);
};
