import { sortPosts, allCoreContent } from "pliny/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";
import BlogPosts from "@/components/BlogPosts";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "Blog" });

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);
  return <BlogPosts posts={posts} />;
}
