let num1 = 0;
let num2 = 0;
let operator = "";

// Addends are numbers being added together
function add(addend1, addend2)
{
    return addend1 + addend2;
}

// Minuend is the number being subtracted from, 
// subtrahend is the number being subtracted
function subtract(minuend, subtrahend)
{
    return minuend - subtrahend;
}

// Multiplicand is number being multiplied, 
// multiplier shows how many times it is multiplied
function multiply(multiplicand, multiplier)
{
    return multiplicand * multiplier;
}

// Dividend is the number being divided, 
// divisor is number you are dividing by
function divide(dividend, divisor)
{
    return dividend / divisor;
}

function operate(num1, num2, operator)
{
    if(operator=="+")
    {
        console.log(add(num1, num2));

    } else if(operator=="-")
    {
        console.log(subtract(num1, num2));

    } else if(operator=="*")
    {
        console.log(multiply(num1, num2));

    } else if(operator=="/")
    {
        console.log(divide(num1, num2));

    } else
    {
        alert("Please select a valid operator");
    }
}
const display = document.querySelector(".calc-display");
const clear = document.getElementById("clearButton");

// Clears calc display text
clear.addEventListener("click", () => {
    display.textContent = "";
});