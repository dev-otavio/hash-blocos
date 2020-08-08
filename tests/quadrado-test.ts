import { Quadrado } from '../src/quadrado'


const r = [[-1, -1],
		   [-1, -1]];

test(`Um quadrado deve ter representação única igual a ${JSON.stringify(r)}.`, function () {
	const q = new Quadrado;

	expect(q.representacoes.length).toBe(1);
	expect(q.representacao).toStrictEqual(r);
});

test(`Sucessivas invocações a rotacionar não devem alterar a representação de um quadrado.`, function () {
	const q = new Quadrado;

	q.rotacionar();
	expect(q.representacao).toStrictEqual(r);

	q.rotacionar();
	expect(q.representacao).toStrictEqual(r);

	q.rotacionar();
	expect(q.representacao).toStrictEqual(r);	
})
