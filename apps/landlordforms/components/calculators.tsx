"use client";

import { calculateCapRate, calculateCashFlow, calculateRoi, toMoney } from "@landlords-toolkit/calculators";
import { useMemo, useState } from "react";

function NumberField({
  label,
  value,
  onChange
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <input
        type="number"
        min="0"
        step="any"
        value={value || ""}
        onChange={(event) => onChange(Number(event.target.value))}
        className="rounded-md border border-line bg-white px-3 py-2 text-base outline-none focus:border-moss"
      />
    </label>
  );
}

function PrivacyNote() {
  return (
    <p className="rounded-md border border-line bg-paper p-3 text-sm text-ink/70">
      Your numbers are calculated in your browser and are not stored.
    </p>
  );
}

export function CashFlowCalculator() {
  const [values, setValues] = useState({
    monthlyRent: 0,
    otherIncome: 0,
    mortgage: 0,
    taxes: 0,
    insurance: 0,
    repairs: 0,
    utilities: 0,
    otherExpenses: 0
  });
  const results = useMemo(() => calculateCashFlow(values), [values]);

  function update(key: keyof typeof values, value: number) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-4 rounded-lg border border-line bg-white p-5 sm:grid-cols-2">
        {Object.entries({
          monthlyRent: "Monthly rent",
          otherIncome: "Other income",
          mortgage: "Mortgage",
          taxes: "Taxes",
          insurance: "Insurance",
          repairs: "Repairs",
          utilities: "Utilities",
          otherExpenses: "Other expenses"
        }).map(([key, label]) => (
          <NumberField
            key={key}
            label={label}
            value={values[key as keyof typeof values]}
            onChange={(value) => update(key as keyof typeof values, value)}
          />
        ))}
      </div>
      <div className="space-y-4 rounded-lg border border-line bg-white p-5">
        <Result label="Total monthly income" value={toMoney(results.totalIncome)} />
        <Result label="Total monthly expenses" value={toMoney(results.totalExpenses)} />
        <Result label="Net monthly cash flow" value={toMoney(results.netMonthlyCashFlow)} />
        <Result label="Annual cash flow" value={toMoney(results.annualCashFlow)} />
        <PrivacyNote />
      </div>
    </div>
  );
}

export function CapRateCalculator() {
  const [propertyValue, setPropertyValue] = useState(0);
  const [annualNoi, setAnnualNoi] = useState(0);
  const capRate = calculateCapRate(propertyValue, annualNoi);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-4 rounded-lg border border-line bg-white p-5">
        <NumberField label="Property value / purchase price" value={propertyValue} onChange={setPropertyValue} />
        <NumberField label="Annual net operating income" value={annualNoi} onChange={setAnnualNoi} />
      </div>
      <div className="space-y-4 rounded-lg border border-line bg-white p-5">
        <Result label="Cap rate" value={`${capRate.toFixed(2)}%`} />
        <PrivacyNote />
      </div>
    </div>
  );
}

export function RoiCalculator() {
  const [cashInvested, setCashInvested] = useState(0);
  const [annualProfit, setAnnualProfit] = useState(0);
  const roi = calculateRoi(cashInvested, annualProfit);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-4 rounded-lg border border-line bg-white p-5">
        <NumberField label="Cash invested" value={cashInvested} onChange={setCashInvested} />
        <NumberField label="Annual profit" value={annualProfit} onChange={setAnnualProfit} />
      </div>
      <div className="space-y-4 rounded-lg border border-line bg-white p-5">
        <Result label="Annual ROI" value={`${roi.toFixed(2)}%`} />
        <PrivacyNote />
      </div>
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
      <span className="text-sm text-ink/70">{label}</span>
      <strong className="text-lg text-ink">{value}</strong>
    </div>
  );
}
