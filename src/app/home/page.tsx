"use client";
import React, { useState } from "react";
import { useAuth } from "../lib/useAuth";
import Link from "next/link";

import NavBar from "../components/layouts/NavBar";
import CustomizeLink from "../components/CustomizeLink";

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();

  const [selectedTab, setSelectedTab] = useState("links");

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
    <main>
      <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <CustomizeLink selectedTab={selectedTab} />
    </main>
  );
};

export default Dashboard;
