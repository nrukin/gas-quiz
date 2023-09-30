function logMockTest() {
    Logger.log(MockTest())
}

function MockTest() {
    var rs = [];

    q = new question("q01" ,"Кто съел Колобка?");
    q.addAnswer("Заяц");
    q.addAnswer("Волк");
    q.addAnswer("Медведь");
    q.addAnswer("Лиса", true);

    rs.push(q)

    q = new question("q02" ,"Кто посадил репку?");
    q.addAnswer("Дед", true);
    q.addAnswer("Бабка");
    q.addAnswer("Внучка");
    q.addAnswer("Жучка");
    q.addAnswer("Кошка");
    q.addAnswer("Мышка");

    rs.push(q);
    
    return rs;
}
