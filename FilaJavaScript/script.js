//criando instancia da fila a partir da classe
// let= define
//metodo de classe não tem "function"
//imput = caixa de texto
//id = "novoElemento " === caixa de texto

let minhaFila = new Fila(5);

function addFila(){
    const novo = document.getElementById("novoElemento")
if(minhaFila.enqueue(novo.value) === true){
    alert("Dado Inserido")
    novo.value="";
    novo.focus(); // volta o foco para o obj
    console.log(minhaFila);
}
else
    alert("Fila cheia!");
}//fim addFila