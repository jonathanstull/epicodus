import Item from './../src/js/items.js';

describe('Item', () => {

  let reusableItem;

  beforeEach(() => {
    reusableItem = new Item("vitality", 100);
  });

  it('should construct a new item with two attributes', () => {
    expect(reusableItem.type).toEqual("vitality");
    expect(reusableItem.amount).toEqual(100);
  });
});