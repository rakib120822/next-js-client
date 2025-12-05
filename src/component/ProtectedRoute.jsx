"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // redirect if not logged in
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
}
