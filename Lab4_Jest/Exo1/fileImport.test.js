const fileImport = require('./fileImport');

test('getAverages should return correct averages for multiple arrays', () => {
  const input = [
    [12, 15, 18],
    [10, 20, 30, 40]
  ];

  const result = fileImport.getAverages(input);
  
  expect(result).toEqual([15, 25]); // Vérifie que les moyennes sont correctes
});
