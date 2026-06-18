export function toMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(Number.isFinite(value) ? value : 0);
}

export function calculateCashFlow(values: {
  monthlyRent: number;
  otherIncome: number;
  mortgage: number;
  taxes: number;
  insurance: number;
  repairs: number;
  utilities: number;
  otherExpenses: number;
}) {
  const totalIncome = values.monthlyRent + values.otherIncome;
  const totalExpenses =
    values.mortgage +
    values.taxes +
    values.insurance +
    values.repairs +
    values.utilities +
    values.otherExpenses;
  const netMonthlyCashFlow = totalIncome - totalExpenses;

  return {
    totalIncome,
    totalExpenses,
    netMonthlyCashFlow,
    annualCashFlow: netMonthlyCashFlow * 12
  };
}

export function calculateCapRate(propertyValue: number, annualNoi: number) {
  if (propertyValue <= 0) {
    return 0;
  }

  return (annualNoi / propertyValue) * 100;
}

export function calculateRoi(cashInvested: number, annualProfit: number) {
  if (cashInvested <= 0) {
    return 0;
  }

  return (annualProfit / cashInvested) * 100;
}
