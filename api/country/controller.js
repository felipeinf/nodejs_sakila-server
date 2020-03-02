const repository = require('./repository');
const cityController = require('../city/controller');

async function getCountries(){
  let countries = await repository.getCountries();
  let cities = await cityController.getCities();

  for (let i = 0; i < countries.length; i++) {    
    countries[i].cities = cities.filter((city) => city.country_id == countries[i].country_id);
  }

  return countries;
}

module.exports = {
  getCountries,
};