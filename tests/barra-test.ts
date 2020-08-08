import { Barra } from "../src/barra";


test("Barra deve possuir apenas 2 representações possíveis.", function () {
	const b = new Barra;
	expect(b.representacoes.length).toBe(2);
});

test("Barra deve possuir representações distintas.", function () {
	const b = new Barra;
	const r1 = b.representacao;
	b.rotacionar();
	const r2 = b.representacao;
	expect(r2).not.toStrictEqual(r1);
});

test("rotacionar deve alternar representações de uma barra de forma cíclica.", function () {
	const b = new Barra;
	const r1 = b.representacao;
	b.rotacionar();
	const r2 = b.representacao;
	b.rotacionar();
	expect(b.representacao).toStrictEqual(r1);
	b.rotacionar();
	expect(b.representacao).toStrictEqual(r2);
	b.rotacionar();
	expect(b.representacao).toStrictEqual(r1);
	b.rotacionar();
	expect(b.representacao).toStrictEqual(r2);
});
