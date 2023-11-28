const prompt = require('prompt-sync')();

// Função para gerar um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

// Número aleatório gerado pelo computador
const numeroAleatorio = gerarNumeroAleatorio();

// Loop para continuar pedindo um número até que o jogador adivinhe corretamente
while (true) {
  // Perguntar ao jogador para inserir um número
  const palpite = parseInt(prompt('Adivinhe o número entre 1 e 10: '));

  // Verificar se o palpite é válido
  if (isNaN(palpite) || palpite < 1 || palpite > 10) {
    console.log('Por favor, insira um número válido entre 1 e 10.');
    continue; // Reinicia o loop
  }

  // Verificar se o palpite está correto
  if (palpite === numeroAleatorio) {
    console.log('Parabéns! Você acertou o número!');
    break; // Interrompe o loop while
  } else {
    console.log('Ops! Tente novamente.'); // Mensagem se o palpite estiver incorreto
  }
}
