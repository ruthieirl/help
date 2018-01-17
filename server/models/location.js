const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailSchema = new Schema({
  name: { type: String, required: true },
  formatted_address: { type: String, required: true },
  formatted_phone_number: { type: String, required: true },
  website: { type: String, required: false }
});

const Details = mongoose.model("Details", detailSchema);

module.exports = Details;
