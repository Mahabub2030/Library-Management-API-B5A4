"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("./controllers/bookController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/book", bookController_1.bookRoutes);
app.use("/Borrow", bookController_1.bookBorrow);
app.get("/", (req, res) => {
    res.send("Welcome! To Library App");
});
exports.default = app;
