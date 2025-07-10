const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  quantity: Number,
  dueDate: Date,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Borrow', borrowSchema);
