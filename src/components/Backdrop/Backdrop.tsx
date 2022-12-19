import styles from '@/components/Backdrop/Backdrop.module.css';

interface BackdropProps {
  isOpen: boolean;
  close: () => void;
}

export default function Backdrop({ isOpen, close }: BackdropProps) {
  const BackdropStyles = [
    styles.Backdrop,
    isOpen ? styles.BackdropOpen : styles.BackdropClosed,
  ].join(' ');

  return <div className={BackdropStyles} onClick={close}></div>;
}
