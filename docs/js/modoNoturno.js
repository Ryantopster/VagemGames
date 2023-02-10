const btnMudaTema = document.querySelectorAll('#mudaTema');
const mudaTema = document.querySelector('.muda-tema');
const folhaDeEstilo = document.getElementById('folhaDeEstilo');
/* const temaDefinido = getComputedStyle(mudaTema).getPropertyValue('--icon'); */

funcaoMudarTema();

//faz o tema ser mudado
function funcaoMudarTema() {
  if (localStorage.getItem('mudaTema') == null) {
    localStorage.setItem('mudaTema', 'tema-do-sistema');
  }
  if (localStorage.getItem('mudaTema') == 'light') {
    mudaTema.classList.add('light')
  }
  if (localStorage.getItem('mudaTema') == 'dark') {
    mudaTema.classList.add('dark')
  }
  if (localStorage.getItem('mudaTema') == 'tema-do-sistema') {
      folhaDeEstilo.innerHTML = `
        .muda-tema {
            --color-background: var(--color-light);
            --color-box: var(--color-light-box);
            --color-foreground: var(--color-dark);
            --icon: var(--icon-light);
            --line-nav: var(--line-dark-nav);
            --arrow-left: var(--arrow-left-dark);
        }

        @media (prefers-color-scheme: dark) {
          .muda-tema {
          --color-background: var(--color-dark);
          --color-box: var(--color-dark-box);
          --color-foreground: var(--color-light);
          --icon: var(--icon-dark);
          --line-nav: var(--line-light-nav);
          --arrow-left: var(--arrow-left-light);
        }
        
      `
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        mudaTema.classList.add('dark');
        mudaTema.classList.remove('light');
        localStorage.setItem('mudaTema', 'dark');
      } else {
        mudaTema.classList.add('light');
        mudaTema.classList.remove('dark');
        localStorage.setItem('mudaTema', 'light');
      }
  }
}

//funcionamento do botão mudar tema
for (let i = 0; i < btnMudaTema.length; i++) {
  const botaoMudaTema = btnMudaTema[i];
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


