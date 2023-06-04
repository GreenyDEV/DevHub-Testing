const xor = {
    encode(str) {
      if (!str) return str;
      return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    },
    decode(str) {
      if (!str) return str;
      let [input, ...search] = str.split('?');
  
      return decodeURIComponent(input).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char).join('') + (search.length ? '?' + search.join('?') : '');
    },
  };
window.parent.xor = xor;

const uvList = [
    "https://math.devteam.tk/uv/service/",
    "https://reading.devteam.tk/uv/service/",
    "https://history.devteam.tk/uv/service/",
    "https://ela.devteam.tk/uv/service/",
    "https://school.devteam.tk/uv/service/",
    "https://login.devteam.tk/uv/service/",
    "https://googleauth.devteam.tk/uv/service/",
    "https://clever.devteam.tk/uv/service/",
];
window.parent.uvList = uvList
if (!localStorage.getItem("proxyLink")) {
localStorage.setItem("proxyLink", uvList[Math.floor(Math.random() * uvList.length)])
};