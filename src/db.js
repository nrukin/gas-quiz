// Получает объект quizData на основании данных таблицы
function quizDataFromtable() {

    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    // Создаем объект теста и заполняем по таблице
    var title = spreadsheet.getRangeByName("title").getValue();
    var passScore = spreadsheet.getRangeByName("passScore").getValue();
    var rs = new quizData(title, passScore);

    // Заполняем вопросы теста по данным таблицу
    var val = spreadsheet.getSheetByName("Вопросы").getDataRange().getValues();
    for (var i= 1; i < val.length; i++) {
	
	if (!val[i][1]) {
	    // При первом пустом тексте вопроса прекращаем итерации
	    break;
	}

	// Создаем объект вопроса
	q = new question("q" + i, val[i][1]);

	// Заполняем варианты ответа
	for (var j = 3; j < val[i].length; j = j + 2) {
	    if (!val[i][j]) {
		// При первом пустом тексте ответа прекращаем итерации
		break;
	    }
	    q.addAnswer(val[i][j], (val[i][j-1] == true));
	}
	rs.questions.push(q);
    }
    return rs;
    
}

// Сохраняет результаты теста в таблицу
function addResultRow(name, check) {
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    spreadsheet.getSheetByName("Результаты").appendRow(
	[
	    new Date(),
	    name,
	    check.score,
	    check.pass
	]
    );
    
}
