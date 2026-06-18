import Link from "next/link";

export function PremiumCheckoutButton() {
  const checkoutUrl = process.env.NEXT_PUBLIC_PREMIUM_CHECKOUT_URL;

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
      className="rounded-md bg-moss px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink"
    >
      Buy with Stripe Checkout
    </Link>
  );
}
