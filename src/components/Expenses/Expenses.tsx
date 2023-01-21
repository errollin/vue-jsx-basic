import { defineComponent, reactive, toRefs, watchEffect } from "vue";

import styles from "@/components/Expenses/Expenses.module.scss";

import type { Expense } from "@/models";
import { Card } from "@/components/common";
import ExpenseList from "@/components/Expenses/ExpenseList/ExpenseList";
import ExpenseFilter from "@/components/Expenses/ExpenseFilter/ExpenseFilter";
import ExpenseChart from "@/components/Expenses/ExpenseChart/ExpenseChart";

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
    const state = reactive<{
      filteredYear: string;
      filteredExpenses: Array<Expense>;
    }>({
      filteredYear: "2022",
      filteredExpenses: [],
    });

    const { filteredYear, filteredExpenses } = toRefs(state);

    watchEffect(() => {
      filteredExpenses.value = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear.value;
      });
    });

    function handleFilterChange(selectedYear: string) {
      filteredYear.value = selectedYear;
    }

    return () => (
      <Card className={styles["expenses"]}>
        <ExpenseFilter
          selected={filteredYear.value}
          onFilterChange={handleFilterChange}
        />
        <ExpenseChart expenses={filteredExpenses.value} />
        <ExpenseList expenses={filteredExpenses.value} />
      </Card>
    );
  },
});

export default Expenses;
