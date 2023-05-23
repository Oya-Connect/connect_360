import { Schema, model, models } from "mongoose";

const propertySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  landlord: {
    type: String,
    required: true,
  },
});

const Property = models.Property || model("Property", propertySchema);
// Using models.Property || model("Property", propertySchema) instead
// of just model("Property", propertySchema) because otherwise, nextjs
// will create new models every time an endpoint is called.

export default Property;
