/**
 *@param {number} n - Número de elementos desejados para o array.
 *@returns {Array<number>} Um array unidimensional de `n` elementos inicializados com valor 0.
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
 *@returns {Array<number>} Um array com as mesmas dimensões de `a1` e `a2` com elementos formados a partir da aplicação de `fn` aos elementos de posições correspondentes em `a1` e `a2`.
 */
export function combinar(
    a1: Array<number>,
    a2: Array<number>,
    fn: (x: number, y: number) => number
): Array<number> {
    const tamanho = a1.length;
    if (a2.length !== tamanho) {
        throw new Error(
            `Arrays têm dimensões distintas: (${tamanho}, ${a2.length})`
        );
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
 *@returns {Array<number>} Uma array com `elementos` elementos da original a partir de `inicio`.
Caso `elementos` seja `undefined`, a array irá conter (original.length - inicio) elementos da `original` copiados a partir de `inicio`.
*/
export function copiarArray(
    original: Array<number>,
    inicio: number,
    elementos?: number
): Array<number>;
export function copiarArray(
    original: Array<number>,
    inicio: number,
    elementos: number
): Array<number>;
export function copiarArray(
    original: Array<number>,
    inicio: number,
    elementos: any
): Array<number> {
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
        throw new Error(
            `Argumento inválido: ${elementos}. ${
                original.length - inicio
            } elementos disponíveis a partir posição ${inicio}.`
        );
    }

    while (inicio < limite) {
        copia.push(original[inicio]);
        inicio += 1;
    }

    return copia;
}

/**
 *@param {Array<number>} original - Array a ser copiada.
 *@returns {Array<number>} Cópia da array `original`.
 */
export function duplicarArray(original: Array<number>): Array<number> {
    return copiarArray(original, 0);
}

/**
 *@param {Array<number>} a1 - Array base para cópia.
 *@param {Array<number>} a2 - Array cujos elementos irão substituir os elementos de `a1` a partir da `posicaoInicial` na array retornada.
 *@param {number} posicaoInicial - Índice a partir do qual devem ser inseridos elementos de `a2`.
 *@returns {Array<number>} Um array com mesmo tamanho de `a1` e com elementos de `a1` mas com elementos de `a2` a partir da `posicaoinicial`.
 */
export function sobreporArray(
    a1: Array<number>,
    a2: Array<number>,
    posicaoInicial: number
): Array<number> {
    if (a2.length > a1.length - posicaoInicial) {
        throw new Error(
            `Argumento inválido: ${a2}. Espaço disponível apenas para ${
                a1.length - posicaoInicial
            } elemento(s) a partir da posição ${posicaoInicial}`
        );
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
 *@param {Array<number>} a - Um array cujos elementos serão a base para o array retornado.
 *@param {(x: number) => number} fn - Uma função a ser aplicada sobre os elementos de `a`.
 *@returns {Array<number>} Um array cujos elementos são resultado da aplicação de `fn` aos elementosde posições correspondentes em `a`.
 */
export function mapear(
    a: Array<number>,
    fn: (x: number) => number
): Array<number> {
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
 *@returns {Array<number>} Um número que é o resultado acumulado de aplicação sucessiva de `fn` aos elementos de `a`.
 */
export function reduzir(
    a: Array<number>,
    fn: (ac: number, c: number) => number
): number {
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
