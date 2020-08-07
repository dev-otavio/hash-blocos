/**
*@param {number} n - Número de elementos desejados para o array.
*@return {Array<number>} Um array unidimensional de `n` elementos inicializados 
*com valor 0.
*/
export function criarArray(n: number): Array<number> {
	if (n < 0) {
		throw new Error(`Argumento inválido: ${n}`);
	}

	const array: Array<number> = [];
	let i = 0;

	while (i < n) {
		array[i] = 0;
		i += 1;
	}

	return array;
}
