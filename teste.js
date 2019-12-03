const Conta = require("./Conta");

let contaPedro = new Conta();
contaPedro.depositar(1000);

let contaJoao = new Conta();
contaJoao.depositar(500);

contaPedro.transferir(200, contaJoao);

console.log("Saldo João:" + contaJoao.saldo);
console.log("Saldo Pedro:" + contaPedro.saldo);
