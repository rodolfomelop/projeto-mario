/*

Objetivo 1 - quando o usuário clca no botão de veja o trailer, devemos abrir a modal com o video o trailler
    -passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    -passo 2 -dar um jeito de identificar quando o suário clica no botão
    -passo 3 - dar um jeito de pegar o elemento da modal no js
    -passo 4 -  abrir a modal na tela

Objetivo 2- quando o usuário clica no X devemos fechar a modal
    -passo1 - dar um jeito de pegar o elemento de fechar modal usando o js
    -passo2 - dar um jeito de identificar quando o usuário clica no X
    -passo3 - fechar a modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "");
});


