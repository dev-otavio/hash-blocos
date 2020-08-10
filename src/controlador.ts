import { Grade } from "./grade.js";

export class Controlador {
    pontos: number;
    duracao: number;
    tempID: number;
    ouvinteTeclado: (e: KeyboardEvent) => void;
    grade: Grade;

    constructor(duracao = 1000) {
        this.pontos = 0;
        this.duracao = duracao;
        this.grade = new Grade();
        this.ouvirTeclado();
        this.proximoBloco();
        this.redefinirIntervalo();
    }

    redefinirIntervalo() {
        clearInterval(this.tempID);
        //@ts-ignore
        this.tempID = setInterval(() => {
            this.moverParaBaixo();
        }, this.duracao);
    }

    mostrar() {
		console.clear();
        console.log(
            this.grade.distribuicao
                .map((l) => l.map((n) => (n ? "#" : ".")).join(""))
                .join("\n")
        );
		console.log(`PONTOS: ${this.pontos}`);
    }

    rotacionar() {
        const rodou = this.grade.rotacionar();
        if (rodou) {
            this.mostrar();
        }
    }

    moverParaDireita() {
        const moveu = this.grade.moverParaDireita();
        if (moveu) {
            this.mostrar();
        }
    }

    moverParaEsquerda() {
        const moveu = this.grade.moverParaEsquerda();
        if (moveu) {
            this.mostrar();
        }
    }

    moverParaBaixo() {
        const moveu = this.grade.moverParaBaixo();
        if (!moveu) {
            let linhaRemovida = this.grade.removerLinhaCheia();

            while (linhaRemovida) {
                this.mostrar();
                this.pontos += 100;

                if (this.pontos % 1000 === 0 && this.duracao > 100) {
                    this.duracao -= 100;
                    this.redefinirIntervalo();
                }

                linhaRemovida = this.grade.removerLinhaCheia();
            }

            this.proximoBloco();
        }

        this.mostrar();
    }

    proximoBloco() {
        const novoBloco = this.grade.proximoBloco();

        if (!novoBloco) {
            this.terminar();
        }

        this.mostrar();
    }

    terminar(msg?: string) {
        console.log(msg || "Impossível posicionar novo bloco. Terminando.");
        clearInterval(this.tempID);
        document.body.removeEventListener("keydown", this.ouvinteTeclado);
    }

    ouvirTeclado() {
        this.ouvinteTeclado = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.moverParaEsquerda();
                    break;
                case "ArrowRight":
                    this.moverParaDireita();
                    break;
                case "ArrowDown":
                    this.moverParaBaixo();
                    break;
                case "ArrowUp":
                    this.rotacionar();
                    break;
                case "c":
                    this.terminar("ctrl+c, terminando");
                    break;
            }
        };

        document.body.addEventListener("keydown", this.ouvinteTeclado);
    }
}
