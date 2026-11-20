import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SITE_NAME = "Joseph Herreño | Portafolio";
const DEFAULT_IMAGE = "/logo.png";

const setMeta = (name: string, content: string, attribute = "name") => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
};

const setLink = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
};

const SEO = ({ title, description, image = DEFAULT_IMAGE, url, type = "website" }: SEOProps) => {
  useEffect(() => {
    const resolvedUrl = url ?? (typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : undefined);
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:image", image, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    if (resolvedUrl) setMeta("og:url", resolvedUrl, "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    if (resolvedUrl) setLink("canonical", resolvedUrl);
  }, [title, description, image, url, type]);

  return null;
};

export default SEO;
