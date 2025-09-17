// Financial data type definitions

export interface FinancialStatement {
  year: number;
  quarter?: number;
  type: 'balance-sheet' | 'income-statement' | 'cash-flow';
  data: FinancialData;
  documentUrl?: string;
}

export interface FinancialData {
  assets: FinancialItem[];
  liabilities: FinancialItem[];
  equity: FinancialItem[];
  revenue?: FinancialItem[];
  expenses?: FinancialItem[];
}

export interface FinancialItem {
  category: string;
  amount: number;
  currency: string;
  change?: number;
}