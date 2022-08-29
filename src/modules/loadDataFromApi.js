/** @format */

import renderOnPage from './renderOnPage.js';
const BASEAPIURL =
	'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

const loadDataFromAPI = async () => {
	const response = await fetch(BASEAPIURL);
	const { meals } = await response.json();
	// const likes = await getLikes();
	meals.forEach((meal) => {
		renderOnPage(meal);
	});
};
export default loadDataFromAPI;
