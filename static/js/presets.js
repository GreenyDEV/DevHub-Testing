 // Game Handler
 if (document.querySelector('.games')) {
    fetch('/games.json')
    .then(res => res.json())
    .then(games => {
        games.forEach(game => {
            const element = document.createElement('div');
            element.classList = 'game';
            element.innerHTML = `<img src="${game.image}"><h3>${game.name}</h3>`;
            document.querySelector('.games').appendChild(element);
  
            element.addEventListener('click', () => {
                openProxy(game.url);
            });
        })
    }).catch(e => {
        console.log('Failed to load games. Error:' + e);
    })
  }