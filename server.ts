import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
	  console.log('Connected to database');
});

app.listen(port, () => {
	  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
	  res.send('Hello world!');
});

app.post('/api/items', (req, res) => {
const { name, description, price } = req.body;
	// TODO: save the item to the database
	 res.send('Item saved');
});
	  
app.get('/api/items', (req, res) => {
  // TODO: retrieve all items from the database
	res.json([]);
});
	  
