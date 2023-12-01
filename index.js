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
  let differenceTime = targetDate.getTime() - new Date().getTime();

  // CALCULATE days, hours, minutes, and seconds...
  let differenceDays = Math.floor(differenceTime / (1000 * 3600 * 24));
  let differenceHours = Math.floor(
    (differenceTime % (1000 * 3600 * 24)) / (1000 * 3600)
  );
  let differenceMinutes = Math.floor(
    (differenceTime % (1000 * 3600)) / (1000 * 60)
  );
  let differenceSeconds = Math.floor((differenceTime % (1000 * 60)) / 1000);

  // Updated HTML (id: output) with the countdown values
  output.innerHTML = `
  <div class="output-box-el">
    <div class="box-el days-el">
        <p>${differenceDays}</p>
        <p>Days</p>
    </div>
    <div class="box-el hours-el">
        <p>${differenceHours}</p>
        <p>Hours</p>
    </div>
    <div class="box-el minutes">
        <p>${differenceMinutes}</p>
        <p>Minutes</p>
    </div>
    <div class="box-el seconds">
        <p>${differenceSeconds}</p>
        <P>Seconds</P>
    </div>
  </div>
  `;
}

// Call the updateCountdown function every second
const result = setInterval(updateCountdown, 1000);

// ***********

let hohoho = new Audio("/hohoho.mp3");

// Santa email function
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", submitWishList);

function submitWishList(e) {
  const wishlistValue = document.getElementById("wishlist");
  e.preventDefault();
  if (wishlistValue.value === "") {
    alert("Please add something to Santa's list!");
  } else {
    setTimeout(function () {
      const modal = document.querySelector(".modal");
      modal.classList.toggle("toggle");
      hohoho.play();
      clearInputValue();
      console.log("submitted!");
    }, 1000); // 1000 milliseconds = 1 second
  }
}

// Close modal function
const closeModalBtn = document.getElementById("close-el");

closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("toggle");
}

// Clear input area function

function clearInputValue() {
  const wishlist = document.getElementById("wishlist");
  wishlist.value = "";
}
