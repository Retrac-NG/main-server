"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const UserSchema = new mongoose_1.Schema({
    first_name: { type: String, required: [true, 'First name is required'] },
    last_name: { type: String, required: [true, 'Last name is required'] },
    other_name: String,
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        unique: [true, 'Password must be unique'],
        minlength: [6, 'Minimum of 6 characters for the user password'],
    },
    phone: {
        type: Number,
        required: [true, 'Phone number must be provided'],
        minlength: [11, 'Phone mumber should not be less than 11 digits'],
    },
    address: { type: String, required: [true, 'Address is required'] },
    assets: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: {
                enum: ['mobile phone', 'laptop', 'car', 'bike'],
                required: true,
                default: 'mobile phone',
            },
        },
    ],
    reported: { type: Number, default: 0 },
    found: { type: Number, defaulltL: 0 },
}, { timestamps: true, collection: 'users' });
const UserModel = mongoose_1.default.model('users', UserSchema);
exports.default = UserModel;
