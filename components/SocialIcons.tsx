"use client";

import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMastodon,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const components = {
  mail: FaEnvelope,
  emailEncoded: FaEnvelope,
  github: FaGithub,
  facebook: FaFacebook,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  mastodon: FaMastodon,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
};

export const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (!href || (kind === "mail" && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))) {
    return null;
  }

  const Icon = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Icon
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  );
};

// This component exists for rudimentary spam protection, so that
// the email gets decoded client-side, not server-side
export function SocialIconClient({ kind, href, size = 8 }: SocialIconProps) {
  const [href_, setHref_] = useState(href);

  useEffect(() => {
    if (kind === "emailEncoded") {
      setHref_("mailto:" + atob(href || ""));
    }
  }, [href_]);

  const Icon = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href_}
    >
      <span className="sr-only">{kind}</span>
      <Icon
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  );
}
