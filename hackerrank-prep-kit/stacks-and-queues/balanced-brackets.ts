function isBalanced(s: string): string {
    // Write your code here
    const bracketMap: { [key: string]: string; } = { "{": "}", "[": "]", "(": ")" };
    const sL: number = s.length;

    let bStack:string[] = [];

    for (let i = 0; i < sL; i++) {
        if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
            bStack.push(s[i]);
        } else {
            let lastItem:string = bStack.pop();
            if (bracketMap[lastItem] != s[i]) {
                return "NO";
            }
        }
    }

    if (bStack.length > 0) {
        return "NO";
    }

    return "YES";
}