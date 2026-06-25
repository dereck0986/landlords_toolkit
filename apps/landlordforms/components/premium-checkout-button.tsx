"use client";

import Link from "next/link";
import { usePlausible } from "next-plausible";

export function PremiumCheckoutButton() {
  const checkoutUrl = process.env.NEXT_PUBLIC_PREMIUM_CHECKOUT_URL;
  const plausible = usePlausible();

  function trackClick() {
    try {
      plausible("Premium CTA Click", { props: { location: "premium-page" } });
    } catch {
      // Analytics should never block navigation.
    }
  }

  if (!checkoutUrl) {
    return (
      <button
        type="button"
        disabled
        className="rounded-md bg-ink/40 px-4 py-2.5 text-sm font-semibold text-white"
      >
        Coming soon
      </button>
    );
  }

  return (
    <Link
      href={checkoutUrl}
      onClick={trackClick}
      className="rounded-md bg-moss px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink"
    >
      Buy with Stripe Checkout
    </Link>
  );
}
