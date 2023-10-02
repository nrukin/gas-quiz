function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function doGet() {
    var t = HtmlService.createTemplateFromFile('page');
    t.data = quizDataFromtable();
    return t.evaluate().setTitle(t.data.title).
	addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function processForm(formObject) {
    var check = quizDataFromtable().checkAnswers(formObject);
    addResultRow(formObject.name, check);
    return "Правильных ответов: " +
	check.score +
	". " +
	(check.pass ? "Успешно 🎉" : "Попробуйте ещё раз 😞");
}
