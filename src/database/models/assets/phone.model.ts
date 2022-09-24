import mongoose, { Schema } from 'mongoose';

// TODO: Add jsdoc documentation
const PhoneSchema = new Schema(
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
  { collection: 'phones', timestamps: true }
);

const PhoneModel = mongoose.model('phones', PhoneSchema);

export default PhoneModel;
