import { criarArray2D, copiarArray2D } from "../src/arrays";


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
