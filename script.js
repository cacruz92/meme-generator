const form = document.querySelector('#userInput');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const backgroundImage = document.querySelector('#image');
const results = document.querySelector('#results');

form.addEventListener('submit', function(e){
  e.preventDefault();
  if(topText.value === "" || bottomText.value === "" || backgroundImage.value === ""){
    alert ("Please fill in all fields!");
    return;
  } 
  else {
    let top = document.createElement('p');
    let bottom = document.createElement('p');
    let image = document.createElement('img');
    let meme = document.createElement('div');
    top.innerText = topText.value;
    bottom.innerText = bottomText.value;
    image.src = backgroundImage.value;

    top.classList.add("textFormatTop");
    bottom.classList.add("textFormatBottom");

    let removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.classList.add("removeButton");

    removeButton.addEventListener('click', function(){
      meme.remove();
    });

  results.append(meme);
  meme.append(top);
  meme.append(bottom);
  meme.append(image);
  meme.append(removeButton);
  form.reset();
}
});