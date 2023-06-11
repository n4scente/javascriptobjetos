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
  ],
  enderecos: {
      rua: "Uruguai",
      numero: 2077,
      apartamento: false,
      complemento: "esquina com Barão de St Tecla",
  },
};

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);

}

ligaParaCliente(...aluno.telefone);

const encomenda = { 
  destinatario: aluno.nome,
  ...aluno.enderecos[0],
}

console.log(encomenda);