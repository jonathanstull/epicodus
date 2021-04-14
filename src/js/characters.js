export default class Character {

  constructor(vitality, experience, level, armor, damage) {
    this.vitality = vitality;
    this.experience = experience;
    this.level = level;
    this.armor = armor;
    this.damage = damage;
  }

  die() {
    this.vitality = 0;
  }
}