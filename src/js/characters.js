export default class Character {

  constructor(vitality, experience, level, armor, damage) {
    this.vitality = vitality;
    this.experience = experience;
    this.level = level;
    this.armor = armor;
    this.damage = damage;
    this.inventory = new Map();
    this.itemId = 0;
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

  addItem(itemObject) {
    this.inventory.set(this.assignId(), itemObject);
  }

  dropItem(itemId) {
    let inventory = this.inventory;
    inventory.delete(itemId);
  }

  assignId(){
    this.itemId += 1;
    return this.itemId;
  }
} 