const local_temporizador = document.getElementById("Temporizador")
const colocar_segundos = document.getElementById("Segundos")
const colocar_minutos = document.getElementById("Minutos")
const colocar_horas = document.getElementById("Horas")
const tempos_salvos = document.getElementById("Tempos")

let segundos = 0
let minutos = 0
let horas = 0

colocar_minutos.innerText = "00"
colocar_horas.innerText = "00"
colocar_segundos.innerText = "00"


function contar_tempo(){
    segundos += 1
    if(segundos < 10){
        colocar_segundos.innerText = "0" + segundos
    }else{
        colocar_segundos.innerText = segundos
    }
    if(segundos >= 59){
        segundos = 0
        minutos++
        if(minutos < 10){
            colocar_minutos.innerText = "0" + minutos
        }else{
            colocar_minutos.innerText = minutos
        }
        if(minutos >= 59){
            minutos = 0
            horas++
            if(horas < 10){
                colocar_horas.innerText = "0" + horas
            }else{
                colocar_horas.innerText = horas
            }
            if(minutos >= 59){
                resetar()
            }
        } 
    }
}

function comecar(){
    iniciar_tempo = setInterval(contar_tempo,1)
}

let i = 0
let element_count = 1

function salvar(){
    if(i < 7){
        let horario = document.createElement("div")
        horario.style.borderTop = "1px solid black"
        horario.style.display = "flex"
        horario.style.justifyContent = "center"
        horario.style.alignItems = "center"
        horario.style.width = "250px"
        horario.style.height = "75px"

    let salvar_horas = document.createElement("div")
        salvar_horas.style.width = "50px"
        salvar_horas.style.height = "50px"
        salvar_horas.style.marginTop = "5px"
        if(horas < 10){
            salvar_horas.innerText = "0" + horas
        }else{
            salvar_horas.innerText = horas
        }
        salvar_horas.style.display = "grid"
        salvar_horas.style.placeContent = "center"
        horario.appendChild(salvar_horas)

    let salvar_minutos = document.createElement("div")
        salvar_minutos.style.width = "50px"
        salvar_minutos.style.height = "50px"
        salvar_minutos.style.marginTop = "5px"
        if(minutos < 10){
            salvar_minutos.innerText = "0" + minutos
        }else{
            salvar_minutos.innerText = minutos
        }
        salvar_minutos.style.display = "grid"
        salvar_minutos.style.placeContent = "center"
        horario.appendChild(salvar_minutos)

    let salvar_segundos = document.createElement("div")
        salvar_segundos.style.width = "50px"
        salvar_segundos.style.height = "50px"
        salvar_segundos.style.marginTop = "5px"
        if(segundos < 10){
            salvar_segundos.innerText = "0" + segundos
        }else{
            salvar_segundos.innerText = segundos
        }
        salvar_segundos.style.display = "grid"
        salvar_segundos.style.placeContent = "center"
        horario.appendChild(salvar_segundos)

        tempos_salvos.appendChild(horario)
        i++;
        element_count++
    }

    if(i == 7){
        tempos_salvos.children[element_count - i].remove()
        i--
        element_count--
    }
}

function resetar(){
    segundos = 0
    minutos = 0
    horas = 0
    colocar_minutos.innerText = "00"
    colocar_horas.innerText = "00"
    colocar_segundos.innerText = "00"

}
