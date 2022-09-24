import mongoose, { Schema } from 'mongoose';

// TODO: Add jsdoc documentation

const LaptopSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
      enum: ['lost', 'found', 'safe'],
    },
    model: String,
    year: String,
    receipt: String,

    imei: [String],
    serial_no: String,

    colour: String,
    markings: { type: String, default: 'none' },

    location: {
      state: { type: String, required: true },
      lga: { type: String, required: true },
      town: { type: String, required: true },
    },
  },
  { collection: 'laptops', timestamps: true }
);

const LaptopModel = -mongoose.model('laptops', LaptopSchema);

export default LaptopModel;
