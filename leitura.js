const dados =  require("./aluno.json");

console.log(dados);
console.log(typeof dados);

const alunoEmString = JSON.stringify(dados);

console.log(alunoEmString)
// virou string

const aluno = JSON.parse(alunoEmString);

console.log(aluno);