import Character from './../src/js/characters.js';
import Monster from './../src/js/monsters.js';
import Sage from './../src/js/sages.js';
import Item from './../src/js/items.js';
import Room from './../src/js/room.js';

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

  it('should allow character to exit room', () => {
    reusableRoom.toggleRoomStatus();
    expect(reusableRoom.characterIn).toBe(false);
  });

  it('should allow a character and monster to take damage', () => {
    let character = new Character(100, 40, 5, 100, 6);
    let monster = new Monster("boss", 100, 100, 5, 1);
    reusableRoom.monsters.set(1, monster);
    reusableRoom.battle(character);
    expect(monster.vitality).toEqual(90);
    expect(character.vitality).toEqual(90);
  });
});