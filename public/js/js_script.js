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

/*
var bbq = new MenuItem('BBQ Burger', '500 kCal', true, true, "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg");
var chicken = new MenuItem('Chicken Burger', '460 kCal', false, true, "https://www.chicken.ca/assets/RecipePhotos/_resampled/FillWyIxNDQwIiwiNzAwIl0/Moist-Chicken-Burgers.jpg");
var vegan = new MenuItem('Vegan Burger', '380 kCal', true, false, "https://thecheekychickpea.com/wp-content/uploads/2018/07/IMG_1013-2.jpg");
*/
var burgers = [food[0], food[1], food[2]];

var myElement = document.getElementById("menu");
for (var burger in burgers) {
	if (burgers[burger].gluten || burgers[burger].lactose) {
  	var newDiv = document.createElement("div");
  	var burger = document.createTextNode(burgers[burger].name);
    newDiv.appendChild(burger);
  	myElement.appendChild(newDiv);
  }
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

  if (burgers[burger].gluten) {
    var newGluten = document.createElement("li");
    var gluten = document.createTextNode("Contains gluten");
    newGluten.appendChild(gluten);
    burgerInfo.appendChild(newGluten)
  }

  if (burgers[burger].lactose) {
    var newLactose = document.createElement("li");
    var lactose = document.createTextNode("Contains lactose");
    newLactose.appendChild(lactose);
    burgerInfo.appendChild(newLactose)
  }

  myElement.appendChild(burgerInfo);
}
