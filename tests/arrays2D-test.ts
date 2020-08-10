import { criarArray2D
         , copiarArray2D
         , combinar2D
		 , mapear2D
		 , reduzir2D
		 , remover2D
		 , duplicarArray2D
         , sobreporArray2D } from "../src/arrays2D";

const testeCriarArray2D = "criarArray2D(l, c) deve criar um array bidimensional de `l` linhas e `c` colunas representando uma matriz de `l` * `c` elementos com valor inicial 0.";
test(testeCriarArray2D, function() {
    const linhas = 3;
    const colunas = 5;

    const array = criarArray2D(linhas, colunas);
    expect(array.length).toBe(linhas);
    expect(array.every(l => l.length === colunas)).toBe(true);
    expect(array.every(l => l.every(e => e === 0))).toBe(true);
});

test("criarArray2D(l, c) deve lançar exceção para `l` ou `c` negativos.", function () {

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

test("copiarArray2D deve lançar exceção para valor negativo para qualquer propriedade do parâmetro `regiao`.", function () {

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
    = "copiarArray2D deve lançar exceção se `linhas` é maior que números de linhas disponíveis considerando `original.length - linha.`"
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
    = "copiarArray2D deve lançar exceção se `colunas` é maior que números de colunas disponíveis considerando `original[linha].length - coluna.`"
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

test("copiarArray2D deve lançar exceção se `original` possui número desigual de colunas.", function () {
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

test("duplicarArray2D deve retornar array idêntico ao `original`.", function () {
	const original = [[-1], [0], [0]];
	expect(duplicarArray2D(original)).toStrictEqual([[-1], [0], [0]]);
});

test("combinar2D deve lançar exceção para arrays com tamanhos distintos.", function () {
    const a1 = [[ 0,  0],
                [-1,  0],
                [-1]];
    const a2 = [[-1,  0],
                [-1,  0],
                [-1,  0]];

    let e1: Error;
    try {
        console.log(combinar2D(a1, a2, (_, __) => 0));
    } catch (exception) {
        e1 = exception;
    }

    expect(e1).not.toBeUndefined();
    expect(e1 instanceof Error).toBe(true);

    const a3 = [[]];
    const a4 = [[], []];

	let e2: Error;
    try {
        console.log(combinar2D(a3, a4, (_, __) => 0));
    } catch (exception) {
        e2 = exception;
    }

    expect(e2).not.toBeUndefined();
    expect(e2 instanceof Error).toBe(true);
});

const testeCombinar2D
    = "combinar2D deve retornar array bidimensional com mesmas dimensões dos argumentos `a1` e `a2` e te ter elementos resultantes da aplicação de `fn` aos elementos correspondentes das arrays referidas."
test(testeCombinar2D, function () {
    const a1 = [[ 0,  0],
                [-1,  0],
                [-1,  0]];

    const a2 = [[-1,  0],
                [-1,  0],
                [-1,  0]];

    const fn = (x, y) => ~(x & y);
    const esperado = [[-1, -1],
                      [ 0, -1],
                      [ 0, -1]];

    const resultado = combinar2D(a1, a2, fn);
    expect(resultado).toStrictEqual(esperado);
});

const testeSobrepor
    = "sobreporArray2D(a1, a2, { linha: l, coluna: c }) deve retornar um array `r` com elementos de a1 substituídos pelos elementos da `a2` a partir da posição `r[l][c]`.";
test(testeSobrepor, function () {
    const a1 = [[ 0,  0, -1,  0, -1],
                [-1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1],
                [ 0,  0,  0,  0,  0]];

    const a2 = [[ 0, -1],
                [ 0,  0]];

    const posicaoInicial = { linha: 1, coluna: 1 };
    const esperado = [[ 0,  0, -1,  0, -1],
                      [-1,  0, -1, -1, -1],
                      [-1,  0,  0, -1, -1],
                      [ 0,  0,  0,  0,  0]]

    const resultado = sobreporArray2D(a1, a2, posicaoInicial);
    expect(resultado).toStrictEqual(esperado);
});

const testeSobreporLancaExcecaoLinhasExcedentes
    = "sobreporArray2D deve lançar exceção se quantidade de linhas de `a2` excede espaço disponível considerando a linha da `posicaoInicial`.";
test(testeSobreporLancaExcecaoLinhasExcedentes, function () {

    const a1 = [[ 0,  0, -1,  0, -1],
                [-1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1],
                [ 0,  0,  0,  0,  0]];

    const a2 = [[ 0, -1],
                [ 0,  0]];

    const posicaoInicial = { linha: 3, coluna: 1 };

    let e: Error;

    try {
        sobreporArray2D(a1, a2, posicaoInicial);
    } catch (exception) {
        e = exception;
    }

    expect(e).not.toBeUndefined();
    expect(e instanceof Error).toBe(true);

});

const testeSobreporLancaExcecaoColunasExcedentes
    = "sobreporArray2D deve lançar exceção se quantidade de colunas de `a2` excede espaço disponível considerando a linha e coluna da `posicaoInicial`.";
test(testeSobreporLancaExcecaoColunasExcedentes, function () {

    const a1 = [[ 0,  0, -1,  0, -1],
                [-1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1],
                [ 0,  0,  0,  0,  0]];

    const a2 = [[ 0, -1],
                [ 0,  0]];

    const posicaoInicial = { linha: 0, coluna: 4 };

    let e: Error;

    try {
        sobreporArray2D(a1, a2, posicaoInicial);
    } catch (exception) {
        e = exception;
    }

    expect(e).not.toBeUndefined();
    expect(e instanceof Error).toBe(true);

});

test("mapear2D deve retornar array vazio para `a` vazio.", function () {
	const a = [];
	const resultado = mapear2D(a, x => x);

	expect(resultado).toStrictEqual([]);
});

const testeMapear
	= "mapear2D deve retornar array bidimensional com mesmas dimensões de `a` e cada elemento deve ser o resultado da aplicação de `fn` ao elemento em posição correspondente em `a`."
test(testeMapear, function () {
	const a = [[ 0, -1],
			   [-1,  0]];

	const fn1 = _ => -1;
	const fn2 = _ =>  0;
	const fn3 = x => ~x;

	expect(mapear2D(a, fn1)).toStrictEqual([[-1, -1],
											[-1, -1]]);

	expect(mapear2D(a, fn2)).toStrictEqual([[0, 0],
											[0, 0]]);

	expect(mapear2D(a, fn3)).toStrictEqual([[-1,  0],
											[ 0, -1]]);

});

test("reduzir2D deve lancar exceção para arrays com menos de 2 elementos.", function () {
	const a = [[-1]];

	const fn = (x, y) => x | y;

	let e: Error;
    try {
        reduzir2D(a, fn);
    } catch (exception) {
        e = exception;
    }

    expect(e).not.toBeUndefined();
    expect(e instanceof Error).toBe(true);
});

const testeReduzir2D
	= "reduzir2D deve retornar o valor acumulado da aplicação sucessiva de `fn` aos elementos de `a`.";
test(testeReduzir2D, function () {
	const a1 = [[ 0, -1],
				[ 0,  0],
			    [-1,  0]];
	const r1 = (x, y) => x + y;
	const r2 = (x, y) => x | y; // algum?
	const r3 = (x, y) => x & y; // todos?

	expect(reduzir2D(a1, r1)).toBe(-2);
	expect(reduzir2D(a1, r2)).toBe(-1);
	expect(reduzir2D(a1, r3)).toBe(0);

	const a2 = [[-1],
			    [-1],
			    [-1],
			    [-1]];

	expect(reduzir2D(a2, r1)).toBe(-4);
	expect(reduzir2D(a2, r2)).toBe(-1);
	expect(reduzir2D(a2, r3)).toBe(-1);

});

const testeRemoverLinha
	= "remover2D deve retornar array com mesma dimensao da original com todos elementos igual a zero na primeiro linha e todas linhas da original ocupando as linhas seguintes exceto a linha `i`.";
test(testeRemoverLinha, function () {
	const original
		= [[-1,  0,  0],
		   [-1, -1, -1],
		   [ 0, -1, -1]];

	const e1
		= [[ 0,  0,  0],
		   [-1, -1, -1],
		   [ 0, -1, -1]];

	const i1 = 0;
	expect(remover2D(original, i1)).toStrictEqual(e1);

	const e2
		= [[ 0,  0,  0],
		   [-1,  0,  0],
		   [ 0, -1, -1]];

	const i2 = 1;
	expect(remover2D(original, i2)).toStrictEqual(e2);

	const e3
		= [[ 0,  0,  0],
		   [-1,  0,  0],
		   [-1, -1, -1]];
		   

	const i3 = 2;
	expect(remover2D(original, i3)).toStrictEqual(e3);

});

const testeRemoverLancaExcecao
	= "remover2D deve lançar exceção para `i` < 0 ou maior que número de linhas de `original.`"
test(testeRemoverLancaExcecao, function () {

	const original = [[-1, 0]];
	const i1 = -1;
    let e1: Error;
    try {
        console.log(remover2D(original, i1));
    } catch (exception) {
        e1 = exception;
    }

    expect(e1).not.toBeUndefined();
    expect(e1 instanceof Error).toBe(true);

	const i2 = 3;
	let e2: Error;
    try {
        console.log(remover2D(original, i2));
    } catch (exception) {
        e2 = exception;
    }

    expect(e2).not.toBeUndefined();
    expect(e2 instanceof Error).toBe(true);

});
