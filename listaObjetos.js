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

aluno.enderecos.push({
  rua: "Francisco Bellazi",
  numero: 205,
  apartamento: true,
  complemento: "casa do fundo",
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(aluno)