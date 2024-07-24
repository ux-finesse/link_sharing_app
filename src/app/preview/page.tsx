"use client"
import React from "react";
import { useAuth } from "../lib/useAuth";
import Link from "next/link";

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return (
      <div>
        <p>You need to be logged in to access this page.</p>
        <Link href="/login">
          <p>Go to Login</p>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      {/* Your dashboard content */}
    </div>
  );
};

export default Dashboard;
