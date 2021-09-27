const listaFilme = document.getElementById("listaFilmes");
const cardDiv = document.createElement('div');
function AdicionarFilme() {
    var nomeDoFilme = document.getElementById("nomeFilme").value;
    console.log(nomeDoFilme);

    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".jpg")){
        nomeDosFilmesNaTela(nomeDoFilme);
        listaFilmesNaTela(filmeFavorito);
    }
 else {
    console.error("Endereço de filme invalido");
    alert("Endereço de filme invalido");
}
listaFilme.appendChild(cardDiv);
}

function listaFilmesNaTela(filme){
    //var elementoFilmeFavorito = "<img src=" + filme + ">"; 
    //var elementoListaFilmes = document.getElementById("listaFilmes");
    //elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
    const imgFilmes = document.createElement("img");
    imgFilmes.src=filme;
    cardDiv.appendChild(imgFilmes);
    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
}

function nomeDosFilmesNaTela(nomeFilme){
    //var elementoNomeDoFilme = nomeFilme;
    //var elementoListaNomes = document.getElementById("nomeDoFilmeF");
    //elementoListaNomes.innerHTML = elementoListaNomes.innerHTML + elementoNomeDoFilme ;
    const tituloFilme = document.createElement('h3');
    tituloFilme.textContent = nomeFilme;
    cardDiv.appendChild(tituloFilme);
}


