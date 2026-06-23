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

export type ArticleAsset = {
  slug: string;
  title: string;
  description: string;
  relatedLinks: { label: string; href: string }[];
  sections: { heading: string; body: string[] }[];
  faq: { question: string; answer: string }[];
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

export const articles: ArticleAsset[] = [
  {
    slug: "how-to-document-apartment-damage",
    title: "How to Document Apartment Damage",
    description: "A practical landlord guide to documenting apartment damage with photos, notes, timelines, and repair records.",
    relatedLinks: [
      { label: "Move-In Checklist", href: "/forms/move-in-checklist" },
      { label: "Move-Out Checklist", href: "/forms/move-out-checklist" }
    ],
    sections: articleSections(
      "Apartment damage documentation works best when it is calm, consistent, and factual. A landlord does not need a complex software system to create a useful record. The goal is to preserve what happened, when it was found, who reported it, and what action followed.",
      "Start with the condition at move-in. A signed checklist, clear photos, and basic room-by-room notes create the baseline. Without a baseline, later damage discussions become harder because normal wear, pre-existing condition, and tenant-caused damage can blur together.",
      "When damage is found, write down the date, property address, unit, room, and a short description. Use neutral language. Instead of writing that a tenant destroyed a door, write that the bedroom door has a cracked panel, loose hinge, or missing handle. Facts are easier to rely on than conclusions.",
      "Store repair estimates, invoices, messages, and completion notes together. This helps with insurance, deposits, maintenance planning, and future conversations. Keep legal questions separate from basic documentation and check local rules before making deductions or sending formal notices."
    ),
    faq: articleFaq("Should landlords take photos?", "Yes. Photos are useful when they are dated, clear, and paired with written notes.")
  },
  {
    slug: "move-in-inspection-checklist-for-landlords",
    title: "Move-In Inspection Checklist for Landlords",
    description: "What small landlords should include in a move-in inspection checklist before handing over keys.",
    relatedLinks: [{ label: "Move-In Checklist", href: "/forms/move-in-checklist" }],
    sections: articleSections(
      "A move-in inspection checklist protects both sides by creating a shared condition record before daily use begins. It should be simple enough to finish during turnover but detailed enough to cover the parts of the home most likely to create disputes later.",
      "Walk the property room by room. Check walls, floors, ceilings, doors, windows, lights, outlets, fixtures, appliances, cabinets, locks, smoke detectors, carbon monoxide detectors, keys, remotes, and exterior access areas when relevant.",
      "Use short condition notes instead of vague ratings. A phrase like small scratch on living room floor near window is more helpful than good or bad. If a tenant adds comments, keep them with the signed checklist.",
      "The checklist is not a substitute for local habitability rules or required disclosures. It is a recordkeeping tool. Review your local move-in inspection requirements and keep copies with the lease file."
    ),
    faq: articleFaq("When should the checklist be completed?", "Complete it before or at move-in, ideally before the tenant has fully unpacked.")
  },
  {
    slug: "late-rent-notice-example",
    title: "Late Rent Notice Example",
    description: "A neutral late rent notice example for documenting overdue rent without pretending to be an eviction notice.",
    relatedLinks: [
      { label: "Late Rent Notice", href: "/forms/late-rent-notice" },
      { label: "Rent Ledger Spreadsheet", href: "/forms/rent-ledger-spreadsheet" }
    ],
    sections: articleSections(
      "A late rent notice should be clear, professional, and accurate. For many small landlords, the first goal is not escalation. It is to document the account, remind the tenant of the amount due, and provide payment instructions.",
      "Include the tenant name, rental address, date, amount past due, original due date, payment methods, and a contact path for questions. Avoid adding legal phrases unless the notice has been reviewed for your jurisdiction.",
      "Do not call a general reminder a pay-or-quit notice unless it actually meets local requirements. Formal eviction-related notices can have strict rules for wording, timing, delivery, grace periods, and fees.",
      "Pair the notice with a rent ledger. The ledger should show rent due, payments received, fees, credits, balance, payment method, and notes. A clean ledger reduces confusion and makes future review easier."
    ),
    faq: articleFaq("Is a late rent notice legal advice?", "No. A general template is informational. Local housing rules determine what formal notice is required.")
  },
  {
    slug: "noise-complaint-letter-to-tenant",
    title: "Noise Complaint Letter to Tenant",
    description: "How to write a professional noise complaint letter to a tenant using factual, non-threatening language.",
    relatedLinks: [{ label: "Noise Complaint Letter", href: "/forms/noise-complaint-letter" }],
    sections: articleSections(
      "A noise complaint letter should focus on the reported issue and requested correction. The strongest version is brief, factual, and professional. It should not insult the tenant or assume facts that have not been verified.",
      "Start with the date, tenant name, unit, and a description of the complaint. If you know the dates and times reported, include them. If the complaint came from another resident, avoid sharing unnecessary personal information.",
      "Explain the requested correction in practical terms, such as reducing late-night music, avoiding loud gatherings during quiet hours, or contacting management if there is a misunderstanding.",
      "Keep a copy of the letter and any supporting notes. If the issue continues, documentation may help you decide whether to inspect lease terms, local noise rules, or attorney-reviewed next steps."
    ),
    faq: articleFaq("Should the letter threaten eviction?", "Usually no. A first written complaint should stay professional unless you are sending a formal legal notice.")
  },
  {
    slug: "rental-property-maintenance-log",
    title: "Rental Property Maintenance Log",
    description: "Why landlords should keep a maintenance log and what to track for repairs, vendors, dates, and costs.",
    relatedLinks: [
      { label: "Maintenance Request Template", href: "/forms/maintenance-request-template" },
      { label: "Maintenance Log Spreadsheet", href: "/forms/maintenance-log-spreadsheet" }
    ],
    sections: articleSections(
      "A maintenance log gives landlords a single place to track repair requests, vendor visits, completion dates, and costs. It is useful for budgeting, tax preparation, warranty questions, and habitability documentation.",
      "Track the property, unit, date reported, issue category, description, urgency, vendor, scheduled date, completion date, cost, and notes. Keep the log factual and avoid sensitive tenant details that are not needed for the repair.",
      "A maintenance request form captures the initial report. The log then records what happened afterward. Together, they create a practical timeline without turning the website into a stored ticketing system.",
      "Review the log every month or quarter. Repeated repairs may point to a larger capital issue, a vendor quality problem, or a preventive maintenance task that should be scheduled."
    ),
    faq: articleFaq("Does a maintenance log need tenant records?", "No. Keep only the information needed to manage the repair and your property records.")
  },
  {
    slug: "rent-ledger-template-guide",
    title: "Rent Ledger Template Guide",
    description: "How to use a rent ledger template to track rent due, payments, fees, balances, and payment dates.",
    relatedLinks: [{ label: "Rent Ledger Spreadsheet", href: "/forms/rent-ledger-spreadsheet" }],
    sections: articleSections(
      "A rent ledger is a running payment record for a rental unit. Small landlords often use it to answer simple questions quickly: what was due, what was paid, when it was paid, and what balance remains.",
      "A useful ledger includes property, unit, tenant, month, rent due, rent received, late fee, other charges, balance, date paid, payment method, and notes. Keep each row tied to a month or charge event.",
      "The balance formula should be simple: rent due minus rent received plus late fees and other charges. If credits or deposits are involved, document them clearly and follow local rules.",
      "Do not treat a spreadsheet as a legal conclusion. It is a financial record. Formal collection steps, late fees, deposit deductions, and notices should be checked against your lease and local law."
    ),
    faq: articleFaq("Should landlords keep old ledgers?", "Yes. Retention periods vary, but keeping historical payment records is usually useful for accounting and dispute review.")
  },
  {
    slug: "security-deposit-deduction-worksheet",
    title: "Security Deposit Deduction Worksheet",
    description: "A landlord-friendly outline for documenting security deposit deductions with receipts and condition records.",
    relatedLinks: [
      { label: "Security Deposit Return Letter", href: "/forms/security-deposit-return-letter" },
      { label: "Move-In Checklist", href: "/forms/move-in-checklist" }
    ],
    sections: articleSections(
      "Security deposit deductions are one of the most sensitive landlord workflows. A worksheet helps organize the facts before sending a return letter or itemized statement.",
      "Start with the move-in condition record, move-out condition notes, photos, invoices, estimates, cleaning receipts, unpaid balances, and lease provisions. Separate ordinary wear from damage as carefully as possible.",
      "List each deduction separately with a short description, amount, supporting document, and date. Avoid vague line items like repairs without explaining the actual issue and basis for the charge.",
      "Deposit rules vary heavily by location, including deadlines, permitted deductions, interest, notices, and penalties. Use the worksheet as an organizing tool and confirm legal requirements before relying on it."
    ),
    faq: articleFaq("Can a worksheet replace an attorney-reviewed deposit notice?", "No. It helps organize information but does not replace local legal requirements.")
  },
  {
    slug: "landlord-repair-request-form",
    title: "Landlord Repair Request Form",
    description: "What to include in a repair request form so maintenance issues are documented clearly from the start.",
    relatedLinks: [{ label: "Maintenance Request Template", href: "/forms/maintenance-request-template" }],
    sections: articleSections(
      "A repair request form gives tenants and landlords a shared format for maintenance issues. It can reduce missed details and make the next step easier to schedule.",
      "Include tenant name, property address, unit, contact details, date submitted, issue category, issue description, urgency, permission to enter, preferred contact method, and an attachments note.",
      "Add a landlord response section with date received, next action, vendor, appointment window, completion date, and notes. This keeps the request and response in one record.",
      "Avoid collecting sensitive information that is not needed for the repair. The form should document the property issue, not create a tenant profile or medical file."
    ),
    faq: articleFaq("Can tenants use email instead?", "Yes. A form simply creates a consistent structure for the same information.")
  },
  {
    slug: "tenant-move-out-checklist",
    title: "Tenant Move-Out Checklist",
    description: "A move-out checklist for landlords covering condition notes, keys, cleaning, forwarding address, and signatures.",
    relatedLinks: [
      { label: "Move-Out Checklist", href: "/forms/move-out-checklist" },
      { label: "Security Deposit Return Letter", href: "/forms/security-deposit-return-letter" }
    ],
    sections: articleSections(
      "A tenant move-out checklist helps landlords close out a rental cleanly. It documents condition, returned items, forwarding information, and any follow-up needed after possession is returned.",
      "Cover each room, appliances, fixtures, floors, walls, doors, windows, smoke detectors, keys, remotes, parking passes, mailbox keys, and garage access. Include space for notes and photos.",
      "The checklist should not make final deposit decisions by itself. It is one record among several, including the move-in checklist, lease, invoices, receipts, and local deposit rules.",
      "Send move-out expectations before the tenant leaves when possible. A plain checklist can reduce confusion about cleaning, trash, utilities, keys, and forwarding address information."
    ),
    faq: articleFaq("Should landlords inspect before or after move-out?", "Local rules vary. Many landlords do a final inspection after possession is returned and document the condition carefully.")
  },
  {
    slug: "rental-property-expense-tracking",
    title: "Rental Property Expense Tracking",
    description: "A practical guide to tracking rental property expenses for budgeting, taxes, cash flow, and maintenance planning.",
    relatedLinks: [
      { label: "Cash Flow Calculator", href: "/calculators/cash-flow-calculator" },
      { label: "ROI Calculator", href: "/calculators/roi-calculator" }
    ],
    sections: articleSections(
      "Expense tracking helps landlords understand whether a property is performing as expected. The basics are simple: record what was paid, when, why, for which property, and where the receipt lives.",
      "Common categories include mortgage interest, taxes, insurance, repairs, utilities, management, supplies, legal, accounting, advertising, vacancy costs, and capital improvements. Keep capital projects separate from routine repairs for tax review.",
      "Use monthly review to compare rent received against recurring and irregular expenses. A property can look profitable before repairs, insurance changes, taxes, or vacancy are included.",
      "A calculator can estimate cash flow, cap rate, or ROI, but your own records drive the result. Keep source documents organized and consult a tax professional for filing decisions."
    ),
    faq: articleFaq("Do calculators store expense inputs?", "No. The calculators on this site run in the browser and do not store inputs.")
  }
];

function articleSections(intro: string, process: string, records: string, disclaimerBody: string) {
  return [
    {
      heading: "Overview",
      body: [
        intro,
        "For small landlords, a lightweight process is often enough. The best systems are easy to repeat, easy to understand later, and do not require storing sensitive tenant information in a new account."
      ]
    },
    {
      heading: "What to include",
      body: [
        process,
        "Use plain labels, dates, addresses, unit numbers, dollar amounts when relevant, and short notes. Keep the language neutral and specific so another person can understand the record months later."
      ]
    },
    {
      heading: "How to keep records",
      body: [
        records,
        "Name files consistently and store them with the lease, ledger, inspection notes, or maintenance records they relate to. If you use downloads from this site, keep completed copies under your control."
      ]
    },
    {
      heading: "Legal and privacy notes",
      body: [
        disclaimerBody,
        legalDisclaimer
      ]
    }
  ];
}

function articleFaq(question: string, answer: string) {
  return [
    { question, answer },
    {
      question: "Are these articles legal advice?",
      answer: "No. They are general informational resources. Landlord-tenant rules vary by state, county, and city."
    }
  ];
}

export function getFormBySlug(slug: string) {
  return forms.find((form) => form.slug === slug);
}

export function getCalculatorBySlug(slug: string) {
  return calculators.find((calculator) => calculator.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export { legalDisclaimer };
