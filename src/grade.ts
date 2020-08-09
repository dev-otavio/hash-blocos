import { Bloco } from "./bloco";
import { Quadrado } from "./quadrado";
import { Barra } from "./barra";
import { T } from "./t";
import { L } from "./l";
import { S } from "./s";
import { criarArray2D
		 , duplicarArray2D
		 , sobreporArray2D
		 , copiarArray2D
		 , reduzir2D
		 , combinar2D
	   } from "./arrays2D";


export class Grade {

	matriz: Array<Array<number>>;
	comprimento: number;
	largura: number;
	bloco: Bloco;
	posicaoBloco: { linha: number, coluna: number };

	constructor(comprimento = 14, largura = 10) {
		this.comprimento = comprimento + 4;
		this.largura = largura;
		this.matriz = criarArray2D(this.comprimento, this.largura);
	}

	get larguraBloco() {
		return this.bloco.representacao[0].length;
	}

	get comprimentoBloco() {
		return this.bloco.representacao.length;
	}

	get distribuicao() {
		const copia = duplicarArray2D(this.matriz);
		console.log(copia);
		return sobreporArray2D(copia, this.bloco.representacao, this.posicaoBloco);
	}

	proximoBloco() {
		const blocos = [ Quadrado, Barra, T, L, S ];
		const bloco  = new blocos[Math.floor(Math.random() * blocos.length)]();
		const ultimaColunaPossivel
			= this.largura - bloco.representacao[0].length;

		const posicao
			= this.posicaoBloco || { linha: 0
									 , coluna: Math.floor(Math.random() * ultimaColunaPossivel) };

		const temEspaco
			= this.verificarDisponibilidadeEspaco(this.matriz
												  , bloco.representacao
												  , posicao);

		if (temEspaco) {
			this.bloco = bloco;
			this.posicaoBloco = posicao;
			return true;
		}

		return false;
	}

	rotacionar() {
		const representacaoSeguinte
			= this.bloco.representacoes[1];

		const temEspacoDisponival
			= this.verificarDisponibilidadeEspaco(this.matriz
												  , representacaoSeguinte
												  , this.posicaoBloco);

		if (temEspacoDisponival) {
			this.bloco.rotacionar();
			return true;
		}

		return false;
	}

	moverParaBaixo() {

	}

	verificarDisponibilidadeEspaco(matriz: Array<Array<number>>
								   , representacao: Array<Array<number>>
								   , posicao: { linha: number
									 		   , coluna: number }) {

		const copia = copiarArray2D(matriz, { linhas: representacao.length
											  , colunas: representacao[0].length
											  , ...posicao });

		const combinados = combinar2D(copia
									  , representacao
									  , (x, y) => ~(x & y));

		return !!reduzir2D(combinados
						   , (x, y) => x & y);
	}
}
