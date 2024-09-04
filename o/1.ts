class Character {
  private readonly name: string;

  private readonly level: number;

  private readonly specy: string;

  constructor(name: string, level: number, specy: string) {
    this.name = name;
    this.level = level;
    this.specy = specy;
  }

  getSpecy(): string {
    switch (this.specy) {
      case "dwarf":
        return "Nain";
      case "elf":
        return "Elfe";
      case "hooman":
        return "Humain";
      case "orc":
        return "Orc";
      case "halflin":
        return "Halfelin";
      case "gnome":
        return "Gnome";
      default:
        throw new Error("No specy found in character");
    }
  }
}
