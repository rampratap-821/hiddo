



import { 
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile 
} from 'firebase/auth';
import { auth } from '../FireBaseComponent/FirebaseConfig';

// SignInModel class (अगर आपको class की जरूरत है)
export class SignInModel {
  constructor(emailId, password) {
    this.emailId = emailId;
    this.password = password;
  }
}

// Main signIn function
export const signInClickCash = async (model) => {
  try {
    // Firebase authentication
    const userCredential = await signInWithEmailAndPassword(
      auth, 
      model.emailId, 
      model.password
    );

    const user = userCredential.user;
    
    // Store in localStorage (AsyncStorage की जगह)
    localStorage.setItem('userEmail', model.emailId);
    localStorage.setItem('userToken', user.accessToken);
    localStorage.setItem('userId', user.uid);

    return { 
      success: true, 
      message: 'SignIn Successful',
      user: {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
      }
    };
  } catch (error) {
    console.error('SignIn Error:', error);
    
    // Better error messages
    let errorMessage = 'Something went wrong';
    
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/user-disabled':
        errorMessage = 'This user has been disabled';
        break;
      case 'auth/user-not-found':
        errorMessage = 'No user found with this email';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many attempts. Please try again later';
        break;
      default:
        errorMessage = error.message || 'Authentication failed';
    }

    return {
      success: false,
      message: errorMessage,
      errorCode: error.code
    };
  }
};

// Additional auth functions
export const signUpWithEmail = async (email, password, fullName = '') => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update profile with display name
    if (fullName) {
      await updateProfile(user, {
        displayName: fullName
      });
    }

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userToken', user.accessToken);
    localStorage.setItem('userId', user.uid);

    return {
      success: true,
      message: 'SignUp Successful',
      user: {
        email: user.email,
        uid: user.uid,
        displayName: fullName || user.displayName
      }
    };
  } catch (error) {
    let errorMessage = 'Signup failed';
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Email already in use';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password is too weak';
        break;
      default:
        errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage
    };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    
    return { success: true, message: 'Signed out successfully' };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: 'Password reset email sent' };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

// Check if user is logged in
export const getCurrentUser = () => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    });
  });
};








