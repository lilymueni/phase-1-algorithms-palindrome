function isPalindrome(word) { // Convert the word to lowercase
  word = word.toLowerCase();

  // Initialize two pointers, left and right, pointing to the beginning and end of the word respectively
  let left = 0;
  let right = word.length - 1;

  // Loop while left < right
  while (left < right) {
    // If word[left] is not equal to word[right], return false (not a palindrome)
    if (word[left] !== word[right]) {
      return false;
    }

    // Increment left and decrement right
    left++;
    right--;
  }

  // If the loop completes without returning false, return true (palindrome)
  return true;
}
/* 
  Add your pseudocode here:
  1. Convert the word to lowercase.
  2. Initialize two pointers, one at the beginning of the word and the other at the end.
  3. Loop until the two pointers meet:
       a. If the characters at the two pointers are not equal, return false.
       b. Move the first pointer to the next character.
       c. Move the second pointer to the previous character.
  4. If the loop completes without returning false, return true.
*/

/*
  Add written explanation of your solution here:
  This function checks if a given word is a palindrome. It first converts the word to lowercase to handle case-insensitivity. Then, it uses two pointers, one at the beginning of the word and the other at the end, to compare characters. If the characters at the two pointers are not equal, it returns false. Otherwise, it continues moving the pointers inward until they meet or cross each other, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;




