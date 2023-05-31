import mongoose from "mongoose";

mongoose.connect("mongodb+srv://breno:123@alura-livros.r7u5p6d.mongodb.net/banco");

let db = mongoose.connection;

export default db;