import React, { useState } from 'react';
//styles
import './NewExpenseForm.css';

const NewExpenseForm = () => {
  //states
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // other way (1 state)
  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  */
  //handlers
  const titleChangeHandler = (e) => {
    // when multiple states
    setEnteredTitle(e.target.value);

    // Other way when 1 state
    /*
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: e.target.value,
      };
    });
    */
  };
  const amountChangeHandler = (e) => {
    // when multiple states
    setEnteredAmount(e.target.value);

    // Other way when 1 state
    /*
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value,
      };
    });
    */
  };
  const dateChangeHandler = (e) => {
    // when multiple states
    setEnteredDate(e.target.value);

    // Other way when 1 state
    /*
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: e.target.value,
      };
    });
    */
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseFormData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log('data', expenseFormData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
