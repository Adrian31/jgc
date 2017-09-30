/*var $body = $('body');
var $catSelect = $('#cat-select');
var img = document.createElement("img");
var $cats = $('#cats');
var $catList = $('.cat-list-style');
var $counter = $('.counter');

*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

var $marketingAndSponsorship = $('#marketing-and-sponsorship');
var $panel = $('.panel');

var modules = {
  currentModule: null,

  "Marketing and Sponsorship" : {
    "module_one": {
      "src": "docs/marketing-and-sponsorship/module_1.pdf"
    }
  },

}
var newKey;
$.each( modules, function( key, value){

  newKey = key.replace(/\w+/g, function(txt) {
    return txt.charAt(0).toLowerCase() + txt.substr(1);
  }).replace(/\s/g, '');
  console.log(newKey);

  var $li = $('ul#'+newKey+'.accordion-list');
    console.log($panel);
  console.log($li);


  if(key != "currentModule"){
    /*$('div.bottom.side-bar').append('<a class="accordion"  id="'+ newKey + '1" >' + key + '</a>');
    $('div.bottom.side-bar').append('<div class="panel ' + newKey + '" >');
    //$('div.panel').append('<ul class"accordion-list ' + newKey + '" ></ul>');
    $('div.panel').append('<ul class="accordion-list" id="' + newKey + '" ></ul>');
    $('#'+newKey).append('<li>Hello</li>');*/

    $('div.bottom.side-bar').append('<a class="accordion"  id="'+ newKey + '1" >' + key + '</a>');
    $('div.bottom.side-bar').append('<div class="panel ' + newKey + '2" >');
    //$('div.panel').append('<ul class"accordion-list ' + newKey + '" ></ul>');
    $('#'+ newKey +'2').append('<ul class="accordion-list" id="' + newKey + '" ></ul>');
    $('#'+newKey).append('<li>Hello</li>');
  }
});

//Use ID instead of class




/*var initialModules = {
  currentModule: null,

  "Governance and Management":{
       "clickCount": 0,
       "name": "Sammy",
       "imgSrc": "images/cat1.jpg"
   },

   "Bruno":{
       "clickCount": 0,
       "name": "Bruno",
       "imgSrc": "images/cat2.jpg"
   },

   "Lilly":{
     "clickCount": 0,
     "name": "Lilly",
     "imgSrc": "images/cat3.jpg"
   }
};

initialCats.currentCat = initialCats.Sammy;

$.each( initialCats, function( key, value){
  if(key != "currentCat"){
    $catSelect.append('<li class=' + key + '>' + key + '</li>');
  }
});

var catCreator = function(){
     $cats.html(" ");
     $cats.append('<hX class="cat-names">' + initialCats.currentCat.name + '</hX>');
     $cats.append('<ul id="cats"><li class="cat-list-style"><img src="' + initialCats.currentCat.imgSrc + '"></li></ul>');
   }

$("li").click(function(){
   var myClass = $(this).attr("class");
   //initialCats.currentCat = second
   initialCats.currentCat = initialCats[myClass];
   console.log(initialCats.currentCat);

   $counter.html(" ");
   $counter.append(initialCats.currentCat.clickCount);
   catCreator();

});

catCreator();

//Clicker counter
$cats.click(function(){
  $counter.html(" ");
  initialCats.currentCat.clickCount++;
  $counter.append(initialCats.currentCat.clickCount);
});*/
