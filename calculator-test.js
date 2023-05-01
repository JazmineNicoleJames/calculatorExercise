describe('calculateMonthlyPayment', function(){
it('should calculate the monthly rate correctly', function () {
  const calculation = {
    amount: 20000,
    years: 5,
    rate: 5,
  }
  expect(calculateMonthlyPayment(calculation)).toBe('377.42');
})

it("should return a result with 2 decimal places", function() {
  const calculation = {
    amount: 20000,
    years: 5,
    rate: 5,
  }
  expect(calculateMonthlyPayment(calculation)).toContain(4);
})
})
