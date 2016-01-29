describe("pizza", function() {
  it("will create a pizza object with the properties of size and topping selections and price", function() {
    var testPizza = new Pizza("small", 2, 12);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.toppings).to.equal([]);
    expect(testPizza.price).to.equal(0);
  });
  it("will calculate the price of the pizza based on size", function() {
    var testPizza = new Pizza("small", 2, 12);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.calculatePrice).to.equal(10);
  });
  // it("will create a formula based on size and topping selection to find out the price of the pizza", function() {
  //   var testPizza = new Pizza("small", 2);
  //   expect(testPizza.price()).to.equal(12);
  // });
  // it("will add a medium size condition to prototype price", function() {
  //   var testPizza = new Pizza("medium", 2);
  //   expect(testPizza.price()).to.equal(14);
  // });
  // it("will add a large size condition to prototype price", function() {
  //   var testPizza = new Pizza("large", 2);
  //   expect(testPizza.price()).to.equal(16);
  // });
});
