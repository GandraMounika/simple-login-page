##Introduction
This project is a simple login and registration application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) along with Bootstrap for styling. The application allows users to register an account and then log in with their credentials. Upon successful login, users are greeted with a welcome page. The application employs JWT (JSON Web Token) for authentication.

##Features
User Registration: Create a new user account.
User Login: Authenticate existing users.
Welcome Page: Personalized greeting upon successful login.
Password Encryption: User passwords are securely hashed using bcrypt.
Stylish UI: Designed using Bootstrap for a clean and responsive interface.
Background Image: Customized background to enhance visual appeal.

##Technologies Used
Frontend: React.js, Bootstrap
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Token)
Password Hashing: bcrypt
Installation
Follow these steps to set up and run the project locally:

##Prerequisites
Node.js and npm installed on your machine.
MongoDB installed and running.
Git installed (optional, for cloning the repository).
Steps
Clone the Repository (or download the ZIP):

git clone <repository-url>
##Navigate to the Project Directory:

cd simple-login-app
Install Server Dependencies:

##Navigate to the server directory and install the dependencies.

cd server
npm install
Install Client Dependencies:

##Navigate to the client directory and install the dependencies.

cd ../client
npm install
Set Up Environment Variables:

##In the server directory, create a .env file with the following content:

MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret-key>
Replace <your-mongodb-connection-string> with your actual MongoDB URI and <your-jwt-secret-key> with a secret key of your choice.

Running the Application
Start the Server:

##Navigate to the server directory and run:

npm start
The server will start on http://localhost:5000.

Start the Client:

Navigate to the client directory and run:

bash
Copy code
npm start
The client will start on http://localhost:3000.

Open your web browser and go to http://localhost:3000 to access the application.

API Endpoints
POST /api/register: Register a new user

Request body: { "username": "example", "password": "example123" }
POST /api/login: Login with existing user credentials

Request body: { "username": "example", "password": "example123" }


##File Structure

simple-login-app/
  ├── client/
  │   ├── public/
  │   │   ├── index.html
  │   │   ├── styles.css
  │   ├── src/
  │   │   ├── components/
  │   │   │   ├── LoginForm.js
  │   │   │   ├── RegistrationForm.js
  │   │   │   ├── Welcome.js
  │   │   ├── App.js
  │   │   ├── index.js
  │   │   ├── App.css
  ├── server/
      ├── server.js
      ├── package.json
      ├── .env
      ├── models/
      │   ├── User.js
      ├── routes/
          ├── userRoutes.js

##Notes:
Update the <repository-url> in the installation section with the actual Git repository URL.
Replace path/to/login-screenshot.png, path/to/registration-screenshot.png, and path/to/welcome-screenshot.png with the actual paths to your screenshots.
Ensure your .env file is not included in any public repositories for security reasons.
The installation and running steps assume you have a basic understanding of Node.js, npm, and MongoDB.
