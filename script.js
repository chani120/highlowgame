let secretNumber; 
let resultDisplay = document.getElementById('result');
function randomNumber(){
    secretNumber=Math.floor(Math.random()*70) + 2019;
}
randomNumber();

function checkValue(){
    let guess = parseInt(document.getElementById("number").value);

    if(!(guess>2018)&&!(guess<2090)){
        resultDisplay.innerText="Please enter a year";
        resultDisplay.style.color = "Black";
        resultDisplay.style.width = "450px";
        resultDisplay.style.marginTop = "20px";
    }
    else if(guess>2089||guess<2019){
        resultDisplay.innerText="The year must be between 2019 and 2089";
        resultDisplay.style.color = "Black";
        resultDisplay.style.width = "450px";
        resultDisplay.style.marginTop = "20px";
    }
    else if(guess>secretNumber) {
        resultDisplay.innerText="Too High";
        resultDisplay.style.color = "Black";
        resultDisplay.style.marginTop = "20px";
    }
    else if(guess<secretNumber) {
        resultDisplay.innerText="Too Low";
        resultDisplay.style.color = "Black";
        resultDisplay.style.marginTop = "20px";
    }
    else {
        resultDisplay.innerText="YASSSSSSSSSSS! This Will Be YOUR Year";
        resultDisplay.style.color = "Black";
        resultDisplay.style.marginTop = "20px";
        resultDisplay.style.width = "400px";
        
    }
}
