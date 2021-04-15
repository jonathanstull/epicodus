export default class Monster {

  constructor(type, vitality, armor, skill, experienceWorth) {
    this.type = type;
    this.vitality = vitality;
    this.armor = armor;
    this.skill = skill;
    this.experienceWorth = experienceWorth;
  }

  takeDamage(amountDamaged){
    this.vitality -= amountDamaged;
  }

  die(){
    this.vitality = 0;
  }
}