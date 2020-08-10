import { T } from "../src/t";

test("T deve possuir quatro representacões possíveis.", function () {
    const t = new T();
    expect(t.representacoes.length).toBe(4);
});

test("Representações de T devem ser distintas", function () {
    const t = new T();
    const r1 = t.representacao;
    t.rotacionar();
    const r2 = t.representacao;
    t.rotacionar();
    const r3 = t.representacao;
    t.rotacionar();
    const r4 = t.representacao;

    expect(r1).not.toStrictEqual(r2);
    expect(r1).not.toStrictEqual(r3);
    expect(r1).not.toStrictEqual(r4);

    expect(r2).not.toStrictEqual(r3);
    expect(r2).not.toStrictEqual(r4);

    expect(r3).not.toStrictEqual(r4);
});

test("rotacionar deve alternar as representações de T de forma cíclica.", function () {
    const t = new T();
    const r1 = t.representacao;
    t.rotacionar();
    const r2 = t.representacao;
    t.rotacionar();
    const r3 = t.representacao;
    t.rotacionar();
    const r4 = t.representacao;

    t.rotacionar();
    expect(t.representacao).toStrictEqual(r1);
    t.rotacionar();
    expect(t.representacao).toStrictEqual(r2);
    t.rotacionar();
    expect(t.representacao).toStrictEqual(r3);
    t.rotacionar();
    expect(t.representacao).toStrictEqual(r4);
});
