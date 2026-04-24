var num = document.getElementById('fnum');
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

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

    function finalizar(){
    if (valores.length == 0){
        alert('Adicione um valor antes de finalizar.')
    } else{
        let tot = valores.length
        let maior =  valores[0];
        let menor =  valores[0];
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        } 

        media = soma / tot


        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p> A média é ${media}. </p>`



    }
    }
