const DataBase = require("./config")

const initDb = {
    async init() {
        //esperando a configuração do db ser carregada e guardada
        const db = await DataBase()

        //dentro do exec() é onde colocaremos o código para criar a tabela
        await db.exec(` CREATE TABLE rooms(
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(` CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}

initDb.init();

//obs: o que for comando sql tem que ser escrito e letra maiuscula, o que não for tem que ser escrito em letra minuscula



