const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 6, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(1)
  });

  it("should read back qualities of aged brie with improved quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 6, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(3)
  });

  it("should read back qualities of a backstage pass with doubled quality", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(4)
  });

  it("should read back qualities of Sulfuras with static quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 6, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(6)
    expect(items[0].quality).toBe(80)
  });
});
