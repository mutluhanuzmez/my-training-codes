function isAnagram(s: string, t: string): boolean {
  const hashMap = new Map();

  if (s.length != t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    } else {
      hashMap.set(s[i], 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (hashMap.has(t[j])) {
      hashMap.set(t[j], hashMap.get(t[j]) - 1);
      if (hashMap.get(t[j]) == 0) {
        hashMap.delete(t[j]);
      }
    }
  }

  if (Array.from(hashMap.values()).length > 0) {
    return false;
  }

  return true;
}
