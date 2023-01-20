import { defineComponent } from "vue";

import styles from "@/components/Expenses/Expenses.module.scss";

import type { Expense } from "@/models";
import { Card } from "@/components/common";
import ExpenseList from "@/components/Expenses/ExpenseList/ExpenseList";

const Expenses = defineComponent({
  props: {
    expenses: {
      type: Array<Expense>,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    return () => (
      <Card className={styles["expenses"]}>
        <ExpenseList expenses={props.expenses} />
      </Card>
    );
  },
});

export default Expenses;
