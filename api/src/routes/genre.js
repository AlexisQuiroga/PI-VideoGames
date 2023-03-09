const { Router } = require('express');
const axios = require('axios');
const { Genre } = require('../db');
const genreRouter = Router();

genreRouter.get('/', async (req, res) => {
	try {
		const vgGenres = await Genre.findAll({
			attributes: ['name'],
		});
		const dbGenres = vgGenres.map((p) => p.name);
		res.status(200).send(dbGenres);
	} catch (error) {
		res.send(`Error in route /genres ${error}`);
	}
});

module.exports = genreRouter;
