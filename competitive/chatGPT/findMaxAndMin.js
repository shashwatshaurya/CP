const findMaxAndMin = (A) => {
    if(!Array.isArray(A) || !A.every(n => typeof n === 'number')) throw new Error('Incorrect input provided');
    let max = -Infinity, min = Infinity;
    for(let i=0; i<A.length; i++) {
        max = Math.max(max, A[i]);
        min = Math.min(min, A[i]);
    }
    return [max, min];
}

const arr = [3, 5, 1, 9, 7];
const [max, min] = findMaxAndMin(arr);
// console.log(`The maximum value is ${max} and the minimum value is ${min}.`);

export default findMaxAndMin;
