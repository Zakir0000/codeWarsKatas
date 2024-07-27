/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)
First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
  // Convert the minor words to a set for fast lookup and ignore case
  let minorWordsSet = new Set(
    minorWords ? minorWords.toLowerCase().split(' ') : [],
  );

  // Split the title into words
  let words = title.toLowerCase().split(' ');

  // Capitalize the first word regardless of whether it is a minor word or not
  let result = [capitalize(words[0])];

  // Process the remaining words
  for (let i = 1; i < words.length; i++) {
    if (minorWordsSet.has(words[i])) {
      result.push(words[i]);
    } else {
      result.push(capitalize(words[i]));
    }
  }

  // Join the processed words back into a single string and return
  return result.join(' ');
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
