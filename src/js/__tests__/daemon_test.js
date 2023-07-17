import Daemon from '../class/daemon';

test('Daemon class', () => {
  const daemon = new Daemon('Lucifer');
  const correct = {
    name: 'Lucifer',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(correct);
});
