'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let collectionB = objectB['value'];

  return collectionA.filter((element)=>{
        return collectionB.indexOf(element)!= -1;
  });
}
