const getSumOfEvenNumbers = (A) => {
    if(!Array.isArray(A) || !A.every(n => typeof n === 'number')) throw new Error('Incorrect input provided');
    return A.reduce((sum, num)=> num%2===0?sum+num:sum,0)
}

export default getSumOfEvenNumbers;