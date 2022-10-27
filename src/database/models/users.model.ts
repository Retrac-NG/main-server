import mongoose, { Schema, Model } from 'mongoose';
import { UserType } from '../../typescript/types/user.types';

const UserSchema: Schema = new Schema<UserType>(
  {
    first_name: { type: String, required: [true, 'First name is required'] },
    last_name: { type: String, required: [true, 'Last name is required'] },
    other_name: String,

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email must be unique'],
      match:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      unique: [true, 'Password must be unique'],
      minlength: [6, 'Minimum of 6 characters for the user password'],
    },

    phone: {
      type: Number,
      required: [true, 'Phone number must be provided'],
      minlength: [11, 'Phone mumber should not be less than 11 digits'],
    },

    address: { type: String, required: [true, 'Address is required'] },

    assets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: {
          enum: ['mobile phone', 'laptop', 'car', 'bike'],
          required: true,
          default: 'mobile phone',
        },
      },
    ],

    reported: { type: Number, default: 0 },
    found: { type: Number, defaulltL: 0 },
  },
  { timestamps: true, collection: 'users' }
);

const UserModel = mongoose.model<UserType>('users', UserSchema);

export default UserModel;
