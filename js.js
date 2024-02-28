// Set the deadline date and time
var deadline = new Date('2024-05-25T11:30:00');

// Get the timer elements
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

// Set the interval for updating the timer
var interval = setInterval(() => {
    // Get the current date and time
    var now = new Date();

    // Calculate the difference between the deadline and the current time
    var diff = deadline - now;

    // Calculate the remaining days, hours, minutes, and seconds
    var d = Math.floor(diff / (1000 * 60 * 60 * 24));
    var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the timer elements
    days.innerHTML = d;
    hours.innerHTML = h.toString().padStart(2, '0');
    minutes.innerHTML = m.toString().padStart(2, '0');
    seconds.innerHTML = s.toString().padStart(2, '0');

    // If the deadline has passed, clear the interval and redirect to a new website
    if (diff <= 0) {
        clearInterval(interval);
        window.location.href = 'https://www.example.com';
    }
}, 1000);