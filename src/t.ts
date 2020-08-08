import { Bloco } from "./bloco";


export class T extends Bloco {

	representacoes = [
		[[ 0, -1,  0],
		 [-1, -1, -1]],

		[[-1,  0],
		 [-1, -1],
		 [-1,  0]],

		[[-1, -1, -1],
		 [ 0, -1,  0]],

		[[ 0, -1],
		 [-1, -1],
		 [ 0, -1]]
	];

}
