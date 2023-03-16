(calculate = (operator) => {
    const firstNumber = parseFloat(document.querySelector("#firstNumber").value);
    const SecondNumber = parseFloat(document.querySelector("#SecondNumber").value);
    const resultmsg = document.querySelector("#resultmsg");
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + SecondNumber;
            break;
        case "-":
            result = firstNumber - SecondNumber;
            break;
        case "*":
            result = firstNumber * SecondNumber;
            break;
        case "/":
            result = firstNumber / SecondNumber;
            break;
        default:
            alert("Invalid");
            return
    }
    resultmsg.innerHTML = "Result = " + result;
    resultmsg.style.display= "block";
})();