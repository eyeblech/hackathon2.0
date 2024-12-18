// Function to load random content
function getRandomContent() {
    const contentArray = [
      "This is a random quote: 'The only way to do great work is to love what you do.' - Steve Jobs",
      "Here's a fun fact: Honey never spoils, archaeologists have found pots of honey in ancient tombs that are over 3,000 years old!",
      "Random Joke: Why don't skeletons fight each other? They don't have the guts!",
      "Interesting trivia: An octopus has three hearts, and blue blood!",
      "Random Thought: Time flies like an arrow; fruit flies like a banana."
    ];
  
    // Select a random content
    const randomIndex = Math.floor(Math.random() * contentArray.length);
    return contentArray[randomIndex];
  }
  
  // Function to set random content in the page
  function setRandomContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = getRandomContent();
  }
  
  // Function to navigate to the second page
  function goToPage2() {
    window.location.href = 'page2.html';
  }
  
  // Function to navigate to the first page
  function goToPage1() {
    window.location.href = 'index.html';
  }
  
  // Set random content when the page loads
  window.onload = function() {
    setRandomContent();
  }
  