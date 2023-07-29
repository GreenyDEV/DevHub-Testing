(function(global) {
  const style = `.settings-panel{position:fixed;bottom:20px;right:20px;padding:20px;background-color:rgba(0,0,0,0.8);color:white;border-radius:15px;max-height:50%;overflow-y:auto}.settings-title{font-size:24px;font-weight:bold;margin-bottom:10px;margin-top:-15px}.settings-button-container{display:flex;flex-direction:column}.settings-button{background-color:#1E90FF;color:white;padding:10px;border:none;cursor:pointer;border-radius:5px;margin-top:10px}`;

  const styleElement = document.createElement('style');
  styleElement.textContent = style;
  document.head.appendChild(styleElement);

  let settingsPanel = null;

  const settings = {
    addButton: function (text, onClickHandler) {
      if (!settingsPanel) {
        settings.load();
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

      settingsPanel.appendChild(button);
    },

    load: function () {
      if (!settingsPanel) {
        settingsPanel = document.createElement('div');
        settingsPanel.classList.add('settings-panel');

        const settingsTitle = document.createElement('div');
        settingsTitle.classList.add('settings-title');
        settingsTitle.textContent = 'Settings';

        const settingsButtonContainer = document.createElement('div');
        settingsButtonContainer.classList.add('settings-button-container');

        settingsPanel.appendChild(settingsTitle);
        settingsPanel.appendChild(settingsButtonContainer);
        document.body.appendChild(settingsPanel);
      }
    },
  };
  global.settings = settings;
})(window);
