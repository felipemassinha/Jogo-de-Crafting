const titulo = document.getElementById('titulo');
const escolha = 0;
let texto = ""

switch(escolha){
    case 0:
        texto = "Titulo foda";
        break;
    case 1:
        texto = "Titulo mais foda agora";
        break;
    default:
        texto = "Texto normal"
        break;
}

titulo.innerText = texto
