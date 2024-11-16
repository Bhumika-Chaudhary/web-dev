console.log("Hii");


// Window object : It is created by browser JS does not create it , It is a global object

console.log(window);
window.console.log("Hello");
// window.alert("Hii");
// window.prompt("Your Name");

// Let's start with DOM

// We can access all HTML code in JS because all Html code(elements) convert into a document object which is inside window object;

console.log(document)
console.dir(document) 
// console.dir() is used to print special objects

// everything is a part of window object : ex: console.log() ,console.dir(),alert(),prompt()

// -------------------window --------------
// ---------------------|------------------
// -------------------document-------------
// ---------------------|------------------
// ---------------------html---------------
// -------------/----------------\---------
// ------------head(meta data,title,css file link,otherlinks)-------------body(div,script etc)-------
console.log(document.body);
console.dir(document.body);

// DOM : It is a way to access HTML inside javascript
console.log(document.body.childNodes[1]);

// JS can be used to make dynamic changes
// document.body.childNodes[1].innerText="Hii";

// So, if we want to make dynamic changes without using HTML and CSS files can be done by DOM manipulation

// DOM manipulation
// 1. using ID
let heading=document.getElementById("heading");
console.log(heading);
console.dir(heading);

let head=document.getElementById("head");
console.log(head) //null
// 2. using class ( will return HTML collection)
let element=document.getElementsByClassName("class1");
console.log(element); 

let e=document.getElementsByClassName("class");
console.log(e); //it will return empty collection

// 3. by tag name (return HTMLcollection)
let paras=document.getElementsByTagName("p");
console.log(paras)

// 4. by querySelector (will return the first element by this id,class or tag name)
let elements=document.querySelector(".class1");
console.log(elements);

// 5.by querySelectorAll(will return all the elements by that class, id or tag name) (it returns the NodeList)
let elementss=document.querySelectorAll(".class1");
console.log(elementss);

// Dom manipulation (properties)

// 1. tagName 2.innerText : returns the text content of the element and all its child
// 3.innerHTML 4.textContent : returns textual mcontent even for hidden elements
// console.log(elements.tagName);

// DOM tree has three types of nodes : 1. text node 2.comment nodes 3.element nodes

let div=document.querySelector("div");
console.log(div);
console.log(div.innerText);
console.log(div.innerHTML);
// div.innerText="abcd";

let oldHeading=document.querySelector("h1");
oldHeading.innerText="Bhumika";
console.log(oldHeading);






