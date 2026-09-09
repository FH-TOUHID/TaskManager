import "dotenv/config";
import app from "./src/app.js";
import connectdb from "./src/db/db.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectdb();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Database connection failed");
    console.log(error.message);
  }
};

startServer();