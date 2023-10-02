function doGet() {
    var t = HtmlService.createTemplateFromFile('page');
    // Передаем в шаблон данные теста для построения
    t.data = quizDataFromtable();
    Logger.log(t.data);
    return t.evaluate();
}

function processForm(formObject) {
    Logger.log(formObject);
    var data = getTestData();
    var rs = 0;
    for (var i = 0; i < data.length; i++) {
	if (data[i].rightAnsID == formObject[data[i].id]) {
	    rs++
	}
    }
    Logger.log(rs)
    addResultRow(formObject.name, data.length, rs)
    return "Правильных ответов: " + rs + " / " + data.length;
}

function addResultRow(name, tot, rs) {
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Результаты").appendRow(
	[new Date(),name,rs,tot]
    );

}
