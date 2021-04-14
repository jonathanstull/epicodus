export default class Sage{
  constructor(type, amount){
    this.type = type;
    this.amount = amount;
    this.captureStatus = false;
  }

  toggleCapture() {
    if (this.captureStatus === false) {
      this.captureStatus = true;
    } else if (this.captureStatus === true) {
      this.captureStatus = false;
    }
    // this.captureStatus = !this.captureStatus;
  }
}