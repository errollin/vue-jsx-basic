import { defineComponent, reactive, toRefs } from "vue";

import styles from "@/components/NewExpense/ExpenseForm/ExpenseForm.module.scss";

import type { Expense } from "@/models";

const ExpenseForm = defineComponent({
  setup(props, ctx) {
    const state = reactive<{ title: string; amount: string; date: string }>({
      title: "",
      amount: "",
      date: "",
    });

    const { title, amount, date } = toRefs(state);

    function onSubmit(event: Event) {
      event.preventDefault();

      const expenseData: Expense = {
        title: title.value,
        amount: +amount.value,
        date: new Date(date.value),
      };

      ctx.emit("expenseDataSave", expenseData);
    }

    function onCancel() {
      ctx.emit("expenseDataCancelSave");
    }

    return () => (
      <form onSubmit={onSubmit}>
        <div className={styles["new-expense__controls"]}>
          <div className={styles["new-expense__control"]}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" required vModel={title.value} />
          </div>
          <div className={styles["new-expense__control"]}>
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              min="0.01"
              step="0.01"
              vModel={amount.value}
            />
          </div>
          <div className={styles["new-expense__control"]}>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              min="2022-01-01"
              max="2023-12-31"
              required
              vModel={date.value}
            />
          </div>
        </div>
        <div className={styles["new-expense__actions"]}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  },
});

export default ExpenseForm;
