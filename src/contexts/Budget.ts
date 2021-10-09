import React from "react";

export type BudgetItemType = {
  description: string;
  quantity: number;
  total: number;
};

export type BudgetType = {
  companyName: string;
  customerName: string;
  items: BudgetItemType[];
  obs: string;
};

export const budget: BudgetType = {
  companyName: "",
  customerName: "",
  items: [{
      description: '',
      quantity: 0,
      total: 0
  }],
  obs: "",
};

export type BudgetContextType = {
  budget: BudgetType;
  setBudget?: React.Dispatch<React.SetStateAction<BudgetType>>;
};

export const BudgetContext = React.createContext<BudgetContextType>({
  budget,
});
