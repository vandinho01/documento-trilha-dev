var number = document.getElementById('fnum');
var lista = document.getElementById('flista');
var res = document.getElementById('res')
let valores = [];

/*
function adicionar(){
    if(number.value.length == 0){
        alert('Campo não preenchido corretamente, tente novamente')
    } else if(number.value > 1 && number.value <=100){
        let item = document.createElement('option');
            item.text = `Valor ${number.value} Adicionado`;
            item.value = ''
            tab.appendChild(item);
    }
    else{ 
            alert('Valor inválido')  
    }
}

function finalizar(){
    var x = tab.length;
    res.innerHTML  = `Ao total temos ${x} números cadastrados` 
}
    */
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function isLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){

    } else{

    }
}

