"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: String,
    author: String,
    genre: String,
    isbn: String,
    description: String,
    copies: { type: Number, required: true },
    available: { type: Boolean, default: true },
}, {
    versionKey: false
});
// module.exports = mongoose.model("Book", bookSchema);
exports.Books = (0, mongoose_1.model)("Books", bookSchema);
