import { Bloco } from "./bloco.js";

export class SInvertido extends Bloco {
    representacoes = [
        // prettier-ignore
        [
            [-1, -1,  0],
            [ 0, -1, -1],
        ],
        // prettier-ignore
        [
            [ 0, -1],
            [-1, -1],
            [-1,  0],
        ],
    ];
}
