import React, { useState } from 'react';
//components
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
//styles
import './ExpenseItemsContainer.css';
import ExpensesFilter from './ExpensesFilter';

const ExpenseItemsContainer = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onFilterDateChange={filterChangeHandler}
        selected={filteredYear}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseItemsContainer;
