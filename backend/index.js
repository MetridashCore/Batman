const express = require('express');
const admin = require('firebase-admin');
var serviceAccount = require("./serviceAccount.json");

const app = express();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL : ''
  });

const auth = admin.auth();

app.use(express.json())

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await auth.createUser({
        email: email,
        password : password,
        emailVerified:false,
        disabled:false,
      });
  
      res.json({ message: 'Signup successful', user });
    } catch (error) {
      console.error('Error signing up:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// Signin route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    const token = await user.user.getIdToken();

    res.json({ token });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(401).json({ message: 'Signin failed' });
  }
});

// Signout route
app.post('/signout', async (req, res) => {
  const idToken = req.headers.authorization.split('Bearer ')[1];

  try {
    await auth.revokeRefreshTokens(idToken);
    res.json({ message: 'Signout successful' });
  } catch (error) {
    console.error('Error signing out:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is listening on port 3000');
});