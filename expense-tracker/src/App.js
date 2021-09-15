import React from 'react';
//components
import ExpenseItemsContainer from './components/Expenses/ExpenseItemsContainer';
import NewExpense from './components/NewExpenses/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
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

  // lifting state up from NewExpense
  const addNewExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <ExpenseItemsContainer items={expenses} classes />
    </div>
  );
}

export default App;
