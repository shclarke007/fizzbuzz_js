let submit_button = document.getElementById('submit_button');

submit_button.addEventListener('click', ()=> {
  let game = new FizzBuzz;
  let fizz_output = document.getElementById('fizz_output');
  let num = document.getElementById('user_input').value;
  fizz_output.textContent = game.play(num);
});
