import tvShows from '../config/TvShows.js'


export const getAllTvShows = (req, res) => {
    res.send(tvShows)
}

export const getAllTvShowsByYear = (req, res) => {
    const year = req.params.year
    const showsYear = tvShows.filter((show) => show.yearCreated == year)
    res.send(showsYear)
}

export const deleteByTitle = (req, res) => {
    const title = req.params.title
    const newShowsList = tvShows.filter((show) => show.tvShow != title)
    res.send(newShowsList)
}

export const editstaring = (req, res) => {
    const title = req.params.title
    const newStras = req.body
    const locate = tvShows.findIndex(show => show.tvShow == title)
    if (locate !== -1) {
        tvShows[locate].starring = newStras
        res.send(tvShows)
    }
    else {
        res.status(404).send('no shows with that title')
    }
}