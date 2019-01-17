class FizzBuzz {

  play(number){
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
}
