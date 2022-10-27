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
Object.defineProperty(exports, "__esModule", { value: true });
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
    CREATE(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqData = req.body;
            const category = req.params.category;
            console.log(reqData);
            let queryData = category === 'cars' || 'bikes'
                ? 'Created vehicle asset' // call vehicle serveice
                : 'Created Gadget asset'; // call gadget service
            res.created(queryData, 'Asset');
        });
    }
    /**
     *
     * @param {Request} req - request Object
     * @param {CustomResponseInterface} res - CustomResponse Object
     * @returns update stats of all assets
     */
    UPDATE(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const assetId = req.params.id;
            const category = req.params.category;
            const updateData = req.body;
            console.log(assetId, updateData);
            let queryData = category === 'cars' || 'bikes'
                ? 'Updated a Vehicle asset'
                : 'updated a gadget asset';
            res.updated(queryData, 'Asset');
        });
    }
    /**
     *
     * @param {Request} req - request Object
     * @param {CustomResponseInterface} res - CustomResponse Object
     * @returns List of all Gadgets
     */
    GET_ASSETS(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = req.params.category;
            let allAssets;
            if (category === 'all')
                allAssets = 'All assets found';
            if (category === 'cars' || 'bikes')
                allAssets = 'ALl vehicles found';
            if (category === 'laptops' || 'phones')
                allAssets = 'All gadgets found';
            res.found(allAssets, 'Vehicles');
        });
    }
    /**
     *
     * @param {Request} req - request Object
     * @param {CustomResponseInterface} res - CustomResponse Object
     * @returns Delete details of deleted asset
     */
    DELETE(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const assetId = req.params.id;
            const category = req.params.category;
            console.log(assetId);
            let queryData = category === 'cars' || 'bikes'
                ? 'deleted one vehicle'
                : 'deleted one gadget';
            res.deleted(queryData, 'Asset');
        });
    }
}
exports.default = new asset_ctrl();
