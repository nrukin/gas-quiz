function doGet() {
    var t = HtmlService.createTemplateFromFile('page');
    t.data = quizDataFromtable();
    return t.evaluate();
}

function processForm(formObject) {
    var check = quizDataFromtable().checkAnswers(formObject);
    addResultRow(formObject.name, check);
    return "Правильных ответов: " +
	check.score +
	". " +
	(check.pass ? "Успешно 🎉" : "Попробуйте ещё раз 😞");
}
