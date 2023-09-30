function doGet() {
    var t = HtmlService.createTemplateFromFile('page');
    t.data = MockTest();
    return t.evaluate();

}
