const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('value'));
//const equalto = document.getElementById('equalto')


buttons.forEach((button) =>{
    button.addEventListener("click", (cal)=>{
     // cal.target
      console.log(cal.target.value)
      display.value =display.value + cal.target.value
    })
    
})
function equalto(){
    const dis = eval(display.value)
    display.value = dis

}

function AC(){
    display.value = ''
}

function DELO(){
    
const del = display.value.slice(0,-1)
display.value = del
//console.log(del)
    
}
