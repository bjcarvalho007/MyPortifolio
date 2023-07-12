/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});



const botaoAlterarTema  = document.getElementById("botao-alterar-tema");
 




const body = document.querySelector("body");

const imagembotaotrocadetema =document.querySelector(".imagem-botao")




botaoAlterarTema.addEventListener("click", () =>{
    console.log("clicou no botao");

    

 const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

 body.classList.toggle("modo-escuro");


 if(modoEscuroEstaAtivo){
	imagembotaotrocadetema.setAttribute("src","./assets/imgs/sun.png");
	
 }else {

	
	imagembotaotrocadetema.setAttribute("src","./assets/imgs/moon.png");
	}
	
	
	});
  
