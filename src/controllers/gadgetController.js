import gadgetService from '../services/gadgetService.js';
import { responder } from '../utils/responder.js';

class GadgetController {
  async CREATE(req, res) {
    const { assetData, userId, location } = req.body;
    const query = await gadgetService.CREATE(
      { ...assetData, ...location },
      userId
    );
    responder(res, 200, 'ok', 'created new Gadget', query);
  }

  async GET(req, res) {
    const query = 'All gadgets';
    responder(res, 200, 'ok', 'created new Gadget', query);
  }
}

export default new GadgetController();
