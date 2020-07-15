const osmosis = require('osmosis');
osmosis
    .get('https://www.asos.com/ru/asos-tall/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/prd/10264367?clr=odnotonnyj-chernyj&colourwayid=15106387&SearchQuery=&cid=3630')
    .set({'Name thing': 'title'})
    .set({'Images': ['li.image-thumbnail img@src']})
    .set({'Main image': 'li.image-thumbnail img@src'})
    .set({'Price': 'div span.product-discount-percent'}) //Don't work
    .set({'Full price': 'span.product-prev-price'}) //Don't work

    .data(console.log)
