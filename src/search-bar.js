function search() {
    var searchTerm = document.getElementById("searchInput").value;
    var filePath = searchTerm + ".html"; 
    window.location.href = filePath;
}

function showResults() {
    var searchInput = document.getElementById("searchInput");
    var resultsDiv = document.getElementById("results");
    if (searchInput.value.trim() !== "") {
        resultsDiv.classList.add("show");
    } else {
        resultsDiv.classList.remove("show");
    }
}



function redirectToPage(keyword) {
    var filePath;
    // Map keywords to corresponding HTML files
    switch (keyword) {
        case 'breakout':
            filePath = '/html/breakout.html';
            break;
        case 'pac-man':
            filePath = '/pacman-main/pac-man.html';
            break;
        case 'pong':
            filePath = '/html/pong.html';
            break;
        case 'Snake':
            filePath = '/html/Snake.html';
            break;
        case 'space':
            filePath = '/html/space.html';
            break;
        case 'tetris':
            filePath = '/html/tetris.html';
            break;
        default:
            filePath = 'default_page.html'; // Default page if keyword doesn't match
    }
    window.location.href = filePath;
}

function showResults() {
    var searchInput = document.getElementById("searchInput");
    var resultsDiv = document.getElementById("results");
    if (searchInput.value.trim() !== "") {
        resultsDiv.style.display = "block";
    } else {
        resultsDiv.style.display = "none";
    }
}
