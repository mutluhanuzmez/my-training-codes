function isIsomorphic(s: string, t: string): boolean {
    const l:number = s.length;
    let i:number = 0;
    
    let firstHash: Map<string, string> = new Map<string, string>();
    let secondHash: Map<string, string> = new Map<string, string>();
    
    let sChar:string;
    let tChar:string;
    
    for(i; i < l; i++){
        sChar = s[i];
        tChar = t[i];

        if(firstHash.has(sChar) || secondHash.has(tChar)){
            if(firstHash.get(sChar) !== tChar || secondHash.get(tChar) !== sChar){

                return false;
            }
        }else{
            firstHash.set(sChar, tChar);
            secondHash.set(tChar, sChar);
        }
    }
    
    return true;
};