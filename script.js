// Array of gradient themes for the theme toggle
const themes = [
    'linear-gradient(135deg, #5a339c 0%, #261832 100%)', // Original
    'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)', // Warm theme
    'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)', // Cool theme
    'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)'  // Sunset theme
];

let currentThemeIndex = 0;

// Theme toggle button event listener
document.getElementById('theme-toggle-btn').addEventListener('click', function() {
    // Increment the theme index
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Apply the new theme as the background
    document.body.style.background = themes[currentThemeIndex];
});

// Toggle Tools Dropdown with fade-in effect
document.getElementById('tools-toggle-btn').addEventListener('click', function() {
    const dropdown = document.getElementById('tools-dropdown-open');
    
    // Toggle the 'open' class to show/hide the tools dropdown
    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open'); // Hide dropdown
    } else {
        dropdown.classList.add('open'); // Show dropdown
    }
});