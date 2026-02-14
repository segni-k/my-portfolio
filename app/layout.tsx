import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Segni Kasahun - Full-Stack Developer",
  description: "Portfolio of Segni Kasahun, a passionate full-stack developer specializing in building modern web and mobile applications.",
  keywords: "Full-Stack Developer, React, Next.js, Node.js, Python, Laravel, Web Development, Mobile Development",
  authors: [{ name: "Segni Kasahun" }],
  openGraph: {
    title: "Segni Kasahun - Full-Stack Developer",
    description: "Portfolio of Segni Kasahun, a passionate full-stack developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white dark:bg-[#0F172A] text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
