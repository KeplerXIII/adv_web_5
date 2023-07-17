import Magician from '../class/magician';

test('Magician class', () => {
  const magician = new Magician('David');
  const correct = {
    name: 'David',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(correct);
});
