import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('master test', function () {
        //Arange
  const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new Item("Aged Brie", 2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    // new Item("Conjured Mana Cake", 3, 6)];
  ]


  //Act
  const gildedRose = new GildedRose(items);

  const updatedItems = gildedRose.updateQuality();

  //Assert

  expect(updatedItems).to.deep.include(new Item("Aged Brie", 1, 1)); 
    })
 
});

