import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "buildinhub is DEAD",
  description: "buildinhub is dead. Do not use it anymore.",
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
