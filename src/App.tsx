import { useState } from "react";
import "./App.css";
// import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "ccc", amount: 30, category: "Groceries" },
    { id: 4, description: "ddd", amount: 40, category: "Entertainment" },
  ]);

  const visibleExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="App">
      {/* <Form /> */}
      <div className="mb-3">
        <ExpenseForm />
      </div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      <div className="mb-3">
        <ExpenseList
          expenses={visibleExpense}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
}

export default App;
