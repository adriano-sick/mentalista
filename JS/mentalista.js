// Adriano Siqueira - 9/15/21 - Imersao Alura Dev - Aula-3 - Mentalista

var numeroSecreto = parseInt(Math.random() * 11);
var vidas = 3;

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");
    var errou = new Audio('https://www.myinstants.com/media/sounds/errou_3.mp3');  
    errou.type = 'audio/mp3';
    var acertou = new Audio('https://www.myinstants.com/media/sounds/acertou-mizeravijk.mp3');
    acertou.type = 'audio/mp3'

    if (TesteVidas(vidas) && !isNaN(chute) && chute <= 10 && chute >= 0) {
        if (chute == numeroSecreto) {
            resultado.innerHTML = "O numero secreto e exatamente " + numeroSecreto + "!!!";
            acertou.play();
            FimDeJogo();            
        }
        else if (chute > numeroSecreto) {
            resultado.innerHTML = "O numero e menor que o seu chute!";
            resultado.style.color = "white";
            errou.play();
            vidas--;
            TesteVidas(vidas);
        }
        else {
            resultado.innerHTML = "O numero e maior do que o seu chute!";
            resultado.style.color = "white";
            errou.play();
            vidas--;
            TesteVidas(vidas);
        }
    }
    else {
        var burro = new Audio("https://www.myinstants.com/media/sounds/o-cara-burro-online-audio-converter.mp3");
        burro.type = "audio/mp3";
        burro.play();
        resultado.innerHTML = "INSIRA UM NUMERO ENTRE 0 E 10, SEU ANIMAL!";
        resultado.style.color = "red";
    }
    
}

function TesteVidas(qtdVidas) {
    if (vidas > 0) {
        return true;
    }
    else {
        resultado.innerHTML = "Fim de jogo, o numero secreto era: " + numeroSecreto;
        var merda = new Audio('https://www.myinstants.com/media/sounds/eu-sou-um-merda.mp3');
        merda.type = "audio/mp3"
        merda.play();
        FimDeJogo();
        return false;
    }
}

function FimDeJogo() {    
    var tentativa = document.getElementById("tentativa");
    var reiniciar = document.getElementById("reiniciar");
    tentativa.style.display = "none";
    reiniciar.style.display = "inline";
    resultado.style.color = "red";
}

function Reiniciar() {
    window.location.reload();
}