const removeDuplicates = (arr) => {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array');
    }
    
    const sortedArr = arr.sort((a, b) => a - b);
    const ans = [];
    let current = -1;
    
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] === sortedArr[current]) {
        continue;
      } else {
        current = i;
        ans.push(sortedArr[current]);
      }
    }
    
    return ans;
  };
  
//   console.log(removeDuplicates([1, 24, 5, 76, 4, 24, 5, 4]));

export default removeDuplicates;
  