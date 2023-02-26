import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const [showForm, setFormStatus] = useState(false);

  
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submithandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        setFormStatus(false);
    }

    const expenseFormhandler = () => {
        let toggle = !showForm
        setFormStatus(toggle);
    }

    return(
       <div>
            {showForm && (
                <form onSubmit={submithandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={expenseFormhandler}> Cancel </button>
                    <button type = "submit"> Add Expense </button>
                </div>
            </form>
            )}
            {!showForm && (
                <div>
                    <button onClick={expenseFormhandler}> Add New Expense </button>
                </div>
            )}
       </div>
    );
}

export default ExpenseForm;