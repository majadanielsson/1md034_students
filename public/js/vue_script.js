new Vue({
  el: '#menu',
  data: {
    burgers: [food[0], food[1], food[2]]
  }
})
/*
new Vue({
  el: '#order',
  methods: {
    orderClicked: function() {
      var info = orderInfo();
      console.log(info);
    }
  }
})
*/

new Vue({
  el: '#ord',
  data: {
  	here: '',
    info: []
  },
  methods: {
    ordered: function() {
    	this.info = myFunc();
      for (var x in this.info) {
      	this.here += this.info[x] + " ";
      }
    }
  }
})
