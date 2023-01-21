import { defineComponent, ref } from "vue";

import styles from "@/components/NewExpense/NewExpense.module.scss";

import type { Expense } from "@/models";
import { Card } from "@/components/common";
import ExpenseForm from "@/components/NewExpense/ExpenseForm/ExpenseForm";

const NewExpense = defineComponent({
  props: {
    onExpenseAdd: {
      type: Function,
      default: () => {
        return () => {};
      },
    },
  },
  setup(props) {
    const isEditing = ref<boolean>(false);

    function handleSaveExpenseData(enteredExpenseData: Expense) {
      const expenseData: Expense = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onExpenseAdd(expenseData);
      handleStopEditing();
    }

    function handleStartEditing() {
      isEditing.value = true;
    }

    function handleStopEditing() {
      isEditing.value = false;
    }

    return () => (
      <Card className={styles["new-expense"]}>
        {!isEditing.value && (
          <button onClick={handleStartEditing}>Add New Expense</button>
        )}
        {isEditing.value && (
          <ExpenseForm
            onExpenseDataSave={handleSaveExpenseData}
            onExpenseDataCancelSave={handleStopEditing}
          />
        )}
      </Card>
    );
  },
});

export default NewExpense;
