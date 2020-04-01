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

// Each gModal calls the next gModal in its callback function, that's why it only calls the first one on button click
ticketBtn.addEventListener("click", function() {
    adultsPrompt().show();
});

// Return prompt that asks how many adults
function adultsPrompt() {
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
            cancelAlert().show();
          }
        },{
          content: "Confirm",
          classes: "gmodal-button-blue",
          bindKey: 13, /* Enter */
          callback: function(modal){
            // Update number of adults
            adults = Number(document.getElementById("adults").value);
            modal.hide();
            // Call next prompt
            seniorsPrompt().show();
          }
        }
      ],
      close: {
        closable: false,
      }
  })
  return adultsPrompt;
}

// Return prompt that aks how many seniors
function seniorsPrompt() {
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
          cancelAlert().show();
        }
      },{
        content: "Confirm",
        classes: "gmodal-button-blue",
        bindKey: 13, /* Enter */
        callback: function(modal){
          // Update number of seniors
          seniors = Number(document.getElementById("seniors").value);
          modal.hide();
          // Call next prompt
          youthPrompt().show();
        }
      }
    ],
    close: {
      closable: false,
    }
  })
  return seniorsPrompt;
}

// Return prompt that aks how many youth
function youthPrompt() {
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
          cancelAlert().show();
        }
      },{
        content: "Confirm",
        classes: "gmodal-button-blue",
        bindKey: 13, /* Enter */
        callback: function(modal){
          // Update number of adults
          youth = Number(document.getElementById("youth").value);
          // Calculate total price
          totalPrice = (adults * 10) + (seniors * 9) + (youth * 5);
          modal.hide();
          under6Prompt().show();
        }
      }
    ],
    close: {
      closable: false,
    }
  })
  return youthPrompt;
}

// Return prompt that aks how many under 6
function under6Prompt() {
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
          cancelAlert().show();
        }
      },{
        content: "Confirm",
        classes: "gmodal-button-blue",
        bindKey: 13, /* Enter */
        callback: function(modal){
          modal.hide();
          // Set HTML of where button was to the total price message
          document.getElementById("tickets").innerHTML =
          "<strong>Your total is:</strong><br>" +
          "$" + totalPrice + "<br>" +
          "Enjoy the flowers!";
          if(isNaN(totalPrice)) {
              document.getElementById("tickets").innerHTML = "You didn't put in all numbers!"
          }
          // totalAlert.show();
        }
      }
    ],
    close: {
      closable: false,
    }
  })
  return under6Prompt;
}

// Return prompt that appears if user cancels one of the other prompts
function cancelAlert() {
  var cancelAlert = new gModal({
    title: null,
    body: '<center>You don\'t want to buy tickets? Ok, that\'s fine, please come again!</center>',
    buttons: [
      {
        content: "OK",
        classes: "gmodal-button-blue", // or red, green, grey
        bindKey: 13, /* Enter */
        callback: function(modal){
          modal.hide();
        }
      }
    ],
    close: {
      closable: false
    }
  })
  return cancelAlert;
}

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

// Makes navbar no longer transparent when scrolled down
$(function() {
    $(document).scroll(function() {
        var nav = $("#main-navbar");
        nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
    })
})