import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = "/og-image.jpg",
  structuredData,
}: SEOProps) {
  const siteUrl = "https://gohpainting.com";
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = `${siteUrl}${ogImage}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GOHpainting",
    image: fullOgImage,
    description: description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Raleigh, NC",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      postalCode: "27601",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.7796,
      longitude: -78.6382,
    },
    url: siteUrl,
    telephone: "+19195550123",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/gohpainting",
      "https://www.instagram.com/gohpainting",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 35.7796,
        longitude: -78.6382,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Painting",
            description:
              "Professional interior and exterior painting services for homes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Painting",
            description:
              "Expert painting services for businesses and commercial properties",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{`${title} | GOHpainting - Professional Painting Services in Raleigh, NC`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="GOHpainting" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@gohpainting" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="GOHpainting" />
      <meta
        name="keywords"
        content="painting services, house painting, commercial painting, interior painting, exterior painting, Raleigh NC, professional painters, residential painting, home painting, business painting"
      />
      <meta name="geo.region" content="US-NC" />
      <meta name="geo.placename" content="Raleigh" />
      <meta name="geo.position" content="35.7796;-78.6382" />
      <meta name="ICBM" content="35.7796, -78.6382" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Default Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
    </Helmet>
  );
}
