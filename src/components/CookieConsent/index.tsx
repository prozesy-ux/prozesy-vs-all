import { CookieBanner } from "@/components/CookieConsent/CookieBanner";
import { CookieSettings } from "@/components/CookieConsent/CookieSettings";

export const CookieConsent = () => {
  return (
    <div className="relative box-border caret-transparent flex z-[99999]">
      <CookieBanner />
      <CookieSettings />
    </div>
  );
};
