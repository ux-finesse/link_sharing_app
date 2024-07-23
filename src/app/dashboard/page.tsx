"use client";
import React from "react";
import { useAuth } from "../lib/useAuth";
import Link from "next/link";

import NavBar from "../components/layouts/NavBar";
import PhoneMockup from "../components/layouts/PhoneMockup";
import CustomizeLink from "../components/layouts/CustomizeLink";

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
    <main>
      <NavBar />
      <section>
        <PhoneMockup />
        <CustomizeLink />
      </section>
    </main>
  );
};

export default Dashboard;
