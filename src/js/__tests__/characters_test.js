import Character from '../class/character';

describe('Character class', () => {
  test('Creating a valid character', () => {
    const character = new Character('John', 'Swordsman');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Swordsman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });
  test('Throwing an error for an invalid name', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Character('J', 'Swordsman');
    }).toThrow('Invalid name. Name should be a string with a length between 2 and 10 characters.');
  });

  test('Throwing an error for an invalid type', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Character('John', 'Warrior');
    }).toThrow('Invalid type. Type should be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
  });
});
