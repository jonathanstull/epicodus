import Item from './../src/js/items.js';

describe('Item', () => {

  let reusableItem;

  beforeEch()() => {
    reusableItem = new Item("vitality", 100);
  };

  it('should construct a new item with two attributes', () => {
    expect(reusableItem.type).toEqual("vitality");
    expect(reusableItem)amount.toeEqual(100);
  });

});