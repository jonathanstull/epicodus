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
  });
});