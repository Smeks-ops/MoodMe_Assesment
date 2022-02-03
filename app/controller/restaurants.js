/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const { query } = require('express');
const service = require('../service/restaurants');

module.exports = {
    async getRestaurants(req, res) {
        // console.log('req.query', req.query);
        const params = req.query
        const restaurantData = await service.getRestaurants( { params } );
        return res.status(200).send({
          error: false,
          code: 200,
          message: 'Restaurants successfully fetched',
          data: restaurantData,
        });
      },
}

