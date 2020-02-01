const { HashTable } = require("../index");

function Ticket(source, destination) {
  this.source = source;
  this.destination = destination;
}

function reconstructTrip(tickets, length) {
  let ht = new HashTable(length);
  const path = new Array(length).fill(null);

  // insert into hashtable
  for (let i = 0; i < length; i++) {
    ht.insert(tickets[i].source, tickets[i].destination);
  }

  // init first move in itinerary
  let target = ht.retrieve("NONE");

  for (let j = 0; j < length; j++) {
    // chain together source and destination for each
    path[j] = target.value;
    target = ht.retrieve(target.value);
  }
  return path
}
module.exports = { Ticket, reconstructTrip };

// let ticket_1 = new Ticket("NONE", "PDX");
// let ticket_2 = new Ticket("PDX", "DCA");
// let ticket_3 = new Ticket("DCA", "NONE");

// let tickets = [ticket_1, ticket_2, ticket_3];

// let expected = ["PDX", "DCA", "NONE"];
// let result = reconstructTrip(tickets, 3);
// console.log(result);
