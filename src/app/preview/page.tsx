import React, { Suspense, lazy, FC } from "react";

const PreviewContent = lazy(() => import("./PreviewContent"));

const Preview: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PreviewContent />
    </Suspense>
  );
};

export default Preview;
