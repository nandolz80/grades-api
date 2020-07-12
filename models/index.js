import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcamp.t3954.mongodb.net/<dbname>?retryWrites=true&w=majority`;

export { db };
