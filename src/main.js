const alunos = [
    { nome: 'Rosinete', nota: 10 },
    { nome: 'Juliete', nota: 7.5 },
    { nome: 'Joanete', nota: 4.2 },
    { nome: 'Marinete', nota: 6.0 },
    { nome: 'Bernadete', nota: 9.1 },
    { nome: 'Odete', nota: 5.7 },
    { nome: 'Claudete', nota: 5.9 },
]

function filtragemDeAlunos(array) {
    return array.filter(aluno => aluno.nota >= 6)
}

const Aprovados = filtragemDeAlunos(alunos)

console.log(Aprovados)