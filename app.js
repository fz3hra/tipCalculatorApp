const billClass = document.getElementById("bill")
const tipButtonInput = document.querySelectorAll(".tipArea")
const customDivInput = document.querySelector(".custom")
tipAmountSpan = document.querySelector(".tipAmount")
totalAmountSpan = document.querySelector(".totalAmount")
peopleInput = document.getElementById("people")
resetInput = document.querySelector(".reset")

rst();
let people=1, amount = 0, tip = 0;


console.log(billClass.value)
console.log(customDivInput.value)
console.log(peopleInput.value)



// billClass.addEventListener("beforeinput", ()=>{
//     amount = Number(billClass.value);
//     if(amount <= 0 && amount != "")
//     {
//         // error message
//     }
//     else 
//     {
//         calculation();
//     }
// })

// billClass.addEventListener("input", calculation)


// bill input

billClass.addEventListener("input", ()=>{
    amount = Number(billClass.value);
    calculation();
    // console.log("billClass.value")
})

//button input
tipButtonInput.forEach(tipButton =>{
    tipButton.addEventListener("click", ()=>{
        tip = tipButton.value;
    calculation();
    console.log(tipButton.value)
})
})


// custom input
customDivInput.addEventListener("input", ()=>{
    tip = customDivInput.value;
    calculation();
})

//people input
peopleInput.addEventListener("input", ()=>{
    people = peopleInput.value;
    calculation();
})


function calculation()
{
    if(amount>=0 && people >=1)
    {
        let tipamt = ((tip/100)*amount);
        let totAmount = amount + tipamt;

        tipAmountSpan.innerHTML = `${((tipamt)/(people)).toFixed(2)}`;
        totalAmountSpan.innerHTML = `${((totAmount)/(people)).toFixed(2)}`;
        console.log(tipAmountSpan.innerHTML)
        console.log(totalAmountSpan.innerHTML)
    }
}

// resetting
resetInput.addEventListener("click", rst);
//reset button
function rst()
{
    customDivInput.value = "";
    peopleInput.value = "1";
    billClass.value = "";
    tipAmountSpan.innerHTML = "$0.00";
    totalAmountSpan.innerHTML = "$0.00";
}