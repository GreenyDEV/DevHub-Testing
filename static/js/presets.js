 // Game Handler
 if (document.querySelector('.games')) {
    fetch('/games.json')
    .then(res => res.json())
    .then(games => {
        games.forEach(game => {
            const el = document.createElement('div');
            el.classList = 'game';
            el.innerHTML = `<img src="${game.image}"><h3>${game.name}</h3>`;
            document.querySelector('.games').appendChild(el);
  
            el.addEventListener('click', () => {
                localStorage.setItem("url", game.url);
                location.href="/load.html";
            });
        })
    }).catch(e => {
        console.log('Failed to load games. Error:' + e);
    })
  }