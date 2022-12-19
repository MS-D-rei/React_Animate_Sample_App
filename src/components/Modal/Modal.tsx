import styles from '@/components/Modal/Modal.module.css';
import Button from '../UI/Button';

interface ModalProps {
  isOpen: boolean;
  close: () => void;
}

export default function Modal({ isOpen, close }: ModalProps) {
  const modalStyles = [
    styles.Modal,
    isOpen ? styles.ModalOpen : styles.ModalClosed,
  ].join(' ');
  return (
    <div className={modalStyles}>
      <h1>Modal</h1>
      {/* <button className={styles.Button}>Dismiss</button> */}
      <Button className="BaseButton" onClick={close}>
        Dismiss
      </Button>
    </div>
  );
}
