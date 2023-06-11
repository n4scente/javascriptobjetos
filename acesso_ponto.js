const cliente = {
  nome: "André",
  idade: 32,
  CPF: "23828372322",
  email: "andre@dominio.com"
}

// console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);
// console.log(`Os três primeiros digitos do CPF do cliente são ${cliente.CPF.substring(0, 3)}`);

// console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);
// console.log(`Os três primeiros digitos do CPF do cliente são ${cliente.CPF.substring(0, 3)}`);

const chaves = ["nome", "idade", "CPF", "email", "altura"];
chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
