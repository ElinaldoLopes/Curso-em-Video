function verificar() {
    //definindo variaveis iniciais
    var agora = new Date()
    var ano = agora.getFullYear()
    var nasc = document.getElementById("nasc")

    //validando idade
    if (ano < Number(nasc.value) || nasc.value.length == 0) {
        alert("[ERRO] ano de nascimento invalido")
    } else {
        //mais variaveis
        var sexo = document.getElementsByName("sexo")
        var idade = ano - Number(nasc.value)
        var gen = ''
        var res = document.getElementById("res")

        //indentificando genero
        if (sexo[0].checked) {
            gen = "Homem"
        } else if (sexo[1].checked) {
            gen = "Mulher"
        }

        //respondendo usuario
        if (idade < 5) {
            res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos.</p> 
            <img class="imagem" src="bebe.jpg" alt="bebe">`
        } else if (idade < 13) {
            res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos.</p> 
            <img class="imagem" src="${gen}-crianca.jpg" alt="${gen}-crianca">`
        } else if (idade < 20) {
            res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos.</p> 
            <img class="imagem" src="${gen}-jovem.jpg" alt="${gen}-jovem">`
        } else if (idade < 50) {
            res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos.</p> 
            <img class="imagem" src="${gen}-adulto.jpg" alt="${gen}-adulto">`
        } else if (idade >= 50) {
            res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos.</p> 
            <img class="imagem" src="${gen}-velho.jpg" alt="${gen}-velho">`
        }
    }
}