describe('Ticket', function() {
  it("returns the base price of a ticket", function() {
      var testTicket = new Ticket(5);
      expect(testTicket.basePrice).to.equal(5);
  });

  it("returns the senior discount price if age is greater than 60", function() {
    var seniorTicket = new Ticket(5);
    expect(seniorTicket.seniorPrice()).to.equal(3);
  });

  it("returns the movie on a ticket", function() {
    var testTicket = new Ticket(5, "Mad Max");
    expect(testTicket.movie).to.equal("Mad Max");
  });
});
