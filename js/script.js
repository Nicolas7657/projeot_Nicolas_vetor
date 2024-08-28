let vetor=[];

function adicionarValor() {
  const valor= Number(document.getElementById('valor').value)

  if(!isNaN(valor)) {

  const tabela= Number(document.getElementById('tabelaValores')).getElementsByTagName('tbody')[0];
  const novaLinha= tabela.insertRow();
  const celula= novaLinha.insertCell(0);
  celula.textContent= valor;
  document.getElementById('valor').value= '';
  document.getElementById('valor').focus();
}
}
/*function dividir() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let segundo_numero_inteiro = Number(document.getElementById("segundo_numero_inteiro").value);

  //Realiza a divisao do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_divisao" recebe o valor da divisao
  let resultado_divisão = primeiro_numero_inteiro / segundo_numero_inteiro;

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("resultado_divisao").value = resultado_divisão;


}
*/
