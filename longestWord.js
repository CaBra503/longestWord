/*
Take a string
split the string into array of words.
for loop to itterate through the array of words
 testing length against previous word. until no more words


*/
function findLongestWord(str){
    var longestWord = 0;
    wordArr = str.split(' ');
    for (var i =0; i < wordArr.length; i++){
       if (wordArr[i].length > longestWord){
        longestWord = wordArr[i].length;
       }
    }
    return longestWord;
}
    


console.log(findLongestWord('this is the longest string.'));