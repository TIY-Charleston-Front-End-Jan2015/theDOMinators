//define globally scoped array of array
var mArray = [];
var alphaArray = [
'e',
'h',
'l',
'o'
];
var morseArray = [
'.',
'....',
'.-..',
'---'
];
//function to break apart each word
function splitIntoLetters(word){
  var lettersArray = word.split('');
  mArray.push(lettersArray);
}
function mAssign(lettersArray){
  _.each(lettersArray,mTranslate);
}
function mTranslate(letter){
  for(i=0;i<alphaArray.length;i++){
    if(letter===alphaArray[i]){
      letter=morseArray[i];
      console.log(letter);
    }
  }
}


//user input
var initInput = prompt('What would you like to translate?').toLowerCase();
//splitting user input into array of words
var mInput = initInput.split(' ');
//execute a function on each word in array
_.each(mInput,splitIntoLetters);
//
_.each(mArray,mAssign)
