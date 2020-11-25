//task 1
const replaceString = (word, search, replaceWith) => {
  const regex = new RegExp(search, "gi");
  return word.replace(regex, replaceWith);
};

console.log(replaceString("Boluwaji", "ji", "tife")); //test1
console.log(replaceString("Abdulqudus", "u", "v"));//test2
console.log(replaceString("javascript", "a", "o"));//test3

//task 2
const changeCase = (sentence, changeCase) => {
  // case is a reserved javascript word
  return (changeCase === "upper") ? sentence.toUpperCase() : sentence.toLowerCase();
};

console.log(changeCase("Abdulqudus", "upper"));//test4
console.log(changeCase("IAmMasterCraft", "lower"));//test5

//task 3
const trimEdges = (sentence) => {return sentence.trim();};

console.log(trimEdges("     javascript     "));//test6
console.log(trimEdges("hello   "));//test7
console.log(trimEdges("    hey you"));//test8

//task 4
const extractString = (sentence, start, end) => {
  let result = sentence.slice(start, end);
  return (result.length > 0) ? result : sentence;
};

console.log(extractString("javascript is awesome", 4, 13));//test9
console.log(extractString("hello there", 0, 0));//test10

//task 5
const getInitials = (name) => {
  return changeCase(
    name.split(" ").map(splittedName => splittedName.charAt(0)).join(""),
    "upper");
};

console.log(getInitials("Boluwaji"))//test11
