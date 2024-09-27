enum Spicy {
  dwarf = "Nain",
  elf = "Elfe",
  hooman = "Humain",
  orc = "Orc",
  halflin = "Halfelin",
  gnome = "Gnome",
  default = "Default",
}

class Character {
  private readonly name: string;

  private readonly level: number;

  private readonly specy: string;

  constructor(name: string, level: number, specy: string) {
    this.name = name;
    this.level = level;
    this.specy = specy;
  }

  getSpecy(): Spicy {
    return Spicy[this.specy] ?? Spicy.default;
  }
}
