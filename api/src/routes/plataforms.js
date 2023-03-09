const express = require('express');
const { apikey } = require('../db');
const platformRouter = express.Router();
const axios = require('axios');

//Search all videogames platforms
platformRouter.get('/', async (req, res) => {
	let apiresult = await axios.get(
		`https://api.rawg.io/api/platforms/lists/parents?key=${apikey}`
	);
	let apivgplat = apiresult.data.results.map((p) => p.name);
	res.send(apivgplat);
});
module.exports = platformRouter;
