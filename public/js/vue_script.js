
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
    burgers: [food[0], food[1], food[2]],
    ingredients: [
      {kCal: food[0].kCal, lactose: "Contains lactose", gluten: "Contains gluten"},
      {kCal: food[1].kCal, lactose: "Contains lactose", gluten: "Gluten free"},
      {kCal: food[2].kCal, lactose: "Lactose free", gluten: "Gluten free"}
    ]
  }
})
