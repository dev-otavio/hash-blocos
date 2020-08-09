import { Bloco } from "./bloco";
import { Quadrado } from "./quadrado";
import { Barra } from "./barra";
import { T } from "./t";
import { L } from "./l";
import { S } from "./s";
import { criarArray2D
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
	posicaoBloco?: { linha: number, coluna: number };

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
		return this.sobreporBloco();
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

		const temEspacoDisponivel
			= this.verificarDisponibilidadeEspaco(this.matriz
												  , representacaoSeguinte
												  , this.posicaoBloco);

		if (temEspacoDisponivel) {
			this.bloco.rotacionar();
			return true;
		}

		return false;
	}

	moverParaBaixo() {
		const temEspacoDisponivel
			= this.verificarDisponibilidadeEspaco(this.matriz
												  , this.bloco.representacao
												  , { ...this.posicaoBloco
													  , linha: this.posicaoBloco.linha + 1 });

		if (temEspacoDisponivel) {
			this.posicaoBloco.linha += 1;
			return true;
		}

		this.fixarBloco();
		this.posicaoBloco = undefined;
		this.proximoBloco();
		return false;
	}

	sobreporBloco() {
		const copia
			= copiarArray2D(this.matriz
							, { ...this.posicaoBloco
								, linhas: this.comprimentoBloco
								, colunas: this.larguraBloco });

		const combinados
			= combinar2D(copia, this.bloco.representacao, (x, y) => x | y);

		return sobreporArray2D(this.matriz, combinados, this.posicaoBloco);
	}

	fixarBloco() {
		this.matriz = this.sobreporBloco();
	}

	verificarDisponibilidadeEspaco(matriz: Array<Array<number>>
								   , representacao: Array<Array<number>>
								   , posicao: { linha: number
									 		   , coluna: number }) {

		try {
			const copia = copiarArray2D(matriz, { linhas: representacao.length
												  , colunas: representacao[0].length
												  , ...posicao });

			const combinados = combinar2D(copia
										  , representacao
										  , (x, y) => ~(x & y));

			return !!reduzir2D(combinados
							   , (x, y) => x & y);
		} catch (e) {
			return false;
		}
	}
}
