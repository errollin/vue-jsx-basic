<script lang="tsx">
import { defineComponent, reactive, toRefs } from "vue";

import type { Expense } from "@/models";
import { DUMMY_EXPENSES } from "@/data";

import Expenses from "@/components/Expenses/Expenses";
import NewExpense from "@/components/NewExpense/NewExpense";

export default defineComponent({
  setup() {
    const state = reactive<{ expenses: Array<Expense> }>({
      expenses: DUMMY_EXPENSES,
    });

    const { expenses } = toRefs(state);

    function handleAddExpense(expense: Expense) {
      expenses.value.unshift(expense);
    }

    return () => (
      <>
        <NewExpense onExpenseAdd={handleAddExpense} />
        <Expenses expenses={expenses.value} />
      </>
    );
  },
});
</script>

<style lang="scss" scoped></style>
