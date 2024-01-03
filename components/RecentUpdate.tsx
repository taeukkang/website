"use client";

import { allUpdates } from "contentlayer/generated";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import { components } from "@/components/MDXComponents";
import { sortPosts } from "pliny/utils/contentlayer";
import { useState } from "react";

export default function RecentUpdate() {
  if (allUpdates.length === 0) {
    return <div>No updates found.</div>;
  }

  const sortedUpdates = sortPosts(allUpdates);
  const [updateIndex, setUpdateIndex] = useState(0);

  const handleGoBack = () => {
    setUpdateIndex((updateIndex + 1) % sortedUpdates.length);
  };

  return (
    <>
      <h3 className="mb-0">Recent update</h3>
      <div>
        <div className="flex justify-between">
          <p className="italic my-0">
            From <time>{sortedUpdates[updateIndex].date}</time>...
          </p>
          <button
            onClick={handleGoBack}
            className="text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {updateIndex < sortedUpdates.length - 1
              ? "go back in time →"
              : "← return to the present"}
          </button>
        </div>
        <MDXLayoutRenderer code={sortedUpdates[updateIndex].body.code} components={components} />
      </div>
    </>
  );
}
