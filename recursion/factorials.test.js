function factorial(n) {
  if (n < 2) return 1;

  return n * factorial(n - 1);
}

test("factorials", () => {
  expect(factorial(1)).toEqual(1);
  expect(factorial(3)).toEqual(6);
});

// 1! 1
// 2! 2
// 3! 1 * 2 * 3 = 6
// 4! 1 * 2 * 2 * 4 = 24
// 5! 5 * 4!
