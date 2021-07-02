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

  function signup(email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(login(email, password));
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
