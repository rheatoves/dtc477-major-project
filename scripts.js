// function to load text from another file into a DOM element
function loadFileInto(fromFile, whereTo) {

    // initiate the fetch promise
    let remoteData = fetch(fromFile)
        .then( function(response) { 
            // if OK, convert response into text, otherwise trigger the Promise error
            if (response.ok) return response.text();
            else return Promise.reject(response); // trigger error
        } )
        .then( function(responseResult) {
            // update the page
            document.querySelector(whereTo).innerHTML = responseResult;

            // report success
            console.log("Loaded " + fromFile + " into " + whereTo);

        } )
        .catch( function(error){
            // report any errors
            console.log( ("Could not load " + fromFile + " into " + whereTo + ". Specific error: "), error);
        } );
    
}

// define a Recipe object constructor
function Recipe(a, b, c, d) {
    
    this.name = a;
    this.ingredientsFile = b; // file name to the HTML snippet containing this recipe's ingredients list
    this.directionsFile = c; // file name to the HTML snippet containing this recipe's directions list
    this.imageSource = d; // URL or file name to the recipe photo
    
    // update the display with the content for this recipe
    this.display = function() {
        
        document.querySelector("#hero h1").innerHTML = this.name;
        loadFileInto(this.ingredientsFile, '#ingredientsBlock');
        loadFileInto(this.directionsFile, '#directionsBlock');
        document.querySelector("#hero").style.backgroundImage = "url(" + this.imageSource + ")";
        document.title = "Recipe: " + this.name;
        
    } // end of .display() method
    
    // add this recipe to the #navBar ul as a new li tag that is clickable
    this.addToNav = function() {
        
        // create a new element for the navBar
        let newNavLI = document.createElement("li");
        newNavLI.innerHTML = this.name;
        document.querySelector("#navBar ul").appendChild(newNavLI)
        
        // preserve recipe self "this" in a different variable to use within the event listener
        let recipeSelf = this;
        newNavLI.addEventListener("click", function() {
            recipeSelf.display()
            
        });
    } // end of .addToNav() method
    
} // end Recipe() object constructor

let HomePage = new Recipe("Easy & Gluten-Free", "hp-ingredients.html", "hp-directions.html", "https://cdn.shopify.com/s/files/1/0376/8850/8553/articles/Hot_Honey_Holiday_Spread_4_AJB_1.jpg?v=1667842757")

let BreakfastBurritos = new Recipe("Breakfast Burritos", "bb-ingredients.html", "bb-directions.html", "https://www.mommyhatescooking.com/wp-content/uploads/2021/06/Breakfast-Burritos-Set-1-Final-3-1572x2048.jpg")

let Pancakes = new Recipe("Pancakes", "p-ingredients.html", "p-directions.html", "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/20/85/56/CspPqjBqS1G0npE30mXx-075-gluten-free-pancakes.jpg")

let BakedOats = new Recipe("Baked Oats", "bo-ingredients.html", "bo-directions.html", "https://nourisheveryday.com/wp-content/uploads/2018/07/Coconut-Blueberry-Baked-Oats-B.jpg")

let BreakfastCasserole = new Recipe("Breakfast Casserole", "bc-ingredients.html", "bc-directions.html", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/12/Breakfast-Casserole-24.jpg")

let BlueberryMuffins = new Recipe("BlueberryMuffins", "bm-ingredients.html", "bm-directions.html", "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-12/KABC_Quick-Breads_Blueberry-Muffin_08304.jpg?itok=EM7XxPfL")


// Adding event listener to wait for the DOM to load before running the AJAX code to load the 2 files
document.addEventListener("DOMContentLoaded", function() {
    
    HomePage.addToNav();
    BreakfastBurritos.addToNav();
    Pancakes.addToNav();
    BakedOats.addToNav();
    BreakfastCasserole.addToNav();
    BlueberryMuffins.addToNav();

});