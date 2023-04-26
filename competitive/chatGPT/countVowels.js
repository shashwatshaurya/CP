const getVowelCount = (s) => {
    if(typeof s !== 'string')
        throw new Error('Incorrect input provided');
    const s1 = s.toLowerCase(); // converting all letters to same case
    let vowelCounter = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']); // only lower cases as all letters have been converted into lower case
    for(let i=0; i<s1.length; i++) {
        if(vowels.has(s1[i])) vowelCounter++;
    }
    return vowelCounter;
};

export default getVowelCount;