var Banco = {
    conta: "12345-6",
    saldo: 1000.00,
    tipoConta: "Corrente",
    agencia: "7890",

    buscarSaldo: function() {
        return this.saldo;
    },

    deposito: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return "Depósito de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;
        } else {
            return "Valor de depósito inválido.";
        }
    },

    saque: function(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return "Saque de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;
        } else {
            return "Valor de saque inválido ou saldo insuficiente.";
        }
    },

    numeroConta: function() {
        return "Número da conta: " + this.conta;
    }
};

// Exemplo de utilização
console.log(Banco.buscarSaldo()); // Retorna o saldo atual
console.log(Banco.deposito(500.00)); // Realiza um depósito
console.log(Banco.saque(200.00)); // Realiza um saque
console.log(Banco.numeroConta()); // Retorna o número da conta
