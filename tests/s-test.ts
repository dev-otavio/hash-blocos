import { S } from "../src/s";

test("S deve possuir 2 representacões possíveis.", function () {
    const s = new S();
    expect(s.representacoes.length).toBe(2);
});

test("Representações de S devem ser distintas", function () {
    const s = new S();
    const r1 = s.representacao;
    s.rotacionar();
    const r2 = s.representacao;

    expect(r1).not.toStrictEqual(r2);
});

test("rotacionar deve alternar as representações de S de forma cíclica.", function () {
    const s = new S();
    const r1 = s.representacao;
    s.rotacionar();
    const r2 = s.representacao;

    s.rotacionar();
    expect(s.representacao).toStrictEqual(r1);
    s.rotacionar();
    expect(s.representacao).toStrictEqual(r2);
});
