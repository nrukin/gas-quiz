function doGet() {
    var t = HtmlService.createTemplateFromFile('page');
    t.data = MockTest();
    return t.evaluate();
}

function processForm(formObject) {
    Logger.log(formObject);
    var data = MockTest();
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
