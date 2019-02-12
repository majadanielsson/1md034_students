/*
'use strict';
var socket = io();

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
      this.payment = "Payment option: " + info[2];
      this.gender = "Gender: " + info[3];
      this.burgers = "Burgers ordered: " + info[4];
    }
  }
})
*/
