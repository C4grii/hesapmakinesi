const sonuc = document.querySelector(".sonuc");

const butonlar= document.querySelectorAll("button");

const specialChars = ["%", "*", "/", "-", "+"];

let output = "";

const calculate = (btnValue) =>{

sonuc.focus();    

if(btnValue === "=" && output !== ""){

output = eval(output.replace("%", "/100"));    

}

else if(btnValue === "CE"){

output = "";

}

else if(btnValue === "C"){

output = output.toString().slice(0, -1);    

}

else{

if(output === "" && specialChars.includes(btnValue)) return;
 
output += btnValue;

}

sonuc.value = output;

}

butonlar.forEach((button) =>{

button.addEventListener("click", (e) => calculate(e.target.dataset.value));

});