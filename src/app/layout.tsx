import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { PageTransition } from "@/components/templates/page-transition";
import { ScrollProgress } from "@/components/atoms/scroll-progress";
import { StructuredData } from "@/components/atoms/structured-data";
import { WebVitals } from "@/components/analytics/web-vitals";
import { generateWebsiteSchema } from "@/lib/structured-data";
import { APPLE_TOUCH_ICON, FAVICON_PATH } from "@/lib/constants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lanzar EOR | Employer of Record Services in India",
  description: "Designed for US and European companies to hire exceptional talent in India. We act as your legal employer, ensuring full compliance while you retain control over performance management.",
  keywords: ["Employer of Record", "EOR India", "global employment", "payroll management", "HR compliance", "India hiring", "employment services", "lanzar"],
  authors: [{ name: "Lanzar" }],
    creator: "Lanzar",
    publisher: "Lanzar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lanzar.in",
    title: "Lanzar | Employer of Record Services in India",
    description: "Designed for US and European companies to hire exceptional talent in India. We act as your legal employer, ensuring full compliance.",
    siteName: "Lanzar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanzar | Employer of Record Services in India",
    description: "Designed for US and European companies to hire exceptional talent in India. We act as your legal employer, ensuring full compliance.",
    creator: "@lanzareor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `(() => { try { const pref = localStorage.getItem('theme'); const root = document.documentElement; if (pref === 'light') { root.classList.remove('dark'); } else { root.classList.add('dark'); } } catch (_) { document.documentElement.classList.add('dark'); } })();`;
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href={FAVICON_PATH} sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href={APPLE_TOUCH_ICON} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <StructuredData data={generateWebsiteSchema()} />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-background text-foreground px-3 py-2 rounded">
          Skip to content
        </a>
        <WebVitals />
        <ScrollProgress />
        <Header />
        <PageTransition>
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
