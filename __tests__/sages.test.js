import Sage from './../src/js/sages.js';

describe('Sage constructor and methods', () => {
  let reusableSage;
  
  beforeEach(() => {
    reusableSage = new Sage("skill", 10);
  });

  test('should create a sage object with two attributes', () => {
    expect(reusableSage.type).toEqual("skill");
    expect(reusableSage.amount).toEqual(10);
    expect(reusableSage.captureStatus).toBe(false);
  });
  
  it('should toggle between a free and captured status of the sage', () => {
    reusableSage.captureStatus = true;
    reusableSage.toggleCapture();
    expect(reusableSage.captureStatus).toBe(false);
  });
});