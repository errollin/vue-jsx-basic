<script lang="tsx">
import Expenses from "@/components/Expenses/Expenses";
import { defineComponent } from "vue";

import type { Expense } from "@/models";
import { DUMMY_EXPENSES } from "@/data";

export default defineComponent({
  setup() {
    const expenses: Array<Expense> = DUMMY_EXPENSES;

    return () => (
      <>
        <Expenses expenses={expenses} />
      </>
    );
  },
});
</script>

<style lang="scss" scoped></style>
