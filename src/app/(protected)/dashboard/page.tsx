import { filterBasedOnDate } from '@/lib/date-filerting';
import { getExpenseList } from '@/lib/fetch-expense';
import MonthlyTotalSpent from './components/MonthlyTotalSpent';
import TotalTransactions from './components/TotalTransactions';
import HighestExpese from './components/HighestExpese';
import { generateInsight } from '@/lib/ai';
import CategoryBreakdown from './components/CategoryBreakdown';
import { Expense } from '@/types/expense-types';
import SpendingInsight from './components/SpendingInsight';

const DashboardPage = async () => {

  // Get the list of spending this month

  const expenseList = await getExpenseList();
  const expenseLastMonth = filterBasedOnDate(expenseList, 30);


  // TODO : Uncomment
  const list_of_expense: Expense[] = [
  {
    id: 1,
    title: "Supermarket",
    amount: 42.75,
    category: "GROCERIES",
    addedAt: new Date("2026-01-12"),
    userId: 1,
  },
  {
    id: 2,
    title: "Cinema",
    amount: 15.0,
    category: "LEISURE",
    addedAt: new Date("2026-01-14"),
    userId: 1,
  },
  {
    id: 3,
    title: "Headphones",
    amount: 89.99,
    category: "ELECTRONICS",
    addedAt: new Date("2026-01-16"),
    userId: 1,
  },
  {
    id: 4,
    title: "Electricity Bill",
    amount: 64.3,
    category: "UTILITIES",
    addedAt: new Date("2026-01-18"),
    userId: 1,
  },
  {
    id: 5,
    title: "Jacket",
    amount: 120.0,
    category: "CLOTHING",
    addedAt: new Date("2026-01-20"),
    userId: 1,
  },
  {
    id: 6,
    title: "Pharmacy",
    amount: 23.4,
    category: "HEALTH",
    addedAt: new Date("2026-01-22"),
    userId: 1,
  },
  {
    id: 7,
    title: "Spotify Subscription",
    amount: 9.99,
    category: "OTHERS",
    addedAt: new Date("2026-01-24"),
    userId: 1,
  },
  {
    id: 8,
    title: "Coffee",
    amount: 4.5,
    category: "LEISURE",
    addedAt: new Date("2026-01-26"),
    userId: 1,
  },
  {
    id: 9,
    title: "Internet Bill",
    amount: 39.99,
    category: "UTILITIES",
    addedAt: new Date("2026-01-28"),
    userId: 1,
  },
  {
    id: 10,
    title: "Groceries (Top-up)",
    amount: 18.2,
    category: "GROCERIES",
    addedAt: new Date("2026-01-30"),
    userId: 1,
  },
];

  // AI
  // const insight = await generateInsight(list_of_expense);
  const insight = {
  summary: 'The overall spending shows a balanced approach with notable expenses in groceries and clothing. Leisure activities also contribute significantly to the total spending.',
  topCategories: [ 'GROCERIES', 'UTILITIES', 'CLOTHING' ],
  unusual: 'The purchase of headphones for $89.99 and a jacket for $120 could be considered irregular compared to other expenses.',
  tips: [
    'Consider reducing leisure expenses by limiting cinema visits or opting for streaming services at home.',
    'Evaluate clothing purchases and consider a budget for necessary items only.',
    'Look for discounts or alternatives for groceries to save on regular shopping.'
  ]
}


  

  return (
    <div className="flex flex-col gap-6 p-6">

      <SpendingInsight insight={insight}/>

  {/* ⭐ AI Insights Widget (placeholder for later) */}
  

  {/* ⭐ Summary Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Total Spent */}
    <MonthlyTotalSpent expenseList={expenseLastMonth}/>

    {/* Transactions Count */}
    <TotalTransactions expenseList={expenseList}/>
    
    {/* Highest Expense */}
    <HighestExpese expenseList={expenseList}/>
  </div>

  {/* ⭐ Charts Row */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

    {/* Category Breakdown Chart */}
    <CategoryBreakdown expenseList={expenseList}/>

    <div className="border rounded-lg p-4 shadow-sm bg-white h-[350px]">
      <h3 className="text-lg font-semibold mb-2">Spending Trend (Last 30 Days)</h3>
      <div className="flex items-center justify-center h-full text-neutral-400">
        (Line chart goes here)
      </div>
    </div>

  </div>

  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <h3 className="text-lg font-semibold mb-3">Recent Expenses</h3>

    <div className="border rounded-md overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-neutral-100">
          <tr>
            <th className="text-left p-2 font-medium">Date</th>
            <th className="text-left p-2 font-medium">Title</th>
            <th className="text-left p-2 font-medium">Category</th>
            <th className="text-right p-2 font-medium">Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-2 text-neutral-400">—</td>
            <td className="p-2 text-neutral-400">No recent expenses</td>
            <td className="p-2 text-neutral-400">—</td>
            <td className="p-2 text-right text-neutral-400">—</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

  )
}

export default DashboardPage