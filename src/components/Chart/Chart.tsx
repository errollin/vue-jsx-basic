import styles from "@/components/Chart/Chart.module.scss";

import type { Item } from "@/models";
import ChartBar from "@/components/Chart/ChartBar/ChartBar";

interface Props {
  dataPoints: Array<Item>;
}

const Chart = (props: Props) => {
  const totalMaximum = props.dataPoints
    .map((dataPoint) => {
      return +dataPoint.value;
    })
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);

  return (
    <div className={styles["chart"]}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={+dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
