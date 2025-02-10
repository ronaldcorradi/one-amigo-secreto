var lista = document.getElementById('listaAmigos');
var nomes = [];
var resultado = document.getElementById('resultado');

function adicionarAmigo(){    
    let nome = document.getElementById("amigo").value;
    if(nome.length <= 0){
        alert('Informe um nome válido');
    }else{
        nomes.push(nome); 
        document.getElementById('amigo').value=''; 
        var elemento = document.createElement('li');
        elemento.innerText = nome;
        lista.appendChild(elemento);    
    }
}

function sortearAmigo(){
    if(nomes.length == 0 ){
        alert('A lista de amigos está vazia');
    }else{        
        let nomeAleatorio = Math.floor(Math.random() * nomes.length);
        var elemento = document.createElement('li');
        elemento.innerText = nomes[nomeAleatorio];
        resultado.appendChild(elemento);        
    }
}

function reset(){   
  
    for(var filho in lista.childNodes){
        lista.remove(document.getElementsByTagName('li'));        
    }
    nomes=[];
    resultado=[];

    /*
    for(var filho in resultado.childNodes){
        resultado.remove(document.getElementsByTagName('li'));        
    }
    */

}