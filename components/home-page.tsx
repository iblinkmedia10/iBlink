"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import ContactStatus from "@/components/contact-status";
import FaqSection from "@/components/faq-section";
import PageEffects from "@/components/page-effects";
import SiteNavigation from "@/components/site-navigation";
import { faqs } from "@/components/site-content";
import {
  BenefitsSection,
  BrandsSection,
  ContactSection,
  CreatorSection,
  CtaSection,
  FeatureStrip,
  FloatingShapes,
  HeroSection,
  HighlightSection,
  SiteFooter,
  TrophySection
} from "@/components/sections";
import { serializeJsonLd } from "@/lib/safe-json-ld";
import { siteConfig } from "@/lib/site-config";

type HomePageProps = {
  contactStatus?: string;
};

export default function HomePage({ contactStatus }: HomePageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (contactStatus) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("contact");

      const newUrl = params.toString() ? `/?${params.toString()}` : "/";

      router.replace(newUrl, { scroll: false });
    }
  }, [contactStatus, router, searchParams]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/IMG_2691.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "India",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"]
    },
    sameAs: ["https://www.instagram.com/", "https://www.linkedin.com/"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      {/* This can still handle scroll/toast */}
      <ContactStatus status={contactStatus} />
      <SiteNavigation />

      <div style={{ position: "relative", overflow: "hidden" }}>
        <FloatingShapes />
      </div>

      <main className="site-shell">
        {/* SEO SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />

        {/* SECTIONS */}
        <HeroSection />
        <FeatureStrip />
        <BrandsSection />
        <TrophySection />
        <HighlightSection />
        <BenefitsSection />
        <CreatorSection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <PageEffects />
    </>
  );
}
