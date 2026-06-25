"use client";

import Link from "next/link";
import { usePlausible } from "next-plausible";

type EventName = "Download PDF" | "Download DOCX" | "Download XLSX" | "Premium CTA Click";

export function TrackedDownloadLink({
  href,
  label,
  eventName,
  className,
  children
}: {
  href: string;
  label: string;
  eventName: EventName;
  className: string;
  children: React.ReactNode;
}) {
  const plausible = usePlausible();

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        try {
          plausible(eventName, { props: { label, href } });
        } catch {
          // Analytics should never block a download.
        }
      }}
    >
      {children}
    </Link>
  );
}
