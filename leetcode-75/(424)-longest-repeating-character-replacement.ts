function characterReplacement(s: string, k: number): number {

    let output:number = 0;

    //character variation can be only 26

    let characterCountMap = new Map();

    for (let i = 0; i < s.length; i++) {
        characterCountMap.set(s[i], (characterCountMap.get(s[i]) || 0) + 1);
    }

    //how to create and sort an array the characterCountMap items regarding to the value of the items in the map
    let sortedCharacterCountMap = [...characterCountMap.entries()].sort((a, b) => b[1] - a[1]);

    return output;
};