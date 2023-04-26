const reverseTheString = (s) => {
    if (typeof s !== 'string') {
      throw new Error('Incorrect input provided');
    }
  
    let reversedString = '';
  
    for (let i = s.length - 1; i >= 0; i--) {
      reversedString += s[i];
    }
  
    return reversedString;
  }


/**
 * PREVIOUS IMPLEMENTATION
 */

// const reverseTheString = (s) => {
//     if(typeof s !== 'string')
//         throw new Error('Incorrect input provided');
//     return s.split('').reverse().join('');
// }

export default reverseTheString;