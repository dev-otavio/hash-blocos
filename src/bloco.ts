abstract class Bloco {
	abstract representacoes: Array<Array<Array<number>>>;

	get representacao(): Array<Array<number>> {
		return this.representacoes[0];
	}

	proximaRepresentacao(): Array<Array<number>> {
		const cabeca = this.representacao;

		if (this.representacoes.length > 1) {
			let i = 0;

			while (i < this.representacoes.length - 1) {
				this.representacoes[i] = this.representacoes[i + 1];
				i += 1;
			}

			this.representacoes[i] = cabeca;
		}

		return this.representacao;
	}
}
