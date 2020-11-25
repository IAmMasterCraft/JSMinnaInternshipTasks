<h1>The goal of this task is to get familiar with the built-in string methods in JavaScript.
The task can be solved any way you see fit, but you are advised to use built-in JavaScript methods to solve them.</h1>

- Create a function called replaceString that takes in three parameters word, search and replaceWith. 
The function would replace all instances of the search parameter with the replaceWith parameter. <br />
Example:<br />
<code>replaceString(‘Abdulqudus’, ‘u’, ‘v’) // Should return ‘Abdvlqvdvs’ </code><br />
<code>replaceString(‘javascript’, ‘a’, ‘o’) // Should return ‘jovoscript’</code><br />
<i>Hint: google javascript replace method</i><hr />

- Create a function called changeCase that takes in two parameters, sentence and case. 
The function would toggle the case of the sentence depending on the value of the case parameter. 
If case equals ‘upper’, the function should convert the sentence to uppercase. 
If case equals ‘lower’, the function should convert the sentence to lowercase. <br />
Example:<br />
<code>changeCase(‘Abdulqudus’, ‘upper’) // Should return ‘ABDULQUDUS’</code><br />
<code>changeCase(‘ABdUlQudUs’, ‘lower’) // Should return ‘abdulqudus’</code><br />
<i>Hint: google javascript toUpperCase and toLowerCase methods</i><hr />

- Create a function trimEdges that accepts a parameter called sentence 
and returns a string with all leading and trailing whitespaces removed. <br />
Example:<br />
<code>trimEdges(‘    javascript    ’) // Should return ‘javascript’</code><br />
<code>trimEdges(‘hello’) // Should return ‘hello’</code><br />
<i>Hint: google javascript trim method</i><hr />

- Create a function extractString that takes in three parameters, sentence, start and end. 
The function should extract a certain portion of the sentence starting from the 
start parameter and stop at the end parameter. <br />
Example:<br />
<code>extractString(‘javascript is awesome’, 4, 13) // Should return ‘script is’</code><br />
<code>extractString(‘hello there’, 0, 0) // Should return ‘hello there’</code><br />
<i>Hint: google javascript slice, substr, substring method</i><hr />

- Create a function getInitials that takes in a parameter name. 
The function should return the initials of the name parameter in uppercase. <br />
Example:<br />
<code>getInitials(‘Hello World’) // should return ‘HW’</code><br />
<code>getInitials(‘Brendan Eich’) // should return ‘BE’</code><br />
<i>Hint: google javascript slice, charAt method</i><hr />
