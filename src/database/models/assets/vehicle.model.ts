import mongoose, { Schema } from 'mongoose';

// TODO: Add jsdoc documentation
const CarSchema: Schema = new Schema(
  {
    status: {
      type: String,
      required: true,
      enum: ['lost', 'found', 'safe'],
    },

    vin: { type: String, required: true },

    brand: String,
    model: String,
    Year: String,
    plate_no: { ttype: String, required: true },
    chasis_no: String,
    colour: String,
    markings: { type: String, default: 'none' },

    location: {
      state: { type: String, required: true },
      lga: { type: String, required: true },
      town: { type: String, required: true },
    },
  },
  { collection: 'cars', timestamps: true }
);

const CarModel = mongoose.model('cars', CarSchema);

export default CarModel;
