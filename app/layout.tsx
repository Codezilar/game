import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frozeverse",
  description: "Sci-fi game landing page inspired by the provided Dribbble animation.",
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
