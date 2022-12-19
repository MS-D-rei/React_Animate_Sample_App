import styles from '@/components/Modal/Modal.module.css';

export default function Modal() {
  return (
    <div>
      <h1 className={styles.Modal}>Modal</h1>
      <button className={styles.Button}>Dismiss</button>
    </div>
  );
}
