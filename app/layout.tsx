import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PracticeLink AI Adoption Hub",
  description:
    "A presentation-ready demo portal for PracticeLink AI adoption, governance, integration, upskilling, and ROI recommendations."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
