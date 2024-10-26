import localFont from "next/font/local";
import "../globals.css";
import { Suspense } from "react";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// Define CoText, CoTextBold, and CoTextLight fonts
const coText = localFont({
  src: "../fonts/CoText.otf",
  variable: "--font-co-text",
  weight: "400", // Regular weight
});

const coTextBold = localFont({
  src: "../fonts/CoTextBold.otf",
  variable: "--font-co-text-bold",
  weight: "700", // Bold weight
});

const coTextLight = localFont({
  src: "../fonts/CoTextLight.otf",
  variable: "--font-co-text-light",
  weight: "300",
});

export const metadata = getStaticMetaData({
  title: "Safeer Company",
  description: "Energizing Our Future with Efficiency & Renewables",
  isRobotFollow: false,
});

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head></head>
      <body
        className={`${coText.variable} ${coTextBold.variable} ${coTextLight.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
