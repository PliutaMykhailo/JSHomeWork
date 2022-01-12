"use strict";

var login = "Pitter";
var message;

message =
  login == "Pitter"
    ? "Hi"
    : login == "Owner"
    ? "Hello"
    : login == ""
    ? "unknown"
    : "";

console.log(message);
