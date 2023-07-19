function countZeros(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
      count += String(i).split('0').length - 1;
    }

    return count;
  }

  console.log(countZeros(200));