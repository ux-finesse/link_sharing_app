import React, { Suspense, lazy, FC } from "react";

const HomeContent = lazy(() => import("./HomeContent"));

const Home: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
};

export default Home;