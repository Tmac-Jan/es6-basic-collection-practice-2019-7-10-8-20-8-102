'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
//   let subcollectionB=collectionB[0];
    return collectionA.filter((element)=>{
            return collectionB[0].indexOf(element)!= -1;
    });
}
