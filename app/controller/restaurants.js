/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const { getRestaurants } = require('../service/restaurants');

module.exports = {
    async getRestaurants(req, res) {
        // const { id } = req.params;
    
        const restaurantData = await getRestaurants();
        return res.status(200).send({
          error: false,
          code: 200,
          message: 'Restaurants successfully fetched',
          data: restaurantData,
        });
      },


}