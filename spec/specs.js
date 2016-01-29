describe("pizza", function() {
  it("will create a pizza object with the properties of size and topping number", function() {
    var testPizza = new Pizza("small", 2);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.toppingNumber).to.equal(2);
  });
});
