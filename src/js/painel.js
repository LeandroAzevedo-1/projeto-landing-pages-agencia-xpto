
const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');

//Para não escrever código repetido. vamos criar 
function escoderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')  
    } );
}

function mostrarImagens(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}
 
let imagemAtual = 0;

setaAvancar.addEventListener('click', function() {
    
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens ) {
        console.log('Não pode avançar mais ');
        return;
    }
    
    imagemAtual++;

    escoderImagens();
   
    mostrarImagens(); 
    
});


setaVoltar.addEventListener('click', function(){

    if(imagemAtual == 0){
        console.log('Não tem mais como voltar')
        return;
    }

    imagemAtual --;

    escoderImagens();
    
    mostrarImagens(); 
})