const form = document.querySelector("#form");
let image = document.querySelector("#image");
let imageButton = document.querySelector("#preview-image-button");
let topTextInput = document.querySelector("#top");
let topButton = document.querySelector("#preview-top-text");
let bottomTextInput = document.querySelector("#bottom");
let bottomButton = document.querySelector("#preview-bottom-text");
let submitButton = document.querySelector("#submit");
let imgDiv = document.querySelector("#meme-image");
let topDiv = document.querySelector("#top-input");
let bottomDiv = document.querySelector("#bottom-input");
let submitDiv = document.querySelector("#submit-div");
let list = document.querySelector('#list');

document.addEventListener("keypress", function(e){
  if (e.which == '13') {
    e.preventDefault();
  }
});

list.addEventListener("click", function(e){
  if (e.target.classList == "close") {
    e.target.parentNode.remove();
  }
});

form.addEventListener("click", function(e){
  let clickedId = e.target.id;
  
  if (clickedId === 'preview-image-button') {  
    let newImg = document.createElement("img");
    let lis = document.querySelectorAll("li");
    let li = lis[0];

    topDiv.removeAttribute("hidden");
    imgDiv.setAttribute("hidden", '');
    
    meme = image.value;

    li.prepend(newImg);
    newImg.setAttribute('src', meme);    

  } else if (clickedId === 'preview-top-text') {
    let newP = document.createElement("p");
    let topText = topTextInput.value;
    
    let lis = document.querySelectorAll("li");
    let li = lis[0];


    bottomDiv.removeAttribute("hidden");
    topDiv.setAttribute("hidden", '');

    newP.setAttribute("class", "top")

    newP.innerText = topText;
    li.append(newP);

  } else if (clickedId === 'preview-bottom-text') {
    let newP = document.createElement("p");
    let closeP = document.createElement("p");
    let bottomText = bottomTextInput.value;
    let lis = document.querySelectorAll("li");
    let li = lis[0];

    submitDiv.removeAttribute("hidden");
    bottomDiv.setAttribute("hidden", '');

    newP.setAttribute("class", "bottom");
    closeP.setAttribute("class", "close");

    closeP.innerText = "X";
    newP.innerText = bottomText;

    li.append(newP);
    li.append(closeP);   
    }
});

form.addEventListener("submit", function(e){
  e.preventDefault();

  let newli = document.createElement("li");

  list.prepend(newli);

  imgDiv.removeAttribute("hidden");
  submitDiv.setAttribute("hidden", '');

  form.reset();
});