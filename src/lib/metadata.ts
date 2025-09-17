import { Metadata } from "next"

interface PageMetadataOptions {
  title: string
  description: string
  keywords?: string[]
  path: string
  image?: string
  type?: "website" | "article"
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
  image = "/images/og-default.jpg",
  type = "website"
}: PageMetadataOptions): Metadata {
  const baseUrl = "https://lanzar.in"
  const fullUrl = `${baseUrl}${path}`
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Lanzar" }],
    creator: "Lanzar",
    publisher: "Lanzar",
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Lanzar",
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@lanzareor",
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export function generateServiceMetadata(serviceName: string, serviceDescription: string) {
  return generatePageMetadata({
    title: `${serviceName} | Lanzar`,
    description: serviceDescription,
    keywords: ["EOR", "service", serviceName.toLowerCase(), "lanzar", "india"],
    path: `/services/${serviceName.toLowerCase()}`,
    image: `/images/services/${serviceName.toLowerCase()}-og.jpg`,
  })
}