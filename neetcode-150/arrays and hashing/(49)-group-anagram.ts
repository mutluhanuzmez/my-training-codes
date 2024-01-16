function groupAnagrams(strs: string[]): string[][] {
  var sortAlphabets = function (text) {
    return text.split("").sort().join("");
  };

  const dupStrs = [...strs];
  const anagMap = new Map();
  let result = [];

  for (let i = 0; i < dupStrs.length; i++) {
    dupStrs[i] = sortAlphabets(dupStrs[i]);
  }

  for (let i = 0; i < dupStrs.length; i++) {
    anagMap.set(dupStrs[i], []);
  }

  for (let i = 0; i < dupStrs.length; i++) {
    anagMap.set(dupStrs[i], [...anagMap.get(dupStrs[i]), i]);
  }

  const anagValues = Array.from(anagMap.values());

  for (let i = 0; i < anagValues.length; i++) {
    result[i] = new Array();
    for (let j = 0; j < anagValues[i].length; j++) {
      result[i].push(strs[anagValues[i][j]]);
    }
  }

  return result;
}
