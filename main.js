var outputArray = [];

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
    $('#splashWrapper').toggle();
    $('.text').hide();
    $('footer').hide();
    $('.fa .fa-chevron-up').toggle(hidden);
  },
  initStyle:function(){
    $('#broadcastButton').prop('disabled',true);
    $('#marqueeWrapper').hide();
    $('#contentWrapper').hide();
    methods.initEvents();
  },
  initEvents:function(){
    $(window).one('scroll',methods.openPage);
    $('.fa-chevron-down fa-5x').on('click', methods.showInstructions)
    $('#encodeButton').on('click',methods.doEncode);
    $('#decodeButton').on('click',methods.doDecode);
    $('#broadcastButton').on('click', methods.doBroadcast);
    $('#inputMorse').on('keyup', methods.toggleBroadcast);
  },
  showInstructions:function() {
    event.preventDefault();
    $('#splashWrapper').toggle('0.2s', 'linear');
    $('.fa-chevron-up fa-5x').toggle();
  },
  whenClick:function(){
    event.preventDefault();
    $('h2').css({'font-size':'8em','margin-bottom':'0.6em'});
    $('#splashWrapper').toggle();
    $('#contentWrapper').show('0.2s','linear');
    $('.fa-chevron-up fa-5x').toggle();
    $('.fa-chevron-up fa-5x').on('click', methods.showInstructions);
  },
  openPage: function() {
    $('.fa').on('click',methods.whenClick);
    $('h4').css('font-size', '200px');
    $('.text').show('0.2s', 'linear');
    $('#splashWrapper').toggle('0.2s', 'linear');
    $('#contentWrapper').hide();
    $('.dit').removeClass('ditAnimate');
    $('.dit').html('.');
    $('.dit').css('font-size', '200px');
    $('h4').css('position', 'relative');
    $('h4').css('top', '-32px');
    $('.dah').removeClass('dahAnimate');
    $('footer').show();
    $('.fa-chevron-up fa-5x').toggle();
  },
  clearEnglish:function(){
    $('#inputEnglish').val("");
  },
  clearMorse:function(){
    $('#inputMorse').val("");
  },
  doEncode:function(){
    //clearing previous potential output
    outputArray = [];
    //english input to lower case + spliting input string into individual characters array + loading array into var
    var englishInput = $('#inputEnglish').val().toLowerCase().split('');
    //passing each character (one at a time) to translate function
    _.each(englishInput,methods.eTranslate);
    //clearing morse textbox in anticipation of tanslated english output
    methods.clearMorse();
    //joining outputArray (using spaces) and dumping into morse textbox
    $('#inputMorse').val(outputArray.join(' '));
    console.log(outputArray);
  },
  eTranslate:function(char){
    //checking passed character against alphaArray + upon match the character is swapped for morse from morseArray + loading each replaced character (i.e., morse character) onto new array called outputArray
    for(i=0;i<alphaArray.length;i++){
      if(char===alphaArray[i]){
        char=morseArray[i];
        outputArray.push(char);
      }
    }
  },
  doDecode:function(){
    //same logic as previous function except now spliting input string by ' '
    outputArray = [];
    var morseInput = $('#inputMorse').val().toLowerCase().split(' ');
    _.each(morseInput,methods.mTranslate);
    methods.clearEnglish();
    $('#inputEnglish').val(outputArray.join(''));
  },
  mTranslate:function(mChar){
    //same logic as eTranslate function except now going from morse to english
    for(i=0;i<morseArray.length;i++){
      if(mChar===morseArray[i]){
        mChar=alphaArray[i];
        outputArray.push(mChar);
      }
    }
  },
  toggleBroadcast:function(){
    if($('#inputMorse').val().length===0){
      $('#broadcastButton').prop('disabled',true);
      //$('#broadcastButton').css({'background-color':'#C8C8C8','':'',,'cursor':'default'});
    }else{
      $('#broadcastButton').prop('disabled',false);
    }
  },
  doBroadcast:function(){
    var w=$('#marquee').width();
    $('#inputMorse').hide();
    $('#marqueeWrapper').show();
    console.log(w);
    $('#marquee').animate({
      opacity:0.5

    },2000,'linear',function(){
      $('#inputMorse').show();
      $('#marqueeWrapper').hide();
    });
  }

}
$(document).ready(function(){
  methods.init();
});
