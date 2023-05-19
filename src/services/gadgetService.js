import GadgetModel from '../database/models/gadgetModel.js';
import UserModel from '../database/models/userModel.js';

class GadgetService {
  async CREATE(newGadgetData, userID) {
    // -- add asset -->
    const newAsset = await GadgetModel.create({
      ...newGadgetData,
      owner: userID,
    });

    // -- add the gadget to user list -->
    const updatedUser = await UserModel.findOneAndUpdate(
      userID,
      {
        $push: { gadgets: newAsset._id },
      },
      { new: true }
    );

    return updatedUser;
  }
}

export default new GadgetService();
