import Character from "./Character";

export default class newCharacter extends Character{
  constructor(name, type) {
    if (name.length > 1 && name.length < 10) {
      this.name = name;
    } else throw new Error("Ошибка! Имя должно содержать от 2 до 10 символов!");
    types.includes(type);
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(value) {
    this.stonedStatus = value;
  }

  get distance() {
    return this.attackDistance;
  }

  set distance(value) {
    this.attackDistance = value;
  }

  get attack() {
    let attackPower = this.attackPower * (1 - (this.attackDistance - 1) / 10);
    if (this.stoned) {
      attackPower -= Math.log2(this.distance) * 5;
    }
    return attackPower;
  }

  set attack(value) {
    if (value <= 0) {
      throw new Error("Не возможно атаковать противника");
    }
    this.attackPower = value;
  }
}
