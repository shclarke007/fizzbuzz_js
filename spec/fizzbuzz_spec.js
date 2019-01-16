describe("FizzBuzz", function() {
  it("returns fizzbuzz if number is divisible by 3 & 5", function() {
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
  });

  it('returns fizz if number is divisible by 3', function() {
    expect(fizzbuzz(6)).toEqual('fizz');
  });

});
