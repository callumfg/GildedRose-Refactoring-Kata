// import { Item, GildedRose } from '../app/gilded-rose';
const Item = require('../app/gilded-rose').Item;
const GildedRose = require('../app/gilded-rose').GildedRose;

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
    new Item("Conjured Mana Cake", 3, 6)];

// const items = [
//     new Item("Farron Greatsword", 1, 20),
//     new Item("Silver Knight Armour", 3, 2),
//     new Item("Aged Brie", 2, 2),
//     new Item("Estus Shard", 5, 54),
//     new Item("Sulfuras", 4, 80),
//     new Item("Sulfuras", -1, 80),
//     new Item("Backstage pass", 7, 15)
// ];


const gildedRose = new GildedRose(items);
var days: number = 4;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

    });
    console.log();
    gildedRose.updateQuality();
}

// -------- day 0 --------
// name, sellIn, quality
// +5 Dexterity Vest 10 20
// Aged Brie 2 0
// Elixir of the Mongoose 5 7
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 15 20
// Backstage passes to a TAFKAL80ETC concert 10 49
// Backstage passes to a TAFKAL80ETC concert 5 49
// Conjured Mana Cake 3 6

// -------- day 1 --------
// name, sellIn, quality
// +5 Dexterity Vest 9 19
// Aged Brie 1 1
// Elixir of the Mongoose 4 6
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 14 21
// Backstage passes to a TAFKAL80ETC concert 9 50
// Backstage passes to a TAFKAL80ETC concert 4 50
// Conjured Mana Cake 2 5