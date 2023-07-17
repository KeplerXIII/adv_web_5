import Swordsman from '../class/swordsman';

test('Swordsman class', () => {
  const swordsman = new Swordsman('Alice');
  const correct = {
    name: 'Alice',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(correct);
});
