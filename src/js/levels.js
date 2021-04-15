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

  changeSageRoom(currentRoomId, nextRoomId){
    let roomObject;
    if(currentRoomId in this.battle) {
      roomObject = this.battle[currentRoomId];
    } else if(currentRoomId in this.office) {
      roomObject = this.office[currentRoomId];
    } else if(currentRoomId in this.marchQuestions) {
      roomObject = this.marchQuestions[currentRoomId];
    }
    let sageObject = roomObject.sages.get(1); //needs fixing later for if multiple sages are in one room
    roomObject.sages.delete(1);

    if(nextRoomId in this.battle) {
      this.battle[nextRoomId].sages.set(1, sageObject);
    } else if(nextRoomId in this.office) {
      this.office[nextRoomId].sages.set(1, sageObject);
    } else if(nextRoomId in this.marchQuestions) {
      this.marchQuestions[nextRoomId].sages.set(1, sageObject);
    }
  }
}

