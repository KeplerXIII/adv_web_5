import Undead from '../class/undead';

test('Undead class', () => {
  const undead = new Undead('Boris');
  const correct = {
    name: 'Boris',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(correct);
});
