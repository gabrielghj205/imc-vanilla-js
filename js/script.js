/**
 * configura a data limite do nascimento
 * @author gabriel henrique <gabrielghj205@gmail.com>
 * @2026-02-24
 * *version 1.0.0
 * @description esta funçao busca o campo data pelo id e aplica o atributo max com o dia atual
 */
function configuraDataLimite(){
    const limite = new Date().toISOString().split("T")[0]
    const inputNasc = document.getElementById('nascimento')
    if(inputNasc){
        inputNasc.setAttribute('max', limite)
    }
    alert(limite)
}

//inicializaçao
document.addEventListener('DOMContentLoaded', configuraDataLimite)