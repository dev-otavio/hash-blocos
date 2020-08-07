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

/**
*@param {Array<number>} original - Array a ser copiada.
*@param {number} inicio - Índice do primeiro elemento a ser copiado.
*@param {number|undefined} elementos - Número de elementos a serem copiados.
*@return {Array<number>} Uma array com `elementos` elementos da original a partir de `inicio`.
Caso `elementos` seja `undefined`, a array irá conter (original.length - inicio) elementos da `original` copiados a partir de `inicio`.
*/
export function copiarArray(original: Array<number>, inicio: number, elementos?: number): Array<number>;
export function copiarArray(original: Array<number>, inicio: number, elementos: number): Array<number>;
export function copiarArray(original: Array<number>, inicio: number, elementos: any): Array<number> {
	if (inicio < 0) {
		throw new Error(`Argumento inválido: ${inicio}`);
	}

	if (elementos < 0) {
		throw new Error(`Argumento inválido: ${elementos}`);
	}

	if (elementos === undefined) {
		const copia: Array<number> = [];
		const limite = original.length;

		while (inicio < limite) {
			copia.push(original[inicio]);
			inicio += 1;
		}

		return copia;
	}

	const copia: Array<number> = [];
	const limite = elementos + inicio;

	if (limite > original.length) {
		throw new Error(`Argumento inválido: ${elementos}. ${original.length - inicio} elementos disponíveis a partir posição ${inicio}.`);
	}

	while (inicio < limite) {
		copia.push(original[inicio]);
		inicio += 1;
	}

	return copia;
}

/**
*@param {number} linhas - Número de linhas desejadas para o array.
*@param {number} colunas - Número de colunas desejadas para o array.
*@return {Array<Array<number>>} Um array bidimensional de `linhas` * `colunas` elementos inicializados com valor 0.
*/
export function criarArray2D(linhas: number, colunas: number): Array<Array<number>> {
	if (linhas < 0) {
		throw new Error(`Argumento inválido: ${linhas}`);
	}

	if (colunas < 0) {
		throw new Error(`Argumento inválido: ${colunas}`);
	}

	const array: Array<Array<number>> = [];

	let ls = 0;

	while (ls < linhas) {

		array.push([]);

		let cs = 0;
		while (cs < colunas) {
			array[ls][cs] = 0;
			cs += 1;
		}

		ls += 1;

	}

	return array;
}
