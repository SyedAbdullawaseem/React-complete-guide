// import logo from "./logo.svg";
// import "./App.css";

// import ExpenseItem from "./components/ExpenseItem";
// import { isContentEditable } from "@testing-library/user-event/dist/utils";
// import NewExpense from "./components/NewExpense";

// function App() {
//   const expenses = [
//     {
//       id: "e1",
//       title: "Toilet Paper",
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//       LocationOfExpenditure: "India",
//     },
//     {
//       id: "e2",
//       title: "New TV",
//       amount: 799.49,
//       date: new Date(2021, 2, 12),
//       LocationOfExpenditure: "Pakistan",
//     },
//     {
//       id: "e3",
//       title: "Car Insurance",
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//       LocationOfExpenditure: "Saudi",
//     },
//     {
//       id: "e4",
//       title: "New Desk (Wooden)",
//       amount: 450,
//       date: new Date(2021, 5, 12),
//       LocationOfExpenditure: "Canada",
//     },
//   ];

//   const addExpenseHandler = (expense) => {
//     console.log("In App.js");
//     console.log(expense);
//   };

//   return (
//     <div>
//       <NewExpense on AddExpense={addExpenseHandler} />
//       <h1>Expense Items</h1>
//       <ExpenseItem
//         title={expenses[0].title}
//         amount={expenses[0].amount}
//         date={expenses[0].date}
//         LocationOfExpenditure={expenses[0].LocationOfExpenditure}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={expenses[1].title}
//         amount={expenses[1].amount}
//         date={expenses[1].date}
//         LocationOfExpenditure={expenses[1].LocationOfExpenditure}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={expenses[2].title}
//         amount={expenses[2].amount}
//         date={expenses[2].date}
//         LocationOfExpenditure={expenses[2].LocationOfExpenditure}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={expenses[3].title}
//         amount={expenses[3].amount}
//         date={expenses[3].date}
//         LocationOfExpenditure={expenses[3].LocationOfExpenditure}
//       ></ExpenseItem>
//     </div>
//   );
// }

// export default App;

import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
