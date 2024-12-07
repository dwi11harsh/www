import { Providers, cn } from "@repo/ui";
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
      <Providers>
      <body className={cn(
        inter.className,
        "bg-neutral-100 dark:bg-neutral-950 dark:text-neutral-400 text-lg font-normal text-neutral-700"
      )}>
        {children}
      </body>
      </Providers>
    </html>
  );
}
