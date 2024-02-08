function toggleAnswer(questionNumber) { // When clicked it causes the box to drop down instead of the immediate opening
    var answer = document.getElementById('answer' + questionNumber);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

