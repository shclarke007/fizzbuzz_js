describe("FizzBuzz", function() {
  it("returns fizzbuzz if number is divisible by 3 & 5", function() {
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
  });

  it('returns fizz if number is divisible by 3', function() {
    expect(fizzbuzz(6)).toEqual('fizz');
  });

  it('returns buzz if number is divisible by 5', function() {
    expect(fizzbuzz(20)).toEqual('buzz');
  });

  it('returns the number if not divisible by neither 3 nor 5', function() {
    expect(fizzbuzz(1)).toEqual(1);
  });
});
