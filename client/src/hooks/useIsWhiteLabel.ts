// آی‌ریپورت: کل این نمونه سفیدبرچسب (white-label) است. بالادستِ Rybbit این را
// per-organization و با نگاشتِ سخت‌کدشده نگه می‌داشت؛ چون این استقرار کاملاً
// برندِ ماست، همیشه فعال است تا: (۱) لوگوی آی‌ریپورت همه‌جا نمایش داده شود،
// (۲) فوتر «powered by Rybbit» و واترمارک‌ها/لینک‌های تبلیغاتی Rybbit همه‌جا پنهان شوند.
export function useWhiteLabel() {
  return {
    isWhiteLabel: true,
    whiteLabelImage: "/ireport/logo.svg",
    isPending: false,
  };
}
