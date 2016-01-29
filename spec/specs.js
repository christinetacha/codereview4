describe("pizza", function() {
  it("will create a pizza object with the properties of size and topping number", function() {
    var testPizza = new Pizza("small", 2);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.toppingNumber).to.equal(2);
  });
  it("will create a formula based on size and topping selection to find out the price of the pizza", function() {
    var testPizza = new Pizza("small", 2);
    expect(testPizza.price()).to.equal(12);
  });
  it("will add a new size condition to prototype price", function() {
    var testPizza = new Pizza("medium", 2);
    expect(testPizza.price()).to.equal(14);
  });
  it("will add a large size condition to prototype price", function() {
    var testPizza = new Pizza("large", 2);
    expect(testPizza.price()).to.equal(16);
  });
});

describe("order", function() {
  it("will create an object for user's order with the property for delivery", function() {
    var testOrder = new Order();
    expect(testOrder.pizzaDelivery()).to.equal("delivery");
  });
});
