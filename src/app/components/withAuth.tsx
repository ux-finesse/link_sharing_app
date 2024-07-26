import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../lib/useAuth"; // Ensure this path is correct

const withAuth = (WrappedComponent: React.ComponentType) => {
  const WithAuthComponent = (props: any) => {
    const { user, loading } = useAuth();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      if (mounted && !loading && !user) {
        router.push("/login");
      }
    }, [mounted, loading, user, router]);

    if (!mounted || loading || !user) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
