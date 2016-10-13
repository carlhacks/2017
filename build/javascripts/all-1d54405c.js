//= require_tree .

var update_timer = function() {
  var event = new Date(2016, 3, 10, 9, 30);
  var now = new Date();
  if (event - now > 0) {
    var seconds = Math.floor((event-now)/1000);
    var minutes = Math.floor(seconds/60);
    seconds -= minutes * 60;
    var hours = Math.floor(minutes/60);
    minutes -= hours * 60;
    $("#timer").text("Coding ends in " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds");
    $("#timer-large").html("Coding ends in<br>" + hours + " hours<br>" + minutes + " minutes<br>" + seconds + " seconds");
  } else {
    $("#timer").text("Coding has stopped!");
    $("#timer-large").text("Coding has stopped!");
  }
};

setInterval(update_timer, 1000);
update_timer();
