const aluno = {
  nome: "Felipe",
  idade: 20,
  email: "fs.nascente@gmail.com",
  telefone: ["(53) 98103-4546", "(11) 96131-8784"],
  curso: "Design Gráfico",
  matricula: "201911720104",
  materias: [
    "Projeto Editorial",
    "Projeto Digital",
    "Projeto de Identidade Visual",
    "Ilustração",
  ]
};

aluno.enderecos = [
{
  rua: "Uruguai",
  numero: 2077,
  apartamento: false,
  complemento: "esquina com Barão de St Tecla",
},
];

for (let chave in aluno) {
  let tipo = typeof aluno[chave];
  if (tipo !== 'object' && tipo !== 'function') {
  console.log(`A chave ${chave} tem o valor ${aluno[chave]}`);
  }
}
