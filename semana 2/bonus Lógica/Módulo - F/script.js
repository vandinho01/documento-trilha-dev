let num = [5, 8, 4]
num[3] = 6;
num.push(7) //inserindo numero no array via push
num.length //tamanho do array
// num.sort() // ordem crescente do array
/*
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
 */
for(let pos in num){ // Para cada posição em num 
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

console.log(num.indexOf(7))

