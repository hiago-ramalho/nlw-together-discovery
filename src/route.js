const express = require('express');
const QuestionController = require('./controllers/question-controller')
const RoomController = require('./controllers/room-controller')

const route = express.Router();

//definindo rotas

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}));
route.get('/create-room', (req, res) => res.render('index', {page: 'create-room'}));

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open);
route.post('/enter-room', RoomController.enter)

route.post('/question/create/:room', QuestionController.create) //rota para criar uma questão
//formato que o formulado de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index ) 
//quando colocamos ':' estamos falando pro express que não sabemos qual é o tipo de conteúdo que vai vir ali, estão criamos uma variável para poder receber o conteúdo que vai vir na url


module.exports = route;