import mongoose from "mongoose";
import dotenv from 'dotenv';
import bycrpt from 'bcryptjs';
dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb+srv://devanshi1priya22003:priya2003@cluster0.kcdqxvv.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;