function isSubsequence(s: string, t: string): boolean {
  const lengthOfT: number = t.length;
  const final: number = s.length;

  if (final == 0) {
    return true;
  }

  let j = 0;

  for (let i = 0; i < lengthOfT; i++) {
    if (t[i] === s[j]) {
      j++;

      if (final === j) {
        return true;
      }
    }
  }

  return false;
}
