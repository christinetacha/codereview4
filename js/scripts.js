function Pizza(pizzaSize, toppingNumber) {
  this.pizzaSize = pizzaSize;
  this.toppingNumber = toppingNumber;
}

Pizza.prototype.price = function() {
  var total = 0;
  if (this.pizzaSize === "small") {
    total = total + 10;
  } else if(this.pizzaSize === "medium") {
    total = total + 12;
  } else if(this.pizzaSize === "large") {
    total = total + 14;
  }
  total = total + this.toppingNumber;
  return total;
}

function Order(pizzaDelivery) {
  this.pizzaDelivery = pizzaDelivery;
}

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
