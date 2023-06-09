    var iframe = document.getElementById('frame');
    var fullscreenBtn = document.getElementById('fullscreenBtn');

    // localstorage stuff
    if (localStorage.getItem('url')) {
      iframe.src=localStorage.getItem('proxyLink')+xor.encode(localStorage.getItem('url'));
    }

    // shamelessly stolen from google
    fullscreenBtn.addEventListener('click', function() {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    });