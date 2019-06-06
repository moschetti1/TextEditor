
var btn = document.getElementById('toggleModeBtn')
var showSrc = false;

//Hacemos el iframe editable
entradaBody.document.designMode = 'On';

//Escucha cada cambio en el iframe
entradaBody.addEventListener('keyup', log)
function log(){
    let count = document.getElementById('count')
    let time = document.getElementById('time')
    count.textContent = entradaBody.document.getElementsByTagName('body')[0].textContent.length
    let minutes = Math.floor(entradaBody.document.getElementsByTagName('body')[0].textContent.split(' ').length / 200 )
    let segundos = (entradaBody.document.getElementsByTagName('body')[0].textContent.split(' ').length / 200) % 1
    let secs = parseInt((segundos * 0.60) * 100)
    time.textContent = `${minutes} minutos y ${secs} segundos`
    //para hacerlo mas general, sacar los segundos, y poner un minuto de una.
    //if(minutes === 0) minutes = 1
}

function cmd(cmde){
    entradaBody.document.execCommand(cmde, false, null)
}

function execCmdArgs(cmd, arg){
    entradaBody.document.execCommand(cmd, false, arg)
}

function toggleSrc() {
    if(showSrc){
        entradaBody.document.getElementsByTagName('body')[0].innerHTML = entradaBody.document.getElementsByTagName('body')[0].textContent
        showSrc = false
    } else {
        entradaBody.document.getElementsByTagName('body')[0].textContent = entradaBody.document.getElementsByTagName('body')[0].innerHTML
        showSrc = true
    }
}


function formSubmit(e){
    e.preventDefault()
    body.value = entradaBody.document.getElementsByTagName('body')[0].innerHTML
    var minutes = Math.floor(entradaBody.document.getElementsByTagName('body')[0].textContent.split(' ').length / 200 )
    if(minutes === 0) minutes = 1
    time.value = minutes
    entradaForm.submit()

}


