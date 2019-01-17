
let fizz_output = document.getElementById('fizz_output');
let submit_button = document.getElementById('submit_button');
let info = document.getElementById('info');

submit_button.addEventListener('click', function() {
  let num = document.getElementById('user_input').value;
  if(num <= 0){
    info.innerText = "You need to enter a number greater than zero";
  } else {
      fizz_output.textContent = fizzbuzz(num);
  }
});


function fizzbuzz(number) {
  for(let i = 0; i <= number; i++) {
    if (number == 0){
      return 'Enter a number greater than zero'
    }
    if (number % 3 == 0 && number % 5 == 0) {
      return 'fizzbuzz';
    }
    else if (number % 3 == 0) {
      return 'fizz';
    }
    else if (number % 5 == 0) {
      return 'buzz';
    }
    else
    return number;
  }
}
