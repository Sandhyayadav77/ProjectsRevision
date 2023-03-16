const vowelCount = () => {
    const myText = document.getElementById("myText").value;
    let result = document.getElementById("result");
    const vowels = "aeiouAEIOU"
    let count = 0; //number of vowel count
    for (let i = 0; i < myText.length; i++) {
        if (vowels.includes(myText[i])) {
            count++;
        }
    }
    document.getElementById("showResult").innerHTML = `Numbers of vowels is ${count}`;
}

result.addEventListener("click", vowelCount);