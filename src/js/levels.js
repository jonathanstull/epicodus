export default class Level {

  constructor() {
    this.battle = {};
    this.office = {};
    this.marchQuestions = {};
    this.roomId = 0;
  }

  addRoom(roomObject){
    this.roomId += 1;
    roomObject.id = this.roomId;
    const typeOfRoom = roomObject.type;
    if(typeOfRoom === "battle"){
      this.battle[roomObject.id] = roomObject; //this.battle.set(roomObject.id, roomObject)
    } else if(typeOfRoom === "office"){
      this.office[roomObject.id] = roomObject;
    } else if(typeOfRoom === "marchQuestions"){
      this.marchQuestions[roomObject.id] = roomObject;
    }
  }
}

