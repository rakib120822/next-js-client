"use client";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase";

const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register with email & password
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateInfo = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name, photoURL });
  };

  // Login with email & password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Login with Google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Listen for auth state changes
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const userInfo = {
    register,
    login,
    googleLogin,
    logOut,
    updateInfo,
    user,
    loading,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
