export interface ExpenseAPI {
  id: number;
  title: string;
  amount: number;
  category: string;
  addedAt: string; 
  userId: number
}

export interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  addedAt: Date; 
  userId: number
}