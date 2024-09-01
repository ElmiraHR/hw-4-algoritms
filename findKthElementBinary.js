function findKthElementBinary(arr1, arr2, k) {
    let m = arr1.length;
    let n = arr2.length;
  
    // Если arr1 длиннее arr2, то поменяем их местами, чтобы всегда работать с меньшим массивом
    if (m > n) {
      return findKthElementBinary(arr2, arr1, k);
    }
  
    let low = Math.max(0, k - n),
      high = Math.min(k, m);
  
    while (low <= high) {
      let partition1 = Math.floor((low + high) / 2);
      let partition2 = k - partition1;
  
      let maxLeft1 = partition1 === 0 ? -Infinity : arr1[partition1 - 1];
      let minRight1 = partition1 === m ? Infinity : arr1[partition1];
  
      let maxLeft2 = partition2 === 0 ? -Infinity : arr2[partition2 - 1];
      let minRight2 = partition2 === n ? Infinity : arr2[partition2];
  
      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
        return Math.max(maxLeft1, maxLeft2);
      } else if (maxLeft1 > minRight2) {
        high = partition1 - 1;
      } else {
        low = partition1 + 1;
      }
    }
  
    return -1;
  }
  
  // Пример вызова:
  const arr1 = [100, 112, 256, 349, 770];
  const arr2 = [72, 86, 113, 119, 265, 445, 892];
  const k = 7;
  
  console.log(findKthElementBinary(arr1, arr2, k)); // Вывод: 256
  