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
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente")
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
    }
  }
};

aluno.efetuaPagamento(25);
