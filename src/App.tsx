import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import Backdrop from '@/components/Backdrop/Backdrop';
import List from '@/components/List/List';
import './App.css';
import buttonStyle from '@/components/UI/Button.module.css'
import Button from '@/components/UI/Button';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      {isModalOpen && <Modal />}
      {isModalOpen && <Backdrop />}
      {/* <button className='Button' onClick={toggleModalHandler}>Open Modal</button> */}
      <Button className='BaseButton' onClick={toggleModalHandler}>Open Modal</Button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}
