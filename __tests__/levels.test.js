import Character from './../src/js/characters.js';
import Monster from './../src/js/monsters.js';
import Sage from './../src/js/sages.js';
import Item from './../src/js/items.js';
import Room from './../src/js/room.js';
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

  it('should change current room of sage object when passed current room and room to go to ids', () => {
    let currentRoom = new Room("office");
    let nextRoom = new Room("marchQuestions");
    let sageObject = new Sage("damage", 2);
    let emptyMap = new Map();
    let sageMapped = new Map([[1, sageObject]]);
    currentRoom.sages.set(1, sageObject);
    reusableLevel.addRoom(currentRoom); //room id 1
    reusableLevel.addRoom(nextRoom); //room id 2
    reusableLevel.changeSageRoom(currentRoom.id, nextRoom.id);
    expect(reusableLevel.office[1].sages).toEqual(emptyMap);
    expect(reusableLevel.marchQuestions[2].sages).toEqual(sageMapped);
  });
});