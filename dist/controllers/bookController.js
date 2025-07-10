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
exports.bookBorrow = exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Book_1 = require("../models/Book");
exports.bookRoutes = express_1.default.Router();
exports.bookBorrow = express_1.default.Router();
// create routes post
exports.bookRoutes.post("/createBooks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("requting", req.body);
    try {
        const body = req.body;
        const book = yield Book_1.Books.create(body);
        res.status(201).json(book);
    }
    catch (error) {
        console.error("Error saving book:", error);
        res.status(500).json({ message: "Failed to save book." });
    }
}));
// get all data
exports.bookRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("requting", req.body);
    try {
        const book = yield Book_1.Books.find();
        res.send(book);
    }
    catch (error) {
        console.error("Error saving book:", error);
        res.status(500).json({ message: "Failed to save book." });
    }
}));
// get singal data useing findByid
exports.bookRoutes.get("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    try {
        const book = yield Book_1.Books.findById(bookId);
        res.send(book);
    }
    catch (error) {
        console.error("Error saving book:", error);
        res.status(500).json({ message: "Failed to save book." });
    }
}));
// update singal data
exports.bookRoutes.patch("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const BookUpdatedbody = req.body;
    const bookId = req.params.bookId;
    try {
        const book = yield Book_1.Books.findByIdAndUpdate(bookId, BookUpdatedbody, { new: true });
        res.send(book);
    }
    catch (error) {
        console.error("Error update book:", error);
        res.status(500).json({ message: "Failed to update book." });
    }
}));
// delete singale data
exports.bookRoutes.delete("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    try {
        const book = yield Book_1.Books.findByIdAndDelete(bookId);
        res.send(book);
    }
    catch (error) {
        console.error("Error delete book:", error);
        res.status(500).json({ message: "Failed to delete book." });
    }
}));
