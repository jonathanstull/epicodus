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

  levelUp(){
    let experience = this.experience;
    if (experience >= 100){
      this.level += 1;
      this.experience = experience - 100;
    }
  }

  takeDamage(amountDamaged){
    this.vitality -= amountDamaged;
  }

  raiseDamage(amountIncreased) {
    this.damage += amountIncreased;
  }
}