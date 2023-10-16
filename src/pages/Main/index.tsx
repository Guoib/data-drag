import { observer } from "mobx-react-lite";
import SideMenu from "./SideMenu";
import Content from "./Content";
import styles from "./index.module.scss";

const Main: React.FC = observer(() => {
  return (
    <section className={styles.wrapper}>
      <SideMenu />
      <Content />
    </section>
  );
});

export default Main;
