import { Controlador } from "./controlador.js";

const saida = document.querySelector("textarea");
const mensagem = document.querySelector("#mensagem");
new Controlador(
    function (s) {
        saida.textContent = s;
    },
    function (m) {
        mensagem.textContent = m;
        setTimeout(() => (mensagem.textContent = ""), 1500);
    }
);
