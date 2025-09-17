'use client';

import { FinancialItem } from '@/types/financial';
import { formatCurrency, formatChange } from '@/data/financial';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface FinancialDataTableProps {
  title: string;
  items: FinancialItem[];
  showChange?: boolean;
  redacted?: boolean;
}

export function FinancialDataTable({ title, items, showChange = false, redacted = false }: FinancialDataTableProps) {
  const total = items.reduce((sum, item) => sum + item.amount, 0);

  const getTrendIcon = (change?: number) => {
    if (!change) return <Minus className="h-3 w-3" />;
    if (change > 0) return <TrendingUp className="h-3 w-3 text-green-600" />;
    return <TrendingDown className="h-3 w-3 text-red-600" />;
  };

  const getTrendColor = (change?: number): "default" | "secondary" | "destructive" | "outline" => {
    if (!change) return 'secondary';
    return change > 0 ? 'default' : 'destructive';
  };

  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
            >
              <div className="flex-1">
                <span className="text-sm font-medium text-foreground">
                  {item.category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">
                  {redacted ? '—' : formatCurrency(item.amount, item.currency)}
                </span>
                {!redacted && showChange && item.change !== undefined && (
                  <Badge
                    variant={getTrendColor(item.change)}
                    className="flex items-center gap-1 text-xs"
                  >
                    {getTrendIcon(item.change)}
                    {formatChange(item.change)}
                  </Badge>
                )}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between pt-3 border-t-2 border-border">
            <span className="text-base font-bold text-foreground">Total {title}</span>
            <span className="text-base font-bold text-foreground">
              {redacted ? '—' : formatCurrency(total, items[0]?.currency || 'INR')}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}