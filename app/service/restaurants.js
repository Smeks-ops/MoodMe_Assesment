/* eslint-disable consistent-return */
/* eslint-disable no-console */
const restaurantModel = require('../model/restaurants');


module.exports = {
    async getRestaurants(req, res) {
      const limit = parseInt(req.params.limit);
      const skip = parseInt(req.params.skip);
      try {
        const restaurantData = await restaurantModel.find()
        .limit(limit)
        .skip(skip)
        .exec();
        return restaurantData;
      } catch (e) {
        console.log('an error occurred while getting restaurants', e);
      }
    },

    async getRestaurantByName(name) {
      try {
        const restaurantData = await restaurantModel.findOne(name);
        return restaurantData
      } catch (e) {
        console.log('an error occurred while getting restaurant', e);
      }
    }
}

