// Retrieve user initials and scores from localStorage
const userInitials = localStorage.getItem('initial');
const userScores = localStorage.getItem('score');

// Get references to the clear button and the highscores list element
const clearBtn = document.getElementById('clear');
const highScoreListElement = document.getElementById('highscores');

// Function to create and append the highscore list item
function createHighScoreListItem(initials, scores) {
    const listItem = document.createElement('li');
    listItem.textContent = `${initials} - ${scores}`;
    highScoreListElement.appendChild(listItem);
    return listItem;
}

// Function to clear the highscore list item
function clearHighScore(listItem) {
    listItem.remove();
}

// Check if user initials and scores exist before creating the list item
if (userInitials && userScores) {
    const highScoreListItem = createHighScoreListItem(userInitials, userScores);
    // Add event listener to the clear button to remove the displayed highscore
    clearBtn.addEventListener('click', () => clearHighScore(highScoreListItem));
}