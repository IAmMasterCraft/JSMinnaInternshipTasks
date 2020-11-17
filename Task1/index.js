//identify case and reverse string
//array of words that starts with toUpperCase()
//check last 3 character of string
//check for palindromes

const test = "maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the rAceCar";

/**
 * @params String of a longSentence and string of delimiter
 * @returns Array of eachWords in longSentence
 * @todo split longSentence into eachWords
 */
function splitSentence(longSentence, delimiter = " ") {
  return longSentence.split(delimiter);
}

/**
 * @params String of eachAlphabet
 * @returns String of eachAlphabet
 * @todo check case and return result
 */
function caseChecker(string) {
  if (string === string.toUpperCase()) {
    //string is toUpperCase()
      return 0;
    } else if (string === string.toLowerCase()) {
      //string is toLowerCase()
      return 1;
    } else {
      //string is possibly "5" or specialChars "@#$%"
      return 2;
    }
}

/**
 * @params String of a longSentence
 * @returns String of a reversedCaseSentence with reversed cases
 * @todo loop through, check case & reverse
 */
function reverseCase(longSentence) {
  let eachAlphabet;
  let reversedCaseSentence = '';
  for (let i = 0; i < longSentence.length; i++) {
    eachAlphabet = longSentence.charAt(i);
    if (caseChecker(eachAlphabet) === 0) {
      reversedCaseSentence += eachAlphabet.toLowerCase();
    } else if (caseChecker(eachAlphabet) === 1) {
      reversedCaseSentence += eachAlphabet.toUpperCase();
    } else {
      reversedCaseSentence += longSentence.charAt(i);
    }
  }
  return reversedCaseSentence;
}

/**
 * @params Array of a eachWords
 * @returns Array of words that start with an uppercase letter
 * @todo declare newArray, loop through, check case of first character & push to a newArray
 */
function getFirstUpperCaseWords(eachWords) {
  let newArray = [];
  for (let i = 0; i < eachWords.length; i++) {
    if (caseChecker(eachWords[i].charAt(0)) === 0) {
      newArray.push(eachWords[i]);
    }
  }
  return newArray;
}

/**
 * @params Array of a eachWords
 * @returns Array of words whose last 3 character === "ING"
 * @todo loop through, check word, push if it exist
 */
function getIngWords(eachWords) {
  let newArray = [];
  for (let i = 0; i < eachWords.length; i++) {
    if (
      eachWords[i].substring(eachWords[i].length - 3).toLowerCase() === "ing"
      ) {
        newArray.push(eachWords[i]);
      }
  }
  return newArray;
}

/**
 * @params String of possiblePalindrome
 * @returns Boolean isPalindrome
 * @todo split possiblePalindrome into Array, apply Array.reverse method, join Array back to String, check if it equals params
*/
function isPalindrome(possiblePalindrome){
  let reverseString = possiblePalindrome.split("").reverse().join("");
  return (
    possiblePalindrome.toLowerCase() === reverseString.toLowerCase()
    ) ? true : false;
}

/**
 * @params Array of firstUpperCaseWords
 * @returns Array of palindromicWords
 * @todo loop through, reverse firstUpperCaseWords to check for palindromes
*/
function getPalindromes(firstUpperCaseWords){
  let newArray = [];
  for (let i = 0; i < firstUpperCaseWords.length; i++){
    if (
      isPalindrome(firstUpperCaseWords[i])
      ) {
        newArray.push(firstUpperCaseWords[i].toLowerCase());
      }
  }
  return newArray;
}

/**
 * @params Array of firstUpperCaseWords, ingWords, palindromicWords
 * @returns Object of params Array
 * @todo put each array as value of its respective keys
*/
function packageResult (firstUpperCaseWords, ingWords, palindromicWords) {
  const result = {
    'uppercased' : firstUpperCaseWords,
    'ing' : ingWords,
    'palindrome' : palindromicWords
  }
  return result;
}

let reversedTest = reverseCase(test);
let eachWords = splitSentence(reversedTest);
let firstUpperCaseWords = getFirstUpperCaseWords(eachWords);
let ingWords = getIngWords(eachWords);
let palindromicWords = getPalindromes(firstUpperCaseWords);
const finalObject = packageResult(firstUpperCaseWords, ingWords, palindromicWords);
console.log(finalObject);
