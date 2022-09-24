"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Response Object
 *
 * @param {String} message - Response message
 * @param {*} [data = null] - Data/payload to be passed
 * @param {boolean} success - State of the request
 * @return {void}
 * @example <caption>Example response</caption>
 * const userData = // code to get user data
 * res
 * .status(200)
 * .send(new CustomResponse('User created',userData, true ))
 */
class CustomResponse {
    constructor(message, data, success = true) {
        this.message = message;
        this.data = data || null;
        this.success = success;
    }
}
exports.default = CustomResponse;
