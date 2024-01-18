var agora = new Date()
var hora =  agora.getHours()
var minutos = agora.getMinutes()
console.log(`agora são exatamente ${hora} e ${minutos}`)
if (hora < 12 && hora > 5) {
    console.log("bom dia!")
} else if (hora < 18 && hora >= 12) {
    console.log("boa tarde!")
} else if (hora >= 18 && hora < 24 ) {
    console.log("boa noite")
} else if (hora >= 0 && hora <= 5) {
    console.log("boa noite, shhh")
} else {
    console.log(`${hora} não é uma hora valida`)

}