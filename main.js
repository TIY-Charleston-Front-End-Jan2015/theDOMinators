//define globally scoped array of array
var mArray = [];
var outputArray = [];
var transArray =[];
var assWords=[];
var sentArray= [];
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
  transArray =[];
  _.each(lettersArray,mTranslate);
  outputArray.push(transArray);
}
function mTranslate(letter){
  for(i=0;i<alphaArray.length;i++){
    if(letter===alphaArray[i]){
      letter=morseArray[i];
    transArray.push(letter);
    }
  }
}

function joinLetters(lettersArray) {
  lettersArray =lettersArray.join(' ');

  assWords.push(lettersArray);
}



//user input
var initInput = prompt('What would you like to translate?').toLowerCase();
//splitting user input into array of words
var mInput = initInput.split(' ');
//execute a function on each word in array
_.each(mInput,splitIntoLetters);
//
_.each(mArray,mAssign);

_.each(outputArray,joinLetters);

alert(assWords.join('//'));
