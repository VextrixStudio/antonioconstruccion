import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antonioenriquezconstruction.com"),
  title: {
    default: "Antonio Enriquez Construction | General Contractor in Perris, CA",
    template: "%s | Antonio Enriquez Construction"
  },
  description:
    "Licensed & insured general contractor in Perris, California. Full-service residential and commercial construction, remodeling, painting, metal works, concrete and more. 10+ years of craftsmanship across California.",
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
  openGraph: {
    title: "Antonio Enriquez Construction | Building Your Vision",
    description:
      "Real craftsmanship by humans, for humans. Full-service residential and commercial construction in California. Licensed, insured and trusted since 2016.",
    url: "https://antonioenriquezconstruction.com",
    siteName: "Antonio Enriquez Construction",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Crea esta imagen 1200x630px en /public
        width: 1200,
        height: 630,
        alt: "Antonio Enriquez Construction - Premium Building & Remodeling"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Enriquez Construction",
    description:
      "Licensed general contractor in California. 10+ years building dreams with precision and care.",
    images: ["/og-image.jpg"]
  },
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
  themeColor: "#050505",
  colorScheme: "dark",
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
    "https://www.instagram.com/antonio.construcsion",
    "https://www.youtube.com/@antocontruction"
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark" style={{ colorScheme: "dark" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-zinc-100 antialiased selection:bg-amber-500/30 selection:text-white`}
      >
        <BackgroundSystem />

        <Nav />

        <main className="relative flex flex-col pt-20 lg:pt-28">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}

function BackgroundSystem() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-150 bg-amber-500/10 blur-[120px] rounded-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-zinc-950/50 py-16 px-6 backdrop-blur-md">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-12 items-start">
        {/* brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-black tracking-tighter uppercase text-white">
            Antonio Enriquez<span className="text-amber-500">.</span>
          </h3>
          <p className="text-xs text-zinc-300 uppercase tracking-[0.3em]">
            Building Excellence Since 2016
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-zinc-500">
            Perris · California
          </p>
        </div>

        {/* links legales */}
        <div className="flex flex-wrap gap-3 md:justify-center">
          <Link
            href="/privacy"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
          >
            Contact
          </Link>
        </div>

        {/* copyright */}
        <div className="text-center md:text-right">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-zinc-500 mt-2 italic">
            Crafted by Vextrix Studio
          </p>
        </div>
      </div>
    </footer>
  );
}