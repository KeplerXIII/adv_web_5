import Bowerman from '../class/bowerman';

test('Bowerman class', () => {
  const bowerman = new Bowerman('John');
  const correct = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowerman).toEqual(correct);
});

describe('Character SubClasses methods', () => {
  let character;

  beforeEach(() => {
    character = new Bowerman('John');
  });

  test('damage method - reduces health based on damage points', () => {
    character.damage(20);
    expect(character.health).toBe(85);
  });

  test('damage method - sets health to 0 if damage exceeds current health', () => {
    character.damage(150);
    expect(character.health).toBe(0);
  });

  test('damage method - throws an error if character is already deceased', () => {
    character.health = 0;
    expect(() => {
      character.damage(10);
    }).toThrow('Cannot damage a deceased character.');
  });

  test('levelUp method - increases level by 1', () => {
    character.levelUp();
    expect(character.level).toBe(2);
  });

  test('levelUp method - increases attack and defence by 20%', () => {
    character.attack = 50;
    character.defence = 30;
    character.levelUp();
    expect(character.attack).toBe(60);
    expect(character.defence).toBe(36);
  });

  test('levelUp method - sets health to 100 if current health is less than 100', () => {
    character.health = 80;
    character.levelUp();
    expect(character.health).toBe(100);
  });

  test('levelUp method - throws an error if character is deceased', () => {
    character.health = 0;
    expect(() => {
      character.levelUp();
    }).toThrow('Cannot level up a deceased character.');
  });
});
