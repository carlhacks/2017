//= require_tree .

var update_timer = function() {
  var event = new Date(2017, 4, 14, 9, 30);
  var now = new Date();
  if (event - now > 0) {
    var seconds = Math.floor((event-now)/1000);
    var minutes = Math.floor(seconds/60);
    seconds -= minutes * 60;
    var hours = Math.floor(minutes/60);
    minutes -= hours * 60;
    var days = Math.floor(hours/24);
    hours -= days * 24;
    $("#timer").text("Registration begins in " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds");
    $("#timer-large").html("Registration begins in<br>" + days + "days<br>" + hours + " hours<br>" + minutes + " minutes<br>" + seconds + " seconds");
  } else {
    $("#timer").text("Registration has ended!");
    $("#timer-large").text("Registration has ended!");
  }
};

setInterval(update_timer, 1000);
update_timer();
