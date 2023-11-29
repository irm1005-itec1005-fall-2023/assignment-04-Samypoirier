const inputBox = document.getElementById("input-box");
const MovieContainer = document.getElementById("movie-container");

function addTask (){
  if(inputBox.value === ''){
    alert("You must write something");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    MovieContainer.appendChild(li);
    
    let tempButton = document.createElement("button");
    tempButton.textContent = "\u00d7";
    li.appendChild(tempButton);
  }
  inputBox.value = "";
  saveData();
}

MovieContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", MovieContainer.innerHTML);
}
function showMovie(){
  MovieContainer.innerHTML = localStorage.getItem("data");
}
showMovie();