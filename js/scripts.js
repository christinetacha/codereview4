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
