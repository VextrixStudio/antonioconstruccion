import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/nav";
import { socialMetadata } from "./social-metadata";

const homeSocialMetadata = socialMetadata(
  "/",
  "A better space starts with a good build",
  "Residential and commercial construction, remodeling, and finish work in Perris, California. Clear communication from the first conversation to the final walkthrough."
);

export const metadata: Metadata = {
  metadataBase: new URL("https://antonioenriquezconstruction.com"),
  title: {
    default: "Antonio Enriquez Construction | General Contractor in Perris, CA",
    template: "%s | Antonio Enriquez Construction"
  },
  description:
    "Residential and commercial construction, remodeling, and finish work in Perris, California. Clear communication from the first conversation to the final walkthrough.",
  keywords: [
    "construction Perris CA",
    "general contractor Perris",
    "general contractor Riverside County",
    "construction company California",
    "remodeling Perris CA",
    "commercial construction California",
    "residential construction",
    "home remodeling Perris",
    "painting contractor California",
    "metal works California",
    "concrete contractor",
    "drywall framing",
    "tenant improvements",
    "Antonio Enriquez Construction"
  ],
  authors: [{ name: "Antonio Enriquez Construction" }],
  creator: "Antonio Enriquez Construction",
  publisher: "Antonio Enriquez Construction",
  applicationName: "Antonio Enriquez Construction",
  category: "Construction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "/"
  },
  openGraph: homeSocialMetadata.openGraph,
  twitter: homeSocialMetadata.twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "lyOH6AFR5ZzLVDnFVTLVw9HmpkEuM_7wFU4RsKzWAl0"
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#f7f7f5",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

// JSON-LD para Google (Local Business Schema)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Antonio Enriquez Construction",
  image: "https://antonioenriquezconstruction.com/og-image.jpg",
  "@id": "https://antonioenriquezconstruction.com",
  url: "https://antonioenriquezconstruction.com",
  telephone: "+1-323-740-8161",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "370 Paul Ct",
    addressLocality: "Perris",
    addressRegion: "CA",
    postalCode: "92570",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.78008,
    longitude: -117.24975
  },
  areaServed: [
    { "@type": "State", name: "California" },
    { "@type": "City", name: "Perris" },
    { "@type": "City", name: "Riverside" },
    { "@type": "City", name: "Los Angeles" },
    { "@type": "City", name: "San Bernardino" }
  ],
  sameAs: [
    "https://www.instagram.com/antonioenriquezconstruction/",
    "https://www.youtube.com/@antonioenriquezconstructionon",
    "https://www.facebook.com/profile.php?id=61591485236918",
    "https://www.tiktok.com/@antonio.eq.constr"
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00"
    }
  ],
  foundingDate: "2016",
  description:
    "Licensed and insured general contractor offering residential and commercial construction, remodeling, painting, metal works, concrete and more in Perris and across California."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth" style={{ colorScheme: "light" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Nav />

        <main className="relative flex flex-col">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <div className="site-footer-brand">Antonio Enriquez Construction</div>
          <div className="site-footer-meta">Residential and commercial construction · Perris, California</div>
        </div>
        <div className="site-footer-links">
          <Link href="/services">Services</Link>
          <Link href="/work">Our work</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <div className="site-footer-meta site-footer-copy">
          <div>© {new Date().getFullYear()} All rights reserved</div>
          <div>Site by Vextrix Studio</div>
        </div>
      </div>
    </footer>
  );
}
