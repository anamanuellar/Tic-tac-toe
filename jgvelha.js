const casas = document.getElementsByTagName('input');
const b_reiniciar = document.getElementById('reiniciar');
const label_jogador = document.getElementById('jogador');

var jogador = '_';
var vencedor = '_';


for (var i = 0; i < 9; i++) {
    casas[i].addEventListener('click', (event) => {
        if ((event.target.value == '_') && (vencedor == '_')) {
            event.target.value = jogador;
            event.target.style.color = '#ffffff';
            trocarJogador();
            vencedor = vitoria();
            if (vitoria()) {
                alert('O jogador ' + vencedor + ' venceu!!!');
            } else;
            }
        });
    }




b_reiniciar.addEventListener('click', (event) => {
    window.location.reload();
});


var sortearJogador = function () {
    if (Math.floor(Math.random() * 2) == 0) {
        jogador = "O";
        label_jogador.innerText = "O";
        label_jogador.style.color = '#ffff99';
    } else {
        jogador = "X";
        label_jogador.innerText = "X";
        label_jogador.style.color = '#99ff99';

    }
}

sortearJogador();

var trocarJogador = function () {
    if (jogador == 'X') {
        jogador = 'O';
        label_jogador.innerText = 'O';
        label_jogador.style.color = '#ffff99';

    } else {
        jogador = 'X';
        label_jogador.innerText = 'X';
        label_jogador.style.color = '#99ff99';

    }
}


var vitoria = function () {
    if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != '_') {
        casas[0].style.backgroundColor = '#61e33d';
        casas[1].style.backgroundColor = '#61e33d';
        casas[2].style.backgroundColor = '#61e33d';

        return casas[0].value;


    } else if ((casas[3].value == casas[4].value) && (casas[4].value == casas[5].value) && casas[3].value != '_') {
        casas[3].style.backgroundColor = '#61e33d';
        casas[4].style.backgroundColor = '#61e33d';
        casas[5].style.backgroundColor = '#61e33d';

        return casas[3].value;

    } else if ((casas[6].value == casas[7].value) && (casas[7].value == casas[8].value) && casas[6].value != '_') {
        casas[6].style.backgroundColor = '#61e33d';
        casas[7].style.backgroundColor = '#61e33d';
        casas[8].style.backgroundColor = '#61e33d';

        return casas[6].value;

    } else if ((casas[0].value == casas[3].value) && (casas[3].value == casas[6].value) && casas[0].value != '_') {
        casas[0].style.backgroundColor = '#61e33d';
        casas[3].style.backgroundColor = '#61e33d';
        casas[6].style.backgroundColor = '#61e33d';

        return casas[0].value;

    } else if ((casas[1].value == casas[4].value) && (casas[4].value == casas[7].value) && casas[1].value != '_') {
        casas[1].style.backgroundColor = '#61e33d';
        casas[4].style.backgroundColor = '#61e33d';
        casas[7].style.backgroundColor = '#61e33d';

        return casas[1].value;


    } else if ((casas[2].value == casas[5].value) && (casas[5].value == casas[8].value) && casas[2].value != '_') {
        casas[2].style.backgroundColor = '#61e33d';
        casas[5].style.backgroundColor = '#61e33d';
        casas[8].style.backgroundColor = '#61e33d';

        return casas[2].value;
    } else if ((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && casas[0].value != '_') {
        casas[0].style.backgroundColor = '#61e33d';
        casas[4].style.backgroundColor = '#61e33d';
        casas[8].style.backgroundColor = '#61e33d';

        return casas[0].value;

    } else if ((casas[2].value == casas[4].value) && (casas[4].value == casas[6].value) && casas[2].value != '_') {
        casas[2].style.backgroundColor = '#61e33d';
        casas[4].style.backgroundColor = '#61e33d';
        casas[6].style.backgroundColor = '#61e33d';

        return casas[2].value;

    } else {
        if (casas() == 9) {
            alert('O jogo empatou!!!');

        }
    }
}