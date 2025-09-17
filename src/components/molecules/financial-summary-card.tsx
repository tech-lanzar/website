'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/data/financial';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface FinancialSummaryCardProps {
  title: string;
  amount: number;
  currency: string;
  change?: number;
  description?: string;
  icon?: React.ReactNode;
  redacted?: boolean;
}

export function FinancialSummaryCard({
  title,
  amount,
  currency,
  change,
  description,
  icon,
  redacted = false,
}: FinancialSummaryCardProps) {
  const getTrendIcon = (change?: number) => {
    if (!change) return <Minus className="h-4 w-4" />;
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    return <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  const getTrendColor = (change?: number): "default" | "secondary" | "destructive" | "outline" => {
    if (!change) return 'secondary';
    return change > 0 ? 'default' : 'destructive';
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-200 bg-card text-card-foreground">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-foreground">
              {redacted ? '—' : formatCurrency(amount, currency)}
            </div>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          {!redacted && change !== undefined && (
            <Badge
              variant={getTrendColor(change)}
              className="flex items-center gap-1"
            >
              {getTrendIcon(change)}
              {change >= 0 ? '+' : ''}{change.toFixed(1)}%
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}