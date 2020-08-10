import { combinar, mapear, reduzir } from "./arrays.js";
/**
 *@param {number} linhas - Número de linhas desejadas para o array.
 *@param {number} colunas - Número de colunas desejadas para o array.
 *@returns {Array<Array<number>>} Um array bidimensional de `linhas` * `colunas` elementos inicializados com valor 0.
 */
export function criarArray2D(linhas, colunas) {
    if (linhas < 0) {
        throw new Error(`Argumento inválido: ${linhas}`);
    }
    if (colunas < 0) {
        throw new Error(`Argumento inválido: ${colunas}`);
    }
    const array = Array(linhas);
    let ls = 0;
    while (ls < linhas) {
        array[ls] = Array(colunas);
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
 *@returns {Array<Array<number>>} Um array com as mesmas dimensões de `a1` e `a2` com elementos formados a partir da aplicação de `fn` aos elementos de posições correspondentes em `a1` e `a2`.
 */
export function combinar2D(a1, a2, fn) {
    const tamanho = a1.length;
    const largura = a1[0].length;
    if (a2.length !== tamanho) {
        throw new Error(`Arrays têm dimensões distintas: (${tamanho} linha(s), ${a2.length} linha(s))`);
    }
    const resultado = Array(tamanho);
    let i = 0;
    while (i < tamanho) {
        try {
            resultado[i] = Array(largura);
            resultado[i] = combinar(a1[i], a2[i], fn);
        }
        catch (e) {
            if (a1[i].length !== a2[i].length) {
                throw new Error(`Arrays têm dimensões distintas na linha ${i}: (${a1[i].length} coluna(s), ${a2[i].length} coluna(s))`);
            }
            else {
                throw e;
            }
        }
        i += 1;
    }
    return resultado;
}
/**
 *@param {Array<Array<number>>} original - Um array bidimensional do qual os elementos serão copiados.
 *@param regiao - Região a ser copiada de `original`.
 *@param {number} regiao.linha - Linha da posicao inicial da região a ser copiada de `original`.
 *@param {number} regiao.coluna - Coluna da posicao inicial da região a ser copiada de `original`.
 *@param {number} regiao.linhas - Número de linhas que devem ser copiadas de `original`.
 *@param {number} regiao.coluna - Número de colunas que devem ser copiadas de `original`.
 *@returns {Array<Array<number>>} Um array bidimensional com `linhas` linhas e `colunas` colunas copiados de `original` a partir de `original[linha][coluna]`.
 */
export function copiarArray2D(original, regiao) {
    const { linha, coluna, linhas, colunas } = regiao;
    if (linha < 0) {
        throw new Error(`Valor inválido para linha: ${linha}`);
    }
    if (coluna < 0) {
        throw new Error(`Valor inválido para coluna: ${coluna}`);
    }
    if (linhas < 0) {
        throw new Error(`Valor inválido para linhas: ${linhas}`);
    }
    if (colunas < 0) {
        throw new Error(`Valor inválido para coluna: ${colunas}`);
    }
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
    const matriz = Array(linhas);
    let i = 0;
    while (i < linhas) {
        matriz[i] = Array(colunas);
        let j = 0;
        while (j < colunas) {
            matriz[i][j] = original[i + linha][j + coluna];
            j += 1;
        }
        i += 1;
    }
    return matriz;
}
/**
 *@param {Array<Array<number>>} original - Um array bidimensional do qual os elementos serão copiados.
 *@returns {Array<Array<number>>} Um array bidimensional idêntico ao original.
 */
export function duplicarArray2D(original) {
    return copiarArray2D(original, {
        linha: 0,
        coluna: 0,
        linhas: original.length,
        colunas: original[0].length,
    });
}
/**
 *@param {Array<Array<number>>} a1 - Array bidimensional base para cópia.
 *@param {Array<Array<number>>} a2 - Array bidimensional cujos elementos irão substituir os elementos de `a1` a partir da `posicaoInicial` na array retornada.
 *@returns {Array<Array<number>>} Um array bidimensional com mesmo tamanho de `a1` e com elementos de `a1` mas com elementos de `a2` a partir da `posicaoinicial`.
 */
export function sobreporArray2D(a1, a2, posicaoInicial) {
    const { linha, coluna } = posicaoInicial;
    if (a1.length - linha < a2.length) {
        throw new Error(`Argumento inválido ${a2}, espaço disponível para ${a1.length - linha} linha(s) a partir de linha ${linha}.`);
    }
    if (a1[0].length - coluna < a2[0].length) {
        throw new Error(`Argumento inválido ${a2}, espaço disponível para ${a1[0].length - coluna} coluna(s) a partir de linha ${linha} e coluna ${coluna}.`);
    }
    const comprimento = a1.length;
    const largura = a1[0].length;
    const copia = Array(comprimento);
    let i = 0;
    while (i < a1.length) {
        copia[i] = Array(largura);
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
 *@param {Array<Array<number>>} a - Um array cujos elementos serão a base para o array retornado.
 *@param {(x: number) => number} fn - Uma função a ser aplicada sobre os elementos de `a`.
 *@returns {Array<Array<number>>} Um array cujos elementos são resultado da aplicação de `fn` aos elementos
correspondentes em `a`.
 */
export function mapear2D(a, fn) {
    const comprimento = a.length;
    const resultado = Array(comprimento);
    let i = 0;
    while (i < a.length) {
        resultado[i] = Array(a[i].length);
        resultado[i] = mapear(a[i], fn);
        i += 1;
    }
    return resultado;
}
/**
 *@param {Array<Array<number>>} a - Um array cujos elementos serão reduzidos a um único valor através de `fn`.
 *@param {(ac:number, c: number) => number} fn - Uma função aplicada sucessivamente sobre elementos de `a` recebendo um acumulador `ac` que é o resultado da aplicacao anterior ou o primeiro elemento de `a` e o valor `c` da posição atual de `a`.
 *@returns {number} Um número que é o resultado acumulado de aplicação sucessiva de `fn` aos elementos de `a`.
 */
export function reduzir2D(a, fn) {
    const comprimento = a.length;
    const largura = a[0].length;
    const numeroElementos = comprimento * largura;
    if (numeroElementos < 2) {
        throw new Error(numeroElementos ? `Array possui apenas 1 elemento` : `Array vazia`);
    }
    let parcial = Array(comprimento);
    if (largura > 1) {
        let i = 0;
        while (i < a.length) {
            parcial[i] = reduzir(a[i], fn);
            i += 1;
        }
    }
    else {
        let i = 0;
        while (i < a.length) {
            parcial[i] = a[i][0];
            i += 1;
        }
    }
    if (parcial.length < 2) {
        return parcial[0];
    }
    else {
        let ac = fn(parcial[0], parcial[1]);
        let j = 2;
        while (j < parcial.length) {
            ac = fn(ac, parcial[j]);
            j += 1;
        }
        return ac;
    }
}
/**
 *@param {Array<Array<number>>} original - Um array bidimensional contendo linha a ser excluída.
 *@param {number} i - índice da linha a ser excluída.
 *@returns {Array<Array<number>>} Um array com mesmas dimensões da `original` com todos elementos igual a 0 na linha 0 e linhas seguintes copiadas em ordem de `original` excluindo a de posição `i`.
 */
export function remover2D(original, i) {
    const comprimento = original.length;
    const largura = original[0].length;
    if (i < 0) {
        throw new Error(`Argumento inválido: ${i}`);
    }
    if (i > comprimento) {
        throw new Error(`Argumento inválido: ${i}, array possui ${comprimento} linha(s)`);
    }
    const resultado = criarArray2D(comprimento, largura);
    let rl = 1;
    let ol = 0;
    while (rl < comprimento) {
        if (ol !== i) {
            resultado[rl] = original[ol];
            rl += 1;
        }
        ol += 1;
    }
    return resultado;
}
//# sourceMappingURL=arrays2D.js.map