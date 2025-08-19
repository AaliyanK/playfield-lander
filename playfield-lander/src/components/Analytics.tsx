"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}

// Add this to your layout.tsx if you want to use Google Analytics
export function GoogleAnalyticsScript() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }}
      />
    </>
  );
}
