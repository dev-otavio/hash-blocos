import { criarArray } from "../src/arrays";


test("criarArray(n) deve criar um array de n elementos com valor inicial 0 para n >= 0.", function () {
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
