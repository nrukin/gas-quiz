// Вопрос теста
class question {
    constructor(id, text) {
	this.id = id
	this.text = text;
	this.rightAnsID = -1;
	this.answers = [];
    }

    addAnswer(answer, right = false) {
	if (right==true) {
	    this.rightAnsID = this.answers.length;
	}
	this.answers.push(answer);
    }
}

// Данные теста
class quizData {

    constructor(title, passScore) {
	this.title = title;
	this.passScore = passScore;
	this.questions = [];
    }

    addQuestion(q) {
	this.questions.push(q);
    }

    // Проверка полученных ответов
    checkAnswers(ans) {
	var score = 0;
	var pass = false;
	for (var i = 0; i < this.questions.length; i++) {	    
	    if (this.questions[i].rightAnsID == ans[this.questions[i].id]) {
		score++
	    }
	}
	if (score >= this.passScore) {
	    pass = true
	}
	return {
	    "score": score,
	    "pass": pass
	};
    }
}
