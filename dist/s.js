import { Bloco } from "./bloco.js";
export class S extends Bloco {
    constructor() {
        super(...arguments);
        this.representacoes = [
            // prettier-ignore
            [
                [0, -1, -1],
                [-1, -1, 0],
            ],
            // prettier-ignore
            [
                [-1, 0],
                [-1, -1],
                [0, -1],
            ],
        ];
    }
}
//# sourceMappingURL=s.js.map