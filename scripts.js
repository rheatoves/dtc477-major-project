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

let BlueberryMuffins = new Recipe("Blueberry Muffins", "bm-ingredients.html", "bm-directions.html", "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-12/KABC_Quick-Breads_Blueberry-Muffin_08304.jpg?itok=EM7XxPfL")

let EggMuffins = new Recipe("Egg Muffins", "em-ingredients.html", "em-directions.html", "https://www.wholesomeyum.com/wp-content/uploads/2017/08/wholesomeyum-low-carb-keto-egg-muffins-egg-muffin-cups-recipe-5.jpg")

let EggSalad = new Recipe("Egg Salad", "es-ingredients.html", "es-directions.html", "https://www.culinaryhill.com/wp-content/uploads/2022/05/Egg-Salad-Culinary-Hill-1200x800-1.jpg")

let TofuScramble = new Recipe("Tofu Scramble", "ts-ingredients.html", "ts-directions.html", "https://www.hotforfoodblog.com/wp-content/uploads/2014/07/theperfecttofuscramble_filtered1.jpg")

let VanillaSmoothie = new Recipe("Vanilla Protein Smoothie", "vs-ingredients.html", "vs-directions.html", "https://deliciousmadeeasy.com/wp-content/uploads/2017/10/vanilla-smoothie-3-of-3-720x720.jpg")

let HummusBowls = new Recipe("Hummus Bowls", "hb-ingredients.html", "hb-directions.html", "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FSeries%2F2019-07-snapshot-cooking-hummus-bowls%2FHummus-Bowl-Mediterranean_002")

let ChickenFajitas = new Recipe("Chicken Fajitas", "cf-ingredients.html", "cf-directions.html", "https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg?crop=1xw:0.8435812837432514xh;center,top")

let ChickenStirfry = new Recipe("Chicken Stir-Fry", "csf-ingredients.html", "csf-directions.html", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/05/Chicken-Stir-Fry-main-1.jpg")

let Chili = new Recipe("Chili", "c-ingredients.html", "c-directions.html", "https://www.sipandfeast.com/wp-content/uploads/2023/01/classic-chili-recipe-snippet.jpg")

let MacCheese = new Recipe("Mac n Cheese", "mc-ingredients.html", "mc-directions.html", "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Mac-and-Cheese-Square.jpg")

let BeefStew = new Recipe("Beef Stew", "bs-ingredients.html", "bs-directions.html", "https://thecozycook.com/wp-content/uploads/2020/09/Slow-Cooker-Beef-Stew-Recipe-f.jpg")

let Dates = new Recipe("Date Energy Balls", "d-ingredients.html", "d-directions.html", "https://www.wellplated.com/wp-content/uploads/2015/01/Fig-and-Almond-No-Bake-Energy-Bites.-Easy-healthy-vegan-and-gluten-free.jpg")

let CinnamonBread = new Recipe("Cinnamon Raisin Bread", "crb-ingredients.html", "crb-directions.html", "https://littlespoonfarm.com/wp-content/uploads/2023/01/cinnamon-raisin-swirl-sourdough-bread-recipe.jpg")

let LemonSnack = new Recipe("Lemon Snack Mix", "lsm-ingredients.html", "lsm-directions.html", "https://bakeatmidnite.com/wp-content/uploads/2020/11/lemon-chex-mix-pin-500x375.jpg")

let GarlicBread = new Recipe("Garlic Bread Bites", "gbb-ingredients.html", "gbb-directions.html", "https://www.cakenknife.com/wp-content/uploads/2015/11/Garlic-Bread-Bites-with-Honey-Butter-Thumbnail-480x360.jpg")

let TexMex = new Recipe("Tex Mex Popcorn", "tmp-ingredients.html", "tmp-directions.html", "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/tex-mex-popcorn.jpg.jpeg?itok=tt64m__X")

// Adding event listener to wait for the DOM to load before running the AJAX code to load the 2 files
document.addEventListener("DOMContentLoaded", function() {
    
    HomePage.addToNav();
    BreakfastBurritos.addToNav();
    Pancakes.addToNav();
    BakedOats.addToNav();
    BreakfastCasserole.addToNav();
    BlueberryMuffins.addToNav();
    EggMuffins.addToNav();
    EggSalad.addToNav();
    TofuScramble.addToNav();
    VanillaSmoothie.addToNav();
    HummusBowls.addToNav();
    ChickenFajitas.addToNav();
    ChickenStirfry.addToNav();
    Chili.addToNav();
    MacCheese.addToNav();
    BeefStew.addToNav();
    Dates.addToNav();
    CinnamonBread.addToNav();
    LemonSnack.addToNav();
    GarlicBread.addToNav();
    TexMex.addToNav();

});