// Function to update the current day of the week and time in UTC
function updateDayOfWeekAndTime() {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[currentDate.getUTCDay()]; // Get the day of the week
    const currentTime = currentDate.toUTCString().slice(17, -4); // Get the UTC time

    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

    dayElement.textContent = currentDay;
    timeElement.textContent = currentTime;
}

updateDayOfWeekAndTime();

setInterval(updateDayOfWeekAndTime, 1000);
