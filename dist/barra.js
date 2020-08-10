import { Bloco } from "./bloco.js";
export class Barra extends Bloco {
    constructor() {
        super(...arguments);
        this.representacoes = [
            [[-1, -1, -1, -1]],
            // prettier-ignore
            [[-1],
                [-1],
                [-1],
                [-1]],
        ];
    }
}
//# sourceMappingURL=barra.js.map