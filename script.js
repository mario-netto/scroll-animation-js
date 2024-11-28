
function initAnimationScroll() {
  const elementos = document.querySelectorAll('.js-elemento')
  
  if (elementos.length) { //verifica se elemento existe
  function efeitoScroll(){
    const metadeTela = window.innerHeight * 0.6 // 60% da tela
    
    elementos.forEach((elemento) => {
      const elementoTop = elemento.getBoundingClientRect().top
      const elementoVisivel = (elementoTop - metadeTela) < 0
      if (elementoVisivel) {
        elemento.classList.add('ativa-scroll')
      } else {
      elemento.classList.remove('ativa-scroll')
      }
    })
  }
  }
  
  // efeitoScroll() //pra chamar o primeiro elemento antes de executar scroll
  window.addEventListener('scroll', efeitoScroll)
}

initAnimationScroll()