/* eslint-disable @next/next/no-img-element */
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import WFooter from "./components/WFooter";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://eemaindia.com"),
  title: "Event and Entertainment Management Association | EEMA India",
  description:
    "EEMA is the premier association representing India's event and experiential marketing industry. Discover our vision, members, and landmark initiatives that are shaping the future of live experiences.",
  keywords:
    "EEMA, Event Association India, Experiential Marketing, Event Management India, EEMAGINE, EEMAX, EEMA Membership, EEMA Events, Indian Event Industry",
  icons: {
    icon: [{ url: "./favicon.ico", type: "image/x-icon" }],
    shortcut: "/images/favicon/favicon-16x16.png",
    apple: "/images/favicon/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://eemaindia.com",
  },
  openGraph: {
    title: "Event and Entertainment Management Association | EEMA India",
    description:
      "India’s leading event and experiential marketing association, connecting agencies, professionals, and creators behind unforgettable live experiences.",
    url: "https://eemaindia.com",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA India",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event and Entertainment Management Association | EEMA India",
    description:
      "Discover the association powering India's event and experiential marketing ecosystem. Join, collaborate, and grow with EEMA.",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "EEMA - Event and Entertainment Management Association",
            url: "https://eemaindia.com",
            logo: "https://eemaindia.com/images/logo/eema-logo-orange-black-sm.png",
            sameAs: [
              "https://www.facebook.com/eemaindia",
              "https://www.linkedin.com/company/eemaindia",
              "https://twitter.com/eemaindia",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "01140546007",
              contactType: "Customer Service",
              areaServed: "IN",
              availableLanguage: "English",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "E-330, 80 Feet Rd, Block E, Greater Kailash II",
              addressLocality: "New Delhi",
              addressRegion: "Delhi",
              postalCode: "110048",
              addressCountry: "IN",
            },
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} antialiased`}
      >
        <div className=" relative z-[2] bg-gray-50 text-black ">{children}</div>

        <WFooter />

        {/* --- Google Ads --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11247694881"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11247694881');
          `}
        </Script>

        {/* --- Google Analytics GA4 --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MESW7TZ9HB"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MESW7TZ9HB');
          `}
        </Script>

        {/* --- LinkedIn Insight --- */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "5110090";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          strategy="afterInteractive"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt="linkedin-tracking"
            src="https://px.ads.linkedin.com/collect/?pid=5110090&fmt=gif"
          />
        </noscript>

        {/* --- Twitter Pixel --- */}
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){
              e.twq||(s=e.twq=function(){
                s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',
              s.queue=[],u=t.createElement(n),u.async=!0,
              u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
            }(window,document,'script');
            twq('config','of8qe');
          `}
        </Script>

        {/* --- Meta Pixel --- */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){
                n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '974649280323266');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=974649280323266&ev=PageView&noscript=1"
            alt="facebook-tracking"
          />
        </noscript>
      </body>
    </html>
  );
}
