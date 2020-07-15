const osmosis = require('osmosis');
osmosis
    .get('https://www.asos.com/ru/asos-tall/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/prd/10264367?clr=odnotonnyj-chernyj&colourwayid=15106387&SearchQuery=&cid=3630')
 /*   .set({'Name thing': 'title'})
    .set({'Images': ['li.image-thumbnail img@src']})
    .set({'Main image': 'li.image-thumbnail img@src'})*/
    .set({'Price': 'di aria-hidden="true"'})
    .set({'Full price': 'span.product-prev-price'})

    .data(console.log)
