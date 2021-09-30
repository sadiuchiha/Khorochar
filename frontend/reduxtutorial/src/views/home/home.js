import React from "react";
import ExpenseList from "../../components/expense-list/expenseList";
import TopFold from "../../components/topfold/topfold";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
}
