
new Vue({
  el: '#menu',
  data: {
    burgers: food
  }
})

new Vue({
  el: '#ord',
  data: {
    clicked: false,
  	name: '',
    email: '',
    street: '',
    house: '',
    payment: '',
    gender: '',
    burgers: ''
  },
  methods: {
    ordered: function() {
      this.clicked = true;
    	var info = orderInfo();
      this.name = "Name: " + info[0];
      this.email = "Email: " + info[1];
      this.street = "Street: " + info[2];
      this.house = "House: " + info[3];
      this.payment = "Payment option: " + info[4];
      this.gender = "Gender: " + info[5];
      this.burgers = "Burgers ordered: " + info[6];
    }
  }
})
