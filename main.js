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
  },
  initStyle:function(){
    $('#broadcastButton').prop('disabled',true);
    $('#marquee').hide();
    $('#contentWrapper').hide();
    $('#splashWrapper').hide();
    $('.text').hide();
    $('footer').hide();
    $('#upArrow').hide();
    methods.initEvents();
  },
  initEvents:function(){
    $(window).one('click',methods.showInstructions);
    $('#downArrow').on('click',methods.showMainPage);
    $('#upArrow').on('click',methods.reloadInstructions)
    $('#encodeButton').on('click',methods.doEncode);
    $('#decodeButton').on('click',methods.doDecode);
    $('#broadcastButton').on('click', methods.doBroadcast);
    $('#broadcastButton').on('click', methods.toggleBroadcast);
    $('#inputMorse').on('keyup', methods.toggleBroadcast);
  },
  showInstructions:function() {
    //$('.fa').on('click',methods.whenClick);
    $('.dit').removeClass('ditAnimate');
    $('.dah').removeClass('dahAnimate');
    setTimeout(function(){
      $('h4').css('font-size', '200px');
      $('.text').show('0.2s', 'linear');
      $('#splashWrapper').show('0.2s', 'linear');
      $('.dit').html('.');
      $('.dit').css('font-size', '200px');
      $('h4').css('position', 'relative');
      $('h4').css('top', '-32px');
    },500);
  },
  showMainPage:function() {
    event.preventDefault();
    $('#splashWrapper').hide();
    $('#contentWrapper').show('0.2s', 'linear');
    $('#upArrow').show('0.2s', 'linear');
    $('.text,.dit,.dah').hide('0.2s', 'linear');
    $('footer').show();
  },
  reloadInstructions:function(){
    event.preventDefault();
    $('#splashWrapper').show();
    $('#contentWrapper').hide();
    $('#upArrow').hide('0.2s', 'linear');
    $('.text,.dit,.dah').show('0.2s', 'linear');
    $('footer').hide();
  },
  // whenClick:function(){
  //   event.preventDefault();
  //   $('h2').css({'font-size':'8em','margin-bottom':'0.6em'});
  //   $('#splashWrapper').toggle();
  //   $('#contentWrapper').show('0.2s','linear');
  //   $('.fa-chevron-up').show();
  //   $('.fa-chevron-up fa-5x').on('click', methods.showMainPage);
  // },
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
    //checking to see if there is anything to broadcast after encoding
    methods.toggleBroadcast();
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
    $('#marquee').text('');
    var forBroadcast = $('#inputMorse').val();
    $('#marquee').text(forBroadcast);
    $('#inputMorse').hide();
    $('#marquee').show();
    $('#marquee').addClass('doMarquee');
    setTimeout(function(){
      $('#inputMorse').show();
      $('#marquee').hide();
      $('#marquee').removeClass('doMarquee');
    },6000);
  }
}
$(document).ready(function(){
  methods.init();
});
