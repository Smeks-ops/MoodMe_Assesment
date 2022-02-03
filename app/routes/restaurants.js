const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../controller/restaurants');
const asyncHandler = require('express-async-handler');


const restaurant = express.Router();

restaurant.use(bodyParser.json());
restaurant.use(bodyParser.urlencoded({ extended: false }));

restaurant.get('/restaurants', asyncHandler((req, res) => controller.getRestaurants(req, res)));
restaurant.get('/restaurants/name', asyncHandler((req, res) => controller.getRestaurantByName(req, res)));

module.exports = restaurant;

