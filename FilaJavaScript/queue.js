class Fila{
     constructor(maxSize){
        this.maximo = maxSize;
        this.itens = [];
     }
//-------------------------------------------
/*enqueue = enfileirar
dequeue = desenfileirar
length = retorna quantos valores eu tenho
//let = variavel que pode ser alterada dentro das classes
//const = variavel que não pode ser alterada dentro da classe
toString = mostra fila 
*/

     enqueue(elemento){
        if(this.itens.length === this.maximo)
            return false;
            //this.fim++;
            //this.itens[this.fim] = elemento;
        this.itens.push(elemento);// insere no final
        return true;    
     }
     dequeue(){
        let valor = this.itens.shift();
        return valor;
     }
     isEmpty(){
        if(this.itens.length === 0 )
            return true;

         else
            return false;

       //  return this.itens.length

     }
     toStrin(){
        return this.itens.toString();
     }
}// fim classe