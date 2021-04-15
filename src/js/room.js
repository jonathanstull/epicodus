export default class Room {

  constructor(typeOfRoom) {
    this.type = typeOfRoom;
    this.monsters = new Map();
    this.sages = new Map();
    this.items = new Map();
    this.exits = new Map();
    this.characterIn = true;
  }

  toggleRoomStatus() {
    if (this.characterIn === true) {
      this.characterIn = false;
    } else if (this.CharacterIn === false) {
      this.characterIn = true;
    }
  }

  battle(character) {
    this.monsters.get(1).takeDamage(10);
    character.takeDamage(10);
  }
}