const exf = require('./echo');

test('exf should call console.log n times', () => {
  // On espionne console.log
  console.log = jest.fn();

  // Appel de la fonction
  exf("echo", 5);

  // Vérifie que console.log a été appelé 5 fois
  expect(console.log).toHaveBeenCalledTimes(5);

  // Vérifie que chaque appel a bien l’argument "echo"
  expect(console.log).toHaveBeenCalledWith("echo");
});

test('exf should call console.log with another message', () => {
  console.log = jest.fn();

  exf("JS from server", 10);

  expect(console.log).toHaveBeenCalledTimes(10);
  expect(console.log).toHaveBeenCalledWith("JS from server");
});