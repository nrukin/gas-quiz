function doGet() {
    var t = HtmlService.createTemplateFromFile('page');
    t.data = MockTest();
    return t.evaluate();
}

function processForm(formObject) {
  Logger.log(formObject);
    return "10% верных ответов"
}
