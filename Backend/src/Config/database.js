const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL || "mongodb+srv://shivaysharma77893:shivkumar777@cluster7.tjlg0dn.mongodb.net" , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDb connected with server ${data.connection.host}`);
    })
};

module.exports = connectDatabase;