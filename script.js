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
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

MovieContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
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