// Write a program that calculates the factorial of a given number

const findFactorialOf =  function (n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer.');
    }
    if(n===0) return 1;
    let ans = 1;
    for(let i=2; i<=n; i++)
        ans*=i;
    return ans;
}

// console.log(findFactorialOf(5));

export default findFactorialOf;