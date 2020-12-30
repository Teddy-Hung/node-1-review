const data = require('../data.json')


module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(data)
    },
    getSingleMovies: (req, res) => {
        //destructoring id
        const {id} = req.params
        const movie = data.find( el => +id === el.id) //+id is parseint
        if(!movie) return res.sendStatus(404) //sendStatus so we don't have to send anything back
        res.status(200).send(movie)
    }
}