
//Animação do nome escrevdno 
const elemento = document.getElementById("nome");
const text = "João Pedro Santos";
const intervalo = 100;

function animacao(elemento, text, intervalo) {
    const char = text.split("").reverse();

    function typeNextCharacter() {
        if (!char.length) {
            setTimeout(() => {
                elemento.innerHTML = ""; // Limpa o conteúdo para reiniciar
                char.push(...text.split("").reverse()); // Restaura o array de caracteres
                typeNextCharacter(); // Inicia a animação novamente
            }, 4000); // Atraso de 1 segundo antes de reiniciar
        } else {
            const next = char.pop();
            elemento.innerHTML += next;
            setTimeout(typeNextCharacter, intervalo);
        }
    }

    typeNextCharacter();
}

animacao(elemento, text, intervalo);


//Animação da barra
const barra = document.getElementById('barra');
let isHidden = false;

function toggleVisibility() {
    isHidden = !isHidden;
    barra.style.visibility = isHidden ? 'hidden' : 'visible';
}

const interval = setInterval(toggleVisibility, 500); // Alterne a cada 500 milissegundos (0,5 segundos)

