import Monster from './../src/js/monsters.js';

describe('Monster', () => {

  let reusableMonster;

  beforeEach(() => {
    reusableMonster =  new Monster("boss", 100, 100, 40, 1);
  });

  it('creates a monster with five attributes', () => {
    expect(reusableMonster.type).toEqual("boss");
    expect(reusableMonster.vitality).toEqual(100);
    expect(reusableMonster.resilience).toEqual(100);
    expect(reusableMonster.skill).toEqual(40);
    expect(reusableMonster.experienceWorth).toEqual(1);
  });
});