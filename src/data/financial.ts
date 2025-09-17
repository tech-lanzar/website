import { FinancialStatement } from '@/types/financial';

// Sample financial data for Vikpalla Software Private Limited
export const financialStatements: FinancialStatement[] = [
  {
    year: 2025,
    quarter: 2,
    type: 'balance-sheet',
    data: {
      assets: [
        { category: 'Current Assets', amount: 2500000, currency: 'INR' },
        { category: 'Cash and Cash Equivalents', amount: 1200000, currency: 'INR' },
        { category: 'Accounts Receivable', amount: 800000, currency: 'INR' },
        { category: 'Inventory', amount: 300000, currency: 'INR' },
        { category: 'Prepaid Expenses', amount: 200000, currency: 'INR' },
        { category: 'Fixed Assets', amount: 1800000, currency: 'INR' },
        { category: 'Property, Plant & Equipment', amount: 1200000, currency: 'INR' },
        { category: 'Intangible Assets', amount: 400000, currency: 'INR' },
        { category: 'Investments', amount: 200000, currency: 'INR' },
      ],
      liabilities: [
        { category: 'Current Liabilities', amount: 1200000, currency: 'INR' },
        { category: 'Accounts Payable', amount: 600000, currency: 'INR' },
        { category: 'Short-term Debt', amount: 300000, currency: 'INR' },
        { category: 'Accrued Expenses', amount: 300000, currency: 'INR' },
        { category: 'Long-term Liabilities', amount: 800000, currency: 'INR' },
        { category: 'Long-term Debt', amount: 600000, currency: 'INR' },
        { category: 'Deferred Tax Liabilities', amount: 200000, currency: 'INR' },
      ],
      equity: [
        { category: 'Share Capital', amount: 1000000, currency: 'INR' },
        { category: 'Retained Earnings', amount: 1800000, currency: 'INR' },
        { category: 'Other Comprehensive Income', amount: 500000, currency: 'INR' },
      ],
    },
    documentUrl: '/documents/balance-sheet-2024-q2.pdf',
  },
];

export const getLatestFinancialStatement = (): FinancialStatement => {
  return financialStatements[0];
};

export const getFinancialStatementByYear = (year: number): FinancialStatement | undefined => {
  return financialStatements.find(statement => statement.year === year);
};

export const formatCurrency = (amount: number, currency: string = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatChange = (change?: number): string => {
  if (change === undefined) return '';
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(1)}%`;
};