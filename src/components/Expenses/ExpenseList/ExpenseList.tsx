import styles from "@/components/Expenses/ExpenseList/ExpenseList.module.scss";

import type { Expense } from "@/models";
import ExpenseItem from "@/components/Expenses/ExpenseItem/ExpenseItem";

interface Props {
  expenses: Array<Expense>;
}

const ExpenseList = (props: Props) => {
  return (
    <div className={styles["expenses-list"]}>
      {props.expenses.map((expense: Expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
