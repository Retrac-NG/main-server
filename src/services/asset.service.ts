import GadgetModel from '../database/models/assets/gadget.model';
import vehicleModel from '../database/models/assets/vehicle.model';
import { GadgetType, VehicleType } from 'src/typescript/types/asset.types';

/**
 * Asset service class
 * Handles all user services
 * @category Services
 * @example <caption>Creating a new asset</caption>
 * // calling in user.controller.js
 * const asset_service = require('path/to/asset_service.js')
 *
 * const assetData = req.body
 * const newAsset = await asset_service.CREATE(assetData)
 * res.status(201).send(newAsset)
 */
class asset_service {
  /**
   *
   * @param {('cars' | 'bikes' | 'laptops' | 'phones')} category - Defines what category the asset belongs to
   * @param {(GadgetType | VehicleType)} assetData - The data object to be used to create the new asset
   * @returns Newly created asset could be a Gadget or Vehicle
   */
  async CREATE(
    category: string,
    assetData: VehicleType | GadgetType
  ): Promise<VehicleType | GadgetType> {
    const newAsset =
      category === 'cars' || 'bikes'
        ? await vehicleModel.create(assetData)
        : await GadgetModel.create(assetData);

    return newAsset;
  }
}

export default new asset_service();

//=============================================>  ### INFO!
// A compulsory param that each method should take is the categoryu param
// The modle to be worked on can now be chosen based on the category that is passed
