
const imagens = [
  'img/floresta1.jpg',
  'img/floresta2.jpg',
  'img/floresta3.jpg'
];

let indice = 0;

function trocarFundo() {
  document.body.style.backgroundImage = `url('${imagens[indice]}')`;
  indice = (indice + 1) % imagens.length;
}

window.onload = function() {
  trocarFundo();
  setInterval(trocarFundo, 10000);
};
