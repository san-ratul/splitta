import {Inter} from "next/font/google"
import "./globals.css";
import Header from "@/components/header";
import {ConvexClientProvider} from "@/components/providers/convex-client-provider";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "No drama, just Splitta.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/logos/favicon.png"/>
    </head>
    <body
      className={`${inter.className} min-h-screen`}
    >
    <ClerkProvider>
      <ConvexClientProvider>
        <Header/>
        <main className="pt-18">
          {children}
        </main>
      </ConvexClientProvider>
    </ClerkProvider>
    </body>
    </html>
  );
}
