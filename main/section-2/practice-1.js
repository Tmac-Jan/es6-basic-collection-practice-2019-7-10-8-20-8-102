'use strict';
module.exports = function countSameElements(collection) {
    let obj = {};
    let objItem = [];
    collection.forEach((element)=>{
        obj[element]?obj[element]+=1:obj[element]=1;
    });
    let keyArray = Object.keys(obj);
    let valueArray = Object.values(obj);
    keyArray.map((value,index)=>{
        let item ={};
        item.key=value;
        item.count=valueArray[index];
        objItem.push(item);
    });
  return objItem;
}
