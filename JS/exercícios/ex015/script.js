function contar() {
    var In = document.getElementById("in")
    var fi = window.document.getElementById("fi")
    var pa = document.getElementById("pa")
    var res = window.document.getElementById("res")


    if (In.value.length == 0 || fi.value.length == 0 || pa.value.length == 0) {
        res.innerHTML = "impossivel contar..."


    } else if (Number(pa.value) == 0) {
        alert("Passo invalido cosiderando passo 1")
        var ni = Number(In.value)
        res.innerHTML = "contando: <br>"
        for (ni ; ni <= Number(fi.value) ; ni += 1) {
        res.insertAdjacentText('beforeend', ` ${ni} ➡️`)
        }
        res.insertAdjacentText('beforeend', `🚩`)


    } else {    
        var ni = Number(In.value)
        res.innerHTML = "contando: <br>"
        for (ni ; ni <= Number(fi.value) ; ni += Number(pa.value)) {
        res.insertAdjacentText('beforeend', ` ${ni} ➡️`)
        }
        res.insertAdjacentText('beforeend', `🚩`)
    }
    
    
}