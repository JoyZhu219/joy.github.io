//function getSelectValue() {
//  var selectedValue = document.getElementById("list").value;
//  console.log(selectedValue);
//}

function changePage(){
  var values = document.getElementById('list');
  var input = values.value;
  var firstResponse = document.getElementById("responseOne");
  var secondResponse = document.getElementById("responseTwo");
  if (input === "r1"){
    console.log("This is Response One!");
    if (firstResponse.style.display != "block") {
      firstResponse.style.display = "block";
      secondResponse.style.display = "none";
    }
  } if (input === "r2"){
    console.log("This is Response Two");
    if (secondResponse.style.display != "block") {
      secondResponse.style.display = "block";
      firstResponse.style.display = "none";
    }
  }
}

const buttonClick = document.querySelector("#go");
buttonClick.addEventListener('click', changePage);

const text = document.querySelector('.quotation');
const content = text.textContent;
const splitContent = content.split("");
text.textContent = "";

for (let i=0; i < splitContent.length; i++) {
  text.innerHtml += "<span>" + splitContent[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if (char === splitContent.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}
