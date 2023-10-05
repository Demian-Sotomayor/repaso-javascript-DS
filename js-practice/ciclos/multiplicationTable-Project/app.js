
const num1Input = document.querySelector('.num1');
const num2Input = document.querySelector('.num2');  
const totalMultiply = document.querySelector('.totalMultiply');
const calculateBtn = document.querySelector('.calculate');

function generateMultiplicationTable(num) {
  let output = `<h3>Tabla del ${num}</h3>`;
  
  for (let i = 1; i <= 10; i++) {
    output += `${num} x ${i} = ${num * i}<br>`;
  }
  
  return output;
}

function calculateFactorial(num) {
  let factorial = 1;
  
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  
  return factorial; 
}

calculateBtn.addEventListener('click', () => {

  const number1 = parseInt(num1Input.value);
  const number2 = parseInt(num2Input.value);

  totalMultiply.innerHTML = ''; 

  totalMultiply.innerHTML += generateMultiplicationTable(number1);
  
  totalMultiply.innerHTML += `<br><br>`;
   
  totalMultiply.innerHTML += `Factorial de ${number2}: ${calculateFactorial(number2)}`;

});