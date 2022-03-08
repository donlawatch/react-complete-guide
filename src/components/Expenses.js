import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map(({ id, title, date, amount }) => {
        return (
          <ExpenseItem key={id} title={title} date={date} amount={amount} />
        );
      })}
    </Card>
  );
}

export default Expenses;
