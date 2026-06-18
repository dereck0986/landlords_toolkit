export type FormAsset = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  useCase: string;
  includedFormats: string[];
  disclaimerNote: string;
  ctaLabel: string;
  downloads: { label: string; href: string }[];
  faq: { question: string; answer: string }[];
};

export type CalculatorAsset = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
};

const legalDisclaimer =
  "Templates are for general informational use only and are not legal advice. Landlord-tenant laws vary by state, county, and city. Consult a qualified attorney or local housing authority when needed.";

export const forms: FormAsset[] = [
  {
    slug: "maintenance-request-template",
    title: "Maintenance Request Template",
    description: "A simple form landlords can share with tenants to capture repair details clearly.",
    keywords: ["maintenance request template", "tenant repair request form", "landlord maintenance form"],
    useCase: "Use this when a tenant reports a repair, appliance issue, leak, safety concern, or routine maintenance problem.",
    includedFormats: ["PDF", "DOCX"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download maintenance request template",
    downloads: [
      { label: "PDF", href: "/downloads/forms/maintenance-request-template.pdf" },
      { label: "DOCX", href: "/downloads/forms/maintenance-request-template.docx" }
    ],
    faq: [
      {
        question: "Should a maintenance request include photos?",
        answer: "Photos can help document the issue, but the template is designed to work as a written record without storing anything on this site."
      },
      {
        question: "Does this create a maintenance ticket?",
        answer: "No. It is a downloadable template only. Landlords keep their own records."
      }
    ]
  },
  {
    slug: "noise-complaint-letter",
    title: "Noise Complaint Letter",
    description: "A professional letter template for documenting recurring noise complaints.",
    keywords: ["noise complaint letter", "landlord noise notice", "tenant noise complaint template"],
    useCase: "Use this when you need a calm, written record of a noise issue reported by neighbors, tenants, or management.",
    includedFormats: ["PDF", "DOCX"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download noise complaint letter",
    downloads: [
      { label: "PDF", href: "/downloads/forms/noise-complaint-letter.pdf" },
      { label: "DOCX", href: "/downloads/forms/noise-complaint-letter.docx" }
    ],
    faq: [
      {
        question: "Is this an eviction notice?",
        answer: "No. It is a general communication template and should not be treated as a legal notice unless reviewed for your jurisdiction."
      }
    ]
  },
  {
    slug: "late-rent-notice",
    title: "Late Rent Notice",
    description: "A plain-language notice template for documenting overdue rent.",
    keywords: ["late rent notice", "past due rent letter", "rent reminder template"],
    useCase: "Use this to document that rent is overdue and to state the balance, due date, and next steps.",
    includedFormats: ["PDF", "DOCX"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download late rent notice",
    downloads: [
      { label: "PDF", href: "/downloads/forms/late-rent-notice.pdf" },
      { label: "DOCX", href: "/downloads/forms/late-rent-notice.docx" }
    ],
    faq: [
      {
        question: "Is this a pay-or-quit notice?",
        answer: "No. Local legal notices have strict requirements. This template is a general late rent communication."
      }
    ]
  },
  {
    slug: "move-in-checklist",
    title: "Move-In Checklist",
    description: "A checklist for recording property condition when a tenant moves in.",
    keywords: ["move-in checklist", "rental condition checklist", "landlord inspection checklist"],
    useCase: "Use this before or during move-in to document rooms, fixtures, appliances, keys, and condition notes.",
    includedFormats: ["PDF", "DOCX"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download move-in checklist",
    downloads: [
      { label: "PDF", href: "/downloads/forms/move-in-checklist.pdf" },
      { label: "DOCX", href: "/downloads/forms/move-in-checklist.docx" }
    ],
    faq: [
      {
        question: "Should both landlord and tenant sign it?",
        answer: "Many landlords do that for clarity, but requirements vary by location and lease terms."
      }
    ]
  },
  {
    slug: "rent-ledger-spreadsheet",
    title: "Rent Ledger Spreadsheet",
    description: "A spreadsheet-style record for rent charges, payments, fees, and balances.",
    keywords: ["rent ledger spreadsheet", "tenant payment ledger", "rental payment tracker"],
    useCase: "Use this to track rent due, payments received, late fees, credits, and running balances outside this site.",
    includedFormats: ["XLSX", "PDF"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download rent ledger spreadsheet",
    downloads: [
      { label: "XLSX", href: "/downloads/spreadsheets/rent-ledger-template.xlsx" },
      { label: "PDF", href: "/downloads/forms/rent-ledger-spreadsheet.pdf" }
    ],
    faq: [
      {
        question: "Does this site store rent payment data?",
        answer: "No. Downloaded spreadsheets are user controlled and are not uploaded or stored here."
      }
    ]
  },
  {
    slug: "mold-complaint-letter",
    title: "Mold Complaint Letter",
    description: "A written template for documenting reported mold or moisture concerns.",
    keywords: ["mold complaint letter", "tenant mold notice", "landlord mold response"],
    useCase: "Use this to acknowledge a mold or moisture complaint and document next steps.",
    includedFormats: ["PDF", "DOCX"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download mold complaint letter",
    downloads: [
      { label: "PDF", href: "/downloads/forms/mold-complaint-letter.pdf" },
      { label: "DOCX", href: "/downloads/forms/mold-complaint-letter.docx" }
    ],
    faq: []
  },
  {
    slug: "lease-renewal-letter",
    title: "Lease Renewal Letter",
    description: "A template for starting a lease renewal conversation with a tenant.",
    keywords: ["lease renewal letter", "rental renewal template", "landlord lease renewal"],
    useCase: "Use this when offering updated lease terms or confirming renewal interest.",
    includedFormats: ["PDF", "DOCX"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download lease renewal letter",
    downloads: [
      { label: "PDF", href: "/downloads/forms/lease-renewal-letter.pdf" },
      { label: "DOCX", href: "/downloads/forms/lease-renewal-letter.docx" }
    ],
    faq: []
  },
  {
    slug: "move-out-checklist",
    title: "Move-Out Checklist",
    description: "A checklist for documenting property condition and return items at move-out.",
    keywords: ["move-out checklist", "rental move-out form", "landlord move-out inspection"],
    useCase: "Use this to organize inspection notes, cleaning items, keys, remotes, and forwarding details.",
    includedFormats: ["PDF", "DOCX"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download move-out checklist",
    downloads: [
      { label: "PDF", href: "/downloads/forms/move-out-checklist.pdf" },
      { label: "DOCX", href: "/downloads/forms/move-out-checklist.docx" }
    ],
    faq: []
  },
  {
    slug: "security-deposit-return-letter",
    title: "Security Deposit Return Letter",
    description: "A template for explaining a deposit return, deduction summary, or balance due.",
    keywords: ["security deposit return letter", "deposit deduction template", "landlord deposit letter"],
    useCase: "Use this after move-out to communicate deposit handling and attach itemized details.",
    includedFormats: ["PDF", "DOCX"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download security deposit return letter",
    downloads: [
      { label: "PDF", href: "/downloads/forms/security-deposit-return-letter.pdf" },
      { label: "DOCX", href: "/downloads/forms/security-deposit-return-letter.docx" }
    ],
    faq: []
  },
  {
    slug: "maintenance-log-spreadsheet",
    title: "Maintenance Log Spreadsheet",
    description: "A spreadsheet for tracking repair requests, vendors, dates, costs, and completion notes.",
    keywords: ["maintenance log spreadsheet", "rental maintenance tracker", "property repair log"],
    useCase: "Use this as an offline record of maintenance work across one or more properties.",
    includedFormats: ["XLSX", "PDF"],
    disclaimerNote: legalDisclaimer,
    ctaLabel: "Download maintenance log spreadsheet",
    downloads: [
      { label: "XLSX", href: "/downloads/spreadsheets/maintenance-log-template.xlsx" },
      { label: "PDF", href: "/downloads/forms/maintenance-log-spreadsheet.pdf" }
    ],
    faq: []
  }
];

export const calculators: CalculatorAsset[] = [
  {
    slug: "cash-flow-calculator",
    title: "Cash Flow Calculator",
    description: "Estimate total monthly income, monthly expenses, net cash flow, and annual cash flow.",
    keywords: ["rental cash flow calculator", "landlord cash flow calculator", "property income calculator"]
  },
  {
    slug: "cap-rate-calculator",
    title: "Cap Rate Calculator",
    description: "Calculate a rental property's capitalization rate from value and annual net operating income.",
    keywords: ["cap rate calculator", "rental property cap rate", "NOI calculator"]
  },
  {
    slug: "roi-calculator",
    title: "ROI Calculator",
    description: "Calculate annual return on investment from cash invested and annual profit.",
    keywords: ["rental ROI calculator", "real estate ROI calculator", "landlord investment calculator"]
  }
];

export function getFormBySlug(slug: string) {
  return forms.find((form) => form.slug === slug);
}

export function getCalculatorBySlug(slug: string) {
  return calculators.find((calculator) => calculator.slug === slug);
}

export { legalDisclaimer };
