import styles from '@/components/List/List.module.css';
import { useState } from 'react';
import Button from '../UI/Button';

export default function List() {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => prevState.concat(prevState.length + 1));
  };

  const removeItemHandler = (removeItemIndex: number) => {
    setItems((prevState) =>
      prevState.filter((item, index) => index !== removeItemIndex)
    );
  };

  return (
    <div>
      <Button className='BaseButton' onClick={addItemHandler}>Add Item</Button>
      <p>Click Item to Remove</p>
      <ul className={styles.List}>
        {items.map((item, index) => (
          <li
            className={styles.ListItem}
            key={index}
            onClick={() => removeItemHandler(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
