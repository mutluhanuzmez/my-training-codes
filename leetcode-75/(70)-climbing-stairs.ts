function climbStairs(n: number): number {
    const step2 = Math.floor(n / 2);
  
    let result = 0;
  
    for (let i = 0; i <= step2; i++) {
      result += combinations((n-2*i)+i, i);
    }
  
    return result;
  }
  
  function product_Range(a, b): number {
    var prd = a,
      i = a;
  
    while (i++ < b) {
      prd *= i;
    }
    return prd;
  }
  
  function combinations(n, r): number {
    if (n == r || r == 0) {
      return 1;
    } else {
      r = r < n - r ? n - r : r;
      return product_Range(r + 1, n) / product_Range(1, n - r);
    }
  }