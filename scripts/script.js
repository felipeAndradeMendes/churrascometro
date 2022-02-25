/* REGRAS
Carne => 400g por pessoa | Duração > 6h => 650g 
Cerveja => 1200ml por adulto | Duração > 6h => 2000ml 
Refrigerante/Agua => 1000ml por pessoa | Duração > 6h => 1500ml
Crianças valem por 0,5 para carn e refrigerante/agua*/

let adultos = document.querySelector("#adultos")
let criancas = document.querySelector("#criancas")
let duracao = document.querySelector("#duracao")
let btn = document.querySelector("#btn")

btn.onclick = function(){
    let numAdultos = parseInt(adultos.value)
    let numCriancas = parseInt(criancas.value/2)
    let tempoDuracao = parseInt(duracao.value)

    if(adultos.value.trim() === "" || criancas.value.trim() === "" || duracao.value.trim() === ""){
        p01.innerHTML = "Preencha todos os dados antes de calcular"

    }else{

        function calcCarne(n){
            let carne = numAdultos + numCriancas
            return carne * n        
        }    
        function calcCerveja(n){
            return numAdultos * n
        }
        function calcRefri(n){
            return (numAdultos + numCriancas) * n
        }

        console.log(`Total de carne = ${calcCarne()}`)
        console.log(`Total de cerveja = ${calcCerveja()}`)
        console.log(`Total de refri/agua = ${calcRefri()}`)

        let p01 = document.querySelector("#p01")
        let p02 = document.querySelector("#p02")
        let p03 = document.querySelector("#p03")

        if(tempoDuracao <= 6){
            p01.innerHTML = `Total de Carne a comprar = ${calcCarne(400)/1000} kg`
            p02.innerHTML = `Total de Cerveja a comprar = ${calcCerveja(1200)/1000} litros ou ${Math.floor(calcCerveja(1200)/350)} latinhas`
            p03.innerHTML = `Total de Bebidas extras a comprar = ${calcRefri(1000)/1000} litros ou ${Math.floor(calcRefri(1000)/350)} latinhas`
        }else{
            p01.innerHTML = `Total de Carne a comprar = ${calcCarne(650)/1000} kg`
            p02.innerHTML = `Total de Cerveja a comprar = ${calcCerveja(2000)/1000} litros ou ${Math.floor(calcCerveja(2000)/350)} latinhas`
            p03.innerHTML = `Total de Bebidas extras a comprar = ${calcRefri(1500)/1000} litros ou ${Math.floor(calcRefri(1500)/350)} latinhas`
        }
        adultos.value = ""
        criancas.value = ""
        duracao.value = ""
    }
}
