import { Request, Response } from "express";

const Book = require('../models/Book');
const Borrow = require('../models/Borrow');


exports.borrowBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const { quantity, dueDate } = req.body;

  const book = await Book.findById(bookId);
  if (!book || book.copies < quantity) {
    return res.status(400).json({ message: 'Not enough copies available' });
  }

  book.copies -= quantity;
  book.available = book.copies > 0;
  await book.save();

  const borrow = new Borrow({ book: bookId, quantity, dueDate });
  await borrow.save();

  res.status(201).json(borrow);
};

exports.borrowSummary = async (req: Request, res: Response) => {
  const summary = await Borrow.aggregate([
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
};
