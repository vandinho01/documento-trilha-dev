function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var anoNasc = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(anoNasc.value > ano || anoNasc.value.length == 0){
        alert('Verifique os dados e envie novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - anoNasc.value;
        var genero = ''
        var img = document.createElement('img');
        img.style.width = '100px'
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-menino.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-menino.jpg')

            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso.jpg') 
            }
        
        } else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-menina.jpg')
            } else if( idade < 21 ){
                img.setAttribute('src', 'jovem-menina.jpg')
                //Jovem
            } else if( idade < 50 ){
                img.setAttribute('src', 'mulher-adulta.jpg')
                //Adulta
            } else{
                //Idosa
                img.setAttribute('src', 'idosa.jpg')
            }

        }
        res.style.textAlign = 'Center';
        res.innerHTML = `Detectamos genero ${genero} com ${idade} anos`;
        res.appendChild(img);

    }
}