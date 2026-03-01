import React, { memo } from "react";

const SectionLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
      {[1, 2].map((i) => (
        <div key={i} className="space-y-4 animate-pulse">
          {/* Image Skeleton */}
          <div className="aspect-video w-full bg-zinc-900 rounded-3xl" />
          {/* Text Skeletons */}
          <div className="h-6 w-1/3 bg-zinc-900 rounded-md" />
          <div className="h-4 w-2/3 bg-zinc-900 rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default memo(SectionLoader);