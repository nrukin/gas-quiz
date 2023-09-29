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
