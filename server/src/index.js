import * as dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
