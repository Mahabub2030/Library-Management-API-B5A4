import express, { Application, Request, Response } from "express";
import { bookBorrow, bookRoutes } from "./controllers/bookController";

const app: Application = express();


app.use(express.json());

app.use("/book", bookRoutes);
app.use("/Borrow", bookBorrow);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome! To Library App");
});

export default app;
