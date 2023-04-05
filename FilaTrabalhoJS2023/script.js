 // Crie uma instância da fila
 let minhaFila = new Fila(10);

 // Função para adicionar um elemento à fila
 function adicionarElemento() {
    const novoNome = document.getElementById("txtNovoNome");
    const novoCpf = document.getElementById("txtNovoCpf");
    // Verificar se tem algo digitado e mostrar mensagem se necessário
    if(novoNome.value === "" || novoCpf.value === ""){
      alert("É necessário preencher todos os campos!");
      return;
    }
    const novoAtendimento = new Atendimento();
    novoAtendimento.nome = novoNome.value;
    novoAtendimento.cpf = novoCpf.value;
    novoAtendimento.data = obterDataAtual();
    novoAtendimento.hora = obterHoraAtual();
    if(minhaFila.enqueue(novoAtendimento)==true){
         console.log(minhaFila.toString() );
         limparCampos();
         mostrarFila();
    }
    else{
      alert("Fila cheia:(");
      limparCampos;
      
    }
    mostrarFila();
 }
//--------------------------------------------------------------------------------------------
 // Função para remover o primeiro elemento da fila
 function removerElemento(){
  if(minhaFila.isEmpty()){
    alert("Fila vazia!!");
    return 0;
  }
  else
    return minhaFila.dequeue();
 }
 //-------------------------------------------------------------------------------------------
 function realizarAtendimento() {
    // verificar se não está vazia antes de atender
    if(removerElemento == 0){
       alert("Fila vazia!!");
    }     
    // mostrar dados da pessoa atendida utilizando a funcao mostrarMensagemRemocao
    else{
      let retornar = removerElemento();
      mostrarMensagemRemocao(retornar);
      mostrarFila();
    }
 }
 //--------------------------------------------------------------------------------
 function buscarCpf() {
    const cpf = document.getElementById("txtNovoCpf").value.trim(); // o trim retira os espaços em branco
    const atendimentoBusca = new Atendimento(null,cpf); // vamos pesquisar só por CPF
    // para cada elemento da fila, verificar com o equals
    Atendimento.cpf=cpf;
    let i = 0;
    let Achou = false;
    // Deve retornar a posição na fila e caso não seja encontrado avisar, crie um contador de posicões
   for(let item of minhaFila.itens){
      i++;
      if(item.equals(Atendimento)){
        alert("Encontrado na posição:"+i);
        limparCampos;
        Achou = true;
        break;
     }
   }
   if(Achou == false){
    limparCampos ();
    alert("CPF não encontrado!!");
  }
}
//------------------------------------------------------------
//Limpar caixa de texto
function limparCampos() {
  const novoNome = document.getElementById("txtNovoNome");
  const novoCpf = document.getElementById("txtNovoCpf");
  novoNome.value = "";
  novoCpf.value = "";
  novoNome.focus();
}
//--------------------------------------------------------------------------------------------
function mostrarMensagemRemocao(pessoaAtendida) {
    const lblMensagemRemocao = document.getElementById("lblMensagemRemocao");
    let horaAtendida = obterDataAtual();
    lblMensagemRemocao.innerHTML ="Próximo a ser atendido(a): "+ pessoaAtendida.nome;
    lblMensagemRemocao.style.display = "block";
}
//--------------------------------------------------------------------------------------------
 // Função para mostrar a  fila
 function mostrarFila() {
  const filaObjetos = document.getElementById("Pessoas na fila:");
  filaObjetos.innerHTML = minhaFila.toString();
}
//--------------------------------------------------------------------------------------------
 // funcao data
 function obterDataAtual() {
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque o mês inicia do zero
    let ano = dataAtual.getFullYear();
    // Formata a data como "dd/mm/aaaa"
    let dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
    return dataFormatada;
}
//--------------------------------------------------------------------------------------------
function obterHoraAtual() {
  const data = new Date();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');
  return `${hora}:${minuto}:${segundo}`;
}
//--------------------------------------------------------------------------------------------
function calcularDiferencaHoras(hora1, hora2) {
  const [h1, m1, s1] = hora1.split(':').map(Number);
  const [h2, m2, s2] = hora2.split(':').map(Number);
  
  const diferencaSegundos = (h2 * 3600 + m2 * 60 + s2) - (h1 * 3600 + m1 * 60 + s1);
  
  const horas = Math.floor(diferencaSegundos / 3600);
  const minutos = Math.floor((diferencaSegundos % 3600) / 60);
  const segundos = diferencaSegundos % 60;
  
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
