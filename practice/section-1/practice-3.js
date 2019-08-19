'use strict';

function collectSameElements(collectionA, objectB) {
  var a_b_value_same = new Array();
  var collectionB=objectB.value;
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<collectionB.length ; j++)
    {
      if (collectionA[i] == collectionB[j])
      {
        a_b_value_same.push(collectionA[i]);
        break;
      }
    }
  }
  return a_b_value_same;
}