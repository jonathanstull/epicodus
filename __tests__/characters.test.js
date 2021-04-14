import Character from './../src/js/characters.js';

describe('Character', () => {

  let reusableCharacter;

  beforeEach(() => {
    reusableCharacter = new Character(100, 20, 5, 100, 300);
  });

  it('should construct a new character with five attributes', () => {
    expect(reusableCharacter.vitality).toEqual(100);
    expect(reusableCharacter.experience).toEqual(20);
    expect(reusableCharacter.level).toEqual(5);
    expect(reusableCharacter.armor).toEqual(100);
    expect(reusableCharacter.damage).toEqual(300);
    expect(reusableCharacter.inventory).toEqual([]);
  });

  it('should "kill" the character when vitality equals zero', () => {
    reusableCharacter.die();
    expect(reusableCharacter.vitality).toEqual(0);
  });

  it('should level-up when experience reaches 100', () => {
    reusableCharacter.experience = 101;
    reusableCharacter.levelUp();
    expect(reusableCharacter.level).toEqual(6);
  });

  it('should reduce the character vitality attribute by the number given', () => {
    reusableCharacter.takeDamage(10);
    expect(reusableCharacter.vitality).toEqual(90);
  });

  it('should raise a skill level by a given number of points', () => {
    reusableCharacter.raiseDamage(15);
    expect(reusableCharacter.damage).toEqual(315);
  });

  it('should add an item object to the inventory attribute', () => {
    const itemToAdd = {type: "armor", amount: 2};
    reusableCharacter.addItem(itemToAdd);
    expect(reusableCharacter.inventory).toEqual([{type: "armor", amount: 2}]);
  });

  it('should increment the itemId attribute by one and return that number', () => {
    const idNumber = reusableCharacter.assignId();
    expect(idNumber).toEqual(1);
  })
});