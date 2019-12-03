const Conta = require("./Conta");

let contaPedro = new Conta();
conta.depositar(1000);

let contaJoao = new Conta();
conta.depositar(500);

//contaPedro.transferir valor -> contaJoao

const resultado = conta.sacar(200);
if (resultado) {
  console.log("Minha conta agora tem: " + resultado);
} else {
  console.log("Saldo indisponivel");
}
