var ticketBtn = document.querySelector("#ticket-btn");
var adults;
var seniors;
var youth;
var totalPrice;

// ticketBtn.addEventListener("click", function() {
//     var adults = prompt("How many adults?");
//     var seniors = prompt("How many seniors?");
//     var youth = prompt("How many youth?");
//     prompt("How many under 6?");
//     var totalPrice = (adults * 10) + (seniors * 9) + (youth * 5);
//     alert("Ok, your total price is $" + totalPrice + "! Enjoy the flowers :D");
// });

ticketBtn.addEventListener("click", function() {
    adultsPrompt.show();
});

var adultsPrompt = new gModal({
    title: "Buy Tickets",
    body: "<center><p>How many adults?</p><input type='text' id='adults'></center>",
    buttons: [
      {
        content: "Cancel",
        classes: "gmodal-button-gray",
        bindKey: false, /* no key! */
        callback: function(modal){
          modal.hide();
          cancelAlert.show();
        }
      },{
        content: "Confirm",
        classes: "gmodal-button-blue",
        bindKey: 13, /* Enter */
        callback: function(modal){
          adults = Number(document.getElementById("adults").value);
          modal.hide();
          seniorsPrompt.show();
        }
      }
    ],
    close: {
      closable: false,
    }
})

var seniorsPrompt = new gModal({
    title: "Buy Tickets",
    body: "<center><p>How many seniors?</p><input type='text' id='seniors'></center>",
    buttons: [
      {
        content: "Cancel",
        classes: "gmodal-button-gray",
        bindKey: false, /* no key! */
        callback: function(modal){
          modal.hide();
          cancelAlert.show();
        }
      },{
        content: "Confirm",
        classes: "gmodal-button-blue",
        bindKey: 13, /* Enter */
        callback: function(modal){
          seniors = Number(document.getElementById("seniors").value);
          modal.hide();
          youthPrompt.show();
        }
      }
    ],
    close: {
      closable: false,
    }
})

var youthPrompt = new gModal({
    title: "Buy Tickets",
    body: "<center><p>How many youth?</p><input type='text' id='youth'></center>",
    buttons: [
      {
        content: "Cancel",
        classes: "gmodal-button-gray",
        bindKey: false, /* no key! */
        callback: function(modal){
          modal.hide();
          cancelAlert.show();
        }
      },{
        content: "Confirm",
        classes: "gmodal-button-blue",
        bindKey: 13, /* Enter */
        callback: function(modal){
          youth = Number(document.getElementById("youth").value);
          totalPrice = (adults * 10) + (seniors * 9) + (youth * 5);
          modal.hide();
          under6Prompt.show();
        }
      }
    ],
    close: {
      closable: false,
    }
})

var under6Prompt = new gModal({
    title: "Buy Tickets",
    body: "<center><p>How many under 6?</p><input type='text' id='under6'></center>",
    buttons: [
      {
        content: "Cancel",
        classes: "gmodal-button-gray",
        bindKey: false, /* no key! */
        callback: function(modal){
          modal.hide();
          cancelAlert.show();
        }
      },{
        content: "Confirm",
        classes: "gmodal-button-blue",
        bindKey: 13, /* Enter */
        callback: function(modal){
          modal.hide();
          document.getElementById("tickets").innerHTML =
          "<strong>Your total is:</strong><br>" +
          "$" + totalPrice + "<br>" +
          "Enjoy the flowers!";
        //   totalAlert.show();
        }
      }
    ],
    close: {
      closable: false,
    }
})

var cancelAlert = new gModal({
    title: null,
    body: '<center>You don\'t want to buy tickets? Ok, that\'s fine, please come again!</center>',
    buttons: [
      {
        content: "OK",
        classes: "gmodal-button-blue", // or red, green, grey
        bindKey: 13, /* Enter */
        callback: function(modal){
          console.log("You just accepted the Alert Modal");
          modal.hide();
        }
      }
    ],
    close: {
      closable: false
    }
})

// var totalAlert = new gModal({
//     title: null,
//     body: "<center>Ok, your total price is $" + totalPrice +"! Enjoy the flowers :D</center>",
//     buttons: [
//       {
//         content: "OK",
//         classes: "gmodal-button-blue", // or red, green, grey
//         bindKey: 13, /* Enter */
//         callback: function(modal){
//           console.log(totalPrice);
//           modal.hide();
//         }
//       }
//     ],
//     close: {
//       closable: false
//     }
// })