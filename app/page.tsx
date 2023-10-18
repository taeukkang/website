import { Authors, allAuthors } from "contentlayer/generated";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import { components } from "@/components/MDXComponents";
import AuthorLayout from "@/layouts/AuthorLayout";
import { coreContent } from "pliny/utils/contentlayer";
import { genPageMetadata } from "app/seo";
import RecentUpdate from "@/components/RecentUpdate";

export const metadata = genPageMetadata({ title: "Taeuk Kang" });

export default function Page() {
  const author = allAuthors.find((p) => p.slug === "default") as Authors;
  const mainContent = coreContent(author);

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} components={components} />
        <RecentUpdate />
      </AuthorLayout>
    </>
  );
}
