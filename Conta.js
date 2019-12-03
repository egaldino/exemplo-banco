const Movimentacao = require("./Movimentacao");

class Conta {
  constructor() {
    this.saldo = 0;
    this.agencia;
    this.numero;
    this.tipo;
    this.movimentacoes = [];
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo = this.saldo - valor;

      let movimentacao = new Movimentacao();
      movimentacao.valor = -valor;
      this.movimentacoes.push(movimentacao);
      return this.saldo;
    }
    return false;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo = this.saldo + valor;

      let movimentacaoOrigem = new Movimentacao();
      movimentacaoOrigem.valor = -valor;
      this.movimentacoes.push(movimentacaoOrigem);

      let movimentacaoDestino = new Movimentacao();
      movimentacaoDestino.valor = valor;
      this.movimentacoes.push(movimentacaoDestino);
    }
    return this.saldo;
  }

  transferir(valor, contaDestino) {
    // sacar na origem
    if (this.sacar(valor)) {
      // depositar no destino
      contaDestino.depositar(valor);

      let movimentacao = new Movimentacao();
      movimentacao.valor = valor;
      movimentacao.contaOrigem = this.numero;
      movimentacao.contaDestino = contaDestino.numero;
      this.movimentacoes.push(movimentacao);
      return true;
    }
    return false;
  }

  extrato() {}
}

module.exports = Conta;
