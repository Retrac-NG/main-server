import mongoose, { Schema, Model } from 'mongoose';
import { VehicleType } from '../../../typescript/types/asset.types';

// TODO: Add jsdoc documentation
const CarSchema: Schema<VehicleType> = new Schema(
  {
    status: {
      type: String,
      required: true,
      enum: ['lost', 'found', 'safe'],
    },

    vin: { type: String, required: true },

    brand: String,
    model: String,
    year: Number,
    plate_no: { type: String, required: true },
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

const vehicleModel: Model<VehicleType> = mongoose.model('cars', CarSchema);

export default vehicleModel;
