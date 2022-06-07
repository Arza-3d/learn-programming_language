function googleQuery(myQuestion) {
    let newQuestion = "https://www.google.com/search?q=" + myQuestion.replace(" ", "+");
    return newQuestion;
}