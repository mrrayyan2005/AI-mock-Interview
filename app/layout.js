import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeuraPrep - AI Mock Interview",
  description: "Prepare for your interviews with AI-powered mock interviews",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
