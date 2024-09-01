function findKthElement(arr1, arr2, k) {
    let m = arr1.length;
    let n = arr2.length;
    let i = 0,
      j = 0,
      count = 0;
  
    // Пока не найдём k-й элемент
    while (i < m && j < n) {
      // Если элемент в первом массиве меньше или равен элементу во втором массиве
      if (arr1[i] <= arr2[j]) {
        count++;
        if (count === k) return arr1[i];
        i++;
      } else {
        count++;
        if (count === k) return arr2[j];
        j++;
      }
    }
  
    // Если остались элементы в первом массиве
    while (i < m) {
      count++;
      if (count === k) return arr1[i];
      i++;
    }
  
    // Если остались элементы во втором массиве
    while (j < n) {
      count++;
      if (count === k) return arr2[j];
      j++;
    }
  
    return -1; // В случае, если k больше, чем общее количество элементов
  }
  
  // Пример вызова:
  const arr1 = [100, 112, 256, 349, 770];
  const arr2 = [72, 86, 113, 119, 265, 445, 892];
  const k = 7;
  
  console.log(findKthElement(arr1, arr2, k)); // Вывод: 256
  