const isPrime = (n) => {
    if(typeof n !== 'number' || n < 0)
        throw new Error('Incorrect input provided');
    if (n===0 || n===1) return 'Not Prime';
    // looping only till square root of n
    for (let i=2; i*i<=n; i++) {
        if (n%i===0)
            return 'Not Prime';
    }
    return 'Prime';
}

export default isPrime;