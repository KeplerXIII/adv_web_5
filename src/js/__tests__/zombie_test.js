import Zombie from '../class/zombie';

test('Zombie class', () => {
  const zombie = new Zombie('Walker');
  const correct = {
    name: 'Walker',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(correct);
});
