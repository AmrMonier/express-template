import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "./config/env";
// Import routes here

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use routes here

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
