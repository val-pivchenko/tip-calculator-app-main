const tipBtns = document.querySelectorAll(".tip-btn")

const customTip = document.querySelector(".custom")

const bill = document.querySelector(".bill")

const people = document.querySelector(".people")

const errorBill = document.querySelector(".zero-bill")

const errorPpl = document.querySelector(".zero-people")

const reset = document.querySelector(".reset");

const tipMoneyResult = document.querySelector(".tip-money-res");

const totalMoneyResult = document.querySelector(".total-money-res");


// BILL CODE
let billValue = 0;

bill.addEventListener('input', billFunc);

function billFunc() {
    billValue = parseFloat(bill.value);
    if (billValue <= 0 || !billValue === "") {
        errorBill.classList.add("show");
        bill.classList.add("outline");
    } else {
        errorBill.classList.remove("show");
        bill.classList.remove("outline");
    }
    calculate();
}



// PEOPLE CODE

let peopleValue = 0;

people.addEventListener('input', peopleFunc);

function peopleFunc() {
    peopleValue = parseFloat(people.value);
    if (peopleValue <= 0 || !peopleValue === "") {
        errorPpl.classList.add("show");
        people.classList.add("outline");
    } else {
        errorPpl.classList.remove("show");
        people.classList.remove("outline");
    }
    calculate();
}

// TIPS CODE

let tipValue = 0;

tipBtns.forEach(function (val) {
    val.addEventListener("click", tipFunc);
});

function tipFunc(event) {
    tipBtns.forEach(function (val) {
        customTip.value = ""
        val.classList.remove("focus");
        if (event.target.innerText == val.innerText) {
            val.classList.add("focus");
            tipValue = parseFloat(val.innerText) / 100;
        }
    })
    calculate();
}

customTip.addEventListener("input", customTipFunc);

function customTipFunc() {
    tipValue = parseFloat(customTip.value) / 100;
    tipBtns.forEach(function (val) {
        val.classList.remove("focus");
    });
    calculate();
}

// CALCULATOR CODE

function calculate() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount * peopleValue) / peopleValue;
        tipMoneyResult.innerHTML = "$" + tipAmount.toFixed(2);
        totalMoneyResult.innerHTML = "$" + total.toFixed(2);

    }
}


// RESET CODE

reset.addEventListener("click", resetAll);

function resetAll() {
    bill.value = "";
    people.value = "";
    customTip.value = "";
    for (let btn of tipBtns) {
        btn.classList.remove("focus");
    }
    tipMoneyResult.innerHTML = "$0.00";
    totalMoneyResult.innerHTML = "$0.00";
    errorBill.classList.remove("show");
    bill.classList.remove("outline");
    errorPpl.classList.remove("show");
    people.classList.remove("outline");
}

