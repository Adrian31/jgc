var model = {
  currentModule: null,

/*"Governance_and_Management" : {
    modules :[
      {
        name: "one"
      },
      {
        name: "two"
      },
      {
        name: "three"
      }
    ]
  }*/
  modules: [
      {
        name: 'Marketing and Sponsorship',
        lessons: [1,2,3,4,5,6,7,8,9,10,11,12]
      },
]
  /*modules: [
    {
      name: 'Governance and Management',
      src: "images/cat1.jpg"
      //imgAttribution
    },
  ]*/
}

/* ========== Octopus ========== */
var octopus = {
  init:function() {
    //set our current cat to the first one in the list
    //model.currentCat = model.cats[0];
    model.currentModule = model.modules[0];

    //tell our views to initialize
    moduleListView.init();
  },


  getModules: function(){
    return model.modules;
  },

  //set the currently selected cat to the object passed in
  /*setCurrentCat: function(cat) {
    model.currentCat = cat;
  },*/

  /*incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  },*/

};

var moduleListView = {
  init: function() {
    // Store the DOM element for easy access later
    this.moduleListElem = document.getElementById('bottom');
    //render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function() {
    // get the cats we'll be rendering from the octopus
    var modules = octopus.getModules();

    //empty the cat list
    //this.moduleListElem.innerHTML = '';

    // loop over the cats
    for(var i = 0; i < modules.length; i++){
      // this is the cat we're currently looping over
      var module = modules[i];

      //make a new cat list item and set its text
      var elem = document.createElement('h4');
      elem.textContent = module.name;

      // on click, setCurrentCat and render the catView
      // (this uses our closure-in-a-loop trick to connect the view)
      //of the cat variable to the click event function)
      /*elem.addEventListener('click', (function(cat){
        return function() {
          octopus.setCurrentCat(cat);
          catView.render();
        };
      })(cat));

      this.moduleListElem.appendChild(elem);*/
    };
  }
};

//make it go
octopus.init();
