const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/mycontacts-backend');
        console.log("Database connected:", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1); 
    }
};

module.exports = connectDb;
