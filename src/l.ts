import { Bloco } from "./bloco.js";

export class L extends Bloco {
    representacoes = [
        // prettier-ignore
        [
            [-1,  0],
            [-1,  0],
            [-1, -1],
        ],
        // prettier-ignore
        [
            [-1, -1, -1],
            [-1,  0,  0],
        ],
        // prettier-ignore
        [
            [-1, -1],
            [ 0, -1],
            [ 0, -1],
        ],
        // prettier-ignore
        [
            [ 0,  0, -1],
            [-1, -1, -1],
        ],
    ];
}
