import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Wrapper from "@/components/layout/wrapper";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Travel Itinerary",
  description: "Plan your next trip with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
