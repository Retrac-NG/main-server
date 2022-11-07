import GadgetModel from "@/models/assets/gadget.model";
import vehicleModel from "@/models/assets/vehicle.model";
import { GadgetType, VehicleType } from "@/types/asset.types";
import { captureRejectionSymbol } from "events";

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
			category === "cars" || "bikes"
				? await vehicleModel.create(assetData)
				: await GadgetModel.create(assetData);

		return newAsset;
	}

	async GET_ALL_GADGET_OR_VEHICLE(type_of_asset: string): Promise<any> {
		const allGadgetOrVehicle =
			type_of_asset === "vehicle" || "gadget"
				? await vehicleModel.find()
				: await GadgetModel.find();

		return allGadgetOrVehicle;
	}

	async UPDATE_GADGET_OR_VEHICLE_DATA(
		id: string,
		assetType: string,
		update: VehicleType | GadgetType
	): Promise<any> {
		const updateAsset =
			assetType === "vehicle" || "gadget"
				? await vehicleModel.findByIdAndUpdate(id, { update }, { new: true })
				: await GadgetModel.findByIdAndUpdate(id, { update }, { new: true });

		return updateAsset;
	}
}

export default new asset_service();

//=============================================>  ### INFO!
// A compulsory param that each method should take is the categoryu param
// The modle to be worked on can now be chosen based on the category that is passed
