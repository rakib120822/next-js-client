// src/components/ClientAuthProvider.jsx
"use client";
import AuthProvider from "@/context/AuthProvider";

export default function ClientAuthProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
