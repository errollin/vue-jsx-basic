import { defineComponent } from "vue";
import type { SetupContext } from "vue";

import styles from "@/components/common/Card/Card.module.scss";

interface Props {
  class: string;
}

const Card = defineComponent({
  props: {
    className: String,
  },
  setup(props, ctx: SetupContext<{}>) {
    return () => (
      <div className={`${styles.card} ${props.className}`}>
        {ctx.slots.default && ctx.slots.default()}
      </div>
    );
  },
});

export default Card;
