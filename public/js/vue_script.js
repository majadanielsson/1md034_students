
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

var test = new Vue({
  el: '#menu',
  data: {
    burgers: [food[0], food[1], food[2]]
  }
})

/*
ingredients: [
  {kCal: food[0].kCal, lact: "Contains lactose", glut: "Contains gluten"},
  {kCal: food[1].kCal, lact: "Contains lactose", glut: "Gluten free"},
  {kCal: food[2].kCal, lact: "Lactose free", glut: "Gluten free"}
]
*/
