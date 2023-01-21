import { defineComponent } from "vue";

import { DUMMY_YEAR_OPTIONS } from "@/data";
import type { Item } from "@/models";

import styles from "@/components/Expenses/ExpenseFilter/ExpenseFilter.module.scss";

const NewExpense = defineComponent({
  props: {
    selected: {
      type: String,
      default: () => {
        return "2022";
      },
    },
    onFilterChange: {
      type: Function,
      default: () => {
        return () => {};
      },
    },
  },
  setup(props) {
    const years: Array<Item> = DUMMY_YEAR_OPTIONS;

    function handleChangeFilter(event: Event) {
      props.onFilterChange((event.target as HTMLSelectElement).value);
    }

    return () => (
      <div className={styles["expenses-filter"]}>
        <div className={styles["expenses-filter__control"]}>
          <label htmlFor="year">Filter By Year</label>
          <select
            id="year"
            value={props.selected}
            onChange={handleChangeFilter}
          >
            {years.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  },
});

export default NewExpense;
