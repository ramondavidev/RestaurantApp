import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const loginRequest = async (email, password) => {
  try {
    const auth = getAuth();

    console.log('got here!');

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;
    console.log('user');
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error', error);
    return error;
  }
};
