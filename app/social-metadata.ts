import type { Metadata } from "next";

const SITE_URL = "https://antonioenriquezconstruction.com";
const IMAGE_URL = `${SITE_URL}/og-image.jpg`;
const SITE_NAME = "Antonio Enriquez Construction";
const IMAGE_ALT = "Antonio Enriquez Construction — quality building and remodeling in Perris, California";

export function socialMetadata(path: string, title: string, description: string): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: IMAGE_ALT }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [{ url: IMAGE_URL, alt: IMAGE_ALT }]
    }
  };
}
