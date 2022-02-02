const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantSchema = new Schema(
  {
    _id: {
      type: String,
    },
    address: {
      type: Object,
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
  {
    timestamps: true,
  },
);

const restaurantModel = mongoose.model('restaurant', restaurantSchema);

module.exports = restaurantModel;
