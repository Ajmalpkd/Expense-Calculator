const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const btn = document.querySelector(".btn")
const output = document.querySelector(".result")
const resetbtn = document.querySelector(".reset")

function calculate(){
    let people  =Number (input1.value)
    let expense = Number (input2.value)
    let Division = expense / people
    output.textContent = `Rs: ${Division.toFixed(2)} For One Person`
}
function reset(){
    input1.value = ""
    input2.value = ""
    output.textContent = ""
}
btn.addEventListener("click", calculate)
resetbtn.addEventListener("click",reset)