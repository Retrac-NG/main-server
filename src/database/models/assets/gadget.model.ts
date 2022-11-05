import mongoose, { Schema, Model } from 'mongoose';
import { GadgetType } from '@/types/asset.types'

// TODO: Add jsdoc documentation
const GadgetSchema: Schema = new Schema<GadgetType>(
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

const GadgetModel = mongoose.model<GadgetType>('phones', GadgetSchema);

export default GadgetModel;
