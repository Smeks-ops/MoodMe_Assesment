const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantSchema = new Schema(
  {
    address: {
      building: {
        type: String,
      },
      street: {
        type: String,
      }
    },
    cuisine: {
      type: String,
    },
    grades: {
      type: Array,
    },
    name: {
      type: String,
    },
    restaurant_id: {
      type: String,
    }
  },
  
);

const restaurantModel = mongoose.model('restaurants', restaurantSchema);

module.exports = restaurantModel;
