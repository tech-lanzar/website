import { Metadata } from "next"
import { company, companyStats } from "@/data/company"
import { AboutHero } from "@/components/organisms/about-hero"
import { CompanyStory } from "@/components/organisms/company-story"
// import { LeadershipSection } from "@/components/organisms/leadership-section"
import { CompanyValues } from "@/components/organisms/company-values"
import { CompanyStats } from "@/components/organisms/company-stats"

export const metadata: Metadata = {
  title: "About Us | Lanzar",
  description: "Learn about Lanzar's mission to simplify global employment in India for US and European companies. Discover our EOR expertise and commitment to compliance excellence.",
  keywords: ["about lanzar", "EOR company", "employer of record", "India hiring", "global employment", "compliance"],
  openGraph: {
    title: "About Lanzar | Your Gateway to India's Top Talent",
    description: "Discover how Lanzar helps US and European companies hire exceptional talent in India through our comprehensive EOR services.",
    url: "https://lanzar.in/about",
    siteName: "Lanzar",
    type: "website",
    images: [
      {
        url: "https://lanzar.in/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Lanzar EOR Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lanzar | Your Gateway to India's Top Talent",
    description: "Discover how Lanzar helps US and European companies hire exceptional talent in India through our comprehensive EOR services.",
    images: ["https://lanzar.in/images/about-og.jpg"],
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero company={company} />

      <div className="space-y-24">
        <CompanyStory company={company} />
        <CompanyStats stats={companyStats} />
        {/* <LeadershipSection leaders={company.leadership} /> */}
        <CompanyValues values={company.values} />
      </div>
    </>
  )
}