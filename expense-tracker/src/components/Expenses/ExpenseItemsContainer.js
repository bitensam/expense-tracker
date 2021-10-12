import React, { useState } from 'react';
//components
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
//styles
import './ExpenseItemsContainer.css';
import ExpensesFilter from './ExpensesFilter';

const ExpenseItemsContainer = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // tworzenie nowego arraya ktory zawiera przefiltrowane itemy czyli expense
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onFilterDateChange={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default ExpenseItemsContainer;
