const display =document.getElementById("display");
const buttons = document.querySelectorAll(".btn,.btn-operator,.btn-equal");
let input ="";
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const value = button.textContent;
        if (value==="C"){
            input="";
            display.textContent="";
        }
        else if(value === "="){
            input =input.replace(/×/g,"*").replace(/÷/g,"/");
            display.textContent=eval(input);
            input =display.textContent;
        }
        else{
            input+=value;
            display.textContent=input;
        }
    });
});