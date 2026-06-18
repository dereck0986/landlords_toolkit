const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
const ExcelJS = require("exceljs");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType
} = require("docx");

const root = path.resolve(__dirname, "..");
const appPublic = path.join(root, "apps", "landlordforms", "public", "downloads");
const rootPublic = path.join(root, "public", "downloads");
const sourceDir = path.join(root, "content", "forms", "asset-sources");

const disclaimer =
  "This template is for general informational use only and is not legal advice. Landlord-tenant rules vary by state and city. Consult a qualified attorney or local housing authority before relying on this document for legal notice.";

const templates = [
  {
    slug: "maintenance-request-template",
    title: "Maintenance Request Template",
    fields: [
      "Tenant name",
      "Property address",
      "Unit number",
      "Date submitted",
      "Contact information",
      "Issue category",
      "Issue description",
      "Urgency level",
      "Permission to enter",
      "Preferred contact method",
      "Photos/attachments note",
      "Landlord response section",
      "Completion notes"
    ],
    notes: [
      "Use this form to collect a clear written record of a repair or maintenance issue.",
      "Keep completed copies with your own property records. Do not send sensitive personal information unless required for the repair."
    ]
  },
  {
    slug: "noise-complaint-letter",
    title: "Noise Complaint Letter",
    fields: [
      "Date",
      "Tenant/recipient",
      "Property/unit",
      "Description of reported noise issue",
      "Requested correction",
      "Documentation note",
      "Contact instructions",
      "Signature"
    ],
    notes: [
      "This letter uses a professional, non-threatening tone for documenting a reported noise concern.",
      "Describe facts, dates, and requested behavior clearly. Avoid accusations that cannot be supported."
    ]
  },
  {
    slug: "late-rent-notice",
    title: "Late Rent Notice",
    fields: [
      "Date",
      "Tenant",
      "Rental address",
      "Amount past due",
      "Due date",
      "Payment instructions",
      "Contact instructions",
      "Reservation of rights/disclaimer note"
    ],
    notes: [
      "This template is a general rent reminder and documentation tool.",
      "It is not drafted as a formal eviction, pay-or-quit, or jurisdiction-specific legal notice."
    ]
  },
  {
    slug: "move-in-checklist",
    title: "Move-In Checklist",
    fields: [
      "Entry",
      "Living room",
      "Kitchen",
      "Bedrooms",
      "Bathrooms",
      "Windows/doors",
      "Floors/walls/ceilings",
      "Appliances",
      "Smoke/CO detectors",
      "Keys/remotes",
      "Notes/signatures"
    ],
    notes: [
      "Use this checklist to record property condition at move-in.",
      "Attach photos when useful and keep signed copies with your lease records."
    ]
  },
  {
    slug: "rent-ledger-spreadsheet",
    title: "Rent Ledger Spreadsheet Guide",
    fields: [
      "Property",
      "Unit",
      "Tenant",
      "Month",
      "Rent due",
      "Rent received",
      "Late fee",
      "Other charges",
      "Balance",
      "Date paid",
      "Payment method",
      "Notes"
    ],
    notes: [
      "Use the spreadsheet download for active ledger tracking and this PDF as a field reference.",
      "Confirm balances against your lease, receipts, and local rent rules."
    ]
  },
  {
    slug: "mold-complaint-letter",
    title: "Mold Complaint Letter",
    fields: [
      "Date",
      "Tenant/recipient",
      "Property/unit",
      "Reported moisture or mold concern",
      "Requested access or follow-up",
      "Documentation note",
      "Contact instructions",
      "Signature"
    ],
    notes: [
      "Use neutral wording to acknowledge and document a reported mold or moisture concern.",
      "Follow local habitability rules and seek qualified professional guidance when needed."
    ]
  },
  {
    slug: "lease-renewal-letter",
    title: "Lease Renewal Letter",
    fields: [
      "Date",
      "Tenant/recipient",
      "Property/unit",
      "Current lease end date",
      "Proposed renewal term",
      "Proposed rent",
      "Response deadline",
      "Contact instructions",
      "Signature"
    ],
    notes: [
      "Use this letter to start a lease renewal conversation in writing.",
      "Confirm rent increase rules, notice deadlines, and lease requirements before sending."
    ]
  },
  {
    slug: "move-out-checklist",
    title: "Move-Out Checklist",
    fields: [
      "Entry",
      "Living room",
      "Kitchen",
      "Bedrooms",
      "Bathrooms",
      "Windows/doors",
      "Floors/walls/ceilings",
      "Appliances",
      "Keys/remotes",
      "Forwarding address",
      "Notes/signatures"
    ],
    notes: [
      "Use this checklist to organize condition notes and returned items at move-out.",
      "Keep final deposit decisions separate from the checklist until records and local rules are reviewed."
    ]
  },
  {
    slug: "security-deposit-return-letter",
    title: "Security Deposit Return Letter",
    fields: [
      "Date",
      "Tenant/recipient",
      "Property/unit",
      "Move-out date",
      "Deposit received",
      "Deductions summary",
      "Amount returned or balance due",
      "Payment/enclosure note",
      "Contact instructions",
      "Signature"
    ],
    notes: [
      "Use this letter to communicate deposit handling after move-out.",
      "Deposit rules vary heavily by location. Confirm required deadlines and itemization rules."
    ]
  },
  {
    slug: "maintenance-log-spreadsheet",
    title: "Maintenance Log Spreadsheet Guide",
    fields: [
      "Property",
      "Unit",
      "Date reported",
      "Issue category",
      "Issue description",
      "Urgency",
      "Vendor",
      "Scheduled date",
      "Completion date",
      "Cost",
      "Notes"
    ],
    notes: [
      "Use the spreadsheet download for active maintenance tracking and this PDF as a field reference.",
      "Keep repair records factual and avoid unnecessary sensitive tenant information."
    ]
  }
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeBoth(relativePath, buffer) {
  for (const base of [appPublic, rootPublic]) {
    const target = path.join(base, relativePath);
    ensureDir(path.dirname(target));
    fs.writeFileSync(target, buffer);
  }
}

function writeMarkdownSource(template) {
  ensureDir(sourceDir);
  const lines = [
    `# ${template.title}`,
    "",
    ...template.notes,
    "",
    "## Fields",
    "",
    ...template.fields.map((field) => `- ${field}: ______________________________`),
    "",
    "## Disclaimer",
    "",
    disclaimer
  ];
  fs.writeFileSync(path.join(sourceDir, `${template.slug}.md`), `${lines.join("\n")}\n`);
}

function createPdf(template) {
  return new Promise((resolve) => {
    const doc = new PDFDocument({ margin: 54 });
    const chunks = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));

    doc.fontSize(18).text(template.title, { underline: true });
    doc.moveDown();
    template.notes.forEach((note) => {
      doc.fontSize(10).text(note);
      doc.moveDown(0.4);
    });
    doc.moveDown();
    doc.fontSize(13).text("Fields", { underline: true });
    doc.moveDown(0.5);
    template.fields.forEach((field) => {
      doc.fontSize(10).text(`${field}:`, { continued: true }).text(" ______________________________");
      doc.moveDown(0.35);
    });
    doc.moveDown();
    doc.fontSize(13).text("Disclaimer", { underline: true });
    doc.moveDown(0.5);
    doc.fontSize(8).text(disclaimer);
    doc.end();
  });
}

function createDocx(template) {
  const children = [
    new Paragraph({ text: template.title, heading: HeadingLevel.TITLE }),
    ...template.notes.map((note) => new Paragraph({ text: note })),
    new Paragraph({ text: "Fields", heading: HeadingLevel.HEADING_1 }),
    ...template.fields.map(
      (field) =>
        new Paragraph({
          children: [new TextRun({ text: `${field}: ` }), new TextRun("______________________________")]
        })
    ),
    new Paragraph({ text: "Disclaimer", heading: HeadingLevel.HEADING_1 }),
    new Paragraph({ text: disclaimer, alignment: AlignmentType.LEFT })
  ];

  const document = new Document({ sections: [{ children }] });
  return Packer.toBuffer(document);
}

async function createLedger() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Landlords Toolkit";
  workbook.created = new Date();
  const sheet = workbook.addWorksheet("Rent Ledger");
  sheet.columns = [
    { header: "Property", key: "property", width: 22 },
    { header: "Unit", key: "unit", width: 10 },
    { header: "Tenant", key: "tenant", width: 22 },
    { header: "Month", key: "month", width: 14 },
    { header: "Rent due", key: "rentDue", width: 12 },
    { header: "Rent received", key: "rentReceived", width: 15 },
    { header: "Late fee", key: "lateFee", width: 12 },
    { header: "Other charges", key: "otherCharges", width: 15 },
    { header: "Balance", key: "balance", width: 12 },
    { header: "Date paid", key: "datePaid", width: 14 },
    { header: "Payment method", key: "paymentMethod", width: 18 },
    { header: "Notes", key: "notes", width: 28 }
  ];
  sheet.getRow(1).font = { bold: true };
  sheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFDDE8DF" } };

  for (let row = 2; row <= 25; row += 1) {
    sheet.getCell(`I${row}`).value = { formula: `E${row}-F${row}+G${row}+H${row}` };
    ["E", "F", "G", "H", "I"].forEach((col) => {
      sheet.getCell(`${col}${row}`).numFmt = "$#,##0.00";
    });
  }

  sheet.addRow([]);
  sheet.addRow(["Disclaimer", disclaimer]);
  sheet.mergeCells("A27:L27");
  sheet.getCell("A27").font = { bold: true };
  sheet.mergeCells("A28:L28");
  sheet.getCell("A28").alignment = { wrapText: true };

  return workbook.xlsx.writeBuffer();
}

async function createMaintenanceLog() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Landlords Toolkit";
  workbook.created = new Date();
  const sheet = workbook.addWorksheet("Maintenance Log");
  sheet.columns = [
    { header: "Property", key: "property", width: 22 },
    { header: "Unit", key: "unit", width: 10 },
    { header: "Date reported", key: "dateReported", width: 15 },
    { header: "Issue category", key: "issueCategory", width: 18 },
    { header: "Issue description", key: "issueDescription", width: 30 },
    { header: "Urgency", key: "urgency", width: 14 },
    { header: "Vendor", key: "vendor", width: 18 },
    { header: "Scheduled date", key: "scheduledDate", width: 15 },
    { header: "Completion date", key: "completionDate", width: 15 },
    { header: "Cost", key: "cost", width: 12 },
    { header: "Notes", key: "notes", width: 30 }
  ];
  sheet.getRow(1).font = { bold: true };
  sheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFDDE8DF" } };

  for (let row = 2; row <= 25; row += 1) {
    sheet.getCell(`J${row}`).numFmt = "$#,##0.00";
  }

  sheet.addRow([]);
  sheet.addRow(["Disclaimer", disclaimer]);
  sheet.mergeCells("A27:K27");
  sheet.getCell("A27").font = { bold: true };
  sheet.mergeCells("A28:K28");
  sheet.getCell("A28").alignment = { wrapText: true };

  return workbook.xlsx.writeBuffer();
}

async function main() {
  for (const template of templates) {
    writeMarkdownSource(template);
    writeBoth(`forms/${template.slug}.pdf`, await createPdf(template));
    writeBoth(`forms/${template.slug}.docx`, await createDocx(template));
  }

  const ledgerBuffer = Buffer.from(await createLedger());
  writeBoth("spreadsheets/rent-ledger-template.xlsx", ledgerBuffer);
  const maintenanceLogBuffer = Buffer.from(await createMaintenanceLog());
  writeBoth("spreadsheets/maintenance-log-template.xlsx", maintenanceLogBuffer);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
