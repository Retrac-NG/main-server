import bcrypt from 'bcrypt';
import { env } from '../config/env.config.js';
import userModel from '../database/models/userModel.js';
import UserModel from '../database/models/userModel.js';
import { tokenizer } from '../utils/validator.js';

class UserService {
  //=============================================>
  async CREATE(newUserData) {
    delete newUserData.re_password;

    // -- hash the user password -->
    const salt = bcrypt.genSaltSync(Number(env.BCRYPT_HASH_SALT));
    const hash = bcrypt.hashSync(newUserData.password, salt);

    // convert phone string to number and add password back
    newUserData = {
      ...newUserData,
      password: hash,
      phone: Number(newUserData.phone),
    };

    const newUser = await UserModel.create(newUserData);
    console.log(newUser);
    const token = tokenizer({ id: newUser._id });
    return token;
  }

  //=============================================>
  async GET() {
    const allUsers = await userModel.find().lean();
    return allUsers;
  }

  //=============================================>
  async GET_BY_ID(userID) {
    const user = await UserModel.findById(userID).lean();
    return user;
  }

  //=============================================>
  async UPDATE_ALL(updateData) {
    const updateAllUsers = await userModel.updateMany(
      {},
      { $set: updateData },
      { new: true }
    );
    return updateAllUsers;
  }

  //=============================================>
  async UPDATE_BY_ID(updateData, userID) {
    delete updateData.id;
    delete updateData.iat;
    delete updateData.exp;

    const updatedUser = await userModel.findOneAndUpdate(
      userID,
      { $set: updateData },
      { new: true }
    );
    return updatedUser;
  }

  //=============================================>
  async LOGIN(userDetails) {
    const user = await UserModel.findOne({ email: userDetails.email }).lean();
    const { password } = userDetails;

    const authenticatedUser = bcrypt.compareSync(password, user.password);

    if (!authenticatedUser) return false;

    return tokenizer({ id: user._id });
  }
}

export default new UserService();
