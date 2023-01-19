import mongoose, { Schema } from 'mongoose';

const activitySchema = new Schema(
  {
    initiator: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },

    gadget: {
      type: Schema.Types.ObjectId,
      ref: 'gadgets',
    },

    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
    },
  },
  { timestamps: true, collection: 'activities' }
);

const ActivityModel = mongoose.model('activities', activitySchema);

export default ActivityModel;
