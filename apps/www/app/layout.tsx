import { cn, Providers, Navbar } from "@repo/ui";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radioreach",
  description: "Dashboard UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen min-w-screen text-lg font-normal bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400 text-neutral-700",
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
