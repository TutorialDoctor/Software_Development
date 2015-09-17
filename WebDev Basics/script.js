// This is the javascript file we linked to in index.html. Since we link to it in the head of the document, it runs as soon as the page is loaded.

//The document.write() function writes stuff to the page. It is basically how you print stuff (very useful).
document.write('Javascript printed this!')

// To write on a new line, write a break tag to the document
document.write('<br/>')

// You can write words/strings
document.write('Thanks Tutorial Doctor!')
document.write('<br/>')

// And numbers (no quotes)
document.write(2015)
document.write('<br/>')

// And math problems:
document.write(10+9+8+7+6-5-4-3-2-1*4.5/3.14)
document.write('<br/>')

// You can create variables
var name = "Tutorial Doctor";
var age = 29;
var occupation = "Unemployed :(";
var height = 6.1;
var cool = true;
var favorite_fruit = ['oranges','strawberries','grapes'];

// Then write them to the document...
document.write(name);
document.write('<br/>');

document.write(age);
document.write('<br/>'); 

document.write(occupation);
document.write('<br/>');

document.write(height);
document.write('<br/>');

document.write(cool);
document.write('<br/>');

document.write(favorite_fruit);
document.write('<br/>');

// And you can make functions
function greet()
    {document.write("How are you? ");}

// And call them
greet();

// And that is it for the basics of Javascript.