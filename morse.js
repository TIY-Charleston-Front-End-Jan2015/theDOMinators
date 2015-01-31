//Morse Code to English, backwards translation.
var mArray = [];
var outputArray = [];
var transArray =[];
var assWords=[];
var assCode=[];
var alphaArray = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',
'0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9'
];
var morseArray = [
'.-',
'-...',
'-.-.',
'-..',
'.',
'..-.',
'--.',
'....',
'..',
'.---',
'-.-',
'.-..',
'--',
'-.',
'---',
'.--.',
'--.-',
'.-.',
'...',
'-',
'..-',
'...-',
'.--',
'-..-',
'-.--',
'--..',
'-----',
'.----',
'..---',
'...--',
'....-',
'.....',
'-....',
'--...',
'---..',
'----.',
];


var initMorse = prompt("What would you like to translate? Please type Morse code below.");

var morseIn = initMorse.split(' ');

_.each(morseIn, cTranslate);

// function splitUpCode (word) {
//   var codeArray = word.split('');
//   mArray.push(codeArray);
//   console.log(codeArray);
// }
//
// _.each(mArray, cTranslate);

// function cAssign (lettersArr) {
//   transArray = [];
//   _.each(lettersArr, cTranslate);
// }

function cTranslate (letter) {
  for(i=0; i<morseArray.length; i++) {
    if (letter ===morseArray[i]) {
      letter = alphaArray[i];
      transArray.push(letter);
      console.log(transArray);
    }
  }
}

outputArray.push(transArray);

_.each(outputArray, joinCode);
console.log(outputArray);

function joinCode (array) {
  array= array.join('');
  assCode.push(array);
  console.log(assCode);
}

alert (assCode.join('//'));
