let imagens = document.querySelectorAll('.carrossel .imagemCarrossel');
let imagemPrincipal = document.querySelector('#imagemPrincipal');

imagens.forEach((imagem) => {
    imagem.addEventListener("mouseover", (event) => {
        imagemPrincipal.src = event.target.src;
    });
});