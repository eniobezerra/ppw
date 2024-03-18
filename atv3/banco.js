
let prompt = require('prompt-sync')();
// Leitura do primeiro número e atribuição à variável v1
let questao;
questao = Number(prompt("Qual questãao você quer executar:")); 

switch (questao) {
    case 1:
        let saldo;

saldo = Number(prompt("Digite o primeiro número:"))
        verificarSaldo(saldo);
        break;
    case 2:
        saldoAtual = Number(prompt("saldo atual")); 
        valorSaque= Number(prompt("valor do saque")); 
        realizarSaque(saldoAtual, valorSaque)
        break;
    case 3:
        saldoAtual = Number(prompt("saldo atual")); 
        valorDeposito= Number(prompt("valor do deposito")); 
        realizarDeposito(saldoAtual, valorDeposito)
    case 4:
        saldoOrigem = Number(prompt("saldo origem:"));
        saldoDestino = Number(prompt("saldo destino:"));
        valorTransferencia = Number(prompt("valor da transferencia: "));
        limiteTransferencia = Number(prompt("limite da transgerencia;"));
        realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia)
    case 5:
      let sald;

      sald = Number(prompt("Digite o saldo:"))
      checarChequeEspecial(sald)

        break;

    case 6:
      
    saldora= Number(prompt("saldo origem:"));
    cadastroAtivo = Number(prompt("saldo origem:"));
    atualizarCadastro(cadastroAtivo, saldora)

      break;

    case 7:
    
    saldor= Number(prompt("saldo origem:"));
    historicoCredito = Number(prompt("historico credito:"));
    rendaMensal = Number(prompt("renda mensal:"));


      avaliarCredito(saldor, historicoCredito, rendaMensal)
    
    break
      
    
        
    default:
        console.log('Fruta não identificada');
        break;
}

function verificarSaldo(saldo) {
    
    if (saldo > 0) {
  
      console.log("Saldo positivo");
  
    } else {
  
      console.log("Saldo negativo");
  
    }
  
  }
  function realizarSaque(saldoAtual, valorSaque) {



    if (valorSaque <= saldoAtual) {
  
      saldoAtual -= valorSaque;
  
      console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
  
    } else {
  
      console.log("Saldo insuficiente");
  
    }
  
  }
  function realizarDeposito(saldoAtual, valorDeposito) {

    saldoAtual += valorDeposito;
  
    console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
  
  }
  function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {

    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
  
      saldoOrigem -= valorTransferencia;
  
      saldoDestino += valorTransferencia;
  
      console.log("Transferência realizada com sucesso");
  
    } else if (valorTransferencia > saldoOrigem) {
  
      console.log("Saldo insuficiente para transferência");
  
    } else {
  
      console.log("Valor excede o limite de transferência");
  
    }
  
  }

  function checarChequeEspecial(sald) {

    if (sald < 0) {
  
      console.log("Dentro do limite do cheque especial");
  
    } else {
  
      console.log("Fora do limite do cheque especial");
  
    }
  
  }
 
  function atualizarCadastro(cadastroAtivo, saldora) {

    if (cadastroAtivo) {
  
      if (saldora > 0) {
  
        console.log("Cadastro ativo e saldo positivo");
  
      } else {
  
        console.log("Cadastro ativo mas precisa regularizar saldo");
  
      }
  
    } else {
  
      console.log("Por favor, atualize seu cadastro");
  
    }
  
  }

  function avaliarCredito(saldor, historicoCredito, rendaMensal) {

    if (saldor > 1000 && historicoCredito && rendaMensal > 3000) {
  
      console.log("Crédito aprovado");
  
    } else {
  
      console.log("Crédito negado");
  
    }
  
  }