# javascriptmas-day1
A Christmas countdown timer built with Javascript (see README file for more info).
Original post on Twitter: https://twitter.com/_JamesCodes

![countdown](https://github.com/JAldo1980/javascriptmas-day1/assets/80925002/a5ce2a39-7d41-44d5-8030-347ed5079350)

This project is a festive web application that features a Christmas countdown and allows users to submit their wish lists to Santa Claus.

## Technologies Used

- **HTML5:** The structure of the web page is created using HTML5.
- **CSS3:** Styling for the countdown and wish list modal is implemented using CSS3.
- **JavaScript:** The logic for updating the countdown and handling wish list submissions is powered by JavaScript.
- **Audio API:** Utilized the Web Audio API to play a "Ho Ho Ho" sound effect when a wish list is submitted.

## Countdown Section

### Set Actual Dynamic Time / Date

```javascript
// SET ACTUAL dynamic time / date
let actualDate = new Date();
console.log(
  "Actual Date:",
  actualDate.toLocaleString("en-GB", { timeZone: "GMT" })
);

// SET target date /
// SET target date to midnight on 24/12/2023
let targetDate = new Date("2023-12-25T00:00:00");
console.log(
  "Target Date:",
  targetDate.toLocaleString("en-GB", { timeZone: "GMT" })
);

// Declare HTML for output
const output = document.getElementById("output");

// Function to update the Christmas countdown!
function updateCountdown() {
  // CALCULATE the time difference between EXISTING time and TARGET time...
  // ... (other countdown calculation code)
  // Updated HTML (id: output) with the countdown values
  output.innerHTML = `
    <div class="output-box-el">
      <!-- ... (countdown output) -->
    </div>
  `;
}

// Call the updateCountdown function every second
const result = setInterval(updateCountdown, 1000);
