const calc = document.querySelector('.calc-container'); 
const buttons = document.querySelectorAll('.item');
const display = document.querySelector('#display');
const clear = document.querySelector('#clearAll');


/*
calc.addEventListener('click', (event) => {
    if (e.target.matches('.item')) {
      const value = event.target.innerText;
      display.innerText += value;
    }
   })
*/

let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-', '+', 'X', '/'];

buttons.forEach(item => {
  item.addEventListener('click', (e) => {
     const hang = e.target.value;
     display.value += hang;
     if (digit.includes(hang)) {
      if (b === '' && sign === '') {
          a += hang;
          display.value = a;
        }
        else if (a!=='' && b!=='' && finish) {

        }
        else {
          b += hang;
          display.value = b;
        }
        console.log(a, b, sign);
     }


     if(action.includes(hang)) {
      sign = hang;
      console.log(a, b, sign);
      display.value = sign;
     }

     if(hang === '=') {
      switch (sign) {
          case '+':
            a = (+a) + (+b);
            break;
          case '-':
            a = a - b;
            break; 
          case 'X':
            a = a * b;
            break;
          case '/':
            a = a / b;
            break;        
      }
      finish = true;
      display.value = a;
      console.log(a, b, sign);
   }

     })
     
 });

clear.addEventListener('click', () => {
  display.value = '';
})

