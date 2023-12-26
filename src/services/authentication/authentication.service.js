import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const loginRequest = async (email, password) => {
  try {
    const auth = getAuth();

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;
    console.log('user');
    return user;
  } catch (error) {
    return error;
  }
};

export const registerRequest = async (email, password) => {
  try {
    const auth = getAuth();

    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log('register', res);
    return res;
  } catch (error) {
    return error;
  }
};
