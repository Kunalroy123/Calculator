let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".btn");
let screenValue = "";


for(let item of buttons) {
    item.addEventListener("click", (e) => {
       let buttonText = e.target.innerText;
        if(buttonText == "X"){
            buttonText = "*";     
            screenValue += buttonText;
            screen.value = screenValue;
        } 
        else if (buttonText == "AC"){
            screenValue = "";
            screen.value = screenValue;  
        }
        else if (buttonText == "C"){
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else if (buttonText == "="){
            screen.value = eval(screenValue); 
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        };   
    })
};
  