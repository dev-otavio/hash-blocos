export class Bloco {
    get representacao() {
        return this.representacoes[0];
    }
    rotacionar() {
        const cabeca = this.representacao;
        if (this.representacoes.length > 1) {
            let i = 0;
            while (i < this.representacoes.length - 1) {
                this.representacoes[i] = this.representacoes[i + 1];
                i += 1;
            }
            this.representacoes[i] = cabeca;
        }
    }
}
//# sourceMappingURL=bloco.js.map