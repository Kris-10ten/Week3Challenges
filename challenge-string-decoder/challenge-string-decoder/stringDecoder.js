// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

// Start by creating a function called decoder that has a single parameter called code.

// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

// Each number tells you how many characters to skip before finding a good letter. After each 
// good letter should come the next next number.

// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, 
// find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

function decoder(code) {
    let decodedString = '';
    let skipCount = 0;
  
    for (let i = 0; i < code.length; i++) { //  iterate over each character
      if (isNaN(code[i])) { // if the character is a letter, 
        decodedString += code[i]; // add it to the decodedString
      } else { // if character is a number
        skipCount = parseInt(code[i]); // convert it to an integer using parseInt() and set it as the skipCount
        i += skipCount; // increment the loop index i by skipCount to skip the specified number of characters
      }
    }
  
    return decodedString;
  }

// Here are a few more examples:

console.log(decoder('0h2xce5ngbrdy')) // 'hey'
console.log(decoder('3vdfn')) // 'n'
console.log(decoder('0r')) // 'r'
console.log(decoder('2bna0p1mp2osl0e')) // 'apple'
console.log(decoder('0y4akjfe0s')) // 'yes'