//VARIABLES

let a = document.getElementById("aInp");
let b = document.getElementById("bInp");
let h = document.getElementById("hInp");
let button = document.getElementById("btn");
let outputEL = document.getElementById("output");
let areaDropDown = document.getElementById("areaUnit");

//EVENT LISTENER
button.addEventListener("click", calculate);

//EVENT FUNCTION
function calculate() {
  //INPUT
  let num1 = +a.value;
  let num2 = +b.value;
  let num3 = +h.value;

  //READ UNIT
  let unit = areaDropDown.value;

  //PROCESS
  let area = (((num1 + num2) / 2) * num3).toFixed(2);
  let output = area + unit;

  //OUTPUT
  outputEL.innerHTML = output + `<img width="50px" height="50px" src="Images/checkmark.png">`;

  //CLEAR INPUTS
  a.value = " ";
  b.value = " ";
  h.value = " ";
}
