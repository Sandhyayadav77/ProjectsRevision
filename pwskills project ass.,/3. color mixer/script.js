(mixColor = () => {
    const color1 = document.getElementById("Color1").value.toLowerCase();
    const color2 = document.getElementById("Color2").value.toLowerCase();
    let result = document.getElementById('result');
    let resultColorValue;
   
    switch (`${color1}-${color2}`) {
        case "red-blue":
        case "blue-red":
            resultColorValue = "Purple";
            result.style.color = resultColorValue;
            break;
        case "red-yellow":
        case "yellow-red":
            resultColorValue = "Orange";
            result.style.color = resultColorValue;

            break;
        case "blue-yellow":
        case "yellow-blue":
            resultColorValue = "Green";
            result.style.color = resultColorValue;

            break;
        default:
            resultColorValue = "Enter Color Name";
            break;
    }
    result.innerHTML = resultColorValue;

})();