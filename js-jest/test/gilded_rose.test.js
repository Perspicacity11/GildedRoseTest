const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should read back qualities of a new item with reduced quality and sell-in", function() {
    const gildedRose = new Shop([new Item("Test item", 6, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Test item");
    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(9)
  });

  it("should read back qualities of a new item with greatly diminished quality past sell-in date", function() {
    const gildedRose = new Shop([new Item("Test item", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Test item");
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(8)
  });

  it("should read back qualities of aged brie with improved quality and reduced sell-in", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 6, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(3)
  });

  it("should read back qualities of a backstage pass with improved quality and reduced sell-in", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(14)
    expect(items[0].quality).toBe(3)
  });

  it("should read back qualities of a backstage pass with double-improved quality and reduced sell-in", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(4)
  });

  it("should read back qualities of a backstage pass with triple-improved quality and reduced sell-in", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(1)
    expect(items[0].quality).toBe(5)
  });

  it("should read back qualities of a backstage pass after sell-in expiry", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(0)
  });

  it("should read back qualities of Sulfuras with static quality and sell-in", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 6, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(6)
    expect(items[0].quality).toBe(80)
  });

  it("should read back qualities of a conjured item with double-diminished quality and sell-in", function() {
    const gildedRose = new Shop([new Item("Conjured item", 6, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured item");
    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(8)
  });

  it("should read back qualities of a conjured fish with double-diminished quality and sell-in, tests input acceptance", function() {
    const gildedRose = new Shop([new Item("conjured fish", 3, 16)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("conjured fish");
    expect(items[0].sellIn).toBe(2)
    expect(items[0].quality).toBe(14)
  });
});
