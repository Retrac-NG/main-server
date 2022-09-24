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
const mongoose_1 = __importDefault(require("mongoose"));
const env_config_1 = require("../config/env.config");
const mongoConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    console.info('Trying mongo connection...');
    mongoose_1.default.connect(env_config_1.env.MONGO_URL, {
        keepAlive: true,
        connectTimeoutMS: 60000,
    }, (error) => {
        //   prettier-ignore
        error
            ? console.error(error.message)
            : console.info('Database plugged in!');
    });
});
exports.default = mongoConnect;
