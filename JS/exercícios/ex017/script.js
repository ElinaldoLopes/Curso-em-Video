var nums = []
var ret = document.getElementById('ret')

function maior(num = [0]) {
    for (i in num) {
        c = num[i]
        if (i == 0) {
            var ma = c
        } else if (c > ma) {
            ma = c
        }
    }
    return ma
}

function menor(num = [0]) {
    for (i in num) {
        c = num[i]
        if (i == 0) {
            var me = c
        } else if (c < me) {
            me = c
        }
    }
    return me
}

function soma(n = [0]) { 
    var s = 0
    for (i in n) {
        s += n[i]
    }
    return s
}

function Add() {
    var txtnum = document.getElementById("num")
    var num = Number(txtnum.value)
    
    //validação de número
    if (num < 1 || num >100 || nums.includes(num) == true) {
        alert("[ERRO!] Núemro invalído ou já presente na lista, tente novamente")
    }    else{
        
        //limpando o ret
        ret.innerHTML = ''

        //pegando as variaveis
        var lista = document.getElementById("nums")
        var opt = document.createElement("option")

        //limpado o select
        if (nums.length < 1) {
            lista.innerHTML = ''
        }

        //adicionando o número na lista
        nums.push(num)

        //adicionado o número no select
        opt.text = `Valor ${num} adicionado`
        opt.value = `Tab${nums.length}`
        lista.setAttribute('size', nums.length)
        lista.appendChild(opt)
    }

    //apagar e selecionar o input
    txtnum.value = ''
    txtnum.focus()
}

function fin() {

    //limpando o ret
    ret.innerHTML = ''

    //validando o fin
    if (nums.length == 0) {
        alert('adicione valores antes de finalizar!')
    } else {

       //criando os praragrafos
    var tam = document.createElement('p')
    var mai = document.createElement('p')
    var men = document.createElement('p')
    var som = document.createElement('p')
    var med = document.createElement('p')

    //colocando o texto neles
    tam.textContent = `Ao todo, temos ${nums.length} números cadastrados`
    mai.textContent = `O maior valor informado foi ${maior(nums)}`
    men.textContent = `O menor valor informado foi ${menor(nums)}`
    som.textContent = `Somando todos os valores, temos ${soma(nums)}`
    med.textContent = `A média dos valores digítados é ${soma(nums)/nums.length}`

    //inserindo eles no html
    ret.appendChild(tam)
    ret.appendChild(mai)
    ret.appendChild(men)
    ret.appendChild(som)
    ret.appendChild(med) 
    }
}