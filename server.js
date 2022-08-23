const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

//Парсинг — это процесс автоматического сбора данных и их структурирования
app.use(express.json()); //для парсинга application/json
app.use(express.urlencoded({ extended: true })); //для парсинга application/x-www-urlencoded
app.use("/static", express.static(__dirname + "/assets")); //путь к папке с картинками

app.use('/api/planes', require('./routes/planes'));

async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster.ob3jrlz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        )

        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()