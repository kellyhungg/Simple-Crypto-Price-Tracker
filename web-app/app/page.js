import styles from "./page.module.css";
import CryptoDashboard from './components/CryptoDashboard'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Crypto Dashboard</h1>
      <CryptoDashboard />
    </div>
  );
}
