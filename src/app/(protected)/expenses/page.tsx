import { Expense } from "@/types/expense-types";
import ExpenseTabs from "./components/ExpenseTabs";
import { getExpenseList } from "@/lib/getExpenseList";

export default async function ExpenseListPage() {
  // const expenseList = await getExpenseList();

  const expenseList: Expense[] = [
  // ===== LAST WEEK (within 7 days) =====
  {
    id: 1,
    title: "Groceries — Aldi",
    amount: 32.45,
    category: "GROCERIES",
    addedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    userId: 1,
  },
  {
    id: 2,
    title: "Cinema Ticket",
    amount: 12.99,
    category: "LEISURE",
    addedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    userId: 1,
  },
  {
    id: 3,
    title: "Pharmacy — Vitamin C",
    amount: 8.5,
    category: "HEALTH",
    addedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
    userId: 1,
  },
  {
    id: 4,
    title: "Coffee Shop",
    amount: 4.75,
    category: "OTHERS",
    addedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    userId: 1,
  },

  // ===== LAST MONTH (7–30 days ago) =====
  {
    id: 5,
    title: "Electricity Bill",
    amount: 58.2,
    category: "UTILITIES",
    addedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    userId: 1,
  },
  {
    id: 6,
    title: "Clothing — Hoodie",
    amount: 45.0,
    category: "CLOTHING",
    addedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    userId: 1,
  },
  {
    id: 7,
    title: "Nintendo Switch Game",
    amount: 39.99,
    category: "ELECTRONICS",
    addedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), // 20 days ago
    userId: 1,
  },
  {
    id: 8,
    title: "Uber Ride",
    amount: 17.4,
    category: "OTHERS",
    addedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000), // 25 days ago
    userId: 1,
  },

  // ===== LAST 3 MONTHS (30–90 days ago) =====
  {
    id: 9,
    title: "Gym Membership",
    amount: 29.99,
    category: "HEALTH",
    addedAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000), // 40 days ago
    userId: 1,
  },
  {
    id: 10,
    title: "Groceries — Tesco",
    amount: 46.15,
    category: "GROCERIES",
    addedAt: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000), // 55 days ago
    userId: 1,
  },
  {
    id: 11,
    title: "Laptop Mouse",
    amount: 19.99,
    category: "ELECTRONICS",
    addedAt: new Date(Date.now() - 70 * 24 * 60 * 60 * 1000), // 70 days ago
    userId: 1,
  },
  {
    id: 12,
    title: "Streaming Subscription",
    amount: 7.99,
    category: "LEISURE",
    addedAt: new Date(Date.now() - 85 * 24 * 60 * 60 * 1000), // 85 days ago
    userId: 1,
  },
];

  return <ExpenseTabs expenseList={expenseList} />;
}
