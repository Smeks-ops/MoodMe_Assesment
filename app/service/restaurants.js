/* eslint-disable consistent-return */
/* eslint-disable no-console */
const restaurantModel = require('../model/restaurants');


module.exports = {
    async getRestaurants() {
        try {
          const restaurantData = await restaurantModel.find();
          const restaurant = restaurantData[0].toObject();
          return restaurant;
        } catch (e) {
          console.log('an error occurred while getting restaurants', e);
        }
      },
}