function merge(array1, array2) {
  var finalArray = [];
  var indexArray1 = 0;
  var indexArray2 = 0;

  while (indexArray1 < array1.length || indexArray2 < array2.length) {

    // If array1 fineshed, push only elements of array2
    if (indexArray1 === array1.length) {
      finalArray.push(array2[indexArray2]);
      indexArray2++;
      continue;
    }

    // If array2 fineshed, push only elements of array1
    if (indexArray2 === array2.length) {
      finalArray.push(array1[indexArray1]);
      indexArray1++;
      continue;
    }

    // Normal comparison
    if (array1[indexArray1] < array2[indexArray2]) {
      finalArray.push(array1[indexArray1]);
      indexArray1++;
    } else {
      finalArray.push(array2[indexArray2]);
      indexArray2++;
    }
  }

  return finalArray;
}



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);