"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gadget_model_1 = __importDefault(require("../database/models/assets/gadget.model"));
const vehicle_model_1 = __importDefault(require("../database/models/assets/vehicle.model"));
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
    CREATE(category, assetData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAsset = category === 'cars' || 'bikes'
                ? yield vehicle_model_1.default.create(assetData)
                : yield gadget_model_1.default.create(assetData);
            return newAsset;
        });
    }
}
exports.default = new asset_service();
//=============================================>  ### INFO!
// A compulsory param that each method should take is the categoryu param
// The modle to be worked on can now be chosen based on the category that is passed
