const connection = require('./connection')

const getAll = async () =>{
    const [movies] = await connection.execute('SELECT * FROM movies')
    return movies
}

const createMovie = async (movie) =>{
    const { title, rating, director, release_date, plot } = movie;
    const query = 'INSERT into movies(title, rating, director, release_date, plot) VALUES (?,?,?,?,?)'
    const createdMovie = await connection.execute(query, [title, rating, director, release_date, plot])
    return createdMovie
}

module.exports = {
    getAll,
    createMovie
}