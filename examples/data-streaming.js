"use strict";

var sphero = require("../");
var orb = sphero("/dev/rfcomm0");

orb.connect(function() {
  // options for streaming data
  var opts = {
    n: 200,
    m: 1,
    mask1: 0xE0000000,
    pcnt: 0,
    mask2: 0x01800000
  };

  orb.setDataStreaming(opts);

  orb.on("dataStreaming", function(data) {
    console.log("streaming data packet recieved");
    console.log("  data:", data);
  });

  //orb.roll(255, 0);
});
