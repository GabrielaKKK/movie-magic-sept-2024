import { Router } from "express";

import movieService from "../services/movieService.js";

const router = Router();

// URL: /movies/create
router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const movieData = req.body;

    // TODO: save movie data
    await movieService.create(movieData);

    res.redirect('/');
});

router.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    // Prepare view data
    movie.ratingView = getRatingViewData(movie.rating);

    res.render('movies/details', {movie});
});

function getRatingViewData(reting) {
    if (!Number.isInteger(reting)) {
        return 'n\\a';
    }
    return '&#x2605;'.repeat(reting);
}

export default router;