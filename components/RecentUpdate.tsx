import { allUpdates } from "contentlayer/generated";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import { components } from "@/components/MDXComponents";
import { sortPosts } from "pliny/utils/contentlayer";

export default function RecentUpdate() {
  if (allUpdates.length === 0) {
    return <div>No updates found.</div>;
  }

  const sortedUpdates = sortPosts(allUpdates);

  return (
    <>
      <h3>Recent update</h3>
      <MDXLayoutRenderer code={sortedUpdates[0].body.code} components={components} />
    </>
  );
}
