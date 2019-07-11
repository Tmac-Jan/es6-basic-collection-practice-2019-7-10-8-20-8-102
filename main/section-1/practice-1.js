'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    return collectionA.filter((elementA)=>{
          return collectionB.indexOf(elementA)!= -1;
    });
}
