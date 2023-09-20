const moviesModel = require('../models/moviesModel')

const getAll = async (request, response) => {
    const movies = await moviesModel.getAll()
    return response.status(200).json(movies)
};

const createMovie = async( request, response) =>{
    const createdMovie = await moviesModel.createMovie(request.body)
    return response.status(201).json(createdMovie)
}

module.exports = {
    getAll,
    createMovie
}