import { criarArray, copiarArray, criarArray2D } from "../src/arrays";


test("criarArray(n) deve criar um array de n elementos com valor inicial 0 para n >= 0.", function (){
	const numeroElementos = 5;
	const a = criarArray(numeroElementos);
	expect(a.length).toBe(numeroElementos);
	expect(a.every(e => e === 0)).toBe(true);
});

test("criarArray(n) lança exceção para n negativo.", function () {
	let e: Error;

	try {
		criarArray(-1);
	} catch (exception) {
		e = exception;
	}

	expect(e).not.toBeUndefined();
	expect(e instanceof Error).toBe(true);
});

test("copiarArray(xs, 0, 0) deve retornar array vazio para qualquer array `xs`.", function () {
	const original = criarArray(5);

	expect(copiarArray(original, 0, 0).length).toBe(0);
});

const testeCopiaElementosUndefined = "copiarArray(xs, inicio) deve retornar array com elementos copiados de `xs` a partir de `inicio` até última posição de `xs`.";
test(testeCopiaElementosUndefined, function () {
	const original = [0, 0, -1, 0, -1];
	const inicio = 1;
	const copia = copiarArray(original, inicio);
	expect(copia).toEqual(original.slice(inicio));	
	expect(copia.length).toBe(original.length - inicio);
});

const testeCopiaComInicioElementos = "copiarArray(xs, inicio, elementos) deve retornar array com `elementos` elementos copiados de `xs` a partir de `inicio`.";
test(testeCopiaComInicioElementos, function () {
	const original = [0, 0, -1, 0, -1];
	const inicio = 2;
	const elementos = 3;
	const copia = copiarArray(original, inicio, elementos);
	expect(copiarArray.length).toBe(elementos);
	expect(copia).toEqual(original.slice(inicio));
});

const testeSolicitandoElementosEmExcesso = "copiarArray(xs, inicio, elementos) lança exceção se `elementos` > `original`.length - `inicio`.";
test(testeSolicitandoElementosEmExcesso, function() {
	const inicio = 0;
	const original = [0, 0, -1, 0, -1];
	const elementos = original.length - inicio + 1;

	let e: Error;
	try {
		copiarArray(original, inicio, elementos);
	} catch (exception) {
		e = exception;
	}

	expect(e).not.toBeUndefined();
	expect(e instanceof Error).toBe(true);
});

const testeCriarArray2D = `criarArray2D(l, c) deve criar um array bidimensional de \`l\` linhas e
\`c\` colunas representando uma matriz de \`l\` * \`c\` elementos com valor inicial 0.`;
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
