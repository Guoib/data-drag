import { ChartInfo } from "@types";
import styles from "./index.module.scss";

interface MenuItemProps {
  info: ChartInfo;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { info } = props;

  return <div className={styles.menuItem}>{info.name}</div>;
};

export default MenuItem;
