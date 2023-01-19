import { responder } from '../utils/responder.js';

class GadgetController {
  async CREATE(req, res) {
    const newGadgetData = req.body;
    const query = 'New Gadget';
    responder(res, 200, 'ok', 'created new Gadget', query);
  }

  async GET(req, res) {
    const query = 'All gadgets';
    responder(res, 200, 'ok', 'created new Gadget', query);
  }
}

export default new GadgetController();
