import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from './Card'
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <ExpenseDetails amount={props.amount} title={props.title} /> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
