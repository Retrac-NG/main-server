import { Request, NextFunction } from 'express';
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface';

/**
 * Asset controller for route handling
 * @category Controllers
 * @example <caption>Using the controller for sample route</caption>
 * const asset_ctrl = require('path/to/controller')
 *
 * const AssetRoute = express.Router()
 * UserRoute
 * .route('/api/assets')
 * .use(asset_ctrl.CREATE)
 */

class asset_ctrl {
  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns Newly created asset
   */
  async CREATE(req: Request, res: CustomResponseInterface): Promise<void> {
    const reqData = req.body;
    const category = req.params.category;
    console.log(reqData);

    let queryData =
      category === 'cars' || 'bikes'
        ? 'Created vehicle asset' // call vehicle serveice
        : 'Created Gadget asset'; // call gadget service

    res.created!(queryData, 'Asset');
  }

  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns update stats of all assets
   */
  async UPDATE(req: Request, res: CustomResponseInterface) {
    const assetId = req.params.id;
    const category = req.params.category;
    const updateData = req.body;
    console.log(assetId, updateData);

    let queryData =
      category === 'cars' || 'bikes'
        ? 'Updated a Vehicle asset'
        : 'updated a gadget asset';

    res.updated!(queryData, 'Asset');
  }

  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns List of all Gadgets
   */
  async GET_ASSETS(req: Request, res: CustomResponseInterface) {
    const category = req.params.category;
    let allAssets;
    if (category === 'all') allAssets = 'All assets found';
    if (category === 'cars' || 'bikes') allAssets = 'ALl vehicles found';
    if (category === 'laptops' || 'phones') allAssets = 'All gadgets found';

    res.found!(allAssets, 'Vehicles');
  }

  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns Delete details of deleted asset
   */
  async DELETE(req: Request, res: CustomResponseInterface) {
    const assetId = req.params.id;
    const category = req.params.category;
    console.log(assetId);

    let queryData =
      category === 'cars' || 'bikes'
        ? 'deleted one vehicle'
        : 'deleted one gadget';

    res.deleted!(queryData, 'Asset');
  }
}

export default new asset_ctrl();
