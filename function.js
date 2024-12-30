function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    display.value = 'I Love Youu Mwuahh😽';
  }
  
  function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
  
    body.classList.toggle('dark-mode');
  
    if (body.classList.contains('dark-mode')) {
        themeIcon.textContent = '🌙'; // Moon icon for dark mode
    } else {
        themeIcon.textContent = '☀️'; // Sun icon for light mode
    }
  }
  