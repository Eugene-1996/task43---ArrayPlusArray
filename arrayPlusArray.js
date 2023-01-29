function arrayPlusArray(arr1, arr2) {
    let count = 0
    for (let i = 0; i<arr1.length; i++){
      count += arr1[i]
    }
    for (let j = 0; j<arr2.length; j++){
      count += arr2[j]
    }
    return count
  }
  
  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))