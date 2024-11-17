// get Attribute("") and set attribute("","");
let div=document.querySelector("#box");
console.log(div);
let id=div.getAttribute("id");
console.log(id);
let att=div.getAttribute("name");
console.log(att);
let para=document.querySelector(".para");
console.log(para.getAttribute("class"));
para.setAttribute("class","para1");
console.log(para.getAttribute("class"));

// style
let box=document.querySelector("#box");
box.style.backgroundColor="black";
box.style.fontSize="10px";
box.innerText="Hii";
// box.style.visibility="hidden";


// InsertElement
box.append("uh");
box.prepend("yugfh");

let button=document.createElement("button");
button.innerText="click me";
box.append(button);

box.before(button);
// box.after(button);

let newheading=document.createElement("h1");
newheading.innerHTML="<i>Its a good day </i>";
document.querySelector("body").prepend(newheading);

document.querySelector(".para1").remove();
