// eslint-disable-next-line max-classes-per-file
export class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Invalid name. Name should be a string with a length between 2 and 10 characters.');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Invalid type. Type should be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
