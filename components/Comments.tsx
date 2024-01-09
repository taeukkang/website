"use client";

import { Comments as CommentsComponent } from "pliny/comments";
import { useState } from "react";
import siteMetadata from "@/data/siteMetadata";

export default function Comments({ slug, draft }: { slug: string; draft?: boolean }) {
  // Do not load comments by default if it's a draft
  // I don't want to create draft discussions on GitHub
  const [loadComments, setLoadComments] = useState(!draft);

  return (
    <>
      {!loadComments && <button onClick={() => setLoadComments(true)}>Load Comments</button>}
      {siteMetadata.comments && loadComments && (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      )}
    </>
  );
}
