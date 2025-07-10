import express, { Request, Response } from"express"
import { Books } from "../models/Book";

export const bookRoutes = express.Router()
export const bookBorrow =express.Router()



// create routes post
bookRoutes.post("/createBooks", async (req: Request, res: Response) => {
  console.log("requting", req.body);
  try {
    const body = req.body;
    const book = await Books.create(body);
    res.status(201).json(book);
  } catch (error) {
    console.error("Error saving book:", error);
    res.status(500).json({ message: "Failed to save book." });
  }
});
// get all data
bookRoutes.get("/", async (req: Request, res: Response) => {
  console.log("requting", req.body);
  try {
    const book = await Books.find();
    res.send(book);
  } catch (error) {
    console.error("Error saving book:", error);
    res.status(500).json({ message: "Failed to save book." });
  }
});
// get singal data useing findByid
bookRoutes.get("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId
  try {
    const book = await Books.findById(bookId);
    res.send(book);
  } catch (error) {
    console.error("Error saving book:", error);
    res.status(500).json({ message: "Failed to save book." });
  }
});
// update singal data
bookRoutes.patch("/:bookId", async (req: Request, res: Response) => {
   const BookUpdatedbody = req.body;
  const bookId = req.params.bookId
  try {
    const book = await Books.findByIdAndUpdate(bookId,BookUpdatedbody,{new:true});
    res.send(book);
  } catch (error) {
    console.error("Error update book:", error);
    res.status(500).json({ message: "Failed to update book." });
  }
});
// delete singale data
bookRoutes.delete("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId
  try {
    const book = await Books.findByIdAndDelete(bookId);
    res.send(book);
  } catch (error) {
    console.error("Error delete book:", error);
    res.status(500).json({ message: "Failed to delete book." });
  }
});