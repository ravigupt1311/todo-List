let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");

inputTag.addEventListener("keydown", function (e) {
  console.log(e);
  let key = e.key;
  if (key == "Enter") {
    let value = inputTag.value;
    if (value.length == 0) {
      return;
    }
    inputTag.value = "";
    let liTag = document.createElement("li");
    liTag.innerHTML = `<div>${value}</div> 
    <div class="delete"><i class="fa fa-trash-o" style="font-size:24px"></i></div>`;

    handleRemoval(liTag);
    ulTag.appendChild(liTag);
  }
});

function handleRemoval(liTag) {
  let deleteDiv = liTag.querySelector(".delete");
  deleteDiv.addEventListener("click", function () {
    liTag.remove();
  });
}

//
//  <div class= "delete"><i class="fa fa-trash-o" style="font-size:48px;color:red"></i></div>
