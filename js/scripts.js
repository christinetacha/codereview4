function Pizza(pizzaSize, toppings, price) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.calculatePrice = function() {
  var total = 0;
  if (this.pizzaSize === "small") {
    this.price += 10;
  } else if (this.pizzaSize === "medium") {
    this.price += 12;
  } else if (this.pizzaSize === "large")
    this.price += 14;
  } else {
    return 16;
  }
}

// Pizza.prototype.price = function() {
//   var total = 0;
//   if (this.pizzaSize === "small") {
//     total = total + 10;
//   } else if(this.pizzaSize === "medium") {
//     total = total + 12;
//   } else if(this.pizzaSize === "large") {
//     total = total + 14;
//   }
//   total = total + this.toppingNumber;
//   return total;
// }



// function Order(pizzaDelivery, pizzaPickup) {
//   this.pizzaDelivery = pizzaDelivery;
//   this.pizzaPickup = pizzaPickup;
// }
//
// Order.prototype.deliveryOrPickup = function() {
//   var fee = 0;
//   if (this.pizzaDelivery === "delivery") {
//     fee = fee + 2;
//   } else if (this.pizzaPickup === "pickup") {
//     fee === 0;
//   }
//   total = total + fee + this.toppingNumber;
//   return total;
// }

// $(function() {
//   $("#pizzaOrder").submit(function(event) {
//
//     var size = $('input[name=size]:checked', '#pizzaOrder').val();
//     var toppings = $('input[name=toppings]:checked', '#pizzaOrder').val();
//     // var deliveryOrPickup = $('input[name=deliveryOrPickup]:checked', '#pizzaOrder').val();
//
//     var userPizza = new Pizza(pizzaSize, toppingNumber)
//
//     $("#appendHere").text(userPizza.cost());
//
//     event.preventDefault();
//    });
//  });


// working code for the basics
// function Pizza(pizzaSize, toppingNumber) {
//   this.pizzaSize = pizzaSize;
//   this.toppingNumber = toppingNumber;
// }
//
// Pizza.prototype.price = function() {
//   var total = 0;
//   if (this.pizzaSize === "small") {
//     total = total + 10;
//   } else if(this.pizzaSize === "medium") {
//     total = total + 12;
//   } else if(this.pizzaSize === "large") {
//     total = total + 14;
//   }
//   total = total + this.toppingNumber;
//   return total;
// }
