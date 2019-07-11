'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
     let collectionB = objectB['value'];
     let resultCollection = [];
      collectionA.filter((element)=>{
             return collectionB.indexOf(element.key)!= -1;
      }).forEach((element)=>{
           resultCollection.push(element.key);
      });
      return resultCollection;
}
