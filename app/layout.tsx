import type { Metadata } from "next";
import "./globals.css";

const description =
  "buildinhub is dead. Its engineers fell out, so the product is no longer maintained. Stop using it, and ask Stripe for a chargeback for every month you were billed.";

export const metadata: Metadata = {
  title: "buildinhub is DEAD <3",
  description,
  openGraph: {
    title: "buildinhub is DEAD <3",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "buildinhub is DEAD <3",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
