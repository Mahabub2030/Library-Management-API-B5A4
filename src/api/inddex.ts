import { VercelRequest, VercelResponse } from '@vercel/node';
import express from "express";
const app = express();

// ... routes here ...

export default (req: VercelRequest, res: VercelResponse) => {
  app(req as any, res as any); // workaround to run Express on Vercel
};
