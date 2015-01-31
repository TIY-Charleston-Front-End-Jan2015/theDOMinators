var mArray = [];
var outputArray = [];
var transArray =[];
var assWords=[];
var assCode=[];
var finishArray = [];

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
//var initInput = prompt('What would you like to translate?').toLowerCase();
//splitting user input into array of words
//var mInput = initInput.split(' ');
//execute a function on each word in array
//_.each(mInput,splitIntoLetters);
//
//_.each(mArray,mAssign);

//_.each(outputArray,joinLetters);

//alert(assWords.join('//'));


//morse to English
//var initMorse = prompt("What would you like to translate? Please type Morse code below.");
//var initMorse = 'hellow';
//var morseIn = initMorse.split(' ');


//_.each(morseIn, cTranslate);
//transArray= [];
function cTranslate (letter) {
  for(i=0; i<morseArray.length; i++) {
    if (letter ===morseArray[i]) {
      letter = alphaArray[i];
      transArray.push(letter);
      console.log(transArray);
    }
  }
}

//finishArray.push(transArray);

//_.each(finishArray, joinCode);
//console.log(finishArray);

function joinCode (array) {
  array= array.join('');
  assCode.push(array);
  console.log(assCode);
}

//alert (assCode.join('//'));



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
'9',
' '
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
'//'
];

var methods = {
  init:function(){
    methods.initStyle();
    //add stuff for morse animation
  },
  initStyle:function(){
    $('#broadcastButton').disabled = true;
    $('#contentWrapper').hide();
    methods.initEvents();
  },
  initEvents:function(){
    $('body').one('click', methods.openPage);
    $(window).one('scroll',methods.whenScroll);
    $('#encodeButton').on('click',methods.doEncode);
    $('#decodeButton').on('click',methods.doDecode);
    $('#broadcastButton').on('click', methods.doBroadcast);
  //  $('body').on('mousedown',methods.whenClick);
  },
  whenScroll:function(){
    $('h1').css({'font-size':'7em','margin-bottom':'0.6em'});
    $('#splashWrapper').hide();
    $('#contentWrapper').show('0.2s','linear');
  },

  openPage: function() {
    //add code here
  },
  // whenClick:function(){
  //   if(){
  //     methods.singleClick();
  //   }else if(){
  //     methods.doubleClick();
  //   }else if(){
  //     methods.tripleCLick();
  //   }else if(){
  //     methods.holdClick();
  //   }
  //},
  singleClick:function(){

  },
  doubleClick:function(){

  },
  tripleClick:function(){

  },
  holdClick:function(){

  },
  clearEnglish:function(){
    $('#inputEnglish').val("");
  },
  clearMorse:function(){
    $('#inputMorse').val("");
  },
  doEncode:function(){
    //
    mArray = [];
    outputArray = [];
    transArray =[];
    assWords=[];
    assCode=[];
    finishArray = [];
    //
    var initInput = $('#inputEnglish').val().toLowerCase();
    var mInput = initInput.split(' ');
    _.each(mInput,splitIntoLetters);
    _.each(mArray,mAssign);
    _.each(outputArray,joinLetters);
    methods.clearMorse();
    $('#inputMorse').val(assWords.join(' // '));
  },
  doDecode:function(){
    //
    mArray = [];
    outputArray = [];
    transArray =[];
    assWords=[];
    assCode=[];
    finishArray = [];
    //
    var initMorse = $('#inputMorse').val().toLowerCase();
    var morseIn = initMorse.split(' ');
    _.each(morseIn, cTranslate);
    finishArray.push(transArray);
    _.each(finishArray, joinCode);
    methods.clearEnglish();
    $('#inputEnglish').val(assCode.join(' // '));
  },

  doBroadcast : function() {
   alert("NO CLICKING!");
  }

}
$(document).ready(function(){
  methods.init();
});
