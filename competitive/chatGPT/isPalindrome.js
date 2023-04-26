const checkPalindrome = (n) => {
    if(typeof n !== 'string') throw new Error('Incorrect input provided');
    const ns = n.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0, right = ns.length-1; // two pointers
    while(left<right) {
        if (ns[left]!==ns[right])
            return 'Not Palindrome';
        left++;
        right--;
    }
    return 'Palindrome';
};

export default checkPalindrome;