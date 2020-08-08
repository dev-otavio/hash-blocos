import { Bloco } from "./bloco";


export class L extends Bloco {
	representacoes = [
		[[-1,  0],
		 [-1,  0],
		 [-1, -1]],

		[[-1, -1, -1],
		 [-1,  0,  0]],

		[[-1, -1],
		 [ 0, -1],
		 [ 0, -1]],

		[[ 0,  0, -1],
		 [-1, -1, -1]]
	];
}
