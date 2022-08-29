// costants
const MAXIMUM_QUALITY = 50
const MINIMUM_QUALITY = 0

const isLessThanMaximum = quality => quality < MAXIMUM_QUALITY
const isOverMinimum = quality => quality > MINIMUM_QUALITY

const increaseQuality = quality => isLessThanMaximum(quality) ? quality + 1 : quality
const decreaseQuality = quality => isOverMinimum(quality) ? quality - 1 : quality


/**
 * 
 * "Aged Brie" actually increases in Quality the older it gets 
 */
const updateQualityForAgedBrie = (item) => {
    item.quality = increaseQuality(item.quality)
    item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality
    item.sellIn -= 1;

    return item
}

/**
 * 
 * Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
 * Quality drops to 0 after the concert 
 */
const increaseQualityForConcert = (item) => {
    let quality = increaseQuality(item.quality);
    quality = item.sellIn < 11 ? increaseQuality(quality) : quality;
    quality = item.sellIn < 6 ? increaseQuality(quality) : quality;

    return quality
}

const updateQualityForConcert = (item) => {
    item.quality = item.sellIn === 0 ? 0 : increaseQualityForConcert(item);
    item.sellIn -= 1

    return item;
}



/**
 * 
 * "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
 */
const updateQualityForSulfuras = (item) => {
    item.quality = 80;

    return item
}

/**
 * 
 * "Conjured" items degrade in Quality twice as fast as normal items
 */
const updateConjuredQuality = (item) => {
    // twice as fast as normal items
    item = updateQualityItem(item)
    item = updateQualityItem(item)
    return item
}

const updateQualityForConjured = (item) => {
    item = updateConjuredQuality(item)
    item.sellIn -= 1

    return item
}

/**
 * 
 * Other producst as normal
 */

const updateQualityItem = (item) => {
    item.quality = decreaseQuality(item.quality);
    item.quality = item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality

    return item
}

const updateQualityForNormalItem = (item) => {
    item = updateQualityItem(item)
    item.sellIn -= 1

    return item
}


// exports functions

module.exports = {
    updateQualityForAgedBrie,
    updateQualityForConcert,
    updateQualityForSulfuras,
    updateQualityForConjured,
    updateQualityForNormalItem
}