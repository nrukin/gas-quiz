function doGet() {
    var t = HtmlService.createTemplateFromFile('page');
    t.data = getTestData();
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

function getTestData() {
    var rs = [];
    var val = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Вопросы").getDataRange().getValues();

    for (var i= 1; i < val.length; i++) {
	if (!val[i][1]) {
	    break
	}
	q = new question("q" + i, val[i][1]);
	for (var j = 3; j < val[i].length; j = j + 2) {
	    if (!val[i][j]) {
		break
	    }
	    q.addAnswer(val[i][j], (val[i][j-1] == true))
	}
	rs.push(q)
    }
    return rs
}
