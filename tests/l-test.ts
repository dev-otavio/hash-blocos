import { L } from "../src/l";

test("L deve possuir quatro representacões possíveis.", function () {
    const l = new L();

    expect(l.representacoes.length).toBe(4);
});

test("Representações de L devem ser distintas", function () {
    const l = new L();
    const r1 = l.representacao;
    l.rotacionar();
    const r2 = l.representacao;
    l.rotacionar();
    const r3 = l.representacao;
    l.rotacionar();
    const r4 = l.representacao;

    expect(r1).not.toStrictEqual(r2);
    expect(r1).not.toStrictEqual(r3);
    expect(r1).not.toStrictEqual(r4);

    expect(r2).not.toStrictEqual(r3);
    expect(r2).not.toStrictEqual(r4);

    expect(r3).not.toStrictEqual(r4);
});

test("rotacionar deve alternar as representações de L de forma cíclica.", function () {
    const l = new L();
    const r1 = l.representacao;
    l.rotacionar();
    const r2 = l.representacao;
    l.rotacionar();
    const r3 = l.representacao;
    l.rotacionar();
    const r4 = l.representacao;

    l.rotacionar();
    expect(l.representacao).toStrictEqual(r1);
    l.rotacionar();
    expect(l.representacao).toStrictEqual(r2);
    l.rotacionar();
    expect(l.representacao).toStrictEqual(r3);
    l.rotacionar();
    expect(l.representacao).toStrictEqual(r4);
});
