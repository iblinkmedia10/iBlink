import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Influencer Marketing Agency in India",
  description:
    "Discover strategy-led influencer marketing, creator partnerships, campaign execution, and transparent reporting for brands across India.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url
  }
};

const ALLOWED_CONTACT_STATUSES = new Set(["success", "invalid", "error", "unconfigured"]);

export default function Home({ searchParams }: { searchParams?: { contact?: string } }) {
  const contactStatus =
    searchParams?.contact && ALLOWED_CONTACT_STATUSES.has(searchParams.contact)
      ? searchParams.contact
      : undefined;

  return <HomePage contactStatus={contactStatus} />;
}
