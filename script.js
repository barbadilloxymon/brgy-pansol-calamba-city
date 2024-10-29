// Function to show the newsletter popup
function showNewsletterPopup() {
    document.getElementById('newsletterPopup').style.display = 'flex'; // Show the popup
}

// Automatically display the newsletter form every 5 seconds
setInterval(showNewsletterPopup, 5000); // 5000 milliseconds = 5 seconds

// Close the popup when clicking the close button
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('newsletterPopup').style.display = 'none';
});

// Close the popup when clicking outside of it
window.addEventListener('click', function(event) {
    const popup = document.getElementById('newsletterPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});


