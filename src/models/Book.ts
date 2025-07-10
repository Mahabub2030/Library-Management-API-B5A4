import { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  isbn: String,
  description: String,
  copies: { type: Number, required: true },
  available: { type: Boolean, default: true },
},{
  versionKey:false
});
// module.exports = mongoose.model("Book", bookSchema);
export const Books = model("Books",bookSchema)
