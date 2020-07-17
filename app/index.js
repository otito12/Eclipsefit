import document from "document";
import * as messaging from "messaging";

let background = document.getElementById("background");

import * as fs from "fs";

let json_object  = fs.readFileSync("/mnt/assets/resources/db/motions.txt", "json");
console.log("JSON guid: " + JSON.stringify(json_object));

let mybutton = document.getElementById("mybutton");
mybutton.onactivate = function(evt) {
  document.replaceSync("/mnt/assets/resources/guis/ass.gui");
}