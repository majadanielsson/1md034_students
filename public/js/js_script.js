/*--------------Not used anywhere------------------------
function MenuItem(name, kCal, gluten, lactose, image) {
  this.name = name;
  this.kCal = kCal;
  this.gluten = gluten;
  this.lactose = lactose;
  this.image = image;
}


function nameAndkCal(burger) {
  return [burger.name, burger.kCal];
}
--------------------------------------------------------*/

/////////////////////Comment this section out to only run vue-code//////////////
//To overwrite what is written in "menu" for Vue purposes
document.getElementById("menu").innerHTML = "";


var selectMenu = document.getElementById("menu");
for (var burger in food) {
  var newDiv = document.createElement("div");
	var burgerName = document.createTextNode(food[burger].name);
  newDiv.appendChild(burgerName);
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = food[burger].name;
  checkbox.name = "ordered";
  newDiv.appendChild(checkbox);

  var myImage = new Image(200, 150);
  myImage.src = food[burger].image;
  newDiv.appendChild(myImage);

  var burgerInfo = document.createElement("ul");

  var newkCal = document.createElement("li");
  var kCal = document.createTextNode(food[burger].kCal);
  newkCal.appendChild(kCal);
  newDiv.appendChild(newkCal);

  if (food[burger].gluten) {
    var newGluten = document.createElement("li");
    var gluten = document.createTextNode("Contains gluten");
    newGluten.appendChild(gluten);
    newDiv.appendChild(newGluten);
  }

  if (food[burger].lactose) {
    var newLactose = document.createElement("li");
    var lactose = document.createTextNode("Contains lactose");
    newLactose.appendChild(lactose);
    newDiv.appendChild(newLactose);
  }

  if (!food[burger].lactose && !food[burger].gluten) {
    var newFree = document.createElement("li");
    var free = document.createTextNode("Lactose and gluten free!");
    newFree.appendChild(free);
    newDiv.appendChild(newFree);
  }

	selectMenu.appendChild(newDiv);
}

document.getElementById("submit").addEventListener("click", console.log("Button clicked!"));

////////////////////////////////////////////////////////////////////////////////////////////

function orderInfo() {

  var name = document.getElementsByName("fn")[0].value;
  var email = document.getElementsByName("e")[0].value;
  var payment = document.getElementsByName("pym")[0].value;

  var genderRadios = document.getElementsByName("gender");
  var gender;
  for (var i = 0; i < genderRadios.length; i++) {
    if(genderRadios[i].checked) {
        gender = genderRadios[i].id;
        break;
    }
  }
  var burgersChecked = document.getElementsByName("ordered");
  var orderedBurgers = [];
  for (var i = 0; i < burgersChecked.length; i++) {
    if(burgersChecked[i].checked) {
      orderedBurgers.push(burgersChecked[i].id);
    }
  }
  var infoArray = [name, email, payment, gender, orderedBurgers];
  //Just for testing
  console.log(infoArray);
  return infoArray;
}
