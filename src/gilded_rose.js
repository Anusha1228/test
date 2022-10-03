const qualityUpdateUtil = require("./qualityUpdateUtil")



class Item {
  constructor(name, sellIn, quality) {
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
    this.items.forEach(currentItem => {

      switch (currentItem.name) {
        case 'Aged Brie': {
          currentItem = qualityUpdateUtil.updateQualityForAgedBrie(currentItem)
          break;
        }
        case 'Backstage passes to a TAFKAL80ETC concert': {
          currentItem = qualityUpdateUtil.updateQualityForConcert(currentItem)
          break;
        }
        case 'Sulfuras, Hand of Ragnaros': {
          currentItem = qualityUpdateUtil.updateQualityForSulfuras(currentItem)
          break;
        }
        case 'Conjured Item': {
          currentItem = qualityUpdateUtil.updateQualityForConjured(currentItem)
          break;
        }
        default: {
          currentItem = qualityUpdateUtil.updateQualityForNormalItem(currentItem)
        }
      }
    })
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
