import projectsData from "@/data/projectsData";
import Card from "@/components/ProjectCard";
import { genPageMetadata } from "app/seo";
import { Octokit } from "@octokit/rest";

export const metadata = genPageMetadata({ title: "Projects" });

const octokit = new Octokit();

async function getData() {
  try {
    const repos = await octokit.rest.repos.listForUser({
      username: "taeukkang",
    });

    return repos.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function Projects() {
  const repos = await getData();

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                liveUrl={d.liveUrl}
                linkText={d.linkText}
                repoData={repos.find((repo) => repo.name === d.githubRepositoryName)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
