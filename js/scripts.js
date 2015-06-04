function Ticket(movie) {
  this.basePrice = 5;
  this.movie = movie;
}

Ticket.prototype.seniorPrice = function() {
  this.basePrice = this.basePrice - 2;
}

Ticket.prototype.matinee = function() {
  this.basePrice = this.basePrice -1;
}

$(document).ready(function(){
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var inputtedTicketType = $("#ticket-type").val();
    var inputtedTime = $('input[name="times"]:checked').val();
    var inputtedMovie = $("#movie").val();

    var newTicket = new Ticket(inputtedMovie);

    if (inputtedTicketType === "senior" && (inputtedTime === "matinee" || inputtedTime === "standard")) {
       newTicket.seniorPrice();
     }
     else if (inputtedTicketType === "standard" && inputtedTime === "matinee") {
       newTicket.matinee();
    } else {
      newTicket.basePrice;
    }
    debugger;



    $("ul#tickets").append("<li><span class='ticket'>" + "$" + newTicket.basePrice + ".00" + ", " + newTicket.movie)

    $("input#ticket-type").val("");
    $("input#movie").val("");
  });
});
