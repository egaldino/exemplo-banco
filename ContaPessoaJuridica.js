class ContaPessoaJuridica extends Conta {
  constructor() {
    super();
    this.cnpj;
    this.razaoSocial;
    this.nomeFantasia;
  }
}

module.exports = ContaPessoaJuridica;
