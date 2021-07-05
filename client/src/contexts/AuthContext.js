import React, { useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  async function signup(email, password, displayName) {
    let person = await auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => console.error(err.message));

    let updated = await person.user
      .updateProfile({
        displayName,
      })
      .catch((err) => console.error(err.message));

    history.push("/home");
    return updated;
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  async function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    let isValid = false;
    await auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        if (result.credential.accessToken) {
          isValid = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (isValid) {
      history.push("/home");
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
