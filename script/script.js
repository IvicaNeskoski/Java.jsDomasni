
// Create an object
var recipe = {
    title: "Chocolate cake",
    servings:  15,
    ingredients: [
        "2 large eggs","1 teaspoon salt","3/4 cup unsweetened cocoa powder","1/2 teaspoon baking powder"
    ]
};

// On separate lines
var {title: torta,servings,ingredients} = recipe;
console.log("Mole: " + " " + torta);
console.log("Serves: " + " " + servings);
console.log("Ingredients:")
console.log(ingredients[0]);
console.log(ingredients[1]);
console.log(ingredients[2]);
console.log(ingredients[3]);



// array called programming languages
var programming_language = [
    "Java","c++","C#","JavaScript","PHP","Python","SQL","Kotlin"
];
console.log(programming_language);

// In the console, output the length of the array
console.log("Length of our array = " + "" + programming_language.length);

// Remove the last item of the array
var last_intem = programming_language.pop();
console.log("Remove the last item: " + " " + last_intem + "," + " intems remaining " + " " + programming_language);

// Remove the third item of the array, and in its position, store another programming language (as a string)
var third_intem = programming_language.splice(2,1,"MATLAB");
console.log(programming_language);
