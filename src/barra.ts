import { Bloco } from './bloco';


export class Barra extends Bloco {
	representacoes = [
		[[ 0,  0,  0,  0],
		 [-1, -1, -1, -1],
		 [ 0,  0,  0,  0],
		 [ 0,  0,  0,  0]], // horizontal
		[[ 0, -1,  0,  0],
		 [ 0, -1,  0,  0],
		 [ 0, -1,  0,  0],
		 [ 0, -1,  0,  0]], // vertical
	];
}
