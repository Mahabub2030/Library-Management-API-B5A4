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
const Book = require('../models/Book');
const Borrow = require('../models/Borrow');
exports.borrowBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const { quantity, dueDate } = req.body;
    const book = yield Book.findById(bookId);
    if (!book || book.copies < quantity) {
        return res.status(400).json({ message: 'Not enough copies available' });
    }
    book.copies -= quantity;
    book.available = book.copies > 0;
    yield book.save();
    const borrow = new Borrow({ book: bookId, quantity, dueDate });
    yield borrow.save();
    res.status(201).json(borrow);
});
exports.borrowSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const summary = yield Borrow.aggregate([
        {
            $group: {
                _id: '$book',
                totalBorrowed: { $sum: '$quantity' }
            }
        },
        {
            $lookup: {
                from: 'books',
                localField: '_id',
                foreignField: '_id',
                as: 'bookInfo'
            }
        },
        {
            $unwind: '$bookInfo'
        },
        {
            $project: {
                title: '$bookInfo.title',
                isbn: '$bookInfo.isbn',
                totalBorrowed: 1
            }
        }
    ]);
    res.json(summary);
});
