"use strict";

// variables for tracking and displaying points™
let pointTotalHTML = document.getElementById("pointTotal").innerHTML;
let points = 0;

// deltaPoints = points™ earned or lost
function updatePoints(deltaPoints) {
    // update points™ total
    points = deltaPOints;
}

// initial points update on page load
window.addEventListener("load", (event) => {
    pointTotalHTML = `you currently have ${points} points.`;
  });