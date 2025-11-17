const notation = require('./notation');

test('mean should calculate the average correctly for [10, 15, 20]', () => {
  expect(notation.mean([10, 15, 20])).toBe(15);
});

test('mean should calculate the average correctly for [12, 15, 18]', () => {
  expect(notation.mean([12, 15, 18])).toBe(15);
});

test('mean should return 0 for empty array', () => {
  expect(notation.mean([])).toBe(0);
});

test('mean should calculate the average for [10, 20, 30, 40]', () => {
  expect(notation.mean([10, 20, 30, 40])).toBe(25);
});












