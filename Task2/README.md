#The goal of this task is to get familiar with the built-in string methods in JavaScript. 
The task can be solved any way you see fit, but you are advised to use built-in JavaScript methods to solve them.

- Create a function called replaceString that takes in three parameters word, search and replaceWith. 
The function would replace all instances of the search parameter with the replaceWith parameter. 
Example:
replaceString(‘Abdulqudus’, ‘u’, ‘v’) // Should return ‘Abdvlqvdvs’
replaceString(‘javascript’, ‘a’, ‘o’) // Should return ‘jovoscript’
Hint: google javascript replace method

- Create a function called changeCase that takes in two parameters, sentence and case. 
The function would toggle the case of the sentence depending on the value of the case parameter. 
If case equals ‘upper’, the function should convert the sentence to uppercase. 
If case equals ‘lower’, the function should convert the sentence to lowercase. 
Example:
changeCase(‘Abdulqudus’, ‘upper’) // Should return ‘ABDULQUDUS’
changeCase(‘ABdUlQudUs’, ‘lower’) // Should return ‘abdulqudus’
Hint: google javascript toUpperCase and toLowerCase methods

- Create a function trimEdges that accepts a parameter called sentence 
and returns a string with all leading and trailing whitespaces removed. 
Example:
trimEdges(‘    javascript    ’) // Should return ‘javascript’
trimEdges(‘hello’) // Should return ‘hello’
Hint: google javascript trim method

- Create a function extractString that takes in three parameters, sentence, start and end. 
The function should extract a certain portion of the sentence starting from the 
start parameter and stop at the end parameter. 
Example:
extractString(‘javascript is awesome’, 4, 13) // Should return ‘script is’
extractString(‘hello there’, 0, 0) // Should return ‘hello there’
Hint: google javascript slice, substr, substring method

- Create a function getInitials that takes in a parameter name. 
The function should return the initials of the name parameter in uppercase. 
Example:
getInitials(‘Hello World’) // should return ‘HW’
getInitials(‘Brendan Eich’) // should return ‘BE’
Hint: google javascript slice, charAt method
