import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Ridhwan Naufal | Frontend Software Engineer",
  description: "Portfolio of Ahmad Ridhwan Naufal, a Frontend Developer with a 4+ year track record building healthcare and enterprise web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
