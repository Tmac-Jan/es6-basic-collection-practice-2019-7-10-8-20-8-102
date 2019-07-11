'use strict';

module.exports = function countSameElements(collection) {
   let obj = {};
       let objItem = [];
       collection.forEach((element)=>{
          let regExp = /[\d]/;
          if(regExp.test(element)){
             let value = parseInt(element.replace(/[\D]/ig,''))
             let key = element.substr(0,1);
             obj[key]?obj[key]+=value:obj[key]=value;
          }else{
          obj[element]?obj[element]+=1:obj[element]=1;
          }
       });

       let keyArray = Object.keys(obj);
       let valueArray = Object.values(obj);
       keyArray.map((value,index)=>{
           let item ={};
           item.name=value;
           item.summary=valueArray[index];
           objItem.push(item);
       });
     return objItem;
}
