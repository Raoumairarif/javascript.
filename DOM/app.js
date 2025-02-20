const display = document.querySelector('#display')

function umair(NewValue){
    const preValue = display.innerHTML
    display.innerHTML = preValue + NewValue
}
function performCalculation(){
    const values = display.innerHTML
    const result = eval(values)
    display.innerHTML = result
}

function clearAll(){
    const defaultValue = ''
    display.innerHTML = defaultValue
}
