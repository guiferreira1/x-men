//Pega os personagens no JS para verificar quando o usuário passa o mouse em cima
const personagens = document.querySelectorAll('.personagem');

//adicionando a classe 'selecionado' no personagem que o usuário passar o mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        //Caso a tela seja de um celular, ao escolher um personagem na parte debaixo da tela, ele sobe a tela de maneira suave para mostrar a img grande de quem foi selecionado
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoPersonagem();

        //Adicionando a classe 'selecionado' ao personagem
        personagem.classList.add('selecionado');

        alterarImgPersonagemSelec(personagem);
        alterarNomePersonagemSelec(personagem);
        alterarDescPersonagemSelec(personagem);
    })
})

//Verificando se já existe um personagem selecionado, se sim, remove a seleção dele
function removerSelecaoPersonagem() {
    const personagemSelec = document.querySelector('.selecionado');
    personagemSelec.classList.remove('selecionado');
}

 //Pegando os elementos da imagem e descrição do personagem grande para mudar junto na seleção
function alterarImgPersonagemSelec(personagem) {
    const imgPersonagemGrande = document.querySelector('.personagem-grande');

    //Mudando a img do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imgPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

//Mudando o nome do personagem grande
function alterarNomePersonagemSelec(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

//Mudando a descrição do personagem grande
function alterarDescPersonagemSelec(personagem) {
    const descPersonagem = document.getElementById('descricao-personagem');
    descPersonagem.innerText = personagem.getAttribute('data-description');
}