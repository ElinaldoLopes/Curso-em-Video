function gerar() {
    let num = window.document.getElementById("txtn")
    let tab = document.getElementById('seltab')
    
    //validaçao de número
    if (num.value.length == 0) {
        alert("digite um número")

    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        tab.setAttribute('size', '10')
        //repetição da tabuada
        for(let c = 1; c <= 10; c++) {
            let res = document.createElement("option")
            res.text = `${n} X ${c} = ${n*c}`
            res.value = `tab${c}`
            tab.appendChild(res)
        }
    }


}