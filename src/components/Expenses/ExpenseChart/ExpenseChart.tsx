import { defineComponent, computed } from "vue";

import styles from "@/components/Expenses/ExpenseChart/ExpenseChart.module.scss";

import type { Expense, Item } from "@/models";
import Chart from "@/components/Chart/Chart";

const ExpenseChart = defineComponent({
  props: {
    expenses: {
      type: Array<Expense>,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    const chartDataPoints = computed<Array<Item>>(() => {
      const chartDataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
      ];
      for (const expense of props.expenses) {
        // starting at 0 => January
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
      }
      return chartDataPoints;
    });

    return () => (
      <div className={styles["expense-chart"]}>
        <Chart dataPoints={chartDataPoints.value} />
      </div>
    );
  },
});

export default ExpenseChart;
