import GadgetModel from '../database/models/gadgetModel.js';

class GadgetService {
  async CREATE(newGadgetData) {
    const newGadget = await GadgetModel.create(newGadgetData);
  }
}

export default new GadgetService();
