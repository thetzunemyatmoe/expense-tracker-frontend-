import React from 'react'

interface Insight {
  summary: string;
  topCategories: string[];
  unusual: string;
  tips: string[];
};

interface SpendingInsightProps {
  insight: Insight;
}

const SpendingInsight = ({insight}: SpendingInsightProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white space-y-4">
      {/* Header */}
      <div>
        <p className="text-sm text-neutral-500">Spending Insights</p>
        <h2 className="text-2xl font-bold mt-1">Overview</h2>
      </div>

      {/* Summary */}
      <p className="text-sm text-neutral-700 leading-relaxed">
        {insight.summary}
      </p>

      {/* Top Categories */}
      <div>
        <p className="text-sm font-medium text-neutral-600 mb-2">
          Top Categories
        </p>
        <div className="flex flex-wrap gap-2">
          {insight.topCategories.map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 text-xs rounded-md bg-neutral-100 text-neutral-700 font-medium"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Unusual Spending */}
      <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
        <p className="text-sm font-medium text-amber-800 mb-1">
          Unusual Activity
        </p>
        <p className="text-sm text-amber-700">
          {insight.unusual}
        </p>
      </div>

      {/* Tips */}
      <div>
        <p className="text-sm font-medium text-neutral-600 mb-2">
          Suggestions
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700">
          {insight.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SpendingInsight