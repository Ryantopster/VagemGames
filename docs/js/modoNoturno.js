const btn = document.querySelectorAll('#mudaTema');
const mudaTema = document.querySelector('.muda-tema');
/* const temaDefinido = getComputedStyle(mudaTema).getPropertyValue('--icon'); */

funcaoMudarTema();
function funcaoMudarTema() {
  if (localStorage.getItem('mudaTema') == 'light') {
    mudaTema.classList.add('light')
  }
  if (localStorage.getItem('mudaTema') == 'dark') {
    mudaTema.classList.add('dark')
  }
}

for (let i = 0; i < btn.length; i++) {
  const botaoMudaTema = btn[i];
  botaoMudaTema.addEventListener('click', () => {
  switch (localStorage.getItem('mudaTema')) {
    case 'light':
      mudaTema.classList.add('dark');
    mudaTema.classList.remove('light');
    localStorage.setItem('mudaTema', 'dark');
      break;
    case 'dark':
      mudaTema.classList.add('light');
      mudaTema.classList.remove('dark');
      localStorage.setItem('mudaTema', 'light');
      break;
    default:
      break;
  }
});
}


