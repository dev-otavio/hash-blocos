import { Bloco } from "./bloco.js";
export class SInvertido extends Bloco {
    constructor() {
        super(...arguments);
        this.representacoes = [
            // prettier-ignore
            [
                [-1, -1, 0],
                [0, -1, -1],
            ],
            // prettier-ignore
            [
                [0, -1],
                [-1, -1],
                [-1, 0],
            ],
        ];
    }
}
//# sourceMappingURL=s-invertido.js.map