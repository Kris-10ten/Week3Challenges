// Write a function called hasMoreVowels that takes in one 
// argument, word. When the function is called, return true if 
// that word contains more vowels than non-vowels; otherwise, 
// return false. The word will always be a single word, without 
// any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// // false

// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
// // false
// Uppercase vowels are still vowels:

// hasMoreVowels('Aal')
// // true

function hasMoreVowels(word) {
    // Initialize counters for vowels and non-vowels
    let vowelCount = 0;
    let nonVowelCount = 0;
  
    // Convert the word to lowercase for easier comparison
    const lowercaseWord = word.toLowerCase();
  
    // Loop through each character in the word
    for (let i = 0; i < lowercaseWord.length; i++) {
      const char = lowercaseWord[i];
  
      // Check if the character is a vowel
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      } else {
        nonVowelCount++;
      }
    }
  
    // Compare the counts and return true if there are more vowels than non-vowels
    return vowelCount > nonVowelCount;
  }

console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('mice'))
console.log(hasMoreVowels('graph'))
console.log(hasMoreVowels('yay'))
console.log(hasMoreVowels('Aal'))