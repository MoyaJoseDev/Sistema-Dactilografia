const foco = document.getElementById('foco');
const pagina = document.getElementById('body')
let encendido = true;
foco.addEventListener('click', () => {
  if (encendido) {
    foco.classList.replace('bi-lightbulb', 'bi-lightbulb-fill')
    foco.style.color = 'black';
    pagina.style.backgroundColor = 'white';
    pagina.style.color = 'black';
    encendido = false;
  } else {
    foco.classList.replace('bi-lightbulb-fill', 'bi-lightbulb')
    foco.style.color = 'white';
    pagina.style.backgroundColor = '#222';
    pagina.style.color = 'white';
    encendido = true;
  }
});