Strings - <a href="https://www.w3schools.com/js/js_strings.asp">Link</a>

String methods - <a href="https://www.w3schools.com/js/js_string_methods.asp">link</a>

#Task

Given a sentence written with mixed cases(upper and lower case). Write a function that reverses the case of each letter and does the following.

Return an array of words that start with an uppercase letter.

Return an array of words that end with 'ing' (could be Ing, iNg, ING, etc)

From the array words that start with an uppercase letter, return a word that is a palindrome. If there is more than one word that is a palindrome, return an array of palindromes.

The function should return an object containing the above arrays as values in the below format.

{

    'uppercased': ['Run', 'Start', 'poop', 'madam'],

    'Ing’:  ['Running', 'Starting'],

    'palindrome': ['poop', 'madam'],

}

 

Task Test case example

Sentence: maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the rAceCar

Expected result

{

    'uppercased': ['MAdAM', 'Ayo', 'OyO', 'IN', 'A', 'TO', 'WHeN', 'THE', 'RaCEcAR'],

    'ing': [],

    'palindrome': ['madam', 'a', 'oyo', 'racecar'],

 

}

 

HINT: Google palindromes and every other unclear terms used
