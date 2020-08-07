import { criarArray2D, copiarArray2D } from "../src/arrays";


const testeCriarArray2D = "criarArray2D(l, c) deve criar um array bidimensional de `l` linhas e `c` colunas representando uma matriz de `l` * `c` elementos com valor inicial 0.";
test(testeCriarArray2D, function() {
	const linhas = 3;
	const colunas = 5;

	const array = criarArray2D(linhas, colunas);
	expect(array.length).toBe(linhas);
	expect(array.every(l => l.length === colunas)).toBe(true);
	expect(array.every(l => l.every(e => e === 0))).toBe(true);
});

test("criarArray2D(l, c) lança exceção para `l` ou `c` negativos.", function () {

	let e1: Error;

	try {
		criarArray2D(-1, 4);
	} catch (exception) {
		e1 = exception;
	}

	expect(e1).not.toBeUndefined();
	expect(e1 instanceof Error).toBe(true);

	let e2: Error;

	try {
		criarArray2D(4, -1);
	} catch (exception) {
		e2 = exception;
	}

	expect(e2).not.toBeUndefined();
	expect(e2 instanceof Error).toBe(true);

});

const testeCopiarArray2D = "copiarArray2D(xs, { linha: l, coluna: c, linhas: ls, colunas: cs }) deve retornar array bidimensional de `ls` linhas e `cs` colunas copiados de `xs` a partir da posição `xs[l][c]`. ";
test(testeCopiarArray2D, function() {
	const original = [[-1,  0,  0, -1],
					  [-1, -1,  0,  0],
					  [ 0, -1,  0, -1],
					  [ 0, -1, -1, -1],
					  [ 0,  0,  0,  0]];

	const esperado = [[-1,  0],
					  [-1,  0],
					  [-1, -1]];

	const posicaoInicial = { linha: 1, coluna: 1 };
	const regiao = { linhas: 3, colunas: 2 };

	expect(copiarArray2D(original, { ...posicaoInicial, ...regiao })).toStrictEqual(esperado);
});

test("copiarArray2D lança exceção para valor negativo para qualquer propriedade do parâmetro `regiao`.", function () {

	const original = [];
	const linha = 1;
	const coluna = 1;
	const linhas = 1;
	const colunas = 1;

	let e1: Error;
	try {
		copiarArray2D(original, { linha: -linha, coluna, linhas, colunas });
	} catch (exception) {
		e1 = exception;
	}

	expect(e1).not.toBeUndefined();
	expect(e1 instanceof Error).toBe(true);

	let e2: Error;
	try {
		copiarArray2D(original, { linha, coluna: -coluna, linhas, colunas });
	} catch (exception) {
		e2 = exception;
	}

	expect(e2).not.toBeUndefined();
	expect(e2 instanceof Error).toBe(true);

	let e3: Error;
	try {
		copiarArray2D(original, { linha, coluna, linhas: -linhas, colunas });
	} catch (exception) {
		e3 = exception;
	}

	expect(e3).not.toBeUndefined();
	expect(e3 instanceof Error).toBe(true);

	let e4: Error;
	try {
		copiarArray2D(original, { linha, coluna, linhas, colunas: -colunas });
	} catch (exception) {
		e4 = exception;
	}

	expect(e4).not.toBeUndefined();
	expect(e4 instanceof Error).toBe(true);

});

const testeSolicitaLinhasExcesso
	= "copiarArray2D lança exceção se `linhas` é maior que números de linhas disponíveis considerando `original.length - linha.`"
test(testeSolicitaLinhasExcesso, function () {
	const original = [[-1,  0,  0, -1],
					  [-1, -1,  0,  0],
					  [ 0, -1,  0, -1],
					  [ 0, -1, -1, -1],
					  [ 0,  0,  0,  0]];

	let e: Error;
	try {
		copiarArray2D(original,
					  { linha:   2,
						coluna:  1,
						linhas:  4,
						colunas: 3 });
	} catch (exception) {
		e = exception;
	}

	expect(e).not.toBeUndefined();
	expect(e instanceof Error).toBe(true);

});


const testeSolicitaColunasExcesso
	= "copiarArray2D lança exceção se `colunas` é maior que números de colunas disponíveis considerando `original[linha].length - coluna.`"
test(testeSolicitaColunasExcesso, function () {

	const original = [[-1,  0,  0, -1],
					  [-1, -1,  0,  0],
					  [ 0, -1,  0, -1],
					  [ 0, -1, -1, -1],
					  [ 0,  0,  0,  0]];

	let e: Error;
	try {
		copiarArray2D(original,
					  { linha:   2,
						coluna:  2,
						linhas:  1,
						colunas: 3 });
	} catch (exception) {
		e = exception;
	}

	expect(e).not.toBeUndefined();
	expect(e instanceof Error).toBe(true);

});

test("copiarArray2D lança exceção se `original` possui número desigual de colunas.", function () {
	const original = [[ 0,  0],
					  [-1,  0],
					  [-1],
	                 ];
	let e: Error;

	try {
		copiarArray2D(original,
					  { linha:   2,
						coluna:  2,
						linhas:  1,
						colunas: 3 });
	} catch (exception) {
		e = exception;
	}

	expect(e).not.toBeUndefined();
	expect(e instanceof Error).toBe(true);

});
