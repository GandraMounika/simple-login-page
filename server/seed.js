const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Sample users to insert
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' }
];

// Insert sample users
async function seedDatabase() {
  try {
    await User.deleteMany(); // Remove all existing users
    await User.insertMany(users); // Insert sample users
    console.log('Sample users added to the database');
  } catch (error) {
    console.error('Error adding sample users:', error);
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
}

seedDatabase();
