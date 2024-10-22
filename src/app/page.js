import ChatBox from "../../components/ChatBox";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {}
        <ChatBox />
      </main>
    </div>
  );
}
