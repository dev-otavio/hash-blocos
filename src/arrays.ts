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
*@param {Array<number>} a1 - Array cujos elementos serão o primeiro argumento para `fn`.
*@param {Array<number>} a2 - Array cujos elementos serão o segundo argumento para `fn`.
*@param {(x: number, y: number) => number} fn - Função que irá combinar elementos de `a1` e `a2`.
*@return Um array com as mesmas dimensões de `a1` e `a2` com elementos formados a partir
* da aplicação de `fn` aos elementos de posições correspondentes em `a1` e `a2`.
*/
export function combinar(
	a1: Array<number>,
	a2: Array<number>,
	fn: (x: number, y: number) => number): Array<number> {

	const tamanho = a1.length;
	if (a2.length !== tamanho) {
		throw new Error(`Arrays têm dimensões distintas: (${tamanho}, ${a2.length})`);
	}

	const resultado = [];
	let i = 0;
	while (i < tamanho) {
		resultado[i] = fn(a1[i], a2[i]);
		i += 1;
	}

	return resultado;
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
*@param {Array<number>} a1 - Array base para cópia.
*@param {Array<number>} a2 - Array cujos elementos irão substituir os elementos de `a1` 
*a partir da `posicaoInicial` na array retornada.
*@return Um array com mesmo tamanho de `a1` e com elementos de `a1` mas com elementos de
* `a2` a partir da `posicaoinicial`.
*/
export function sobreporArray(
	a1: Array<number>,
	a2: Array<number>,
	posicaoInicial: number): Array<number> {

	if (a2.length > a1.length - posicaoInicial) {
		throw new Error(`Argumento inválido: ${a2}. Espaço disponível apenas para ${a1.length - posicaoInicial} elemento(s) a partir da posição ${posicaoInicial}`);
	}

	const copia = [];
	let i = 0;
	let j = 0;
	while (i < a1.length) {
		if (i >= posicaoInicial && j < a2.length) {
			copia[i] = a2[j];
			j += 1;
		} else {
			copia[i] = a1[i];
		}
		i += 1;
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

/**
*@param {Array<Array<number>>} a1 - Array bidimensional cujos elementos serão o primeiro argumento para `fn`.
*@param {Array<Array<number>>} a2 - Array bidimensional cujos elementos serão o segundo argumento para `fn`.
*@param {(x: number, y: number) => number} fn - Função que irá combinar elementos de `a1` e `a2`.
*@return Um array com as mesmas dimensões de `a1` e `a2` com elementos formados a partir
* da aplicação de `fn` aos elementos de posições correspondentes em `a1` e `a2`.
*/
export function combinar2D(
	a1: Array<Array<number>>,
	a2: Array<Array<number>>,
	fn: (x: number, y: number) => number): Array<number> {

	const tamanho = a1.length;
	if (a2.length !== tamanho) {
		throw new Error(`Arrays têm dimensões distintas: (${tamanho} linha(s), ${a2.length} linha(s))`);
	}

	const resultado = [];

	let i = 0;
	while (i < tamanho) {nn
		try {
			resultado.push(combinar(a1[i], a2[i], fn));
		} catch (e) {
			if (a1[i].length !== a2[i].length) {
				throw new Error(`Arrays têm dimensões distintas na linha ${i}: (${a1[i].length} coluna(s), ${a2[i].length} coluna(s))`);
			} else {
				throw e;
			}
		}
		i += 1;

	}

	return resultado;
}

/**
*@param {Array<Array<number>>} original - Um array bidimensional do qual os elementos serão copiados.
*@param {{linha: number,
          coluna: number,
          linhas: number,
          colunas: number }} regiao - Objeto contendo número de `linhas` e `colunas` a serem copiados de `original` a partir de `original[linha][coluna]`.
*@return Um array bidimensional com `linhas` linhas e `colunas` colunas copiados de `original` a partir de `original[linha][coluna]`.
*/
export function copiarArray2D(
	original: Array<Array<number>>,
	regiao: { linhas:  number,
			  colunas: number,
			  linha:   number,
			  coluna:  number }): Array<Array<number>> {

	const { linha, coluna, linhas, colunas } = regiao;

	if (linha < 0) { throw new Error(`Valor inválido para linha: ${linha}`); }
	if (coluna < 0) { throw new Error(`Valor inválido para coluna: ${coluna}`); }
	if (linhas < 0) { throw new Error(`Valor inválido para linhas: ${linhas}`); }
	if (colunas < 0) { throw new Error(`Valor inválido para coluna: ${colunas}`); }

	let comprimento = original[0].length;
	let c = 1;

	while (c < original.length) {
		if (original[c].length !== comprimento) {
			throw new Error(`${original} não representa uma matriz pois número de colunas da linha ${c} é diferente das linhas anteriores que têm ${comprimento} colunas.`);
		}
		c += 1;
	}

	if (linha + linhas > original.length) {
		throw new Error(`Valor inválido ${linhas}, apenas ${original.length - linha} linhas disponíveis para seleção a partir da linha ${linha}`);
	}

	if (coluna + colunas > original[linha].length) {
		throw new Error(`Valor inválido ${colunas}, apenas ${original[linha].length - coluna} colunas disponíveis para seleção a partir da coluna ${coluna}`);
	}

	const matriz = [];
	let i = 0;
	while (i < linhas) {
		matriz.push([]);

		let j = 0;
		while (j < colunas) {
			matriz[i].push(original[i + linha][j + coluna]);
			j += 1;
		}

		i += 1;
	}

	return matriz;
}

/**
*@param {Array<number>} a1 - Array bidimensional base para cópia.
*@param {Array<number>} a2 - Array bidimensional cujos elementos irão substituir os elementos de `a1` a partir da `posicaoInicial` na array retornada.
*@return Um array bidimensional com mesmo tamanho de `a1` e com elementos de `a1` mas com elementos de
* `a2` a partir da `posicaoinicial`.
*/
export function sobreporArray2D(
	a1: Array<Array<number>>,
	a2: Array<Array<number>>,
	posicaoInicial: { linha: number, coluna: number }): Array<number> {

	const { linha, coluna } = posicaoInicial;

	if (a1.length - linha < a2.length) {
		throw new Error(`Argumento inválido ${a2}, espaço disponível para ${a1.length - linha} linha(s) a partir de linha ${linha}.`);
	}

	if (a1[0].length - coluna < a2[0].length) {
		throw new Error(`Argumento inválido ${a2}, espaço disponível para ${a1[0].length - coluna} coluna(s) a partir de linha ${linha} e coluna ${coluna}.`);
	}

	const copia = [];

	let i = 0;
	while (i < a1.length) {
		copia.push([]);

		let j = 0;
		while (j < a1[i].length) {
			copia[i][j] = a1[i][j];
			j += 1;
		}

		i += 1;
	}

	i = 0;
	while (i < a2.length) {
		let j = 0;
		while (j < a2[i].length) {
			copia[i + linha][j + coluna] = a2[i][j];
			j += 1;
		}
		i += 1;
	}

	return copia;

}

/**
 *@param {Array<number>} a - Um array cujos elementos serão a base para o array retornado.
 *@param {(x: number) => number} fn - Uma função a ser aplicada sobre os elementos de `a`.
 *@return {Array<number>} Um array cujos elementos são resultado da aplicação de `fn` aos elementos
correspondentes em `a`.
 */
export function mapear(a: Array<number>, fn: (x: number) => number): Array<number> {
	const resultado = [];
	let i = 0;
	while (i < a.length) {
		resultado.push(fn(a[i]));
		i += 1;
	}
	return resultado;
}

/**
 *@param {Array<number>} a - Um array cujos elementos serão reduzidos a um único valor através de `fn`.
 *@param {(ac:number, c: number) => number} fn - Uma função aplicada sucessivamente sobre elementos de `a` recebendo um acumulador `ac` que é o resultado da aplicacao anterior ou o primeiro elemento de `a` e o valor `c` da posição atual de `a`.
 *@return {Array<number>} Um número que é o resultado acumulado de aplicação sucessiva de `fn` aos elementos de `a`.
 */
export function reduzir(a: Array<number>, fn: (ac: number, c: number) => number): number {

	if (a.length < 2) {
		throw new Error(`Array possui apenas ${a.length} elemento(s)`);
	}

	let ac = fn(a[0], a[1]);
	let i = 2;
	while (i < a.length) {
		ac = fn(ac, a[i]);
		i += 1;
	}

	return ac;

}
