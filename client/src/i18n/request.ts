import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

// آی‌ریپورت: «fa» اضافه شد و پیش‌فرضِ این استقرار فارسی است (مخاطب ایرانی).
// انتخاب صریح کاربر با کوکی NEXT_LOCALE همچنان محترم است.
const SUPPORTED_LOCALES = ["fa", "en", "de", "fr", "zh", "es", "pl", "it", "ko", "pt", "ja", "cs", "uk"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();

  // پیش‌فرض فارسی؛ فقط کوکیِ صریحِ کاربر آن را عوض می‌کند.
  let locale: SupportedLocale = "fa";
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale && isSupportedLocale(cookieLocale)) {
    locale = cookieLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
