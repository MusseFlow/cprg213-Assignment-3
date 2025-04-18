/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35; // Full day rate
// let dailyRate = 20; // Half day rate
let dayCounter = 0;

const costDisplay = document.querySelector("#calculated-cost");
const dayButtons = document.querySelectorAll(".day");
const clearButton = document.querySelector("#clear-button");
const halfDayButton = document.querySelector("#half");
const fullDayButton = document.querySelector("#full");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach((day ) => {
    day.addEventListener("click", function() {
        if (!day.classList.contains("clicked")) {
            day.classList.add("clicked"); // Add clicked class 
            dayCounter++;
            calculate();
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function() {
    dayButtons.forEach((day) => {
        day.classList.remove("clicked"); // Reset cost display
    });
    dayCounter = 0;
    costDisplay.innerHTML = 0; // Reset cost display
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", function() {
    dailyRate = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculate();
});

fullDayButton.addEventListener("click", function() {
    dailyRate = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculate();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

<ul class="flex day-selector">
    <li class="blue-hover day" id="monday">Mon</li>
    <li class="blue-hover day" id="tuesday">Tue</li>
    <li class="blue-hover day" id="wednesday">Wed</li>
    <li class="blue-hover day" id="thursday">Thu</li>   
    <li class="blue-hover day" id="friday">Fri</li>
</ul>


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    const totalCost = dayCounter * dailyRate;
    costDisplay.innerHTML = totalCost;
}
