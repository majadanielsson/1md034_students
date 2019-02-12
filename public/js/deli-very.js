/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#errything',
  data: {
    burgers: food,
    orders: [],
    tempOrder: [],
    clicked: false,
    ordInfo: [],
    persInfo: [],
  	name: '',
    email: '',
    payment: '',
    gender: '',
    burgersOrd: ''
  },
  methods: {
    ordered: function() {
      this.clicked = true;
    	this.ordInfo = orderInfo();
      this.name = "Name: " + this.ordInfo[0];
      this.email = "Email: " + this.ordInfo[1];
      this.payment = "Payment option: " + this.ordInfo[2];
      this.gender = "Gender: " + this.ordInfo[3];
      this.burgersOrd = "Burgers ordered: " + this.ordInfo[4];
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      this.ordered();
      console.log(this.orders);
      this.orders.push(this.tempOrder[0]);
      console.log(this.orders);
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: this.tempOrder[0].details.x,
                                           y: this.tempOrder[0].details.y },
                                orderItems: [this.burgersOrd],
                                persInfo: [this.ordInfo[0], this.ordInfo[1], this.ordInfo[2], this.ordInfo[3]]
                              });
    },
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.tempOrder =  [{ details: { x: event.clientX - 10 - offset.x,
                                      y: event.clientY - 10 - offset.y }
                    }];
    }
  }
});
