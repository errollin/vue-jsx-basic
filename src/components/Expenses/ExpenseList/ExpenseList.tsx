import styles from "@/components/Expenses/ExpenseList/ExpenseList.module.scss";

import type { Expense } from "@/models";
import ExpenseItem from "@/components/Expenses/ExpenseItem/ExpenseItem";

interface Props {
  expenses: Array<Expense>;
}

const ExpenseList = (props: Props) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className={styles["expenses-list__fallback"]}>No Expenses Found!</h2>
    );
  }

  return (
    <ul className={styles["expenses-list"]}>
      {props.expenses.map((expense: Expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
