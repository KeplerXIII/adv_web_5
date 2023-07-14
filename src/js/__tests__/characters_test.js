import {
  Character,
  Bowerman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from '../characters';

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

describe('Character Classes', () => {
  test('Bowerman class', () => {
    const bowerman = new Bowerman('John');
    expect(bowerman.name).toBe('John');
    expect(bowerman.type).toBe('Bowman');
    expect(bowerman.health).toBe(100);
    expect(bowerman.level).toBe(1);
    expect(bowerman.attack).toBe(25);
    expect(bowerman.defence).toBe(25);
  });

  test('Swordsman class', () => {
    const swordsman = new Swordsman('Alice');
    expect(swordsman.name).toBe('Alice');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Magician class', () => {
    const magician = new Magician('David');
    expect(magician.name).toBe('David');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('Daemon class', () => {
    const daemon = new Daemon('Lucifer');
    expect(daemon.name).toBe('Lucifer');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('Undead class', () => {
    const undead = new Undead('Boris');
    expect(undead.name).toBe('Boris');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('Zombie class', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
