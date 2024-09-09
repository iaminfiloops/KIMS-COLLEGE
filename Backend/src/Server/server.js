const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("../Config/database");

dotenv.config({ path: "src/Config/config.env" });

// Connect to database
connectDatabase();

// Start server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT ||3000}`);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  console.error(err.stack);
  server.close(() => {
    process.exit(1);
  });
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  console.error(err.stack);
  server.close(() => {
    process.exit(1);
  });
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("SIGINT received: Closing server...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received: Closing server...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
