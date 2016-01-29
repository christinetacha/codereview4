describe("pizza", function() {
  it("will create a pizza object with the properties of size", function() {
    var testPizza = new Pizza("small");
    expect(testPizza.pizzaSize).to.equal("small");
  });
});
