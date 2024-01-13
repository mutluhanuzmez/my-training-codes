function lengthOfLongestSubstring(s: string): number {

    // longest substring without repeating characters
    // it's sliding window problem

    const lengthS : number = s.length;
    let result = 0;

    const charMap = new Map<string,number>();

    for (let i, j = 0; j < lengthS; j ++) {
        if(charMap.has(s[j])) {
            i = Math.max(charMap.get(s[j])!,i);

        }
        result = Math.max(result, j-i+1);
        charMap.set(s[j], j+1);
    }

    return result;
};s