import {
    criarArray,
    copiarArray,
    combinar,
    mapear,
    reduzir,
    duplicarArray,
    sobreporArray,
} from "../src/arrays";

test("criarArray(n) deve criar um array de n elementos com valor inicial 0 para n >= 0.", function () {
    const numeroElementos = 5;
    const a = criarArray(numeroElementos);
    expect(a.length).toBe(numeroElementos);
    expect(a.every((e) => e === 0)).toBe(true);
});

test("criarArray(n) deve lançar exceção para n negativo.", function () {
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

const testeCopiaElementosUndefined =
    "copiarArray(xs, inicio) deve retornar array com elementos copiados de `xs` a partir de `inicio` até última posição de `xs`.";
test(testeCopiaElementosUndefined, function () {
    const original = [0, 0, -1, 0, -1];
    const inicio = 1;
    const copia = copiarArray(original, inicio);
    expect(copia).toEqual(original.slice(inicio));
    expect(copia.length).toBe(original.length - inicio);
});

const testeCopiaComInicioElementos =
    "copiarArray(xs, inicio, elementos) deve retornar array com `elementos` elementos copiados de `xs` a partir de `inicio`.";
test(testeCopiaComInicioElementos, function () {
    const original = [0, 0, -1, 0, -1];
    const inicio = 2;
    const elementos = 3;
    const copia = copiarArray(original, inicio, elementos);
    expect(copiarArray.length).toBe(elementos);
    expect(copia).toStrictEqual(original.slice(inicio));
});

const testeSolicitandoElementosEmExcesso =
    "copiarArray(xs, inicio, elementos) deve lançar exceção se `elementos` > `original`.length - `inicio`.";
test(testeSolicitandoElementosEmExcesso, function () {
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

test("copiarArray(xs, i, e) deve lançar exceção para `i` ou `e` negativos.", function () {
    const original = [0, 0, -1, 0, -1];
    const inicio = 1;
    const elementos = 1;

    let e1: Error;

    try {
        copiarArray(original, -inicio, elementos);
    } catch (exception) {
        e1 = exception;
    }

    expect(e1).not.toBeUndefined();
    expect(e1 instanceof Error).toBe(true);

    let e2: Error;

    try {
        copiarArray(original, inicio, -elementos);
    } catch (exception) {
        e2 = exception;
    }

    expect(e2).not.toBeUndefined();
    expect(e2 instanceof Error).toBe(true);
});

test("duplicarArray deve retornar um array idêntico ao `original`.", function () {
    const a = [-1, -1, 0, -1];
    expect(duplicarArray(a)).toStrictEqual([-1, -1, 0, -1]);

    const b = [];
    expect(duplicarArray(b)).toStrictEqual([]);
});

const testeCombinar =
    "combinar deve retornar um array com mesmas dimensões das arrays passadas como argumentos e com elementos de ambas combinados com a aplicação de `fn`.";
test(testeCombinar, function () {
    const a1 = [0, 0, -1];
    const a2 = [0, -1, 0];
    const fn = (x: number, y: number) => x + y;
    const esperado = [0, -1, -1];

    expect(combinar(a1, a2, fn)).toStrictEqual(esperado);
});

test("combinar deve lançar exceção para arrays de tamanho distintos.", function () {
    const a1 = [-1, -1];
    const a2 = [0, 0, -1, 0, -1];

    let e: Error;
    try {
        console.log(combinar(a1, a2, (_, y) => y));
    } catch (exception) {
        e = exception;
    }

    expect(e).not.toBeUndefined();
    expect(e instanceof Error).toBe(true);
});

const testeSobrepor =
    "sobreporArray(a1, a2, posicaoInicial) deve retornar um array `r` com elementos de a1 substituídos pelos elementos da `a2` a partir da posição `r[posicaoInicial]`.";
test(testeSobrepor, function () {
    const a1 = [0, 0, -1, 0, -1];
    const a2 = [0, -1];
    const posicaoInicial = 2;
    const esperado = [0, 0, ...a2, -1];
    const resultado = sobreporArray(a1, a2, posicaoInicial);
    expect(resultado).toStrictEqual(esperado);
});

const testeSobreporLancandoExcecao =
    "sobreporArray deve lançar exceção se tamanho `a2` é maior que o tamanho de `a1` - `posicaoInicial`.";
test(testeSobreporLancandoExcecao, function () {
    const a1 = [-1, -1];
    const a2 = [0, 0, -1, 0, -1];
    const posicaoInicial = 1;

    let e: Error;
    try {
        console.log(sobreporArray(a1, a2, posicaoInicial));
    } catch (exception) {
        e = exception;
    }

    expect(e).not.toBeUndefined();
    expect(e instanceof Error).toBe(true);
});

const testeMapear =
    "mapear deve retornar array com mesma dimensão de `a` e com seus elementos transformados através de aplicação de `fn`.";
test(testeMapear, function () {
    const a = [-1, 0, -1];
    const not = (x) => ~x;
    const esperado = a.map(not);
    const resultado = mapear(a, not);

    expect(resultado).toStrictEqual(esperado);
});

test("mapear deve retornar array vazio para `a` vazio", function () {
    expect(mapear([], (x) => -1)).toStrictEqual([]);
});

test("reduzir deve lançar exceção para tamanho de `a` < 2.", function () {
    const a = [0];
    const redutor = (x, y) => x | y;

    let e: Error;
    try {
        console.log(reduzir(a, redutor));
    } catch (exception) {
        e = exception;
    }

    expect(e).not.toBeUndefined();
    expect(e instanceof Error).toBe(true);
});

test("reduzir deve retornar valor para arrays com tamanho maior que 2.", function () {
    const a1 = [0, -1, 0, 0];
    const r1 = (x, y) => x + y;
    const r2 = (x, y) => x | y; // algum?
    const r3 = (x, y) => x & y; // todos?
    expect(reduzir(a1, r1)).toBe(-1);
    expect(reduzir(a1, r2)).toBe(-1);
    expect(reduzir(a1, r3)).toBe(0);
});
