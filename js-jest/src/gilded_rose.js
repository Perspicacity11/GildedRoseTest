class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class Shop {
    constructor(items = []) {
      this.items = items;
    }
  
    updateQuality() {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name.match(/Conjured/i)) {
            this.updateConjuredItem(i);
        } 
        else switch (this.items[i].name) {
          case 'Aged Brie':
            this.updateAgedBrie(i);
            break;
          case 'Backstage passes to a TAFKAL80ETC concert':
            this.updateBackstagePass(i);
            break;
          case 'Sulfuras, Hand of Ragnaros':
            break;
          default:
            this.updateStandardItem(i);
            break;
        }
      }

      return this.items;
    }

    updateStandardItem(i) {
      this.items[i].quality > 0 ? this.items[i].quality -= 1 : null;
      this.items[i].sellIn -= 1;
      this.items[i].sellIn < 0 && this.items[i].quality > 0 ? this.items[i].quality -= 1 : null;
    }
    
    updateAgedBrie(i) {
      this.items[i].quality < 50 ? this.items[i].quality += 1 : null;
      this.items[i].sellIn -= 1;
      this.items[i].sellIn < 0 && this.items[i].quality < 50 ? this.items[i].quality += 1 : null;
    }
    
    updateBackstagePass(i) {
      this.items[i].quality < 50 ? this.items[i].sellIn <= 0 ? this.items[i].quality = 0 :
      this.items[i].sellIn <= 5 ? this.items[i].quality += 3 :
      this.items[i].sellIn <= 10 ? this.items[i].quality += 2 :
      this.items[i].quality += 1 : null;
      this.items[i].sellIn -= 1;
    }

    updateConjuredItem(i) {
      this.items[i].quality > 1 ? this.items[i].quality -= 2 : this.items[i].quality = 0;
      this.items[i].sellIn -= 1;
      this.items[i].sellIn <= 0 ? this.items[i].quality > 1 ? this.items[i].quality -= 2 : this.items[i].quality = 0 : null;
    }
  }
  
  module.exports = {Item, Shop}