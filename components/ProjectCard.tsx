import Image from "./Image";
import Link from "./Link";
import { FaGithub } from "react-icons/fa6";

type ProjectCard = {
  title: string;
  description?: string;
  imgSrc?: string;
  liveUrl?: string;
  linkText?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  repoData?: any;
};

async function ProjectCard({
  title,
  description,
  imgSrc,
  liveUrl,
  repoData,
  linkText,
}: ProjectCard) {
  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (liveUrl ? (
            <Link href={liveUrl} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6 h-full flex flex-col">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {liveUrl ? (
              <Link href={liveUrl} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>

          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <div className="mt-auto">
            {liveUrl && (
              <Link
                href={liveUrl}
                className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Link to ${title}`}
              >
                {linkText ? linkText : "Learn more"} &rarr;
              </Link>
            )}

            {repoData && (
              <div className="flex flex-row items-center">
                <div className="h-100">
                  <Link href={repoData.html_url}>
                    <FaGithub />
                  </Link>
                </div>
                <div className="ml-2">
                  <Link href={repoData.html_url}>⭐️ {repoData.stargazers_count}</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
