const screenContent = window.document.getElementById("screenContent");
const screenOperation = window.document.getElementById("screenOperation");
let operation = false
let operationValor = ""
let vir = false
let valor1 = 0
let valor2 = 0

function insert(number){
    if(isVir()){return}
    let valor = screenContent.innerHTML;
    screenContent.innerHTML = valor + number;
}


function insertOp(op){
    if(!isOperation()){
        operation = true
        screenOperation.innerHTML = op
        operationValor = op
        valor1 = screenContent.innerHTML
        screenContent.innerHTML = ""    
    }
    valor2 = screenContent.innerHTML
    screenContent.innerHTML = "" 

}

function clean(){
    screenContent.innerText = ""
    screenOperation.innerHTML = ""
    operation = false
}

function result(){
    valor2 = screenContent.innerHTML
    screenOperation.innerHTML = "="
    operation = false
    switch(operationValor){
        case "+":
            screenContent.innerHTML = `${Number(valor1) + Number(valor2)}`
            break
        case "-":
            screenContent.innerHTML = `${Number(valor1) - Number(valor2)}`
            break
        case "X":
            screenContent.innerHTML = `${Number(valor1) * Number(valor2)}`
            break
        case "/":
            screenContent.innerHTML = `${Number(valor1) / Number(valor2)}`
            break
        default:
            screenContent.innerHTML = "3RR0R"
    }

}

function del(){
    let backNumber = screenContent.innerHTML
    screenContent.innerHTML = backNumber.substring(0, backNumber.length -1)
}

function isVir(){
    if(vir){
        return true
    }
    return false
}

function isOperation(){
    if(operation){
        return true
    }
    return false
}