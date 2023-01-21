import { defineComponent, computed } from "vue";

import styles from "@/components/Chart/ChartBar/ChartBar.module.scss";

import type { Item } from "@/models";

const ChartBar = defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const barFillHeight = computed<string>(() => {
      let barFillHeight = "0%";

      if (props.maxValue > 0) {
        barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
      }

      return barFillHeight;
    });

    return () => (
      <div className={styles["chart-bar"]}>
        <div className={styles["chart-bar__inner"]}>
          <div
            className={styles["chart-bar__fill"]}
            style={{ height: barFillHeight.value }}
          ></div>
        </div>
        <div className={styles["chart-bar__label"]}>{props.label}</div>
      </div>
    );
  },
});

export default ChartBar;
