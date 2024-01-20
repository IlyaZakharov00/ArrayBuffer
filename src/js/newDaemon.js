import newCharacter from "./newCharacter";

export default class Daemon extends newCharacter {
  constructor(name, type = "Daemon") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
console.log(Daemon);
