'use client';

import { FinancialStatement } from '@/types/financial';
import { FinancialDataTable } from '@/components/molecules/financial-data-table';
import { FinancialSummaryCard } from '@/components/molecules/financial-summary-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Calendar, Building2, TrendingUp, DollarSign } from 'lucide-react';

interface FinancialDashboardProps {
  statement: FinancialStatement;
  previousStatement?: FinancialStatement;
}

export function FinancialDashboard({ statement, previousStatement }: FinancialDashboardProps) {
  const { data } = statement;

  // Calculate totals
  const totalAssets = data.assets.reduce((sum, item) => sum + item.amount, 0);
  const totalLiabilities = data.liabilities.reduce((sum, item) => sum + item.amount, 0);
  const totalEquity = data.equity.reduce((sum, item) => sum + item.amount, 0);

  // Calculate previous totals for comparison
  const prevTotalAssets = previousStatement?.data.assets.reduce((sum, item) => sum + item.amount, 0);
  const prevTotalLiabilities = previousStatement?.data.liabilities.reduce((sum, item) => sum + item.amount, 0);
  const prevTotalEquity = previousStatement?.data.equity.reduce((sum, item) => sum + item.amount, 0);

  // Calculate changes
  const assetsChange = prevTotalAssets ? ((totalAssets - prevTotalAssets) / prevTotalAssets) * 100 : undefined;
  const liabilitiesChange = prevTotalLiabilities ? ((totalLiabilities - prevTotalLiabilities) / prevTotalLiabilities) * 100 : undefined;
  const equityChange = prevTotalEquity ? ((totalEquity - prevTotalEquity) / prevTotalEquity) * 100 : undefined;

  const handleDownloadPDF = () => {
    if (statement.documentUrl) {
      window.open(statement.documentUrl, '_blank');
    }
  };

  const redacted = true

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financial Dashboard</h1>
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {statement.quarter ? `Q${statement.quarter} ` : ''}{statement.year}
            </span>
            <Badge variant="outline" className="ml-2">
              {statement.type.replace('-', ' ').toUpperCase()}
            </Badge>
          </div>
        </div>
        {statement.documentUrl && (
          <Button onClick={handleDownloadPDF} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FinancialSummaryCard
          title="Total Assets"
          amount={totalAssets}
          currency="INR"
          change={assetsChange}
          description="Current and fixed assets"
          icon={<Building2 className="h-4 w-4" />}
          redacted={redacted}
        />
        <FinancialSummaryCard
          title="Total Liabilities"
          amount={totalLiabilities}
          currency="INR"
          change={liabilitiesChange}
          description="Current and long-term liabilities"
          icon={<FileText className="h-4 w-4" />}
          redacted={redacted}
        />
        <FinancialSummaryCard
          title="Total Equity"
          amount={totalEquity}
          currency="INR"
          change={equityChange}
          description="Shareholders' equity"
          icon={<TrendingUp className="h-4 w-4" />}
          redacted={redacted}
        />
      </div>

      {/* Balance Sheet Equation */}
      <Card className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-10 top-0 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl" />
        </div>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-blue-400" />
            Balance Sheet Equation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">
              Assets = Liabilities + Equity
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              — = — + —
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Balance: {totalAssets === (totalLiabilities + totalEquity) ? '✓ Balanced' : '⚠ Imbalanced'}
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-accent text-accent-foreground shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              Coming soon: first balance sheet
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FinancialDataTable
          title="Assets"
          items={data.assets}
          showChange={!!previousStatement}
          redacted={redacted}
        />
        <FinancialDataTable
          title="Liabilities"
          items={data.liabilities}
          showChange={!!previousStatement}
          redacted={redacted}
        />
        <FinancialDataTable
          title="Equity"
          items={data.equity}
          showChange={!!previousStatement}
          redacted={redacted}
        />
      </div>

      {/* Additional Information */}
      {/* <Card className="bg-card text-card-foreground">
        <CardHeader>
          <CardTitle>Financial Health Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-blue-400">
                {((totalAssets / totalLiabilities) || 0).toFixed(2)}
              </div>
              <div className="text-sm text-muted-foreground">Asset-to-Liability Ratio</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-green-400">
                {((totalEquity / totalAssets) * 100 || 0).toFixed(1)}%
              </div>
              <div className="text-sm text-muted-foreground">Equity Ratio</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-purple-400">
                {((totalLiabilities / totalAssets) * 100 || 0).toFixed(1)}%
              </div>
              <div className="text-sm text-muted-foreground">Debt Ratio</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-orange-400">
                ₹{(totalAssets / 100000).toFixed(1)}L
              </div>
              <div className="text-sm text-muted-foreground">Total Assets (Lakhs)</div>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}