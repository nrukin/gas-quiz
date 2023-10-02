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
}
