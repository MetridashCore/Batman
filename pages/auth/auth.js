import { useState } from 'react';
// import { useRouter } from 'next/router';
// import {
//   createUserWithEmail,
//   signInWithEmail,
//   signInWithGoogle,
// } from '../../auth.js';


const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 
  const handleSignUp = async () => {
    try {
      await createUserWithEmail(name,email, password);
      setMessage('User signed up successfully');
    } catch (error) {
      setMessage(`Error signing up: ${error.message}`);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmail(email, password);
      setMessage('User signed in successfully');
    } catch (error) {
      setMessage(`Error signing in: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      setMessage('User signed in with Google successfully');
    } catch (error) {
      setMessage(`Error signing in with Google: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Authentication</h1>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AuthPage;
