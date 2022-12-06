import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!')
    console.log(title);
    // props.title.
  };

  const [amount, setAmount] = useState(props.amount);
  const ChangeAmount=()=>{
    setAmount(100)
    console.log(amount);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={ChangeAmount}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;
