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

const chavesDoObjeto = Object.keys(aluno);

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro! É necessário ter um endereço cadastrado!");
};
