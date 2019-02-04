/*
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

var burgers = [food[0], food[1], food[2]];

//To overwrite what is written in "menu" for Vue purposes
document.getElementById("menu").innerHTML = "";

var myElement = document.getElementById("menu");
for (var burger in burgers) {
  var newDiv = document.createElement("div");
	var burgerName = document.createTextNode(burgers[burger].name);
  newDiv.appendChild(burgerName);
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = burgers[burger].name;
  checkbox.name = "ordered";
  newDiv.appendChild(checkbox);
	myElement.appendChild(newDiv);
}

for (var burger in burgers) {
  var myImage = new Image(150, 100);
  myImage.src = burgers[burger].image;
  myElement.appendChild(myImage);
}

for (var burger in burgers) {
  var burgerInfo = document.createElement("ul");

  var newkCal = document.createElement("li");
  var kCal = document.createTextNode(burgers[burger].kCal);
  newkCal.appendChild(kCal);
  burgerInfo.appendChild(newkCal)

  if (burgers[burger].gluten || burgers[burger].lactose) {
    if (burgers[burger].gluten) {
      var newGluten = document.createElement("li");
      var gluten = document.createTextNode("Contains gluten");
      newGluten.appendChild(gluten);
      burgerInfo.appendChild(newGluten)
    }
    else {
      var newGluten = document.createElement("li");
      var gluten = document.createTextNode("Gluten free");
      newGluten.appendChild(gluten);
      burgerInfo.appendChild(newGluten)
    }

    if (burgers[burger].lactose) {
      var newLactose = document.createElement("li");
      var lactose = document.createTextNode("Contains lactose");
      newLactose.appendChild(lactose);
      burgerInfo.appendChild(newLactose)
    }
    else {
      var newLactose = document.createElement("li");
      var lactose = document.createTextNode("Lactose free");
      newLactose.appendChild(lactose);
      burgerInfo.appendChild(newLactose)
    }
  }
    myElement.appendChild(burgerInfo);
}

function orderInfo() {

  var name = document.getElementsByName("fn")[0].value;
  var email = document.getElementsByName("e")[0].value;
  var street = document.getElementsByName("st")[0].value;
  var house = document.getElementsByName("hs")[0].value;
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
  var infoArray = [name, email, street, house, payment, gender, orderedBurgers];
  console.log(infoArray);
  return infoArray;
}

/*
function printInfo() {
  var info = customerInfo();
  document.getElementById("filled").innerHTML = info;
  console.log(info);
}
*/
//document.getElementById("submit").addEventListener("click", console.log("Button clicked!"));
