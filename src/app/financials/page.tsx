import { FinancialDashboard } from '@/components/organisms/financial-dashboard';
import { financialStatements, getLatestFinancialStatement } from '@/data/financial';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Transparency | Vikpalla Software',
  description: 'View Vikpalla Software\'s financial statements, balance sheets, and transparency reports. Access our latest financial data and downloadable documents.',
  keywords: 'Vikpalla Software financials, balance sheet, financial transparency, financial statements',
};

export default function FinancialsPage() {
  const latestStatement = getLatestFinancialStatement();
  const previousStatement = financialStatements[1]; // Get previous statement for comparison

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <FinancialDashboard
          statement={latestStatement}
          previousStatement={previousStatement}
        />
      </div>
    </div>
  );
}