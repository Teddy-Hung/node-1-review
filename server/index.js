const express = require('express')
const app = express() 
const port = 4321
const ctrl = require('./controller')
const data = require('../data.json')
//endpoints

//Creating endpoint that grabs all movies
app.get('/api/movies', ctrl.getMovies)
app.get('/api/movies/:id', ctrl.getSingleMovies)
////

app.listen(port, () => console.log(`listening on port ${port}`))