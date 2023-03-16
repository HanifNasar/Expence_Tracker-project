import { useState } from "react";
import TransactionList from './TransactionList'
import './ExpenseTracker.css'
  
const ExpenseTracker = () => {
  const [expense, setExpense] = useState();
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");

  const clickHandler = (e) => {
    let today = new Date();
    let time =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      "T" +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds() +
      "." +
      today.getMilliseconds() +
      "Z";

    if(expense > 0){
      if (e.target.innerText === "Add") {
        setBalance((prev) => prev + (+expense));
        setExpense("");
      } else if (e.target.innerText === "Remove"){
        setBalance((prev) => prev - expense);
        setExpense("");
      }
      setTransactions([
      ...transactions,
      {
        time: time,
        expense: expense,
        type: e.target.innerText
      }
    ]);
    setError('')
  }else{
    setError('please enter amount')
  }
  
};
return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <h4>Balance: {balance}</h4>
      <div>
        <p className="p">{error}</p>
        <input
          type="number"
          placeholder="amount"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <div>
          <button onClick={(e) => clickHandler(e)}>Add</button>
          <button onClick={(e) => clickHandler(e)}>Remove</button>
        </div>
      </div>
      <div>
      <TransactionList transactions={transactions}/>
      </div>
    </div>
  );
}

export default ExpenseTracker