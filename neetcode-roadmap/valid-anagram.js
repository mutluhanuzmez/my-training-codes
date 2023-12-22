/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let charMap = new Map();

    for (var i = 0; i < s.length; i++) {
        if(charMap.has(s[i])){
            let currentCount = charMap.get(s[i]);
            charMap.set(s[i],currentCount+1);
        }else {
            charMap.set(s[i], 1);
        }
    }

    for(var i = 0; i < t.length; i++) {  
        if(charMap.has(t[i])) {
            currentCount = charMap.get(t[i]);
            if(currentCount == 0){
                return false;
            }else {
                charMap.set(t[i], currentCount-1);
            }
        }else {
            return false;
        }
    }

    let lastCheck = Array.from(charMap.values()).filter((x)=> x>0).length;

    if(lastCheck > 0) {
        return false;
    } else {
        return true;
    }
};