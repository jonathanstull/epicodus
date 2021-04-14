export default class Monster {

  constructor(type, vitality, resilience, skill, experienceWorth) {
    this.type = type;
    this.vitality = vitality;
    this.resilience = resilience;
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