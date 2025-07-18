document.addEventListener('DOMContentLoaded',function(){
   const buttons = document.querySelectorAll('[data-tab-button]'); //aponta para todos os bottoes 
   const questions = document.querySelectorAll('[data-faq-question]')
  
   const heroSection = document.querySelector('.hero');
   console.log(heroSection)
   const alturaHero = heroSection.clientHeight;

   window.addEventListener('scroll', function(){
      const posicaoAtual = window.scrollY;

      if(posicaoAtual < alturaHero){

             console.log("ocultar")

             ocultarElementosDoHeader();
      }
      else{
        
        exibeElementosDoHeader();
      }
   })

   //para secao de atraçoes , programaçao das abas 
   for(let i=0; i < buttons.length; i++){
       buttons[i].addEventListener('click', function(botao){
          const abaAlvo = botao.target.dataset.tabButton;
          const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
          esconderTodasAbas();
          aba.classList.add('shows__list--is-active');
          removeBotaoAtivo();
           botao.target.classList.add('shows__tabs__button--is-active');
       })
   }
  //secao pra acordion 
   for(let i = 0; i < questions.length;i++){
        questions[i].addEventListener('click',abreOuFechaResposta);
   }
 
   function ocultarElementosDoHeader(){
         const header = document.querySelector('header');
         header.classList.add('header--is-hidden');
   }
   
    function exibeElementosDoHeader(){
         const header = document.querySelector('header');
         header.classList.remove('header--is-hidden');
   }


   function abreOuFechaResposta(el){
       const classe ='faq__questions__item--is-open';
       const elPai = el.target.parentNode;
       elPai.classList.toggle(classe)
   } 

})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++){
         buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}


function esconderTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
           tabsContainer[i].classList.remove('shows__list--is-active')
    }
}