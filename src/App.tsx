import { useState } from "react";
import "./App.css";
// import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 20, category: "Groceries" },
    { id: 3, description: "ccc", amount: 30, category: "Groceries" },
    { id: 4, description: "ddd", amount: 40, category: "Groceries" },
  ]);

  return (
    <div className="App">
      {/* <Form /> */}
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => console.log(category)} />
      </div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
