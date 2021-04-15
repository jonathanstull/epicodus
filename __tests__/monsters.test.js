import Monster from './../src/js/monsters.js';

describe('Monster', () => {

  let reusableMonster;

  beforeEach(() => {
    reusableMonster =  new Monster("boss", 100, 100, 40, 1);
  });

  it('creates a monster with five attributes', () => {
    expect(reusableMonster.type).toEqual("boss");
    expect(reusableMonster.vitality).toEqual(100);
    expect(reusableMonster.armor).toEqual(100);
    expect(reusableMonster.skill).toEqual(40);
    expect(reusableMonster.experienceWorth).toEqual(1);
  });

  it('should reduce the monster vitality attribute by the number given', () => {
    reusableMonster.takeDamage(10);
    expect(reusableMonster.vitality).toEqual(90);
  });

  it('should "kill" the monster when vitality equals zero', () => {
    reusableMonster.die();
    expect(reusableMonster.vitality).toEqual(0);
  });
});