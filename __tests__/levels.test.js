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

  it('should create a new level with a battle room, an office, and Discord channel March Questions', () => {
    expect(reusableLevel.battle).toEqual({});
    expect(reusableLevel.office).toEqual({});
    expect(reusableLevel.marchQuestions).toEqual({});
    expect(reusableLevel.roomId).toEqual(0);
  });

  it('should add room object to appropriate attribute according to type', () => {
    let room = {type: "office"};
    reusableLevel.addRoom(room);
    expect(reusableLevel.battle).toEqual({});
    expect(reusableLevel.office).toEqual({1:{id: 1, type: "office"}});
    expect(reusableLevel.marchQuestions).toEqual({});
  });
});

describe('Room', () => {
  let reusableRoom;
  
  beforeEach(() => {
    reusableRoom = new Room("battle");
  });

  it('should create a room object with five attributes', () => {
    const emptyMap = new Map();
    expect(reusableRoom.type).toEqual("battle");
    expect(reusableRoom.monsters).toEqual(emptyMap);
    expect(reusableRoom.sages).toEqual(emptyMap);
    expect(reusableRoom.items).toEqual(emptyMap);
    expect(reusableRoom.exits).toEqual(emptyMap);
  });
});