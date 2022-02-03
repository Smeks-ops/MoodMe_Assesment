/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const { query } = require('express');
const res = require('express/lib/response');
const service = require('../service/restaurants');

module.exports = {
    async getRestaurants(req, res) {
      try {
        const params = req.query
        const restaurantData = await service.getRestaurants({ params });
        return res.status(200).send({
          error: false,
          code: 200,
          message: 'Restaurants successfully fetched',
          data: restaurantData,
        });
      } catch (e) {
        console.log('an error occurred while getting restaurant', e);
      }
        
    },

    async getRestaurantByName(req, res) {
      try {
        const name = req.query;
        console.log(name);
        const restaurantData = await service.getRestaurantByName(name);
       return res.status(200).send({
        error: false,
        code: 200,
        message: 'Restaurant successfully fetched',
        data: restaurantData,
      });
      } catch (e) {
        console.log('an error occurred while getting restaurant', e);
      }
      
    }
}

