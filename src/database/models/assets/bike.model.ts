import mongoose, { Collection, Schema } from 'mongoose';

// TODO: Add jsdoc documentation
const BikeSchema: Schema = new Schema(
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
    colour: String,
    markings: { type: String, default: 'none' },

    location: {
      state: { type: String, required: true },
      lga: { type: String, required: true },
      town: { type: String, required: true },
    },
  },
  { collection: 'bikes', timestamps: true }
);

const BikeModel = mongoose.model('bikes', BikeSchema);

export default BikeModel;
