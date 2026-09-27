import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruthwik Reddy | Software Engineer",
  description:
    "Software engineer focused on backend systems, cloud applications, APIs, and distributed systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
