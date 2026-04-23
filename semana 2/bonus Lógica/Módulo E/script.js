function calcular(){
    var num = document.getElementById('number');
    var tab = document.getElementById('seltab');

    if(num.value.length == 0){
        alert('Insira um numero valido')
    } else {
        let c = 1;
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option');
            item.text = `${num.value} x ${c} = ${num.value*c}`
            item.value = ``
            tab.appendChild(item)
            c++
        }
    }

}