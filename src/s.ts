import { Bloco } from "./bloco";

export class S extends Bloco {
    representacoes = [
        // prettier-ignore
        [
            [ 0, -1, -1],
            [-1, -1,  0],
        ],
        // prettier-ignore
        [
            [-1,  0],
            [-1, -1],
            [ 0, -1],
        ],
    ];
}
