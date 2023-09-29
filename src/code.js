function doGet() {
    return HtmlService.createHtmlOutputFromFile('page');
}

class question {
    constructor(text) {
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

function MockTest() {
    var mock = [];
    q = new question("Кто сломал кроватку трем медведям?")
    q.addAnswer("Василиса Премудрая")
    q.addAnswer("Маша", true)
    q.addAnswer("Белоснежка")
    Logger.log(q)
    return mock;
}
