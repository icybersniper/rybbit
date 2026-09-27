import { Inter, Vazirmatn } from "next/font/google";
import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "../lib/utils";
import "./globals.css";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });
// وزیرمتن برای فارسی؛ زیرمجموعهٔ arabic گلیف‌های فارسی را پوشش می‌دهد.
const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "آی‌ریپورت",
  description: "آنالیتیکس وب حریم‌خصوصی‌محور",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isFa = locale === "fa";
  const dir = isFa ? "rtl" : "ltr";
  const font = isFa ? vazir : inter;

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={cn("bg-background text-foreground h-full", font.className)} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
