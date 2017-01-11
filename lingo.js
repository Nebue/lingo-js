var lingo = {};

var currentWord = '';
var chance = 1;
var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"adres",
	"avond",
	"aders",
	"alarm",
	"boten",
	"balen",
	"beter",
	"bomen",
	"boren",
	"boven",
	"boxen",
	"brood",
	"broek",
	"brand",
	"breed",
	"benen",
	"beeld",
	"brief",
	"beten",
	"basis",
	"blauw",
	"beren",
	"buren",
	"banen",
	"bloed",
	"broer",
	"blond",
	"boter",
	"beleg",
	"breng",
	"baken",
	"beker",
	"blind",
	"bezig",
	"baden",
	"bedel",
	"bazen",
	"bazin",
	"baren",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"conus",
	"cello",
	"creme",
	"cloud",
	"cacao",
	"cadet",
	"cavia",
	"ceder",
	"combi",
	"china",
	"clown",
	"draai",
	"deden",
	"dalen",
	"derde",
	"delen",
	"dwaas",
	"daden",
	"dader",
	"dames",
	"diner",
	"datum",
	"dozen",
	"dreun",
	"duits",
	"dagen",
	"deren",
	"dwerg",
	"dwaal",
	"dwing",
	"druil",
	"droog",
	"draad",
	"dweil",
	"drank",
	"duren",
	"dwars",
	"drugs",
	"daten",
	"daler",
	"doorn",
	"disco",
	"degen",
	"droom",
	"dient",
	"drone",
	"dadel",
	"duwen",
	"druif",
	"deken",
	"deler",
	"elven",
	"eigen",
	"enger",
	"engel",
	"elder",
	"enkel",
	"effen",
	"email",
	"egaal",
	"fiets",
	"friet",
	"files",
	"forel",
	"films",
	"feest",
	"fruit",
	"falen",
	"flora",
	"fauna",
	"feeen",
	"freak",
	"forum",
	"fusie",
	"geven",
	"gaven",
	"groen",
	"graai",
	"getal",
	"grens",
	"grond",
	"groef",
	"graal",
	"gewei",
	"games",
	"grote",
	"groet",
	"garen",
	"gebak",
	"graag",
	"genre",
	"glans",
	"geluk",
	"geeuw",
	"horen",
	"heren",
	"halen",
	"hagel",
	"haren",
	"helen",
	"harde",
	"hemel",
	"hoofd",
	"huren",
	"hamer",
	"haken",
	"heden",
	"hotel",
	"hobby",
	"heler",
	"hoger",
	"ieder",
	"index",
	"immer",
	"icoon",
	"inlog",
	"inzet",
	"innig",
	"jovel",
	"jaren",
	"jicht",
	"jabot",
	"jacht",
	"jaden",
	"jagen",
	"jager",
	"japon",
	"jarig",
	"jawel",
	"jeans",
	"jemig",
	"jeugd",
	"joint",
	"jonas",
	"joule",
	"koken",
	"kreet",
	"koker",
	"kerst",
	"kegel",
	"koude",
	"kader",
	"krent",
	"kamer",
	"kaars",
	"kaart",
	"kraan",
	"krant",
	"keren",
	"kruid",
	"kerel",
	"kubus",
	"kraal",
	"kleur",
	"kroon",
	"klein",
	"korst",
	"klopt",
	"kabel",
	"kunst",
	"kopje",
	"krans",
	"klimt",
	"kater",
	"klink",
	"kudde",
	"kruis",
	"lopen",
	"laten",
	"lepel",
	"links",
	"laden",
	"leven",
	"lezen",
	"lucht",
	"lenen",
	"laser",
	"lente",
	"licht",
	"lader",
	"leder",
	"lunch",
	"lijst",
	"leger",
	"leden",
	"legen",
	"lagen",
	"lezer",
	"lever",
	"lingo",
	"loper",
	"luier",
	"lager",
	"leeuw",
	"maand",
	"malen",
	"maken",
	"media",
	"meter",
	"motor",
	"maten",
	"markt",
	"mazen",
	"molen",
	"meest",
	"meren",
	"model",
	"meden",
	"maden",
	"macht",
	"meeuw",
	"mager",
	"magen",
	"maren",
	"manen",
	"noord",
	"nieuw",
	"negen",
	"namen",
	"neven",
	"nodig",
	"naden",
	"neder",
	"nemen",
	"onder",
	"optel",
	"ovaal",
	"ovale",
	"onwel",
	"optie",
	"orden",
	"oppas",
	"ouder",
	"ophef",
	"oases",
	"palen",
	"plein",
	"pegel",
	"paars",
	"prijs",
	"piano",
	"pixel",
	"paden",
	"pasta",
	"pizza",
	"poten",
	"paard",
	"puber",
	"pauze",
	"preek",
	"polis",
	"pater",
	"proef",
	"panda",
	"penis",
	"prins",
	"pluto",
	"polen",
	"plint",
	"quota",
	"quant",
	"quark",
	"queue",
	"quilt",
	"quote",
	"robot",
	"reken",
	"raden",
	"regen",
	"radio",
	"rente",
	"regio",
	"rugby",
	"reden",
	"roken",
	"ruzie",
	"ruist",
	"regel",
	"racen",
	"races",
	"riool",
	"ramen",
	"radar",
	"roman",
	"rokje",
	"razen",
	"roede",
	"staan",
	"staal",
	"speel",
	"steeg",
	"stoel",
	"stook",
	"steek",
	"schep",
	"spijs",
	"stoep",
	"shirt",
	"samen",
	"sites",
	"sport",
	"spalk",
	"sjaal",
	"storm",
	"staat",
	"steun",
	"strak",
	"serie",
	"shows",
	"schat",
	"snoep",
	"sfeer",
	"smeer",
	"speer",
	"scene",
	"speld",
	"smeed",
	"smaak",
	"super",
	"stand",
	"steer",
	"smelt",
	"sedan",
	"skier",
	"sluis",
	"sneer",
	"steel",
	"truck",
	"terug",
	"typen",
	"talen",
	"taboe",
	"tegel",
	"taart",
	"tafel",
	"trouw",
	"teken",
	"teren",
	"taken",
	"treur",
	"tenen",
	"titel",
	"thuis",
	"tiara",
	"teder",
	"toets",
	"tabak",
	"trein",
	"tarwe",
	"telen",
	"teler",
	"uiten",
	"uilig",
	"uitje",
	"uiver",
	"ultra",
	"uniek",
	"uppie",
	"uraan",
	"uiers",
	"velen",
	"vloer",
	"video",
	"varen",
	"vegen",
	"veren",
	"vader",
	"vaten",
	"vuren",
	"vrouw",
	"vlees",
	"vogel",
	"vroeg",
	"vezel",
	"veins",
	"vorst",
	"veder",
	"vanaf",
	"vieze",
	"veger",
	"villa",
	"veler",
	"vrede",
	"vries",
	"woord",
	"wagen",
	"wonen",
	"waren",
	"warme",
	"weten",
	"water",
	"weren",
	"wazig",
	"wegen",
	"weven",
	"wezen",
	"weken",
	"wraak",
	"wilde",
	"wreed",
	"wrede",
	"wenst",
	"woest",
	"xenon",
	"yacht",
	"yucca",
	"zwaar",
	"zware",
	"zesde",
	"zagen",
	"zalig",
	"zomer",
	"zeden",
	"zwart",
	"zeven",
	"zicht",
	"zadel",
	"zweet",
	"zenuw",
	"zweer",
	"zweef",
	"zaden",
	"zaken",
	"zeker",
	"zever",
	"zeeen"];

	var init = function () {
  chance = 1;
  currentWord = lingo.words[Math.floor(Math.random()*lingo.words.length)];
  jQuery('input').val('');
  jQuery('input').removeClass('inplace');
  jQuery('input').removeClass('incorrect');
  jQuery('input').removeClass('displace');
  jQuery('input').prop('disabled', true);
  jQuery('#1 input').prop('disabled', false);
  jQuery('#1 input.1').addClass('inplace');
  jQuery('#1 input.1').val(currentWord.charAt(0));
};

var nextLingo = function(){

  var one  = jQuery('#'+chance+' input.1').val() ? jQuery('#'+chance+' input.1').val() : ' '
  var two  = jQuery('#'+chance+' input.2').val() ? jQuery('#'+chance+' input.2').val() : ' '
  var three =  jQuery('#'+chance+' input.3').val() ? jQuery('#'+chance+' input.3').val() : ' '
  var four =  jQuery('#'+chance+' input.4').val() ? jQuery('#'+chance+' input.4').val() : ' '
  var five = jQuery('#'+chance+' input.5').val() ? jQuery('#'+chance+' input.5').val() : ' '
  var answer = one+two+three+four+five
  answer = answer.toLowerCase();
  console.log(answer);
  if(answer == currentWord){
    alert('You have the right answer!');
  }

  var first = {};
  var second = {};
  var third = {};
  var fourth = {};
  var fifth = {};

  first.value = currentWord.charAt(0);
  lastPart =  currentWord.slice(1,5);

  if(answer.charAt(1) == lastPart.charAt(0)){
    jQuery('#'+chance+' input.2').addClass('inplace');
    second.value = currentWord.charAt(1);
    second.place = 'correct';
  }else if(lastPart.indexOf(answer.charAt(1)) == -1){
    jQuery('#'+chance+' input.2').addClass('incorrect');
  }else{
    jQuery('#'+chance+' input.2').addClass('displace'); 
    second.value = answer.charAt(1);
    second.place = 'incorrect';
  }

  if(answer.charAt(2) == lastPart.charAt(1)){
    jQuery('#'+chance+' input.3').addClass('inplace');
    third.value = currentWord.charAt(2);
    third.place = 'correct';
  }else if(lastPart.indexOf(answer.charAt(2)) == -1){
    jQuery('#'+chance+' input.3').addClass('incorrect'); 
  }else{
    jQuery('#'+chance+' input.3').addClass('displace'); 
    third.value = answer.charAt(2);
    third.place = 'incorrect';
  }

  if(answer.charAt(3) == lastPart.charAt(2)){
    jQuery('#'+chance+' input.4').addClass('inplace'); 
    fourth.value = currentWord.charAt(3);
    fourth.place = 'correct';
  }else if(lastPart.indexOf(answer.charAt(3)) == -1){
    jQuery('#'+chance+' input.4').addClass('incorrect'); 
  }else{
    jQuery('#'+chance+' input.4').addClass('displace'); 
    fourth.value = answer.charAt(3);
    fourth.place = 'incorrect';
  }

  if(answer.charAt(4) == lastPart.charAt(3)){
    jQuery('#'+chance+' input.5').addClass('inplace'); 
    fifth.value = currentWord.charAt(4);
    fifth.place = 'correct';
  }else if(lastPart.indexOf(answer.charAt(4)) == -1){
    jQuery('#'+chance+' input.5').addClass('incorrect'); 
  }else{
    jQuery('#'+chance+' input.5').addClass('displace'); 
    fifth.value = answer.charAt(4);
    fifth.place = 'incorrect';
  }

  jQuery('#'+chance+' input').prop('disabled', true);
  chance++;
  jQuery('#'+chance+' input').prop('disabled', false);
  jQuery('#'+chance+' input.1').val(first.value);
  jQuery('#'+chance+' input.1').addClass('inplace');

  if(second.place == 'correct'){
    jQuery('#'+chance+' input.2').val(second.value);
    jQuery('#'+chance+' input.2').addClass('inplace');
  }
  if(third.place == 'correct'){
    jQuery('#'+chance+' input.3').val(third.value);
    jQuery('#'+chance+' input.3').addClass('inplace');
  }
  if(fourth.place == 'correct'){
    jQuery('#'+chance+' input.4').val(fourth.value);
    jQuery('#'+chance+' input.4').addClass('inplace');
  }
  if(fifth.place == 'correct'){
    jQuery('#'+chance+' input.5').val(fifth.value);
    jQuery('#'+chance+' input.5').addClass('inplace');
  }

}

var findSynonm = function(){
  var apiurl = 'http://words.bighugelabs.com/api/2/';

  var apiKey = 'ea07da8e5b5c49dbea9a64979ae875c1';

  jQuery.get( apiurl + apiKey + '/' + currentWord + '/json', function( data ) {
	  console.log(data);
  });
	  

}

jQuery(document).ready(function(){
  init();
  jQuery('#go').click(function(){
    nextLingo();
  });
  jQuery('#again').click(function(){
    init();
  });
  jQuery("input").keyup(function(e) {
    if(e.which != 8 && e.which != 9 && e.which != 16){
      var inputs = jQuery(this).closest('form').find(':input');
      inputs.eq( inputs.index(this)+ 1 ).focus();

    }
  });
  //jQuery('#myModal').modal('show');
});
