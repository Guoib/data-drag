import { observer } from "mobx-react-lite";
import styles from "./index.module.scss";
import { chartStore } from "@model";
import MenuItem from "./MenuItem";

const SideMenu: React.FC = observer(() => {
  const { charts } = chartStore;

  return (
    <section className={styles.sideMenu}>
      {charts.map((item) => (
        <MenuItem
          key={item.name}
          info={item}
        />
      ))}
    </section>
  );
});

export default SideMenu;
