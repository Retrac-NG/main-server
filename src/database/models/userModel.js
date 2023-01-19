import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    other_name: String,

    profile_img: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },

    email: {
      type: String,
      unique: [true, 'EMail must be unique'],
      required: [true, 'EMail is resuired'],
    },

    password: {
      type: String,
      unique: [true, 'Passwords must be unique'],
      required: [true, 'Pasord is required'],
    },

    phone: Number,
    address: String,

    vehicles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'vehicles',
      },
    ],

    gadgets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'gadgets',
      },
    ],

    reported: { type: Number, default: 0 },
    found: { type: Number, default: 0 },
  },
  { timestamps: true, minimize: false }
);

const UserModel = mongoose.model('users', userSchema);

export default UserModel;
