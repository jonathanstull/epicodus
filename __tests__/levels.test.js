import Character from './../src/js/characters.js';
import Monster from './../src/js/monsters.js';
import Sage from './../src/js/sages.js';
import Item from './../src/js/items.js';
import Level from './../src/js/levels.js';

describe('Level', () => {

  let reusableLevel;

  beforeEach(() => {
    reusableLevel = new Level();
  });

  it('should create a new level with a battle room, an office, and the wilderness', () => {
    expect(reusableLevel.battle).toEqual({});
    expect(reusableLevel.office).toEqual({});
    expect(reusableLevel.wilderness).toEqual({});
  });
});